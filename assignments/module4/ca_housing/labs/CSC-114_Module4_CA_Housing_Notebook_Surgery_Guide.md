# CSC-114 Module 4 — Notebook Surgery (California Housing)
## How to Cut the Chapter 4 Notebook Down to Just the Regression Example

| Field | Value |
|-------|-------|
| Course | CSC-114 Artificial Intelligence I |
| Companion to | *Module 4 Toolchain Lab (California Housing) — Student* — this is the deep-dive for Station 8 |
| The skill | Removing cells so the notebook does **one** thing cleanly — and re-supplying anything the kept cells were quietly borrowing from the cells you removed |
| Why this cut is the instructive one | The IMDB example sits at the *top* of the notebook and is self-contained. The California example sits at the *bottom* and **borrows its imports from the IMDB section above it.** Cutting the middle exposes that hidden dependency. Learning to find and fix it is the whole point. |

---

## The one idea you must hold in your head

A notebook is **not** a stack of independent snippets. It's one program chopped into runnable pieces, all sharing the same memory. When a cell runs `import numpy as np`, the name `np` is alive for every cell **below** it — even cells in a totally different "section" with a different heading.

So a heading like `### Predicting house prices` does **not** mean that section is self-contained. It may be leaning on imports and functions defined paragraphs earlier, under a different heading.

Surgery is two questions, asked over and over:
1. **Do I need this cell for the problem I'm keeping?**
2. **Does anything I'm keeping secretly depend on a cell I'm about to cut?**

For the California cut, the answer to question 2 is **yes** — and that's what makes it worth practicing.

---

## The three jobs a cell can have

| Job | What it does | Safe to cut? |
|-----|--------------|--------------|
| **Setup** | Installs packages, sets the backend, **imports libraries** | **No** — load-bearing for the whole notebook. |
| **Define** | Creates a name later cells use: loads data, defines a function, builds a variable | **Only if nothing below uses that name.** The dangerous ones. |
| **Inspect** | Just *looks* at something already made: `train_data.shape`, `train_targets`, a `round(...)` printout | **Yes, almost always.** Removes a peek, not a dependency. |

---

## The shape of this cut: keep the ends, remove the middle

The downloaded Chapter 4 notebook stacks three problems in order:

```
[ Setup cells: pip install, KERAS_BACKEND=jax, helper ]   ← KEEP (top)
### Classifying movie reviews  (IMDB, binary)             ← CUT
### Classifying newswires      (Reuters, multiclass)      ← CUT
### Predicting house prices    (California, regression)   ← KEEP (bottom)  ← ours
```

You keep the **top** and the **bottom** and delete the **middle**. Simple to picture — but the imports the housing section needs are *in that middle*. So this cut has an extra step the IMDB cut never needed: **re-adding the borrowed imports.**

---

## What the housing section borrows (the stranded imports)

The California Housing section uses these names but **never imports them itself** — they were all set up in the IMDB section you're about to delete:

| Borrowed name | Where it's defined (in the part you're cutting) | Where the housing section uses it |
|---------------|-----------------------------------------------|-----------------------------------|
| `np` (numpy) | IMDB cell beginning `import numpy as np` | the K-fold cells (`np.concatenate`), the averaging cells (`np.mean`) |
| `keras`, `layers` | IMDB cell beginning `import keras` | `get_model()` (`keras.Sequential`, `layers.Dense`) |
| `plt` (matplotlib) | IMDB cell beginning `import matplotlib.pyplot as plt` | the validation-MAE plot cells |

**The fix:** add ONE new cell right after the setup cells (or at the very top of the kept housing region) that re-supplies all of them:

```python
import numpy as np
import keras
from keras import layers
import matplotlib.pyplot as plt
```

That single cell replaces everything the deleted middle was providing. (The notebook also has setup cells at the very top — `pip install`, `os.environ["KERAS_BACKEND"]="jax"`, and a small helper — keep those too; they're separate from these library imports.)

---

## Chapter 4, mapped: keep California Housing, cut the rest

Cells shift position as you delete, so we name them by their **heading and first line**, not by number.

### KEEP — the setup cells (top of the file)

| Cell (first line) | Job |
|-------------------|-----|
| `!pip install keras keras-hub ...` | Setup (add `jax` — see the Toolchain Lab) |
| `os.environ["KERAS_BACKEND"] = "jax"` | Setup — locks the backend before Keras imports |
| `# @title` (defines a `%%backend` helper) | Setup — harmless helper, leave it |

### ADD — one new imports cell (because the originals are in the part you're deleting)

```python
import numpy as np
import keras
from keras import layers
import matplotlib.pyplot as plt
```

### CUT — the IMDB and Reuters sections (the middle)

Select from the heading **"Classifying movie reviews: A binary classification example"** down to (but **not** including) the heading **"Predicting house prices: A regression example,"** and delete all of it. That removes both classification examples in one sweep — and, yes, the imports they contained, which is why you added the cell above.

### KEEP — the entire California Housing section

Everything from **"Predicting house prices: A regression example"** to the **end of the file**. The load-bearing **Define** cells in this stretch:

| Cell (first line) | Creates | Used by |
|-------------------|---------|---------|
| `from keras.datasets import california_housing` | `train_data, train_targets, test_data, test_targets` | normalization, target-scaling cells |
| `mean = train_data.mean(axis=0)` | `mean, std, x_train, x_test` | every model fit/evaluate |
| `y_train = train_targets / 100000` | `y_train, y_test` (the **scaled** targets) | every fit/evaluate; the dollar interpretation |
| `def get_model():` | `get_model` (uses `keras`, `layers`) | both K-fold loops, the final fit |
| `k = 4 ... num_epochs = 200 ... all_mae_histories` | `all_mae_histories`, `history` (uses `np`) | the averaging cell |
| `average_mae_history = [...]` | `average_mae_history` (uses `np`) | the plot cells |
| `truncated_mae_history = average_mae_history[10:]` | the **zoomed validation-MAE plot** (uses `plt`) | **this is your graded curve** |
| `model = get_model() ... epochs=130 ... evaluate` | `test_mean_absolute_error`, `test_mean_squared_error` | the dollar readout |
| `predictions = model.predict(x_test)` | predictions (scaled — ×100,000 for dollars) | — |

**Optional to keep (Inspect cells — peeks, not dependencies):** `train_data.shape`, `test_data.shape`, `train_targets`, the *first* K-fold cell (`num_epochs = 50`, builds `all_scores`) and its two `round(...)` readouts, the un-zoomed MAE plot, `round(test_mean_absolute_error, 3)`. Cutting these is fine; keeping them is fine.

> **About the two K-fold cells:** unlike the IMDB example (which had two *competing* training cells), the housing section's two K-fold cells do **different** jobs and don't overwrite each other. The 50-epoch one builds `all_scores` to *demonstrate fold-to-fold variance* (its whole point is showing the scores differ — 0.23 to 0.35 — so the average is the trustworthy number). The 200-epoch one builds `all_mae_histories`, which feeds your graded plot. Keep at least the 200-epoch one. The 50-epoch one is instructive but optional; note it runs for ~a minute on its own.

---

## Two things specific to this section

**The silent cells.** The K-fold cells and the final-fit cell use `verbose=0`, so they print little or nothing while running for a couple of minutes. They are **not** frozen. Don't re-run them out of impatience — that just restarts the clock. (If you want to *see* training, temporarily change `verbose=0` to `verbose=1`, then change it back.)

**The scaling is load-bearing for your answer, not just the model.** The cell `y_train = train_targets / 100000` means every error number is in units of $100,000. Keep that cell, and remember it when you read results: an MAE of `0.31` is **$31,000**, and a prediction of `2.83` is **~$283,000**. Delete or alter that cell and your dollar interpretation silently becomes wrong — with no error message to warn you.

---

## The golden rule: verify with Restart + Run All

A cut is **not finished** when the cells you wanted are gone. It's finished when you've **proven** nothing broke:

> **`Kernel → Restart`, then `Run All`, from the very top.**

Restarting wipes memory clean, so no leftover variable from an earlier run can hide a broken dependency. If your trimmed notebook runs top to bottom with no red errors and still produces your housing MAE curve, the surgery succeeded.

If it fails, the error names the missing piece. `NameError: name 'np' is not defined` is the notebook telling you the imports cell is missing or below where it's needed. Add it, put it high, Restart + Run All again.

---

## If you ask an AI to do the cutting

You can ask an AI to trim the notebook — that's fair use. But this cut is *exactly* where AIs slip: an assistant will happily delete the IMDB and Reuters sections and hand you a "clean" housing notebook that is missing `import numpy as np`, because it can't run the kernel and feel the break. It looks right; it isn't.

**You** are the verification step. Run the golden rule on whatever the AI produces: Restart + Run All. If it throws `NameError: name 'np' is not defined`, you just caught the AI — it cut the middle without re-supplying the borrowed imports. Add the imports cell and re-verify. That catch is worth more than a trim that happened to work.

---

## Surgery checklist

- [ ] I kept all the **setup** cells (install, backend, helper).
- [ ] I **added the imports cell** (`numpy`, `keras`/`layers`, `matplotlib`) the housing section borrows.
- [ ] I deleted the **middle**: from "Classifying movie reviews" up to (not including) "Predicting house prices."
- [ ] I kept the **whole California Housing section**, including its load-bearing Define cells.
- [ ] I kept the **target-scaling** cell (`/ 100000`) so my dollar numbers stay correct.
- [ ] I waited out the **silent `verbose=0`** cells instead of re-running them.
- [ ] I proved it with **Restart + Run All** from a fresh kernel.
- [ ] My trimmed notebook does exactly one thing: the California Housing regression, cleanly.

---

```text
=================== INSTRUCTOR APPENDIX (not for student distribution) ===================

WHY THIS GUIDE EXISTS / WHAT IT TEACHES
- The single best concrete demonstration in Chapter 4 of "definitions don't respect section
  headings." The housing section borrows numpy, keras/layers, and matplotlib from the IMDB
  section. A middle-cut strands all three. Students must reason about the break and fix it.
- Contrast with the IMDB-only cut, which is a self-contained bottom-cut. If you run both labs,
  put them side by side: same notebook, very different surgery, because of WHERE the imports live.

THE EXACT STRANDED IMPORTS (for fast triage)
- np      -> from the IMDB cell `import numpy as np`        -> used by K-fold (np.concatenate), averaging (np.mean)
- keras, layers -> from the IMDB cell `import keras`        -> used by get_model()
- plt     -> from the IMDB cell `import matplotlib.pyplot as plt` -> used by the MAE plot cells
- Fix = one added cell:
    import numpy as np
    import keras
    from keras import layers
    import matplotlib.pyplot as plt

GRADED ANCHORS (regression-specific)
- Turnaround epoch from the zoomed averaged validation-MAE plot (book ~120–140, incl. the 10
  omitted points); accept the student's own (~110–150) read from their own plot.
- Dollar translation: final test MAE (~0.31 in the book) × 100,000 = ~$31,000 average error.
  Requires understanding the `/ 100000` target scaling. Mis-scaling ("$31", "0.31 dollars") is a
  quick comprehension flag. This is the catch-the-AI anchor: the dollar figure can't be copied
  without the scaling reasoning.

KNOWN GOTCHAS / TEACHING BEATS
- verbose=0 on the K-fold (200-epoch × 4-fold) and final-fit (130-epoch) cells: minutes of near-
  silence, NOT a crash. Warn students; the only output in K-fold is the four "Processing fold #"
  lines. The final-fit cell shows nothing. Re-running just restarts the clock.
- Two K-fold cells are NOT competing (unlike IMDB's two fit cells). The 50-epoch one builds
  all_scores to demonstrate variance; the 200-epoch one builds all_mae_histories for the plot.
  Different variables, sequential, both legitimate. The 50-epoch one is optional.
- The zoomed plot (truncated_mae_history) exists because the first ~10 epochs dwarf the rest;
  students who read the full plot will struggle to see the turnaround. Steer them to the zoomed one.
- Keep version="small" in the load cell (480 train / 120 test). Dropping it changes dataset size.

RUBRIC MAPPING (four-category)
- Problem-Solving Process — added the imports cell; verified with Restart + Run All; waited out
  verbose=0 cells.
- Critical Thinking & Ethics — can explain WHY the cut stranded imports (cross-section
  dependency); understood target scaling well enough to report dollars; knows why K-fold (tiny data).
- AI Partnership Quality — if AI did the trim, student caught/verified the stranded-imports break.
- Professional Communication — single-purpose notebook that Runs All clean; dollar figure stated
  with the scaling shown.

FAST-MOVING-TARGET FLAGS
- Cell ordering/contents can change across editions/branches; this guide references cells by
  HEADING + FIRST LINE so it survives minor reshuffles. Skim a fresh download each term to confirm
  the section boundaries, the verbose=0 flags, and that the imports still live in the IMDB section.
- 3rd edition: Keras 3 + JAX backend; regression dataset is California housing,
  california_housing.load_data(version="small").

ESCALATION
- Persistent environment blockers (not surgery confusion) → Mallory Milstead, Andrew Norris.
==========================================================================================
```
