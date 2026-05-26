```
+-----------------------------------------------------------------------+
|   WHEN YOU CAN'T FIND YOUR THOUGHTS (OR YOUR PHONE)                  |
|   AlgoCratic Futures(tm)  //  CSC-114 Unofficial Strategy Guide      |
|   Version 0.2                  Compiled by: Unknown Operative        |
|   Clearance: OPEN             Last Updated: 26SU                     |
+-----------------------------------------------------------------------+
```

*This document was compiled by operatives of The Underground and distributed
via the course repository. It is not official AlgoCratic documentation.
It is, however, accurate.*

---

## TABLE OF CONTENTS

```
[1.0]  WHAT IS THIS COURSE
[2.0]  THE ALGOCRATIC FUTURES WRAPPER  (read this if confused)
[3.0]  THE CLEARANCE SYSTEM
[4.0]  EARNING YOUR RED BADGE  —  GitHub Foundations
[5.0]  EARNING YOUR ORANGE BADGE  —  Agent Operator
[6.0]  ULTRAVIOLET CLEARANCE  —  FAQ
[7.0]  FREQUENTLY ASKED QUESTIONS
[8.0]  KNOWN BUGS / ERRATA
[9.0]  CREDITS / CONTRIBUTORS
```

---

## [1.0]  WHAT IS THIS COURSE

**CSC-114** is *Building Cloud-Based LLM Agents* — a 2-week module at
Fayetteville Technical Community College that follows CSC-113 (AI Fundamentals).
You are here because you finished CSC-113 or tested out of it.

By the end you will be able to:

- Distinguish a chatbot from an assistant from an autonomous agent, and
  explain why the distinction matters for system design
- Build and configure a domain-specific AI agent using the Claude Console
- Write a production-quality system prompt that constrains behavior and
  produces consistent results
- Connect your agent to external knowledge sources (files, MCP servers)
- Evaluate cost, security, and ethical implications of deploying a
  cloud-hosted agent
- Document everything through GitHub, because that is the job

The primary deliverable is a **Domain Agent Portfolio**: a GitHub repository
containing your agent definition, versioned system prompts, testing logs,
and a peer review of another student's agent.

### 1.1  What "building agents" actually means here

An agent is not a chatbot. A chatbot answers questions from a script.
An agent uses tools in a loop, decides what to do next, reads files,
runs code, and operates with minimal hand-holding.

You are not configuring a demo. You are building something that a
real user could interact with and that would behave predictably.
The system prompt is the engineering artifact that makes that true.
Most of your time in this module will be spent writing and testing it.

### 1.2  What you will need

- A computer with a browser (lab machines work fine)
- A GitHub account — you should have this from CSC-113
- Access to `platform.claude.com` — your instructor will provide access
  or you can use $5 in free trial credits (phone verification required)
- Access to Canvas (you already have this)
- Willingness to be confused for short periods on purpose

The last one is not a joke. See [2.0].

---

## [2.0]  THE ALGOCRATIC FUTURES WRAPPER

### 2.1  What is AlgoCratic Futures

AlgoCratic Futures™ is a fictional corporation that serves as the
immersive framing for this course. In-universe, The Algorithm governs
all productivity. Clearance levels gate access to knowledge. The
Underground distributes materials that are technically available to
everyone but that the official systems don't advertise.

You are reading one of those materials right now.

### 2.2  Do I have to roleplay

**No.**

The immersive frame is a door. You can walk through it or not. Either
way the course content, the skills, and the badges are identical.

Some students find the framing makes the work more engaging. Some find
it annoying. Both reactions are fine. The instructor will use the
AlgoCratic vocabulary in some materials. You do not have to use it back.

### 2.3  Why does this framing exist

A few reasons that are actually pedagogical and not just fun:

1. **Productive confusion is a teaching tool.** If you are slightly
   unsure what the rules are, you pay closer attention. That is
   intentional.

2. **Bureaucratic absurdity mirrors real workplaces.** You will
   encounter systems at work that are exactly as opaque as the
   clearance system described here. Practice navigating them now,
   when the stakes are a grade and not a job.

3. **Naming things helps.** "I am an Agent Operator communicating with
   The Algorithm" is a more actionable mental model than "I am typing
   at a chatbot." The fiction is load-bearing.

### 2.4  The core translation table

```
AlgoCratic term          Real meaning
────────────────────     ────────────────────────────────────────
The Algorithm            AI tools (Claude, Copilot, etc.)
Operative                You, the student
The Underground          The course team + peer network
Official servers         Canvas, the college's formal systems
Clearance level          Demonstrated skill tier
Borrowed material        Content that came from somewhere surprising
Productive confusion     Intentional ambiguity used as a teaching tool
```

---

## [3.0]  THE CLEARANCE SYSTEM

There are three clearance levels available in CSC 114.

All of them are accessible to every student. The labels are not gates.
They are milestones that tell you where you are.

```
CLEARANCE    COLOR       UNLOCKS              AVAILABLE
─────────    ──────────  ───────────────────  ──────────
Red          #C94040     GitHub Foundations   Week 1
Orange       #E08236     Agent Operator       Week 4
Ultraviolet  #A78BD9     Advanced Synthesis   Always
```

### 3.1  Why bother with the badge system at all

Two reasons.

First, GitHub Foundations and similar credentials are real things
employers recognize. You are doing the work anyway. You might as well
have something to show for it.

Second, the badge criteria map exactly to the learning objectives. If
you can earn the badge, you have learned the thing. They are the same
activity, not extra work.

---

## [4.0]  EARNING YOUR RED BADGE  —  GitHub Foundations

### 4.1  What this is

Red clearance means you can operate a GitHub repository without
assistance. Not master it. Operate it.

### 4.2  The skills covered

```
Skill                    What you can do when you have it
──────────────────────   ────────────────────────────────────────────
Create a repository      Start a project that lives in version control
Clone                    Get a remote repo onto your local machine
Commit                   Save a meaningful checkpoint with a message
Push                     Send your local commits to GitHub
Pull                     Get someone else's commits onto your machine
Branch                   Work on something without breaking the main copy
Pull request             Propose your changes to a shared codebase
Read a diff              Understand what changed between two versions
```

### 4.3  How to earn it

Complete the Week 1 GitHub assignment and demonstrate these skills
in your course repository. The instructor will confirm. That's it.

There is also a free GitHub Foundations certification exam you can take
externally (github.com/skills). It validates the same competencies and
looks good on a résumé. Recommended but not required.

### 4.4  Common mistakes at Red level

**Committing everything as "update".**
Write commit messages that describe what changed and why. Future you
will be grateful. Future collaborators will be less hostile.

**Never branching.**
Working directly on main is fine for solo homework. It is a career-
limiting habit everywhere else. Branch early, branch often.

**Treating git as a backup system.**
It is version control. Those are different things. A commit is not
a save file. It is a statement: *this is a meaningful state of the
project.*

---

## [5.0]  EARNING YOUR ORANGE BADGE  —  Agent Operator

### 5.1  What this is

Orange clearance means you can use AI tools as deliberate instruments
rather than slot machines. You understand what they can and cannot do,
and you can construct prompts that get reliable results.

### 5.2  The skills covered

```
Skill                    What you can do when you have it
──────────────────────   ────────────────────────────────────────────
Prompt construction      Write prompts that produce consistent output
Context management       Know what to include and what to leave out
Output evaluation        Tell when the AI is wrong or hallucinating
Tool chaining            Connect AI output to other tools/scripts
Workflow automation      Automate a repeating task using AI + code
Debugging with AI        Use AI as a rubber duck that talks back
```

### 5.3  How to earn it

Complete the Domain Agent Portfolio — the primary deliverable for this module.
Your portfolio demonstrates all six Orange-level skills: you designed a domain,
wrote a production system prompt, tested iteratively, connected external knowledge,
diagnosed behavior using the Debug view, and documented the whole thing on GitHub.

The portfolio is not extra work on top of the module. It is the module.

### 5.4  The thing most students get wrong at Orange level

**Treating AI output as ground truth.**

The Algorithm is confident and wrong with some regularity. Your job
at Orange level is not to accept its output. Your job is to evaluate
it. This requires knowing enough about the domain to notice when
something is off.

This is why careful testing comes first. You need to know what correct
behavior looks like before you can tell if the agent is deviating from it.
A testing log with no expected behavior column is not a testing log —
it is a list of things that happened.

### 5.5  Tools you will use

- **Claude Console** (`platform.claude.com`) — the primary workbench.
  Agents, environments, sessions, vaults, and file mounting all live here.
- **Claude Sonnet 4.6** — the default model. You start here. You earn the
  right to use Opus by proving Sonnet can't do the job.
- **GitHub Copilot** — available free with student verification at
  `github.com/education`. Useful for the documentation side of the portfolio.
- **MCP servers** — your instructor may provide one, or you'll configure
  `web_fetch` as an alternative. Either way, Lab 03 covers it.

You are not required to use any specific tool beyond the Console.
You are required to demonstrate the skills.

---

## [6.0]  ULTRAVIOLET CLEARANCE  —  FAQ

### 6.1  What is Ultraviolet

Ultraviolet is not a badge you earn at a specific week. It is a
disposition you develop by paying attention to what is actually
happening, rather than what you are told is happening.

UV-clearance material is advanced synthesis content: things that
connect multiple concepts, explain why something works the way it does,
or reveal the structure underneath the surface.

It is labeled Ultraviolet because in the in-universe framing it was
"borrowed from official servers" and shouldn't technically be here.
In reality it is just the stuff the course team finds most interesting
and wanted to share.

### 6.2  This guide is UV material

It contains the honest version of how this course is designed and why.
The slide deck is the official version. This is the ground truth.

### 6.3  The incident that became the first lesson

Before the orientation slide deck was built, the instructor asked an
AI to read a file from the course repository.

What happened:

```
Step 1  Fetched the GitHub viewer URL
        → Got 76% of the file. Viewer truncated it.

Step 2  Tried the raw file URL (githubusercontent.com)
        → Blocked by robots.txt. Disallow.

Step 3  Synthesized a new artifact from partial data
        → Slide deck built from incomplete read of its own template.
```

That sequence — fetch, escalate, synthesize — is the same shape as
the three square root algorithms in the CSC 113 deck this one was
modeled on. Exhaustive enumeration, bisection, Newton-Raphson.

Same problem. Different amounts of work. And the AI showed its work
the whole time, which is what made it useful.

That is UV-level thinking: noticing the shape of a problem repeats.

---

## [7.0]  FREQUENTLY ASKED QUESTIONS

**Q: Do I have to use the AlgoCratic framing in my assignments?**

No. Refer to it in comments and commit messages if you want. Don't if
you don't. Grading is on the code and the skills, not the narrative.

---

**Q: Can I use AI tools on assignments?**

Yes. Using AI tools is not cheating. Using AI tools as a substitute
for understanding is cheating and also self-defeating.

The test: can you explain what the code does, line by line, to the
instructor? If yes, it's yours regardless of how it was produced.
If no, that's the thing to fix.

---

**Q: What is "The Algorithm" exactly?**

In-universe: the governing intelligence of the AlgoCratic system.

In practice: any AI tool you are using. Claude, Copilot, whatever.
Naming it "The Algorithm" is useful shorthand. It also reminds you
that it has a specific, limited function — it is not a person and it
is not magic.

---

**Q: I've already built agents before. Is this worth my time?**

The skills this module covers that experienced people often still lack:

- Systematic testing with the one-change-rule (most people rewrite everything)
- Cost awareness at the token level (most people never check the Debug view)
- Security testing — prompt injection, environment probing, role escape
- Documentation that someone else could actually use to recreate your work

If you genuinely have all four, talk to your instructor. There may be
an advanced path or a different contribution to make.

---

**Q: Where did AlgoCratic Futures come from?**

It is a fictional universe developed by the course team at FTCC for
use as an immersive pedagogical framework. The AlgoCratic Futures
setting is used in CTS 285 (Flask web development) as well, where
students build satirical software for a fictional corporate client.

CSC 114 uses a lighter version of the same frame.

---

**Q: Is this on the exam?**

The clearance levels are not on an exam. The skills they represent are
demonstrated in projects.

---

**Q: What if I fall behind?**

File an issue. Seriously — use GitHub Issues to flag that you are
stuck. This is the intended escalation path. It is also practicing
the workflow that developers use in real teams.

---

## [8.0]  KNOWN BUGS / ERRATA

*This section exists because honesty is a design principle.*

### 8.1  AI tools will confidently hallucinate

This is not a theoretical concern. It will happen during this module.
Your agent will produce plausible-sounding answers to questions that
aren't in its knowledge base. Your job is to notice — and to write
constraints that make it stop.

Mitigation: test everything. The trick question in Lab 01 is there
specifically to surface this. If your agent hallucinated, that's not
failure — that's data. The system prompt is how you fix it.

### 8.2  robots.txt blocks raw GitHub fetches

If you are using an AI tool to read files from GitHub, the raw
endpoint (githubusercontent.com) may be blocked by robots.txt.
The rendered viewer URL returns partial content. Plan accordingly.

This is not a bug in GitHub. It is a constraint to know about.

### 8.3  The course materials were built with the tools you are learning

This guide was written with AI assistance. The slide deck was built
from an incomplete AI read of its own template. The course repository
structure was scaffolded with Claude Code.

This is disclosed because transparency about tool use is part of what
we are teaching. If something in the course materials is wrong, it may
have been wrong because the tool was wrong and we missed it.

If you find an error: file an issue in the course repository. That is
the correct fix and also a GitHub skill.

### 8.4  The AlgoCratic framing is new and being refined

This is the first run of CSC 114 with the Underground framing (26SU).
Some pieces will work better than others. Student feedback changes the
next version. This is intentional — the course is a living document.

### 8.5  "Ultraviolet" does not mean harder

It means more meta. Some students find meta-level content clarifying.
Some find it abstract and annoying. If the UV framing is not working
for you, ignore it. The agent-building and GitHub content is the point.

---

## [9.0]  CREDITS / CONTRIBUTORS

```
Course design        FTCC Programming & Development Tools Team
AlgoCratic Futures   D. Teter, M. Milstead, A. Cameron,
                     H. Seidi, D. Norris, and others
This guide           Compiled by Unknown Operative
                     (contributions welcome via pull request)
Inspired by          GameFAQs community guides, 1996–present
                     The principle that someone always writes down
                     what the game actually does
```

---

```
+-----------------------------------------------------------------------+
|  END OF DOCUMENT                                                      |
|  Version 0.2 — subject to revision                                   |
|  To contribute: fork the repo, edit, submit a pull request           |
|  That is also a Red clearance activity.                              |
+-----------------------------------------------------------------------+
```
