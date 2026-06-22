# Self-Grade Spec — You, the Customer, Grade Your Own Judgment

**Slot:** Assess (self-graded — no instructor points rubric, on purpose).
**Who this is for:** *you*. This is the checklist version of
[`module-4.5-agent-flow/assess.md`](../../module-4.5-agent-flow/assess.md). The
Assess page tells you *why* it's self-graded; this file is the **usable
checklist** you run through while you do it.

> **Read this the way you'd read it if you had to live with the result.** Not as
> the person who wrote the prompt — as the person who has to *use the thing the
> AI just specified.* That switch is the whole skill. Everything below is built
> to make you make it.

---

## What you submit (the three module deliverables)

Same three artifacts both tracks. The *path* differs; the *thinking* is
identical.

| # | Deliverable | Where it lives | Notes |
|---|---|---|---|
| 1 | Practice write-up | your repo (from the Practice slot) | the three-CLI Flow run you already did |
| 2 | Filled corpus | your repo, e.g. `my-agent-corpus/` | `AGENT_BRIEF.md` + `00_orientation/` you wrote, plus the AI's `30_assessment/draft_user_stories.md` and `draft_design.md` recorded **as-is, flaws included** |
| 3 | This self-assessment | `30_assessment/self_assessment.md` | written as the *customer*, answering the three parts below |

**How you submit:**

- **Code Builders — through the Flow.** Write `self_assessment.md`, then have
  your agent run the Flow one more time (it opens the Issue + PR; **you** review
  and merge). Submit the merged PR link. Yes — you're using the Flow to submit
  your judgment *of* the Flow. That rhythm is the point.
- **Prompt Masters — by drop.** Write `self_assessment.md` in any editor or via
  the GitHub web "add file" button. No issue, branch, or PR. Submit the file.

Both tracks do the same judging. Code Builders earn process credit on top for the
real PR — same deal as every other module.

---

## How to use this checklist

Open the AI's two drafts (`draft_user_stories.md`, `draft_design.md`) next to
this file. Work each dimension below in order. For every box, **the answer must
be a concrete quote or example from your draft** — not a yes/no. If you can't
point to a specific line, you haven't looked hard enough yet.

A box you can only fill with "the AI did fine here" is a box you haven't actually
checked.

---

## Part 1 — Judging the user stories (as the customer)

The AI drafted 5–8 stories in the form
`As a <user>, I want <goal>, so that <reason>`, each with Given-When-Then
acceptance criteria. Hold each one up against *your* real need.

- [ ] **Hit rate.** Roughly what fraction of the stories are *actually* things
  you want? Name **one that nailed it** and **one that missed.**
  - _My fraction: ___ / ___ . Nailed: "…". Missed: "…"._
- [ ] **The "so that."** For at least one story, quote the `so that <reason>`.
  Is it *your* reason, or a generic motivation the AI invented to fill the slot?
  - _Quote: "so that …". Mine / invented (circle one), because…_
- [ ] **The missing story.** Name at least **one user story the AI did not write
  that you actually need.** There is always one. Finding it is the entire skill.
  - _Missing story: "As a …, I want …, so that …"._
- [ ] **Testability.** Pick one story's Given-When-Then acceptance criteria.
  Could you actually *check* whether they're met, or are they vague? If vague,
  say what's untestable.
  - _Story: "…". Checkable? If not, the vague part is: "…"._

**The trap to avoid:** grading the AI's *writing*. The stories will read
smoothly — they always do. Smooth prose for a user who isn't yours is worse than
clumsy prose for the right one.

---

## Part 2 — Judging the design (as the customer)

The AI also drafted a one-page starter design (components, data flow, key
decisions). Read it as the person who'll have to live inside it.

- [ ] **Right user?** Did it design for *your specific* user (the one in your
  `AGENT_BRIEF.md`), or a textbook generic one? Point to **one place it
  drifted.**
  - _It drifted here: "…" — that's a generic user, not mine because…_
- [ ] **Unstated assumptions.** What did the design assume that **you never told
  it**? List at least one. (This is where projects quietly go wrong. The classic:
  it assumed your users have accounts when your whole point was *no login.*)
  - _Unstated assumption: "…". I never said this; in fact I…_
- [ ] **Ignored signal.** What did you write in your brief — an outcome, an
  out-of-scope line, a "this works when…" — that the design **didn't reflect**?
  - _I said: "…" (brief §__). The design ignored it by…_

**The trap to avoid:** "looks reasonable." A design can be internally reasonable
and still solve the wrong person's problem. Reasonable-for-someone-else is the
failure mode you're hunting.

---

## Part 3 — The verdict (as the customer)

Now decide. One judgment, then the three edits, then the trust call.

- [ ] **Build / fix-three / restart.** As the customer: is this draft a usable
  starting point (**build**), a "**fix these three things first**," or a "**start
  over**"? One sentence, with the *why.*
  - _Verdict: ___________ , because…_
- [ ] **Your three edits.** The three **concrete** changes that would make this
  draft fulfill your need. "Make it better" is not an edit. "Drop the login
  requirement" is. You don't have to *make* them now (Module 8 is where this
  corpus grows up) — you have to *name* them.
  1. _…_
  2. _…_
  3. _…_
- [ ] **Trust the agent — where, and where not.** Having watched it run the Flow
  *and* draft requirements: name one place you **trust** it and one you **don't.**
  Specifically. "I trust it to open clean PRs; I don't trust it to know who my
  user is" beats "it's pretty good."
  - _Trust: …. Don't trust: …._

---

## Honesty self-grade

Score your **own process**, not the AI's draft. Be straight with yourself — this
table is the actual grade, and it's yours.

| Did you actually do this? | Honest check | ✔ / not yet |
|---|---|---|
| Read the draft **as the customer**, not as a proofreader | Did you catch something you'd have skated past if you were just checking grammar? | |
| Found at least **one missing story** | "Nothing was missing" means you didn't look hard enough — there's always one | |
| Found at least **one unstated assumption** | Name the thing the design assumed that you never said | |
| Named **three concrete edits**, not vague wishes | Each one names a *specific* change you could hand a builder | |
| Were **honest about trust** | You named a *specific* place you trust it and one you don't — not blanket faith, not blanket suspicion | |

**You passed this module (for yourself) if every row has a real example behind
it.** If a row is empty, the fastest fix isn't to write more — it's to re-read
the AI's draft once more, slowly, as the person who has to use it. The example is
in there. You just have to read as the customer to see it.

---

## What "done" looks like

- `self_assessment.md` answers all three Parts with **quotes and specifics**, not
  adjectives.
- The honesty table is filled with real examples, not checkmarks-for-show.
- Code Builders: it reached `main` via a PR **you** merged. Prompt Masters: it's
  on `main`.

→ Worked strong-vs-weak examples: [`examples.md`](examples.md)
→ The low-stakes self-check quiz: [`knowledge_check.md`](knowledge_check.md)
→ The full Assess framing: [`../../module-4.5-agent-flow/assess.md`](../../module-4.5-agent-flow/assess.md)
