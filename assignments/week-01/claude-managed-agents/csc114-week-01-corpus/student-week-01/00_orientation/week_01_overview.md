# Week 1 Overview — Cloud Agents

**Audience:** Both tracks (Code Builders and Prompt Masters)
**Workload:** 6–8 hours including class meetings
**Submission:** Drop into your GitHub repo (no Pull Request required this week)

---

## What you're doing this week

You're going to build a real AI agent in the cloud. Not a chatbot — an agent. The difference matters, and that distinction is most of what Week 1 is about.

By Friday you'll have:

- An account on the Claude Console at `platform.claude.com`
- A simple "Campus Info Bot" you built during class to learn the controls
- A **domain agent** you designed yourself — pick any topic you know something about
- A short reflection on what changed each time you edited your agent
- A spot in the class GitHub organization

You will not be writing code. You'll be writing **system prompts** — the rules your agent lives by — and watching what happens when you change them.

## Why Week 1 looks different from the rest

Every other week in this course follows the textbook (Chollet's *Deep Learning with Python*). Week 1 doesn't. It's a pre-textbook warm-up that gives you something concrete to point at when someone asks "what are you building in that AI class?"

The textbook material starts Week 2. So this week is the safest week to make mistakes, ask questions, and figure out what "submit your work" actually means in this course. Use it that way.

## What "agent" means here

Quick spectrum to keep in your head all week:

- A **chatbot** answers questions from a script. Ask it something it doesn't know, it has nothing to do.
- An **assistant** uses tools when you ask it to — "draft an email," "find me a flight."
- An **agent** decides for itself which tools to use, in what order, to finish a task you gave it. It loops on its own.

You're building the third thing. A small version of it.

## The deliverable

By the end of the week, your GitHub repo should contain:

1. A `README.md` with one paragraph saying what your agent does and who it's for.
2. A `system-prompt-v1.md` file with the system prompt you started with.
3. A `system-prompt-v2.md` (and v3, if you went further) with each version you tried.
4. A `testing-log.md` showing what you tested and what happened.
5. A `screenshot.png` showing your agent answering a question correctly.
6. A `reflection.md` with one paragraph — about 4 to 6 sentences — on what surprised you.

Don't worry about making it polished. Show your work. Failure is just exercise.

## What's "good" this week

Good Week 1 work shows three things:

- **You used the one-change rule.** When you edited your system prompt, you changed *one thing* at a time so you could see what that change did.
- **Your testing log is honest.** Tests that failed are more interesting than tests that passed.
- **You can explain your tool choices.** Which tools did you turn on? Which did you turn off? Why?

Anything fancier is bonus. Anything missing from the deliverable list is what we'll talk about in office hours.

## Where to start

If you have time before our first class meeting:

1. Read **`concept_primer_cloud_agents.md`** (in this notebook) — the 20-minute version of everything Week 1 covers.
2. Skim **`week_01_lab_campus_info_bot.md`** — the warm-up we'll do together in class.
3. Don't try to build anything yet. Your Console account isn't set up until Meeting 1.

If you only have 10 minutes, listen to this week's Audio Overview (in the Studio panel). It covers the agent-vs-chatbot distinction and previews what you'll build.

## When you get stuck

Use this notebook. Ask it questions like "what's the difference between a session and an environment?" or "what should I put in section 3 of the system prompt?" — it's grounded in the same sources you're reading and will cite where its answers come from.

If the notebook doesn't help, message me. That's what the GitHub Discussions channel and office hours are for. You won't be the only one with the question.
