# Week 1 Assignment: "ML Environment Setup & First Model"
## CSC-114 AI I - Building Your Machine Learning Foundation

**Due**: End of Week 1 (Friday, 11:59 PM)
**Points**: 25 (25% of Module 1 grade)
**Submission**: Via GitHub repository + Jupyter notebook

---

## ASSIGNMENT OVERVIEW

Welcome to CSC-114! You're moving from AI fundamentals (CSC-113) to hands-on machine learning implementation. This assignment establishes your ML development environment and guides you through training your first real machine learning model.

**What You're Learning:**
- Setting up Python ML environment (scikit-learn, pandas, numpy)
- Loading and exploring datasets
- Training a simple classifier
- Making predictions with trained models
- Documenting your ML process

**Important**: This uses the same GitHub workflow from CSC-113, but now applied to ML development.

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Configure a working ML development environment
2. Load and explore a dataset using pandas
3. Train a k-Nearest Neighbors (kNN) classifier
4. Evaluate basic model accuracy
5. Document your ML workflow in a Jupyter notebook

---

## PREREQUISITE STEPS

### ✅ Checklist
- [ ] Completed CSC-113 or equivalent GitHub experience
- [ ] GitHub account ready
- [ ] Python 3.8+ installed OR Google Colab account
- [ ] Attended Week 1 live demonstration (or watched recording)

**Choose Your Path:**
- **Path A**: Local Python setup (more control, requires installation)
- **Path B**: Google Colab (zero setup, runs in browser)

---

## PART 1: ENVIRONMENT SETUP

### Option A: Local Python Setup

**Step 1: Install Python** (if not already installed)
- Download Python 3.8+ from python.org
- Verify: Open terminal/command prompt, type `python --version`

**Step 2: Install Required Libraries**
```bash
pip install jupyter scikit-learn pandas numpy matplotlib
```

**Step 3: Launch Jupyter**
```bash
jupyter notebook
```
Browser should open automatically

### Option B: Google Colab (Recommended for Beginners)

**Step 1: Go to Google Colab**
- Visit: https://colab.research.google.com
- Sign in with Google account (use school email if available)

**Step 2: Verify Libraries**
All required libraries pre-installed! Run this in a cell:
```python
import sklearn
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
print("✓ All libraries ready!")
```

---

## PART 2: CREATE YOUR CSC-114 REPOSITORY

Follow the Sacred Flow from CSC-113:

**Step 1: Create Repository**
1. Go to GitHub
2. Create new repository: `csc114-ml-portfolio`
3. Private visibility
4. Add README and Python .gitignore
5. Clone or work via web interface

**Step 2: Create Issue**
```
Title: Week 1 - Set up ML environment and train first model

Description:
Create Jupyter notebook demonstrating:
- Library imports working
- Dataset loaded
- Model trained
- Predictions made
- Documentation complete

Acceptance Criteria:
- [ ] Notebook runs without errors
- [ ] All code cells have comments
- [ ] Model achieves >75% accuracy
- [ ] README updated with notebook description
```

**Step 3: Create Branch**
- Branch name: `week-1-ml-setup`

---

## PART 3: BUILD YOUR FIRST ML MODEL

Create a new Jupyter notebook: `week_01_first_model.ipynb`

### Cell 1: Imports and Setup
```python
# Week 1: My First Machine Learning Model
# CSC-114 AI I - Drew Norris
# [Your Name]
# [Date]

# Import required libraries
import pandas as pd
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

print("✓ All libraries imported successfully!")
```

### Cell 2: Load the Iris Dataset
```python
# Load the famous Iris flower dataset
# This dataset has 150 samples of iris flowers
# with 4 features: sepal length, sepal width, petal length, petal width
# Goal: Predict which of 3 species each flower is

iris = load_iris()
X = iris.data  # Features (measurements)
y = iris.target  # Labels (species)

# Let's see what we're working with
print(f"Dataset shape: {X.shape}")
print(f"Number of classes: {len(iris.target_names)}")
print(f"Class names: {iris.target_names}")
```

**Your Task**: Add a markdown cell explaining in your own words what the dataset contains.

### Cell 3: Split Data for Training and Testing
```python
# Split data: 80% for training, 20% for testing
# random_state=42 ensures we all get same split (reproducibility!)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")
```

**Your Task**: Add a markdown cell explaining WHY we split data into training and testing sets.

### Cell 4: Train the Model
```python
# Create a k-Nearest Neighbors classifier
# k=3 means it looks at the 3 closest training examples
knn = KNeighborsClassifier(n_neighbors=3)

# Train (fit) the model on training data
knn.fit(X_train, y_train)

print("✓ Model trained!")
```

**Your Task**: Add a markdown cell explaining in simple terms how kNN works.

### Cell 5: Make Predictions
```python
# Use the trained model to predict on test data
y_pred = knn.predict(X_test)

# Let's see first 10 predictions vs. actual values
print("Predictions vs. Actual (first 10):")
for i in range(10):
    pred_name = iris.target_names[y_pred[i]]
    actual_name = iris.target_names[y_test[i]]
    match = "✓" if y_pred[i] == y_test[i] else "✗"
    print(f"  {match} Predicted: {pred_name:12s} | Actual: {actual_name}")
```

### Cell 6: Evaluate Accuracy
```python
# Calculate accuracy: what percentage did we get right?
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.1%}")

# Detailed breakdown
correct = sum(y_pred == y_test)
total = len(y_test)
print(f"Got {correct} out of {total} correct")
```

**Your Task**: Add a markdown cell discussing:
- Is this accuracy good or bad?
- What might affect accuracy?
- How could we improve it?

### Cell 7: Visualize Results (Bonus)
```python
# Simple visualization of predictions
plt.figure(figsize=(10, 4))

# Plot actual vs predicted
plt.subplot(1, 2, 1)
plt.scatter(range(len(y_test)), y_test, alpha=0.5, label='Actual')
plt.scatter(range(len(y_pred)), y_pred, alpha=0.5, label='Predicted', marker='x')
plt.xlabel('Sample Index')
plt.ylabel('Species Class')
plt.title('Actual vs. Predicted Classes')
plt.legend()
plt.grid(True, alpha=0.3)

# Show accuracy
plt.subplot(1, 2, 2)
plt.bar(['Correct', 'Incorrect'],
        [correct, total-correct],
        color=['green', 'red'])
plt.ylabel('Count')
plt.title(f'Prediction Results ({accuracy:.1%} Accurate)')
plt.tight_layout()
plt.show()
```

---

## PART 4: EXPERIMENTATION (REQUIRED)

**Your Task**: Copy your notebook and try different values of `k` in the kNN classifier.

Create cells testing:
- k=1 (very sensitive to noise)
- k=3 (your baseline)
- k=5
- k=10 (very smooth)

**Document findings**: Which `k` value gives best accuracy? Why do you think that is?

---

## PART 5: REFLECTION & DOCUMENTATION

Add a final markdown cell to your notebook answering:

1. **What surprised you** about training a machine learning model?
2. **What was easier** than you expected?
3. **What was harder** than you expected?
4. **One question** you have about machine learning after this exercise

Update your repository README.md:
```markdown
# CSC-114 Machine Learning Portfolio

## Week 1: First ML Model
- **Dataset**: Iris flower classification
- **Algorithm**: k-Nearest Neighbors (kNN)
- **Best Accuracy**: [your best result]%
- **Key Learning**: [one sentence about what you learned]
```

---

## SUBMISSION CHECKLIST

Complete the Sacred Flow:

- [ ] **Issue created** with acceptance criteria
- [ ] **Branch created** (`week-1-ml-setup`)
- [ ] **Notebook complete** with all required cells
- [ ] **Experimentation done** (tried different k values)
- [ ] **Reflection written** (answered 4 questions)
- [ ] **README updated** with Week 1 summary
- [ ] **Pull Request created** with description of work
- [ ] **PR merged** to main branch

**Submission**: Repository URL with merged PR for Week 1

---

## GRADING RUBRIC

**Environment Setup (5 points)**
- ✓ All libraries installed and working
- ✓ Jupyter notebook runs without errors

**Model Implementation (10 points)**
- ✓ Dataset loaded correctly (2 pts)
- ✓ Data split appropriately (2 pts)
- ✓ Model trained successfully (3 pts)
- ✓ Predictions made and displayed (3 pts)

**Experimentation (5 points)**
- ✓ Tested multiple k values (3 pts)
- ✓ Documented findings (2 pts)

**Documentation & Reflection (5 points)**
- ✓ Markdown cells explain concepts (2 pts)
- ✓ Reflection questions answered thoughtfully (2 pts)
- ✓ README updated (1 pt)

**Process (Bonus 2 points)**
- ✓ Issue/PR workflow followed correctly
- ✓ Commit messages clear and descriptive

---

## COMMON ISSUES & SOLUTIONS

**"ImportError: No module named sklearn"**
- Solution: Run `pip install scikit-learn` in terminal

**"Jupyter command not found"**
- Solution: Run `pip install jupyter` or use Google Colab

**"Accuracy is 0% or 100%"**
- Solution: Check that X_train/y_train are used for training, X_test for testing

**"Notebook won't open in GitHub"**
- Solution: GitHub renders .ipynb files automatically. Just commit and push.

---

## RESOURCES

- [scikit-learn Documentation](https://scikit-learn.org/)
- [Jupyter Notebook Tutorial](https://jupyter.org/try)
- [Iris Dataset Information](https://archive.ics.uci.edu/ml/datasets/iris)
- [kNN Explained Visually](https://www.youtube.com/watch?v=HVXime0nQeI)

**Office Hours**: Available for environment setup help!

---

## LOOKING AHEAD

**Next Week (Week 2)**: You'll learn to write **user stories** for ML projects - treating ML development like professional software projects with clear requirements and acceptance criteria. This combines your ML skills with project management practices.

---

**Drew's Note**: Your first ML model! The Iris dataset is a classic for a reason - it's small enough to understand completely but real enough to demonstrate ML concepts. Don't worry if the math seems mysterious; we'll build intuition over time. For now, focus on the PROCESS: load data → split data → train model → evaluate model. You'll repeat this pattern hundreds of times.

**Favorite Mistake**: Someone always forgets to split the data and tests on the training set, getting 100% accuracy. That's called "overfitting" and it's a great teachable moment!
