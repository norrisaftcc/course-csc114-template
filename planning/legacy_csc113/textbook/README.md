# Textbook for CSC-114

The CSC-114 textbook is held locally in this directory for instructor reference. The PDF and notebook archive files are **gitignored** — do not commit them. Acquire the textbook through Manning (link below) or your library.

## Citation

**Deep Learning with Python, Third Edition**

| Field | Value |
|-------|-------|
| Authors | François Chollet, Matthew Watson |
| Publisher | Manning Publications |
| Publication date | September 2025 |
| ISBN | 9781633436589 |
| Pages | 648 |
| Use in CSC-114 | Primary textbook for Modules 1–8 (after Module 0 onboarding) |

## Resources

- **Publisher page (purchase + livebook):** https://www.manning.com/books/deep-learning-with-python-third-edition
- **Notebook source (canonical, open source):** https://github.com/fchollet/deep-learning-with-python-notebooks/tree/third-edition
- **First chapter brief (free):** https://www.manning.com/preview/deep-learning-with-python-third-edition/chapter-1

## Why these files are local-only

The PDF (~43 MB) and the notebook archive (~7 MB) are large binary files that don't belong in git — they'd bloat every future clone of this repo and slow down operations. The PDF is also commercial content copyrighted by Manning; redistributing it is not permitted.

The notebook archive is a snapshot for offline convenience. The canonical source is the GitHub repo linked above. Prefer cloning that repo (or pulling new versions of it) over relying on the snapshot.

## Files in this directory

| File | Tracked? | Notes |
|------|----------|-------|
| `README.md` | yes | This file — naming, ISBN, sourcing. |
| `Deep_Learning_with_Python_Third_Edition.pdf` | no (gitignored) | Manning PDF; do not redistribute. |
| `deep-learning-with-python-notebooks-master.zip` | no (gitignored) | Notebooks snapshot; canonical is the GitHub link above. |

## For students

You need the textbook starting in Module 1. Options to acquire:

1. **Buy** through Manning (link above) — pBook + eBook bundle commonly runs ~$50–80.
2. **Manning subscription** ($20–25/month) — gives access to the eBook plus their full catalog.
3. **Library** — check FTCC's library or interlibrary loan; the 3rd edition may not be available yet, but the 2nd edition is acceptable for ~80% of the material.
4. **Notebooks only** (free) — clone the GitHub repo. You won't have the prose explanations but the code is the same.
