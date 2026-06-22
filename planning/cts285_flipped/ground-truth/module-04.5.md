---
id: "04.5"
title: Teach Your Agent The Flow
subtitle: "Interstitial — Delegate the Sacred Flow's mechanics to a coding agent; keep the merge"
role: Tech Lead delegating to a junior
loop: interstitial
weeks: "between 8 & 9"
points: 50
self_graded: true
points_award: "by default on completion (self-graded) — these 50 resolve the 950→1,000 cover gap"
gates_next: false
sprint_tag: Interstitial
sim:
  setting: "NTS — Your Desk, Day After Sprint 2"
  blurb: "You ran two sprints opening every Issue and PR by hand. It worked — and it got repetitive. The new junior on the team is an AI. Time to delegate the ceremony and keep the judgment."
  hook: "The bot can open the PR in three seconds. It still can't tell you if it's the PR you wanted. That part's yours."
before_class:
  - text: 'What "an agent running the Flow" means — Issue→Branch→PR from one sentence'
    mlo: "learn.md · the one idea"
    channel: sim
  - text: "The approval gate is sacred — why the human still merges to main"
    mlo: "learn.md · the gate is yours"
    channel: sim
  - text: "The common substrate — every CLI drives gh + git"
    mlo: "Claude Code · Codex CLI · Gemini CLI"
    channel: dash
in_class:
  - title: "Practice (retry-OK): Agent runs one slice of the Flow"
    text: "Throwaway change — agent opens an Issue + PR; you review the diff and merge. Capture the approval screenshot."
  - title: "Apply: Describe your agent as a corpus"
    text: "Fill in AGENT_BRIEF.md; have the AI draft 5–8 user stories (GWT) + a starter design. Reach it via a real PR you approve. Seeds the Module 8 capstone."
after_class:
  - title: "Plain-English Flow Write-Up + Approval Screenshot"
    desc: "½ page: which CLI, what it did (Issue#, branch, PR), and a screenshot of you merging. Note what the agent got wrong."
    points: 0
    type: Reflection
  - title: "Filled-In Agent Corpus"
    desc: "Your AGENT_BRIEF.md + AI-drafted user stories & design, recorded as-is via approved PRs. First draft of a Module 8 spec."
    points: 0
    type: Corpus
  - title: "Customer Self-Assessment"
    desc: "You, the customer, judge whether the AI's stories + design fulfill your need: hit rate, missing story, unstated assumptions, three edits, build/fix/restart verdict."
    points: 0
    type: Self-Graded
  - title: "Module Completion — TB-TV Walkthrough (self-awarded)"
    desc: "Complete the module's work and the interactive TB-TV walkthrough onboarding, then self-award the 50 pts. These are the points the planner cover always promised — the resolved 950→1,000 gap. No instructor rubric; awarded by default for honest completion."
    points: 50
    type: "Self-Graded · awarded by default"
mlos:
  - id: "I.1"
    text: "Explain in plain English what the agent did during a Flow run"
    blooms: Understand/Apply
    clo: CLO 5
  - id: "I.2"
    text: "Drive a coding-agent CLI to open an Issue + PR via gh/git"
    blooms: Apply
    clo: CLO 1 + CLO 4
  - id: "I.3"
    text: "Locate & defend the human approval gate on main"
    blooms: Evaluate
    clo: CLO 1
  - id: "I.4"
    text: "Describe a desired agent as a Claude-code-compatible corpus"
    blooms: Create
    clo: CLO 2 + CLO 3
rsi:
  - label: "Human-in-the-Loop Gate"
    text: "The agent opens the Issue and the PR. It does NOT merge. You read the diff and merge — and screenshot the moment you did. The approval is the deliverable, not the automation."
    window: "n/a (synchronous, student-owned)"
    platform: "gh + git; manual merge to main only"
    gates: "self (the approval is the proof of work)"
thread:
  label: Agent Thread
  text: "Hand the Flow's mechanics to a coding agent (Claude Code baseline; Codex + Gemini equivalents). Keep the merge human. Start the corpus for the agent you'll build in Module 8."
  deliverable: "Flow write-up + agent corpus + self-assessment"
gates:
  unlocks_when: "M4 Flask app submitted (advisory — not enforced)"
  gates_next_on: "nothing — interstitial does not block M5"
  within_module: "Learn → Practice → Apply → Assess, in order"
---

# 04.5 — Teach Your Agent The Flow

**Interstitial mini-module.** Sits between Module 4 (Flask / Sprint 2) and Module
5 (Ship, Document, Present). Low stakes, **50 pts self-graded (awarded by default)**, gates nothing. Written
for students running the Sacred Workflow; Prompt Masters have a lighter path.

Full Learn / Practice / Apply / Assess content:
[`../module-4.5-agent-flow/`](../module-4.5-agent-flow/). This ground-truth entry
is the schema-shaped summary the planner (and a future `modules.js`) would render
from.

## ⬡ Before Class — Learn (async, ~15 min)

> **NTS — Your Desk, Day After Sprint 2.** You ran two sprints opening every
> Issue and PR by hand. It worked — and it got repetitive. The new junior on the
> team is an AI. Time to delegate the ceremony and keep the judgment.
> *"The bot can open the PR in three seconds. It still can't tell you if it's the
> PR you wanted. That part's yours."*

- ▶ What "an agent running the Flow" means — Issue→Branch→PR from one sentence.
- ▶ The approval gate is sacred — why the human still merges to `main`.
- D The common substrate — every CLI drives `gh` + `git` (Claude Code · Codex CLI · Gemini CLI).

## ⬡ In Class — Practice & Apply (hands-on)

- 🤖 **Practice (retry-OK):** Agent runs one slice of the Flow on a throwaway
  change — opens an Issue + PR; *you* review the diff and merge; capture the
  approval.
- 🗂 **Apply:** Describe your agent as a corpus — fill `AGENT_BRIEF.md`, have the
  AI draft 5–8 GWT user stories + a starter design, reached via a real PR you
  approve. Seeds the Module 8 capstone.

**⚡ Human-in-the-Loop Gate:** The agent opens the Issue and the PR. It does
**not** merge. You read the diff and merge — and screenshot the moment you did.
The approval is the deliverable, not the automation.

### MLOs

- **I.1** Explain in plain English what the agent did during a Flow run · *Understand/Apply · CLO 5*
- **I.2** Drive a coding-agent CLI to open an Issue + PR via gh/git · *Apply · CLO 1 + CLO 4*
- **I.3** Locate & defend the human approval gate on `main` · *Evaluate · CLO 1*
- **I.4** Describe a desired agent as a Claude-code-compatible corpus · *Create · CLO 2 + CLO 3*

## ⬡ After Class — Assess (self-graded)

- **Plain-English Flow Write-Up + Approval Screenshot** — *self · Reflection*
- **Filled-In Agent Corpus** — *self · Corpus*
- **Customer Self-Assessment** — *self · Self-Graded*
- **Module Completion — TB-TV Walkthrough (self-awarded)** — *50 pts · self-graded, awarded by default*

The module carries **50 pts, self-graded — awarded by default on completion** (the
resolved 950→1,000 cover gap). No instructor rubric; you self-award them for doing
the work honestly.

**Two-track submission.** Code Builders submit via the Flow (agent opens
issue/PR, you merge; turn in the PR link). Prompt Masters drop the files via the
GitHub web "add file" button. Same thinking; lighter mechanics. Code Builders
earn process credit on top.

## Thread & gates

- **Agent Thread:** Hand the Flow's mechanics to a coding agent; keep the merge
  human; start the corpus for the Module 8 agent. ↳ *Deliverable: Flow write-up +
  agent corpus + self-assessment.*
- **Unlocks when:** M4 Flask app submitted (advisory). **Gates:** nothing — the
  interstitial does not block M5.
