# Week 5 Assignment: "Model Evaluation Sprint"
## CSC-114 AI I - Your First Full Sprint Cycle

**Due**: End of Week 5 (Friday, 11:59 PM)
**Points**: 50 (Sprint deliverable)
**Submission**: GitHub repository + Sprint artifacts

---

## ASSIGNMENT OVERVIEW

This is your **first complete 2-week sprint** (Weeks 5-6) using full Scrum methodology. You'll implement model evaluation techniques WHILE managing the work as a professional sprint.

**What You're Building:**
Comprehensive model evaluation framework that tests multiple models, compares performance metrics, and identifies the best model for different scenarios.

**What You're Learning (Technical):**
- Cross-validation techniques
- Precision, Recall, F1-score, ROC curves
- Confusion matrices
- Model comparison frameworks

**What You're Learning (PM):**
- Sprint planning (capacity, goal, story selection)
- Daily standups (tracking progress)
- Burndown chart (visual progress)
- Sprint board (Kanban: To Do, In Progress, Done)

---

## PREREQUISITE: SPRINT PLANNING

**Before Week 5 starts**, complete your Sprint Planning document.

### Step 1: Review Mini-Lesson #3 - Sprint Planning
Location: `pm-materials/03-Sprint-Planning.md`

### Step 2: Determine Your Capacity
Based on Weeks 3-4 velocity:
- Week 3 velocity: [your points completed]
- Week 4 velocity: [your points completed]
- **Average velocity**: (W3 + W4) / 2 = [your capacity]
- **Sprint 1 planned capacity**: [slightly conservative]

Example: If W3=15pts and W4=17pts, average=16pts, plan for 14-15pts

### Step 3: Define Sprint Goal
One sentence describing what you'll accomplish:

**Example**: "Build comprehensive model evaluation framework that compares 4 ML algorithms across multiple metrics"

### Step 4: Break Down User Stories

**Story 1**: Cross-Validation Implementation
- **As a** data scientist,
- **I want** to validate models using k-fold cross-validation,
- **So that** I can assess how well models generalize to unseen data.
- **Estimate**: 5 points

**Story 2**: Performance Metrics Dashboard
- **As a** ML practitioner,
- **I want** to see precision, recall, F1, and ROC curves for each model,
- **So that** I can compare model performance comprehensively.
- **Estimate**: 5 points

**Story 3**: Model Comparison Framework
- **As a** project lead,
- **I want** to compare 4 different algorithms on the same dataset,
- **So that** I can select the best model for deployment.
- **Estimate**: 3 points

**Story 4**: Confusion Matrix Visualization
- **As a** stakeholder,
- **I want** to see where models make mistakes via confusion matrices,
- **So that** I understand model limitations.
- **Estimate**: 2 points

**Total Planned**: 15 points

### Step 5: Create Sprint Backlog
In GitHub:
1. Create milestone: "Sprint 1 - Model Evaluation"
2. Create Issues for each story above
3. Assign all stories to Sprint 1 milestone
4. Add label: `sprint-1`
5. Move to "To Do" column on project board

### Step 6: Task Breakdown
For each story, list technical tasks in issue description:

**Example (Story 1)**:
```markdown
## Tasks
- [ ] Research sklearn cross_val_score documentation
- [ ] Implement 5-fold cross-validation
- [ ] Test on training data
- [ ] Calculate mean and std deviation of scores
- [ ] Document findings in notebook
```

**Deliverable**: `sprint_1_planning.md` document in your repo

---

## SPRINT EXECUTION (WEEKS 5-6)

### Daily Standups (Required)

Every day (Mon-Fri), create a brief standup entry in `sprint_1_standups.md`:

```markdown
## Day 1 (Monday, Jan 20)
**What I did yesterday**: Completed sprint planning, created all GitHub issues
**What I'll do today**: Implement cross-validation for first model
**Blockers**: None yet

## Day 2 (Tuesday, Jan 21)
**What I did yesterday**: Cross-validation working for Logistic Regression
**What I'll do today**: Add remaining 3 models to cross-validation
**Blockers**: Confused about stratified k-fold, need to research

[Continue for all 10 days]
```

**Why standups matter**: They keep you accountable, surface blockers early, and create a record of your work rhythm.

### Sprint Board Management

Use GitHub Projects:
- **To Do**: Stories not yet started
- **In Progress**: Currently working on (move when you start)
- **Done**: Completed (move when acceptance criteria met)

**Rule**: Only ONE story "In Progress" at a time!

### Burndown Chart

Track remaining story points each day in a spreadsheet:

| Day | Points Remaining | Notes |
|-----|------------------|-------|
| Day 1 | 15 | Sprint starts |
| Day 2 | 15 | Still planning |
| Day 3 | 13 | Completed Story 4 (2 pts) |
| Day 4 | 13 | Working on Story 1 |
| Day 5 | 8 | Completed Story 1 (5 pts) |
| ... | ... | ... |
| Day 10 | 0 | Sprint complete! |

Ideal: Linear decrease from 15 to 0
Reality: Bumpy line (that's normal!)

---

## TECHNICAL IMPLEMENTATION

### Dataset: Wisconsin Breast Cancer
Binary classification: benign vs. malignant tumors

### Models to Compare
1. Logistic Regression
2. Decision Tree
3. Random Forest
4. Support Vector Machine (SVM)

### Required Metrics
For EACH model, calculate:
- **Accuracy**: Overall correctness
- **Precision**: Of predicted positive, how many were actually positive?
- **Recall**: Of actual positives, how many did we find?
- **F1-Score**: Harmonic mean of precision and recall
- **ROC AUC**: Area under ROC curve (model's discriminative ability)

### Code Structure

```python
# Week 5-6: Model Evaluation Sprint
# CSC-114 - [Your Name]
# Sprint Goal: [Your sprint goal]

import pandas as pd
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import (classification_report, confusion_matrix,
                              roc_curve, roc_auc_score)
import matplotlib.pyplot as plt
import seaborn as sns

# STORY 1: Cross-Validation Implementation
# Estimate: 5 points | Status: [To Do/In Progress/Done]

# Load data
data = load_breast_cancer()
X, y = data.data, data.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Implement 5-fold cross-validation
models = {
    'Logistic Regression': LogisticRegression(max_iter=10000),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Random Forest': RandomForestClassifier(random_state=42),
    'SVM': SVC(probability=True, random_state=42)
}

cv_results = {}
for name, model in models.items():
    scores = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')
    cv_results[name] = {
        'mean': scores.mean(),
        'std': scores.std()
    }
    print(f"{name}: {scores.mean():.3f} (+/- {scores.std():.3f})")

# STORY 2: Performance Metrics Dashboard
# Estimate: 5 points | Status: [To Do/In Progress/Done]

# Train all models on full training set
trained_models = {}
for name, model in models.items():
    model.fit(X_train, y_train)
    trained_models[name] = model

# Generate comprehensive metrics
metrics_df = pd.DataFrame()
for name, model in trained_models.items():
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]

    from sklearn.metrics import precision_score, recall_score, f1_score, accuracy_score

    metrics_df = metrics_df.append({
        'Model': name,
        'Accuracy': accuracy_score(y_test, y_pred),
        'Precision': precision_score(y_test, y_pred),
        'Recall': recall_score(y_test, y_pred),
        'F1-Score': f1_score(y_test, y_pred),
        'ROC AUC': roc_auc_score(y_test, y_proba)
    }, ignore_index=True)

print("\n=== Model Performance Comparison ===")
print(metrics_df.to_string(index=False))

# STORY 3: Model Comparison Framework
# Estimate: 3 points | Status: [To Do/In Progress/Done]

# Visualize model comparison
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Plot 1: Accuracy Comparison
axes[0, 0].bar(metrics_df['Model'], metrics_df['Accuracy'])
axes[0, 0].set_title('Model Accuracy Comparison')
axes[0, 0].set_ylabel('Accuracy')
axes[0, 0].tick_params(axis='x', rotation=45)

# Plot 2: Precision vs Recall
axes[0, 1].scatter(metrics_df['Recall'], metrics_df['Precision'], s=100)
for i, model in enumerate(metrics_df['Model']):
    axes[0, 1].annotate(model, (metrics_df['Recall'][i], metrics_df['Precision'][i]))
axes[0, 1].set_xlabel('Recall')
axes[0, 1].set_ylabel('Precision')
axes[0, 1].set_title('Precision vs Recall')
axes[0, 1].grid(True)

# Plot 3: ROC Curves
for name, model in trained_models.items():
    y_proba = model.predict_proba(X_test)[:, 1]
    fpr, tpr, _ = roc_curve(y_test, y_proba)
    auc = roc_auc_score(y_test, y_proba)
    axes[1, 0].plot(fpr, tpr, label=f'{name} (AUC={auc:.3f})')
axes[1, 0].plot([0, 1], [0, 1], 'k--', label='Random')
axes[1, 0].set_xlabel('False Positive Rate')
axes[1, 0].set_ylabel('True Positive Rate')
axes[1, 0].set_title('ROC Curves')
axes[1, 0].legend()
axes[1, 0].grid(True)

# Plot 4: F1-Score Comparison
axes[1, 1].barh(metrics_df['Model'], metrics_df['F1-Score'])
axes[1, 1].set_xlabel('F1-Score')
axes[1, 1].set_title('F1-Score Comparison')

plt.tight_layout()
plt.savefig('model_comparison_dashboard.png')
plt.show()

# STORY 4: Confusion Matrix Visualization
# Estimate: 2 points | Status: [To Do/In Progress/Done]

# Create confusion matrices for all models
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
axes = axes.ravel()

for idx, (name, model) in enumerate(trained_models.items()):
    y_pred = model.predict(X_test)
    cm = confusion_matrix(y_test, y_pred)

    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=axes[idx])
    axes[idx].set_title(f'{name} Confusion Matrix')
    axes[idx].set_ylabel('True Label')
    axes[idx].set_xlabel('Predicted Label')

plt.tight_layout()
plt.savefig('confusion_matrices.png')
plt.show()

# FINAL ANALYSIS: Best Model Selection
print("\n=== BEST MODEL RECOMMENDATION ===")
best_model_name = metrics_df.loc[metrics_df['F1-Score'].idxmax(), 'Model']
best_metrics = metrics_df[metrics_df['Model'] == best_model_name].iloc[0]

print(f"Recommended Model: {best_model_name}")
print(f"Rationale: Highest F1-Score ({best_metrics['F1-Score']:.3f}) balances precision and recall")
print(f"Performance Summary:")
print(f"  - Accuracy: {best_metrics['Accuracy']:.3f}")
print(f"  - Precision: {best_metrics['Precision']:.3f}")
print(f"  - Recall: {best_metrics['Recall']:.3f}")
print(f"  - ROC AUC: {best_metrics['ROC AUC']:.3f}")
```

---

## SPRINT DELIVERABLES

### Technical Deliverables
- [ ] Jupyter notebook: `sprint_1_model_evaluation.ipynb` (working code)
- [ ] All 4 models trained and evaluated
- [ ] Comprehensive metrics calculated
- [ ] Visualizations created (comparison dashboard, confusion matrices)
- [ ] Best model selected with justification

### PM Deliverables (CRITICAL)
- [ ] Sprint planning document (`sprint_1_planning.md`)
- [ ] Daily standups (10 entries in `sprint_1_standups.md`)
- [ ] Burndown chart (spreadsheet or image)
- [ ] GitHub Issues created and tracked
- [ ] Sprint board updated (screenshot or GitHub Projects link)
- [ ] All stories moved to "Done" column

---

## GRADING RUBRIC (50 points)

**Technical Implementation (25 points)**
- Cross-validation implemented (5 pts)
- All 4 models trained (5 pts)
- Comprehensive metrics calculated (5 pts)
- Visualizations professional and clear (5 pts)
- Best model selection justified (5 pts)

**PM Execution (20 points)**
- Sprint planning complete and realistic (5 pts)
- Daily standups consistent (10 days minimum) (5 pts)
- Burndown chart maintained (5 pts)
- Sprint board managed properly (5 pts)

**Documentation (5 points)**
- Code well-commented (2 pts)
- README updated with sprint summary (2 pts)
- Results clearly interpreted (1 pt)

**Bonus (5 points)**
- Sprint completed on time with all stories done
- Burndown chart shows steady progress
- Professional presentation of work

---

## COMMON SPRINT CHALLENGES

**"I'm behind schedule by Day 5!"**
- Normal! Adjust remaining estimates
- Focus on must-have stories
- Document in retrospective (Week 6)

**"My burndown chart is flat for 3 days"**
- Happens when stuck on one story
- Break story into smaller tasks
- Ask for help in office hours

**"I finished early (Day 7)"**
- Excellent! Pull in a "stretch goal" story
- Or improve quality of existing work
- Document actual velocity (higher than planned)

---

## LOOKING AHEAD

**Week 6**: Sprint Retrospective
- What went well?
- What didn't go well?
- What will you do differently in Sprint 2?

This reflection turns this sprint's lessons into next sprint's improvements!

---

**Drew's Note**: This is where PM meets ML for real. You're not just building models—you're managing the process of building models. Industry ML teams use sprints exactly like this. The discipline feels tedious now, but by Sprint 3, you'll appreciate having clear plans and progress tracking. Trust the process!

**Pro Tip**: Take screenshots of your sprint board each day. It's satisfying to see tasks move from "To Do" to "Done", and makes great portfolio material showing you can manage projects, not just code.
