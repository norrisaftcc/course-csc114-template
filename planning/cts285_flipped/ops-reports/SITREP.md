# SITREP — Module 4.5: Teach Your Agent The Flow

**BLUF:** A low-stakes, self-graded interstitial that teaches students to delegate the Sacred Flow's mechanics (Issue→branch→commit→PR) to a coding agent while keeping the human merge — and seeds the Module 8 capstone by having them spec the agent they'll build. Gates nothing; 0 points; ~2–3 hrs.

---

**SITUATION**
- Repurposed CTS-285 (Systems Analysis & Design) flipped course.
- Modules 3–4: students ran Sacred Flow by hand. It works, it's repetitive.
- M5+ stakes rise (deploy, docs, own-product in 7–8). Manual ceremony taxes focus.
- Sits between MOD 04 (Flask/Sprint 2) and MOD 05 (Ship/Document/Present).

**MISSION**
- Hand the mechanical Flow to a coding agent so ceremony gets *cheaper* as stakes rise.
- Keep the student the decision-maker: agent opens Issue + PR; **human merges.**
- Start a corpus describing the agent the student may build in M8.

**EXECUTION** (Learn → Practice → Apply → Assess)
| Slot | One line | Stakes |
|---|---|---|
| Learn | Read what "agent runs the Flow" means + why the approval gate stays human (~15 min). | None |
| Practice | Point a CLI at a throwaway change; agent opens Issue + PR; you review diff + merge. Retry freely. | Retry-OK |
| Apply | Fill `AGENT_BRIEF.md`; AI drafts 5–8 GWT user stories + starter design via a real PR you approve. | Low |
| Assess | As the customer, judge whether AI's stories + design fulfill your need. | Self-graded |

**DELIVERABLES** (3, all 0 pts)
1. Plain-English Flow write-up (½ pg): which CLI, Issue#/branch/PR, + screenshot of you merging; note what agent got wrong.
2. Filled-in agent corpus: `AGENT_BRIEF.md` + AI-drafted stories & design, recorded as-is via approved PRs.
3. Customer self-assessment: hit rate, missing story, unstated assumptions, 3 edits, build/fix/restart verdict.

**GATES**
- Points: **0.** Self-graded. **Gates nothing** — does not block M4 or M5.
- Unlocks: M4 Flask submitted (advisory, not enforced).
- Within-module order: Learn → Practice → Apply → Assess.
- Sacred gate: agent never merges to `main`. Human reviews + merges. Approval = the proof of work.

**TWO-TRACK** (same 3 deliverables, same thinking)
| | Submit | Extra |
|---|---|---|
| Code Builders | Via the Flow — agent opens Issue/PR, you merge; turn in PR link. | Process credit |
| Prompt Masters | By drop — chat surface or GitHub web "add file"; no issue/branch/PR. | — |

**TOOLING**
- Baseline: **Claude Code.** Full equivalents: **Codex CLI**, **Gemini CLI.**
- Common substrate: `gh` (GitHub CLI) + `git`. Skill transfers across all three.
- Prereqs: a pushable repo, one CLI installed/signed-in, `gh auth login` working.

**RISKS**
- Agent commits straight to `main` → branch protection / "branch first."
- `gh` not on agent PATH → install + `gh auth login` + restart CLI.
- Agent self-merges → over-authorized; never pre-authorize merge.
- First CLI wire-up is the time sink (~2–3 hr first run, ~20 min after).

**NEXT — Module 8**
- The corpus = first draft of the capstone spec, already agent-readable.
- M5+ gets lighter: doc/deploy chores delegated, judgment kept.
