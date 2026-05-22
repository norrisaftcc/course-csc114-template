# Assess — What you submit (by track)

**Slot:** Assess (graded; still building confidence, but the analysis bar rises)
**Due:** End of Week 3, before Monday of Week 4.

---

## What you submit (both tracks)

Files in your `week-03/` folder:

1. **`math_warmup.ipynb`** — the Practice notebook, run end-to-end. Cells executed, outputs visible. Reflection cell filled in.
2. **`experiment_<your-change>.ipynb`** — your spike experiment notebook. Cells executed, outputs visible. Exactly one hyperparameter changed from the Week 2 baseline.
3. **`experiment_report.md`** — filled in per the template in [apply.md](apply.md). Results table real, training curves embedded or linked, analysis paragraph uses this week's concepts.

That's the **artifact**. Both tracks get graded identically on it.

## How you submit — the two tracks

### Code Builders track — full Sacred Flow

Same cadence as Week 2. Branch name should encode the experiment.

1. **Open a GitHub Issue** titled `Week 3 experiment: <your one-line description>`. Body: which option (A–E from [apply.md](apply.md)) you picked, and your one-sentence hypothesis. *Open before you start the experiment.*
2. **Branch** off `main`: name it something like `week3-lr-sweep` or `week3-batch-small`.
3. **Commit** as you go. Meaningful messages — `add math warmup notebook`, `experiment: set lr to 0.01`, `add experiment report`.
4. **Open a PR** from your branch to `main`.
5. **Retro** in the PR description:

   ```
   ## Retro

   **What worked:** [one specific thing]
   **What surprised me:** [one specific thing about the math or the experiment]
   **What I'd do differently next time:** [one concrete change]
   ```

6. **Request review.** Merge after at least one comment.

### Prompt Masters track — drop submission

1. Your `week-03/` folder has all three files.
2. Push via GitHub Desktop or the web UI.
3. Done.

## Grading

| Component | Weight | Both tracks |
|---|---|---|
| Practice notebook runs cleanly, outputs visible, reflection filled in | 20% | ✓ |
| Experiment notebook has exactly one hyperparameter changed | 15% | ✓ |
| `experiment_report.md` results table filled with real numbers | 15% | ✓ |
| `experiment_report.md` hypothesis stated and evaluated | 10% | ✓ |
| `experiment_report.md` analysis uses this week's math concepts to *explain* the result | 25% | ✓ |
| `experiment_report.md` "what I'd do next" is concrete | 5% | ✓ |
| Notebooks have reflection / explanation cells, not just code | 10% | ✓ |

**Code Builders also earn process credit:** complete Sacred Flow (issue + branch + PR + retro + review) earns extra credit equivalent to one rubric line.

## What loses points (both tracks)

- Notebook cells not run (no outputs).
- More than one variable changed from baseline.
- Analysis paragraph is purely descriptive — names what happened without explaining *why* using gradients, step size, convergence, or batch noise.
- No hypothesis, or hypothesis written after the experiment (we can usually tell).
- Practice reflection is blank or generic.

## Stretch (optional, no extra points)

Run the **same experiment with two different learning rates** — e.g., if you tested `lr=0.01`, also try `lr=0.1`. Plot all three loss curves (baseline + two experiments) on the same axes. This gives you a visual "learning rate landscape" that you'll reference for the rest of the term.

## Heads up about Week 4

- Reading: Manning Ch 3 (framework landscape) + Ch 7 (Keras deep dive).
- Week 4 is when you learn the Functional API, callbacks, and TensorBoard — tools that make your experiments more organized and repeatable.
- **Project proposal is due at the end of Week 5** — Week 4 starts the ramp toward it.
- Sacred Flow continues for Code Builders.

## Where to go next

→ Week 4 — Frameworks + Keras fluency.
