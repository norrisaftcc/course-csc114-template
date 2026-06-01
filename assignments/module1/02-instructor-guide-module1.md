# CSC-114 Module 1: Claude Projects as a Knowledge Platform
## Instructor Guide

| Field | Value |
|-------|-------|
| Course | CSC-114 (follows CSC-113 AI Fundamentals) |
| Module | 1 — Claude Projects as a Knowledge Platform |
| Duration | 2 meetings, each a 2-hour block — **4 contact hours total** |
| Meeting structure | Hour 1 = lecture, Hour 2 = lab *(provisional — adjust as you learn the room)* |
| Platform | `claude.ai` (Claude Projects, no-code) |
| Prerequisites | Module Zero complete: CSC-114 repository exists; students can commit to it |
| Student-facing handouts | *The Three Questions* reference card; *Build Your First Project* student lab |
| Status | DRAFT — Meeting 2 (csc114bot) is a skeleton pending its student lab |

---

## Where This Module Sits

This is the on-ramp. Before students build anything autonomous, they learn the foundational discipline — writing stable, constraining instructions and testing whether behavior matches intent — in the lowest-stakes environment available: a Claude Project on the consumer web app. No API, no cost, no infrastructure, nothing to break.

The module has a deliberate two-step shape:

1. **Meeting 1 — a throwaway warm-up.** Students build a "study buddy" Project from their own notes. The point is the *mechanics and the loop*, not the product.
2. **Meeting 2 — the real thing.** Students build their **csc114bot**, a Project that helps them navigate this course. Same skills, real purpose.

The warm-up exists so that when students build the bot that matters, the tool is already familiar and all their attention is free for the *thinking*.

---

## Learning Targets

By the end of Module 1, a student can:

1. **Explain** that "AI" is a family of tools and techniques, and give getting-organized as a concrete first use.
2. **Describe** what a Claude Project is: uploaded knowledge plus custom instructions.
3. **Write** custom instructions that answer the three questions — who Claude is, who the user is, what they accomplish together — including a rule that constrains Claude to the provided material.
4. **Validate** a Project with the three-test pattern (known-good, known-bad, edge case) and **refine** it using the one-change rule.
5. **Commit** their work to GitHub under `module1/` using their track's workflow.

---

## Assessment Posture

This module is **mostly formative.** It's a warm-up, and students should feel free to fail and iterate — that's the point. Grade lightly and reward *process*: presence of the artifacts, evidence of testing, evidence of one controlled change.

The graded artifacts are the committed files in `module1/`:

- `custom-instructions.md` — did they answer all three questions and include the honesty rule?
- `testing-log.md` — did they run three tests and document one change with a before/after observation?
- `notes/` — is there real source material?

Map to the standard four-category rubric, but keep expectations at the **Developing-to-Proficient** band for a first attempt. The four categories show up as:

- **AI Partnership Quality** — instructions answer the three questions; honesty rule present.
- **Problem-Solving Process** — three tests run; one change made and re-tested (not a full rewrite).
- **Professional Communication** — files organized under `module1/`; a descriptive commit message.
- **Critical Thinking & Ethics** — the edge-case observation shows they noticed *how* the Project behaves at its boundary.

---

## Instructor Pre-Work

Do this before Meeting 1.

- [ ] Confirm every student can sign in to `claude.ai`.
- [ ] Confirm the CSC-114 repository from Module Zero is in place for each student.
- [ ] Distribute the two handouts (reference card + student lab) via Canvas.
- [ ] Build your **own** sample Project before class — you'll demo it live and you'll want a known failure to show. (Use a couple of innocuous documents, e.g. a syllabus and a policy sheet.)
- [ ] Decide your knowledge source for the demo. A small, slightly-incomplete document is ideal — it lets you trigger the "known bad" test naturally.
- [ ] If your institution standardizes on a model, tell students which Claude model to select in the app (default to the current Sonnet). Keep this light; the consumer UI changes.

---

## Meeting 1 — Build Your First Project

### Hour 1: Lecture (≈60 min)

| Time | Segment | Talking points |
|------|---------|----------------|
| 5 min | **Framing** | "AI" isn't one thing — it's many tools. Our first use is the most practical: getting organized. Set expectations that this hour's bot is a *rehearsal*. |
| 10 min | **What is a Project?** | Two parts: **knowledge** (files you upload) and **instructions** (how it behaves). Create one live so they see the surface. |
| 15 min | **The Three Questions** | Walk the reference card. Build a sample instruction set live, taking answers from the class. Make the three paragraphs appear on screen as you go. |
| 10 min | **The honesty rule** | The "use only my notes" instruction *gives the AI permission to say "I don't know."* Contrast a bluffing answer with an honest one. This is the conceptual heart of the module. |
| 10 min | **Testing + the one-change rule** | Introduce the three tests: known-good, known-bad, edge. Re-anchor the one-change rule from CSC-113. |
| 10 min | **Live demo: test and fix** | Run the three tests on your sample Project. Make sure one *fails*. Fix it with a single change, re-test, and narrate "failure is just exercise." This models the exact loop they're about to do. |

**The one thing they must leave the lecture believing:** a vague Project wanders; a Project with three clear answers and one honesty rule behaves.

### Hour 2: Lab (≈60 min)

Students work through *Build Your First Project*, Steps 1–7.

- **Circulate.** Most students move fast through Steps 1–4 and stall at testing — they don't know what a good "known bad" question is. Prompt them: "What's something your notes definitely *don't* cover?"
- **Watch for the rewrite reflex.** When a test disappoints them, many will want to rewrite everything. Stop them. One change, one re-test. This is the highest-value coaching moment in the lab.
- **Last 10 min — commit check.** Have students confirm their `module1/` folder is committed before they leave. This is where Prompt Masters most need a hand (see Differentiation).

---

## Meeting 2 — Build Your csc114bot *(provisional skeleton)*

> This section will be finalized alongside the csc114bot student lab, which is the next artifact to build. The plan below is the intended shape.

### Hour 1: Lecture (≈60 min)

- **Debrief Meeting 1.** Surface common patterns and failures on screen. Celebrate a good "I don't know" response from a student's bot.
- **Introduce csc114bot.** Purpose: help students navigate *this course* — deadlines, policies, assignment expectations. Audience: themselves and their classmates. This reframes "knowledge" from personal notes to shared course documents.
- **What makes a good knowledge base.** Discuss source quality: the syllabus, schedule, assignment guides. Garbage in, garbage out.
- **Foreshadow the platform comparison.** Mention that later in CSC-114 they'll rebuild a bot like this on a developer platform — and that building the *same* thing twice is how we'll separate "prompt skill" from "platform mechanics."

### Hour 2: Lab (≈60 min)

- Students begin building csc114bot using the same three-question + three-test + one-change loop, now with course documents as the knowledge base.
- Detailed steps to come in the csc114bot student lab.

---

## Differentiation

**Code Builders vs. Prompt Masters.** The entire knowledge-building task is identical across tracks. The *only* divergence is how files reach GitHub:

- **Code Builders** use their normal programming workflow (clone/Codespaces → add → commit → push) into `module1/`.
- **Prompt Masters** use the GitHub web client or GitHub Desktop to drag and drop files into `module1/`. Drag-and-drop is a deliberate accommodation — treat it as first-class, not a lesser path.

**Mixed ability and ESL.** The lab targets roughly a 10th-grade reading level and avoids unexplained jargon. Pair faster students with slower ones during the lab. The three-paragraph instruction format is intentionally short so that English-language learners can succeed without wrestling long prompts.

**Pacing.** The 1-hour-lecture / 1-hour-lab split is a starting guess. If the room builds Projects quickly, shorten the lecture next time and let the lab breathe. If students struggle with GitHub, the reverse.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| "My bot answers from general knowledge, not my notes." | The honesty rule is missing or weak. | Add/strengthen the "use only my uploaded notes; say so if it's not covered" sentence. This is a great live one-change demo. |
| "It says it can't see my files." | Files weren't added to the **Project knowledge** (just pasted into a chat). | Re-upload into the Project's knowledge/content area, not the message box. |
| "Every test passes — nothing failed." | Their "known bad" question was actually answerable. | Coach them to ask something genuinely outside the notes. A test suite with no failures taught them nothing. |
| "I changed five things and now it's worse." | The rewrite reflex. | Revert mentally to the last good version; make one change; re-test. Use it to reinforce *why* the rule exists. |
| Prompt Masters stuck on the commit | Unfamiliar with GitHub web/Desktop | Walk the drag-and-drop path; confirm the `module1/` folder appears in the repo. |

**When to escalate.** Per course materials, students with persistent account, access, or technical issues beyond the classroom can be directed to the designated escalation contacts (Mallory Milstead, Andrew Norris). Use this for blockers that are eating lab time, not for ordinary iteration struggles.

---

## The Throughline

Everything in this module is rehearsal for a single loop:

> **Set your intentions → test them → change one thing → test again.**

Students will use that loop on far more powerful systems before this course is over. Here, with nothing on the line, they get to learn it in their hands. Keep the stakes low, keep the failures cheap, and keep saying it: *failure is just exercise.*
