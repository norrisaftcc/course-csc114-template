# Apply — Describe the Agent You Want, as a Corpus

**Slot:** Apply (low stakes — this is a first draft, not a final spec).
**Goal:** Fill in the **agent corpus template** for an agent *you* want to build,
then have the AI draft **user stories** and a **starter design** from it.

---

## What you're building (and why it's a "corpus")

A **corpus**, here, is a small set of plain-English files that a coding agent
can read to understand what you want. It's the same shape this course already
uses for its own materials: numbered folders, one idea per file. The difference
is that *you* are the author now, and the subject is **the agent you intend to
build** — quite possibly your Module 8 capstone product.

You're not building the agent in this module. You're **describing it well enough
that an agent can read your description and draft the requirements and design.**
That's a Systems Analyst's first move: turn a fuzzy "I want a thing that does X"
into something a builder can act on.

This is the deliberate meta-move of the module: **you use an agent to start
building the spec for the agent you'll build.**

## Step 1 — Copy the template into your repo

Copy [`agent-corpus-template/`](../agent-corpus-template/) into your own repo
(e.g. as `my-agent-corpus/`). Read its
[`README.md`](../agent-corpus-template/README.md) — it explains the layout. The
folders mirror what you've already seen this course do:

```
my-agent-corpus/
├── CLAUDE.md            ← how a coding agent should behave in this corpus (provided; tweak lightly)
├── AGENTS.md            ← same, for Codex CLI (provided)
├── GEMINI.md            ← same, for Gemini CLI (provided)
├── AGENT_BRIEF.md       ← ★ YOU FILL THIS IN — the heart of the assignment
├── 00_orientation/      ← what this agent is, in 1 page (you write)
├── 10_concepts/         ← provided reference on the Flow + human-in-the-loop
├── 20_lab/              ← provided walkthrough (the 3-CLI Flow you just did)
├── 30_assessment/       ← the self-grade spec (you'll use this in assess.md)
├── 40_track_specific/   ← provided
└── 90_reused/           ← Sacred Flow reference
```

## Step 2 — Fill in `AGENT_BRIEF.md` (this is the real work)

Open `AGENT_BRIEF.md`. It's a template with prompts. In **plain English**,
answer — short and concrete, no jargon:

- **What is the agent for?** One sentence a non-technical person would
  understand. ("An agent that reads my class notes and quizzes me on them.")
- **Who is the user?** Be specific. Not "students" — *which* student, doing
  *what,* *when.* You may well be your own first user; say so.
- **What does the user want to accomplish?** The top 3–5 things, as outcomes,
  not features. ("I want to find the weak spots in my notes before an exam.")
- **What's explicitly out of scope** for the first version? Scope discipline is
  graded everywhere in CTS-285 — practice it here.
- **What would make you say "this works"?** Your rough definition of done.

Write it as if briefing a contractor. The better your brief, the better — and
the more catchable — the AI's draft will be.

## Step 3 — Have the AI draft user stories and a design

Now point your agent at the corpus and ask it to draft. Any of the three CLIs
works the same way; here's the baseline:

```bash
claude
```

> "Read `AGENT_BRIEF.md` and `00_orientation/`. Draft **5–8 user stories** in
> the format `As a <user>, I want <goal>, so that <reason>`, each with **2+
> Given-When-Then acceptance criteria**. Then write a **one-page starter design**:
> the main components, how data flows, and the key decisions. Put the stories in
> `30_assessment/draft_user_stories.md` and the design in
> `30_assessment/draft_design.md`. Open an issue and a PR for this — I'll
> review and merge."

(Codex CLI / Gemini CLI: same prompt, same approval discipline as Practice. Use
their `AGENTS.md` / `GEMINI.md` — they point at the same brief.)

Notice you just **ran the Flow again, with the agent** — it opens the Issue and
PR for the drafting work. Review the draft in the PR. **Do not merge yet if it's
obviously off** — but you don't have to make it *good*, either. A flawed draft is
exactly what you want for the Assess. Merge once it's recorded, warts and all.

## Step 4 — Read the draft as the customer (don't fix it yet)

Read what the AI produced **as the person who'll use the thing**, not as the
person who wrote the prompt. Ask, for each user story:

- Is this *actually* something I want, or something plausible the AI invented?
- Does the "so that…" reason match *my* reason, or a generic one?
- Are the acceptance criteria testable, or vague?

And for the design:

- Did it design for *my* user, or a textbook user?
- What did it assume that I never said?
- What did I say that it ignored?

**Take notes as you go — those notes become your Assess.** Resist the urge to
"fix" the draft now. The skill being trained is *evaluating* requirements as a
customer, and you can't evaluate something you've already rewritten.

## What you turn in (Deliverable 2)

Your filled-in corpus in your repo, containing:

- `AGENT_BRIEF.md` — your plain-English brief.
- `00_orientation/` — your one-page "what this agent is."
- `30_assessment/draft_user_stories.md` and `draft_design.md` — the AI's drafts,
  recorded as-is (flaws included), reached via a real PR you approved.

Then go judge it.

→ Go to [`assess.md`](assess.md).
