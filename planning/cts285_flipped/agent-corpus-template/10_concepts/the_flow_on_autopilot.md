# Concept — The Flow On Autopilot

**One idea:** the Sacred Flow doesn't change when an agent runs it. The *steps*
are identical. What changes is who types them.

## The Flow you already know

> Plan in an **Issue** → cut a **branch** off `main` → **commit** the work →
> open a **PR** with a retro → review → **merge**.

You did this by hand in Modules 3 and 4. `main` is still the publication branch.
Every piece of work still has an Issue and a PR. The retro still gets written.

## The Flow an agent runs

You open a coding-agent CLI in your repo and say, in one sentence:

> "Open an issue for adding a `--help` flag to the console app, make a branch,
> implement it, and open a PR that closes the issue. Show me the diff before you
> commit."

Under the hood the agent runs the exact commands you'd have typed:

```bash
gh issue create --title "Add --help flag" --body "..."
git checkout -b add-help-flag
# ...edits files...
git add -A && git diff --cached      # shows you the diff
git commit -m "add --help flag to console app"
git push -u origin add-help-flag
gh pr create --title "Add --help flag" --body "Closes #N ..."
```

Notice what's missing from that list: **there is no `gh pr merge`.** The agent
stops at the open PR. That gap is deliberate and it's the subject of the next
concept file.

## The substrate: `gh` + `git`

Two tools do all the real work:

- **`git`** — plain git. Branches, commits, pushes. You already know it.
- **`gh`** — the GitHub CLI. `gh issue create`, `gh pr create`. It's how the
  command line talks to GitHub's Issues and PRs.

The agent is a **natural-language wrapper** around these two tools. You say a
sentence; it picks the `gh`/`git` commands. Nothing more mysterious than that.

That matters for a concrete reason: **if you can read the commands, you can catch
the agent when it does the wrong thing.** A wrong branch name, a missing
`Closes #N`, a commit to the wrong place — you'll see it in the command it
proposes, because it's the same command you'd have run.

## Why the skill transfers across CLIs

Claude Code (`claude`), Codex CLI (`codex`), and Gemini CLI (`gemini`) are
different programs with different launch commands and different ways of asking
for approval. But **all three drive the same `gh` + `git` substrate.** They all
end up running `gh issue create`, `git checkout -b`, `git commit`, `git push`,
`gh pr create`.

So learning "make an agent run the Flow" is not learning one tool. It's learning
a **pattern** that you re-apply by swapping the launcher:

| You learn once | You apply it as |
|----------------|-----------------|
| "tell the agent to run the Flow" | `claude` (reads `CLAUDE.md`) |
| same instruction | `codex` (reads `AGENTS.md`) |
| same instruction | `gemini` (reads `GEMINI.md`) |

The memory files in this corpus (`CLAUDE.md` / `AGENTS.md` / `GEMINI.md`) say the
same thing in each CLI's dialect. The Flow underneath is one Flow. That's why the
[lab](../20_lab/run_the_flow_three_clis.md) walks the **same task** through all
three — to make the transfer concrete.

→ Next: [`human_in_the_loop.md`](human_in_the_loop.md) — why the merge stays yours.
