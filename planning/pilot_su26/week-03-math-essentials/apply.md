# Apply — Controlled experiment: learning rate or batch size

**Slot:** Apply (hands-on, narrow scope)
**Time:** ~60 minutes
**Goal:** Run one controlled experiment that varies a single optimization hyperparameter, observe the effect on training, and explain *why* it happened using the math concepts from this week.

Same spike rhythm as Week 2. One change. One comparison. One answer.

---

## What makes this week's spike different from Week 2

In Week 2 you changed something (more epochs, different optimizer, smaller layer) and *noticed* the effect. This week, you should be able to *explain* the effect using what you learned about gradients, learning rates, and batch sizes. "The loss went down faster" isn't enough — *why* did it go down faster?

## Pick one experiment

Pick **one**. Not two. Not "all of the above."

| Option | What to change | What you're testing | What to watch |
|---|---|---|---|
| A | Learning rate: `0.001` → `0.01` (10× higher) | Does training converge faster? At what cost? | Loss curve shape — faster descent, but does it oscillate or diverge at the end? |
| B | Learning rate: `0.001` → `0.0001` (10× lower) | Does training stall? How many more epochs to converge? | Loss curve — is it still dropping at epoch 5? Is it painfully slow? |
| C | Learning rate: `0.001` → `0.1` (100× higher) | What does "divergence" actually look like? | Loss curve — does it go up? Does it oscillate wildly? Does accuracy collapse? |
| D | Batch size: `128` → `16` (8× smaller) | How do smaller batches affect the loss curve and training time? | Noisier loss curve? More updates per epoch? |
| E | Batch size: `128` → `512` (4× larger) | How do larger batches affect smoothness and speed? | Smoother curves? Fewer updates per epoch? Does final accuracy change? |

**Recommended starting point:** Option A or C. Seeing a learning rate that's *too high* is one of the most useful debugging experiences you can have. You'll recognize it instantly in future projects.

## Run the experiment

Use your **Week 2 MNIST model** as the baseline — not the toy 1-weight model from Practice. The toy model was for understanding; this experiment is on a real(ish) model.

1. **Copy your Week 2 `hello_keras.ipynb`** to `week-03/experiment_<your-change>.ipynb`. Example: `experiment_lr_high.ipynb`, `experiment_batch_small.ipynb`.
2. Change **only the one hyperparameter** you picked. Everything else stays the same.
3. Train for the same number of epochs as your baseline (5, unless you changed it in Week 2).
4. Plot training curves (loss + accuracy, train + val) — same plot code as Week 2 Cell 8.
5. Record test accuracy.

## Write the experiment report

Create `week-03/experiment_report.md`:

```markdown
# Week 3 Experiment Report — [your one-line description]

## The change
**Baseline:** Week 2 MNIST model — [optimizer, learning rate, batch size, epochs]
**Change:** [exactly one thing different]
**Hypothesis:** [one sentence — what do you expect to happen, and why?]

## Results

| Metric                | Baseline | Experiment |
|-----------------------|----------|------------|
| Final train loss      | ____     | ____       |
| Final val loss        | ____     | ____       |
| Final test accuracy   | ____     | ____       |
| Train/val gap (final) | ____     | ____       |
| Training time (rough) | ____     | ____       |

## Training curves
[Embed or link to the loss + accuracy plots from the experiment notebook.]

## Analysis (one paragraph, 4–6 sentences)
Explain what happened **using this week's concepts**. Your explanation should
reference at least one of: gradient magnitude, step size, convergence,
divergence, noise from mini-batches, or the relationship between learning
rate and batch size.

Don't just describe what the curves look like — explain the *mechanism*.
Why did this change produce this effect?

## Was your hypothesis right?
[One sentence. It's fine to be wrong — the point is that you had a prediction.]

## What I'd do next
One sentence. "If I had another hour, I'd try ___."
```

## What we're looking for

Same structure as Week 2, but the bar is higher on the *analysis* paragraph.

### Earns full credit
- Exactly one hyperparameter changed from baseline.
- Results table filled with real numbers.
- Training curves present.
- Analysis paragraph uses at least one concept from this week (gradients, step size, convergence, batch noise) to explain *why* the result happened — not just *what* happened.
- Hypothesis stated before the experiment (it's OK to be wrong).

### Loses points
- More than one variable changed.
- Analysis is purely descriptive ("the loss went down then up") without connecting to the math.
- No hypothesis.
- Results table has placeholders.

## Where to go next

→ [assess.md](assess.md) — What you submit and how it's graded.
