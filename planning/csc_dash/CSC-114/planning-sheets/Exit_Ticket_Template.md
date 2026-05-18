# Exit Ticket Template

**Purpose**: Weekly reflection on learning, challenges, and connections between coursework and career goals.
**When to Use**: End of each week (Friday or Sunday evening)
**Time to Complete**: 10-15 minutes

---

## Instructions

1. **Set aside reflection time** - Same day/time each week builds the habit
2. **Be specific** - "I learned CNNs" is vague. "I learned how Conv2D layers extract spatial features" is specific.
3. **Be honest about challenges** - This helps me (Drew) support you better
4. **Connect to career** - Every week, link learning to professional ML work
5. **Submit to course** - Use whatever submission method Drew specifies (Discord, LMS, etc.)

Exit tickets help you consolidate learning and help me adjust the course to your needs.

---

## Template

### Exit Ticket - Week [#]

**Date**: [Date]
**Week Topic**: [Main focus this week]

---

### What did I learn this week?

**Technical concepts:**
-
-
-

**Practical skills:**
-
-

**Tools/technologies:**
-
-

**Most important insight:**


---

### What challenged me this week?

**Technical challenges:**
-
-

**Process challenges:**
-
-

**How I worked through challenges:**
-
-

**Challenges still unresolved:**
-
-

---

### What do I need help with?

**Immediate needs:**
-
-

**Conceptual confusion:**
-
-

**Process/workflow questions:**
-
-

**How can Drew/TAs help?**


---

### Connection to Career Goals

**My current career goal**: [ML engineer, data scientist, AI researcher, etc.]

**How this week's learning connects:**


**Skills I'm building that employers value:**
-
-

**What I want to explore further:**


---

### Sprint/Project Progress

**This week's sprint progress:**
- Story points completed: ___
- On track for sprint goal? [ ] Yes [ ] No

**Wins this week:**
-
-

**Concerns for next week:**
-
-

---

### Commitments for Next Week

**Top 3 priorities:**
1.
2.
3.

**Time I'll dedicate to CSC-114**: ___ hours

**One thing I'll do differently**:


---

### Reflection Scale (1-5)

Rate your week:

**Understanding of concepts**: 1  2  3  4  5
(1 = Lost, 5 = Mastered)

**Engagement with material**: 1  2  3  4  5
(1 = Passive, 5 = Deep dive)

**Sprint discipline**: 1  2  3  4  5
(1 = Chaos, 5 = Professional)

**Overall satisfaction**: 1  2  3  4  5
(1 = Frustrated, 5 = Thriving)

**What would improve my experience?**


---

## Example (Filled)

### Exit Ticket - Week 5

**Date**: Feb 21, 2026
**Week Topic**: Convolutional Neural Networks and Image Classification

---

### What did I learn this week?

**Technical concepts:**
- How Conv2D layers extract spatial features using learnable kernels
- Why pooling layers reduce dimensionality while preserving important features
- The difference between feature extraction and classification layers in CNNs
- How padding and stride affect output dimensions

**Practical skills:**
- Building CNN architectures in Keras Sequential API
- Preprocessing image data (normalization, reshaping)
- Visualizing learned filters and activation maps
- Interpreting training curves (loss and accuracy over epochs)

**Tools/technologies:**
- Keras/TensorFlow for deep learning
- Matplotlib for visualizing training metrics
- NumPy for array manipulation

**Most important insight:**
CNNs aren't magic - they're just matrix operations that learn spatial patterns. Understanding the math (convolution operation) demystified the whole architecture. Now I see why CNNs work well for images but not for tabular data.

---

### What challenged me this week?

**Technical challenges:**
- Model stuck at 92% accuracy, couldn't reach 95% target
- Choosing hyperparameters (learning rate, batch size, epochs) felt arbitrary
- Understanding when to add dropout vs when overfitting isn't the problem

**Process challenges:**
- Spent too long "trying things" without systematic approach
- Didn't track experiments well - forgot what hyperparameters I already tried
- Midterm week killed my momentum - only 2 days of sprint work

**How I worked through challenges:**
- Asked Drew about hyperparameter tuning - learned about grid search (will try next sprint)
- Started logging experiments in a spreadsheet after wasting time re-trying configs
- Adjusted sprint capacity mid-week when I realized midterm impact

**Challenges still unresolved:**
- Still haven't hit 95% accuracy goal - carrying over to next sprint
- Not sure if my CNN architecture is optimal (2 Conv layers enough? Need 3?)
- Hyperparameter search space is HUGE - how do pros narrow it down?

---

### What do I need help with?

**Immediate needs:**
- Strategies for systematic hyperparameter tuning (not random guessing)
- How to tell if model architecture is the problem vs hyperparameters

**Conceptual confusion:**
- When to use batch normalization vs dropout?
- How to choose filter sizes (3x3, 5x5, etc.) - is there a principle?

**Process/workflow questions:**
- Best practices for logging ML experiments? (using spreadsheets feels clunky)
- How to budget time for training when experiments take 30+ minutes?

**How can Drew/TAs help?**
- Office hours discussion on hyperparameter tuning strategies
- Pointer to resources on CNN architecture design patterns
- Example of a well-logged experiment notebook from real ML project

---

### Connection to Career Goals

**My current career goal**: ML Engineer at a tech company (focusing on computer vision)

**How this week's learning connects:**
CNNs are foundational for computer vision work - image classification, object detection, facial recognition, etc. Every CV job posting lists "experience with CNNs" as required. Building MNIST classifier is toy example, but the skills (architecture design, hyperparameter tuning, debugging training) are exactly what professional ML engineers do.

**Skills I'm building that employers value:**
- Practical deep learning implementation (not just theory)
- Systematic experiment tracking and debugging
- Understanding trade-offs (accuracy vs training time vs model complexity)
- Iterative improvement mindset (model at 92% is good, 95% is better)

**What I want to explore further:**
- Transfer learning (using pre-trained models like ResNet)
- Object detection (not just classification)
- Real-world CV datasets (ImageNet, COCO)
- Model deployment (how do you serve a CNN in production?)

---

### Sprint/Project Progress

**This week's sprint progress:**
- Story points completed: 5
- On track for sprint goal? [x] No

**Wins this week:**
- CNN model is functional and training properly
- Data preprocessing pipeline is solid and tested
- Got comfortable with Keras API quickly

**Concerns for next week:**
- Need to finish hyperparameter tuning story (3 points remaining)
- Running low on time in sprint (4 days left)
- May need to reduce scope (accept 92% instead of 95%)

---

### Commitments for Next Week

**Top 3 priorities:**
1. Complete hyperparameter tuning with systematic approach (grid search)
2. Finish sprint retrospective and plan next sprint
3. Start reading about transfer learning for next project phase

**Time I'll dedicate to CSC-114**: 12 hours (back to normal after midterm)

**One thing I'll do differently**:
Log every training experiment in a structured format BEFORE running it (hypothesis, config, expected outcome). Then log results. No more random trial-and-error.

---

### Reflection Scale (1-5)

Rate your week:

**Understanding of concepts**: 1  2  3  [4]  5
(I understand CNNs conceptually and can implement them, but still learning optimal design choices)

**Engagement with material**: 1  2  3  4  [5]
(Fully engaged - spent hours debugging and researching beyond assignments)

**Sprint discipline**: 1  2  [3]  4  5
(Daily standups done, but midterm disrupted flow. Could've adjusted capacity better.)

**Overall satisfaction**: 1  2  3  [4]  5
(Frustrated by 92% ceiling, but satisfied with learning progress overall)

**What would improve my experience?**
More structure on hyperparameter tuning strategies earlier in the week. I wasted 2 days with random search when I could've been systematic from the start. Maybe a mini-lecture or reading on tuning best practices?

---

## Why This Matters

Exit tickets are standard practice in modern pedagogy for good reason: **reflection deepens learning.**

In my teaching, exit tickets help me:
1. **Identify common struggles** - If 10 students are confused about the same concept, I adjust next week
2. **Provide targeted help** - "I need help with X" tells me exactly where to focus office hours
3. **Track individual progress** - I can see your growth week-over-week
4. **Connect theory to practice** - Your career reflections help me bring in relevant examples

For you, exit tickets help:
1. **Consolidate learning** - Writing what you learned solidifies it in memory
2. **Identify gaps** - Articulating confusion helps you realize what you don't know
3. **Track progress** - Looking back at week 1 vs week 10 shows how far you've come
4. **Build metacognition** - Reflecting on your learning process makes you a better learner

**The best students I teach all maintain reflection practices.** Exit tickets formalize this into a weekly habit.

In my own ML work, I keep a weekly "what I learned" log. Years later, I look back and see patterns in my growth. This habit started with exit tickets in school.

---

## Common Mistakes to Avoid

- **Mistake**: Vague reflections like "I learned about neural networks"
  **Better approach**: Specific learnings like "I learned how backpropagation calculates gradients layer-by-layer." Specific = memorable.

- **Mistake**: Only listing technical concepts, ignoring process/career reflections
  **Better approach**: Balance technical, process, and career insights. "I learned CNNs" plus "I learned to log experiments systematically" plus "This connects to CV engineer roles."

- **Mistake**: Not being honest about struggles (trying to look good)
  **Better approach**: Honest struggles help me help you. "I'm lost on X" is way more useful than "Everything's fine!" when it's not.

- **Mistake**: Treating exit tickets as busywork, rushing through in 2 minutes
  **Better approach**: Genuine reflection takes 10-15 minutes. This is learning time, not administrative time.

- **Mistake**: Not connecting weekly learning to bigger picture
  **Better approach**: Every week, ask: "How does this fit into my understanding of ML? My career goals?" Build coherence, not just a pile of disconnected facts.

---

## Tips from Drew

**Do exit tickets on the same day/time every week.** Friday evening or Sunday evening. Make it a ritual. Consistency builds the habit, and habits build professionals.

**Start with "What challenged me?" not "What did I learn?"** Challenges are more memorable. Once you identify challenges, learnings follow naturally.

**The career connection is the most important part.** This isn't abstract CS theory - this is preparation for real work. Every week, explicitly connect concepts to professional ML engineering.

**Use your exit ticket to plan next week.** The "commitments for next week" section makes this a forward-looking tool, not just backward reflection.

**Save all your exit tickets.** At the end of the semester, read through all of them. You'll be amazed at your growth. Week 1 struggles will look trivial. Week 15 challenges will show sophistication.

**Be honest about the reflection scale.** If overall satisfaction is 2/5, tell me why. I can't fix problems I don't know about.

**When you write "I need help with X," actually come to office hours.** Exit tickets identify needs. Office hours address them. Don't just document struggles - get help.

**The "most important insight" is your TL;DR.** If you could only remember one thing from this week in 5 years, what would it be? That's your most important insight.

---

## Integration with CSC-114

Exit tickets are part of your participation grade in CSC-114 (5% of final grade).

**Grading criteria:**
- **Completion** (50%): Did you submit all weekly exit tickets?
- **Specificity** (25%): Are reflections specific and detailed, or vague?
- **Honesty** (25%): Are you genuinely reflecting, or just checking a box?

I don't grade on "correct" answers - there are no correct answers in reflection. I grade on thoughtfulness and consistency.

**What I'm looking for:**
- Specific technical learnings with examples
- Honest identification of challenges
- Career connections that show you're thinking about professional context
- Requests for help (so I can support you)
- Week-over-week growth in sophistication

**What exit tickets do for you:**
- Help you consolidate weekly learning (better retention)
- Give you a record of your growth to reference in interviews ("Tell me about a time you overcame a technical challenge")
- Build the habit of reflection (critical for senior engineers)
- Create accountability for sprint progress
- Ensure I can support you when you're struggling

**Students who skip exit tickets:**
- Struggle more because I don't know where they're stuck
- Retain less (no weekly consolidation)
- Can't articulate their learning in final retrospective
- Miss the meta-skill of reflective practice

**Students who take exit tickets seriously:**
- Progress faster (I adjust course to their needs)
- Build stronger portfolios (they track learnings systematically)
- Write excellent final retrospectives (they have 15 weeks of reflection data)
- Develop professional self-awareness

**Think of exit tickets as your weekly 1:1 with me.** I read every single one. I adjust my teaching based on them. I reach out when I see struggles. This is how I scale personalized support in a class of 30+ students.

**Take them seriously. They're not busywork - they're your learning tool.**
