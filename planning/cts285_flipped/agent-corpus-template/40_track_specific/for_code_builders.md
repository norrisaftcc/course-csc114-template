# For Code Builders — Run The Whole Interstitial Through The Flow

**Who this is for:** you have a repo, a terminal, and a coding-agent CLI. You did
Modules 3 and 4 by hand — Issue, branch, commit, PR, merge. You felt every step.
Now you delegate the *mechanics* and keep the *judgment.*

**The headline move:** the agent opens the Issue and the PR; **you read the diff
and merge.** That line never moves. Everything below is how to run 4.5 that way —
and how to earn process credit on top of a module whose artifact is self-graded.

> One sentence to hold onto: **you're using the Flow to submit your judgment *of*
> the Flow.** That recursion isn't a gimmick. It's the rhythm for the rest of the
> course.

---

## Your path through 4.5, slot by slot

You run all four slots, but only two of them touch a real PR you merge:

| Slot | What you do | Through the Flow? |
|------|-------------|-------------------|
| **Learn** | Read `learn.md` + `10_concepts/`. No artifact. | No — reading. |
| **Practice** (retry-OK) | Point a CLI at a throwaway task; agent opens Issue + PR; **you merge**; screenshot it. Retry as much as you want. | **Yes** — and the *whole point* is feeling the agent run it. |
| **Apply** | Fill `AGENT_BRIEF.md`; have the agent draft 5–8 GWT stories + a starter design; it opens a PR for that drafting work; **you merge.** | **Yes** — a real PR you approve. |
| **Assess** (self-graded) | Write `30_assessment/self_assessment.md` judging the AI's stories + design as the customer; run it through the Flow one more time. | **Yes** — agent opens Issue + PR for the self-assessment; **you merge.** |

That last row is the recursion: the agent ships your judgment of the agent, and
you click the final merge. You are deciding, with the merge button, that your own
assessment is ready to publish.

---

## The one rule that never bends

**The agent does not merge to `main`.** It opens Issues and PRs all day. You
review and click merge. The `/ship-it` command stops before the merge on purpose;
every memory file in this corpus (`CLAUDE.md` / `AGENTS.md` / `GEMINI.md`) says
it. If your agent ever merges on its own, you over-authorized it — dial the
approvals back (Claude Code: never pre-authorize merge; Codex: stay in suggest
mode; Gemini: keep per-action approval on) and re-run on a throwaway change. See
[`../10_concepts/human_in_the_loop.md`](../10_concepts/human_in_the_loop.md).

This *is* your RSI analogue. In a normal module the instructor is the human in the
loop. Here **you are.** The screenshot of you merging is the proof you stayed in
the loop instead of rubber-stamping a bot.

---

## How process credit works on top of a self-graded artifact

The artifact in 4.5 is **self-graded and worth 0 points** — and that does not
change for you. You don't earn points for the corpus being "good"; you grade that
yourself as the customer (`assess.md`).

What you *do* earn, exactly as in every other module, is **process credit** for
running it through a real Flow:

- A real **Issue** for each piece of work (Practice slice, Apply drafting,
  Assess write-up).
- A **branch**, a clean **commit**, and a **PR** whose body starts with
  `Closes #N` and carries a short **retro paragraph**.
- The **human merge** to `main`, with the **approval screenshot** that proves it.

Process credit rides on the *cadence being real*, not on the artifact's quality.
A throwaway Practice change that goes through a proper Issue → PR → merge earns the
process credit; a brilliant corpus dropped straight onto `main` with no PR does
not. **Same deal as every other week:** Prompt Masters and Code Builders earn
identical credit on the artifact (here: zero, it's self-graded); Code Builders
earn process credit on top for running the Flow.

> Do not let "it's self-graded" tempt you into skipping the PR. The PR *is* the
> graded part for your track. The corpus is for you; the Flow is for the credit.

---

## Branch / commit / PR conventions

These match the corpus memory files exactly — your agent already knows them, so
you're checking its work, not inventing rules:

- **Issue title:** imperative, short — `Draft user stories from brief`,
  `Run throwaway flow slice`, `Add self-assessment`.
- **Branch:** lowercase, hyphens, no spaces — `draft-user-stories`,
  `practice-flow-slice`, `add-self-assessment`.
- **Commit:** present tense, lowercase, no trailing period —
  `draft user stories from agent brief` (not `Drafted stuff.`).
- **PR body:** first line `Closes #N`; then `## What's in this PR` bullets; then a
  `## Retro` paragraph (2–3 sentences: what you did, one thing to watch). The
  retro is yours to finish — `/ship-it` leaves a stub.
- **Where drafts land:** `30_assessment/draft_user_stories.md`,
  `30_assessment/draft_design.md`, `30_assessment/self_assessment.md`.

Fastest path: from inside your corpus folder, `/ship-it <one-line description>`
(Claude Code), or the Codex/Gemini equivalents in
[`../.claude/commands/ship-it.md`](../.claude/commands/ship-it.md). It runs the
whole cycle and **stops at the merge** — which is where you take over.

### Review the PR like you mean it

When you read the agent's PR, actually review it — catching something is a *good*
thing to report in your write-up, because it proves you read the output:

- Did it do what you asked, or something plausible-but-adjacent?
- Did it invent a requirement you never gave it? (For the corpus, that's the whole
  lesson — note it for Assess.)
- Is `Closes #N` there? Commit message sane? Branch named right?

A first run where you caught **nothing** usually means you didn't look hard
enough.

---

## What you turn in

Same three deliverables as Prompt Masters — you just arrive at them through the
Flow:

1. **Plain-English Flow write-up + approval screenshot** — which CLI, what it did
   (Issue #, branch, PR), and the screenshot of *you* merging. Note what the agent
   got wrong.
2. **Filled-in agent corpus** — your `AGENT_BRIEF.md` + AI-drafted stories &
   design, recorded **via approved PRs** (the merged PR links are your evidence).
3. **Customer self-assessment** (`assess.md`) — also shipped through one last PR
   you merge.

**Submit the merged PR links.** They are simultaneously your artifacts and your
process-credit evidence.

---

## Where this points next

The corpus you just shipped is the first draft of your **Module 8** capstone spec
(`AGENT_BRIEF.md` → M7 Own Product Brief; AI stories → M7 backlog; design → M7
design package). And the move you just practiced — **agent opens the PR, you
merge** — is the cadence that makes the M8 Sprint 4 build cheaper. You'll keep
clicking that merge button. It stays yours.

→ Prompt Master on this team? Read
[`for_prompt_masters.md`](for_prompt_masters.md) — same thinking, lighter
mechanics.
→ Why the merge is yours: [`../10_concepts/human_in_the_loop.md`](../10_concepts/human_in_the_loop.md)
