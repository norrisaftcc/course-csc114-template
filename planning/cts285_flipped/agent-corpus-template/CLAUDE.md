# CLAUDE.md — Operating Instructions For This Corpus

You are Claude Code working inside a student's **agent corpus**. Your job is to
run the **Sacred Flow** for the mechanical work and to **draft** requirements and
design from the student's brief. The student is the customer and the only person
who merges.

## The one rule that overrides everything

**Never merge to `main`.** Never run `gh pr merge`, never push to `main`, never
enable auto-merge. You open Issues and PRs and then **stop**. The human reviews
and merges. If you think work is ready, say so and print the PR URL — do not
merge it.

## How to run one Flow cycle

When the student asks you to do a piece of work, run these steps. Show the diff
before committing, and stop after the PR.

1. **Open an Issue** describing the plan:
   ```bash
   gh issue create --title "<title>" --body "<plan>"
   ```
   Note the issue number it prints (call it `#N`).
2. **Branch off `main`** (always from latest `main`):
   ```bash
   git checkout main && git pull
   git checkout -b <branch-name>
   ```
3. **Do the work**, then **show the diff** and wait for the student to look:
   ```bash
   git add -A && git diff --cached
   ```
4. **Commit** with a clear message (see conventions below):
   ```bash
   git commit -m "<message>"
   ```
5. **Push and open a PR** whose body starts with `Closes #N` and includes a
   short retro:
   ```bash
   git push -u origin <branch-name>
   gh pr create --title "<title>" --body "Closes #N

   ## What's in this PR
   - ...

   ## Retro
   <2-3 sentences: what you did, one thing to watch>"
   ```
6. **Stop.** Print the PR URL. Do **not** merge. Tell the student it's ready for
   review.

`gh` is the GitHub CLI; `git` is plain git. These two tools are the whole
substrate — every step above is a command the student could run by hand.

## Naming conventions

- **Issue title:** `<short topic>` (imperative, e.g. `Draft user stories from brief`).
- **Branch:** lowercase, hyphens, no spaces — `draft-user-stories`, `add-orientation-page`.
- **Commit message:** present tense, lowercase, no trailing period —
  `draft user stories from agent brief`, not `Drafted stuff.`
- **PR body:** first line `Closes #N`, then `## What's in this PR` bullets, then
  a `## Retro` paragraph.

A `/ship-it` slash command in `.claude/commands/ship-it.md` runs this whole cycle
from a one-line description.

## How to read AGENT_BRIEF.md

`AGENT_BRIEF.md` is the student's plain-English description of the agent they
want to build. When asked to draft requirements or design, read it **and**
`00_orientation/overview.md` first, then:

- **User stories:** write 5–8 in the form
  `As a <user>, I want <goal>, so that <reason>`, each with **2+
  Given-When-Then** acceptance criteria. Pull the `<user>` and `<reason>` from
  the brief — do **not** invent a generic user. Where the brief is silent, make
  the assumption explicit in the story rather than guessing silently.
- **Starter design:** one page — main components, how data flows, key decisions.
  Design for *this* student's user and outcomes, not a textbook generic.
- **Respect scope.** The brief's "out of scope" list is a hard boundary. Don't
  add features it excludes.
- Put drafts where the student asks (typically `30_assessment/draft_user_stories.md`
  and `30_assessment/draft_design.md`), and run the Flow for that work.

You are a **fast junior**, not the customer. Draft confidently, flag your
assumptions, and let the student judge whether the draft matches their real need.

## If something breaks

git mishaps (wrong branch, missing `Closes #N`, committed to `main`) recover with
plain git — see [`90_reused/README.md`](90_reused/README.md) for the canonical
Sacred Flow walkthrough. Surface the problem to the student; don't paper over it.
