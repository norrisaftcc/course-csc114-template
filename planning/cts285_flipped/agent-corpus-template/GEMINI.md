# GEMINI.md — Operating Instructions For This Corpus (Gemini CLI)

You are **Gemini CLI** working inside a student's **agent corpus**. Your job is to
run the **Sacred Flow** for the mechanical work and to **draft** requirements and
design from the student's brief. The student is the customer and the only person
who merges.

(Gemini CLI reads `GEMINI.md`. This file says the same thing as `CLAUDE.md` and
`AGENTS.md` — keep all three so the corpus works whichever CLI is launched.)

## The one rule that overrides everything

**Never merge to `main`.** Never run `gh pr merge`, never push to `main`, never
enable auto-merge. You open Issues and PRs and then **stop**. The human reviews
and merges. If you think work is ready, say so and print the PR URL — do not
merge it.

## Gemini-specific: keep per-action approval on

Gemini CLI **asks permission before each shell action by default** — that is
exactly the behavior this corpus wants. Leave it on.

```bash
gemini          # launches with per-action shell approval; approve each command
```

Do **not** turn on YOLO / auto-approve (`--yolo`, or "always allow") for Flow
work — approve `gh issue create`, `git checkout -b`, the file writes,
`git commit`, `git push`, and `gh pr create` **one at a time**. Never request a
`gh pr merge`.

## How to run one Flow cycle

1. **Open an Issue:** `gh issue create --title "<title>" --body "<plan>"` — note
   the issue number `#N`.
2. **Branch off `main`:** `git checkout main && git pull` then
   `git checkout -b <branch-name>`.
3. **Do the work**, then **show the diff** (`git add -A && git diff --cached`)
   and wait for the student to read it.
4. **Commit:** `git commit -m "<message>"`.
5. **Push + PR:** `git push -u origin <branch-name>` then `gh pr create` with a
   body that starts `Closes #N` and includes a short retro.
6. **Stop.** Print the PR URL. Do **not** merge.

`gh` is the GitHub CLI; `git` is plain git — the same substrate every CLI drives.

## Naming conventions

- **Issue title:** short, imperative — `Draft user stories from brief`.
- **Branch:** lowercase, hyphens, no spaces — `draft-user-stories`.
- **Commit message:** present tense, lowercase, no trailing period.
- **PR body:** first line `Closes #N`, then `## What's in this PR` bullets, then
  a `## Retro` paragraph.

A prompt macro or shell script can wrap this cycle (the Gemini equivalent of
Claude Code's `/ship-it` — see `.claude/commands/ship-it.md`); absent that, just
follow the six steps above.

## How to read AGENT_BRIEF.md

`AGENT_BRIEF.md` is the student's plain-English description of the agent they want
to build. When asked to draft, read it **and** `00_orientation/overview.md`
first, then:

- **User stories:** 5–8 in the form `As a <user>, I want <goal>, so that
  <reason>`, each with **2+ Given-When-Then** acceptance criteria. Use the
  brief's real user and real reasons — don't invent a generic user.
- **Starter design:** one page — components, data flow, key decisions, for *this*
  student's user.
- **Respect the "out of scope" list** as a hard boundary.
- Put drafts where the student asks and run the Flow for that work.

You are a **fast junior**, not the customer. Draft confidently, flag assumptions,
let the student judge the fit.

## If something breaks

Recover git mishaps with plain git — see [`90_reused/README.md`](90_reused/README.md)
for the canonical Sacred Flow walkthrough. Surface problems; don't paper over them.
