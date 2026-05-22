# Week 3 — Math + optimization essentials

**Pilot week:** 3 of 8 (CSC-114 Summer 2026)
**Theme:** "Just enough to debug." You don't need a math degree to train neural networks, but you do need to know what the training loop is *doing* under the hood — enough that when something breaks, you can reason about *why*.
**Manning chapter(s):** Ch 2 (tensors, ops, gradients, SGD/backprop). Reading is assigned.

---

## What changes from Week 2

1. **This is the heaviest math week in the pilot.** It's also the *only* math-heavy week. If you survived calculus, this will feel light. If you haven't taken calculus, that's fine too — we're after intuition, not proofs.
2. **The spike rhythm continues.** Same shape as Week 2: one controlled experiment, one write-up. This time the experiment directly involves the math concepts (learning rate or batch size), so the report doubles as your assessment.
3. **Sacred Flow continues for Code Builders.** Same cadence as Week 2 — issue → branch → PR → retro.

## Learning outcomes

By Friday, you can:

1. **Explain** what a tensor is and identify the rank/shape of a given tensor (scalar, vector, matrix, 3D+).
2. **Describe** what a gradient is and why training follows the *negative* gradient direction ("gradient descent").
3. **Trace** one step of SGD by hand: compute a loss, compute a gradient (conceptually), update a weight.
4. **Predict** what happens to training when you change the learning rate (too high → diverge, too low → stall).
5. **Run** a controlled experiment that varies exactly one optimization hyperparameter, and **explain** the result using the math concepts from this week.

## What you do this week

1. **[learn.md](learn.md)** — *Manning Ch 2 framing.* The intuition behind tensors, gradients, and backprop — without drowning in notation.
2. **[practice.md](practice.md)** — *Build a tiny model from scratch (partially).* Reproduce parts of the Ch 2 notebook. Retry-OK.
3. **[apply.md](apply.md)** — *Controlled experiment: learning rate or batch size.* One change, observed on the loss curves, explained in writing.
4. **[assess.md](assess.md)** — *What you submit, split by track.*

## Two-track expectations this week

| Track | Submit by | Process artifacts |
|---|---|---|
| Code Builders | Issue → branch (`week3-lr-sweep` or `week3-batch-size`) → PR with notebook + write-up → retro in PR description. | Issue + branch + PR + retro |
| Prompt Masters | Notebook + write-up dropped into `week-03/` via GitHub Desktop or web upload. | None — just the artifact |

Both tracks earn identical points on the *artifact*. Code Builders earn **process credit** for the issue/PR/retro on top.

## Before you start

- [ ] Manning *Deep Learning with Python*, 3rd ed. — Ch 2 read (or at least skimmed).
- [ ] Your Week 2 `hello_keras.ipynb` runs and you have your baseline test accuracy number.
- [ ] Python + Keras environment still working. (If it broke, fix it *now*. Don't discover this during the spike.)

## Source material this week draws from

- **Primary student reading:** Manning Ch 2. The companion notebook is `planning/textbook/deep-learning-with-python-notebooks-master/chapter02_mathematical-building-blocks.ipynb`.
- **No direct csc_dash equivalent.** This is the least-overlap week. The 16-week schedule skips Ch 2 math because sklearn doesn't need it; neural networks do.
- **Vocabulary reference (optional):** `planning/csc_dash/CSC-114/reference-materials/ML_GLOSSARY.md` — entries for gradient, loss function, optimizer, learning rate.
