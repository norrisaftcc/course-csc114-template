# CTS-285 Flipped — Interstitial: Teach Your Agent The Flow

This directory holds a **repurposed slice of the CTS-285 (Systems Analysis &
Design) flipped-classroom prototype**, adapted into this CSC-114 template repo.
It is not the whole CTS-285 course. It is one new piece: an **interstitial
mini-module placed between Module 4 and Module 5** of the CTS-285 planner.

## Why this exists

The CTS-285 planner (`CTS285_Flipped_Classroom_Planner.html`, generated from
`modules.js v2.0` — source lives outside this repo) runs students through two
full sprints by hand: they open Issues, branch, commit, and open PRs manually
in Modules 3 and 4. By Module 5 the stakes rise (deployment, documentation, the
own-product loop in 7–8) and the **mechanical overhead of the Sacred Flow
starts to tax the students who are leaning into it.**

This interstitial repurposes the prototype to teach one thing: **how to hand the
mechanical parts of the Flow to a coding agent** — Claude Code as the baseline,
with full Codex CLI and Gemini CLI equivalents — so that as stakes rise, the
Flow gets *cheaper*, not more expensive. The student stays the decision-maker:
**the agent opens the Issue and the PR; the human approves the merge.**

It also seeds Module 8. The CTS-285 capstone (Module 8) is "build your own
product." Many students want that product to *be an agent*. This interstitial
has them start describing — in a Claude-code-compatible corpus — the agent they
intend to build. We are, deliberately, **using an agent to start building the
spec for the agent the student will build.**

## What's here

```
cts285_flipped/
├── README.md                         ← you are here
├── module-4.5-agent-flow/            ← the interstitial mini-module (Learn→Practice→Apply→Assess)
│   ├── README.md                     ← overview, placement, outcomes, two-track expectations
│   ├── learn.md                      ← what "an agent running the Flow" means + the approval gate
│   ├── practice.md                   ← retry-OK lab: agent opens an Issue + PR (3 CLIs), you approve
│   ├── apply.md                      ← describe your desired agent as a corpus; AI drafts stories + design
│   ├── assess.md                     ← SELF-graded: you, the customer, judge the AI's stories + design
│   └── module-4.5-interstitial.html  ← the planner block to splice in between MOD 04 and MOD 05
├── ground-truth/                     ← the planner decomposed into regen-friendly markdown
│   ├── SCHEMA.md                     ← the field contract every module file follows
│   ├── module-01.md … module-08.md   ← the 8 core modules, faithfully disassembled from the planner
│   ├── module-04.5.md                ← the interstitial in schema form (the worked exemplar)
│   └── crosswalk.md                  ← module/gate/RSI spine + KNOWN SOURCE DEFECTS log
├── agent-corpus-template/            ← the Claude-code-compatible corpus students fill in for their agent
│   ├── README.md  CLAUDE.md  AGENTS.md  GEMINI.md   ← memory files for all three CLIs
│   ├── AGENT_BRIEF.md                ← ★ the student-fill-in brief
│   ├── .claude/commands/ship-it.md   ← slash command: one Flow cycle, stops before merge
│   ├── 00_orientation/ 10_concepts/ 20_lab/          ← orientation, concepts, 3-CLI lab
│   ├── 30_assessment/                ← self-grade spec, strong/weak examples, knowledge check
│   ├── 40_track_specific/            ← Code Builders vs Prompt Masters paths
│   └── 90_reused/  BUILD_NOTES.md
└── ops-reports/                      ← terse, BLUF-first overviews (SITREP style, low friction)
    ├── SITREP.md  STUDENT_TLDR.md  INSTRUCTOR_BRIEF.md  ONE_LINER.md
```

### How it was built

The 8-module ground truth and the corpus scaffold were assembled by a **fan-out
of domain agents** (curriculum disassembly, agent-tooling/DevEx, assessment
design, PM/Sacred-Flow integration, and a plain-English ops-report layer), each
working against `ground-truth/SCHEMA.md` as the shared contract. The
interstitial's `module-4.5-agent-flow/` content is hand-authored as the canonical
voice/format exemplar the agents matched.

## How this maps to the CSC-114 repo's own conventions

This is a CTS-285 artifact living in a CSC-114 repo, so it deliberately borrows
the patterns already proven here:

- **Learn → Practice → Apply → Assess** slot structure, same as
  `planning/pilot_su26/week-*/`.
- The **numbered corpus layout** (`00_orientation/`, `10_concepts/`, `20_lab/`,
  `30_assessment/`, `40_track_specific/`, `90_reused/`) from
  `assignments/week-*/...-corpus/`.
- The **two-track split** (Code Builders / Prompt Masters) codified in
  `pilot_su26`. This module leans toward Code Builders — it is explicitly "for
  students willing to use the Sacred Workflow" — but Prompt Masters get a real,
  non-second-class path (see each file's track section).
- The **Senpai Teacherbot voice**: honest about difficulty, specific,
  industry-connected, encouraging without coddling.

## The interstitial is low-stakes and self-graded

Per the design brief: this is a **mini** module. It does not carry a sprint, it
does not gate the modules around it, and **its Assess is self-graded** — the
student, acting as the *customer* for their own agent, judges how well the
AI-generated user stories and design actually fulfill their needs. That
customer-judgment skill is the point; a points-bearing instructor rubric would
undercut it.

## Status / backfill

- Claude Code, Codex CLI, and Gemini CLI are all **fully specified** in this
  pass (per the build decision), using the `gh` CLI + `git` as the common
  substrate each agent drives.
- The planner insertion (`module-4.5-interstitial.html`) is provided as a
  **standalone, paste-ready block**. It targets the planner's existing CSS
  classes so it can be spliced into the rendered HTML *or* added to the
  `modules.js` source once that source is wired in. See that file's header
  comment.
