# Instructor Brief — Module 4.5: Teach Your Agent The Flow

**BLUF:** Near-zero load for you. Self-graded, 0 points, gates nothing. Interstitial between M4 and M5. Your job is light spot-checking, not grading.

---

**What changes for you:** Almost nothing.
- No rubric to score. The Assess is self-graded by design — the student is the customer of their own agent; an instructor score would corrupt the skill.
- It blocks nothing. M5 proceeds whether or not a student does this.
- No new platform to stand up; students use their own repo + a CLI.

**What to spot-check** (presence, not quality):
1. Flow write-up exists (½ pg) + **PR-merge screenshot** present.
2. Filled `AGENT_BRIEF.md` + AI-drafted stories/design recorded in their corpus.
3. Self-assessment names a *specific* miss (a missing story, an unstated assumption) — not "the AI was pretty good."
- Code Builders: a real merged PR link. Prompt Masters: dropped files, no PR expected.

**Time cost:**
- Students: ~2–3 hr first run (CLI wiring), ~20 min after.
- You: minutes per student — confirm 3 artifacts present.

**Prereqs students need (flag early):**
- A pushable GitHub repo (their Data Man repo is fine).
- One CLI installed + signed in: Claude Code (baseline), Codex CLI, or Gemini CLI.
- `gh` installed + `gh auth login` (the substrate every CLI drives). `gh auth status` should print their username.
- Recommend branch protection on `main`.

**Failure modes to watch:**
| Symptom | Likely cause / nudge |
|---|---|
| Agent committed to `main` | No branch protection — have them enable it. |
| Agent self-merged the PR | Over-authorized. Re-run; never pre-authorize merge. |
| `gh: command not found` in agent | `gh` not installed / not on PATH; auth + restart CLI. |
| Self-assessment says "nothing missing" | They didn't read as the customer. Push for one concrete miss. |
| Student stuck on CLI install | Point them to Prompt Master path (chat / web UI) — same thinking, no CLI. |

**Why it's built this way:** Customer judgment can't be graded by a third party. The human-merge gate mirrors real teams (Dependabot/CI bots open PRs; humans merge). The corpus seeds the Module 8 capstone, so effort here pays forward.
