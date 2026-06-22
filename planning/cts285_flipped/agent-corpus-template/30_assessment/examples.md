# Examples — What Strong vs Weak Customer Judgment Looks Like

**Audience:** you, grading your own self-assessment.
**Purpose:** three contrasting pairs of self-assessment writing, side by side, so
you can see the difference between *grading the AI's prose* (weak) and *judging
whether it fulfills your need* (strong). Constructed examples, calibrated against
what the self-grade in [`self_grade_spec.md`](self_grade_spec.md) asks for.

These aren't graded by anyone. They're a mirror. Read the weak version, notice
it's the easy thing to write, then write the strong one anyway.

> The running example agent for these pairs is the one from the brief template:
> **"An agent that reads my class notes and quizzes me on the parts I seem shaky
> on before an exam."** User: *me, the night before a test, with messy Markdown
> notes and 90 minutes, not a developer while using it.*

---

## Pair 1 — Judging the user stories

### ✗ Weak

> The AI wrote 6 user stories and they were pretty good. Most of them matched
> what I wanted. The acceptance criteria were detailed and well-written. A couple
> felt a little generic but overall it did a solid job. I think the stories cover
> the main features.

**Why it's weak.** Every sentence grades the AI's *writing*, not your *need.*
"Pretty good," "solid job," "well-written" — none of that tells you whether the
spec is the one you'd build from. There's no fraction, no quote, no named miss,
and crucially **no missing story.** "Covers the main features" is the sound a
person makes when they haven't looked for the gap.

### ✓ Strong

> **Hit rate: 4 of 6.** The one that nailed it: *"As a student the night before
> an exam, I want the agent to quiz me first on topics I've flagged as shaky, so
> that I spend my 90 minutes where it counts."* That's exactly my night.
>
> The one that missed: *"As a student, I want to track my quiz scores over time,
> so that I can see my progress."* I have **one** exam tomorrow — I don't care
> about a progress graph across weeks. That's the AI reaching for a generic
> study-app feature.
>
> **The "so that":** story 3 says *"so that I can master the material."* That's
> not my reason — my reason is "so that I stop wasting time re-reading stuff I
> already know." "Master the material" is a motivation the AI invented to fill
> the slot.
>
> **Missing story (the real find):** nothing covers *"As a student with messy
> notes, I want the agent to tell me which sections are too thin to quiz from, so
> that I know where my notes have holes before the exam."* That's half of why I
> wanted this thing, and not one story mentions it.
>
> **Testability:** story 1's criterion *"the agent asks relevant questions"* is
> not checkable — "relevant" by whose measure? A testable version: *"Given I
> flagged 'recursion' as shaky, when I start a session, then at least 3 of the
> first 5 questions are tagged 'recursion.'"*

**Why it's strong.** A fraction with a named hit *and* miss. A quoted "so that"
checked against the real reason. A **missing story** that comes straight from the
brief's actual user. A vague acceptance criterion caught and rewritten into a
checkable Given-When-Then. You could hand this to a builder.

---

## Pair 2 — Judging the design (the unstated-assumption catch)

### ✗ Weak

> The design looked reasonable. It had a notes parser, a question generator, and
> a quiz interface, and the data flow made sense. I think it would work. The
> components were laid out clearly and it covered everything I asked for.

**Why it's weak.** "Looked reasonable" and "would work" are the two phrases that
mean *you didn't check it against yourself.* A design can be perfectly reasonable
for the wrong user. There's no drift point, no ignored signal, and — the big
miss — **no unstated assumption.** "Covered everything I asked for" is almost
never true on a first draft, and saying it means you stopped looking.

### ✓ Strong

> **Unstated assumption (the one that matters):** the design has a step *"user
> uploads notes to the app and the app stores them in a database."* I never said
> that. My notes are messy local Markdown files I'd point it at — I never asked
> for an upload step or a stored copy, and honestly I don't want my notes sitting
> in some app's database. The AI quietly assumed a hosted web app. That single
> assumption changes the whole architecture.
>
> **Right user?** It drifted in the quiz interface: it designed a "leaderboard
> and streak tracker to keep users motivated." That's a generic study-app user.
> My user is *me, panicking the night before one exam* — I will never look at a
> streak. It designed for a habit-building product, not a night-before crammer.
>
> **Ignored signal:** my brief's out-of-scope line literally says *"v1 does not
> need accounts or login — it's just me on my laptop."* The design has a "user
> authentication" component anyway. It read my hard boundary and built past it.

**Why it's strong.** The unstated assumption is named *and* its consequence is
spelled out ("changes the whole architecture"). The user-drift is pinned to a
specific component and contrasted with the *real* user. The ignored signal quotes
the brief's own out-of-scope line. This is requirements analysis — catching where
a plausible draft serves someone who isn't you.

---

## Pair 3 — The verdict and the trust call

### ✗ Weak

> Overall I'd say the AI did a good job and I would build from this with a few
> tweaks. It's a good starting point. I'd make it better and fix the small
> issues. I trust the agent — it's a useful tool and it saved me a lot of time.

**Why it's weak.** "A few tweaks" and "make it better" are not edits — a builder
can't act on them. "I trust the agent" with no *where* is blind trust, which the
self-grade explicitly calls a cop-out. Nothing here would change what gets built.

### ✓ Strong

> **Verdict: fix-three-first.** The bones are usable but two of its assumptions
> are wrong about *who I am*, so building as-is would give me the wrong product.
>
> **My three edits:**
> 1. **Drop the login/accounts component entirely** — v1 is just me on my laptop,
>    it's explicitly out of scope.
> 2. **Replace the cloud upload + database with "point the agent at a local
>    notes folder"** — no hosted storage of my notes.
> 3. **Add the missing story:** flag note sections too thin to quiz from, so I
>    find the holes in my notes before the exam.
>
> **Trust the agent — where and where not:** I trust it to *run the Flow* — it
> opened a clean Issue and PR and never tried to merge, exactly as told. I do
> **not** trust it to know *who my user is* — left alone it defaulted to a
> generic study-app user with accounts and streaks, and I'd have built the wrong
> thing if I'd merged without reading as the customer.

**Why it's strong.** A one-word verdict with a real reason. Three edits a builder
could *act on*, each tied to a specific finding from Parts 1 and 2. And a trust
call that splits the agent cleanly: trusted for the **mechanical** Flow work,
not trusted for the **judgment** about the user. That split — junior-fast on the
typing, you-on-the-hook for the customer's intent — is the whole lesson of this
module.

---

## The one pattern under all three pairs

Weak self-assessments grade the **AI's draft**. Strong ones grade **whether the
draft fulfills your need.** The tell is simple:

- If your sentence would still make sense for *someone else's* agent, it's weak
  ("the stories were well-written").
- If it could only be written by *the actual customer of this specific agent*,
  it's strong ("it assumed accounts, but my whole point was no login").

When you're unsure where your own draft lands, reread it and ask: *could a
stranger have written this sentence without ever seeing my brief?* If yes,
rewrite it until they couldn't.

→ Back to the checklist: [`self_grade_spec.md`](self_grade_spec.md)
