# Learn — An Agent Running The Flow

**Slot:** Learn (no stakes — read this, then go to Practice).
**Read time:** ~15 minutes.

---

## The one idea

You already know the Sacred Flow:

> Plan in an **Issue** → cut a **branch** → **commit** the work → open a **PR**
> with a retro → get it **reviewed** → **merge**.

You did it by hand in Modules 3 and 4. Here is the whole idea of this module:

> **An agent can do the mechanical steps for you — open the Issue, make the
> branch, write the commits, open the PR — from a single sentence of plain
> English. You stay the one who reads the result and approves the merge.**

Nothing about the *workflow* changes. `main` is still the publication branch.
Every piece of work still has an Issue and a PR. The retro still gets written.
What changes is **who types the ceremony.** The boring parts move to the agent.
The judgment stays with you.

## What "the agent does it" actually looks like

You open a coding-agent CLI in your repo and say something like:

> "Open an issue for adding a `--help` flag to the console app, make a branch,
> implement it, and open a PR that closes the issue. Show me the diff before you
> commit."

Under the hood the agent runs the exact commands you'd have typed:

```bash
gh issue create --title "Add --help flag" --body "..."
git checkout -b add-help-flag
# ...edits files...
git commit -m "add --help flag to console app"
git push -u origin add-help-flag
gh pr create --title "Add --help flag" --body "Closes #N ..."
```

`gh` is the **GitHub CLI** and `git` is plain git. **Every agent CLI in this
module drives those same two tools** — that's why the skill transfers across
Claude Code, Codex CLI, and Gemini CLI. The agent is a natural-language wrapper
around commands you already understand. That matters: if you can read the
commands, you can catch the agent when it does the wrong thing.

## The approval gate is sacred — and it's yours

Here is the line you do not cross: **the agent does not merge to `main` on its
own judgment. You merge.**

Why this gate stays human, in plain terms:

1. **`main` is your portfolio.** Anyone — an instructor, a future employer —
   can open your repo and read `main`. You are personally accountable for what
   lands there. You don't outsource accountability to a bot.
2. **You are the customer.** The agent is fast and tireless and *frequently
   confidently wrong.* The PR is the moment you read what it actually did and
   decide whether it's what you wanted. Skipping that is how garbage reaches
   production.
3. **It's the real-world pattern.** On working teams, automation opens PRs all
   day (Dependabot, CI bots, code-gen tools). A human still reviews and clicks
   merge. You're learning the actual industry shape, not a toy.

So the deliverable for Practice isn't "the agent did it." It's **"the agent did
it, *here's the PR it opened, and here's the screenshot of me approving the
merge.*"** The approval is the part that proves you stayed in the loop.

## Two things the agent is good at, one thing it isn't

**Good at:** the ceremony (Issue/branch/commit/PR scaffolding), and *drafting*
— first-pass user stories, a starter design, a README skeleton. It will give you
something to react to in seconds. Reacting to a draft is far easier than facing
a blank page.

**Not good at:** knowing what *you* actually need. It will invent plausible
requirements that aren't yours. It will design for a generic user, not your
user. That gap — between what the agent drafted and what you actually want — is
not a bug to be annoyed by. **It is the entire job of a Systems Analyst, and
it's what you'll grade in this module's Assess.** The agent hands you a straw
proposal; you, the customer, say where it's wrong.

## Where this is taking you

Two places at once:

- **Right now:** Module 5's documentation and deployment chores are exactly the
  mechanical, repetitive Flow work you can now hand off — so the rest of the
  course gets lighter, not heavier.
- **Module 8:** your capstone is "build your own product." If that product is an
  agent, this module is where you start *describing* it. In Apply you'll write a
  corpus — a set of files a coding agent can read — that says what your agent is
  for. The AI will draft user stories and a design from it. You'll judge them.
  That corpus is the seed of your capstone spec. We are, on purpose, **using an
  agent to start building the spec for the agent you'll build.**

## Before you go to Practice

You'll need, in your repo:

- A GitHub repo you can push to (your Data Man repo is fine — Practice uses a
  throwaway change you won't keep).
- **One** of: Claude Code, Codex CLI, or Gemini CLI installed and signed in.
  Practice covers all three; pick the one you have.
- The **GitHub CLI (`gh`)** installed and authenticated (`gh auth login`). This
  is the substrate every agent uses. If `gh auth status` prints your username,
  you're ready.

Don't have a preference? **Use Claude Code** — it's the baseline these materials
are written against. The Codex and Gemini paths are fully supported and produce
the same result; they just differ in how you launch and approve.

→ Go to [`practice.md`](practice.md).
