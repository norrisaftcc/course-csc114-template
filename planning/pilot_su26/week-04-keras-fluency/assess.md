# Assess — What you submit (by track)

**Slot:** Assess (graded; stakes still moderate — the big one is Week 5)
**Due:** End of Week 4, before Monday of Week 5.

---

## What you submit (both tracks)

Files in your `week-04/` folder:

1. **`keras_fluency.ipynb`** — the Practice notebook, run end-to-end. Functional API model, TensorBoard callback, EarlyStopping callback, ModelCheckpoint callback. Outputs visible. Reflection cell filled in.
2. **`spike_instrumented.ipynb`** — your Apply notebook. One re-run experiment with full instrumentation. Outputs visible.
3. **`experiment_log.md`** — at least two entries (baseline + spike) plus the Week 4 summary.
4. **`logs/`** — the TensorBoard log directory. Should contain subdirectories for at least two runs.

That's the **artifact**. Both tracks get graded identically on it.

## How you submit — the two tracks

### Code Builders track — full Sacred Flow

Same cadence. **This week's retro has a twist:** it should mention one change to the *workflow itself* (how you set up experiments, how you track results), not just the model.

1. **Open a GitHub Issue** titled `Week 4 instrumentation: <one-line description>`. Body: which previous experiment you're re-running and why.
2. **Branch** off `main`: `week4-yourname`.
3. **Commit** as you go. Include the `logs/` directory (the TensorBoard data). Don't gitignore it this week — your reviewer needs to see the runs.
4. **Open a PR.**
5. **Retro** in the PR description — this time, include:

   ```
   ## Retro

   **What worked:** [one specific thing]
   **What surprised me:** [one specific thing — TensorBoard insights count]
   **One workflow change I'm making:** [not about the model — about how you
   organize experiments, name runs, track results, etc.]
   ```

6. **Request review.** Merge after at least one comment.

### Prompt Masters track — drop submission

1. Your `week-04/` folder has all four items (notebook, spike notebook, experiment log, logs directory).
2. Push via GitHub Desktop or the web UI.
3. Done.

## Grading

| Component | Weight | Both tracks |
|---|---|---|
| Practice notebook: Functional API model builds and trains | 10% | ✓ |
| Practice notebook: all three callbacks present and functioning | 15% | ✓ |
| Practice notebook: reflection cell filled in with specifics | 10% | ✓ |
| Spike notebook: one instrumented re-run with TensorBoard logs | 15% | ✓ |
| Experiment log: two entries with real values | 10% | ✓ |
| Experiment log: "new observation" is specific and connects to TensorBoard | 20% | ✓ |
| Experiment log: Week 4 summary connects tooling to workflow | 15% | ✓ |
| Notebooks have explanation cells, not just code | 5% | ✓ |

**Code Builders also earn process credit:** complete Sacred Flow + workflow-focused retro earns extra credit equivalent to one rubric line.

## What loses points (both tracks)

- No TensorBoard logs present (just screenshots or terminal output).
- EarlyStopping not configured or not triggered.
- Experiment log entries have placeholders or are clearly copied from the template without real values.
- Week 4 summary is generic ("TensorBoard was helpful") rather than specific.
- Retro (Code Builders) doesn't mention a workflow change.

## Heads up about Week 5 — this is the big one

Week 5 is **project proposal week**. The 1-page proposal is the first "tightened stakes" assessment.

- Reading: Manning Ch 5 (generalization, evaluation, overfit/underfit, regularization) + Ch 6 (universal workflow).
- You will choose a dataset, define a task, pick a metric, establish a baseline, and write a 1-page proposal.
- Your experiment logs from Weeks 2–4 are evidence that you know how to run experiments. The proposal is where you point them forward.
- Start thinking now about what you want your project to be about. Vision (image classification)? Text? Tabular data? The choice affects Weeks 6–8.

## Where to go next

→ Week 5 — ML fundamentals + universal workflow (project proposal week).
