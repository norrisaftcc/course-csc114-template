# Design: Week 2 Canvas page + Knowledge Check (vertical slice)

**Date:** 2026-05-22
**Branch:** pilot-weeks-3-5 (planning); implementation branch will be `week-02-canvas-kc`
**Context:** CSC-114 Summer 2026 pilot — `planning/pilot_su26/`
**Out-of-scope today:** Weeks 1 and 3–8 Canvas/KC artifacts; Canvas API automation; edits to `planning/csc_dash/` upstream sources

---

## Why this work

The pilot crosswalk (`planning/pilot_su26/crosswalk.md`) references csc_dash Knowledge Checks for vocabulary at the Practice→Assess boundary in Weeks 2 and 4. The csc_dash KCs are ~60% sklearn-focused, which conflicts with the pilot's Keras-first ordering (Manning Ch 1+4 in Week 2). The crosswalk also explicitly defers Canvas overview pages.

We want both pieces of material to be **Canvas-import-ready by May 2026** so the pilot can use them rather than reauthoring quizzes and pages by hand in the Canvas UI. We are doing this as a **single vertical slice on Week 2** to validate the tooling and the artifact shape before scaling to remaining weeks.

## Goal

Build a complete, Canvas-importable Knowledge Check and a Canvas-paste-ready overview page for Week 2 (Keras hello world). The output establishes the template that Weeks 1 and 3–8 will follow in later PRs.

## Non-goals

- Building Weeks 1, 3–8 Canvas pages or KCs in this pass
- Editing `planning/csc_dash/CSC-114/knowledge-checks/` or `canvas-html/` upstream files
- Canvas API automation (LTI, REST). Manual paste / import is acceptable
- A full instructor authoring guide for KCs. `canvas-build-notes.md` is scoped to "how to rebuild and import these specific files"

## Artifacts

All four files land in `planning/pilot_su26/week-02-keras-hello-world/`, alongside the existing `README.md`, `learn.md`, `practice.md`, `apply.md`, `assess.md`.

### 1. `canvas-page.html` — Canvas overview page

Paste-into-Canvas HTML overview for Week 2. Visual structure borrowed from `planning/csc_dash/CSC-114/canvas-html/Module_01_Canvas_Page.html` (collapsible sections, consistent branding). Content rewritten to match:

- The pilot Week 2 spec (Manning Ch 1+4, Keras-MNIST, two-track Sacred Flow)
- The Senpai Teacherbot voice — honest about difficulty, process-focused, encouraging without coddling, slightly informal, specific, industry-connected
- The same Canvas placeholder tokens csc_dash uses (`[COURSE_ID]`, `[ASSIGNMENT_ID]`, `[FILE_ID]`, `[QUIZ_ID]`) so instructors swap them at import time

Content sections (mirroring csc_dash's structure where useful, dropping what doesn't fit):

- Header with module title, dates placeholder, "what you'll do this week" one-liner
- Learning outcomes (3–5 bullets)
- Two-track expectations block — explicit Code Builders vs Prompt Masters callout (Week 2 is where Sacred Flow first lands for Code Builders)
- Schedule / what's due (links to Practice notebook, Apply spike, Assess submission)
- Knowledge Check link (placeholder `[QUIZ_ID]`)
- Reading: Manning Ch 1 and Ch 4 §1–2
- "If you get stuck" block (office hours, Discord, etc. — generic placeholders)

### 2. `knowledge-check.md` — text2qti source

13 questions, multiple choice, unlimited attempts framing (preserves the pedagogical posture from csc_dash). Authored in [text2qti](https://github.com/gpoore/text2qti) markdown dialect — close to but not identical to the csc_dash format.

text2qti example shape:

```
Quiz title: Week 2 Knowledge Check — Keras Hello World
Quiz description: Vocabulary check for Manning Ch 1 + Ch 4 and the two-track Sacred Flow workflow. Unlimited attempts; the goal is mastery, not test-taking.

1. What does it mean for a problem to be "supervised learning"?
*a) The training data includes both inputs and known correct outputs.
b) A human watches the model as it trains.
c) The model only works with labeled images.
d) The model requires constant human intervention during inference.

... etc.
```

**Content strategy — hybrid retrofit of csc_dash Module 01 KC:**

| # | Topic | Source |
|---|---|---|
| **Technical (8)** | | |
| 1 | What "supervised learning" means | Kept from M01 Q4 (universally true) |
| 2 | Regression vs classification (predicting a continuous value) | Kept from M01 Q7 |
| 3 | Why a held-out test set exists | Kept from M01 Q6 (drop sklearn framing in distractors) |
| 4 | NumPy's role in numerical computing | Kept from M01 Q1 (Keras tensors are NumPy-compatible — still relevant) |
| 5 | pandas DataFrames for tabular data | Kept from M01 Q2 (still relevant for data prep) |
| 6 | What deep learning is, vs. traditional ML | **New** — Manning Ch 1 framing |
| 7 | What MNIST is and why it's used as a starting benchmark | **New** — Manning Ch 2/4 first example |
| 8 | What `model.compile()` configures (loss, optimizer, metrics) | **New** — Manning Ch 4 vocabulary |
| **Process & Workflow (5)** — replaces csc_dash "PM Concepts" Scrum section | | |
| 9 | Two-track distinction: Code Builders vs Prompt Masters | New — pilot-specific |
| 10 | Sacred Flow steps in order (Issue → Branch → Commit → PR → Merge) | New — pilot-specific |
| 11 | Why the PR description includes a retro paragraph | New — pilot-specific |
| 12 | Why you open the GH issue *before* starting the work, not after | New — pilot-specific (called out in Week 2 `assess.md`) |
| 13 | Why KCs allow unlimited attempts | Kept from M01 Q12 (pedagogy still applies) |

Distractors and explanations rewritten in Senpai Teacherbot voice — see the existing `practice.md` and `assess.md` for tone calibration.

### 3. `knowledge-check.zip` — generated QTI 1.2 package

Output of `text2qti knowledge-check.md`. Canvas Classic Quizzes import accepts this directly. Committed alongside the source so:

- Instructors can import without installing text2qti first
- The PR diff shows when the import package has changed
- Future weeks reuse the same shape

If text2qti's output filename differs from `knowledge-check.zip`, rename to canonical name before commit.

### 4. `canvas-build-notes.md` — instructor-facing notes

Short (one page) operational notes:

- **Install:** `pip install text2qti` (note: requires `pandoc` on PATH)
- **Rebuild the QTI:** `text2qti knowledge-check.md` from inside the week-02 folder
- **Import into Canvas:**
  - Quiz: Settings → Import Course Content → choose "QTI .zip file" → upload `knowledge-check.zip` → publish the resulting Classic Quiz, capture its quiz ID
  - Overview page: Pages → +Page → switch to HTML editor (`<>` icon) → paste `canvas-page.html` → replace placeholders (`[COURSE_ID]`, `[ASSIGNMENT_ID]`, `[FILE_ID]`, `[QUIZ_ID]` — including the KC quiz ID captured above) → save & publish
- **Editing source after import:** edit the `.md`, rerun text2qti, re-import (Canvas treats this as a new quiz by default; document that)

## Sacred Flow for this PR (we eat our own dog food)

Per CLAUDE.md, non-trivial changes go through issue → branch → PR. This PR does exactly that:

1. **Issue:** open in `norrisaftcc/course-csc114-template` titled `Week 2 Canvas page + Knowledge Check (vertical slice)`. Body summarizes the design and links this spec.
2. **Branch** for implementation: `week-02-canvas-kc`, off `main`. (At spec authoring time, `main` was clean and up to date with `origin/main`; the prior `pilot-weeks-3-5` branch had been merged.)
3. **Commits** — one per artifact is reasonable:
   - `add Week 2 Canvas overview page`
   - `add Week 2 Knowledge Check (text2qti source)`
   - `generate Week 2 Knowledge Check QTI zip`
   - `add canvas-build-notes for Week 2`
4. **PR** to `main` with retro paragraph in description (modeling what the pilot teaches Code Builders to do).
5. Self-review, merge.

## Risks and what we're betting on

- **text2qti install friction.** Requires `pandoc` on PATH. If the user can't install pandoc, the source is still useful as a paste-into-Canvas markdown reference — they just lose the autograded import. Mitigation: `canvas-build-notes.md` calls out the pandoc dependency up front.
- **Canvas changes between now and August 2026.** Classic Quizzes import via QTI 1.2 has been stable for years; New Quizzes is the future but tooling is less mature. We're betting Classic Quizzes is still imported smoothly in Summer 2026. If New Quizzes becomes mandatory before then, we'd need to revisit.
- **Question 12 ("open issue before work") only applies to Code Builders.** Prompt Masters skip Sacred Flow. The question should be phrased so a Prompt Master who reads the Week 2 material still gets it right (e.g., "For Code Builders, why open the issue before starting work?"). Calling this out so the question author handles it explicitly.
- **csc_dash visual styling assumes Canvas's default CSS.** The HTML is paste-into-Canvas; we don't load custom stylesheets. Inline styles only.

## Success criteria

The slice is done when an instructor can:

1. Open the four files in `planning/pilot_su26/week-02-keras-hello-world/`
2. Paste `canvas-page.html` into a new Canvas page, replace placeholders, publish — and it renders correctly
3. Import `knowledge-check.zip` into Canvas Classic Quizzes — and all 13 questions land with correct answers and explanations
4. Edit the markdown, rerun `text2qti`, and have a fresh zip ready

…all without consulting documentation outside `canvas-build-notes.md`.

## What this template enables next (not in this PR)

Once this slice is merged and validated, Weeks 1 and 3–8 can each follow the same four-file pattern. The crosswalk already specifies KC sources for Weeks 4–8 (csc_dash Modules 02, 03, 06, 07, 08). Week 1 (Cloud Agents) and Week 3 (Math + optimization) are net-new authoring.
