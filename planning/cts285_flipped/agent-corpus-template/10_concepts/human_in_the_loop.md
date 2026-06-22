# Concept — Human In The Loop: The Merge Is Yours

**One idea:** the agent opens Issues and PRs all day. The human reviews and
merges. That line never moves. This file says *why*, so you can defend it — not
just follow it.

## The line you do not cross

The agent does **not** merge to `main` on its own judgment. **You merge.** Every
memory file in this corpus says it; the `/ship-it` command stops before it; this
whole module is built around it.

## Three reasons, in plain terms

1. **`main` is your portfolio.** Anyone — an instructor, a future employer — can
   open your repo and read `main`. You are personally accountable for what lands
   there. You don't outsource accountability to a bot. The agent can *propose*;
   only you can *publish*.

2. **You are the customer.** The agent is fast, tireless, and *frequently
   confidently wrong.* The PR is the moment you read what it actually did and
   decide whether it's what you wanted. Skipping that read is exactly how garbage
   reaches production. The merge click is you saying "yes, this is what I meant" —
   and only you know what you meant.

3. **It's the real-world pattern.** On working teams, automation opens PRs all
   day — Dependabot, CI bots, code-generation tools. A human still reviews and
   clicks merge. You're learning the actual industry shape, not a classroom toy.
   "Bots propose, humans merge" is how professional repos run.

## The agent-as-junior framing

Treat the agent like a **fast, eager junior developer** on their first week:

- **Great at:** the ceremony (Issue/branch/commit/PR scaffolding) and *drafting*
  (a first-pass set of user stories, a starter design, a README skeleton). It
  gives you something to react to in seconds. Reacting to a draft beats facing a
  blank page.
- **Not trusted with:** the final call on what ships, or knowing what *you*
  actually need. A junior doesn't merge to `main` unreviewed, and they don't
  decide the product's requirements on their own. Neither does the agent.

You wouldn't hand a first-week junior the merge button on your portfolio repo.
You'd review their PR, talk through what they missed, and click merge yourself
once it's right. Same here. The framing isn't a metaphor you tolerate — it's the
exact relationship.

## What "staying in the loop" looks like, concretely

The deliverable in this module is never "the agent did it." It's **"the agent did
it — here's the PR it opened, and here's the screenshot of *me* approving the
merge."** The approval is the part that proves you stayed in the loop instead of
rubber-stamping a bot.

And when you review that PR, actually review it:

- Did it do what you asked, or something plausible-but-adjacent?
- Did it invent a requirement you never gave it?
- Is the `Closes #N` there? The commit message sane? The branch named right?

Catching something is a **good** thing to report. It proves you read the output.
A first run where you caught nothing usually means you didn't look hard enough.

## If the agent merges on its own

Then you over-authorized it — you gave it a blanket "always allow" or ran it in a
full-auto mode. Dial the approvals back (Codex: stay in suggest mode; Gemini:
keep per-action approval on; Claude Code: never pre-authorize the merge), and
re-run on a throwaway change with the merge kept manual. The human gate is the
whole point; if it's gone, the exercise is gone.

→ Back to: [`the_flow_on_autopilot.md`](the_flow_on_autopilot.md)
→ Try it for real: [`../20_lab/run_the_flow_three_clis.md`](../20_lab/run_the_flow_three_clis.md)
