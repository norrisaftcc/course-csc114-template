# For Prompt Masters — Week 1

**Audience:** Prompt Masters track
**Bottom line:** You don't use branches, Issues, or Pull Requests. You drop files into your repo using whichever interface feels easiest. Read this file for the click-by-click steps.

---

## How you submit, in order of "easiest first"

You have three options. All of them work for the whole semester. Pick one and stick with it — switching back and forth makes your repo messy.

### Option A: GitHub web interface (no software to install)

This is the easiest path if you don't want to install anything.

1. Sign in at `github.com`.
2. Navigate to your repo. The URL looks like `github.com/{class-org-name}/csc114-{your-github-handle}`.
3. To add a file: click **Add file → Upload files** (top right of the file list). Drag and drop, or click to browse.
4. To edit a file already in the repo: click the file, then click the pencil icon (top right of the file content).
5. When you save changes, GitHub asks for a "commit message." Type a short description of what you did — `add system-prompt-v2` or `update testing log with v2 results`. Click **Commit changes**.

That's it. You're done. Your files are in the repo.

### Option B: GitHub Desktop (drag-and-drop with a real app)

If you want a nicer interface that handles the syncing for you:

1. Download GitHub Desktop from `desktop.github.com`. Free.
2. Sign in with your GitHub account.
3. Click **Clone a repository from the Internet**. Find your repo in the list. Choose where on your laptop to keep the local copy.
4. To work on your files: open the local folder, edit files in whatever app you like (VS Code, Sublime, Notepad, anything). Save when you're done.
5. GitHub Desktop will notice the changes. In the left panel you'll see them listed.
6. Type a commit summary (short) in the box at the bottom-left. Click **Commit to main**.
7. Click **Push origin** to send your changes up to GitHub.

GitHub Desktop hides Git from you. You won't need to learn `git pull`, `git push`, or anything command-line.

### Option C: Command line (if you already know it)

If you're comfortable on a terminal, the usual flow works fine:

```bash
git clone https://github.com/{class-org-name}/csc114-{your-handle}.git
cd csc114-{your-handle}
# edit files
git add .
git commit -m "add Week 1 deliverables"
git push
```

No special considerations. You're treated identically to Code Builders for this method — the only difference is you don't open Issues or PRs.

## Joining the class GitHub organization

You need to be inside the class organization before you can push to your repo. Here's the one-time setup:

1. **Make sure you have a GitHub account.** Use a username that looks like a real name or a recognizable handle. `xX_dragonslayer_69_Xx` is going to look weird on your portfolio in three years. `jane-doe` or `jdoe-dev` is fine.
2. **Send your username to the instructor** through the channel they specified (Canvas message, Discussions, email — check the syllabus).
3. **Watch your email** for the invitation. It'll come from `noreply@github.com` with a subject like "You've been invited to join {org name}."
4. **Click the link in the email.** It opens GitHub and asks you to accept. Click **Join organization**.
5. **The instructor creates your repo** with the right name and gives you write access. You'll get a second email when this happens.

If the email never shows up after 24 hours, check your spam folder and then message the instructor.

## What "drop into the repo" means in practice

The Week 1 deliverable lists 9 files. Here's a workflow that works:

1. **Make a folder on your laptop** called `week-1-deliverables` (anywhere — your Desktop, your Documents folder, doesn't matter).
2. **Build all 9 files in that folder.** Use any markdown editor. Notepad works. So does TextEdit on Mac. The fancier ones like VS Code or Obsidian help with previews.
3. **When you're done, upload them all to your GitHub repo** using Option A, B, or C above. Put them at the **root** of the repo, not inside a subfolder.
4. **Confirm by visiting your repo URL.** You should see all 9 filenames in the file list.

## Why you're using GitHub at all

You might be wondering: "I'm not a programmer. Why GitHub?"

Two reasons:

1. **It teaches version history without code.** When you commit `system-prompt-v2.md`, the repo remembers exactly what changed from v1. That habit — keeping a record of how something evolved — is a real professional skill, and it's the same habit whether you're working in software, writing, marketing, research, or anything else.
2. **Your repo is your portfolio.** When you finish the semester, you can point an employer or a transfer university at the repo URL. They can see your work, your iteration, your reflections. That's better than a transcript that just says "B+."

You won't write code in Week 1, but you'll be using a tool that the people who do write code use. That's the GitHub-first philosophy.

## When to ask for help

If you get stuck on the GitHub side specifically, ask the notebook chat:

> "I'm a Prompt Master in Week 1 — what's the simplest way to get my files into the repo?"

The notebook is configured to recognize your track and point you at this file's instructions first. If something here isn't clear, that's the instructor's problem — message them.

## What's not in this file

- **System prompt instructions** — those are in `week_01_spike_domain_agent_v1.md`. Both tracks read that same file.
- **Anything about the Claude Console.** Track doesn't matter inside the Console — Prompt Masters and Code Builders use the exact same Console UI.

Your track only changes how you submit. Everything else is the same.
