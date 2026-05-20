# Project Charter: CSC 114 Artificial Intelligence I — Summer 2026 Release

**Version:** 0.4 (synced with WBS v0.4 and crosswalk)
**Date:** 2026-05-20 (T-6 days from class start)
**Status:** In-flight chartering; locked floor in finalization

---

## 1. Project Purpose

CSC 114 (Artificial Intelligence I) is being offered at this college for the **first time**. By department convention, the course is being built from scratch rather than imported, using a Manning textbook as content spine. The pilot offering takes a distinctive pedagogical stance: **AI use is required and integral to coursework** — students are expected to drive AI as a context-loaded co-pilot rather than to produce work in isolation from it. The project covers the design, build, and 8-week delivery of the summer 2026 offering on a **rolling-wave model**: fixed structure at launch, with a rolling 1–2 week content development runway maintained throughout the term.

## 2. Objectives & Success Criteria

**Catalog learning outcome** (constraint, not project objective):
> Students should be able to demonstrate AI design concepts: goal-driven agents, search, optimization, problem-solving, logic, knowledge-based agents, statistical/probabilistic reasoning, basics of ML.

**Project objectives:**
- Ship a teachable first offering by 2026-05-26 with a fixed, published syllabus
- Maintain a 1–2 week content-development runway throughout the term
- Validate the two-track (Code Builders / Prompt Masters) submission model and the AI-as-co-pilot pedagogical stance
- Produce reusable artifacts (syllabus, modules, assessments, rubrics) to seed a v1.0 refinement project for future offerings

**Definition of Done — Day 1 MVP (locked floor, complete by 2026-05-25):**
- Syllabus published reflecting locked structure (see Section 3)
- Course policies published on Canvas: AI-use framing, academic integrity, attendance/participation, late policy (zero after 2 weeks)
- Assessment structure published: 16 graded artifacts (2/week), Sunday-night deadlines, weight buckets, binary lab rubric / full Assess rubric
- Canvas shell built with L/P/A/A page template
- GitHub org set up; two-track onboarding doc for students ready
- Week 1 content complete; Week 2 content drafted

**Operational success criterion (ongoing, every Monday during term):**
- Content for weeks N+1 and N+2 drafted to deliverable quality (N = current week)
- 🟢 both drafted | 🟡 only N+1 | 🔴 not even N+1 → ID consult, trim, replan

**Definition of Done — final (~2026-07-21):**
- All 8 weeks delivered; 16 artifacts graded; project demos complete
- Grades posted
- Course retrospective complete (with ID and co-instructor)
- Materials archived as inputs to next-offering refinement project

## 3. Scope

**In scope:**
- All materials for the 8-week summer 2026 offering
- Canvas course shell and per-week pages (L/P/A/A structure)
- Original assignments, labs, assessments (Manning textbook = spine, not curriculum)
- Two submission tracks: Code Builders (GitHub Sacred Flow) and Prompt Masters (drop)
- Refinement of *content delivery* on a 1–2 week runway during the term

**Out of scope:**
- Changes to locked structure after syllabus publication (see iteration boundary below)
- Canonical / permanent course materials (this is v0.x; v1.0 is a separate post-retro project)
- Textbook content itself
- The Week 7 vision-vs-NLP fork as an instructor decision (it is per-student during project work)

**Iteration boundary — what's locked vs. iterable:**

| 🔒 Locked at publication | 🌊 Iterable on 1–2 week runway |
|---|---|
| 8-week topic sequence (Manning-chapter aligned, per crosswalk) | Choice of P or A as the graded lab in any given week |
| Meeting cadence (2/week + mid-week spike) | Format selection for L/P/A (whiteboard, video, LLM tutorial, etc.) |
| Two-track model (Code Builders / Prompt Masters) | Depth of coverage on specific topics |
| 16-artifact graded structure (2/week) | Specific examples and prompts used |
| Weight buckets (40% labs / 50% homework / 10% project — working) | Lab specifics and supplementary readings |
| Sunday-night deadlines | Pacing within a given week |
| Late policy (zero after 2 weeks) | In-class activities and discussions |
| Binary lab rubric / full Assess rubric forms | |
| AI-use stance (required, context-loaded co-pilot) | |
| All course policies | |

## 4. Constraints

- **Credit structure:** 2 lec + 3 lab + 0 clinical = 3 credits (catalog, non-negotiable)
- **Catalog learning outcome:** non-negotiable
- **Term:** 8 weeks, 2026-05-26 → ~2026-07-21
- **Hard launch:** 2026-05-26 — non-movable
- **LMS:** Canvas
- **Textbook:** Manning (chapter-by-chapter mapping per crosswalk)
- **Assessment cadence:** 16 graded artifacts, Sunday-night deadlines, zero-after-2-weeks late policy
- **Pedagogical stance:** AI use required and integral (not a prohibition policy — a practice policy)
- **Budget:**
  - Instructor/ID time
  - Claude API costs out-of-pocket (lead instructor) — flagged as risk; remediation deferred to next-offering project
  - Larger spends require Chair+ approval

## 5. Assumptions

- Manning textbook adequately covers catalog learning outcomes as a spine
- Enrolled students meet prerequisites for AI I (verify with registrar)
- Students have working LLM access (class-provided agent, or own accounts — see open question A10 in WBS)
- Lead instructor can sustain ~10–15 hrs/week of content development during the term
- Co-instructor available in jazz-improv build mode throughout the term
- Instructional designer available for weekly check-ins and ad-hoc runway sanity-checks

## 6. High-Level Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Lead instructor wearing PM + content sponsor + creator + teacher hats — no external check on scope/quality/pace | High | Med | ID confirmed as scope proxy; jazz-improv with co-instructor provides real-time second perspective |
| Runway drops below 1 week during term | Med | High | Monday runway check; yellow → trim depth and swap to cheap format; red → ID escalation + replan |
| Jazz-improv build mode doesn't scale beyond two aligned instructors | Known | Low (now) → Med (later) | Acceptable for pilot; documented as small-team mode; v1.0 refinement project may need different model if team grows |
| Bus factor of 2 on jazz-improv pipeline (either instructor unavailable disrupts both) | Med | High | Shared materials location (TBD); starter doc as common artifact; agreed primary author per Assess rubric |
| Student LLM access inconsistent | Med | Med | A10 work package; resolve before launch |
| Claude API costs out-of-pocket unsustainable at scale | Med | Low → Med | Monitor monthly; surface to Chair as institutional cost ahead of next offering |
| First-time offering: unknowns in student readiness, pacing, assessment difficulty | High | Med | Pilot-appropriate low-ceremony lab rubric; early diagnostic week 1; explicit student communication about iterative delivery |
| Working weight bucket interpretation incorrect (5 homework + 3 project-milestone) | Low-Med | Med | Confirm with ML instructor before syllabus publication |
| AI-required stance is novel; risk of student confusion or grievance about "AI is required" | Low-Med | Low-Med | Onboarding doc explaining the pedagogical stance; clear examples in policies |

## 7. Stakeholders

| Stakeholder | Role | RACI hint |
|---|---|---|
| **Lead instructor** (PM + content sponsor + co-creator + teacher) | Day-to-day PM; assessment authorship; Canvas build; primary instruction | A/R |
| **ML domain specialist (co-instructor)** | Equal partner in jazz-improv build mode; primary contributor to ML-heavy weeks (3, 4, 6, 7, 8) | R (joint with lead); A on ML technical content |
| Instructional designer | Pedagogical review; Canvas guidance; **scope proxy / external check** | C |
| Department Chair (and above) | Non-trivial budget approval; institutional oversight | A (budget) |
| Teacherbot | Documentation, planning, drafting support | (Tool, not stakeholder) |
| Students | End users; feedback source for delivery refinement | I |

## 8. Authority

- **PM:** Lead instructor
- **Content sponsor:** Lead instructor (with ID as informal external check; co-instructor as real-time partner)
- **Budget sponsor (beyond out-of-pocket):** Department Chair
- **Build mode:** Jazz improv (mob/ensemble) between lead and ML instructor — no formal per-week assignment
- **PM decisions:** day-to-day sequencing, format selection, P-vs-A lab choice, depth/examples within iterable layer
- **Sponsor decisions (with ID consult):** anything affecting locked layer
- **Locked-layer changes after launch:** require explicit student communication, ID consultation, treated as scope changes

## 9. High-Level Milestones

| Milestone | Target | Status |
|---|---|---|
| Charter v0.4 | 2026-05-20 | ✓ |
| Day 1 MVP locked floor complete (syllabus published) | 2026-05-25 | In progress |
| Class starts | 2026-05-26 | Fixed |
| **Weekly Monday runway check** | 06-01, 06-08, 06-15, 06-22, 06-29, 07-06, 07-13 | Ongoing |
| First graded work returned (feedback usable) | ~2026-06-09 (week 3) | Planned |
| Project proposal due (W5 Assess; first project milestone) | ~2026-06-21 (Sunday W5) | Planned |
| Mid-term consult with ID | ~2026-06-22 (week 4–5 boundary) | Planned |
| Project check-in due (W7 Assess) | ~2026-07-05 (Sunday W7) | Planned |
| Final project due (W8 Assess) | ~2026-07-19 (Sunday W8) | Planned |
| Term ends | ~2026-07-21 | Fixed |
| Course retrospective | by 2026-07-28 | Planned |

---

## Working artifacts

- **Crosswalk:** topic-by-topic mapping of Manning chapters to course weeks; csc_dash asset reuse strategy
- **WBS v0.4:** work-package decomposition; per-week status board; runway check
- **Charter (this document):** structural lock; updated when scope/structure changes

## Open questions

1. Weight bucket confirmation
2. Exact Sunday deadline time
3. Shared materials location (bus-factor mitigation)
4. LLM access plan for students (A10)
5. First-pass format selection per week (highest leverage for build-hour estimate)
