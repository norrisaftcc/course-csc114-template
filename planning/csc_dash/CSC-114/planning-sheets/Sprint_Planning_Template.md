# Sprint Planning Template

**Purpose**: Define your sprint goal, calculate capacity, select user stories, and commit to what you'll complete in the next 1-2 weeks.
**When to Use**: At the beginning of each sprint (before you start coding)
**Time to Complete**: 30-45 minutes

---

## Instructions

1. **Review your velocity** from previous sprints to understand your capacity
2. **Define a clear sprint goal** - what outcome are you trying to achieve?
3. **Break down user stories** from your backlog that support the goal
4. **Estimate story points** for each story (use Fibonacci: 1, 2, 3, 5, 8, 13)
5. **Calculate your capacity** based on available hours and historical velocity
6. **Commit to stories** that fit within your capacity (don't overcommit!)
7. **Identify risks** that might impact your sprint

---

## Template

### Sprint Information
- **Sprint Number**:
- **Sprint Duration**: [Start Date] to [End Date]
- **Available Hours This Sprint**:

### Sprint Goal
**In one sentence, what are you trying to accomplish this sprint?**


### Capacity Calculation
- **Previous Sprint Velocity**: ___ story points
- **Average Velocity (last 3 sprints)**: ___ story points
- **Planned Capacity for This Sprint**: ___ story points
- **Confidence Level**: [ ] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [ ] Exams or major deadlines this sprint? Reduce capacity by 30-50%
- [ ] New technology to learn? Add learning buffer
- [ ] Holidays or planned time off? Adjust available hours

### User Stories Selected

| Story ID | User Story | Story Points | Priority | Notes |
|----------|-----------|--------------|----------|-------|
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |

**Total Committed Story Points**: ___

### Sprint Backlog Task Breakdown
For each user story, break down into technical tasks:

**Story ID [___]:**
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

**Story ID [___]:**
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### Definition of Done
**A story is complete when:**
- [ ] Code is written and tested
- [ ] Unit tests pass
- [ ] Documentation is updated
- [ ] Code is committed to repository
- [ ] [Add your own criteria]

### Risk Identification

| Risk | Impact (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|
| | | |
| | | |

### Sprint Commitment
**I commit to completing ___ story points this sprint, focused on: [sprint goal]**

Signed: _________________  Date: _________________

---

## Example (Filled)

### Sprint Information
- **Sprint Number**: 3
- **Sprint Duration**: Feb 1 - Feb 14
- **Available Hours This Sprint**: 20 hours

### Sprint Goal
**Build and train a working CNN model for MNIST digit classification with >95% accuracy**

### Capacity Calculation
- **Previous Sprint Velocity**: 13 story points
- **Average Velocity (last 3 sprints)**: 12 story points
- **Planned Capacity for This Sprint**: 13 story points
- **Confidence Level**: [x] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [x] Exams or major deadlines this sprint? **Yes - midterm on Feb 10, reducing capacity to 10 points**
- [ ] New technology to learn?
- [ ] Holidays or planned time off?

### User Stories Selected

| Story ID | User Story | Story Points | Priority | Notes |
|----------|-----------|--------------|----------|-------|
| US-007 | As a user, I want to preprocess MNIST images so the CNN trains effectively | 3 | [x] Must Have | Normalize, reshape |
| US-008 | As a developer, I want to build a CNN architecture so I can classify digits | 5 | [x] Must Have | Use Keras Sequential |
| US-009 | As a developer, I want to train the model so it achieves >95% accuracy | 3 | [x] Must Have | May take time |

**Total Committed Story Points**: 11

### Sprint Backlog Task Breakdown

**Story US-007: Preprocess MNIST data**
- [ ] Load MNIST dataset from keras.datasets
- [ ] Normalize pixel values (0-1 range)
- [ ] Reshape images for CNN input (28x28x1)
- [ ] Split train/validation sets
- [ ] Write unit tests for preprocessing

**Story US-008: Build CNN architecture**
- [ ] Design layer architecture (Conv2D, MaxPooling, Dense)
- [ ] Define input shape and output classes
- [ ] Compile model with optimizer and loss function
- [ ] Document architecture choices
- [ ] Visualize model summary

**Story US-009: Train model**
- [ ] Set up training loop with validation
- [ ] Configure epochs and batch size
- [ ] Implement early stopping
- [ ] Track training metrics (accuracy, loss)
- [ ] Save best model checkpoint

### Definition of Done
**A story is complete when:**
- [x] Code is written and tested
- [x] Unit tests pass
- [x] Documentation is updated
- [x] Code is committed to repository
- [x] Model achieves target accuracy in validation

### Risk Identification

| Risk | Impact (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|
| Midterm on Feb 10 | H | Front-load work in first week of sprint |
| Model might not reach 95% accuracy | M | Research CNN architectures online, ask Drew for help |
| New to Keras/TensorFlow | M | Complete Keras tutorial before starting US-008 |

### Sprint Commitment
**I commit to completing 11 story points this sprint, focused on: Building and training a working CNN model for MNIST digit classification with >95% accuracy**

Signed: Alex Chen  Date: Feb 1, 2026

---

## Why This Matters

Sprint planning isn't busywork - it's how professional ML teams ship models on time.

At companies like Google, Meta, and OpenAI, ML engineers don't just "start coding and see what happens." They plan sprints carefully because:

1. **Model training is expensive** - You can't waste GPU time on unplanned experiments
2. **Stakeholders need predictability** - Product managers need to know when features ship
3. **Technical debt compounds fast** - Rushed ML code becomes unmaintainable quickly
4. **Estimation improves with practice** - You get better at predicting how long ML tasks take

In my work building production ML systems, sprint planning helped us:
- Ship a recommendation engine in 6 weeks instead of "whenever it's done"
- Identify data quality issues BEFORE spending days training models
- Communicate progress to non-technical stakeholders
- Avoid burnout by committing to realistic workloads

The best ML engineers I know are excellent planners. They understand their velocity, they don't overcommit, and they identify risks early.

---

## Common Mistakes to Avoid

- **Mistake**: Committing to more story points than your velocity because "I'll work harder this sprint"
  **Better approach**: Be realistic. Velocity is what you ACTUALLY complete, not what you wish you could complete. Overcommitting leads to burnout and missed deadlines.

- **Mistake**: Vague sprint goals like "make progress on the project"
  **Better approach**: Specific, measurable goals like "train a CNN that classifies MNIST digits with >95% accuracy." You should know exactly what success looks like.

- **Mistake**: Not adjusting capacity for exams, other coursework, or learning time
  **Better approach**: If you have a midterm, reduce your capacity by 30-50%. Learning new tech takes time - budget for it.

- **Mistake**: Selecting user stories randomly instead of supporting a coherent goal
  **Better approach**: All stories in a sprint should work toward the same outcome. Don't do half of feature A and half of feature B.

- **Mistake**: Skipping task breakdown and jumping straight to coding
  **Better approach**: Break stories into 1-2 hour tasks. This helps you see the real scope and identify what you don't know yet.

---

## Tips from Drew

**Start with the goal, not the stories.** Ask yourself: "What do I want to HAVE WORKING at the end of this sprint?" Then select stories that get you there. A sprint isn't a random collection of tasks - it's a focused push toward an outcome.

**Your velocity is your velocity.** I see students try to "beat" their previous velocity every sprint. That's not the point. Velocity is a planning tool, not a performance metric. Some sprints are 8 points, some are 13. Both are fine.

**The "must have" category is the only one that matters.** If you mark everything as "must have," you're lying to yourself. Pick 2-3 stories that MUST be done, then add "should haves" if you have capacity. When things go wrong (and they will), you know what to cut.

**Identify the "I don't know how to do this yet" risk.** If you've never trained a neural network before, that's a risk. Budget time for learning. I typically add a "spike" story (research task) at the beginning of a sprint when learning new tech.

**Front-load your sprint.** Don't plan to do all your work in the last 3 days. Aim to complete 50% of story points by the sprint midpoint. This gives you buffer for the inevitable surprises.

**If your capacity is below 8 story points, consider extending the sprint.** Super short sprints have too much planning overhead. Better to do a 3-week sprint with 12 points than a 1-week sprint with 4 points.

---

## Integration with CSC-114

In CSC-114, you'll use sprint planning before each major project phase:

- **Sprint 1-2**: Environment setup, data exploration, baseline models
- **Sprint 3-4**: Feature engineering, model architecture design
- **Sprint 5-6**: Model training, hyperparameter tuning, evaluation
- **Sprint 7-8**: Production deployment, monitoring, documentation

Each sprint should result in a **working increment** - not just code, but a trained model, an evaluation report, or a deployed service.

Your sprint velocity will inform your project scope for the final. If you're averaging 10 points per sprint and you have 4 sprints left, you can commit to about 40 points of work. This helps you make realistic scope decisions early.

ML work is unpredictable - models don't train as expected, data has quality issues, GPUs are unavailable. Sprint planning helps you absorb these surprises without derailing your entire project.

**The students who plan their sprints carefully finish their projects. The ones who "wing it" end up cramming in week 15.**
