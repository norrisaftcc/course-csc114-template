# 90_reused — Pointer To The Canonical Sacred Flow Reference

This folder holds **reused** material — things this corpus depends on but did not
author. Per course convention, we point at the source of truth rather than
copy-pasting it (a copy drifts; a pointer doesn't).

## The canonical Sacred Flow walkthrough

The full, detailed Sacred Flow reference — what each step is, *why* it exists, the
Issue/branch/commit/PR/merge conventions, and the "when the flow breaks" recovery
table — lives at:

> **`assignments/week-02/csc114-week-02-corpus/student-week-02/90_reused/sacred_flow_walkthrough.md`**
> (relative to the repo root)

That document is the authority on the Flow *done by hand.* Read it when you want
to understand why a step exists, or when git breaks and you need to debug.

## What's reused vs. new in this corpus

| | Where it lives | What it is |
|---|---|---|
| **Reused** | `…/student-week-02/90_reused/sacred_flow_walkthrough.md` | The canonical, by-hand Sacred Flow reference. Unchanged. |
| **New** | [`../10_concepts/the_flow_on_autopilot.md`](../10_concepts/the_flow_on_autopilot.md) | The Flow run *by an agent* over the same `gh`/`git` substrate. |
| **New** | [`../10_concepts/human_in_the_loop.md`](../10_concepts/human_in_the_loop.md) | Why the merge gate stays human; the agent-as-junior framing. |
| **New** | [`../20_lab/run_the_flow_three_clis.md`](../20_lab/run_the_flow_three_clis.md) | The same task driven through all three CLIs. |
| **New** | [`../CLAUDE.md`](../CLAUDE.md) / [`../AGENTS.md`](../AGENTS.md) / [`../GEMINI.md`](../GEMINI.md) | Per-CLI memory files that make an agent *execute* the Flow. |

**The relationship:** the reused walkthrough teaches the Flow you do **by hand**.
Everything new in this corpus teaches how to hand the *mechanical* half of that
same Flow to a coding agent — while keeping the merge, exactly as the walkthrough
describes it, human. Nothing about the workflow changes; only who types it.
