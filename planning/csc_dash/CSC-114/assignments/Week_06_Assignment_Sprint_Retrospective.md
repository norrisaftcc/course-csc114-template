# Week 6 Assignment: "Sprint 1 Retrospective"
## CSC-114 AI I - Learning from Your First Sprint

**Due**: End of Week 6 (Friday, 11:59 PM)
**Points**: 25
**Submission**: `sprint_1_retrospective.md` in repository

---

## ASSIGNMENT OVERVIEW

Your first sprint is complete! Now comes the most important PM practice: **reflection and improvement**. A great retrospective turns lessons learned into actions for the next sprint.

**What You're Learning:**
- How to run a productive retrospective
- How to identify root causes (not just symptoms)
- How to create actionable improvements
- How to celebrate wins (not just fix problems)

---

## RETROSPECTIVE STRUCTURE

Use the template in `pm-materials/templates/sprint-retrospective-template.md`

### Required Sections

**1. Sprint Metrics**
```markdown
## Sprint 1 Metrics

**Planned Capacity**: 15 points
**Completed**: [actual points] points
**Incomplete**: [remaining points] points
**Velocity**: [completed points] (this is your velocity!)

**Stories Completed**:
- Story 1: Cross-Validation (5 pts) ✓
- Story 2: Performance Metrics (5 pts) ✓
- Story 4: Confusion Matrices (2 pts) ✓

**Stories Incomplete**:
- Story 3: Model Comparison (3 pts) - Moved to Sprint 2

**Completion Rate**: 12/15 = 80%
```

**2. What Went Well? 🎉**

List 3-5 things that worked:
- Technical wins
- PM practices that helped
- Personal achievements

**Example**:
```markdown
## What Went Well

1. **Cross-validation implementation went smoothly**
   - Found good tutorial early
   - Completed faster than estimated (3 days vs. 5)

2. **Daily standups kept me accountable**
   - Seeing yesterday's commitment made me follow through
   - Writing down blockers helped me ask for help sooner

3. **Burndown chart was motivating**
   - Felt good to see points decrease
   - Visual progress helped when I felt stuck

4. **Model evaluation metrics were clearer than expected**
   - sklearn documentation was helpful
   - Seeing precision/recall tradeoffs clicked
```

**3. What Didn't Go Well? 🤔**

List 3-5 challenges:
- Technical struggles
- PM practices that didn't work
- Time management issues

**Example**:
```markdown
## What Didn't Go Well

1. **Underestimated visualization complexity**
   - Story 3 (Model Comparison) took 2x longer than estimated
   - Matplotlib formatting was frustrating
   - Didn't account for styling time

2. **Fell behind on daily standups mid-week**
   - Skipped Wednesday and Thursday updates
   - Lost track of what I'd done
   - Harder to restart Friday

3. **Started too many stories at once**
   - Had 3 stories "In Progress" on Day 4
   - Context switching slowed me down
   - Violated "one story at a time" rule

4. **Didn't ask for help until too late**
   - Struggled with ROC curves for 2 days
   - Should have gone to office hours sooner
   - Cost me a full story (incomplete Story 3)
```

**4. Root Cause Analysis**

For major issues, dig deeper with "5 Whys":

**Example**:
```markdown
## Root Cause: Story 3 Incomplete

**Surface Problem**: Didn't finish Model Comparison Framework

**Why?** Ran out of time in Week 6

**Why?** Visualization took much longer than expected

**Why?** Estimate was only 3 points but should have been 5-8

**Why?** I didn't account for matplotlib learning curve

**Why?** First time estimating visualization work; had no reference

**Root Cause**: Lack of experience estimating visualization tasks

**Prevention**: Add 50% buffer to any new technology estimates
```

**5. Actionable Improvements**

Turn insights into specific actions for Sprint 2:

```markdown
## Action Items for Sprint 2

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Add "visualization" category to estimates with 1.5x multiplier | Me | Sprint 2 planning | ⏳ |
| Set daily standup reminder for 9 AM | Me | Before Sprint 2 | ⏳ |
| Enforce "one story in progress" rule with sprint board | Me | Ongoing | ⏳ |
| Schedule office hours visit if blocked > 4 hours | Me | As needed | ⏳ |
| Research matplotlib basics before visualization stories | Me | Before Sprint 2 | ⏳ |
```

**6. Process Improvements**

**Start-Stop-Continue Format**:

```markdown
## Process Changes

### START Doing
- Time-boxing research (max 1 hour before asking for help)
- Breaking stories > 5 points into sub-stories
- Adding buffer days to sprint plan (plan for 12 pts, not full 15)

### STOP Doing
- Working on multiple stories simultaneously
- Skipping standup updates (they actually help!)
- Estimating new technology same as familiar tech

### CONTINUE Doing
- Daily standups (when I did them, they worked!)
- Using burndown chart (motivating)
- Celebrating small wins (completed stories felt good)
```

**7. Estimation Accuracy Review**

```markdown
## Estimation Accuracy

### Stories Faster Than Estimated
**Story 1: Cross-Validation (Est: 5, Actual: 3)**
- **Why faster**: Had done similar work in Week 4
- **Learning**: Can estimate familiar sklearn tasks at 3 pts now

### Stories Slower Than Estimated
**Story 2: Performance Metrics (Est: 5, Actual: 7)**
- **Why slower**: Confusion about precision vs. recall initially
- **Learning**: ML metrics need more study time; add 2 pts to future metric stories

**Story 3: Model Comparison (Est: 3, Incomplete)**
- **Why incomplete**: Visualization took entire second week
- **Learning**: Visualization is 5-8 pts minimum, not 3

### Updated Reference Estimates
- Simple sklearn model: 2-3 pts
- New ML concept with docs: 5 pts
- Metrics/evaluation: 5-7 pts
- Matplotlib visualization: 5-8 pts
- Data preprocessing: 3-5 pts
```

**8. Velocity Calculation**

```markdown
## Velocity Analysis

**Sprint 1 Results**:
- Planned: 15 points
- Completed: 12 points
- **Velocity: 12 points**

**Sprint 2 Planning Guidance**:
- Plan for 12 points (my proven velocity)
- OR plan for 10 points (conservative, accounts for unexpected issues)
- Do NOT plan for 15+ points (over-commitment risk)

**Velocity Trend** (need 3+ sprints for trend):
- Sprint 1: 12 points
- [Sprint 2: TBD]
- [Sprint 3: TBD]
```

**9. Technical Learnings**

```markdown
## ML/Technical Insights

**What I Learned About Machine Learning**:
- Cross-validation is essential for real model validation
- Precision/recall tradeoff depends on problem domain
- Confusion matrices show WHERE models fail, not just THAT they fail
- Random Forest often outperforms simpler models on complex data

**What I Learned About Tools**:
- sklearn's cross_val_score is powerful but documentation dense
- matplotlib requires patience and StackOverflow
- Seaborn makes some visualizations much easier
- Jupyter notebooks are great for exploration but need refactoring

**Questions for Next Sprint**:
- How do I choose k for k-fold cross-validation?
- When should I use precision vs. recall as primary metric?
- How do I handle imbalanced datasets in evaluation?
```

**10. Celebration & Morale**

```markdown
## Wins to Celebrate 🌟

**Personal Achievements**:
- Completed first full sprint cycle!
- Implemented 4 ML models from scratch
- Learned cross-validation (huge milestone)
- Stuck with daily standups (mostly!)
- 80% sprint completion (better than I expected)

**What I'm Proud Of**:
- Asked for help eventually (even if late)
- Didn't give up when matplotlib was frustrating
- Documented my process throughout
- Actually used the PM tools (they helped!)

**Momentum for Sprint 2**:
- Now have baseline velocity (12 pts)
- Know my estimation blind spots
- Sprint board workflow feels natural
- Excited to implement action items
```

---

## GRADING RUBRIC (25 points)

**Sprint Metrics (5 points)**
- Accurate reporting of planned vs. actual
- Velocity calculated correctly
- Clear completion status

**Reflection Quality (10 points)**
- "What went well" is specific and honest (3 pts)
- "What didn't go well" identifies real problems (3 pts)
- Root cause analysis digs deeper than symptoms (4 pts)

**Actionable Improvements (5 points)**
- Action items are specific and measurable (3 pts)
- Start/Stop/Continue shows growth mindset (2 pts)

**Estimation Learning (3 points)**
- Analyzes estimation accuracy
- Updates reference estimates for future
- Shows learning from Sprint 1

**Documentation (2 points)**
- Well-organized and readable
- Complete sections
- Professional tone

---

## COMMON RETROSPECTIVE MISTAKES

**❌ Too General**
Bad: "Didn't manage time well"
Good: "Spent 6 hours on matplotlib when I should have asked for help after 2 hours"

**❌ Blame-Focused**
Bad: "The assignment was too hard"
Good: "I underestimated complexity; will add buffer for new concepts"

**❌ No Actions**
Bad: "I should do better next time"
Good: "Set timer for 1-hour research limit before escalating questions"

**❌ All Negative**
Bad: Only listing problems
Good: Balance challenges with wins (you completed 80%!)

**❌ Surface-Level**
Bad: "Fell behind"
Good: "Fell behind because I violated 'one story at a time' rule, which caused context switching overhead"

---

## RETROSPECTIVE BEST PRACTICES

**1. Be Honest**
This is for YOU. Nobody benefits from sugar-coating.

**2. Focus on Process, Not Perfection**
The goal isn't to have done everything perfectly. It's to learn and improve.

**3. Celebrate Wins**
80% completion is GREAT for a first sprint! Acknowledge progress.

**4. Make Actions Specific**
"Do better" isn't actionable. "Set standup reminder" is.

**5. Use Data**
Don't guess—look at your burndown, standups, actual time spent.

---

## LOOKING AHEAD

**Next Assignment (Week 7)**: Sprint 2 begins! You'll apply your retrospective insights to:
- Implement AI Agents
- Use improved estimation (with your new reference points)
- Follow your action items
- Build on Sprint 1 velocity

**Sprint 2 will be better because you learned from Sprint 1.** That's the power of retrospectives!

---

**Drew's Note**: Retrospectives separate good teams from great teams. Anyone can follow a process once. Continuous improvement through honest reflection is what makes you a professional. Don't skip this—it's where the real learning happens.

I've seen students resist retrospectives ("more writing!") then thank me months later when their capstone projects run smoothly because they've been practicing continuous improvement all semester.

**Favorite Student Quote**: "I thought retrospectives were busywork until Sprint 3 when I realized I'd fixed all my Sprint 1 problems without even thinking about it. The action items actually worked!"

**Portfolio Tip**: Save these retrospectives! They show employers you're self-aware, growth-oriented, and can manage complex projects. That's gold.
