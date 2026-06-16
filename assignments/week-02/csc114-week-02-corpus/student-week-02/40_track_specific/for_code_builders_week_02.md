# For Code Builders — Week 2

**Audience:** Code Builders track
**Bottom line:** Sacred Flow activates this week. Every deliverable from now on goes through Issue → Branch → PR → Review → Merge. This file walks you through the first round end-to-end.

---

## What changed since Week 1

In Week 1 both tracks dropped files into `main` directly. That's done. Starting this week:

- Every piece of weekly work begins with a **GitHub Issue.**
- All your work happens on a **branch**, not on `main`.
- You submit by opening a **Pull Request** (PR) from your branch back to `main`.
- The PR has a description that includes a **one-paragraph retro.**
- The instructor (or a peer) reviews the PR and may leave comments before merging.
- After merge, the branch is deleted automatically.

The branch protection on `main` is now turned on. If you try to push to `main` directly, GitHub will reject it. That's a feature.

## Why we're doing this

Sacred Flow is not arbitrary process overhead. It's the same workflow most software teams use, and it's the workflow employers will ask about. Three things it gives you:

1. **A record of how you thought.** The Issue says what you planned. The commits say what you did. The PR retro says what you learned. Six months from now you can read your own PR and remember.
2. **A safety net.** `main` always works. If your branch breaks, who cares — it's your branch, you can throw it away. You can't break your portfolio.
3. **Reviewable surface.** When the instructor reviews your PR, they're looking at one thing at a time, with a clear diff. That's how code review works in industry.

You'll earn **process credit** (~10% of the weekly grade) for following the flow cleanly. It accumulates across the semester. By Week 8 it's a real chunk of your grade. By next employer, it's a real chunk of how they evaluate the work.

## The flow in one diagram

```
┌─────────────┐       ┌─────────────┐       ┌──────────────┐
│  1. Issue   │───►   │ 2. Branch   │───►   │ 3. Do work   │
│  (plan)     │       │ (workspace) │       │  (commit)    │
└─────────────┘       └─────────────┘       └──────────────┘
                                                    │
                                                    ▼
┌─────────────┐       ┌─────────────┐       ┌──────────────┐
│  6. Merge   │◄───   │ 5. Address  │◄───   │ 4. Open PR   │
│  (ship)     │       │ comments    │       │ (request     │
│             │       │             │       │  review)     │
└─────────────┘       └─────────────┘       └──────────────┘
```

Six steps. The first time it's clunky. By Week 4 it's muscle memory.

## Walking through it for Week 2

### Step 1: Open the Issue (do this before you start working)

1. In your repo, click **Issues → New Issue.**
2. **Title:** `Week 2: MNIST hello world`. Use exactly this format every week — `Week N: short topic`.
3. **Body:** Write 3 short sections:

```markdown
## What I'm doing
Building the Keras MNIST hello world from Chollet Ch 2 companion notebook,
plus the baseline + error analysis spike.

## What success looks like
- Notebook runs end-to-end with test accuracy reported
- Confusion matrix and 5 misclassified examples in the notebook
- write_up.md with hypothesis + one proposed change
- Reflection added

## Open questions
[Anything you don't know yet. E.g., "Not sure whether to run locally or in
Colab — depends on whether my TF install works."]
```

The "Open questions" section is honest project management. Don't fake confidence.

4. Click **Submit new issue.** Note the issue number (e.g., `#2`).

### Step 2: Create the branch

From the Issue page, there's a **"Create a branch"** link in the right sidebar (under "Development"). Click it.

- **Branch name:** GitHub will suggest something like `2-week-2-mnist-hello-world`. **Replace with `week-2-mnist-baseline`** (shorter, more readable).
- **Branch source:** `main`.
- Click **Create branch.**

Now check it out locally (or in your Codespace):

```bash
git fetch origin
git checkout week-2-mnist-baseline
```

If you're using GitHub Desktop: it'll prompt you to switch branches once it sees the new one.

### Step 3: Do the work, committing as you go

This is the part that's hardest to internalize. **Commit often.** Don't wait until everything is done.

A good commit cadence for Week 2:

```bash
# After the lab works
git add week-02/notebook.ipynb week-02/screenshot_training.png
git commit -m "add mnist hello world notebook and screenshot"
git push

# After the spike cells
git add week-02/notebook.ipynb
git commit -m "add confusion matrix and 5-example error analysis"
git push

# After the write-up
git add week-02/write_up.md
git commit -m "write up baseline (0.9803) + 4-9 confusion hypothesis"
git push

# After the reflection and README update
git add week-02/reflection.md README.md
git commit -m "add reflection and update root README for week 2"
git push
```

Notice the commit messages. They describe what changed *and why*, in present tense, lowercase, no period at the end. This is the convention this course uses; it matches most professional repos.

Bad commit messages: `update`, `stuff`, `wip`, `fix`, `asdf`. Avoid these.

### Step 4: Open the Pull Request

When the work is done (or close to done — you can open a draft PR earlier if you want feedback):

1. Go to your repo. There's usually a yellow banner saying "Compare & pull request" — click it. If there isn't, go to **Pull requests → New pull request**.
2. **Base:** `main`. **Compare:** `week-2-mnist-baseline`. The diff should show only the files you added.
3. **Title:** Same as your Issue title — `Week 2: MNIST hello world`.
4. **Description:** This is where the retro lives. Use this template:

```markdown
Closes #2

## What's in this PR
- MNIST training notebook (lab + spike)
- Training output screenshot
- Write-up with baseline and 4-9 confusion hypothesis
- Reflection
- Root README updated with Week 2 section

## Retro (one paragraph)
[3–5 sentences. What did you learn? What surprised you? What would you do
differently next time? Be specific. This is the part the instructor reads
most carefully.]

## Reviewer questions
[Optional — anything you want feedback on specifically. E.g., "I went with
2 Dense layers — was there a clearer reason to add a third one I'm missing?"]
```

The `Closes #2` line at the top is important. When the PR merges, it auto-closes the Issue. Use the actual Issue number for your week.

5. Click **Create pull request.** The instructor (and possibly a peer) will get a notification.

### Step 5: Address review comments

The instructor reads the PR, may leave inline comments on specific lines, and either approves the PR or requests changes.

If they request changes:

- Read each comment.
- Make the changes locally (or in Codespaces) on the same branch.
- Commit. Push.
- The PR updates automatically. Reply to the comments saying "done" or explaining what you did.
- Re-request review.

If they approve: you can merge.

### Step 6: Merge

On the PR page, click **Squash and merge** (or **Merge pull request**, depending on what your instructor configures).

- A merge commit goes onto `main`.
- The Issue you referenced (`Closes #2`) auto-closes.
- The branch gets deleted automatically (the org has this enabled).
- Your repo's `main` now reflects the latest work.

That's the round complete. Process credit earned.

## What process credit looks like in practice

You earn the credit by doing the flow *cleanly*. Specifically:

- [ ] Issue opened **before** you started working (not after)
- [ ] Branch name follows `week-N-{short-slug}` format
- [ ] At least 3 commits with descriptive messages
- [ ] PR description includes a real retro (3+ sentences, specific)
- [ ] PR uses `Closes #N` to link to the Issue
- [ ] If reviewer left comments, you addressed them before merging

You don't get half-credit for "almost following the flow." The point of the discipline is the discipline. If the instructor sees a giant single commit with the message "did week 2" landed via a PR opened the same hour as the merge, that's not the flow — that's after-the-fact paperwork.

## Common things that go wrong

| Symptom | Cause | Fix |
|---------|-------|-----|
| Can't push to `main` | Branch protection on (this is expected) | You should be on a feature branch — check `git branch --show-current` |
| Branch name auto-generated by GitHub | Used "Create a branch" link without renaming | Rename via `git branch -m old-name week-2-mnist-baseline` and push |
| Forgot to open Issue before starting | Started working on `main` | Make the Issue now, create the branch, `git stash` your work, switch to the branch, `git stash pop` |
| Notebook is huge in the diff | `.ipynb` files include outputs | Strip outputs before committing (`jupyter nbconvert --clear-output`) or accept it — for Week 2 it's fine |
| PR shows extra files I didn't mean to commit | Accidentally added `.DS_Store`, `.ipynb_checkpoints/`, etc. | `git rm --cached file_name` and add the path to `.gitignore` |
| "Closes #N" didn't auto-close the Issue | Used wrong syntax | Has to be in the PR description (not a comment) and spelled `Closes #N` or `Fixes #N` |

## A note on Codespaces

If you don't have a working Python/TensorFlow setup locally, GitHub Codespaces is the cleanest option. From your repo:

1. Click the green **Code** button.
2. Choose the **Codespaces** tab.
3. Click **Create codespace on `week-2-mnist-baseline`**.
4. You get a VS Code in the browser, pre-loaded with the branch.
5. In the terminal: `pip install tensorflow matplotlib scikit-learn` (the Codespace template has Python but may not have TF).

Free tier: 120 hours per month. More than enough for this course.

If you're using Codespaces, commits/push work the same way as locally. The flow doesn't change.

## When you're done with the round

- [ ] PR is merged to `main`.
- [ ] Issue is closed (should happen automatically via `Closes #N`).
- [ ] Branch is deleted (should happen automatically).
- [ ] You can see the merge commit on `main` when you visit the repo.
- [ ] You posted in Discussions: "Week 2 done."

The first time, this whole flow takes 30–45 minutes of overhead beyond the actual work. By Week 4 it'll feel like 5 minutes. By Week 8 you'll wonder how you ever shipped code without it.
