# Crosswalk — CTS-285 Flipped (8 Modules + Interstitial 4.5)

This is the **ground-truth spine** for the CTS-285 spike fork: the 8 core modules
plus the **Module 4.5 interstitial** ("Teach Your Agent The Flow"), assembled to
mirror the planner's *Instructor Quick Reference* but in our regen-friendly
markdown source of record.

**What wins where:**
- For per-module fields (points, MLOs, activities) → the `module-NN.md`
  ground-truth files are canonical; this crosswalk summarizes them.
- For the gate graph and RSI windows → transcribed faithfully from the planner's
  *Instructor Quick Reference* (`CTS285_Flipped_Classroom_Planner.html`).
- For the interstitial → `module-04.5.md` and `../module-4.5-agent-flow/` win; it
  is **self-graded, 50 points (awarded by default on completion), and gates
  nothing.** The 50 are the resolved 950→1,000 cover gap (see DEFECT-1). Do not
  invent *additional* points or any hard gates for it.

> Course: CTS-285 Systems Analysis & Design · FTCC · CIT Division · Fall 2026 ·
> Instructor: Andrew Normal · Instructional Design: Angela Westmoreland, M.Ed. ·
> Source: `modules.js v2.0` (planner HTML, this spike's upstream).

---

## Module table

| id | title | loop | weeks | points | sprint | gates_next |
|----|-------|------|-------|-------:|--------|------------|
| 01 | Welcome to the Dev World | loop1 | 1–2 | 50 | Pre-Sprint | **yes** → M2 |
| 02 | Requirements and the Backlog | loop1 | 3–4 | 75 | Pre-Sprint | **yes** → M3 |
| 03 | Design, Build, and Prove It Works | loop1 | 5–6 | 100 | Sprint 1 | **yes** → M4 |
| 04 | Web Front End and the Sprint Machine | loop1 | 7–8 | 125 | Sprint 2 | **yes** → M5 |
| **04.5** | **Teach Your Agent The Flow** | **interstitial** | **between 8 & 9** | **50** ¹ | **Interstitial** | **no — gates nothing** |
| 05 | Ship It, Document It, Present It | loop1 | 9–10 | 125 | Sprint 3 Begin | **yes** → M6 |
| 06 | Sprint 3 Close — The Live Demo | loop1 | 11–12 | 125 | Sprint 3 Review | **yes** → M7 |
| 07 | Your Product — Discovery and Design | loop2 | 13–14 | 150 | Sprint 4 Begin | **yes** → M8 |
| 08 | Your Product — Sprint and Showcase | loop2 | 15–16 | 200 | Sprint 4 Close | — (course close → CSC-289 bridge) |

The interstitial sits **inside the row gap between M4 and M5** (weeks "between 8 &
9"). It does not consume a numbered slot, does not shift any week, and does not
appear in the Hard Gates list because it gates nothing.

¹ **M4.5 = 50 pts, self-graded, awarded by default on completion** (incl. the
interactive TB-TV walkthrough). These are the resolved 950→1,000 cover gap — with
4.5 counted, the eight core modules (950) + 4.5 (50) = **1,000**, matching the
cover. See DEFECT-1 (now resolved).

---

## Gate graph

The planner enforces a **linear unlock chain** with **hard gates** (the next
module literally won't open until a named artifact clears). Transcribed verbatim
from the *Hard Gates (Module Won't Open)* panel, with the interstitial spliced in
as an **advisory** (non-enforcing) edge.

```
M1 ──[Mastery Check ≥80%]──▶ M2
M2 ──[instructor annotates M2 backlog]──▶ M3
M3 ──[Sprint 1 demo complete]──▶ M4
M4 ──[Flask app submitted]──▶ M5
        │
        └┄┄(advisory)┄┄▶ M4.5  ── gates nothing ┄┄▶ (rejoins at M5, no edge)
M5 ──[Outline submitted + instructor comment]──▶ M6
M6 ──[M6 retrospective submitted]──▶ M7
M7 ──[Revised product brief submitted]──▶ M8
M7 ──[ERD + wireframe comments in Lucid]──▶ M8 *build* (second, build-only gate)
```

### Hard gates (enforced — module won't open)

Faithful transcription of the planner's Hard Gates panel:

| Gate edge | Unlock condition (hard) |
|-----------|--------------------------|
| M2 ← M1 | M1 Mastery Check ≥ 80% |
| M3 ← M2 | Instructor annotates M2 backlog |
| M4 ← M3 | Sprint 1 demo complete |
| M5 ← M4 | Flask app submitted |
| M6 ← M5 | Outline submitted + instructor comment |
| M7 ← M6 | M6 retrospective submitted |
| M8 ← M7 | Revised product brief submitted |
| M8 *build* ← M7 | ERD + wireframe comments in Lucidchart (separate build-only gate) |

### Within-module hard gates (the artifact-level locks)

These are the `🔒` pills inside individual modules — they gate the next *step*,
not the next module:

- **M1:** Vocabulary Mastery Check `🔒 Gates M2`.
- **M2:** Data Man Product Backlog `🔒 Instructor review gates M3`.
- **M3:** Definition of Done `🔒 Gates console`; Sprint 1 Demo `🔒 Gates M4`.
- **M4:** Risk Register `🔒 Gates Flask build`.
- **M5:** Sprint 3 Presentation Outline `🔒 Gates M6`.
- **M6:** Peer Glows/Grows Forms → gates retrospective.
- **M7:** Own Product Brief `🔒 Approval gates design`; Revised Brief `🔒 Gates M8`;
  ERD + wireframes `🔒 gates M8 build`.

### The interstitial's placement (advisory only)

| Property | Value |
|----------|-------|
| **Unlocks when** | M4 Flask app submitted — **advisory, not enforced.** The same artifact that hard-gates M5 simply *signals* that 4.5 is now worth doing; nothing checks it. |
| **Gates next on** | **nothing.** M5 opens off the M4→M5 hard gate regardless of whether 4.5 was touched. A student can skip 4.5 entirely and lose no access. |
| **Within-module order** | Learn → Practice → Apply → Assess, in order (the only sequencing it imposes, and only on itself). |
| **Position in graph** | A dangling advisory branch hanging off the M4 node. It consumes no gate, blocks no module, and rejoins the spine at M5 with **no edge** — students arrive at M5 through the existing M4→M5 hard gate. |

This is deliberate. The interstitial teaches a *move* (delegate the Flow's
mechanics, keep the merge) that makes Modules 5–8 cheaper. If it were a hard gate,
it would stop being a low-stakes invitation and start being a tollbooth — exactly
the wrong stakes for a self-graded "try this" module.

---

## RSI touchpoints per module

The planner's *RSI Touchpoints Required* list — each is an **instructor** action
with a response window. Transcribed faithfully:

| Module | RSI touchpoint | Window | Gates? |
|--------|----------------|--------|--------|
| M1 | Initiate standup discussion | 48 hrs | — |
| M2 | Annotate student backlog | 72 hrs | gates M3 |
| M3 | Lucidchart ERD + wireframe review | 72 hrs | gates build |
| M4 | Sprint board + backlog mid-sprint | 72 hrs | — |
| **M4.5** | **(none — see below; the analogue is student-owned)** | **n/a** | **— (gates nothing)** |
| M5 | Docs review + outline comment | 72 hrs | gates M6 |
| M6 | Glows/grows synthesis comment | 72 hrs | — |
| M7 | Brief approval + design review | 72 hrs | gates M8 |
| M8 | Mid-sprint + showcase feedback | 72 hrs · **×2** | — |

### The interstitial has no instructor RSI — and that's the point

Every core module's RSI is an **instructor** putting eyes on student work inside a
response window. The interstitial deliberately **has none.** It replaces the
instructor touchpoint with the **human-in-the-loop approval gate**, which is
**student-owned**:

- In a normal module, the *instructor* is the human in the loop (annotating,
  reviewing, approving) and that review can hard-gate the next step.
- In the interstitial, **the student is the human in the loop.** The agent opens
  the Issue and the PR; the **student** reads the diff and merges to `main` — and
  screenshots the moment they did. The approval is the deliverable, not the
  automation.

So the 4.5 "RSI row" is reframed (per `SCHEMA.md`, the interstitial repurposes the
`rsi` field): it is the **Human-in-the-Loop Gate**, window `n/a (synchronous,
student-owned)`, platform `gh + git; manual merge to main only`, and it gates
**self** — the approval is the proof of work, not a lock on any module. No
instructor response window applies because no instructor is in this loop. This is
the student practicing *being* the reviewer, which is the muscle they'll need when
they own a product in Modules 7–8.

---

## KNOWN SOURCE DEFECTS

### DEFECT-1 (RESOLVED by course ruling): Cover total (1,000) vs. core pills (950)

The planner cover advertises **1,000 total points**; the eight core module pills
sum to **950** — a −50 gap. **Course ruling (resolved):** the missing 50 are
allocated to **Module 4.5**, awarded **by default on completion** (the module's
work + the interactive TB-TV walkthrough). The whole module is self-graded, so the
student self-awards them — no instructor rubric. With 4.5 contributing 50, the
**course total reconciles to 1,000**, matching the cover.

| Module | Pill points |
|--------|------------:|
| M1 | 50 |
| M2 | 75 |
| M3 | 100 |
| M4 | 125 |
| **M4.5** | **50** (self-graded · awarded by default — the resolved gap) |
| M5 | 125 |
| M6 | 125 |
| M7 | 150 |
| M8 | 200 |
| **Sum (incl. 4.5)** | **1,000** |
| **Cover claim** | **1,000** |
| **Discrepancy** | **0** ✓ resolved |

**Status:** RESOLVED. This **supersedes** the earlier guidance that the
interstitial must stay 0 and that the 50 must not be loaded onto it — the course
owner explicitly chose to allocate the gap to 4.5 as a self-graded, awarded-by-
default completion credit. **Integration note:** add a `4.5 = 50` entry to the
planner's grade-summary pills so the visible pills sum to 1,000. (DEFECT-3 below —
M5's internal 105-vs-125 artifact gap — is independent and remains open.)

### DEFECT-3: M5 graded artifacts (105) ≠ M5 module pill (125)

Found by the disassembler. In **Module 5** ("Ship It, Document It, Present It"),
the after-class graded artifacts sum to **105 pts** (30 + 30 + 25 + 20, plus a
**0-pt** completion item) but the module pill says **125 pts** — a **−20** shortfall
between the artifact points and the module total.

| M5 graded artifact | Points |
|--------------------|-------:|
| Artifact 1 | 30 |
| Artifact 2 | 30 |
| Artifact 3 | 25 |
| Artifact 4 | 20 |
| Completion item (0-pt) | 0 |
| **Sum of artifacts** | **105** |
| **M5 pill** | **125** |
| **Discrepancy** | **−20** (artifacts are 20 short of the module total) |

**Status:** transcribed, not reconciled. Per `SCHEMA.md`, we record the pill and the
artifacts as written and do **not** redistribute or invent a 20-pt artifact to force
the sum to 125. This is independent of DEFECT-1 (which is the cover-vs-pills gap); a
future upstream reconciliation should resolve both.

#### Pattern: 0-pt completion / mastery-gate items inflate artifact counts

Several modules carry **0-pt completion or mastery-gate items** that add to the
artifact *count* without adding to the module *total*:

- **M1:** Vocabulary Mastery Check (`🔒 Gates M2`)
- **M5:** Sprint 3 (Presentation) Outline (`🔒 Gates M6`)
- **M7:** Revised Brief (`🔒 Gates M8`)

These are real, intentional gates (they lock the next step), but they score **0**, so
counting them as graded artifacts overstates how many point-bearing deliverables a
module has. Noted here alongside DEFECT-1's −50 and DEFECT-3's −20 so a future regen
treats these 0-pt gates as gates, not as dropped points to "recover."

### DEFECT-2 (note, not a defect to fix): M8 has no `gates_next`

M8 is the terminal module; it gates nothing forward inside CTS-285 (it bridges to
CSC-289). This is correct, not a defect — recorded here so a future regen doesn't
"add" a phantom M9 gate.

---

## Module 8 handoff (where the interstitial points)

The interstitial is the **first draft of the Module 8 capstone spec.** Module 8
("Your Product — Sprint and Showcase," 200 pts, Loop 2 Close) is where the student
**builds their own product** — and Module 7 is where they spec it (Own Product
Brief → backlog → design → pitch). The agent corpus a student starts in 4.5 is the
on-ramp into that arc:

| 4.5 deliverable | Becomes, downstream |
|-----------------|---------------------|
| `AGENT_BRIEF.md` (filled in) | First draft of the **M7 Own Product Brief** (problem, target user, MVP scope, success criteria). |
| AI-drafted user stories (5–8 GWT) | Seed of the **M7 Own Product Backlog** (15+ stories with criteria, points, MoSCoW). |
| Starter design from the agent | Seed of the **M7 Own Product Design Package** (ERD, wireframes, architecture). |
| Customer self-assessment (the analyst's "does this fulfill my need?") | The judgment muscle the student reapplies all through M7→M8 as the customer of their own product. |
| The Flow-on-autopilot move (agent opens Issue/PR; human merges) | The working cadence for the **M8 Sprint 4 build**, which makes the build cheaper to run. |

**The chain, stated plainly:** 4.5 seeds the corpus → M7 hardens it into the
graded Own Product spec (`🔒 brief approval gates design`, `🔒 ERD/wireframe
review gates M8 build`) → M8 builds and showcases it, then bridges to the CSC-289
capstone. The interstitial does none of that gating itself; it just gives the
student a running start on the spec they'll be graded on in M7 and build in M8.

> Note the asymmetry the student should feel: in 4.5 the corpus is **self-graded
> and ungated**; the *same corpus*, matured, becomes **instructor-gated** in M7
> (brief approval, ERD/wireframe review). That is the stakes ramp working as
> designed — low-stakes practice now, real gates when it's the actual product.
