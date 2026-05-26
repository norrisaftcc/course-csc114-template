# Week 1 Canvas + Knowledge Check Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the four Canvas/KC artifacts for pilot Week 1 (Cloud Agents), applying the template established in PR #19 (Week 2) with Week 1-specific content changes.

**Architecture:** Four artifacts in `planning/pilot_su26/week-01-cloud-agents/` alongside the existing markdown spine. Canvas overview HTML reuses Week 2's CSS structure with content rewritten for Cloud Agents. Knowledge Check is 13 technical questions (no Sacred Flow section — Week 1 is universal drop). Canvas build notes are a near-copy of Week 2's per-week file. PR uses the same Sacred Flow we teach.

**Tech Stack:** HTML/CSS (inline only, Canvas-safe), Markdown (text2qti dialect), text2qti CLI (already installed in `.venv/`), git/gh CLI.

**Spec reference:** `docs/superpowers/specs/2026-05-22-week-01-canvas-kc-design.md`
**Related issue:** #20

---

## File Structure

| Path | Responsibility | Status |
|---|---|---|
| `planning/pilot_su26/week-01-cloud-agents/canvas-page.html` | Paste-into-Canvas overview page for Week 1. Inline CSS only. Same visual structure as Week 2's canvas-page.html; content rewritten for Cloud Agents. | Create |
| `planning/pilot_su26/week-01-cloud-agents/knowledge-check.md` | text2qti source — 13 questions, all technical (no Sacred Flow section). | Create |
| `planning/pilot_su26/week-01-cloud-agents/knowledge-check.zip` | Generated QTI 1.2 package. Output of `.venv/bin/text2qti`. | Create (generated) |
| `planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md` | Near-copy of Week 2's build notes. Same `../../../.venv/bin/text2qti` depth. | Create |

No existing files modified.

---

## Task 1: Confirm branch and issue state

**Files:** none

- [ ] **Step 1: Confirm on `week-01-canvas-kc` with clean working tree (modulo pre-existing entries)**

Run:
```bash
git status && git branch --show-current
```
Expected: `Switched to branch 'week-01-canvas-kc'` or already on it. The branch should track `origin/main`. The spec doc commit (`a43f911 Add design spec for Week 1 Canvas + KC vertical slice`) should be present.

If not on `week-01-canvas-kc`, run `git checkout week-01-canvas-kc`. If the branch doesn't exist, run `git checkout -b week-01-canvas-kc origin/main` and report.

Expected `git status --short` output: at most pre-existing modified `planning/csc_dash/CSC-114/.DS_Store` and untracked `.claude/`. Both are unrelated to this PR.

- [ ] **Step 2: Confirm GitHub issue #20 exists and is open**

```bash
gh issue view 20 --json state,title,number
```
Expected: state OPEN, title "Week 1 Canvas page + Knowledge Check (Cloud Agents)", number 20.

If state is CLOSED or anything else unexpected, stop and report.

- [ ] **Step 3: No commit** — this task has no file changes. Move to Task 2.

---

## Task 2: Verify text2qti is callable in the venv

**Files:** none. The venv at `.venv/` already exists from PR #19.

- [ ] **Step 1: Confirm pandoc still on PATH**

```bash
which pandoc && pandoc --version | head -1
```
Expected: prints path and version line (`/opt/homebrew/bin/pandoc`, `pandoc 3.9.0.2` or compatible).

- [ ] **Step 2: Confirm `.venv/bin/text2qti` exists and runs**

```bash
ls -la .venv/bin/text2qti && .venv/bin/text2qti --version
```
Expected: file exists; version `0.7.0.1` (or compatible) prints.

If `.venv/` is missing (e.g., on a fresh clone), follow the install steps from `planning/pilot_su26/week-02-keras-hello-world/canvas-build-notes.md` (the "Install / dependencies" section) before continuing:

```bash
python3 -m venv .venv
.venv/bin/pip install --upgrade pip
.venv/bin/pip install text2qti
```

- [ ] **Step 3: No commit** — environment-only verification.

---

## Task 3: Author `canvas-page.html`

**Files:**
- Create: `planning/pilot_su26/week-01-cloud-agents/canvas-page.html`

- [ ] **Step 1: Create the file with the full Week 1 overview HTML**

Use the Write tool to create `planning/pilot_su26/week-01-cloud-agents/canvas-page.html` with this EXACT content. Do NOT paraphrase, "improve," or rewrite for clarity — write it verbatim:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 1: Cloud Agents</title>
    <style>
        /* Canvas-compatible CSS — inline only, no external stylesheets */
        .module-header {
            background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .module-header h1 { margin: 0 0 10px 0; font-size: 2.5em; font-weight: bold; }
        .module-meta { display: flex; gap: 20px; margin-top: 15px; font-size: 0.95em; flex-wrap: wrap; }
        .meta-item { background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 5px; }
        .content-section {
            background: #f8f9fa;
            border-left: 5px solid #1e88e5;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 5px;
        }
        .content-section h2 { color: #1e88e5; margin-top: 0; font-size: 1.8em; border-bottom: 2px solid #1e88e5; padding-bottom: 10px; }
        .learning-objectives { background: #e3f2fd; border-left: 5px solid #2196F3; padding: 20px; margin: 20px 0; }
        .learning-objectives ul { margin: 10px 0; padding-left: 25px; }
        .learning-objectives li { margin: 10px 0; line-height: 1.6; }
        .two-track-box {
            background: #f3e5f5;
            border: 2px solid #9c27b0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .two-track-box h3 { margin-top: 0; color: #7b1fa2; font-size: 1.3em; }
        .assignment-card {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .assignment-card h3 { color: #1e88e5; margin-top: 0; font-size: 1.4em; }
        .button-primary {
            background: #1e88e5; color: white; padding: 12px 25px; border-radius: 6px;
            text-decoration: none; display: inline-block; margin: 10px 10px 10px 0; font-weight: bold;
        }
        .button-primary:hover { background: #1565c0; color: white; text-decoration: none; }
        .button-secondary {
            background: #6c757d; color: white; padding: 12px 25px; border-radius: 6px;
            text-decoration: none; display: inline-block; margin: 10px 10px 10px 0; font-weight: bold;
        }
        .checklist { background: #fff3e0; border-left: 5px solid #ff9800; padding: 20px; margin: 20px 0; }
        .checklist h2 { margin-top: 0; color: #e65100; font-size: 1.5em; }
        .checklist ul { list-style: none; padding-left: 0; }
        .checklist li { padding: 8px 0; border-bottom: 1px solid #ffcc80; }
        .checklist li:before { content: "☐ "; font-size: 1.2em; margin-right: 10px; color: #ff9800; }
        .tip-box { background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .tip-box h2 { margin-top: 0; color: #2e7d32; font-size: 1.3em; }
        @media print {
            .button-primary, .button-secondary { display: none; }
            .module-header, .assignment-card { break-inside: avoid; }
        }
    </style>
</head>
<body>

<div class="module-header">
    <h1>Week 1: Cloud Agents</h1>
    <p style="font-size: 1.2em; margin: 10px 0;">Before we touch the textbook, you build something. By Friday you have a working AI agent of your own design in the Claude Console.</p>
    <div class="module-meta">
        <div class="meta-item">Duration: 1 week</div>
        <div class="meta-item">No textbook reading — content lives in learn.md</div>
        <div class="meta-item">Due: End of Week 1, before Monday of Week 2</div>
    </div>
</div>

<!-- Learning Outcomes -->
<div class="learning-objectives">
    <h2>Learning Outcomes</h2>
    <p><strong>By Friday of Week 1, you can:</strong></p>
    <ul>
        <li><strong>Explain</strong> the chatbot → assistant → agent spectrum and where Claude Managed Agents sits on it.</li>
        <li><strong>Create</strong> a Claude Managed Agent in the Console, including model selection and system prompt.</li>
        <li><strong>Design</strong> a domain-specific system prompt using the five-section template.</li>
        <li><strong>Test</strong> an agent using the one-change-rule and document what happened.</li>
        <li><strong>Decide intentionally</strong> which tools your agent gets and write down why.</li>
    </ul>
</div>

<!-- Why this is Week 1 -->
<div class="content-section">
    <h2>Why this is Week 1, not later</h2>
    <p>Two reasons. First, you learn faster when you've already built something — Week 2 (Keras hello-world) lands differently if you've spent a week thinking about what an AI system actually <em>is</em>. Second, some of you will keep iterating on your agent the whole term as your real project. <strong>That's allowed.</strong> The textbook track and the agent track both count, as long as you build something real.</p>
    <p>This week is also where the class gets its <strong>GitHub home base</strong> set up. You need an account, you need to be in the course org, and you need to have committed at least one file.</p>
</div>

<!-- Submission expectations this week -->
<div class="two-track-box">
    <h3>Submission This Week — Universal Drop</h3>
    <p><strong>Both tracks submit identically this week.</strong> Screenshot of your agent answering correctly + 1-paragraph reflection, added to your repo via GitHub Desktop, the GitHub web UI's "add file" button, or <code>git</code> — your choice.</p>
    <p>No issues, no branches, no PRs required. Sacred Flow (Issue → Branch → Commit → PR → Merge) starts <strong>Week 2</strong> for the Code Builders track. This week your only GitHub job is <em>get into the course org and put a file in your repo.</em></p>
</div>

<!-- What you do this week -->
<div class="content-section">
    <h2>What You Do This Week</h2>

    <div class="assignment-card">
        <h3>1. Learn — What is an agent, really?</h3>
        <p>Concepts only — no Console yet. The chatbot → assistant → agent spectrum, what tools mean for an agent, what a system prompt is for. Read first.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View learn.md</a>
    </div>

    <div class="assignment-card">
        <h3>2. Practice — Console warm-up: Campus Info Bot</h3>
        <p>Retry-OK. Create a trivially simple "Campus Info Bot" in the Console to learn the mechanics — agent creation, model selection, the basic system prompt, your first test session. Not your real project, just the warm-up.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View practice.md</a>
    </div>

    <div class="assignment-card">
        <h3>3. Apply — Build your domain agent v1</h3>
        <p>This is the real work. Pick a domain you actually know about. Write a five-section system prompt (Identity → Behavioral Constraints → Domain Knowledge → Output Format → Context). Decide which tools your agent gets and write down why. Run tests using the one-change-rule.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View apply.md</a>
    </div>

    <div class="assignment-card">
        <h3>4. Assess — What you submit</h3>
        <p>Screenshot of your agent answering correctly + 1-paragraph reflection. Both tracks submit the same way this week — see "Universal Drop" above.</p>
        <a href="/courses/[COURSE_ID]/assignments/[ASSIGNMENT_ID]" class="button-primary">View Assess Details</a>
    </div>

    <div class="assignment-card">
        <h3>5. Knowledge Check — Vocabulary calibration</h3>
        <p>13-question multiple choice quiz on agent vocabulary, Console mechanics, the five-section system prompt, testing discipline, and tool rationale. <strong>Unlimited attempts.</strong> Use it as a learning tool — try, read the explanation, retry.</p>
        <a href="/courses/[COURSE_ID]/quizzes/[QUIZ_ID]" class="button-primary">Take the Knowledge Check</a>
    </div>
</div>

<!-- Code Preview -->
<div class="content-section">
    <h2>Week 1 System Prompt Preview</h2>
    <p>Here's what your domain agent's system prompt will look like — the five sections you'll fill in:</p>
    <pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 5px; overflow-x: auto;"><code># Section 1: Identity and Role
You are a helpful information assistant for the [Department Name]
at [College Name]. The current date is [today's date].

# Section 2: Behavioral Constraints
- Only answer questions using the information below.
- If someone asks something you don't know, say:
  "I don't have that information. Please contact [office] at [contact]."
- Never make up information. Never guess.
- Be friendly and professional.

# Section 3: Domain Knowledge
- The office is located in [Building], Room [Number].
- Office hours are [days] from [time] to [time].
- The chair is [Name]. Contact: [email or phone].
- [Add more specific facts about your domain.]

# Section 4: Output Format
- Answer in 1-3 sentences unless asked for more detail.
- When relevant, include the contact info from Section 3.
- Use a friendly, professional tone.

# Section 5: Context
- You are a learning project for CSC-114 at FTCC.
- Some users may be testing you — answer truthfully and consistently.</code></pre>
    <p><strong>What you'll do in Apply:</strong> swap the placeholders for your real domain (a department you know, a club, a course you've taken, a hobby) and iterate using the one-change-rule until the agent behaves the way you want.</p>
</div>

<!-- Want to keep going? -->
<div class="content-section" style="background: #e0f7fa; border-left-color: #00838f;">
    <h2 style="color: #00838f;">Want to Keep Going?</h2>
    <p>There are two ways to go deeper with your agent — both are valid success paths in this course.</p>
    <p><strong>Path 1: The deeper module.</strong> The original CSC-113 Cloud Agents module was 2 weeks. We compressed it to 1 week for the pilot, but Meetings 3 and 4 are still available as self-directed extensions:</p>
    <ul>
        <li>Mounting files into your agent's environment</li>
        <li>Connecting to MCP (Model Context Protocol) servers</li>
        <li>Security testing — prompt injection, role escape, system prompt extraction</li>
        <li>Cost calculation and prompt caching</li>
        <li>Structured peer review</li>
    </ul>
    <p>Source: <code>planning/legacy_csc113/CSC-114_Module_Cloud_Agents_Student_Lab_Packet.md</code>, Meetings 3–4. Not required, but rewarding if Week 1 hooked you.</p>
    <p><strong>Path 2: The keep-iterating path.</strong> Some of you will spend the rest of the term improving your agent instead of switching to the textbook track in Week 2. <strong>That counts.</strong> The textbook track (Keras → deep learning) and the agent track both lead to a real final project. Pick the path that fits the work you actually want to do.</p>
</div>

<!-- Checklist -->
<div class="checklist">
    <h2>Week 1 Completion Checklist</h2>
    <ul>
        <li>Anthropic Console account ready (verified phone for $5 trial credits if no API key)</li>
        <li>GitHub account, accepted invite to the course org, repo cloned or initialized</li>
        <li>Read learn.md before Meeting A</li>
        <li>Create the Campus Info Bot warm-up in the Console (Practice)</li>
        <li>Pick your domain and write a five-section system prompt v1 (Apply)</li>
        <li>Run at least one test session and one variant using the one-change-rule</li>
        <li>Drop your screenshot + reflection into your repo (Assess)</li>
        <li>Take the Knowledge Check (unlimited attempts — use it as a learning tool)</li>
    </ul>
</div>

<!-- Tips -->
<div class="tip-box">
    <h2>Senpai's Tips for Week 1</h2>
    <ul>
        <li><strong>Pick a domain you actually know about.</strong> If you can't list 5 facts off the top of your head, your agent can't either. A math department, a club you're in, a video game you've played, a TV show you watch — anything where you can write authoritative Domain Knowledge.</li>
        <li><strong>The one-change-rule is the most useful habit you'll build this term.</strong> Change one thing per test. Write down what changed. Compare to the last test. It's tedious for two days and then it's automatic.</li>
        <li><strong>$5 of trial credit is enough for Week 1.</strong> Don't burn it on infinite "hello" tests. Plan your test sessions so each one actually teaches you something.</li>
        <li><strong>Behavioral Constraints do more work than Domain Knowledge.</strong> "Never make up information" is worth more than 10 extra facts.</li>
        <li><strong>If your agent is doing too much, scope down its tools.</strong> An agent with every tool enabled is an agent that will surprise you. Disable what it doesn't need and watch the behavior get more predictable.</li>
    </ul>
</div>

<!-- Senpai's Note -->
<div class="content-section" style="background: #fff8e1; border-left-color: #fbc02d;">
    <h2 style="color: #f57f17;">Senpai's Note</h2>
    <p style="font-size: 1.1em; line-height: 1.6;">
        You learn faster when you've built something first. That's why this is Week 1 — before any textbook, before Keras, before the math. By Friday you'll have a working AI agent that does something specific, designed by you, with deliberate choices about what it knows and what it can do. That experience will reshape how you read every chapter that comes after.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6;">
        Don't aim for impressive this week. Aim for <em>specific</em>. A bot that answers 5 questions about your hobby with consistent, accurate, in-character responses is worth more than a flashy bot that tries to do everything and trips over its own feet.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6;">
        And if you find this so much more interesting than the textbook track that you want to keep iterating on your agent for the rest of the term — that's a real option. We'll talk about how to scope a Week-8-worthy agent project when you get there.
    </p>
</div>

</body>
</html>
```

- [ ] **Step 2: Verify placeholders are confined to `href=` attributes**

```bash
grep -n '\[COURSE_ID\]\|\[FILE_ID\]\|\[ASSIGNMENT_ID\]\|\[QUIZ_ID\]' planning/pilot_su26/week-01-cloud-agents/canvas-page.html | grep -v 'href=' && echo "FAIL: placeholders outside href" || echo "PASS: all placeholders in href attributes"
```
Expected: PASS line printed.

- [ ] **Step 3: Verify heading hierarchy is sensible (no level skips)**

```bash
grep -oE '<h[1-6][^>]*>' planning/pilot_su26/week-01-cloud-agents/canvas-page.html
```
Expected sequence: `<h1>` (header), then `<h2>` for Learning Outcomes, `<h2>` for Why this is Week 1, `<h3>` for Universal Drop callout heading, `<h2>` for What You Do This Week, then `<h3>` × 5 for the assignment cards, `<h2>` for System Prompt Preview, `<h2>` for Want to Keep Going, `<h2>` for Checklist, `<h2>` for Tips, `<h2>` for Senpai's Note.

No `<h4>` should appear anywhere. If any are found, stop and report.

- [ ] **Step 4: Verify no external stylesheets**

```bash
grep -n 'rel="stylesheet"\|@import' planning/pilot_su26/week-01-cloud-agents/canvas-page.html || echo "PASS: no external stylesheets"
```
Expected: PASS line printed.

- [ ] **Step 5: Commit**

```bash
git add planning/pilot_su26/week-01-cloud-agents/canvas-page.html
git commit -m "$(cat <<'EOF'
Add Week 1 Canvas overview page

Paste-into-Canvas HTML page for pilot Week 1 (Cloud Agents). Same
visual structure as Week 2's canvas-page (PR #19); content rewritten
for the Cloud Agents module — universal-drop submission (no Sacred
Flow yet), five-section system prompt code preview, and an explicit
"Want to keep going?" callout covering both the Meetings 3-4 extension
and the keep-iterating-on-your-agent success path.

Inline CSS only. Canvas placeholders left intact ([COURSE_ID] etc.).
EOF
)"
```

---

## Task 4: Author `knowledge-check.md`

**Files:**
- Create: `planning/pilot_su26/week-01-cloud-agents/knowledge-check.md`

- [ ] **Step 1: Create the file with the full text2qti source**

Use the Write tool. The content is verbatim — every space, every blank line matters since text2qti's parser is whitespace-sensitive. Two blank lines between question blocks.

````
Quiz title: Week 1 Knowledge Check — Cloud Agents
Quiz description: Vocabulary check for the Cloud Agents module — chatbot vs assistant vs agent, the Console, the five-section system prompt, testing discipline, and tool rationale. Unlimited attempts; the goal is mastery, not test-taking. Read the explanations on anything you miss.


1.  What's the most important distinction that makes a Claude Managed Agent an "agent" rather than a "chatbot"?
*a) The agent can use tools to take actions and decide what to do next, not just respond to messages.
b)  The agent has a longer memory than a chatbot.
c)  The agent runs on more expensive hardware.
d)  The agent uses a different programming language.
... Chatbots respond to messages — they take input, produce output, no autonomous action. Agents have agency: they can use tools (search a knowledge base, query an API, read a file, run code), make decisions about which tool to call, observe results, and decide what to do next. Memory and hardware aren't the distinguishing features; the ability to act in the world is.


2.  What does the "system prompt" of your agent actually do?
a)  It's the greeting the agent shows users when a session starts.
*b) It's the persistent instructions the agent reads at the start of every session — its identity, what it knows, how to behave, what not to do.
c)  It's the API endpoint the agent calls to fetch responses.
d)  It's only used for testing — the production agent ignores it.
... The system prompt is your agent's "always-true" context. The model reads it before any user message and treats it as authoritative. This is where you specify who the agent is, what it knows, what tone to use, what's off-limits, and how to handle unknowns. A weak system prompt is the most common cause of an agent misbehaving — strong system prompts are the difference between "neat demo" and "useful tool."


3.  When you enable a "tool" for your agent (like web search or file access), what does that actually let the agent do?
a)  It lets the user manually run those tools alongside the agent.
b)  It changes the model from Claude to a different one.
*c) It gives the agent the ability to call that tool autonomously when it decides the tool is needed — the agent invokes the tool and reads the result.
d)  It speeds up the agent's response time.
... Tools are how an agent acts beyond just generating text. When a tool is enabled, the agent can choose — based on the user's request — to call that tool, wait for the result, read it, and incorporate it into its next response. The agent decides *when* to use a tool, not the user. That choosing-when-to-act is what "autonomous action" means in practice.


4.  You want to create your first Claude Managed Agent in the Console. Where do you start?
a)  Settings → Add API Key.
*b) Agents → New Agent.
c)  Sessions → Create Session.
d)  Models → Configure Claude.
... New Agent is created from the Agents section in the left sidebar of the Console. You give it a name, pick a model (Claude Sonnet 4.6 for this course), write a system prompt, and decide which tools it can access. Sessions come after — a session is one conversation with an already-created agent. Settings is for account-level configuration like API keys.


5.  For all CSC-114 work, you must use the `claude-sonnet-4-6` model when creating agents. Why does the course mandate a specific model rather than letting you choose?
a)  It's the only model that can run in the Claude Console.
*b) Different models have different costs, speeds, and capabilities. Mandating one model means everyone's results are comparable — when a classmate's agent works and yours doesn't, the model isn't the variable.
c)  `claude-sonnet-4-6` has the longest context window of any AI model.
d)  Other models would refuse to follow course instructions.
... Multiple Claude models are available (Haiku, Sonnet, Opus, different generations) — each with different tradeoffs in speed, capability, and cost per token. For a class where students compare results, debug each other's agents, and build a shared mental model, fixing the model removes a confounding variable. Once you're comfortable, exploring different models is a great extension exercise — but during the structured part of the course, consistency is the goal.


6.  In the 5-section system prompt template (Identity → Behavioral Constraints → Domain Knowledge → Output Format → Context), what's the job of the *Identity and Role* section?
a)  It lists every tool the agent can use.
*b) It tells the agent what it is and who it serves — e.g., "You are a helpful information assistant for the Math department at FTCC."
c)  It records what tests have been run on the agent.
d)  It controls the agent's response speed.
... Identity is the anchor for everything else. By stating "You are X, serving Y," you establish the agent's frame of reference, which influences tone, scope, and what counts as in-domain. A clear identity makes the agent better at saying "that's outside my area" rather than hallucinating answers about things it shouldn't speak to.


7.  Why does the 5-section system prompt template include a *Behavioral Constraints* section with rules like "Never make up information" and "If you don't know, say so"?
a)  To make the agent's responses shorter.
b)  To prevent the agent from learning anything new during a session.
*c) To set explicit limits on what the agent will and won't do — turning vague "be helpful" instincts into concrete rules the model can follow consistently.
d)  To make the agent grammatically correct.
... Without explicit constraints, agents default to "be helpful" — which often means making something up when they're uncertain. Behavioral Constraints flip that default: "When uncertain, say so — don't guess." Once you state the rule clearly, the model has something to follow. Vague good intentions aren't enough; specific rules are.


8.  What's the *Domain Knowledge* section in a 5-section system prompt for?
a)  A list of every fact the agent might ever encounter.
b)  The agent's chat history from previous sessions.
*c) The specific facts the agent should treat as authoritative — the office hours, the procedures, the people, the URLs that are part of the agent's expertise.
d)  A list of competing agents you should beat.
... Domain Knowledge is where you embed the agent's "expert" content — the things you want it to know and answer from, rather than guess at. For a Math department info bot, that's the chair's name, office hours, course numbers, etc. Rule of thumb: if a student would ask about it and the answer is stable, it goes here. If the answer is dynamic (changes daily), use a tool instead.


9.  You're testing your agent and want to figure out why it's giving an unhelpful answer. What does the "one-change-rule" tell you to do?
a)  Restart the entire agent from scratch every time.
*b) Change exactly one thing (one section of the system prompt, one tool setting, one wording) at a time, then test again — so you know what caused any change in behavior.
c)  Test the agent only once, then deploy.
d)  Always change all five sections of the system prompt together.
... This is the same discipline as a controlled experiment. If you change the identity, the constraints, and the domain knowledge all at once and the agent behaves differently, you don't know which change caused the difference. Change one thing, observe, then decide whether to keep it. This habit is the most useful thing you'll build this term — and it generalizes far beyond agents.


10. You're running a test session on your agent. Which of the following makes the session most useful to learn from later?
a)  Sending one quick "Hello!" message and seeing if the agent responds.
b)  Sending random unrelated questions to see how the agent handles them.
*c) Sending a small set of planned questions (some you expect to work, some edge cases), recording the agent's exact responses, and noting your observations alongside each one.
d)  Letting a friend chat with the agent without watching what they say.
... A useful test is one you can compare to a future test. That means writing down what you sent, what came back, what surprised you, and what you'd change. Random poking might surface a problem but doesn't help you reason about it. Disciplined logging turns each session into evidence — and evidence is what the one-change-rule depends on.


11. Your agent is a Math department info bot. The Console offers tools like web search, file access, and code execution. Why might you disable some of these tools rather than turn them all on?
a)  Disabled tools save you money on Claude API charges.
*b) Tools the agent doesn't need are extra surface area — they let the agent answer questions it shouldn't, make decisions about tools it wasn't designed for, and behave unpredictably. Least-privilege agents are easier to reason about and test.
c)  Canvas requires every agent to use exactly two tools.
d)  Disabled tools make the agent's responses longer.
... "Least privilege" is the principle: give the agent exactly the tools it needs to do its job, nothing more. If your info bot doesn't need to run code, code execution is just a way for it to surprise you. The fewer tools, the smaller the space of things the agent can do — which means easier debugging, more predictable behavior, and fewer ways for things to go wrong. (Cost is real but secondary; the main reason is predictability.)


12. An agent has every Console tool enabled by default — web search, code execution, file access, image generation, the lot. What's the most likely failure mode?
a)  The agent runs out of memory.
*b) The agent answers off-topic questions (because it has the tools to do so), takes unintended actions, or invents elaborate solutions when a simple "I don't know" would have been correct.
c)  The agent refuses to answer any questions at all.
d)  The agent shuts itself down for safety.
... When an agent has every tool, every user request looks like a problem it can solve — even if it shouldn't. Asked about the weather? It'll search the web. Asked to write code? It'll fire up code execution. The result is an agent that drifts from its purpose, takes actions you didn't expect, and gives confident answers in domains it has no business addressing. Scoping tools deliberately is a guardrail.


13. This Knowledge Check (and others like it in CSC-114) allows unlimited attempts. What's the main reason for that?
a)  To make grades higher than they otherwise would be.
b)  Because the quiz is easy and one attempt is enough.
*c) To make the quiz a learning tool — you can try, read the explanation when you miss something, look it up, and try again — rather than a one-shot assessment.
d)  Because the instructor doesn't have time to grade re-takes.
... Knowledge checks here are calibration, not gating. If you miss a question, the explanation tells you exactly what was being asked and why your answer was off — go back to the reading, fix the gap, and retake. That loop (try, fail, learn, retry) is what builds understanding. Save the test anxiety for assessments that actually need it; here, your goal is mastery, not test-taking.
````

- [ ] **Step 2: Verify text2qti parses the source cleanly**

```bash
cp planning/pilot_su26/week-01-cloud-agents/knowledge-check.md /tmp/test-kc-w1.md && .venv/bin/text2qti /tmp/test-kc-w1.md && ls -la /tmp/test-kc-w1.zip && rm /tmp/test-kc-w1.md /tmp/test-kc-w1.zip 2>/dev/null
```
Expected: exit 0, /tmp/test-kc-w1.zip exists (10–30 KB), no error messages. If parsing fails, STOP and report — most common cause is missing blank line between questions.

- [ ] **Step 3: Verify 13 questions and 13 correct-answer markers**

```bash
grep -cE '^[0-9]+\.' planning/pilot_su26/week-01-cloud-agents/knowledge-check.md
grep -cE '^\*[a-d]\)' planning/pilot_su26/week-01-cloud-agents/knowledge-check.md
```
Both should print `13`.

- [ ] **Step 4: Commit the source**

```bash
git add planning/pilot_su26/week-01-cloud-agents/knowledge-check.md
git commit -m "$(cat <<'EOF'
Add Week 1 Knowledge Check (text2qti source)

13 questions, all technical (no Sacred Flow section — Week 1 is
universal drop submission). Breakdown: 3 vocabulary (agent vs
chatbot, system prompts, tools), 2 Console mechanics (creating an
agent, model selection), 3 five-section system prompt (Identity,
Behavioral Constraints, Domain Knowledge), 2 testing discipline
(one-change-rule, useful test sessions), 2 tool rationale
(least-privilege, every-tool failure modes), 1 unlimited-attempts
pedagogy (kept from Week 2).
EOF
)"
```

---

## Task 5: Generate and commit `knowledge-check.zip`

**Files:**
- Create: `planning/pilot_su26/week-01-cloud-agents/knowledge-check.zip`

- [ ] **Step 1: Build the QTI zip from inside the week-01 folder**

```bash
cd planning/pilot_su26/week-01-cloud-agents && ../../../.venv/bin/text2qti knowledge-check.md && cd -
```
Expected: text2qti writes `knowledge-check.zip` (10–30 KB), exit 0, no warnings.

- [ ] **Step 2: Verify the zip is a valid QTI package**

```bash
unzip -l planning/pilot_su26/week-01-cloud-agents/knowledge-check.zip
```
Expected: lists `imsmanifest.xml` and an assessment XML under a `text2qti_assessment_<uuid>/` folder. If unzip says "not a zip file," text2qti generation failed silently — STOP and report.

- [ ] **Step 3: Confirm the solutions HTML isn't around (text2qti only produces it with `--solutions`, but check anyway)**

```bash
rm -f planning/pilot_su26/week-01-cloud-agents/knowledge-check_solutions.html
```

- [ ] **Step 4: Commit the zip**

```bash
git add planning/pilot_su26/week-01-cloud-agents/knowledge-check.zip
git commit -m "$(cat <<'EOF'
Generate Week 1 Knowledge Check QTI zip

Output of `.venv/bin/text2qti knowledge-check.md`. Canvas Classic
Quizzes import accepts this directly. Committed alongside source so
instructors can import without installing text2qti first.
EOF
)"
```

---

## Task 6: Author `canvas-build-notes.md`

**Files:**
- Create: `planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md`

This is a near-copy of Week 2's `canvas-build-notes.md` with Week 1-specific wording in 2 places. Same `../../../.venv/bin/text2qti` depth (Week 1 lives at the same nesting level).

- [ ] **Step 1: Create the file with this exact content**

````markdown
# Canvas build notes — Week 1

How to import this week's Knowledge Check and overview page into Canvas, and how to rebuild the quiz import file if the source changes.

This file is for **instructors**, not students.

---

## Files in this folder

| File | What it is | What to do with it |
|---|---|---|
| `canvas-page.html` | Paste-into-Canvas overview page for Week 1. | See "Import the overview page" below. |
| `knowledge-check.md` | text2qti source for the 13-question Knowledge Check. | Edit when questions need to change; rebuild the zip. |
| `knowledge-check.zip` | Generated QTI 1.2 package. | Import into Canvas Classic Quizzes. |

The `.zip` is rebuilt from the `.md`. The `.md` is the source of truth; if you find a typo or want to change a question, edit the `.md` and rebuild.

---

## Import the Knowledge Check (QTI zip → Canvas Classic Quiz)

1. In your Canvas course, go to **Settings → Import Course Content**.
2. **Content Type:** "QTI .zip file".
3. **Source:** upload `knowledge-check.zip`.
4. Leave "Default Question Bank" empty (the import creates its own).
5. Click **Import**. The import shows up under the "Current Jobs" section — wait until it says "Completed".
6. The new quiz appears under **Quizzes → All Quizzes** (Classic Quizzes section). It is **unpublished** by default. Open it, set point values and a due date if needed, then **Publish**.
7. **Capture the quiz ID** from the URL (`.../courses/<COURSE_ID>/quizzes/<QUIZ_ID>`). You'll need it when importing the overview page.

> **About New Quizzes:** Canvas's newer "New Quizzes" engine uses QTI 2.1, not 1.2. text2qti currently produces 1.2, which lands in Classic Quizzes. If your institution has fully migrated to New Quizzes, use Canvas's "Migrate" tool inside Quizzes to convert the imported Classic Quiz, or recreate the quiz manually with the source markdown as a reference.

---

## Import the overview page (HTML → Canvas Page)

1. In Canvas, go to **Pages → + Page**.
2. Title it: `Week 1 — Cloud Agents` (or whatever your course's naming convention is).
3. Switch the editor to **HTML view** (the `<>` icon, sometimes labeled "HTML Editor").
4. Open `canvas-page.html` in a text editor, **select all**, copy.
5. Paste into the Canvas HTML editor. Switch back to rich text view to confirm the layout looks right.
6. **Replace placeholders.** Search the page for these tokens and swap each one:
   - `[COURSE_ID]` → your course's numeric Canvas ID (visible in any Canvas URL).
   - `[ASSIGNMENT_ID]` → the numeric ID of the Week 1 Assess assignment (after you create it).
   - `[FILE_ID]` → the numeric ID of any uploaded files (e.g., learn.md, practice.md, apply.md uploaded to Canvas Files). If you'd rather link to the GitHub source, replace with a direct GitHub URL instead.
   - `[QUIZ_ID]` → the quiz ID you captured from the import step above.
7. **Save & Publish** the page.

---

## Rebuild the quiz zip when the source changes

If you edit `knowledge-check.md` (fixing a typo, swapping a question, rewording an explanation), regenerate the zip:

```bash
# Run from the repo root:
cd planning/pilot_su26/week-01-cloud-agents
../../../.venv/bin/text2qti knowledge-check.md
```

Outputs:
- `knowledge-check.zip` — the new QTI package (overwrites the previous one).

If you'd also like a human-readable answer key for proofreading, add `--solutions`:

```bash
# Run from inside the week-01 folder (after the cd above), or from the repo root prefixed by `cd planning/pilot_su26/week-01-cloud-agents &&`:
../../../.venv/bin/text2qti --solutions knowledge-check.md
```

This produces `knowledge-check_solutions.html` alongside the zip. **Do not commit it** — it's reviewer-only.

Commit the new `.zip` alongside the `.md` change:

```bash
git add knowledge-check.md knowledge-check.zip
git commit -m "rebuild Week 1 KC: <what changed>"
```

When you re-import the zip into Canvas, Canvas treats it as a **new quiz** by default — the old quiz is not updated in place. Either delete the old quiz first, or accept the duplicate and unpublish the old one. There is no clean "update existing quiz from QTI" path in Classic Quizzes; this is a Canvas limitation.

---

## Install / dependencies

text2qti is a Python package that requires pandoc on PATH. We install it into a project-local virtual environment so it doesn't conflict with any system Python.

```bash
# pandoc (one time, system-wide) — use whichever applies to your OS:
brew install pandoc                # macOS
sudo apt-get install pandoc        # Linux (Debian/Ubuntu)

# Project venv + text2qti (from the repo root)
python3 -m venv .venv
.venv/bin/pip install --upgrade pip
.venv/bin/pip install text2qti

# Verify
.venv/bin/text2qti --version
```

The `.venv/` directory is gitignored. Each clone of the repo needs to run these install steps once.

If `.venv/bin/text2qti --version` prints a version, you're set.

---

## Troubleshooting

- **`text2qti` fails to parse the source.** Most common cause: missing blank lines between questions, or a question that doesn't start with a number and a dot (`1.`, `2.`, etc.). Check the file's exact formatting against a known-good question in `knowledge-check.md`.
- **`pandoc not found`** at build time: install pandoc (see "Install / dependencies" above). text2qti uses pandoc to render markdown inside question stems.
- **Canvas import says "no questions found".** Canvas occasionally rejects QTI zips that contain a `__MACOSX/` folder. text2qti shouldn't produce one, but if you find one in the zip (`unzip -l knowledge-check.zip`), regenerate the zip from a non-macOS environment or remove the folder with `zip -d`.
- **Imported quiz has questions but no points.** That's expected — set point values in Canvas after import. text2qti doesn't specify points per question.
````

- [ ] **Step 2: Verify sections present and venv references correct**

```bash
grep -n '^## ' planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md
```
Expected 6 H2 sections in order: Files in this folder, Import the Knowledge Check, Import the overview page, Rebuild the quiz zip when the source changes, Install / dependencies, Troubleshooting.

```bash
grep -nE '\.\./\.\./\.\./\.venv/bin/text2qti' planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md
```
Should print at least 2 lines (rebuild and --solutions sections).

```bash
grep -n 'pip install --user' planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md || echo "PASS: no --user install reference"
```
Should print PASS line.

- [ ] **Step 3: Commit**

```bash
git add planning/pilot_su26/week-01-cloud-agents/canvas-build-notes.md
git commit -m "$(cat <<'EOF'
Add canvas-build-notes for Week 1

Near-copy of the Week 2 version with two text changes ("Week 1"
references, "Week 1 — Cloud Agents" Canvas page title). Same venv
depth (../../../.venv/bin/text2qti) since Week 1 is at the same
planning/pilot_su26/week-NN-*/ nesting level.

Per-week duplicate for now; consolidation into a shared file tracked
in issue #21.
EOF
)"
```

---

## Task 7: Push branch and open the PR

**Files:** none (PR metadata only)

- [ ] **Step 1: Push the branch to origin**

```bash
git push -u origin week-01-canvas-kc
```
Expected: branch pushed; remote tracking set; exit 0.

- [ ] **Step 2: Open the PR**

```bash
gh pr create --base main --head week-01-canvas-kc --title "Week 1 Canvas page + Knowledge Check (Cloud Agents)" --body "$(cat <<'EOF'
Closes #20

## Summary

Second instance of the Canvas + Knowledge Check vertical-slice template (after PR #19 for Week 2). This is Week 1 (Cloud Agents) — the pre-textbook week where students build their first AI agent in the Claude Console.

**Artifacts** (all in \`planning/pilot_su26/week-01-cloud-agents/\`):

- \`canvas-page.html\` — Canvas overview page. Inline CSS only, paste into Canvas via the HTML editor.
- \`knowledge-check.md\` — text2qti source, 13 questions, all technical (no Sacred Flow section — Week 1 is universal drop). Breakdown: 3 vocab + 2 Console mechanics + 3 five-section system prompt + 2 testing discipline + 2 tool rationale + 1 unlimited-attempts pedagogy.
- \`knowledge-check.zip\` — generated QTI 1.2 package. Imports into Canvas Classic Quizzes.
- \`canvas-build-notes.md\` — instructor build/import notes. Near-copy of Week 2's, same venv layout.

**Spec:** \`docs/superpowers/specs/2026-05-22-week-01-canvas-kc-design.md\`
**Plan:** \`docs/superpowers/plans/2026-05-22-week-01-canvas-kc.md\`

## What differs from Week 2

- **No Sacred Flow KC section.** Week 1 is universal drop submission. The 5 process questions from Week 2's KC are replaced by 5 more technical questions on testing discipline and tool rationale.
- **Code preview is a 5-section system prompt skeleton** instead of the Keras \`Sequential\` snippet.
- **New "Want to keep going?" callout** explicitly acknowledging the two extension paths — Meetings 3–4 from the legacy lab packet, AND the "keep iterating on your agent instead of moving to Manning" success path documented in \`legacy_csc113/# csc 114 planning.md\`.
- **Universal-drop submission note** replaces the two-track table; same purple \`.two-track-box\` styling, simpler content.
- **Build notes are a per-week duplicate** of Week 2's file (issue #21 tracks consolidation).

## Test plan

- [ ] Open \`canvas-page.html\` in a browser — layout renders correctly, all placeholders confined to \`href\` attributes.
- [ ] \`unzip -l planning/pilot_su26/week-01-cloud-agents/knowledge-check.zip\` lists \`imsmanifest.xml\` and an assessment XML.
- [ ] \`.venv/bin/text2qti planning/pilot_su26/week-01-cloud-agents/knowledge-check.md\` re-produces a valid zip from source.
- [ ] Optional post-merge: import the zip into a Canvas sandbox to verify autograding and explanations land cleanly.

## Retro

Filled in by the implementer at PR open time. Expected themes: how well the template scaled, what content differences from Week 2 were biggest, anything the implementer wishes the spec/plan had specified more precisely. Three sentences minimum.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**Note:** The implementer should replace the "Retro" placeholder paragraph with a real retro reflecting what actually happened during implementation — what worked, what surprised them, what they'd do differently. Three sentences minimum.

- [ ] **Step 3: Verify the PR**

```bash
gh pr view --json url,title,state,headRefName,baseRefName
```
Confirm: URL prints; title matches; state OPEN; headRefName `week-01-canvas-kc`; baseRefName `main`. Body should contain "Closes #20" and the artifact list.

- [ ] **Step 4: DO NOT MERGE.** Report the PR URL and stop. The user merges (or requests changes) explicitly.

---

## Self-Review Pass

**Spec coverage:**
- ✅ Four artifacts in `planning/pilot_su26/week-01-cloud-agents/` (Tasks 3, 4, 5, 6)
- ✅ Canvas page content adaptations per spec: no two-track Sacred Flow table, system prompt code preview, "Want to keep going?" callout with both extension paths, dropped Manning meta-item
- ✅ KC content per spec table: 3+2+3+2+2+1 = 13 questions, no Sacred Flow section
- ✅ Build notes per-week duplicate (Tasks 6) — consolidation deferred to #21
- ✅ Sacred Flow for PR itself (Tasks 1, 7) — issue (#20) → branch (`week-01-canvas-kc`) → PR → retro
- ✅ text2qti venv already present from PR #19; Task 2 verifies rather than installs

**Placeholder scan:**
- No TBD/TODO/fill-in strings in steps that the engineer must execute
- Every step has complete content embedded
- The "Retro" section in Task 7's PR body is explicitly called out as needing the implementer's real reflection (not a placeholder accepted as final)
- `[COURSE_ID]`/`[FILE_ID]`/`[ASSIGNMENT_ID]`/`[QUIZ_ID]` in canvas-page.html are intentional Canvas import-time placeholders, documented in canvas-build-notes.md

**Type consistency:**
- All file names consistent across tasks: canvas-page.html, knowledge-check.md, knowledge-check.zip, canvas-build-notes.md
- Folder path consistent: `planning/pilot_su26/week-01-cloud-agents/`
- venv binary path consistent: `.venv/bin/text2qti` (from repo root) and `../../../.venv/bin/text2qti` (from inside the week folder)
- Branch name consistent: `week-01-canvas-kc`
- Issue number consistent: #20
