# Assess — You, the Customer, Judge the AI's Work (Self-Graded)

**Slot:** Assess (self-graded — there is no instructor points rubric here, on
purpose).
**Points:** The module's **50 pts are self-graded — awarded by default on
completion.** Doing this honestly *is* the grade.
**What you submit:** A short self-assessment, written as the *customer* of your
own agent.

---

## Why this one is self-graded

Every other Assess in CTS-285 has an instructor with a rubric deciding whether
your work is good. This one doesn't — and that's deliberate.

The skill here is **customer judgment**: deciding whether a set of requirements
and a design actually fulfill *your* need. Nobody can grade that for you, because
nobody else is the customer. If an instructor scored it, you'd start writing for
the instructor instead of asking the only question that matters: *does this give
me what I actually wanted?* That question is the job of requirements analysis,
and you only learn it by being on the hook for the answer yourself.

So you grade it. Honestly. The grade is for you.

## The two-track split (how you submit)

The **thinking is identical** for both tracks. Only the mechanics differ.

### Code Builders — through the Flow

1. Write your self-assessment as `30_assessment/self_assessment.md` in your
   corpus.
2. Run it through the Flow **with your agent** one more time: agent opens the
   issue + PR, you review and merge. (Yes — you're using the Flow to submit your
   judgment *of* the Flow. That's the rhythm now.)
3. Submit the merged PR link.

### Prompt Masters — by drop

1. Write your self-assessment in whatever editor you like, or in the GitHub web
   UI's "add file" button.
2. No issue, no branch, no PR required.
3. Submit the file.

Both tracks submit the same three module deliverables (the Practice write-up, the
filled corpus, this self-assessment). Code Builders earn process credit on top
for the real PR — same deal as every other week.

## Write your self-assessment

Answer these in plain English. Be specific — "the AI was pretty good" teaches you
nothing; "the AI assumed my users have accounts, but my whole point was no
login" teaches you everything.

### Part 1 — The user stories (as the customer)

For the stories the AI drafted in Apply:

1. **Hit rate.** Of the stories it wrote, how many are *actually* things you
   want? Give a rough fraction and name one that nailed it and one that missed.
2. **The "so that."** Did the reasons match *your* reasons, or did it invent
   generic motivations? Quote one and say whether it's yours.
3. **What's missing.** Name at least **one user story the AI didn't write that
   you actually need.** (There's always one. Finding it is the whole skill.)
4. **Testability.** Pick one story's acceptance criteria. Could you actually
   check whether they're met? If not, what's vague?

### Part 2 — The design (as the customer)

1. **Right user?** Did the design serve *your* specific user, or a textbook
   generic one? Point to one place it drifted.
2. **Unstated assumptions.** What did the design assume that you never told it?
   List at least one. (These are where projects quietly go wrong.)
3. **Ignored signal.** What did you say in your brief that the design didn't
   reflect?

### Part 3 — The verdict

1. **Would you build from this?** As the customer: is this draft a usable
   starting point, a "fix these three things first," or a "start over"? Say
   which, in one sentence, and why.
2. **Your three edits.** The three concrete changes that would make this fulfill
   your need. (You don't have to make them now — Module 8 is where this corpus
   grows up. You just have to *name* them.)
3. **One sentence on the agent-as-coworker.** Having watched it run the Flow
   *and* draft requirements: where do you trust it, and where do you not?

## Self-grade yourself honestly

Score your **own process**, not the AI's draft. Be straight with yourself:

| You did this | Honest check |
|---|---|
| Read the draft as the customer, not as the prompt-writer | Did you catch things you'd have missed if you were just proofreading? |
| Found at least one missing story and one unstated assumption | If you found "nothing missing," you didn't look hard enough — there's always something. |
| Named three concrete edits, not vague wishes | "Make it better" isn't an edit. "Drop the login requirement" is. |
| Were honest about where you don't trust the agent | Blind trust and blanket distrust are both cop-outs. Where *specifically*? |

If you can answer all four with a real example, you got what this module is for.
If you can't, the fastest fix is to re-read the AI's draft once more — slowly,
as the person who has to live with the result.

## What this set you up for

- You now have a **repeatable move**: hand the Flow's mechanics to an agent, keep
  the merge and the judgment. Modules 5–8 get lighter because of it.
- You have a **corpus describing an agent you might build** — the first draft of
  a Module 8 capstone spec, already in a form a coding agent can read.
- You practiced the analyst's core skill — **evaluating requirements as the
  customer** — on requirements an AI wrote, which is exactly the situation you'll
  be in for the rest of your career.

→ Back to the [module overview](README.md). Next stop in the planner: **Module 5
— Ship It, Document It, Present It**, where you'll feel the payoff.
