# Module 4.5 (Interstitial) — Teach Your Agent The Flow

**Type:** Interstitial mini-module. Sits **between Module 4 (Flask / Sprint 2)
and Module 5 (Ship, Document, Present).**
**Stakes:** Low. Self-graded. Does **not** gate M4 or M5.
**Audience lean:** Students willing to run the Sacred Workflow. Prompt Masters
have a real lighter path (below), but the heart of this module is for the people
automating their Flow.
**Time:** ~2–3 hours, most of it the first time you wire a CLI up. The second
time it's 20 minutes.

---

## Why this module exists, in one breath

You spent Modules 3 and 4 doing the Sacred Flow **by hand** — opening Issues,
cutting branches, writing commits, opening PRs. That was the point: you can't
delegate a process you've never felt. But now you've felt it. From Module 5 on,
the stakes climb (deployment, docs, then your *own* product in 7–8), and doing
all that ceremony by hand starts to cost you focus you'd rather spend on the
product.

So this module teaches the move that working developers actually make:
**hand the mechanical parts of the Flow to a coding agent, and keep the
judgment for yourself.** The agent opens the Issue and the PR. *You* read what
it did, *you* approve the merge. Issue → Branch → PR becomes one sentence of
plain English; the human-in-the-loop approval stays exactly where it was.

It also quietly starts your Module 8 capstone. If the product you want to build
*is an agent*, this is where you begin describing it — as a corpus a coding
agent can actually read and act on.

## Learning outcomes

By the end you can:

1. **Explain, in plain English, what your agent did** when it ran a slice of the
   Flow for you — which Issue it opened, which branch, what the PR contained.
   (CLO 5 — communication.)
2. **Drive at least one coding-agent CLI** (Claude Code baseline; Codex CLI and
   Gemini CLI fully supported) to open an Issue and a PR against your repo,
   using `gh` + `git` as the substrate. (CLO 1 — process / CLO 4 — implement.)
3. **Locate and defend the human approval gate** — show exactly where *you*
   reviewed and merged, and say why that gate stays human. (CLO 1.)
4. **Describe a desired agent as a Claude-code-compatible corpus** so an agent
   can read your intent and draft user stories + a design from it. (CLO 2 / 3 —
   requirements + design.)
5. **Judge AI-generated requirements as the customer** — decide whether the
   stories and design actually fulfill *your* need, and say where they miss.
   (CLO 2 — analysis; the self-graded Assess.)

## The slot structure (Learn → Practice → Apply → Assess)

| Slot | File | What you do | Stakes |
|------|------|-------------|--------|
| **Learn** | [`learn.md`](learn.md) | Read what "an agent running the Flow" means, and why the approval gate is sacred. | None |
| **Practice** | [`practice.md`](practice.md) | Point a CLI at a tiny throwaway task. Make it open an Issue + a PR. You approve & merge. Retry as many times as you want. | Retry-OK |
| **Apply** | [`apply.md`](apply.md) | Fill in the **agent corpus template** for the agent *you* want. Have the AI draft user stories + a design from your plain-English needs. | Low |
| **Assess** | [`assess.md`](assess.md) | **Self-graded.** As the customer, rate how well those AI stories + design fulfill your needs. Write where they miss. | Self-graded |

## What you produce (the deliverables)

1. **A plain-English write-up** (½ page) of what your agent did during Practice,
   with a **screenshot of the moment you approved the PR.**
2. **A filled-in agent corpus** under your repo — the
   [`agent-corpus-template/`](../agent-corpus-template/) adapted to *your* agent,
   including the AI-drafted user stories and design.
3. **A self-assessment** (the [`assess.md`](assess.md) reflection) judging that
   corpus as its customer.

## Two-track expectations

This module is **written for Code Builders.** It assumes you have a repo, a
terminal, and a willingness to run a CLI. That said:

- **Code Builders** do the whole thing: CLI runs the Flow, you approve the PR,
  you commit the corpus through a real PR. This *is* your Sacred Flow for the
  interstitial — and the novelty is that an agent does the mechanical half.
- **Prompt Masters** are not excluded. You do the **Apply and Assess** with the
  agent in a *chat* surface (or the GitHub web UI's "create issue" / "add file"
  buttons) instead of a CLI, and you still write the plain-English description
  of what the AI produced and where you approved it. You skip the CLI wiring,
  not the thinking. If you want to *try* a CLI this week with zero risk, the
  Practice lab is a safe sandbox — go for it.

Both tracks turn in the same three deliverables. Code Builders earn the usual
process credit on top for running it through a real PR.

## Where this points next

- **Module 5** gets cheaper: documentation and deployment chores are exactly the
  kind of mechanical Flow work you can now delegate, keeping judgment for the
  README that a human actually has to understand.
- **Module 8** (your own product) is where the agent you described here can
  become the thing you build. The corpus you start now is its first draft of a
  spec.
