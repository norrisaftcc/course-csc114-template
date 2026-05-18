# Week 7-8 Assignment: "AI Agent Development Sprint"
## CSC-114 AI I - Sprint 2: Building Autonomous Decision-Making Systems

**Due**: End of Week 8 (Friday, 11:59 PM)
**Points**: 50 (Sprint deliverable)
**Submission**: GitHub repository + Sprint 2 artifacts

---

## ASSIGNMENT OVERVIEW

Welcome to **Sprint 2**! You've completed your first full sprint cycle and retrospective. Now you'll apply those lessons to build something more advanced: **AI agents that make autonomous decisions**.

**What You're Building:**
An AI agent system that perceives its environment, makes decisions based on goals, and takes actions autonomously. You'll implement multiple agent architectures (reflex, goal-based, utility-based) and compare their effectiveness.

**What You're Learning (Technical):**
- Agent architectures (reflex, goal-based, utility-based)
- Decision-making algorithms (rule-based, search, optimization)
- Environment simulation and state management
- Agent evaluation and comparison
- Multi-agent interactions (bonus)

**What You're Learning (PM):**
- Applying Sprint 1 velocity to Sprint 2 planning
- Improved estimation using Sprint 1 reference points
- Consistent daily standups and burndown tracking
- Sprint board discipline (one story at a time)
- Implementing retrospective action items

**Critical Difference from Sprint 1**: You now have data! Use your Sprint 1 velocity and estimation learnings to make Sprint 2 more successful.

---

## PREREQUISITE: SPRINT 1 LESSONS LEARNED

Before starting Sprint 2 planning, review your Sprint 1 retrospective:

### ✅ Required Pre-Sprint Checklist
- [ ] Read your `sprint_1_retrospective.md` action items
- [ ] Calculate your Sprint 1 velocity (points completed)
- [ ] Review your estimation accuracy (what was fast vs. slow?)
- [ ] Set up any tools/reminders from action items (standup alarms, etc.)
- [ ] Identify your Sprint 1 blockers to avoid this sprint

**Example Review**:
```markdown
## Sprint 1 Lessons Applied to Sprint 2

**My Sprint 1 Velocity**: 12 points

**Estimation Insights**:
- Visualization tasks: Add 50% buffer (3 pts → 5 pts)
- New ML concepts: Plan for 5-7 pts minimum
- Familiar sklearn work: 2-3 pts accurate

**Process Improvements Implemented**:
- ✓ Set daily 9 AM standup reminder
- ✓ Enforce "one story in progress" rule
- ✓ Time-box research to 2 hours before asking for help
- ✓ Build in 2-day buffer at end of sprint

**Sprint 2 Capacity Plan**: 10 points (conservative, allows for unexpected issues)
```

---

## SPRINT 2 PLANNING

Complete your Sprint Planning document BEFORE Week 7 starts.

### Step 1: Determine Sprint 2 Capacity

Use your **actual Sprint 1 velocity** (not planned capacity):

**Formula**:
```
Sprint 1 Velocity = [points you completed in Sprint 1]
Sprint 2 Capacity = Sprint 1 Velocity × 0.9 (conservative)
                  OR Sprint 1 Velocity (confident)
                  OR Sprint 1 Velocity × 1.1 (aggressive, only if Sprint 1 went perfectly)
```

**Example**:
- Sprint 1 Velocity: 12 points
- Sprint 2 Capacity Options:
  - Conservative: 10-11 points (recommended for new AI concepts)
  - Standard: 12 points (if Sprint 1 felt comfortable)
  - Aggressive: 13-14 points (only if you finished Sprint 1 early)

**Your Decision**: ___________ points (justify based on Sprint 1 data)

### Step 2: Define Sprint 2 Goal

One clear sentence describing what you'll accomplish:

**Example Goals**:
- "Build and compare three AI agent architectures in a simulated environment"
- "Implement autonomous agents that navigate and achieve goals without human intervention"
- "Create decision-making systems that optimize utility functions"

**Your Sprint 2 Goal**: _______________________________________________

### Step 3: User Stories for AI Agent Development

Use your Sprint 1 estimation reference points! Apply lessons learned.

---

**STORY 1: Reflex Agent Implementation**

- **As a** AI developer,
- **I want** to implement a simple reflex agent that responds to environmental stimuli,
- **So that** I can understand the basics of perception-action loops.

**Acceptance Criteria**:
- [ ] Agent perceives environment state
- [ ] Agent maps percepts to actions using rules
- [ ] Agent responds to at least 5 different stimuli
- [ ] Decision logic is documented
- [ ] Agent behavior is tested in simulation

**Technical Tasks**:
- [ ] Design environment representation (grid, sensors, etc.)
- [ ] Implement percept collection (what agent can "see")
- [ ] Create rule-based decision mapping (if-then rules)
- [ ] Build action execution system
- [ ] Test agent in multiple scenarios
- [ ] Visualize agent behavior over time

**Estimate**: _____ points

**Estimation Notes**:
- Similar to: [reference from Sprint 1]
- New concepts: Environment design, perception systems
- Suggested: 5-8 points (new architecture, needs research + implementation)

---

**STORY 2: Goal-Based Agent Implementation**

- **As a** AI developer,
- **I want** to implement a goal-based agent that plans sequences of actions,
- **So that** I can create agents that achieve long-term objectives.

**Acceptance Criteria**:
- [ ] Agent has defined goal state
- [ ] Agent uses search algorithm (BFS, DFS, or A*) to plan
- [ ] Agent generates action sequences to reach goal
- [ ] Agent handles obstacles and constraints
- [ ] Planning vs. execution time is measured

**Technical Tasks**:
- [ ] Define goal representation
- [ ] Implement state space search
- [ ] Create path planning algorithm
- [ ] Build goal achievement checker
- [ ] Handle failure and replanning
- [ ] Compare planning strategies

**Estimate**: _____ points

**Estimation Notes**:
- Similar to: [reference from Sprint 1]
- New concepts: Search algorithms, planning
- Suggested: 5-8 points (algorithm implementation + integration)

---

**STORY 3: Utility-Based Agent Implementation**

- **As a** AI developer,
- **I want** to implement a utility-based agent that optimizes decisions,
- **So that** I can create agents that maximize performance metrics.

**Acceptance Criteria**:
- [ ] Agent has utility function defined
- [ ] Agent evaluates multiple action options
- [ ] Agent selects action with highest expected utility
- [ ] Utility function is configurable
- [ ] Agent performance improves over simple reflex

**Technical Tasks**:
- [ ] Design utility function (weighted scoring)
- [ ] Implement action evaluation system
- [ ] Create decision optimization algorithm
- [ ] Compare utility vs. reflex performance
- [ ] Tune utility weights
- [ ] Document tradeoffs

**Estimate**: _____ points

**Estimation Notes**:
- Similar to: Model evaluation (Sprint 1)
- New concepts: Utility functions, optimization
- Suggested: 5-7 points (builds on earlier agents)

---

**STORY 4: Agent Comparison Framework**

- **As a** project lead,
- **I want** to compare all three agent architectures on standard metrics,
- **So that** I can determine which architecture suits different scenarios.

**Acceptance Criteria**:
- [ ] All agents tested in same environment
- [ ] Metrics collected: success rate, steps to goal, efficiency
- [ ] Performance visualized (graphs, tables)
- [ ] Scenarios include: simple tasks, complex tasks, dynamic environments
- [ ] Recommendation provided for each scenario type

**Technical Tasks**:
- [ ] Create standardized test harness
- [ ] Define evaluation metrics
- [ ] Run comparative experiments
- [ ] Generate performance visualizations
- [ ] Analyze results statistically
- [ ] Write comparison summary

**Estimate**: _____ points

**Estimation Notes**:
- Similar to: Model Comparison (Sprint 1 Story 3)
- Apply Sprint 1 learning: [your visualization estimate adjustment]
- Suggested: 5-8 points (learned from Sprint 1 viz challenges)

---

**STORY 5 (STRETCH): Multi-Agent Interaction**

- **As a** advanced AI developer,
- **I want** to simulate multiple agents interacting in shared environment,
- **So that** I can explore emergent behaviors and cooperation.

**Acceptance Criteria**:
- [ ] Multiple agents operate simultaneously
- [ ] Agents can communicate or compete
- [ ] Emergent behaviors documented
- [ ] Coordination strategies tested

**Estimate**: _____ points (only pull in if ahead of schedule!)

**Estimation Notes**:
- Similar to: N/A (completely new)
- Suggested: 8-13 points (complex, unpredictable)

---

### Step 4: Sprint 2 Backlog Prioritization

Based on your capacity, select stories to commit to:

**Example**:
```markdown
## Sprint 2 Committed Stories

**Sprint 2 Capacity**: 12 points

**Committed Stories**:
1. Story 1: Reflex Agent (6 pts) - Must have
2. Story 2: Goal-Based Agent (7 pts) - Must have
3. Story 4: Agent Comparison (5 pts) - Should have

**Total Committed**: 12 points ← Matches capacity!

**Stretch Goals** (pull in only if ahead):
- Story 3: Utility-Based Agent (6 pts)
- Story 5: Multi-Agent (10 pts)

**Not This Sprint**:
- [Any stories deferred based on capacity]
```

### Step 5: Create GitHub Artifacts

**Sprint 2 Milestone**:
1. Create milestone: "Sprint 2 - AI Agent Development"
2. Set due date: End of Week 8
3. Add sprint goal to description

**GitHub Issues**:
- Create issue for each committed story
- Copy acceptance criteria to issue description
- Add technical tasks as checklist
- Assign to Sprint 2 milestone
- Add labels: `sprint-2`, `ai-agent`, `enhancement`
- Set story point estimate in title: `[6pts] Reflex Agent Implementation`

**Sprint Board Setup**:
- Create columns: "Sprint 2 Backlog", "In Progress", "Review", "Done"
- Move all committed stories to "Sprint 2 Backlog"
- Stretch goals stay in separate "Future" column

**Deliverable**: `sprint_2_planning.md` document in your repo

---

## SPRINT 2 EXECUTION (WEEKS 7-8)

### Daily Standups (Required)

Learn from Sprint 1! If standups helped, keep them. If you skipped them and struggled, commit to them now.

**Daily Entry in `sprint_2_standups.md`**:

```markdown
## Day 1 (Monday, Week 7)
**What I did yesterday**: Completed Sprint 2 planning, applied Sprint 1 lessons
**What I'll do today**: Research agent architectures, design environment structure
**Blockers**: None yet
**Sprint 1 Lesson Applied**: Set up 9 AM standup reminder ✓

## Day 2 (Tuesday, Week 7)
**What I did yesterday**: Designed grid environment, started reflex agent percepts
**What I'll do today**: Complete reflex agent rule system
**Blockers**: Unsure about environment state representation (will research 1 hour, then ask)
**Sprint 1 Lesson Applied**: Time-boxing research to avoid 6-hour rabbit holes ✓

[Continue for all 10 sprint days]
```

**Standup Quality Tips**:
- Be specific: "Implemented rule-based decision logic" not "worked on agent"
- Identify blockers early: Don't wait until you're stuck for days
- Reference Sprint 1 lessons: Show you're applying improvements

### Sprint Board Discipline

**Sprint 1 Lesson**: "One story in progress" rule improves focus

**Sprint 2 Practice**:
1. Pull story from "Sprint 2 Backlog" to "In Progress"
2. Work ONLY on that story until done
3. Move to "Review" when code complete
4. Move to "Done" when acceptance criteria met
5. THEN pull next story

**No Exceptions**: Resist temptation to start multiple stories!

### Burndown Chart Maintenance

Track daily in spreadsheet or notebook:

| Day | Points Remaining | Stories Complete | Notes |
|-----|------------------|------------------|-------|
| Day 0 | 12 | 0 | Sprint starts! |
| Day 1 | 12 | 0 | Planning & research |
| Day 2 | 12 | 0 | Environment setup (foundational work) |
| Day 3 | 6 | 1 | ✓ Story 1 complete! |
| Day 4 | 6 | 1 | Story 2 in progress |
| Day 5 | 6 | 1 | Still on Story 2 (expected) |
| Day 6 | 3 | 2 | ✓ Story 2 complete! |
| Day 7 | 3 | 2 | Story 4 in progress |
| Day 8 | 3 | 2 | Visualization taking longer (expected from Sprint 1) |
| Day 9 | 0 | 3 | ✓ Story 4 complete! Sprint done early! |
| Day 10 | 0 | 3 | Pulled stretch goal Story 3 |

**Ideal**: Smooth downward slope
**Reality**: Stair-step pattern (stories complete in chunks)
**Both are fine!** Just track honestly.

### Velocity Tracking

```markdown
## Sprint 2 Velocity Projection

**Sprint 1 Actual Velocity**: 12 points
**Sprint 2 Planned Capacity**: 12 points

**Mid-Sprint Check (Day 5)**:
- Points completed: 6 (Story 1)
- Points remaining: 6 (Stories 2, 4)
- On track? YES ✓
- Projection: Will complete 12 points (matches Sprint 1 velocity)

**End of Sprint**:
- Points completed: [actual]
- Sprint 2 Velocity: [actual]
- Velocity trend: [stable/increasing/decreasing]
```

---

## TECHNICAL IMPLEMENTATION

### Environment: Grid World Navigation

Create a simulated environment for your agents:

**Environment Specifications**:
- 10x10 grid world
- Obstacles (walls, barriers)
- Goal locations (treasure, target, etc.)
- Agent starting position
- Environmental state changes (optional: moving obstacles)

**Percepts** (what agent can sense):
- Current position (x, y)
- Immediate surroundings (north, south, east, west)
- Distance to goal (for goal-based agents)
- Obstacle detection

**Actions** (what agent can do):
- Move North, South, East, West
- Stay (do nothing)
- Pickup/interact (if applicable)

### Implementation Code Structure

See the complete implementation in your Jupyter notebook. Your notebook should include:

1. **Environment Class**: Grid world with obstacles and goals
2. **Reflex Agent**: Rule-based decision making
3. **Goal-Based Agent**: Path planning with search algorithms (BFS/A*)
4. **Utility-Based Agent**: Optimization-based decisions
5. **Evaluation Framework**: Comparative testing
6. **Visualization**: Agent paths and performance metrics

**Code Quality Requirements**:
- All classes documented with docstrings
- Functions have clear parameter descriptions
- Comments explain design decisions
- Variables have meaningful names
- No hard-coded magic numbers

---

## SPRINT 2 DELIVERABLES

### Technical Deliverables
- [ ] Jupyter notebook: `sprint_2_ai_agents.ipynb` (working code)
- [ ] All committed agent types implemented
- [ ] Environment simulation functional
- [ ] Agent comparison with visualizations
- [ ] Best agent recommendation with justification
- [ ] Code well-commented and documented

### PM Deliverables (CRITICAL - Apply Sprint 1 Lessons!)
- [ ] Sprint planning document (`sprint_2_planning.md`)
  - [ ] Shows Sprint 1 velocity used for capacity
  - [ ] Shows improved estimation using Sprint 1 reference points
  - [ ] Includes action items from Sprint 1 retrospective
- [ ] Daily standups (10 entries in `sprint_2_standups.md`)
  - [ ] More consistent than Sprint 1
  - [ ] References lessons being applied
- [ ] Burndown chart (spreadsheet or image)
  - [ ] Compared to Sprint 1 burndown
- [ ] GitHub Issues tracked properly
  - [ ] All committed stories have issues
  - [ ] Story points in titles
- [ ] Sprint board maintained (screenshot or link)
  - [ ] "One story in progress" rule followed
  - [ ] All stories moved to "Done" or documented as moved to Sprint 3

### Reflection Deliverables
- [ ] README updated with Sprint 2 summary
- [ ] Sprint 1 vs. Sprint 2 comparison (velocity, estimation accuracy)
- [ ] Technical learnings documented

---

## GRADING RUBRIC (50 points)

### Technical Implementation (25 points)
- Reflex agent working (5 pts)
- Goal-based agent with planning (8 pts)
- Utility-based agent with optimization (7 pts)
- Agent comparison framework (5 pts)

### PM Execution - IMPROVED FROM SPRINT 1 (20 points)
- Sprint planning shows Sprint 1 lessons applied (5 pts)
  - Velocity-based capacity planning (2 pts)
  - Improved estimation using reference points (2 pts)
  - Action items from retrospective addressed (1 pt)
- Daily standups more consistent (5 pts)
  - All 10 days documented (3 pts)
  - Quality and specificity (2 pts)
- Burndown chart maintained and compared to Sprint 1 (5 pts)
- Sprint board discipline (one story at a time) (5 pts)

### Documentation & Growth (5 points)
- Code well-commented (2 pts)
- README shows Sprint 1 → Sprint 2 improvement (2 pts)
- Technical insights clearly explained (1 pt)

### Bonus (5 points)
- Sprint completed on time with all committed stories
- Velocity improved or stabilized vs. Sprint 1
- Evidence of continuous improvement from retrospective
- Professional presentation and portfolio-ready work

---

## SPRINT 2 SUCCESS INDICATORS

**You're succeeding in Sprint 2 if**:
- ✓ Planned capacity matches Sprint 1 velocity (not over-committed)
- ✓ Story estimates use Sprint 1 reference points (better accuracy)
- ✓ Daily standups are more consistent than Sprint 1
- ✓ "One story at a time" rule is followed
- ✓ Burndown shows improvement over Sprint 1
- ✓ Sprint 1 action items are being implemented
- ✓ You catch and address blockers earlier

**Warning signs to address**:
- ✗ Planning for way more points than Sprint 1 velocity
- ✗ Repeating Sprint 1 estimation mistakes
- ✗ Skipping standups again
- ✗ Multiple stories in progress simultaneously
- ✗ Not implementing any retrospective action items

---

## COMMON SPRINT 2 CHALLENGES

**"Sprint 2 Overconfidence Syndrome"**
- **Symptom**: Planning for 20 points when Sprint 1 velocity was 12
- **Cause**: Feeling like "now I know how to do sprints"
- **Fix**: Trust Sprint 1 data, not optimism. Plan conservatively.

**"New Tech Estimation Repeat"**
- **Symptom**: Underestimating AI agent complexity like you underestimated Sprint 1 visualizations
- **Cause**: Not applying Sprint 1 "new technology buffer"
- **Fix**: Add 50% to any estimate involving new concepts

**"Standup Fatigue"**
- **Symptom**: Strong start, then skip Days 6-9
- **Cause**: Novelty wore off, feels like busywork
- **Fix**: Set non-negotiable reminder. 2 minutes/day = project success.

**"Perfect Process Paralysis"**
- **Symptom**: Spending more time on PM than coding
- **Cause**: Over-correcting from Sprint 1
- **Fix**: PM is meant to *support* development, not replace it. 80/20 rule.

---

## TIPS FOR SPRINT 2 SUCCESS

**1. Start Sprint 2 Planning with Sprint 1 Data Open**
- Have your sprint_1_retrospective.md on screen
- Use your actual velocity, not hoped-for velocity
- Apply your documented estimation learnings

**2. Commit to Standups for Real**
- Set phone alarm for same time daily
- Make it 2 minutes or less (not a chore)
- Do it even when "nothing happened" (that's data too!)

**3. Be Ruthless About "One Story at a Time"**
- Close all files related to other stories
- Put other stories out of sight on sprint board
- Finish before starting (acceptance criteria = done)

**4. Celebrate Improvements from Sprint 1**
- Did you finish Day 6 standups this time? Win!
- Was your estimation closer? Win!
- Did you ask for help earlier? Win!
- Small improvements compound over sprints

**5. Build in Buffer**
- If Sprint 1 velocity = 12, plan for 10-11 points
- Always assume something will take longer
- Better to pull in stretch goals than push stories to Sprint 3

---

## LOOKING AHEAD TO WEEK 8

**Week 8 Assignment**: Sprint 2 Retrospective
- Compare Sprint 2 vs. Sprint 1 velocity
- Analyze estimation improvement
- Identify Sprint 2 lessons for Sprint 3
- Calculate velocity trend
- Create action items for final sprint

**The goal**: Each sprint gets better than the last through continuous improvement!

---

## DREW'S NOTES: SPRINT 2 EXPECTATIONS

**Why Sprint 2 Matters More Than Sprint 1**:

Sprint 1 is learning. Sprint 2 is *applying what you learned*. This is where good PM habits solidify or bad patterns repeat. I can tell from your Sprint 2 planning document whether you actually read your retrospective or just went through the motions.

**What I'm Looking For**:
- Your Sprint 2 capacity is based on Sprint 1 velocity (not wishful thinking)
- Your estimates show you learned from Sprint 1 (visualization tasks buffered, etc.)
- Your standups reference lessons being applied ("Time-boxed research to 1 hour today ✓")
- Your burndown is smoother than Sprint 1 (learning from past pacing issues)

**What Separates Good from Great**:
- Good: Completes Sprint 2 stories
- Great: Completes Sprint 2 stories AND shows measurable improvement in process

**Real Talk**: Some students hit their stride in Sprint 2. Others over-commit and crash. The difference is always the same: did you use Sprint 1 data or did you ignore it?

**Industry Reality**: In real jobs, nobody cares that Sprint 1 was hard. They care that you learned from it and Sprint 2 was better. That's what gets you promoted—demonstrating continuous improvement.

**My Favorite Sprint 2 Moment**: When a student writes in their Day 5 standup: "Actually used my estimation reference points today and Story 2 is right on track. Sprint 1 lessons working!" That's when I know they get it.

**Pro Tip**: Take a side-by-side screenshot of your Sprint 1 and Sprint 2 burndowns. Put it in your portfolio with caption "Continuous improvement through retrospective action items." Employers eat that up.

Trust the process. Apply your learnings. Sprint 2 is where amateurs become professionals.

---

## RESOURCES

**AI Agent Concepts**:
- Russell & Norvig, "Artificial Intelligence: A Modern Approach" - Chapters 2-3
- [Stanford AI Course - Agent Architectures](https://ai.stanford.edu/)
- [Grid World Environments Tutorial](https://gymnasium.farama.org/)

**Search Algorithms**:
- [Breadth-First Search Visualization](https://www.cs.usfca.edu/~galles/visualization/BFS.html)
- [A* Algorithm Explained](https://www.redblobgames.com/pathfinding/a-star/introduction.html)
- [Python pathfinding library documentation](https://pypi.org/project/pathfinding/)

**PM Tools**:
- Sprint 1 retrospective (your own!)
- [Velocity-Based Planning Guide](https://www.scrum.org/resources/what-is-velocity)
- PM Mini-Lessons in course repo

**Office Hours**: Available for AI agent architecture questions and sprint planning help!
