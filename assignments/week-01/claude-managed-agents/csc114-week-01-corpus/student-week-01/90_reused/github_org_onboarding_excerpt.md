# GitHub Organization Onboarding

**Audience:** Both tracks (especially helpful for people new to GitHub)
**Source:** Adapted from CSC-113 Module 01 Sacred Flow Lab, steps 1–3 only. The rest of that lab covers Issue/Branch/PR workflow which doesn't start until Week 2.
**Note:** AI-assisted adaptation, reviewed for accuracy.

---

## What you're doing

Three things, in order:

1. Make sure your GitHub account is ready.
2. Get invited to the class organization.
3. Verify you can see your assigned repo.

That's all of Week 1's GitHub work. The branch/PR/review stuff starts in Week 2 (and only for Code Builders).

---

## Step 1: Set up your GitHub account

If you already have an account you've used before — even just to look at someone's repo — you can use that one. You don't need a fresh account for this class.

If you've never used GitHub:

1. Go to `github.com` and click **Sign up**.
2. Use a **professional-looking username.** This shows up on your work for years. `jane-doe`, `jdoe-dev`, or `jdoe-cs` is fine. `xX_dragonslayer_69_Xx` is going to look strange when you apply for a job in three years. The username can't be changed easily later, so pick well.
3. Use an email address you actually check. GitHub will send a verification link.
4. Confirm your email.

While you're there, check two settings:

- **Profile photo.** Optional, but a real photo or a recognizable avatar helps. Default cat icon is fine if you'd rather skip this.
- **Public name.** In Settings → Profile, fill in your name. This is separate from your username. It's what shows on commits and PRs.

## Step 2: Send your GitHub username to the instructor

The instructor will ask for your GitHub username through the channel listed in the syllabus — usually a Canvas inbox message or a form. Send it.

What they need:

- Your GitHub username (just the username, not the profile URL is fine but the URL works too)
- Your preferred display name (in case it's different from how you're listed in Canvas)
- Your track (Code Builders or Prompt Masters) if you've decided. If you haven't, just say so.

The instructor adds you to the class GitHub organization. This takes anywhere from a few minutes to a day depending on when they get to it.

## Step 3: Accept the organization invitation

Once you're added, GitHub emails you. The email looks like:

> **You have been invited to join the {Class Org Name} organization**
> *From: noreply@github.com*

Open the email. Click the **Join {org name}** button. This opens GitHub in your browser and asks you to confirm. Click **Accept invitation**.

**If you don't see the email after 24 hours:**

1. Check your spam folder. GitHub emails sometimes land there.
2. Check the email account you used for your GitHub signup (not your Canvas email, unless they're the same).
3. Message the instructor. Sometimes the invitation needs to be resent.

You can also check whether you have a pending invitation by going to `github.com/notifications` after signing in.

## Step 4: Find your repo

After you accept the invitation, the instructor creates a repo for you (or has it pre-created). The repo name follows the class convention — usually `csc114-{your-github-username}`.

To find it:

1. Sign in to `github.com`.
2. Click your profile picture (top right) → **Your organizations**.
3. Click the class organization name.
4. You should see a list of repos. Yours has your username in it.
5. Click your repo. Bookmark this URL — you'll visit it every week.

## Step 5: Verify you can write to your repo

This is the test that proves everything is set up correctly. You'll do this in Meeting 1 if there's time, otherwise as part of your first deliverable.

The simplest possible test:

1. On your repo's main page, click **Add file → Create new file**.
2. Name the file `hello.md`.
3. Type one line: `# Hello from {your name}`.
4. Scroll down to the commit area. The commit message field will auto-fill with "Create hello.md" — that's fine, or write your own.
5. Click **Commit changes**.

If you see the file appear in the repo's file list, you have write access. You're done with the setup.

## Common things that go wrong

| Symptom | What's happening | What to do |
|---------|------------------|-----------|
| Never got the invitation email | Wrong email on GitHub account, or in spam | Check spam, then message instructor to resend |
| Email arrived but the link 404s | Invitation expired (>7 days) | Message instructor to resend |
| Can see the org but no repo | Repo not created yet | Wait, or message instructor |
| Repo exists but "Add file" is grayed out | Read-only access | Message instructor — they need to upgrade your permissions |
| You see other students' repos in the org | This is normal | The org makes everyone's work visible to everyone. It's part of the open-portfolio philosophy. You can look at classmates' repos for reference. |

## Why we do this in Week 1

Every other week of the semester assumes you can get files into and out of GitHub. If that's broken, nothing else works. So Week 1 includes this setup as homework — by the end of the week, you should have:

- A working GitHub account with a sensible username
- An accepted invitation to the class organization
- A repo with your name on it that you can write to

If any of those three things isn't working by Friday, raise your hand. Don't try to do Week 2 work on top of a broken setup.
