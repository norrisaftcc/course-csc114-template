# Module 2 Knowledge Check: Supervised Learning

**Purpose**: Assess understanding of classification vs regression, algorithm selection, data splitting, and basic evaluation
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Technical Concepts (60%)

### Question 1
What is the key difference between classification and regression problems?

A) Classification predicts categories, regression predicts continuous numbers
B) Classification is easier than regression
C) Classification uses neural networks, regression uses linear models
D) Classification requires more data than regression

**Correct Answer**: A
**Explanation**: This is fundamental. Classification outputs discrete labels (spam/ham, dog/cat/bird), while regression outputs continuous values (price, temperature, probability). The algorithms might be similar, but the output type defines the problem. You can't use classification metrics on regression problems and vice versa.

### Question 2
You're building a model to predict whether a student will pass or fail a course. What type of problem is this?

A) Regression
B) Binary classification
C) Multi-class classification
D) Clustering

**Correct Answer**: B
**Explanation**: Binary classification because there are exactly two possible outcomes: pass or fail. If you were predicting letter grades (A/B/C/D/F), that would be multi-class. If you were predicting the exact final percentage, that would be regression. The number of categories and their nature determines the problem type.

### Question 3
Which algorithm would be a good starting point for a simple binary classification problem?

A) Deep neural network with 10 layers
B) Logistic regression
C) Random forest with 1,000 trees
D) LSTM network

**Correct Answer**: B
**Explanation**: Start simple. Logistic regression (despite its name) is a classification algorithm that's fast, interpretable, and often surprisingly effective. Deep learning and complex ensembles are overkill until you know simpler models won't work. This is the "Occam's Razor" of ML—don't overcomplicate until you need to.

### Question 4
Why do we typically split data into training and testing sets instead of using all data for training?

A) To save computation time
B) To detect overfitting and estimate real-world performance
C) Because scikit-learn requires it
D) To make the model train faster

**Correct Answer**: B
**Explanation**: The test set is your honest evaluation—data the model has never seen. Without it, you can't tell if your model learned patterns or just memorized examples. A model with 100% training accuracy and 60% test accuracy is overfitting. This split is your reality check before deploying to production.

### Question 5
What's a reasonable default train/test split ratio for most ML projects?

A) 50/50
B) 95/5
C) 80/20 or 70/30
D) 10/90

**Correct Answer**: C
**Explanation**: 80/20 is the classic starting point—enough training data to learn patterns, enough test data for reliable evaluation. With huge datasets, you might use 90/10. With tiny datasets, you might use cross-validation instead. But 80/20 or 70/30 is your default. It balances learning and evaluation needs.

### Question 6
In scikit-learn, after calling model.fit(X_train, y_train), what method do you use to make predictions on new data?

A) model.forecast()
B) model.predict()
C) model.estimate()
D) model.calculate()

**Correct Answer**: B
**Explanation**: predict() is the standard interface across all scikit-learn models. This consistency is beautiful—whether you're using logistic regression, random forests, or SVMs, the workflow is the same: fit() to train, predict() to generate outputs. This API consistency makes scikit-learn a joy to work with.

### Question 7
What does "feature" mean in machine learning?

A) A special capability of the model
B) An input variable used to make predictions
C) The target variable you're predicting
D) A bug in the code

**Correct Answer**: B
**Explanation**: Features are your input variables—the columns in your dataset that the model uses to make predictions. In house price prediction, features might include square footage, bedrooms, location. The target (what you're predicting) is separate. Good feature selection and engineering often matters more than algorithm choice.

### Question 8
You have a dataset with 100,000 samples. Why might you use a smaller random subset for initial experimentation?

A) More data always makes models worse
B) To iterate faster and debug issues before full training
C) Smaller datasets always produce better models
D) Because scikit-learn can't handle large datasets

**Correct Answer**: B
**Explanation**: Start small to fail fast. Debug your pipeline on 1,000 samples instead of waiting 10 minutes for 100,000. Once your code works and your approach is validated, scale up. This is efficient engineering—find bugs quickly, iterate rapidly, then run the full experiment. Time is a resource too.

### Question 9
What does it mean when a model is "overfitting"?

A) The model is too large for memory
B) The model performs well on training data but poorly on test data
C) The model trains too quickly
D) The model uses too many features

**Correct Answer**: B
**Explanation**: Overfitting means memorizing instead of learning. The model captures noise and specifics of the training data instead of general patterns. It's like a student who memorizes answers instead of understanding concepts—they ace practice problems but fail the real test. This is one of the most critical concepts in ML.

---

## Project Management Concepts (40%)

### Question 10
When starting a supervised learning project, why should you write user stories before coding?

A) To delay starting the technical work
B) To clarify what problem you're actually solving and for whom
C) Because all projects require user stories
D) To impress stakeholders

**Correct Answer**: B
**Explanation**: User stories prevent building the wrong thing. "As a loan officer, I want to predict default risk so that I can make informed lending decisions" clarifies success criteria before you write code. Without this clarity, you might build a technically perfect model that doesn't serve actual business needs. Clarity first, code second.

### Question 11
You're choosing between three algorithms for your classification problem. What's a professional approach to documenting this decision?

A) Don't document it, just pick one
B) Try all three, document results, explain your final choice
C) Always choose the most complex algorithm
D) Ask your manager to decide

**Correct Answer**: B
**Explanation**: Professional ML work requires justification. Try logistic regression, random forest, and SVM. Document accuracy, training time, interpretability. Choose based on evidence, not intuition. Future you (and your team) will thank you for explaining why you made this choice. This documentation is part of your professional portfolio.

### Question 12
What's the value of tracking your experiments (algorithms tried, parameters used, results) in ML projects?

A) It makes your code run faster
B) It prevents repeating failed approaches and informs future decisions
C) It's required by scikit-learn
D) It impresses professors but has no real value

**Correct Answer**: B
**Explanation**: ML is experimental science. Without tracking, you forget what you tried and why it failed. Good experiment tracking (even a simple spreadsheet) prevents wheel-spinning and builds institutional knowledge. This habit separates junior developers from professionals. Your future self will thank you.

### Question 13
Why is it important to define success metrics before training your model?

A) It's not important; you can decide later
B) To know what "good enough" means and when to stop optimizing
C) To make the project take longer
D) Because your professor requires it

**Correct Answer**: B
**Explanation**: Without success criteria, you'll optimize forever. Is 85% accuracy good enough for your use case? What's the cost of false positives vs false negatives? Define these upfront. In medical diagnosis, 95% might be too low. In email spam filtering, 80% might be fine. Context matters, so define it early.

### Question 14
You've built a model with 92% accuracy on your test set. What's the first thing you should communicate to stakeholders?

A) Just the accuracy number
B) What the accuracy means in the context of their problem and next steps
C) The mathematical details of the algorithm
D) That you need more time to improve it

**Correct Answer**: B
**Explanation**: Stakeholders care about impact, not just metrics. "92% accuracy means we'll correctly classify 920 out of 1,000 loan applications, reducing manual review by 80%" is meaningful. "We used L2-regularized logistic regression with C=0.1" is not. Translate technical results into business value. This communication skill is career-critical.

---

## Scoring Guide
- 90-100%: Excellent understanding of supervised learning fundamentals
- 80-89%: Good grasp, minor conceptual gaps
- 70-79%: Adequate foundation, review algorithm selection and evaluation
- Below 70%: Revisit Module 2 materials, especially classification vs regression

## Study Resources
- Module 2 Assignment: First Classification Model
- Canvas HTML: "Choosing the Right Algorithm"
- scikit-learn User Guide: Supervised Learning
- Module 2 readings on algorithm selection
- Train/test split documentation
- Confusion matrix tutorial
