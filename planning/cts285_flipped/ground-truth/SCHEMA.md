# Ground-Truth Schema — CTS-285 Planner (Spike Fork)

This is the **field contract** for the markdown ground truth decomposed from
`CTS285_Flipped_Classroom_Planner.html`. This repo is a **test-fork spike**; the
real `modules.js v2.0` lives in its own repository. The ground truth here exists
so our spike has a clean, regen-friendly source of record — and so the new
**Module 4.5 interstitial** is a first-class module, not an HTML afterthought.

**Rule for every contributor (human or agent):** one file per module, named
`module-NN.md` (interstitial = `module-04.5.md`). Canonical data lives in the
**YAML frontmatter**. The markdown body below the frontmatter is a human-readable
mirror — keep it in sync, but the frontmatter is the source of truth a future
`modules.js` would parse.

---

## File shape

```
---
<YAML frontmatter — canonical, see field list>
---

# <id> — <title>

<human-readable mirror of the frontmatter: Before / In-Class / After columns,
MLOs, thread, gates — same prose the planner renders>
```

## Frontmatter fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | yes | `"01"`–`"08"`, or `"04.5"` for the interstitial. Quote it (YAML reads 4.5 as a float otherwise). |
| `title` | string | yes | Module H2 title, e.g. `Web Front End and the Sprint Machine`. |
| `subtitle` | string | yes | The `.sub` line, e.g. `Sprint 2 — Flask Web Application`. |
| `role` | string | yes | Student role, e.g. `Scrum Master / Developer`. |
| `loop` | enum | yes | `loop1` \| `loop2` \| `interstitial`. |
| `weeks` | string | yes | e.g. `7–8`. Interstitial uses `between 8 & 9`. |
| `points` | int | yes | Module points. Interstitial = `50` (self-graded, awarded by default on completion — the resolved 950→1,000 cover gap). |
| `points_award` | string | no | How points are granted, when not instructor-scored. Interstitial: `by default on completion (self-graded)`. Omit for the core modules (instructor-scored). |
| `self_graded` | bool | yes | `false` for the 8 core modules; `true` for the interstitial. |
| `gates_next` | bool | yes | Does completing this module gate the next? Interstitial = `false`. |
| `sprint_tag` | string | no | `Pre-Sprint`, `Sprint 1`, `Sprint 2`, `Sprint 3 Begin`, etc. Interstitial omits or uses `Interstitial`. |
| `sim` | object | yes | `{ setting, blurb, hook }` — the NTS narrative box. |
| `before_class` | list | yes | Async activities. Each: `{ text, mlo, channel }` where `channel` ∈ `sim` \| `canvas` \| `dash`. |
| `in_class` | list | yes | Facilitated activities. Each: `{ title, text }`. |
| `after_class` | list | yes | Graded/submitted artifacts. Each: `{ title, desc, points, type, gate? }`. |
| `mlos` | list | yes | Each: `{ id, text, blooms, clo }`. Interstitial uses `I.1`… ids. |
| `rsi` | list | no | Instructor touchpoints. Each: `{ label, text, window, platform, gates? }`. Interstitial reframes this as the human-in-the-loop gate. |
| `lucidchart` | list | no | Each: `{ text, required? }`. |
| `thread` | object | yes | `{ label, text, deliverable }` — the project-thread bar. |
| `gates` | object | yes | `{ unlocks_when, gates_next_on, within_module? }`. |

## Conventions

- **Faithfulness over polish (core modules).** When disassembling Modules 1–8,
  transcribe what the planner says. Do not invent activities, points, or MLOs.
  If a field isn't present for a module, omit it rather than guess.
- **Points (core modules): transcribe as written.** The planner's cover claims
  **1,000** total; the eight core module pills (50/75/100/125/125/125/150/200) sum
  to **950**. Transcribe the per-module pill values as written; do **not** "fix"
  any core module to force a different total. The **−50 gap is resolved** by course
  ruling: the interstitial **Module 4.5 contributes 50** (self-graded, awarded by
  default on completion), so core 950 + 4.5 50 = **1,000**, matching the cover.
  See `crosswalk.md` DEFECT-1 (resolved).
- **MLO ids stay as the planner labels them** (`4.4`, `7.6`, …). The interstitial
  uses `I.1`–`I.4` to avoid colliding with the numbered modules.
- **Channel icons** map to the planner: `sim` = green ▶/🎤, `canvas` = red Q/S,
  `dash` = blue D.
- **Voice** for any human-readable prose: Senpai Teacherbot (honest, specific,
  industry-connected, encouraging without coddling). Match the interstitial files
  in `../module-4.5-agent-flow/` as the exemplar.

## The interstitial's two deltas from the core schema

1. `self_graded: true` with `points: 50` and `points_award: "by default on
   completion (self-graded)"` — its Assess is judged by the student-as-customer
   (no instructor rubric), and the 50 points are self-awarded by default on
   completion (the resolved 950→1,000 cover gap). The substantive `after_class`
   artifacts stay `points: 0` / `type: "Self-Graded"` / `"Reflection"` /
   `"Corpus"`; a final "Module Completion" artifact carries the `50`.
2. `rsi` is repurposed as the **human-in-the-loop approval gate** (the agent
   opens the Issue/PR; the human merges) rather than an instructor RSI touchpoint.

See `module-04.5.md` for the worked example every contributor matches.
