---
title: "Implementing Raft From the Paper: Notes on Leader Election"
date: "2026-03-05"
excerpt: "Starting a from-scratch Raft implementation to actually understand consensus, not just read about it. First stop: leader election."
tags: ["Distributed Systems", "Raft", "Self-Study"]
status: "in-progress"
---

I've read the Raft paper more than once, and I could describe leader election, log replication, and the safety argument well enough to pass a conversation about it. That's a different thing from having built any of it, and I wanted to close that gap rather than keep collecting more papers to read. This is the first checkpoint: leader election, working, on my own implementation.

## Why implement it instead of just reading more

Reading gives you the shape of an idea. Implementing forces you to answer the questions the paper doesn't spell out in code — what actually happens when two nodes both think they should be a candidate at the same moment, what your timers are actually measuring, what "reset the election timeout" means in terms of real code paths and not just prose. Those are exactly the details that separate understanding an algorithm from being able to reason about it under a follow-up question.

## Where I am

Currently working: a set of nodes that start as followers, time out in the absence of a heartbeat, promote themselves to candidates, request votes from their peers, and correctly settle on a single leader per term — including handling the case where an election is split and has to restart with a new, randomized timeout.

The part I underestimated: how much of the correctness lives in the *randomization* of the election timeout, not the voting logic itself. Without enough randomness in the timeout range, multiple nodes reliably time out together and split the vote every single round, and you get an infinite loop of failed elections that all look individually correct. Fixing that wasn't a logic bug fix — it was a "read the paper's actual numbers more carefully" fix.

## What's next

Log replication is the next piece — followers accepting and committing entries from the leader, and the leader tracking which entries have quorum. After that: handling the failure and recovery cases that make Raft worth implementing in the first place, rather than a toy that only works when nothing goes wrong.

I'll post an update when log replication is in a state worth writing about. For now, this is deliberately a note on where the implementation actually is, not a claim about where it's headed.
