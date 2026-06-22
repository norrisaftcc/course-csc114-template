# Practice — Make the Agent Run One Slice of the Flow

**Slot:** Practice (retry-OK — do this as many times as you want, nothing is
graded on the attempts).
**Goal:** Get a coding agent to open an **Issue** and a **PR** for a throwaway
change, then **you** approve and merge. Capture what it did.

---

## The task you'll automate (deliberately tiny)

Pick something trivial in your Data Man repo — small enough that you can tell at
a glance whether the agent did it right. Good choices:

- Add a one-line `## Credits` section to your `README.md`.
- Add a `--version` print to your console app.
- Fix a typo you already know about.

The change does not matter. **You will likely close this PR without keeping it.**
The point is the *Flow ran by an agent*, not the code.

## The common substrate (all three CLIs use this)

Before any agent, confirm your tools work. Run these yourself, once:

```bash
gh auth status      # should print your GitHub username
git status          # should show a clean tree on main
git pull            # start from the latest main
```

`gh` is the GitHub CLI. Every agent below ultimately calls `gh issue create` and
`gh pr create` plus plain `git`. If those two commands work for you by hand, the
agent can drive them.

## The prompt (works in any of the three)

Whichever CLI you use, the instruction is essentially the same. Paste a version
of this:

> Open a GitHub issue titled **"Practice: add Credits section to README"** with a
> one-line body. Create a branch `practice-credits` off `main`. Add a short
> `## Credits` section to `README.md`. Commit with a clear message. Push the
> branch and open a PR whose body starts with `Closes #<the issue number>` and
> includes a one-line retro. **Show me the diff before you commit, and do not
> merge — I will review and merge myself.**

That last sentence is the whole module. **Show me before you commit. Do not
merge.** You are wiring in the approval gate with your words.

---

## Path A — Claude Code (baseline)

1. In your repo directory, launch:
   ```bash
   claude
   ```
2. Paste the prompt above. Claude Code will propose the `gh`/`git` commands and
   the file edit.
3. **Approve each step when it asks.** When it shows the diff for `README.md`,
   read it, then allow the commit. When it offers to push and open the PR, allow
   that too.
4. Claude Code will print the PR URL. It will **not** merge — you told it not to.
5. Open the PR URL in your browser. Read the diff. Click **Merge pull request**,
   then **Confirm merge**. *That click is the deliverable.* Screenshot it.

> Tip: if you'd rather pre-authorize the mechanical commands so it doesn't stop
> on every step, you can allow `gh` and `git` for the session — but **never
> pre-authorize the merge.** Keep that one manual.

## Path B — Codex CLI (OpenAI)

1. In your repo directory, launch Codex. Use **Suggest / approval mode** so it
   pauses before running commands:
   ```bash
   codex
   ```
   (If your version uses flags, `codex --approval-mode suggest` is the
   conservative setting. Avoid full-auto for this — you *want* the stops.)
2. Paste the same prompt.
3. Codex proposes each shell command (`gh issue create …`, `git checkout -b …`,
   the edit, `git commit`, `git push`, `gh pr create …`). **Approve them one at
   a time.** Read the diff when it shows the README edit.
4. It prints the PR URL and stops. It does not merge.
5. Open the PR, review the diff, click **Merge pull request → Confirm.**
   Screenshot the merge.

## Path C — Gemini CLI (Google)

1. In your repo directory:
   ```bash
   gemini
   ```
   Gemini CLI asks permission before each shell action by default — that's the
   behavior you want, so leave auto-approve **off**.
2. Paste the same prompt.
3. Gemini proposes the `gh`/`git` shell calls and the file write. **Approve each
   one.** Inspect the README diff before allowing the commit.
4. It prints the PR URL and stops without merging.
5. Open the PR, review, **Merge → Confirm.** Screenshot the merge.

---

## If it goes wrong (it might — that's fine)

This is retry-OK. Common snags and fixes:

| What happened | Fix |
|---|---|
| Agent tried to commit straight to `main` | Branch protection should block it. If you don't have protection on, tell the agent "branch first," and turn on protection for `main` in repo Settings → Branches. |
| `gh: command not found` inside the agent | `gh` isn't installed or isn't on the agent's PATH. Install it, run `gh auth login`, restart the CLI. |
| Agent opened the PR but forgot `Closes #N` | Edit the PR body in the browser and add `Closes #N`. Then note in your write-up that you caught it — catching the agent is a *good* thing to report. |
| Agent merged it itself | Then you over-authorized. Re-run on a new throwaway change with merge kept manual. The whole point is the human gate. |
| Branch already exists from a prior attempt | Delete it (`git push origin --delete practice-credits`) or have the agent pick a new name. |

When something breaks, the recovery moves are the same ones in the
[Sacred Flow walkthrough](../agent-corpus-template/90_reused/README.md) — the
agent doesn't change how git works, it just types faster.

## What to capture (Deliverable 1)

Write **half a page, plain English**, answering:

1. **Which CLI did you use, and what exactly did it do?** Name the Issue number,
   the branch name, and what the PR contained. Write it like you're telling a
   teammate who wasn't watching: "I told Claude Code to add a Credits section. It
   opened issue #14, branched `practice-credits`, committed the edit, and opened
   PR #15 closing #14."
2. **Where did you approve?** Embed the **screenshot of you merging the PR.**
   One sentence: "I reviewed the diff and merged here."
3. **What did the agent get wrong, if anything?** Even "nothing" is an answer —
   but most first runs have *something* (missed `Closes #N`, a wordy commit
   message, a branch name you didn't love). Reporting it proves you read the
   output instead of rubber-stamping it.

That write-up is the artifact. It is short on purpose. The skill it proves is
**"I can delegate the Flow and still describe and own what happened."**

→ When you can do that comfortably, go to [`apply.md`](apply.md).
