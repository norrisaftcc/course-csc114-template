# Sacred Flow Walkthrough

**Audience:** Code Builders (all weeks starting Week 2)
**Source:** Adapted from CSC-113 Module 01 Sacred Flow Lab, with Part 3 (the workflow itself) reframed for the textbook-week cadence rather than the SAGE project cadence.
**Note:** AI-assisted adaptation, reviewed for accuracy.

This is a more detailed reference than `for_code_builders_week_02.md`. Use this when you want to understand *why* each step exists, or when something in the flow breaks and you need to debug.

---

## The flow, in one sentence

`Plan in an Issue → branch off `main` → work and commit → open a PR with a retro → address review → merge.`

That's the whole loop. It happens every week. The artifact changes week to week — Week 2 it's a notebook, Week 5 it's a project proposal, Week 8 it's a final demo — but the workflow is identical.

## Why this workflow exists

Three reasons, in order of how often they matter:

### 1. `main` is the publication branch. It always works.

When someone (an instructor, a peer, a future employer) opens your repo and looks at `main`, they should see something that runs. Not a half-finished experiment, not a debugging session, not "this was working an hour ago." The protection on `main` enforces this — you literally cannot push directly to it.

The cost: a little ceremony. The benefit: your portfolio is always defensible.

### 2. Every piece of work has context.

The Issue records *what* you planned and *why*. The commits record *what changed and when.* The PR description records *what you actually did and what you learned.* Six months from now, looking at your own repo, you can reconstruct your thinking. That's gold.

Without the Issue, you have commits but no plan. Without the PR retro, you have code but no reflection. Without the branch, you can't separate the half-done from the done.

### 3. It's the industry standard.

GitHub Flow, the workflow this is based on, is what most software teams use. Open-source projects use it. Companies of all sizes use it. Some use slightly different variants (trunk-based development, GitFlow with develop and release branches), but the Issue-Branch-PR-Merge skeleton is universal.

When you interview for a software job — or any tech-adjacent job — and they ask "how do you work?", "Issue, branch, PR, merge, with descriptive commits in between" is the right answer. You'll be able to give it because you'll have done it 14 times in this course.

## Step 1: The Issue

### What goes in an Issue

The Issue is your **plan,** written down before you start. It has three sections:

```markdown
## What I'm doing
[1–3 sentences. What's the artifact at the end? What chapter or topic?]

## What success looks like
[Bullet list. What does "done" mean? What files exist? What passes?
This is your acceptance criteria.]

## Open questions
[Anything you don't yet know. This is honest project management — don't
fake confidence. "Not sure whether X or Y" is a valid bullet.]
```

### Why we open the Issue *before* starting

If you open the Issue after you've done the work, it's paperwork. If you open it before, it's planning. Planning forces you to think about what "done" looks like *before* you discover that you're not sure. That early discovery is the whole point.

Be honest in "Open questions." If you have no open questions, you're either doing a trivial task or you haven't thought hard enough.

### Issue title conventions

The format used throughout this course: `Week N: short topic`.

Examples:
- `Week 2: MNIST hello world`
- `Week 5: Project proposal`
- `Week 8: Final demo`

Don't get creative with titles. Predictability is the goal — instructors and reviewers can scan your Issues and immediately know what they're about.

## Step 2: The Branch

### Branch naming

The course convention: `week-N-{short-slug}`.

Examples:
- `week-2-mnist-baseline`
- `week-3-lr-sweep`
- `week-5-project-proposal`

Keep it short. Lowercase. Hyphens, not underscores. No spaces.

The branch name is visible in the commit graph and in PR titles. Long names get truncated. Cryptic names confuse future-you.

### How to create the branch

From the Issue page, GitHub shows a "Development" section in the right sidebar with a "Create a branch" link. Use that — it links the branch to the Issue automatically.

Rename the auto-suggested branch name to follow the convention. GitHub suggests `N-week-N-issue-title-words`; you want `week-N-short-slug`.

### Why we branch from `main`, every time

This guarantees your branch starts from the latest working code. If you branched from another feature branch, you might pull in unrelated half-done work. Always branch from `main`.

If you've been on the wrong branch and you want to switch:

```bash
git checkout main
git pull origin main
git checkout -b week-2-mnist-baseline
```

That ensures you're up-to-date and starting clean.

## Step 3: Doing the Work

### Commit messages

Every commit message should describe **what changed and why** in present tense, lowercase, no period at the end.

Good:
- `add mnist hello world notebook`
- `run baseline eval, accuracy 0.9803`
- `add confusion matrix and 5-example error analysis`
- `write up 4-9 confusion hypothesis`
- `fix typo in reflection`

Bad:
- `update` (update what?)
- `stuff` (what stuff?)
- `wip` (every commit is a WIP at some point — say what's in it)
- `Fixed the bug.` (which bug? present tense? no period?)
- `Added stuff to the notebook` (capitalized, no specifics)

### Commit cadence

Commit often. Not after every line — that's too much — but every time you finish a coherent chunk of work.

A good Week-2 cadence:

1. After the lab notebook runs end-to-end: commit (notebook, screenshot)
2. After the spike cells are added: commit (notebook updated)
3. After the write-up draft is done: commit (write_up.md)
4. After the reflection: commit (reflection.md, root README)

That's 4 commits over a few hours of work. The instructor should be able to scrub through them and see the work unfold.

### Push after each commit (or in small batches)

```bash
git commit -m "add mnist hello world notebook"
git push
```

Pushing makes your work visible on GitHub. It also means a power loss doesn't lose your work. Push often.

## Step 4: The Pull Request

### When to open the PR

Two valid approaches:

**Approach A — Open the PR when work is done.** Simpler. Cleaner. Most students should default to this.

**Approach B — Open a draft PR earlier.** GitHub lets you open a PR in "draft" state. The instructor can see your in-progress work and leave early feedback. Convert from draft to ready-for-review when you're done.

For Week 2, Approach A is recommended. By Week 5+ when the work is more open-ended, Approach B starts to make more sense.

### PR description template

Use this:

```markdown
Closes #N

## What's in this PR
[Bullet list of the artifacts. Mirrors the Issue's "What success looks like."]

## Retro (one paragraph)
[3–5 sentences. What did you learn? What surprised you? What would you do
differently? Be specific. The instructor reads this most carefully.]

## Reviewer questions
[Optional. Things you want feedback on. "Was there a better way to do X?"]
```

The `Closes #N` line, where N is your Issue number, is what tells GitHub to auto-close the Issue when the PR merges. Without it, you'll have a dangling Issue forever.

### The retro

The retro paragraph is **the deliverable that distinguishes "shipped" from "shipped with reflection."** Make it count.

Good retro elements:
- Something specific that surprised you
- A decision you made and why
- What you'd change about your approach next time
- A connection to something earlier in the course

Bad retro elements:
- "This was hard but I learned a lot" (generic)
- "I think AI is cool" (off-topic)
- Just listing what's in the PR (already in the bullets above)

## Step 5: Review

### What reviewers do

Reviewers (instructor, peers) look at your PR and may:

- **Approve** — the PR is ready, you can merge.
- **Request changes** — there's something to fix before merging.
- **Comment** — questions or observations, no specific ask.

### How to address comments

For each comment you get:

1. Read it carefully. Don't argue defensively — assume the reviewer is trying to help.
2. Make the change locally on the same branch.
3. Commit and push. The PR updates automatically.
4. Reply to the comment thread. Say what you did. "Done" or "Fixed in {commit-hash}" works.
5. After all comments are addressed, **re-request review.** Don't merge without re-approval if the reviewer requested changes.

### When the reviewer is wrong

It happens. If you disagree with a review comment, respond with your reasoning. The reviewer might:

- Agree with you and withdraw the comment.
- Explain their thinking further. (You might then agree.)
- Hold the line. (Then you defer — they're the reviewer, and even if they're wrong on the specifics, holding the line keeps the workflow functional.)

This is the same dynamic as in real code review. Argue substantively, defer respectfully, move on.

## Step 6: Merge

When the PR is approved:

1. On the PR page, click **Squash and merge** (most courses default to this; check with your instructor).
2. Confirm the merge.
3. The branch is auto-deleted.
4. The Issue auto-closes (if you used `Closes #N`).

The merge commit lands on `main`. `main` is now updated. You're done with the round.

### What "Squash and merge" does

It collapses all your branch commits into a single commit on `main`. Pros: clean `main` history. Cons: you lose the individual commit messages on the merged commit (they're preserved on the closed branch).

Most courses use squash-and-merge. If yours uses **Create a merge commit** or **Rebase and merge** instead, the artifact differs slightly but the workflow is identical.

## When the flow breaks

This is normal. Things go wrong. The course philosophy is "failure is just exercise" — when something breaks, you fix it, you learn, you move on.

Common breakages and recoveries:

| What broke | What to do |
|------------|------------|
| Committed to `main` accidentally | `git reset --hard origin/main` to undo. Re-do on a branch. (Note: only safe if you haven't pushed yet.) |
| Pushed to wrong branch | Open a PR to move the changes to the correct branch, then revert from the wrong one |
| Merge conflict | `git fetch origin && git rebase origin/main`, resolve conflicts, push with `--force-with-lease` |
| Accidentally deleted local branch | `git reflog` to find the commit, `git checkout -b branch-name <commit-hash>` to recreate |
| PR has files I didn't mean to commit | `git rm --cached unwanted-file` and add to `.gitignore`, then commit and push |
| Branch is way behind `main` | `git fetch origin && git merge origin/main` on your branch, resolve any conflicts, push |

When you hit something not on this list, ask the notebook chat or the instructor. **Don't force-push to `main`** under any circumstance — `main` is protected for a reason.

## The meta-point

Sacred Flow is repetition. The first time it takes 45 minutes of overhead. The fifteenth time it takes 5 minutes and feels like nothing. By Week 8 you'll do it without thinking. By your next job, you'll have done it 50 times across this course alone, plus whatever side work you did.

That's the goal. Not "you completed CSC-114." The goal is **"you have a body of work in `main` that you can show.** And you got there by doing the workflow that most software teams use, without being told to memorize it as theory.

Correct process. Creative code. Failure is just exercise.
