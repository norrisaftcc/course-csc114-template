# The Three Questions

### A Quick Reference for Setting Up a Claude Project

*CSC-114 — Claude Projects as a Knowledge Platform*

---

## What a Claude Project Is

A **Claude Project** is a workspace on `claude.ai` where you do two things:

1. **Upload knowledge** — PDFs, notes, study guides, documents (this is the Project's "Knowledge").
2. **Write custom instructions** — a short message that tells Claude who it is and how to behave every time you chat inside that Project.

Once it's set up, you can ask questions and Claude answers using *your* uploaded material — not just whatever it learned during training.

The hard part isn't uploading files. It's writing good custom instructions. This card gives you the framework.

---

## The Framework

Anthropic teaches a simple way to start any prompt. Before you write a single instruction, answer **three questions**. Good answers here produce a Project that behaves the way you want. Vague answers produce a Project that wanders.

| # | Question | What it defines | Why it matters |
|---|----------|-----------------|----------------|
| 1 | **Who are you?** | Claude's role | Sets the lens Claude reads everything through. "A patient tutor" behaves differently from "a strict exam grader." |
| 2 | **Who am I?** | The person being helped | Tells Claude what you already know so it doesn't over-explain or talk over your head. |
| 3 | **What will we accomplish together?** | The goal and the boundaries | Keeps Claude focused on the task — and keeps it from making things up. |

> **Note on the word "agent":** Anthropic's original video calls Question 2 "who is the agent." In this course, *agent* will soon mean an autonomous AI system (the next module). To avoid mixing up the two meanings, we say **"Who am I?"** — the human in the conversation.

---

## The Framework, Filled In

Here's each question answered for a common first Project: **a study guide that answers questions about your course notes.**

**1. Who are you?**
> You are a study assistant for CSC-113. You explain concepts clearly and patiently using the course material I have given you.

**2. Who am I?**
> I am a student who has already attended the lectures. I understand the basics but get confused on details. Explain things in plain language. Do not assume I am an expert.

**3. What will we accomplish together?**
> Together we clarify confusing topics through question and answer. When you answer, use only the uploaded course material. If the material does not cover something, say: "That isn't in the notes you gave me." Never make up an answer.

---

## Putting It Together

Paste your three answers into the Project's **custom instructions** box. Combined, they look like this:

```
You are a study assistant for CSC-113. You explain concepts clearly
and patiently using the course material I have given you.

I am a student who has already attended the lectures. I understand
the basics but get confused on the details. Explain things in plain
language. Do not assume I am an expert.

Together we clarify confusing topics through question and answer.
When you answer, use only the uploaded course material. If the
material does not cover something, say: "That isn't in the notes
you gave me." Never make up an answer.
```

That's it. Three short paragraphs. Each one answers one question.

---

## Why This Beats "Just Asking"

You *could* skip all this, upload a PDF, and start asking questions. It would mostly work. So why bother?

- **Consistency.** With instructions, Claude behaves the same way every time — same tone, same rules, same honesty about what it doesn't know.
- **No hallucinations.** The rule *"use only the uploaded material"* is what stops Claude from confidently inventing an answer.
- **It's the same skill as everything ahead.** A good Project prompt and a good *agent* prompt are built the same way. Master it here, where the stakes are low and there's nothing to break.

---

## The One-Change Rule (You Already Know This)

When your Project doesn't behave the way you want, **change one thing, then test again.** Don't rewrite all three paragraphs at once. If you do, you won't know which change fixed it. One change, one test, one observation. Same discipline as CSC-113.

---

## Before You Start

- [ ] I can name Claude's **role** (Question 1).
- [ ] I can describe **who I am** and what I already know (Question 2).
- [ ] I can state the **goal** and at least one **rule** about what Claude should *not* do (Question 3).
- [ ] I have my knowledge files ready to upload.
