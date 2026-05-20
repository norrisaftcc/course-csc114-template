# Project Charter: CSC 114 Artificial Intelligence I — Summer 2026 Release

**Version:** 0.3 (recontextualized to rolling-wave operating model)
**Date:** 2026-05-20 (T-6 days from class start)
**Status:** In-flight chartering; locked floor in finalization

---

## 1. Project Purpose

CSC 114 (Artificial Intelligence I) is being offered at this college for the **first time**. By department convention, the course is being built from scratch rather than imported, using an established AI textbook as content spine. The project covers the design, build, and 8-week delivery of the summer 2026 offering on a **rolling-wave model**: fixed syllabus / schedule / assessment structure at launch, with a rolling 1–2 week content development runway maintained throughout the term.

## 2. Objectives & Success Criteria

**Catalog learning outcome** (constraint, not project objective):
> Students should be able to demonstrate AI design concepts: goal-driven agents, search, optimization, problem-solving, logic, knowledge-based agents, statistical/probabilistic reasoning, basics of ML.

**Project objectives:**
- Ship a teachable first offering by 2026-05-26 with a fixed, published syllabus
- Maintain a 1–2 week content-development runway throughout the term
- Produce reusable artifacts (syllabus, modules, assessments, rubrics) to seed a v1.0 refinement project for future offerings

**Definition of Done — Day 1 MVP (locked floor, complete by 2026-05-25):**
- **Course outline fixed** (8-week sequence of topics)
- **Schedule fixed** (when each topic is covered)
- **Assessment structure fixed** (count, weights, types, due dates, late policy)
- **Grading rubric criteria established** (at minimum for weeks 1–3 graded artifacts)
- **Course policies fixed** (academic integrity, AI-use, attendance/participation)
- **Syllabus published** to students reflecting all of the above
- **Week 1 content complete** ✓ (per lead instructor)
- **Week 2 content drafted** to deliverable quality
- *[TBD: confirm week 2 status; ideally week 3 in draft too — determines launch posture]*

**Operational success criterion (ongoing, every Monday during term):**
- Content for weeks N+1 and N+2 drafted to deliverable quality (N = current week)
- 🟢 Green: both drafted
- 🟡 Yellow: only N+1 drafted → defer non-essential work; trim depth on upcoming module
- 🔴 Red: not even N+1 fully drafted → escalate to ID, replan, accept reduced depth this week

**Definition of Done — final (~2026-07-21):**
- All 8 weeks delivered
- Final assessments graded; grades posted
- Course retrospective complete (with ID and co-instructor)
- Materials archived as inputs to next-offering refinement project

## 3. Scope

**In scope:**
- All materials for the 8-week summer 2026 offering
- LMS shell and module structure *[TBD: which LMS]*
- Original assignments, labs, assessments (textbook = spine, not curriculum)
- Refinement of *content delivery* on a 1–2 week runway during the term

**Out of scope:**
- Changes to locked structure after syllabus publication (outline, schedule, assessment structure, policies)
- Canonical / permanent course materials (this is v0.x; v1.0 is a separate post-retro project)
- Textbook content itself
- *[TBD: any catalog topics deliberately at survey depth only?]*

**Iteration boundary — what's locked vs. iterable:**

| 🔒 Locked at publication | 🌊 Iterable on 1–2 week runway |
|---|---|
| Course outline (topic sequence) | Depth of coverage on specific topics |
| Week-by-week schedule | Specific examples used |
| Assessment structure, weights, dates | In-class activities and discussions |
| Grading rubric criteria | Lab specifics and supplementary readings |
| Course policies | Pacing within a given week |
| AI-use policy | Live-discussion prompts |

## 4. Constraints

- **Credit structure:** 2 lec + 3 lab + 0 clinical = 3 credits (catalog, non-negotiable)
- **Catalog learning outcome:** non-negotiable; all major catalog topics must be addressed
- **Term:** 8 weeks, 2026-05-26 → ~2026-07-21
- **Hard launch:** 2026-05-26 — non-movable
- **Budget:**
  - Instructor/ID time
  - Claude API costs out-of-pocket (lead instructor) — flagged as risk; remediation deferred to next-offering project
  - Larger spends require Chair+ approval
- **LMS platform:** *[TBD]*
- **Departmental syllabus template:** *[TBD]*
- **Accreditation feed:** *[TBD — does this course feed an accredited program?]*

## 5. Assumptions

- Textbook adequately covers catalog learning outcomes as a spine
- Enrolled students meet prerequisites for AI I (verify with registrar)
- Co-instructor will deliver ML modules per agreed split *[TBD: agreement explicit?]*
- Lead instructor can sustain ~10–15 hrs/week of content development during the term to maintain runway
- Instructional designer is available for weekly check-ins and ad-hoc runway sanity-checks

## 6. High-Level Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Lead instructor wearing PM + content sponsor + creator + teacher hats — no external check on scope, quality, pace | High | Med-High | ID confirmed as scope proxy; weekly check-in with co-instructor |
| **Runway drops below 1 week during term** | Med | High | Monday runway check; yellow → trim depth on upcoming week; red → ID escalation + replan |
| Scope creep from instructor enthusiasm | Med | Med | "What would ID say?" gut-check before any addition; locked outline prevents structural creep |
| Claude API costs scale; out-of-pocket funding unsustainable | Med | Low → Med | Monitor monthly; surface to Chair as institutional cost ahead of next offering |
| Bus factor of 1 on content pipeline | Med | High | *[TBD: shared repo; co-instructor visibility into draft pipeline]* |
| First-time offering: unknowns in student readiness, pacing, assessment difficulty | High | Med | Early diagnostic week 1; explicit communication that *delivery* iterates but *structure* doesn't; ID consultation on first assessment results |
| Locked floor itself proves miscalibrated (e.g., assessment weights wrong) | Low-Med | High | Strong syllabus-design pass with ID *before* 2026-05-25 publication; build modest "instructor discretion" language into grading policy |

## 7. Stakeholders

| Stakeholder | Role | RACI hint |
|---|---|---|
| **Lead instructor** (PM + content sponsor + primary creator + teacher) | Owns content approval, day-to-day PM, primary instruction | A/R |
| Co-instructor (ML domain specialist) | ML module content; backup teaching capacity | R (ML modules); C (overall) |
| Instructional designer | Pedagogical review; LMS guidance; **scope proxy / external check** | C (confirmed role) |
| Department Chair (and above) | Non-trivial budget approval; institutional oversight | A (budget) |
| Teacherbot | Documentation, planning, drafting support | (Tool, not stakeholder) |
| Students | End users; feedback source for delivery refinement | I |

## 8. Authority

- **PM:** Lead instructor
- **Content sponsor:** Lead instructor (dual-hat; ID functions as external scope check)
- **Budget sponsor (beyond out-of-pocket):** Department Chair
- **PM decisions:** day-to-day sequencing, depth/examples/activities within the iterable layer
- **Sponsor decisions (with ID consult):** anything affecting the locked layer
- **Locked-layer changes after launch:** require explicit student communication, ID consultation, and treatment as scope changes

## 9. High-Level Milestones

| Milestone | Target | Status |
|---|---|---|
| Charter v0.3 | 2026-05-20 | ✓ |
| Day 1 MVP locked floor complete (syllabus published) | 2026-05-25 | In progress |
| Class starts | 2026-05-26 | Fixed |
| **Weekly Monday runway check** | 06-01, 06-08, 06-15, 06-22, 06-29, 07-06, 07-13 | Ongoing |
| First graded work returned (feedback usable) | ~2026-06-09 (week 3) | Planned |
| Mid-term consult with ID | ~2026-06-22 (week 4 boundary) | Planned |
| Final week | 2026-07-14 → 07-21 | Fixed |
| Course retrospective | by 2026-07-28 | Planned |

---

## Open questions blocking charter completion

1. **Week 2 and 3 content status:** drafted, partially drafted, or vapor? Determines whether you launch on 🟢 green, 🟡 yellow, or 🔴 red.
2. **Assessment structure:** count / weights / dates / late-policy — locked yet, or being finalized this week?
3. **Co-instructor agreement on ML module ownership** — explicit or assumed?
4. **LMS / syllabus template constraints** — platform and required template?
5. **Bus-factor mitigation:** where do materials live? Can co-instructor or ID pick up if you're unavailable?
