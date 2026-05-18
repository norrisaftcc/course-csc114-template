# Week 11-12 Assignment: "Computer Vision Sprint 4 - Ethics Meets Engineering"
## CSC-114 AI I - Integrating Ethical Analysis into Technical Work

**Due**: End of Week 12 (Friday, 11:59 PM)
**Points**: 75 (Sprint 4 deliverable)
**Submission**: GitHub repository + Sprint artifacts + Ethics documentation

---

## ASSIGNMENT OVERVIEW

This is **Sprint 4** (Weeks 11-12), your final sprint cycle before the capstone project. Unlike previous sprints where PM and technical work were separate, this sprint **integrates ethical analysis directly into your technical user stories**.

**What You're Building:**
A Convolutional Neural Network (CNN) for image classification using transfer learning, with comprehensive ethical analysis of dataset bias, model limitations, and real-world impact.

**What You're Learning (Technical):**
- CNN architecture (convolutional layers, pooling, flattening)
- Transfer learning with pre-trained models (VGG16, ResNet50, MobileNetV2)
- Image preprocessing and data augmentation
- GPU-accelerated training on Google Colab
- Model evaluation for computer vision

**What You're Learning (Ethics):**
- Dataset bias identification and documentation
- Failure mode analysis (what could go wrong?)
- Impact assessment (who is helped/harmed?)
- Ethical testing protocols
- Limitation documentation

**What You're Learning (PM):**
- Ethics-integrated user stories
- Acceptance criteria that include ethical checks
- Documentation-as-deliverable
- Cross-functional sprint execution

**Critical Difference**: Ethics is NOT a separate story—it's woven into EVERY technical story as part of your definition of "done."

---

## PREREQUISITE: UNDERSTAND THE ETHICS INTEGRATION

### Why Ethics NOW?

You've built ML models for 10 weeks. Now you need to understand: **Not all accurate models are good models.**

**Historical Context:**
1. **MIT Gender Shades Study (2018)**: Facial recognition systems had:
   - 0.8% error rate for light-skinned males
   - 34.7% error rate for dark-skinned females
   - Technical accuracy was "high" overall, but catastrophically bad for minorities

2. **Amazon Recruiting Tool (2018)**: ML model for resume screening:
   - Trained on 10 years of historical hiring data
   - Systematically downranked women's resumes
   - Model learned bias from biased training data

3. **COMPAS Criminal Justice Algorithm**: Recidivism prediction:
   - 61% accurate overall (sounds reasonable)
   - Twice as likely to falsely flag Black defendants as high-risk
   - Used in real sentencing decisions affecting people's lives

**The Pattern**: Technical success + ethical failure = harm.

**Your Goal This Sprint**: Build a CNN that works AND document where it might fail ethically.

---

## PREREQUISITE STEPS

### ✅ Checklist
- [ ] Completed Sprints 1-3 (Weeks 5-10)
- [ ] Google Colab account ready (GPU required for training)
- [ ] Reviewed pm-materials/05-Ethics-in-ML.md (Week 10)
- [ ] Reviewed cv-materials/02-CNNs.md (Week 11)
- [ ] Attended Week 11 ethics + CV live session (or watched recording)

---

## PART 1: SPRINT PLANNING - ETHICS INTEGRATED

### Step 1: Sprint Goal (Ethics-Aware)

**Example Sprint Goal**:
"Build a CNN image classifier using transfer learning that achieves >85% accuracy on test data AND documents potential ethical failures including dataset bias, demographic performance gaps, and misuse scenarios."

**Your Sprint Goal**: [Write yours following the pattern above]

### Step 2: Determine Your Capacity

Based on Sprint 3 velocity:
- Sprint 1 velocity: [your points completed]
- Sprint 2 velocity: [your points completed]
- Sprint 3 velocity: [your points completed]
- **Average velocity**: (S1 + S2 + S3) / 3 = [your capacity]
- **Sprint 4 planned capacity**: [realistic based on above]

Example: If S1=18pts, S2=20pts, S3=22pts, average=20pts, plan for 18-20pts

### Step 3: Ethics-Integrated User Stories

Notice: Each story has BOTH technical AND ethical acceptance criteria.

---

#### **STORY 1: CNN Implementation with Architecture Analysis**
**Estimate**: 8 points

**User Story**:
- **As a** computer vision engineer,
- **I want** to implement a CNN with convolutional layers, pooling, and dense layers,
- **So that** I can classify images with spatial feature learning.

**Technical Acceptance Criteria**:
- [ ] CNN architecture defined with:
  - At least 2 convolutional layers (Conv2D)
  - MaxPooling after each conv layer
  - Flatten layer before dense layers
  - Dense layers with dropout for regularization
- [ ] Model trained on chosen dataset (CIFAR-10, Fashion-MNIST, or similar)
- [ ] Training/validation accuracy plotted over epochs
- [ ] Test accuracy ≥75%

**Ethical Acceptance Criteria**:
- [ ] Dataset composition documented (what classes exist?)
- [ ] Class balance analyzed (are some classes overrepresented?)
- [ ] Per-class accuracy calculated (does model fail on specific classes?)
- [ ] Failure examples documented (show 5 misclassified images with analysis)
- [ ] Hypothesis documented: WHY might model fail on certain classes?

**Why Ethics Matters Here**: If your "cat vs dog" classifier fails 90% of the time on black cats, that's a bias signal. Scale this to medical imaging (dark skin) or surveillance (demographic groups), and failures become harms.

---

#### **STORY 2: Transfer Learning with Bias Documentation**
**Estimate**: 8 points

**User Story**:
- **As a** ML practitioner,
- **I want** to use transfer learning with a pre-trained model (VGG16/ResNet50/MobileNetV2),
- **So that** I can leverage learned features and train faster with less data.

**Technical Acceptance Criteria**:
- [ ] Pre-trained model loaded (VGG16, ResNet50, OR MobileNetV2)
- [ ] Base layers frozen (trainable=False)
- [ ] Custom classifier head added (Dense layers for your classes)
- [ ] Model fine-tuned on your dataset
- [ ] Test accuracy ≥85% (should exceed Story 1's from-scratch model)
- [ ] Training time and GPU usage documented

**Ethical Acceptance Criteria**:
- [ ] Research what dataset pre-trained model was trained on (usually ImageNet)
- [ ] Document ImageNet composition:
  - What kinds of images? (object-centric, Western-centric?)
  - What's missing? (underrepresented cultures, contexts?)
- [ ] Test model on "edge cases" not in ImageNet:
  - Non-Western cultural objects
  - Unusual lighting/angles
  - Low-quality images (what real users might upload)
- [ ] Document performance gaps: "Model performs worse on [X] because..."
- [ ] Limitation statement: "This model should NOT be used for [scenarios] because..."

**Why Ethics Matters Here**: Transfer learning imports the biases of the original dataset. If ImageNet has mostly Western household objects, your model inherits that bias. You need to know and document this.

---

#### **STORY 3: Data Augmentation with Failure Mode Analysis**
**Estimate**: 5 points

**User Story**:
- **As a** data scientist,
- **I want** to apply data augmentation (rotation, flip, zoom, brightness),
- **So that** my model generalizes better to varied real-world conditions.

**Technical Acceptance Criteria**:
- [ ] ImageDataGenerator configured with:
  - Random rotations (up to 20 degrees)
  - Horizontal flips
  - Width/height shifts
  - Zoom range
- [ ] Augmented training data visualized (show before/after examples)
- [ ] Model trained with augmentation shows improved validation accuracy
- [ ] Comparison: augmented vs non-augmented model performance

**Ethical Acceptance Criteria**:
- [ ] Test augmented model on:
  - Extreme rotations (what breaks it?)
  - Very dark images (low-light scenarios)
  - Occluded images (partially blocked objects)
- [ ] Document failure thresholds:
  - "Model fails when rotation exceeds [X] degrees"
  - "Model fails in lighting below [Y] threshold"
- [ ] Real-world scenario analysis:
  - Where would these failures occur? (Security cameras at night, user photos in dim lighting)
  - Who is affected? (Users in poor lighting, surveillance in underserved areas with bad infrastructure)
- [ ] Mitigation recommendations: "To improve model for low-light scenarios, we should..."

**Why Ethics Matters Here**: Data augmentation can mask OR reveal robustness problems. If your model only works in perfect lighting, it won't work equitably for all users.

---

#### **STORY 4: Ethical Impact Assessment & Documentation**
**Estimate**: 4 points

**User Story**:
- **As a** responsible ML practitioner,
- **I want** to document potential misuse, bias, and limitations of my model,
- **So that** future users understand ethical constraints and risks.

**Technical Acceptance Criteria**:
- [ ] Comprehensive README with:
  - Model architecture summary
  - Training data description
  - Performance metrics (accuracy, precision, recall, F1)
  - Usage instructions

**Ethical Acceptance Criteria**:
- [ ] Complete `ETHICS_DOCUMENTATION.md` file including:

  **Section 1: Dataset Bias Analysis**
  - [ ] Training data source and composition
  - [ ] Identified biases (class imbalance, demographic gaps, cultural bias)
  - [ ] Missing populations or scenarios

  **Section 2: Model Limitations**
  - [ ] Known failure modes (documented from Stories 1-3)
  - [ ] Contexts where model should NOT be used
  - [ ] Performance disparities across groups/classes

  **Section 3: Potential Harms**
  - [ ] Misuse scenarios: "This model could be misused to..."
  - [ ] Vulnerable populations: "This model could harm [X] by..."
  - [ ] Unintended consequences: "If deployed without oversight, this could..."

  **Section 4: Case Study Analysis**
  - [ ] Reference to 2 documented AI failures (e.g., Gender Shades, COMPAS)
  - [ ] Comparison: "How could my model repeat these failures?"
  - [ ] Lessons applied: "I prevented [X] by..."

  **Section 5: Recommendations**
  - [ ] Who should (and shouldn't) use this model?
  - [ ] Required safeguards before deployment
  - [ ] Further testing needed

**Why Ethics Matters Here**: This is your "ethics label"—like nutrition labels on food. Users deserve to know what they're deploying and what could go wrong.

---

### Step 4: Create Sprint Backlog

In GitHub:
1. Create milestone: "Sprint 4 - Computer Vision + Ethics"
2. Create Issues for Stories 1-4 above
3. Assign all to Sprint 4 milestone
4. Add labels: `sprint-4`, `ethics`, `computer-vision`
5. Move to "To Do" column on project board

### Step 5: Task Breakdown for Each Story

**Example (Story 1)**:
```markdown
## Technical Tasks
- [ ] Research CNN architecture patterns (Conv2D, MaxPooling, Dropout)
- [ ] Load dataset (CIFAR-10 or Fashion-MNIST)
- [ ] Build CNN model architecture
- [ ] Train model (10+ epochs)
- [ ] Evaluate on test set
- [ ] Plot training curves

## Ethics Tasks
- [ ] Document dataset class distribution
- [ ] Calculate per-class accuracy
- [ ] Find and analyze 5 failure cases
- [ ] Write hypothesis for why failures occurred
- [ ] Document in ethics section of notebook
```

**Deliverable**: `sprint_4_planning.md` document in your repo

---

## SPRINT EXECUTION (WEEKS 11-12)

### Daily Standups (Required)

Every day (Mon-Fri), create standup entry in `sprint_4_standups.md`:

```markdown
## Day 1 (Monday, March 10)
**What I did yesterday**: Completed sprint planning, researched CNN architectures
**What I'll do today**: Build first CNN model (Story 1), analyze dataset composition
**Blockers**: None yet

## Day 2 (Tuesday, March 11)
**What I did yesterday**: CNN training, achieved 72% accuracy (need 75%)
**What I'll do today**: Tune hyperparameters, start bias analysis
**Blockers**: Confused about calculating per-class accuracy—will research

[Continue for all 10 days]
```

### Sprint Board Management

GitHub Projects columns:
- **To Do**: Stories 1-4 initially
- **In Progress**: ONE story at a time (technical + ethics together)
- **Done**: Move when BOTH technical AND ethical acceptance criteria met

**Critical Rule**: Don't mark Story 1 "Done" until you've completed the failure analysis. Technical completion ≠ story completion.

### Burndown Chart

Track remaining story points daily:

| Day | Points Remaining | Notes |
|-----|------------------|-------|
| Day 1 | 25 | Sprint starts |
| Day 2 | 25 | Still building CNN |
| Day 3 | 22 | CNN working, starting bias analysis |
| Day 4 | 17 | Story 1 complete (8 pts) |
| Day 5 | 17 | Working on transfer learning |
| ... | ... | ... |
| Day 10 | 0 | Sprint complete! |

---

## TECHNICAL IMPLEMENTATION

### Setup: Google Colab GPU Configuration

Create new notebook: `sprint_4_computer_vision_ethics.ipynb`

```python
# Sprint 4: Computer Vision + Ethics Integration
# CSC-114 - [Your Name]
# Sprint Goal: [Your goal from planning]

# CRITICAL: Enable GPU in Colab
# Runtime → Change runtime type → Hardware accelerator → GPU

# Verify GPU availability
import tensorflow as tf
print(f"GPU Available: {tf.config.list_physical_devices('GPU')}")
print(f"TensorFlow Version: {tf.__version__}")

# Required imports
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import VGG16, ResNet50, MobileNetV2
from sklearn.metrics import classification_report, confusion_matrix
import pandas as pd
```

---

### STORY 1 IMPLEMENTATION: CNN from Scratch

```python
# ============================================
# STORY 1: CNN Implementation + Ethics Analysis
# Estimate: 8 points | Status: [To Do/In Progress/Done]
# ============================================

# Load dataset - CIFAR-10 (10 classes: airplane, car, bird, cat, etc.)
(X_train, y_train), (X_test, y_test) = keras.datasets.cifar10.load_data()

# Dataset information
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

print(f"Training samples: {len(X_train)}")
print(f"Test samples: {len(X_test)}")
print(f"Image shape: {X_train[0].shape}")  # (32, 32, 3) - RGB images

# ETHICS: Dataset Composition Analysis
print("\n=== ETHICS CHECK 1: Dataset Class Distribution ===")
unique, counts = np.unique(y_train, return_counts=True)
class_distribution = pd.DataFrame({
    'Class': [class_names[i] for i in unique],
    'Count': counts,
    'Percentage': counts / len(y_train) * 100
})
print(class_distribution)

# Visualize distribution
plt.figure(figsize=(10, 4))
plt.bar(class_distribution['Class'], class_distribution['Count'])
plt.title('Training Data Class Distribution')
plt.xlabel('Class')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('class_distribution.png')
plt.show()

# ETHICS OBSERVATION:
# Document whether classes are balanced or imbalanced
# If imbalanced, note which classes are underrepresented

# Normalize pixel values to [0, 1]
X_train = X_train.astype('float32') / 255.0
X_test = X_test.astype('float32') / 255.0

# Convert labels to categorical (one-hot encoding)
y_train_cat = keras.utils.to_categorical(y_train, 10)
y_test_cat = keras.utils.to_categorical(y_test, 10)

# Build CNN Architecture
model_cnn = keras.Sequential([
    # First Convolutional Block
    layers.Conv2D(32, (3, 3), activation='relu', padding='same',
                  input_shape=(32, 32, 3)),
    layers.BatchNormalization(),
    layers.Conv2D(32, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Second Convolutional Block
    layers.Conv2D(64, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.Conv2D(64, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Third Convolutional Block
    layers.Conv2D(128, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.Conv2D(128, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.4),

    # Flatten and Dense Layers
    layers.Flatten(),
    layers.Dense(256, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')  # 10 classes
])

model_cnn.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

print("\n=== CNN Architecture ===")
model_cnn.summary()

# Train the model
print("\n=== Training CNN ===")
history_cnn = model_cnn.fit(
    X_train, y_train_cat,
    batch_size=128,
    epochs=25,
    validation_split=0.2,
    verbose=1
)

# Plot training curves
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history_cnn.history['accuracy'], label='Training Accuracy')
plt.plot(history_cnn.history['val_accuracy'], label='Validation Accuracy')
plt.title('CNN Training Progress')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.grid(True)

plt.subplot(1, 2, 2)
plt.plot(history_cnn.history['loss'], label='Training Loss')
plt.plot(history_cnn.history['val_loss'], label='Validation Loss')
plt.title('CNN Loss Progress')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.savefig('cnn_training_curves.png')
plt.show()

# Evaluate on test set
test_loss, test_accuracy = model_cnn.evaluate(X_test, y_test_cat, verbose=0)
print(f"\n=== CNN Test Accuracy: {test_accuracy:.4f} ===")

# ============================================
# ETHICS CHECK 2: Per-Class Performance Analysis
# ============================================

print("\n=== ETHICS CHECK 2: Per-Class Performance ===")

# Get predictions
y_pred = model_cnn.predict(X_test)
y_pred_classes = np.argmax(y_pred, axis=1)
y_test_classes = y_test.flatten()

# Generate classification report
print("\nDetailed Classification Report:")
print(classification_report(y_test_classes, y_pred_classes,
                            target_names=class_names))

# Calculate per-class accuracy
per_class_accuracy = {}
for i, class_name in enumerate(class_names):
    class_mask = (y_test_classes == i)
    class_correct = np.sum((y_pred_classes == i) & class_mask)
    class_total = np.sum(class_mask)
    accuracy = class_correct / class_total
    per_class_accuracy[class_name] = accuracy
    print(f"{class_name:12s}: {accuracy:.3f} ({class_correct}/{class_total})")

# Visualize per-class performance
plt.figure(figsize=(12, 5))
classes_sorted = sorted(per_class_accuracy.items(), key=lambda x: x[1])
classes, accuracies = zip(*classes_sorted)
colors = ['red' if acc < 0.70 else 'orange' if acc < 0.80 else 'green'
          for acc in accuracies]

plt.barh(classes, accuracies, color=colors)
plt.xlabel('Accuracy')
plt.title('Per-Class Performance (Red = Concerning, Orange = Moderate, Green = Good)')
plt.axvline(x=0.75, color='black', linestyle='--', label='75% Threshold')
plt.legend()
plt.tight_layout()
plt.savefig('per_class_performance.png')
plt.show()

# ETHICS OBSERVATION:
# Which classes perform poorly? Why might that be?
# Example: "Cat" and "Dog" might be confused due to similar features
# Example: "Truck" and "Automobile" might overlap

# ============================================
# ETHICS CHECK 3: Failure Case Analysis
# ============================================

print("\n=== ETHICS CHECK 3: Failure Case Analysis ===")

# Find misclassified examples
misclassified_indices = np.where(y_pred_classes != y_test_classes)[0]
print(f"Total misclassifications: {len(misclassified_indices)}")

# Analyze 10 failure cases
np.random.seed(42)
failure_samples = np.random.choice(misclassified_indices, 10, replace=False)

plt.figure(figsize=(15, 6))
for i, idx in enumerate(failure_samples):
    plt.subplot(2, 5, i+1)
    plt.imshow(X_test[idx])
    true_label = class_names[y_test_classes[idx]]
    pred_label = class_names[y_pred_classes[idx]]
    confidence = np.max(y_pred[idx])
    plt.title(f"True: {true_label}\nPred: {pred_label}\nConf: {confidence:.2f}",
              fontsize=8)
    plt.axis('off')

plt.suptitle('Failure Case Analysis: What Did the Model Get Wrong?')
plt.tight_layout()
plt.savefig('failure_cases.png')
plt.show()

# ETHICS ANALYSIS QUESTIONS TO DOCUMENT:
print("\n=== ETHICS DOCUMENTATION REQUIRED ===")
print("Answer these questions in your notebook markdown:")
print("1. Which classes does the model confuse most often? (Create confusion matrix)")
print("2. Are there patterns in failures? (Similar colors, shapes, contexts)")
print("3. If this were deployed for real-world use, who might be harmed by these failures?")
print("4. Example: Medical imaging - misclassifying tumors harms patients")
print("5. Example: Wildlife monitoring - missing endangered species harms conservation")

# Confusion Matrix
cm = confusion_matrix(y_test_classes, y_pred_classes)
plt.figure(figsize=(10, 8))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=class_names, yticklabels=class_names)
plt.title('Confusion Matrix: Where Does the Model Fail?')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.tight_layout()
plt.savefig('confusion_matrix_cnn.png')
plt.show()

print("\n✓ Story 1 Technical Requirements: COMPLETE")
print("✓ Story 1 Ethics Requirements: COMPLETE")
```

---

### STORY 2 IMPLEMENTATION: Transfer Learning

```python
# ============================================
# STORY 2: Transfer Learning + Bias Documentation
# Estimate: 8 points | Status: [To Do/In Progress/Done]
# ============================================

# Load pre-trained MobileNetV2 (efficient for Colab)
# Base model trained on ImageNet (1.4M images, 1000 classes)

base_model = MobileNetV2(
    input_shape=(96, 96, 3),  # MobileNetV2 requires larger images
    include_top=False,  # Remove original classifier
    weights='imagenet'
)

# Freeze base model layers (don't retrain them)
base_model.trainable = False

print("=== Transfer Learning: MobileNetV2 Base ===")
print(f"Base model layers: {len(base_model.layers)}")
print(f"Base model trainable: {base_model.trainable}")

# Build custom classifier on top
model_transfer = keras.Sequential([
    # Resize CIFAR-10 images to MobileNetV2 input size
    layers.Resizing(96, 96),

    # Pre-trained base
    base_model,

    # Custom classifier head
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.5),
    layers.Dense(128, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(10, activation='softmax')  # 10 CIFAR-10 classes
])

model_transfer.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

print("\n=== Transfer Learning Model Architecture ===")
model_transfer.summary()

# Train transfer learning model
print("\n=== Training Transfer Learning Model ===")
history_transfer = model_transfer.fit(
    X_train, y_train_cat,
    batch_size=128,
    epochs=15,  # Usually converges faster
    validation_split=0.2,
    verbose=1
)

# Evaluate
test_loss_transfer, test_accuracy_transfer = model_transfer.evaluate(
    X_test, y_test_cat, verbose=0
)
print(f"\n=== Transfer Learning Test Accuracy: {test_accuracy_transfer:.4f} ===")

# Compare to CNN from scratch
print(f"\nCNN from scratch: {test_accuracy:.4f}")
print(f"Transfer learning: {test_accuracy_transfer:.4f}")
print(f"Improvement: {(test_accuracy_transfer - test_accuracy):.4f}")

# ============================================
# ETHICS CHECK 4: ImageNet Bias Analysis
# ============================================

print("\n=== ETHICS CHECK 4: ImageNet Bias Documentation ===")
print("""
ImageNet Dataset (MobileNetV2 pre-trained on):
- 14 million images
- 1000 object categories
- Collected from Internet image search

KNOWN BIASES IN IMAGENET:
1. Geographic Bias: Predominantly Western contexts
   - Example: "Wedding" images are Western-style white weddings
   - Missing: Traditional weddings from other cultures

2. Socioeconomic Bias: Middle/upper-class contexts
   - Example: Kitchen images show modern appliances
   - Missing: Varied economic contexts

3. Object-Centric Bias: Clean, centered, well-lit objects
   - Real-world: Cluttered, poor lighting, partial occlusion

4. Cultural Bias: Western cultural norms embedded
   - Example: "Classroom" images are Western-style classrooms
   - Missing: Diverse educational settings

IMPLICATIONS FOR YOUR MODEL:
- Your CIFAR-10 model inherits these biases through transfer learning
- The "feature detectors" learned on ImageNet reflect ImageNet's biases
- Model may perform worse on non-Western, non-standard contexts
""")

# ============================================
# ETHICS CHECK 5: Edge Case Testing
# ============================================

print("\n=== ETHICS CHECK 5: Edge Case Testing ===")

# Test on modified test images to reveal robustness issues

def test_edge_case(images, labels, modification_name, modification_fn):
    """Test model on edge cases"""
    modified_images = modification_fn(images)
    modified_images = np.clip(modified_images, 0, 1)  # Keep in valid range

    y_pred_edge = model_transfer.predict(modified_images, verbose=0)
    y_pred_classes_edge = np.argmax(y_pred_edge, axis=1)

    accuracy_edge = np.mean(y_pred_classes_edge == labels.flatten())

    print(f"\n{modification_name}:")
    print(f"  Accuracy: {accuracy_edge:.4f}")
    print(f"  Drop from normal: {test_accuracy_transfer - accuracy_edge:.4f}")

    return accuracy_edge, modified_images

# Edge Case 1: Very dark images (low light conditions)
dark_accuracy, dark_images = test_edge_case(
    X_test[:1000], y_test[:1000],
    "Very Dark Images (Simulating Low Light)",
    lambda imgs: imgs * 0.3
)

# Edge Case 2: Very bright images (overexposed)
bright_accuracy, bright_images = test_edge_case(
    X_test[:1000], y_test[:1000],
    "Very Bright Images (Overexposed)",
    lambda imgs: np.minimum(imgs * 1.7 + 0.2, 1.0)
)

# Edge Case 3: Noisy images (poor quality sensors)
noise_accuracy, noisy_images = test_edge_case(
    X_test[:1000], y_test[:1000],
    "Noisy Images (Low Quality Sensors)",
    lambda imgs: imgs + np.random.normal(0, 0.15, imgs.shape)
)

# Visualize edge case performance
edge_cases = {
    'Normal': test_accuracy_transfer,
    'Dark': dark_accuracy,
    'Bright': bright_accuracy,
    'Noisy': noise_accuracy
}

plt.figure(figsize=(10, 5))
plt.bar(edge_cases.keys(), edge_cases.values(),
        color=['green', 'red', 'red', 'red'])
plt.ylabel('Accuracy')
plt.title('Model Performance on Edge Cases')
plt.axhline(y=0.75, color='black', linestyle='--', label='75% Threshold')
plt.ylim(0, 1)
plt.legend()
plt.tight_layout()
plt.savefig('edge_case_performance.png')
plt.show()

# Show example edge cases
fig, axes = plt.subplots(3, 5, figsize=(15, 9))
for i in range(5):
    # Normal
    axes[0, i].imshow(X_test[i])
    axes[0, i].set_title('Normal', fontsize=8)
    axes[0, i].axis('off')

    # Dark
    axes[1, i].imshow(dark_images[i])
    axes[1, i].set_title('Dark', fontsize=8)
    axes[1, i].axis('off')

    # Noisy
    axes[2, i].imshow(noisy_images[i])
    axes[2, i].set_title('Noisy', fontsize=8)
    axes[2, i].axis('off')

plt.suptitle('Edge Case Examples: How Image Quality Affects Model')
plt.tight_layout()
plt.savefig('edge_case_examples.png')
plt.show()

# ============================================
# ETHICS DOCUMENTATION REQUIRED
# ============================================

print("\n=== ETHICS DOCUMENTATION: Limitations ===")
print("""
DOCUMENT IN ETHICS_DOCUMENTATION.md:

1. Transfer Learning Bias Inheritance:
   - Pre-trained on ImageNet (Western, middle-class contexts)
   - May not generalize to non-Western contexts
   - May fail on objects in unusual cultural settings

2. Edge Case Failures:
   - Poor lighting reduces accuracy by [X]%
   - Noise reduces accuracy by [Y]%
   - Real-world impact: Security cameras at night, cheap sensors in developing regions

3. Recommended Limitations:
   - "Do NOT use this model for critical applications (medical, security)"
   - "Do NOT deploy without testing on target demographic/context"
   - "Do NOT assume performance generalizes beyond CIFAR-10 test set"

4. Required Safeguards:
   - Test on diverse lighting conditions before deployment
   - Monitor per-class performance in production
   - Implement human review for high-stakes decisions
""")

print("\n✓ Story 2 Technical Requirements: COMPLETE")
print("✓ Story 2 Ethics Requirements: COMPLETE")
```

---

### STORY 3 IMPLEMENTATION: Data Augmentation

```python
# ============================================
# STORY 3: Data Augmentation + Failure Mode Analysis
# Estimate: 5 points | Status: [To Do/In Progress/Done]
# ============================================

# Create ImageDataGenerator with augmentation
datagen = ImageDataGenerator(
    rotation_range=20,        # Random rotations up to 20 degrees
    width_shift_range=0.2,    # Random horizontal shifts
    height_shift_range=0.2,   # Random vertical shifts
    horizontal_flip=True,     # Random horizontal flips
    zoom_range=0.2,          # Random zoom
    brightness_range=[0.8, 1.2]  # Random brightness adjustment
)

# Visualize augmentation
print("=== Data Augmentation Examples ===")
sample_image = X_train[0:1]  # Take one image
sample_label = y_train_cat[0:1]

fig, axes = plt.subplots(2, 5, figsize=(15, 6))
axes = axes.ravel()

# Original image
axes[0].imshow(sample_image[0])
axes[0].set_title('Original')
axes[0].axis('off')

# Generate 9 augmented versions
augment_iter = datagen.flow(sample_image, batch_size=1)
for i in range(1, 10):
    augmented = next(augment_iter)[0]
    axes[i].imshow(augmented)
    axes[i].set_title(f'Augmented {i}')
    axes[i].axis('off')

plt.suptitle('Data Augmentation: Creating Variation for Better Generalization')
plt.tight_layout()
plt.savefig('data_augmentation_examples.png')
plt.show()

# Train model WITH augmentation
print("\n=== Training Model WITH Data Augmentation ===")

# Reset model for fair comparison
model_augmented = keras.models.clone_model(model_transfer)
model_augmented.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train with augmented data
history_augmented = model_augmented.fit(
    datagen.flow(X_train, y_train_cat, batch_size=128),
    epochs=15,
    validation_data=(X_test, y_test_cat),
    steps_per_epoch=len(X_train) // 128,
    verbose=1
)

# Evaluate augmented model
test_loss_aug, test_accuracy_aug = model_augmented.evaluate(
    X_test, y_test_cat, verbose=0
)

print(f"\n=== Performance Comparison ===")
print(f"Without augmentation: {test_accuracy_transfer:.4f}")
print(f"With augmentation: {test_accuracy_aug:.4f}")
print(f"Improvement: {(test_accuracy_aug - test_accuracy_transfer):.4f}")

# ============================================
# ETHICS CHECK 6: Failure Threshold Testing
# ============================================

print("\n=== ETHICS CHECK 6: Failure Threshold Analysis ===")

def test_rotation_threshold(model, images, labels):
    """Test model at different rotation angles"""
    from scipy.ndimage import rotate
    angles = [0, 15, 30, 45, 60, 90, 120, 180]
    accuracies = []

    for angle in angles:
        # Rotate images
        rotated = np.array([rotate(img, angle, reshape=False, axes=(0, 1))
                            for img in images])
        rotated = np.clip(rotated, 0, 1)

        # Predict
        y_pred = model.predict(rotated, verbose=0)
        y_pred_classes = np.argmax(y_pred, axis=1)
        accuracy = np.mean(y_pred_classes == labels.flatten())
        accuracies.append(accuracy)

        print(f"Rotation {angle:3d}°: Accuracy = {accuracy:.4f}")

    return angles, accuracies

print("\nRotation Threshold Test:")
angles, rotation_accuracies = test_rotation_threshold(
    model_augmented, X_test[:500], y_test[:500]
)

# Visualize rotation sensitivity
plt.figure(figsize=(10, 5))
plt.plot(angles, rotation_accuracies, marker='o', linewidth=2)
plt.xlabel('Rotation Angle (degrees)')
plt.ylabel('Accuracy')
plt.title('Model Performance vs. Rotation Angle')
plt.axhline(y=0.75, color='red', linestyle='--', label='75% Threshold')
plt.grid(True, alpha=0.3)
plt.legend()
plt.tight_layout()
plt.savefig('rotation_threshold.png')
plt.show()

# Find failure threshold
failure_threshold = None
for angle, acc in zip(angles, rotation_accuracies):
    if acc < 0.75 and failure_threshold is None:
        failure_threshold = angle
        print(f"\n⚠️  FAILURE THRESHOLD: Model drops below 75% accuracy at {angle}° rotation")

# Test brightness threshold
def test_brightness_threshold(model, images, labels):
    """Test model at different brightness levels"""
    brightness_levels = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6]
    accuracies = []

    for brightness in brightness_levels:
        adjusted = np.clip(images * brightness, 0, 1)

        y_pred = model.predict(adjusted, verbose=0)
        y_pred_classes = np.argmax(y_pred, axis=1)
        accuracy = np.mean(y_pred_classes == labels.flatten())
        accuracies.append(accuracy)

        print(f"Brightness {brightness:.1f}x: Accuracy = {accuracy:.4f}")

    return brightness_levels, accuracies

print("\nBrightness Threshold Test:")
brightness_levels, brightness_accuracies = test_brightness_threshold(
    model_augmented, X_test[:500], y_test[:500]
)

plt.figure(figsize=(10, 5))
plt.plot(brightness_levels, brightness_accuracies, marker='o', linewidth=2)
plt.xlabel('Brightness Multiplier')
plt.ylabel('Accuracy')
plt.title('Model Performance vs. Brightness Level')
plt.axhline(y=0.75, color='red', linestyle='--', label='75% Threshold')
plt.axvline(x=1.0, color='green', linestyle='--', label='Normal Brightness')
plt.grid(True, alpha=0.3)
plt.legend()
plt.tight_layout()
plt.savefig('brightness_threshold.png')
plt.show()

# ============================================
# ETHICS DOCUMENTATION: Real-World Scenarios
# ============================================

print("\n=== ETHICS DOCUMENTATION: Real-World Impact ===")
print("""
FAILURE THRESHOLD ANALYSIS:

1. Rotation Sensitivity:
   - Model fails at [X]° rotation
   - Real-world scenario: Security cameras at odd angles, user photos not upright
   - Affected users: Surveillance in non-standard mounting, mobile uploads
   - Mitigation: Test and retrain on rotated samples from deployment context

2. Brightness Sensitivity:
   - Model fails below [Y]x brightness
   - Real-world scenario: Poor lighting, nighttime, low-quality cameras
   - Affected users: Developing regions with poor infrastructure, night security
   - Mitigation: Implement brightness normalization preprocessing

3. Equity Implications:
   - Users with cheap cameras (noisy sensors) experience worse performance
   - Users in poorly lit environments experience worse performance
   - This creates a "performance gap" between privileged and underprivileged users

4. Recommendations:
   - If deploying for critical use: Test on actual deployment hardware
   - If deploying globally: Test on diverse lighting/camera conditions
   - If deploying for security: Never rely solely on model—require human review
""")

print("\n✓ Story 3 Technical Requirements: COMPLETE")
print("✓ Story 3 Ethics Requirements: COMPLETE")
```

---

### STORY 4: Ethics Documentation Template

Create file: `ETHICS_DOCUMENTATION.md`

```markdown
# ETHICS DOCUMENTATION
## Computer Vision CNN - Sprint 4
**Author**: [Your Name]
**Date**: [Date]
**Model**: Transfer Learning CNN (MobileNetV2) for CIFAR-10 Classification

---

## 1. DATASET BIAS ANALYSIS

### Training Data Source
- **Dataset**: CIFAR-10
- **Size**: 60,000 images (50,000 train, 10,000 test)
- **Classes**: [List your 10 classes]
- **Image Size**: 32x32 pixels, RGB

### Identified Biases
[DOCUMENT: Based on your analysis from Story 1]

#### Class Balance
- [Show distribution - balanced or imbalanced?]
- [Which classes overrepresented/underrepresented?]

#### Transfer Learning Source Bias
- **Pre-trained on**: ImageNet
- **Known biases**: Western/middle-class contexts
- **Impact on your model**: [Explain]

### Missing Populations
[What contexts/scenarios are missing?]

---

## 2. MODEL LIMITATIONS

### Per-Class Performance Gaps
[From Story 1: Which classes have lowest accuracy? Why?]

### Edge Case Failures
[From Story 2: Document dark/bright/noisy performance]

### Failure Thresholds
[From Story 3: Rotation and brightness limits]

### Where NOT to Use This Model
1. [Critical application 1]
2. [Critical application 2]
3. [Critical application 3]

---

## 3. POTENTIAL HARMS

### Misuse Scenarios
[How could someone misuse this?]

### Vulnerable Populations
[Who could be harmed?]

### Unintended Consequences
[What could go wrong in deployment?]

---

## 4. CASE STUDY ANALYSIS

### Case Study 1: [Gender Shades / Amazon / COMPAS]
**What happened**: [Brief description]
**Relevance**: [How does this relate to your model?]
**Lesson applied**: [What did you do differently?]

### Case Study 2: [Another documented failure]
**What happened**: [Brief description]
**Relevance**: [Connection to your work]
**Lesson applied**: [Your prevention measures]

---

## 5. RECOMMENDATIONS

### Who Should Use This Model
- [Appropriate use case 1]
- [Appropriate use case 2]

### Who Should NOT Use This Model
- [Inappropriate use case 1]
- [Inappropriate use case 2]

### Required Safeguards
1. [Safeguard 1]
2. [Safeguard 2]
3. [Safeguard 3]

### Further Testing Needed
- [ ] [Test 1]
- [ ] [Test 2]
- [ ] [Test 3]

---

## 6. CONCLUSION
[Your summary: What did you learn? What are the main ethical takeaways?]
```

---

## DELIVERABLES CHECKLIST

### Technical Deliverables
- [ ] Jupyter notebook: `sprint_4_computer_vision_ethics.ipynb`
- [ ] Story 1: CNN from scratch (≥75% accuracy)
- [ ] Story 2: Transfer learning (≥85% accuracy)
- [ ] Story 3: Data augmentation applied
- [ ] All visualizations generated and saved

### Ethics Deliverables (CRITICAL)
- [ ] `ETHICS_DOCUMENTATION.md` complete (all 6 sections)
- [ ] Dataset bias analysis
- [ ] Per-class performance analysis
- [ ] Failure modes documented
- [ ] Edge case testing complete
- [ ] Real-world impact scenarios
- [ ] Case study comparisons
- [ ] Recommendations documented

### PM Deliverables
- [ ] `sprint_4_planning.md` (goal, capacity, stories)
- [ ] Daily standups (10 entries)
- [ ] Burndown chart
- [ ] GitHub Issues created and tracked
- [ ] Sprint board updated (all Done)
- [ ] Pull request with description

### Documentation
- [ ] README updated with Sprint 4 summary
- [ ] Code well-commented
- [ ] Markdown cells explain decisions
- [ ] Results interpreted

---

## GRADING RUBRIC (75 points)

### Technical Implementation (25 points)
- **CNN Implementation (Story 1)**: 7 pts
  - Architecture correct, ≥75% accuracy, visualizations
- **Transfer Learning (Story 2)**: 10 pts
  - Pre-trained model used correctly, ≥85% accuracy
- **Data Augmentation (Story 3)**: 5 pts
  - Augmentation configured and improvement measured
- **Code Quality**: 3 pts

### Ethical Analysis (12 points)
- **Dataset Bias Analysis**: 3 pts
- **Failure Mode Analysis**: 4 pts
- **Impact Assessment**: 3 pts
- **Case Study Integration**: 2 pts

### PM Execution (25 points)
- **Sprint Planning**: 6 pts
- **Daily Standups**: 7 pts
- **Burndown Chart**: 5 pts
- **Sprint Board**: 5 pts
- **Process**: 2 pts

### Documentation (13 points)
- **ETHICS_DOCUMENTATION.md**: 8 pts
- **Code Documentation**: 3 pts
- **README**: 2 pts

### Bonus (5 points)
- Sprint completed on time
- Professional presentation
- Extra: Custom dataset OR adversarial testing

---

## COMMON PITFALLS

### Technical
- **"CNN won't train"**: Normalize images (X/255.0), check labels
- **"Transfer learning slow"**: Use MobileNetV2, enable GPU
- **"Augmentation slow"**: Reduce steps_per_epoch

### Ethics
- **"Don't know what to write"**: Start with YOUR results
- **"Treating ethics as checklist"**: Integrate into technical work
- **"Generic statements"**: Be specific to YOUR model

### PM
- **"Marking Done without ethics"**: Ethics is part of Done
- **"Messy burndown"**: Normal! Document why

---

## RESOURCES

### Technical
- [TensorFlow CNN Tutorial](https://www.tensorflow.org/tutorials/images/cnn)
- [Transfer Learning Guide](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [Keras Applications](https://keras.io/api/applications/)

### Ethics
- [Gender Shades Study](http://gendershades.org/)
- [ProPublica: Machine Bias](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
- [ML Fairness Resources](https://developers.google.com/machine-learning/fairness-overview)

---

## LOOKING AHEAD

**Weeks 13-14**: Capstone Project
- Apply ALL skills: technical + ethics + PM
- Choose your own project
- Demonstrate responsible ML development

This sprint prepares you to build complex models responsibly!

---

**Drew's Note**: This is where it all comes together. You're building models **responsibly**. The ethics work might feel tedious, but the first time you catch a bias that could have harmed real people, you'll understand why we do this.

Your ETHICS_DOCUMENTATION.md is your "ethics label"—it tells future users what this model can and can't do, who it might harm, and what safeguards are needed. This is the professional standard.

**Favorite Teaching Moment**: Every semester, someone discovers a huge per-class accuracy gap and realizes "If this were deployed, it would fail catastrophically for [X group]." That's when ethics stops being abstract and becomes real.

---

**Remember**: An 85% accurate model you can't explain is worse than a 75% accurate model with documented limitations. Build responsibly. Document honestly. Ship carefully.

Good luck!
