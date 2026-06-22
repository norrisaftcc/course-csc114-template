---
id: "04"
title: Web Front End and the Sprint Machine
subtitle: "Sprint 2 — Flask Web Application"
role: Scrum Master / Developer
loop: loop1
weeks: "7–8"
points: 125
self_graded: false
gates_next: true
sprint_tag: Sprint 2
sim:
  setting: "NTS Floor 3"
  blurb: "Sprint board is behind on Day 7. Students are now Scrum Masters — facilitating the machine while building the Flask front end."
  hook: "Standup reveals a blocker. As SM, what do you do? The sprint goal is at risk."
before_class:
  - text: "SCRUM Ceremony Simulator — 9 branching scenarios across standup/planning/retro"
    mlo: "MLO 4.4 · Dashboard: scrum-simulators"
    channel: dash
  - text: "Risk Matrix Activity — score 8 risks, drag to priority zone, select mitigation"
    mlo: "MLO 4.2 · Sim"
    channel: sim
  - text: "Sprint Backlog Prioritization — 10 stories, 20-pt capacity, justify cuts"
    mlo: "MLO 4.1 · Sim"
    channel: sim
  - text: "Flask Routing & Templates Quiz — 15 questions on routes, templates, forms"
    mlo: "MLO 4.3/4.6 · Canvas New Quiz"
    channel: canvas
  - text: "Burndown Chart Reading — Day 7 of 14, 3 scenarios"
    mlo: "MLO 4.5 · Sim"
    channel: sim
  - text: "Scrum Master Blocker Response — teammate stuck 2 days"
    mlo: "MLO 4.4 · Sim · branching downstream effect"
    channel: sim
  - text: "Technical Communication — Flask decisions for developer audience"
    mlo: "MLO 4.7 · Sim"
    channel: sim
in_class:
  - title: "SM Facilitation Practice"
    text: "Students rotate Scrum Master role. Run a live standup where a blocker is revealed. Class debrief on SM response choices."
  - title: "Flask Architecture Discussion"
    text: 'Share "why templates vs. inline HTML" decisions. Norris surfaces common misconceptions from quiz data.'
  - title: "Sprint 2 Planning Session"
    text: "Students present reprioritized backlogs. Norris reviews risk registers together as a class — what did teams miss?"
after_class:
  - title: "Sprint 2 Reprioritized Backlog"
    desc: "Updated backlog with Sprint 2 selection, revised MoSCoW, written justification for priority changes"
    points: 20
    type: "Rubric · CLO 1"
  - title: "Data Man Risk Register"
    desc: "Lucidchart — 6+ risks, scores, mitigation + contingency for all high-priority, owners assigned"
    points: 15
    type: Pass/Fail
    gate: "🔒 Gates Flask build"
  - title: "Sprint 2 Standup Log"
    desc: "10+ entries across sprint; three questions answered specifically; real daily timestamps"
    points: 20
    type: Discussion Board
  - title: "Data Man Flask Web Application"
    desc: "GitHub repo link; 2+ routes, 2+ templates, 1+ form; Data Man features via browser"
    points: 50
    type: "URL Submit · CLO 4"
  - title: "Flask Architecture Technical Summary"
    desc: "300-word explanation of routing decisions + one architectural trade-off, developer audience"
    points: 20
    type: "Rubric · CLO 5"
mlos:
  - id: "4.1"
    text: "Prioritize backlog within sprint capacity constraints"
    blooms: Evaluate
    clo: CLO 1
  - id: "4.4"
    text: "Facilitate Scrum ceremonies with time-boxing"
    blooms: Apply
    clo: CLO 1
  - id: "4.5"
    text: "Track progress via burndown; identify at-risk sprint"
    blooms: Analyze
    clo: CLO 1
  - id: "4.6"
    text: "Extend Python console to Flask web interface"
    blooms: Apply
    clo: CLO 4
rsi:
  - label: "RSI Touchpoint"
    text: "Instructor reviews sprint board and reprioritized backlog mid-sprint. Async video or written; personalized on sprint commitment decisions and risk register quality."
    window: "72 hrs"
    platform: "Canvas Comment or Video"
lucidchart:
  - text: "Risk Register — 6+ risks"
    required: "🔒 gates Flask build"
  - text: "Sprint Board — Sprint 2 planning, reprioritized stories"
  - text: "Retrospective Board — Sprint 1 retro (start of M4)"
thread:
  label: Data Man Thread
  text: "Extend Data Man console → Flask web app. Run Sprint 2 as Scrum Master. Build risk register before building begins."
  deliverable: "Flask web app + sprint artifacts + risk register"
gates:
  unlocks_when: "Sprint 1 demo complete"
  gates_next_on: "Flask application submitted"
  within_module: "Risk register gates Flask build"
---

# 04 — Web Front End and the Sprint Machine

**Loop 1 · Sprint 2 · Weeks 7–8 · 125 pts.** Role: Scrum Master / Developer. Extend
the console to a Flask web app while facilitating the sprint machine.

## ⬡ Before Class — Async

> **NTS Floor 3.** Sprint board is behind on Day 7. Students are now Scrum Masters —
> facilitating the machine while building the Flask front end.
> *"Standup reveals a blocker. As SM, what do you do? The sprint goal is at risk."*

- D SCRUM Ceremony Simulator — 9 branching scenarios across standup/planning/retro · *MLO 4.4 · Dashboard: scrum-simulators*
- ▶ Risk Matrix Activity — score 8 risks, drag to priority zone, select mitigation · *MLO 4.2 · Sim*
- ▶ Sprint Backlog Prioritization — 10 stories, 20-pt capacity, justify cuts · *MLO 4.1 · Sim*
- Q Flask Routing & Templates Quiz — 15 questions on routes, templates, forms · *MLO 4.3/4.6 · Canvas New Quiz*
- ▶ Burndown Chart Reading — Day 7 of 14, 3 scenarios · *MLO 4.5 · Sim*
- ▶ Scrum Master Blocker Response — teammate stuck 2 days · *MLO 4.4 · Sim · branching downstream effect*
- ▶ Technical Communication — Flask decisions for developer audience · *MLO 4.7 · Sim*

**Lucidchart:**
- ◈ Risk Register — 6+ risks · *🔒 gates Flask build*
- ◈ Sprint Board — Sprint 2 planning, reprioritized stories
- ◈ Retrospective Board — Sprint 1 retro (start of M4)

## ⬡ In Class — Facilitated

- 🎤 **SM Facilitation Practice** — Students rotate Scrum Master role. Run a live
  standup where a blocker is revealed. Class debrief on SM response choices.
- 🗣 **Flask Architecture Discussion** — Share "why templates vs. inline HTML"
  decisions. Norris surfaces common misconceptions from quiz data.
- 🗂 **Sprint 2 Planning Session** — Students present reprioritized backlogs. Norris
  reviews risk registers together as a class — what did teams miss?

**⚡ RSI Touchpoint:** Instructor reviews sprint board and reprioritized backlog
mid-sprint. Async video or written; personalized on sprint commitment decisions and
risk register quality. *Response window: 72 hrs · Platform: Canvas Comment or Video.*

### MLOs

- **4.1** Prioritize backlog within sprint capacity constraints · *Evaluate · CLO 1*
- **4.4** Facilitate Scrum ceremonies with time-boxing · *Apply · CLO 1*
- **4.5** Track progress via burndown; identify at-risk sprint · *Analyze · CLO 1*
- **4.6** Extend Python console to Flask web interface · *Apply · CLO 4*

## ⬡ After Class — Canvas Submissions

- **Sprint 2 Reprioritized Backlog** — updated backlog with Sprint 2 selection, revised MoSCoW, written justification for priority changes · *20 pts · Rubric · CLO 1*
- **Data Man Risk Register** — Lucidchart — 6+ risks, scores, mitigation + contingency for all high-priority, owners assigned · *15 pts · Pass/Fail · 🔒 Gates Flask build*
- **Sprint 2 Standup Log** — 10+ entries across sprint; three questions answered specifically; real daily timestamps · *20 pts · Discussion Board*
- **Data Man Flask Web Application** — GitHub repo link; 2+ routes, 2+ templates, 1+ form; Data Man features via browser · *50 pts · URL Submit · CLO 4*
- **Flask Architecture Technical Summary** — 300-word explanation of routing decisions + one architectural trade-off, developer audience · *20 pts · Rubric · CLO 5*

## Thread & gates

- **Data Man Thread:** Extend Data Man console → Flask web app. Run Sprint 2 as Scrum
  Master. Build risk register before building begins. ↳ *Deliverable: Flask web app +
  sprint artifacts + risk register.*
- **Unlocks when:** Sprint 1 demo complete. **Risk register gates Flask build.**
  **Gates M5 on:** Flask application submitted.
