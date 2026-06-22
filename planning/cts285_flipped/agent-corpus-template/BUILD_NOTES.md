# Agent Corpus Template — Build Notes

**Audience:** You (the instructor building/maintaining this corpus). **Not** for
student consumption — students get the corpus, not these notes.

This is the reusable scaffold students copy in **Module 4.5 — Teach Your Agent
The Flow** (the interstitial between Module 4 and Module 5 of the repurposed
CTS-285). It does double duty: it teaches an agent to run the Sacred Flow, and it
seeds each student's **Module 8** capstone spec.

---

## What this corpus is (and isn't)

- It **is** a template the student copies into their own repo, fills in
  (`AGENT_BRIEF.md`), and points a CLI at to draft user stories + design via a
  real Issue/PR they merge.
- It **is not** a per-week NotebookLM source set like the CSC-114 week corpora.
  There's no NotebookLM upload step here, no audio overview, no config files. The
  numbered-folder convention is shared; the delivery mechanism is different — this
  ships as files in a Git repo, read by a coding-agent CLI, not a chat surface.

## File tree (what's in this template)

```
agent-corpus-template/
├── README.md            ← student-facing: what it is, folder map, how to copy + point a CLI
├── CLAUDE.md            ← memory file: Claude Code operating instructions
├── AGENTS.md            ← memory file: Codex CLI equivalent (note: suggest mode)
├── GEMINI.md            ← memory file: Gemini CLI equivalent (note: per-action approval)
├── AGENT_BRIEF.md       ← ★ the student-fill-in template (example placeholders included)
├── .claude/
│   └── commands/
│       └── ship-it.md   ← /ship-it slash command: one Flow cycle, STOPS at merge
├── 00_orientation/
│   └── overview.md      ← 1-page Senpai-voice "what this is / how to use it"
├── 10_concepts/
│   ├── the_flow_on_autopilot.md   ← the Flow via an agent; gh/git substrate; cross-CLI transfer
│   └── human_in_the_loop.md       ← merge gate stays human; agent-as-junior
├── 20_lab/
│   └── run_the_flow_three_clis.md ← same task, all three CLIs, parallel + fully specified
├── 90_reused/
│   └── README.md        ← pointer to the canonical sacred_flow_walkthrough.md
└── BUILD_NOTES.md       ← this file
```

**Owned by other authors (do NOT add them to this template):**

- `30_assessment/` — the self-grade spec the student drafts INTO (the AI's
  `draft_user_stories.md` / `draft_design.md` land here, and the student's
  `self_assessment.md`). Authored separately; the module's `apply.md` and
  `assess.md` reference it.
- `40_track_specific/` — the Code Builders / Prompt Masters split material.
  Authored separately.

If you regenerate this scaffold, leave those two folders to their owners. The
`README.md` and `apply.md` already reference them as "provided."

## How the pieces fit the module

| Module slot | Corpus file it leans on |
|---|---|
| Learn (`learn.md`) | `10_concepts/*` |
| Practice (`practice.md`) | `20_lab/run_the_flow_three_clis.md` (complementary, not duplicate) |
| Apply (`apply.md`) | `AGENT_BRIEF.md`, `00_orientation/overview.md`, the memory files |
| Assess (`assess.md`) | `30_assessment/` (other author) |

The lab in `20_lab/` deliberately **overlaps** `practice.md` in task (the Credits
section) but differs in role: `practice.md` is the one-time graded-ish run;
`20_lab/` is the keep-it reference that travels with the student into Module 5+.
If you edit one, sanity-check the other still reads as complementary, not
redundant.

## What to customize per cohort

Mostly nothing — that's the point of a `-template`. But check these each term:

1. **CLI install/auth assumptions.** The corpus assumes `gh` is installed and
   `gh auth login` is done. If your cohort's lab machines differ, add a setup note
   in the course LMS, not in these files (keep the template machine-agnostic).
2. **Default repo.** The materials say "your Data Man repo is fine" for the
   throwaway Practice run. If the carrier project changes name across terms, that
   phrase lives in the *module* `practice.md`, not in this template — this corpus
   stays project-agnostic on purpose.
3. **Branch protection.** The lab assumes `main` is protected (so an agent's
   accidental commit-to-main is blocked). If your org template doesn't enable it,
   either enable it in the repo template or soften the lab's "should block it"
   line. Protection-on is the better teaching default — keep it if you can.
4. **CLI drift.** Codex and Gemini launch/approval flags move around. Re-verify
   each term that `codex --approval-mode suggest` and Gemini's per-action-approval
   default still hold; update `AGENTS.md` / `GEMINI.md` / the lab if a vendor
   changes the surface. **The merge-stays-human contract never changes** even if
   the flags do.
5. **`/ship-it`.** Slash commands are Claude-Code-specific. The command notes its
   Codex/Gemini equivalents inline; if you standardize a `ship-it.sh` for your
   cohort, drop it in and reference it from the memory files.

## The non-negotiable invariant

Across every file: **the agent never merges to `main`.** No `gh pr merge`, no
push to `main`, no auto-merge, no full-auto/YOLO mode for Flow work. If you edit
any memory file, the `/ship-it` command, or the lab, preserve this. It's the
spine of the whole module and the thing `assess.md` is built to make students
defend. A version of this corpus where the agent can merge has lost the lesson.

## How this seeds Module 8

The student leaves Module 4.5 with a **filled-in corpus describing an agent they
might build** — `AGENT_BRIEF.md` plus the AI-drafted (and student-critiqued)
stories and design in `30_assessment/`. That is the **first draft of a Module 8
capstone spec**, already in a form a coding agent can read and act on.

When you build Module 8, expect to:

- Have students **revisit** this corpus and apply the three concrete edits they
  named in their `assess.md` verdict (Assess Part 3 asks them to name three; M8
  is where they make them).
- **Grow** the corpus from "spec the agent can read" to "spec the agent builds
  from" — same numbered-folder shape, now with real `20_lab/` build steps for
  *their* agent rather than the Flow lab.
- Reuse the same memory-file pattern so their capstone repo is itself
  CLI-drivable — the student's own product becomes a thing they Sacred-Flow with
  an agent, closing the loop the whole course has been building toward.

In short: this corpus is the on-ramp. Don't over-build it now — its job is to be
*good enough to react to*, which is exactly the skill (customer judgment) Module
4.5 trains and Module 8 cashes in.
