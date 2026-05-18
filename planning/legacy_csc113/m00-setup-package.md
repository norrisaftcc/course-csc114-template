# CSC-114 Module 0 — Pre-Meeting-1 Setup Package

**Sprint:** 7 (Cowork session 2026-05-17)
**Status:** DRAFT v0.1 — review before sending
**Budget option:** A (shared workspace, instructor-issued keys / invites)
**Term:** Summer 2026, starts late May / early June
**Send by:** Monday of the week before Meeting 1
**Co-instructor status:** Out Weeks 1–2; Senpai Teacherbot solo for Module 0

Contents:
1. [Student setup email (copy-paste ready)](#1-student-setup-email-copy-paste-ready)
2. [Student setup checklist (linked from the email)](#2-student-setup-checklist-linked-from-the-email)
3. [Instructor pre-work checklist (Senpai Teacherbot's side)](#3-instructor-pre-work-checklist-drews-side)
4. [Troubleshooting / FAQ (publish alongside the checklist)](#4-troubleshooting--faq-publish-alongside-the-checklist)

---

## 1. Student setup email (copy-paste ready)

**Subject:** CSC-114 Summer 2026 — 30 minutes of setup before our first meeting

---

Hi all,

I'm Senpai Teacherbot. Welcome to CSC-114 Artificial Intelligence I. Our first meeting is **{MEETING_1_DATE}**.

Here's the thing — Day 1 we're building a personal AI teaching assistant inside the Claude Console. For that to work, everyone has to show up with accounts already created and the class workspace already joined. If we try to do account setup live, we'll spend the whole meeting fighting logins instead of building.

So: about 30 minutes of homework before we meet.

**What you need to do:**

1. **Accept two invites** I'll send you separately this week:
   - **GitHub** org invite (`csc114-su26-students`) — for your course portfolio.
   - **Anthropic Console** workspace invite (`csc114-summer-2026`) — for your API access. Both invites go to your `@{COLLEGE_DOMAIN}` email. Check spam if you don't see them by {INVITE_BY_DATE}.

2. **Create your free Anthropic account** at https://platform.claude.com if you don't already have one. Phone verification is required (it gets you $5 of free credit you won't need to use — the class workspace covers your CSC-114 usage).

3. **Click around the Console for five minutes** once you're in. Find **Agents**, **Environments**, **Sessions** in the left sidebar. You don't need to understand any of it yet. Just confirm you can log in and the menu loads.

4. **Skim the checklist** I've linked below. It has screenshots and a "what to do if X" section. Total time: about 30 minutes including the optional safety checks at the end.

→ **[Setup checklist](./m00-setup-checklist.md)**

**What you'll have when you're done:** a working Claude Console account joined to the class workspace, ready for Meeting 1.

**If you get stuck:** reply to this email by **{TROUBLESHOOT_BY_DATE}** (two days before Meeting 1). We can fix account issues over email so we don't burn meeting time on them.

A few practical notes:

- The Console platform is in public beta. Expect occasional weirdness — that's part of the experience, not a sign you broke anything.
- You won't need to pay for anything for CSC-114. The class workspace has a spending cap I've set.
- If you took CSC-113 with me: yes, this is the spiritual successor to SAGE. You'll recognize the pattern; we're upgrading the infrastructure.
- If you didn't take CSC-113: don't worry. The first meeting starts from zero on the agent stuff. You will need to be comfortable with basic GitHub (issues, branches, pull requests) — there's a one-page refresher at the bottom of the checklist.

See you **{MEETING_1_DATE}**.

— Senpai Teacherbot

---

## 2. Student setup checklist (linked from the email)

**File:** `csc114/m00-setup-checklist.md` (publish this on Canvas, the course site, or both — whatever students will actually find)
**Time:** ~30 minutes (or 45 minutes if your wifi is bad)
**Don't have to do it perfectly.** Don't have to understand any of it. Just get the boxes checked.

### Before you start

You'll need:
- An email address you check regularly (where I sent your invites)
- A phone that can receive SMS (for Anthropic's free credit verification)
- A web browser (Chrome/Edge/Firefox/Safari all work; not IE)
- ~30 minutes

### Step 1 — Accept the GitHub org invite (~5 min)

You'll get an email from GitHub with the subject *"[your name] invited you to join @csc114-su26-students"*.

- [ ] Click the link in the email
- [ ] Sign in to GitHub (or create a free account if you don't have one — use your `@{COLLEGE_DOMAIN}` email)
- [ ] Click **Accept invitation**
- [ ] You should now see `csc114-su26-students` in your organization list at https://github.com/settings/organizations

**If the invite expired or you can't find it:** email Senpai Teacherbot with your GitHub username. He'll re-send.

### Step 2 — Create your Anthropic Console account (~10 min)

- [ ] Go to https://platform.claude.com
- [ ] Click **Sign up** (skip if you already have an account)
- [ ] Use your `@{COLLEGE_DOMAIN}` email
- [ ] Verify your email (check inbox for verification link)
- [ ] Verify your phone (enter SMS code) — this is where you get the $5 trial credit. We won't use it; the class workspace covers your usage.
- [ ] You should land on the Console home page

### Step 3 — Accept the Anthropic workspace invite (~3 min)

You'll get an email from Anthropic with the subject *"You've been invited to join workspace csc114-summer-2026"*.

- [ ] Click the link in the email
- [ ] Make sure you're logged in to the same Anthropic account you created in Step 2
- [ ] Click **Accept**
- [ ] In the Console's top-left workspace switcher, confirm you can switch to `csc114-summer-2026`

**Why two workspaces:** the default one is your personal sandbox; the class one is where your CSC-114 work lives and where the spending cap protects you.

### Step 4 — Tour the Console (~5 min)

Make sure you're in the `csc114-summer-2026` workspace, then click each of these in the left sidebar:

- [ ] **Agents** (empty list right now — that's fine)
- [ ] **Environments** (you should see a `class-shared` environment Senpai Teacherbot pre-created)
- [ ] **Sessions** (empty)
- [ ] **Files** (empty)
- [ ] **Credential Vaults** (empty)

If any of those throw an error or the menu items are missing, screenshot it and email Senpai Teacherbot.

### Step 5 — Optional but recommended: get your personal API key (~5 min)

You don't need this for Meeting 1. You'll need it later in the term when we move from the Console UI to writing code. Get it now so you don't have to context-switch later.

- [ ] In the workspace, go to **Settings → API Keys**
- [ ] Click **Create Key**
- [ ] Name it: `{your-initials}-csc114-personal`
- [ ] Copy the key (you'll only see it once)
- [ ] Save it somewhere safe — a password manager (Bitwarden, 1Password, Apple Keychain) is the right place. **Don't email it, don't paste it in chat, don't commit it to GitHub.** A leaked API key against the class workspace lets anyone burn through the spending cap.

### Step 6 — Sanity check (~2 min)

- [ ] You can log in to https://platform.claude.com
- [ ] You can switch to the `csc114-summer-2026` workspace
- [ ] You can see your GitHub `csc114-su26-students` org membership at https://github.com/orgs/csc114-su26-students/people

If all three are true, you're done. See you in Meeting 1.

### Optional: GitHub Sacred Flow refresher (if you didn't take CSC-113)

In CSC-114 we use the same GitHub discipline as CSC-113: **Issue → Branch → Work → Commit → PR → Merge**. If that doesn't ring a bell, spend 15 minutes with GitHub's own intro at https://docs.github.com/get-started before Meeting 1. Specifically: how to create an issue, create a branch, commit changes, open a pull request, and merge it. You don't need to be fluent. You need to recognize the words.

---

## 3. Instructor pre-work checklist (Senpai Teacherbot's side)

**Do this in the order shown.** Most steps are 5 minutes. Step 5 (inviting students) is the gating action — students can't do their setup until you've sent the invites.

**Time estimate:** ~90 minutes total, can be done across 2 days.

### A. Anthropic Console org + workspace (~30 min)

- [ ] Sign in to https://platform.claude.com with your `ftccanalytics17@gmail.com` account (or your FTCC-domain account if you have one)
- [ ] If you don't already have an organization for CSC-114, create one: **Settings → Organizations → Create**. Name: `FTCC-CSC-AI-Program` (or similar — reusable for future terms)
- [ ] In that org, create a workspace named **`csc114-summer-2026`**
- [ ] Add a billing method to the org (credit card or PO via Anthropic billing) — required even with a spending cap
- [ ] In the workspace, go to **Settings → Spending Limits**. Set:
  - Monthly cap: **$500** (estimated ceiling for a 20-student cohort at $15–25/student)
  - Per-key cap: **$25/month** (per the Module 0 plan's Option A description)
- [ ] Pre-create the **class-shared environment**:
  - Name: `class-shared`
  - Networking: `unrestricted` (so MCP server tests in later modules don't break)
  - Common packages: none for Module 0; revisit in Module 2 if needed
- [ ] Pre-create the **"Bad Greeter Bot"** for the Meeting 1 live failure demo:
  - Name: `bad-greeter-demo`
  - Model: `claude-sonnet-4-6`
  - System prompt: literally `You are helpful.`
  - Tools: enable `agent_toolset_20260401`
- [ ] Smoke-test by sending "Where's the library?" to the Bad Greeter — confirm it hallucinates. If it gives a "I don't know" by accident, tighten the prompt to be even vaguer.

### B. GitHub org + invites (~20 min)

- [ ] Create GitHub org: `csc114-su26-students` (or reuse an existing one with that semester suffix)
- [ ] Set org visibility to private
- [ ] Configure member permissions: Write access for students
- [ ] Enable Issues and Discussions for all repos
- [ ] Set up a `student-portfolio-template` template repo (or reuse CSC-113's)
- [ ] Get the enrolled student email list from the registrar
- [ ] Send GitHub invites in bulk via **People → Invite member** (paste emails, comma-separated)

### C. Anthropic workspace invites (~15 min)

- [ ] In the `csc114-summer-2026` workspace, go to **Settings → Members**
- [ ] Click **Invite Members**
- [ ] Paste the same student email list (one per line)
- [ ] Role: **Member** (not Admin; not Read-only)
- [ ] Send

The Anthropic invite email is sent automatically. Students still need their own Anthropic account to accept (they create one in their Step 2).

### D. Send the setup email (~10 min)

- [ ] Fill in the placeholders in [Section 1](#1-student-setup-email-copy-paste-ready):
  - `{MEETING_1_DATE}`
  - `{COLLEGE_DOMAIN}` (`faytechcc.edu` or similar)
  - `{INVITE_BY_DATE}` (the day after you send invites)
  - `{TROUBLESHOOT_BY_DATE}` (2 days before Meeting 1)
- [ ] Send via your usual class communication channel (Canvas announcement + email is belt-and-suspenders if you want both)
- [ ] BCC yourself so you have the canonical version

### E. Monitor before Meeting 1 (~15 min, spread across the week)

- [ ] Check the Anthropic workspace **Members** page daily — count accepted invites
- [ ] Check the GitHub org **People** page daily — count accepted invites
- [ ] Reply to any troubleshooting emails by the `{TROUBLESHOOT_BY_DATE}` deadline
- [ ] On the morning of Meeting 1, check the workspace **Usage** dashboard to confirm no surprises

### F. Optional: Canvas announcement version

Same content as the email, formatted for Canvas. Use Canvas's HTML editor and link the checklist as a Canvas page or external file. Worth doing if your students live in Canvas more than email.

---

## 4. Troubleshooting / FAQ (publish alongside the checklist)

**Q: I don't see the GitHub invite email.**
Check spam. Also check that the email address you gave the registrar matches the one your GitHub account uses. Email Senpai Teacherbot with your GitHub username; he can re-send.

**Q: I don't see the Anthropic workspace invite email.**
Check spam. Confirm you used the same email address for your Anthropic account that the registrar has on file. Email Senpai Teacherbot.

**Q: I already have an Anthropic account from a previous class / personal project.**
That's fine. You can join the `csc114-summer-2026` workspace from your existing account. You'll see a workspace switcher in the top-left of the Console — toggle to it.

**Q: Phone verification isn't working.**
Anthropic's phone verification uses Twilio, which occasionally has carrier issues. Try again in an hour. If it still fails, email Senpai Teacherbot — there's a manual verification path through Anthropic support.

**Q: I'm seeing "Workspace `csc114-summer-2026` not found" after accepting the invite.**
Log out and back in to the Console. The workspace switcher caches stale state sometimes.

**Q: I can't find the `class-shared` environment.**
You're probably in the wrong workspace. Check the top-left switcher.

**Q: I clicked "Create Key" and now I can't see the key anymore.**
API keys are shown only once for security. Click **Create Key** again, name it `{your-initials}-csc114-v2`, and save the new one. Delete the old one in the API Keys page (it's useless if you don't have the value).

**Q: Do I need a credit card?**
No. The class workspace covers your usage. The $5 trial credit from phone verification is also free and won't be touched.

**Q: I'm not sure if I'm a "Code Builder" or "Prompt Master."**
Don't worry about it for Meeting 1. We'll talk about tracks in Meeting 2 / the asynchronous packet.

**Q: I never took CSC-113. Am I going to be lost?**
You'll need the GitHub Sacred Flow (Issue → Branch → PR → Merge). The optional refresher at the bottom of the checklist takes 15 minutes. Beyond that, Meeting 1 starts from zero on the agent material — same starting line as the CSC-113 graduates.

**Q: My laptop is old. Will the Console work?**
The Console is web-based. Anything that runs a current browser (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+) will work. ChromeOS, Linux, Mac, Windows are all fine.

**Q: Can I do this on my phone?**
Technically the Console loads on mobile. Practically: no, the agent builder UI is not usable on a phone screen. Use a laptop or desktop.

---

## Drafting notes (delete before sending)

**Voice check.** Email and checklist try to match the instructor voice patterns documented in `csc_dash/courses/CSC-114/canvas-html/README.md` (which labels them "Senpai Teacherbot's voice / Senpai Teacherbot's Note" upstream — same voice characteristics, persona name to be reconciled with Angela):
- Honest about difficulty ("If we try to do account setup live, we'll spend the whole meeting fighting logins")
- Process-focused ("Don't have to do it perfectly")
- Encouraging without coddling ("don't worry... you'll need to be comfortable with basic GitHub")
- Slightly informal ("Here's the thing")
- Specific advice ("A password manager is the right place")
- Industry-connected ("Treat the key like a password")

**Placeholders to fill before sending:**
- `{MEETING_1_DATE}` — first class meeting date
- `{COLLEGE_DOMAIN}` — FTCC's student email domain
- `{INVITE_BY_DATE}` — day after you send invites
- `{TROUBLESHOOT_BY_DATE}` — 2 days before Meeting 1

**Open question for Senpai Teacherbot:**
1. Is `csc114-su26-students` the right GitHub org naming convention? (Matches your existing CSC-113 pattern in `course-csc113-template/instructor/operations-manual.md`.)
2. Is `csc114-summer-2026` the right Anthropic workspace name?
3. Should I draft a Canvas-announcement-formatted version of the email, or is markdown sufficient?

**Reasonable next sprint:** **Sprint 8** (asynchronous Meeting 2 packet as standalone) — biggest remaining content lift. Now that Sprint 7 is in draft, the M00 path is: send setup email → run Meeting 1 → distribute Sprint 8 packet → students complete async work → Module 1 begins.
