# Apply — Your first controlled experiment

**Slot:** Apply (hands-on, structured)
**Time:** ~75 minutes
**Goal:** Run a **single-variable sweep** — pick one hyperparameter, vary it across at least three values, plot the results on shared axes, and explain what you see.

This is the first time you'll do what professional ML engineers call a *controlled experiment*. Week 2's spike was "pick one of these five things and try it." Week 3's is tighter: **one variable, multiple values, side-by-side comparison.** This shape repeats for the rest of the term.

---

## Pick one variable

Pick **one** — not both.

### Option A (recommended): Learning rate sweep

Vary `learning_rate` across at least three values, holding everything else constant. Suggested set:

```python
learning_rates = [1.0, 1e-1, 1e-2, 1e-3, 1e-4]   # 5 values, span 4 orders of magnitude
```

In Keras, you set the learning rate when you create the optimizer:

```python
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=1e-3),
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)
```

Why a learning rate sweep is the recommended pick: it's the most important hyperparameter (you read this in [learn.md](learn.md)) and the **failure modes are visually dramatic**. You will see at least one run go to `NaN`. That's the point.

### Option B: Batch size sweep

Vary `batch_size` across at least three values, holding everything else constant. Suggested set:

```python
batch_sizes = [16, 64, 256, 1024]   # 4 values, span 6× to 64×
```

You pass `batch_size` to `model.fit(...)`. Why this is also a fine choice: it has predictable effects (smaller = noisier gradients, slower wall-clock, sometimes better final accuracy; larger = smoother but can plateau) and the experiment runs faster than an LR sweep does at extreme values.

**Pick one. Not both.** A two-variable sweep is the right thing to *want* but the wrong thing to *do* this week — we'd be back to "we don't know what caused what."

## Run the experiment

1. **Start from your Week 2 baseline.** Copy `week-02/hello_keras.ipynb` to `week-03/sweep_<variable>.ipynb` (e.g., `sweep_learning_rate.ipynb`).
2. **Wrap the training in a loop** over your sweep values. Pseudocode:

```python
results = {}
for value in sweep_values:
    print(f"\n=== Training with {variable_name}={value} ===")
    model = build_fresh_model()                # IMPORTANT: fresh model each time
    # For an LR sweep, the swept value goes in the optimizer:
    #   model.compile(optimizer=keras.optimizers.Adam(learning_rate=value), ...)
    # For a batch-size sweep, the swept value goes in model.fit(...) below:
    #   model.fit(..., batch_size=value, ...)
    model.compile(...)
    history = model.fit(x_train, y_train,
                        epochs=10,
                        validation_split=0.1,
                        verbose=2)
    results[value] = history.history
```

The phrase **"build fresh model each time"** is non-negotiable. If you `model.fit` twice on the same model object, the second run is continuing from where the first left off, which is **not** what you're testing.

Heads up: an LR sweep sets the value in `model.compile(...)` (on the optimizer); a batch-size sweep sets it in `model.fit(...)`. If you pick batch size and forget to pass `batch_size=value` to `fit`, every iteration runs at Keras' default (32) and your "sweep" is one value five times.

3. **Plot all the runs on shared axes:**

```python
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
for value, hist in results.items():
    axes[0].plot(hist["loss"],     label=f"{variable_name}={value}")
    axes[1].plot(hist["accuracy"], label=f"{variable_name}={value}")
axes[0].set_title("Training loss");     axes[0].legend(); axes[0].set_yscale("log")
axes[1].set_title("Training accuracy"); axes[1].legend()
plt.show()
```

For a learning rate sweep, **use `set_yscale("log")` on the loss axis.** The good runs and the bad runs will be many orders of magnitude apart, and a linear scale will make the chart unreadable.

4. **Also record a results table:**

```python
print(f"{'Value':>10}  {'Final train loss':>18}  {'Final val acc':>14}")
for value, hist in results.items():
    print(f"{value:>10}  {hist['loss'][-1]:>18.4f}  {hist['val_accuracy'][-1]:>14.4f}")
```

## Write the report

In your `week-03/` folder, create `sweep_report.md`:

```markdown
# Week 3 Sweep Report — [variable] sweep

## What I swept
**Variable:** [learning_rate / batch_size]
**Values:** [list]
**Held constant:** [model architecture, epochs, optimizer (if not the swept variable), loss, dataset, validation split, random seed]

## Results

| Value | Final train loss | Final val accuracy | Notes (NaN, oscillation, plateau, etc.) |
|-------|------------------|--------------------|------------------------------------------|
| ____  | ____             | ____               | ____                                     |
| ____  | ____             | ____               | ____                                     |
| ____  | ____             | ____               | ____                                     |

## Loss curves
[Embed or link to your shared-axes plot.]

## What I see (one paragraph, 4–6 sentences)
Describe the pattern across the sweep. Did the loss explode at the high end?
Plateau at the low end? Did training time scale with the swept variable in a
predictable way? Pick ONE specific observation and dig into it: name the
mechanism, not just the symptom. ("Loss exploded to NaN at LR=1.0 because
the gradient updates overshot the loss surface; the weights blew up,
which made the **pre-softmax logits** enormous, and once one logit dominates
the softmax pins the true-class probability at ~0, so `log(0)` in
cross-entropy returns inf/NaN." is what we're looking for. "It didn't
work" is not. Note: softmax *outputs* are bounded probabilities — the
unbounded thing is the logits feeding into it.)

## What value would I use, and why?
One sentence. The "best" value isn't always the one with the highest
final accuracy — explain your reasoning.

## What would I sweep next, and why?
One sentence. After this sweep, the next thing I'd want to know is ___.
```

## What we're looking for

This is **the first systematic experiment**, and it's where stakes start *meaningfully* ramping. The Apply slot in Week 2 was a spike with one change. Week 3 is a controlled sweep with at least three values. Your writeup needs to show you understood the structure of what you did, not just that you did it.

### Earns full credit
- Sweep covers **at least 3 values** (5 preferred for LR, 4 for batch size).
- **Fresh model on every iteration.** No accidental warm-starting.
- Shared-axes plot present. For LR sweep: loss axis is log scale.
- Results table filled with real numbers (or `NaN` honestly recorded).
- "What I see" paragraph names a **mechanism**, not just a symptom.

### Loses points
- One run only (not a sweep).
- All variants reuse the same model object (so the "second run" is just "more training of the same model").
- Plot is a separate figure per run (we can't compare).
- Description is "it worked" / "it didn't work" without analysis.
- Two variables swept simultaneously (we can't disentangle).

## Heads up before [assess.md](assess.md)

Same two-track split as Week 2: Code Builders push the full Sacred Flow (issue → branch → PR → retro); Prompt Masters drop the notebook + report into the repo. Same artifact, different process expectations.

## Where to go next

→ [assess.md](assess.md) — What you submit and how it's graded.
