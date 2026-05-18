# Module 3 Knowledge Check: Model Evaluation & Sprint 1

**Purpose**: Assess understanding of evaluation metrics, confusion matrices, cross-validation, and sprint planning basics
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20 minutes

---

## Technical Concepts (60%)

### Question 1
What does "precision" measure in classification?

A) The percentage of all samples classified correctly
B) Of the samples predicted as positive, how many were actually positive
C) Of the actual positive samples, how many were predicted positive
D) The speed of the model's predictions

**Correct Answer**: B
**Explanation**: Precision answers: "When my model says 'positive', how often is it right?" It's True Positives / (True Positives + False Positives). High precision means few false alarms. If you're predicting fraud, high precision means most flagged transactions really are fraudulent. This matters when false positives are costly.

### Question 2
What does "recall" measure in classification?

A) The percentage of all samples classified correctly
B) Of the samples predicted as positive, how many were actually positive
C) Of the actual positive samples, how many were predicted positive
D) How well the model remembers training data

**Correct Answer**: C
**Explanation**: Recall answers: "Of all the actual positives, how many did I catch?" It's True Positives / (True Positives + False Negatives). High recall means you're not missing many positives. In medical diagnosis, you want high recall—missing a disease (false negative) is dangerous. Recall and precision often trade off.

### Question 3
When would you prioritize recall over precision?

A) Spam email detection
B) Cancer screening
C) Showing relevant ads
D) Recommending movies

**Correct Answer**: B
**Explanation**: In cancer screening, missing a case (false negative) can be fatal. You'd rather have false positives (more tests for healthy people) than miss actual cancer cases. This is the recall priority—catch all the positives, even if you flag some negatives. The cost of missing something is too high.

### Question 4
What is the F1-score?

A) The average of precision and recall
B) The harmonic mean of precision and recall
C) The product of precision and recall
D) The maximum of precision and recall

**Correct Answer**: B
**Explanation**: F1 is the harmonic mean: 2 * (precision * recall) / (precision + recall). It balances both metrics, penalizing extreme imbalances. If precision is 100% but recall is 10%, F1 is low (~18%). It's a single number that captures both aspects of model performance. Use it when you care about both precision and recall equally.

### Question 5
What does a confusion matrix show?

A) How confused the model is during training
B) A breakdown of correct and incorrect predictions by class
C) The time complexity of the algorithm
D) The relationship between features

**Correct Answer**: B
**Explanation**: A confusion matrix is a table showing True Positives, True Negatives, False Positives, and False Negatives. It's the foundation for understanding classification performance. One glance tells you if your model confuses specific classes, has bias, or makes certain systematic errors. It's more informative than just accuracy.

### Question 6
Your binary classifier has 95% accuracy. Why might this be misleading?

A) It's not misleading; 95% is always good
B) If classes are imbalanced (e.g., 95% of samples are one class)
C) Because accuracy is always a poor metric
D) Because you should only use F1-score

**Correct Answer**: B
**Explanation**: With 95% negative samples, a model that always predicts "negative" gets 95% accuracy without learning anything. This is the imbalanced class problem. Always check precision, recall, and the confusion matrix. Accuracy alone can be deeply misleading. Context matters—know your class distribution.

### Question 7
What is an ROC curve?

A) A plot of model training time vs accuracy
B) A plot of true positive rate vs false positive rate at different thresholds
C) A graph showing feature importance
D) A chart of learning rate over time

**Correct Answer**: B
**Explanation**: The ROC curve shows how the trade-off between catching positives (recall) and avoiding false alarms changes as you adjust your classification threshold. The area under the curve (AUC) is a single number summarizing overall performance. AUC of 0.5 is random guessing; 1.0 is perfect. It's threshold-independent performance measurement.

### Question 8
What is k-fold cross-validation?

A) Validating the model k times on the same data
B) Splitting data into k parts, training on k-1, testing on 1, rotating through all k
C) Using k different algorithms
D) Training for k epochs

**Correct Answer**: B
**Explanation**: Cross-validation gives a more robust performance estimate. With 5-fold CV, you train/test 5 times, each time holding out a different 20%. You get 5 performance scores to average. This is more reliable than a single train/test split, especially with small datasets. It's the gold standard for honest evaluation.

### Question 9
Why is cross-validation better than a single train/test split?

A) It's faster to compute
B) It uses less memory
C) It gives a more robust estimate of model performance
D) It always produces better models

**Correct Answer**: C
**Explanation**: A single split might be lucky or unlucky. Cross-validation averages over multiple splits, reducing variance in your performance estimate. You get a mean and standard deviation, showing not just average performance but consistency. This is especially valuable with limited data or when performance varies across different subsets.

---

## Project Management Concepts (40%)

### Question 10
What is a sprint in agile development?

A) A period of very fast coding
B) A time-boxed iteration (typically 1-2 weeks) with specific goals
C) A race to finish the project
D) An emergency bug fix session

**Correct Answer**: B
**Explanation**: A sprint is a planned iteration with a clear goal and timeline. In this course, sprints align with modules—you have specific deliverables, a deadline, and a retrospective. This isn't about speed; it's about sustainable, focused work toward defined outcomes. Sprints provide rhythm and accountability to your work.

### Question 11
What is sprint planning?

A) Writing code as fast as possible
B) Defining what work will be accomplished during the upcoming sprint
C) Planning a party after the project
D) Scheduling meetings with your team

**Correct Answer**: B
**Explanation**: Sprint planning is where you commit to specific work for the iteration. What will you accomplish? What's the acceptance criteria? What's your capacity? For ML projects, this might be: "Train and evaluate 3 classification algorithms, document results, achieve >85% F1-score." You're setting clear, achievable goals.

### Question 12
What is "capacity" in sprint planning?

A) The maximum size of your dataset
B) The realistic amount of work you can complete in the sprint
C) Your computer's memory
D) The number of features in your model

**Correct Answer**: B
**Explanation**: Capacity is honest self-assessment. If you have 10 hours this week for the course, that's your capacity. Don't commit to 20 hours of work. Professional PM means understanding your constraints and committing realistically. Overcommitting leads to burnout and missed deadlines. Be honest, then be accountable to your commitment.

### Question 13
What is a daily standup (or standup meeting)?

A) A meeting where everyone must stand for the entire hour
B) A brief daily check-in where team members share progress and blockers
C) A formal presentation of completed work
D) A meeting to criticize team members

**Correct Answer**: B
**Explanation**: Standups are 5-15 minute check-ins: What did I do? What will I do? What's blocking me? They keep teams synchronized without long meetings. In solo work, a standup can be a daily journal entry. The practice builds accountability and surfaces problems early. It's about transparency, not surveillance.

### Question 14
In the context of this course, what should you "commit" to at the start of each sprint/module?

A) Nothing specific, just see how it goes
B) Specific tasks and goals you'll accomplish by the deadline
C) At least 40 hours of work
D) Perfect scores on all assignments

**Correct Answer**: B
**Explanation**: Commitment means defining your goals upfront. "I will complete the classification model, run cross-validation, document three algorithms, and write a reflection by Sunday." This isn't a contract; it's a plan. Plans can adjust, but starting with clear intent improves focus and follow-through. Deliberate practice over drift.

### Question 15
Why do professional ML teams use sprint-based workflows?

A) Because it's trendy in tech
B) To break complex projects into manageable iterations with regular feedback
C) To make projects take longer
D) Because managers require it

**Correct Answer**: B
**Explanation**: ML projects are uncertain—you don't know what will work upfront. Sprints let you try an approach, evaluate results, and adjust. Two-week iterations with regular check-ins prevent spending months on the wrong path. This is especially valuable in ML where experiments fail frequently. Fast feedback loops accelerate learning.

---

## Scoring Guide
- 90-100%: Excellent grasp of evaluation metrics and sprint fundamentals
- 80-89%: Good understanding, minor gaps in metric interpretation
- 70-79%: Adequate foundation, review precision/recall trade-offs
- Below 70%: Revisit Module 3 materials, especially evaluation metrics

## Study Resources
- Module 3 Assignment: Model Evaluation Deep Dive
- Canvas HTML: "Understanding Precision, Recall, and F1"
- Canvas HTML: "Your First Sprint: What to Expect"
- scikit-learn metrics documentation
- Cross-validation tutorial
- Sprint planning template in course resources
- ROC curve interpretation guide
