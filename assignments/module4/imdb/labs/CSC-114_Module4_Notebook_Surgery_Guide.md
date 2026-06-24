# CSC-114 Module 4 — Notebook Surgery
## How to Cut a Chollet Notebook Down to One Problem Without Breaking It

| Field | Value |
|-------|-------|
| Course | CSC-114 Artificial Intelligence I |
| Companion to | *Module 4 Toolchain Lab (Student)* — this is the deep-dive for Station 8 |
| The skill | Removing cells from a notebook so it does **one** thing cleanly, without deleting something the remaining cells secretly depend on |
| Why it's worth a whole guide | "Just delete the parts you don't need" sounds trivial. It isn't, because notebook cells share one memory and later cells lean on earlier ones. Cut wrong and you get errors that look like *code* bugs but are really *surgery* bugs. |

---

## The one idea you must hold in your head

A notebook is **not** a stack of independent snippets. It's a single program that happens to be chopped into runnable pieces. Every cell runs in the *same* shared memory. When a cell does `x_train = ...`, that name `x_train` stays alive for every cell below it.

So **cutting a cell can quietly break a cell far below it** — if the cell below uses a name the cut cell created.

Surgery, then, is two questions, asked over and over:
1. **Do I need this cell for the problem I'm keeping?**
2. **Does anything I'm keeping depend on a cell I'm about to cut?**

---

## The three jobs a cell can have

Before you cut anything, learn to read what a cell is *for*. Every code cell does one of three jobs:

| Job | What it does | Safe to cut? |
|-----|--------------|--------------|
| **Setup** | Installs packages, sets the backend, imports libraries | **No** — load-bearing. The whole notebook needs these. |
| **Define** | Creates a name later cells use: loads data, defines a function, builds the model, sets a variable | **Only if nothing below uses that name.** These are the dangerous ones. |
| **Inspect** | Just *looks* at something already created: `train_data[0]`, `x_train[0]`, a `.shape` printout | **Yes, almost always.** Cutting an inspect cell removes a peek, not a dependency. |

The trap is the **Define** cells. They look ordinary, but pulling one out can yank the rug from under a cell you meant to keep.

---

## The dependency-hunt method (do this before every risky cut)

Before you delete a **Define** cell, hunt for who depends on it:

1. Note the names the cell **creates** (the things on the left of `=`, the function names after `def`).
2. Press **Ctrl+F** (Cmd+F) in the notebook and search for each name.
3. If a name shows up in a cell you're **keeping**, you can't delete the cell that defines it — or you must move that definition into a cell you're keeping.
4. If a name only appears in cells you're **also cutting**, it's safe.

This takes ten seconds and saves ten minutes of confused debugging.

---

## Chapter 4, mapped: keep IMDB, cut the rest

The downloaded Chapter 4 notebook stacks **three** problems back to back:

```
[ Setup cells ]                  ← pip install, KERAS_BACKEND=jax, helper
### Classifying movie reviews    ← IMDB  (binary classification)   ← KEEP for Module 4
### Classifying newswires        ← Reuters (multiclass)            ← CUT
### Predicting house prices      ← California housing (regression) ← CUT
```

For Module 4 you want **IMDB only**. Here's the exact plan, described by what each cell *says* (cell positions shift as you delete, so we name cells by their headings and first lines, not by number).

### KEEP — the setup cells (top of the file)

| Cell (identify by its first line) | Job | Why keep |
|-----------------------------------|-----|----------|
| `!pip install keras keras-hub ...` | Setup | Installs Keras. (Add `jax` here — see the Toolchain Lab.) |
| `os.environ["KERAS_BACKEND"] = "jax"` | Setup | Locks the backend before Keras imports. |
| `# @title` (defines a `%%backend` helper) | Setup | Harmless helper; leave it. |

### KEEP — the entire IMDB section

Everything from the heading **"Classifying movie reviews: A binary classification example"** down through **"Using a trained model to generate predictions."** The load-bearing **Define** cells in this stretch:

| Cell (first line) | Creates | Used by |
|-------------------|---------|---------|
| `from keras.datasets import imdb` | `train_data, train_labels, test_data, test_labels` | the encoding cell, the labels cell |
| `import numpy as np` (defines `multi_hot_encode`) | `multi_hot_encode`, `x_train`, `x_test`, **and `np`** | the model/fit cells, every later `np.` call |
| `y_train = train_labels.astype("float32")` | `y_train`, `y_test` | the fit and evaluate cells |
| `import keras` (builds the `model`) | `keras`, `layers`, `model` | compile, fit |
| `model.compile(...)` | configures `model` | fit |
| `x_val = x_train[:10000]` | `x_val`, `partial_x_train`, `y_val`, `partial_y_train` | the training cell |
| `history = model.fit(... validation_data ...)` | `history` (the training run) | the plotting cells — **this is your graded curve** |
| `history_dict = history.history` | `history_dict` | the loss/accuracy plots |
| `import matplotlib.pyplot as plt` (loss plot) | `plt`, the loss figure | the accuracy plot cell reuses `plt` |
| `plt.clf()` (accuracy plot) | the accuracy figure | — |
| `model = keras.Sequential(...)` then `model.fit(..., epochs=4)` | retrains fresh, creates `results` | the `results` readout |
| `model.predict(x_test)` | predictions | — |

**Optional to keep (Inspect cells — peeks, not dependencies):** `train_data[0]`, `train_labels[0]`, the `max([max(sequence)...])` cell, the `word_index = imdb.get_word_index()` decode cell, `decoded_review[:100]`, `x_train[0]`. Cutting them is fine; keeping them is also fine. They make the notebook chattier, not broken.

### CUT — everything below IMDB

Select from the heading **"Classifying newswires: A multiclass classification example"** all the way to the **end of the file**, and delete it. That removes both the Reuters section and the California-housing section in one sweep.

---

## Two specific traps in this exact notebook

**Trap 1 — the two competing `fit` cells.** The IMDB section contains *two* training cells:
- one using `validation_data=(x_val, y_val)`
- one using `validation_split=0.2`

The book shows the second as an *alternative* to the first. Both assign to `history`, so if you run both, the **second silently overwrites the first.** For a clean Module 4 run, keep and run **one** of them — use the `validation_data` version, since the lab's curve-reading instructions assume an explicit validation set. You may delete the `validation_split` cell, or keep it but don't run it.

**Trap 2 — `multi_hot_encode` lives in the IMDB section.** The function `multi_hot_encode` is **defined inside the IMDB section** (in the `import numpy as np` cell) and is **reused later by the Reuters section.** For *your* surgery (keeping IMDB) this is no problem — the definition stays. But it's the perfect illustration of cross-section dependency: if you had instead wanted *Reuters-only*, deleting the IMDB section would have deleted the function Reuters needs, and you'd have to copy `multi_hot_encode` up into the Reuters part. Same lesson for the scattered imports: `np` comes from the IMDB section, so a Reuters-only cut would also lose `import numpy as np`.

The general rule both traps teach: **definitions don't respect the section headings you see. Names live wherever they were first created.**

---

## The golden rule: verify with Restart + Run All

A cut is **not finished** when the cells you wanted are gone. It's finished when you've **proven** nothing broke. The proof is one move:

> **`Kernel → Restart`, then `Run All`, from the very top.**

Restarting wipes memory clean, so there are no leftover variables from earlier runs hiding a broken dependency. Run All then executes your trimmed notebook exactly as a fresh reader (or grader) would. If it runs top to bottom with no red errors and still produces your IMDB curve, the surgery succeeded.

If it fails, the error names the missing piece. `NameError: 'multi_hot_encode' is not defined` literally tells you which Define cell you shouldn't have cut. Read the error, run the dependency hunt, restore or move the definition, and Restart + Run All again.

---

## If you ask an AI to do the cutting

You can ask an AI assistant to trim the notebook for you — that's a legitimate use. But notebook surgery is exactly the kind of task where an AI can *look* right and *be* wrong: it may delete a load-bearing Define cell, or leave a cell that references a name it just removed. The AI can't run your kernel, so it can't feel the break.

**You** are the verification step. Take whatever the AI produces and run the golden rule on it: Restart + Run All. If it passes, the AI helped. If it throws a `NameError`, you just caught the AI — note what it deleted and why that name mattered. That catch is worth more than a trim that happened to work.

---

## Surgery checklist

- [ ] I kept all the **setup** cells (install, backend, helper).
- [ ] I kept the **whole IMDB section**, including its load-bearing Define cells.
- [ ] I deleted from **"Classifying newswires"** to the **end of the file**.
- [ ] I kept and ran **one** training (`fit`) cell, not both.
- [ ] I ran the **dependency hunt** before any cut I wasn't sure about.
- [ ] I proved it with **Restart + Run All** from a fresh kernel.
- [ ] My trimmed notebook does exactly one thing: the IMDB problem, cleanly.

---

```text
=================== INSTRUCTOR APPENDIX (not for student distribution) ===================

WHAT THIS GUIDE IS REALLY TEACHING
- Mental model of a notebook as one shared-memory program, not independent snippets.
  This is the root cause of ~all "out of order" confusion and is reusable far beyond Ch4.
- Reading a cell's INTENT (setup / define / inspect) before editing it.
- Verification as a habit (Restart + Run All), which doubles as the catch-the-AI mechanism.

RUBRIC MAPPING (four-category)
- Problem-Solving Process — used the dependency hunt; verified with Restart + Run All;
  handled the two-fit-cells trap deliberately.
- Critical Thinking & Ethics — can explain WHY a cut broke something (named dependency),
  not just that it did; recognizes definitions ignore section headings.
- AI Partnership Quality — if an AI did the trim, the student verified rather than trusted,
  and can articulate what the AI got wrong (or confirm it was clean and how they know).
- Professional Communication — the resulting notebook is single-purpose and runs clean
  from the top; a grader can Run All without intervention.

KNOWN GOTCHAS / TEACHING BEATS
- multi_hot_encode defined in IMDB, reused in Reuters: the cleanest cross-section
  dependency example in the chapter. Use it on the board even if students only cut IMDB.
- Two fit cells (validation_data vs validation_split) both bind `history`; running both
  overwrites silently. Great "the bug produces no error, just wrong analysis" example.
- Scattered imports (np in IMDB, plt in the plot cell, keras in the model cell) mean a
  naive section cut can strand an import. Reinforces "names live where they're created."

FAST-MOVING-TARGET FLAGS
- Cell ordering/contents can change across editions/branches; this guide intentionally
  references cells by HEADING + FIRST LINE, not by number, so it survives minor reshuffles.
  Still, skim a freshly downloaded copy each term to confirm the IMDB section boundaries
  and the two-fit-cells situation persist.
- 3rd edition: Keras 3 + JAX backend; regression example is California housing (not Boston).

ESCALATION
- Persistent environment blockers (not surgery confusion) → Mallory Milstead, Andrew Norris.
==========================================================================================
```
