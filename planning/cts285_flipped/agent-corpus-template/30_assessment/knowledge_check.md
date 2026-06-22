# Knowledge Check — Module 4.5 (Self-Graded, Low Stakes)

**Slot:** quick self-check, not graded by anyone.
**How to use it:** answer each question in your head (or out loud) *before* you
open the answer. If you miss one, the answer says where to go re-read. Six
questions, two minutes. This is calibration, not a test.

---

### 1. After the agent drafts user stories and opens a PR, who merges it to `main`?

<details><summary>Answer</summary>

**You do — the human. Never the agent.** This is the one rule that never bends in
this corpus. The agent opens Issues and PRs all day; it stops before the merge.
You review and click merge. If your agent ever merges on its own, you
over-authorized it — dial the approvals back.

*Re-read:* `README.md` ("The one rule that never bends") and
`CLAUDE.md` ("The one rule that overrides everything").
</details>

---

### 2. What two command-line tools are the whole substrate the agent uses to run the Flow?

<details><summary>Answer</summary>

**`git`** (plain git — branches, commits, push) and **`gh`** (the GitHub CLI —
`gh issue create`, `gh pr create`). That's it. There's no magic layer. Every step
the agent runs is a command *you could type by hand* — which is exactly why you
ran the Flow by hand for two modules first. You can't hand off a process you've
never done yourself.

*Re-read:* `CLAUDE.md`, "How to run one Flow cycle."
</details>

---

### 3. What is a user story, and what's the format the agent drafts them in?

<details><summary>Answer</summary>

A **user story** is one need stated from the user's point of view — not a feature
list. The format:

> **As a `<user>`, I want `<goal>`, so that `<reason>`.**

The `so that` is the load-bearing part: it's the *reason*, and checking whether
the reason is *yours* (versus a generic one the AI invented) is half of Part 1 of
the self-grade. A story whose `so that` isn't your real reason is a story for
someone who isn't you.

*Re-read:* `apply.md` Step 3, and `CLAUDE.md` "How to read AGENT_BRIEF.md."
</details>

---

### 4. What is a Given-When-Then (GWT) acceptance criterion, and what makes one *testable*?

<details><summary>Answer</summary>

A **GWT acceptance criterion** says, concretely, when a story is satisfied:

> **Given** `<some starting state>`, **When** `<some action>`, **Then**
> `<some checkable result>`.

It's **testable** when you can actually *check* the "Then" — there's an
observable result, not an adjective. *"the agent asks relevant questions"* is not
testable ("relevant" by whose measure?). *"Given I flagged 'recursion' as shaky,
When I start a session, Then at least 3 of the first 5 questions are tagged
'recursion'"* is — you can count. Catching the untestable ones is Part 1's
testability check.

*Re-read:* `self_grade_spec.md` Part 1, and `examples.md` Pair 1.
</details>

---

### 5. Why is this module's Assess *self-graded* instead of scored by an instructor?

<details><summary>Answer</summary>

Because the skill being trained is **customer judgment** — deciding whether a set
of requirements and a design fulfill *your* need — and **nobody else is the
customer.** If an instructor scored it, you'd start writing for the instructor
instead of asking the only question that matters: *does this give me what I
actually wanted?* That question is the core of requirements analysis, and you
only learn it by being on the hook for the answer yourself. So you grade it,
honestly. The grade is for you.

*Re-read:* `assess.md` ("Why this one is self-graded").
</details>

---

### 6. The corpus calls the agent a "fast junior." What does that framing mean for how you treat its draft?

<details><summary>Answer</summary>

It means the agent is **fast and tireless on the typing, but frequently
confidently wrong on the judgment.** Treat its draft like a quick junior's first
pass: useful to react to, *not* the final word. You trust it to run the
mechanical Flow (open clean Issues and PRs); you do **not** trust it to know who
your user is or what you really meant. Reacting to a wrong-but-plausible draft is
far easier than facing a blank page — and catching where it's wrong is the whole
skill. A miss isn't the AI failing; that gap is the Systems Analyst's job.

*Re-read:* `CLAUDE.md` (last line, "You are a fast junior, not the customer") and
`00_orientation/overview.md` ("The honest part").
</details>

---

### 7 (bonus). Two-track submission: what's the difference between how Code Builders and Prompt Masters turn this in?

<details><summary>Answer</summary>

The **thinking is identical**; only the mechanics differ.

- **Code Builders** submit through the Flow: write `self_assessment.md`, have the
  agent open the Issue + PR, **you** review and merge, submit the merged PR link.
  They earn process credit on top for the real PR.
- **Prompt Masters** submit by drop: write the file in any editor or the GitHub
  web "add file" button — no issue, branch, or PR — and submit the file.

Both turn in the same three deliverables (Practice write-up, filled corpus,
self-assessment). Same judgment, lighter mechanics.

*Re-read:* `assess.md` ("The two-track split") and `self_grade_spec.md` ("What
you submit").
</details>

---

**Done?** If any answer surprised you, the re-read pointer is right there. Then
go run the real thing in [`self_grade_spec.md`](self_grade_spec.md).
