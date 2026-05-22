# Week 5 — ML fundamentals + the universal workflow

**Pilot week:** 5 of 8 (CSC-114 Summer 2026)
**Theme:** This is the pivot week. You stop being a student running tutorials and start being a practitioner defining your own problem. Everything before this was warm-up. Everything after this feeds the final project.
**Manning chapter(s):** Ch 5 (generalization, evaluation, overfit/underfit, regularization) + Ch 6 (universal workflow: task framing → metric → evaluation protocol → baseline → overfit-then-regularize). Reading is assigned — both chapters matter.

---

## What changes from Week 4

1. **Stakes tighten.** Weeks 1–4 were forgiving — you could mess up, retry, and learn from it. Week 5 is the **first milestone assessment**: a 1-page project proposal that carries real weight. The proposal isn't busy work — it's the scope document for Weeks 6–8.
2. **You choose your own dataset and problem.** No more MNIST. You pick a task, a dataset, a metric, and build a baseline. If you don't know what to pick, the crosswalk and Manning Ch 6 have guidance.
3. **The "universal workflow" frame replaces the "spike" frame.** Your weekly experiments still happen, but they now feed a multi-week project, not a standalone spike.

## Learning outcomes

By Friday, you can:

1. **Explain** the difference between overfitting and underfitting, and identify each on a training curve.
2. **Define** a train/validation/test split and explain why you need all three (not just two).
3. **Apply** Manning's universal workflow: frame the task → choose the metric → define the evaluation protocol → build a baseline → overfit then regularize.
4. **Write** a 1-page project proposal that a reviewer can evaluate for feasibility and scope.
5. **Build** a baseline model on a new dataset (not MNIST) that establishes a floor to beat.

## What you do this week

1. **[learn.md](learn.md)** — *Manning Ch 5 + Ch 6 framing.* Generalization, evaluation, and the universal workflow.
2. **[practice.md](practice.md)** — *Apply the universal workflow to a new small dataset.* Pick a metric, define an evaluation protocol, build a baseline. Retry-OK.
3. **[apply.md](apply.md)** — *Project "problem framing" spike.* Your dataset chosen, metric chosen, baseline built.
4. **[assess.md](assess.md)** — *The 1-page project proposal.* First tightened-stakes assessment.

## Two-track expectations this week

| Track | Submit by | Process artifacts |
|---|---|---|
| Code Builders | **Proposal as a PR.** Open an issue, write the proposal in `project/proposal.md` on a branch, open a PR for review. Address reviewer comments before merge. | Issue + branch + PR + address comments |
| Prompt Masters | Drop `project/proposal.md` into your repo. Optional reviewer comments. | None — just the proposal |

Both tracks earn identical points on the *proposal*. Code Builders earn **process credit** for the PR review cycle — and this time, "address reviewer comments" is part of the expectation, not just a nice-to-have.

## Before you start

- [ ] Manning Ch 5 + Ch 6 read. These are the most important chapters for the project arc.
- [ ] Your experiment logs from Weeks 2–4 are accessible — you'll reference them in the proposal.
- [ ] You have an idea (even vague) of what you want your project to be about. If not, read Manning Ch 6 §1 for inspiration and check the "project ideas" section in [apply.md](apply.md).

## Source material this week draws from

- **Primary student reading:** Manning Ch 5 + Ch 6. The companion notebooks are `chapter05_fundamentals-of-ml.ipynb` and `chapter06_the-universal-workflow-of-ml.ipynb`.
- **Practice slot adapted from:** `planning/csc_dash/CSC-114/activities/Module_03_Evaluation_Metrics_Lab.md` — the strongest csc_dash activity for this week's concepts. We adapt it from sklearn to Keras and from the csc_dash sprint framing to Manning's universal workflow.
- **Proposal rubric informed by:** `planning/csc_dash/CSC-114/assignments/Week_05_Assignment_Evaluation_Sprint.md` — we borrow the scaffolding (success criteria, evaluation structure) but replace the sprint ceremony with the 1-page proposal.
- **Rubric reference:** `planning/csc_dash/CSC-114/rubrics/assessment-rubrics.md`.
