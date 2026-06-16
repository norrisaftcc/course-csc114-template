# For Code Builders — Week 1

**Audience:** Code Builders track
**Bottom line:** Sacred Flow doesn't start until Week 2. Submit by drop this week, same as Prompt Masters. Use this file to preview what's coming.

---

## What's different for you in Week 1

Nothing this week, on purpose. Week 1 is universal-low-stakes. Both tracks submit the same nine files by dropping them into the repo. You don't open Issues for the agent versions, you don't make branches, you don't open PRs.

This is deliberate. The Sacred Flow workflow you'll learn next week works better when you already know what you're doing in the Console. We don't want you wrestling with branch names while you're also trying to write your first system prompt.

## What you should do this week to prepare for Sacred Flow

If you finish the Week 1 deliverables early and want to get ahead, here's what's worth doing:

1. **Install GitHub Desktop or set up the GitHub CLI.** Whichever you prefer. You'll use one of them every week starting Week 2.
2. **Read the `90_reused/github_org_onboarding_excerpt.md` source** in this notebook. Even though it's labeled for Prompt Masters, the join-the-org steps are the same for you.
3. **Look at the class organization's example repo** (link in Canvas) and notice the structure: a `main` branch, feature branches named like `week2-mnist-baseline`, PRs that close Issues.

You don't need to use this stuff in Week 1. Just see it so it's familiar when Week 2 arrives.

## What's coming in Week 2 (Sacred Flow preview)

Starting Week 2, your weekly submission flow looks like this:

1. **Open a GitHub Issue** for the week's work. Title format: `Week N: {topic}`. The Issue describes what you're going to build before you build it.
2. **Create a branch** off `main` named `week-N-{slug}`. Example: `week-2-keras-mnist`.
3. **Do the work** in that branch. Commit as you go. Commit messages describe what changed, not "stuff" or "updated."
4. **Open a Pull Request** from your branch to `main`. The PR description includes a one-paragraph retro: what you learned, what surprised you, what you'd do differently. PR closes the Issue.
5. **Reviewer comments** (instructor or peer) get addressed before merge.
6. **Merge to main** when the PR is approved.

You'll earn **process credit** on top of the artifact grade starting Week 2. Prompt Masters don't earn process credit because they're not doing the workflow. The points on the artifact are identical for both tracks.

## What "process credit" actually means

It's not a ton of points — about 10% of the weekly grade. But it adds up over the semester, and it means the difference between a course transcript that says "AI Fundamentals" and a GitHub profile that says "I shipped 8 PRs this summer with descriptive commits, peer review, and retros." Employers look at the second one.

If you decide partway through the semester that Sacred Flow isn't for you and you want to switch to Prompt Masters, that's fine. There's no penalty. The reverse switch (Prompt Masters → Code Builders mid-semester) is harder because you'll be behind on the workflow, but possible.

## One thing you can do that Prompt Masters can't

Your testing-log can be **incrementally committed** as you go. Every time you finish a test round, commit just the testing log changes with a message like `test: v2 results — refusal now passes`. Prompt Masters typically drop the final version of everything at the end.

The instructor uses the commit graph to see how the work unfolded. Steady-cadence commits across the week look very different from a single 11pm commit on the deadline. Both are allowed in Week 1; the steady one will look better starting Week 2 when Sacred Flow is active.

## When to ask for help

If you're confused about whether something is "the Code Builders way" of doing it, ask the notebook chat:

> "I'm a Code Builder in Week 1 — should I be using branches for this?"

The answer is "no, not yet" for Week 1 work. Starting Week 2, the answer changes. The notebook is configured to be track-aware once you identify your track.
