# Week 15-16 Assignment: "Capstone AI Project & Process Portfolio"
## CSC-114 AI I - The Final Sprint & Your ML Journey

**Due**: End of Week 16 (Friday, 11:59 PM)
**Points**: 100 (Final Project - 20% of course grade)
**Submission**: GitHub repository + Process Portfolio document

---

## ASSIGNMENT OVERVIEW

This is it. **Sprint 6**. Your capstone. Your chance to prove you're not just someone who took an ML class—you're an ML professional who can manage complex technical projects from start to finish.

**What Makes This Different:**
- **NO templates provided** - You design everything
- **Fully autonomous** - You choose dataset, methods, metrics, everything
- **Integration required** - Combine 2+ ML techniques learned this semester
- **Production mindset** - Code should be portfolio-worthy
- **Process Portfolio** - Document your entire PM journey (Sprints 1-6)

**The Two Deliverables:**
1. **Technical Capstone** (60 points): End-to-end ML project demonstrating mastery
2. **Process Portfolio** (40 points): Reflection on your PM growth across all sprints

**This assignment tests EVERYTHING:**
- ML technical skills (Weeks 1-14)
- Project management discipline (Sprints 1-6)
- Professional documentation
- Autonomous problem-solving
- Integration and synthesis

---

## LEARNING OBJECTIVES

By completing this capstone, you will:
1. Design and execute a complete ML project without scaffolding
2. Integrate multiple ML techniques into a coherent solution
3. Make principled decisions about model selection and evaluation
4. Produce production-quality code and documentation
5. Critically analyze your own PM process evolution
6. Demonstrate readiness for CSC-289 (Capstone) and industry work

---

## PART 1: SPRINT 6 - THE CAPSTONE PROJECT

### Sprint Goal

You define it. But it should be **ambitious** and **integrative**.

**Good Sprint Goal Example:**
"Build a multi-model ensemble system that combines supervised and unsupervised learning to predict customer churn, with comprehensive ethical analysis of model limitations."

**Bad Sprint Goal Example:**
"Train a random forest model on the Iris dataset."

**Why?** The bad example is something you could have done in Week 2. This is your capstone—it should showcase growth.

### Technical Requirements (60 points)

Your project MUST include ALL of the following:

#### 1. Multi-Technique Integration (15 points)
Combine at least **2 different ML paradigms** from this semester:
- Supervised learning (classification OR regression)
- Unsupervised learning (clustering OR dimensionality reduction)
- Ensemble methods
- Neural networks (if covered in your section)

**Example Integrations:**
- Use PCA for dimensionality reduction → Train classifier on reduced features
- Use K-Means clustering → Train separate models per cluster
- Compare individual models → Build ensemble (voting/stacking)
- Use t-SNE visualization → Analyze where models fail

**Deliverable**: Clear explanation of how techniques integrate and why

#### 2. End-to-End Pipeline (15 points)
Demonstrate the COMPLETE ML workflow:

```
Raw Data → EDA → Preprocessing → Feature Engineering →
Model Training → Evaluation → Model Selection → Deployment Readiness
```

**Required Pipeline Components:**
- **Data Loading**: From CSV, API, or database (not just sklearn.datasets)
- **Exploratory Data Analysis**: Visualizations, distributions, correlations
- **Preprocessing**: Missing value handling, encoding, scaling
- **Feature Engineering**: Create at least 2 derived features
- **Train/Validation/Test Split**: Proper 3-way split OR cross-validation
- **Multiple Model Training**: At least 3 different algorithms
- **Comprehensive Evaluation**: All relevant metrics for your problem
- **Model Selection**: Justified choice of final model
- **Error Analysis**: Where and why does your model fail?

**Deliverable**: Notebook showing full pipeline, end-to-end

#### 3. Model Comparison & Selection (10 points)
Train and rigorously compare at least **3 different models**.

**Required Comparisons:**
- Performance metrics (appropriate for your problem)
- Training time / computational cost
- Interpretability vs. accuracy tradeoff
- Overfitting analysis (train vs. validation performance)
- Statistical significance testing (if applicable)

**Deliverable**: Comparison table + visualization + written justification

**Example Table:**
| Model | Accuracy | Precision | Recall | F1 | Training Time | Interpretability |
|-------|----------|-----------|--------|-----|---------------|------------------|
| Logistic Regression | 0.84 | 0.82 | 0.86 | 0.84 | 0.3s | High |
| Random Forest | 0.91 | 0.89 | 0.93 | 0.91 | 2.1s | Medium |
| XGBoost | 0.93 | 0.91 | 0.95 | 0.93 | 4.7s | Low |

**Selection Justification**: "I select Random Forest as the final model because while XGBoost achieves 2% higher accuracy, the difference is not statistically significant (p=0.17), and Random Forest offers better interpretability for stakeholder communication while training 2x faster."

#### 4. Production-Ready Code Structure (10 points)
Your code should be **portfolio-worthy**—something you'd show an employer.

**Code Quality Requirements:**
- **Modular functions**: Break code into reusable functions (not one giant script)
- **Clear naming**: Variables and functions have descriptive names
- **Comprehensive comments**: Explain WHY, not just WHAT
- **Error handling**: Try/except blocks for data loading, model training
- **Reproducibility**: Set random seeds, document environment
- **Documentation**: Docstrings for all functions

**Example Function Structure:**
```python
def train_and_evaluate_model(model, X_train, y_train, X_val, y_val, model_name):
    """
    Train a model and evaluate on validation set.

    Args:
        model: sklearn-compatible model object
        X_train: Training features
        y_train: Training labels
        X_val: Validation features
        y_val: Validation labels
        model_name: String name for logging

    Returns:
        dict: Model metrics (accuracy, precision, recall, f1)
    """
    # Training with timing
    start_time = time.time()
    model.fit(X_train, y_train)
    train_time = time.time() - start_time

    # Predictions
    y_pred = model.predict(X_val)

    # Metrics
    metrics = {
        'model': model_name,
        'accuracy': accuracy_score(y_val, y_pred),
        'precision': precision_score(y_val, y_pred, average='weighted'),
        'recall': recall_score(y_val, y_pred, average='weighted'),
        'f1': f1_score(y_val, y_pred, average='weighted'),
        'train_time': train_time
    }

    return metrics
```

**Deliverable**: Clean, modular code with professional structure

#### 5. Comprehensive Evaluation (5 points)
Go beyond simple accuracy. Analyze your model DEEPLY.

**Required Analyses:**
- **Confusion Matrix**: Where does the model confuse classes?
- **Feature Importance**: What features matter most? (if applicable)
- **Learning Curves**: How does performance change with data size?
- **Error Analysis**: Manual inspection of misclassified examples
- **Confidence Analysis**: Distribution of prediction probabilities

**Deliverable**: Evaluation section with visualizations and insights

#### 6. Ethical Analysis & Limitations (5 points)
Demonstrate critical thinking about your model's real-world implications.

**Required Ethical Analysis:**
- **Bias Assessment**: Could this model discriminate? How would you test?
- **Failure Modes**: What happens when the model is wrong?
- **Data Limitations**: What biases might exist in your training data?
- **Misuse Potential**: How could this model be used unethically?
- **Transparency**: Can you explain predictions to non-technical stakeholders?

**Required Limitations Section:**
- What assumptions does your model make?
- What scenarios would break your model?
- What's the appropriate use case (and what's NOT)?
- What would you need to make this production-ready?

**Deliverable**: Dedicated "Ethics & Limitations" section (300+ words)

**Example:**
> "This loan approval model shows concerning disparities across demographic groups. While the model doesn't directly use race as a feature, zip code and income level serve as proxies, potentially encoding historical discrimination. Before deployment, this model would require:
> 1. Fairness testing across protected groups
> 2. Disparate impact analysis (80% rule)
> 3. Explainability tools (SHAP/LIME) for individual decisions
> 4. Human-in-the-loop review for borderline cases
> 5. Regular audits for drift in fairness metrics
>
> The model's primary limitation is training on historical data from 2015-2020, which may not reflect post-pandemic economic realities. It should NOT be used for..."

---

## PART 2: PROCESS PORTFOLIO (40 points)

This is your chance to **reflect on your PM journey** across all six sprints.

### What is the Process Portfolio?

A professional document analyzing:
- Your velocity evolution (Sprint 1 → Sprint 6)
- Your estimation accuracy improvements
- What retrospectives taught you (with evidence of actions taken)
- How you grew as a project manager
- Your readiness for CSC-289 and beyond

### Process Portfolio Requirements

#### 1. Velocity Chart Across All Sprints (10 points)

Create a visualization showing your velocity Sprint 1-6.

**Required Elements:**
- Bar chart or line graph
- Planned vs. Actual points for each sprint
- Trend analysis: Are you getting faster? More consistent?
- Annotations explaining major variances

**Example Analysis:**
> "My velocity increased from 12 points (Sprint 1) to 18 points (Sprint 6), a 50% improvement. Sprint 3 shows a dip (8 points) due to underestimating the complexity of neural networks—my retrospective identified this, and I adjusted by breaking complex stories into smaller tasks in Sprint 4+."

**Deliverable**: Chart + 200-word analysis

#### 2. Estimation Accuracy Evolution (8 points)

Track how your estimation skills improved.

**Required Analysis:**
- Sprint-by-sprint estimation accuracy (estimated vs. actual hours/points)
- Pattern identification: What did you consistently over/underestimate?
- Improvement strategies you implemented
- Final estimation capability

**Example Table:**
| Sprint | Stories | Estimation Accuracy | Key Learning |
|--------|---------|---------------------|--------------|
| Sprint 1 | 5 | 60% | Underestimated testing time |
| Sprint 2 | 4 | 70% | Better task breakdown |
| Sprint 3 | 3 | 55% | New neural network topic |
| Sprint 4 | 5 | 80% | Applied Sprint 3 learnings |
| Sprint 5 | 4 | 85% | Consistent buffer time |
| Sprint 6 | 3 | 90% | Mature estimation |

**Deliverable**: Table + 150-word analysis of growth

#### 3. Retrospective Insights with Evidence (12 points)

Show how retrospectives led to **actual changes** in your process.

**Required Components:**
For **3 different sprints**, document:
- What you identified in retrospective
- What action you committed to
- Evidence that you actually did it
- Impact on subsequent sprint

**Example:**
> **Sprint 2 Retrospective:**
> - **Identified**: "I waste time context-switching between stories"
> - **Action**: "Work on only ONE story at a time until done"
> - **Evidence**: Sprint 3 board shows sequential story completion (screenshot attached). Sprint 2 had 3 stories in "In Progress" simultaneously; Sprint 3 never more than 1.
> - **Impact**: Sprint 3 velocity increased 20% despite fewer total hours worked.

**Deliverable**: 3 retrospective → action → evidence cycles (500+ words total)

#### 4. PM Growth Narrative (10 points)

A reflective essay on your development as a project manager.

**Required Content:**
- **Opening**: Where you started (Week 2 - first user story)
- **Journey**: Key milestones in your PM development
- **Challenges**: Specific PM struggles and how you overcame them
- **Skills Acquired**: Concrete PM skills you can now demonstrate
- **Future Application**: How you'll use PM skills in CSC-289 and beyond

**Guiding Questions:**
- How has your relationship with planning changed?
- What PM practice felt most valuable? Least valuable? (Be honest!)
- How do you now approach estimating complex technical work?
- What would you tell "Week 1 you" about PM?
- How has tracking progress changed your work habits?

**Deliverable**: 500-700 word narrative essay

**Example Opening:**
> "In Week 2, I wrote my first user story and thought, 'This is busywork—I just want to code.' Sixteen weeks later, I'm sitting here with velocity charts, burndown data, and a capstone project that succeeded BECAUSE of PM discipline. The turning point was Sprint 3, when I skipped daily standups for three days and lost track of scope creep..."

---

## PART 3: SPRINT 6 EXECUTION (Required PM Artifacts)

Even though this is the capstone, you still run it as a **proper sprint**.

### Sprint 6 PM Deliverables

All standard sprint artifacts, but at a professional level:

#### 1. Sprint Planning Document
```markdown
## Sprint 6 Planning - Capstone Project

**Sprint Goal**: [Your ambitious, integrative goal]

**Capacity Calculation**:
- Sprint 1-5 Average Velocity: [X] points
- Sprint 6 Planned Capacity: [Y] points (may be higher - it's the capstone!)
- Rationale: [Why this capacity is realistic]

**User Stories**:

### Story 1: [Name]
- **As a** [persona],
- **I want** [functionality],
- **So that** [value/benefit].
- **Estimate**: [points]
- **Acceptance Criteria**:
  - [ ] [Specific, testable criteria]
  - [ ] [Specific, testable criteria]
  - [ ] [Specific, testable criteria]

**Technical Tasks**:
- [ ] [Specific implementation task]
- [ ] [Specific implementation task]
- [ ] [Specific implementation task]

[Repeat for all stories]

**Total Planned**: [X] points
**Risk Assessment**: [What could go wrong? Mitigation strategies?]
```

**Expected Stories** (examples):
- Story 1: End-to-end pipeline implementation (8 pts)
- Story 2: Multi-model comparison framework (5 pts)
- Story 3: Ensemble method integration (5 pts)
- Story 4: Comprehensive evaluation suite (3 pts)
- Story 5: Ethics & limitations analysis (2 pts)

#### 2. Daily Standups (All 10 Days)

**Unlike previous sprints**, these should show increasing autonomy:

```markdown
## Day 1 (Monday)
**What I did**: Completed sprint planning, selected customer churn dataset
**What I'm doing today**: EDA and initial preprocessing
**Blockers**: None
**Confidence**: High - clear plan

## Day 5 (Friday)
**What I did**: Completed 3 baseline models, started ensemble
**What I'm doing today**: Implement stacking ensemble
**Blockers**: Struggling with class imbalance, researching SMOTE
**Confidence**: Medium - technical challenge identified

## Day 10 (Final Day)
**What I did**: Final testing, documentation, ethics section
**What I'm doing today**: Process Portfolio completion
**Blockers**: None
**Confidence**: High - on track for completion
```

#### 3. Burndown Chart

Should show mature sprint management:
- Steady progress (not last-minute cram)
- Proactive blocker resolution
- Realistic scope management

#### 4. Sprint Board Management

Use GitHub Projects or equivalent:
- Stories properly sized
- Clear task breakdown
- Evidence of work-in-progress limits
- Professional labels and organization

---

## PART 4: PROJECT IDEAS (INSPIRATION, NOT REQUIREMENTS)

You choose your own project, but here are examples at the right complexity level:

### Example 1: Healthcare Prediction System
**Dataset**: Hospital readmission data
**Integration**:
- Clustering to identify patient risk groups
- Separate classifiers per cluster
- Ensemble final prediction
**Ethics Focus**: Bias in healthcare, false negative consequences

### Example 2: Text Classification with Dimensionality Reduction
**Dataset**: News article categorization
**Integration**:
- TF-IDF vectorization
- PCA/t-SNE for visualization
- Multiple classifiers (Naive Bayes, SVM, ensemble)
**Ethics Focus**: Filter bubble effects, misinformation amplification

### Example 3: Image Classification Pipeline
**Dataset**: CIFAR-10 or similar
**Integration**:
- CNN for feature extraction
- Traditional ML on extracted features
- Ensemble of multiple architectures
**Ethics Focus**: Training data bias, adversarial examples

### Example 4: Recommender System
**Dataset**: MovieLens or e-commerce
**Integration**:
- Collaborative filtering (unsupervised)
- Content-based filtering (supervised)
- Hybrid ensemble
**Ethics Focus**: Echo chamber effects, manipulation potential

### Example 5: Time Series Forecasting
**Dataset**: Stock prices, weather, or energy consumption
**Integration**:
- Feature engineering from time series
- Multiple regression approaches
- Ensemble predictions with uncertainty
**Ethics Focus**: Misuse of predictions, overconfidence dangers

**Key**: Pick something that genuinely interests you AND allows technical depth.

---

## PART 5: USER STORY EXAMPLES FOR COMPLEX PROJECTS

Since you're working autonomously, here are strong user story examples:

### Example: Ensemble System User Stories

**Story 1: Baseline Model Suite**
- **As a** data scientist,
- **I want** to train 4 diverse baseline models (Logistic Regression, Random Forest, XGBoost, SVM),
- **So that** I have multiple perspectives on the prediction problem to ensemble.
- **Estimate**: 5 points
- **Acceptance Criteria**:
  - [ ] All 4 models trained on same train/val/test split
  - [ ] Cross-validation results documented for each
  - [ ] Performance metrics calculated (accuracy, precision, recall, F1, AUC)
  - [ ] Models saved for ensemble use

**Story 2: Stacking Ensemble Implementation**
- **As a** ML engineer,
- **I want** to implement a stacking ensemble using baseline models,
- **So that** I can achieve better performance than any individual model.
- **Estimate**: 5 points
- **Acceptance Criteria**:
  - [ ] Out-of-fold predictions generated for all base models
  - [ ] Meta-learner trained on base model predictions
  - [ ] Ensemble evaluated on held-out test set
  - [ ] Performance compared to best individual model
  - [ ] Statistical significance tested

**Story 3: Feature Importance Analysis**
- **As a** stakeholder,
- **I want** to understand which features drive predictions,
- **So that** I can trust and explain the model's decisions.
- **Estimate**: 3 points
- **Acceptance Criteria**:
  - [ ] SHAP or LIME values calculated for ensemble
  - [ ] Top 10 features identified and visualized
  - [ ] Example predictions explained
  - [ ] Documentation for non-technical audiences

**Story 4: Fairness Audit**
- **As a** responsible ML practitioner,
- **I want** to assess model fairness across demographic groups,
- **So that** I can identify and document potential biases.
- **Estimate**: 3 points
- **Acceptance Criteria**:
  - [ ] Performance metrics calculated per subgroup
  - [ ] Disparate impact measured (80% rule)
  - [ ] Calibration curves compared across groups
  - [ ] Mitigation strategies proposed
  - [ ] Ethics section completed

---

## DELIVERABLES CHECKLIST

### Technical Deliverables
- [ ] **Jupyter Notebook**: `sprint_6_capstone.ipynb` (comprehensive, production-quality)
- [ ] **README.md**: Project overview, setup instructions, results summary
- [ ] **Requirements.txt**: All dependencies with versions
- [ ] **Data**: Dataset or clear instructions for obtaining it
- [ ] **Saved Models**: Final trained models (pickled or saved)
- [ ] **Visualizations**: All charts as high-quality images
- [ ] **Results Summary**: Key findings in markdown or PDF

### PM Deliverables
- [ ] **Sprint Planning**: `sprint_6_planning.md`
- [ ] **Daily Standups**: `sprint_6_standups.md` (10 entries)
- [ ] **Burndown Chart**: Image or spreadsheet
- [ ] **GitHub Issues**: All stories created and tracked
- [ ] **Sprint Board**: Final state screenshot or GitHub Projects link

### Process Portfolio Deliverables
- [ ] **Process Portfolio Document**: `process_portfolio.md` or PDF
  - [ ] Velocity chart (Sprints 1-6)
  - [ ] Estimation accuracy analysis
  - [ ] Retrospective insights (3 cycles with evidence)
  - [ ] PM growth narrative (500-700 words)
  - [ ] Professional formatting and presentation

### Professional Touches
- [ ] **CSC-289 Readiness Statement**: 1 paragraph on how this capstone prepares you for senior capstone
- [ ] **Portfolio Description**: 2-3 sentence summary suitable for resume/LinkedIn
- [ ] **Lessons Learned**: Top 3 technical and top 3 PM lessons

---

## GRADING RUBRIC (100 POINTS TOTAL)

### Technical Implementation (60 points)

**Multi-Technique Integration (15 points)**
- 15 pts: Seamless integration of 2+ paradigms with clear justification
- 12 pts: Integration of 2+ paradigms, somewhat forced connection
- 8 pts: Superficial use of multiple techniques
- 4 pts: Minimal integration

**End-to-End Pipeline (15 points)**
- 15 pts: Complete, professional pipeline with all components
- 12 pts: Pipeline complete but missing polish in some areas
- 8 pts: Pipeline functional but skips important steps
- 4 pts: Incomplete pipeline

**Model Comparison & Selection (10 points)**
- 10 pts: Rigorous comparison with statistical testing and clear justification
- 8 pts: Good comparison but lacks statistical rigor
- 6 pts: Basic comparison without deep analysis
- 3 pts: Minimal comparison

**Production-Ready Code (10 points)**
- 10 pts: Professional, modular, well-documented code
- 8 pts: Good code structure with minor improvements needed
- 6 pts: Functional but messy code
- 3 pts: Poor code quality

**Comprehensive Evaluation (5 points)**
- 5 pts: Deep analysis with multiple evaluation methods
- 4 pts: Good evaluation but missing some techniques
- 3 pts: Basic evaluation only
- 1 pt: Minimal evaluation

**Ethical Analysis & Limitations (5 points)**
- 5 pts: Thoughtful, nuanced ethical analysis with specific examples
- 4 pts: Good ethical consideration but somewhat generic
- 3 pts: Superficial ethical discussion
- 1 pt: Ethical analysis missing or inadequate

### Process Portfolio (40 points)

**Velocity Chart & Analysis (10 points)**
- 10 pts: Professional chart with insightful trend analysis
- 8 pts: Good chart with basic analysis
- 6 pts: Chart present but analysis shallow
- 3 pts: Incomplete or missing

**Estimation Accuracy Evolution (8 points)**
- 8 pts: Clear improvement demonstrated with specific patterns identified
- 6 pts: Some improvement shown
- 4 pts: Data present but limited analysis
- 2 pts: Incomplete

**Retrospective Insights with Evidence (12 points)**
- 12 pts: 3 complete cycles with concrete evidence of changes and impact
- 9 pts: 3 cycles but evidence less concrete
- 6 pts: Some retrospective content but missing evidence
- 3 pts: Superficial or incomplete

**PM Growth Narrative (10 points)**
- 10 pts: Compelling, reflective narrative demonstrating genuine growth
- 8 pts: Good reflection with some depth
- 6 pts: Basic reflection without much insight
- 3 pts: Superficial or very brief

---

## SUBMISSION INSTRUCTIONS

### GitHub Repository Structure

Your final repo should look like this:
```
csc114-ml-portfolio/
├── README.md (updated with capstone summary)
├── requirements.txt
├── sprint_6_capstone.ipynb
├── sprint_6_planning.md
├── sprint_6_standups.md
├── process_portfolio.md (or .pdf)
├── data/
│   └── [your dataset or instructions]
├── models/
│   └── [saved models]
├── images/
│   ├── velocity_chart.png
│   ├── burndown_sprint_6.png
│   └── [other visualizations]
└── docs/
    └── [additional documentation]
```

### Submission Via Canvas
1. **Repository URL**: Link to your GitHub repo (ensure I have access)
2. **Process Portfolio**: Upload PDF if not in repo
3. **Self-Assessment**: Brief statement (optional):
   - What you're most proud of
   - What was most challenging
   - Estimated grade with justification

---

## COMMON PITFALLS TO AVOID

### Technical Pitfalls

**Pitfall 1: Scope Too Small**
"I trained a random forest on Iris data."
- **Why bad**: This is Week 2 work, not capstone
- **Fix**: Choose a complex problem requiring integration

**Pitfall 2: No Real Integration**
"I did clustering AND classification on the same data."
- **Why bad**: Just doing two separate things isn't integration
- **Fix**: Show how one technique informs or improves the other

**Pitfall 3: Weak Evaluation**
"My model got 95% accuracy!"
- **Why bad**: One metric tells you nothing
- **Fix**: Comprehensive evaluation including failure analysis

**Pitfall 4: Copy-Paste Code**
Entire notebook is copied from Kaggle/tutorials
- **Why bad**: Not your work
- **Fix**: Understand and adapt code, cite sources, add your own analysis

**Pitfall 5: Ignoring Ethics**
One paragraph: "My model might be biased."
- **Why bad**: Superficial, no evidence of critical thinking
- **Fix**: Specific analysis with concrete examples and mitigation strategies

### PM Pitfalls

**Pitfall 6: Fake Standups**
All written at the last minute with made-up dates
- **Why bad**: Timestamps in git commits will expose this
- **Fix**: Actually do daily standups throughout the sprint

**Pitfall 7: No Evidence of Growth**
"I got better at PM." (no specifics)
- **Why bad**: Vague claims without evidence
- **Fix**: Concrete examples with data (velocity charts, board screenshots, retrospective notes)

**Pitfall 8: Ignoring Process Portfolio**
Spending 95% of time on technical, rushing PM reflection
- **Why bad**: Process Portfolio is 40% of grade
- **Fix**: Allocate time appropriately (Days 1-8 technical, Days 9-10 process portfolio)

**Pitfall 9: No Retrospective Evolution**
Same retrospective insights every sprint
- **Why bad**: Suggests you didn't actually learn or change
- **Fix**: Show how problems evolved as you grew

**Pitfall 10: Unrealistic Velocity**
Claiming 50 points in Sprint 6 when previous sprints were 12-15
- **Why bad**: Not believable, suggests dishonest reporting
- **Fix**: Show realistic, gradual improvement with honest variance

---

## TIPS FOR SUCCESS

### Technical Tips

**Tip 1: Start with a Clear Vision**
Spend Day 1 planning the full project architecture before coding.

**Tip 2: Build Incrementally**
Get a simple end-to-end pipeline working first, then add complexity.

**Tip 3: Version Control Aggressively**
Commit after each story completion. Create branches for risky experiments.

**Tip 4: Document As You Go**
Write explanations while code is fresh in your mind, not at the end.

**Tip 5: Test Early and Often**
Don't wait until Day 10 to discover your model doesn't work.

### PM Tips

**Tip 6: Front-Load Process Portfolio Data Collection**
Set up velocity tracking spreadsheet in Week 1. By Week 15, you'll have all the data.

**Tip 7: Save Sprint Artifacts**
Screenshot your sprint boards each sprint. Take photos of burndown charts.

**Tip 8: Write Retrospective Notes in Real-Time**
After each sprint, jot down learnings immediately. Don't try to remember 6 sprints later.

**Tip 9: Be Honest in Reflections**
Admitting struggles and showing how you overcame them is MORE impressive than claiming perfection.

**Tip 10: Tell a Story**
Your Process Portfolio should read like a growth narrative, not a data dump.

---

## DREW'S EPIC NOTE

This is it. The culmination of sixteen weeks of work.

When you started CSC-114, you could barely load a dataset. Now you're building multi-model ensemble systems with ethical analysis and production-ready code.

When you started Sprint 1, you probably thought, "Why do I need to write user stories? I just want to code!" Now you understand that the projects that succeed aren't just well-coded—they're well-managed.

**Here's what I'm looking for in this capstone:**

I want to see someone who can **design** a complex ML system, **implement** it with professional-quality code, **evaluate** it honestly and comprehensively, **reflect** on ethical implications, and **manage** the entire process with sprint discipline.

I want to see evidence that you've **grown**—that your Sprint 6 self is fundamentally more capable than your Sprint 1 self, both technically and as a project manager.

I want to see work that makes you proud. Work you'd show in a job interview. Work that demonstrates you're ready for CSC-289 and beyond.

**The hardest part of this assignment isn't the coding**—you have the technical skills. The hardest part is being **fully autonomous**. No templates. No guided instructions. Just you, your skills, and a challenge.

That's intentional. Because in CSC-289, in internships, in your career—that's what it looks like. You won't have a professor telling you exactly what to do. You'll have a problem, your skills, and the discipline to execute.

You've got this.

**The Favorite Moment:**

Every semester, someone comes to office hours around Day 8 panicking: "I don't think my project is good enough!"

We pull up their repo together. We look at their pipeline. We review their evaluation. We read their ethical analysis.

And then I say: "Do you realize you just built something that would have seemed impossible to you in Week 1?"

That realization—that's what this capstone is about.

Go prove what you've learned. Go show what you can build.

See you at final presentations (Week 16).

— Drew

---

## RESOURCES

### Technical Resources
- [Scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html)
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [UCI ML Repository](https://archive.ics.uci.edu/ml/index.php)
- [Papers with Code](https://paperswithcode.com/)

### PM Resources
- Your Sprint 1-5 retrospectives (pure gold!)
- Mini-lessons 1-5 in `pm-materials/`
- [Scrum Guide](https://scrumguides.org/)

### Ethics Resources
- [Fairness Indicators](https://www.tensorflow.org/responsible_ai/fairness_indicators/guide)
- [Model Cards Paper](https://arxiv.org/abs/1810.03993)
- [Ethics Guidelines for Trustworthy AI](https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai)

### Office Hours
**Extended hours during Weeks 15-16!**
- Monday/Wednesday: 2-5 PM
- Tuesday/Thursday: 10 AM-12 PM
- By appointment: Evening slots available

**Don't hesitate to use office hours**—this is your capstone. Get help when stuck.

---

## LOOKING AHEAD TO WEEK 16

Next week, you'll **present** your capstone to the class:
- 7 minutes: Technical deep-dive
- 5 minutes: PM journey narrative
- 2 minutes: Ethical considerations
- 5-10 minutes: Q&A

Start thinking about your presentation narrative NOW.

---

**Due Date**: End of Week 16 (Friday, 11:59 PM)
**Late Policy**: 10% per day late (capstone is too important to skip!)
**Questions?**: Office hours or Canvas discussion forum

**Final Reminder**: This is 20% of your course grade AND your portfolio piece. Invest the time. Make it excellent. You've earned this moment.
