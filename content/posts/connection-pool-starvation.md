---
title: "Diagnosing a Production Freeze: Connection Pool Starvation Across Service Boundaries"
date: "2026-06-02"
excerpt: "A one-hour production freeze, traced back to a transaction that outlived its own database connection."
tags: ["Java", "Spring Boot", "Production"]
status: "shipped"
---

A backend platform I own froze for over an hour. Requests weren't erroring out — they were just hanging, which is a worse signal than a clean failure, because nothing in the logs screams at you. Here's how I traced it, and the pattern I now watch for by default.

## The symptom

The platform coordinates a relational database, a couple of external APIs, and a data-virtualization layer, all within the same request in some code paths. Under load, new requests started queuing indefinitely. No exceptions. No obvious errors. Just requests that never came back.

## The trace

The first real clue was in the connection pool metrics: active connections pinned at the pool's max, and none of them cycling back to idle. That's the signature of connections being held, not leaked — leaked connections show up as a slow climb over hours or days; this was an instant wall.

Working backward from there, the pattern was: a `@Transactional` method that, partway through, made a call out to an external service over the wire. The transaction was still open — and holding its database connection — for the entire duration of that external call. Under normal latency, this is invisible. Under any slowdown on the external side (which is exactly what happened), every one of those in-flight requests sat there holding a connection hostage, and the pool ran out of connections for anyone else.

```text
[ BEFORE: Connection Starvation under External Latency ]
Request Thread ──► [ @Transactional begins ] ──► [ DB Connection checked out from HikariCP ]
                                                        │
                                                        ▼
                                       [ External API / Denodo Call (60s+ slowdown) ]
                                       ▲ Connection held IDLE & hostage during I/O
                                                        │
                                                        ▼
                                       [ Fast 2ms DB Save ] ──► [ Release Connection ]
```

## Why this is easy to write and easy to miss

The code reads perfectly reasonably in isolation:

```java
@Transactional
public void processRecord(Record r) {
    var enriched = externalClient.fetchDetails(r.id()); // network call, still inside the tx
    repository.save(merge(r, enriched));
}
```

Nothing here looks wrong. The bug isn't in any single line — it's in the *scope* of the transaction. `@Transactional` doesn't know or care that you made a network call in the middle of it; it just keeps the connection checked out for as long as the method runs.

## The fix

Separate the three concerns explicitly instead of letting one annotation cover all of them:

```text
[ AFTER: Isolated Transaction Boundary ]
Request Thread ──► [ External API / Denodo Call (No DB connection checked out) ]
                               │
                               ▼
                   [ @Transactional saveEnriched() ]
                               │
                               ▼ (Connection checked out for ~2ms ONLY)
                   [ Fast DB Save ] ──► [ Immediate Release back to Pool ]
```

```java
public void processRecord(Record r) {
    var enriched = externalClient.fetchDetails(r.id()); // no transaction held here
    saveEnriched(r, enriched); // short, isolated transaction
}

@Transactional
public void saveEnriched(Record r, EnrichedData enriched) {
    repository.save(merge(r, enriched));
}
```

The external call now happens with no database connection checked out at all. The transaction that follows is short, focused only on the write, and releases its connection almost immediately.

## The generalizable lesson

Any time a `@Transactional` boundary wraps a network call to something you don't control, you've made your database connection pool's health dependent on that external system's latency. That's rarely the tradeoff you meant to make. The fix is almost always the same shape: pull I/O to other systems outside the transaction, and keep the transactional boundary as narrow as the actual database write requires.

I now treat "does this transaction make a network call?" as a standing question during review, not just something I check after an incident teaches it to me the hard way.
