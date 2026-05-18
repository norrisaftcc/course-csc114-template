# Mini-Lesson 2: Story Point Estimation

**Duration**: 10 minutes
**When**: Module 2, Week 3
**Prerequisites**: User stories created in GitHub Issues

---

## Learning Objective
Estimate work using story points and the Fibonacci scale

## The Problem with Hours

You have 8 user stories for your AI project. Your instructor asks: "How long will this take?"

**Your brain**: "Umm... maybe... 2 weeks? Or 3? I don't know, I've never built this before!"

**The problem with estimating in hours**:
- You've never done this exact thing before
- Hours feel precise but are actually guesses
- Different people work at different speeds
- Interruptions happen
- You forget about testing, debugging, documentation

**Story points solve this.**

## What Are Story Points?

Story points measure **complexity and effort**, not time.

Think of story points like T-shirt sizes:
- **Small (1-3 points)**: Quick, simple, you've done similar before
- **Medium (5-8 points)**: Moderate effort, some unknowns
- **Large (13+ points)**: Complex, lots of unknowns, break it down!

###Key Idea: Relative Estimation

You don't estimate each story in isolation. You compare stories to each other.

**Example**:
- Story A: Add a "Save" button → 2 points (simple)
- Story B: Implement user authentication → 8 points (4x as complex)
- Story C: Build AI chat interface → 5 points (between A and B)

## The Fibonacci Scale

We use: **1, 2, 3, 5, 8, 13, 20**

**Why Fibonacci?**
- Gaps get bigger as numbers increase
- Reflects uncertainty: bigger stories = more unknowns
- Forces you to think in ranges, not false precision

**Translation**:
- **1**: Trivial (minutes to an hour)
- **2**: Simple (few hours)
- **3**: Straightforward (half a day)
- **5**: Moderate (full day)
- **8**: Complex (2-3 days)
- **13**: Very complex (a week)
- **20+**: Too big! Break it down!

## How to Estimate: Planning Poker

**Step 1: Pick a Reference Story**
Choose one story everyone understands. Call it 5 points.

**Example**:
```
Reference Story (5 points):
As a student,
I want to ask a question and get an AI response,
So that I can learn from the AI tutor.
```

**Step 2: Compare Other Stories**

For each story, ask: "Is this bigger or smaller than our 5-point story?"

**Story A**:
```
As a student,
I want to see my conversation history,
So that I can review past answers.
```
**Team thinks**: "Simpler than the reference story. Just display previous chat. Maybe a 3?"
**Estimate**: 3 points

**Story B**:
```
As a student,
I want the AI to remember context from earlier in our conversation,
So that I don't have to repeat myself.
```
**Team thinks**: "More complex than reference. Need to manage context, handle token limits. Maybe an 8?"
**Estimate**: 8 points

**Step 3: Discuss Differences**

If team members disagree (one says 3, another says 8):
- Highest and lowest explain their thinking
- Often reveals different assumptions
- Discuss until consensus
- Re-estimate

## Story Point Examples for AI Projects

### 1-Point Stories (Trivial)
```
As a user,
I want a "Clear chat" button,
So that I can start a new conversation.
```
**Why 1?**: Simple button, call a clear function, done.

### 2-Point Stories (Simple)
```
As a user,
I want to see timestamps on each message,
So that I know when responses were given.
```
**Why 2?**: Straightforward - add timestamp display to UI.

### 3-Point Stories (Straightforward)
```
As a user,
I want to save favorite responses,
So that I can easily find helpful answers later.
```
**Why 3?**: Need UI for favoriting, storage, display saved list.

### 5-Point Stories (Moderate)
```
As a student,
I want to export my conversation as PDF,
So that I can submit it with my homework.
```
**Why 5?**: Format conversion, layout, handle images, test printing.

### 8-Point Stories (Complex)
```
As a teacher,
I want to see analytics on student AI usage,
So that I can identify students who need help.
```
**Why 8?**: Data collection, processing, visualization, privacy considerations.

### 13-Point Stories (Very Complex)
```
As a user,
I want the AI to understand and respond to images I upload,
So that I can get help with visual problems.
```
**Why 13?**: Image processing, vision API integration, new UI, error handling, testing various image types.

**Note**: If you estimate 13+, consider breaking the story into smaller stories!

## Breaking Down Large Stories

**Original (20 points - Too big!)**:
```
As a student,
I want a complete study companion with notes, quizzes, and progress tracking,
So that I can manage all my studying in one place.
```

**Broken Down**:
1. **(5 points)** As a student, I want to create and save study notes, so that I can reference them later.
2. **(5 points)** As a student, I want the AI to generate quiz questions from my notes, so that I can test myself.
3. **(8 points)** As a student, I want to see my quiz scores over time, so that I can track my progress.

**Total**: Still 18 points, but now in manageable pieces you can work on separately.

## Your Turn: Practice

Estimate these user stories using Fibonacci (1,2,3,5,8,13,20):

**Reference Story (call this 5 points)**:
```
As a user,
I want to have a conversation with an AI assistant,
So that I can get answers to my questions.
```

**Story 1**:
```
As a user,
I want a "thumbs up/down" button on each response,
So that I can rate answer quality.
```
**Your estimate**: ___ points
**Reasoning**: _______________

**Story 2**:
```
As a user,
I want the AI to maintain conversation context across multiple sessions,
So that I can continue conversations days later.
```
**Your estimate**: ___ points
**Reasoning**: _______________

<details>
<summary>Click for sample answers</summary>

**Story 1**: 2 points
**Reasoning**: Simple UI addition (buttons), store rating, straightforward.

**Story 2**: 8 points
**Reasoning**: More complex than reference. Need persistent storage, session management, context loading, handling token limits across sessions.
</details>

## Assignment for This Week

**Estimate your project backlog**:

1. **Pick Reference**: Choose one story, call it 5 points
2. **Estimate All**: Go through each story, compare to reference
3. **Add Labels**: In GitHub, add "points: X" labels to each issue
4. **Calculate Total**: Add up all story points (this is your backlog size)
5. **Reflect**: Write a brief note about which stories were hardest to estimate and why

### GitHub Labels for Points

Create these labels in your repo:
- `points: 1` (green)
- `points: 2` (light green)
- `points: 3` (yellow-green)
- `points: 5` (yellow)
- `points: 8` (orange)
- `points: 13` (red-orange)
- `points: 20` (red)

### Grading (5 points)
- ✓ All stories have point estimates
- ✓ Reasonable estimates (not all 1s or all 13s)
- ✓ Reference story identified
- ✓ Points visible as GitHub labels
- ✓ Reflection on estimation challenges

## Common Questions

**Q: What if I estimate wrong?**
A: You will! Everyone does. That's OK. You'll get better with practice. Track your velocity (points completed per sprint) to improve accuracy.

**Q: Can I change estimates later?**
A: Yes! If you start working on a "5" and realize it's actually an "8", update it. This helps improve future estimates.

**Q: What if my teammate and I disagree?**
A: Discuss! Often disagreement means you have different understanding of the work. Talking it through helps clarify.

**Q: Do points include testing, documentation, code review?**
A: Yes! A story is not "done" until it's coded, tested, documented, and reviewed. Points include everything.

## Velocity: Why Points Matter

After your first sprint, you'll know your **velocity**: how many points you can complete in 2 weeks.

**Example**:
- Sprint 1: Planned 15 points, completed 12 points → Velocity = 12
- Sprint 2: Plan 12-13 points (your comfortable capacity)
- Sprint 3: Completed 14 points → Velocity increasing!

**Over time**, your velocity stabilizes and estimates improve. By Sprint 4, you'll have realistic expectations.

## Key Takeaways

✓ Story points measure **complexity**, not time
✓ Use **Fibonacci scale**: 1, 2, 3, 5, 8, 13, 20
✓ **Relative estimation**: compare stories to each other
✓ Break down stories bigger than 13 points
✓ It's OK to be wrong—you'll improve with practice
✓ **Velocity** (points per sprint) helps with planning

---

## Resources

- [Estimation Workshop Slides](./slides/estimation-workshop.pdf)
- [Planning Poker Guide](./templates/planning-poker-guide.md)
- [Velocity Tracker Spreadsheet](./templates/velocity-tracker.xlsx)

**Next Mini-Lesson**: Sprint Planning (Week 4)

---

**Drew's Note**: First estimates are always hilariously wrong. I once estimated a "simple" feature as 3 points. It took two weeks and was actually 13 points. Now I know: anything involving third-party APIs is automatically 8+ points. You'll build your own rules like this over time!
