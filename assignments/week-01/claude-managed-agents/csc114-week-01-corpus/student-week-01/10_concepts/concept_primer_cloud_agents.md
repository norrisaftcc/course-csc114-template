# Concept Primer: Cloud Agents

**Audience:** Both tracks
**Reading time:** About 20 minutes
**Purpose:** Everything Week 1 covers, in one place, in plain language.

---

## What you're building, in one sentence

A small AI agent that lives in the cloud, follows a system prompt you wrote, and can do something useful in a topic area you care about.

## The chatbot–assistant–agent spectrum

Think about three different AI things you might have used.

**A chatbot.** Customer service on a website asks "How can I help?" You type a question. It either answers from a script or says something unhelpful. If you ask it something it doesn't know, it either makes something up or it gives you a phone number. It can't *do* anything. It only responds.

**An assistant.** You ask Siri or Gemini or Claude to draft an email. It drafts one. You ask it to check the weather. It checks. You ask it to summarize a PDF. It summarizes. It uses tools, but only the ones you point it at, and only when you ask. It doesn't wake up on its own and decide to do anything.

**An agent.** You give it a goal — "find me three good restaurants near campus, check their reviews, and write me a comparison." It searches the web, looks at maps, reads reviews, decides what's relevant, takes notes, and eventually hands you something. You didn't tell it to do each of those steps. It decided.

That's the spectrum. The thing on the right uses tools by itself, in a loop, until it decides it's done. That's an agent.

Some practical implications:

- **Agents cost more.** Every step in the loop uses tokens, and tokens are how you pay. A chatbot might cost a fraction of a cent per question. An agent doing a multi-step task might cost ten cents or a dollar.
- **Agents fail differently.** A chatbot can be wrong. An agent can be wrong *and* spend twenty cents being wrong. So you test agents harder.
- **Agents need clearer instructions.** A chatbot just has to answer one question. An agent has to know what to do, what NOT to do, what tools to use, and when to stop. That's why we spend a whole week on system prompts.

## The Console and its five core objects

You'll spend Week 1 inside the Claude Console at `platform.claude.com`. The Console has a lot of buttons. You only need to understand five things to start.

**Agent.** The thing you're building. An agent has a name, a model (we'll always use `claude-sonnet-4-6` unless your instructor says otherwise), a system prompt, and a list of tools it's allowed to use. Creating an agent is like writing a job description.

**Environment.** The sandbox where the agent does its work when it runs. Think of it like the agent's office: which software is installed, whether it has internet access, whether it can talk to outside services. The default environment has **restricted networking**, which means your agent can't reach the internet. This trips up almost everyone. When you eventually need outside access, you'll create a new environment with `unrestricted` or `limited` networking. (You won't need this in Week 1.)

**Session.** A single conversation between a user and your agent. Sessions are isolated — if your agent creates a file in session A, session B won't see it. Sessions cost money for every second they run. Don't leave them open if you're not using them.

**Vault (Credential Vault).** A secure place to store secrets — API keys, tokens, passwords your agent might need. The agent uses the secret without ever seeing the raw value. **Never put secrets in the system prompt.** Use a vault. We won't use one in Week 1, but you should know the term.

**Skill.** A reusable bundle of instructions and scripts that gives an agent a specific capability — reading PDFs, working with spreadsheets, filling forms. Anthropic ships a handful of built-in skills. You probably won't write your own this week, but you'll see them in the Console UI.

That's it. Five objects. Agent, Environment, Session, Vault, Skill.

## System prompts: the constitution

Most of what you're learning this week is **how to write a good system prompt**.

A system prompt is not a question. It's not a request. It's a **constitution** — the permanent rules your agent lives by, in every conversation, forever, until you change them.

There's a huge difference between asking an AI "answer this customer's question politely" and writing a system prompt that says "You are a customer service agent for Acme Corp. You answer questions about Acme products only. You never make up product specifications. If a customer asks about a competitor, you say: 'I can only help with Acme products.' You always offer to escalate to a human if asked twice." The first is one-time. The second governs every session that agent will ever have.

In Week 1 you'll use a **five-section template** for every system prompt. The sections, in order:

1. **Identity and Role.** Who is this agent? What is its job? What is it NOT?
2. **Behavioral Constraints.** The rules. What it must do. What it must refuse. How to behave when uncertain.
3. **Domain Knowledge.** The facts. For a small domain, you might list them right there. For a bigger one, you point at a file the agent can read.
4. **Output Format.** How responses should be structured — bullet lists, tables, citations, a specific tone.
5. **Context.** Today's date, who the audience is, any other situational information.

You'll see this template again in the lab and spike specs. Memorize the order. You'll write five-section prompts for a living someday.

## The one-change rule

Here's the most important habit you'll build in Week 1.

When you're testing your agent and something isn't quite right, the temptation is to fix five things at once. **Don't.** Change *one* thing. Run your tests again. See what happened. *Then* change the next thing.

Why? Because if you change five things and the agent's behavior improves, you don't know which change helped. Maybe four of them did nothing and one of them did everything. Maybe two of them helped and three of them hurt and they cancelled out. You learn nothing.

This is the same discipline a scientist uses: change one variable, observe the result, then change the next one. It's slower than "fix everything at once." It's also the only way to learn what your changes actually do.

You'll keep a `testing-log.md` file in your repo. Each entry says: what you changed, what you tested, what you observed, what you concluded. That log *is* your evidence of doing the work. Polish doesn't matter. Honesty does.

## Tools: turn on what you need, turn off what you don't

When you create an agent in the Console, you'll see a list of tools you can enable. Web search. File read. File write. Code execution. Web fetch. And more.

The wrong move is to turn them all on. Here's why:

- **More tools = more decisions for the agent to make.** Every tool adds to the agent's reasoning load. If your agent only needs to read a file, giving it code execution just means it might decide to do something weird that you didn't want.
- **More tools = more failure modes.** If web search is on and your agent decides to search the web for an answer that should have come from your knowledge file, you've got a bug.
- **More tools = more cost.** Every tool call costs tokens. Some (like web search) have additional per-call fees.

So: turn on what your agent specifically needs. Document why in a file called `tool-rationale.md`. "I enabled file read because the agent looks up info from a mounted PDF. I disabled web search because answers should come from the file, not the open internet." That's it. Two sentences per tool.

## What Week 1 doesn't cover (and that's fine)

This module was originally taught over two weeks and four meetings. The Summer pilot compresses it to one week and two meetings. We're keeping the first half — building an agent, writing a good system prompt, testing it intentionally — and saving the second half for later. So **you won't be doing these in Week 1**:

- Connecting an agent to MCP servers (third-party data sources like Google Sheets or Jira)
- Mounting your own knowledge files for the agent to read
- Cost calculation and security testing
- Peer review of another student's agent

If you finish early and want to keep going, you're allowed to. The full lab packet (Meetings 3 and 4) is in the notebook under `extension_optional_meetings_3_4.md`. But the deliverables this week are the Meeting 1 and Meeting 2 ones only.

## What "submit" means this week

You'll commit your files to your GitHub repo in the class organization. **You don't need to use Pull Requests this week.** Both tracks just drop files into the repo, however you find easiest:

- GitHub web interface (drag and drop, or "Add file")
- GitHub Desktop app (commit, push)
- Command line, if you already know it

The Sacred Flow workflow (Issue → Branch → PR → Review → Merge) starts in Week 2 for Code Builders. Week 1 is universal-low-stakes. Just get the files into the repo.

## Where to go from here

Once you've read this:

1. Look at `week_01_lab_campus_info_bot.md` — the warm-up we'll do together in Meeting 1.
2. Look at `week_01_spike_domain_agent_v1.md` — the main build for Meeting 2.
3. Check `week_01_deliverable_spec.md` for exactly what to submit.
4. Make sure you can log in at `platform.claude.com` before our first meeting.

If anything in this primer didn't make sense, ask the notebook chat. It can cite back to the exact source it used so you can dig deeper.
