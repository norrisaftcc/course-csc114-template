# Week 8 Assignment: "Sprint 2 Review & Retrospective"
## CSC-114 AI I - Continuous Improvement & Velocity Trending

**Due**: End of Week 8 (Friday, 11:59 PM)
**Points**: 25
**Submission**: `sprint_2_retrospective.md` in repository

---

## ASSIGNMENT OVERVIEW

Sprint 2 is complete! Now you'll reflect on TWO sprints worth of data and identify patterns. This retrospective is more powerful than Sprint 1's because you can compare trends, calculate average velocity, and see if your action items actually worked.

**What You're Learning:**
- Comparing velocity across sprints (trend analysis)
- Evaluating whether retrospective actions improved outcomes
- Identifying systemic patterns (not just one-time issues)
- Calculating reliable velocity for future planning
- Recognizing PM practice maturity

**Why Sprint 2 Retrospective Matters More**:
- Sprint 1: Learn the process
- Sprint 2: Evaluate if improvements worked
- Sprint 3: Will use refined practices confidently

---

## LEARNING OBJECTIVES

By completing this retrospective, you will:
1. Calculate and compare velocity trends (Sprint 1 vs. Sprint 2)
2. Assess effectiveness of Sprint 1 action items
3. Identify patterns across multiple sprints
4. Determine average velocity for future planning
5. Evaluate PM practice maturity
6. Create refined action items for Sprint 3

---

## RETROSPECTIVE STRUCTURE

Use the template: `pm-materials/templates/sprint-retrospective-template.md`

### SECTION 1: Sprint 2 Metrics & Comparison

**Required Data Points**:

```markdown
## Sprint 2 Metrics

### Basic Numbers
**Planned Capacity**: [X] points (based on Sprint 1 velocity)
**Completed**: [Y] points
**Incomplete**: [Z] points
**Sprint 2 Velocity**: [Y] points ← This is your actual velocity!

### Sprint 1 vs. Sprint 2 Comparison

| Metric | Sprint 1 | Sprint 2 | Change |
|--------|----------|----------|--------|
| Planned Capacity | 15 pts | 12 pts | -3 pts (more realistic) |
| Actual Velocity | 12 pts | [your S2] | [difference] |
| Completion Rate | 80% | [your %] | [difference] |
| Stories Completed | 3/4 | [your ratio] | [difference] |
| Standup Consistency | 6/10 days | [your ratio] | [difference] |
| Blockers Identified | Late (Day 7) | [when?] | [earlier/later?] |

### Velocity Trend Analysis

**Two-Sprint Average Velocity**: (12 + [Sprint 2]) / 2 = [average]

**Trend Interpretation**:
- If Sprint 2 ≈ Sprint 1 (±1 pt): Stable velocity ✓ (good baseline)
- If Sprint 2 > Sprint 1 (+2-3 pts): Improving efficiency ✓ (excellent)
- If Sprint 2 >> Sprint 1 (+4+ pts): Possible over-commitment ⚠️ (check quality)
- If Sprint 2 < Sprint 1 (-2+ pts): Investigate causes ⚠️

**My Trend**: [Stable/Improving/Declining] - [explanation]

**Sprint 3 Planning Guidance**:
Use average velocity: [X] points (or slightly conservative: [X-1] points)
```

---

### SECTION 2: Action Item Effectiveness

**Critical Question**: Did your Sprint 1 retrospective actions improve Sprint 2?

For EACH action item from Sprint 1, evaluate:

```markdown
## Action Item Evaluation

### Action Item #1: [Name from Sprint 1]
**Original Problem**: [What Sprint 1 issue prompted this?]
**Action Taken**: [What you committed to doing]
**Implementation**: [Did you actually do it?]
**Result**: [Did it improve Sprint 2?]
**Keep/Modify/Drop**: [Decision for Sprint 3]

**Example**:

### Action Item #1: Time-Box Research to 2 Hours
**Original Problem**: Spent 6 hours stuck on matplotlib in Sprint 1
**Action Taken**: Set 2-hour timer before asking for help
**Implementation**: ✓ Used timer on Days 3, 5, 7 when stuck
**Result**: SUCCESS - Asked for help earlier, unblocked within 1 day instead of 3
**Keep/Modify/Drop**: KEEP - worked as intended

### Action Item #2: Daily 9 AM Standup Reminder
**Original Problem**: Skipped standups Wed-Thu in Sprint 1
**Action Taken**: Set phone alarm for 9 AM daily
**Implementation**: ✓ Alarm worked, but still skipped Day 6 (forgot to check phone)
**Result**: PARTIAL - Improved to 9/10 days (vs. 6/10), but not perfect
**Keep/Modify/Drop**: MODIFY - Move alarm to calendar notification (harder to ignore)

### Action Item #3: Add 50% Buffer to Visualization Estimates
**Original Problem**: Underestimated visualization work (3 pts → actually 8 pts)
**Action Taken**: Estimate Story 4 (Agent Comparison viz) at 7 pts instead of 5 pts
**Implementation**: ✓ Applied buffer in Sprint 2 planning
**Result**: SUCCESS - Completed visualization in 6.5 pts, estimate was accurate!
**Keep/Modify/Drop**: KEEP - buffer formula works

[Continue for all Sprint 1 action items]
```

**Summary Statistics**:
- Action Items Implemented: [X]/[total]
- Action Items Successful: [Y]/[implemented]
- Action Items to Carry Forward: [Z]

---

### SECTION 3: What Went Well in Sprint 2

List 3-5 wins. **Compare to Sprint 1 where possible.**

```markdown
## What Went Well 🎉

### 1. Improved Velocity Consistency
**What Happened**: Completed [X] points, matching planned capacity
**Why It Worked**: Used Sprint 1 velocity data for realistic planning
**Comparison to Sprint 1**: Sprint 1 planned 15, completed 12 (over-committed). Sprint 2 planned 12, completed 12 (realistic).
**Lesson**: Velocity-based planning works! Trust the data.

### 2. Earlier Blocker Identification
**What Happened**: Identified agent path planning blocker on Day 3
**Why It Worked**: Time-boxing research (action item from Sprint 1)
**Comparison to Sprint 1**: Sprint 1 struggled Days 7-9 before asking for help. Sprint 2 asked Day 3, unblocked same day.
**Lesson**: 2-hour research time-box is the right threshold.

### 3. Better Estimation Accuracy
**What Happened**: All 3 committed stories completed within ±1 point of estimate
**Why It Worked**: Applied Sprint 1 estimation reference points + buffers
**Comparison to Sprint 1**: Sprint 1 had 3pt estimate that took 8pts. Sprint 2 estimates were 85% accurate.
**Lesson**: Estimation improves with reference data and buffers for new tech.

[Continue for all wins...]
```

---

### SECTION 4: What Didn't Go Well in Sprint 2

List 3-5 challenges. **Identify if these are new issues or repeated from Sprint 1.**

```markdown
## What Didn't Go Well 🤔

### 1. Still Working on Multiple Stories Simultaneously
**What Happened**: Days 5-6 had 2 stories "In Progress" on sprint board
**Why It Happened**: Felt stuck on Story 2, started Story 3 while waiting for answer
**Comparison to Sprint 1**: Same issue! Sprint 1 had 3 stories in progress on Day 4.
**Type**: REPEATED ISSUE ⚠️ (action item didn't stick)
**Impact**: Context switching cost ~0.5 day of productivity

### 2. Utility Agent Complexity Underestimated
**What Happened**: Story 3 (Utility Agent) estimated 5 pts, actually took 7 pts
**Why It Happened**: Didn't account for weight tuning experiments
**Comparison to Sprint 1**: Similar to Sprint 1 visualization underestimate
**Type**: NEW ISSUE (but similar pattern to Sprint 1)
**Impact**: Story spilled into buffer time, but sprint still completed

### 3. Burndown Chart Updated Only Every 2-3 Days
**What Happened**: Burndown has gaps on Days 3, 5, 8
**Why It Happened**: Forgot to update when making progress
**Comparison to Sprint 1**: Sprint 1 burndown was consistent
**Type**: REGRESSION ⚠️ (was better in Sprint 1!)
**Impact**: Less visibility into real-time progress

[Continue for all challenges...]
```

---

### SECTION 5: Root Cause Analysis

Pick the 2 most significant issues from "What Didn't Go Well" and dig deeper.

```markdown
## Root Cause Analysis

### Issue #1: Repeated Multi-Story Work Pattern

**Surface Problem**: Working on multiple stories simultaneously in Sprint 2 (despite action item!)

**5 Whys Analysis**:

1. **Why did I work on multiple stories?**
   → Felt stuck on Story 2, wanted to stay productive

2. **Why did I feel stuck?**
   → Waiting on answer to A* algorithm question

3. **Why was I waiting?**
   → Posted question in forum but didn't go to office hours

4. **Why didn't I go to office hours?**
   → Office hours were later in the day, didn't want to "waste time" waiting

5. **Why did that feel like wasted time?**
   → No clear protocol for what to do while blocked

**Root Cause**: Lack of "blocked state" protocol. Need clear plan for productive work while waiting on answers.

**Solution for Sprint 3**: Create "blocked work" list - documentation, refactoring, testing, research - that doesn't start new stories.

---

### Issue #2: Estimation Accuracy Plateauing

**Surface Problem**: Still underestimating by 30-40% on new concepts (Utility Agent)

**5 Whys Analysis**:

1. **Why did I underestimate Utility Agent?**
   → Thought it would be similar to Goal-Based Agent (5 pts)

2. **Why did I think it was similar?**
   → Both are "agents" so assumed comparable complexity

3. **Why didn't I differentiate complexity?**
   → Didn't break down technical tasks in enough detail during planning

4. **Why not enough detail?**
   → Rushed sprint planning to start coding

5. **Why rush planning?**
   → Planning feels like "not real work," eager to code

**Root Cause**: Under-valuing sprint planning. Not breaking stories into detailed enough tasks.

**Solution for Sprint 3**: Mandate 30-minute minimum per story during planning. Break into ≥5 technical tasks. Estimate tasks individually, then sum.
```

---

### SECTION 6: Process Maturity Assessment

Evaluate how comfortable you are with each PM practice:

```markdown
## PM Practice Maturity

Rate each practice: 🌱 Learning | 🌿 Developing | 🌳 Mature

### Sprint Planning
**Rating**: 🌿 Developing
**Evidence**: Used Sprint 1 velocity correctly, but still rushed story breakdown
**Next Level**: Spend more time on task decomposition and estimation

### Daily Standups
**Rating**: 🌿 Developing
**Evidence**: Improved from 6/10 to 9/10 consistency, but still skipped 1 day
**Next Level**: Make standups non-negotiable ritual (like brushing teeth)

### Burndown Chart
**Rating**: 🌱 Learning
**Evidence**: Regressed from Sprint 1 (consistent) to Sprint 2 (gaps)
**Next Level**: Update immediately when completing tasks (real-time habit)

### Sprint Board Management
**Rating**: 🌱 Learning
**Evidence**: Still violating "one story at a time" rule
**Next Level**: Build blocker protocol to avoid starting multiple stories

### Estimation
**Rating**: 🌿 Developing
**Evidence**: 85% accuracy on familiar work, still struggle with new concepts
**Next Level**: Detailed task breakdown, individual task estimation

### Retrospective Quality
**Rating**: 🌳 Mature
**Evidence**: Honest reflection, root cause analysis, actionable improvements
**Next Level**: (already strong!)

### Velocity Understanding
**Rating**: 🌳 Mature
**Evidence**: Trust velocity data, plan conservatively, avoid over-commitment
**Next Level**: (already strong!)
```

---

### SECTION 7: Actionable Improvements for Sprint 3

Turn Sprint 2 insights into specific Sprint 3 actions:

```markdown
## Action Items for Sprint 3

| # | Action | Owner | Due | Measurement |
|---|--------|-------|-----|-------------|
| 1 | Create "blocked work" list (docs, tests, refactor) to avoid multi-story work | Me | Sprint 3 planning | Zero stories overlap in progress |
| 2 | Spend 30 min minimum per story in planning with ≥5 task breakdown | Me | Sprint 3 planning | All stories have detailed tasks |
| 3 | Move standup reminder to calendar (not dismissible alarm) | Me | Before Sprint 3 | 10/10 standup days |
| 4 | Update burndown immediately after completing tasks | Me | Throughout sprint | Zero gaps in burndown |
| 5 | Add "complexity spike" stories (2 pts) for unknowns before real story | Me | Sprint 3 planning | Reduce underestimates |
| 6 | Schedule office hours visit within 3 hours of blocker (not "wait and see") | Me | As needed | Blockers resolved same-day |

### Carryover Actions from Sprint 1 (Still Relevant)
- ✓ Time-box research to 2 hours (KEEP - working)
- ✓ Add 50% buffer to visualization (KEEP - working)
- ✗ One story at a time (REFINE - add blocker protocol)
```

---

### SECTION 8: Start-Stop-Continue

Refined process changes for Sprint 3:

```markdown
## Process Changes for Sprint 3

### START Doing
- Creating "blocked work" list during sprint planning
- Detailed task breakdown (30 min per story, ≥5 tasks)
- Calendar-based standup reminders (not snooze-able)
- Real-time burndown updates (when task completes, update immediately)
- Scheduling office hours pre-emptively when blocked
- Adding 2-pt "spike" stories for high-uncertainty work

### STOP Doing
- Starting new stories when blocked (use blocked work list instead)
- Rushing sprint planning to start coding faster
- Dismissing standup alarms (too easy to skip)
- Batch-updating burndown every few days
- Waiting >4 hours before asking for help
- Estimating complex new work same as familiar work

### CONTINUE Doing
- Using Sprint velocity data for capacity planning (working!)
- Time-boxing research to 2 hours (working!)
- Adding buffers for visualization/new tech (working!)
- Honest retrospectives (strong practice)
- Building estimation reference points (improving accuracy)
- Celebrating small wins (motivation boost)
```

---

### SECTION 9: Estimation Accuracy Deep Dive

Compare Sprint 1 and Sprint 2 estimation accuracy:

```markdown
## Estimation Accuracy Comparison

### Sprint 1 Estimation Accuracy

| Story | Estimate | Actual | Accuracy | Reason for Variance |
|-------|----------|--------|----------|---------------------|
| Cross-Validation | 5 pts | 3 pts | 🎯 60% over | Had experience from Week 4 |
| Performance Metrics | 5 pts | 7 pts | ⚠️ 40% under | Confused by precision/recall concepts |
| Model Comparison | 3 pts | Incomplete | ❌ 150%+ under | Massive visualization underestimate |
| Confusion Matrix | 2 pts | 2 pts | ✓ 100% | Simple visualization, accurate |

**Sprint 1 Average Accuracy**: ~65% (significant underestimates)

---

### Sprint 2 Estimation Accuracy

| Story | Estimate | Actual | Accuracy | Reason for Variance |
|-------|----------|--------|----------|---------------------|
| Reflex Agent | 6 pts | 5.5 pts | ✓ 92% | Good estimate with buffer |
| Goal-Based Agent | 7 pts | 7 pts | ✓ 100% | Detailed task breakdown helped |
| Utility Agent | 5 pts | 7 pts | ⚠️ 40% under | Didn't account for tuning |
| Agent Comparison | 7 pts | 6 pts | ✓ 86% | Applied Sprint 1 viz buffer! |

**Sprint 2 Average Accuracy**: ~85% (major improvement!)

---

### Updated Estimation Reference Points

Based on two sprints of data:

| Task Type | Sprint 1 Learning | Sprint 2 Learning | Sprint 3 Guideline |
|-----------|-------------------|-------------------|-------------------|
| Simple agent/model | 2-3 pts | 3-4 pts | 3-4 pts (add buffer) |
| Complex algorithm | 5 pts underestimate | 7 pts realistic | 6-8 pts |
| Visualization (new) | 3 → 8 pts | 7 pts accurate | 6-8 pts with buffer |
| Visualization (familiar) | — | — | 3-4 pts |
| Optimization/tuning | — | 5 → 7 pts | 5-7 pts (NEW) |
| Environment setup | — | 2-3 pts | 2-3 pts (NEW) |
| Testing/comparison | 2 pts accurate | 6 pts accurate | 4-6 pts based on scope |

### Estimation Patterns Identified

**Underestimate When**:
- ✗ New optimization/tuning work
- ✗ Assume similar tasks are equal complexity
- ✗ Skip detailed task breakdown in planning

**Accurate Estimates When**:
- ✓ Apply complexity buffers (1.5x for new tech)
- ✓ Use reference points from past sprints
- ✓ Break stories into ≥5 tasks during planning

**Sprint 3 Estimation Strategy**:
1. Look up similar work from Sprint 1 or 2
2. Identify what's new/different
3. Add 50% buffer if new concepts
4. Break into ≥5 tasks
5. Sanity check: Does total feel right?
```

---

### SECTION 10: Velocity Planning for Sprint 3

Calculate reliable velocity for Sprint 3 planning:

```markdown
## Velocity-Based Sprint 3 Planning

### Historical Data
- Sprint 1 Velocity: 12 points
- Sprint 2 Velocity: [your actual] points
- Two-Sprint Average: [average] points

### Sprint 3 Capacity Options

**Conservative (Recommended)**:
- Capacity: [average - 1] points
- Rationale: Still refining estimation, building in buffer
- Best for: Complex new topics (Neural Networks, etc.)

**Standard**:
- Capacity: [average] points
- Rationale: Confident in velocity data, good estimation accuracy
- Best for: Mix of familiar and new work

**Aggressive (Use Cautiously)**:
- Capacity: [average + 1] points
- Rationale: Estimation is very accurate, strong PM practices
- Best for: Only if Sprint 2 accuracy was 90%+ AND completed early

### My Sprint 3 Capacity Decision

**I will plan for [X] points because:**
1. [Reason based on Sprint 2 completion rate]
2. [Reason based on estimation accuracy]
3. [Reason based on PM practice maturity]
4. [Reason based on upcoming topic complexity]

**Confidence Level**: [High/Medium/Low]
**Stretch Goal Buffer**: [Y] points (only pull in if ahead by Day 7)
```

---

### SECTION 11: Technical Learnings

Document ML/AI insights from Sprint 2:

```markdown
## Technical Insights from Sprint 2

### AI Agent Concepts Learned

**Reflex Agents**:
- Simple rule-based decision making
- Fast but not optimal
- Works well for reactive tasks
- Limited by lack of planning

**Goal-Based Agents**:
- Use search to find paths to goals
- A* algorithm: balances speed and optimality
- Planning overhead worth it for complex environments
- Need good heuristic function

**Utility-Based Agents**:
- Optimize decisions based on utility function
- More flexible than goal-based
- Tuning weights is time-consuming (learned the hard way!)
- Best for multi-objective problems

### Comparing to Sprint 1 (Model Evaluation)

**Similarities**:
- Both involve comparing multiple approaches
- Performance metrics critical
- Visualization helps communicate results

**Differences**:
- Sprint 2: Agents act in environment (dynamic)
- Sprint 1: Models evaluated on static dataset
- Sprint 2: Sequential decision-making
- Sprint 1: Single-shot predictions

### Questions for Sprint 3
- How do learning agents (RL) improve over time?
- When is simple reflex agent better than complex planning?
- How to design good utility functions?
- Can agents learn from mistakes?
```

---

### SECTION 12: Celebration & Momentum

Acknowledge growth and build Sprint 3 momentum:

```markdown
## Wins to Celebrate 🌟

### Sprint 2 Achievements
- ✓ Completed [X] points (matches/exceeds Sprint 1!)
- ✓ Built 3 different agent architectures from scratch
- ✓ Estimation accuracy improved from 65% to 85%
- ✓ Standup consistency improved from 60% to 90%
- ✓ Action items from Sprint 1 mostly successful
- ✓ Velocity data is now reliable (2 sprints)

### Personal Growth
- **Estimation**: Getting much better at breaking down complexity
- **PM Practices**: Sprint board and standups feel more natural
- **Technical Skills**: Comfortable with agent architectures and search algorithms
- **Problem Solving**: Asking for help earlier, unblocking faster
- **Reflection**: Root cause analysis is identifying real issues

### What I'm Proud Of
1. Actually applied Sprint 1 lessons (not just wrote them down)
2. Trusted velocity data instead of over-committing
3. Improved estimation by 20 percentage points
4. Completed complex AI agent implementation
5. PM practices are becoming habits, not chores

### Momentum for Sprint 3

**Strengths to Leverage**:
- Reliable velocity data (average of 2 sprints)
- Accurate estimation (85% on Sprint 2)
- Strong retrospective practice
- Growing agent/ML knowledge

**Areas Still Developing**:
- Sprint board discipline (one story at a time)
- Burndown real-time updates
- Blocker management protocol

**Sprint 3 Mindset**: "I know my velocity, I know my blind spots, I have proven improvements. Sprint 3 will be my smoothest yet."
```

---

## GRADING RUBRIC (25 points)

### Sprint Comparison Analysis (7 points)
- Sprint 2 metrics accurate and complete (2 pts)
- Sprint 1 vs. Sprint 2 comparison table (2 pts)
- Velocity trend analysis and interpretation (2 pts)
- Sprint 3 capacity recommendation justified (1 pt)

### Action Item Evaluation (6 points)
- All Sprint 1 action items assessed (2 pts)
- Implementation honesty (did you do it?) (2 pts)
- Effectiveness analysis (did it work?) (2 pts)

### Reflection Quality (6 points)
- "What went well" compares to Sprint 1 (2 pts)
- "What didn't go well" identifies new vs. repeated issues (2 pts)
- Root cause analysis digs deep (2 pts)

### Forward-Looking Actions (4 points)
- Sprint 3 action items are specific and measurable (2 pts)
- Actions address Sprint 2 root causes (1 pt)
- Start/Stop/Continue shows learning (1 pt)

### Estimation Analysis (2 points)
- Compares Sprint 1 vs. Sprint 2 estimation accuracy
- Updates reference points for Sprint 3
- Shows learning from patterns

---

## COMMON RETROSPECTIVE PITFALLS

**❌ Surface-Level Comparison**
Bad: "Sprint 2 was better than Sprint 1"
Good: "Sprint 2 velocity was 13 pts (vs. 12 in Sprint 1), but estimation accuracy improved 20%, showing better planning, not just more work"

**❌ Ignoring Failed Action Items**
Bad: Listing Sprint 1 actions without evaluating if they worked
Good: "Action item #2 (standup reminders) improved consistency from 6/10 to 9/10, but still not perfect. Need calendar notification instead of alarm."

**❌ No Pattern Recognition**
Bad: Treating each issue as isolated
Good: "Multi-story work happened in BOTH Sprint 1 (Day 4) and Sprint 2 (Days 5-6). This is a pattern, not a fluke. Need systemic solution."

**❌ Over-Optimism**
Bad: "Sprint 3 will be perfect because I'll try harder"
Good: "Sprint 3 capacity: 11 points (conservative). My average is 12.5, but Neural Networks are new. Better to finish early than push to Sprint 4."

---

## RETROSPECTIVE QUALITY CHECKLIST

Use this to self-assess before submitting:

- [ ] Sprint 2 velocity calculated correctly
- [ ] Sprint 1 vs. Sprint 2 comparison table complete
- [ ] Every Sprint 1 action item evaluated (implemented? effective?)
- [ ] Root cause analysis goes beyond surface symptoms
- [ ] "What went well" compares to Sprint 1 (not just lists items)
- [ ] "What didn't go well" distinguishes new issues from repeated patterns
- [ ] Sprint 3 actions are specific (not "do better")
- [ ] Estimation reference points updated with Sprint 2 data
- [ ] Average velocity calculated for Sprint 3 planning
- [ ] Process maturity assessment honest (not all "mature")
- [ ] Celebration section acknowledges real growth
- [ ] Technical learnings documented

---

## RETROSPECTIVE BEST PRACTICES

**1. Use Data, Not Feelings**
Don't say "I felt behind" - say "Burndown showed 0 progress Days 5-7"

**2. Compare Across Sprints**
Don't just reflect on Sprint 2 - compare to Sprint 1 to identify trends

**3. Evaluate Action Items Rigorously**
Be honest: Did the action item work or not? Drop what doesn't help.

**4. Recognize Patterns**
Two sprints of data can show patterns. Use them!

**5. Plan Conservatively**
Sprint 3 capacity should use average velocity, maybe -1 for buffer

**6. Celebrate Improvements**
20% estimation improvement is HUGE. Acknowledge it!

---

## LOOKING AHEAD TO SPRINT 3

**Sprint 3 Topics** (Weeks 9-10 or similar):
- Neural networks
- Deep learning fundamentals
- TensorFlow/PyTorch
- Training optimization

**Sprint 3 Will Be Different Because**:
- You have 2-sprint average velocity (reliable baseline)
- Estimation reference points are well-established
- PM practices are maturing (less overhead)
- You know your personal patterns (multi-story work, etc.)
- Action items are refined (dropped what doesn't work)

**Sprint 3 Goal**: Smooth execution. Process is background, learning is foreground.

---

## DREW'S NOTES: THE POWER OF SPRINT 2 RETROSPECTIVE

**Why Sprint 2 Retro Is a Turning Point**:

This is where retrospectives get real. Sprint 1 retro was interesting. Sprint 2 retro is *powerful* because you can see if your improvements actually worked. This is where students either:

A) Embrace continuous improvement (check if actions worked, refine, iterate)
B) Go through the motions (list actions, never evaluate, repeat mistakes)

**What I'm Looking For**:
- Did you evaluate each Sprint 1 action item? (Most students skip this!)
- Do you distinguish new issues from repeated patterns?
- Is your Sprint 3 capacity based on average velocity? (Not wishful thinking)
- Do you recognize where you've improved? (85% estimation vs. 65% is huge!)

**The Pattern I See**:
- Weak retros: List problems, propose solutions, never check if they work
- Strong retros: Check if last sprint's solutions worked, keep what works, refine what doesn't

**Real Talk**: By Sprint 3, strong students are planning in 15 minutes because the process is internalized. Weak students are still flailing with the same Sprint 1 issues. The difference is always retrospective quality.

**Industry Reality**: This is how professional teams operate. Retro → action items → check if they worked → refine → repeat. You're learning a career-long skill.

**My Favorite Sprint 2 Retro Moment**: When a student writes "Action item #3 (visualization buffers) worked perfectly! Story 4 was estimated 7 pts, took 6 pts. In Sprint 1, same work was estimated 3 pts, took 8 pts. Math proves improvement." That's when I know they're thinking like engineers.

**Portfolio Tip**: Create a "velocity and estimation accuracy over time" graph showing Sprint 1 (65% accuracy) → Sprint 2 (85% accuracy). Put it in your portfolio with caption "Continuous improvement through disciplined retrospectives." Employers love seeing learning curves.

**The Sprint 2 Retrospective Separates Students Who Get PM from Those Who Are Just Doing Assignments**:

If your Sprint 2 retro says "Sprint 1 action items worked great!" but doesn't provide evidence, I know you didn't actually use them. If it says "Action #2 improved standups from 6/10 to 9/10, but alarm strategy didn't work—switching to calendar for Sprint 3," I know you're living the process.

Trust the retrospective. Evaluate rigorously. Refine continuously. That's how great teams are built.

---

## RESOURCES

**Velocity and Estimation**:
- [Mike Cohn: Velocity](https://www.mountaingoatsoftware.com/blog/know-exactly-what-velocity-means-to-your-scrum-team)
- [Estimation Reference Class Forecasting](https://www.agilealliance.org/glossary/reference-class-forecasting/)
- Your own Sprint 1 data! (your best resource)

**Retrospective Techniques**:
- [Retrospective Prime Directive](https://retrospectivewiki.org/index.php?title=The_Prime_Directive)
- [5 Whys Root Cause Analysis](https://en.wikipedia.org/wiki/Five_whys)
- [Start-Stop-Continue Template](https://www.atlassian.com/team-playbook/plays/start-stop-continue)

**Sprint Comparison**:
- [Scrum Velocity Charts](https://www.scruminc.com/velocity-chart/)
- [Comparing Sprint Performance](https://www.agilealliance.org/glossary/burndown-chart/)

**Office Hours**: Available for retrospective review and Sprint 3 planning guidance!

---

**Final Reminder**: This retrospective sets up Sprint 3 success. Take it seriously. Be honest. Use data. Trust the process. Your future self (starting Sprint 3 with refined practices and accurate velocity) will thank you.
