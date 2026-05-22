# Week 4 — Frameworks + Keras fluency

**Pilot week:** 4 of 8 (CSC-114 Summer 2026)
**Theme:** Speed up your workflow. You've been writing Keras code for two weeks with `Sequential` and default everything. This week you learn the *other* ways to build models (Functional API, subclassing), the tools that make experiments repeatable (callbacks, TensorBoard), and enough framework context to not get confused when someone says "just use PyTorch."
**Manning chapter(s):** Ch 3 (TF/PyTorch/JAX/Keras positioning) + Ch 7 (Keras workflows deep dive). Reading is assigned.

---

## What changes from Week 3

1. **The math recedes, the engineering rises.** Week 3 was about understanding the training loop. Week 4 is about *controlling* it — building models that are easier to debug, instrument, and iterate on.
2. **TensorBoard arrives.** You'll add real-time experiment tracking. This replaces "staring at the terminal" with actual curves you can compare across runs.
3. **The project proposal looms.** Week 5 is project proposal week. This week's spike feeds into it: you'll re-run a previous experiment with proper instrumentation so you can point at your TensorBoard logs and say "here's how I systematically improved my model."

## Learning outcomes

By Friday, you can:

1. **Describe** the relationship between Keras, TensorFlow, JAX, and PyTorch — what's an API vs. what's a backend.
2. **Build** the same model three ways: `Sequential`, Functional API, and (conceptually) subclassing. Know when each is appropriate.
3. **Add** at least one callback (`EarlyStopping`, `ModelCheckpoint`, `TensorBoard`) to a training run.
4. **Launch** TensorBoard and compare multiple runs visually.
5. **Maintain** a clean experiment log: run name, hyperparameters, result.

## What you do this week

1. **[learn.md](learn.md)** — *Manning Ch 3 + Ch 7 framing.* The framework landscape and the three Keras model-building patterns.
2. **[practice.md](practice.md)** — *Instrument your Week 2 notebook.* Add TensorBoard, a callback, and an experiment log. Retry-OK.
3. **[apply.md](apply.md)** — *Re-run a previous experiment with instrumentation.* Surface one observation that wasn't visible before.
4. **[assess.md](assess.md)** — *What you submit, split by track. Project proposal is due next week — this is ramp-up.*

## Two-track expectations this week

| Track | Submit by | Process artifacts |
|---|---|---|
| Code Builders | Issue → branch → PR with instrumented notebook + experiment log → retro in PR description. Retro should mention one change to the *workflow itself* (not just the model). | Issue + branch + PR + retro |
| Prompt Masters | Instrumented notebook + experiment log dropped into `week-04/` via GitHub Desktop or web upload. | None — just the artifact |

Both tracks earn identical points on the *artifact*. Code Builders earn **process credit** for the issue/PR/retro on top.

## Before you start

- [ ] Manning *Deep Learning with Python*, 3rd ed. — Ch 3 skimmed, Ch 7 read (the important one this week).
- [ ] Your Week 2 and Week 3 notebooks still run.
- [ ] `tensorboard` installed: `pip install tensorboard`. Verify: `tensorboard --version`.

## Source material this week draws from

- **Primary student reading:** Manning Ch 3 (skim) + Ch 7 (deep dive). The companion notebook is `planning/textbook/deep-learning-with-python-notebooks-master/chapter07_working-with-keras.ipynb`.
- **Vocabulary check (optional):** `planning/csc_dash/CSC-114/knowledge-checks/Module_02_Knowledge_Check.md` — the classification/regression vocabulary is relevant here as a self-check.
- **Quick reference (optional):** `planning/csc_dash/CSC-114/reference-materials/QUICK_REFERENCE_CARDS.md` — Keras snippets for the Functional API, callbacks, and common patterns.
