# AGENT_BRIEF.md

> **★ THIS IS THE FILE YOU FILL IN. ★**
>
> Everything else in this corpus is provided. This file is yours. In plain
> English — no jargon, no buzzwords — describe the agent you want to build. A
> coding agent (Claude Code / Codex CLI / Gemini CLI) will read this and draft
> user stories and a starter design from it.
>
> **How to use it:** replace every `_(your answer)_` placeholder below. The
> grayed-out **EXAMPLE** lines show the *kind* of answer that works — delete
> them and write your own. Short and concrete beats long and vague. The better
> your brief, the better — and the more *catchable* — the AI's draft will be.
> (Catching where the AI is wrong is the whole point of the Assess.)

---

## 1. What is the agent for?

*One sentence a non-technical person would understand. No "leverages," no
"platform." Just: it does X for Y.*

> **EXAMPLE:** "An agent that reads my class notes and quizzes me on the parts I
> seem shaky on before an exam."

**Your answer:** _(your answer)_

## 2. Who is the user?

*Be specific. Not "students" — *which* person, doing *what*, *when*. If you are
your own first user, say so and describe yourself in that moment.*

> **EXAMPLE:** "Me — a CTS-285 student, the night before a test, with messy
> Markdown notes from the semester and 90 minutes to study. Not a developer
> while using it; I just want to be quizzed."

**Your answer:** _(your answer)_

## 3. What does the user want to accomplish?

*The top 3–5 things, written as **outcomes**, not features. An outcome is what
the user gets ("find my weak spots"), not how it's built ("a spaced-repetition
algorithm").*

> **EXAMPLE:**
> - Find which topics I'm weakest on before the exam.
> - Get quizzed without writing the questions myself.
> - Know when I've studied "enough" to stop.

**Your answer:**
- _(your answer)_
- _(your answer)_
- _(your answer)_

## 4. What is explicitly OUT of scope (for v1)?

*Scope discipline is graded everywhere in CTS-285 — practice it here. Naming what
the agent will **not** do in its first version is as important as what it will.*

> **EXAMPLE:**
> - No accounts or login — it runs locally on my notes.
> - No grading or scoring me; it just quizzes.
> - No mobile app; terminal or a single web page is fine.

**Your answer:**
- _(your answer)_
- _(your answer)_
- _(your answer)_

## 5. What would make you say "this works"?

*Your rough definition of done. Concrete enough that you could check it. "It's
good" is not checkable; "it asks me 10 questions from my notes and I can tell it
pulled from the right files" is.*

> **EXAMPLE:** "I point it at my notes folder, it asks me 10 questions drawn from
> those notes, and after each one it tells me whether I was right and which note
> the answer came from. If it can do that without me writing any questions, it
> works."

**Your answer:** _(your answer)_

---

## (Optional) Anything else the builder should know

*Constraints, preferences, a tool you already use, something you've tried before.
Leave blank if nothing comes to mind.*

> **EXAMPLE:** "My notes are all `.md` files in one folder. I'd rather it run in
> the terminal than a browser. I have no budget for paid APIs."

**Your answer:** _(your answer, or delete this section)_

---

> When this is filled in, tell your CLI: *"Read `AGENT_BRIEF.md` and
> `00_orientation/overview.md`, draft 5–8 user stories with Given-When-Then
> acceptance criteria and a one-page starter design, and run the Flow for it —
> open the Issue and PR, I'll review and merge."* Then read the draft **as the
> customer**, not as the person who wrote this brief.
