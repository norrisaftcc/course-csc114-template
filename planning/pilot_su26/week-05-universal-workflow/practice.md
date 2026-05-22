# Practice — Apply the universal workflow to a new dataset

**Slot:** Practice (retry-OK, no grade penalty)
**Time:** ~75 minutes
**Goal:** Walk through Manning's universal workflow on a dataset that isn't MNIST. By the end, you should have a baseline model, a chosen metric, and a working evaluation protocol — all of which you'll point toward your project proposal.

This lab adapts the approach from `planning/csc_dash/CSC-114/activities/Module_03_Evaluation_Metrics_Lab.md` — we keep the core insight (accuracy alone is dangerous on imbalanced data) but use Keras instead of sklearn and frame it as the universal workflow instead of a sprint.

---

## Part 1 — Pick a dataset

Choose one of these built-in datasets or bring your own. The point is *not* to get the best accuracy — it's to practice the workflow.

| Dataset | Type | Keras/source | Why it's interesting |
|---|---|---|---|
| Fashion MNIST | Image classification (10 classes) | `keras.datasets.fashion_mnist` | Same shape as MNIST, harder problem. Good for comparing against your Week 2 baseline. |
| CIFAR-10 | Image classification (10 classes) | `keras.datasets.cifar10` | Color images (32×32×3). Harder. Dense layers won't work well — good foreshadowing for Week 6 CNNs. |
| Boston Housing (or California Housing) | Regression | `keras.datasets.boston_housing` or `sklearn.datasets.fetch_california_housing` | Different task type — regression, not classification. Forces you to pick a regression metric. |
| IMDb Reviews | Binary text classification | `keras.datasets.imdb` | Text data — foreshadows Week 7 NLP. Requires different preprocessing. |

**If you have your own dataset** for the project, use it here. This Practice notebook becomes the starting point for your proposal.

## Part 2 — Walk the universal workflow

Create a notebook called `week-05/universal_workflow.ipynb`.

### Cell 1: Define the task (Step 1)

```python
# TASK DEFINITION
# What: [e.g., "Classify clothing items into 10 categories"]
# Input: [e.g., "28×28 grayscale images"]
# Output: [e.g., "One of 10 classes: T-shirt, trouser, pullover, ..."]
# Type: [classification or regression]

# Load the dataset
import keras
import numpy as np
import matplotlib.pyplot as plt

# Example with Fashion MNIST — replace with your choice
(x_train, y_train), (x_test, y_test) = keras.datasets.fashion_mnist.load_data()
print(f"Training: {x_train.shape}, Test: {x_test.shape}")
print(f"Classes: {np.unique(y_train)}")
```

### Cell 2: Look at the data

```python
class_names = ["T-shirt", "Trouser", "Pullover", "Dress", "Coat",
               "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"]

fig, axes = plt.subplots(2, 5, figsize=(12, 5))
for i, ax in enumerate(axes.flat):
    ax.imshow(x_train[i], cmap="gray")
    ax.set_title(class_names[y_train[i]])
    ax.axis("off")
plt.tight_layout(); plt.show()
```

### Cell 3: Check class balance

```python
# Are the classes balanced?
unique, counts = np.unique(y_train, return_counts=True)
for cls, count in zip(unique, counts):
    name = class_names[cls] if 'class_names' in dir() else str(cls)
    print(f"  Class {cls} ({name}): {count} ({count/len(y_train)*100:.1f}%)")
```

**Why this matters:** If classes are imbalanced (e.g., 95% negative, 5% positive), accuracy is a bad metric. A model that always predicts "negative" gets 95% accuracy and catches zero positive cases. Check this *before* choosing your metric.

### Cell 4: Choose your metric (Step 2)

```python
# METRIC CHOICE
# Chosen metric: [e.g., "accuracy" or "F1-macro" or "RMSE"]
# Why: [one sentence — e.g., "Classes are roughly balanced, so accuracy 
#       is meaningful. If they were imbalanced, I'd use F1-macro."]
```

### Cell 5: Define evaluation protocol (Step 3)

```python
# EVALUATION PROTOCOL
# Split: [e.g., "60k train (with 10% val split) / 10k test — built into the dataset"]
# Validation strategy: [e.g., "validation_split=0.1 in .fit()"]

# Preprocess
x_train = x_train.reshape((len(x_train), -1)).astype("float32") / 255.0
x_test  = x_test.reshape((len(x_test), -1)).astype("float32") / 255.0
print(f"Preprocessed: {x_train.shape}")
```

### Cell 6: Build a baseline (Step 4)

```python
from keras import layers

# Baseline: simplest model that could work
# For classification: single Dense layer + softmax
# For regression: single Dense layer, no activation
baseline = keras.Sequential([
    layers.Input(shape=(x_train.shape[1],)),
    layers.Dense(10, activation="softmax"),  # adjust for your task
])

baseline.compile(
    optimizer="rmsprop",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)

history_baseline = baseline.fit(
    x_train, y_train,
    epochs=10,
    batch_size=128,
    validation_split=0.1,
    verbose=2,
)

test_loss, test_acc = baseline.evaluate(x_test, y_test, verbose=0)
print(f"\nBaseline test accuracy: {test_acc:.4f}")
```

Record this number. This is the floor your project must beat.

### Cell 7: Try to overfit deliberately (Step 5)

```python
# Overfit model: more capacity than the data needs
overfit_model = keras.Sequential([
    layers.Input(shape=(x_train.shape[1],)),
    layers.Dense(512, activation="relu"),
    layers.Dense(256, activation="relu"),
    layers.Dense(128, activation="relu"),
    layers.Dense(10, activation="softmax"),
])

overfit_model.compile(
    optimizer="rmsprop",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)

history_overfit = overfit_model.fit(
    x_train, y_train,
    epochs=20,
    batch_size=128,
    validation_split=0.1,
    verbose=0,
)

test_loss, test_acc = overfit_model.evaluate(x_test, y_test, verbose=0)
print(f"Overfit model test accuracy: {test_acc:.4f}")
```

### Cell 8: Plot and compare

```python
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# Loss comparison
axes[0].plot(history_baseline.history["val_loss"], label="baseline val_loss")
axes[0].plot(history_overfit.history["val_loss"], label="overfit val_loss")
axes[0].set_title("Validation Loss"); axes[0].legend()

# Accuracy comparison
axes[1].plot(history_baseline.history["val_accuracy"], label="baseline val_acc")
axes[1].plot(history_overfit.history["val_accuracy"], label="overfit val_acc")
axes[1].set_title("Validation Accuracy"); axes[1].legend()
plt.tight_layout(); plt.show()
```

**What to look for:** The overfit model should have better training accuracy but at some point the val_loss starts climbing while train_loss keeps dropping. That gap is overfitting — exactly what you'll regularize in your project.

## Part 3 — Reflection cell

```markdown
## Reflection

1. **What was your baseline accuracy?** Is it meaningfully above random chance?
   [For 10 classes, random is ~10%. For binary, random is ~50%.]

2. **Did the bigger model overfit?** Where on the curves can you see it?

3. **What metric did you choose and why?**

4. **If this were your project, what would your next step be?**
   [Think about Step 6: regularize. What would you add — dropout? Fewer layers?
   More data? A different architecture?]
```

## Before you leave Practice

- [ ] You picked a dataset and loaded it.
- [ ] You checked class balance and chose a metric *with justification*.
- [ ] You have a baseline model with a real number.
- [ ] You built a bigger model and can see overfitting on the curves.
- [ ] The reflection cell connects to Step 6 (regularization) and your project thinking.

## Where to go next

→ [apply.md](apply.md) — Project "problem framing" spike. Choose your project dataset, metric, and baseline.
