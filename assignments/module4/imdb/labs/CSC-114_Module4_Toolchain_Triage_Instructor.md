# CSC-114 Module 4 Toolchain Lab — Instructor Triage Guide
## "Help Them Fix It" — Station-by-Station

| Field | Value |
|-------|-------|
| Pairs with | *Module 4 Toolchain Lab (Student)* — same nine stations |
| Use it like | A walk-the-room field manual. Find the station the student is stuck at, scan the symptom column, apply the fix. |
| Posture | Toolchain friction is expected and is *not* a concept gap. Keep stakes low: "this is just the tool fighting you, not you failing." |

---

## 30-second triage (read this first)

Almost every Module 4 toolchain failure is one of five things. When a student waves you over, ask in this order:

1. **"Does the notebook show cells, or a wall of text?"** Wall of text → Station 4 (extension).
2. **"Is there a Python version in the top-right corner?"** No → Station 5 (kernel).
3. **"Did you run the cells from the top, in order?"** No → the universal fix below.
4. **"What did the red error actually say?"** Read it out loud; match it in the tables.
5. **"Did you change the backend after importing keras?"** Yes → Restart kernel.

**The universal fix, good for ~70% of "it's broken" reports:**
> `Kernel → Restart` then `Run All`, from the very top.
Out-of-order execution is the single most common notebook confusion. A variable defined in a cell they skipped, or an old value left in memory from an earlier attempt, produces errors that *look* like code problems but are really order problems. Teach the reflex: when confused, restart and run from the top.

---

## Station 1 — Getting the notebook out of GitHub

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| File opens as a web page / is named `*.html` | Used "Save Page As" instead of download-raw | Re-download with the **download-raw icon** on the file preview. The good file ends in `.ipynb`. |
| Downloaded file is tiny or full of `<html>` tags | Same as above | Same fix. Have them open the file in a text editor — if they see `<html>`, it's the wrong file. |
| Copy-pasted the notebook contents into a new file | Tried to recreate it by hand | Don't. Download the actual `.ipynb`. Hand-copied JSON almost always breaks. |
| Can't find the file in the repo | Browsing the wrong repo or branch | The file is `chapter04_classification-and-regression.ipynb` on the `master` branch of the companion repo. Code Builders can skip this entirely and use the `curl` command in Station 3. |

---

## Station 2 — Opening their repo in a Codespace

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| "Create codespace" is greyed out or errors | Codespace quota / org permissions | Check their account's free Codespaces hours; if exhausted, escalate (see bottom). One codespace per student is plenty — have them reuse, not spawn new ones. |
| Stuck on a long "Building codespace…" | First-time container build | Normal. Give it 1–3 minutes. If it hangs past ~5, reload the browser tab. |
| Opened a codespace but it's *not their repo* | Created from the wrong repo | Confirm the repo name in the top bar. Close it and create from their CSC-114 repo. We always work inside their own repo. |
| No terminal visible | Just hidden | `Terminal → New Terminal`. |

---

## Station 3 — `module4/` folder and getting the file in

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Folder is named `Module4`, `module 4`, `module-4` | Typo / spaces | Rename to exactly `module4`. Consistency matters for grading scripts and peer review. |
| Upload option missing | Right-clicked empty space, not the folder | Right-click the **`module4` folder name** → Upload. Or drag the file onto the folder in Explorer. |
| (Code Builder) `curl` produced an HTML file | Repo path/filename changed, or no `-L` | Verify the raw URL resolves in a browser first. Ensure `-L` (follow redirects) is present. Re-run inside `module4/`. |
| File uploaded to repo root, not `module4/` | Dropped on wrong target | Drag it into `module4/` in Explorer, or delete and re-upload onto the folder. |

---

## Station 4 — The "messy JSON" problem (extension)

This is the symptom the lab is named for. The notebook opens as raw `{"cells": [...]}`.

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Notebook shows raw JSON, no cells | Jupyter extension not installed/active | Extensions panel → install **Jupyter** (Microsoft) and **Python** (Microsoft) → close and reopen the file. |
| Installed extension, still JSON | File didn't reopen | Fully close the editor tab and reopen `chapter04_...ipynb`. A reload of the browser tab also forces it. |
| Cells render but no ▶ run buttons | Python extension missing | Install the Microsoft **Python** extension too; reload. |
| Extensions install then disappear next session | Codespace rebuilt without a devcontainer | This is the fast-moving-target flag — see the note at the bottom about shipping a `devcontainer.json`. |

> **Teaching beat:** This is a perfect 30-second "why tools matter" moment. The *exact same file* is gibberish or a working notebook depending entirely on one extension. The concept didn't change; the toolchain did.

---

## Station 5 — Kernel selection

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Top-right says "Select Kernel"; cells won't run | No kernel chosen | Click Select Kernel → Python Environments → pick Python 3.x. |
| "Select Kernel" shows no options | `ipykernel` missing / no Python found | Terminal: `python3 -m pip install ipykernel`, then Select Kernel again. |
| Cells run but each one is very slow to *start* | Kernel cold-starting each time | Normal on first cell; subsequent cells are fast. Not a bug. |

---

## Station 6 — Setup cells (install + backend)

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `ModuleNotFoundError: No module named 'jax'` | JAX not installed; backend set to jax | Edit the first install cell to `!pip install keras keras-hub jax --upgrade -q`, run it, then **Restart kernel** and run from top. |
| `ModuleNotFoundError: No module named 'keras'` | Install cell skipped or failed | Run the first cell. Watch it complete before moving on. |
| Backend "stuck" on the wrong one | `keras` imported before the env var was set | `Kernel → Restart`, ensure the `os.environ[...]="jax"` cell runs **before** any keras import, run from top. |
| `pip` warnings in yellow about dependencies | Resolver noise | Usually harmless. Only act if a later cell actually errors. Don't let yellow text spook them. |
| Install cell hangs forever | Network blip in the codespace | Interrupt, re-run. If persistent, reload the codespace. |

> **The backend rule, stated plainly:** the Keras backend is locked the first time `keras` is imported. Any backend change after that needs a kernel restart. When in doubt, restart and run from the top.

---

## Station 7 — Running IMDB and reading the curve

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Long pause on the data-load cell | First-time 80 MB IMDB download | Normal. Wait it out; it's cached after the first run. |
| `NameError: name 'x_train' is not defined` | Ran a model/fit cell before the data-prep cells | The universal fix: Restart + Run All from the top. Classic order problem. |
| `NameError: multi_hot_encode is not defined` | Skipped the cell starting `import numpy as np` (it defines the function) | Run that cell; or Restart + Run All. (See Notebook Surgery guide — this is the load-bearing cell.) |
| Plot doesn't appear | `matplotlib` cell not run, or output cleared | Run the plotting cell; ensure the import-matplotlib cell ran first. |
| "My turnaround epoch doesn't match the book's 4" | Different random initialization | **Not an error — this is correct and expected.** Their number (usually 3–6) from their own plot is the right answer. Reinforce: read your own evidence. |
| Two `fit` cells both present, confusing output | The book includes a `validation_data` version *and* a `validation_split` variant | They only need one. See Notebook Surgery — run one, not both. The second overwrites `history`. |

---

## Station 8 — Trimming to IMDB (surgery)

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| After cutting, `NameError` on a kept cell | Deleted a cell that defined a name a kept cell uses | Point them to the Notebook Surgery dependency-hunt method (Ctrl+F the missing name). Or undo and re-cut more carefully. |
| Cut works but they never verified | Skipped Restart + Run All | Make this non-negotiable: a trim isn't done until Restart + Run All passes from a fresh kernel. |
| Asked an AI to trim it and it broke | AI deleted a load-bearing cell or left a dangling reference | Good "catch the AI" moment: the verification step (Restart + Run All) is exactly how you catch the AI's mistake. Credit the catch. |
| Accidentally deleted the IMDB section too | Over-cut | Re-download a fresh copy (Station 1/3) and start the cut again. Cheap to redo. |

---

## Station 9 — Submission

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| (Prompt Master) Notebook not in repo | Ran in a downloaded copy, never uploaded | Upload the saved `.ipynb` into `module4/` via Explorer. |
| (Prompt Master) Screenshot missing or illegible | Forgot the graded artifact | Require a readable plot screenshot with the turnaround epoch labeled. |
| (Code Builder) Pushed straight to main | Skipped Sacred Flow | Coach the Issue → Branch → PR → Review → Merge loop. This is the workflow muscle Module 4 builds, not an afterthought. |
| (Code Builder) PR has no turnaround statement | Missed the description requirement | Ask for one sentence: the epoch + how they verified the trim. |

---

## Checkpoint answer key (quick reference)

| Station | "Worked" looks like |
|---------|---------------------|
| 1 | A `.ipynb` file (not `.html`) in hand or about to be pulled |
| 2 | Browser VS Code open on *their* repo, terminal available |
| 3 | `module4/chapter04_classification-and-regression.ipynb` present |
| 4 | Notebook renders as cells with ▶ buttons |
| 5 | A Python version shown top-right |
| 6 | Both setup cells run clean; no `jax`/`keras` import errors |
| 7 | IMDB trains; student names a turnaround epoch from their own plot; test acc high-80s |
| 8 | Trimmed to IMDB-only; passes Restart + Run All |
| 9 | Submitted via the correct track path |

---

## Fast-moving-target flags (re-verify each term)

- **Companion repo path / filename** can shift across editions and branches. Dry-run the raw URL before class.
- **Default Codespace image contents** (Python/Jupyter extensions, whether `jax` is preinstalled) change over time. If `jax` is already present, the Station 6 edit becomes optional but harmless.
- **GitHub's file-page UI** (download-raw icon placement) moves periodically — refresh any screenshots you hand out.
- **Edition note:** 3rd edition is Keras 3 + JAX backend, and the regression example is **California** housing, not Boston. No manual Boston exclusion needed anymore.
- **Strongly recommended:** ship a `devcontainer.json` in the class repo that preinstalls `ms-python.python`, `ms-toolsai.jupyter`, plus `keras keras-hub jax`. That single file deletes Stations 4–6 of friction for the whole class. Worth doing once the workflow is settled.

## Escalation

Account, access, or Codespaces-quota blockers that are eating lab time → **Mallory Milstead** and **Andrew Norris**. Use this for true blockers, not for ordinary iteration struggles — those are the lab working as intended.
