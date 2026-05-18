# Week 13-14 Assignment: "NLP Project Sprint 5"
## CSC-114 AI I - The Home Stretch: Natural Language Processing

**Due**: End of Week 14 (Friday, 11:59 PM)
**Points**: 75 (Sprint 5 deliverable)
**Submission**: GitHub repository + Complete Sprint artifacts
**Sprint Theme**: "Optimize Everything - Your Capstone Dress Rehearsal"

---

## ASSIGNMENT OVERVIEW

Welcome to **Sprint 5** - the final sprint before your capstone project. This is your "dress rehearsal" where you combine everything you've learned: technical ML skills, PM discipline, and professional polish.

**What You're Building:**
A complete Natural Language Processing (NLP) system that processes text data, extracts meaningful features, and performs either text classification or sentiment analysis. You'll handle real-world text data challenges: noise, ambiguity, imbalanced classes, and performance optimization.

**What You're Learning (Technical):**
- Text preprocessing and tokenization
- Bag of Words (BoW) and TF-IDF feature extraction
- Word embeddings concepts (Word2Vec, GloVe)
- Text classification OR sentiment analysis
- Handling imbalanced text datasets
- Model optimization for NLP tasks
- Evaluation metrics specific to text data

**What You're Learning (PM):**
- **Velocity stabilization** (Sprint 5 should reflect your true capacity)
- **Process optimization** (fine-tuning your workflow)
- **Sprint 1-5 trend analysis** (recognizing your growth)
- **Capstone preparation** (what to carry forward)
- **Portfolio polish** (presenting sprint work professionally)

**Why This Sprint Matters:**
Sprint 5 is where you prove you can handle complexity independently. NLP is notoriously tricky (language is ambiguous, messy, and context-dependent), and capstone will be similarly challenging. Use this sprint to:
1. **Solidify your PM process** - By now, standups and burndown should be second nature
2. **Push technical boundaries** - NLP is harder than tabular data
3. **Build confidence** - You're preparing to tackle capstone independently
4. **Polish presentation** - Your sprint artifacts should look professional

---

## PREREQUISITE: SPRINT 5 PLANNING

**Before Week 13 starts**, complete your Sprint Planning document.

### Step 1: Review Your Sprint 1-4 Velocity

Calculate your velocity trend:
- Sprint 1 velocity: [points completed]
- Sprint 2 velocity: [points completed]
- Sprint 3 velocity: [points completed]
- Sprint 4 velocity: [points completed]
- **Average velocity (Sprints 2-4)**: (S2 + S3 + S4) / 3 = [your capacity]
- **Sprint 5 planned capacity**: [Based on recent average]

**Velocity Insights:**
- Is your velocity increasing, stable, or decreasing?
- Have you been consistently over/underestimating?
- What's your sustainable pace?

**Example Analysis:**
```
Sprint 1: 12 pts (learning curve, undershot)
Sprint 2: 18 pts (overcorrection, burnout)
Sprint 3: 15 pts (stabilizing)
Sprint 4: 16 pts (consistent)
Average: 16.3 pts → Plan Sprint 5 for 15-17 pts
```

### Step 2: Define Sprint Goal

One focused sentence describing what you'll accomplish:

**Example Sprint Goal**: "Build a production-ready sentiment analysis system that classifies movie reviews with >85% accuracy while handling imbalanced data and optimizing for F1-score"

**Alternative Sprint Goal**: "Develop a text classification system that categorizes news articles into topics using TF-IDF features and ensemble methods, achieving balanced performance across all classes"

### Step 3: Break Down User Stories

**STORY 1: Text Preprocessing Pipeline**
- **As a** data scientist,
- **I want** a robust text preprocessing pipeline (tokenization, stopword removal, lemmatization),
- **So that** raw text is transformed into clean, analyzable tokens.
- **Acceptance Criteria**:
  - [ ] Handles lowercasing, punctuation, special characters
  - [ ] Removes stopwords (English)
  - [ ] Implements tokenization (word-level)
  - [ ] Optional: Lemmatization or stemming
  - [ ] Pipeline documented and reusable
- **Estimate**: 5 points

**STORY 2: Feature Engineering (BoW & TF-IDF)**
- **As a** ML practitioner,
- **I want** to convert preprocessed text into numerical features using Bag of Words and TF-IDF,
- **So that** text can be fed into ML algorithms.
- **Acceptance Criteria**:
  - [ ] Bag of Words implementation (CountVectorizer)
  - [ ] TF-IDF implementation (TfidfVectorizer)
  - [ ] Comparison of BoW vs TF-IDF features
  - [ ] Feature dimensions justified (max_features parameter)
  - [ ] Feature importance analysis
- **Estimate**: 5 points

**STORY 3: Baseline Model & Evaluation**
- **As a** project lead,
- **I want** baseline text classification model trained and evaluated,
- **So that** I have a performance benchmark to improve upon.
- **Acceptance Criteria**:
  - [ ] Train Logistic Regression or Naive Bayes baseline
  - [ ] Calculate precision, recall, F1 per class
  - [ ] Generate confusion matrix
  - [ ] Baseline performance documented
  - [ ] Error analysis (where model fails)
- **Estimate**: 4 points

**STORY 4: Advanced Models & Optimization**
- **As a** ML engineer,
- **I want** to test advanced models (Random Forest, SVM, ensemble) and optimize hyperparameters,
- **So that** I achieve the best possible performance.
- **Acceptance Criteria**:
  - [ ] Train at least 3 different models
  - [ ] Perform hyperparameter tuning (GridSearchCV or RandomizedSearchCV)
  - [ ] Compare models using cross-validation
  - [ ] Select best model with justification
  - [ ] Optimization process documented
- **Estimate**: 6 points

**STORY 5: Handling Imbalanced Text Data**
- **As a** practitioner working with real-world data,
- **I want** to address class imbalance in my text dataset,
- **So that** model doesn't bias toward majority class.
- **Acceptance Criteria**:
  - [ ] Identify class distribution
  - [ ] Implement SMOTE or class weighting
  - [ ] Compare balanced vs imbalanced model performance
  - [ ] Use appropriate metrics (F1, precision-recall curves)
  - [ ] Document impact of balancing techniques
- **Estimate**: 5 points

**STORY 6: Word Embeddings Exploration (Stretch)**
- **As a** NLP learner,
- **I want** to understand word embeddings (Word2Vec concepts),
- **So that** I know alternatives to BoW/TF-IDF for future projects.
- **Acceptance Criteria**:
  - [ ] Research Word2Vec and GloVe
  - [ ] Load pre-trained embeddings (optional: Gensim)
  - [ ] Compare embedding similarity examples
  - [ ] Document when to use embeddings vs TF-IDF
  - [ ] (Optional) Train model with embedding features
- **Estimate**: 4 points (STRETCH GOAL)

**STORY 7: NLP System Documentation & Presentation**
- **As a** developer preparing for capstone,
- **I want** comprehensive documentation and professional presentation,
- **So that** my work is portfolio-ready and demonstrates mastery.
- **Acceptance Criteria**:
  - [ ] README includes system overview, results, insights
  - [ ] Jupyter notebook has markdown explanations
  - [ ] Visualizations are publication-quality
  - [ ] Code follows PEP 8 standards
  - [ ] Sprint retrospective completed
- **Estimate**: 3 points

**Total Available**: 32 points (29 required + 4 stretch)
**Plan Based on Your Capacity**: Select stories totaling your Sprint 5 capacity

### Step 4: Create Sprint Backlog

In GitHub:
1. Create milestone: "Sprint 5 - NLP Project"
2. Create Issues for each story selected
3. Assign to Sprint 5 milestone
4. Add labels: `sprint-5`, `nlp`, `final-sprint`
5. Prioritize stories (Must-have vs Nice-to-have)
6. Move to "To Do" column on project board

### Step 5: Task Breakdown

For each story, list concrete tasks in issue description:

**Example (Story 1 - Text Preprocessing)**:
```markdown
## Tasks
- [ ] Research NLTK or spaCy for preprocessing
- [ ] Install required libraries
- [ ] Implement lowercase and punctuation removal
- [ ] Load stopword list, apply filtering
- [ ] Test tokenization on sample text
- [ ] Implement lemmatization (WordNetLemmatizer)
- [ ] Create reusable preprocessing function
- [ ] Test on full dataset
- [ ] Document design decisions
```

**Deliverable**: `sprint_5_planning.md` document in your repo

---

## SPRINT EXECUTION (WEEKS 13-14)

### Daily Standups (Required)

Every day (Mon-Fri), create standup entry in `sprint_5_standups.md`:

```markdown
## Day 1 (Monday, Week 13)
**What I did yesterday**: Completed Sprint 5 planning, selected IMDB sentiment dataset
**What I'll do today**: Implement text preprocessing pipeline (Story 1)
**Blockers**: Need to decide between NLTK and spaCy for tokenization
**Velocity note**: Planning 16 points total

## Day 2 (Tuesday, Week 13)
**What I did yesterday**: Built preprocessing pipeline using NLTK, handles stopwords and lemmatization
**What I'll do today**: Complete Story 1, start Story 2 (BoW and TF-IDF)
**Blockers**: Preprocessing slow on large dataset, may need optimization
**Velocity note**: Story 1 progressing faster than estimated

## Day 3 (Wednesday, Week 13)
**What I did yesterday**: Completed Story 1 (5 pts), implemented BoW features
**What I'll do today**: Finish TF-IDF implementation, compare feature representations
**Blockers**: None
**Velocity note**: 5 points completed, 11 remaining

[Continue for all 10 days]

## Day 10 (Friday, Week 14)
**What I did yesterday**: Finalized documentation, sprint retrospective
**What I'll do today**: Final polish, submit Sprint 5 deliverables
**Blockers**: None
**Velocity note**: Sprint 5 complete! Final velocity: 17 points
```

**Standups at Sprint 5**: By now, standups should reveal your rhythm, blocker patterns, and estimation accuracy. Use them to prepare for capstone self-management.

### Sprint Board Management

GitHub Projects columns:
- **Backlog**: Stories for this sprint not yet started
- **In Progress**: Currently working on (STILL only one at a time!)
- **Blocked**: Waiting on research, help, or external dependency
- **Done**: Acceptance criteria met, tested, documented

**Sprint 5 Tip**: Add a "Blocked" column to surface issues quickly.

### Burndown Chart

Track remaining story points daily:

| Day | Points Remaining | Notes | Ideal Remaining |
|-----|------------------|-------|-----------------|
| Day 1 | 16 | Sprint starts | 16.0 |
| Day 2 | 16 | Still on Story 1 | 14.4 |
| Day 3 | 11 | Completed Story 1 (5 pts) | 12.8 |
| Day 4 | 11 | Story 2 in progress | 11.2 |
| Day 5 | 6 | Completed Story 2 (5 pts) | 9.6 |
| Day 6 | 6 | Weekend | 8.0 |
| Day 7 | 6 | Weekend | 6.4 |
| Day 8 | 2 | Completed Story 3 (4 pts) | 4.8 |
| Day 9 | 2 | Story 7 in progress | 3.2 |
| Day 10 | 0 | Sprint complete! | 1.6 |

**Ideal Line**: Points remaining ÷ days remaining
**Your Line**: Actual points remaining

**Sprint 5 Goal**: Your line should roughly track the ideal line (indicates accurate estimation and steady pace).

---

## TECHNICAL IMPLEMENTATION

### Recommended Dataset Options

**Option 1: IMDB Movie Reviews (Sentiment Analysis)**
- 50,000 movie reviews (positive/negative sentiment)
- Binary classification
- Real-world consumer text
- Available via `datasets` library or Kaggle

**Option 2: 20 Newsgroups (Text Classification)**
- ~20,000 newsgroup posts across 20 categories
- Multi-class classification
- Built into scikit-learn
- Good for topic classification

**Option 3: SMS Spam Collection (Imbalanced Dataset)**
- 5,574 SMS messages (spam/ham)
- Highly imbalanced (~13% spam)
- Good for imbalance handling practice
- Available on Kaggle

**Option 4: Your Choice**
- Must be text classification or sentiment analysis
- Minimum 1,000 samples
- Justify dataset selection in planning doc

### Required Technical Components

#### 1. Text Preprocessing Pipeline

```python
# Week 13-14: NLP Project Sprint 5
# CSC-114 - [Your Name]
# Sprint Goal: [Your sprint goal]

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# NLP libraries
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import re

# Download required NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# ML libraries
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import (classification_report, confusion_matrix,
                              precision_recall_curve, roc_auc_score, f1_score)

# Imbalance handling
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline as ImbPipeline

# STORY 1: Text Preprocessing Pipeline
# Estimate: 5 points | Status: [To Do/In Progress/Done]

def preprocess_text(text):
    """
    Comprehensive text preprocessing pipeline.

    Steps:
    1. Lowercase conversion
    2. Remove URLs, emails, special characters
    3. Tokenization
    4. Remove stopwords
    5. Lemmatization

    Args:
        text (str): Raw text string

    Returns:
        str: Preprocessed text ready for vectorization
    """
    # Lowercase
    text = text.lower()

    # Remove URLs
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)

    # Remove email addresses
    text = re.sub(r'\S+@\S+', '', text)

    # Remove special characters and numbers (keep letters and spaces)
    text = re.sub(r'[^a-z\s]', '', text)

    # Tokenization
    tokens = word_tokenize(text)

    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]

    # Lemmatization
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]

    # Rejoin tokens into string
    return ' '.join(tokens)

# Example usage
sample_text = "The movie was absolutely FANTASTIC!!! I loved it 😊 https://example.com"
preprocessed = preprocess_text(sample_text)
print(f"Original: {sample_text}")
print(f"Preprocessed: {preprocessed}")

# Apply preprocessing to entire dataset
# (Assuming df is your DataFrame with 'text' and 'label' columns)
# df['text_clean'] = df['text'].apply(preprocess_text)
```

#### 2. Feature Engineering (BoW & TF-IDF)

```python
# STORY 2: Feature Engineering (BoW & TF-IDF)
# Estimate: 5 points | Status: [To Do/In Progress/Done]

# Load and prepare data (example with IMDB dataset)
# Replace with your actual data loading

from sklearn.datasets import fetch_20newsgroups

# Example: Load 20 newsgroups dataset
categories = ['alt.atheism', 'soc.religion.christian', 'comp.graphics', 'sci.med']
newsgroups_train = fetch_20newsgroups(subset='train', categories=categories,
                                       remove=('headers', 'footers', 'quotes'))
newsgroups_test = fetch_20newsgroups(subset='test', categories=categories,
                                      remove=('headers', 'footers', 'quotes'))

X_train_raw = newsgroups_train.data
y_train = newsgroups_train.target
X_test_raw = newsgroups_test.data
y_test = newsgroups_test.target

print(f"Training samples: {len(X_train_raw)}")
print(f"Testing samples: {len(X_test_raw)}")
print(f"Classes: {newsgroups_train.target_names}")

# Preprocess all text
X_train_clean = [preprocess_text(text) for text in X_train_raw]
X_test_clean = [preprocess_text(text) for text in X_test_raw]

# Bag of Words (BoW) Feature Extraction
bow_vectorizer = CountVectorizer(max_features=1000)  # Limit to top 1000 words
X_train_bow = bow_vectorizer.fit_transform(X_train_clean)
X_test_bow = bow_vectorizer.transform(X_test_clean)

print(f"\nBoW Feature Shape: {X_train_bow.shape}")
print(f"Vocabulary size: {len(bow_vectorizer.vocabulary_)}")

# TF-IDF Feature Extraction
tfidf_vectorizer = TfidfVectorizer(max_features=1000)
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train_clean)
X_test_tfidf = tfidf_vectorizer.transform(X_test_clean)

print(f"\nTF-IDF Feature Shape: {X_train_tfidf.shape}")

# Feature Importance: Top TF-IDF words
feature_names = tfidf_vectorizer.get_feature_names_out()
tfidf_scores = X_train_tfidf.mean(axis=0).A1
top_indices = tfidf_scores.argsort()[-20:][::-1]

print("\nTop 20 TF-IDF Features:")
for idx in top_indices:
    print(f"  {feature_names[idx]}: {tfidf_scores[idx]:.4f}")

# Visualize feature comparison
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# BoW distribution
bow_word_counts = X_train_bow.sum(axis=0).A1
axes[0].hist(bow_word_counts, bins=50, edgecolor='black')
axes[0].set_title('Bag of Words: Word Frequency Distribution')
axes[0].set_xlabel('Word Count')
axes[0].set_ylabel('Number of Words')
axes[0].set_yscale('log')

# TF-IDF distribution
axes[1].hist(tfidf_scores, bins=50, edgecolor='black', color='orange')
axes[1].set_title('TF-IDF: Score Distribution')
axes[1].set_xlabel('TF-IDF Score')
axes[1].set_ylabel('Number of Words')

plt.tight_layout()
plt.savefig('bow_vs_tfidf_features.png')
plt.show()
```

#### 3. Baseline Model & Evaluation

```python
# STORY 3: Baseline Model & Evaluation
# Estimate: 4 points | Status: [To Do/In Progress/Done]

# Train baseline Naive Bayes classifier (good for text)
baseline_model = MultinomialNB()
baseline_model.fit(X_train_tfidf, y_train)

# Predictions
y_pred_baseline = baseline_model.predict(X_test_tfidf)

# Evaluation metrics
print("=== BASELINE MODEL PERFORMANCE (Naive Bayes with TF-IDF) ===\n")
print(classification_report(y_test, y_pred_baseline,
                            target_names=newsgroups_train.target_names))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred_baseline)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=newsgroups_train.target_names,
            yticklabels=newsgroups_train.target_names)
plt.title('Baseline Model: Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.tight_layout()
plt.savefig('baseline_confusion_matrix.png')
plt.show()

# Error Analysis: Where does the model fail?
errors = (y_test != y_pred_baseline)
error_indices = np.where(errors)[0]

print(f"\nError Analysis: {errors.sum()} misclassifications out of {len(y_test)}")
print("\nSample Errors:")
for idx in error_indices[:3]:  # Show first 3 errors
    print(f"\nText: {X_test_raw[idx][:200]}...")
    print(f"True Label: {newsgroups_train.target_names[y_test[idx]]}")
    print(f"Predicted: {newsgroups_train.target_names[y_pred_baseline[idx]]}")
```

#### 4. Advanced Models & Optimization

```python
# STORY 4: Advanced Models & Optimization
# Estimate: 6 points | Status: [To Do/In Progress/Done]

# Define models to compare
models = {
    'Naive Bayes': MultinomialNB(),
    'Logistic Regression': LogisticRegression(max_iter=1000, random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(kernel='linear', random_state=42)
}

# Cross-validation comparison
print("=== MODEL COMPARISON (5-Fold Cross-Validation) ===\n")
cv_results = {}
for name, model in models.items():
    scores = cross_val_score(model, X_train_tfidf, y_train, cv=5, scoring='f1_macro')
    cv_results[name] = {
        'mean': scores.mean(),
        'std': scores.std(),
        'scores': scores
    }
    print(f"{name}: {scores.mean():.4f} (+/- {scores.std():.4f})")

# Hyperparameter tuning for best model
print("\n=== HYPERPARAMETER TUNING (Logistic Regression) ===\n")

param_grid = {
    'C': [0.1, 1.0, 10.0],
    'penalty': ['l2'],
    'solver': ['lbfgs', 'saga']
}

grid_search = GridSearchCV(LogisticRegression(max_iter=1000, random_state=42),
                           param_grid, cv=5, scoring='f1_macro', n_jobs=-1)
grid_search.fit(X_train_tfidf, y_train)

print(f"Best parameters: {grid_search.best_params_}")
print(f"Best cross-validation score: {grid_search.best_score_:.4f}")

# Evaluate optimized model
best_model = grid_search.best_estimator_
y_pred_optimized = best_model.predict(X_test_tfidf)

print("\n=== OPTIMIZED MODEL PERFORMANCE ===\n")
print(classification_report(y_test, y_pred_optimized,
                            target_names=newsgroups_train.target_names))

# Visualize model comparison
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Cross-validation scores
model_names = list(cv_results.keys())
cv_means = [cv_results[m]['mean'] for m in model_names]
cv_stds = [cv_results[m]['std'] for m in model_names]

axes[0].bar(model_names, cv_means, yerr=cv_stds, capsize=5)
axes[0].set_title('Model Comparison: Cross-Validation F1-Score')
axes[0].set_ylabel('F1-Score (Macro)')
axes[0].set_ylim([0, 1])
axes[0].tick_params(axis='x', rotation=45)
axes[0].grid(axis='y', alpha=0.3)

# Baseline vs Optimized
comparison_data = {
    'Baseline\n(Naive Bayes)': f1_score(y_test, y_pred_baseline, average='macro'),
    'Optimized\n(Logistic Regression)': f1_score(y_test, y_pred_optimized, average='macro')
}
axes[1].bar(comparison_data.keys(), comparison_data.values(), color=['steelblue', 'orange'])
axes[1].set_title('Baseline vs Optimized Model')
axes[1].set_ylabel('F1-Score (Macro)')
axes[1].set_ylim([0, 1])
axes[1].grid(axis='y', alpha=0.3)

plt.tight_layout()
plt.savefig('model_comparison.png')
plt.show()
```

#### 5. Handling Imbalanced Text Data

```python
# STORY 5: Handling Imbalanced Text Data
# Estimate: 5 points | Status: [To Do/In Progress/Done]

# Check class distribution
class_counts = pd.Series(y_train).value_counts()
print("=== CLASS DISTRIBUTION ===\n")
print(class_counts)
print(f"\nImbalance Ratio: {class_counts.max() / class_counts.min():.2f}:1")

# Visualize imbalance
plt.figure(figsize=(10, 5))
class_counts.plot(kind='bar', color='steelblue', edgecolor='black')
plt.title('Class Distribution in Training Data')
plt.xlabel('Class')
plt.ylabel('Number of Samples')
plt.xticks(rotation=45)
plt.grid(axis='y', alpha=0.3)
plt.tight_layout()
plt.savefig('class_distribution.png')
plt.show()

# Strategy 1: Class Weighting
print("\n=== STRATEGY 1: CLASS WEIGHTING ===\n")

model_weighted = LogisticRegression(class_weight='balanced', max_iter=1000, random_state=42)
model_weighted.fit(X_train_tfidf, y_train)
y_pred_weighted = model_weighted.predict(X_test_tfidf)

print("Performance with Class Weighting:")
print(classification_report(y_test, y_pred_weighted,
                            target_names=newsgroups_train.target_names))

# Strategy 2: SMOTE (Synthetic Minority Over-sampling)
print("\n=== STRATEGY 2: SMOTE ===\n")

# SMOTE requires dense arrays, so convert if needed
X_train_dense = X_train_tfidf.toarray()
X_test_dense = X_test_tfidf.toarray()

smote = SMOTE(random_state=42)
X_train_smote, y_train_smote = smote.fit_resample(X_train_dense, y_train)

print(f"Original training size: {X_train_dense.shape[0]}")
print(f"After SMOTE: {X_train_smote.shape[0]}")
print(f"New class distribution:\n{pd.Series(y_train_smote).value_counts()}")

model_smote = LogisticRegression(max_iter=1000, random_state=42)
model_smote.fit(X_train_smote, y_train_smote)
y_pred_smote = model_smote.predict(X_test_dense)

print("\nPerformance with SMOTE:")
print(classification_report(y_test, y_pred_smote,
                            target_names=newsgroups_train.target_names))

# Compare strategies
comparison = pd.DataFrame({
    'Model': ['Baseline', 'Class Weighting', 'SMOTE'],
    'F1-Score (Macro)': [
        f1_score(y_test, y_pred_baseline, average='macro'),
        f1_score(y_test, y_pred_weighted, average='macro'),
        f1_score(y_test, y_pred_smote, average='macro')
    ]
})

print("\n=== IMBALANCE HANDLING COMPARISON ===\n")
print(comparison.to_string(index=False))

# Visualize comparison
plt.figure(figsize=(8, 5))
plt.bar(comparison['Model'], comparison['F1-Score (Macro)'],
        color=['steelblue', 'orange', 'green'], edgecolor='black')
plt.title('Impact of Imbalance Handling Techniques')
plt.ylabel('F1-Score (Macro)')
plt.ylim([0, 1])
plt.grid(axis='y', alpha=0.3)
plt.tight_layout()
plt.savefig('imbalance_handling_comparison.png')
plt.show()

# Precision-Recall curves (better for imbalanced data than ROC)
from sklearn.preprocessing import label_binarize
from sklearn.multiclass import OneVsRestClassifier

# Binarize labels for multi-class PR curves
y_test_bin = label_binarize(y_test, classes=range(len(newsgroups_train.target_names)))

# Train One-vs-Rest classifier for probability predictions
ovr_model = OneVsRestClassifier(LogisticRegression(class_weight='balanced', max_iter=1000))
ovr_model.fit(X_train_tfidf, y_train)
y_score = ovr_model.predict_proba(X_test_tfidf)

# Plot Precision-Recall curves
plt.figure(figsize=(10, 6))
for i, class_name in enumerate(newsgroups_train.target_names):
    precision, recall, _ = precision_recall_curve(y_test_bin[:, i], y_score[:, i])
    plt.plot(recall, precision, label=f'{class_name}')

plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curves (Class Weighted Model)')
plt.legend(loc='best')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('precision_recall_curves.png')
plt.show()
```

#### 6. Word Embeddings Exploration (Stretch Goal)

```python
# STORY 6: Word Embeddings Exploration (STRETCH GOAL)
# Estimate: 4 points | Status: [To Do/In Progress/Done]

print("=== WORD EMBEDDINGS EXPLORATION ===\n")

# Conceptual explanation
print("""
WORD EMBEDDINGS vs TF-IDF:

TF-IDF:
- Represents words as sparse vectors (mostly zeros)
- No semantic meaning (doesn't know 'king' and 'queen' are related)
- Fast, interpretable, works well for many tasks
- Each dimension = one word in vocabulary

Word Embeddings (Word2Vec, GloVe):
- Represents words as dense vectors (e.g., 300 dimensions)
- Captures semantic meaning ('king' - 'man' + 'woman' ≈ 'queen')
- Requires more data and computation
- Each dimension = learned feature (not directly interpretable)

When to use embeddings:
- Small datasets: Use TF-IDF
- Large datasets: Embeddings may help
- Deep learning models: Embeddings required
- Interpretability needed: TF-IDF
- Semantic similarity important: Embeddings
""")

# Example: Using pre-trained GloVe embeddings (simplified)
print("\nExample: Word Similarity with Embeddings")
print("(Using Gensim's Word2Vec concepts)\n")

# Conceptual example (requires gensim installation)
try:
    import gensim.downloader as api

    # Load small pre-trained model
    print("Loading pre-trained Word2Vec model (this may take a minute)...")
    word_vectors = api.load("glove-wiki-gigaword-50")

    # Test semantic similarity
    words_to_test = ['movie', 'film', 'actor', 'book']
    print(f"\nSemantic similarity tests:")
    for word in words_to_test:
        if word in word_vectors:
            similar = word_vectors.most_similar(word, topn=5)
            print(f"\nMost similar to '{word}':")
            for similar_word, score in similar:
                print(f"  {similar_word}: {score:.3f}")

    # Analogy test: king - man + woman = ?
    if all(w in word_vectors for w in ['king', 'man', 'woman']):
        result = word_vectors.most_similar(positive=['king', 'woman'],
                                           negative=['man'], topn=1)
        print(f"\nAnalogy: king - man + woman = {result[0][0]} (score: {result[0][1]:.3f})")

except ImportError:
    print("Gensim not installed. Install with: pip install gensim")
    print("\nConceptual understanding is sufficient for this stretch goal.")

# Document learnings
print("\n=== KEY TAKEAWAYS ===")
print("""
1. Embeddings capture semantic relationships TF-IDF misses
2. For this project, TF-IDF likely sufficient (dataset size, interpretability)
3. Future capstone: Consider embeddings if working with large text corpus
4. Deep learning NLP (BERT, GPT) uses advanced embeddings
""")
```

#### 7. Final System Integration & Analysis

```python
# STORY 7: NLP System Documentation & Presentation
# Estimate: 3 points | Status: [To Do/In Progress/Done]

# Final model selection and comprehensive evaluation
print("=" * 60)
print("FINAL NLP SYSTEM EVALUATION")
print("=" * 60)

# Select best performing model based on all experiments
final_model = best_model  # From Story 4 optimization
y_pred_final = y_pred_optimized

# Comprehensive metrics summary
print("\n=== FINAL MODEL PERFORMANCE ===\n")
print(f"Model: {type(final_model).__name__}")
print(f"Features: TF-IDF (max_features=1000)")
print(f"Hyperparameters: {final_model.get_params()}\n")

print(classification_report(y_test, y_pred_final,
                            target_names=newsgroups_train.target_names))

# Final confusion matrix
cm_final = confusion_matrix(y_test, y_pred_final)
plt.figure(figsize=(10, 8))
sns.heatmap(cm_final, annot=True, fmt='d', cmap='RdYlGn',
            xticklabels=newsgroups_train.target_names,
            yticklabels=newsgroups_train.target_names)
plt.title('Final Model: Confusion Matrix', fontsize=14, fontweight='bold')
plt.ylabel('True Label', fontsize=12)
plt.xlabel('Predicted Label', fontsize=12)
plt.tight_layout()
plt.savefig('final_confusion_matrix.png', dpi=300)
plt.show()

# Key insights and recommendations
print("\n=== KEY INSIGHTS ===\n")
print("""
1. Preprocessing Impact:
   - Stopword removal and lemmatization improved F1 by ~X%
   - URL/special char removal critical for clean features

2. Feature Engineering:
   - TF-IDF outperformed BoW by ~X%
   - Top features aligned with domain knowledge

3. Model Selection:
   - Logistic Regression optimal (balance of performance and speed)
   - Random Forest overfitted on small dataset
   - SVM competitive but slower

4. Imbalance Handling:
   - Class weighting improved minority class recall by X%
   - SMOTE introduced some noise, slight F1 decrease

5. Production Readiness:
   - Model achieves [X]% F1-score
   - [Meets/Doesn't meet] deployment threshold
   - Recommendations: [Your specific recommendations]
""")

# Save final model
import joblib
joblib.dump(final_model, 'nlp_final_model.pkl')
joblib.dump(tfidf_vectorizer, 'tfidf_vectorizer.pkl')
print("\n✓ Final model and vectorizer saved to disk")

print("\n=== SPRINT 5 TECHNICAL COMPLETION ===")
print("All technical stories completed successfully!")
```

---

## SPRINT 5 VELOCITY ANALYSIS

**Required Deliverable**: `sprint_velocity_analysis.md`

### Velocity Trend Review

Create comprehensive analysis of your Sprint 1-5 journey:

```markdown
# Sprint 1-5 Velocity Analysis
## CSC-114 - [Your Name]

### Velocity Data

| Sprint | Planned Points | Completed Points | Velocity | Notes |
|--------|----------------|------------------|----------|-------|
| Sprint 1 | 15 | 12 | 12 | Learning sprint mechanics, underestimated complexity |
| Sprint 2 | 18 | 18 | 18 | Overcorrected, worked too many hours |
| Sprint 3 | 15 | 15 | 15 | Stabilizing, better estimation |
| Sprint 4 | 16 | 16 | 16 | Consistent velocity established |
| Sprint 5 | 16 | 17 | 17 | Final sprint, efficient workflow |

**Average Velocity (Sprints 2-5)**: 16.5 points

### Velocity Trend Chart

[Insert chart showing velocity over time - can use Excel/Google Sheets]

### Analysis

**What improved over 5 sprints:**
1. Estimation accuracy: Early sprints had 20%+ variance, now <5%
2. Daily standup discipline: Became second nature by Sprint 3
3. Story breakdown: Better at identifying subtasks
4. Technical confidence: NLP complexity didn't derail Sprint 5
5. PM efficiency: Burndown tracking takes <5 min/day now

**Patterns observed:**
- Monday velocity always lower (planning overhead)
- Friday velocity higher (deadline effect)
- Stories involving new libraries take 20% longer than estimated
- Documentation stories consistently underestimated

**Velocity stabilization:**
Sprint 4-5 show consistent 16-17 point velocity = my sustainable capacity.
For capstone: Plan 15-16 points to allow buffer for unknowns.

**Lessons for Capstone:**
1. Plan conservatively (use Sprint 4-5 velocity, not Sprint 2 overperformance)
2. Account for research spikes when learning new tech
3. Daily standups essential for large projects
4. Burndown chart catches slippage early
5. Break large stories into <5 point chunks
```

---

## SPRINT DELIVERABLES

### Technical Deliverables
- [ ] Jupyter notebook: `sprint_5_nlp_project.ipynb` (complete, well-documented)
- [ ] All required stories implemented (based on your capacity plan)
- [ ] Text preprocessing pipeline functional
- [ ] BoW and TF-IDF features extracted
- [ ] Multiple models trained and compared
- [ ] Imbalanced data handling demonstrated
- [ ] Final model selected with justification
- [ ] Visualizations professional-quality (high DPI, clear labels)
- [ ] Error analysis completed
- [ ] Code follows PEP 8 style guide

### PM Deliverables (CRITICAL)
- [ ] Sprint planning document (`sprint_5_planning.md`)
- [ ] Daily standups (10 entries in `sprint_5_standups.md`)
- [ ] Burndown chart (spreadsheet or visualization)
- [ ] Sprint velocity analysis (`sprint_velocity_analysis.md`)
- [ ] GitHub Issues for all stories
- [ ] Sprint board maintained (screenshot or GitHub Projects link)
- [ ] All completed stories moved to "Done"
- [ ] Sprint retrospective (see Week 14 for template)

### Documentation & Presentation
- [ ] README.md updated with Sprint 5 summary
- [ ] Jupyter notebook has markdown cells explaining each section
- [ ] Code comments clear and helpful
- [ ] Results interpreted (not just numbers, but insights)
- [ ] Portfolio-ready presentation of work

---

## GRADING RUBRIC (75 points)

### Technical Implementation (37.5 points)

**Text Preprocessing (7.5 pts)**
- [ ] Tokenization working correctly (2 pts)
- [ ] Stopword removal and lemmatization (2 pts)
- [ ] Handles special characters, URLs, noise (2 pts)
- [ ] Pipeline is reusable and well-documented (1.5 pts)

**Feature Engineering (7.5 pts)**
- [ ] BoW implementation correct (2 pts)
- [ ] TF-IDF implementation correct (2 pts)
- [ ] Feature comparison analysis (2 pts)
- [ ] Feature importance identified (1.5 pts)

**Modeling & Evaluation (12.5 pts)**
- [ ] Baseline model established (2.5 pts)
- [ ] Multiple models trained and compared (3 pts)
- [ ] Hyperparameter optimization performed (2.5 pts)
- [ ] Evaluation metrics comprehensive (2.5 pts)
- [ ] Final model selection justified (2 pts)

**Imbalanced Data Handling (7.5 pts)**
- [ ] Class imbalance identified and quantified (2 pts)
- [ ] Balancing technique implemented (class weights or SMOTE) (2.5 pts)
- [ ] Performance impact analyzed (2 pts)
- [ ] Appropriate metrics used (F1, PR curves) (1 pt)

**Code Quality (2.5 pts)**
- [ ] Code runs without errors (1 pt)
- [ ] Follows PEP 8 style (0.5 pts)
- [ ] Well-commented and readable (1 pt)

### PM Execution (37.5 points)

**Sprint Planning (7.5 pts)**
- [ ] Sprint goal clear and focused (1.5 pts)
- [ ] Stories well-defined with acceptance criteria (2.5 pts)
- [ ] Capacity planning based on previous velocity (2 pts)
- [ ] Task breakdown detailed (1.5 pts)

**Daily Execution (10 pts)**
- [ ] Standups completed daily (10 entries) (5 pts)
- [ ] Standups show genuine reflection (not copy-paste) (2.5 pts)
- [ ] Blockers identified and resolved (2.5 pts)

**Progress Tracking (10 pts)**
- [ ] Burndown chart maintained throughout sprint (5 pts)
- [ ] Sprint board updated regularly (3 pts)
- [ ] Velocity data recorded (2 pts)

**Velocity Analysis (7.5 pts)**
- [ ] Sprint 1-5 velocity documented (2 pts)
- [ ] Trend analysis insightful (2.5 pts)
- [ ] Patterns identified (1.5 pts)
- [ ] Capstone recommendations clear (1.5 pts)

**Process Maturity (2.5 pts)**
- [ ] Demonstrates PM process improvement over 5 sprints (1.5 pts)
- [ ] Professional presentation of sprint artifacts (1 pt)

### Bonus Points (Up to 7.5 points)

- [ ] **Sprint completed exactly on time** (all stories done by Day 10) (+2.5 pts)
- [ ] **Word embeddings exploration** (stretch goal completed) (+2.5 pts)
- [ ] **Publication-quality visualizations** (could be used in presentation) (+1.5 pts)
- [ ] **Exceptional insights** in error analysis or velocity review (+1 pt)

**Maximum Total**: 82.5 points (capped at 75 for grading)

---

## COMMON PITFALLS & SOLUTIONS

### Technical Pitfalls

**"Preprocessing is too slow on large datasets"**
- Solution: Process in batches or use vectorized operations
- Consider sampling for development, full dataset for final run

**"TF-IDF creates too many features"**
- Solution: Use `max_features` parameter (start with 1000-5000)
- Consider `min_df` and `max_df` to filter rare/common words

**"Model accuracy is very low (<60%)"**
- Solution: Check preprocessing (are stopwords removed?)
- Verify labels are correct
- Try simpler baseline first (Naive Bayes)

**"SMOTE fails with sparse matrices"**
- Solution: Convert to dense arrays: `X_train.toarray()`
- Warning: Memory-intensive for large datasets

**"Can't decide between BoW and TF-IDF"**
- Solution: TF-IDF usually better for classification
- BoW can work for short texts (tweets, product reviews)

**"Confusion matrix shows model only predicts majority class"**
- Solution: Class imbalance! Use class weighting or SMOTE
- Switch to F1-score instead of accuracy

### PM Pitfalls

**"Standups feel repetitive and pointless"**
- Solution: They track patterns (when you're stuck, when you're productive)
- For capstone, standups catch problems early
- Think of them as your "flight data recorder"

**"Burndown chart doesn't decrease linearly"**
- Solution: That's normal! Real work is bumpy
- What matters: Are you on track by mid-sprint?
- If flat for 3+ days, re-scope or ask for help

**"Sprint 5 velocity much lower than Sprint 2"**
- Solution: Sprint 2 was likely unsustainable (burnout)
- Use Sprint 4-5 average for realistic capacity
- Quality > raw velocity

**"Velocity analysis feels like busywork"**
- Solution: It's your data for capstone planning
- Knowing your sustainable pace prevents overcommitment
- Employers ask about project management in interviews

---

## DREW'S NOTES: THE HOME STRETCH

**On NLP Complexity:**
NLP is notoriously tricky. Language is ambiguous ("I saw her duck" - a bird or an action?), context-dependent, and full of noise. If your model struggles to break 75% accuracy on a difficult dataset, that might be GOOD performance. Don't compare NLP results to clean tabular data results.

The Iris dataset you did in Week 1 is perfectly behaved: clear features, no noise, balanced classes. Text data is the opposite: messy, noisy, often imbalanced. This sprint teaches you to handle real-world chaos.

**On Sprint 5 Being the Dress Rehearsal:**
By now, your sprint process should feel natural:
- You plan capacity based on data, not optimism
- Standups happen without thinking about them
- Your burndown chart is your early warning system
- You know how long research, coding, and debugging take

Capstone will be 3-4 sprints of work. If Sprint 5 goes smoothly, capstone will too. If Sprint 5 feels chaotic, NOW is the time to fix your process, not during capstone.

**On Velocity Stabilization:**
Sprint 1 velocity ≠ Sprint 5 velocity (usually). You probably:
- Underestimated early (learning curve)
- Overcommitted mid-course (enthusiasm)
- Stabilized late (realism)

Your Sprint 4-5 velocity is your TRUE capacity. Use it for capstone planning. The worst mistake is planning 25 points when your data shows 15-point capacity.

**On Portfolio Readiness:**
Sprint 5 artifacts should be portfolio-ready. When interviewing for ML roles, you'll discuss:
- "How do you manage ML projects?" → Show sprint planning
- "How do you handle imbalanced data?" → Show Story 5
- "Walk me through your NLP pipeline" → Show your code

Polish matters. Clean code, clear visualizations, thoughtful analysis = hire signals.

**Favorite Sprint 5 Moment:**
Watching students realize their Sprint 1 velocity analysis was wildly optimistic, then seeing them use Sprint 4-5 data to plan realistic capstone sprints. That's growth. That's professional maturity.

---

## TIPS FOR SUCCESS

### Technical Tips

1. **Start with EDA**: Before preprocessing, explore raw text
   - Average text length
   - Vocabulary size
   - Class distribution
   - Sample texts from each class

2. **Test preprocessing incrementally**:
   - Baseline: No preprocessing
   - Add lowercasing
   - Add stopword removal
   - Add lemmatization
   - Measure impact at each step

3. **Use appropriate metrics**:
   - Imbalanced data: F1-score, not accuracy
   - Multi-class: Macro-average F1
   - Binary sentiment: Can use accuracy if balanced

4. **Visualize, visualize, visualize**:
   - Word clouds for each class
   - Feature importance plots
   - Confusion matrices
   - Learning curves

5. **Error analysis is gold**:
   - Look at misclassifications
   - Find patterns (short texts? Sarcasm? Ambiguous?)
   - Inform next iteration improvements

### PM Tips

1. **Respect your velocity data**:
   - Don't plan 25 points if you average 15
   - Better to under-promise and over-deliver

2. **Daily standups catch blockers early**:
   - "Stuck for 6 hours on SMOTE" → Ask for help NOW
   - Don't wait until day before deadline

3. **Burndown chart is your friend**:
   - By Day 5, should be ~50% done
   - If not, re-scope immediately

4. **Story priority matters**:
   - Do must-haves first (Stories 1-3)
   - Nice-to-haves last (Story 6 stretch)
   - Don't start Story 6 if Story 3 incomplete

5. **Velocity analysis = capstone insurance**:
   - Knowing your capacity prevents overcommitment
   - Data beats optimism every time

---

## RESOURCES

### NLP Libraries & Documentation
- [NLTK Documentation](https://www.nltk.org/)
- [scikit-learn Text Feature Extraction](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction)
- [TF-IDF Explained](https://monkeylearn.com/blog/what-is-tf-idf/)
- [Gensim Word2Vec Tutorial](https://radimrehurek.com/gensim/models/word2vec.html)

### Datasets
- [IMDB Movie Reviews](https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews)
- [SMS Spam Collection](https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset)
- [20 Newsgroups](https://scikit-learn.org/stable/datasets/real_world.html#newsgroups-dataset)

### Imbalanced Data
- [Imbalanced-learn Documentation](https://imbalanced-learn.org/stable/)
- [SMOTE Explained](https://machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/)

### PM Resources
- Review all Mini-Lessons 1-5
- Your Sprint 1-4 retrospectives

**Office Hours**: Available for NLP questions and velocity analysis review!

---

## LOOKING AHEAD: CAPSTONE (WEEKS 15-18)

**What's Next:**
Week 15-18 is your **capstone project** - a 4-week self-directed ML project demonstrating everything you've learned.

**Capstone Requirements (Preview):**
- Original ML project (your choice of domain)
- 3-4 sprint cycles with full PM artifacts
- Novel dataset or approach (not course datasets)
- Portfolio-ready presentation
- Technical depth + PM maturity

**How Sprint 5 Prepares You:**
1. **Velocity data**: You know your realistic capacity
2. **Process maturity**: Sprint mechanics are automatic
3. **Technical confidence**: You've handled NLP complexity
4. **Independence**: Minimal hand-holding in Sprint 5 = ready for capstone autonomy

**Sprint 5 → Capstone Transition:**
- Sprint 5 ends Week 14 Friday
- Week 15 Monday: Capstone sprint planning
- Use Sprint 4-5 velocity for capstone planning
- Apply all PM lessons learned

---

## SPRINT 5 RETROSPECTIVE (Complete in Week 14)

After completing Sprint 5, write retrospective in `sprint_5_retrospective.md`:

```markdown
# Sprint 5 Retrospective
## CSC-114 - [Your Name]

### Sprint 5 Summary
- **Sprint Goal**: [Your goal]
- **Planned Points**: [X]
- **Completed Points**: [Y]
- **Velocity**: [Y]

### What Went Well ✓
1. [Something that worked great]
2. [Another success]
3. [Process or technical win]

### What Didn't Go Well ✗
1. [Something that struggled]
2. [A blocker or challenge]
3. [Process or technical issue]

### Lessons Learned 📚
1. [Key insight from Sprint 5]
2. [Something you'll do differently]
3. [Technical or PM lesson]

### Carrying Forward to Capstone 🎯
1. [Process to keep]
2. [Technique to apply]
3. [Improvement to implement]

### Sprint 1-5 Reflection
[Paragraph reflecting on your entire sprint journey. How have you grown? What surprised you? What are you proud of?]
```

---

## FINAL SUBMISSION CHECKLIST

**Technical Deliverables**
- [ ] `sprint_5_nlp_project.ipynb` complete and runs without errors
- [ ] All required stories implemented
- [ ] Visualizations saved as high-quality images
- [ ] Final model saved to disk (`.pkl` files)
- [ ] Code follows PEP 8 style guidelines

**PM Deliverables**
- [ ] `sprint_5_planning.md` with velocity-based capacity planning
- [ ] `sprint_5_standups.md` with 10 daily entries
- [ ] Burndown chart (spreadsheet or image)
- [ ] `sprint_velocity_analysis.md` with Sprint 1-5 trends
- [ ] `sprint_5_retrospective.md` completed
- [ ] GitHub Issues created and closed
- [ ] Sprint board screenshot or GitHub Projects link

**Documentation**
- [ ] README.md updated with Sprint 5 overview
- [ ] Code well-commented
- [ ] Results interpreted (insights, not just numbers)
- [ ] All visualizations have clear titles and labels

**Submission**
- [ ] Repository URL submitted
- [ ] All files committed and pushed to GitHub
- [ ] Sprint 5 branch merged to main (if using branches)

**Submission**: Repository URL with all deliverables

---

**Final Thought**: Sprint 5 is your proving ground. By the end of Week 14, you should confidently say: "I can manage a complex ML project independently." That confidence—backed by 5 sprints of data and experience—is what makes capstone achievable. Trust your process, trust your velocity data, and finish strong!

---

**Drew's Final Sprint 5 Note**: This is it—your last full sprint before capstone. Make it count. Not by working unsustainably long hours, but by working SMART: using your velocity data, maintaining your PM discipline, and pushing your technical boundaries within a realistic plan. The students who excel at capstone aren't the ones who wing it; they're the ones who bring disciplined sprint execution and realistic self-knowledge. Sprint 5 gives you both. Go build something great!
