# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **course template**, not an application. There is no build, lint, or test step — the working content is markdown (curriculum) and Jupyter notebooks (textbook reference). The `.gitignore` is a stock Python one in anticipation of student-facing code being added later; ignore it as a signal of what's present today.

The course is **CSC 114 (Artificial Intelligence I)**, first run **Summer 2026** as an 8-week pilot. The deliverable shape is module materials (assignments, knowledge checks, activities, Canvas pages, rubrics) — not running software.

## Content layout: assembled output vs. upstream sources

There are now **two layers** of content in `planning/`:

### The assembled pilot — `planning/pilot_su26/`

This is the **canonical answer** for pilot-week-specific questions. Built in PR #2 (May 2026). Contains:

- **`crosswalk.md`** — the 8-week spine. Maps each pilot week to Manning chapters, Learn/Practice/Apply/Assess slots, csc_dash assets reused vs cut, and two-track PM expectations week-by-week. **When the spec for a pilot week is unclear, read this first.**
- **`week-01-cloud-agents/`** and **`week-02-keras-hello-world/`** — the two vertical slices that establish the template for the remaining weeks. Each has five files: `README.md`, `learn.md`, `practice.md`, `apply.md`, `assess.md`.
- Weeks 3–8 are deliberately not built yet. They will replicate the Week 2 file shape once the template proves out with students.

### Upstream sources (do not modify casually)

The pilot draws from three layered upstream sources. They are **inputs**, not outputs. Modify them only when the upstream is wrong, not when adapting them for the pilot — pilot-specific adaptations belong in `pilot_su26/`:

1. **`planning/csc_dash/CSC-114/`** — Pre-built, audited 16-week course materials (8 modules × 2 weeks each). Angela Westmoreland's audited work. `MATERIALS_INDEX.md` is the authoritative inventory; `COURSEMAP.md` is the certification document. The 8-week pilot **cuts** roughly half of this (specifically: the sklearn-first weeks and the 6-sprint Scrum cycle). Don't try to fit all of csc_dash into the pilot.

2. **`planning/textbook/`** — Manning *Deep Learning with Python*, 3rd ed. (Chollet & Watson). `manning_overview.md` maps **textbook chapters to the 8-week pilot week-by-week**. The `deep-learning-with-python-notebooks-master/` directory is the official notebook companion *and is intentionally untracked* — see Practical notes.

3. **`planning/legacy_csc113/`** — Carryover from CSC-113. Specifically: **Module 0 / Week 1 uses the "Cloud Agents" (Claude Console Managed Agents) module** documented here. Some students may continue iterating on their agent instead of moving to the textbook — per `planning/legacy_csc113/# csc 114 planning.md`, that is an accepted success path.

### Tiebreaker rules

- **For pilot-week-specific questions:** `planning/pilot_su26/` wins. It is the deliberate assembled choice.
- **For "where does this content come from?":** trace upstream — pilot_su26 files name their sources explicitly.
- **When upstream sources disagree and `pilot_su26/` doesn't specify:** the textbook map (`manning_overview.md`) wins for the 8-week pilot, because csc_dash is the 16-week skeleton.

## Pedagogical conventions to honor

These are stated in `planning/planning.md`, the legacy planning notes, and the pilot crosswalk. Don't drift from them when authoring material:

- **Workflow:** Learn → Practice → Apply → Assess. Labs are Practice or Apply; Homework is Assess. Stakes start low (Weeks 1–3) and tighten as confidence rises (Weeks 5–8).
- **Gradual release:** I do → We do → You do.
- **Sacred Flow is two-track in this course** (codified in pilot_su26):
  - **Code Builders** do full Sacred Flow — Issue → Branch → Commit → PR → Merge, plus a 1-paragraph retro in the PR description.
  - **Prompt Masters** submit by drop — GitHub Desktop or the web UI's "add file" button. No issues, branches, or PRs required.
  - Both tracks earn identical points on the *artifact*; Code Builders earn process credit on top.
  - **Sacred Flow starts in Week 2** for Code Builders. Week 1 is universal low-stakes (drop submission for everyone). The capstone-2 course sequence is the on-ramp for students who haven't been through CSC-113.
  - When authoring new pilot Assess slots, **describe both submission paths**. The Week 2 `assess.md` is the reference template.
- **Process over Product** — present in csc_dash as 30–50% of the grade with a full 6-sprint Scrum cycle. In the 8-week pilot this is **compressed** to a per-week mini-cadence (issue + PR + retro for Code Builders). The full Scrum content (`planning/csc_dash/CSC-114/planning-sheets/`, `pm-materials/templates/`) is preserved but deferred to capstone-2.
- **Failure as exercise:** "Bad Greeter Bot" and similar deliberate-failure demos are pedagogical, not bugs to fix.

## Voice

Instructor-authored material is in the **"Senpai Teacherbot"** voice (= Drew Norris's teaching voice). Characteristics, per the drafting notes in `legacy_csc113/m00-setup-package.md`:
- Honest about difficulty, process-focused, encouraging without coddling, slightly informal, specific, industry-connected.

Match this voice when generating new student-facing prose. Avoid corporate/LMS boilerplate.

## Adding a new pilot week (Weeks 3–8)

Weeks 3–8 don't exist yet. When building one, **copy the Week 2 file shape**:

```
planning/pilot_su26/week-NN-<slug>/
├── README.md     ← overview, learning outcomes, two-track expectations, links
├── learn.md      ← reading framing for the relevant Manning chapter(s), low-stakes
├── practice.md   ← retry-OK lab; adapts/borrows from csc_dash assets per crosswalk
├── apply.md      ← one narrowly-scoped spike experiment
└── assess.md     ← graded; two-track submission split explicit (Code Builders vs Prompt Masters)
```

The crosswalk (`pilot_su26/crosswalk.md`) already names the Manning chapter(s) and the csc_dash assets to reuse for each week. **Read the crosswalk row before drafting the week.** Don't re-derive the structure from upstream sources; the deliberate choices are already in the crosswalk.

Adding a new pilot week is non-trivial — do it on a branch behind an issue and PR (see next section).

## Sacred Flow applies to this repo's own work too

This repo demonstrates the workflow it teaches. Non-trivial changes go through **issue → branch → PR → merge**, not direct commits to main. PR #2 (the pilot bootstrap) is the reference example. Apply the same discipline to subsequent material additions when possible.

Trivial fixes (typos, broken links, .DS_Store cleanup) can go through direct commits if no PR review would add value.

## Practical notes

- **`planning/textbook/deep-learning-with-python-notebooks-master/`** is **intentionally untracked**. Students pull Chollet's upstream notebooks themselves from <https://github.com/fchollet/deep-learning-with-python-notebooks> — that pull is part of the learning experience. The local copy here exists only as instructional context when authoring pilot material. **Do not `git add` it.**
- **Canvas HTML pages** (`planning/csc_dash/CSC-114/canvas-html/`) are paired with the markdown module pages. If you edit a module's assignments or structure, the corresponding Canvas page likely also needs updating — they are not auto-generated from the markdown.
- **Pilot weekly Canvas pages** (`planning/pilot_su26/week-*/canvas-page.html`) share a single CSS source of truth at `planning/pilot_su26/canvas-shared-styles.css`. The `<style>` block in each week's HTML is bracketed by `/* BEGIN CANVAS_STYLES */` and `/* END CANVAS_STYLES */`; after editing the shared CSS, run `python3 planning/pilot_su26/sync_canvas_styles.py` to propagate to every week. Canvas strips external stylesheets, so the CSS must remain inline — the script keeps the inline copies in sync rather than externalizing. **Do not hand-edit the CSS inside a week's HTML;** edit the shared file and re-sync.
- **The repo name ends in `-template`.** Per-term instances (e.g., `csc114-su26-students`) are expected to be forked/derived from this. Avoid embedding term-specific dates or rosters in template files; use placeholders like `{MEETING_1_DATE}` that the setup packet already establishes.
- **No code to run yet.** If a task asks for "tests" or "the build," confirm what's actually meant — there is no test harness in this repo today.
