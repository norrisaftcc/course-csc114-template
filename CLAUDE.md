# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **course template**, not an application. There is no build, lint, or test step — the working content is markdown (curriculum) and Jupyter notebooks (textbook reference). The `.gitignore` is a stock Python one in anticipation of student-facing code being added later; ignore it as a signal of what's present today.

The course is **CSC 114 (Artificial Intelligence I)**, first run **Summer 2026** as an 8-week pilot. The deliverable shape is module materials (assignments, knowledge checks, activities, Canvas pages, rubrics) — not running software.

## Three content sources, in priority order

The pilot draws from three layered sources. When asked to author or revise material, understand which one is canonical for the question:

1. **`planning/csc_dash/CSC-114/`** — Pre-built, audited 16-week course materials (8 modules × 2 weeks each). This is the highest-quality source. `MATERIALS_INDEX.md` is the authoritative inventory; `COURSEMAP.md` is the certification document. The 8-week pilot **compresses** this — one module per week instead of two — so when adapting, expect to cut scope, not invent new content.

2. **`planning/textbook/`** — Manning *Deep Learning with Python*, 3rd ed. (Chollet & Watson). `manning_overview.md` maps **textbook chapters to the 8-week pilot week-by-week** (e.g., Week 1 = Ch 1 + Ch 4; Week 8 = Ch 16/17 + Ch 18). The `deep-learning-with-python-notebooks-master/` directory is the official notebook companion — treat it as reference, not as something to modify.

3. **`planning/legacy_csc113/`** — Carryover from the prior course. Specifically: **Module 0 / Week 1 uses the "Cloud Agents" (Claude Console Managed Agents) module** documented here (`CSC-114_Module_Cloud_Agents_*.md`, `m00-setup-package.md`). Students build a personal AI teaching assistant in the Claude Console before any textbook work begins. Some students may continue iterating on their agent instead of moving to the textbook — per `planning/legacy_csc113/# csc 114 planning.md`, that is an accepted success path.

When `csc_dash` and the textbook map disagree on sequencing, the textbook map (`manning_overview.md`) wins **for the 8-week pilot** because csc_dash is the 16-week skeleton.

## Pedagogical conventions to honor

These are stated in `planning/planning.md` and the legacy planning notes. Don't drift from them when authoring material:

- **Workflow:** Learn → Practice → Apply → Assess. Labs are Practice or Apply; Homework is Assess.
- **Gradual release:** I do → We do → You do.
- **Sacred Flow:** GitHub discipline of Issue → Branch → Work → Commit → PR → Merge. Carries over from CSC-113 and is assumed in Module 0 setup.
- **Two tracks:** "Code Builders" (deep implementation) and "Prompt Masters" (high-level APIs / no-code). Most assignments should be reachable by both.
- **Process over Product:** 30–50% of the grade is PM/sprint process artifacts, not just code output. The sprint templates live in `planning/csc_dash/CSC-114/planning-sheets/` and `pm-materials/templates/`.
- **Failure as exercise:** "Bad Greeter Bot" and similar deliberate-failure demos are pedagogical, not bugs to fix.

## Voice

Instructor-authored material is in the **"Senpai Teacherbot"** voice (= Drew Norris's teaching voice). Characteristics, per the drafting notes in `legacy_csc113/m00-setup-package.md`:
- Honest about difficulty, process-focused, encouraging without coddling, slightly informal, specific, industry-connected.

Match this voice when generating new student-facing prose. Avoid corporate/LMS boilerplate.

## Practical notes

- **`.DS_Store` files** appear throughout (macOS). They're tracked in places but shouldn't be — don't bother adding new ones, but don't bulk-delete them as a side effect of unrelated work.
- **Canvas HTML pages** (`planning/csc_dash/CSC-114/canvas-html/`) are paired with the markdown module pages. If you edit a module's assignments or structure, the corresponding Canvas page likely also needs updating — they are not auto-generated from the markdown.
- **The repo name ends in `-template`.** Per-term instances (e.g., `csc114-su26-students`) are expected to be forked/derived from this. Avoid embedding term-specific dates or rosters in template files; use placeholders like `{MEETING_1_DATE}` that the setup packet already establishes.
- **No code to run yet.** If a task asks for "tests" or "the build," confirm what's actually meant — there is no test harness in this repo today.
