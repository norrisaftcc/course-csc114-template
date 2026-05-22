# Design: Week 1 Canvas page + Knowledge Check (vertical slice)

**Date:** 2026-05-22
**Issue:** #20
**Context:** CSC-114 Summer 2026 pilot — applies the vertical-slice template established in PR #19 (Week 2) to Week 1 (Cloud Agents).
**Spec lineage:** mirrors `docs/superpowers/specs/2026-05-22-week-02-canvas-kc-design.md`; this doc records only what differs.

---

## Why this work

The Week 2 template is merged and validated. Week 1 was flagged in the Week 2 final review as the next blocking item before Summer 2026 opens. Week 1 covers the Cloud Agents (Claude Console Managed Agents) module — students build a domain-specific AI agent before the textbook track begins.

This PR is **not** a re-derivation of the template; it's a second instance that proves the template scales. Where Week 1 differs from Week 2 (no Manning chapter, no csc_dash KC to retrofit, no Sacred Flow yet, an explicit "keep iterating on your agent" success path), this spec calls out the difference.

## Goal

Build the four Canvas/KC artifacts for Week 1, alongside the existing markdown spine (`README.md`, `learn.md`, `practice.md`, `apply.md`, `assess.md`), in `planning/pilot_su26/week-01-cloud-agents/`.

## Non-goals

- Building Weeks 3–8 Canvas/KC (separate work)
- Editing `planning/legacy_csc113/` upstream sources (the lab packet and instructor plan are inputs, not outputs)
- Consolidating per-week build notes into a single shared file (tracked in issue #21 — separate PR)
- Canvas API automation, .DS_Store cleanup (separate issues)

## Artifacts

All four in `planning/pilot_su26/week-01-cloud-agents/`:

### 1. `canvas-page.html` — Canvas overview page

Same visual structure as Week 2's `canvas-page.html` (the CSS block is essentially reused, modulo class renames if needed). Content rewritten for Week 1:

- **Header tagline:** "By Friday you have a working AI agent of your own design in the Claude Console" (from `README.md`).
- **Module meta items:** Duration "1 week"; replace the Manning reading meta with something like "No textbook reading yet — content lives in `learn.md`"; due date "End of Week 1".
- **Learning outcomes:** the 5 outcomes from `README.md` (chatbot→assistant→agent spectrum; create Console agent; five-section system prompt; one-change-rule testing; tool rationale).
- **"What changes from Week 2" content section — DROP.** Instead, add a "Why this is Week 1" section adapting `README.md`'s "Why this is Week 1, not later" rationale.
- **Two-track expectations — REPLACE with a simpler universal-drop note.** Week 1 has no Sacred Flow split. A short paragraph or single-row table saying "Both tracks submit identically this week: screenshot + 1-paragraph reflection added to your repo via GitHub Desktop, web upload, or `git` — your choice. Sacred Flow lands Week 2."
- **What you do this week (5 cards):** Learn, Practice, Apply, Assess, Knowledge Check (same 5-card pattern as Week 2). Card 1 (Learn) drops the Manning reference. Practice card mentions Campus Info Bot; Apply card mentions domain agent v1.
- **Code preview — REPLACE the Keras snippet with a 5-section system prompt skeleton** (Identity → Behavioral Constraints → Domain Knowledge → Output Format → Context). Use a generic placeholder agent example so the snippet is paste-and-customize for students. Code block styling preserved.
- **Want to keep going? callout (NEW):** A green tip-box-style callout placed near the bottom (before Senpai's Note), explaining the two extension paths:
  1. **The deeper module:** Meetings 3–4 from `legacy_csc113/CSC-114_Module_Cloud_Agents_Student_Lab_Packet.md` cover file mounting, MCP servers, security testing, cost calculation, peer review. Self-directed extension.
  2. **The "keep iterating" path:** Some students will spend the whole term improving their agent instead of switching to Manning. That's a recognized success path in this course (cite `legacy_csc113/# csc 114 planning.md`).
- **Checklist:** 7–8 items mirroring Week 1's actual workflow (account ready, agent created, system prompt v1, one-change test run, tool rationale documented, KC taken, etc.).
- **Senpai's Tips:** Week 1-specific (e.g., "Don't overthink your domain — pick something you actually know about", "The one-change-rule is the most useful habit you'll build this term", "The Console gives you $5 free credit — that's enough for Week 1").
- **Senpai's Note:** lead with "you learn faster when you've built something first" framing from `README.md`.

All `[COURSE_ID]`/`[ASSIGNMENT_ID]`/`[FILE_ID]`/`[QUIZ_ID]` placeholders confined to `href=` attributes, same as Week 2.

### 2. `knowledge-check.md` — text2qti source

13 questions in text2qti dialect, **all technical** (no Sacred Flow / process section). Breakdown:

| # | Topic | Source |
|---|---|---|
| **Vocabulary (3)** | | |
| 1 | Chatbot vs assistant vs agent — what makes something an agent | Lab packet "What You're Building" |
| 2 | What a system prompt is (instructions, not just a greeting) | Meeting 1 template |
| 3 | What "tools" mean for an agent (autonomous action via tool calls) | Meeting 2 tool rationale |
| **Console mechanics (2)** | | |
| 4 | How to create an agent in the Console (Agents → New Agent flow) | Meeting 1 step-by-step |
| 5 | Why model selection matters; `claude-sonnet-4-6` is mandatory for this course | Meeting 1 model requirement |
| **5-section system prompt (3)** | | |
| 6 | Identity & Role section purpose | Section 1 of template |
| 7 | Behavioral Constraints section purpose ("Never make up information") | Section 2 of template |
| 8 | Domain Knowledge section purpose (the agent's "what I know") | Section 3 of template |
| **Testing discipline (2)** | | |
| 9 | The one-change-rule: change one thing per test session | Meeting 2 testing framing |
| 10 | What makes a useful test session vs random poking (recording observations, comparing to prior) | Meeting 2 test discipline |
| **Tool rationale (2)** | | |
| 11 | Why you'd disable tools an agent doesn't need (least-privilege) | Meeting 2 tool rationale |
| 12 | What can go wrong with every-tool-enabled defaults (off-topic answers, unintended actions) | Meeting 2 risk framing |
| **Pedagogy (1)** | | |
| 13 | Why KCs allow unlimited attempts (learning tool, not gate) | Kept from Week 2 KC Q13 |

Format: same as Week 2 — `Quiz title:` + `Quiz description:` header, numbered questions with `*` marking correct, `... ` explanations in Senpai voice, two blank lines between questions. Title: `Week 1 Knowledge Check — Cloud Agents`.

### 3. `knowledge-check.zip` — generated QTI package

Output of `.venv/bin/text2qti knowledge-check.md` from inside the week-01 folder. Committed alongside source (same policy as Week 2).

### 4. `canvas-build-notes.md` — per-week instructor notes

Near-copy of Week 2's `canvas-build-notes.md`. Week 1 lives at the same `planning/pilot_su26/week-NN-*/` depth, so the `../../../.venv/bin/text2qti` paths are unchanged. Differences from Week 2's version:

- File-table row references "Week 1 Knowledge Check" rather than "Week 2"
- Otherwise identical

Consolidating per-week notes into a shared file is **out of scope for this PR** — issue #21 tracks that work.

## Sacred Flow for this PR (we eat our own dog food)

1. **Issue:** #20 (already exists). PR closes it.
2. **Branch:** `week-01-canvas-kc` off `origin/main`.
3. **Commits:** one per artifact + any review-fix commits.
4. **PR** to `main` with retro paragraph. Stop before merge (human decision).

## Risks and bets

- **Re-implementing Week 2's CSS in Week 1's HTML duplicates ~70 lines of styling.** Two options: (a) copy verbatim — fast, but if Week 2's styles change in the future, Week 1 drifts; (b) factor into a shared CSS file Canvas can import — Canvas strips external stylesheets, so this doesn't work. Going with option (a). Future consolidation (a `templates/` dir of partials at the pilot level) is a separate refactor when Weeks 3–8 also exist.
- **The 5-section system prompt snippet in the Canvas page is generic by design** (no real department / domain). Students personalize it in `practice.md` / `apply.md`. The snippet's purpose on the Canvas page is "show what the work looks like," not "give them a starter."
- **The "keep iterating on your agent" success path is a real course choice** (cited in `legacy_csc113/# csc 114 planning.md`) — the Canvas page acknowledges it explicitly so students aren't surprised when they don't switch to Manning in Week 2. This is non-obvious from the rest of the pilot material and worth surfacing on the Week 1 page.

## Success criteria

The slice is done when an instructor can:

1. Open the four files in `planning/pilot_su26/week-01-cloud-agents/`
2. Paste `canvas-page.html` into a new Canvas page, replace placeholders, publish — and it renders correctly
3. Import `knowledge-check.zip` into Canvas Classic Quizzes — and all 13 questions land with correct answers and explanations
4. Edit the source markdown, rerun `text2qti`, and have a fresh zip ready

…all without consulting documentation outside `canvas-build-notes.md`.

## What this enables next

Two more weeks become "Canvas-ready before Summer 2026." After this PR, the template has been instantiated twice — Weeks 3–8 can follow the same pattern with high confidence as their pedagogical content is built out.
