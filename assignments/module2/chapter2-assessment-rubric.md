# Chapter 2 Assessment: Explain It, Then Catch the AI

*The one graded assignment for this chapter. Due before we start the next chapter.*

By now you can read tensors and narrate how a network learns. This assignment checks two things: that you can **explain those ideas in your own words**, and that you can **partner with an AI without handing it your thinking.** That second part is the one we grade hardest, because it is the skill this whole course is about.

You will commit three short files to your GitHub portfolio in a folder called `chapter2/`.

---

## What This Course Means by "Catch the AI"

You are allowed — encouraged — to use your AI assistant throughout. But an explanation you copied is worth nothing to us, because it is worth nothing to *you*: it will not be there on the day you need to actually understand a model. So the assignment is built so that copying does not work. To finish it, you have to find the place where the AI got lazy, vague, or wrong, and fix it. You cannot catch a mistake you don't understand. That is the point.

---

## Part 1 — The Explainer (`chapter2/explainer.md`)

In your own words — short, plain, no copied text — explain these five things to an imaginary classmate who missed both meetings. Two to four sentences each.

1. **What a tensor's shape tells you.** Use a real example like `(60000, 28, 28)`.
2. **What a batch is, and why we train in batches** instead of one image at a time.
3. **Why we step *opposite* the gradient** during training. Connect it to walking downhill.
4. **What backprop does**, in one breath, and who actually computes it.
5. **Why a network needs an activation function like `relu`.** Use the paper-ball idea, or the fact that plain stacked layers collapse into one.

Write like you talk. If a sentence sounds like a textbook, rewrite it until it sounds like you.

---

## Part 2 — Catch the AI (`chapter2/catch-the-ai.md`)

This is the heart of the assignment.

1. **Pick one** of the five concepts above.
2. **Ask your AI assistant** to explain it. Paste the exact prompt you used and the exact answer you got.
3. **Find one weakness** in its answer. It might be:
   - a word it never defined (jargon hiding the idea),
   - an oversimplification that's slightly wrong,
   - a missing connection that would actually help,
   - or a confident statement you're not sure is true.
4. **Fix it.** Write the corrected or improved version yourself, and explain in one or two sentences *why* your version is better.

If the AI's first answer was genuinely flawless, that's rare — push it. Ask it the same question a harder way, or ask a follow-up, until you get something with a real seam in it. Document that iteration. (Driving the AI to a better answer is itself the skill.)

---

## Part 3 — Your Track Piece

Pick the version for your track.

### Code Builders → `chapter2/experiment.md`

Report your one-change experiment from the lab.

- **The change:** which single thing you changed (epochs, batch size, learning rate, etc.).
- **Your prediction:** what you expected to happen, written *before* you ran it.
- **What actually happened:** the result.
- **Reconcile:** if your prediction was wrong, why? If it was right, what told you it would be?

One controlled change, honestly reported, beats five changes you can't explain.

### Prompt Masters → `chapter2/shape-reading.md`

Show that you can read tensors without running code.

For each line below, **write the resulting shape and one sentence saying why** — no running the code, just reasoning. Then ask your AI to check you, and note any answer you had to reconcile.

| Operation | Starting shape | Your answer | Why |
|-----------|----------------|-------------|-----|
| `images[:50]` | `(60000, 28, 28)` | | |
| `images[:, 14:, :]` | `(60000, 28, 28)` | | |
| `images.reshape((60000, 784))` | `(60000, 28, 28)` | | |
| a batch of 256 | `(60000, 28, 28)` | | |

---

## Submitting

```bash
git add chapter2/
git commit -m "Chapter 2 assessment: explainer, catch-the-ai, track piece"
git push
```

All three files in `chapter2/`. Clear commit message. That's the submission.

---

## How This Is Graded

Standard four-category rubric. Each category is 25%. For a first encounter with this material, a solid effort lands in the **Developing-to-Proficient** band — that's expected and fine.

### AI Partnership Quality (25%)

| Level | What it looks like |
|-------|--------------------|
| **Advanced** | The "catch" is sharp and correct — a real weakness, well diagnosed. If the first answer was strong, there's evidence of iterating the prompt to surface a deeper seam. The student clearly used the AI as a thinking partner, not a vending machine. |
| **Proficient** | A genuine weakness is found and fixed. The prompt and answer are documented. The fix is correct. |
| **Developing** | A weakness is named but the fix is thin, or the "weakness" is trivial (a typo, formatting). Some real engagement. |
| **Novice** | The AI answer is pasted with no real critique, or the critique misunderstands the concept. |

### Problem-Solving Process (25%)

| Level | What it looks like |
|-------|--------------------|
| **Advanced** | The track piece shows a clean predict → observe → reconcile loop. Predictions were written before results. Wrong predictions are reconciled with a real reason, not hand-waved. |
| **Proficient** | The loop is followed. Prediction, result, and a reconciliation are all present. |
| **Developing** | Prediction or reconciliation is missing or weak. Some evidence of a process. |
| **Novice** | Just a result, with no prediction and no reflection. "It worked." |

### Professional Communication (25%)

| Level | What it looks like |
|-------|--------------------|
| **Advanced** | The explainer is genuinely clear — a classmate who missed class could learn from it. Plain language, real examples, no copied textbook phrasing. Files are organized; commit message is descriptive. |
| **Proficient** | Explanations are clear and in the student's own words. Files present and committed properly. |
| **Developing** | Explanations are partly clear but lean on jargon or copied phrasing. Files present but thin. |
| **Novice** | Explanations are unclear, copied, or missing. Disorganized or missing files. |

### Critical Thinking & Ethics (25%)

| Level | What it looks like |
|-------|--------------------|
| **Advanced** | The student questions the AI rather than trusting it, and can say *why* a cleaner-sounding answer was actually worse. Shows awareness that "sounds confident" is not "is correct" — the core habit for working with AI. |
| **Proficient** | Evaluates the AI's answer rather than accepting it. Makes a defensible judgment about quality. |
| **Developing** | Some evaluation, but mostly accepts the AI's framing. |
| **Novice** | Accepts AI output uncritically. No sign of independent judgment. |

---

*A note on what "good" looks like here: the strongest submissions are usually not the ones that sound most certain. They're the ones that say "here's what I observed, here's where I think the AI's tidy explanation skipped something, and here's my honest version." Confident uncertainty, well-documented, is exactly the habit this chapter is teaching.*
