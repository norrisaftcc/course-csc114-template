---
id: "05"
title: Ship It, Document It, Present It
subtitle: "Sprint 3 Begin — Deploy and Document Data Man"
role: Release Manager
loop: loop1
weeks: "9–10"
points: 125
self_graded: false
gates_next: true
sprint_tag: Sprint 3 Begin
sim:
  setting: "NTS Floor 4"
  blurb: "Deploy day. The checklist, the handoff, the runbook. Students swap repos with a classmate — can they run it without help?"
  hook: "Your README is missing a step. Classmate can't run the app. 10 minutes to fix it."
before_class:
  - text: "README Quality Ranking — rank 4 READMEs best-to-worst, identify gaps"
    mlo: "MLO 5.2 · Sim"
    channel: sim
  - text: "Technical vs. User Documentation Sorter — classify 12 sentences"
    mlo: "MLO 5.2/5.3 · Sim"
    channel: sim
  - text: "Deployment Sequence Simulation — drag steps in correct order, identify skipped"
    mlo: "MLO 5.1 · Sim"
    channel: sim
  - text: "Sprint Review Presentation Structure — 8 sections, mixed audience"
    mlo: "MLO 5.4 · Sim"
    channel: sim
  - text: "Commit History Review — classify 10 commits; rewrite 3 poor messages"
    mlo: "MLO 5.5 · Sim"
    channel: sim
  - text: "Non-Technical User Confusion Scenario — README step revision"
    mlo: "MLO 5.3/5.6 · Sim"
    channel: sim
in_class:
  - title: "Repo Swap Activity"
    text: "Students clone a classmate's repo and attempt to run it using only the README. Time-boxed 10 minutes. Report blockers live."
  - title: "Documentation Calibration"
    text: "Class reviews sample READMEs together. Apply the quality ranking rubric as a group. Normal models what \"good\" looks like."
  - title: "Presentation Outline Workshop"
    text: "Students draft Sprint 3 presentation outlines. Peer feedback on structure before instructor comment."
after_class:
  - title: "Data Man — Deployed Application"
    desc: "Live production URL; core features functional in production"
    points: 30
    type: URL Submit
  - title: "Technical Documentation Package"
    desc: "README + setup instructions + code comments; self-assessment checklist submitted alongside"
    points: 30
    type: Rubric
  - title: "Data Man User Documentation"
    desc: "First-time user guide for non-technical audience; covers all core tasks"
    points: 25
    type: Rubric
  - title: "Data Man GitHub Repository"
    desc: "Graded on commit history quality, organization, sprint artifact inclusion"
    points: 20
    type: URL Submit
  - title: "Sprint 3 Presentation Outline"
    desc: "Structured outline for instructor comment — not graded; completion required"
    points: 0
    type: Completion
    gate: "🔒 Gates M6"
mlos:
  - id: "5.1"
    text: "Deploy Flask app to cloud; verify production"
    blooms: Apply
    clo: CLO 5
  - id: "5.2"
    text: "Produce technical documentation package"
    blooms: Create
    clo: CLO 5
  - id: "5.4"
    text: "Prepare structured sprint review presentation"
    blooms: Create
    clo: CLO 5
  - id: "5.5"
    text: "Produce version-controlled repo with organized commits"
    blooms: Apply
    clo: CLO 5
rsi:
  - label: "RSI Touchpoint"
    text: "Instructor reviews technical docs and provides personalized comment on each student's presentation outline before Module 6."
    window: "72 hrs"
    platform: "Canvas Comment"
    gates: "🔒 Gates M6"
lucidchart:
  - text: "Deployment Runbook — Data Man deploy + rollback (used in repo swap)"
thread:
  label: Data Man Thread
  text: "Deploy Data Man. Produce technical and user-facing docs. Prepare Sprint 3 presentation outline. Review groups formed."
  deliverable: "Deployed app + docs + presentation outline"
gates:
  unlocks_when: "Flask app submitted"
  gates_next_on: "Outline submitted + instructor commented"
  within_module: "Review groups of 3–4 formed at end of module; carry forward through Module 8"
---

# 05 — Ship It, Document It, Present It

**Loop 1 · Sprint 3 Begin · Weeks 9–10 · 125 pts.** Role: Release Manager. Deploy and
document Data Man; review groups form.

## ⬡ Before Class — Async

> **NTS Floor 4.** Deploy day. The checklist, the handoff, the runbook. Students swap
> repos with a classmate — can they run it without help?
> *"Your README is missing a step. Classmate can't run the app. 10 minutes to fix it."*

- ▶ README Quality Ranking — rank 4 READMEs best-to-worst, identify gaps · *MLO 5.2 · Sim*
- ▶ Technical vs. User Documentation Sorter — classify 12 sentences · *MLO 5.2/5.3 · Sim*
- ▶ Deployment Sequence Simulation — drag steps in correct order, identify skipped · *MLO 5.1 · Sim*
- ▶ Sprint Review Presentation Structure — 8 sections, mixed audience · *MLO 5.4 · Sim*
- ▶ Commit History Review — classify 10 commits; rewrite 3 poor messages · *MLO 5.5 · Sim*
- ▶ Non-Technical User Confusion Scenario — README step revision · *MLO 5.3/5.6 · Sim*

**Lucidchart:** ◈ Deployment Runbook — Data Man deploy + rollback (used in repo swap).

**👥 Review Groups Formed This Module:** Groups of 3–4 assigned by instructor at end of
Module 5. Students know their group before Module 6. Groups carry forward through Module 8.

## ⬡ In Class — Facilitated

- 🎤 **Repo Swap Activity** — Students clone a classmate's repo and attempt to run it
  using only the README. Time-boxed 10 minutes. Report blockers live.
- 🗣 **Documentation Calibration** — Class reviews sample READMEs together. Apply the
  quality ranking rubric as a group. Normal models what "good" looks like.
- 🗂 **Presentation Outline Workshop** — Students draft Sprint 3 presentation outlines.
  Peer feedback on structure before instructor comment.

**⚡ RSI Touchpoint:** Instructor reviews technical docs and provides personalized
comment on each student's presentation outline before Module 6. *Response window: 72 hrs
· Platform: Canvas Comment · 🔒 Gates M6.*

### MLOs

- **5.1** Deploy Flask app to cloud; verify production · *Apply · CLO 5*
- **5.2** Produce technical documentation package · *Create · CLO 5*
- **5.4** Prepare structured sprint review presentation · *Create · CLO 5*
- **5.5** Produce version-controlled repo with organized commits · *Apply · CLO 5*

## ⬡ After Class — Canvas Submissions

- **Data Man — Deployed Application** — live production URL; core features functional in production · *30 pts · URL Submit*
- **Technical Documentation Package** — README + setup instructions + code comments; self-assessment checklist submitted alongside · *30 pts · Rubric*
- **Data Man User Documentation** — first-time user guide for non-technical audience; covers all core tasks · *25 pts · Rubric*
- **Data Man GitHub Repository** — graded on commit history quality, organization, sprint artifact inclusion · *20 pts · URL Submit*
- **Sprint 3 Presentation Outline** — structured outline for instructor comment — not graded; completion required · *0 pts · Completion · 🔒 Gates M6*

## Thread & gates

- **Data Man Thread:** Deploy Data Man. Produce technical and user-facing docs. Prepare
  Sprint 3 presentation outline. Review groups formed. ↳ *Deliverable: Deployed app +
  docs + presentation outline.*
- **Unlocks when:** Flask app submitted. **Gates M6 on:** Outline submitted + instructor commented.
