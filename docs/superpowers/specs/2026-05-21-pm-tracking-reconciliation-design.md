# Design: PM tracking reconciliation — WBS update + Section A GitHub issues

**Date:** 2026-05-21 (T-5 days from class start 2026-05-26; T-4 from locked-floor MVP 2026-05-25)
**Status:** Approved for implementation
**Author:** Teacherbot (with Drew, lead instructor / PM)

---

## 1. Problem

Three planning artifacts now coexist in the repo:

- `planning/pilot_su26/crosswalk.md` — 8-week topic spine (Manning chapters → L/P/A/A slots).
- `planning/project_management/csc114-charter-v0.4.md` — project charter (scope, locked floor, rolling-wave model, milestones).
- `planning/project_management/csc114-wbs-v0.4.md` — work breakdown (10 pre-launch packages A1–A10; per-week template B1–B10; per-week status board Section C).

The WBS Section C status board is **stale** vs. shipped reality:

| Week | WBS C says | Reality |
|---|---|---|
| 1 | 🛠️ in progress | ✅ built + merged (PR #2) |
| 2 | 🛠️ in progress | ✅ built + merged (PR #2) |
| 3 | ⏭️ deferred | ✅ built + merged (PR #6) |
| 4–8 | ⏭️ deferred | Not yet started — accurate |

WBS Section A (10 pre-launch packages, all due 2026-05-25) has **no owners and no status set** despite the lock-floor deadline being 4 days away. There is no single place where someone can see "what blocks launch, who's on it, what's done."

A co-instructor variant chapter→module mapping (`planning/mallory/planning_notes_5_20.txt`, 2026-05-20) diverges slightly from the canonical crosswalk and is not currently logged anywhere as an open question.

## 2. Goals

- Make "what's done / what's next" answerable in one glance.
- Put accountability on the 10 pre-launch packages before the locked-floor deadline.
- Keep doc-of-record markdown (charter, WBS) and live work tracking (GitHub) in sync without duplicating effort.
- Surface the co-instructor variant as a flagged open question without forcing premature resolution.

## 3. Non-goals

- Not migrating per-week content tracking (Section B/C) to GitHub. WBS Section C stays as the per-week board.
- Not building Weeks 4–8 content (separate work; happens on the rolling-wave runway).
- Not resolving the chapter→module variant; just logging it.
- Not modifying the charter v0.4 structurally — only adding cross-references if/where they're load-bearing.

## 4. Approach

**Hybrid tracking model:**

- **GitHub Issues + one Milestone** for the 10 pre-launch packages (A1–A10), because the 2026-05-25 deadline benefits from per-package accountability, P0/P1/P2 priority signal, and a single milestone burn-down view.
- **WBS Section C (markdown)** stays as the source of truth for per-week content (B/C work). Updated in place to reflect Weeks 1–3 done and Week 4 next-up.
- **WBS Section A (markdown)** stays as the doc-of-record for what each package *is*, plus gains a `GH issue` column pointing into GitHub for *where the work is happening*.

## 5. Components

### 5.1 WBS in-place updates (`planning/project_management/csc114-wbs-v0.4.md`)

- Header: add `**Last updated:** 2026-05-21` line.
- Section A table: add a `GH issue` column (rightmost), populated with `#NN` links once issues exist.
- Section C: update status flags for Weeks 1–4. Concretely:
  - W1: 🛠️ → ✅
  - W2: 🛠️ → ✅
  - W3: ⏭️ → ✅
  - W4: ⏭️ → 🛠️ (next up; per charter §2 rolling-wave, W4 needs draft before W3 starts ~2026-06-02)
  - W5–W8: unchanged (⏭️)
- "Open questions still outstanding": append item 6 — `"Co-instructor variant chapter→module mapping (planning/mallory/planning_notes_5_20.txt, 2026-05-20). Specific divergences: Ch 4 paired with Ch 8 in M4 (current crosswalk splits these across W2 and W6); Ch 6 vs Ch 5 placement in M5; 'Exit Ticket' pedagogical approach not yet incorporated. Resolve over coffee with co-instructor; not blocking launch."`

### 5.2 GitHub labels

Create if not present:

- `pre-launch` — scope tag for Section A work
- `priority-P0` — blocks class start (2026-05-26)
- `priority-P1` — blocks Week 1 functioning
- `priority-P2` — blocks Week 5 fork; not Day 1

### 5.3 GitHub milestone

- Name: `Pre-launch (2026-05-25)`
- Due date: 2026-05-25
- Description: short — "Locked-floor work per charter v0.4 §2. All Section A work packages from WBS v0.4."

### 5.4 Ten GitHub issues (A1–A10)

One issue per WBS Section A row. Title format: `[An] <package title>`. Each issue gets the `pre-launch` label, one of the priority labels, and is attached to the milestone above. Owners unassigned; lead/co-instructor pick up via GitHub UI.

Priority assignment:

| WBS row | Title | Priority | Rationale |
|---|---|---|---|
| A1 | Student-facing syllabus document | P0 | Required to publish course on Day 1 |
| A2 | Assessment structure | P0 | Required for syllabus + grading on Day 1 |
| A3 | Course policies | P0 | Required on Canvas Day 1 |
| A4 | Canvas shell + L/P/A/A page template | P0 | Required for Canvas to exist Day 1 |
| A5 | GitHub org / class repo setup | P1 | Needed before Week 1 Code Builders can submit |
| A6 | Two-track onboarding doc | P1 | Needed before Week 1 students choose track |
| A7 | Sacred Flow quick-start (Code Builders) | P1 | Needed before Week 2 (per crosswalk, SF starts W2) |
| A8 | Drop-submission quick-start (Prompt Masters) | P1 | Needed Week 1 for the universal drop submission |
| A9 | Vision-vs-NLP fork comms | P2 | Decision is at Week 5 proposal; comms can land by W4 |
| A10 | LLM access plan for students | P1 | Pedagogical stance per charter §4 requires LLM access at launch |

Issue body template:

```markdown
**Source:** WBS v0.4 row A<n>; charter v0.4 §<section>
**Priority:** P<0|1|2>
**Due:** 2026-05-25 (locked-floor MVP)

## What this is

<one paragraph from WBS row "Notes" column, lightly reworded>

## Done when

- [ ] <criterion 1>
- [ ] <criterion 2>
- [ ] <criterion 3>

## Notes

<any open questions or dependencies from the WBS row>
```

`Done when` checklist items are derived from each WBS row's "Notes" column and the charter Definition-of-Done floor (charter v0.4 §2).

### 5.5 Backfill `GH issue` column in WBS

After issues are created, edit the WBS Section A table to populate the `GH issue` column with `#NN` references for each row. Keeps WBS-as-doc-of-record linked to where work happens.

## 6. Sequencing

1. Edit WBS (Section C status flags; header timestamp; Open Questions append; add `GH issue` column header with empty cells).
2. Create the three priority labels (`gh label create`) — skip if already present.
3. Create the milestone (`gh api` against `/repos/.../milestones`).
4. Create the 10 issues (`gh issue create`), capturing their issue numbers.
5. Edit WBS Section A again to fill in the `#NN` issue links.
6. `git add` + `git commit` + `git push` direct to `main` (user-approved; WBS is a tracking doc, no PR review value).

## 7. Verification

Done when:

- WBS Section C reflects W1–W3 ✅, W4 🛠️.
- WBS Open Questions has the co-instructor variant entry.
- GitHub milestone `Pre-launch (2026-05-25)` exists with 10 issues attached.
- All 10 issues have correct priority label and the `pre-launch` label.
- WBS Section A's `GH issue` column has 10 `#NN` links pointing to the right issues.
- A single visit to `https://github.com/norrisaftcc/course-csc114-template/milestone/<n>` shows the locked-floor burn-down at a glance.

## 8. Out of scope (future passes)

- Building Weeks 4–8 content (separate work on the rolling-wave runway).
- Resolving the chapter→module variant with the co-instructor (logged as open question; resolved over coffee).
- Per-week content issues (B/C work) in GitHub. Stays in WBS Section C.
- Monday runway-check automation. Charter §9 says it's a manual ritual; that's fine for the pilot.
- A "tracking" pinned issue listing all open work. Milestone view in GitHub already does this.

## 9. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Issues created but neither instructor assigns/picks them up before 2026-05-25 | Med | High | Milestone burn-down visible; lead instructor (PM per charter §8) checks Monday |
| WBS Section A column gets out-of-sync as issues close | Low | Low | Update WBS at term retro (charter §9 milestone "Course retrospective") |
| Mallory variant resolution gets dropped | Med | Low-Med | Logged as Open Question #6 in WBS; visible on every WBS review |
| Issue body templates don't capture enough context | Low | Low | Each issue links back to WBS row + charter section; canonical context is one click away |
