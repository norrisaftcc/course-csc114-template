# Week 3 — Math for debugging

**Pilot week:** 3 of 8 (CSC-114 Summer 2026)
**Theme:** Just enough math to know what you're looking at when training goes sideways. This is the heaviest math week of the pilot. We're not training you to derive gradients by hand — we're training you to *read* a training loop and not be afraid of it.
**Manning chapter(s):** Ch 2 (*The mathematical building blocks of neural networks*). Reading is assigned.

---

## What changes from Week 2

One real change, one continuation:

1. **The Apply slot becomes a sweep, not a single change.** Week 2 was "pick one option from A–E and report what happened." Week 3 is "pick **one variable** and try **at least three values**, then plot all the curves on the same axes." This is the first time you're doing what working ML engineers call a *controlled experiment* — varying one thing across a range to map out behavior, not just spot-check it.
2. **Sacred Flow continues** for the Code Builders track. Prompt Masters keep submitting by drop. Same as Week 2.

## A note before you start

This is the week where students start feeling like the course got harder. It didn't. We added math vocabulary, not math fluency requirements. **You do not need to be able to derive backprop on a whiteboard.** You need to be able to look at the line `loss = sparse_categorical_crossentropy(y_true, y_pred)` and know roughly what's happening, so when it returns `NaN` at 3am you have a guess where to start looking.

Skim Manning Ch 2. Don't try to retain the matrix algebra section. Retain the *shape* of the ideas.

## Learning outcomes

By Friday, you can:

1. **Define** a tensor as "an n-dimensional array with a dtype, a shape, and a device" — and know what each piece means operationally.
2. **Explain gradient descent in one sentence** without using the word "gradient" — i.e., describe the mechanic, not just the name.
3. **Read** a Keras training loop and point at where the loss is computed, where the gradient is computed, and where the weights are updated.
4. **Run a learning rate sweep** (or batch size sweep), plot the training curves on shared axes, and say *which value is best for this task and why.*
5. **Recognize** the symptoms of a too-high learning rate (loss explodes to `NaN` or oscillates) vs too-low (loss barely moves).

## What you do this week

1. **[learn.md](learn.md)** — *Manning Ch 2 framing.* What to keep, what to skim, what to ignore for now.
2. **[practice.md](practice.md)** — *Walk through Chollet's official Ch 2 notebook.* Cell by cell, with reflection cells of your own.
3. **[apply.md](apply.md)** — *The controlled experiment.* One variable, three or more values, one shared plot.
4. **[assess.md](assess.md)** — *One-page write-up + notebook. Sacred Flow for Code Builders.*

## Two-track expectations this week

Same as Week 2.

| Track | Submit by | Process artifacts |
|---|---|---|
| Code Builders | Issue (`Week 3 sweep: <variable>`) → branch `week3-<experiment>` (e.g., `week3-lr-sweep` or `week3-batch-sweep`) → commit notebook + write-up → PR → retro in PR description → merge after review. | Issue + branch + PR + retro |

**Branch naming note:** Week 2 used `week2-yourname`. Starting Week 3 the convention shifts — the branch name encodes the **experiment**, not the person. Same crosswalk row. This is on purpose: from now on we're varying things to find out what happens, and the branch name should tell anyone (including future-you) which experiment they're looking at.
| Prompt Masters | Add notebook + write-up to your repo via GitHub Desktop or the web "add file" button. | None — just the artifact |

Both tracks earn identical points on the artifact. Code Builders earn process credit on top.

## Before you start

- [ ] Manning *Deep Learning with Python*, 3rd ed., Ch 2 available.
- [ ] Your Week 2 Keras + Python environment still working (no new packages needed for Week 3).
- [ ] The Chollet notebook companion at `planning/textbook/deep-learning-with-python-notebooks-master/chapter02_mathematical-building-blocks.ipynb` reachable. (Pull from `https://github.com/fchollet/deep-learning-with-python-notebooks` if you don't have it locally yet — that's the canonical source.)
- [ ] (Code Builders) Your Week 2 PR merged. You should be in the habit by now.

If your Week 2 environment isn't working anymore (laptop reboot, package conflict), fix that *first*. Don't try to do Week 3 in Colab if you did Week 2 locally — switching mid-stream wastes a day.

## Source material this week draws from

- **Primary student reading:** Manning Ch 2.
- **Primary student notebook:** `planning/textbook/deep-learning-with-python-notebooks-master/chapter02_mathematical-building-blocks.ipynb`.
- **csc_dash assets:** *None reused.* This is the least-overlap week with `csc_dash/` — csc_dash skips Ch 2-style math entirely. That's why this week is net-new authoring.
