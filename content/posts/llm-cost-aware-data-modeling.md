---
title: "Designing Data Models to Minimize LLM Inference Cost"
date: "2026-04-18"
excerpt: "Some early lessons from structuring data so an AI-assisted product calls the model less often, not just cheaper."
tags: ["AI", "Data Modeling", "Product"]
status: "note"
---

I've been helping build a small AI-assisted product on the side, and the question that's occupied most of my actual engineering time isn't "which model" — it's "how do we structure our data so we need the model less." That's a data modeling problem wearing an AI costume, and it's more interesting than either half alone.

## The instinct to resist

The easy default is: whenever you need something intelligent done with a piece of data, call the LLM. It works, and it's the fastest way to ship a first version. It also means your cost scales linearly with usage forever, and your latency is at the mercy of an API call for things that often don't need one.

## What actually helped

**Cache at the right granularity, not the request level.** Caching whole LLM responses only helps if the exact same input recurs, which for most real inputs it doesn't. The win came from caching at a smaller unit — the sub-piece of the problem that *does* recur across different requests — and only sending the genuinely novel remainder to the model.

**Precompute what's deterministic, and be honest about what's actually deterministic.** A surprising amount of what looked like "the model needs to figure this out" was actually a lookup, a classification with a small fixed set of outcomes, or a rule that could be written directly. The model should be doing the part that's genuinely open-ended — not re-deriving something a plain function already knows.

**Structure the schema so the model's job gets narrower over time, not wider.** Every time we normalized data more precisely up front — tighter categories, clearer relationships between records — the prompts needed to do less inference and more retrieval-and-fill. Retrieval is nearly free. Inference is not.

**Batch what can be batched.** Several small model calls in a request path are almost always more expensive and slower than one call structured to return everything needed for that path at once — the fixed overhead per call adds up faster than the token cost usually does.

## The part I'm still working through

None of this is a finished system yet — it's closer to a running list of things that turned out to matter more than the model choice did. The open question I keep circling is how far you can push "structure it so you don't need the model" before you've just quietly rebuilt a rules engine and lost the actual value of using an LLM in the first place. I don't think there's a clean answer to that yet, at least not one I've found.
