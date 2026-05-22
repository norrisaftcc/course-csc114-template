# Apply — Re-run a previous experiment with instrumentation

**Slot:** Apply (hands-on, narrow scope)
**Time:** ~60 minutes
**Goal:** Take one of your previous spikes (from Week 2 or Week 3) and re-run it with TensorBoard, callbacks, and a proper experiment log entry. Surface one observation that wasn't visible when you ran it the first time.

---

## What makes this week's spike different

Weeks 2 and 3 were about *doing* an experiment and *noticing* results. This week is about *instrumenting* the experiment so the results are organized, comparable, and reproducible. The experiment itself is a re-run — the new part is the tooling.

## Pick one previous experiment to re-run

Pick whichever you found most interesting:

| Option | What to re-run | What's new |
|---|---|---|
| A | Your Week 2 spike (more epochs, different optimizer, extra layer, etc.) | Add TensorBoard + EarlyStopping + experiment log |
| B | Your Week 3 experiment (learning rate or batch size change) | Add TensorBoard + EarlyStopping + experiment log |
| C | A new variant you wanted to try but didn't | Instrument it from the start |

## Run the instrumented experiment

1. **Copy your Practice notebook** (`week-04/keras_fluency.ipynb`) to `week-04/spike_instrumented.ipynb`.
2. Apply the change from your chosen previous experiment (e.g., switch optimizer to `adam`, increase learning rate, add a layer).
3. Give it a descriptive `RUN_NAME` — e.g., `week4-adam-instrumented`, `week4-lr01-instrumented`.
4. Run it. Let TensorBoard log everything.
5. Open TensorBoard with *both* runs visible (the baseline from Practice + this spike).

## Find something new

With both runs in TensorBoard, look for one thing you couldn't see before:

- Did the weight histograms shift differently?
- Did one run's validation loss start rising earlier than you realized?
- Did EarlyStopping trigger at different epochs?
- Is the gap between train and val loss different in a way you didn't catch from terminal output?

## Update your experiment log

Add a second entry to `week-04/experiment_log.md`:

```markdown
## [your run name]
- **Date:** [date]
- **Architecture:** [same or different from baseline]
- **Change from baseline:** [exactly one thing]
- **Optimizer:** [with learning rate if non-default]
- **Batch size:** [value]
- **Epochs:** [actual, with EarlyStopping note]
- **Val accuracy (best):** [value]
- **Test accuracy:** [value]
- **New observation:** [one thing TensorBoard revealed that terminal output didn't]
- **Notes:** [anything else relevant]
```

## Write the spike summary

At the bottom of `experiment_log.md`, add:

```markdown
## Week 4 Summary

**What instrumentation changed about my workflow:**
[2–3 sentences. How did TensorBoard + callbacks change what you noticed
or how you made decisions? Be specific.]

**What I'd do next:**
[One sentence. This should connect to your project — Week 5 is proposal week.]
```

## What we're looking for

### Earns full credit
- TensorBoard logs exist for at least two runs (baseline + spike).
- Experiment log has two entries with real values, not placeholders.
- "New observation" names something specific that instrumentation revealed.
- Summary connects the tooling to the workflow — not "TensorBoard is cool" but "TensorBoard showed me that X, which I couldn't see from terminal output."

### Loses points
- No TensorBoard logs (just terminal output).
- Experiment log entries are incomplete.
- "New observation" is generic.
- Summary doesn't connect tooling to workflow.

## Where to go next

→ [assess.md](assess.md) — What you submit and how it's graded.
