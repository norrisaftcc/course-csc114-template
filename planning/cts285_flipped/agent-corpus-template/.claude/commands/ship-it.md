---
description: Run one Sacred Flow cycle (Issue → branch → commit → PR) and STOP before merge
argument-hint: <one-line description of the work>
---

# /ship-it

Run **one full Sacred Flow cycle** for the work described in `$ARGUMENTS`, then
**stop before the merge**. The human reviews and merges — you never do.

`$ARGUMENTS` is a one-line description of the change (e.g.
`add a Credits section to the README`). If it's empty, ask the student for one
sentence and stop.

## Do these steps in order

1. **Confirm the base is clean.** Run `git status` and `gh auth status`. If the
   tree is dirty with *unrelated* changes, ask before continuing. Make sure
   you're starting from `main`:
   ```bash
   git checkout main && git pull
   ```
   (Exception: if the student has already staged the work they want shipped,
   keep their staged changes — branch and carry them over instead of resetting.)

2. **Open the Issue** from the one-line description. Title is imperative and
   short; body is a one-to-three-sentence plan.
   ```bash
   gh issue create --title "<title from $ARGUMENTS>" --body "<short plan>"
   ```
   Capture the issue number it prints as `#N`.

3. **Branch off `main`** with a lowercase, hyphenated slug derived from the title:
   ```bash
   git checkout -b <slug>
   ```

4. **Stage and SHOW the diff. Then wait.** Do not commit yet.
   ```bash
   git add -A
   git diff --cached
   ```
   Let the student read it. (If they staged the work themselves, just show it.)

5. **Commit** — present tense, lowercase, no trailing period:
   ```bash
   git commit -m "<message>"
   ```

6. **Push and open the PR.** Body **must** start with `Closes #N` and include a
   retro stub for the student to finish:
   ```bash
   git push -u origin <slug>
   gh pr create --title "<title>" --body "Closes #N

   ## What's in this PR
   - <bullet>

   ## Retro (finish this — one paragraph)
   - What this did:
   - One thing to watch / what I'd change:
   "
   ```

7. **STOP.** Print the PR URL and say it's ready for the student's review. Do
   **NOT** run `gh pr merge`, do **NOT** push to `main`, do **NOT** enable
   auto-merge. The merge is the human's job and the whole point of this module.

## Codex CLI / Gemini CLI equivalents

Slash commands are a Claude Code feature; the other CLIs reach the same cycle by:

- **Codex CLI:** run in Suggest/approval mode and paste the same instruction as a
  prompt, or wrap steps 2–6 in a shell script `ship-it.sh` you approve
  command-by-command. Never script the merge.
- **Gemini CLI:** keep per-action approval on and paste the same instruction as a
  prompt (or use a `ship-it.sh`). Approve each shell action; never auto-approve
  and never add a merge step.

In all three, the contract is identical: **agent opens the Issue and PR; human
merges.**
