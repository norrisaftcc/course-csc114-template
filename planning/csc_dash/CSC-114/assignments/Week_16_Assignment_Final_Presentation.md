# Week 16 Assignment: "Final Presentation - Capstone Showcase"
## CSC-114 AI I - Your ML + PM Professional Debut

**Due**: Week 16 (Presentation Day - Schedule TBD)
**Points**: 75 (Final Presentation - 15% of course grade)
**Format**: 15-minute presentation + 5-10 minute Q&A

---

## ASSIGNMENT OVERVIEW

This is your moment to **showcase everything** you've built and learned this semester.

You're not just presenting a technical project—you're presenting yourself as an **ML professional** who can:
- Build sophisticated ML systems
- Evaluate models rigorously
- Manage complex technical projects
- Think critically about ethics
- Communicate effectively to technical audiences

**What Makes This Presentation Special:**
- **Technical + Process**: You present both your ML work AND your PM journey
- **Evidence-Based**: Show actual velocity charts, code, results
- **Reflective**: Demonstrate growth and self-awareness
- **Professional**: This is practice for job interviews, CSC-289, and conference talks

**Audience**: Your classmates, instructor, and potentially industry guests

---

## LEARNING OBJECTIVES

By completing this presentation, you will:
1. Communicate complex ML work clearly and concisely
2. Demonstrate project management maturity
3. Articulate ethical considerations in ML
4. Field technical questions under pressure
5. Present yourself as a confident ML professional

---

## PRESENTATION STRUCTURE (15 MINUTES TOTAL)

### Part 1: Technical Deep-Dive (7 minutes)

**Goal**: Convince the audience you can build and evaluate ML systems

#### Slide 1: Title & Problem Statement (30 seconds)
**Content:**
- Project title
- Your name
- One-sentence problem statement
- Why this problem matters

**Example:**
> **Customer Churn Prediction with Ensemble Methods**
> Angela Westmoreland | CSC-114 Capstone
>
> *"Predicting customer churn with 93% accuracy using a multi-model ensemble, helping businesses reduce retention costs by targeting high-risk customers."*

**Tip**: Make this punchy. You want to hook the audience immediately.

#### Slide 2: Approach & Methods (90 seconds)
**Content:**
- Dataset overview (size, features, source)
- ML techniques used (with brief justification)
- How techniques integrate

**Example Visual:**
```
[Pipeline Diagram]
Raw Data → Feature Engineering →
[Split into 3 parallel paths]
→ Random Forest
→ XGBoost
→ Logistic Regression
[Converge]
→ Stacking Ensemble → Final Predictions
```

**What to Say:**
> "I worked with 50,000 customer records from a telecom dataset, including usage patterns and demographics. I integrated supervised learning through three diverse base models, then combined them via stacking ensemble—this lets us leverage each model's strengths while compensating for weaknesses."

**Tip**: Don't explain every detail. Give the architecture, not the implementation.

#### Slide 3: Key Technical Challenges (90 seconds)
**Content:**
- 2-3 major technical challenges you faced
- How you solved them
- What you learned

**Example:**
> **Challenge 1: Severe Class Imbalance (85% non-churn)**
> - Solution: SMOTE oversampling + class weights
> - Result: Recall improved from 0.42 to 0.89
>
> **Challenge 2: Feature Correlation (12 highly correlated features)**
> - Solution: PCA for dimensionality reduction
> - Result: Training time reduced 40%, slight accuracy gain
>
> **Challenge 3: Ensemble Overfitting**
> - Solution: Out-of-fold predictions for meta-learner
> - Result: Test performance matched validation (no overfitting)

**Tip**: This shows problem-solving ability—more impressive than things that worked perfectly.

#### Slide 4: Results & Model Comparison (2 minutes)
**Content:**
- Performance table comparing all models
- Key visualizations (confusion matrix, ROC curves, feature importance)
- Final model selection + justification

**Example Visual:**
[Side-by-side comparison]
- Model Performance Table (from Week 15 assignment)
- ROC Curves for all models
- Feature Importance Top 10

**What to Say:**
> "All models performed well, but XGBoost achieved the highest F1-score at 0.91. However, I selected Random Forest as the production model because: 1) the performance difference is not statistically significant, 2) it's 2x faster to train, and 3) it provides better feature interpretability for stakeholders—critical in a business context where we need to explain WHY a customer is predicted to churn."

**Tip**: Show you make principled decisions, not just "highest accuracy wins."

#### Slide 5: Error Analysis & Insights (90 seconds)
**Content:**
- Where your model fails (specific examples)
- Why it fails (error analysis)
- What this reveals about the problem

**Example:**
> "The model struggles most with customers in the 30-40% churn probability range—the 'borderline' cases. Manual inspection reveals these are typically customers with recent service issues but long tenure. This suggests we need:
> 1. Additional features capturing recent service quality
> 2. A 'watch list' for borderline predictions requiring human review
> 3. Separate models for high-tenure vs. new customers"

**Tip**: Thoughtful failure analysis is more valuable than claiming perfection.

#### Slide 6: Model Deployment & Next Steps (60 seconds)
**Content:**
- What would be needed for production deployment
- Monitoring and maintenance considerations
- Future improvements

**Example:**
> **Production Readiness Checklist:**
> - ✓ Model API wrapper (Flask/FastAPI)
> - ✓ Automated retraining pipeline
> - ⚠ A/B testing framework needed
> - ⚠ Drift detection not implemented
> - ⚠ Fairness audits required
>
> **Next Steps:** Implement real-time prediction API, add SHAP explainability dashboard, continuous monitoring for data drift

**Tip**: This shows you think beyond "school project" to real deployment.

---

### Part 2: PM Journey Narrative (5 minutes)

**Goal**: Demonstrate that you're not just a coder—you're a project manager

#### Slide 7: Sprint Velocity Evolution (90 seconds)
**Content:**
- Velocity chart showing Sprints 1-6
- Trend analysis
- Key inflection points explained

**Example Visual:**
[Bar chart: Planned vs. Actual velocity per sprint]
Sprint 1: 12 planned, 9 actual
Sprint 2: 13 planned, 13 actual
Sprint 3: 14 planned, 8 actual (dip)
Sprint 4: 12 planned, 15 actual
Sprint 5: 15 planned, 16 actual
Sprint 6: 18 planned, 18 actual

**What to Say:**
> "My velocity grew 50% from Sprint 1 to Sprint 6, but the journey wasn't linear. Sprint 3 shows a significant dip—I underestimated neural network complexity. My retrospective identified poor task breakdown as the root cause. From Sprint 4 onward, I broke complex stories into smaller tasks and added estimation buffers, leading to consistent delivery."

**Tip**: The story matters more than the numbers. Show growth, not just data.

#### Slide 8: Estimation Accuracy & Key Learnings (90 seconds)
**Content:**
- How your estimation improved
- Specific patterns you identified
- Process improvements you implemented

**Example:**
> **Estimation Evolution:**
> - Sprint 1: 60% accurate (wildly optimistic)
> - Sprint 3: 55% accurate (new tech threw me off)
> - Sprint 6: 90% accurate (mature estimation)
>
> **Key Insight:** I consistently underestimated:
> - Testing and debugging time (2x longer than coding)
> - Integration complexity (connecting components)
> - Documentation overhead
>
> **Fix:** Added 30% buffer to all estimates, separated testing as its own story

**Tip**: Show you learned from mistakes—that's the whole point of sprints.

#### Slide 9: Retrospective Highlights - Actions Taken (90 seconds)
**Content:**
- 2-3 retrospective insights that led to real changes
- Evidence of the changes
- Impact on performance

**Example:**
> **Sprint 2 Retro:** "I'm context-switching too much between stories"
> - Action: WIP limit of 1 story at a time
> - Evidence: [Show sprint board screenshot - before: 3 in progress, after: 1]
> - Impact: Sprint 3 velocity increased 20%
>
> **Sprint 4 Retro:** "My standups are generic and unhelpful"
> - Action: Add "confidence level" and specific blockers
> - Evidence: [Show standup format evolution]
> - Impact: Caught blockers earlier, better time management

**Tip**: This proves retrospectives aren't busywork—they drive improvement.

#### Slide 10: PM Growth & CSC-289 Readiness (60 seconds)
**Content:**
- Where you started vs. where you are now
- Specific PM skills you can now demonstrate
- How this prepares you for senior capstone

**Example:**
> **Week 2 Me:** "Why write user stories? Just let me code!"
> **Week 16 Me:** This capstone succeeded BECAUSE of PM discipline.
>
> **Skills Acquired:**
> - Velocity-based planning (realistic capacity estimation)
> - Sprint management (daily standups, burndown tracking)
> - Retrospective practice (continuous improvement)
> - GitHub project workflow (issues, boards, PRs)
>
> **CSC-289 Readiness:** I can now manage a 15-week senior capstone autonomously, with stakeholder communication, iterative delivery, and professional documentation.

**Tip**: Be honest and reflective. Growth narratives are compelling.

---

### Part 3: Ethical Analysis (2 minutes)

**Goal**: Show you think critically about ML's real-world impact

#### Slide 11: Ethics & Limitations (2 minutes)
**Content:**
- Potential biases in your model
- Failure mode consequences
- Limitations and appropriate use cases
- Mitigation strategies

**Example:**
> **Ethical Concerns:**
> 1. **Proxy Discrimination:** Model may encode historical biases via zip code/income
>    - Mitigation: Fairness audits across demographic groups
>
> 2. **False Positive Consequences:** Incorrectly flagging loyal customers as churn risk
>    - Mitigation: Human review for borderline predictions
>
> 3. **Data Staleness:** Trained on pre-pandemic data
>    - Mitigation: Continuous monitoring for drift
>
> **Limitations:**
> - Model assumes stable customer behavior (breaks during market disruptions)
> - Requires monthly retraining to maintain accuracy
> - Should NOT be used as sole decision factor for retention investments
>
> **Responsible Use:** This model should augment human judgment, not replace it. Best deployed as a prioritization tool for retention outreach, with final decisions by account managers.

**Tip**: Specificity matters. Generic "models can be biased" doesn't cut it.

---

### Part 4: Q&A (5-10 minutes)

**Goal**: Demonstrate deep understanding and handle pressure gracefully

**What to Expect:**

**Technical Questions:**
- "Why did you choose [specific algorithm]?"
- "How did you handle [specific challenge]?"
- "What metrics did you prioritize and why?"
- "How would this change with different data?"

**PM Questions:**
- "How did you handle when you fell behind schedule?"
- "What was your biggest PM learning?"
- "How did retrospectives change your process?"

**Ethics Questions:**
- "What's the worst thing that could happen with your model?"
- "How would you test for bias?"
- "Who should NOT use this model?"

**How to Handle Questions You Don't Know:**
1. **Don't fake it**: "That's a great question I hadn't considered."
2. **Think out loud**: "If I were approaching that, I'd probably..."
3. **Acknowledge limits**: "I didn't test that, but I should have."
4. **Show learning**: "That's something I'd prioritize in future work."

**Tip**: Saying "I don't know, but here's how I'd find out" is better than making up an answer.

---

## PRESENTATION REQUIREMENTS

### Content Requirements
- [ ] All 4 parts included (Technical, PM, Ethics, Q&A)
- [ ] Stays within 15-minute time limit
- [ ] Uses visual aids effectively (slides, charts, diagrams)
- [ ] Demonstrates technical depth
- [ ] Shows PM growth with evidence
- [ ] Addresses ethics thoughtfully
- [ ] Professional tone and delivery

### Visual Requirements
- [ ] 10-12 slides maximum (not including title/references)
- [ ] Clear, readable fonts (24pt minimum)
- [ ] Professional design (not distracting)
- [ ] Charts/graphs are labeled and interpretable
- [ ] Code snippets (if used) are minimal and relevant

### Delivery Requirements
- [ ] Practiced and polished (not reading slides)
- [ ] Makes eye contact with audience
- [ ] Paces appropriately (not rushed or dragging)
- [ ] Handles questions confidently
- [ ] Professional demeanor

---

## GRADING RUBRIC (75 POINTS TOTAL)

### Technical Content (35 points)

**Problem & Approach (10 points)**
- 10 pts: Clear problem statement, well-justified approach, integrated techniques
- 8 pts: Good problem/approach but integration less clear
- 6 pts: Basic problem/approach presentation
- 3 pts: Unclear or poorly justified

**Results & Evaluation (10 points)**
- 10 pts: Comprehensive evaluation, rigorous comparison, justified selection
- 8 pts: Good evaluation but missing some depth
- 6 pts: Basic results presentation
- 3 pts: Superficial evaluation

**Technical Depth (10 points)**
- 10 pts: Demonstrates mastery, handles challenges well, insightful error analysis
- 8 pts: Good technical understanding
- 6 pts: Basic technical competence
- 3 pts: Limited technical depth

**Ethics & Limitations (5 points)**
- 5 pts: Thoughtful, specific ethical analysis with mitigation strategies
- 4 pts: Good ethical consideration
- 3 pts: Basic ethics discussion
- 1 pt: Superficial or missing

### Process & PM Journey (25 points)

**Velocity & Estimation (10 points)**
- 10 pts: Clear growth shown, insightful analysis, specific patterns identified
- 8 pts: Good velocity presentation
- 6 pts: Basic velocity data
- 3 pts: Minimal or unclear

**Retrospective Insights (10 points)**
- 10 pts: Concrete examples with evidence of changes and impact
- 8 pts: Good retrospective discussion
- 6 pts: Basic retrospective mention
- 3 pts: Superficial or missing

**PM Growth Narrative (5 points)**
- 5 pts: Compelling story of growth, specific skills, CSC-289 readiness clear
- 4 pts: Good growth narrative
- 3 pts: Basic reflection
- 1 pt: Minimal or vague

### Presentation Quality (15 points)

**Clarity & Organization (5 points)**
- 5 pts: Crystal clear structure, logical flow, easy to follow
- 4 pts: Well-organized
- 3 pts: Mostly clear with some confusion
- 1 pt: Disorganized

**Delivery & Engagement (5 points)**
- 5 pts: Confident, engaging, professional, great pacing
- 4 pts: Good delivery
- 3 pts: Adequate but nervous or rushed
- 1 pt: Poor delivery

**Time Management (3 points)**
- 3 pts: Stays within 15 minutes (+/- 1 min), all parts included
- 2 pts: Slightly over/under but complete
- 1 pt: Significantly over/under or incomplete

**Visuals (2 points)**
- 2 pts: Professional, clear, enhance understanding
- 1 pt: Basic but functional
- 0 pts: Poor or distracting

---

## PRESENTATION TIPS & BEST PRACTICES

### Content Tips

**Tip 1: Tell a Story, Not a Report**
- Bad: "First I did this, then I did that, then..."
- Good: "I faced this problem, here's how I solved it, here's what I learned."

**Tip 2: Emphasize the "Why" Not the "What"**
- Bad: "I used Random Forest with 100 estimators and max_depth=10."
- Good: "I chose Random Forest because I needed interpretability while maintaining high accuracy."

**Tip 3: Use Visuals to Replace Words**
- Bad: [Wall of text describing model comparison]
- Good: [Table showing all models side-by-side]

**Tip 4: Practice Your Timing**
- Run through your full presentation 3+ times
- Time each section separately
- Know where you can cut if running long

**Tip 5: Prepare for "Obvious" Questions**
- "Why this dataset?"
- "How did you validate your approach?"
- "What would you do differently?"

### Delivery Tips

**Tip 6: Start Strong**
- Your first 30 seconds set the tone
- Hook the audience with why your project matters
- Speak clearly and confidently from word one

**Tip 7: Don't Read Slides**
- Slides are for the audience, not your script
- Use slides as visual anchors, not teleprompters
- Make eye contact, not screen contact

**Tip 8: Pause for Emphasis**
- After showing a key result, pause 2 seconds
- Let complex visuals sink in before explaining
- Silence is powerful—don't rush

**Tip 9: Handle Demo Disasters Gracefully**
- If live demo fails: "This is why we have backup slides!"
- Have screenshots of all working code
- Never apologize profusely—just move on

**Tip 10: End with Impact**
- Bad ending: "Um, so yeah, that's my project."
- Good ending: "This project proved I can build production-quality ML systems while managing complex projects—skills I'll bring to CSC-289 and beyond."

### Visual Design Tips

**Tip 11: One Idea Per Slide**
- Don't cram multiple concepts onto one slide
- Better to have 12 clear slides than 6 cluttered ones

**Tip 12: Big Fonts, Little Text**
- Minimum 24pt font
- Maximum 30 words per slide (aim for less)
- If you can't read it from 10 feet away, it's too small

**Tip 13: Use Color Purposefully**
- Green for positive results, red for errors/challenges
- Consistent color scheme across slides
- High contrast (dark text on light background or vice versa)

**Tip 14: Charts Need Context**
- Always label axes
- Include units
- Add titles that state the finding, not just the data
  - Bad: "Model Accuracy"
  - Good: "Random Forest Achieves 91% Accuracy"

---

## COMMON PITFALLS TO AVOID

**Pitfall 1: Technical Jargon Overload**
"I used SMOTE for class imbalance, tuned hyperparameters with GridSearchCV using stratified k-fold, then stacked with a meta-learner..."
- **Fix**: Explain concepts at a high level. Your audience knows ML, but don't assume deep expertise.

**Pitfall 2: Skipping PM Section**
Spending 12 minutes on technical, 3 minutes on everything else.
- **Fix**: PM is 25 points. Allocate time proportionally.

**Pitfall 3: "Everything Worked Perfectly"**
No challenges, no failures, no learning.
- **Fix**: Challenges and how you overcame them are MORE interesting than perfection.

**Pitfall 4: Reading Code on Slides**
Showing 50 lines of Python and reading through it.
- **Fix**: Code belongs in your repo, not your presentation. Show architecture, not implementation.

**Pitfall 5: Vague Ethics Discussion**
"My model might be biased, which is bad."
- **Fix**: Specific biases, specific consequences, specific mitigation strategies.

**Pitfall 6: No Practice**
Winging it on presentation day.
- **Fix**: Practice 3+ times. Record yourself. Time it.

**Pitfall 7: Defensive Q&A**
Getting defensive when questioned.
- **Fix**: Questions are engagement, not attacks. Say "Great question!" and think out loud.

**Pitfall 8: Running Over Time**
Still presenting at 18 minutes with no end in sight.
- **Fix**: Know your priority slides. If running long, skip the less critical ones.

**Pitfall 9: Apologizing Constantly**
"Sorry, this slide is messy." "Sorry, I didn't have time to..."
- **Fix**: Confidence. Present what you have proudly.

**Pitfall 10: No "So What?"**
Presenting results without context for why they matter.
- **Fix**: Every result should have a "so what?"—why does this matter?

---

## DEMO BEST PRACTICES

**Should You Demo Live Code?**
- **Pros**: Shows it really works, impressive if it goes well
- **Cons**: Takes time, can fail spectacularly

**Drew's Recommendation**: Short, scripted demos only.

**If You Demo:**
1. **Keep it under 90 seconds**
2. **Script it exactly**—practice the exact inputs
3. **Have backup screenshots** in case it fails
4. **Test on presentation computer** beforehand

**Good Demo Examples:**
- "Here's my model API taking a customer record and returning churn probability."
- "This dashboard shows real-time prediction confidence distributions."

**Bad Demo Examples:**
- Walking through Jupyter notebook cell by cell
- Live training a model (watching progress bars)
- Debugging code on stage

**Alternative to Live Demo**: Video recording
- Pre-record a 60-second demo
- Perfect every time
- Can speed up slow parts
- No technical failures

---

## PRESENTATION DAY LOGISTICS

### Before Your Slot
- [ ] Arrive 10 minutes early
- [ ] Test slides on presentation computer
- [ ] Have backup (USB drive + cloud link)
- [ ] Set phone to silent
- [ ] Deep breath, you've got this

### During Presentation
- [ ] Introduce yourself (even though we know you!)
- [ ] Make eye contact with different people
- [ ] Watch for time signals from instructor
- [ ] Finish strong (don't trail off)

### During Q&A
- [ ] Listen fully to each question
- [ ] Repeat/rephrase question if needed
- [ ] Answer concisely
- [ ] It's okay to say "I don't know, but..."

### After Presentation
- [ ] Thank the audience
- [ ] Stay for other presentations (support your classmates!)
- [ ] Reflect: What went well? What would you change?

---

## DREW'S PRESENTATION NOTE

I've been teaching CSC-114 for years, and final presentations are my favorite day of the semester.

Here's why: In Week 1, I see students who can barely import pandas. By Week 16, I see ML professionals who can build sophisticated systems AND manage the process.

**What makes a great presentation?**

It's not the most complex model. It's not the highest accuracy. It's not the fanciest slides.

It's a student who can:
- Explain complex work clearly
- Show they learned from failures
- Demonstrate both technical AND PM growth
- Think critically about ethics
- Handle questions with confidence and humility

**Every semester, someone asks: "What if my project isn't as good as everyone else's?"**

Here's the truth: Your project doesn't need to be "the best." It needs to show YOU at your best.

Did you integrate techniques thoughtfully? Did your PM practice improve? Did you think critically about limitations? Did you grow from Sprint 1 to Sprint 6?

If yes, you have a great presentation.

**The Most Memorable Moments:**

Every semester, there's a student who struggled in Sprint 1—missed deadlines, poor estimates, no planning discipline. By Sprint 6, they're crushing it. When they show their velocity chart and say, "I learned to actually plan instead of just hoping," the whole room nods. That growth—that's what this is about.

**One More Thing:**

Some of you will go on to CSC-289. Some will do ML internships. Some will present at conferences. Some will interview for ML roles.

This presentation is practice for all of that.

The skills you're demonstrating today—communicating complex technical work, showing process maturity, handling questions under pressure—those are the skills that get you hired.

Take this seriously. But also enjoy it. You've earned this moment.

Go show what you've built. Go tell your story.

— Drew

---

## POST-PRESENTATION REFLECTION (OPTIONAL BONUS)

After presentations conclude, submit a brief reflection (1 page) for +5 bonus points:

**Guiding Questions:**
1. What went well in your presentation?
2. What would you change if you could present again?
3. What did you learn from other students' presentations?
4. How will you apply presentation skills in the future?
5. Looking back at CSC-114 as a whole, what's your biggest takeaway?

**Why This Matters**: Reflection cements learning. Plus, it's good practice for reflective practice in CSC-289.

---

## PRESENTATION SCHEDULE

**Week 16 Schedule** (TBD based on enrollment):
- Presentations will be scheduled in advance
- Each student gets a 20-minute slot (15 min present + 5-10 min Q&A)
- Order will be randomized (or volunteer basis for first slots)
- All students must attend all presentation days (attendance = participation points)

**If You Can't Attend Your Scheduled Slot:**
- Contact instructor ASAP (at least 48 hours in advance)
- May present via recorded video (but live Q&A still required)
- No-shows receive 0 points (this is non-negotiable)

---

## FINAL CHECKLIST

### Week Before Presentation
- [ ] Slides drafted and reviewed
- [ ] Practiced presentation at least once
- [ ] Timed each section
- [ ] Prepared answers to likely questions
- [ ] Tested any demos/videos

### Day Before Presentation
- [ ] Final practice run (full 15 minutes)
- [ ] Slides finalized and uploaded to cloud
- [ ] Backup copy on USB drive
- [ ] Reviewed velocity chart, screenshots, artifacts
- [ ] Got good sleep (seriously!)

### Presentation Day
- [ ] Arrived early
- [ ] Tested slides on presentation computer
- [ ] Deep breath, positive mindset
- [ ] Ready to show what you've built

---

## RESOURCES

### Presentation Design
- [Presentation Zen](https://www.presentationzen.com/) - Minimalist slide design
- [Google Slides Templates](https://docs.google.com/presentation/) - Professional themes
- [ColorBrewer](https://colorbrewer2.org/) - Accessible color schemes for charts

### Public Speaking
- [TED Talk Tips](https://www.ted.com/playlists/574/how_to_make_a_great_presentation) - Engaging presentation techniques
- [Toastmasters Tips](https://www.toastmasters.org/) - Public speaking fundamentals

### Technical Presentations
- [How to Give a Technical Presentation](https://homes.cs.washington.edu/~mernst/advice/giving-talk.html) - Academic perspective
- [The Craft of Writing Effectively](https://www.youtube.com/watch?v=vtIzMaLkCaM) - UChicago writing lecture (applies to presentations)

---

**Presentation Date**: Week 16 (Check Canvas for exact schedule)
**Submission**: Slides uploaded to Canvas by presentation day
**Questions?**: Office hours or email

**Final Words**: You've built something impressive. Now go show the world what you can do.

This is your moment. Make it count.
