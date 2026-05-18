# Module 2 Activity: Algorithm Comparison Workshop - Classification Deep Dive

**Duration**: 60 minutes
**Format**: Pairs (assigned by instructor)
**Materials Needed**:
- Laptop with ML environment from Module 1
- Jupyter Notebook
- Course GitHub repository (updated)
- Starter code template (provided)

**Learning Objectives**:
- Compare multiple classification algorithms on the same dataset
- Understand how different algorithms create different decision boundaries
- Identify trade-offs between model complexity and performance
- Develop intuition for algorithm selection
- Practice pair programming with Git collaboration

---

## Overview

Not all algorithms are created equal. In Module 1, you used a Decision Tree and got great accuracy on Iris. But what if you'd used K-Nearest Neighbors? Or a Support Vector Machine? Would the results be better? Worse? The same?

Today, you'll run a "bake-off" between 5 different classification algorithms using the Wine Quality dataset. You'll see how they perform differently on the exact same data, observe their decision boundaries, and discuss when you'd use each one.

This is how real ML engineers work: try multiple approaches, compare systematically, choose based on evidence—not guesses.

**By the end of this workshop, you'll understand:**
- How to train and compare 5+ algorithms in under 50 lines of code
- Why accuracy isn't the only metric that matters
- What "decision boundaries" look like for different algorithms
- How to explain trade-offs to non-technical stakeholders

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Pull latest course repo**:
   ```bash
   cd ~/Documents/CSC-114-ML/csc-114-labs
   git checkout main
   git pull origin main
   git checkout -b yourname-module02
   ```

2. **Activate your virtual environment**:
   ```bash
   source ml-env/bin/activate  # Mac/Linux
   # or
   ml-env\Scripts\activate  # Windows
   ```

3. **Install one new library** (for visualization):
   ```bash
   pip install seaborn
   ```

4. **Find your pair programming partner** (instructor will assign)

5. **Decide roles**:
   - **Driver**: Types the code, shares screen
   - **Navigator**: Reads instructions, catches errors, asks questions
   - You'll switch roles halfway through (instructor will signal)

**Instructor Check**: Everyone paired up? Environments activated? Let's go.

---

## Part 1: Load and Explore the Wine Quality Dataset (10 minutes)

### Instructions

Open Jupyter and create a new notebook: `module-02/algorithm_comparison.ipynb`

**Step 1: Import the toolkit**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# The 5 algorithms we'll compare
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier

import warnings
warnings.filterwarnings('ignore')  # Clean up output

print("Libraries loaded successfully!")
```

**Step 2: Load the Wine dataset**

```python
# Load wine quality dataset
wine = load_wine()
X = wine.data
y = wine.target

# Create DataFrame for exploration
df = pd.DataFrame(X, columns=wine.feature_names)
df['wine_class'] = y

print(f"Dataset shape: {X.shape}")
print(f"Number of features: {X.shape[1]}")
print(f"Number of samples: {X.shape[0]}")
print(f"Classes: {wine.target_names}")
print("\nClass distribution:")
print(df['wine_class'].value_counts())
```

**Step 3: Quick data exploration**

```python
# Show first few rows
print("First 5 samples:")
print(df.head())

# Basic statistics
print("\nFeature statistics:")
print(df.describe())

# Check for missing values
print(f"\nMissing values: {df.isnull().sum().sum()}")
```

**Step 4: Visualize feature distributions**

```python
# Pick 4 interesting features to visualize
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
features_to_plot = ['alcohol', 'malic_acid', 'color_intensity', 'proline']

for idx, feature in enumerate(features_to_plot):
    ax = axes[idx // 2, idx % 2]
    for wine_class in range(3):
        data = df[df['wine_class'] == wine_class][feature]
        ax.hist(data, alpha=0.5, label=wine.target_names[wine_class], bins=20)
    ax.set_xlabel(feature)
    ax.set_ylabel('Frequency')
    ax.legend()
    ax.set_title(f'Distribution of {feature}')

plt.tight_layout()
plt.show()
```

**Navigator's Questions (discuss with your partner):**
- Are the wine classes balanced (similar number of samples)?
- Do any features look like they'd be really good at separating the classes?
- Are there any missing values we need to worry about?

### Expected Output

- Dataset loads successfully (178 samples, 13 features, 3 classes)
- No missing values
- Histograms show different distributions for different wine classes
- Some features clearly separate classes better than others

### Common Issues

**Issue**: `seaborn` not found
- **Fix**: Virtual environment not activated, or you forgot to `pip install seaborn`

**Issue**: Plots don't show
- **Fix**: Add `%matplotlib inline` at the top of your notebook

---

## Part 2: Prepare Data and Build 5 Models (20 minutes)

### Instructions

**Step 1: Split and scale the data**

```python
# Split data: 80% train, 20% test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features (important for KNN and SVM!)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")
```

**Why scaling matters**: Some algorithms (like KNN and SVM) are sensitive to feature scales. If one feature ranges from 0-1 and another from 0-1000, the algorithm will think the second feature is more important—even if it's not.

**Step 2: Create a dictionary of models**

```python
# Define all models we'll compare
models = {
    'Decision Tree': DecisionTreeClassifier(max_depth=5, random_state=42),
    'K-Nearest Neighbors': KNeighborsClassifier(n_neighbors=5),
    'Naive Bayes': GaussianNB(),
    'Support Vector Machine': SVC(kernel='rbf', random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42)
}

print("Models ready to train:")
for name in models.keys():
    print(f"  - {name}")
```

**Step 3: Train all models and collect results**

```python
results = {}

for name, model in models.items():
    print(f"\nTraining {name}...")

    # Train the model
    model.fit(X_train_scaled, y_train)

    # Make predictions
    y_pred = model.predict(X_test_scaled)

    # Calculate accuracy
    accuracy = accuracy_score(y_test, y_pred)

    # Store results
    results[name] = {
        'model': model,
        'accuracy': accuracy,
        'predictions': y_pred
    }

    print(f"  ✓ {name} trained - Accuracy: {accuracy:.2%}")

print("\n" + "="*50)
print("TRAINING COMPLETE!")
print("="*50)
```

**Step 4: Compare results visually**

```python
# Create bar chart of accuracies
accuracies = [results[name]['accuracy'] for name in models.keys()]
model_names = list(models.keys())

plt.figure(figsize=(10, 6))
bars = plt.bar(model_names, accuracies, color=['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'])
plt.xlabel('Algorithm')
plt.ylabel('Accuracy')
plt.title('Algorithm Comparison - Wine Quality Classification')
plt.ylim([0.5, 1.0])
plt.xticks(rotation=45, ha='right')

# Add accuracy labels on bars
for i, (bar, acc) in enumerate(zip(bars, accuracies)):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.01,
             f'{acc:.1%}', ha='center', va='bottom', fontweight='bold')

plt.tight_layout()
plt.show()
```

**Step 5: Show confusion matrices for top 2 models**

```python
# Find top 2 models by accuracy
sorted_models = sorted(results.items(), key=lambda x: x[1]['accuracy'], reverse=True)
top_2 = sorted_models[:2]

fig, axes = plt.subplots(1, 2, figsize=(12, 4))

for idx, (name, result) in enumerate(top_2):
    ax = axes[idx]
    cm = confusion_matrix(y_test, result['predictions'])

    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=ax,
                xticklabels=wine.target_names, yticklabels=wine.target_names)
    ax.set_xlabel('Predicted')
    ax.set_ylabel('Actual')
    ax.set_title(f'{name}\nAccuracy: {result["accuracy"]:.2%}')

plt.tight_layout()
plt.show()
```

**Navigator's Questions (discuss):**
- Which algorithm performed best? Worst?
- Are the accuracy differences large or small?
- Looking at confusion matrices, do any models misclassify certain classes more than others?

### Expected Output

- All 5 models train successfully
- Accuracies between 85-100% (this is a relatively easy dataset)
- Bar chart clearly shows performance differences
- Confusion matrices reveal where models make mistakes

### Common Issues

**Issue**: `SVC` takes forever to train
- **Fix**: This is normal if dataset were larger. On Wine dataset should be <5 seconds. If stuck, interrupt kernel and continue.

**Issue**: All accuracies are exactly the same (like 33%)
- **Fix**: Models didn't train properly. Check that you used `X_train_scaled` not `X_train`.

**Issue**: Confusion matrix error: "x and y must be the same size"
- **Fix**: Check that you're passing `y_test` and `result['predictions']`, not the model object itself.

---

## ** SWITCH ROLES NOW ** (Navigator becomes Driver, Driver becomes Navigator)

---

## Part 3: Deep Dive - Understanding Decision Boundaries (15 minutes)

### Instructions

Decision boundaries are where an algorithm "draws the line" between classes. Let's visualize them for our top 3 models using just 2 features (so we can plot in 2D).

**Step 1: Prepare 2D visualization**

```python
# Use just 2 features for visualization: alcohol and color_intensity
feature_1 = 0  # alcohol
feature_2 = 9  # color_intensity

X_2d = X[:, [feature_1, feature_2]]
X_train_2d, X_test_2d, y_train_2d, y_test_2d = train_test_split(
    X_2d, y, test_size=0.2, random_state=42, stratify=y
)

# Scale 2D data
scaler_2d = StandardScaler()
X_train_2d_scaled = scaler_2d.fit_transform(X_train_2d)
X_test_2d_scaled = scaler_2d.transform(X_test_2d)

print(f"2D dataset shape: {X_2d.shape}")
print(f"Using features: {wine.feature_names[feature_1]} and {wine.feature_names[feature_2]}")
```

**Step 2: Function to plot decision boundaries**

```python
def plot_decision_boundary(model, X, y, title, ax):
    """Plot decision boundary for a 2D classification model"""
    # Create mesh grid
    h = 0.02  # step size
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))

    # Predict on mesh grid
    Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
    Z = Z.reshape(xx.shape)

    # Plot boundary
    ax.contourf(xx, yy, Z, alpha=0.3, cmap='viridis')

    # Plot training points
    scatter = ax.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis',
                        edgecolor='black', s=50, alpha=0.8)

    ax.set_xlabel(wine.feature_names[feature_1])
    ax.set_ylabel(wine.feature_names[feature_2])
    ax.set_title(title)

    return scatter
```

**Step 3: Train 3 models on 2D data and visualize**

```python
# Pick 3 different algorithms
models_2d = {
    'Decision Tree': DecisionTreeClassifier(max_depth=3, random_state=42),
    'K-Nearest Neighbors': KNeighborsClassifier(n_neighbors=5),
    'Support Vector Machine': SVC(kernel='rbf', random_state=42)
}

fig, axes = plt.subplots(1, 3, figsize=(16, 5))

for idx, (name, model) in enumerate(models_2d.items()):
    # Train on 2D scaled data
    model.fit(X_train_2d_scaled, y_train_2d)

    # Calculate accuracy
    acc = accuracy_score(y_test_2d, model.predict(X_test_2d_scaled))

    # Plot decision boundary
    plot_decision_boundary(model, X_train_2d_scaled, y_train_2d,
                          f'{name}\nAccuracy: {acc:.1%}', axes[idx])

plt.tight_layout()
plt.show()
```

**Navigator's Questions (discuss):**
- How do the decision boundaries differ between algorithms?
- Which boundary looks "smoothest"? Which looks most "jagged"?
- Can you see any points that are clearly misclassified?
- If you had to explain these differences to a non-technical manager, how would you describe them?

### Expected Output

- Three side-by-side plots showing different decision boundaries
- Decision Tree: angular, blocky boundaries
- KNN: smooth, rounded boundaries
- SVM: curved boundaries following support vectors
- Color regions show predicted classes, dots show actual training data

### Common Issues

**Issue**: Mesh grid plotting is slow
- **Fix**: Normal—it's predicting thousands of points. Be patient (30-60 seconds).

**Issue**: Decision boundary plot is all one color
- **Fix**: Model didn't train. Check that you called `model.fit()` before plotting.

**Issue**: Can't see the dots (data points)
- **Fix**: They might be hidden behind the contour. Adjust `alpha` values or check z-order.

---

## Part 4: Comparative Analysis and Trade-offs (10 minutes)

### Instructions

**Step 1: Create a comparison table**

```python
# Build comprehensive comparison table
comparison_df = pd.DataFrame({
    'Algorithm': list(models.keys()),
    'Accuracy': [results[name]['accuracy'] for name in models.keys()],
})

# Add training time (you'd measure this with time.time() in production)
# For now, we'll add conceptual complexity
complexity = {
    'Decision Tree': 'Low',
    'K-Nearest Neighbors': 'Low (but slow predictions)',
    'Naive Bayes': 'Very Low',
    'Support Vector Machine': 'Medium-High',
    'Random Forest': 'Medium'
}

interpretability = {
    'Decision Tree': 'High - Can visualize tree',
    'K-Nearest Neighbors': 'Medium - "Similar to neighbors"',
    'Naive Bayes': 'Medium - Probability based',
    'Support Vector Machine': 'Low - Black box',
    'Random Forest': 'Low - Ensemble of trees'
}

comparison_df['Complexity'] = comparison_df['Algorithm'].map(complexity)
comparison_df['Interpretability'] = comparison_df['Algorithm'].map(interpretability)

# Sort by accuracy
comparison_df = comparison_df.sort_values('Accuracy', ascending=False).reset_index(drop=True)

print("="*80)
print("ALGORITHM COMPARISON SUMMARY")
print("="*80)
print(comparison_df.to_string(index=False))
print("="*80)
```

**Step 2: Reflection discussion (with your partner)**

Answer these questions together (write notes in a markdown cell):

1. **If accuracy is all that matters, which algorithm wins?**

2. **What if you need to explain your model's decisions to a lawyer in a courtroom? Which algorithm would you choose?**

3. **What if you're deploying on a smartphone with limited computing power? Which algorithm might be best?**

4. **What if you have 10 million samples instead of 178? Which algorithms would you avoid?**

5. **Based on the decision boundaries, which algorithm is most likely to overfit? Why?**

### Expected Output

- Comprehensive comparison table showing accuracy, complexity, and interpretability
- Written reflection answers in markdown cell
- Understanding that "best" algorithm depends on context

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. The Goldilocks Problem**: Decision Trees are interpretable but can overfit. SVMs are accurate but hard to explain. How do you choose when there's no "perfect" algorithm?

**2. Real-world Constraints**: In this lab, we only cared about accuracy. What other factors matter in production ML systems? (Think: speed, memory, cost, bias, explainability...)

**3. PM Integration**: You're in Sprint Planning. Your PM asks, "How long will it take to build the ML model?" You just saw that training 5 models took 10 minutes. But what's the full story? What other time costs exist?

**4. The Baseline Trap**: All our models got 85%+ accuracy. Is that good? How would you know? What's your baseline for comparison?

### Exit Ticket

**Submit via Canvas**:

```
1. Rank the 5 algorithms from "most interpretable" to "least interpretable"

2. If you had to explain decision boundaries to your non-technical roommate,
   what analogy would you use?

3. Which algorithm surprised you (performed better or worse than expected)?

4. On a scale of 1-5, how comfortable are you with:
   - Training multiple models: ___
   - Comparing model performance: ___
   - Explaining trade-offs: ___

5. One question you still have about algorithm selection:
```

---

## Extension Challenges (Optional)

### Challenge 1: Add More Algorithms
Try these additional classifiers:
```python
from sklearn.linear_model import LogisticRegression
from sklearn.neural_network import MLPClassifier

models['Logistic Regression'] = LogisticRegression(max_iter=1000)
models['Neural Network'] = MLPClassifier(hidden_layer_sizes=(10, 10), max_iter=1000, random_state=42)
```

How do they compare?

### Challenge 2: Cross-Validation
Instead of a single train-test split, use cross-validation:
```python
from sklearn.model_selection import cross_val_score

for name, model in models.items():
    scores = cross_val_score(model, X_train_scaled, y_train, cv=5)
    print(f"{name}: {scores.mean():.2%} (+/- {scores.std():.2%})")
```

Do the rankings change?

### Challenge 3: Hyperparameter Tuning
Pick one algorithm and tune its hyperparameters:
```python
from sklearn.model_selection import GridSearchCV

param_grid = {'n_neighbors': [3, 5, 7, 9, 11]}
grid_search = GridSearchCV(KNeighborsClassifier(), param_grid, cv=5)
grid_search.fit(X_train_scaled, y_train)
print(f"Best k: {grid_search.best_params_}")
print(f"Best accuracy: {grid_search.best_score_:.2%}")
```

### Challenge 4: Feature Importance
For Decision Tree and Random Forest, plot feature importance:
```python
importances = results['Random Forest']['model'].feature_importances_
indices = np.argsort(importances)[::-1]

plt.figure(figsize=(10, 6))
plt.bar(range(len(importances)), importances[indices])
plt.xticks(range(len(importances)), [wine.feature_names[i] for i in indices], rotation=45, ha='right')
plt.title('Feature Importance - Random Forest')
plt.tight_layout()
plt.show()
```

Which features matter most?

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Pre-activity setup, pair assignments, role clarification
- **5-15 min**: Data loading and exploration
- **15-35 min**: Training 5 models and comparison (Driver 1)
- **35 min**: ROLE SWITCH (announce loudly)
- **35-50 min**: Decision boundary visualization (Driver 2)
- **50-55 min**: Trade-offs discussion
- **55-60 min**: Wrap-up and exit ticket

### Common Struggles

**Pair programming resistance**: Some students will want to work alone. Don't let them. The learning happens in the conversation. Monitor and redirect solo workers.

**Role switching**: Students will forget to switch or resist switching. Set a timer and announce loudly. Make it non-negotiable.

**"Which algorithm is best?" question**: Students want a simple answer. Resist giving one. The whole point is context-dependent trade-offs. Use Socratic method: "Best for what purpose?"

**Scaling confusion**: Many students will forget to scale data and get terrible results from KNN/SVM. Great teaching moment: show before/after scaling results side-by-side.

### Success Indicators

Students are on track if they:
- ✅ Successfully train all 5 models without errors
- ✅ Can articulate why SVM/KNN need scaling but Decision Tree doesn't
- ✅ Produce clear visualizations (bar chart, confusion matrices, decision boundaries)
- ✅ Engage in trade-off discussions (not just "which is best?")
- ✅ Switch roles midway and both partners contribute

Students are struggling if they:
- ❌ Can't explain what "decision boundary" means
- ❌ Think accuracy is the only metric that matters
- ❌ One partner dominates, other is passive
- ❌ Skip the discussion questions (just want to code)

### Materials to Prepare

**Before class:**
- [ ] Assign pairs (try to mix skill levels, not best-with-best)
- [ ] Test starter code on your machine (edge cases?)
- [ ] Prepare "algorithm trade-offs" reference sheet
- [ ] Have backup dataset ready (Digits dataset) if Wine doesn't load
- [ ] Print role cards: "Driver" and "Navigator" to hand out
- [ ] Queue up decision boundary videos/animations for visual learners

**During class:**
- [ ] Write pair assignments on board before class starts
- [ ] Set visible timer for role switch (phone alarm, projected timer)
- [ ] Circulate during Part 2 - catch students not scaling data
- [ ] Listen to pair discussions - intervene if one partner dominates
- [ ] Take photos of students' decision boundary plots (with permission) for future examples

**After class:**
- [ ] Check pushed notebooks - verify both partners contributed (commit history)
- [ ] Note which algorithms students found most confusing
- [ ] Collect decision boundary plots for next class comparison gallery
- [ ] Identify pairs that worked well vs. pairs that struggled (inform future pairing)

### Teaching Philosophy Notes

**Pair programming is a skill**. Many students have never done it. They'll default to "one person codes while other watches." Coach them: Navigator should have the instructions open, asking "what are we trying to do next?" Driver should narrate: "I'm importing sklearn.svm because we need the SVC class."

**The goal isn't to find the "best" algorithm**—it's to develop judgment. In the real world, you rarely have perfect information. You have constraints: time, explainability requirements, computing budget, team expertise. This lab plants the seed: algorithm selection is an engineering decision, not a mathematical proof.

**Decision boundaries are magic** for visual learners. Seeing the KNN boundary curve smoothly while the Decision Tree creates rectangles—that's when it clicks. But this only works if students actually look at the plots. Pause. Ask: "What do you notice about how these boundaries differ?" Don't move on until someone articulates it.

**Extension challenges are bait**. You're fishing for the students who think beyond the assignment. When someone stays after class to ask about cross-validation, you've found your TA for next semester. Encourage this curiosity loudly—other students need to see it's valued.

---

**Commit Message Template** (for students):

```
Complete Module 02 Algorithm Comparison Workshop

- Trained 5 classification algorithms on Wine Quality dataset
- Compared accuracy, complexity, and interpretability trade-offs
- Visualized decision boundaries for DT, KNN, and SVM
- Collaborated using pair programming workflow
- Random Forest achieved highest accuracy (97.2%)
```
