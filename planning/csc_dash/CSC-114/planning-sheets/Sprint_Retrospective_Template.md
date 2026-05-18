# Sprint Retrospective Template

**Purpose**: Reflect on what went well and what didn't, identify improvements, and adjust your process for the next sprint.
**When to Use**: At the end of each sprint (after sprint review, before next sprint planning)
**Time to Complete**: 30-45 minutes

---

## Instructions

1. **Review the entire sprint** - Look at your sprint planning doc, daily standups, and completed work
2. **Be honest** - This only works if you're truthful about what didn't go well
3. **Focus on process, not just outcomes** - Even if you hit your sprint goal, could the process improve?
4. **Create actionable improvements** - Vague reflections don't change behavior
5. **Update your velocity** - Calculate actual story points completed for future planning
6. **Celebrate wins** - Acknowledge what went well before diving into problems

This is your most important learning tool. Teams that skip retrospectives repeat the same mistakes forever.

---

## Template

### Sprint Retrospective - Sprint [Number]

**Sprint Duration**: [Start Date] to [End Date]
**Sprint Goal**: [What you committed to accomplish]

---

### Sprint Metrics

**Commitment:**
- Planned story points: ___
- Completed story points: ___
- Velocity this sprint: ___

**Time:**
- Estimated hours: ___
- Actual hours: ___
- Efficiency (points per hour): ___

**Goal Achievement:**
- [ ] Sprint goal fully achieved
- [ ] Sprint goal partially achieved
- [ ] Sprint goal not achieved

---

### Start / Stop / Continue

**START doing (new practices to adopt):**
-
-
-

**STOP doing (practices that aren't working):**
-
-
-

**CONTINUE doing (practices that are working well):**
-
-
-

---

### What Went Well?

**Technical wins:**
-
-

**Process wins:**
-
-

**Personal/learning wins:**
-
-

---

### What Didn't Go Well?

**Technical challenges:**
-
-

**Process issues:**
-
-

**Personal/learning struggles:**
-
-

---

### What Will We Change?

**For next sprint, I will:**

1. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

2. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

3. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

---

### Velocity Analysis

**Recent velocity trend:**
- Sprint 1: ___ points
- Sprint 2: ___ points
- Sprint 3: ___ points
- Sprint 4: ___ points

**Average velocity (last 3 sprints)**: ___ points

**What affected velocity this sprint?**
-
-

**Velocity prediction for next sprint**: ___ points

**Confidence level**: [ ] High [ ] Medium [ ] Low

---

### Blocker Analysis

**What blocked me this sprint?**

| Blocker | Days Blocked | How Resolved | Prevention Strategy |
|---------|--------------|--------------|---------------------|
| | | | |
| | | | |

---

### Sprint Goal Reflection

**Did we achieve the sprint goal? Why or why not?**


**If we didn't achieve the goal, what was the root cause?**
- [ ] Overcommitted on story points
- [ ] Technical complexity underestimated
- [ ] Unexpected blockers
- [ ] External factors (exams, life, etc.)
- [ ] Poor task breakdown
- [ ] Other: ___________

---

### Key Learnings

**Technical learnings:**
-
-

**Process learnings:**
-
-

**About myself as a developer:**
-
-

---

### Action Items for Next Sprint

| Action Item | Owner | Due By | Priority |
|-------------|-------|--------|----------|
| | Me | Before sprint planning | [ ] High [ ] Medium [ ] Low |
| | Me | | [ ] High [ ] Medium [ ] Low |
| | Me | | [ ] High [ ] Medium [ ] Low |

---

## Example (Filled)

### Sprint Retrospective - Sprint 3

**Sprint Duration**: Feb 1 - Feb 14
**Sprint Goal**: Build and train a working CNN model for MNIST digit classification with >95% accuracy

---

### Sprint Metrics

**Commitment:**
- Planned story points: 11
- Completed story points: 8
- Velocity this sprint: 8

**Time:**
- Estimated hours: 18
- Actual hours: 22
- Efficiency (points per hour): 0.36

**Goal Achievement:**
- [ ] Sprint goal fully achieved
- [x] Sprint goal partially achieved
- [ ] Sprint goal not achieved

---

### Start / Stop / Continue

**START doing (new practices to adopt):**
- Research CNN architectures BEFORE sprint planning, not during the sprint
- Add learning/research stories to sprint backlog with story points
- Front-load sprint work - aim for 50% done by midpoint

**STOP doing (practices that aren't working):**
- Stop assuming I can "figure out" new tech without time budgeted
- Stop working late nights before exams (reduces focus, increases errors)
- Stop committing to aggressive story point totals to impress myself

**CONTINUE doing (practices that are working well):**
- Daily standups - caught blockers early
- Unit testing data preprocessing before moving to model training
- Asking for help in Discord when stuck for >2 hours

---

### What Went Well?

**Technical wins:**
- Data preprocessing pipeline works perfectly, modular and tested
- CNN architecture is functional, just needs accuracy tuning
- Learned Keras Sequential API faster than expected

**Process wins:**
- Daily standups kept me accountable and on track
- Identified kernel size blocker early, asked for help, unblocked in 1 day
- Front-loaded work before midterm (completed US-007 early)

**Personal/learning wins:**
- Didn't panic when model first got 65% accuracy - iterated methodically
- Improved at estimating task time (3-point stories were accurate)
- Got comfortable with Keras documentation

---

### What Didn't Go Well?

**Technical challenges:**
- Model stuck at 92% accuracy, not hitting 95% target
- Underestimated time for hyperparameter tuning
- Didn't plan for training time (30 min per experiment)

**Process issues:**
- Lost 2 days to midterm, even with planned capacity reduction
- Didn't break US-009 into small enough tasks (training was one big task)
- Completed only 8 of 11 committed points (73% completion)

**Personal/learning struggles:**
- Got frustrated when accuracy plateaued, wasted time on random changes
- Studied Keras during sprint instead of before sprint (should've been prep)
- Tired in second week, affected productivity

---

### What Will We Change?

**For next sprint, I will:**

1. **Change**: Add "research spike" stories for new tech BEFORE implementation sprints
   **Why**: Spent 4 hours learning Keras during sprint, could've been prep work
   **How**: Next sprint (hyperparameter tuning), do 2-hour research spike on grid search techniques before sprint starts
   **Success metric**: Start day 1 of sprint with clear understanding of tools

2. **Change**: Break training/tuning stories into smaller sub-stories
   **Why**: US-009 was too big (5 points should be max), hard to track progress
   **How**: Next sprint, break "hyperparameter tuning" into: (1) grid search setup, (2) run experiments, (3) analyze results, (4) select best model
   **Success metric**: No story larger than 5 points in next sprint planning

3. **Change**: Reduce committed points by 30% when major exam in sprint
   **Why**: Planned for midterm impact but still overcommitted
   **How**: Planned 11 points with midterm, should've planned 8-9 points
   **Success metric**: Complete 90%+ of committed points in next sprint with exam

---

### Velocity Analysis

**Recent velocity trend:**
- Sprint 1: 10 points
- Sprint 2: 13 points
- Sprint 3: 8 points

**Average velocity (last 3 sprints)**: 10.3 points

**What affected velocity this sprint?**
- Midterm exam took more time than expected (studied 2 extra days)
- Learning Keras during sprint instead of before
- Model training experiments took longer than anticipated

**Velocity prediction for next sprint**: 10 points (no exams, already know Keras)

**Confidence level**: [ ] High [x] Medium [ ] Low

---

### Blocker Analysis

**What blocked me this sprint?**

| Blocker | Days Blocked | How Resolved | Prevention Strategy |
|---------|--------------|--------------|---------------------|
| Unsure about Conv2D kernel sizes | 1 day | Asked Drew, researched MNIST CNN papers | Do architecture research before sprint |
| Model accuracy plateaued at 92% | 2 days | Added dropout layers, adjusted learning rate | Build in tuning time to story estimates |
| Midterm prep | 2 days | Paused sprint work | Better capacity planning for exams |

---

### Sprint Goal Reflection

**Did we achieve the sprint goal? Why or why not?**

Partially achieved. CNN model is built and trained, but accuracy is 92% instead of target 95%. Model architecture is solid, just needs hyperparameter tuning.

**If we didn't achieve the goal, what was the root cause?**
- [ ] Overcommitted on story points
- [x] Technical complexity underestimated (hyperparameter tuning is harder than I thought)
- [ ] Unexpected blockers
- [x] External factors (midterm took more time than planned)
- [x] Poor task breakdown (US-009 too large)
- [ ] Other: ___________

---

### Key Learnings

**Technical learnings:**
- Keras Sequential API is intuitive and well-documented
- CNNs for MNIST need dropout to prevent overfitting
- Training time matters - 30 min per experiment adds up fast
- 92% accuracy is actually pretty good for first CNN attempt

**Process learnings:**
- Daily standups work - kept me honest about progress
- Research/learning needs dedicated story points, not "I'll figure it out"
- Story points should reflect learning curve, not just coding time
- Exams impact velocity more than expected, even with planning

**About myself as a developer:**
- I work best in morning sessions (2-3 hours), not late nights
- I get frustrated when models don't perform, need to stay methodical
- I'm better at data engineering than hyperparameter tuning (so far)
- I actually enjoy the discipline of standups and tracking

---

### Action Items for Next Sprint

| Action Item | Owner | Due By | Priority |
|-------------|-------|--------|----------|
| Research grid search and random search techniques for hyperparameter tuning | Me | Before Sprint 4 planning | [x] High |
| Break Sprint 4 stories into sub-stories (no story >5 points) | Me | During Sprint 4 planning | [x] High |
| Reduce Sprint 4 capacity to 10 points (average velocity) | Me | During Sprint 4 planning | [x] High |
| Document current CNN architecture and rationale for next sprint | Me | Feb 15 | [ ] Medium |

---

## Why This Matters

Sprint retrospectives are how professional teams get better over time.

At Spotify, we did retrospectives every two weeks. At first, I thought: "Why spend 30 minutes talking about the past? Let's just start the next sprint."

Then I realized: **Teams that skip retrospectives keep making the same mistakes.**

Here's what retrospectives do:
1. **Surface systemic issues** - One bad sprint is bad luck. Three bad sprints is a pattern.
2. **Improve estimation** - You learn what slows you down and adjust future planning
3. **Build team trust** - Honest reflection creates psychological safety
4. **Create accountability** - Action items from retros actually get done

The ML teams I've seen succeed all do retrospectives religiously. The teams that fail? They're always "too busy" to reflect. So they stay busy doing the wrong things.

**A 30-minute retrospective can save you 10 hours of wasted effort in the next sprint.**

---

## Common Mistakes to Avoid

- **Mistake**: Only focusing on what went wrong, ignoring what went well
  **Better approach**: Start with wins. Celebrating successes builds momentum. THEN dig into problems. A retro that's all negative kills motivation.

- **Mistake**: Vague improvement plans like "be more organized" or "manage time better"
  **Better approach**: Specific actions with success metrics. "Break stories into sub-stories <5 points" is actionable. "Be more organized" isn't.

- **Mistake**: Blaming external factors ("I failed because of the exam")
  **Better approach**: Focus on what you control. "I didn't adjust capacity enough for the exam" is empowering. Blaming the exam isn't.

- **Mistake**: Creating 15 action items that you'll never complete
  **Better approach**: 2-3 high-impact changes MAX. Better to nail two improvements than to forget ten.

- **Mistake**: Skipping retrospectives when sprints go well
  **Better approach**: Good sprints need retros too! What made it work? How do you repeat that success? Retros aren't punishment - they're learning.

---

## Tips from Drew

**The "5 Whys" technique is your friend.** When something goes wrong, ask "why?" five times to find the root cause. Example:
- Model didn't hit accuracy target (why?)
- Because I ran out of time for tuning (why?)
- Because training took longer than expected (why?)
- Because I didn't account for experiment time in estimates (why?)
- Because I've never done hyperparameter tuning before (ROOT CAUSE: learning curve not planned)

**Velocity trends tell a story.** If your velocity is all over the place (10, 4, 15, 7), your estimation is off OR your capacity planning is inconsistent. Aim for relatively stable velocity - that's predictability.

**The "what will we change" section is the only one that matters.** Everything else is context. If you walk away from a retro without 2-3 concrete action items, you wasted 30 minutes.

**Track your action items from sprint to sprint.** Did you actually do what you said you'd do? If not, why? If you keep creating action items you don't complete, your retros aren't honest enough.

**Don't compare your velocity to others.** Some students complete 15 points per sprint, some complete 8. Both are fine. What matters is: Are YOU getting better over time? Is YOUR velocity becoming predictable?

**Failed sprint goals are learning opportunities.** My best retros came from sprints where everything went wrong. Those failures taught me more than my successes. Don't fear failure - fear not learning from failure.

---

## Integration with CSC-114

In CSC-114, your sprint retrospectives are graded as part of your project documentation.

I'm looking for:
- **Honest reflection** - Did you critically analyze your process?
- **Actionable improvements** - Are your action items specific and measurable?
- **Velocity tracking** - Do you understand your capacity and trends?
- **Root cause analysis** - Did you dig deeper than surface-level problems?
- **Learning evidence** - Can you articulate what you learned technically and professionally?

**Students with strong retrospectives:**
- Improve their velocity and estimation accuracy over the semester
- Ship higher-quality final projects (better process = better outcomes)
- Write exceptional project postmortems (they tracked learnings all semester)
- Get better at ML engineering with each sprint

**Students who skip or phone in retrospectives:**
- Repeat the same mistakes sprint after sprint
- Have inconsistent velocity (can't predict capacity)
- Struggle with final project documentation
- Miss the whole point of agile process

Your retro log is evidence that you're not just coding - you're becoming a professional engineer who reflects, adapts, and improves.

**The best ML engineers I know are the best learners. Retrospectives are how you learn from experience instead of just accumulating it.**
