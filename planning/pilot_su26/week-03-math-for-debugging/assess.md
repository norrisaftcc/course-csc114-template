# Assess — What you submit (by track)

**Slot:** Assess (graded; stakes continue to rise — first systematic experiment)
**Due:** End of Week 3, before Monday of Week 4.

---

## What you submit (both tracks)

The artifact is the same regardless of track. Files in your `week-03/` folder:

1. **`chapter02_my_walkthrough.ipynb`** — your annotated copy of Chollet's Ch 2 notebook. All cells run, at least 6 of your own markdown reflection cells visible, and the "Mapping back to my Week 2 model" cell at the bottom filled in.
2. **`sweep_<variable>.ipynb`** — your controlled experiment notebook. At least 3 values of one variable, fresh model on each iteration, shared-axes plot, results table printed.
3. **`sweep_report.md`** — filled in per the template in [apply.md](apply.md). Results table real, plot embedded or linked, "what I see" paragraph names a mechanism.

That's the artifact. Both tracks get graded identically on it.

## How you submit — the two tracks split here

### Code Builders track — full Sacred Flow

By Week 3 this should be becoming muscle memory.

1. **Open an issue** titled `Week 3 sweep: <variable>` (e.g., `Week 3 sweep: learning rate`). Body: which variable, the values you'll try, and your one-sentence hypothesis ("I expect LR=1.0 to explode and LR=1e-4 to barely move"). *Before* you run the sweep.
2. **Branch** `week3-yourname`.
3. **Commit** as you go. Recommended commit progression:
   - `add Ch 2 walkthrough notebook`
   - `add reflection cells through §2.4`
   - `add sweep notebook scaffold`
   - `add results table and plot`
   - `add sweep report`
4. **Open a PR** to `main`.
5. **Retro in PR description.** Same shape as Week 2:

   ```
   ## Retro

   **What worked:** [one specific thing]
   **What surprised me:** [one specific thing — what was different from your hypothesis in the issue?]
   **What I'd do differently next time:** [one concrete change]
   ```

   Week 3 retros should start to be **about the workflow itself**, not just the experiment. ("Next time I'll plot the loss in log scale from the start instead of squinting at linear scale for 20 minutes.")

6. **Request review.** Address comments. Merge.

### Prompt Masters track — drop submission

1. Confirm your `week-03/` folder has all three files (both notebooks + the report).
2. Push via GitHub Desktop or the GitHub web UI.
3. Done.

If you'd like to *try* opening an issue or a PR this week without committing to the track, that's welcome. Sacred Flow is a one-way ratchet — you can practice it without enrolling in the expectation.

## Grading

| Component | Weight | Both tracks |
|---|---|---|
| Walkthrough notebook ran cleanly, all cells visible | 15% | ✓ |
| At least 6 reflection cells of your own writing | 15% | ✓ |
| "Mapping back to my Week 2 model" cell with specifics | 10% | ✓ |
| Sweep notebook has **fresh model on every iteration** | 15% | ✓ |
| Sweep covers at least 3 values | 10% | ✓ |
| Shared-axes plot (log scale for LR) | 10% | ✓ |
| Sweep report names a **mechanism**, not just symptoms | 20% | ✓ |
| Notebooks have explanatory cells, not just code | 5%  | ✓ |

**Code Builders earn process credit** if their Sacred Flow is complete (issue + branch + PR + retro + reviewed merge). This is extra credit on top of the artifact grade.

## What loses points (both tracks)

- Reused the same model object across sweep iterations (the second run was continuing the first one).
- Sweep was actually a single run with one parameter value.
- "What I see" paragraph is generic ("higher learning rate didn't work as well") with no mechanism.
- Results table has placeholders.
- Plot is one figure per run instead of shared axes.
- (Code Builders only) PR merged with no retro, or with the issue still open and unlinked.

## Stretch (optional, no extra points)

If your sweep finished fast and you want to push:

- Run **the same sweep with a different random seed** and check whether the differences you saw are real or within run-to-run noise. (`keras.utils.set_random_seed(...)`.) Bonus paragraph in your report.
- After picking your "best" value from the sweep, **set the optimizer to `keras.optimizers.legacy.SGD` instead of `Adam`** with the same learning rate. Compare. Does Adam's effective LR matter as much as plain-SGD's? (Spoiler: no — and the *why* is what Manning Ch 2 §4 is preparing you to see.)

Not required. Welcomed.

## Heads up about Week 4

- Reading: Manning Ch 3 (frameworks: TensorFlow / PyTorch / JAX / Keras positioning) and Ch 7 (Keras workflows deep dive — Sequential vs Functional vs subclassing, callbacks, custom training steps, TensorBoard).
- The Apply slot in Week 4 is "instrument your existing notebook" — add TensorBoard, add a callback, log a clean experiment record. This is the week we start treating ML training like an engineering process, not a science fair.
- Sacred Flow continues for Code Builders. **Week 4 is also the "project proposal due" milestone** — start thinking now about a dataset and a task you'd want as your term project. Crosswalk Week 5 has the proposal rubric.

## Where to go next

→ Week 4 (not yet built — this slice continues the pilot's per-week build cadence).
