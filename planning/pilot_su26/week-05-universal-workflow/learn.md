# Learn — Manning Ch 5 + Ch 6 framing: generalization and the universal workflow

**Slot:** Learn (low-stakes, no submission)
**Time:** ~60 minutes including reading
**Goal:** Walk into [practice.md](practice.md) able to answer two questions about *any* ML project: "How will you know if it's working?" and "What's your plan to make it work?"

---

## What to read

- **Manning Ch 5** — *Fundamentals of machine learning.* Generalization, evaluation strategies, overfit/underfit, regularization. This is the diagnostic toolkit.
- **Manning Ch 6** — *The universal workflow of machine learning.* The step-by-step craft of going from "I have a problem" to "I have a deployed model." This is the strategic framework.

Both matter. Ch 5 is the *what* (what can go wrong, how to detect it). Ch 6 is the *how* (what to do about it, in what order).

## The five things you need from this reading

### 1. Overfitting and underfitting — the two failure modes

Every model you'll ever build sits somewhere on this spectrum:

- **Underfitting:** The model is too simple to capture the patterns in the data. Training loss stays high. The model is "not trying hard enough."
- **Overfitting:** The model memorizes the training data instead of learning generalizable patterns. Training loss drops, but validation loss goes *up*. The model is "trying too hard on the wrong thing."

**How to see it on a curve:** When training loss keeps going down but validation loss starts going up, you've crossed from "learning" into "memorizing." The point where they diverge is where overfitting begins.

You've probably already seen this in your Week 2 or Week 3 experiments. Now you have the name for it.

### 2. Train / validation / test — three sets, not two

- **Training set:** What the model learns from.
- **Validation set:** What you use to tune hyperparameters and monitor for overfitting *during* development.
- **Test set:** What you use *once, at the end,* to estimate real-world performance. You don't touch it until you're done tuning.

**The rule:** Never use test set performance to make decisions during development. If you do, you're leaking information and your test metric is no longer trustworthy. `validation_split=0.1` in Keras gives you a validation set automatically.

For small datasets, **k-fold cross-validation** gives you a more reliable estimate: split the data into k chunks, train k times (each time holding out a different chunk), average the results. Manning Ch 5 covers this in detail.

### 3. Regularization — the antidote to overfitting

When your model is overfitting, you have three main remedies:

- **Get more data.** Always the best option. Rarely the easiest.
- **Make the model smaller.** Fewer layers, fewer units. A simpler model has less capacity to memorize.
- **Add regularization.** Penalties that discourage the model from relying too heavily on any single feature or weight.

Common regularization techniques you'll encounter:
- **Dropout** — randomly set some layer outputs to zero during training, forcing the model to spread its bets.
- **L2 regularization (weight decay)** — penalize large weights, encouraging the model to use small, distributed weights.
- **Early stopping** — you already know this one from Week 4.
- **Data augmentation** — create variations of your training data (flipping, rotating, cropping images). Covered in Week 6.

### 4. The universal workflow — Manning's Ch 6 framework

This is the most important framework in the course. Every project follows these steps:

1. **Define the task.** What are you predicting? What data do you have? Is it classification or regression?
2. **Choose the metric.** Accuracy? F1? RMSE? The metric must match what "success" actually means for the problem. (Remember the credit card fraud example from the csc_dash Evaluation Metrics Lab — 99.5% accuracy is meaningless if you never detect fraud.)
3. **Define the evaluation protocol.** Train/val/test split? K-fold? How much data for validation?
4. **Build a baseline.** The dumbest model that could possibly work. Random chance. Always-predict-majority-class. A single Dense layer. This is the floor you need to beat.
5. **Overfit deliberately.** Build a model that's too powerful — lots of layers, lots of units, lots of epochs. Get the training loss as low as possible. If you can't overfit, you have a data problem or a task problem, not a model problem.
6. **Regularize.** Add dropout, reduce capacity, add early stopping, get more data. Find the sweet spot between underfitting and overfitting.

**Why this order matters:** Most beginners skip to step 5 (build a big model) without doing steps 1–4. They can't tell if their model is good because they don't have a baseline or a clear metric. The workflow prevents that.

### 5. Evaluation metrics beyond accuracy

Accuracy works when classes are balanced. When they're not (and they usually aren't in the real world), you need:

- **Precision:** Of the things the model said were positive, how many actually were? (Useful when false positives are costly.)
- **Recall:** Of the things that actually were positive, how many did the model catch? (Useful when false negatives are costly.)
- **F1-score:** Harmonic mean of precision and recall. A single number when you need both.
- **ROC-AUC:** How well the model ranks positive examples above negative ones, across all thresholds.
- **RMSE / MAE:** For regression — how far off are the predictions?

Your project proposal (Week 5 deliverable) requires you to *choose* a metric and *justify* the choice. "I'll use accuracy" is only acceptable if you can explain why accuracy is appropriate for your specific dataset and task.

## Where to go next

→ [practice.md](practice.md) — Apply the universal workflow to a new dataset. Build a baseline that isn't MNIST.
