# Module 3 Activity: Evaluation Metrics Lab - Understanding Model Performance

**Duration**: 90 minutes
**Format**: Small groups (3-4 students)
**Materials Needed**:
- Laptop with ML environment
- Jupyter Notebook
- Imbalanced dataset (provided in repo)
- Pencil and paper (for manual calculations)
- Whiteboard or large paper for group work

**Learning Objectives**:
- Understand why accuracy alone is insufficient for model evaluation
- Calculate precision, recall, and F1-score manually and programmatically
- Build and interpret confusion matrices
- Plot and understand ROC curves and AUC scores
- Identify when specific metrics matter based on business context
- Make data-driven model selection decisions

---

## Overview

**Scenario**: You've built a model that detects credit card fraud. It's 95% accurate! Ship it, right?

Wrong.

Here's the problem: only 0.5% of transactions are fraudulent. A model that labels every transaction as "not fraud" would be 99.5% accurate—and completely useless.

This is why accuracy is a dangerous metric when used alone. Today, you're going to experience this firsthand. You'll work with an imbalanced medical diagnosis dataset where getting the wrong answer has very different consequences depending on which way you're wrong.

**By the end of this lab, you'll:**
- Know when accuracy lies to you
- Calculate precision, recall, and F1-score by hand (yes, really)
- Understand the precision-recall trade-off viscerally
- Choose evaluation metrics based on business consequences
- Explain ROC curves to non-technical stakeholders

This is where ML becomes engineering: understanding what "better" actually means.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start:**

1. **Pull latest course repo**:
   ```bash
   cd ~/Documents/CSC-114-ML/csc-114-labs
   git checkout main
   git pull origin main
   git checkout -b yourname-module03
   ```

2. **Activate environment**:
   ```bash
   source ml-env/bin/activate  # Mac/Linux
   # ml-env\Scripts\activate  # Windows
   ```

3. **Form groups of 3-4** (instructor assigns)

4. **Assign group roles**:
   - **Calculator**: Does manual math calculations
   - **Coder**: Types in Jupyter
   - **Visualizer**: Draws diagrams/interprets plots
   - **Reporter**: Will share findings with class
   - (In groups of 3, double up roles)

5. **Grab supplies**: Pencil, paper, access to whiteboard

**Instructor Check**: All groups formed? Roles assigned? Let's dive in.

---

## Part 1: The Accuracy Illusion - Manual Calculation (20 minutes)

### Instructions

**You are given a medical screening model** that predicts whether patients have a rare disease (prevalence: 5%).

Your model made predictions on 100 patients. Here's the **confusion matrix**:

```
                Predicted: Negative    Predicted: Positive
Actual: Negative        90                     5
Actual: Positive         3                     2
```

**Step 1: Calculate accuracy by hand (Calculator lead)**

Write the formula:
```
Accuracy = (True Positives + True Negatives) / Total
```

Work it out on paper. What's the accuracy?

**Step 2: Calculate precision, recall, and F1-score by hand**

Write these formulas:
```
Precision = True Positives / (True Positives + False Positives)
Recall = True Positives / (True Positives + False Negatives)
F1-Score = 2 * (Precision * Recall) / (Precision + Recall)
```

Calculator: Work through each calculation. Show your work.

**Step 3: The naive baseline**

What if we built a "model" that just predicts "Negative" for everyone?

Calculator: Build that confusion matrix and calculate its accuracy.

```
                Predicted: Negative    Predicted: Positive
Actual: Negative        95                     0
Actual: Positive         5                     0
```

What's the accuracy? Precision? Recall?

**Step 4: Group discussion (Visualizer leads)**

On whiteboard or paper, draw:
1. A 2x2 confusion matrix with labels (TP, TN, FP, FN)
2. Arrows showing what precision and recall measure
3. Write in plain English what each metric means

**Group Discussion Questions:**
- Which is worse in this scenario: False Positive (tell healthy person they're sick) or False Negative (miss a sick person)?
- If you could only optimize for one metric, which would it be? Why?
- Why does the naive "always negative" model have undefined precision?

### Expected Output

**Manual calculations:**
- Model accuracy: 92%
- Model precision: 2/(2+5) = 28.6%
- Model recall: 2/(2+3) = 40%
- Model F1-score: ~33.3%
- Naive baseline accuracy: 95%
- Naive baseline recall: 0%

**Key insight**: The naive baseline has HIGHER accuracy but is medically useless.

### Common Issues

**Issue**: Confusion about True Positive vs False Positive
- **Fix**: Visualizer should draw this clearly. True Positive = "Said sick, was sick." False Positive = "Said sick, was healthy."

**Issue**: Math doesn't add up
- **Fix**: Double-check the confusion matrix. Rows should sum to actual totals, columns to predicted totals.

**Issue**: "Why can't we just use accuracy?"
- **Fix**: That's exactly the point. Accuracy is blind to class imbalance. This is the lesson.

---

## Part 2: Building Confusion Matrices in Code (25 minutes)

### Instructions

Open Jupyter: `module-03/evaluation_metrics.ipynb`

**Step 1: Load the breast cancer dataset (imbalanced version)**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    confusion_matrix, classification_report,
    roc_curve, roc_auc_score
)

# Load data
data = load_breast_cancer()
X = data.data
y = data.target

# Create artificial imbalance (simulate rare disease)
# Keep all malignant cases (1) but only 20% of benign cases (0)
np.random.seed(42)
malignant_idx = np.where(y == 1)[0]
benign_idx = np.where(y == 0)[0]
sampled_benign = np.random.choice(benign_idx, size=int(len(benign_idx) * 0.2), replace=False)

# Combine indices
keep_idx = np.concatenate([malignant_idx, sampled_benign])
X_imbalanced = X[keep_idx]
y_imbalanced = y[keep_idx]

print(f"Original class distribution: {np.bincount(y)}")
print(f"Imbalanced class distribution: {np.bincount(y_imbalanced)}")
print(f"Positive class (malignant): {(y_imbalanced == 1).sum() / len(y_imbalanced):.1%}")
```

**Step 2: Train a simple model**

```python
# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X_imbalanced, y_imbalanced, test_size=0.3, random_state=42, stratify=y_imbalanced
)

# Train Decision Tree
model = DecisionTreeClassifier(max_depth=5, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

print("Model trained successfully!")
```

**Step 3: Calculate all metrics**

```python
# Calculate metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print("="*50)
print("MODEL PERFORMANCE METRICS")
print("="*50)
print(f"Accuracy:  {accuracy:.2%}")
print(f"Precision: {precision:.2%}")
print(f"Recall:    {recall:.2%}")
print(f"F1-Score:  {f1:.2%}")
print("="*50)
```

**Step 4: Build and visualize confusion matrix**

```python
# Create confusion matrix
cm = confusion_matrix(y_test, y_pred)

# Plot
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False,
            xticklabels=['Benign (0)', 'Malignant (1)'],
            yticklabels=['Benign (0)', 'Malignant (1)'],
            annot_kws={"size": 16})
plt.xlabel('Predicted Label', fontsize=12)
plt.ylabel('True Label', fontsize=12)
plt.title('Confusion Matrix - Breast Cancer Detection', fontsize=14, fontweight='bold')

# Add text annotations for TP, TN, FP, FN
plt.text(0.5, 0.25, 'TN', ha='center', va='center', fontsize=10, color='gray')
plt.text(1.5, 0.25, 'FP', ha='center', va='center', fontsize=10, color='gray')
plt.text(0.5, 1.25, 'FN', ha='center', va='center', fontsize=10, color='gray')
plt.text(1.5, 1.25, 'TP', ha='center', va='center', fontsize=10, color='gray')

plt.tight_layout()
plt.show()

# Extract values for discussion
tn, fp, fn, tp = cm.ravel()
print(f"\nTrue Negatives:  {tn}")
print(f"False Positives: {fp}")
print(f"False Negatives: {fn}")
print(f"True Positives:  {tp}")
```

**Step 5: Use classification report**

```python
# Detailed report
report = classification_report(y_test, y_pred,
                               target_names=['Benign', 'Malignant'],
                               digits=3)
print("\nDETAILED CLASSIFICATION REPORT:")
print(report)
```

**Group Discussion (Reporter prepares notes):**
- What do the False Positives represent in medical terms?
- What do the False Negatives represent?
- Which is more costly in this scenario?
- How would you explain precision vs recall to a doctor?

### Expected Output

- Imbalanced dataset created (roughly 70-30 split)
- Model trained with accuracy around 85-95%
- Confusion matrix heatmap shows all four quadrants clearly labeled
- Classification report shows per-class precision and recall
- Clear understanding of TP, TN, FP, FN in context

### Common Issues

**Issue**: Confusion matrix looks weird (diagonal is wrong)
- **Fix**: Check that you didn't swap `y_test` and `y_pred` arguments.

**Issue**: Precision/recall are both 1.0
- **Fix**: Model might be too good on this split. That's okay—use it to discuss overfitting.

**Issue**: Heatmap colors make it hard to read
- **Fix**: Try `cmap='YlOrRd'` or `cmap='RdPu'` for better contrast.

---

## Part 3: ROC Curves and the Precision-Recall Trade-off (25 minutes)

### Instructions

**Step 1: Understand probability predictions**

```python
# Get probability predictions (not just 0/1 labels)
y_proba = model.predict_proba(X_test)[:, 1]  # Probability of positive class

# Show first 10 examples
comparison = pd.DataFrame({
    'True Label': y_test[:10],
    'Predicted Label': y_pred[:10],
    'Probability (Malignant)': y_proba[:10]
})

print("Sample Predictions:")
print(comparison)
print("\nNote: Default threshold is 0.5")
```

**Step 2: Visualize different thresholds**

```python
# Test different thresholds
thresholds = [0.3, 0.5, 0.7, 0.9]
results = []

for threshold in thresholds:
    # Make predictions with custom threshold
    y_pred_thresh = (y_proba >= threshold).astype(int)

    # Calculate metrics
    precision = precision_score(y_test, y_pred_thresh)
    recall = recall_score(y_test, y_pred_thresh)
    f1 = f1_score(y_test, y_pred_thresh)

    results.append({
        'Threshold': threshold,
        'Precision': precision,
        'Recall': recall,
        'F1-Score': f1
    })

results_df = pd.DataFrame(results)
print("\nTHRESHOLD IMPACT ON METRICS:")
print(results_df.to_string(index=False))
```

**Step 3: Plot threshold trade-off**

```python
# Visualize precision-recall trade-off
fig, ax = plt.subplots(figsize=(10, 6))

ax.plot(results_df['Threshold'], results_df['Precision'],
        marker='o', linewidth=2, label='Precision', color='blue')
ax.plot(results_df['Threshold'], results_df['Recall'],
        marker='s', linewidth=2, label='Recall', color='red')
ax.plot(results_df['Threshold'], results_df['F1-Score'],
        marker='^', linewidth=2, label='F1-Score', color='green')

ax.set_xlabel('Classification Threshold', fontsize=12)
ax.set_ylabel('Score', fontsize=12)
ax.set_title('Precision-Recall Trade-off vs. Threshold', fontsize=14, fontweight='bold')
ax.legend()
ax.grid(alpha=0.3)
ax.set_ylim([0, 1.05])

plt.tight_layout()
plt.show()
```

**Step 4: Plot ROC curve**

```python
# Calculate ROC curve
fpr, tpr, roc_thresholds = roc_curve(y_test, y_proba)
auc_score = roc_auc_score(y_test, y_proba)

# Plot ROC
fig, ax = plt.subplots(figsize=(8, 8))

# Plot ROC curve
ax.plot(fpr, tpr, linewidth=3, label=f'Model (AUC = {auc_score:.3f})', color='darkblue')

# Plot diagonal (random classifier)
ax.plot([0, 1], [0, 1], 'k--', linewidth=2, label='Random Classifier (AUC = 0.5)')

# Formatting
ax.set_xlabel('False Positive Rate', fontsize=12)
ax.set_ylabel('True Positive Rate (Recall)', fontsize=12)
ax.set_title('ROC Curve - Breast Cancer Detection', fontsize=14, fontweight='bold')
ax.legend(loc='lower right')
ax.grid(alpha=0.3)
ax.set_xlim([0, 1])
ax.set_ylim([0, 1])

plt.tight_layout()
plt.show()

print(f"\nArea Under Curve (AUC): {auc_score:.3f}")
print("Interpretation:")
print(f"  AUC = {auc_score:.3f} means the model has a {auc_score:.1%} chance")
print("  of ranking a random positive example higher than a random negative example.")
```

**Step 5: Group analysis (Visualizer leads)**

On whiteboard, draw:
1. ROC curve showing what "random" looks like vs. "perfect"
2. Mark where your model falls
3. Label axes in plain English (not just FPR/TPR)

**Group Discussion:**
- As threshold decreases (0.9 → 0.3), what happens to precision? Recall?
- Why is there a trade-off? Why can't both be 1.0?
- What threshold would you choose for cancer detection? Why?
- When would you want a threshold of 0.9? When 0.3?

### Expected Output

- Threshold table showing inverse relationship between precision and recall
- Trade-off plot clearly shows crossing lines
- ROC curve shows model significantly above diagonal
- AUC score between 0.85-0.98
- Group can explain the precision-recall trade-off in plain language

### Common Issues

**Issue**: All thresholds give same result
- **Fix**: Check that you're using `y_proba` (probabilities) not `y_pred` (labels).

**Issue**: ROC curve is a straight diagonal line
- **Fix**: You might be passing labels instead of probabilities to `roc_curve()`.

**Issue**: AUC is exactly 0.5
- **Fix**: Model isn't better than random. Check that model was actually trained.

---

## Part 4: Real-World Scenario Analysis (15 minutes)

### Instructions

**You are ML engineers consulting for different clients.** Each scenario has different priorities.

**Step 1: Read scenarios (whole group)**

**Scenario A: Spam Email Filter**
- False Positive = Important email goes to spam (user misses it)
- False Negative = Spam reaches inbox (minor annoyance)
- **Question**: Optimize for precision or recall?

**Scenario B: Airport Security Screening**
- False Positive = Innocent person flagged for additional screening (inconvenience)
- False Negative = Dangerous person gets through (catastrophic)
- **Question**: Optimize for precision or recall?

**Scenario C: Product Recommendation Engine**
- False Positive = Recommend product user doesn't want (ignore it)
- False Negative = Miss a product user would love (lost sale)
- **Question**: Optimize for precision or recall? Or balance?

**Scenario D: Loan Approval System**
- False Positive = Approve risky borrower who defaults (lose money)
- False Negative = Deny creditworthy borrower (miss opportunity, potential bias)
- **Question**: Optimize for precision or recall? What about fairness?

**Step 2: Group decides for each scenario**

Reporter: Fill out this table on whiteboard:

| Scenario | Optimize For | Threshold | Reasoning |
|----------|--------------|-----------|-----------|
| Spam     |              |           |           |
| Security |              |           |           |
| Recommendations |       |           |           |
| Loan Approval |         |           |           |

**Step 3: Code one scenario**

Pick one scenario and implement the threshold choice:

```python
# Example: Airport Security (optimize for recall)
security_threshold = 0.3  # Low threshold = high recall

y_pred_security = (y_proba >= security_threshold).astype(int)

precision_sec = precision_score(y_test, y_pred_security)
recall_sec = recall_score(y_test, y_pred_security)

print(f"Airport Security System:")
print(f"  Threshold: {security_threshold}")
print(f"  Precision: {precision_sec:.2%} (% of flagged passengers who are actually threats)")
print(f"  Recall:    {recall_sec:.2%} (% of actual threats we catch)")
print(f"\nTrade-off: We flag more innocent people, but we catch more threats.")
```

### Expected Output

- Table filled with thoughtful reasoning for each scenario
- Understanding that "optimal" metric depends on business context
- Code demonstrating how to implement a chosen threshold
- Group can articulate the trade-offs to Reporter for class share-out

---

## Part 5: Class Share-Out and Reflection (10 minutes)

### Instructions

**Reporters from each group share** (2 minutes each):
1. Which scenario did your group find hardest to decide?
2. What threshold did you choose and why?
3. One "aha moment" from your group's discussion

**Instructor facilitates discussion**:
- Did any groups disagree on the loan scenario? (This should spark debate)
- How do fairness and ethics factor into metric choice?
- What happens when precision and recall are both critical (e.g., medical diagnosis)?

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. The Accuracy Trap**: You've now seen accuracy lie to you multiple times. When IS accuracy a good metric? When is it dangerous?

**2. Stakeholder Communication**: You're presenting to executives who don't know what "precision" means. How do you explain the precision-recall trade-off using business language?

**3. Ethical Implications**: The loan approval scenario has real fairness concerns. If your model has 95% recall but low precision, certain demographics might be unfairly denied. How do you balance performance with fairness?

**4. PM Integration**: Your PM asks, "Is the model good enough to ship?" What questions do you ask before answering? What metrics do you show them?

### Exit Ticket

**Submit via Canvas**:

```
1. In your own words, what's the difference between precision and recall?

2. Give a real-world example where you'd optimize for:
   - High precision: _____
   - High recall: _____
   - Balanced F1: _____

3. Why is ROC AUC useful as a single metric?

4. On a scale of 1-5, how confident are you with:
   - Reading confusion matrices: ___
   - Explaining precision vs recall: ___
   - Choosing metrics for business problems: ___

5. What's one thing you'll do differently when evaluating models now?
```

---

## Extension Challenges (Optional)

### Challenge 1: Precision-Recall Curve
Plot the precision-recall curve (alternative to ROC):
```python
from sklearn.metrics import precision_recall_curve, average_precision_score

precision_vals, recall_vals, pr_thresholds = precision_recall_curve(y_test, y_proba)
avg_precision = average_precision_score(y_test, y_proba)

plt.plot(recall_vals, precision_vals, linewidth=2, label=f'AP = {avg_precision:.3f}')
plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curve')
plt.legend()
plt.grid(alpha=0.3)
plt.show()
```

### Challenge 2: Cost-Sensitive Learning
Assign costs to FP and FN, then find optimal threshold:
```python
# Costs (in dollars)
cost_fp = 10    # Cost of false positive
cost_fn = 1000  # Cost of false negative (missing cancer)

# Calculate total cost for each threshold
costs = []
for threshold in np.linspace(0.1, 0.9, 50):
    y_pred_thresh = (y_proba >= threshold).astype(int)
    cm = confusion_matrix(y_test, y_pred_thresh)
    tn, fp, fn, tp = cm.ravel()

    total_cost = (fp * cost_fp) + (fn * cost_fn)
    costs.append({'Threshold': threshold, 'Total Cost': total_cost})

costs_df = pd.DataFrame(costs)
optimal_threshold = costs_df.loc[costs_df['Total Cost'].idxmin(), 'Threshold']

print(f"Optimal threshold: {optimal_threshold:.2f}")
```

### Challenge 3: Multi-Class Metrics
Extend to 3-class problem:
```python
from sklearn.datasets import load_iris
from sklearn.metrics import confusion_matrix

iris = load_iris()
# Train model on iris (3 classes)
# Plot multi-class confusion matrix
# Calculate precision/recall for each class
```

### Challenge 4: Class Imbalance Solutions
Try these techniques:
```python
from imblearn.over_sampling import SMOTE
from sklearn.utils.class_weight import compute_class_weight

# SMOTE (Synthetic Minority Over-sampling)
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

# Or use class weights
class_weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_train)
model_weighted = DecisionTreeClassifier(class_weight={0: class_weights[0], 1: class_weights[1]})
```

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Pre-activity, group formation, role assignment
- **10-30 min**: Manual calculation exercise (Part 1)
- **30-55 min**: Confusion matrices in code (Part 2)
- **55-80 min**: ROC curves and thresholds (Part 3)
- **80-95 min**: Real-world scenario analysis (Part 4)
- **95-105 min**: Class share-out and reflection (Part 5)

### Common Struggles

**"I don't get the difference between precision and recall"**: This is the core struggle. Don't explain with formulas—use concrete examples. "Precision: Of all the patients we said have cancer, what % actually do? Recall: Of all patients who actually have cancer, what % did we catch?"

**Manual calculation resistance**: Students will want to skip to code. Don't let them. The manual calculation builds intuition that copy-pasting sklearn functions doesn't.

**Threshold confusion**: Many students think 0.5 is sacred. Break this belief. Show dramatically different thresholds (0.2, 0.8) and their consequences.

**ROC curve interpretation**: "Higher is better" is too simplistic. Students need to connect AUC to the probability interpretation. Use gambling analogies: "If I bet $1 that this model can rank patients correctly, AUC is my expected return."

### Success Indicators

Students are on track if they:
- ✅ Can explain precision vs recall without looking at formulas
- ✅ Correctly identify when to optimize for each metric in scenarios
- ✅ Understand that threshold choice is a business decision, not a technical one
- ✅ Can read a confusion matrix and extract TP/TN/FP/FN
- ✅ Articulate why accuracy fails on imbalanced datasets

Students are struggling if they:
- ❌ Still think accuracy is the "main" metric
- ❌ Can't explain what False Positive means in context
- ❌ Think there's always one "correct" metric to use
- ❌ Can't connect metrics to business consequences

### Materials to Prepare

**Before class:**
- [ ] Print role cards for groups (Calculator, Coder, Visualizer, Reporter)
- [ ] Prepare manual calculation handout with confusion matrix template
- [ ] Have extra pencils/paper available
- [ ] Test imbalanced dataset code (some sklearn versions handle this differently)
- [ ] Prepare real-world scenario cards (one per group)
- [ ] Print ROC curve interpretation guide as reference
- [ ] Have whiteboard markers ready for group work

**During class:**
- [ ] Write confusion matrix template on board before class
- [ ] Circulate during manual calculations - catch formula errors early
- [ ] Listen to group discussions during scenarios - note interesting debates
- [ ] Take photos of whiteboard analyses (with permission)
- [ ] Identify groups with strong ROC curve explanations for share-out
- [ ] Monitor time closely - this lab can easily run long

**After class:**
- [ ] Review exit tickets for common misconceptions
- [ ] Note which scenarios generated most debate (use for future discussions)
- [ ] Check if any groups had all metrics at 100% (overfitting? too easy split?)
- [ ] Collect real-world examples students found compelling
- [ ] Identify students who struggled with ROC curves (offer office hours)

### Teaching Philosophy Notes

**Metrics are not math—they're values**. The formula for precision is simple. The hard part is deciding whether precision matters more than recall. That's a human judgment about costs, risks, and priorities. This lab should feel more like ethics class than math class.

**Manual calculation is sacred**. Yes, sklearn does it instantly. But students who calculate precision by hand, who write out TP/(TP+FP) and see what it means, develop intuition. Students who only call `precision_score()` are just cargo-culting.

**The threshold revelation is beautiful**. Watch students' faces when they see that changing the threshold from 0.5 to 0.3 doubles recall but tanks precision. That's when it clicks: the model's predictions are probabilistic, and we choose where to draw the line. That choice has consequences.

**Group roles matter**. The Calculator who does manual math, the Coder who implements it, the Visualizer who draws it, and the Reporter who explains it—each sees the concept from a different angle. Rotate roles in future labs, but for this one, let students specialize and teach each other.

**The loan scenario should make students uncomfortable**. Good. ML fairness is uncomfortable. If groups are breezing through it without debate, intervene: "What if I told you that 80% of loan denials (false negatives) are from one demographic group?" Let them sit with that.

---

**Commit Message Template**:

```
Complete Module 03 Evaluation Metrics Lab

- Calculated precision, recall, F1 manually on imbalanced dataset
- Built confusion matrices and classification reports for medical diagnosis scenario
- Plotted ROC curves (AUC: 0.94) and explored precision-recall trade-offs
- Analyzed threshold impact on metrics across multiple business scenarios
- Identified optimal thresholds for spam filtering (0.7) and security screening (0.3)
```
