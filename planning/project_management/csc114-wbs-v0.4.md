# CSC-114 Summer 2026 — Work Breakdown Structure (lightweight)

**Version:** 0.4
**Companion to:** Charter v0.4, Crosswalk
**Date:** 2026-05-20 (T-6 days from launch)

---

## A. Pre-launch structural work (must be 🟢 by 2026-05-25)

| # | Work package | Owner | Status | Est. hrs | Notes |
|---|---|---|---|---|---|
| A1 | Student-facing syllabus document | | | | Pulls topic structure from crosswalk; published to Canvas + students |
| A2 | Assessment structure | | | | **Locked:** 16 graded artifacts (2/week): one lab from P or A, one Assess. Sunday-night deadlines. **Late policy: zero after 2 weeks past deadline; no partial penalty within window.** **Working weights:** 40% labs (8 × 5%), 50% homework (5 × 10% — weeks 1/2/3/4/6 Assess), 10% project (weeks 5/7/8 Assess as project milestones). **Open:** weight bucket confirmation, exact Sunday deadline time. |
| A3 | Course policies — populated into Canvas | | | | **AI use is required and integral.** Pedagogical framing: students load assignment context into their agent (or use the class agent which already has it); appropriate assistance follows from loaded context. No separate "AI permitted/prohibited" rule. Also: academic integrity, attendance/participation, late policy (per A2). |
| A4 | Canvas shell + L/P/A/A page template | | | | Reusable per-week page structure |
| A5 | GitHub org / class repo setup | | | | Issue templates, branch protection, drop folder for Prompt Masters |
| A6 | Two-track onboarding doc for students | | | | Explains the two tracks; how to choose |
| A7 | Sacred Flow quick-start (Code Builders) | | | | Repurposed from csc_dash Module 01 Git basics block |
| A8 | Drop-submission quick-start (Prompt Masters) | | | | GitHub Desktop / web upload path |
| A9 | Vision-vs-NLP fork communication for students | | | | One-pager explaining the two paths and how to choose. Decision is per-student, during Week 5 proposal. |
| A10 | LLM access plan for students | | | | Confirm students have working AI access for tutorials and context-loaded Assess work |

## B. Per-week content (the template, applied 8x)

| # | Work package | Notes |
|---|---|---|
| B1 | Confirm topic, learning objectives, asset reuse list, and **which of P or A is graded this week** | Reference the crosswalk row |
| B2 | "Learn" activity (format chosen per week) | Whiteboard / video / LLM tutorial / reading / notebook |
| B3 | "Practice" activity (format chosen per week) | If graded, becomes B5a |
| B4 | "Apply" activity (format chosen per week) | If graded, becomes B5a |
| B5a | **Graded lab — binary rubric** ("5/5 or redo") | Whichever of P or A is graded that week; pilot-appropriate low-ceremony grading |
| B5b | **Graded Assess artifact + full rubric** | Full rubric engagement. Homework or project milestone depending on week. |
| B6 | Canvas page(s) built from A4 template | Links B2–B5 |
| B7 | Track-specific submission scaffolding for both B5a and B5b | Both deliverables get Sacred Flow OR drop variants |
| B8 | QA pass: walk through as a student | Check prereqs, dependencies, broken links, time estimates |
| B9 | Co-instructor review (jazz improv style — see D) | Especially for ML-heavy weeks (2–3, 6–8) |
| B10 | Office hours plan / anticipated stuck-points | Outlined, not full-detail |

**Definition of "deliverable quality" for a week:** B1–B9 complete; B10 outlined.

## C. Per-week status board

| Week | Topic | L/P/A format | P or A → lab? | B1 | B2 | B3 | B4 | B5a | B5b | B6 | B7 | B8 | B9 | B10 | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Cloud Agents | TBD | TBD | | | | | | | | | | | | 🛠️ |
| 2 | Keras hello world | TBD | TBD | | | | | | | | | | | | 🛠️ |
| 3 | Math + optimization (Ch 2) | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 4 | Frameworks + Keras fluency (Ch 3, 7) | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 5 | ML fundamentals + workflow (Ch 5, 6) — **proposal due (project milestone)** | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 6 | Vision (Ch 8, 9) | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 7 | Interp + project check-in (project milestone) | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 8 | Generative + best practices — **final (project milestone)** | TBD | TBD | | | | | | | | | | | | ⏭️ |

**Monday runway check:**
- 🟢 Green: weeks N+1 and N+2 fully ✅ on B1–B9
- 🟡 Yellow: only N+1 fully ✅
- 🔴 Red: N+1 not yet ✅ → ID consult, trim depth, replan

## D. Build ownership: jazz improv (mob/ensemble mode)

Both instructors riff off the starter doc collaboratively rather than formal per-week assignment. Known small-team practice (mob programming / ensemble programming in software). Working well; documented here so the model is explicit.

**Implications:**
- Co-instructor review (B9) is implicit-by-default
- Bus factor remains a real risk; shared materials location and starter doc are the mitigations
- Suggested anchors that are cheap to add: agreed primary author per *Assess* rubric (consistency matters), and a "who-has-the-pen-this-week" convention

---

## Format-vs-cost reference

| Format | Build cost | In-class cost | Reusability | Best for |
|---|---|---|---|---|
| Whiteboard lecture | Low | High (must be live) | None directly | Concepts that benefit from real-time derivation |
| Recorded video | High | Low (async) | High | Conceptual material that won't change much |
| LLM-assisted tutorial | Medium | Variable | Medium-high | Hands-on skill building where pacing varies |
| Notebook exercise | Low-medium | Low | High | Code-centric practice (natural fit for P) |
| Prepared reading + discussion | Very low | Medium | Very high | Textbook-adjacent material |
| Spike / experiment | Low (prompt only) | Low | High | Natural fit for A |

---

## Open questions still outstanding

1. **Weight bucket confirmation** (5 homework + 3 project-milestone interpretation)
2. **Exact Sunday deadline time** (11:59pm local? Other?)
3. **Shared materials location** — for bus-factor mitigation
4. **LLM access plan for students** (A10)
5. **First-pass format selection per week** — biggest unused leverage; converts WBS to build-hour estimate

## Settled this round

- ✅ Late policy: zero after 2 weeks, no partial penalty within window
- ✅ Lab rubric form: binary ("5/5 or redo") — pilot-appropriate
- ✅ Assess rubric form: full rubric engagement
- ✅ AI-use framing: context-loaded co-pilot expected throughout (not "permitted/prohibited" framing)
- ✅ Vision-vs-NLP fork: student-side per-project decision, not instructor decision

## How to use this WBS

1. **Before launch (by 2026-05-25):** every row in A must be ✅.
2. **Every Monday during the term:** update C, compute runway status.
3. **Mid-term consult (week 4–5):** use C as the artifact with the ID.
4. **Week 8 retrospective:** completed WBS feeds the v1.0 refinement project as effort baseline.
