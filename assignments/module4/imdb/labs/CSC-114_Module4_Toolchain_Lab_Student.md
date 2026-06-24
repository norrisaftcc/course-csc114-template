# CSC-114 Module 4 Toolchain Lab
## Get → Open → Run → Trim a Chollet Notebook in Codespaces

| Field | Value |
|-------|-------|
| Course | CSC-114 Artificial Intelligence I |
| Module | 4 — IMDB Sentiment Classification (Chapter 4) |
| Skill being trained | The *toolchain*, not the concepts. You already understand training loops and overfitting. This lab is about getting a real notebook running, cleanly, every time. |
| Platform | GitHub Codespaces (VS Code in your browser) |
| Source notebook | `chapter04_classification-and-regression.ipynb` from Chollet & Watson's companion repo |
| Time | ~50 minutes the first time, ~15 minutes once the workflow is in your hands |

---

## Why this lab exists

You can explain what overfitting is. Good. But "explain it" and "run the actual Chapter 4 notebook, watch your own validation loss turn the corner, and trim the file down to just the problem you care about" are two different skills. The second one is where everyone gets stuck — not on the ideas, on the *tools*. A missing extension, an out-of-order cell, the wrong download button. This lab walks the whole toolchain so that the friction stops eating your brain and you can spend it on the AI.

The destination: a clean, trimmed notebook in your repo's `module4/` folder that runs top to bottom and produces an IMDB training curve **you** can read.

---

## Before you start (pre-flight)

- [ ] You can sign in to GitHub.
- [ ] Your personal CSC-114 repository exists (from Module Zero).
- [ ] You know which track you're on: **Code Builder** or **Prompt Master**. The run-the-notebook steps are identical for both; only *getting the file in* and *turning it in* differ. Both paths are first-class.

> **Track note.** Wherever you see a **Code Builder** / **Prompt Master** split below, do only your track's version. Everything not marked is for everyone.

---

## Station 1 — Get the notebook out of GitHub

The book's "View on GitHub" link points to the companion repo. You want one file from it: `chapter04_classification-and-regression.ipynb`.

**Prompt Master (download to your computer):**
1. Open the repo and click the file `chapter04_classification-and-regression.ipynb` so it shows the rendered preview.
2. In the toolbar above the preview, click the **download-raw icon** (the little downward arrow, tooltip says "Download raw file").
3. The file lands in your Downloads folder.

> **Gotcha — the #1 mistake here.** Do **not** use your browser's "Save Page As." That saves the *web page* (HTML), not the notebook. If the file you saved ends in `.html`, or opens as a webpage, throw it away and use the download-raw icon. The file you want ends in **`.ipynb`** and is plain text/JSON inside.

**Code Builder (skip the download entirely — pull it straight into your Codespace later):** You'll grab the file inside the Codespace with one terminal command in Station 3. Move on to Station 2.

**Checkpoint —** Prompt Masters: you have a file named `chapter04_classification-and-regression.ipynb` (not `.html`) on your computer.

---

## Station 2 — Open *your repo* in a Codespace

We always run inside *your own* repo so your work has a home.

1. Go to your CSC-114 repository on GitHub.
2. Click the green **Code** button.
3. Choose the **Codespaces** tab.
4. Click **Create codespace on main** (or open an existing one if you already have it).

Wait for the browser-based VS Code to finish loading. The first build can take a minute or two.

**Checkpoint —** You see a VS Code window in your browser with your repo's files in the left-hand **Explorer** panel, and a **Terminal** available at the bottom (open one with `Terminal → New Terminal` if you don't see it).

---

## Station 3 — Make a `module4/` folder and put the notebook in it

**Everyone — create the folder first:**
- In the Explorer panel, right-click empty space → **New Folder** → name it exactly `module4`.

**Prompt Master (upload):**
- Right-click the `module4` folder → **Upload...** → pick the `chapter04_classification-and-regression.ipynb` you downloaded.
- (Or drag the file from your desktop straight onto the `module4` folder in the Explorer.)

**Code Builder (pull it in with the terminal — no laptop round-trip):**
```bash
cd module4
curl -L -o chapter04_classification-and-regression.ipynb \
  https://raw.githubusercontent.com/fchollet/deep-learning-with-python-notebooks/master/chapter04_classification-and-regression.ipynb
```

**Checkpoint —** Inside `module4/` you can see `chapter04_classification-and-regression.ipynb`.

---

## Station 4 — Turn on notebook superpowers (the "messy JSON" fix)

Click your notebook file to open it.

- **If it opens as a notebook** — you see formatted text, gray code cells, little ▶ run buttons — great, skip to Station 5.
- **If it opens as a wall of messy `{"cells": [...]}` text** — that's the raw JSON. VS Code doesn't yet know how to *render* notebooks. You're missing an extension.

**The fix:**
1. Click the **Extensions** icon in the far-left bar (the four-squares icon).
2. Search **`Jupyter`**. Install the one published by **Microsoft**.
3. Search **`Python`**. Install the **Microsoft** one too, if it isn't already there.
4. Close the messy file and reopen `chapter04_classification-and-regression.ipynb`.

**Checkpoint —** The notebook now renders as cells, not as raw JSON. You see run buttons (▶) on the left of each code cell.

---

## Station 5 — Pick a kernel

A *kernel* is the Python engine that actually runs your cells. The notebook won't run without one selected.

1. Top-right of the notebook, click **Select Kernel**.
2. Choose **Python Environments...** → pick the Python 3.x that appears.

> **Gotcha —** If it asks to install `ipykernel`, say yes. If no kernel appears at all, open a terminal and run `python3 -m pip install ipykernel`, then click Select Kernel again.

**Checkpoint —** The top-right shows a Python version (e.g., "Python 3.x.x") instead of "Select Kernel."

---

## Station 6 — Run the setup cells (install + backend)

The notebook's first two code cells do the setup. Run them **in order, top first.**

1. **First cell:** `!pip install keras keras-hub --upgrade -q`
   This installs Keras. **Make one small edit before running it** so the JAX backend has what it needs. Change the line to:
   ```python
   !pip install keras keras-hub jax --upgrade -q
   ```
   You're adding `jax`. Here's *why* (this is not magic): the very next cell tells Keras to use the **JAX** backend, and a fresh Codespace doesn't always have JAX installed. Colab does, which is why the book doesn't mention it. This is a real toolchain difference between platforms — exactly the kind of thing this module trains you to notice.

2. **Second cell:** `os.environ["KERAS_BACKEND"] = "jax"`
   This must run **before** anything imports `keras`. The backend is locked in the moment Keras is first imported.

> **Gotcha — backend changes need a kernel restart.** If you ever run a `keras` import and *then* try to change the backend, it's too late for this session. Fix: `Kernel → Restart`, then run from the top again. When in doubt, restart and run from the top.

**Checkpoint —** Both setup cells finish without a red error. (A `ModuleNotFoundError: No module named 'jax'` means the `jax` edit didn't take — re-run the first cell, restart the kernel, and try again.)

---

## Station 7 — Run the IMDB example and read your own curve

Now run the **IMDB section only** — everything from the heading *"Classifying movie reviews: A binary classification example"* down through *"Using a trained model to generate predictions."* Run those cells top to bottom.

> **First-run note —** Loading the IMDB data downloads about 80 MB the first time. Give it a moment; a pause is normal, not a freeze.

Watch for two things as you go:
- The training cell (`model.fit(... epochs=20 ...)`) prints a line per epoch with `loss`, `accuracy`, `val_loss`, and `val_accuracy`.
- The plotting cells draw **training vs. validation loss** and **training vs. validation accuracy**.

**This is your graded anchor.** Look at *your* validation-loss curve. Training loss keeps dropping every epoch — but validation loss stops improving and starts climbing back up at some point. The epoch where validation loss bottoms out and turns around is your **overfitting turnaround**. Write down the epoch number from *your* run. (Yours may differ slightly from the book's — different random start. That's the point: you're reading your own evidence, not copying a number.)

**Checkpoint —** You can point to a specific epoch on your own plot and say "validation loss turns around here." You can also see the retrain-from-scratch cell report a final test accuracy in the high-80s.

---

## Station 8 — Make it yours: trim to *just* IMDB

The downloaded file is the whole chapter — three problems stacked together (IMDB, then Reuters newswires, then California housing prices). For Module 4 you only need IMDB. A clean, single-purpose notebook is easier to read, run, and turn in.

Cutting cells is its own small skill, because cells share memory and later cells can depend on earlier ones. **Do not guess.** Follow the companion guide:

> **→ Use the *Notebook Surgery* guide for the exact keep/cut list and the safe way to verify your cut.**

The short version: keep the setup cells and the entire IMDB section; delete everything from the *"Classifying newswires"* heading down to the end of the file. Then do the one move that proves you didn't break anything:

**`Kernel → Restart` and then `Run All`, from the very top.**

If it runs clean end to end with no red errors and you still get your IMDB curve, your surgery was successful.

**Checkpoint —** Your trimmed notebook runs top-to-bottom from a fresh kernel and contains only the IMDB problem.

---

## Station 9 — Turn it in

**Prompt Master:**
- Save the notebook (`Ctrl/Cmd + S`).
- Confirm `module4/chapter04_classification-and-regression.ipynb` is in your repo (Prompt Masters upload via the Explorer if you ran in a downloaded copy).
- Submit per the assignment: drag-and-drop the saved `.ipynb` plus a **screenshot of your validation-loss plot** with your turnaround epoch circled or labeled.

**Code Builder (Sacred Flow):**
1. Open an **Issue**: "Module 4 — run and trim Chapter 4 notebook (IMDB)."
2. Create a **branch** for the work.
3. Commit your trimmed notebook with a clear message, e.g. `module4: trim Ch4 to IMDB-only, runs clean from top`.
4. Open a **PR**, request **review**, then **merge** after approval.
5. In the PR description, state your overfitting turnaround epoch and one sentence on how you verified the trim (Restart + Run All).

---

## Before you leave

- [ ] The notebook renders as cells, not JSON.
- [ ] A kernel is selected and the setup cells run clean.
- [ ] You ran the IMDB example and can name your overfitting turnaround epoch from your own plot.
- [ ] You trimmed to IMDB-only and proved it with Restart + Run All.
- [ ] You submitted via your track's path.

Stuck at any station? That's normal the first time, and it's *data*, not failure. Note exactly which station and what the screen said — your instructor's triage guide is organized station by station.

---

```text
=================== INSTRUCTOR APPENDIX (not for student distribution) ===================

ANSWER KEY — Station 7 graded anchor
- Validation loss in the book's run bottoms out around epoch 4 and rises after.
  Student runs vary by ±1–2 epochs due to random initialization. ACCEPT any epoch
  the student can justify from THEIR OWN plot (typically epochs 3–6). The graded
  behavior is reading their own curve and naming a turnaround — not matching "4".
- "Catch the AI" structure: the turnaround number cannot be copied from the book or an
  AI, because it must come from the student's specific training run. A student who
  reports "4" but whose plot turns at 5 has copied, not read — flag for a quick check.

RUBRIC MAPPING (four-category)
- AI Partnership Quality — N/A-light here; if they used an AI to help trim, did they
  verify its output (Restart + Run All) rather than trusting it? Credit the verification.
- Problem-Solving Process — followed the stations; used Restart + Run All to confirm the
  trim; one-change discipline on the pip edit.
- Professional Communication — clean commit message / clear submission; module4/ folder
  correct; screenshot legible (Prompt Master).
- Critical Thinking & Ethics — named the turnaround from their own evidence; noticed the
  Colab-vs-Codespace platform difference (the jax install) rather than treating it as magic.

FAST-MOVING-TARGET FLAGS (re-verify each term)
- The companion repo path and the exact filename can change between editions/branches.
  Confirm the raw URL still resolves before class:
  https://raw.githubusercontent.com/fchollet/deep-learning-with-python-notebooks/master/chapter04_classification-and-regression.ipynb
- 3rd edition uses Keras 3 with the JAX backend and the CALIFORNIA housing dataset
  (Boston Housing is gone — no need to exclude it manually anymore).
- Whether a fresh Codespace ships the Jupyter/Python extensions and a working jax varies
  with GitHub's default image. Do a dry run in a clean codespace each term; if jax is
  preinstalled, the Station 6 edit becomes optional (still harmless).
- GitHub's file-page UI (the download-raw icon location) shifts periodically. Re-screenshot
  if students report confusion.
- A devcontainer.json in the class repo that preinstalls ms-python.python,
  ms-toolsai.jupyter, keras, keras-hub, and jax would erase Stations 4–6 of friction.
  Strongly consider shipping one once the workflow is settled.

ESCALATION
- Account/access/codespace-quota blockers eating lab time → Mallory Milstead, Andrew Norris.
  Use for true blockers, not ordinary iteration struggles.
==========================================================================================
```
