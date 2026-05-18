# CSC-114 Instructor Guide
## Artificial Intelligence I - Complete Teaching Guide

**Course**: CSC-114 AI I
**Instructor**: Drew Norris
**Instructional Designer**: Angela Westmoreland
**Last Updated**: January 15, 2026
**Version**: 1.0

---

## How to Use This Guide

**You are reading Drew's complete teaching playbook.** This is the guide another instructor would use to teach CSC-114 successfully - even if Drew is on sabbatical or hit by a bus.

**What's Inside:**
- Module-by-module teaching notes with exact timing
- Common student struggles with intervention strategies
- Grading philosophy and practical rubrics
- PM integration strategies (30-50% of grade)
- Week-by-week calendar with flexibility notes
- Technology setup and troubleshooting
- Student success patterns and red flags
- Sample communications and first-day plans

**Structure**: Read "Course Overview" first, then jump to modules as needed. Appendices contain practical templates and sample materials.

---

# PART 1: COURSE OVERVIEW

## 1.1 Course Philosophy

### The Big Idea: ML + PM Integration

CSC-114 is **not just a machine learning course**. It's a course where students learn ML *while* learning professional project management. The integration is intentional and deep.

**Why This Matters:**
- Industry ML projects fail more often from poor planning than bad code
- Students need both technical and process skills for capstone (CSC-289)
- PM discipline prevents the "cram everything the night before" pattern
- Real ML teams use sprints, retrospectives, and velocity tracking

**Drew's Philosophy**: "I don't just grade what you built. I grade how you built it."

### Sacred Flow (Expanded from CSC-113)

Students arrive from CSC-113 knowing:
- Issue → Branch → PR → Merge workflow
- Basic 2-week project cycles
- Simple retrospectives ("what worked, what didn't")
- Git commit discipline

CSC-114 adds **Scrum structure**:
- Issues become **user stories** (As a.../I want.../So that...)
- Branches become **sprint work** (one story at a time)
- PRs become **sprint deliverables** (demo-able working software)
- Merges become **sprint completion** (Done = shippable)

**Teaching Tip**: Reference CSC-113 frequently. "Remember the Sacred Flow? We're just adding sprint planning to it."

### Process Over Product

**Grading Breakdown by Module:**
- Modules 1-2: 30% process (learning PM basics)
- Modules 3-4: 40-45% process (first full sprints)
- Modules 5-7: 33% process (PM becomes habitual)
- Module 8: 40% process (Process Portfolio emphasis)

**What Drew Looks At:**
1. **Commit frequency**: Incremental work or last-minute cramming?
2. **Commit quality**: Descriptive messages or "fixed bug"?
3. **Sprint planning**: Realistic based on velocity data?
4. **Daily standups**: Consistent? Surface blockers early?
5. **Burndown tracking**: Steady progress or panic?
6. **Retrospectives**: Honest? Action items lead to changes?

**Teaching Moment**: Show students YOUR burndown chart from a recent project. Show the bumps. Normalize imperfect progress.

### Failure as Exercise (ML Edition)

**Core Belief**: ML is inherently uncertain. Models fail. Data is messy. Predictions are wrong. That's the FEATURE, not a bug.

**Expected Failures:**
- **Sprint 1** (Week 5-6): Most students overcommit, miss sprint goal → Teaches realistic planning in Sprint 2
- **Neural Networks** (Week 9-10): Training loss diverges → Teaches learning rate tuning
- **Computer Vision** (Week 11-12): Model biased on certain classes → Teaches fairness testing
- **Retrospectives normalize this**: "What went wrong? What did I learn? What will I do differently?"

**Teaching Approach**: When a student's model achieves 52% accuracy (worse than random), respond with: "Perfect! Now we have something to debug. Let's figure out why." Turn failure into investigation.

### Two Tracks Continue

**From CSC-113**, students can choose their path:

**Code Builders** (Deep Implementation):
- Implement ML algorithms from scratch when possible
- Understand the mathematics
- Custom neural network architectures
- Algorithm comparison studies

**Prompt Masters** (High-Level APIs):
- Use scikit-learn, Keras high-level APIs
- Focus on hyperparameter tuning
- Model deployment emphasis
- No-code ML tools integration

**Critical**: Both tracks achieve all CLOs. Both run 6 sprints. Both produce capstone projects. Different paths, same rigor.

**Teaching Tip**: Ask students Week 1 which track they prefer. Note it. Check in if they seem to be struggling with their choice.

---

## 1.2 Target Audience & Prerequisites

### Who Takes This Course

**Typical Student:**
- Completed CSC-113 (or equivalent) one semester ago
- Comfortable with GitHub workflow (Issue/PR/Merge)
- Has basic Python programming skills
- Familiar with AI concepts (prompt engineering, AI evaluation)
- Has experienced basic sprint cycles and retrospectives

**Success Profile:**
- Comfortable with ambiguity (ML is not deterministic!)
- Willing to iterate (sprints require adaptation)
- Curious about "why" (not just "how")
- Disciplined enough for daily standups
- Growth mindset (failures are data)

**Red Flags:**
- Never used GitHub (missing CSC-113 foundation)
- Python phobia (this course assumes Python comfort)
- "I just want to code, skip the PM stuff" (30-50% of grade is PM!)
- Perfectionism (ML models are never perfect)

### Prerequisites (Hard and Soft)

**Hard Prerequisites:**
- **CSC-113** or equivalent (AI fundamentals, GitHub basics)
- **Python basics**: Variables, functions, loops, conditionals
- **GitHub account** with basic workflow knowledge
- **Math comfort**: Basic algebra (understand equations like y = mx + b)

**Soft Prerequisites:**
- Willingness to work incrementally (no all-nighters!)
- Comfort with ambiguity and experimentation
- Ability to read documentation (sklearn, TensorFlow)
- Time management for 9-10 hours/week

**What Students DON'T Need:**
- Advanced statistics or calculus (nice to have, not required)
- Prior ML experience (that's what this course is!)
- Local GPU (Google Colab provides free GPUs)
- Paid software (everything is free/open source)

### Typical Student Outcomes

**By Week 8 (Mid-Semester):**
- Can train and evaluate 4+ ML algorithms independently
- Understands cross-validation and metrics (precision, recall, F1, ROC)
- Runs sprints with minimal guidance
- Velocity tracking is accurate (±10% variance)
- Retrospectives show genuine reflection and improvement

**By Week 16 (End of Semester):**
- Can design and implement multi-technique ML pipeline
- Selects appropriate algorithms for different problems
- Evaluates models comprehensively (technical + ethical)
- Manages 2-week sprints autonomously
- Has portfolio-quality capstone project with Process Portfolio

**Success Metrics:**
- 85%+ of students complete all 6 sprints
- Average velocity stabilizes by Sprint 3
- Capstone projects demonstrate integration of 2+ ML techniques
- Students report confidence in managing ML projects independently

---

## 1.3 Course Structure Overview

### 8 Modules, 16 Weeks, 6 Sprints

**Modules 1-2** (Weeks 1-4): **Foundation**
- Technical: ML environment, classification, regression
- PM: User stories, story points, estimation
- Grading: 30% process
- Scaffolding: High structure, templates provided

**Modules 3-4** (Weeks 5-8): **First Full Sprints**
- Technical: Model evaluation, AI agents
- PM: Complete sprint cycles (planning, standups, burndown, retro)
- Grading: 40-45% process
- Scaffolding: Full sprint guidance with templates

**Modules 5-7** (Weeks 9-14): **Technical Depth + PM Habituation**
- Technical: Neural networks, CNNs, NLP
- PM: Sprints become automatic, less scaffolding
- Grading: 33% process
- Scaffolding: Minimal - students execute independently

**Module 8** (Weeks 15-16): **Integration & Mastery**
- Technical: Capstone integrating 2+ ML techniques
- PM: Process Portfolio analyzing all 6 sprints
- Grading: 40% process (Portfolio is major deliverable)
- Scaffolding: None - full autonomy

### Weekly Rhythm

**Standard Module (2 Weeks) Pattern:**

**Week 1 (Odd Week):**
- **Monday/Tuesday Class (50 min)**: Concept introduction + PM mini-lesson (10-15 min)
- **Monday/Tuesday Lab (120 min)**: Hands-on coding, sprint planning if sprint module
- **Wednesday-Friday**: Students work on assignments, post daily standups if in sprint
- **Friday**: Weekly deliverable due (for non-sprint modules)

**Week 2 (Even Week):**
- **Monday/Tuesday Class (50 min)**: Advanced concepts, debugging Q&A
- **Monday/Tuesday Lab (120 min)**: Continued implementation, office hours-style support
- **Wednesday-Friday**: Students complete work, finish sprints
- **Friday**: Module deliverable due, retrospective (if sprint module)

### Credit Hours Breakdown

**3 Credits = 9-10 hours/week total:**
- 2 hours in-class instruction (lecture/discussion/demos)
- 3 hours in-class lab (hands-on coding and PM work)
- 4-5 hours outside class (homework, sprints, retrospectives)

**Time Tracking Reality Check:**
- Modules 1-2: Students typically spend 6-8 hrs/week (lighter)
- Modules 3-7: Students typically spend 9-12 hrs/week (sprint cycles)
- Module 8: Students typically spend 12-15 hrs/week (capstone intensive)

**Teaching Tip**: Poll students Week 3 and Week 7 about actual time spent. Adjust expectations if wildly off. Drew's rule: If >80% report >12 hrs/week, scope is too large.

---

# PART 2: MODULE-BY-MODULE TEACHING NOTES

## Module 1: ML Fundamentals & Setup (Weeks 1-2)

### Module Overview

**Technical Focus**: Python ML environment, k-Nearest Neighbors classifier, basic model training
**PM Focus**: User stories introduction
**Timing**: 2 weeks, 2 assignments (25 pts each = 50 pts total)
**Student Workload**: 6-8 hours/week (lighter load to ease in)

**Learning Objectives (from program-data.json):**
1. Set up professional ML development environment with Python and key libraries
2. Apply fundamental ML concepts to classify data using scikit-learn
3. Create user stories for ML project requirements

### Week 1: Environment & First Model

**Class (50 minutes):**
- **Minutes 0-10**: Welcome, course overview, "What is CSC-114 about?"
  - Show sample capstone projects from past students
  - Explain dual focus: ML + PM
  - Set expectations: 30-50% process grading
- **Minutes 10-25**: ML fundamentals lecture
  - Supervised vs. unsupervised learning
  - Training vs. testing data
  - Features vs. labels
  - The ML workflow: Load → Split → Train → Evaluate
- **Minutes 25-40**: Live demo (follow along)
  - Show Google Colab setup (recommended for beginners)
  - OR show local Jupyter setup (for advanced students)
  - Walk through loading Iris dataset
  - Train k-NN classifier together
- **Minutes 40-50**: Assignment walkthrough + Q&A

**Lab (120 minutes):**
- **Minutes 0-15**: Environment setup troubleshooting
  - Walk the room, help with installation issues
  - Have Google Colab pre-loaded as backup
- **Minutes 15-90**: Guided Iris classification exercise
  - Students work through Week 1 assignment
  - You're available for questions
  - Check: Can everyone import sklearn? Load data? Train model?
- **Minutes 90-110**: Experimentation time
  - Students try different k values (k=1, 3, 5, 10)
  - Discuss: Why does k matter?
- **Minutes 110-120**: Exit ticket
  - "What worked today? What's still confusing?"

**Teaching Tips:**
- **Environment setup ALWAYS takes longer than planned.** Build in buffer time.
- **Google Colab is your friend.** 50% of students will have local install issues. Colab = zero setup.
- **Don't rush the live demo.** Go slowly. Students are typing along.
- **Screenshot success moments.** When a student gets their first 96% accuracy, celebrate it.

**Common Struggles:**
- **"ImportError: No module named sklearn"**: pip install scikit-learn (not sklearn!)
- **"I got 100% accuracy!"**: Probably trained and tested on same data. Good teaching moment!
- **"My Jupyter won't launch"**: Colab backup plan. Always have Colab ready.
- **"What does k mean?"**: Use visual analogy - k=1 is like asking one friend for advice, k=5 is asking five friends and taking majority vote.

### Week 2: User Stories & PM Introduction

**Class (50 minutes):**
- **Minutes 0-10**: Debrief Week 1 assignment
  - "Who got >90% accuracy? Who struggled?"
  - Address common issues
- **Minutes 10-25**: PM Mini-Lesson #1 - User Stories (see pm-materials/01-User-Stories-Mini-Lesson.md)
  - **Why user stories?** Break big projects into pieces
  - **Format**: As a [user], I want [feature], So that [benefit]
  - **Example**: Show 3-4 examples from AI projects
  - **Common mistakes**: Too technical, too vague, missing "so that"
- **Minutes 25-40**: Practice writing user stories
  - Give students 2-3 PRD-style requirements
  - Have them convert to user stories (think-pair-share)
  - Review answers as class
- **Minutes 40-50**: Assignment 2 walkthrough
  - Create 8-10 user stories for their ML project idea
  - Post as GitHub Issues
  - Define acceptance criteria

**Lab (120 minutes):**
- **Minutes 0-30**: User story workshop
  - Students brainstorm features for ML project
  - You circulate, give feedback
  - "Is this user-focused or technical?"
- **Minutes 30-90**: Writing user stories
  - Students create GitHub Issues
  - Format: As a.../I want.../So that...
  - Add acceptance criteria (3-5 per story)
- **Minutes 90-110**: Peer review
  - Students swap repositories, review each other's stories
  - "Are these clear? Are they testable?"
- **Minutes 110-120**: Retrospective intro
  - Introduce exit ticket format (used throughout semester)
  - "What did you ship? What blocked you? What's next?"

**Teaching Tips:**
- **User stories feel like busywork at first.** Students won't appreciate them until Sprint 1 (Week 5-6).
- **Emphasize "So that" clause.** This is where the VALUE lives. If they can't articulate value, feature may not be needed.
- **GitHub Issues = Backlog.** This is their product backlog. They'll return to it for sprint planning.
- **Quality over quantity.** 6 great stories > 15 mediocre stories.

**Common Struggles:**
- **"I don't have a project idea yet"**: Have 3-4 sample ideas ready. AI tutor, spam classifier, sentiment analyzer, image tagger.
- **"My stories are too technical"**: Push them to user perspective. "Who cares about this? Why?"
- **"All my 'so that' clauses sound the same"**: Dig deeper. "Why does THAT matter?"
- **"Do I need to build this?"**: No! These are just planning. Sprint planning (Week 5) is where you commit.

**Success Indicators:**
- Students can write user story format without looking it up
- Stories focus on user needs, not technical implementation
- Acceptance criteria are testable (not vague)
- GitHub Issues are formatted properly

---

## Module 2: Supervised Learning (Weeks 3-4)

### Module Overview

**Technical Focus**: Classification (multiple algorithms), regression (linear, polynomial)
**PM Focus**: Story point estimation, velocity tracking
**Timing**: 2 weeks, 2 assignments (25 pts each = 50 pts total)
**Student Workload**: 7-9 hours/week

**Learning Objectives:**
1. Implement classification models for categorical predictions
2. Apply regression techniques to continuous data prediction
3. Estimate work complexity using story points

### Week 3: Classification & Estimation

**Class (50 minutes):**
- **Minutes 0-10**: Debrief Module 1
  - Celebrate: "Who has their first model in their portfolio?"
  - Address lingering environment issues
- **Minutes 10-30**: Classification deep dive
  - Logistic Regression: Decision boundary
  - Decision Trees: Rule-based splitting
  - Random Forest: Ensemble of trees
  - When to use which algorithm?
- **Minutes 30-40**: PM Mini-Lesson #2 - Story Points (see pm-materials/02-Story-Points-Estimation.md)
  - **What are story points?** Relative effort, not hours
  - **Fibonacci scale**: 1, 2, 3, 5, 8, 13 (why Fibonacci?)
  - **Example estimation**: Compare 3-4 user stories
  - **Planning poker** (if time): Quick exercise
- **Minutes 40-50**: Assignment 3 walkthrough

**Lab (120 minutes):**
- **Minutes 0-20**: Classification setup
  - Load breast cancer dataset together
  - Verify everyone has data loaded
- **Minutes 20-80**: Build multiple classifiers
  - Train Logistic Regression (together)
  - Students add Decision Tree (independently)
  - Students add Random Forest (independently)
  - Optional: SVM for advanced students
- **Minutes 80-100**: Model comparison
  - Compare accuracy of all models
  - Discussion: Why different accuracies?
  - Which model would you choose? Why?
- **Minutes 100-120**: Story point estimation practice
  - Students estimate their Module 1 user stories
  - Discussion: Which stories are 1s? Which are 8s?

**Teaching Tips:**
- **Classification is where ML gets real.** This is not toy data anymore. Binary classification (cancer detection) has stakes.
- **Confusion matrix introduction** happens here (preview for Module 3). Show false positives vs. false negatives.
- **Story points are HARD to grasp.** Students want to convert to hours. Resist! "It's relative. A 5 is 5x a 1."
- **Reference story technique**: Pick one story as a "3", estimate others relative to that.

**Common Struggles:**
- **"Why is Random Forest more accurate?"**: Ensemble methods average multiple models. More robust.
- **"I don't understand story points"**: Use T-shirt sizes (S/M/L/XL) analogy. Then map to Fibonacci.
- **"How do I know if my estimate is right?"**: You don't! You'll learn from velocity data. Week 5 starts tracking.
- **"My code takes forever to run"**: Check dataset size. Use smaller subset if needed. Or Google Colab for more power.

### Week 4: Regression & Velocity

**Class (50 minutes):**
- **Minutes 0-10**: Classification assignment debrief
  - Common issues? Accuracy patterns?
- **Minutes 10-30**: Regression lecture
  - Linear regression: Fitting a line
  - Polynomial regression: Fitting a curve
  - Metrics: RMSE (root mean squared error), R² (coefficient of determination)
  - Overfitting: Polynomial degree too high
- **Minutes 30-40**: Velocity tracking introduction
  - **What is velocity?** Story points completed per time period
  - **Why track it?** Predicts future capacity
  - **How to calculate**: Sum story points completed in past sprints
  - **Example**: Show Drew's velocity chart from past project
- **Minutes 40-50**: Assignment 4 + Sprint 1 preview

**Lab (120 minutes):**
- **Minutes 0-20**: Regression setup
  - Load housing price dataset (or Boston housing)
  - Explore data together
- **Minutes 20-70**: Implement regression models
  - Linear regression (together)
  - Polynomial regression degree 2 (together)
  - Polynomial degrees 3-5 (students experiment)
  - Calculate RMSE for each
- **Minutes 70-90**: Overfitting discussion
  - Plot predictions vs. actuals for degree 10 polynomial
  - "Why is this fitting training data perfectly but test data terribly?"
- **Minutes 90-110**: Velocity baseline activity
  - Students review Weeks 1-4 work
  - Estimate (retroactively) how many story points each assignment would have been
  - Calculate average: "This is your baseline velocity for Sprint 1 planning"
- **Minutes 110-120**: Sprint 1 prep
  - Intro to Module 3: First full sprint!
  - What to expect: Planning, standups, burndown, retro
  - Handout sprint planning template

**Teaching Tips:**
- **Overfitting is a critical concept.** Make it visual. Show the wild polynomial curve that perfectly fits training data but makes nonsense predictions on test data.
- **Velocity baseline is imperfect.** Students are retroactively estimating. That's OK. Sprint 1 will give real data.
- **Sprint 1 anxiety is real.** Students feel overwhelmed. Normalize: "Sprint 1 is learning. Your velocity will be wrong. That's the point - to learn!"
- **Encourage question-asking.** Module 3 is a leap. Make sure students know office hours are available.

**Common Struggles:**
- **"My R² is negative!"**: Model is worse than just predicting the mean. Check implementation.
- **"What's a good RMSE?"**: Depends on scale of data. Low RMSE relative to y-values is good.
- **"I don't have velocity data yet"**: Correct! Retroactive estimation is starting point. Real velocity tracking starts Sprint 1.
- **"Sprint planning sounds complicated"**: It is! But we'll break it down step-by-step. Template helps.

**Success Indicators:**
- Students can explain overfitting with a concrete example
- Students have baseline velocity estimate (even if rough)
- Students understand story points are relative effort
- Students are ready (if nervous) for first sprint

---

## Module 3: Model Evaluation - Sprint 1 (Weeks 5-6)

### Module Overview

**Technical Focus**: Cross-validation, precision/recall/F1/ROC, confusion matrices, model comparison
**PM Focus**: First complete 2-week sprint (planning, standups, burndown, retrospective)
**Timing**: 2 weeks, 1 sprint deliverable (50 pts) + retrospective (25 pts) = 75 pts total
**Student Workload**: 9-12 hours/week (sprint cycles are intensive)

**Learning Objectives:**
1. Evaluate model performance using precision, recall, F1-score, and ROC curves
2. Apply cross-validation techniques to assess model generalization
3. Plan and execute first development sprint using Scrum methodology

### Week 5: Sprint Planning & Execution Begins

**CRITICAL: Sprint Planning happens BEFORE Week 5 class**

**Pre-Week 5 Assignment (Due Sunday before Week 5):**
Students must complete `sprint_1_planning.md`:
1. Calculate capacity (from Weeks 3-4 velocity)
2. Define sprint goal
3. Select user stories from backlog (total points ≤ capacity)
4. Break stories into tasks
5. Create GitHub Issues for sprint
6. Set up sprint board (To Do/In Progress/Done)

**Class (50 minutes):**
- **Minutes 0-15**: Sprint planning debrief
  - Students share sprint goals (2-3 volunteers)
  - Drew reviews: Are goals realistic?
  - Address capacity questions
- **Minutes 15-35**: Model evaluation lecture
  - **Accuracy is not enough**: Imbalanced datasets example
  - **Precision vs. Recall**: Tradeoff discussion
  - **F1-Score**: Harmonic mean balances both
  - **ROC curves**: Visual comparison
  - **Cross-validation**: Why k-fold?
- **Minutes 35-45**: Sprint execution guidance
  - Daily standup format (3 questions)
  - Burndown chart introduction
  - Moving stories on board
- **Minutes 45-50**: Sprint work begins (in next lab)

**Lab (120 minutes):**
- **Minutes 0-10**: Sprint board setup check
  - Verify everyone has board configured
  - All stories in "To Do" column?
- **Minutes 10-15**: First daily standup (verbal, in-class)
  - Go around room: "What I'll do today? Blockers?"
  - Model the 3-question format
- **Minutes 15-110**: Sprint work time
  - Students implement model evaluation code
  - Drew circulates, checks progress
  - Intervene if someone is blocked >20 minutes
  - **Key**: Students work on ONE story at a time
- **Minutes 110-120**: Mid-sprint checkpoint
  - Quick poll: "How many stories in progress? How many done?"
  - Adjust course if needed

**Teaching Tips:**
- **Sprint planning is THE critical moment.** If students overcommit here, their Sprint 1 will be miserable and they'll learn the wrong lesson.
- **Capacity calibration**: If a student plans 25 points but their velocity was 12, intervene. "Let's be more conservative for Sprint 1."
- **Daily standups in-class (Week 5)**: Do them together first 2-3 days. Model the brevity. Then students do independently.
- **Sprint work time = office hours.** Circulate constantly. Look for frustrated faces.

**Common Struggles:**
- **"I don't know my velocity!"**: Use retroactive Week 3-4 estimates. Or start conservative (8-10 points).
- **"My sprint goal is too vague"**: Good goals: Specific, measurable. Bad: "Do model evaluation." Good: "Compare 4 algorithms across 5 metrics."
- **"I'm already behind schedule (Day 2)"**: Normal! Sprint 1 is learning. "What can you adjust?"
- **"Cross-validation code isn't working"**: Check sklearn version. Check cv= parameter. Check scoring= parameter.

### Week 6: Sprint Completion & Retrospective

**Class (50 minutes):**
- **Minutes 0-10**: Sprint check-in
  - "Where is everyone on their burndown?"
  - Address common blockers (confusion matrices, ROC curves)
- **Minutes 10-30**: Advanced model evaluation
  - Confusion matrix interpretation (false positives vs. false negatives)
  - ROC curve tradeoffs (sensitivity vs. specificity)
  - When to optimize for precision vs. recall
  - Class discussion: Medical diagnosis scenario
- **Minutes 30-45**: Sprint retrospective introduction
  - **Purpose**: Learn from Sprint 1 to improve Sprint 2
  - **Format**: What went well? What didn't? Action items?
  - **Start/Stop/Continue framework**
  - Show example retrospective (from past student or Drew's own)
- **Minutes 45-50**: Sprint 1 demos (if time) or moved to lab

**Lab (120 minutes):**
- **Minutes 0-30**: Final sprint work time
  - Students complete remaining stories
  - Move to "Done" when acceptance criteria met
- **Minutes 30-60**: Sprint demos (Sprint Review)
  - Each student presents (3-5 min):
    - Sprint goal
    - What they completed
    - Best model and why
    - What they learned
  - Class provides feedback
- **Minutes 60-100**: Retrospective time
  - Students complete `sprint_1_retrospective.md`
  - Reflect on what went well / what didn't
  - Calculate velocity (planned vs. actual)
  - Create action items for Sprint 2
- **Minutes 100-120**: Retrospective share-out
  - Volunteers share insights (3-4 students)
  - Drew shares his observations
  - Celebrate sprint completion!

**Teaching Tips:**
- **Sprint demos are CRITICAL.** This is where students present working software. Celebrate what shipped, discuss what didn't.
- **Retrospectives must be honest.** If students write "everything went great," push back. "Really? No challenges at all?"
- **Velocity revelation**: Most students overestimate. Show that Sprint 1 velocity is the LEARNING. Sprint 2 planning uses this data.
- **Action items must be specific.** Bad: "Plan better." Good: "Break large stories into smaller stories (≤5 points)."

**Common Struggles:**
- **"I didn't finish all my stories"**: Totally normal! Calculate velocity with COMPLETED points only. Incomplete stories don't count.
- **"My retrospective feels forced"**: It is forced at first. By Sprint 3, they'll see value. Model vulnerability by sharing your own struggles.
- **"I don't know what to improve"**: Ask probing questions. "What took longer than expected? Why?"
- **"My model accuracy is 52%"**: Good! Why is it low? Dataset imbalance? Wrong algorithm? Feature engineering needed?

**Success Indicators:**
- Students completed Sprint 1 (even if not all stories done)
- Burndown charts show attempt at tracking (even if messy)
- Daily standups are documented (8+ entries)
- Retrospectives are honest and specific
- Students can articulate what they learned about their velocity

**Sprint 1 Reality Check:**
- 60-70% of students will overestimate capacity
- Average actual velocity will be 60-80% of planned velocity
- That's PERFECT - now they have data for Sprint 2
- If 90%+ students hit their sprint goal, it was too easy

---

## Module 4: AI Agents - Sprint 2 (Weeks 7-8)

### Module Overview

**Technical Focus**: Agent design, decision-making algorithms, autonomous behavior
**PM Focus**: Second sprint using Sprint 1 velocity data, improved practices
**Timing**: 2 weeks, 1 sprint deliverable (50 pts) + review/retro (25 pts) = 75 pts total
**Student Workload**: 9-11 hours/week (should be slightly easier than Sprint 1)

**Learning Objectives:**
1. Design AI agents with specific goals and decision-making algorithms
2. Implement autonomous agents for task completion
3. Execute second sprint with improved PM practices based on Sprint 1 retrospective

### Week 7: Sprint 2 Planning & Agent Introduction

**Pre-Week 7: Sprint 2 Planning (Due Sunday before Week 7)**

Students complete `sprint_2_planning.md` using **Sprint 1 actual velocity**:
1. Review Sprint 1 retrospective action items
2. Calculate capacity from Sprint 1 actual velocity
3. Define sprint goal (agent-focused)
4. Select user stories (conservative based on data!)
5. Implement ONE action item from Sprint 1 retro

**Class (50 minutes):**
- **Minutes 0-15**: Sprint 2 planning debrief + Sprint 1 lessons
  - "Who adjusted their capacity based on Sprint 1 velocity?" (should be everyone!)
  - "Who implemented an action item from retrospective?"
  - Celebrate data-driven planning
- **Minutes 15-40**: AI Agents lecture
  - **What is an agent?** Autonomous entity with goals, percepts, actions
  - **Agent architectures**: Simple reflex, goal-based, utility-based
  - **Decision-making**: Rules, search, learning
  - **Examples**: Game-playing bot, chatbot, automation agent
  - Show video demos of agents in action
- **Minutes 40-50**: Sprint 2 kickoff
  - First standup: "What I'll do this week?"
  - Address agent project questions

**Lab (120 minutes):**
- **Minutes 0-30**: Agent design workshop
  - Students sketch agent architecture:
    - What is the agent's goal?
    - What can it perceive?
    - What actions can it take?
    - What's the decision algorithm?
  - Pair-share designs
- **Minutes 30-110**: Sprint 2 work begins
  - Students start implementing agent
  - Drew circulates, helps with design decisions
  - "Is your agent's goal clear?"
  - "How will you evaluate success?"
- **Minutes 110-120**: Sprint check-in
  - Poll: "Are you on track? Blockers?"
  - Adjust if patterns emerge

**Teaching Tips:**
- **Velocity-based planning is THE lesson.** If students plan Sprint 2 with same points as Sprint 1 (ignoring actual velocity), intervene immediately.
- **Agent design is open-ended.** Provide 3-4 example agent ideas for students who are stuck. Game-playing bot (Tic-Tac-Toe), chatbot with personality, automated data collector.
- **Sprint 2 should feel easier.** Students know the sprint rhythm now. If it doesn't feel easier, something is wrong.
- **Action item implementation**: Check that students actually DID their retrospective action items. "You said you'd break stories smaller. Did you?"

**Common Struggles:**
- **"What's the difference between an agent and a function?"**: Agent has autonomy, perceives environment, acts over time. Function is one-shot input → output.
- **"My agent is too simple"**: Simple is fine! Tic-Tac-Toe with minimax is a perfectly valid agent. Don't need AlphaGo.
- **"My agent is too complex"**: Scale back. What's the MVP (minimum viable product)?
- **"I don't know how to evaluate my agent"**: Define success metric FIRST. Win rate? Task completion? Response quality?

### Week 8: Sprint 2 Completion & Velocity Analysis

**Class (50 minutes):**
- **Minutes 0-10**: Sprint 2 mid-point check
  - Burndown charts status
  - Common agent implementation issues
- **Minutes 10-30**: Advanced agent concepts
  - **State representation**: How agents track world state
  - **Search algorithms**: BFS, DFS, A* (brief intro)
  - **Learning agents**: Reinforcement learning preview (CTS-285 topic)
- **Minutes 30-45**: Sprint review preparation
  - How to demo an agent
  - What to highlight in presentation
  - Practice run (1-2 volunteers)
- **Minutes 45-50**: Sprint 2 retrospective guidance
  - **Focus**: Velocity patterns Sprint 1 vs. Sprint 2
  - Was Sprint 2 planning more accurate?
  - What improved? What's still challenging?

**Lab (120 minutes):**
- **Minutes 0-30**: Final agent work
  - Students complete agent implementation
  - Test agent performance
  - Prepare demo
- **Minutes 30-70**: Sprint 2 Review (demos)
  - Each student demos agent (3-5 min)
  - Show agent in action (live or video)
  - Discuss challenges, decisions
  - Peer feedback
- **Minutes 70-110**: Sprint 2 Retrospective
  - Complete `sprint_2_retrospective.md`
  - **Critical**: Compare Sprint 1 vs. Sprint 2 velocity
  - Did planning improve?
  - Are estimates more accurate?
  - Action items for Sprint 3
- **Minutes 110-120**: Retrospective insights share
  - Class discussion: Velocity trends
  - "Who's getting better at estimation?"

**Teaching Tips:**
- **Sprint 2 velocity comparison is KEY TEACHING MOMENT.** Show velocity chart with both sprints. Is estimation improving? Is velocity stabilizing?
- **Agent demos are fun.** Let students have fun with this. Game-playing bots can be entertaining. Chatbots can be hilarious.
- **Retrospective depth increasing?** Sprint 2 retros should be more insightful than Sprint 1. Students are learning the format.
- **PM is becoming habitual** for some students. Note who is doing standups consistently without reminders. They "get it."

**Common Struggles:**
- **"My Sprint 2 velocity was LOWER than Sprint 1"**: Could be several reasons - harder technical content, better estimation (so fewer points), life circumstances. Discuss.
- **"I'm bored of retrospectives"**: This happens. Remind: Industry ML teams do retros. This is practice for real work.
- **"My agent works but it's not impressive"**: Working agent > impressive broken code. Function matters more than flash.

**Success Indicators:**
- Sprint 2 planning was based on Sprint 1 velocity data
- Students implemented at least one action item from Sprint 1 retro
- Velocity variance decreased (Sprint 2 closer to plan than Sprint 1)
- Students can articulate how their estimation improved
- PM practices are becoming less novel, more routine

**Module 4 Completion Reality Check:**
- Students should feel more comfortable with sprints now
- Velocity should be stabilizing (within ±20% of planned)
- PM feels less like "extra work," more like "how we work"
- Technical skills progressing: Can build ML models and simple agents

---

## Module 5: Neural Networks - Sprint 3 (Weeks 9-10)

### Module Overview

**Technical Focus**: Feedforward neural networks, TensorFlow/Keras, backpropagation, hyperparameter tuning
**PM Focus**: Third sprint with PM becoming automatic (less scaffolding)
**Timing**: 2 weeks, 1 sprint deliverable (75 pts - higher stakes)
**Student Workload**: 10-12 hours/week (neural networks are complex)

**Learning Objectives:**
1. Construct neural networks using TensorFlow/Keras
2. Apply backpropagation and gradient descent concepts
3. Manage third sprint with PM becoming automatic

### Week 9: Neural Networks Introduction & Sprint 3

**Pre-Week 9: Sprint 3 Planning (Less Scaffolding)**

Students complete planning **without template** (test of learning):
1. Use Sprint 2 velocity for capacity
2. Plan sprint independently
3. No template provided - students create their own format

**Class (50 minutes):**
- **Minutes 0-5**: Sprint 3 planning check (minimal)
  - "Everyone have a plan? Capacity realistic?"
  - Less hand-holding now
- **Minutes 5-40**: Neural networks lecture
  - **Biological inspiration**: Neurons, synapses, activation
  - **Architecture**: Input layer → Hidden layers → Output layer
  - **Forward pass**: Data flows through network
  - **Backpropagation**: How networks learn (high-level)
  - **Hyperparameters**: Layers, neurons, learning rate, epochs, batch size
  - **Keras/TensorFlow**: High-level API demonstration
- **Minutes 40-50**: Sprint 3 begins
  - MNIST dataset introduction (handwritten digits)
  - Expected challenges: Longer training times, GPU helpful

**Lab (120 minutes):**
- **Minutes 0-20**: Neural network setup
  - Load MNIST dataset together
  - Verify TensorFlow/Keras installation
  - Google Colab GPU setup (recommended)
- **Minutes 20-40**: First neural network (together)
  - Build simple Dense network (2 hidden layers)
  - Compile with optimizer, loss, metrics
  - Fit on training data
  - Evaluate on test data
- **Minutes 40-110**: Sprint 3 work (mostly independent)
  - Students experiment with architectures
  - Try different layer counts, neuron counts
  - Adjust learning rates, epochs
  - Drew available for questions but less guidance
- **Minutes 110-120**: Troubleshooting session
  - Common issues (training loss not decreasing, overfitting)

**Teaching Tips:**
- **Neural networks are a complexity jump.** Students will struggle. This is expected. GPU training can take 5-10 minutes.
- **PM scaffolding removed intentionally.** Sprint 3 tests whether students have internalized the process. Some will struggle - provide support individually.
- **Google Colab GPU is essential.** Without GPU, training takes forever. Show students how to enable GPU in Colab.
- **Overfitting will happen.** Great teaching moment. Show training accuracy 99%, test accuracy 85%. Why?

**Common Struggles:**
- **"My training loss is NaN"**: Learning rate too high. Try 0.001 or 0.0001.
- **"Training takes forever"**: GPU not enabled in Colab? Dataset too large? Reduce epochs for experimentation.
- **"My model gets 10% accuracy (random)"**: Check architecture. Check loss function (should be categorical_crossentropy for MNIST). Check labels.
- **"I don't know how many layers to use"**: Start simple (2 hidden layers). Add complexity if needed.
- **"My sprint planning is messy without template"**: Good feedback. What elements did you miss? Add them.

### Week 10: Sprint 3 Completion & Neural Network Mastery

**Class (50 minutes):**
- **Minutes 0-10**: Sprint check-in (brief)
  - Burndown status poll
  - Address blocking issues
- **Minutes 10-35**: Advanced neural networks
  - **Activation functions**: ReLU, sigmoid, tanh, softmax
  - **Optimization**: SGD, Adam, RMSprop
  - **Regularization**: Dropout, early stopping, L1/L2
  - **Preventing overfitting**: Practical strategies
- **Minutes 35-50**: Sprint 3 wrap-up
  - Minimal retrospective guidance
  - "You know what to do by now"

**Lab (120 minutes):**
- **Minutes 0-30**: Final neural network experimentation
  - Students try dropout, early stopping
  - Compare to baseline model
- **Minutes 30-60**: Sprint 3 demos
  - Students present neural network results
  - Focus: Architecture choices and why
- **Minutes 60-90**: Sprint 3 retrospective
  - Less structured - students write independently
  - Focus: Is PM becoming habitual?
- **Minutes 90-120**: Mid-semester reflection
  - 3 sprints complete! Halfway through semester
  - Velocity chart analysis: What patterns?
  - "What's your PM growth story so far?"

**Teaching Tips:**
- **By Sprint 3, some students "get it"** (PM is automatic). Others still struggle. Identify who needs extra PM support.
- **Mid-semester is great reflection point.** Have students look back at Sprint 1. How much has changed?
- **Neural network success varies widely.** Some students get 97% accuracy, others 85%. That's OK if they can explain WHY.
- **Prepare for burnout signs.** 3 sprints is a lot. Module 6 is coming (more sprints). Check student wellness.

**Common Struggles:**
- **"I'm tired of sprints"**: Normalize. "Real ML teams do this continuously. You're building stamina."
- **"My velocity is all over the place"**: Show that's normal. Life happens. Trend matters more than individual sprints.
- **"Neural networks are magic"**: Push for intuition. "What is the network learning? Can you visualize it?"

**Success Indicators:**
- Students complete Sprint 3 with minimal PM guidance
- Sprint planning is self-directed and realistic
- Retrospectives are insightful without prompting
- Students can train neural networks independently
- Mid-semester velocity charts show learning (estimation improving)

**Module 5 Completion Reality Check:**
- PM should feel automatic for 60-70% of students
- Remaining 30-40% still need reminders (daily standups, burndown)
- Technical skills: Can build and tune neural networks
- Students are halfway through 6 sprints - momentum matters

---

## Module 6: Computer Vision - Sprint 4 (Weeks 11-12)

### Module Overview

**Technical Focus**: CNNs, image classification, transfer learning, data augmentation
**PM Focus**: Fourth sprint with ethics integration
**Timing**: 2 weeks, 1 sprint deliverable (75 pts including 10 pts ethics)
**Student Workload**: 10-12 hours/week

**Learning Objectives:**
1. Implement CNN architectures for image classification
2. Apply transfer learning using pre-trained models
3. Analyze ethical implications of computer vision systems

### Week 11: CNNs & Sprint 4 with Ethics

**Class (50 minutes):**
- **Minutes 0-5**: Sprint 4 planning check (minimal)
- **Minutes 5-30**: Computer vision lecture
  - **Why CNNs?** Spatial structure in images
  - **Convolutional layers**: Feature detection (edges, textures, objects)
  - **Pooling layers**: Downsampling
  - **CNN architectures**: LeNet, AlexNet, VGG, ResNet
  - **Transfer learning**: Use pre-trained models, fine-tune
- **Minutes 30-45**: AI Ethics - Computer Vision
  - **Bias in datasets**: Face recognition example (demographic imbalance)
  - **Misuse potential**: Surveillance, deepfakes, discrimination
  - **Fairness metrics**: Equal accuracy across groups
  - **Case study**: Joy Buolamwini's research on facial recognition bias
- **Minutes 45-50**: Sprint 4 begins (with ethics requirement)

**Lab (120 minutes):**
- **Minutes 0-20**: CNN setup
  - Load CIFAR-10 or Fashion MNIST
  - Build simple CNN together (Conv → Pool → Conv → Pool → Dense)
- **Minutes 20-60**: CNN experimentation
  - Students build custom CNN
  - Train and evaluate
  - Compare to Module 5 dense network
- **Minutes 60-90**: Transfer learning demo
  - Load VGG16 or ResNet50 (Keras applications)
  - Fine-tune on custom dataset
  - Compare to CNN from scratch
- **Minutes 90-120**: Ethics analysis begins
  - Students test model fairness (if applicable)
  - Analyze dataset diversity
  - Document limitations and potential misuse

**Teaching Tips:**
- **CNNs are visually intuitive.** Show visualizations of what convolutional filters learn (edge detectors, texture detectors).
- **Transfer learning is powerful.** Students will be amazed that a pre-trained model outperforms their custom CNN with 1/10 the training time.
- **Ethics is not optional.** This is 10 pts of grade. Students must engage seriously with bias, fairness, misuse.
- **Real-world examples matter.** Show concrete examples of CV bias (facial recognition failing on darker skin tones, Amazon hiring tool bias).

**Common Struggles:**
- **"My CNN is worse than my dense network!"**: Possible. CNNs shine on larger images, more complex patterns. CIFAR-10 small images sometimes don't show advantage.
- **"Transfer learning feels like cheating"**: It's not! Industry standard. "Standing on shoulders of giants."
- **"I don't know how to analyze bias"**: Test model on subgroups (if labels available). Analyze dataset composition. Document limitations.
- **"Ethics section feels forced"**: Push for honesty. "What could go wrong with this model? Who might be harmed?"

### Week 12: Sprint 4 Completion & Ethics Integration

**Class (50 minutes):**
- **Minutes 0-10**: Sprint check-in
- **Minutes 10-35**: Advanced computer vision
  - **Data augmentation**: Rotation, flip, zoom, color jitter
  - **Object detection**: YOLO, R-CNN (brief intro)
  - **Semantic segmentation**: Pixel-level classification
- **Minutes 35-50**: Ethics discussion
  - Class discussion: Ethics findings from students
  - "What biases did you find in your dataset?"
  - "What's your model's biggest limitation?"

**Lab (120 minutes):**
- **Minutes 0-30**: Final CV work
  - Data augmentation implementation
  - Model refinement
- **Minutes 30-60**: Sprint 4 demos
  - Students present CV models
  - MUST include ethics analysis in demo
- **Minutes 60-90**: Sprint 4 retrospective
  - Self-directed
  - Ethics reflection: "How did ethics analysis change your perspective?"
- **Minutes 90-120**: Sprint board cleanup & prep for Module 7

**Teaching Tips:**
- **Ethics integration is working** if students talk about bias without prompting. If ethics feels tacked-on, push harder.
- **Sprint 4 should be smooth.** By now, PM is habitual for most students. If not, individual intervention needed.
- **Data augmentation prevents overfitting.** Great practical demonstration of regularization.

**Success Indicators:**
- Students integrate ethics naturally into demos
- Sprint 4 executed with minimal guidance
- Students can explain CNN architecture choices
- Transfer learning successfully applied

---

## Module 7: NLP - Sprint 5 (Weeks 13-14)

### Module Overview

**Technical Focus**: Text preprocessing, TF-IDF, word embeddings, sentiment analysis, text classification
**PM Focus**: Fifth sprint with process optimization
**Timing**: 2 weeks, 1 sprint deliverable (75 pts)
**Student Workload**: 10-12 hours/week

**Learning Objectives:**
1. Process text data for ML applications
2. Implement sentiment analysis and text classification
3. Optimize sprint process based on 4 previous sprints

### Week 13: NLP & Sprint 5 Optimization

**Class (50 minutes):**
- **Minutes 0-5**: Sprint 5 check
- **Minutes 5-35**: NLP lecture
  - **Text as data**: Challenges (variable length, semantics, context)
  - **Preprocessing**: Tokenization, stopword removal, stemming/lemmatization
  - **Feature extraction**: Bag of words, TF-IDF, word embeddings
  - **Applications**: Sentiment analysis, spam detection, topic classification
  - **Tools**: NLTK, spaCy, Hugging Face
- **Minutes 35-50**: Process optimization discussion
  - "What PM practices are working? What's not?"
  - "How has your sprint process evolved?"
  - Peer share: Best practices

**Lab (120 minutes):**
- **Minutes 0-20**: NLP setup
  - Load text dataset (IMDB reviews, Twitter sentiment, spam)
  - Text preprocessing together
- **Minutes 20-80**: NLP pipeline implementation
  - Tokenize, remove stopwords
  - TF-IDF vectorization
  - Train Naive Bayes classifier
  - Train alternative (Logistic Regression, SVM)
- **Minutes 80-120**: Advanced NLP (optional)
  - Word embeddings (Word2Vec, GloVe)
  - Neural network classifier

**Teaching Tips:**
- **NLP is different.** Text preprocessing is tedious but necessary. Normalize that it feels unglamorous.
- **Sprint 5 optimization**: Look for students who have refined their process. Ask them to share best practices.
- **Sentiment analysis is fun.** Students enjoy predicting movie review sentiment or tweet sentiment.

**Common Struggles:**
- **"Why remove stopwords?"**: They're common words (the, a, is) that don't carry meaning for classification.
- **"TF-IDF is confusing"**: Term Frequency (how often in document) × Inverse Document Frequency (how rare across documents).
- **"My NLP model is slow"**: Text vectorization creates huge feature spaces. Use max_features parameter.

### Week 14: Sprint 5 Completion & Process Reflection

**Class (50 minutes):**
- **Minutes 0-10**: Sprint check
- **Minutes 10-35**: Advanced NLP
  - **Transformers**: BERT, GPT (high-level overview)
  - **Transfer learning for NLP**: Pre-trained language models
  - **Looking ahead**: CTS-285 advanced topics
- **Minutes 35-50**: Sprint 5 wrap & Module 8 preview
  - Capstone overview
  - Process Portfolio requirements
  - Sprint 6 planning

**Lab (120 minutes):**
- **Minutes 0-30**: Final NLP work
- **Minutes 30-60**: Sprint 5 demos
- **Minutes 60-100**: Sprint 5 retrospective
  - **Focus**: Process evolution over 5 sprints
  - Velocity chart: Sprints 1-5 trend
  - "What's your biggest PM improvement?"
- **Minutes 100-120**: Capstone planning begins
  - Students brainstorm capstone project ideas
  - What ML techniques will you integrate?

**Success Indicators:**
- Sprint 5 executed smoothly
- Students can articulate process improvements across 5 sprints
- NLP pipeline implemented successfully
- Ready to tackle capstone

---

## Module 8: Capstone & Portfolio Defense (Weeks 15-16)

### Module Overview

**Technical Focus**: Integration project combining 2+ ML techniques
**PM Focus**: Sprint 6 + Process Portfolio analyzing all 6 sprints
**Timing**: 2 weeks, capstone (100 pts) + presentation (75 pts) = 175 pts (25% of grade)
**Student Workload**: 12-15 hours/week (intensive final push)

**Learning Objectives:**
1. Integrate multiple ML techniques into comprehensive project
2. Justify technical and design decisions through formal presentation
3. Evaluate personal skill development across entire course

### Week 15: Capstone Sprint 6 Execution

**Class (50 minutes):**
- **Minutes 0-10**: Capstone project expectations
  - Must integrate 2+ ML techniques from semester
  - End-to-end pipeline (EDA → preprocessing → modeling → evaluation → ethics)
  - Production-quality code
- **Minutes 10-25**: Capstone examples
  - Show 3-4 past student capstones
  - Discuss what makes them excellent
- **Minutes 25-40**: Process Portfolio requirements
  - Velocity chart (all 6 sprints)
  - Estimation accuracy evolution
  - Retrospective insights with evidence
  - PM growth narrative essay
- **Minutes 40-50**: Sprint 6 begins + Q&A

**Lab (120 minutes):**
- **Minutes 0-120**: Sprint 6 work time
  - Students work independently on capstone
  - Drew available for questions
  - Check-ins every 30 min: "Everyone on track?"

**Teaching Tips:**
- **Capstone is student-driven.** Provide minimal guidance. This tests autonomy.
- **Integration is key.** If student just does "another classification project," push for more. Where's the integration?
- **Process Portfolio takes time.** Students underestimate this. Remind: 4 hours for Portfolio creation.
- **Office hours extended.** Make yourself extra available Week 15-16.

**Common Struggles:**
- **"I don't know what to build"**: Have 3-4 backup project ideas ready. Hybrid recommender system (collaborative filtering + content-based), fraud detection pipeline, multi-modal classifier.
- **"My project is too ambitious"**: Scale back. What's MVP?
- **"I don't have 6 sprints of data"**: They should! If missing, have them reconstruct from commit history.

### Week 16: Final Presentations & Course Closure

**Class (50 minutes):**
- **Minutes 0-5**: Presentation logistics
  - 15-20 min per student (technical 7 min, PM 5 min, ethics 3 min, Q&A 5-10 min)
- **Minutes 5-50**: Presentations (5-6 students, or move to lab for all)

**Lab (120 minutes):**
- **Minutes 0-90**: Final presentations
  - All students present capstone projects
  - Peer feedback forms
  - Celebrate completion!
- **Minutes 90-110**: Course retrospective
  - Class discussion: What worked? What didn't?
  - "How do you feel about managing ML projects now?"
  - "What PM skills will you use in CSC-289?"
- **Minutes 110-120**: Celebration & closure
  - Drew's closing remarks
  - Portfolio advice for job hunting
  - Final words

**Teaching Tips:**
- **Presentations are celebratory.** This is their victory lap. Celebrate what they built.
- **Q&A tests understanding.** Ask questions that probe depth. "Why did you choose Random Forest over XGBoost?" "How would you deploy this model?"
- **Process Portfolio review** happens after class. Grade based on rubric.
- **Course retrospective feedback** is gold. Use it to improve next semester.

**Success Indicators:**
- Students present capstone projects confidently
- Process Portfolios show clear growth narrative
- Students can articulate PM skills learned
- Course ends on high note (not burnt-out misery)

---

# PART 3: GRADING GUIDELINES

## 3.1 PM Component Grading Philosophy

**Core Principle**: Process grading is NOT busywork grading. You're assessing professional work habits that industry ML teams use daily.

### What You're Actually Grading

**Sprint Planning (5 pts per sprint):**
- Is capacity based on velocity data? (1 pt)
- Is sprint goal clear and achievable? (1 pt)
- Are stories properly formatted and estimated? (2 pts)
- Are acceptance criteria defined? (1 pt)

**Daily Execution (8 pts per sprint):**
- Daily standups consistent (8+ of 10 days)? (4 pts)
- Sprint board managed (stories move through workflow)? (2 pts)
- Burndown chart maintained? (2 pts)

**Sprint Artifacts (5 pts per sprint):**
- All GitHub Issues created? (2 pts)
- Sprint planning document complete? (2 pts)
- Professional presentation? (1 pt)

**Velocity & Learning (2 pts per sprint):**
- Velocity tracked accurately? (1 pt)
- Evidence of learning from previous sprints? (1 pt)

### Common Grading Scenarios

**Scenario 1: Great technical work, poor PM**
- Student builds excellent model (90% accuracy)
- But: No sprint planning, sporadic standups, no burndown chart
- **Grade**: Technical component: 23/25. PM component: 8/20. **Total: 31/45 (69%)**
- **Feedback**: "Your ML skills are strong. However, industry teams require sprint discipline. Your PM grade reflects missing artifacts."

**Scenario 2: Solid PM, struggling technical**
- Student completes all PM artifacts professionally
- But: Model only achieves 60% accuracy, code has errors
- **Grade**: Technical component: 15/25. PM component: 18/20. **Total: 33/45 (73%)**
- **Feedback**: "Your PM practices are excellent. Technical implementation needs work. Let's debug your model together."

**Scenario 3: Late submission due to technical blocker**
- Student documented blocker in daily standups
- Reached out for help in office hours
- Late due to legitimate technical challenge (not procrastination)
- **Policy**: 1-day grace period with no penalty if documented blocker. Then standard late policy.

### What "Good Enough" Looks Like

**Sprint Planning:**
- Good Enough: Capacity calculation present, stories estimated, sprint goal exists
- Excellent: Velocity trend analysis, reference to previous retro, stretch goals identified

**Daily Standups:**
- Good Enough: 8+ entries, follows 3-question format
- Excellent: 10 entries, surfaces blockers early, shows iteration

**Burndown Chart:**
- Good Enough: Chart exists, updated 5+ times, shows some progress tracking
- Excellent: Daily updates, annotations for events, ideal line shown

**Retrospectives:**
- Good Enough: What went well / what didn't / action items present
- Excellent: Specific examples, root cause analysis, action items tied to next sprint

### Grading Efficiency Tips

**Use Checklists**: Create sprint grading checklist with yes/no items. Speeds up grading.

**Sample Checklist:**
```
Sprint Planning:
[ ] Capacity calculated
[ ] Sprint goal stated
[ ] Stories estimated
[ ] Acceptance criteria defined

Daily Execution:
[ ] 8+ standup entries
[ ] Stories moved on board
[ ] Burndown chart exists

Retrospective:
[ ] What went well section
[ ] What didn't section
[ ] Action items for next sprint
[ ] Velocity calculation
```

**Batch Grading**: Grade all sprint planning docs together, then all retrospectives. Maintains consistency.

**Feedback Templates**: Create reusable feedback snippets for common issues.

---

## 3.2 Technical Component Grading

### Code Quality Assessment

**What to Look For:**
- **Runs without errors**: Critical. If code doesn't run, grade drops significantly.
- **Comments explain logic**: Not every line, but complex sections commented.
- **Functions modular**: Not one 500-line cell. Functions with clear purposes.
- **Variables named clearly**: `model_accuracy` not `ma`, `training_data` not `d1`

**Red Flags:**
- Code copied verbatim from internet (compare to Stack Overflow patterns)
- AI-generated code with no understanding (test with questions in Q&A)
- Huge blocks uncommented
- Magic numbers everywhere (no constants defined)

### Model Performance Assessment

**Philosophy**: Absolute accuracy matters less than understanding.

**Good Evaluation:**
- Student achieves 85% accuracy
- Explains why (good feature selection, appropriate algorithm)
- Shows what was tried (3+ models compared)
- Discusses limitations ("model struggles with class imbalance")

**Poor Evaluation:**
- Student achieves 92% accuracy
- Copy-pasted code
- Can't explain why model works
- No discussion of what didn't work

**Teaching Principle**: I'd rather see 75% accuracy with deep understanding than 95% accuracy with no comprehension.

### Ethics Component Grading (Modules 6, 8)

**10-point ethics rubric:**
- Bias assessment (3 pts): Did they investigate dataset diversity? Test for fairness?
- Failure mode analysis (2 pts): What happens when model is wrong?
- Data limitations (2 pts): What's missing from dataset? What can't model handle?
- Misuse potential (2 pts): How could this model be misused? What safeguards?
- Mitigation strategies (1 pt): Concrete suggestions for improvement

**What NOT to Accept:**
- "I don't see any ethical issues" (there are ALWAYS ethical issues)
- Generic statements ("bias is bad") without specifics
- Ethics section as afterthought (1 paragraph tacked on end)

**What Excellent Looks Like:**
- Specific bias testing (tested model on demographic subgroups)
- Concrete examples of failure modes
- Honest assessment of limitations
- Thoughtful mitigation strategies

---

## 3.3 Handling Edge Cases

### Student Completes Technical Work but Poor PM

**Situation**: Student builds working model, achieves assignment objectives technically, but PM artifacts are minimal or missing.

**Response**:
1. **Grade as stated**: Technical component full points, PM component low points.
2. **Feedback**: "Your ML skills are strong, but industry requires both. PM is 30-50% of grade for a reason."
3. **Intervention**: Meet 1-on-1. "What's blocking your PM practices? Do you need support?"
4. **Consequences**: If pattern continues, student will fail course despite technical competency. Make this clear early.

### Student Has Great PM but Technical Struggles

**Situation**: Student completes all PM artifacts professionally, but model doesn't work, code has errors, or understanding is shallow.

**Response**:
1. **Grade as stated**: PM component full points, technical component reflects actual quality.
2. **Support**: Offer additional office hours, tutoring referral, pair programming.
3. **Investigate root cause**: Is this a Python skills gap? Conceptual ML gap? Time management issue?
4. **Adjust if needed**: If student is trying hard but genuinely struggling, consider offering revision opportunity.

### Late Submissions Due to Technical Blockers

**Policy**: Documented blockers in daily standups + reaching out for help = grace period.

**Example**:
- Student posts Day 4 standup: "Blocker: TensorFlow GPU configuration not working, model training takes 2+ hours"
- Student attends office hours Day 5
- Student requests 24-hour extension Friday evening
- **Response**: Grant 24-hour extension with no penalty. Student followed process.

**Counter-Example**:
- Student posts nothing until Friday night: "My code doesn't work, need extension"
- No standups documenting struggle
- No office hours attendance
- **Response**: Standard late policy applies. "Sprint process requires communicating blockers early."

### Group Work Requests

**CSC-114 is individual course**, but occasional collaboration is allowed:

**Permitted**:
- Discussing concepts ("How does cross-validation work?")
- Debugging help ("Why is my loss NaN?")
- Code review ("Can you look at my architecture and give feedback?")
- PM practice sharing ("What's your standup format?")

**Not Permitted**:
- Sharing complete solution notebooks
- Copy-pasting code between students
- One student writing another's sprint artifacts
- Coordinated cheating (same code submitted by multiple students)

**Detection**: Use plagiarism detection tools, compare student code, look for identical bugs across submissions.

---

# PART 4: COURSE CALENDAR & TIMING

## 4.1 16-Week Standard Semester

### Week-by-Week Calendar

**Week 1: ML Fundamentals**
- Monday: Course intro, ML basics lecture, environment setup demo
- Wednesday: Lab - First model (Iris k-NN)
- Friday: Assignment 1 due (ML Environment Setup)

**Week 2: User Stories**
- Monday: User story mini-lesson, practice writing stories
- Wednesday: Lab - Create user story backlog
- Friday: Assignment 2 due (User Story Backlog)

**Week 3: Classification**
- Monday: Classification algorithms lecture, estimation mini-lesson
- Wednesday: Lab - Multiple classifiers (breast cancer dataset)
- Friday: Assignment 3 due (Classification Project)

**Week 4: Regression**
- Monday: Regression techniques lecture, velocity intro
- Wednesday: Lab - Linear/polynomial regression
- Friday: Assignment 4 due (Regression Analysis)

**Week 5: Sprint 1 Begins (Model Evaluation)**
- Monday: Sprint planning debrief, evaluation metrics lecture
- Wednesday: Sprint work time
- Friday: Mid-sprint checkpoint

**Week 6: Sprint 1 Completion**
- Monday: Advanced evaluation topics
- Wednesday: Sprint demos + retrospective
- Friday: Sprint 1 deliverable + retrospective due

**Week 7: Sprint 2 Begins (AI Agents)**
- Monday: AI agents lecture, Sprint 2 kickoff
- Wednesday: Agent design workshop
- Friday: Mid-sprint checkpoint

**Week 8: Sprint 2 Completion**
- Monday: Advanced agent concepts
- Wednesday: Sprint 2 demos + retrospective
- Friday: Sprint 2 deliverable + retrospective due

**Week 9: Sprint 3 Begins (Neural Networks)**
- Monday: Neural networks lecture
- Wednesday: First neural network, Sprint 3 work
- Friday: Mid-sprint checkpoint

**Week 10: Sprint 3 Completion**
- Monday: Advanced neural networks, regularization
- Wednesday: Sprint 3 demos + retrospective
- Friday: Sprint 3 deliverable + retrospective due

**Week 11: Sprint 4 Begins (Computer Vision)**
- Monday: CNNs lecture, ethics in CV
- Wednesday: CNN + transfer learning work
- Friday: Mid-sprint checkpoint

**Week 12: Sprint 4 Completion**
- Monday: Advanced CV, data augmentation
- Wednesday: Sprint 4 demos + retrospective
- Friday: Sprint 4 deliverable + retrospective due

**Week 13: Sprint 5 Begins (NLP)**
- Monday: NLP lecture, text preprocessing
- Wednesday: NLP pipeline implementation
- Friday: Mid-sprint checkpoint

**Week 14: Sprint 5 Completion**
- Monday: Advanced NLP, process reflection
- Wednesday: Sprint 5 demos + retrospective
- Friday: Sprint 5 deliverable + retrospective due

**Week 15: Sprint 6 Capstone**
- Monday: Capstone expectations, examples, Sprint 6 begins
- Wednesday: Capstone work time
- Friday: Capstone intensive work, office hours

**Week 16: Final Presentations**
- Monday: Presentation prep, final work time
- Wednesday: Final presentations (Part 1)
- Friday: Final presentations (Part 2), course closure
- **Final Exam Period**: Capstone project + Process Portfolio due

---

## 4.2 8-Week Intensive Version

**Compressed Schedule Adjustments:**

For 8-week intensive summer/winter terms, each module becomes 1 week:

**Weeks 1-2: Modules 1-2 (Foundations)**
- Week 1: ML setup + user stories (combined)
- Week 2: Classification + regression (combined)

**Weeks 3-4: Modules 3-4 (Sprints 1-2)**
- Week 3: Sprint 1 (1-week sprint, model evaluation)
- Week 4: Sprint 2 (1-week sprint, AI agents)

**Weeks 5-7: Modules 5-7 (Sprints 3-5)**
- Week 5: Sprint 3 (neural networks)
- Week 6: Sprint 4 (computer vision + ethics)
- Week 7: Sprint 5 (NLP)

**Week 8: Module 8 (Capstone)**
- Week 8: Sprint 6 capstone + presentations (compressed)

**Changes Required:**
- Sprints become 1-week (5 days, not 10 days)
- Daily standups = 5 entries (not 10)
- Assignments due Friday of each week
- Capstone scope reduced (MVP focus)
- Process Portfolio simplified (fewer data points)

**Instructor Note**: 8-week version is INTENSE. Student workload doubles (18-20 hrs/week). Only recommend for highly motivated students with no other commitments.

---

## 4.3 Flexibility & Adaptation Notes

### When Students Fall Behind

**Red Flag**: Student misses 2+ consecutive assignments or standups.

**Intervention Protocol**:
1. **Week of absence**: Automated Canvas message - "Are you OK? What support do you need?"
2. **If continues**: 1-on-1 meeting (virtual or in-person)
3. **Develop catch-up plan**: Prioritize critical assignments, possibly drop lowest grade
4. **Connect to resources**: Tutoring, counseling, accessibility services if needed

### When Class Pace is Off

**Too Fast** (students overwhelmed):
- Poll: "How many hours are you spending?" If >12 hrs/week consistently, scope is too large
- **Adjust**: Reduce optional requirements, extend deadlines, combine assignments
- **Next semester**: Reduce assignment scope

**Too Slow** (students bored):
- Offer stretch goals for early finishers
- Advanced track: Code Builders can implement algorithms from scratch
- Early capstone start for students who finish Module 7 early

### Holidays & Breaks

**Standard Semester Holidays**:
- **Thanksgiving** (Week 13-14): Reduce Module 7 load, no assignment due Friday before holiday
- **Spring Break** (often Week 8-9): Avoid starting new sprint during break. Either complete Sprint 2 before break or start Sprint 3 after.
- **Finals Week**: Capstone due during finals period (not on final exam day)

**Make-Up Days**:
Build 1-2 buffer days into schedule. If snow day or campus closure, use buffer to maintain sprint timing.

---

# PART 5: TECHNOLOGY SETUP & MANAGEMENT

## 5.1 Required Software & Installation

### For Students

**Option A: Local Python Setup (Recommended for advanced students)**

**Installation Steps**:
1. Download Python 3.8+ from python.org
2. Install via pip:
   ```bash
   pip install jupyter scikit-learn pandas numpy matplotlib seaborn tensorflow
   ```
3. Verify installation:
   ```bash
   python -c "import sklearn, pandas, tensorflow; print('Success!')"
   ```
4. Launch Jupyter:
   ```bash
   jupyter notebook
   ```

**Option B: Google Colab (Recommended for beginners)**

**Setup**:
1. Go to colab.research.google.com
2. Sign in with Google account (school email preferred)
3. All libraries pre-installed!
4. Enable GPU: Runtime → Change runtime type → Hardware accelerator: GPU

**Drew's Recommendation**: Start everyone on Colab Week 1. Students who want local setup can transition Week 3-4.

### For Instructor

**Must Have**:
- **GitHub Organization**: Create organization for course, add all students
- **Canvas Course**: LMS with assignments, modules, gradebook
- **Google Colab**: For demos (screen share Colab in class)
- **Local Python Environment**: For testing assignments before release

**Nice to Have**:
- **Kaggle Account**: For dataset exploration, notebook examples
- **MLflow or Weights & Biases**: For showing production ML tracking (demo only)
- **GitHub Classroom**: For auto-creating student repositories (optional)

---

## 5.2 Classroom Technology Needs

### In-Person Class Setup

**Hardware**:
- Projector + screen (or large monitor)
- Instructor laptop with HDMI/USB-C adapter
- Reliable Wi-Fi (students will be coding in lab)
- Power outlets for student laptops

**Software**:
- Screen sharing capability (Zoom, Teams, or Google Meet for remote students)
- Canvas open (for pulling up assignments)
- Colab open (for live coding demos)
- GitHub open (for showing Sacred Flow)

**Lab Setup**:
- Tables arranged for collaboration (pairs or triads)
- Whiteboard for architecture diagrams
- Timer visible (for sprint check-ins)

### Hybrid/Online Delivery

**Additional Requirements**:
- **Zoom Pro** (or equivalent) for breakout rooms (pair programming)
- **Shared Colab notebooks** for live collaboration
- **Discord or Slack** for async communication (daily standups can be posted here)
- **Loom or OBS** for recording lectures (students watch async, lab is synchronous)

**Teaching Tip**: In hybrid mode, DO NOT lecture synchronously. Record lectures async, use synchronous time for lab and Q&A.

---

## 5.3 Common Technical Issues & Solutions

### Issue 1: "ImportError: No module named sklearn"

**Cause**: Package name is `scikit-learn`, not `sklearn`

**Solution**:
```bash
pip install scikit-learn
```

**Prevention**: Update assignment instructions to use correct package name.

---

### Issue 2: "Jupyter command not found"

**Cause**: Jupyter not installed or not in PATH

**Solution**:
```bash
pip install jupyter
# OR use Anaconda Navigator (GUI)
```

**Backup Plan**: Direct student to Google Colab immediately.

---

### Issue 3: "TensorFlow GPU not available in Colab"

**Cause**: GPU not enabled in runtime settings

**Solution**:
1. Runtime → Change runtime type
2. Hardware accelerator: GPU
3. Save
4. Runtime → Restart runtime

**Verification**:
```python
import tensorflow as tf
print("GPU available:", tf.config.list_physical_devices('GPU'))
```

---

### Issue 4: "My training takes forever / kernel keeps crashing"

**Cause**: Dataset too large, model too complex, or RAM exhausted

**Solution**:
- Reduce dataset size: `X_train = X_train[:1000]`
- Reduce epochs: `epochs=10` instead of `epochs=100`
- Reduce batch size: `batch_size=32` instead of `batch_size=128`
- Use Google Colab with GPU (faster)
- Close other browser tabs (frees RAM)

---

### Issue 5: "GitHub won't render my notebook"

**Cause**: Notebook file too large (>5MB) or contains large outputs

**Solution**:
- Clear outputs before committing: Cell → All Output → Clear
- Use `.gitignore` for large data files
- Use nbviewer.jupyter.org as alternative viewer
- Link to Colab notebook in README

---

### Issue 6: "My accuracy is 0% or 100%"

**Cause**:
- 0%: Label mismatch, wrong loss function
- 100%: Trained and tested on same data (data leakage)

**Solution (0%)**:
```python
# Check label encoding
print("Unique labels:", np.unique(y))
# Ensure loss function matches task
model.compile(loss='categorical_crossentropy')  # multi-class
model.compile(loss='binary_crossentropy')        # binary
```

**Solution (100%)**:
```python
# Verify train/test split happened
print("Train size:", len(X_train))
print("Test size:", len(X_test))
# If test size = 0, that's the problem!
```

---

### Issue 7: "Neural network loss is NaN"

**Cause**: Learning rate too high, gradient exploded

**Solution**:
```python
# Reduce learning rate
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001))  # was 0.01
# OR
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0001))
```

---

## 5.4 Troubleshooting Protocol for Students

**Step 1: Read the error message**
- What does it say? Google it.

**Step 2: Check the assignment instructions**
- Did I follow all steps exactly?

**Step 3: Search Stack Overflow / Reddit**
- Copy-paste error message into Google
- 90% of errors have been solved by someone

**Step 4: Ask in Discord/Slack**
- Post error message + code snippet
- Classmates may have solved it

**Step 5: Office hours**
- Come with: Error message, code, what you've tried

**Step 6: Document blocker in standup**
- "Blocker: TensorFlow installation failing, tried X, Y, Z"

---

# PART 6: STUDENT SUPPORT STRATEGIES

## 6.1 Office Hours Best Practices

### How Drew Structures Office Hours

**Format**: Open Q&A + Working Sessions

**Weekly Schedule**:
- **Monday 3-5pm**: Technical questions (ML concepts, debugging)
- **Wednesday 3-5pm**: PM questions (sprint planning, retrospectives)
- **Friday 1-3pm**: Sprint check-ins (Week 5-6, 7-8, 9-10, 11-12, 13-14, 15-16)

**Extended Hours**:
- Weeks 5-6 (Sprint 1): Add 2 extra hours (students are overwhelmed)
- Weeks 15-16 (Capstone): Add 3 extra hours (intensive final push)

**Virtual Option**: Zoom office hours for remote students

### Most Common Questions

**Technical (60% of questions)**:
1. "My model accuracy is low, how do I improve it?"
2. "Why is my neural network not training?"
3. "How do I visualize confusion matrix?"
4. "What's the difference between precision and recall?"
5. "My code runs in class example but not my project - why?"

**PM (30% of questions)**:
1. "How do I estimate story points accurately?"
2. "My velocity is all over the place - is that normal?"
3. "What should I write in retrospective?"
4. "How do I create sprint board in GitHub Projects?"
5. "Do I really need daily standups?"

**General (10% of questions)**:
1. "Can I get an extension?" (see late work policy)
2. "How much does this assignment affect my grade?"
3. "Will this course prepare me for CSC-289?"

### Teaching Approach in Office Hours

**Don't**: Give answers directly
- "Your model needs dropout layer here, change this line"

**Do**: Guide discovery
- "What happens when you add more layers? Try it. What changed?"
- "Your training accuracy is 99% but test is 70%. What does that suggest?"

**Exception**: If student has been stuck >2 hours and is shutting down, provide more direct help. Struggling is good, suffering is not.

---

## 6.2 When Students Are Struggling

### Technical Struggles

**Signs**:
- Consistently low assignment grades (< 70%)
- Code doesn't run
- Can't explain what their code does
- Missing assignments frequently

**Intervention**:
1. **Diagnose root cause**: Python skills gap? ML concepts unclear? Time management?
2. **Create support plan**:
   - If Python gap: Recommend Python refresher (free online course)
   - If ML concepts: Weekly 1-on-1 tutoring sessions
   - If time: Discuss workload, possible course withdrawal if overcommitted
3. **Offer revision opportunity**: For assignments <70%, allow revision after 1-on-1 meeting (max grade 85%)
4. **Connect to resources**: Tutoring center, accessibility services, counseling

**Example**:
Student consistently gets models running but doesn't understand WHY things work.
- **Response**: "Let's meet weekly for 30 minutes. You'll explain your code to me. If you can't explain it, you don't submit it."

### PM Struggles

**Signs**:
- Missing sprint planning docs
- Sporadic or missing daily standups
- Empty retrospectives ("everything was fine")
- No burndown chart tracking

**Intervention**:
1. **One-on-one conversation**: "What's blocking your PM practices? Is it feeling like busywork?"
2. **Explain real value**: "Industry ML teams do sprints. This is practicing for CSC-289 and beyond."
3. **Simplify if needed**: "Let's start with just daily standups. 2 sentences per day. Can you commit to that?"
4. **Check for deeper issues**: Is student overwhelmed? Depressed? Needs accommodations?

**Example**:
Student builds great models but PM artifacts are minimal.
- **Response**: "Your ML skills are excellent. But 30-50% of grade is PM. You're headed for a C. Let's fix that."

### Combination: Technical + PM Struggles

**Red Alert**: Student is drowning. Technical work incomplete, PM missing, multiple absences.

**Intervention**:
1. **Immediate meeting**: "Are you OK? What's going on?"
2. **Assess continuity**: Can student realistically pass? If not, discuss withdrawal with grade of W (no penalty).
3. **If staying**: Create aggressive support plan. Reduce scope, prioritize critical assignments, weekly check-ins.
4. **Connect to campus resources**: Counseling, accessibility, advising

**Teaching Principle**: Sometimes the compassionate response is helping student withdraw rather than fail.

---

## 6.3 Differentiation Strategies

### For Advanced Students (Code Builders)

**Challenges**:
- Implement algorithms from scratch (don't just use sklearn)
- Mathematical deep dives (backpropagation derivation)
- Research papers (assigned reading + discussion)
- Stretch goals in sprints (optional advanced features)

**Example Assignments**:
- Week 1: Implement k-NN from scratch (no sklearn)
- Week 9: Implement backpropagation manually
- Week 11: Read and summarize ResNet paper

**Teaching Tip**: Advanced students can mentor struggling students. Win-win.

### For Struggling Students (Prompt Masters)

**Supports**:
- High-level APIs only (sklearn, Keras high-level)
- Simplified datasets (smaller, cleaner)
- Pair programming (with partner in class)
- Broken-down tasks (step-by-step guides)

**Example Scaffolds**:
- Week 1: Colab notebook with 80% filled in, student completes 20%
- Week 5: Sprint planning template with examples
- Week 9: Neural network architecture provided, student just tunes hyperparameters

**Teaching Tip**: Struggling students often THRIVE in PM components. Celebrate their sprint discipline even if technical lags.

### For All Students: Two Tracks

**Code Builders Path**:
- Focus: Deep understanding, implement from scratch when possible
- Assignments: Build custom architectures, compare algorithms mathematically
- Capstone: Custom model, novel approach

**Prompt Masters Path**:
- Focus: High-level APIs, hyperparameter tuning, deployment
- Assignments: Use pre-built models, focus on data and evaluation
- Capstone: Applied project, production-ready system

**Both paths achieve all CLOs. Both run 6 sprints. Equal rigor, different approaches.**

---

# PART 7: ASSESSMENT PHILOSOPHY

## 7.1 Formative Assessment

### Knowledge Checks (Ungraded or Low-Stakes)

**Purpose**: Check understanding BEFORE high-stakes assignments. Adjust teaching if needed.

**Format**: 5-10 question quiz after each module
- Multiple choice: Concept recognition
- Short answer: Explain in own words
- Scenario: "Which algorithm would you use for...?"

**Example Questions**:
- What's the difference between classification and regression?
- Why do we split data into training and testing sets?
- Define precision and recall in your own words.
- Given this scenario, would you optimize for precision or recall? Why?

**How to Use Results**:
- If <70% get a concept, re-teach it next class
- If >90% get everything, you can move faster
- Identify individual students who need extra support

### Exit Tickets (End of Class)

**3 Questions** (5 minutes):
1. What did you learn today?
2. What's still confusing?
3. One thing you'll apply this week?

**How to Use**:
- Read before next class
- Address common confusions at start of next class
- Identify students who are lost (individual check-ins)

---

## 7.2 Summative Assessment

### Sprint Assignments (Modules 3-7)

**What You're Measuring**:
- Can student execute a 2-week sprint independently?
- Technical ML implementation (models, evaluation, code quality)
- PM discipline (planning, standups, burndown, retro)
- Learning progression (is velocity stabilizing? estimation improving?)

**Grading**:
- 50% technical (model works, code quality, analysis)
- 40% PM (sprint artifacts complete and professional)
- 10% bonus (completed on time, showed improvement)

**Key Insight**: Sprint assignments measure PROCESS as much as PRODUCT.

### Retrospectives (6 Total)

**What You're Measuring**:
- Can student reflect honestly on what happened?
- Can student identify root causes (not just symptoms)?
- Can student create actionable improvements?
- Is student learning from previous sprints?

**Grading**:
- 40% honesty and depth (not generic)
- 30% actionable improvements (specific, measurable)
- 20% velocity analysis (showing data)
- 10% professionalism (organized, readable)

**Red Flag**: If retrospectives get MORE generic over time, intervene. Should get MORE insightful.

### Capstone Project (Module 8)

**What You're Measuring**:
- Can student design and implement end-to-end ML project?
- Integration of multiple techniques from semester
- Production-quality code and documentation
- Ethical analysis and limitations
- Sprint 6 execution + Process Portfolio

**Grading**:
- 60% technical (integration, code quality, evaluation, ethics)
- 40% Process Portfolio (velocity chart, estimation evolution, retrospective insights, PM growth narrative)

**Key Insight**: Capstone is cumulative. Tests everything from semester.

### Final Presentation (Module 8)

**What You're Measuring**:
- Can student explain technical work clearly?
- Can student articulate PM journey and growth?
- Can student defend decisions under questioning?
- Professional presentation skills

**Grading**:
- 35 pts technical content (problem, methods, results)
- 25 pts PM journey (velocity evolution, retrospective insights)
- 15 pts presentation quality (organization, delivery, visuals)

**Teaching Tip**: Q&A is where you probe depth. Ask "why" questions. Test understanding.

---

## 7.3 Growth Mindset & Retries

### Drew's Philosophy on Failure

**Core Belief**: Failure is data. ML models fail. Sprints fail. That's how we learn.

**How to Cultivate Growth Mindset**:
1. **Normalize failure**: Share your own failures (models that didn't work, sprints that derailed)
2. **Reframe**: "Your model got 52% accuracy? Perfect! Now we have a debugging challenge."
3. **Celebrate iteration**: "Your Sprint 2 velocity was 30% more accurate than Sprint 1 - that's learning!"
4. **Retrospectives as ritual**: Every sprint ends with reflection. Learning from failure is built into course structure.

### Revision Policy

**For Assignments < 70%**:
- Student can revise ONCE within 1 week
- Must meet with Drew first to discuss improvements
- Maximum grade after revision: 85%
- This teaches: "Failure is not final. You can iterate and improve."

**Not Eligible for Revision**:
- Assignments >70% (already passing)
- Sprint retrospectives (these are reflections, can't be "revised")
- Final presentation (no time for revision)

**Example**:
- Student submits Week 3 Classification assignment: 65/100
- Drew offers revision: "Meet with me, we'll discuss what went wrong, then you can resubmit"
- Student revises, resubmits: 85/100 (max grade after revision)
- Learning happened. Growth mindset reinforced.

---

# PART 8: DREW'S TEACHING TIPS

## 8.1 What Works

### Strategy 1: "Failure is Exercise"

**What It Is**: Reframe ML failures as learning opportunities, not disasters.

**How to Do It**:
- When student's model gets 50% accuracy (worse than random): "Perfect! This is a great debugging exercise. Let's figure out why."
- When student's sprint fails: "Now you have velocity data for next sprint. Sprint 1 is learning."
- Share YOUR failures: "I built a model last month that was completely wrong. Here's what I learned."

**Why It Works**: ML is inherently uncertain. Embracing failure reduces anxiety, increases experimentation.

### Strategy 2: Live Coding (No Slides)

**What It Is**: Write code together in class. No PowerPoint.

**How to Do It**:
- Open Colab in class
- "Let's build a classifier together from scratch"
- Type slowly. Students follow along.
- Make intentional mistakes: "Oops, ImportError. What did I forget?"

**Why It Works**: Students see the PROCESS, not just the product. They see debugging in real-time.

### Strategy 3: "What Would Happen If...?"

**What It Is**: Ask students to predict before running code.

**How to Do It**:
- "We have 100 training samples, 20 test samples. What happens if I train on all 120?"
- Students predict: "100% training accuracy, lower test accuracy"
- Run it: Verify prediction
- "Why did that happen?"

**Why It Works**: Builds intuition. Forces students to think, not just execute.

### Strategy 4: Retrospective Share-Outs

**What It Is**: After each sprint, 3-4 students share retrospective insights with class.

**How to Do It**:
- End of Sprint 1, 2, 3, etc.: "Who learned something surprising about their velocity?"
- Volunteers share (2-3 minutes each)
- Class discussion: "Anyone else experience this?"

**Why It Works**: Normalizes struggles ("I'm not the only one!"), spreads best practices, builds community.

### Strategy 5: PM Becomes Automatic Through Consistency

**What It Is**: Sprint structure repeats 6 times. By Sprint 3, it's muscle memory.

**How to Do It**:
- Sprint 1: High scaffolding (templates, guidance)
- Sprint 2: Medium scaffolding (reminders, check-ins)
- Sprint 3: Low scaffolding ("You know what to do")
- Sprints 4-6: Minimal guidance

**Why It Works**: Habit formation through repetition. PM stops feeling like "extra work."

---

## 8.2 What Doesn't Work

### Anti-Pattern 1: Death by PowerPoint

**What It Is**: Lecturing for 50 minutes with slides.

**Why It Fails**: Students tune out. ML is hands-on. Slides don't teach coding.

**Alternative**: 15-minute concept intro (with visuals) + 35 minutes hands-on coding.

### Anti-Pattern 2: "Figure It Out Yourself"

**What It Is**: Providing minimal guidance, expecting students to self-teach.

**Why It Fails**: CSC-114 is foundational. Students need scaffolding. Too much struggle → shutdown.

**Alternative**: Guided practice → Independent practice → Mastery. Gradual release of responsibility.

### Anti-Pattern 3: Grading PM as Checkbox

**What It Is**: "Did you submit sprint planning doc? Yes = full points."

**Why It Fails**: Students submit garbage just to check box. Learn nothing.

**Alternative**: Grade PM with same rigor as technical. Quality matters. Provide feedback.

### Anti-Pattern 4: Ignoring Velocity Data

**What It Is**: Student plans Sprint 2 with same points as Sprint 1 (ignoring actual velocity). Instructor says nothing.

**Why It Fails**: Student learns nothing about data-driven planning.

**Alternative**: Intervene immediately. "You completed 12 points in Sprint 1 but planned 20 for Sprint 2. Why?"

### Anti-Pattern 5: One-Size-Fits-All

**What It Is**: Forcing all students down identical path (everyone must implement from scratch, or everyone must use high-level APIs).

**Why It Fails**: Students have different strengths. Code Builders frustrated by constraints, Prompt Masters overwhelmed by low-level implementation.

**Alternative**: Two tracks. Both achieve same CLOs, different paths.

---

## 8.3 Building the Right Culture

### Psychological Safety

**Goal**: Students feel safe to fail, ask "dumb" questions, admit confusion.

**How to Build It**:
1. **Model vulnerability**: Share your own struggles and failures
2. **Celebrate questions**: "Great question! I bet others were wondering the same thing."
3. **No shaming**: Never mock a student for not knowing something
4. **Normalize iteration**: "First attempts usually fail. That's why we have sprints."

**Signs of Success**:
- Students ask questions freely
- Students admit "I don't understand" without embarrassment
- Students share failures in retrospectives openly

### Encouraging Experimentation

**Goal**: Students try things, break things, learn from breaking things.

**How to Build It**:
1. **Bonus points for experimentation**: "Tried 5+ k values? +2 bonus points."
2. **Showcase creative solutions**: "Look at how Sarah implemented this differently!"
3. **De-risk failure**: Revision policy means failure is not final
4. **Celebrate interesting failures**: "Your model predicted all zeros? Fascinating! Why?"

**Signs of Success**:
- Students try multiple approaches
- Students go beyond minimum requirements
- Students debug independently before asking for help

### Handling ML Model Failures Productively

**Goal**: Model failures become learning moments, not GPA anxiety.

**How to Frame It**:
- **Accuracy is not the goal**: Understanding is the goal
- **Low accuracy is useful data**: "Why is my model bad?" is an excellent research question
- **Comparison is the lesson**: Trying 3 models and analyzing why one works better = learning
- **Document the process**: "I tried X, it failed, so I tried Y" = excellent retrospective content

**Example**:
- Student: "My neural network only gets 60% accuracy. Is that bad?"
- Drew: "Compared to what? What did you expect? What could explain the gap?"
- Student: "Expected 85% based on sklearn model. Maybe neural network is overfitting?"
- Drew: "Excellent hypothesis! How would you test that?"

**Teaching Principle**: Failure is not the opposite of success. Failure is part of the process toward success.

---

# PART 9: ADAPTING THIS COURSE

## 9.1 For Different Audiences

### Faster-Paced Cohort

**Signs**: Students complete assignments early, knowledge checks >90%, asking for harder challenges.

**Adjustments**:
- **Add stretch goals**: Each assignment has optional advanced features
- **Reduce scaffolding faster**: Remove templates by Sprint 2 (instead of Sprint 3)
- **Increase technical depth**: Assign research papers, mathematical derivations
- **Advanced capstone requirements**: Must integrate 3+ techniques (instead of 2+)

**Example**:
- Week 9 Neural Networks: Add "Implement backpropagation from scratch" as stretch goal
- Capstone: Require hyperparameter optimization using grid search or Bayesian optimization

### Slower-Paced Cohort

**Signs**: Students struggle with assignments, knowledge checks <70%, many requests for extensions.

**Adjustments**:
- **Increase scaffolding**: Keep templates through Sprint 4 (instead of removing Sprint 3)
- **Simplify assignments**: Provide more starter code, reduce scope
- **Add intermediate deadlines**: Break large assignments into smaller milestones
- **Extend sprint duration**: 3-week sprints (instead of 2-week) if needed

**Example**:
- Week 9 Neural Networks: Provide complete neural network architecture, students only tune hyperparameters
- Sprint 1: Break into two 1-week micro-sprints (planning + implementation separate)

### Online/Hybrid Delivery

**Adjustments**:
- **Flip classroom**: Record lectures async, use synchronous time for lab and Q&A
- **Online collaboration tools**: Discord for daily standups, Zoom breakout rooms for pair programming
- **Async sprint demos**: Students record video demos (instead of live presentations)
- **Virtual office hours**: Zoom sessions 3x/week

**Teaching Tip**: In hybrid mode, prioritize synchronous time for hands-on work, not passive lecture.

---

## 9.2 For Different Semester Lengths

### 16-Week Standard (Current Design)

**Structure**:
- 8 modules, 2 weeks each
- 6 sprints (Modules 3-8)
- 10-day sprints (2 weeks × 5 weekdays)
- Comfortable pacing, time for depth

**Best For**: Traditional semester, balanced workload

### 8-Week Intensive

**Structure**:
- 8 modules, 1 week each
- 6 sprints (compressed to 1 week each)
- 5-day sprints
- Fast pacing, reduced scope

**Adjustments**:
- Daily standups: 5 entries (instead of 10)
- Sprint planning: Simplified capacity calculation
- Assignments: Reduced scope (MVP focus)
- Capstone: 1 week instead of 2

**Best For**: Summer/winter terms, motivated students

**Warning**: 8-week is INTENSE. 18-20 hrs/week. Only recommend for students with no other commitments.

### 10-Week Quarter System

**Structure**:
- Combine Modules 1-2 (Week 1-2)
- Modules 3-7 (Weeks 3-9, 1 module = 1.5 weeks)
- Module 8 (Week 10)
- 6 sprints (7-8 days each)

**Adjustments**:
- Sprints: 7-8 days (not 10)
- Daily standups: 7-8 entries
- Slightly faster pacing than 16-week
- Capstone: Simplified Process Portfolio

**Best For**: Quarter system schools

---

# PART 10: RESOURCES FOR INSTRUCTORS

## 10.1 Recommended Reading

### For Staying Current in ML/AI

**Books**:
- *Hands-On Machine Learning* by Aurélien Géron (comprehensive, practical)
- *Deep Learning* by Goodfellow, Bengio, Courville (theoretical, advanced)
- *Designing Machine Learning Systems* by Chip Huyen (production ML)

**Blogs/Newsletters**:
- Towards Data Science (Medium)
- Papers with Code (latest research + implementations)
- Import AI (Jack Clark's weekly newsletter)
- ML News (Andriy Burkov)

**Podcasts**:
- TWiML (This Week in Machine Learning)
- Practical AI
- Gradient Dissent

### For PM/Agile Pedagogy

**Books**:
- *Scrum Guide* (official, 13 pages, free)
- *User Story Mapping* by Jeff Patton
- *The Phoenix Project* by Gene Kim (DevOps novel, relevant to PM culture)

**Online Resources**:
- Mountain Goat Software (Mike Cohn's Scrum resources)
- Atlassian Agile Coach (free guides)

---

## 10.2 Professional Development

### Conferences

**ML/AI Education**:
- **NeurIPS** (Education Workshop)
- **ACM SIGCSE** (Computer Science Education)
- **IEEE FIE** (Frontiers in Education)

**ML/AI Technical**:
- **NeurIPS, ICML, ICLR** (Top-tier ML research)
- **PyCon** (Python community, often ML-focused talks)
- **MLOps World** (Production ML)

**Agile/PM**:
- **Agile Alliance Conference**
- **Scrum Gathering**

### Online Communities

**For Instructors**:
- **SIGCSE-members mailing list** (CS education discussions)
- **CS Teaching Tips** (csedweek.org)
- **r/CSEducation** (Reddit)

**For ML**:
- **r/MachineLearning** (Reddit, latest research)
- **Kaggle Forums** (practical ML discussions)
- **TensorFlow/PyTorch Discuss Forums**

---

## 10.3 Staying Current

**Challenge**: ML evolves faster than any other CS discipline. What's cutting-edge today is obsolete in 2 years.

**How Drew Stays Current**:

**Monthly (2-3 hours/month)**:
- Skim Papers with Code for impactful papers
- Try new ML tools/libraries as they emerge
- Read 2-3 ML blog posts

**Semesterly (5-10 hours/semester)**:
- Review 1-2 Kaggle competitions, see winning solutions
- Update course material with new libraries/tools
- Attend 1 ML webinar or conference talk

**Yearly (20-30 hours/year)**:
- Take online course (Coursera, fast.ai) on emerging topic
- Attend conference or workshop
- Major course revision based on industry trends

**What Changes, What Doesn't**:
- **Changes Fast**: Libraries (TensorFlow updates), tools, model architectures
- **Changes Slow**: Core concepts (supervised learning, cross-validation, overfitting)
- **Never Changes**: PM fundamentals (sprints, retrospectives, velocity)

**Teaching Tip**: Focus course on fundamentals. Teach concepts > specific tools. Tools change, concepts endure.

---

# PART 11: APPENDICES

## Appendix A: Sample Syllabus

*(Full syllabus template with all sections populated)*

**CSC-114: Artificial Intelligence I**
**Instructor**: Drew Norris | **Email**: dnorris@college.edu | **Office Hours**: Mon/Wed 3-5pm

**Course Description**:
Advanced AI concepts with hands-on machine learning implementation. Students build ML models using Python, explore supervised/unsupervised learning, model evaluation, AI agents, neural networks, computer vision, and NLP. Integrates professional Scrum/Agile project management throughout with 6 complete sprint cycles.

**Prerequisites**: CSC-113 or instructor permission

**Learning Outcomes**:
1. Implement machine learning models using established frameworks
2. Evaluate AI model performance using appropriate metrics
3. Design and implement AI agents for specific tasks
4. Analyze ethical implications of AI systems
5. Document AI development process and decisions

**Grading**:
- Modules 1-2: 100 pts (14%)
- Modules 3-7 Sprints: 375 pts (54%)
- Module 8 Capstone: 175 pts (25%)
- Process Quality: 50 pts (7%)
- **Total**: 700 pts

**Grading Scale**: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (<60%)

**Required Materials**: GitHub account, Python 3.8+, Jupyter notebooks (or Google Colab)

**Course Policies**: [Attendance, late work, academic integrity sections]

---

## Appendix B: First Day of Class Plan

**CSC-114 First Day (50 minutes)**

**Minutes 0-10: Introductions**
- Drew introduces himself
- 2-sentence icebreaker: "Name, one thing you learned in CSC-113"

**Minutes 10-20: Course Overview**
- "What is CSC-114 about?" Dual focus: ML + PM
- Show 2-3 sample capstone projects
- Explain grading: 30-50% process
- Set expectations: 9-10 hrs/week, 6 sprints

**Minutes 20-30: Sacred Flow Review**
- "You learned this in CSC-113: Issue → Branch → PR → Merge"
- "CSC-114 adds: User stories, story points, sprints"
- Show example sprint board from past student

**Minutes 30-40: ML Demo**
- Live demo: Train k-NN on Iris dataset (5 min)
- "By Week 16, you'll build projects 10x more complex than this"

**Minutes 40-50: Week 1 Assignment Walkthrough**
- Environment setup options (local vs. Colab)
- First model assignment preview
- Q&A

**Minutes 50: Exit Ticket**
- "One thing you're excited about? One thing you're nervous about?"

---

## Appendix C: Email Templates

### Template 1: Welcome Email (Before Semester Starts)

**Subject**: Welcome to CSC-114 - AI + ML Implementation!

Hi everyone,

I'm Drew Norris, and I'm excited to teach CSC-114 this semester! This course is where you'll move from AI concepts (CSC-113) to hands-on machine learning implementation.

**What to Expect**:
- Build ML models using Python (classification, regression, neural networks, computer vision, NLP)
- Manage your work using Scrum methodology (6 complete sprint cycles)
- Create portfolio-quality capstone project

**Before First Class**:
- [ ] Ensure GitHub account is active
- [ ] Consider: Local Python setup OR Google Colab (we'll cover both options)
- [ ] Review CSC-113 Git workflow (we'll build on it)

**Important**: This course has 30-50% process grading. PM discipline is just as important as technical skills.

See you [First Class Date]!

Drew
frotz → plugh

---

### Template 2: Overcommitted Sprint Intervention

**Subject**: Sprint [X] Capacity Check

Hi [Student Name],

I reviewed your Sprint [X] planning document. You planned [20] story points, but your Sprint [X-1] velocity was [12] points.

**Concern**: Planning 67% more than your actual capacity sets you up for failure. Part of learning sprints is using velocity data to plan realistically.

**Request**: Please revise your Sprint [X] plan to reflect your actual capacity (~[12-14] points).

**Why This Matters**: In industry, overcommitting leads to burnout and missed deadlines. Learning to say "no" based on data is a critical PM skill.

Happy to discuss in office hours.

Drew

---

### Template 3: Missing Daily Standups

**Subject**: Sprint [X] Daily Standups - Missing

Hi [Student Name],

I noticed you've posted [2] daily standups out of [7] days so far in Sprint [X].

**Reminder**: Daily standups are [5] points of your sprint grade. They're also how you demonstrate progress and surface blockers early.

**What to Do**:
- Post standups for remaining days of sprint
- Even if you didn't work on project that day, post: "What I did: [other commitments]. What I'll do: [get back on track]."

**Need Help?**: If something is blocking you, let me know. That's what standups are for.

Drew

---

## Appendix D: Student Success Stories

### Example 1: From Struggler to Star

**Student**: Jamal, struggled with Python in CSC-113

**Sprint 1**: Planned 15 points, completed 8. Retrospective: "I don't understand story points. Everything took longer than expected."

**Sprint 2**: Planned 8 points (used Sprint 1 velocity), completed 9. Retrospective: "Data-driven planning works! I actually finished."

**Sprint 3-5**: Velocity stabilized at 10 points. Consistent standups. Thoughtful retrospectives.

**Capstone**: Built sentiment analysis pipeline for product reviews. Integrated NLP + classification. Process Portfolio showed 5x estimation improvement.

**Outcome**: Final grade: B+ (technical skills improved steadily, PM discipline was excellent)

**Lesson**: PM discipline can compensate for technical struggles. Process skills are learnable.

---

### Example 2: Advanced Student Who Learned PM Value

**Student**: Sarah, strong Python skills, initially dismissed PM as busywork

**Sprint 1**: Built excellent model (95% accuracy), but PM artifacts were minimal. Retrospective was 2 sentences. Grade: 35/50 (technical 25/25, PM 10/20).

**Intervention**: Drew met with Sarah. "Your ML is great. But 40% of grade is PM. You're headed for a B. Is that OK?"

**Sprint 2**: Sarah committed to PM practices. Used sprint planning template. Posted daily standups. Detailed retrospective.

**Sprint 3+**: Sarah's PM became habitual. Retrospectives were insightful ("My estimation improved because I broke large stories into smaller stories").

**Capstone**: Excellent technical work + comprehensive Process Portfolio showing growth. Grade: 98/100.

**Outcome**: Final grade: A. Sarah wrote in course eval: "I hated PM at first. Now I see why it matters. I'll use sprints in CSC-289."

**Lesson**: Even resistant students can learn PM value if instructor holds the line on grading.

---

### Example 3: PM Star with Technical Growth

**Student**: Marcus, struggled with ML concepts but excelled at PM

**Sprint 1**: Model accuracy was low (68%), but PM artifacts were perfect. Detailed retrospective identified technical gaps.

**Intervention**: Marcus used retrospective action items to improve technical skills. Action item: "Watch 3 scikit-learn tutorials before Sprint 2."

**Sprint 2-5**: Technical skills improved incrementally. Model accuracy: 75% → 82% → 87%. PM remained excellent throughout.

**Capstone**: Integrated classification + clustering for customer segmentation. Technical: Solid B work. Process Portfolio: A work.

**Outcome**: Final grade: B+. Marcus's Process Portfolio was showcased as example for next semester.

**Lesson**: PM discipline can drive technical improvement. Retrospectives work when students act on them.

---

## Appendix E: Quick Reference - Module Summary Table

| Module | Weeks | Technical Focus | PM Focus | Points | Sprint? |
|--------|-------|-----------------|----------|--------|---------|
| 1 | 1-2 | ML setup, k-NN | User stories | 50 | No |
| 2 | 3-4 | Classification, regression | Story points, velocity | 50 | No |
| 3 | 5-6 | Model evaluation, metrics | Sprint 1 (full cycle) | 75 | Yes |
| 4 | 7-8 | AI agents | Sprint 2 (velocity-based) | 75 | Yes |
| 5 | 9-10 | Neural networks | Sprint 3 (PM habitual) | 75 | Yes |
| 6 | 11-12 | CNNs, transfer learning | Sprint 4 + ethics | 75 | Yes |
| 7 | 13-14 | NLP, text classification | Sprint 5 (optimization) | 75 | Yes |
| 8 | 15-16 | Capstone integration | Sprint 6 + Process Portfolio | 175 | Yes |
| **TOTAL** | **16** | **8 modules** | **6 sprints** | **700** | |

---

## Appendix F: Common Instructor Questions

**Q: What if I've never taught PM before?**
A: The mini-lessons (pm-materials/) walk you through it. Start with those. Also: Scrum Guide is 13 pages and free.

**Q: Can I skip the PM component and just teach ML?**
A: No. PM is 30-50% of course by design. It's embedded in CLOs. Students need PM for CSC-289.

**Q: What if students revolt against daily standups?**
A: Some will. Hold the line. "Industry ML teams do this. You're practicing." By Sprint 3, most adapt.

**Q: How long does PM grading take?**
A: Sprint 1: 15-20 min/student (you're learning too). Sprint 3+: 5-10 min/student (you know what to look for).

**Q: What if I'm not comfortable with neural networks?**
A: Take fast.ai course (free, excellent). Or use Code Builder track: high-level Keras APIs only.

**Q: Can I use different datasets?**
A: Yes! But vet them first (size, cleanliness, ethics). Avoid controversial datasets (facial recognition with demographic labels).

**Q: What's the biggest mistake instructors make?**
A: Not taking PM grading seriously. If you treat PM as checkbox, students will too. Grade PM with same rigor as technical.

---

## Appendix G: Drew's Philosophy Summary

**Process Over Product**: How you built it matters as much as what you built.

**Sacred Flow**: GitHub workflow is professional practice, not busywork.

**Failure as Exercise**: ML models fail. Sprints fail. That's the learning.

**Two Tracks**: Code Builders and Prompt Masters both achieve same outcomes, different paths.

**PM as Craft**: Sprints, retrospectives, velocity tracking are professional skills.

**Iteration Culture**: 6 sprints = 6 learning cycles. Growth is the goal.

**Psychological Safety**: Students must feel safe to fail, ask questions, admit confusion.

**Data-Driven**: Use velocity data to plan. Retrospectives drive improvement.

---

**End of Instructor Guide**

---

**Last Updated**: January 15, 2026
**Version**: 1.0
**Status**: Complete and ready for use

**Questions?** Email Drew Norris (dnorris@college.edu) or Angela Westmoreland (awestmoreland@college.edu)

**frotz → plugh**
