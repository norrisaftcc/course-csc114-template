# Agent Corpus Template

**What this is:** a small set of plain-English files that a coding agent
(Claude Code, Codex CLI, or Gemini CLI) can read to understand *the agent you
want to build* — and to run the Sacred Flow (open Issue → branch → commit → open
PR) on your behalf while **you** keep the merge.

You copy this whole folder into your own repo, fill in **one** file
(`AGENT_BRIEF.md`), and point a CLI at it. The CLI reads its memory file
(`CLAUDE.md` / `AGENTS.md` / `GEMINI.md`), reads your brief, and drafts user
stories + a starter design — opening a real Issue and PR for that work that you
review and merge.

This is the corpus for **Module 4.5 — Teach Your Agent The Flow**, and it's the
seed of your **Module 8** capstone spec.

---

## The folder map

```
agent-corpus-template/
├── README.md            ← you are here
├── CLAUDE.md            ← memory file for Claude Code (how the agent behaves here)
├── AGENTS.md            ← same, for Codex CLI
├── GEMINI.md            ← same, for Gemini CLI
├── AGENT_BRIEF.md       ← ★ YOU FILL THIS IN — the heart of the corpus
├── .claude/
│   └── commands/
│       └── ship-it.md   ← /ship-it slash command: one Flow cycle, stops at merge
├── 00_orientation/
│   └── overview.md      ← 1-page "what this agent corpus is and how to use it"
├── 10_concepts/
│   ├── the_flow_on_autopilot.md   ← the Flow run by an agent; the gh/git substrate
│   └── human_in_the_loop.md       ← why the human keeps the merge gate
├── 20_lab/
│   └── run_the_flow_three_clis.md ← same task through Claude Code, Codex, Gemini
├── 30_assessment/       ← (provided by the assignment, not in this template)
├── 40_track_specific/   ← (provided by the assignment, not in this template)
└── 90_reused/
    └── README.md        ← pointer to the canonical Sacred Flow walkthrough
```

The three memory files (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`) say the **same
thing** in the form each CLI reads. You don't pick one — you keep all three so
the corpus works no matter which CLI a teammate (or future-you) opens.

The numbered folders follow the same convention this course uses everywhere:
`00` orientation, `10` concepts, `20` lab, `30` assessment, `40` track-specific,
`90` reused. One idea per file.

## How to copy it into your repo

1. Copy the whole `agent-corpus-template/` folder into your repo. A good name is
   `my-agent-corpus/`:
   ```bash
   cp -r agent-corpus-template my-agent-corpus
   ```
   Drop it at the **root of the repo** if you want the CLI to pick up the memory
   file automatically (see next step). If you nest it in a subfolder, you'll
   `cd` into that folder before launching the CLI.

2. **Point a CLI at it.** Coding-agent CLIs read a memory file from the directory
   you launch them in (and from the repo root):

   | CLI | Launch | Reads |
   |-----|--------|-------|
   | Claude Code (baseline) | `claude` | `CLAUDE.md` |
   | Codex CLI | `codex` | `AGENTS.md` |
   | Gemini CLI | `gemini` | `GEMINI.md` |

   So from inside the corpus folder (or repo root, if you dropped it there), just
   launch your CLI. It loads the matching memory file as standing instructions.

3. **Fill in `AGENT_BRIEF.md`.** This is the only file you *must* edit. It's a
   template with plain-English prompts: what the agent is for, who the user is,
   what outcomes matter, what's out of scope, your definition of done. Replace
   the example placeholder answers with your own.

4. **Ask the agent to draft.** Once your brief is filled in, tell the CLI to read
   `AGENT_BRIEF.md` and draft user stories + a design — and to run the Flow for
   that work (open Issue, branch, commit, open PR). It opens the PR; **you read
   it and merge.** That last part never moves to the agent.

## The one rule that never bends

**The agent does not merge to `main`.** It opens Issues and PRs all day. The
human reviews and clicks merge. Every memory file in this corpus says this; the
`/ship-it` command stops before the merge on purpose. If your agent ever merges
on its own, you over-authorized it — dial the approvals back. See
[`10_concepts/human_in_the_loop.md`](10_concepts/human_in_the_loop.md).

## Where to start reading

- New to the whole idea? → [`00_orientation/overview.md`](00_orientation/overview.md)
- Want the concept? → [`10_concepts/the_flow_on_autopilot.md`](10_concepts/the_flow_on_autopilot.md)
- Want hands-on, all three CLIs? → [`20_lab/run_the_flow_three_clis.md`](20_lab/run_the_flow_three_clis.md)
- Ready to describe your agent? → [`AGENT_BRIEF.md`](AGENT_BRIEF.md)
