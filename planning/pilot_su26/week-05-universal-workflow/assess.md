# Assess — Project proposal (first tightened-stakes assessment)

**Slot:** Assess (graded; this is the milestone)
**Due:** End of Week 5, before Monday of Week 6.

---

## What you submit (both tracks)

### The proposal

File: `project/proposal.md` in your course repo (not inside `week-05/` — this lives at the project level because you'll reference it for the rest of the term).

Use the template from [apply.md](apply.md). All six sections filled in. Real numbers, real dataset, real baseline.

### Supporting notebook

File: `week-05/project_framing.ipynb` — your universal workflow notebook with the dataset loaded, explored, baseline built.

### Practice notebook (if not the same)

File: `week-05/universal_workflow.ipynb` — your Practice notebook, if it's different from the project framing notebook. If you used your project dataset for Practice, you only have one notebook and that's fine.

## How you submit — the two tracks

### Code Builders track — PR with review

This is the first week where **addressing reviewer comments is part of the expectation.** The PR is not just a formality.

1. **Open a GitHub Issue** titled `Project proposal: <your project title>`.
2. **Branch** off `main`: `week5-proposal`.
3. **Add** `project/proposal.md` and your notebook(s) in `week-05/`.
4. **Open a PR.**
5. **Request review** from your instructor (or assigned peer).
6. **Address comments.** If the reviewer says your metric isn't justified or your baseline is missing, *fix it and push again*. The PR shouldn't merge until the reviewer approves.
7. **Merge** when approved.

No separate retro this week — the PR conversation *is* the retro. The back-and-forth between you and the reviewer is the process artifact.

### Prompt Masters track — drop submission

1. Add `project/proposal.md` to your repo root and your notebook(s) to `week-05/`.
2. Push via GitHub Desktop or web upload.
3. Done.

Optional: if you want proposal feedback before Week 6, tag your instructor in a comment on the file. Not required.

## Grading

| Component | Weight | Both tracks |
|---|---|---|
| **Task definition** is clear — what, from what, classification/regression | 10% | ✓ |
| **Dataset** is real, loaded, and explored (not hypothetical) | 10% | ✓ |
| **Metric** is chosen *and justified* — not just "accuracy" | 15% | ✓ |
| **Evaluation protocol** is defined and reasonable | 10% | ✓ |
| **Baseline** is a real number from a real model | 15% | ✓ |
| **Risks** are honest and specific | 10% | ✓ |
| **Weeks 6–8 plan** is concrete enough to act on | 10% | ✓ |
| **Notebook** runs, outputs visible, universal workflow steps traceable | 15% | ✓ |
| Notebooks have explanation cells, not just code | 5% | ✓ |

**Code Builders also earn process credit:** complete PR cycle with reviewer comments addressed earns extra credit equivalent to one rubric line. A PR with no reviewer interaction doesn't count.

## What loses points (both tracks)

- Proposal is hypothetical — describes what you *would* do without actually doing it.
- Metric is "accuracy" on an imbalanced dataset with no discussion of alternatives.
- Baseline metric is missing, fabricated, or just random chance (you need to *beat* random chance).
- Risks section is empty or says "none."
- Weeks 6–8 plan is one vague sentence.
- (Code Builders) PR merged without any reviewer comments addressed.

## A note on scope

The proposal is a **1-page scope document**, not a research paper. Keep it tight. If your proposal is more than 2 pages, you're over-scoping — cut the parts that aren't essential for Weeks 6–8.

Conversely, if your proposal is 3 sentences, it's under-scoped. Every section should have real content.

## Heads up about Week 6

- Reading: Manning Ch 8 (image classification, augmentation, pretrained models, fine-tuning) + Ch 9 (architecture patterns).
- If your project is vision-based, Week 6 is where you apply transfer learning to your dataset.
- If your project is text or tabular, you'll do the transfer learning lab on a provided vision dataset and then apply what you learn to your own data in a different way.
- Sacred Flow continues for Code Builders.

## Where to go next

→ Week 6 — Vision track (transfer learning, architecture patterns).
