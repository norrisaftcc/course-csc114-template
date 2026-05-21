# PM Tracking Reconciliation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the WBS to reflect shipped reality (Weeks 1–3 done, Week 4 next), file ten GitHub issues for the Section A pre-launch packages with P0/P1/P2 priority labels under a single `Pre-launch (2026-05-25)` milestone, and backfill issue references into the WBS.

**Architecture:** Hybrid tracking — markdown WBS remains the doc-of-record for *what* each work package is; GitHub Issues + one Milestone hold the *active work* with priority and owner accountability. No code changes; only doc edits and `gh` CLI calls. All work lands on `main` (direct commit; user approved).

**Tech Stack:** Markdown, GitHub CLI (`gh`), git.

**Repo:** `norrisaftcc/course-csc114-template` (this repo).

**Reference spec:** `docs/superpowers/specs/2026-05-21-pm-tracking-reconciliation-design.md`

---

## File structure

- **Modify:** `planning/project_management/csc114-wbs-v0.4.md`
  - Add `Last updated:` line under the front-matter header.
  - Add a `GH issue` column to the Section A work-packages table (10 rows + header).
  - Update Section C status flags (Weeks 1–4).
  - Append item 6 to the "Open questions still outstanding" list.
- **Create on GitHub** (not files; remote state):
  - 3 labels: `pre-launch`, `priority-P0`, `priority-P1`, `priority-P2` (4 total; check first).
  - 1 milestone: `Pre-launch (2026-05-25)`.
  - 10 issues: A1–A10, each tagged + attached to the milestone.

---

## Task 1: WBS — header timestamp, Section C status flags, Open Question #6

**Files:**
- Modify: `planning/project_management/csc114-wbs-v0.4.md`

- [ ] **Step 1: Read the file to confirm current state**

Run: `Read planning/project_management/csc114-wbs-v0.4.md`
Expected: Lines 3–6 contain the version/companion/date header; lines 45–53 contain the Section C status table with W1/W2 marked 🛠️ and W3–W8 marked ⏭️; the "Open questions still outstanding" section sits near line 84–90 with 5 numbered items.

- [ ] **Step 2: Add `Last updated:` to the header block**

Find this block (around lines 3–5):
```markdown
**Version:** 0.4
**Companion to:** Charter v0.4, Crosswalk
**Date:** 2026-05-20 (T-6 days from launch)
```

Replace with:
```markdown
**Version:** 0.4
**Companion to:** Charter v0.4, Crosswalk
**Date:** 2026-05-20 (T-6 days from launch)
**Last updated:** 2026-05-21 (Weeks 1–3 content ✅; Section A issues filed on GitHub)
```

- [ ] **Step 3: Update Section C status flags for Weeks 1–4**

Find the Section C status table (around lines 45–53). Replace these four rows:

```markdown
| 1 | Cloud Agents | TBD | TBD | | | | | | | | | | | | 🛠️ |
| 2 | Keras hello world | TBD | TBD | | | | | | | | | | | | 🛠️ |
| 3 | Math + optimization (Ch 2) | TBD | TBD | | | | | | | | | | | | ⏭️ |
| 4 | Frameworks + Keras fluency (Ch 3, 7) | TBD | TBD | | | | | | | | | | | | ⏭️ |
```

with:

```markdown
| 1 | Cloud Agents | Reading + lab packet | Apply (graded) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | Keras hello world | Notebook + lab | Apply (graded) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | Math + optimization (Ch 2) | Reading + walkthrough | Apply (graded) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | Frameworks + Keras fluency (Ch 3, 7) | TBD | TBD | | | | | | | | | | | | 🛠️ |
```

(Weeks 5–8 unchanged; they stay ⏭️.)

- [ ] **Step 4: Append Open Question #6**

Find the "Open questions still outstanding" list (search for `## Open questions still outstanding`). It currently ends with item 5. Append item 6:

```markdown
6. **Co-instructor variant chapter→module mapping** (`planning/mallory/planning_notes_5_20.txt`, 2026-05-20). Specific divergences: Ch 4 paired with Ch 8 in M4 (current crosswalk splits these across W2 and W6); Ch 6 vs Ch 5 placement in M5; "Exit Ticket" pedagogical idea not yet incorporated. **Resolve over coffee** with co-instructor; not blocking launch.
```

- [ ] **Step 5: Verify edits**

Run: `Read planning/project_management/csc114-wbs-v0.4.md`
Expected: `Last updated:` line present; Section C shows W1/W2/W3 with ✅ across columns B1–B10 and Status ✅; W4 shows status 🛠️; Open Questions has 6 numbered items, item 6 mentions Mallory variant.

- [ ] **Step 6: Stage but do not commit yet** (we'll commit once everything in this plan is done)

Run: `git add planning/project_management/csc114-wbs-v0.4.md`
Expected: file is staged; `git status` shows it under "Changes to be committed".

---

## Task 2: WBS — add `GH issue` column to Section A table (scaffold)

**Files:**
- Modify: `planning/project_management/csc114-wbs-v0.4.md`

This task adds the column header and empty cells. Task 6 backfills the `#NN` issue references after Task 5 creates the issues.

- [ ] **Step 1: Locate the Section A table**

Run: `Read planning/project_management/csc114-wbs-v0.4.md` (offset around line 9)
Expected: header row reads `| # | Work package | Owner | Status | Est. hrs | Notes |` followed by 10 data rows for A1–A10.

- [ ] **Step 2: Add `GH issue` column to the header row**

Replace:
```markdown
| # | Work package | Owner | Status | Est. hrs | Notes |
|---|---|---|---|---|---|
```

with:
```markdown
| # | Work package | Owner | Status | Est. hrs | GH issue | Notes |
|---|---|---|---|---|---|---|
```

- [ ] **Step 3: Add an empty cell to each of the 10 A-rows**

Each A-row currently has 6 columns (5 pipes between cells, 6 cells total counting empty owner/status/hrs). After this change each row needs 7 columns. The empty cell goes between `Est. hrs` and `Notes`. For each row A1–A10, replace `| | | | Notes-text-here |` with `| | | | | Notes-text-here |` — i.e., insert one extra `| ` before the existing notes column.

Concretely for A1, find:
```markdown
| A1 | Student-facing syllabus document | | | | Pulls topic structure from crosswalk; published to Canvas + students |
```

Replace with:
```markdown
| A1 | Student-facing syllabus document | | | | | Pulls topic structure from crosswalk; published to Canvas + students |
```

Apply the same one-`|` insertion to A2 through A10. The new empty cell will be filled with `#NN` in Task 6.

- [ ] **Step 4: Verify the table renders with 7 columns**

Run: `Read planning/project_management/csc114-wbs-v0.4.md` (lines 11–25)
Expected: Header has 7 column titles ending with `| Notes |`; all 10 rows have exactly 6 `|` separators inside the row (creating 7 cells).

- [ ] **Step 5: Stage**

Run: `git add planning/project_management/csc114-wbs-v0.4.md`
Expected: no error; file already staged with new changes layered on.

---

## Task 3: Create GitHub labels (idempotent)

**Files:** None (remote state on GitHub).

- [ ] **Step 1: Check which labels already exist**

Run: `gh label list --limit 100`
Expected: a list of existing labels. Note which of these four are already present: `pre-launch`, `priority-P0`, `priority-P1`, `priority-P2`.

- [ ] **Step 2: Create `pre-launch` label (skip if present)**

Run only if missing:
```bash
gh label create pre-launch --description "Day-1 MVP work; due 2026-05-25 per charter v0.4" --color "B60205"
```
Expected: `✓ Created label "pre-launch"`. If label exists, `gh` errors with "label already exists"; that's fine, skip.

- [ ] **Step 3: Create `priority-P0` label**

Run only if missing:
```bash
gh label create priority-P0 --description "Blocks class start 2026-05-26" --color "B60205"
```
Expected: `✓ Created label "priority-P0"`.

- [ ] **Step 4: Create `priority-P1` label**

Run only if missing:
```bash
gh label create priority-P1 --description "Blocks Week 1 functioning" --color "D93F0B"
```
Expected: `✓ Created label "priority-P1"`.

- [ ] **Step 5: Create `priority-P2` label**

Run only if missing:
```bash
gh label create priority-P2 --description "Blocks Week 5 fork; not Day 1" --color "FBCA04"
```
Expected: `✓ Created label "priority-P2"`.

- [ ] **Step 6: Verify all four exist**

Run: `gh label list --limit 100 | grep -E "pre-launch|priority-P"`
Expected: all four labels listed.

---

## Task 4: Create the `Pre-launch (2026-05-25)` milestone

**Files:** None (remote state on GitHub).

`gh` doesn't have a top-level milestone subcommand; use `gh api`.

- [ ] **Step 1: Check whether the milestone already exists**

Run: `gh api repos/norrisaftcc/course-csc114-template/milestones --jq '.[] | .title'`
Expected: list of milestone titles. If `Pre-launch (2026-05-25)` already exists, skip Step 2 and capture its number via:
```bash
gh api repos/norrisaftcc/course-csc114-template/milestones --jq '.[] | select(.title == "Pre-launch (2026-05-25)") | .number'
```

- [ ] **Step 2: Create the milestone**

Run:
```bash
gh api repos/norrisaftcc/course-csc114-template/milestones \
  -f title="Pre-launch (2026-05-25)" \
  -f state="open" \
  -f description="Locked-floor work per charter v0.4 §2. All Section A work packages from WBS v0.4. Hard deadline 2026-05-25." \
  -f due_on="2026-05-25T23:59:59Z" \
  --jq '.number'
```
Expected: a single integer (the milestone number) printed. Note it for browser-verification but Task 5 does not need the number — `gh issue create --milestone "Pre-launch (2026-05-25)"` uses the title.

- [ ] **Step 3: Confirm the milestone is queryable by title**

Run:
```bash
gh api repos/norrisaftcc/course-csc114-template/milestones --jq '.[] | select(.title == "Pre-launch (2026-05-25)") | {title, number, due_on}'
```
Expected: prints one JSON object with `title`, `number`, `due_on` set. If empty, the milestone wasn't created — re-run Step 2.

---

## Task 5: Create the ten Section A issues (A1–A10)

**Files:** None (remote state on GitHub).

Capture each issue's number for Task 6's backfill. The `gh issue create` command returns the issue URL; the number is the trailing path segment.

Each issue is created with:
- Title: `[An] <package title>`
- Labels: `pre-launch`, `priority-Pn`
- Milestone: `Pre-launch (2026-05-25)` (referenced by title)
- Body: the per-issue template below

You can use `--milestone "Pre-launch (2026-05-25)"` directly with `gh issue create` — no need to look up the number again.

- [ ] **Step 1: Create A1 — `[A1] Student-facing syllabus document` (P0)**

Run:
```bash
gh issue create \
  --title "[A1] Student-facing syllabus document" \
  --label "pre-launch,priority-P0" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A1; charter v0.4 §2 (Day-1 MVP locked floor), §3 (scope)
**Priority:** P0 — blocks class start 2026-05-26
**Due:** 2026-05-25

## What this is

Student-facing syllabus document, pulling the 8-week topic structure from the crosswalk (`planning/pilot_su26/crosswalk.md`) and reflecting the locked structure from charter v0.4 §3. Published to Canvas and visible to students before Day 1.

## Done when

- [ ] 8-week topic sequence reflects the crosswalk (Manning-chapter aligned).
- [ ] Locked-layer items from charter §3 reflected: meeting cadence (2/week + spike), two-track model, 16-artifact graded structure, weight buckets, Sunday-night deadlines, late policy, AI-use stance.
- [ ] Published to Canvas.
- [ ] Linked from class repo README so both Canvas and GitHub students can reach it.

## Notes

- Pulls from working artifacts: crosswalk (canonical for topic ordering); charter §3 for structural locks.
- Depends on A2 (assessment structure) being settled so weights/deadlines are correct.
EOF
)"
```
Expected: prints a URL like `https://github.com/norrisaftcc/course-csc114-template/issues/7`. Capture the integer at the end as `A1_NUM`.

- [ ] **Step 2: Create A2 — `[A2] Assessment structure` (P0)**

Run:
```bash
gh issue create \
  --title "[A2] Assessment structure" \
  --label "pre-launch,priority-P0" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A2; charter v0.4 §2, §3
**Priority:** P0 — blocks class start 2026-05-26
**Due:** 2026-05-25

## What this is

Locked assessment structure: 16 graded artifacts (2 per week), one graded lab (binary rubric) plus one Assess artifact (full rubric) per week. Sunday-night deadlines. Late policy: zero after 2 weeks past deadline; no partial penalty within window. Working weights: 40% labs (8 × 5%), 50% homework (5 × 10% — W1/2/3/4/6 Assess), 10% project (W5/7/8 Assess as project milestones).

## Done when

- [ ] 16 graded artifacts mapped per week (2/week) with which is the lab and which is the Assess.
- [ ] Binary lab rubric drafted (5/5 or redo).
- [ ] Full Assess rubric drafted.
- [ ] Weight buckets confirmed with co-instructor (resolves WBS Open Question 1).
- [ ] Exact Sunday deadline time set (resolves WBS Open Question 2).
- [ ] Late policy text written (zero after 2 weeks; no partial penalty within window).
- [ ] All of the above reflected in A1 syllabus.

## Notes

- Blocks A1; A1 cannot be finalized without this.
EOF
)"
```
Expected: URL printed. Capture as `A2_NUM`.

- [ ] **Step 3: Create A3 — `[A3] Course policies` (P0)**

Run:
```bash
gh issue create \
  --title "[A3] Course policies populated into Canvas" \
  --label "pre-launch,priority-P0" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A3; charter v0.4 §4 (constraints, pedagogical stance)
**Priority:** P0 — blocks class start 2026-05-26
**Due:** 2026-05-25

## What this is

Course policies populated into Canvas. **AI use is required and integral** — pedagogical framing: students load assignment context into their agent (or use the class agent which already has it); appropriate assistance follows from loaded context. **No separate "AI permitted/prohibited" rule.** Plus standard policies: academic integrity, attendance/participation, late policy.

## Done when

- [ ] AI-use pedagogical framing drafted (context-loaded co-pilot; not permitted/prohibited).
- [ ] Academic integrity policy written.
- [ ] Attendance/participation policy written.
- [ ] Late policy written (cross-reference A2).
- [ ] All policies populated into the Canvas course shell (depends on A4).
- [ ] Linked from A1 syllabus.

## Notes

- Charter §6 risk: "AI-required stance is novel; risk of student confusion or grievance." Onboarding doc (A6) supports this with examples.
EOF
)"
```
Expected: URL printed. Capture as `A3_NUM`.

- [ ] **Step 4: Create A4 — `[A4] Canvas shell + L/P/A/A page template` (P0)**

Run:
```bash
gh issue create \
  --title "[A4] Canvas shell + L/P/A/A page template" \
  --label "pre-launch,priority-P0" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A4
**Priority:** P0 — blocks class start 2026-05-26
**Due:** 2026-05-25

## What this is

Canvas course shell created with a reusable per-week page template that has Learn / Practice / Apply / Assess sections. Template is the structural backbone for all 8 weeks.

## Done when

- [ ] Canvas course shell created for CSC 114 Summer 2026.
- [ ] Per-week page template has L / P / A / A sections with consistent structure.
- [ ] Template reusable for Weeks 1–8 (one duplicate per week, then per-week content fills in).
- [ ] Linked from A1 syllabus.
- [ ] Week 1 page populated from `planning/pilot_su26/week-01-cloud-agents/`.

## Notes

- Per CLAUDE.md, Canvas HTML pages are paired with the markdown module pages; they are not auto-generated. Manual sync required.
EOF
)"
```
Expected: URL printed. Capture as `A4_NUM`.

- [ ] **Step 5: Create A5 — `[A5] GitHub org / class repo setup` (P1)**

Run:
```bash
gh issue create \
  --title "[A5] GitHub org / class repo setup" \
  --label "pre-launch,priority-P1" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A5
**Priority:** P1 — blocks Week 1 student work
**Due:** 2026-05-25

## What this is

Class repo created (forked/derived from this template repo per CLAUDE.md), with issue templates, branch protection on `main`, and a documented drop-folder convention for Prompt Masters.

## Done when

- [ ] Class repo exists (e.g., `csc114-su26-students` or similar) under the appropriate org.
- [ ] Forked/derived from `norrisaftcc/course-csc114-template`.
- [ ] Issue templates added for student-submitted work (one for Code Builders week-N submissions; one for general help).
- [ ] Branch protection enabled on `main` (no direct pushes for students).
- [ ] Drop-folder convention documented (e.g., `week-NN/<student>/`) for Prompt Masters.
- [ ] Linked from A6 onboarding doc.

## Notes

- Cross-reference A6, A7, A8 — these all live in or reference this repo.
EOF
)"
```
Expected: URL printed. Capture as `A5_NUM`.

- [ ] **Step 6: Create A6 — `[A6] Two-track onboarding doc` (P1)**

Run:
```bash
gh issue create \
  --title "[A6] Two-track onboarding doc for students" \
  --label "pre-launch,priority-P1" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A6
**Priority:** P1 — blocks Week 1 student track choice
**Due:** 2026-05-25

## What this is

Onboarding doc explaining the two submission tracks (Code Builders, Prompt Masters) and how to choose. Lives in the class repo and is linked from Canvas Week 1.

## Done when

- [ ] Code Builders track described (full Sacred Flow; CSC-113-style git discipline).
- [ ] Prompt Masters track described (drop submission via GitHub Desktop or web "add file").
- [ ] Trade-offs explained (CB earns process credit; PM earns identical artifact points).
- [ ] How-to-choose guidance provided.
- [ ] Switching policy stated (can students change tracks mid-term? When?).
- [ ] Links to A7 (CB quick-start) and A8 (PM quick-start).
- [ ] Linked from Canvas Week 1 page.

## Notes

- Voice: "Senpai Teacherbot" per CLAUDE.md.
EOF
)"
```
Expected: URL printed. Capture as `A6_NUM`.

- [ ] **Step 7: Create A7 — `[A7] Sacred Flow quick-start (Code Builders)` (P1)**

Run:
```bash
gh issue create \
  --title "[A7] Sacred Flow quick-start (Code Builders)" \
  --label "pre-launch,priority-P1" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A7
**Priority:** P1 — blocks Week 2 (Sacred Flow starts W2 per crosswalk)
**Due:** 2026-05-25

## What this is

Concise quick-start for the Code Builders track: Issue → Branch → Commit → PR → Merge. Targeted at students who haven't been through CSC-113 (no semester-or-two of lead-in). Repurposed from csc_dash Module 01 Git basics block.

## Done when

- [ ] Walks through Issue → Branch → Commit → PR → Merge in order.
- [ ] Shows the GitHub web UI path for each step (not just CLI).
- [ ] Includes a concrete example using a Week 2 submission as the worked case.
- [ ] Explains the per-week retro paragraph expectation.
- [ ] Source: `planning/csc_dash/CSC-114/activities/Module_01_Sacred_Flow_Lab.md` (adapt, don't duplicate).
- [ ] Lives in class repo.

## Notes

- Reference: `planning/pilot_su26/week-02-keras-hello-world/assess.md` for the canonical two-track submission split.
EOF
)"
```
Expected: URL printed. Capture as `A7_NUM`.

- [ ] **Step 8: Create A8 — `[A8] Drop-submission quick-start (Prompt Masters)` (P1)**

Run:
```bash
gh issue create \
  --title "[A8] Drop-submission quick-start (Prompt Masters)" \
  --label "pre-launch,priority-P1" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A8
**Priority:** P1 — blocks Week 1 PM submissions
**Due:** 2026-05-25

## What this is

Quick-start for the Prompt Masters track: GitHub Desktop path and GitHub web UI "add file" path for submitting weekly deliverables by dropping a folder. No issues, no PRs, no branches required.

## Done when

- [ ] GitHub Desktop path documented (with screenshots).
- [ ] Web UI "add file" path documented (with screenshots).
- [ ] Folder naming convention specified (`week-NN/<student>/`).
- [ ] Explains what files go in (notebook + write-up + any required artifacts per week).
- [ ] States that this is sufficient for full artifact credit; CB process credit is extra, not penalty for missing.
- [ ] Lives in class repo.

## Notes

- Reference: `planning/pilot_su26/week-01-cloud-agents/assess.md` (universal drop, Week 1).
EOF
)"
```
Expected: URL printed. Capture as `A8_NUM`.

- [ ] **Step 9: Create A9 — `[A9] Vision-vs-NLP fork comms` (P2)**

Run:
```bash
gh issue create \
  --title "[A9] Vision-vs-NLP fork communication for students" \
  --label "pre-launch,priority-P2" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A9; charter v0.4 §3 (scope: Week 7 fork is per-student)
**Priority:** P2 — blocks Week 5 proposal; can land by Week 4
**Due:** 2026-05-25 (target — can slip to Week 4 if needed)

## What this is

One-pager explaining the two project paths students can choose at the Week 5 proposal milestone: **Vision** (Manning Ch 8–9, image classification + convnets) vs **NLP/LLMs** (Manning Ch 14–16). Decision is per-student; this doc helps them choose.

## Done when

- [ ] Both paths described concretely (what kind of project would land in each).
- [ ] Compute / data expectations for each path made clear.
- [ ] How-to-choose guidance (which path fits which kind of interest/goal).
- [ ] Cross-references Week 5 Assess (proposal rubric — not yet built).
- [ ] Published in class repo and linked from Canvas Week 4 (so students see it before Week 5 proposal is due).

## Notes

- Charter §3 explicitly notes the fork is **per-student during project work**, not an instructor decision per cohort.
- Lowest priority of the Section A items; safe to slip into Week 4 if other P0/P1 work crowds the pre-launch window.
EOF
)"
```
Expected: URL printed. Capture as `A9_NUM`.

- [ ] **Step 10: Create A10 — `[A10] LLM access plan for students` (P1)**

Run:
```bash
gh issue create \
  --title "[A10] LLM access plan for students" \
  --label "pre-launch,priority-P1" \
  --milestone "Pre-launch (2026-05-25)" \
  --body "$(cat <<'EOF'
**Source:** WBS v0.4 row A10; charter v0.4 §4 (constraints — pedagogical stance), §5 (assumptions), §6 (risk)
**Priority:** P1 — pedagogical stance per charter §4 requires LLM access at launch
**Due:** 2026-05-25

## What this is

Confirm and document how students will have working LLM access for tutorials and context-loaded Assess work. Resolves WBS Open Question 4 and partially mitigates the charter §6 risk "Student LLM access inconsistent."

## Done when

- [ ] Decision: class-provided agent (and which one) vs students bring own accounts vs hybrid.
- [ ] If class-provided: API/key/access provisioning plan documented; cost estimate surfaced (charter §4 flags out-of-pocket Claude API costs as risk).
- [ ] If bring-own: list of approved/recommended accounts and any required signups before Day 1.
- [ ] Student communication drafted (if any action is required on their part before Day 1).
- [ ] Plan reflected in A3 course policies and A6 onboarding doc.

## Notes

- Charter §6 lists this as Medium likelihood / Medium impact.
EOF
)"
```
Expected: URL printed. Capture as `A10_NUM`.

- [ ] **Step 11: Verify all 10 issues exist and are properly labeled**

Run:
```bash
gh issue list --label pre-launch --milestone "Pre-launch (2026-05-25)" --limit 20
```
Expected: 10 issues listed, titled `[A1]` through `[A10]`, with the correct priority labels.

---

## Task 6: WBS — backfill `GH issue` column with issue numbers

**Files:**
- Modify: `planning/project_management/csc114-wbs-v0.4.md`

You have `A1_NUM` through `A10_NUM` from Task 5. Now fill them into the Section A table.

- [ ] **Step 1: For each A-row, replace the empty `GH issue` cell with `#<NUM>`**

For A1, find:
```markdown
| A1 | Student-facing syllabus document | | | | | Pulls topic structure from crosswalk; published to Canvas + students |
```

Replace with (substituting the real number for `<A1_NUM>`):
```markdown
| A1 | Student-facing syllabus document | | | | #<A1_NUM> | Pulls topic structure from crosswalk; published to Canvas + students |
```

Apply the same substitution for A2 through A10, using the captured numbers.

- [ ] **Step 2: Verify all 10 rows have an issue link**

Run: `Read planning/project_management/csc114-wbs-v0.4.md` (lines 11–25)
Expected: every row A1–A10 has a non-empty `GH issue` cell containing `#NN`.

- [ ] **Step 3: Stage**

Run: `git add planning/project_management/csc114-wbs-v0.4.md`

---

## Task 7: Commit and push

**Files:** Already staged via Tasks 1, 2, 6.

- [ ] **Step 1: Final pre-commit check**

Run: `git status`
Expected: only `planning/project_management/csc114-wbs-v0.4.md` is staged for commit; no other modified files in the staging area. (If anything else is staged unexpectedly, investigate before committing.)

Run: `git diff --staged --stat`
Expected: single file changed; modest line count (~20 inserts, ~6 deletes plus the column-add insertions across 11 lines).

- [ ] **Step 2: Commit direct to main**

Run:
```bash
git commit -m "$(cat <<'EOF'
WBS v0.4 reconciliation: Weeks 1-3 ✅, Section A issues filed

- Section C status flags updated: W1/W2/W3 marked ✅ (built + merged
  via PR #2 and PR #6); W4 marked 🛠️ (next per rolling-wave).
- Section A table gains a GH issue column with #NN links to the ten
  pre-launch issues filed under the Pre-launch (2026-05-25) milestone
  on GitHub, labeled priority-P0/P1/P2.
- Open Question 6 added: co-instructor variant chapter→module mapping
  from planning/mallory/planning_notes_5_20.txt (2026-05-20); to be
  resolved over coffee, not blocking launch.
- Last updated: 2026-05-21.

Spec: docs/superpowers/specs/2026-05-21-pm-tracking-reconciliation-design.md

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```
Expected: commit created on `main`.

- [ ] **Step 3: Push to origin**

Run: `git push`
Expected: `main` advances to include the new commit.

- [ ] **Step 4: Verify on GitHub**

Run:
```bash
gh api repos/norrisaftcc/course-csc114-template/milestones --jq '.[] | select(.title == "Pre-launch (2026-05-25)") | {title, open_issues, closed_issues, due_on}'
```
Expected: `open_issues: 10`, `closed_issues: 0`, `due_on: "2026-05-25T..."`.

Run: `gh issue list --label pre-launch`
Expected: 10 issues listed.

---

## Verification (overall, end of plan)

- WBS Section C reflects W1–W3 ✅, W4 🛠️.
- WBS Open Questions has 6 items, item 6 mentions the co-instructor variant.
- GitHub milestone `Pre-launch (2026-05-25)` exists with 10 issues attached.
- All 10 issues have correct priority labels (4× P0, 5× P1, 1× P2).
- WBS Section A's `GH issue` column has 10 `#NN` links.
- A single visit to the milestone URL shows the locked-floor burn-down.
- `main` branch advanced by exactly one commit (the WBS reconciliation).

---

## Notes for the implementing engineer

- This is a docs + remote-state task; there is no test framework in this repo. "Verification" means re-reading the file or querying GitHub.
- All ten issues can be created one after another with `gh issue create`; if any one fails (network blip, label not yet propagated), retry just that one — the others are idempotent in the sense that they're independent.
- If you create a duplicate issue by mistake, close it with `gh issue close <num> --reason "not planned" --comment "duplicate of #NN"` rather than deleting.
- The implementing engineer (you) is also the PM here per charter §8. If a step asks for a decision (e.g., a label color, a body sentence), pick the obvious thing and move on — no upstream approval needed for plan-internal details.
