# Mini-Lesson 1: Writing User Stories

**Duration**: 10 minutes
**When**: Module 1, Week 1
**Prerequisites**: Students have project idea from CSC-113

---

## Learning Objective
Write user stories in the format: "As a [user], I want [feature], so that [benefit]"

## Why User Stories?

In CSC-113, you wrote a PRD (Product Requirements Document). That works, but it's hard to:
- Break into small pieces
- Estimate how long things take
- Track progress
- Change priorities

**User stories solve this.** Each story is one feature from a user's perspective.

## The Format

```
As a [type of user],
I want [some feature],
So that [some benefit].
```

**Example** (AI Tutor App):
```
As a student,
I want to ask questions in natural language,
So that I can get help without learning special syntax.
```

## Three Parts Explained

### 1. As a [user]
**Who** needs this feature?
- Be specific: "student", "teacher", "admin", not just "user"
- Can be: end user, developer, system administrator

**Examples**:
- As a student
- As a teacher reviewing student work
- As a developer maintaining the code

### 2. I want [feature]
**What** does the user want to do?
- One feature per story
- Action-oriented (verb)
- User-facing, not technical

**Good**: "I want to save my conversation history"
**Bad**: "I want a database to store chat logs" (too technical)

### 3. So that [benefit]
**Why** does the user want this?
- The value or benefit
- Helps prioritize (is this benefit important?)
- Can reveal if feature is really needed

**Good**: "So that I can review past answers later"
**Bad**: "So that the data persists" (too technical)

## Examples from AI Projects

### Good User Stories ✓

```
As a student studying history,
I want my AI tutor to quiz me on dates and events,
So that I can practice for my exam.
```

```
As a teacher,
I want to see which topics students ask about most,
So that I can adjust my lessons to address common confusion.
```

```
As a visually impaired user,
I want voice input and output,
So that I can use the AI assistant without typing.
```

### Needs Improvement ✗

```
As a user,
I want AI,
So that I can do stuff.
```
**Problem**: Too vague. Who is the user? What specific feature? What benefit?

**Better**:
```
As a busy professional,
I want the AI to summarize long documents,
So that I can quickly understand key points without reading everything.
```

---

```
I want the app to use GPT-4.
```
**Problem**: Not user-focused, too technical, no "so that" benefit.

**Better**:
```
As a user needing accurate answers,
I want responses that cite sources,
So that I can verify the information is correct.
```

## Acceptance Criteria

Each user story needs **acceptance criteria**: How do we know it's done?

**Format**: Bullet list of testable conditions

**Example**:
```
User Story:
As a student,
I want to ask questions in natural language,
So that I can get help without learning special syntax.

Acceptance Criteria:
- User can type a question in plain English
- AI responds within 3 seconds
- Response directly answers the question
- User can ask follow-up questions
- Conversation history is visible
```

## Your Turn: Practice

Convert these PRD-style requirements into user stories:

1. **PRD**: "The app should have a dark mode"
   **Your Story**:
   ```
   As a _____________,
   I want _____________,
   So that _______________.
   ```

2. **PRD**: "Implement chat history persistence"
   **Your Story**:
   ```
   As a _____________,
   I want _____________,
   So that _______________.
   ```

<details>
<summary>Click for sample answers</summary>

1. ```
   As a user working late at night,
   I want a dark mode option,
   So that the bright screen doesn't strain my eyes.
   ```

2. ```
   As a returning user,
   I want my previous conversations to be saved,
   So that I can continue where I left off without repeating context.
   ```
</details>

## Assignment for This Week

**Convert your AI project into user stories**:

1. **Brainstorm**: List all features your AI project could have
2. **Write Stories**: Create 5-8 user stories using the format
3. **Add Acceptance Criteria**: 3-5 criteria per story
4. **Submit**: Create GitHub Issues (one per story)

### GitHub Issue Template

```markdown
Title: [Brief feature name]

## User Story
As a [user type],
I want [feature],
So that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Notes
[Any additional context or technical details]
```

### Grading (5 points)
- ✓ 5-8 user stories created
- ✓ All three parts present (As a.../I want.../So that...)
- ✓ User-focused (not technical jargon)
- ✓ 3-5 acceptance criteria per story
- ✓ Posted as GitHub Issues

## Common Questions

**Q: Can I have multiple "As a" users in one story?**
A: No. One story = one user type. If multiple users need it, write separate stories.

**Q: How big should a story be?**
A: Small enough to complete in a few days. If it's bigger, break it into multiple stories.

**Q: What if I don't know all the details yet?**
A: That's OK! Stories can be placeholders. You'll refine them during sprint planning.

**Q: Can I change stories later?**
A: Yes! Agile is about adapting. You'll update stories as you learn.

## Key Takeaways

✓ User stories focus on **who, what, why**
✓ Format: As a [user], I want [feature], so that [benefit]
✓ Add acceptance criteria to define "done"
✓ Stories go in GitHub Issues (your backlog)
✓ Small, user-focused, valuable

---

## Resources

- [User Story Template](./templates/user-story-template.md)
- [Example Project Backlog](./examples/sample-backlog.md)
- [User Story Checklist](./templates/user-story-checklist.md)

**Next Mini-Lesson**: Story Points & Estimation (Week 3)

---

**Drew's Note**: Writing user stories feels awkward at first. That's normal! By your 3rd or 4th project, you'll be writing these in your sleep. Focus on: Who needs it? What do they want? Why do they care?
