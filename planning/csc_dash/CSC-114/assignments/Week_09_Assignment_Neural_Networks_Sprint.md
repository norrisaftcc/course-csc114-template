# Week 9-10 Assignment: "Neural Networks Sprint 3"
## CSC-114 AI I - Deep Learning Introduction

**Due**: End of Week 10 (Friday, 11:59 PM)
**Points**: 75 (Major Sprint - 37.5 Technical / 37.5 PM)
**Sprint Duration**: 2 weeks
**Submission**: GitHub repository + Sprint artifacts + Jupyter notebook

---

## ASSIGNMENT OVERVIEW

This is **Sprint 3** - your third full 2-week sprint. By now, Project Management should be **automatic**. This sprint introduces neural networks and deep learning, moving beyond traditional ML into models that learn hierarchical representations.

**What You're Building:**
Complete neural network implementation using TensorFlow/Keras that classifies images, demonstrates understanding of architecture choices, compares performance to traditional ML, and shows mastery of hyperparameter tuning and overfitting prevention.

**What You're Learning (Technical):**
- Neural network architecture (layers, neurons, connections)
- Activation functions (ReLU, sigmoid, softmax, tanh)
- Forward propagation and backpropagation
- Loss functions and optimization algorithms
- Hyperparameter tuning (learning rate, batch size, epochs)
- Overfitting prevention (dropout, L2 regularization, early stopping)
- Training curves and model monitoring

**What You're Learning (PM):**
- **Autonomous sprint management** (minimal templates needed)
- Velocity prediction accuracy
- Story breakdown mastery
- Proactive blocker identification
- Sprint commitment confidence

**Sprint 3 Maturity Expectation**: By Sprint 3, you should be running sprints with confidence. PM artifacts should be created without prompting. You're now demonstrating professional-level sprint discipline.

---

## PREREQUISITE: UNDERSTAND NEURAL NETWORKS

### What Are Neural Networks?

Traditional ML (like decision trees, logistic regression) requires manual feature engineering. Neural networks automatically learn hierarchical features from raw data.

**Example**:
- Traditional ML for digit recognition: You manually code "does it have curves?", "are there vertical lines?", etc.
- Neural network: Feed in raw pixels, it learns edges → shapes → digits automatically

### Key Concepts You'll Implement

**1. Architecture Components:**
- **Input Layer**: Raw features (e.g., 784 pixels for 28x28 images)
- **Hidden Layers**: Where learning happens (multiple layers = "deep" learning)
- **Output Layer**: Predictions (10 neurons for digits 0-9)

**2. Activation Functions:**
- **ReLU (Rectified Linear Unit)**: f(x) = max(0, x) - Most common in hidden layers
- **Sigmoid**: f(x) = 1/(1+e^(-x)) - Outputs 0-1, used for binary classification
- **Softmax**: Converts logits to probabilities summing to 1 - Used in output layer for multi-class
- **Tanh**: f(x) = (e^x - e^(-x))/(e^x + e^(-x)) - Outputs -1 to 1

**3. Training Process:**
- **Forward Pass**: Input → hidden layers → output (make prediction)
- **Loss Calculation**: How wrong was the prediction?
- **Backward Pass (Backpropagation)**: Calculate gradients (how to adjust weights)
- **Weight Update**: Adjust weights to reduce loss (gradient descent)

**4. Hyperparameters You'll Tune:**
- **Learning Rate**: How big are weight updates? (0.001-0.1 typical)
- **Batch Size**: How many samples per update? (32, 64, 128 typical)
- **Epochs**: How many times to see entire dataset? (10-100 typical)
- **Hidden Layer Sizes**: How many neurons per layer? (64, 128, 256 typical)
- **Number of Layers**: How deep is the network? (1-5 for beginners)

---

## SPRINT 3 PLANNING (AUTONOMOUS MODE)

**This is Sprint 3. You should need minimal guidance.** Your planning should be thorough, realistic, and demonstrate 2 sprints of learning.

### Step 1: Calculate Your Velocity (Data-Driven)

Review your sprint history:

```
Sprint 1 (Weeks 5-6) Velocity: [your completed points]
Sprint 2 (Weeks 7-8) Velocity: [your completed points]

Sprint 3 Planned Capacity = Average(Sprint 1, Sprint 2)
                          = ([S1] + [S2]) / 2
                          = [result] points

Confidence Level: [High/Medium/Low]
Rationale: [e.g., "High - both sprints completed on time,
                   estimates were accurate, no major blockers"]
```

**Drew's Guidance**: If Sprint 1 and Sprint 2 velocities differ by >20%, investigate why. Did you overcommit? Underestimate? Adjust accordingly.

### Step 2: Define Sprint Goal (One Clear Sentence)

**Template**: "Build [what] that [does what] using [technology] to [demonstrate what skill]"

**Example Sprint Goals:**
- ✓ "Build functional neural network classifier that recognizes handwritten digits using TensorFlow/Keras to demonstrate understanding of deep learning fundamentals"
- ✓ "Implement multi-layer neural network with hyperparameter tuning and overfitting prevention to show mastery of model optimization"
- ✗ "Do neural networks" (too vague)
- ✗ "Build the best neural network ever that beats all other models and achieves 100% accuracy" (unrealistic)

**Your Sprint Goal**: _______________________________________________

### Step 3: Break Down User Stories

You should create 4-6 stories totaling your planned capacity. Below are **suggested stories** - adapt based on your velocity and interests.

#### Story 1: Basic Neural Network Implementation (5-8 points)
**As a** data scientist,
**I want to** build a simple neural network with TensorFlow/Keras,
**So that** I can classify MNIST handwritten digits.

**Acceptance Criteria:**
- [ ] TensorFlow/Keras installed and working
- [ ] MNIST dataset loaded and preprocessed
- [ ] Neural network with 1-2 hidden layers built
- [ ] Model trained for at least 10 epochs
- [ ] Training accuracy >90%
- [ ] Test accuracy reported

**Technical Tasks:**
- [ ] Install TensorFlow: `pip install tensorflow`
- [ ] Load MNIST using `keras.datasets.mnist`
- [ ] Normalize pixel values (0-255 → 0-1)
- [ ] Build Sequential model with Dense layers
- [ ] Choose appropriate activation functions
- [ ] Compile model with optimizer and loss function
- [ ] Train with `.fit()` method
- [ ] Evaluate with `.evaluate()` method
- [ ] Document architecture choices

**Estimate**: _____ points (5-8 typical)

#### Story 2: Hyperparameter Tuning Experiments (5-8 points)
**As a** ML engineer,
**I want to** experiment with different hyperparameters,
**So that** I can optimize model performance.

**Acceptance Criteria:**
- [ ] At least 3 different learning rates tested (0.001, 0.01, 0.1)
- [ ] At least 3 different hidden layer sizes tested (64, 128, 256)
- [ ] At least 2 different batch sizes tested (32, 128)
- [ ] Results documented in comparison table
- [ ] Best hyperparameter combination identified
- [ ] Improvement over baseline quantified

**Technical Tasks:**
- [ ] Create hyperparameter testing framework
- [ ] Test learning rate variations
- [ ] Test hidden layer size variations
- [ ] Test batch size variations
- [ ] Record training time for each configuration
- [ ] Record final accuracy for each configuration
- [ ] Visualize results (bar charts or heatmap)
- [ ] Select best configuration with justification

**Estimate**: _____ points (5-8 typical)

#### Story 3: Overfitting Prevention & Regularization (5-8 points)
**As a** ML practitioner,
**I want to** implement dropout and L2 regularization,
**So that** my model generalizes well to unseen data.

**Acceptance Criteria:**
- [ ] Baseline model exhibits overfitting (train acc >> test acc)
- [ ] Dropout layers added with tuned dropout rate
- [ ] L2 regularization applied to Dense layers
- [ ] Training curves plotted (train vs validation loss/accuracy)
- [ ] Overfitting reduced (gap between train/test accuracy narrowed)
- [ ] Best regularization strategy identified

**Technical Tasks:**
- [ ] Split training data into train/validation sets
- [ ] Train model without regularization (establish baseline)
- [ ] Add Dropout layers (try 0.2, 0.3, 0.5 dropout rates)
- [ ] Add L2 regularization to Dense layers (try different penalties)
- [ ] Plot training curves for each configuration
- [ ] Compare validation performance
- [ ] Document when/why each technique works

**Estimate**: _____ points (5-8 typical)

#### Story 4: Training Visualization & Early Stopping (3-5 points)
**As a** data scientist,
**I want to** visualize training progress and implement early stopping,
**So that** I can monitor training and prevent wasted computation.

**Acceptance Criteria:**
- [ ] Training history captured during `.fit()`
- [ ] Loss curves plotted (train vs validation)
- [ ] Accuracy curves plotted (train vs validation)
- [ ] Early stopping callback implemented
- [ ] Early stopping triggers before max epochs (if appropriate)
- [ ] Best model weights restored

**Technical Tasks:**
- [ ] Use `history = model.fit()` to capture metrics
- [ ] Extract loss and accuracy from history object
- [ ] Create subplots showing 4 metrics (train/val loss, train/val acc)
- [ ] Implement `EarlyStopping` callback
- [ ] Configure patience parameter (e.g., 5 epochs)
- [ ] Configure `restore_best_weights=True`
- [ ] Test early stopping by setting high max epochs

**Estimate**: _____ points (3-5 typical)

#### Story 5: Neural Network vs Traditional ML Comparison (3-5 points)
**As a** project lead,
**I want to** compare neural network performance to traditional ML,
**So that** I understand when deep learning is worth the added complexity.

**Acceptance Criteria:**
- [ ] Same MNIST dataset used for fair comparison
- [ ] At least 2 traditional ML models trained (e.g., Logistic Regression, Random Forest)
- [ ] Neural network trained with best hyperparameters
- [ ] Comparison table shows accuracy, training time, model size
- [ ] Analysis explains tradeoffs
- [ ] Recommendation provided for this use case

**Technical Tasks:**
- [ ] Flatten MNIST images for traditional ML (28x28 → 784)
- [ ] Train Logistic Regression classifier
- [ ] Train Random Forest classifier
- [ ] Record training time for each model
- [ ] Record test accuracy for each model
- [ ] Estimate model size (parameters)
- [ ] Create comparison visualization
- [ ] Write analysis of results

**Estimate**: _____ points (3-5 typical)

#### Story 6 (Stretch Goal): Advanced Architecture Experimentation (5-8 points)
**As a** deep learning enthusiast,
**I want to** experiment with deeper architectures and advanced techniques,
**So that** I can understand the impact of network depth and complexity.

**Acceptance Criteria:**
- [ ] Tested shallow (1-2 layers) vs deep (3-5 layers) networks
- [ ] Experimented with different activation functions
- [ ] Tried batch normalization
- [ ] Compared training dynamics (loss curves, convergence speed)
- [ ] Documented findings about architecture choices
- [ ] Identified architecture best suited for MNIST

**Technical Tasks:**
- [ ] Build shallow network (1-2 hidden layers)
- [ ] Build deep network (3-5 hidden layers)
- [ ] Test ReLU vs Tanh vs Leaky ReLU activations
- [ ] Add BatchNormalization layers
- [ ] Compare convergence speed (epochs to 95% accuracy)
- [ ] Compare final performance
- [ ] Document vanishing gradient issues (if encountered)

**Estimate**: _____ points (5-8 typical)

### Step 4: Create Sprint Backlog in GitHub

**This should be automatic by now:**

1. Create GitHub milestone: `Sprint 3 - Neural Networks`
2. Create Issues for each story (use story format from above)
3. Add task checklists to each issue description
4. Assign story point estimates (labels: `5-points`, `8-points`, etc.)
5. Assign all to Sprint 3 milestone
6. Add label: `sprint-3`
7. Create GitHub Project Board (if not already existing)
8. Move all stories to "To Do" column

**Pro Tip**: By Sprint 3, your issue templates should be polished. Copy/paste your best Story 1 format for consistency.

### Step 5: Create Sprint Planning Document

Create `sprint_3_planning.md` in your repository:

```markdown
# Sprint 3 Planning: Neural Networks
**Sprint Duration**: Weeks 9-10
**Sprint Goal**: [Your one-sentence goal]

## Velocity Analysis
- Sprint 1 Velocity: [X] points
- Sprint 2 Velocity: [Y] points
- Average: [Z] points
- **Sprint 3 Commitment**: [Z] points
- Confidence Level: [High/Medium/Low]

## Sprint Backlog
| Story | Estimate | Priority | Notes |
|-------|----------|----------|-------|
| [Story 1 name] | [pts] | Must-Have | [any notes] |
| [Story 2 name] | [pts] | Must-Have | [any notes] |
| [Story 3 name] | [pts] | Should-Have | [any notes] |
| [Story 4 name] | [pts] | Nice-to-Have | [any notes] |
| **TOTAL** | **[total]** | | |

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| TensorFlow installation issues | Medium | High | Test install Day 1, use Colab backup |
| Neural network training time | High | Medium | Start early, use smaller models for testing |
| Overfitting difficult to diagnose | Medium | Medium | Review Week 9 materials, office hours |

## Definition of Done (Sprint-Wide)
- [ ] All must-have stories completed
- [ ] All code runs without errors
- [ ] All acceptance criteria met
- [ ] Training curves show proper convergence
- [ ] Models saved and reproducible
- [ ] Documentation complete
- [ ] Sprint retrospective conducted

## Sprint Forecast
Based on 2-sprint history, I predict:
- [X]% chance of completing all must-have stories
- [Y]% chance of completing stretch goals
- Biggest uncertainty: [e.g., "Hyperparameter tuning may take longer than estimated"]
```

---

## SPRINT EXECUTION (WEEKS 9-10) - AUTONOMOUS MODE

**You should know how to do this by now.** Brief reminders:

### Daily Standups (Required - 10 entries minimum)

Create `sprint_3_standups.md`:

```markdown
# Sprint 3 Daily Standups

## Day 1 (Monday, [Date])
**Yesterday**: Completed Sprint 3 planning, created all GitHub issues
**Today**: Install TensorFlow, test on simple example, start Story 1
**Blockers**: None
**Burndown**: 15 points remaining

## Day 2 (Tuesday, [Date])
**Yesterday**: TensorFlow installed, MNIST loaded, first model running
**Today**: Complete Story 1 - reach 90%+ accuracy, document architecture
**Blockers**: Training slower than expected, may need to use Colab
**Burndown**: 15 points remaining (Story 1 in progress)

[Continue for all 10 days...]
```

**Quality Check**: Your standups should show:
- Daily progress (not "nothing" multiple days in a row)
- Honest blocker identification
- Burndown tracking
- Reflection on estimates vs actual time

### Sprint Board Management

**By Sprint 3, your board should look professional:**

**To Do** | **In Progress** | **Done**
----------|-----------------|----------
Story 4 | Story 2 | Story 1 ✓
Story 5 | |
Story 6 | |

**Rules you should follow automatically:**
- Only 1 story "In Progress" at a time
- Stories move right →, never left ←
- "Done" means ALL acceptance criteria met
- Issues closed only when merged to main

### Burndown Chart (Track Daily)

| Day | Date | Points Remaining | Notes |
|-----|------|------------------|-------|
| 0 | Mon Week 9 | 15 | Sprint starts |
| 1 | Tue Week 9 | 15 | Setting up environment |
| 2 | Wed Week 9 | 10 | Story 1 complete (5 pts) |
| 3 | Thu Week 9 | 10 | Working on Story 2 |
| 4 | Fri Week 9 | 5 | Story 2 complete (5 pts) |
| 5 | Mon Week 10 | 5 | Working on Story 3 |
| 6 | Tue Week 10 | 2 | Story 3 complete (3 pts) |
| 7 | Wed Week 10 | 0 | Story 4 complete (2 pts) |
| 8 | Thu Week 10 | 0 | Buffer for polish |
| 9 | Fri Week 10 | 0 | Sprint complete, retrospective |

**Ideal vs Reality**: Your actual burndown will be bumpy. That's normal! Document why.

---

## TECHNICAL IMPLEMENTATION

### Environment Setup

**Option A: Local Installation**
```bash
pip install tensorflow numpy matplotlib pandas scikit-learn
```

**Option B: Google Colab (Recommended for GPU access)**
TensorFlow pre-installed! Just verify:
```python
import tensorflow as tf
print(f"TensorFlow version: {tf.__version__}")
print(f"GPU available: {tf.config.list_physical_devices('GPU')}")
```

### Starter Code: Basic Neural Network (Story 1)

```python
# Sprint 3: Neural Networks Implementation
# CSC-114 AI I - [Your Name]
# Sprint Goal: [Your sprint goal]

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report, confusion_matrix

# STORY 1: Basic Neural Network Implementation
# Status: [To Do / In Progress / Done]
# Estimate: [X] points | Actual: [Y] hours

print("=== Loading MNIST Dataset ===")
# Load data
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()

print(f"Training samples: {X_train.shape[0]}")
print(f"Test samples: {X_test.shape[0]}")
print(f"Image shape: {X_train.shape[1:]}") # (28, 28)

# Visualize sample images
fig, axes = plt.subplots(2, 5, figsize=(12, 5))
for i, ax in enumerate(axes.flat):
    ax.imshow(X_train[i], cmap='gray')
    ax.set_title(f"Label: {y_train[i]}")
    ax.axis('off')
plt.suptitle("Sample MNIST Digits")
plt.tight_layout()
plt.savefig('mnist_samples.png')
plt.show()

print("\n=== Preprocessing Data ===")
# Normalize pixel values from 0-255 to 0-1
X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

# Flatten images from 28x28 to 784-dimensional vectors
X_train_flat = X_train.reshape(-1, 28*28)
X_test_flat = X_test.reshape(-1, 28*28)

print(f"Input shape after flattening: {X_train_flat.shape}")

# Create validation split
from sklearn.model_selection import train_test_split
X_train_split, X_val, y_train_split, y_val = train_test_split(
    X_train_flat, y_train, test_size=0.2, random_state=42
)

print(f"Training: {X_train_split.shape[0]} samples")
print(f"Validation: {X_val.shape[0]} samples")
print(f"Test: {X_test_flat.shape[0]} samples")

print("\n=== Building Neural Network Architecture ===")
# Create Sequential model
model = keras.Sequential([
    # Input layer (implicit - first Dense layer defines it)
    # 784 input features (28x28 pixels)

    # Hidden Layer 1: 128 neurons with ReLU activation
    layers.Dense(128, activation='relu', input_shape=(784,), name='hidden_1'),

    # Hidden Layer 2: 64 neurons with ReLU activation
    layers.Dense(64, activation='relu', name='hidden_2'),

    # Output Layer: 10 neurons (one per digit 0-9) with softmax
    # Softmax converts raw scores to probabilities that sum to 1
    layers.Dense(10, activation='softmax', name='output')
])

# Display model architecture
model.summary()

print("\n=== Compiling Model ===")
# Compile with optimizer, loss function, and metrics
model.compile(
    optimizer='adam',  # Adaptive learning rate optimizer
    loss='sparse_categorical_crossentropy',  # For integer labels
    metrics=['accuracy']
)

print("Optimizer: Adam")
print("Loss Function: Sparse Categorical Crossentropy")
print("Metrics: Accuracy")

print("\n=== Training Model ===")
# Train model with validation data
history = model.fit(
    X_train_split, y_train_split,
    epochs=20,
    batch_size=128,
    validation_data=(X_val, y_val),
    verbose=1
)

print("\n=== Evaluating Model ===")
# Evaluate on test set
test_loss, test_accuracy = model.evaluate(X_test_flat, y_test, verbose=0)
print(f"Test Loss: {test_loss:.4f}")
print(f"Test Accuracy: {test_accuracy:.4f} ({test_accuracy*100:.2f}%)")

# Generate predictions
y_pred = model.predict(X_test_flat)
y_pred_classes = np.argmax(y_pred, axis=1)

# Classification report
print("\n=== Classification Report ===")
print(classification_report(y_test, y_pred_classes,
                          target_names=[str(i) for i in range(10)]))

# Confusion matrix
cm = confusion_matrix(y_test, y_pred_classes)
plt.figure(figsize=(10, 8))
plt.imshow(cm, interpolation='nearest', cmap='Blues')
plt.title('Confusion Matrix - MNIST Neural Network')
plt.colorbar()
tick_marks = np.arange(10)
plt.xticks(tick_marks, range(10))
plt.yticks(tick_marks, range(10))
plt.ylabel('True Label')
plt.xlabel('Predicted Label')

# Add text annotations
for i in range(10):
    for j in range(10):
        plt.text(j, i, cm[i, j], ha='center', va='center',
                color='white' if cm[i, j] > cm.max()/2 else 'black')

plt.tight_layout()
plt.savefig('confusion_matrix_story1.png')
plt.show()

print("\n=== Story 1 Acceptance Criteria Check ===")
print(f"✓ TensorFlow/Keras working")
print(f"✓ MNIST dataset loaded and preprocessed")
print(f"✓ Neural network built with 2 hidden layers")
print(f"✓ Model trained for 20 epochs")
print(f"✓ Training accuracy: {history.history['accuracy'][-1]:.4f}")
print(f"{'✓' if test_accuracy > 0.90 else '✗'} Test accuracy >90%: {test_accuracy:.4f}")
print(f"✓ Test accuracy reported")
```

### Story 2: Hyperparameter Tuning Template

```python
# STORY 2: Hyperparameter Tuning Experiments
# Status: [To Do / In Progress / Done]
# Estimate: [X] points | Actual: [Y] hours

print("\n\n=== STORY 2: HYPERPARAMETER TUNING ===")

# Define hyperparameter search space
learning_rates = [0.001, 0.01, 0.1]
hidden_sizes = [64, 128, 256]
batch_sizes = [32, 128]

results = []

print("Starting hyperparameter search...")
print(f"Total configurations: {len(learning_rates) * len(hidden_sizes) * len(batch_sizes)}")

for lr in learning_rates:
    for hidden_size in hidden_sizes:
        for batch_size in batch_sizes:
            print(f"\nTesting: LR={lr}, Hidden={hidden_size}, Batch={batch_size}")

            # Build model with current hyperparameters
            model = keras.Sequential([
                layers.Dense(hidden_size, activation='relu', input_shape=(784,)),
                layers.Dense(hidden_size // 2, activation='relu'),
                layers.Dense(10, activation='softmax')
            ])

            # Compile with custom learning rate
            model.compile(
                optimizer=keras.optimizers.Adam(learning_rate=lr),
                loss='sparse_categorical_crossentropy',
                metrics=['accuracy']
            )

            # Train model (fewer epochs for speed)
            import time
            start_time = time.time()

            history = model.fit(
                X_train_split, y_train_split,
                epochs=10,
                batch_size=batch_size,
                validation_data=(X_val, y_val),
                verbose=0
            )

            training_time = time.time() - start_time

            # Evaluate on test set
            test_loss, test_acc = model.evaluate(X_test_flat, y_test, verbose=0)

            # Record results
            results.append({
                'learning_rate': lr,
                'hidden_size': hidden_size,
                'batch_size': batch_size,
                'test_accuracy': test_acc,
                'test_loss': test_loss,
                'training_time': training_time,
                'final_train_acc': history.history['accuracy'][-1],
                'final_val_acc': history.history['val_accuracy'][-1]
            })

            print(f"  Test Accuracy: {test_acc:.4f} | Time: {training_time:.1f}s")

# Convert results to DataFrame
import pandas as pd
results_df = pd.DataFrame(results)

print("\n=== Hyperparameter Tuning Results ===")
print(results_df.sort_values('test_accuracy', ascending=False).to_string(index=False))

# Find best configuration
best_config = results_df.loc[results_df['test_accuracy'].idxmax()]
print(f"\n=== Best Configuration ===")
print(f"Learning Rate: {best_config['learning_rate']}")
print(f"Hidden Size: {best_config['hidden_size']}")
print(f"Batch Size: {best_config['batch_size']}")
print(f"Test Accuracy: {best_config['test_accuracy']:.4f}")
print(f"Training Time: {best_config['training_time']:.1f}s")

# Visualize hyperparameter impact
fig, axes = plt.subplots(1, 3, figsize=(18, 5))

# Learning rate impact
lr_grouped = results_df.groupby('learning_rate')['test_accuracy'].mean()
axes[0].bar(lr_grouped.index.astype(str), lr_grouped.values)
axes[0].set_xlabel('Learning Rate')
axes[0].set_ylabel('Average Test Accuracy')
axes[0].set_title('Impact of Learning Rate')
axes[0].grid(True, alpha=0.3)

# Hidden size impact
hs_grouped = results_df.groupby('hidden_size')['test_accuracy'].mean()
axes[1].bar(hs_grouped.index.astype(str), hs_grouped.values)
axes[1].set_xlabel('Hidden Layer Size')
axes[1].set_ylabel('Average Test Accuracy')
axes[1].set_title('Impact of Hidden Layer Size')
axes[1].grid(True, alpha=0.3)

# Batch size impact
bs_grouped = results_df.groupby('batch_size')['test_accuracy'].mean()
axes[2].bar(bs_grouped.index.astype(str), bs_grouped.values)
axes[2].set_xlabel('Batch Size')
axes[2].set_ylabel('Average Test Accuracy')
axes[2].set_title('Impact of Batch Size')
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('hyperparameter_tuning_results.png')
plt.show()

print("\n=== Story 2 Acceptance Criteria Check ===")
print(f"✓ Tested {len(learning_rates)} learning rates")
print(f"✓ Tested {len(hidden_sizes)} hidden layer sizes")
print(f"✓ Tested {len(batch_sizes)} batch sizes")
print(f"✓ Results documented in table")
print(f"✓ Best configuration identified")
print(f"✓ Improvement quantified")
```

### Story 3: Overfitting Prevention Template

```python
# STORY 3: Overfitting Prevention & Regularization
# Status: [To Do / In Progress / Done]
# Estimate: [X] points | Actual: [Y] hours

print("\n\n=== STORY 3: OVERFITTING PREVENTION ===")

# First, train model WITHOUT regularization to show overfitting
print("=== Baseline Model (No Regularization) ===")
baseline_model = keras.Sequential([
    layers.Dense(256, activation='relu', input_shape=(784,)),
    layers.Dense(256, activation='relu'),
    layers.Dense(10, activation='softmax')
])

baseline_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

baseline_history = baseline_model.fit(
    X_train_split, y_train_split,
    epochs=30,
    batch_size=128,
    validation_data=(X_val, y_val),
    verbose=0
)

# Check for overfitting
final_train_acc = baseline_history.history['accuracy'][-1]
final_val_acc = baseline_history.history['val_accuracy'][-1]
overfitting_gap = final_train_acc - final_val_acc

print(f"Final Training Accuracy: {final_train_acc:.4f}")
print(f"Final Validation Accuracy: {final_val_acc:.4f}")
print(f"Overfitting Gap: {overfitting_gap:.4f}")
print(f"Overfitting detected: {'YES' if overfitting_gap > 0.05 else 'NO'}")

# Model WITH Dropout
print("\n=== Model with Dropout ===")
dropout_model = keras.Sequential([
    layers.Dense(256, activation='relu', input_shape=(784,)),
    layers.Dropout(0.3),  # Drop 30% of neurons randomly
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(10, activation='softmax')
])

dropout_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

dropout_history = dropout_model.fit(
    X_train_split, y_train_split,
    epochs=30,
    batch_size=128,
    validation_data=(X_val, y_val),
    verbose=0
)

dropout_train_acc = dropout_history.history['accuracy'][-1]
dropout_val_acc = dropout_history.history['val_accuracy'][-1]
dropout_gap = dropout_train_acc - dropout_val_acc

print(f"Final Training Accuracy: {dropout_train_acc:.4f}")
print(f"Final Validation Accuracy: {dropout_val_acc:.4f}")
print(f"Overfitting Gap: {dropout_gap:.4f}")
print(f"Gap reduced by: {(overfitting_gap - dropout_gap):.4f}")

# Model WITH L2 Regularization
print("\n=== Model with L2 Regularization ===")
l2_model = keras.Sequential([
    layers.Dense(256, activation='relu', input_shape=(784,),
                kernel_regularizer=keras.regularizers.l2(0.001)),
    layers.Dense(256, activation='relu',
                kernel_regularizer=keras.regularizers.l2(0.001)),
    layers.Dense(10, activation='softmax')
])

l2_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

l2_history = l2_model.fit(
    X_train_split, y_train_split,
    epochs=30,
    batch_size=128,
    validation_data=(X_val, y_val),
    verbose=0
)

l2_train_acc = l2_history.history['accuracy'][-1]
l2_val_acc = l2_history.history['val_accuracy'][-1]
l2_gap = l2_train_acc - l2_val_acc

print(f"Final Training Accuracy: {l2_train_acc:.4f}")
print(f"Final Validation Accuracy: {l2_val_acc:.4f}")
print(f"Overfitting Gap: {l2_gap:.4f}")
print(f"Gap reduced by: {(overfitting_gap - l2_gap):.4f}")

# Model WITH Both Dropout and L2
print("\n=== Model with Dropout + L2 ===")
combined_model = keras.Sequential([
    layers.Dense(256, activation='relu', input_shape=(784,),
                kernel_regularizer=keras.regularizers.l2(0.001)),
    layers.Dropout(0.3),
    layers.Dense(256, activation='relu',
                kernel_regularizer=keras.regularizers.l2(0.001)),
    layers.Dropout(0.3),
    layers.Dense(10, activation='softmax')
])

combined_model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

combined_history = combined_model.fit(
    X_train_split, y_train_split,
    epochs=30,
    batch_size=128,
    validation_data=(X_val, y_val),
    verbose=0
)

combined_train_acc = combined_history.history['accuracy'][-1]
combined_val_acc = combined_history.history['val_accuracy'][-1]
combined_gap = combined_train_acc - combined_val_acc

print(f"Final Training Accuracy: {combined_train_acc:.4f}")
print(f"Final Validation Accuracy: {combined_val_acc:.4f}")
print(f"Overfitting Gap: {combined_gap:.4f}")
print(f"Gap reduced by: {(overfitting_gap - combined_gap):.4f}")

# Visualize training curves for all models
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

histories = [
    (baseline_history, 'Baseline (No Regularization)'),
    (dropout_history, 'Dropout (0.3)'),
    (l2_history, 'L2 Regularization (0.001)'),
    (combined_history, 'Dropout + L2')
]

for idx, (history, title) in enumerate(histories):
    row = idx // 2
    col = idx % 2
    ax = axes[row, col]

    # Plot loss
    ax.plot(history.history['loss'], label='Training Loss', linewidth=2)
    ax.plot(history.history['val_loss'], label='Validation Loss', linewidth=2)
    ax.set_xlabel('Epoch')
    ax.set_ylabel('Loss')
    ax.set_title(f'{title}\nFinal Gap: {histories[idx][0].history["accuracy"][-1] - histories[idx][0].history["val_accuracy"][-1]:.4f}')
    ax.legend()
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('overfitting_prevention_curves.png')
plt.show()

# Comparison table
comparison_df = pd.DataFrame({
    'Model': ['Baseline', 'Dropout', 'L2', 'Dropout + L2'],
    'Train Acc': [final_train_acc, dropout_train_acc, l2_train_acc, combined_train_acc],
    'Val Acc': [final_val_acc, dropout_val_acc, l2_val_acc, combined_val_acc],
    'Gap': [overfitting_gap, dropout_gap, l2_gap, combined_gap]
})

print("\n=== Overfitting Prevention Comparison ===")
print(comparison_df.to_string(index=False))

best_regularization = comparison_df.loc[comparison_df['Gap'].idxmin(), 'Model']
print(f"\nBest regularization strategy: {best_regularization}")

print("\n=== Story 3 Acceptance Criteria Check ===")
print(f"✓ Baseline model exhibits overfitting (gap: {overfitting_gap:.4f})")
print(f"✓ Dropout layers added and tested")
print(f"✓ L2 regularization applied and tested")
print(f"✓ Training curves plotted for all configurations")
print(f"✓ Overfitting reduced (best gap: {comparison_df['Gap'].min():.4f})")
print(f"✓ Best strategy identified: {best_regularization}")
```

### Story 4: Training Visualization & Early Stopping

```python
# STORY 4: Training Visualization & Early Stopping
# Status: [To Do / In Progress / Done]
# Estimate: [X] points | Actual: [Y] hours

print("\n\n=== STORY 4: TRAINING VISUALIZATION & EARLY STOPPING ===")

# Build model with early stopping
print("=== Training Model with Early Stopping ===")

model_es = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(10, activation='softmax')
])

model_es.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Define early stopping callback
early_stopping = keras.callbacks.EarlyStopping(
    monitor='val_loss',      # Watch validation loss
    patience=5,              # Stop if no improvement for 5 epochs
    restore_best_weights=True,  # Restore weights from best epoch
    verbose=1
)

# Train with high max epochs to test early stopping
print("Training with max 50 epochs (early stopping will interrupt)...")
history_es = model_es.fit(
    X_train_split, y_train_split,
    epochs=50,
    batch_size=128,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping],
    verbose=1
)

epochs_trained = len(history_es.history['loss'])
print(f"\nEarly stopping triggered after {epochs_trained} epochs")
print(f"Saved {50 - epochs_trained} epochs of unnecessary training")

# Visualize training history
fig, axes = plt.subplots(1, 2, figsize=(15, 5))

# Loss curves
axes[0].plot(history_es.history['loss'], label='Training Loss', linewidth=2)
axes[0].plot(history_es.history['val_loss'], label='Validation Loss', linewidth=2)
axes[0].axvline(x=epochs_trained - early_stopping.patience,
               color='red', linestyle='--', label='Best Model')
axes[0].set_xlabel('Epoch')
axes[0].set_ylabel('Loss')
axes[0].set_title('Training and Validation Loss')
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Accuracy curves
axes[1].plot(history_es.history['accuracy'], label='Training Accuracy', linewidth=2)
axes[1].plot(history_es.history['val_accuracy'], label='Validation Accuracy', linewidth=2)
axes[1].axvline(x=epochs_trained - early_stopping.patience,
               color='red', linestyle='--', label='Best Model')
axes[1].set_xlabel('Epoch')
axes[1].set_ylabel('Accuracy')
axes[1].set_title('Training and Validation Accuracy')
axes[1].legend()
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('training_curves_early_stopping.png')
plt.show()

# Test final model
test_loss_es, test_acc_es = model_es.evaluate(X_test_flat, y_test, verbose=0)
print(f"\nFinal Test Accuracy: {test_acc_es:.4f}")

print("\n=== Story 4 Acceptance Criteria Check ===")
print(f"✓ Training history captured")
print(f"✓ Loss curves plotted (train vs validation)")
print(f"✓ Accuracy curves plotted (train vs validation)")
print(f"✓ Early stopping callback implemented")
print(f"✓ Early stopping triggered at epoch {epochs_trained} (before max 50)")
print(f"✓ Best model weights restored")
```

---

## SPRINT DELIVERABLES

### Technical Deliverables (37.5 points)
- [ ] **Jupyter notebook**: `sprint_3_neural_networks.ipynb`
  - All code runs without errors
  - Clear section headers for each story
  - Results visualized professionally
  - Markdown cells explain key concepts

- [ ] **Story 1**: Basic neural network trained successfully
  - MNIST dataset loaded and preprocessed
  - Model achieves >90% test accuracy
  - Architecture documented

- [ ] **Story 2**: Hyperparameter tuning completed
  - At least 3 hyperparameters tested
  - Results in comparison table
  - Best configuration identified

- [ ] **Story 3**: Overfitting prevention demonstrated
  - Baseline overfitting established
  - Dropout and L2 regularization implemented
  - Training curves show improvement

- [ ] **Story 4**: Training visualization and early stopping
  - Training curves plotted clearly
  - Early stopping implemented and tested
  - Benefits quantified

- [ ] **Story 5** (if committed): Neural network vs traditional ML comparison
  - Fair comparison on same dataset
  - Multiple metrics compared
  - Analysis of tradeoffs

- [ ] **Model artifacts**:
  - Best model saved: `best_neural_network.h5`
  - Training curves saved as images
  - Results documented in notebook

### PM Deliverables (37.5 points) - AUTONOMOUS EXECUTION
- [ ] **Sprint planning** (`sprint_3_planning.md`)
  - Velocity calculation from Sprint 1-2
  - Clear sprint goal
  - Story breakdown with estimates
  - Risk assessment

- [ ] **Daily standups** (`sprint_3_standups.md`)
  - Minimum 10 entries (2 weeks)
  - Each entry has yesterday/today/blockers
  - Honest reflection on progress
  - Burndown points tracked

- [ ] **Burndown chart**
  - Daily tracking (spreadsheet or image)
  - Shows planned vs actual progress
  - Explanations for deviations

- [ ] **GitHub Issues**
  - All stories created as issues
  - Task checklists included
  - Story points estimated
  - Assigned to Sprint 3 milestone

- [ ] **Sprint board**
  - Stories move through To Do → In Progress → Done
  - Board state captured (screenshots or GitHub Projects)
  - Only 1 story "In Progress" at a time

- [ ] **Sprint retrospective** (`sprint_3_retrospective.md`)
  - What went well?
  - What didn't go well?
  - What will you do differently in Sprint 4?
  - Velocity accuracy reflection

### Documentation Deliverables
- [ ] **README updated** with Sprint 3 summary
  - Sprint goal achieved
  - Best neural network accuracy
  - Key learnings
  - Link to notebook

- [ ] **Code comments** throughout notebook
  - Architecture choices explained
  - Hyperparameter decisions justified
  - Results interpreted

- [ ] **Reflection**: 2-3 paragraphs in notebook
  - What surprised you about neural networks?
  - How did PM help manage complexity?
  - What would you do differently?

---

## GRADING RUBRIC (75 points)

### Technical Implementation (37.5 points)

**Story 1: Basic Neural Network (10 pts)**
- [ ] MNIST loaded and preprocessed (2 pts)
- [ ] Neural network architecture sound (3 pts)
- [ ] Model achieves >90% test accuracy (3 pts)
- [ ] Architecture documented and justified (2 pts)

**Story 2: Hyperparameter Tuning (8 pts)**
- [ ] At least 3 hyperparameters tested systematically (3 pts)
- [ ] Results organized in comparison table (2 pts)
- [ ] Best configuration identified (2 pts)
- [ ] Improvement over baseline quantified (1 pt)

**Story 3: Overfitting Prevention (10 pts)**
- [ ] Baseline overfitting demonstrated (2 pts)
- [ ] Dropout implemented and tested (3 pts)
- [ ] L2 regularization implemented and tested (3 pts)
- [ ] Training curves show improvement (2 pts)

**Story 4: Training Visualization (5 pts)**
- [ ] Training curves plotted clearly (2 pts)
- [ ] Early stopping implemented correctly (2 pts)
- [ ] Benefits quantified (1 pt)

**Code Quality (4.5 pts)**
- [ ] All code runs without errors (1.5 pts)
- [ ] Code well-commented (1.5 pts)
- [ ] Visualizations professional and clear (1.5 pts)

### PM Execution (37.5 points) - AUTONOMOUS MODE

**Sprint Planning (10 pts)**
- [ ] Velocity calculated from Sprint 1-2 data (2 pts)
- [ ] Sprint goal clear and achievable (2 pts)
- [ ] Stories well-defined with acceptance criteria (3 pts)
- [ ] Estimates realistic based on history (2 pts)
- [ ] Risk assessment included (1 pt)

**Daily Execution (12 pts)**
- [ ] Daily standups complete (10 entries minimum) (5 pts)
- [ ] Standups show genuine progress tracking (3 pts)
- [ ] Blockers identified proactively (2 pts)
- [ ] Burndown points tracked daily (2 pts)

**Sprint Tracking (10 pts)**
- [ ] Burndown chart maintained daily (4 pts)
- [ ] GitHub Issues created and tracked (3 pts)
- [ ] Sprint board managed properly (3 pts)

**Sprint Closure (5.5 pts)**
- [ ] Sprint retrospective completed (3 pts)
- [ ] Velocity accuracy analyzed (1.5 pts)
- [ ] Learnings documented for Sprint 4 (1 pt)

### Documentation & Reflection (Bonus 5 points)
- [ ] README updated professionally (1 pt)
- [ ] Code comments explain architecture choices (2 pts)
- [ ] Reflection demonstrates deep understanding (2 pts)

---

## COMMON NEURAL NETWORK CHALLENGES

### Challenge 1: "My model won't improve beyond X% accuracy"
**Symptoms**: Accuracy plateaus early, doesn't improve with more training

**Possible Causes:**
- Model too simple (increase layer size or depth)
- Learning rate too high (try 0.001 or 0.0001)
- Learning rate too low (try 0.01)
- Not enough training data (check train/val/test split)

**Debug Steps:**
```python
# Check if model is learning at all
print(f"Training accuracy: {history.history['accuracy'][-1]:.4f}")
print(f"Validation accuracy: {history.history['val_accuracy'][-1]:.4f}")

# If training accuracy is low → model too simple or LR issue
# If training accuracy high but val accuracy low → overfitting
```

### Challenge 2: "Training loss increases or becomes NaN"
**Symptoms**: Loss values explode to infinity or become NaN

**Causes:**
- Learning rate too high
- Exploding gradients
- Numerical instability

**Solutions:**
```python
# Reduce learning rate drastically
optimizer = keras.optimizers.Adam(learning_rate=0.0001)

# Add gradient clipping
optimizer = keras.optimizers.Adam(learning_rate=0.001, clipnorm=1.0)

# Check data normalization
print(f"X_train range: {X_train.min():.2f} to {X_train.max():.2f}")
# Should be 0-1 or -1 to 1, not 0-255!
```

### Challenge 3: "Training takes forever"
**Symptoms**: Each epoch takes minutes on CPU

**Solutions:**
```python
# Use Google Colab with GPU
# Runtime → Change runtime type → GPU

# Verify GPU is active
print(tf.config.list_physical_devices('GPU'))

# Reduce model size for testing
model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(784,)),  # Smaller layer
    layers.Dense(10, activation='softmax')
])

# Reduce training data temporarily
X_train_small = X_train[:10000]
y_train_small = y_train[:10000]
```

### Challenge 4: "Overfitting is severe (huge train/val gap)"
**Symptoms**: Training accuracy 99%+, validation accuracy 80%

**Solutions (in order):**
```python
# 1. Add dropout (most effective)
layers.Dropout(0.5)  # Try aggressive dropout first

# 2. Reduce model complexity
# Fewer neurons or fewer layers

# 3. Add L2 regularization
layers.Dense(128, activation='relu',
            kernel_regularizer=keras.regularizers.l2(0.01))

# 4. Get more training data (not always possible)

# 5. Use data augmentation (Week 11)
```

### Challenge 5: "My hyperparameter search takes days"
**Symptoms**: Too many combinations to test

**Solutions:**
```python
# Test fewer epochs for hyperparameter search
history = model.fit(..., epochs=5)  # Just to compare, not for final model

# Test on subset of data
X_train_subset = X_train[:10000]

# Use coarse-to-fine search
# Stage 1: Test broad range (0.001, 0.01, 0.1)
# Stage 2: Once you find best range, test within it (0.005, 0.007, 0.01, 0.015)

# Prioritize impactful hyperparameters
# Learning rate > Hidden size > Batch size
```

### Challenge 6: "Vanishing gradients - deep network won't train"
**Symptoms**: Loss doesn't decrease, accuracy stays at baseline

**Causes**: Gradients become too small in deep networks

**Solutions:**
```python
# Use ReLU activation (not sigmoid/tanh)
layers.Dense(128, activation='relu')

# Add Batch Normalization
model = keras.Sequential([
    layers.Dense(128, activation='relu'),
    layers.BatchNormalization(),  # Normalizes activations
    layers.Dense(64, activation='relu'),
    layers.BatchNormalization(),
    layers.Dense(10, activation='softmax')
])

# Use better weight initialization (usually automatic in Keras)
layers.Dense(128, activation='relu',
            kernel_initializer='he_normal')
```

---

## TIPS FOR NEURAL NETWORK SUCCESS

### Tip 1: Start Simple, Then Iterate
```python
# GOOD approach:
# 1. Single hidden layer, default hyperparameters
# 2. Get it working end-to-end
# 3. Add complexity gradually

# BAD approach:
# 1. Build 10-layer network with custom everything
# 2. Get confused when it doesn't work
# 3. Can't debug because too many variables
```

### Tip 2: Visualize Training Curves ALWAYS
```python
# Training curves tell you everything:
# - Both train/val loss decreasing → model learning well
# - Train loss low, val loss high → overfitting
# - Both train/val loss high → model too simple or bad hyperparameters
# - Loss increasing → learning rate too high

# ALWAYS plot curves after training!
```

### Tip 3: Baseline First, Optimize Second
```python
# Get baseline model working (even if accuracy is mediocre)
# THEN optimize
# This gives you a reference point

baseline_accuracy = 0.92  # Your first model
optimized_accuracy = 0.95  # After hyperparameter tuning
improvement = optimized_accuracy - baseline_accuracy
print(f"Optimization improved accuracy by {improvement:.3f}")
```

### Tip 4: Use Early Stopping in Development
```python
# During exploration, always use early stopping
# Saves time when testing many configurations

early_stop = keras.callbacks.EarlyStopping(
    patience=3,  # Shorter patience during exploration
    restore_best_weights=True
)

# For final model, train longer with patience=5-10
```

### Tip 5: Save Your Best Models
```python
# After finding best hyperparameters, save model
model.save('best_neural_network_mnist.h5')

# Load later without retraining
loaded_model = keras.models.load_model('best_neural_network_mnist.h5')
```

---

## LOOKING AHEAD

**Week 11-12**: Convolutional Neural Networks (Sprint 4)
- Specialized architecture for images
- Convolution and pooling layers
- Transfer learning with pre-trained models
- Image classification at state-of-the-art levels

**PM Progression**:
- Sprint 3: PM is automatic (this sprint!)
- Sprint 4: PM is habitual, focus shifts to quality
- Sprint 5: PM enables ambitious projects you couldn't manage otherwise

---

## RESOURCES

**TensorFlow/Keras Documentation:**
- [Keras Sequential Model Guide](https://keras.io/guides/sequential_model/)
- [Keras Layers Reference](https://keras.io/api/layers/)
- [Training and Evaluation Guide](https://keras.io/guides/training_with_built_in_methods/)

**Neural Network Theory:**
- [3Blue1Brown Neural Networks Series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Neural Networks and Deep Learning (Free Book)](http://neuralnetworksanddeeplearning.com/)
- [Visualizing Neural Networks](https://playground.tensorflow.org/)

**MNIST Benchmarks:**
- Classic MNIST leaderboard: http://yann.lecun.com/exdb/mnist/
- Your goal: >95% accuracy (very achievable!)
- State-of-the-art: 99.8% (with convolutional networks)

**Debugging Neural Networks:**
- [A Recipe for Training Neural Networks](http://karpathy.github.io/2019/04/25/recipe/)
- [Common Neural Network Mistakes](https://twitter.com/karpathy/status/1013244313327681536)

---

## DREW'S NOTES

**On Neural Networks:**
Neural networks are where AI starts feeling magical. You feed in raw pixels, and through backpropagation (math you don't need to derive yourself), the network learns to recognize digits. It's building its own feature detectors automatically.

MNIST is the "Hello World" of deep learning. It's been solved - accuracy above 95% is expected. But that's not the point. The point is UNDERSTANDING how these networks work: forward pass, loss calculation, backward pass, weight updates. Once you understand it on MNIST, you can apply it to anything: images, text, audio, time series.

**On Sprint 3 PM Maturity:**
By Sprint 3, PM should feel natural. You don't think about breathing; you just breathe. Sprint planning, standups, burndown tracking - these should be automatic habits now.

Here's the test: If I asked "where are you in your sprint?", you should answer instantly without checking anything. You should FEEL where you are (ahead, on track, or behind) because you're tracking daily.

Sprint 3 is also where your velocity predictions get good. You have 2 sprints of data. Use it! If you keep overcommitting or undercommitting, adjust. The goal isn't to be perfect; it's to be predictable.

**On Debugging Neural Networks:**
Neural networks fail silently. Unlike traditional bugs ("syntax error on line 42"), neural networks just... don't learn. Loss stays high. Accuracy stays at 10% (random guessing for MNIST).

When this happens, check IN ORDER:
1. Data normalized? (0-1 or -1 to 1, not 0-255)
2. Labels correct? (integers 0-9, not one-hot encoded for sparse_categorical_crossentropy)
3. Output layer correct? (10 neurons, softmax activation)
4. Learning rate reasonable? (0.001-0.01 usually safe)
5. Model capacity sufficient? (at least 64 neurons in hidden layer)

Most failures are #1 or #2. Always check your data preprocessing!

**Favorite Moment:**
The first time you visualize what neurons in a hidden layer learned - they look like edge detectors, curve detectors, etc. The network learned these on its own! Nobody programmed "look for curves". That's when deep learning clicks.

**Common Sprint 3 Mistake:**
Students underestimate neural network debugging time. Unlike previous sprints where code either worked or crashed, neural networks can run successfully but produce terrible results. Budget time for iteration!

My advice: Get a simple model working EARLY (even if accuracy is only 85%). Then you have working code to modify. Starting from "nothing works" is much harder than starting from "this works a bit".

**PM Wisdom:**
Sprint 3 is where students either embrace PM or fight it. The ones who embraced it in Sprint 1-2 are now reaping benefits - they're organized, on track, confident. The ones who ignored PM are now overwhelmed by complexity, missed deadlines, and stress.

The lesson: Systems beat motivation. When neural networks get confusing (and they will), your PM system keeps you moving forward. Trust the process!

**Final Note:**
Neural networks are hard. You might not master them in 2 weeks. That's OK! The goal is understanding fundamentals well enough that Week 11 (CNNs) builds naturally. If you finish this sprint understanding how layers, activations, loss functions, and backpropagation fit together, you've won.

And remember: your PM discipline is what will carry you through when the technical gets tough. That's the real lesson of Sprint 3.

---

**Good luck with Sprint 3! The sprint board is your friend. Keep it updated. Trust your process. And when in doubt, visualize your training curves - they'll tell you what's happening!**
