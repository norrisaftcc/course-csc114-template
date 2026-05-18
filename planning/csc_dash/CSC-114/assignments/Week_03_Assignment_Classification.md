# Week 3 Assignment: "Classification Project Sprint"
## CSC-114 AI I - Supervised Learning + Story Point Estimation

**Due**: End of Week 3 (Friday, 11:59 PM)
**Points**: 25
**Submission**: GitHub repository + Jupyter notebook

## ASSIGNMENT OVERVIEW

Build a real-world classification model AND estimate the complexity of your work using story points. This combines ML skills (CSC-113) with PM estimation skills (new this week).

**What You're Building:**
A classifier that predicts whether emails are spam or not spam (ham) using the famous SMS Spam Collection dataset.

**PM Integration:**
- Review Mini-Lesson #2: Story Point Estimation
- Estimate complexity of ML tasks
- Track actual vs. estimated effort

## LEARNING OBJECTIVES

1. Implement text classification using scikit-learn
2. Apply feature extraction (CountVectorizer/TF-IDF)
3. Evaluate classifier using precision, recall, F1-score
4. Estimate work using story points (Fibonacci scale)
5. Track velocity (points completed)

## THE ML TASK

### Dataset: SMS Spam Collection
- 5,574 SMS messages
- Binary classification: spam vs. ham (not spam)
- Text data requires preprocessing

### Required Steps
1. Load and explore data
2. Preprocess text (lowercasing, removing punctuation)
3. Convert text to features (TF-IDF vectorization)
4. Split train/test
5. Train multiple classifiers (Naive Bayes, Logistic Regression, SVM)
6. Compare performance
7. Select best model

## THE PM TASK

### Before You Start: Estimate

Break your work into user stories with estimates:

**Story 1**: Data Loading and Exploration
- Estimate: 2 points (simple, familiar from Week 1)

**Story 2**: Text Preprocessing
- Estimate: 3 points (new concept, some research needed)

**Story 3**: Feature Extraction
- Estimate: 5 points (moderate complexity, TF-IDF is new)

**Story 4**: Model Training
- Estimate: 3 points (familiar from Week 1, but 3 models)

**Story 5**: Model Evaluation
- Estimate: 5 points (new metrics: precision, recall, F1)

**Total Estimated**: 18 points

### After You Finish: Track Actual

Create `week_03_estimation_reflection.md`:
- Which stories took longer than estimated? Why?
- Which were faster? Why?
- What did you learn about estimation?
- Adjusted estimates for similar future work?

## STARTER CODE

```python
# Week 3: Email Spam Classification
# CSC-114 - [Your Name]

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.metrics import classification_report, confusion_matrix

# Story 1: Load Data (Estimated: 2 points)
# TODO: Download SMS Spam Collection from UCI ML Repository
# TODO: Load into pandas DataFrame
# TODO: Explore: how many spam vs ham? average message length?

# Story 2: Preprocess Text (Estimated: 3 points)
# TODO: Convert to lowercase
# TODO: Remove punctuation
# TODO: Handle missing values

# Story 3: Feature Extraction (Estimated: 5 points)
# TODO: Create TF-IDF vectorizer
# TODO: Fit on training data
# TODO: Transform train and test

# Story 4: Train Models (Estimated: 3 points)
# TODO: Train Naive Bayes
# TODO: Train Logistic Regression
# TODO: Train SVM

# Story 5: Evaluate Models (Estimated: 5 points)
# TODO: Generate classification reports for all models
# TODO: Compare precision, recall, F1-score
# TODO: Create confusion matrices
# TODO: Select best model with justification
```

## GRADING RUBRIC

**ML Implementation (15 points)**
- Data loaded and explored (3 pts)
- Text preprocessing correct (3 pts)
- TF-IDF vectorization implemented (3 pts)
- Multiple models trained (3 pts)
- Comprehensive evaluation (3 pts)

**PM Estimation (7 points)**
- Initial estimates documented (2 pts)
- Actual effort tracked (2 pts)
- Reflection on accuracy (3 pts)

**Documentation (3 points)**
- Code comments clear
- Results interpreted
- README updated

## SUBMISSION

- Jupyter notebook: `week_03_spam_classifier.ipynb`
- Estimation reflection: `week_03_estimation_reflection.md`
- Updated README with results summary
- Best model achieves >95% accuracy

**Due**: End of Week 3

---

**Drew's Note**: This is your first "real" ML project - messy text data, multiple algorithms, meaningful metrics. The PM estimation practice prepares you for sprint planning next week. Don't stress if your estimates are way off - that's expected! You'll improve with practice.
