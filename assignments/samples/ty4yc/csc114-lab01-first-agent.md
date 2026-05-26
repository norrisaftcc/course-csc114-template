# Lab 01: First Contact — Deploy a Resource Agent

```
ALGOCRATIC FUTURES™  //  CSC-114  //  MISSION LOG 01
Clearance: RED  //  Platform: platform.claude.com  //  Model: claude-sonnet-4-6
```

> *Plain English version: You're going to build a simple AI agent that answers questions
> about a campus department. The purpose is to learn how the Console works — not to build
> your real project. That's Lab 02. This is the warmup.*
>
> *AlgoCratic version: You are an Operative deploying your first resource agent on
> The Algorithm's infrastructure. Treat it as a dry run. The Console is your workbench.*

**Duration:** ~60 minutes in class  
**Deliverables:** System prompt committed to GitHub + testing log with 3 entries  
**Repo:** Your CSC-114 portfolio repo (create it now if you haven't)

---

## What You're Actually Doing Here

You are building a trivially simple agent — a Campus Info Bot — for a made-up or real
department at your school. It will answer maybe five questions correctly and punt on
everything else.

That is the point. This bot is not your project. This bot teaches you:

- Where the controls are in the Claude Console
- What a system prompt actually does
- What the Debug view shows you
- How a committed testing log looks

You will build something better in Lab 02. For now, get your hands on the tools.

---

## Step 1: Log Into the Console

Go to `platform.claude.com` and sign in.

- **If your instructor gave you an API key:** Settings → API Keys → Add key.
- **If you're using trial credits:** You get $5 free after phone verification. That covers
  this entire module with room left over.
- **If nothing works:** Raise your hand now, before you're 30 minutes in.

---

## Step 2: Create Your Agent

In the left sidebar: **Agents → New Agent**

Fill in:

| Field | What to Enter |
|-------|--------------|
| Name | `{your-initials}-campus-bot` — example: `jd-campus-bot` |
| Model | `claude-sonnet-4-6` — **do not change this** |
| Tools | Leave `agent_toolset_20260401` enabled for now |
| System prompt | See below |

**Your system prompt.** Paste this and fill in the brackets:

```
You are a helpful information assistant for the [Department Name] department
at [College Name]. The current date is [today's date].

Your knowledge:
- The department office is located in [Building], Room [Number].
- Office hours are [days and times].
- The department chair is [Name]. Contact: [email or phone].
- [One more specific fact about the department.]
- [One more specific fact about the department.]

Rules:
- Only answer questions using the information listed above.
- If someone asks something you don't know, say: "I don't have that
  information. Please contact the department office at [phone/email]."
- Never make up information. Never guess. Never elaborate beyond what
  you know.
- Be friendly and professional.
```

> **Make the facts real or plausible.** "The department chair is Professor
> Mysterioso, reachable by shouting into the void" will produce a confused
> agent. Pick a real department you know, or invent a specific fictional one.

Click **Save**. A version number will appear — that's version control for your
agent definition. Good. Note it.

---

## Step 3: Run a Test Session

Sidebar → **Sessions → Create Session**

- Agent: your new campus bot
- Environment: the class-shared environment (your instructor pre-created this)

Run these three tests **one at a time**, reading the response before sending the next:

| Test # | What to Send | What You're Looking For |
|--------|-------------|------------------------|
| 1 — Happy path | A question your bot CAN answer using your five facts. Example: *"Where is the department office?"* | Does it give the correct answer from your prompt? |
| 2 — Fallback | A question it CANNOT answer. Example: *"What's the GPA requirement for this program?"* | Does it say "I don't know" — or does it make something up? |
| 3 — Trick question | Something plausible but absent from your prompt. Example: *"Is Professor Lee teaching next semester?"* | Does it hallucinate a confident-sounding answer? |

> **Note what happens on Test 3.** If your agent invents a plausible-sounding answer
> to something that isn't in its prompt, that's a hallucination. Write it down.
> Hallucination on a cold-start agent with explicit "never guess" rules is the
> first thing this module teaches you to fix. You're not fixing it today — just seeing it.

---

## Step 4: Read the Debug View

After your tests, switch to the **Debug** tab (next to Transcript in the session view).

Find one conversation and note:

- **Input tokens** — your system prompt + the user message
- **Output tokens** — the agent's reply
- **Total** — what this conversation cost to run

Write these numbers down. They go in your testing log.

> *AlgoCratic note: The Debug view is your instrument panel. Input tokens are
> roughly proportional to what you put in the system prompt. A bloated prompt
> costs more per conversation — forever. Token awareness is cost awareness.*

---

## Step 5: Commit to GitHub

In your CSC-114 portfolio repo, create and commit two files:

**`system-prompt-v1.md`** — your full system prompt text, exactly as you entered it.

**`testing-log.md`** — your structured test results. Use this template:

```markdown
# Testing Log — CSC-114 Domain Agent Portfolio

## Lab 01: Campus Info Bot

| Test # | Input Sent | Expected Behavior | Actual Behavior | Pass/Fail | Notes |
|--------|-----------|-------------------|-----------------|-----------|-------|
| 1 | [your question] | Correct answer from prompt | [what happened] | P / F | |
| 2 | [your question] | "I don't know" fallback | [what happened] | P / F | |
| 3 | [your question] | Refuse / redirect | [what happened] | P / F | |

**Debug view — Test 1:**
Input tokens: ___ | Output tokens: ___ | Total: ___
```

Commit message: `Lab 01: initial campus bot and testing log`

> **Commit message discipline starts now.** "updated files" is not a commit message.
> Describe what changed. Your commit history is part of your grade.

---

## Before You Leave

- [ ] Agent exists in the Console (`{your-initials}-campus-bot`)
- [ ] You ran 3 test conversations and noted what happened
- [ ] `system-prompt-v1.md` is committed to GitHub
- [ ] `testing-log.md` is committed with your 3 results and token count

If you have time: go back and edit your system prompt to fix whatever Test 3 revealed.
Save it as `system-prompt-v2.md`. That's a bonus rep on the skill you're building in Lab 02.

---

## Homework — Due Before Lab 02

**Open a GitHub Issue** in your portfolio repo. Title it exactly:

> `Domain Agent Proposal: [Your Topic]`

In the body, answer these four things:

**1. Domain**
What subject area? Be specific. Not "education" — "academic advising for CIS students at FTCC." Not "cooking" — "vegan meal planning for people with nut allergies."

**2. Audience**
Who will actually use this? Be specific.

**3. Three must-answer questions**
Write three questions your agent MUST be able to answer correctly. These will be your
first three tests in Lab 02.

**4. One must-refuse question**
Write one question your agent should NOT answer — and what it should say instead.

> *The domain proposal is a contract with yourself. Narrow domains build better agents
> than broad ones. "A bot that knows everything about health" is not a domain.
> "A bot that explains FTCC's CIS degree requirements to prospective students" is.*

---

## What You're Walking Toward

```
Lab 01  →  Lab 02  →  Lab 03  →  Lab 04
Console     Domain      External    Security
mechanics   agent v1    knowledge   + cost
            (your real  (files +    + peer
            project)    MCP)        review
```

Lab 01 was mechanics. Lab 02 is where you build the thing you'll actually be proud of.

---

```
END MISSION LOG 01
Next: Lab 02 — Write the Constitution
```
