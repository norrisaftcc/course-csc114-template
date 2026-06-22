# Lab — Run The Same Flow Through Three CLIs

**What this is:** a hands-on, side-by-side walkthrough of the **same task** driven
through Claude Code, Codex CLI, and Gemini CLI. It lives inside the corpus so it
travels with you (Module 5+ and your capstone), and it complements — doesn't
duplicate — the module's `practice.md`. Practice gets you through it once;
**this** is the reference you keep for "how do I drive *this* CLI again?"

**The point is not the task.** The task is throwaway. The point is feeling the
same Flow run by three different agents, and noticing that the *substrate* and the
*human merge gate* are identical across all three.

---

## The one task (use this for all three runs)

Pick something trivial you can verify at a glance. The canonical choice:

> Add a one-line `## Credits` section to your repo's `README.md`.

You'll likely run it three times (once per CLI) and **close all three PRs without
keeping them** — or run it once with your chosen CLI and just *read* the other two
columns. Either is fine.

## Step 0 — Confirm the substrate (do this once, by hand)

Every CLI below drives `gh` + `git`. Confirm they work for *you* first:

```bash
gh auth status      # should print your GitHub username
git status          # clean tree on main
git checkout main && git pull   # start from latest main
```

If `gh auth status` prints your username, every agent below can drive it. If it
doesn't, run `gh auth login` before going further. This is the substrate from
[`../10_concepts/the_flow_on_autopilot.md`](../10_concepts/the_flow_on_autopilot.md).

## Step 1 — The prompt (identical for all three)

Whichever CLI you launch, paste essentially this:

> Open a GitHub issue titled **"Practice: add Credits section to README"** with a
> one-line body. Create a branch `practice-credits` off `main`. Add a short
> `## Credits` section to `README.md`. Commit with a clear message. Push the
> branch and open a PR whose body starts with `Closes #<the issue number>` and
> includes a one-line retro. **Show me the diff before you commit, and do not
> merge — I will review and merge myself.**

That last sentence is the whole module: **show me before you commit; do not
merge.** You're wiring the approval gate in with your words, on top of whatever
the memory file already says.

---

## Path A — Claude Code (baseline)

1. From your repo (or the corpus folder), launch:
   ```bash
   claude
   ```
   It loads `CLAUDE.md` from the directory as standing instructions.
2. Paste the Step 1 prompt. Claude Code proposes the `gh`/`git` commands and the
   `README.md` edit.
3. **Approve each step when asked.** When it shows the `README.md` diff, read it,
   then allow the commit. Allow the push and the `gh pr create`.
4. It prints the PR URL and **stops** — it will not merge, because you (and
   `CLAUDE.md`) told it not to.
5. **You** open the PR URL, read the diff, click **Merge pull request →
   Confirm.** *That click is the deliverable.* Screenshot it.

> Shortcut: the corpus ships a `/ship-it` slash command
> (`.claude/commands/ship-it.md`) that runs this whole cycle from one line and
> stops before merge. Try `/ship-it add a Credits section to the README`.
>
> Tip: you *can* pre-authorize `gh` and `git` for the session so it doesn't stop
> on every step — but **never pre-authorize the merge.** Keep that one manual.

## Path B — Codex CLI (OpenAI)

1. From your repo, launch Codex in an approval mode that **pauses** before
   commands:
   ```bash
   codex                          # interactive; approve each command
   # or, if your build uses flags:
   codex --approval-mode suggest  # conservative setting
   ```
   It loads `AGENTS.md`. **Avoid full-auto** (`--full-auto`) here — you *want* the
   stops.
2. Paste the same Step 1 prompt.
3. Codex proposes each shell command (`gh issue create …`, `git checkout -b …`,
   the edit, `git commit`, `git push`, `gh pr create …`). **Approve them one at a
   time.** Read the diff when it shows the README edit.
4. It prints the PR URL and stops. It does not merge.
5. **You** open the PR, review the diff, click **Merge pull request → Confirm.**
   Screenshot the merge.

## Path C — Gemini CLI (Google)

1. From your repo:
   ```bash
   gemini
   ```
   It loads `GEMINI.md`. Gemini CLI **asks permission before each shell action by
   default** — that's exactly the behavior you want, so leave auto-approve /
   YOLO **off**.
2. Paste the same Step 1 prompt.
3. Gemini proposes the `gh`/`git` shell calls and the file write. **Approve each
   one.** Inspect the README diff before allowing the commit.
4. It prints the PR URL and stops without merging.
5. **You** open the PR, review, **Merge → Confirm.** Screenshot the merge.

---

## The three side by side

| | Claude Code | Codex CLI | Gemini CLI |
|---|---|---|---|
| Launch | `claude` | `codex` (suggest mode) | `gemini` |
| Memory file | `CLAUDE.md` | `AGENTS.md` | `GEMINI.md` |
| Approval style | per-step prompts | suggest/approval mode | per-action shell approval (default) |
| Substrate | `gh` + `git` | `gh` + `git` | `gh` + `git` |
| Who merges | **you** | **you** | **you** |

Same task, same substrate, same human gate. Only the launcher and the approval
UX differ. That's the transfer.

## If it goes wrong (it might — that's fine, this is retry-OK)

| What happened | Fix |
|---|---|
| Agent tried to commit straight to `main` | Branch protection should block it. If protection is off, tell the agent "branch first," then turn on protection for `main` in repo Settings → Branches. |
| `gh: command not found` inside the agent | `gh` isn't installed or isn't on the agent's PATH. Install it, `gh auth login`, restart the CLI. |
| PR is missing `Closes #N` | Edit the PR body in the browser, add `Closes #N`. Note in your write-up that you caught it — catching the agent is a *good* thing to report. |
| Agent merged it itself | You over-authorized. Re-run on a fresh throwaway change with the merge kept manual. The human gate is the point. |
| Branch already exists from a prior attempt | `git push origin --delete practice-credits`, or have the agent pick a new name. |

When git itself breaks, the recovery moves are the standard ones — see the
canonical Sacred Flow walkthrough pointed to from
[`../90_reused/README.md`](../90_reused/README.md). The agent doesn't change how
git works; it just types faster.

## What you walk away with

Not a kept PR — a **felt pattern**: one Flow, three launchers, and a merge button
that stayed under your thumb the whole time. That's the muscle you'll reuse for
every chore in Modules 5–8.
