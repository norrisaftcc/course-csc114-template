# Module 4 Activity: Sprint Planning Workshop - First Real Sprint Planning

**Duration**: 60 minutes
**Format**: Full class simulation (Scrum team)
**Materials Needed**:
- Sprint Planning Template (printed or digital)
- Velocity data from Sprint 1 (instructor provides)
- Capstone project backlog (from project proposals)
- Sticky notes or digital Kanban board
- Planning poker cards (optional)

**Learning Objectives**:
- Calculate actual velocity from completed sprint
- Use empirical data to plan sprint capacity
- Break down AI/ML user stories into actionable tasks
- Commit to realistic sprint goals based on evidence
- Practice stakeholder negotiation in sprint planning
- Understand the relationship between ML uncertainty and sprint commitments

---

## Overview

**You're 3 weeks into your capstone projects.** Sprint 1 is done. Some of you crushed it. Some of you... didn't. That's okay—that's what Sprint 1 is for: learning how much you can actually accomplish.

Now it's time for Sprint Planning for Sprint 2. But this isn't like Sprint 1, where you guessed your capacity. This time, you have data. You know your actual velocity. You know which tasks took longer than expected. You know where you got blocked.

Today, we're doing real Sprint Planning the way professional teams do it:
1. **Review Sprint 1 performance** (What did we learn?)
2. **Calculate actual velocity** (How fast did we really go?)
3. **Assess Sprint 2 capacity** (How much can we commit to?)
4. **Break down ML stories** (What does "train a model" actually mean?)
5. **Commit to a sprint goal** (What's the most important thing we'll achieve?)

**By the end of this workshop, you'll:**
- Have a data-driven Sprint 2 plan
- Understand your team's real velocity (not wishful thinking)
- Break ML work into estimable chunks
- Know how to negotiate when stakeholders push back
- Feel what sustainable pace actually means

This is where PM and ML intersect: turning uncertainty into commitments.

---

## Pre-Activity Setup (5 minutes)

**Before we start:**

1. **Gather Sprint 1 artifacts**:
   - Your Sprint 1 Kanban board (Trello/Jira/GitHub Projects)
   - Completed user stories with story points
   - Incomplete stories (moved to backlog)
   - Any spike stories or research tasks

2. **Instructor provides**:
   - Class-wide velocity summary (anonymized)
   - Template for Sprint 2 planning
   - Definition of Done checklist

3. **Form capstone project teams** (3-4 students)
   - These should be your actual capstone teams

4. **Roles for this sprint planning session**:
   - **Product Owner**: Instructor (representing stakeholder/client)
   - **Scrum Master**: Rotating volunteer from each team
   - **Development Team**: All team members

**Instructor**: Set the stage. "Sprint 1 is done. Sprint 2 starts tomorrow. We have 2 weeks. What can we realistically commit to?"

---

## Part 1: Sprint 1 Retrospective & Velocity Calculation (15 minutes)

### Instructions

**Step 1: Review your Sprint 1 board (by team)**

Pull up your Sprint 1 board. For each user story, mark:
- ✅ **Done**: Met Definition of Done, accepted
- 🔄 **Partial**: Started but not complete
- ❌ **Not Started**: Never got to it

**Step 2: Calculate your team's actual velocity**

```
Velocity = Total story points for COMPLETED stories only
```

Example:
- Story 1: "As a user, I can input text" (3 points) - ✅ Done
- Story 2: "As a user, I can see sentiment score" (5 points) - ✅ Done
- Story 3: "As a user, I can export results" (3 points) - 🔄 Partial (0 points)
- Story 4: "Train sentiment model to 80% accuracy" (8 points) - ❌ Not started (0 points)

**Velocity = 3 + 5 = 8 points**

Fill out:
```
Team Name: __________________
Sprint 1 Committed Points: _____
Sprint 1 Completed Points: _____
Velocity: _____
Completion Rate: _____%
```

**Step 3: Team reflection discussion**

Answer these questions together (write notes):

1. **What went well?** (What helped us complete stories?)
2. **What slowed us down?** (Technical blockers? Scope creep? Underestimation?)
3. **What surprised us?** (What took way longer than expected?)
4. **ML-specific challenges?** (Did "train a model" turn out to be 5 different tasks?)

**Step 4: Class velocity share-out**

Instructor: Collect velocities on whiteboard (anonymized):
```
Team A: 12 points
Team B: 8 points
Team C: 15 points
Team D: 6 points
Team E: 10 points

Class Average: 10.2 points
```

### Expected Output

- Each team has calculated their actual Sprint 1 velocity
- Teams have identified specific blockers and surprises
- Class sees the range of velocities (some teams faster, some slower)
- Recognition that initial estimates were probably optimistic

### Common Issues

**Issue**: "We finished the story but it's not fully working"
- **Fix**: That's not done. Partial credit = 0 points in Scrum. Either it meets DoD or it doesn't.

**Issue**: "We finished more stories but they weren't on the board"
- **Fix**: If it wasn't planned, it doesn't count toward velocity. Track it as unplanned work.

**Issue**: "Our velocity is way lower than everyone else's"
- **Fix**: That's fine. Velocity is not a competition. It's your baseline. Optimize for learning, not for looking good.

---

## Part 2: Sprint 2 Capacity Planning (10 minutes)

### Instructions

**Step 1: Assess team capacity for Sprint 2**

Sprint 2 is 2 weeks. But you're not just working on the capstone:
- Other classes have deadlines
- Midterms might be coming
- One team member has a job interview
- Another has a family commitment

**Be honest.** Are you available:
- **Full capacity**: 100% (same as Sprint 1)
- **Reduced capacity**: 75% (other commitments)
- **Significantly reduced**: 50% (major event this sprint)

**Calculate adjusted velocity:**
```
Sprint 2 Capacity = Sprint 1 Velocity × Capacity Factor
```

Example:
- Sprint 1 velocity: 8 points
- One team member at 50% capacity (major exam week)
- 3 other members at 100%
- Capacity factor: (3×100% + 1×50%) / 4 = 87.5%

**Sprint 2 Capacity = 8 × 0.875 = 7 points**

**Step 2: Fill out capacity worksheet**

```
Sprint 1 Velocity: _____ points

Team Member Availability:
- Member 1: _____% (reason: _______)
- Member 2: _____% (reason: _______)
- Member 3: _____% (reason: _______)
- Member 4: _____% (reason: _______)

Capacity Factor: _____%
Sprint 2 Planned Capacity: _____ points
```

**Step 3: Add buffer for unknowns**

In ML projects, things go wrong:
- Dataset has quality issues
- Model doesn't converge
- API limits hit unexpectedly
- Hardware constraints

**Rule of thumb**: Reserve 10-20% capacity for unplanned work.

```
Sprint 2 Commitment = Sprint 2 Capacity × 0.8
```

Example: 7 points × 0.8 = **5.6 points** (round to 5-6 points)

### Expected Output

- Honest assessment of team availability
- Calculated capacity that's lower than Sprint 1 (usually)
- Buffer built in for ML uncertainty
- Understanding that velocity decreases when capacity decreases

### Common Issues

**Issue**: "We want to commit to more points to make up for Sprint 1"
- **Fix**: That's the planning fallacy. Velocity is what it is. You can't will it higher.

**Issue**: "What if we work more hours?"
- **Fix**: Scrum is about sustainable pace. Overtime is a red flag, not a strategy.

**Issue**: "But the stakeholder (instructor) expects more!"
- **Fix**: That's why we have this conversation now. Better to under-promise and over-deliver.

---

## Part 3: Breaking Down ML User Stories (20 minutes)

### Instructions

ML user stories are deceptively simple. "Train a sentiment model" sounds like one task. It's not.

**Step 1: Take a typical ML story from your backlog**

Example story:
```
As a user, I want the chatbot to understand sentiment
so that it can respond appropriately to my mood.

Acceptance Criteria:
- Model achieves 80% accuracy on test set
- Response time < 2 seconds
- Handles 5 sentiment classes
```

**Estimated at 8 story points in Sprint 1. Let's break it down.**

**Step 2: Identify all the tasks (whole team brainstorm)**

What actually needs to happen?

1. **Data Collection/Preparation**
   - Find/collect training data
   - Clean data (remove duplicates, handle nulls)
   - Label data (if not pre-labeled)
   - Split into train/validation/test sets
   - **Estimate**: ____ points

2. **Feature Engineering**
   - Tokenization strategy
   - Embedding selection (Word2Vec, GloVe, BERT?)
   - Feature extraction
   - **Estimate**: ____ points

3. **Model Development**
   - Select candidate algorithms (compare 3-5)
   - Train baseline model
   - Hyperparameter tuning
   - Cross-validation
   - **Estimate**: ____ points

4. **Evaluation & Validation**
   - Calculate metrics (accuracy, precision, recall)
   - Error analysis (what's getting misclassified?)
   - Test on edge cases
   - **Estimate**: ____ points

5. **Integration**
   - Serialize model (save trained model)
   - Create prediction API endpoint
   - Integrate with chatbot UI
   - Handle errors gracefully
   - **Estimate**: ____ points

6. **Testing & Documentation**
   - Unit tests for preprocessing
   - Integration tests for API
   - Document model architecture
   - Record training process
   - **Estimate**: ____ points

**Step 3: Re-estimate the total**

Add up all subtask estimates. Is it still 8 points? Or is it actually 20?

**This is the exercise: ML stories hide complexity.**

**Step 4: Prioritize the subtasks**

You can't do all of this in one sprint. What's the MVP?

Mark each subtask:
- **Must Have (Sprint 2)**: Critical path
- **Should Have (Sprint 3)**: Important but not blocking
- **Nice to Have (Later)**: Polish and optimization

**Step 5: Apply this to your real Sprint 2 backlog**

Pick your top 2-3 stories for Sprint 2. Break each one down into tasks. Re-estimate. Prioritize.

Use this template:

```
Story: _______________________________________________
Original Estimate: ____ points

Task Breakdown:
1. [Task name] - ___ points - [Must/Should/Nice]
2. [Task name] - ___ points - [Must/Should/Nice]
3. [Task name] - ___ points - [Must/Should/Nice]
...

Revised Total: ____ points
Sprint 2 Subset: ____ points (Must Have only)
```

### Expected Output

- At least 2 ML stories fully decomposed into tasks
- Recognition that original estimates were too low
- Prioritized task list for Sprint 2
- Understanding of what "done" means for each task

### Common Issues

**Issue**: "We don't know how long model training will take"
- **Fix**: That's what time-boxing is for. Allocate 4 hours. If model isn't ready, use simpler baseline.

**Issue**: "What if data quality is bad?"
- **Fix**: Build a data quality task into Sprint 2: "Assess dataset and document issues." Budget time for it.

**Issue**: "We keep finding more subtasks"
- **Fix**: Good! That's the point. This is why we plan. Capture them all, then prioritize ruthlessly.

---

## Part 4: Sprint 2 Commitment & Negotiation (10 minutes)

### Instructions

**Step 1: Draft your Sprint 2 commitment**

Based on:
- Your capacity (5-6 points)
- Your decomposed stories (now more accurate estimates)
- Your priorities (what's most important?)

Select stories that fit within capacity:

```
Sprint 2 Goal: _______________________________________________
(One sentence: What's the most important outcome?)

Committed Stories:
1. [Story name] - ___ points
2. [Story name] - ___ points
3. [Story name] - ___ points

Total Committed: ____ points (should match capacity)
```

**Step 2: Stakeholder negotiation (role-play)**

**Instructor (as Product Owner)**: "I was hoping you'd finish Stories 1, 2, 3, AND 4 this sprint. That's what the client is expecting."

**Team response**: Practice saying no with data.

Example:
> "We understand that's the ideal outcome. However, our Sprint 1 velocity was 8 points, and Sprint 2 capacity is reduced to 6 points due to [reasons]. Based on our task breakdown, Stories 1-3 are 6 points and represent the core functionality. Story 4 is 5 points and would put us at 11 points—38% over capacity. We recommend moving Story 4 to Sprint 3. We can commit to a stretch goal of starting Story 4 if Stories 1-3 finish early, but we won't commit to completing it."

**Practice this negotiation with your team.** Instructor will push back. Use data to defend your commitment.

**Step 3: Finalize Sprint 2 plan**

Write your final commitment:

```
SPRINT 2 COMMITMENT

Sprint Goal: _______________________________________________

Committed Stories (Definition of Done):
- [ ] Story 1: _____________________ (___ pts)
- [ ] Story 2: _____________________ (___ pts)
- [ ] Story 3: _____________________ (___ pts)

Stretch Goal (if time permits):
- [ ] Story 4: _____________________ (___ pts)

Total Committed: ____ points
Team Velocity: ____ points
Capacity Utilization: ____%

Risks & Mitigations:
- Risk 1: _______________  → Mitigation: _______________
- Risk 2: _______________  → Mitigation: _______________

Definition of Done:
- [ ] Code committed to main branch
- [ ] Tests pass (unit + integration)
- [ ] Model meets accuracy threshold
- [ ] Documented (README + code comments)
- [ ] Demo-ready (can show to stakeholder)
```

### Expected Output

- Realistic Sprint 2 commitment based on data
- One clear sprint goal (not just a list of stories)
- Ability to defend commitment with velocity data
- Identified risks and mitigation strategies

### Common Issues

**Issue**: "The stakeholder (instructor) seems disappointed"
- **Fix**: That's real life. POs always want more. Your job is to deliver what you commit to, not to make promises you can't keep.

**Issue**: "We want to commit to stretch goals as if they're regular goals"
- **Fix**: Stretch goals are called stretch goals because they stretch you. If you commit to them, they're not stretch—they're regular goals.

**Issue**: "What if we finish early?"
- **Fix**: Great! Pull in the next highest-priority story. But don't commit to it now.

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. Estimation vs. Reality**: Your Sprint 1 estimates were probably wrong. Is that failure, or is that data? How do you use that information?

**2. The Velocity Game**: Some teams have higher velocity than others. Does that make them "better" teams? Why or why not?

**3. ML Uncertainty**: Traditional software is more predictable than ML. How do you plan sprints when "train a model" might take 2 hours or 2 weeks?

**4. Sustainable Pace**: Scrum emphasizes sustainable pace over crunch time. Why? What happens to code quality, team morale, and velocity when teams consistently overcommit?

**5. Stakeholder Pressure**: When stakeholders push for more, how do you say no without damaging the relationship?

### Exit Ticket

**Submit via Canvas**:

```
1. What was your Sprint 1 velocity? _____
   What did you commit to for Sprint 2? _____

2. What's one thing you underestimated in Sprint 1 that you're accounting for in Sprint 2?

3. How did your team handle the stakeholder negotiation? What would you do differently?

4. On a scale of 1-5, how confident are you that your Sprint 2 commitment is achievable?
   1 = No way   5 = Very confident
   Rating: ___

5. What's one PM practice you'll apply to your ML work going forward?
```

---

## Extension Activities (Optional)

### Extension 1: Burndown Chart Analysis
Create a burndown chart for Sprint 1:
```python
import matplotlib.pyplot as plt

# Sprint 1 data (example)
days = list(range(15))  # 2-week sprint
ideal_burndown = [20, 18.6, 17.2, 15.8, 14.4, 13, 11.6, 10.2, 8.8, 7.4, 6, 4.6, 3.2, 1.8, 0]
actual_burndown = [20, 20, 19, 19, 17, 17, 14, 14, 12, 12, 9, 9, 6, 4, 0]

plt.plot(days, ideal_burndown, 'g--', label='Ideal', linewidth=2)
plt.plot(days, actual_burndown, 'b-', label='Actual', linewidth=2)
plt.xlabel('Days')
plt.ylabel('Story Points Remaining')
plt.title('Sprint 1 Burndown Chart')
plt.legend()
plt.grid(alpha=0.3)
plt.show()
```

What does the shape tell you? When did you get blocked?

### Extension 2: Velocity Forecasting
Build a simple velocity forecast for the semester:
```python
sprint_1_velocity = 8
sprint_2_capacity = 6

# Assume 10% improvement per sprint (learning curve)
sprints = [1, 2, 3, 4, 5, 6, 7, 8]
velocities = [sprint_1_velocity]

for i in range(1, len(sprints)):
    velocities.append(velocities[-1] * 1.10)

# Plot
plt.plot(sprints, velocities, marker='o', linewidth=2)
plt.xlabel('Sprint Number')
plt.ylabel('Velocity (Story Points)')
plt.title('Projected Velocity Over Semester')
plt.grid(alpha=0.3)
plt.show()

total_capacity = sum(velocities)
print(f"Projected total capacity for semester: {total_capacity:.0f} story points")
```

How many total points can you deliver by semester end?

### Extension 3: Monte Carlo Simulation
Simulate sprint outcomes with uncertainty:
```python
import numpy as np

# Sprint parameters
committed_points = 6
completion_rate_mean = 0.80  # 80% avg completion
completion_rate_std = 0.15   # ±15% variability

# Run 1000 simulations
simulations = 1000
outcomes = np.random.normal(completion_rate_mean, completion_rate_std, simulations)
outcomes = np.clip(outcomes, 0, 1)  # Can't complete < 0% or > 100%

completed_points = committed_points * outcomes

# Plot distribution
plt.hist(completed_points, bins=30, edgecolor='black', alpha=0.7)
plt.axvline(committed_points * 0.8, color='red', linestyle='--', label=f'Expected: {committed_points * 0.8:.1f} pts')
plt.xlabel('Story Points Completed')
plt.ylabel('Frequency (out of 1000 simulations)')
plt.title('Sprint 2 Outcome Simulation (Monte Carlo)')
plt.legend()
plt.show()

# Probability of meeting commitment
prob_success = (completed_points >= committed_points * 0.80).mean()
print(f"Probability of completing ≥80% of committed points: {prob_success:.1%}")
```

What's the risk of your current commitment?

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup, team formation, role assignment
- **5-20 min**: Sprint 1 retrospective and velocity calculation
- **20-30 min**: Sprint 2 capacity planning
- **30-50 min**: ML story breakdown (the meaty part)
- **50-60 min**: Commitment negotiation and finalization

### Common Struggles

**Honesty about capacity**: Students will over-promise. They want to look capable. Push them: "Are you really 100% available? What about [other class] midterm?" Model honesty.

**Sunk cost fallacy**: "We already estimated this story at 8 points in Sprint 1, so we should keep it at 8." No. New information = new estimates.

**Confusing velocity with productivity**: "Team B has velocity of 15, we only have 8. We're bad at this." Velocity is relative, not absolute. Reinforce this constantly.

**"We'll just work harder"**: This is the death of Scrum. When students say this, stop class. Explain burnout, technical debt, and why sustainable pace matters.

### Success Indicators

Students are on track if they:
- ✅ Calculate velocity using only completed stories (not partial credit)
- ✅ Reduce Sprint 2 commitment below Sprint 1 (realistic capacity assessment)
- ✅ Break ML stories into 6+ subtasks (recognizing hidden complexity)
- ✅ Can defend their commitment with data when challenged
- ✅ Identify risks and have mitigation plans

Students are struggling if they:
- ❌ Still estimating based on "ideal conditions" not empirical data
- ❌ Committing to more than Sprint 1 velocity despite reduced capacity
- ❌ Can't articulate what "done" means for ML stories
- ❌ Fold under stakeholder pressure without data-driven pushback

### Materials to Prepare

**Before class:**
- [ ] Calculate each team's Sprint 1 velocity (from Trello/Jira/GitHub)
- [ ] Prepare anonymized velocity summary for class discussion
- [ ] Print Sprint 2 Planning Template (1 per team)
- [ ] Create stakeholder negotiation script (your pushback scenarios)
- [ ] Prepare example of well-decomposed ML story
- [ ] Have sticky notes/whiteboard space for each team
- [ ] Queue up burndown chart examples

**During class:**
- [ ] Set serious tone: "This is real planning for your real project"
- [ ] Circulate during velocity calculation—catch teams who include partial credit
- [ ] Listen to capacity discussions—push teams who claim 100% when you know they have conflicts
- [ ] During negotiation, be a challenging but reasonable stakeholder
- [ ] Take notes on which teams negotiate well (recognize them publicly)
- [ ] Photograph final Sprint 2 commitments (for Sprint 2 review later)

**After class:**
- [ ] Compile all Sprint 2 commitments into shared document
- [ ] Check if any team committed to >110% capacity (follow up individually)
- [ ] Note which teams struggled with story decomposition (offer support)
- [ ] Schedule mid-sprint check-ins (Day 7 of Sprint 2)
- [ ] Prepare to reference these commitments in Sprint 2 Review

### Teaching Philosophy Notes

**This is where PM stops being abstract.** Students have been learning Scrum vocabulary. Now they're feeling the tension: stakeholder wants more, team can deliver less. That discomfort is the lesson.

**Data defeats wishful thinking.** When a student says "We can do 12 points this sprint," you ask: "What's your Sprint 1 velocity?" They say "8." You say nothing. Let the math speak.

**ML estimation is hard.** Traditional software is predictable: CRUD apps, REST APIs, database schemas. ML is not: "How long to tune hyperparameters?" Answer: "Until it works or we give up." Acknowledge this uncertainty. Time-boxing is your friend.

**Sustainable pace is not laziness.** Students fear looking unmotivated. Reinforce: professionals who consistently deliver 8 points are more valuable than heroes who promise 15, deliver 6, and burn out. Reliability > heroics.

**The negotiation role-play is critical.** Don't be a pushover PO. Push back: "But the client is expecting this!" Make them practice saying no with data. They'll need this skill in every job they have.

---

**Sprint 2 starts now. Let's see if your estimates were better this time.**
