# CSC-114 Module 4 Toolchain Lab (California Housing) — Instructor Triage Guide
## "Help Them Fix It" — Station-by-Station

| Field | Value |
|-------|-------|
| Pairs with | *Module 4 Toolchain Lab (California Housing) — Student* — same nine stations |
| Use it like | A walk-the-room field manual. Find the student's station, scan the symptom column, apply the fix. |
| Posture | Toolchain friction is expected and is *not* a concept gap. "This is the tool fighting you, not you failing." |
| What's different from the IMDB version | Three new failure clusters: **stranded imports** after the middle cut (Station 8), **silent `verbose=0` cells** that look frozen (Station 7), and **scaling/MAE-in-dollars** confusion (Station 7). The first six stations match the IMDB lab. |

---

## 30-second triage (read this first)

Ask in this order:
1. **"Cells or a wall of text?"** Text → Station 4 (extension).
2. **"Python version in the top-right?"** No → Station 5 (kernel).
3. **"Did you run from the top, in order?"** No → universal fix below.
4. **"What did the red error actually say?"** Read it aloud; match it.
5. **"Is the cell actually frozen, or is it just `verbose=0`?"** → Station 7 (silent cells).

**The universal fix (~70% of "it's broken"):**
> `Kernel → Restart`, then `Run All`, from the top.
Out-of-order execution and leftover variables from earlier attempts cause errors that look like code bugs but are order bugs. Teach the reflex.

---

## Station 1 — Getting the notebook out of GitHub

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| File opens as a web page / named `*.html` | "Save Page As" instead of download-raw | Re-download with the **download-raw icon**. Good file ends in `.ipynb`. |
| File is full of `<html>` tags | Same | Same. Have them open it in a text editor — `<html>` = wrong file. |
| Hand-copied the contents into a new file | Tried to recreate it | Don't. Download the actual `.ipynb`; hand-copied JSON breaks. |
| Can't find the file | Wrong repo/branch | It's `chapter04_classification-and-regression.ipynb` on `master`. Code Builders skip this and use the `curl` in Station 3. |

---

## Station 2 — Opening their repo in a Codespace

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| "Create codespace" greyed/errors | Quota / org permissions | Check free Codespaces hours; if exhausted, escalate. Reuse one codespace, don't spawn new ones. |
| Stuck on "Building codespace…" | First-time build | Normal 1–3 min. Past ~5, reload the tab. |
| Opened the wrong repo | Created from wrong place | Confirm repo name in the top bar; recreate from their CSC-114 repo. |
| No terminal | Hidden | `Terminal → New Terminal`. |

---

## Station 3 — `module4/` folder and getting the file in

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Folder named `Module4` / `module 4` / `module-4` | Typo/spaces | Rename to exactly `module4`. |
| Upload option missing | Right-clicked empty space | Right-click the **folder name** → Upload, or drag onto the folder. |
| (Code Builder) `curl` made an HTML file | URL changed or no `-L` | Verify the raw URL in a browser; keep `-L`; re-run inside `module4/`. |
| File landed in repo root | Dropped on wrong target | Drag into `module4/`, or delete and re-upload onto the folder. |

---

## Station 4 — The "messy JSON" problem (extension)

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Raw JSON, no cells | Jupyter extension not active | Extensions → install **Jupyter** (Microsoft) + **Python** (Microsoft) → close and reopen the file. |
| Still JSON after install | File didn't reopen | Fully close the tab and reopen; or reload the browser tab. |
| Cells render but no ▶ buttons | Python extension missing | Install Microsoft **Python**; reload. |
| Extensions vanish next session | Codespace rebuilt without a devcontainer | See the devcontainer flag at the bottom. |

---

## Station 5 — Kernel selection

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| "Select Kernel"; cells won't run | No kernel chosen | Select Kernel → Python Environments → Python 3.x. |
| No kernel options appear | `ipykernel` missing | Terminal: `python3 -m pip install ipykernel`, then Select Kernel. |
| First cell slow to start | Cold start | Normal; later cells are fast. |

---

## Station 6 — Setup cells (install + backend)

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `ModuleNotFoundError: No module named 'jax'` | JAX not installed; backend is jax | Edit install cell to `!pip install keras keras-hub jax --upgrade -q`, run it, **Restart kernel**, run from top. |
| `No module named 'keras'` | Install cell skipped/failed | Run the first cell; watch it finish. |
| Backend stuck wrong | `keras` imported before the env var ran | Restart kernel; ensure `os.environ[...]="jax"` runs before any keras import; run from top. |
| Yellow pip dependency warnings | Resolver noise | Usually harmless. Act only if a later cell errors. |

---

## Station 7 — Running California Housing (the regression-specific cluster)

This station has the failures unique to this lab. Most are *not* errors — they're things that look wrong but are normal.

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **"The cell is frozen / spinning forever."** | `verbose=0` on the K-fold and final-fit cells — they print no per-epoch output. The 200-epoch × 4-fold cell takes a couple of minutes; the final-fit cell may show nothing at all. | **Not frozen — it's training silently.** Tell them to wait. The only sign of life in the K-fold cell is the four `Processing fold #` lines appearing slowly. Re-running just restarts the clock. |
| Student keeps re-clicking the K-fold cell | Mistook silence for a crash | Stop them; let the original run finish. Optional: have them temporarily set `verbose=1` to *see* it train, then set back to 0. |
| `NameError: name 'np' is not defined` | Ran a housing cell without the numpy import (common after an early cut, or out-of-order run) | Restart + Run All from the top. In the *full* notebook the import lives in the IMDB section above; if they've already cut, see Station 8 (re-add imports). |
| `NameError: name 'plt'/'keras'/'layers' is not defined` | Same root cause — those imports live in the IMDB section | Same fix. This is the recurring theme of this lab; name it for them. |
| Reports MAE "0.31" as the answer with no dollars | Missed the target scaling (÷100,000) | Point to the `y_train = train_targets / 100000` cell. Ask: "If targets were divided by 100,000, what does 0.31 mean in dollars?" (→ ~$31,000.) |
| Reports "$31" or "$310" | Mis-scaled | Same conversation. MAE × 100,000. 0.31 → $31,000. |
| "My turnaround epoch isn't exactly 120/140" | Different random init + K-fold averaging | **Correct and expected.** Their number (~110–150) from their own averaged plot is right. |
| Plot looks unreadable / huge first spike | They plotted the *full* MAE history, not the zoomed one | The early epochs dwarf the rest. Use the `truncated_mae_history` (zoomed) plot for reading the turnaround — that's why the book makes it. |
| Long pause on data load | First-time download | Normal; cached after. |

---

## Station 8 — Trimming to California Housing (the stranded-imports cluster)

This is the signature failure of the California cut. Because the housing section is at the **bottom** and the imports it uses are in the **middle** (IMDB section), cutting the middle strands them.

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| After cutting, `NameError: name 'np' is not defined` | Deleted the IMDB section, which contained `import numpy as np` | Add an imports cell near the top of the kept region: `import numpy as np` / `import keras` / `from keras import layers` / `import matplotlib.pyplot as plt`. Then Restart + Run All. (See Notebook Surgery — CA.) |
| `NameError` on `keras`, `layers`, or `plt` | Same root cause — all three imports lived in the IMDB section | Same single imports cell fixes all of them at once. |
| Cut works but never verified | Skipped Restart + Run All | Non-negotiable: a trim isn't done until Restart + Run All passes from a fresh kernel. |
| Asked an AI to trim and it broke | AI cut the middle but didn't re-add the borrowed imports | Excellent "catch the AI" moment — the stranded import is the exact thing the AI tends to miss because it can't run the kernel. Credit the catch. |
| Accidentally deleted the housing section too | Over-cut | Re-download a fresh copy and re-cut. Cheap to redo. |
| Kept `version="small"` confusion | Deleted/edited the load cell | Ensure the load cell still reads `california_housing.load_data(version="small")` — without `version="small"` they may get a different-size dataset. |

---

## Station 9 — Submission

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| (Prompt Master) Notebook not in repo | Ran a downloaded copy, never uploaded | Upload the saved `.ipynb` into `module4/`. |
| (Prompt Master) Screenshot missing/illegible, or no dollar figure | Forgot a graded artifact | Require: readable zoomed-MAE plot with turnaround labeled **and** the dollar error stated. |
| (Code Builder) Pushed straight to main | Skipped Sacred Flow | Coach Issue → Branch → PR → Review → Merge. |
| (Code Builder) PR missing turnaround/dollars | Missed description requirement | Ask for the epoch + the dollar error (with ×100,000 shown) + how they verified the trim. |

---

## Checkpoint answer key (quick reference)

| Station | "Worked" looks like |
|---------|---------------------|
| 1 | A `.ipynb` (not `.html`) in hand or about to be pulled |
| 2 | Browser VS Code on *their* repo, terminal available |
| 3 | `module4/chapter04_classification-and-regression.ipynb` present |
| 4 | Notebook renders as cells with ▶ buttons |
| 5 | A Python version shown top-right |
| 6 | Both setup cells run clean; no `jax`/`keras` import errors |
| 7 | Housing K-fold runs (waited out the silence); student names a turnaround epoch from their own zoomed MAE plot AND states average error in dollars |
| 8 | Trimmed to housing-only; re-added the borrowed imports; passes Restart + Run All |
| 9 | Submitted via the correct track path |

---

## Fast-moving-target flags (re-verify each term)

- **Companion repo path / filename** can shift across editions and branches. Dry-run the raw URL before class.
- **Default Codespace image contents** (Python/Jupyter extensions; whether `jax` is preinstalled) change over time. If `jax` is present, the Station 6 edit is optional but harmless.
- **GitHub's file-page UI** (download-raw icon placement) moves; refresh handout screenshots.
- **Edition note:** 3rd edition is Keras 3 + JAX backend; the regression dataset is **California** housing via `california_housing.load_data(version="small")` (480 train / 120 test, 8 features). Boston Housing is gone — no manual exclusion needed.
- **Strongly recommended:** ship a `devcontainer.json` in the class repo preinstalling `ms-python.python`, `ms-toolsai.jupyter`, plus `keras keras-hub jax`. Deletes Stations 4–6 of friction for the whole class.

## Teaching note specific to this lab

The stranded-imports break at Station 8 is the most valuable moment in the lab — don't rescue it too fast. Let students hit the `NameError`, then guide them to *reason* about why a section's imports vanished. It's the concrete proof of "definitions live where they're created, not where the headings suggest." If you've also run the IMDB lab, contrast: that cut was self-contained; this one isn't.

## Escalation

Account, access, or Codespaces-quota blockers eating lab time → **Mallory Milstead** and **Andrew Norris**. For true blockers, not ordinary iteration struggles.
