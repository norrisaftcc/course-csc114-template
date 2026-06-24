# CSC-114 Module 4 Toolchain Lab (California Housing)
## Get → Open → Run → Trim the Chapter 4 Notebook to the Regression Example

| Field | Value |
|-------|-------|
| Course | CSC-114 Artificial Intelligence I |
| Module | 4 — Predicting House Prices (Chapter 4, regression) |
| Skill being trained | The *toolchain*, not the concepts. You already understand regression, validation, and overfitting. This lab is about getting the real notebook running cleanly and trimming it to the one problem we're studying. |
| Platform | GitHub Codespaces (VS Code in your browser) |
| Source notebook | `chapter04_classification-and-regression.ipynb` from Chollet & Watson's companion repo |
| The problem we keep | **California Housing** — a *scalar regression* example: predict the median home price of a California district from 8 numbers |
| Time | ~50 minutes the first time, ~15 once the workflow is in your hands |

> **Heads up:** This is the same Chapter 4 notebook that also contains the IMDB and Reuters examples. We only want the **third** problem in it — California housing prices. Trimming to *that* one is a little trickier than trimming to the first one, for a reason you'll see in Station 8. The reason is interesting, not scary.

---

## Why this lab exists

You can explain what regression is and why we use a validation set. Good. But "explain it" and "run the actual Chapter 4 housing model, watch your validation error bottom out, and read your average dollar error off your own run" are different skills. The second one is where everyone gets stuck — not on the ideas, on the *tools*. This lab walks the whole toolchain so the friction stops eating your brain.

The destination: a clean, trimmed notebook in your repo's `module4/` folder that runs top to bottom and produces a California-housing validation curve **you** can read, plus an average error **in dollars** you can state.

---

## Before you start (pre-flight)

- [ ] You can sign in to GitHub.
- [ ] Your personal CSC-114 repository exists.
- [ ] You know your track: **Code Builder** or **Prompt Master**. The run-the-notebook steps are identical; only *getting the file in* and *turning it in* differ. Both paths are first-class.

> **Track note.** Where you see a **Code Builder** / **Prompt Master** split, do only your track's version. Everything unmarked is for everyone.

---

## Station 1 — Get the notebook out of GitHub

You want one file: `chapter04_classification-and-regression.ipynb`.

**Prompt Master (download to your computer):**
1. Open the companion repo, click `chapter04_classification-and-regression.ipynb` to show the rendered preview.
2. Click the **download-raw icon** (downward arrow, tooltip "Download raw file").
3. The file lands in Downloads.

> **Gotcha — the #1 mistake.** Do not use the browser's "Save Page As" — that saves the *web page* (HTML), not the notebook. The file you want ends in **`.ipynb`**. If yours ends in `.html`, throw it away and use the download-raw icon.

**Code Builder:** Skip the download. You'll pull the file straight into your Codespace in Station 3.

**Checkpoint —** Prompt Masters: you have `chapter04_classification-and-regression.ipynb` (not `.html`) on your computer.

---

## Station 2 — Open *your repo* in a Codespace

1. Go to your CSC-114 repository on GitHub.
2. Green **Code** button → **Codespaces** tab → **Create codespace on main** (or reopen an existing one).
3. Wait for the browser VS Code to load (first build can take a minute or two).

**Checkpoint —** Browser VS Code is open on *your* repo, with the **Explorer** panel on the left and a **Terminal** available (`Terminal → New Terminal`).

---

## Station 3 — Make a `module4/` folder and get the notebook in

**Everyone — create the folder:** In Explorer, right-click empty space → **New Folder** → name it exactly `module4`.

**Prompt Master (upload):** Right-click `module4` → **Upload...** → pick the downloaded `.ipynb`. (Or drag it from your desktop onto the folder.)

**Code Builder (pull it in — no laptop round-trip):**
```bash
cd module4
curl -L -o chapter04_classification-and-regression.ipynb \
  https://raw.githubusercontent.com/fchollet/deep-learning-with-python-notebooks/master/chapter04_classification-and-regression.ipynb
```

**Checkpoint —** `module4/chapter04_classification-and-regression.ipynb` exists.

---

## Station 4 — Turn on notebook superpowers (the "messy JSON" fix)

Open the notebook file.

- **Renders as cells** (formatted text, gray code blocks, ▶ buttons)? Skip to Station 5.
- **Opens as a wall of `{"cells": [...]}` text?** That's raw JSON — VS Code can't *render* notebooks yet. You're missing an extension.

**Fix:** Extensions panel (four-squares icon) → install **Jupyter** (Microsoft) and **Python** (Microsoft) → close and reopen the notebook.

**Checkpoint —** The notebook renders as cells with ▶ run buttons.

---

## Station 5 — Pick a kernel

A *kernel* is the Python engine that runs your cells.

1. Top-right → **Select Kernel** → **Python Environments...** → pick Python 3.x.

> **Gotcha —** If asked to install `ipykernel`, say yes. If no kernel appears, run `python3 -m pip install ipykernel` in the terminal and try again.

**Checkpoint —** Top-right shows a Python version instead of "Select Kernel."

---

## Station 6 — Run the setup cells (install + backend)

Run the first two code cells **in order, top first.**

1. **First cell:** `!pip install keras keras-hub --upgrade -q`
   Edit it to add `jax` before running:
   ```python
   !pip install keras keras-hub jax --upgrade -q
   ```
   **Why:** the next cell tells Keras to use the **JAX** backend, and a fresh Codespace doesn't always have JAX installed. Colab does, which is why the book doesn't mention it. Noticing platform differences like this is part of what Module 4 trains.

2. **Second cell:** `os.environ["KERAS_BACKEND"] = "jax"` — must run **before** anything imports `keras`.

> **Gotcha — backend changes need a kernel restart.** The backend is locked the moment Keras is first imported. If you change it afterward: `Kernel → Restart`, then run from the top.

**Checkpoint —** Both setup cells finish with no red error. (`No module named 'jax'` → the `jax` edit didn't take; re-run, restart, retry.)

---

## Station 7 — Run the California Housing example and read your own results

Run the **regression section only** — everything from the heading **"Predicting house prices: A regression example"** to the end of the file, in order, top to bottom.

Three things are different from a classification run, and the tool will show you each:

- **K-fold validation, not a single split.** This dataset is tiny (480 training districts), so a single validation slice would be unreliable. The notebook trains **4 separate models** on different slices and averages them. That's why you'll see `Processing fold #1 … #4`.
- **The targets are scaled.** Look at the cell `y_train = train_targets / 100000`. Prices are divided by 100,000 so the model trains nicely. That means every error number you read is in **units of $100,000** — you'll multiply back to get dollars.
- **The metric is MAE, not accuracy.** *Mean Absolute Error* — on average, how far off (in scaled dollars) the prediction is.

> **Gotcha — the cells look frozen but they aren't.** The K-fold and final-training cells use `verbose=0`, so they print **no per-epoch progress**. The big K-fold cell (200 epochs × 4 folds) can run for a couple of minutes showing only the four `Processing fold #` lines, and the final-training cell may show *nothing at all* while it works. A spinning cell here is normal. Wait it out; don't keep re-running it (that just starts over).

> **First-run note —** The housing data downloads the first time. A short pause is normal.

**This is your graded anchor — two parts:**

1. **Find the overfitting turnaround.** The zoomed validation-MAE plot (the cell with `truncated_mae_history`) shows validation error dropping, then flattening, then creeping back up. The epoch where it stops improving is your overfitting point. Read it off *your* plot and write it down. (The book's run turns around somewhere around 120–140 epochs; yours will be close but is allowed to differ — that's the point of reading your own evidence.)

2. **Translate your error into dollars.** The final-model cell reports a test MAE (e.g., around `0.31`). Multiply by 100,000: an MAE of 0.31 means your model is off by about **$31,000** on average. State *your* number in dollars. (Sanity check: district prices run from about $60,000 to $500,000, so being off by ~$30,000 is meaningful, not tiny.)

**Checkpoint —** You can point to the turnaround epoch on your own MAE plot, and you can say "my model is off by about $X on average" with the dollars worked out from your own MAE.

---

## Station 8 — Make it yours: trim to *just* California Housing

The downloaded file holds three problems stacked in order:

```
[ Setup cells ]                  ← KEEP (top of file)
### Classifying movie reviews    ← IMDB     ← CUT
### Classifying newswires        ← Reuters  ← CUT
### Predicting house prices      ← KEEP (this is ours)
```

For this class you want **California Housing only**. Notice the shape of the cut: you keep the **top** (setup) and the **bottom** (housing), and remove the **middle** (IMDB + Reuters). That middle cut has a catch:

> **The housing section borrows tools that were set up in the IMDB section.** The lines `import numpy as np`, `import keras` / `from keras import layers`, and `import matplotlib.pyplot as plt` all live up in the IMDB part. Delete the middle and the housing section suddenly can't find them — you'll get errors like `name 'np' is not defined`. The fix is simple (add the imports back into a kept cell), but you have to *know* to do it.

This is exactly the kind of dependency that the companion guide trains you to spot and fix safely:

> **→ Use the *Notebook Surgery (California Housing)* guide for the exact keep/cut list, the imports you must add back, and the safe way to verify.**

After cutting, do the one move that proves you didn't break anything:

**`Kernel → Restart`, then `Run All`, from the very top.**

If it runs clean end to end and still gives you your housing MAE curve, the surgery worked.

**Checkpoint —** Your trimmed notebook runs top-to-bottom from a fresh kernel and contains only the California Housing problem.

---

## Station 9 — Turn it in

**Prompt Master:**
- Save (`Ctrl/Cmd + S`); confirm the notebook is in `module4/` (upload it if you ran a downloaded copy).
- Submit per the assignment: the saved `.ipynb` plus a **screenshot of your zoomed validation-MAE plot** with your turnaround epoch labeled, and a one-line statement of your average error **in dollars**.

**Code Builder (Sacred Flow):**
1. Open an **Issue**: "Module 4 — run and trim Chapter 4 notebook (California Housing)."
2. Create a **branch**.
3. Commit the trimmed notebook: `module4: trim Ch4 to California-housing-only, runs clean from top`.
4. Open a **PR**, request **review**, then **merge** after approval.
5. In the PR description: your turnaround epoch, your average error in dollars (with the ×100,000 shown), and one sentence on how you verified the trim (Restart + Run All).

---

## Before you leave

- [ ] The notebook renders as cells, not JSON.
- [ ] A kernel is selected and the setup cells run clean.
- [ ] You ran the housing example and waited out the silent K-fold cells.
- [ ] You named your overfitting turnaround epoch from your own MAE plot.
- [ ] You translated your MAE into a dollar figure.
- [ ] You trimmed to housing-only, re-added the stranded imports, and proved it with Restart + Run All.
- [ ] You submitted via your track's path.

Stuck at any station? Normal the first time, and it's *data*, not failure. Note the station and exactly what the screen said — your instructor's triage guide is organized station by station.

---

```text
=================== INSTRUCTOR APPENDIX (not for student distribution) ===================

ANSWER KEY — Station 7 graded anchors
- Turnaround: book's averaged K-fold validation MAE stops improving ~epoch 120–140
  (this count includes the 10 omitted points). ACCEPT any epoch the student justifies
  from THEIR OWN averaged plot (typically ~110–150). The graded behavior is reading their
  own curve, not matching a number.
- Dollar translation: final test MAE ~0.31 in the book × 100,000 = ~$31,000 average error.
  ACCEPT the student's own MAE correctly multiplied by 100,000. The K-fold average MAE
  (~0.296 in the book) ≈ ~$29,600 is also acceptable as "average error."
- "Catch the AI": the dollar figure cannot be lifted from the book or an AI without the
  ÷100,000 scaling reasoning. A student who reports a raw "0.31" as "dollars" has missed the
  scaling; a student who reports "$31" has mis-scaled. Both are quick flags for understanding.

WHY THIS CUT IS THE HARD ONE (instructor framing)
- IMDB-only is a BOTTOM cut and is self-contained (its imports live in its own section).
- California-only is a MIDDLE cut: numpy, keras/layers, and matplotlib are all imported in
  the IMDB section and silently reused by the housing section. The cut strands them.
  Required fix: add an imports cell into the kept (housing/setup) region. This is THE concrete
  payoff of the "definitions don't respect section headings" lesson — use it deliberately.

RUBRIC MAPPING (four-category)
- AI Partnership Quality — if an AI helped trim, did they verify (Restart + Run All) and
  catch the stranded-imports break rather than trust the output?
- Problem-Solving Process — followed stations; re-added imports; verified; waited out
  verbose=0 cells instead of re-running them.
- Professional Communication — clean commit/submission; module4/ correct; legible plot
  screenshot; dollar figure stated with the scaling shown.
- Critical Thinking & Ethics — read the turnaround from own evidence; understood target
  scaling well enough to report dollars; recognized why K-fold is used on tiny data.

FAST-MOVING-TARGET FLAGS (re-verify each term)
- Raw URL / filename / branch can change; confirm before class:
  https://raw.githubusercontent.com/fchollet/deep-learning-with-python-notebooks/master/chapter04_classification-and-regression.ipynb
- 3rd edition: Keras 3 + JAX backend; regression dataset is CALIFORNIA housing loaded with
  california_housing.load_data(version="small") → 480 train / 120 test, 8 features.
  (Boston Housing is gone from this edition — no manual exclusion needed.)
- Whether a fresh Codespace ships the Jupyter/Python extensions and a working jax varies with
  GitHub's default image. Dry-run a clean codespace each term; if jax is preinstalled, the
  Station 6 edit is optional (still harmless).
- A devcontainer.json preinstalling ms-python.python, ms-toolsai.jupyter, keras, keras-hub,
  and jax would erase Stations 4–6 of friction for the whole class.

RUNTIME NOTE
- The 200-epoch K-fold cell (4 folds) and the 130-epoch final-fit cell run a couple of minutes
  on CPU with verbose=0. Tell students up front so the silence doesn't read as a crash.

ESCALATION
- Account/access/codespace-quota blockers eating lab time → Mallory Milstead, Andrew Norris.
==========================================================================================
```
