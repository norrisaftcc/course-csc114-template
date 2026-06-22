# Overview — What This Agent Corpus Is, And How To Use It

You've run the Sacred Flow by hand for two modules now — opening Issues, cutting
branches, writing commits, opening PRs. You felt every step. That was on purpose:
you can't hand off a process you've never done yourself.

This corpus is where you start handing off the *mechanical* half. Not the
judgment — the typing.

## What a "corpus" is here

A **corpus** is just a small set of plain-English files that a coding agent can
read to know what you want. That's it. No magic. The same shape this course uses
for its own materials — numbered folders, one idea per file — except now *you're*
the author and the subject is **the agent you want to build.** Quite possibly
your Module 8 capstone.

There are two things living in these files:

1. **Instructions for the agent** (`CLAUDE.md` / `AGENTS.md` / `GEMINI.md`) that
   tell whichever CLI you launch *how to run the Flow* — open the Issue, branch,
   commit, open the PR — and the one rule it must never break: **it does not
   merge. You merge.**
2. **A brief you fill in** (`AGENT_BRIEF.md`) describing the agent you want, in
   words a non-developer could follow. The CLI reads it and drafts user stories
   and a starter design. You judge whether the draft is actually what you meant.

## What you'll actually do

1. **Copy this folder into your repo** (see the top-level `README.md`).
2. **Fill in `AGENT_BRIEF.md`** — what the agent is for, who the user is, what
   outcomes matter, what's out of scope, what "done" looks like. This is the real
   work. Take it seriously; vague in means vague out.
3. **Point a CLI at the corpus** and ask it to draft requirements + design. It
   opens an Issue and a PR for that drafting work. You read the PR. You merge it.
4. **Read the draft as the customer** — the person who has to *live with* the
   thing — not as the person who wrote the prompt. Where did it invent a
   requirement you never asked for? Where did it design for a generic user
   instead of yours? Those gaps are not the AI failing. That gap is the entire
   job of a Systems Analyst, and it's what you'll grade in Assess.

## The honest part

The agent is fast, tireless, and *frequently confidently wrong.* It will draft
something plausible in seconds — and "plausible" is not "what you wanted." That's
fine. Reacting to a wrong draft is far easier than facing a blank page, and
catching where it's wrong is the skill you're here to build. Don't be annoyed
when it misses your real user. Be glad — that miss is the lesson.

## Where this is taking you

Two places at once. **Right now,** Module 5's documentation and deployment chores
become things you can hand off, so the rest of the course gets lighter. **And in
Module 8,** the agent you describe here can become the product you actually
build. This corpus is the first draft of that spec — and you're building it the
deliberately weird way: *using an agent to start specifying the agent you'll
build.*

Correct process. Creative product. The merge stays yours.

→ Concept: [`../10_concepts/the_flow_on_autopilot.md`](../10_concepts/the_flow_on_autopilot.md)
→ Ready to describe your agent: [`../AGENT_BRIEF.md`](../AGENT_BRIEF.md)
