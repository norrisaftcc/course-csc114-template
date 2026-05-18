# Mini-Lesson 3: Sprint Planning

**Duration**: 10 minutes
**When**: Module 2, Week 4
**Prerequisites**: Backlog estimated with story points

---

## Learning Objective
Plan a 2-week sprint by selecting stories, setting a sprint goal, and committing to deliverables

## What is Sprint Planning?

**Sprint planning** is the meeting where you decide:
1. **What** will we build in the next 2 weeks?
2. **Why** are we building it? (Sprint Goal)
3. **How** will we build it? (Task breakdown)

**In CSC-113**: You just started working and figured it out as you went.
**In CSC-114**: You plan first, which makes execution smoother.

## Before Sprint Planning

You need:
- ✓ **Product backlog** (all your user stories)
- ✓ **Story point estimates** on each story
- ✓ **Prioritized backlog** (most important stories at top)
- ✓ **Velocity** (if this isn't your first sprint)

## The Sprint Planning Process

### Step 1: Set Sprint Duration
**For CSC-114**: All sprints are 2 weeks (matching module schedule)

### Step 2: Determine Capacity
**How many points can you complete in 2 weeks?**

**First Sprint** (no velocity data yet):
- Estimate conservatively: 10-15 points
- You'll adjust based on what you actually complete

**Later Sprints** (have velocity):
- Use your average velocity from previous sprints
- Example: Sprint 1 = 12 points, Sprint 2 = 14 points → Plan for ~13 points

**Adjust for**:
- Holidays or breaks: reduce capacity
- Extra time (spring break): don't increase capacity (you'll procrastinate!)
- Sick or stressed: be honest, reduce capacity

### Step 3: Define Sprint Goal
**Sprint Goal**: A short sentence describing what you'll accomplish.

**Not a Goal** ✗:
- "Complete 5 user stories"
- "Do stuff"
- "Make progress"

**Good Goals** ✓:
- "Users can have basic conversations with the AI"
- "Implement core chat functionality"
- "Build MVP of note-taking feature"

**Why Goals Matter**:
- Focus: When you're stuck, the goal reminds you what's important
- Flexibility: If a story is harder than expected, you can adjust other stories to still meet the goal
- Motivation: Clear target to aim for

### Step 4: Select Stories
**Pull stories from top of backlog** (highest priority first) **until you reach capacity**.

**Example**:
```
Your capacity: 13 points
Your velocity from last sprint: 12 points

Backlog (prioritized):
□ Story A: Basic AI conversation (5 pts)
□ Story B: Save conversation history (3 pts)
□ Story C: Export as PDF (5 pts)
□ Story D: Dark mode UI (2 pts)
□ Story E: User authentication (8 pts)
□ Story F: Analytics dashboard (13 pts)

Selected for Sprint:
✓ Story A (5 pts)
✓ Story B (3 pts)
✓ Story C (5 pts)
---
Total: 13 points ✓

Story D (2 pts) would put you at 15 pts → too much!
Save for next sprint.
```

### Step 5: Break Stories into Tasks

For each story, list the **technical tasks** needed.

**Story**:
```
As a student,
I want to export my conversation as PDF,
So that I can submit it with homework.
(5 points)
```

**Tasks**:
- [ ] Research PDF generation libraries (1 hour)
- [ ] Set up PDF library in project (30 min)
- [ ] Create conversation formatter (2 hours)
- [ ] Add "Export" button to UI (1 hour)
- [ ] Implement export function (3 hours)
- [ ] Test with long conversations (1 hour)
- [ ] Handle edge cases (empty chat, special characters) (1 hour)
- [ ] Write documentation (30 min)

**Why task breakdown**:
- Makes work less overwhelming
- Easier to track daily progress
- Can parallelize (if working in a team)
- Reveals hidden complexity

### Step 6: Create Sprint Backlog
**Sprint backlog** = Stories + Tasks you've committed to for this sprint

**GitHub Setup**:
1. Create milestone: "Sprint 1"
2. Assign selected stories to Sprint 1 milestone
3. Convert tasks to checkboxes in story description
4. Move stories to "To Do" column on project board

## Sprint Planning Document Template

```markdown
# Sprint [Number] Planning

**Sprint Duration**: [Start Date] - [End Date] (2 weeks)
**Sprint Goal**: [One sentence goal]

## Team Capacity
- Available hours: ~40 hours (20 hours/week × 2 weeks)
- Velocity (from last sprint): [X] points
- Planned capacity for this sprint: [X] points

## Selected User Stories

### Story 1: [Title] ([X] points)
**As a** [user],
**I want** [feature],
**So that** [benefit].

**Tasks**:
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

---

### Story 2: [Title] ([X] points)
[Repeat above format]

---

## Total Commitment
**Stories**: [Number] stories
**Total Points**: [X] points
**Stretch Goal** (if we finish early): [Story name] ([X] pts)

## Definition of Done
A story is "done" when:
- [ ] Code written and committed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Pull request reviewed and merged
- [ ] Acceptance criteria met

## Risks/Concerns
- [List any concerns, like: "Never used PDF library before"]
- [Mitigation plans]
```

## Your Turn: Plan Your First Sprint

Using your estimated backlog from last week:

1. **Set capacity**: 10-15 points (your first sprint, be conservative!)
2. **Write sprint goal**: What will you accomplish?
3. **Select stories**: Pull from backlog until you hit capacity
4. **Break down**: Choose 2 stories, break into tasks
5. **Document**: Fill out sprint planning document

**Submit**: Sprint planning document in your repo (`sprint-1-plan.md`)

### Grading (10 points)
- ✓ Clear sprint goal (2 pts)
- ✓ Realistic capacity (2 pts)
- ✓ Stories selected match capacity (2 pts)
- ✓ At least 2 stories broken into tasks (2 pts)
- ✓ Definition of done included (1 pt)
- ✓ Sprint backlog in GitHub (1 pt)

## Common Mistakes

### Over-commitment ✗
**Mistake**: "I'll do 30 points in 2 weeks!"
**Reality**: You complete 8 points, feel like a failure.
**Fix**: Be conservative. Better to finish early and pick up a stretch goal than to fail your commitment.

### No Sprint Goal ✗
**Mistake**: Random collection of stories with no theme.
**Fix**: Sprint goal gives focus. If stories don't support the goal, why are they in this sprint?

### No Task Breakdown ✗
**Mistake**: "Story A (8 points)" with no tasks.
**Problem**: How do you track progress? Where do you start?
**Fix**: Break every story into tasks. Tasks should be < 4 hours each.

### Ignoring Velocity ✗
**Mistake**: "Last sprint I did 10 points, but THIS sprint I'll do 20!"
**Reality**: Velocity doesn't double magically.
**Fix**: Use your actual historical velocity. Improve gradually.

## Sprint Planning Anti-Patterns

**The Kitchen Sink**: "Let's do everything!"
- Fix: Pick the most important stories only

**The Vague Goal**: "Make progress on the project"
- Fix: Specific, testable goal

**The Perfectionist**: "Every story must be perfect!"
- Fix: Remember: done is better than perfect. You can iterate!

**The Optimist**: "Nothing will go wrong!"
- Fix: Plan for 80% capacity (leave buffer for surprises)

## After Sprint Planning

Now you have:
- ✓ Sprint goal (your North Star)
- ✓ Sprint backlog (your todo list)
- ✓ Tasks (your daily work breakdown)

**Next steps**:
- Daily standups (track progress)
- Update sprint board daily
- Communicate blockers immediately

## Key Takeaways

✓ Sprint planning happens at the **start** of each sprint
✓ Select stories based on **capacity** and **velocity**
✓ Every sprint needs a clear **goal**
✓ Break stories into **tasks** (< 4 hours each)
✓ Be **conservative** with first estimates
✓ Document your plan (sprint planning doc)

---

## Resources

- [Sprint Planning Template](./templates/sprint-planning-template.md)
- [Sprint Planning Checklist](./templates/sprint-planning-checklist.md)
- [Sample Sprint Plan](./examples/sprint-1-example.md)
- [Video: How to Run Sprint Planning Solo](./videos/solo-sprint-planning.mp4)

**Next Mini-Lesson**: Daily Standups & Progress Tracking (Week 5)

---

**Drew's Note**: Sprint planning feels like "extra work" at first. "Can't I just start coding?!" But 30 minutes of planning saves hours of wandering aimlessly. Trust the process. By Sprint 3, you'll WANT to plan because you'll see how much smoother your work flows.

**Pro Tip**: Set a recurring calendar reminder every 2 weeks: "Sprint Planning Day." Make it a ritual. Same day, same time, same process. Consistency builds the habit.
