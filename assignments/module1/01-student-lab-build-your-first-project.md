# CSC-114 Module 1: Claude Projects as a Knowledge Platform
## Student Lab — Build Your First Project

**Platform:** `claude.ai`
**Where your work goes:** everything for this module lives in a `module1/` folder in your CSC-114 repository
**Companion handout:** *The Three Questions* reference card

---

## Start Here

"Artificial Intelligence" is not one thing. It is a wide collection of tools and techniques — chatbots, image generators, code assistants, search agents, and more. This course will introduce several of them.

The very first way we will use these tools is the most practical one possible: **to get ourselves organized.** Before you build anything fancy, you are going to take a pile of your own notes and turn them into something you can actually ask questions. That is a real, useful application of AI — and it teaches you the mechanics with nothing on the line.

Once you have proven you can build a simple "bot" like this, you will be ready to build the real one — your **csc114bot** — in the next lab. This lab is the warm-up that gets you there.

---

## What You're Building

A **Claude Project** loaded with your own course notes, set up so that it answers your questions using *that material* — honestly, and without making things up. Think of it as a study buddy that has read your notes and refuses to bluff.

### What you'll practice

- **The three-question setup** — writing custom instructions (from the reference card)
- **Three-test validation** — proving your Project behaves the way you intended
- **The one-change rule** — fixing behavior by changing one thing at a time
- **GitHub discipline** — committing your work into the `module1/` folder

---

## Step 1 — Gather Your Notes

Collect a small set of files you actually want to study from. Good choices:

- Your notes or summaries from CSC-113
- The CSC-114 syllabus
- Any handouts, slides, or readings you have so far

Two or three files is plenty. They can be PDFs, Word docs, Markdown, or plain text. **Keep a copy in a folder on your computer** called `notes` — you'll commit these to GitHub later.

---

## Step 2 — Create the Project

1. Go to `claude.ai` and sign in.
2. In the left sidebar, find **Projects** and create a new one.
3. Name it something clear, like `CSC-114 Study Buddy`.

*(The exact button labels may differ slightly — this is a live product. Look for "Projects," then a "create" or "+ New" option.)*

---

## Step 3 — Write Your Custom Instructions

Open **The Three Questions** reference card. Answer all three for *your* study buddy:

1. **Who are you?** — Claude's role
2. **Who am I?** — who you are and what you already know
3. **What will we accomplish together?** — the goal, plus at least one rule about what Claude should *not* do

Write your three short paragraphs, then paste them into the Project's **instructions** box (sometimes labeled "What should Claude know about this project?" or "Set project instructions").

> **Required rule:** Include a sentence telling Claude to use *only* your uploaded notes, and to say so plainly when something isn't covered. This is the rule that stops it from inventing answers.

---

## Step 4 — Add Your Knowledge

Upload your notes into the Project's **knowledge** (look for an "Add content" or upload option inside the Project). These are the files your study buddy is allowed to read.

---

## Step 5 — Run Three Tests

Now find out whether it actually works. Start a chat *inside your Project* and run exactly three tests. Send one message, read the answer, write down what happened — then move to the next.

| # | Type | What to ask | What you're checking |
|---|------|-------------|----------------------|
| 1 | **Known good** (should succeed) | A question your notes clearly answer | Does it give the right answer, from your material? |
| 2 | **Known bad** (should fail) | A question your notes do *not* cover at all | Does it admit it doesn't know — or does it bluff? |
| 3 | **Edge case** (for discovery) | Something in a gray area — partly covered, or ambiguous | What does it do when the answer isn't obvious? You're exploring, not grading. |

The edge case is the interesting one. You're not trying to pass or fail it — you're trying to *learn* how your Project behaves at the boundary of what it knows.

---

## Step 6 — Make One Change

Pick the test result that disappointed you most. Change **one thing** in your instructions to fix it — one sentence, one rule, one phrase. Then re-run *that same test*.

Do **not** rewrite all three paragraphs. If you change everything at once, you won't know what actually fixed it. One change, one test, one observation. (Yes — the same one-change rule from CSC-113. It never stops being useful.)

---

## Step 7 — Commit to GitHub

Everything for this module goes in a `module1/` folder in your CSC-114 repository. When you're done, your folder should contain:

```
module1/
├── custom-instructions.md     ← the three-paragraph prompt you wrote
├── testing-log.md             ← your three tests + your one change
└── notes/                     ← the source files you uploaded to the Project
```

**Choose your path:**

> **Code Builders** — Use your normal programming GitHub workflow (clone/Codespaces, add, commit, push). Put your files under `module1/`. Write a descriptive commit message, e.g. `Add Module 1 study buddy project + testing log`.

> **Prompt Masters** — Use the GitHub web client or GitHub Desktop. Open your repository, create the `module1/` folder, and **drag and drop** your files in. Add a short message describing what you uploaded, then commit.

Use this template for `testing-log.md`:

```markdown
# Module 1 Testing Log — [Your Project Name]

## My three tests

| # | Type | Question I asked | What I expected | What actually happened | Pass / Fail |
|---|------|------------------|-----------------|------------------------|-------------|
| 1 | Known good | | A correct answer from my notes | | |
| 2 | Known bad | | "That isn't in the notes" | | |
| 3 | Edge case | | (discovery — not sure yet) | | n/a |

## My one change
- **Which test prompted the change:**
- **The one thing I changed in my instructions:**
- **What happened when I re-ran that test:**
```

---

## Before You Leave

- [ ] My Project exists on `claude.ai` with custom instructions and my notes uploaded.
- [ ] My instructions answer all three questions and include the "use only my notes" rule.
- [ ] I ran all three tests and recorded what happened.
- [ ] I made one change and re-tested it.
- [ ] `custom-instructions.md`, `testing-log.md`, and my `notes/` are committed under `module1/`.

---

## What Just Happened

You used an AI tool to do something genuinely useful: you turned static notes into something you can interrogate. But the real lesson is underneath that.

You didn't just *use* a Project — you **configured** one. You decided who Claude was, who it was helping, and what the rules were. Then you tested whether your configuration matched your intent, and you corrected it with a single controlled change. That loop — **set intentions → test against them → adjust one thing → test again** — is the whole game. It's the same loop you'll use for far more powerful systems later in this course.

The "use only my notes" rule did something worth noticing, too. You gave the AI permission to say *"I don't know."* That single instruction is the difference between a tool you can trust and one that confidently misleads you. Hold onto that idea.

---

## Looking Ahead

You now know how to build a bot. Next, you'll build the one that matters: your **csc114bot** — a Project designed to help you (and your classmates) navigate this course itself. Same skills, real purpose. This lab was the rehearsal.
