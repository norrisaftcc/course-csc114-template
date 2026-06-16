# Week 2 Deliverable

**Audience:** Both tracks (paths differ — see below)
**Due:** End of Week 2 (your section's specific deadline is in Canvas)
**Submission:**
- **Code Builders:** Open an Issue → branch → PR with the files. PR must be merged by the deadline.
- **Prompt Masters:** Drop files into the repo on `main`. No PR required.

---

## The files you submit

Both tracks submit the same five files. Submission *path* differs by track; the *artifacts* are identical.

| File | What it is | Track-specific notes |
|------|-----------|---------------------|
| `week-02/notebook.ipynb` | The MNIST training notebook with all cells run, including the error-analysis cells from the spike | Code Builders: typically run locally or in Codespace. Prompt Masters: run in Colab, then **File → Download .ipynb** |
| `week-02/write_up.md` | Your 400–600 word write-up: baseline, what gets wrong, examples, hypothesis, one change | Same for both tracks |
| `week-02/screenshot_training.png` | Screenshot of the training output showing loss going down across epochs | Same for both tracks |
| `week-02/reflection.md` | 4–6 sentences on what surprised you this week | Same for both tracks |
| `README.md` (root, updated) | Add a "## Week 2" section with one paragraph + a link to `week-02/` | Same for both tracks |

Files live in a `week-02/` subfolder so the repo stays organized as you add more weeks. The `README.md` lives at the root.

## What the assessment categories look at

Same four categories as Week 1, applied to Week 2's specific work:

**1. AI Partnership Quality.**
- Did you use the notebook chat or the Chollet text when you got stuck? Did it help?
- If you used Claude/Gemini/ChatGPT outside the course tools (allowed, but document it), did you note what you asked and what they answered?

**2. Problem-Solving Process.**
- Did you actually look at the confusion matrix and five misclassified examples?
- Does your hypothesis cite specific numbers and examples, not vague feelings?
- Did you name *one* thing to try next, with a reason?

**3. Professional Communication.**
- Is the write-up understandable to someone in the class who picked a different model architecture?
- Is the reflection specific to *your* week, not generic?
- For Code Builders: is the PR description a real retro, not a one-liner?

**4. Critical Thinking & Ethics.**
- Did you notice what the *baseline* accuracy means (and doesn't mean)?
- Did you avoid claiming the model is "smart" or "stupid" — and instead describe what it does?
- If you used outside AI help, did you disclose it?

## Process credit (Code Builders only, +10% of the weekly grade)

Process credit is earned through the Sacred Flow workflow. It's worth roughly 10% of the weekly grade and accumulates across the semester.

You earn process credit by doing these:

- [ ] Opened a GitHub Issue titled `Week 2: MNIST hello world` before starting the work
- [ ] Created a branch named `week-2-mnist-baseline` (or similar — `week-2-{short-slug}`)
- [ ] Made at least 3 commits to the branch with descriptive messages (not "stuff" or "update")
- [ ] Opened a Pull Request from your branch to `main`
- [ ] PR description includes a one-paragraph retro: what you learned, what surprised you, what you'd do differently
- [ ] PR closes the Issue (use "Closes #N" in the PR description)
- [ ] If the instructor leaves review comments, you addressed them before merging

You don't get partial process credit for sort-of doing the flow. You either did it cleanly or you didn't. Sacred Flow is a habit — habits are practiced as wholes.

Full walkthrough of the flow is in `for_code_builders_week_02.md` and `90_reused/sacred_flow_walkthrough.md`.

## What gets a re-do, what passes

Like Week 1, Week 2 is **complete / re-do**, not letter-graded. Two outcomes:

- **Complete.** All five files present, the notebook ran end-to-end, the write-up has real numbers and a specific hypothesis. You move on to Week 3.
- **Re-do.** Something's missing, the notebook errors out, or the write-up is generic. You get notes from the instructor and a window to fix it. No penalty.

Things that trigger a re-do:

- Notebook is missing or doesn't run when re-executed
- Screenshot is missing or doesn't show the training output
- Write-up has no actual numbers from your confusion matrix
- Hypothesis is too generic to be tested ("the model has trouble with hard digits")
- Reflection could be pasted into any week (generic statements about "learning a lot")
- For Code Builders: the work appeared in `main` directly without an Issue/branch/PR

Things that pass even though they look imperfect:

- Test accuracy lower than the class median (the *number* isn't graded; the *analysis* is)
- A hypothesis that turns out to be wrong (specific-and-wrong is fine; vague is not)
- A model that overfits visibly (you noticed and described it — even better)
- Sloppy code in the notebook (this is Week 2, not Week 8 — readability comes later)

## Where to be careful

A few common pitfalls worth naming:

**Don't skip the error analysis.** The lab gets you to a test accuracy number. That number alone isn't the spike. The confusion matrix and the five-example look are the spike.

**Don't paste the example hypothesis from the spike spec.** Your model's mistakes are *not* the same as the example. Look at your own data and write your own observation.

**Don't try to optimize accuracy.** This week isn't about getting to 99%. It's about understanding what 97% means. Spending 3 hours tweaking hyperparameters is time you could have spent on the write-up.

**For Code Builders: don't merge your own PR without checking it.** When you open the PR, read your diff. If it includes files you didn't mean to commit (stray `.ipynb_checkpoints`, OS junk like `.DS_Store`), clean them up before requesting review. This is real-world hygiene.

**For Prompt Masters: don't lose your Colab work.** Colab notebooks save to Google Drive by default. Before you close the tab, click **File → Download .ipynb** and put it in your repo. Then re-open the downloaded version once to confirm it's intact.

## When you're done

- [ ] All five files in the repo (Code Builders: merged to `main` via your PR. Prompt Masters: dropped into `main` directly).
- [ ] You can open the repo URL on your phone and see everything.
- [ ] You posted in the class Discussions channel saying "Week 2 done."

Same final step as Week 1. The instructor grades in finish order.
