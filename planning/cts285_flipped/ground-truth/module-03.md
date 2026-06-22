---
id: "03"
title: Design, Build, and Prove It Works
subtitle: "Sprint 1 — System Design and Console Prototype"
role: PO / Developer
loop: loop1
weeks: "5–6"
points: 100
self_graded: false
gates_next: true
sprint_tag: Sprint 1
sim:
  setting: "NTS Floor 2"
  blurb: "Architecture meeting. Nobody agrees on the data model. Students must diagram it, define Done, and build the first Python console app."
  hook: "Flat file or database? Students make the call and defend it."
before_class:
  - text: "ERD Normalization Quiz — identify 3NF violations, select corrections"
    mlo: "MLO 3.2 · Canvas New Quiz"
    channel: canvas
  - text: "UML Notation Matching — 15 symbols across use case & sequence types"
    mlo: "MLO 3.4 · Canvas New Quiz"
    channel: canvas
  - text: "Definition of Done Checklist Builder — 15 criteria, select applicable"
    mlo: "MLO 3.1 · Sim"
    channel: sim
  - text: "Does This Story Pass DoD? — 3 test results, determine completion"
    mlo: "MLO 3.1 · Sim"
    channel: sim
  - text: "Python Fundamentals — 8 sequentially unlocked auto-graded exercises"
    mlo: "MLO 3.5 · Canvas New Quiz · functions, loops, file I/O"
    channel: canvas
  - text: 'Sprint Demo Communication — "flat file vs. database?" decision rationale'
    mlo: "MLO 3.7 · Sim"
    channel: sim
in_class:
  - title: "Architecture Decision Debrief"
    text: "Class discusses flat file vs. database choices. Normal reveals trade-offs. Teams defend their ERDs."
  - title: "DoD Workshop"
    text: "Each student shares their DoD. Class votes on which criteria are truly testable. Calibrate together."
  - title: "Sprint 1 Demo (Low Stakes)"
    text: "3-5 min class standup demo. 2 peer observation forms required. Normal facilitates; students respond to peer questions."
after_class:
  - title: "Data Man Design Package"
    desc: "ERD, wireframes (3+), UML use case, UML sequence, design rationale (300 words)"
    points: 35
    type: "Rubric · CLO 3"
  - title: "Definition of Done — Data Man"
    desc: "Min. 5 testable criteria with justification"
    points: 10
    type: Pass/Fail
    gate: "🔒 Gates console"
  - title: "Data Man Console Application"
    desc: "GitHub repo link; 3+ user stories; README enables new user to run without help"
    points: 40
    type: "Rubric · CLO 4+5"
  - title: "Sprint 1 Demo — Class Standup Review"
    desc: "3-5 min live or recorded demo; 2 peer observation forms required"
    points: 15
    type: Presentation
    gate: "🔒 Gates M4"
mlos:
  - id: "3.1"
    text: "Evaluate quality using DoD testing methodology"
    blooms: Evaluate
    clo: CLO 1
  - id: "3.2"
    text: "Create normalized ERD in 3NF"
    blooms: Create
    clo: CLO 3
  - id: "3.5"
    text: "Build Python console app — 3+ user stories"
    blooms: Apply
    clo: CLO 4
  - id: "3.7"
    text: "Execute Sprint 1 review — demo + rationale"
    blooms: Apply
    clo: CLO 5
rsi:
  - label: "RSI Touchpoint"
    text: "Instructor reviews ERD and wireframes in Lucidchart, adding personalized comments on at least 2 design decisions before build begins. Gates console submission."
    window: "72 hrs"
    platform: "Lucidchart + Canvas"
    gates: "🔒 Gates console build"
lucidchart:
  - text: "ERD — Data Man schema"
    required: "🔒 gates console build"
  - text: "Wireframes — min. 3 screens"
    required: "🔒 gates console build"
  - text: "Sprint Board — Sprint 1 stories, tasks, capacity"
thread:
  label: Data Man Thread
  text: "Design phase: ERD, wireframes, UML. Sprint 1: build Python console app (3+ stories). Sprint closes with class standup demo."
  deliverable: "Design package + working Python console app"
gates:
  unlocks_when: "M2 backlog instructor-reviewed"
  gates_next_on: "Sprint 1 demo complete"
  within_module: "Lucid review (ERD + wireframe comments) gates build"
---

# 03 — Design, Build, and Prove It Works

**Loop 1 · Sprint 1 · Weeks 5–6 · 100 pts.** Role: PO / Developer. System design and
the first console prototype.

## ⬡ Before Class — Async

> **NTS Floor 2.** Architecture meeting. Nobody agrees on the data model. Students
> must diagram it, define Done, and build the first Python console app.
> *"Flat file or database? Students make the call and defend it."*

- Q ERD Normalization Quiz — identify 3NF violations, select corrections · *MLO 3.2 · Canvas New Quiz*
- Q UML Notation Matching — 15 symbols across use case & sequence types · *MLO 3.4 · Canvas New Quiz*
- ▶ Definition of Done Checklist Builder — 15 criteria, select applicable · *MLO 3.1 · Sim*
- ▶ Does This Story Pass DoD? — 3 test results, determine completion · *MLO 3.1 · Sim*
- Q Python Fundamentals — 8 sequentially unlocked auto-graded exercises · *MLO 3.5 · Canvas New Quiz · functions, loops, file I/O*
- ▶ Sprint Demo Communication — "flat file vs. database?" decision rationale · *MLO 3.7 · Sim*

**Lucidchart (instructor review required before build):**
- ◈ ERD — Data Man schema · *🔒 gates console build*
- ◈ Wireframes — min. 3 screens · *🔒 gates console build*
- ◈ Sprint Board — Sprint 1 stories, tasks, capacity

## ⬡ In Class — Facilitated

- 🎤 **Architecture Decision Debrief** — Class discusses flat file vs. database choices.
  Normal reveals trade-offs. Teams defend their ERDs.
- 🗣 **DoD Workshop** — Each student shares their DoD. Class votes on which criteria
  are truly testable. Calibrate together.
- 🗂 **Sprint 1 Demo (Low Stakes)** — 3-5 min class standup demo. 2 peer observation
  forms required. Normal facilitates; students respond to peer questions.

**⚡ RSI Touchpoint:** Instructor reviews ERD and wireframes in Lucidchart, adding
personalized comments on at least 2 design decisions before build begins. Gates
console submission. *Response window: 72 hrs · Platform: Lucidchart + Canvas · 🔒 Gates console build.*

### MLOs

- **3.1** Evaluate quality using DoD testing methodology · *Evaluate · CLO 1*
- **3.2** Create normalized ERD in 3NF · *Create · CLO 3*
- **3.5** Build Python console app — 3+ user stories · *Apply · CLO 4*
- **3.7** Execute Sprint 1 review — demo + rationale · *Apply · CLO 5*

## ⬡ After Class — Canvas Submissions

- **Data Man Design Package** — ERD, wireframes (3+), UML use case, UML sequence, design rationale (300 words) · *35 pts · Rubric · CLO 3*
- **Definition of Done — Data Man** — min. 5 testable criteria with justification · *10 pts · Pass/Fail · 🔒 Gates console*
- **Data Man Console Application** — GitHub repo link; 3+ user stories; README enables new user to run without help · *40 pts · Rubric · CLO 4+5*
- **Sprint 1 Demo — Class Standup Review** — 3-5 min live or recorded demo; 2 peer observation forms required · *15 pts · Presentation · 🔒 Gates M4*

## Thread & gates

- **Data Man Thread:** Design phase: ERD, wireframes, UML. Sprint 1: build Python
  console app (3+ stories). Sprint closes with class standup demo. ↳ *Deliverable:
  Design package + working Python console app.*
- **Unlocks when:** M2 backlog instructor-reviewed. **Lucid review gates build:**
  ERD + wireframe comments required. **Gates M4 on:** Sprint 1 demo complete.
