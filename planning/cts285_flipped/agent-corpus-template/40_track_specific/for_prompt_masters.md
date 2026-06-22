# For Prompt Masters — Same Thinking, Lighter Mechanics

**Read this first:** you are **not** second-class here. You skip the **CLI
wiring** — not the analysis. The heart of this module is the *judgment*: describe
the agent you want, watch an AI draft requirements and a design, and decide as the
customer whether it actually fulfills your need. You do **all of that.** What you
don't do is plumb a terminal CLI into `gh` + `git`. That's a mechanics choice, not
a thinking discount.

Code Builders earn *process credit* for running it through a real PR. You earn the
**same credit on the artifact** (here: 50 pts · self-graded, awarded by default on
completion for everyone). The only thing you forgo is the on-top process credit,
and that's by design for your track in every module, not a penalty for this one.

> The one idea that's identical across both tracks: **the AI proposes; you
> approve.** A Code Builder approves by clicking *merge* on a PR. You approve by
> reading what the AI produced and writing, in plain English, *where* you signed
> off on it and what you'd change. Same gate. Different button.

---

## Your path through 4.5

You run the same Learn → **Apply** → **Assess** spine. Practice (the CLI lab) is
**optional** for you — see the sandbox note at the bottom.

| Slot | What you do | Surface |
|------|-------------|---------|
| **Learn** | Read `learn.md` + `10_concepts/`. Understand "agent runs the Flow" and why the human keeps the merge. | Reading. |
| **Practice** (optional) | *Optional for you.* If you want to try a CLI with zero risk, the Practice lab is a safe sandbox. Skipping it costs you nothing. | CLI (optional) or skip. |
| **Apply** | Fill `AGENT_BRIEF.md`; ask the AI **in a chat surface** to draft 5–8 GWT user stories + a starter design from your brief. | Chat (Claude / ChatGPT / Gemini web) + GitHub web. |
| **Assess** (self-graded) | As the customer, judge whether the AI's stories + design fulfill your need; write it up. | Any editor or the GitHub web "add file" button. |

The work product is **the same three deliverables** as Code Builders. You just
reach them through chat windows and GitHub web buttons instead of a terminal.

---

## Apply — using chat + the GitHub web UI

1. **Fill in `AGENT_BRIEF.md`.** Same file, same prompts. This is the real work
   and it's identical for both tracks: what the agent is for, who the user is,
   what outcomes matter, what's out of scope, what "done" looks like. Vague in
   means vague out — take it seriously.
2. **Ask the AI to draft, in chat.** Paste your filled `AGENT_BRIEF.md` into a
   chat surface (Claude, ChatGPT, Gemini — whichever you have) and ask for **5–8
   user stories** in the form `As a <user>, I want <goal>, so that <reason>`, each
   with **2+ Given-When-Then** acceptance criteria, plus a **one-page starter
   design** (main components, data flow, key decisions). Tell it to use *your*
   user and *your* outcomes from the brief — not a generic textbook user.
3. **Get the files into your repo — no CLI needed.** On github.com, in your repo:
   - **"Add file" → "Create new file"** to paste each draft in
     (`30_assessment/draft_user_stories.md`, `30_assessment/draft_design.md`,
     your filled `AGENT_BRIEF.md`).
   - Optionally open an **Issue** with the web **"New issue"** button to track the
     drafting work, so your history reads like the Flow even though you didn't run
     a CLI. This is encouraged but not required.
4. **You are the approval gate.** A Code Builder clicks *merge*; you commit the
   file via the web button — and, in your write-up, **say plainly where you
   approved the AI's output and what you changed before keeping it.** That
   sentence *is* your human-in-the-loop gate. Don't skip it: "I approved the
   stories but rewrote the login one, because my whole point was no accounts" is
   exactly the judgment this module grades.

---

## Assess — judge it as the customer (self-graded)

This is **identical** for both tracks. It's the analyst's core skill and the whole
reason 4.5 exists: deciding whether a set of requirements and a design actually
fulfill *your* need. Nobody can grade that for you, because nobody else is the
customer.

Work the prompts in [`../../module-4.5-agent-flow/assess.md`](../../module-4.5-agent-flow/assess.md):
hit rate, the missing story (there's always one — finding it is the skill),
unstated assumptions, your three concrete edits, and the build / fix-three /
start-over verdict.

**Submit by drop:** write it in any editor or via the GitHub web "add file" button
as `30_assessment/self_assessment.md`. **No issue, no branch, no PR required.**
Submit the file.

---

## Your plain-English write-up still happens

You write the **same plain-English description** Code Builders write — what the AI
produced, and **where you approved it.** Yours describes a chat exchange and a web
commit instead of a CLI run and a merge, but the substance is the same: *what did
the AI hand me, what did I keep, what did I reject, and what did it get wrong?*

A Code Builder attaches an **approval screenshot** (them clicking merge). Your
equivalent is naming, in words, the moment you decided the AI's draft was good
enough to keep — and what you fixed first. If you committed via the web UI, a
screenshot of that commit (or the file in your repo) is a fine stand-in.

---

## What you turn in

The **same three deliverables** as everyone:

1. **Plain-English write-up** — what the AI drafted, where you approved it, what it
   got wrong. (Your version describes chat + web commit, not a CLI merge.)
2. **Filled-in agent corpus** — `AGENT_BRIEF.md` + AI-drafted stories & design, in
   your repo (dropped via the web UI).
3. **Customer self-assessment** — the `assess.md` reflection, judged as the
   customer.

You forgo only the *on-top process credit* Code Builders get for the real PR —
that's the standing two-track deal, not a 4.5-specific penalty.

---

## Optional: try a CLI in the safe sandbox

If you've ever been curious to run a coding-agent CLI, **this is the lowest-risk
week to try it.** The Practice lab uses a *throwaway* change — the agent opens an
Issue and a PR; you read the diff and merge; nothing about your real product is at
stake. Walk through
[`../20_lab/run_the_flow_three_clis.md`](../20_lab/run_the_flow_three_clis.md) and
let an agent run one slice of the Flow for you. If it clicks, you've quietly become
a Code Builder for the day. If it doesn't, you drop the sandbox and lose nothing —
your real deliverables go through chat and the web UI exactly as above.

The point of offering it: the only thing standing between the two tracks is the
CLI wiring, and here you can try that wiring with the safety off. No pressure
either way — the thinking you already did is the part that counts.

---

## Where this points next

The corpus you just filled in — by hand, via chat and the web UI — is still the
first draft of your **Module 8** capstone spec, exactly as it is for Code
Builders. `AGENT_BRIEF.md` seeds your M7 Own Product Brief; the AI stories seed
your M7 backlog; the design seeds your M7 design package. You arrived the lighter
way; you arrive at the same place.

→ Curious what the full-Flow path looks like?
[`for_code_builders.md`](for_code_builders.md).
→ Why the human keeps the approval:
[`../10_concepts/human_in_the_loop.md`](../10_concepts/human_in_the_loop.md)
