# Week 2 Assignment: "User Story Backlog for ML Project"
## CSC-114 AI I - Project Management Meets Machine Learning

**Due**: End of Week 2 (Friday, 11:59 PM)
**Points**: 25 (25% of Module 1 grade)
**Submission**: Via GitHub Issues (user story backlog)

---

## ASSIGNMENT OVERVIEW

This week bridges machine learning and project management. You've trained your first ML model - now you'll learn to plan ML projects like a professional using **user stories**. This skill is critical for CSC-289 capstone project success.

**What You're Learning:**
- Writing user stories for ML features
- Creating acceptance criteria for ML deliverables
- Building a product backlog in GitHub Issues
- Thinking about ML from user perspective (not just algorithms)

**Why This Matters**: Real ML projects fail when developers build cool algorithms nobody needs. User stories keep you focused on delivering value.

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Write user stories in the format: "As a [user], I want [feature], so that [benefit]"
2. Create clear, testable acceptance criteria for ML features
3. Organize user stories as GitHub Issues
4. Apply project management thinking to technical work

---

## PREREQUISITE STEPS

### ✅ Checklist
- [ ] Completed Week 1 assignment (ML environment working)
- [ ] Reviewed PM Mini-Lesson #1: "Writing User Stories" (in `pm-materials/01-User-Stories-Mini-Lesson.md`)
- [ ] Understand the project scenario below
- [ ] GitHub repository ready for new issues

---

## THE PROJECT SCENARIO

You're building **"StudyBuddy AI"** - an AI tutor that helps students prepare for exams.

**High-Level Vision**:
Students can upload study materials, chat with an AI tutor about the content, take practice quizzes, and track their progress over time.

**Your Role**: Break this vision into user stories that can be implemented piece by piece.

---

## PART 1: REVIEW USER STORY FORMAT

### The Template
```
As a [type of user],
I want [some feature],
So that [some benefit].

Acceptance Criteria:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

### Example for StudyBuddy AI
```
As a student studying for biology exam,
I want to upload my textbook chapter as a PDF,
So that the AI can answer questions about the specific content.

Acceptance Criteria:
- [ ] User can select and upload PDF file (< 10MB)
- [ ] System extracts text from PDF successfully
- [ ] System confirms upload with "Ready to study [filename]" message
- [ ] Uploaded content is available for AI queries
- [ ] Error message shown if PDF is unreadable
```

**Notice**:
- Specific user type ("student studying for biology")
- One clear feature ("upload PDF")
- Valuable benefit ("AI can answer about specific content")
- Testable acceptance criteria (can verify each)

---

## PART 2: CREATE YOUR USER STORY BACKLOG

**Your Task**: Create 8-10 user stories for StudyBuddy AI covering different features.

### Required Story Categories

**Category 1: Core AI Functionality (2-3 stories)**
Examples:
- Chat with AI about study material
- Get AI-generated practice questions
- Receive explanations for difficult concepts

**Category 2: Study Tools (2-3 stories)**
Examples:
- Take practice quizzes
- Create flashcards from content
- Get study recommendations

**Category 3: Progress Tracking (1-2 stories)**
Examples:
- See quiz scores over time
- Track topics studied
- View learning streaks

**Category 4: User Experience (2-3 stories)**
Examples:
- Save favorite AI responses
- Export study notes
- Customize AI tutor personality
- Dark mode for late-night studying

### Quality Requirements

Each user story must have:
1. ✅ Specific user type (not just "user")
2. ✅ Clear, single feature
3. ✅ Valuable benefit
4. ✅ 3-5 acceptance criteria
5. ✅ Realistic for ML implementation

---

## PART 3: CREATE GITHUB ISSUES

**Step 1: Set Up Issue Template**

In your repository, create `.github/ISSUE_TEMPLATE/user-story.md`:

```markdown
---
name: User Story
about: User story for ML feature
title: '[STORY] '
labels: user-story
assignees: ''
---

## User Story
As a [user type],
I want [feature],
So that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Notes
[Any ML considerations, data requirements, or implementation hints]

## Priority
[Must Have / Should Have / Could Have / Won't Have]
```

**Step 2: Create Issues for Each Story**

For each of your 8-10 user stories:
1. Click "New Issue"
2. Use your template
3. Fill in completely
4. Add label: `user-story`
5. Add label for category: `core-ai`, `study-tools`, `progress`, or `ux`
6. Assign to yourself

**Step 3: Prioritize with Labels**

Add priority labels:
- `priority: must-have` - Critical features (3-4 stories)
- `priority: should-have` - Important but not critical (3-4 stories)
- `priority: could-have` - Nice to have if time (2-3 stories)

---

## PART 4: EXAMPLE USER STORIES

### Good Example ✓
```
As a student with ADHD,
I want short, focused quiz sessions (5 questions max),
So that I can test my knowledge without feeling overwhelmed.

Acceptance Criteria:
- [ ] User can select quiz length (5, 10, or 20 questions)
- [ ] Default quiz length is 5 questions
- [ ] Timer shows estimated completion time
- [ ] User can save progress and return later
- [ ] Quiz automatically submits after selected number of questions
```
**Why it's good**: Specific user need, clear feature, testable criteria

### Needs Improvement ✗
```
As a user,
I want AI,
So that I can study.
```
**Problems**: Too vague, no specific feature, unclear benefit

**Better Version**:
```
As a visual learner,
I want the AI to generate diagrams explaining concepts,
So that I can understand complex relationships better than text alone.

Acceptance Criteria:
- [ ] AI can create simple flowcharts for processes
- [ ] AI can generate concept maps for topic relationships
- [ ] Diagrams are downloadable as PNG
- [ ] User can request diagram for any topic discussed
```

---

## PART 5: ML-SPECIFIC CONSIDERATIONS

Some acceptance criteria should address ML challenges:

### Model Accuracy
```
- [ ] AI answers are factually correct (verified against source material)
- [ ] System indicates confidence level on responses
- [ ] User can flag incorrect answers for review
```

### Response Time
```
- [ ] AI responds within 3 seconds for simple questions
- [ ] Loading indicator shown for longer processing
- [ ] User can cancel long-running requests
```

### Data Requirements
```
- [ ] System handles documents up to 50 pages
- [ ] Works with common formats (PDF, DOCX, TXT)
- [ ] Gracefully handles corrupted or unreadable files
```

**Your Task**: Include at least 3 ML-specific acceptance criteria across your stories.

---

## PART 6: REFLECTION DOCUMENT

Create `week_02_reflection.md` in your repository:

### Reflection Questions

**1. User-Centric Thinking**
- How did thinking about "users" change your approach to ML features?
- What user needs surprised you or hadn't considered initially?

**2. Acceptance Criteria**
- Which acceptance criteria were hardest to write? Why?
- How specific should criteria be for ML features (where results aren't always predictable)?

**3. Prioritization**
- Which features did you mark as "must have"? Why?
- Which features moved to "could have"? What made them lower priority?

**4. ML Challenges**
- What ML-specific challenges did your acceptance criteria address?
- What ML limitations might affect user stories (e.g., accuracy, speed, data needs)?

**5. Looking Ahead**
- If you were actually building StudyBuddy AI, where would you start?
- What would your MVP (minimum viable product) include?

---

## SUBMISSION CHECKLIST

- [ ] 8-10 user stories created as GitHub Issues
- [ ] Each story follows proper format (As a.../I want.../So that...)
- [ ] Each story has 3-5 acceptance criteria
- [ ] Stories labeled with category and priority
- [ ] At least 3 ML-specific acceptance criteria across stories
- [ ] Issue template created
- [ ] Reflection document complete
- [ ] README updated with link to user story issues

**Submission**: Repository URL + link to Issues page showing all user stories

---

## GRADING RUBRIC

**User Story Quality (12 points)**
- ✓ Proper format used (2 pts)
- ✓ Specific user types, not generic "user" (2 pts)
- ✓ Single, clear feature per story (2 pts)
- ✓ Valuable benefit articulated (2 pts)
- ✓ Stories are realistic for ML (2 pts)
- ✓ Good variety across categories (2 pts)

**Acceptance Criteria (8 points)**
- ✓ 3-5 criteria per story (2 pts)
- ✓ Criteria are specific and testable (3 pts)
- ✓ ML-specific considerations included (3 pts)

**Reflection & Documentation (5 points)**
- ✓ Thoughtful answers to reflection questions (3 pts)
- ✓ README updated with links (1 pt)
- ✓ Issue template created (1 pt)

**Process (Bonus 2 points)**
- ✓ Issues properly labeled and organized
- ✓ Professional presentation

---

## COMMON MISTAKES TO AVOID

**❌ Too Technical**
Bad: "As a developer, I want to implement BERT embeddings..."
Good: "As a student, I want accurate answers to my questions..."

**❌ Too Vague**
Bad: "The system should work well"
Good: "Response time under 3 seconds for 90% of queries"

**❌ No Real Benefit**
Bad: "I want flashcards so that I can have flashcards"
Good: "I want flashcards so that I can practice recalling information actively"

**❌ Combining Multiple Features**
Bad: "I want to chat, take quizzes, and track progress..."
Good: Split into 3 separate user stories

---

## RESOURCES

- [PM Mini-Lesson: User Stories](../pm-materials/01-User-Stories-Mini-Lesson.md)
- [User Story Template](../pm-materials/templates/user-story-template.md)
- [Agile Alliance: User Stories](https://www.agilealliance.org/glossary/user-stories/)
- [Mountain Goat Software: User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)

---

## REAL-WORLD CONNECTION

**Industry Practice**: Tech companies (Google, Microsoft, Amazon) use user stories to plan AI/ML features. Data scientists don't just build models - they work with product managers to define user needs, acceptance criteria, and success metrics.

**Career Skill**: Whether you become an ML engineer, data scientist, or PM, you'll write/review user stories. This assignment builds a skill you'll use throughout your career.

**CSC-289 Preview**: Your capstone project will require user stories like these. Starting practice now sets you up for success later.

---

## LOOKING AHEAD

**Next Week (Week 3-4)**: You'll learn **story point estimation** - how to estimate how long user stories take to implement. Then you'll start your first real sprint, selecting stories from your backlog and building them!

---

**Drew's Note**: I've seen students resist user stories at first ("can't I just code?!"), then later thank me when their capstone projects have clear direction instead of scope chaos. User stories are your project management superpower - they keep you focused on delivering value, not just cool tech.

**Pro Tip**: Save this backlog! You might actually build StudyBuddy AI as a capstone project. Several past students have turned class exercises into real products or portfolio pieces.

**Favorite Mistake**: Students write stories like "As a developer, I want to use TensorFlow..." That's not a user story - that's a technical decision. Always write from the END USER's perspective!
