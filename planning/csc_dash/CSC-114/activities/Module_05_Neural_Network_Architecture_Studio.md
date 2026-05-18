# Module 5 Activity: Neural Network Architecture Studio - Building Networks from Scratch

**Duration**: 90 minutes
**Format**: Individual with peer review checkpoints
**Materials Needed**:
- Laptop with ML environment
- Jupyter Notebook
- TensorFlow/Keras installed
- MNIST or Fashion-MNIST dataset
- Architecture design worksheet
- Graph paper or digital drawing tool

**Learning Objectives**:
- Design neural network architectures for specific problems
- Understand how layer count, width, and depth affect performance
- Experiment with activation functions and their impact
- Interpret training curves (loss, accuracy over epochs)
- Diagnose and debug overfitting
- Make informed architectural decisions based on experimentation

---

## Overview

You've used scikit-learn's algorithms as black boxes: feed in data, get predictions. But neural networks aren't black boxes—they're LEGO sets. You choose how many layers, how many neurons per layer, which activation functions, how to connect them.

Today, you're an architect. You'll design neural networks from scratch, test different configurations, watch them train in real-time, and see how architectural choices affect performance.

**The Challenge**: Build the best neural network for Fashion-MNIST classification (10 clothing categories: t-shirts, dresses, shoes, etc.) starting with a terrible baseline and iteratively improving it.

**By the end of this studio, you'll:**
- Build and train neural networks using Keras/TensorFlow
- Understand what "layers," "neurons," and "activation functions" actually do
- Plot training curves and diagnose overfitting vs underfitting
- Make evidence-based architecture decisions
- Know when to add complexity vs when to stop

This is where ML becomes creative problem-solving.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start:**

1. **Update your environment**:
   ```bash
   cd ~/Documents/CSC-114-ML
   source ml-env/bin/activate  # or ml-env\Scripts\activate on Windows
   pip install tensorflow matplotlib
   ```

2. **Pull latest course repo**:
   ```bash
   cd csc-114-labs
   git checkout main
   git pull origin main
   git checkout -b yourname-module05
   ```

3. **Verify TensorFlow installation**:
   ```bash
   python -c "import tensorflow as tf; print(f'TensorFlow version: {tf.__version__}')"
   ```
   Should show 2.x (any 2.x version is fine).

4. **Grab supplies**:
   - Architecture design worksheet (printed or digital)
   - Graph paper or drawing tool for sketching networks
   - Notebook for observations

**Instructor Check**: Everyone has TensorFlow installed? Environments activated? Let's build.

---

## Part 1: Baseline - The Worst Model That Could Possibly Work (15 minutes)

### Instructions

Open Jupyter: `module-05/neural_architecture_studio.ipynb`

**Step 1: Load and explore Fashion-MNIST**

```python
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import fashion_mnist

# Load data
(X_train, y_train), (X_test, y_test) = fashion_mnist.load_data()

# Class labels
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

print(f"Training samples: {X_train.shape[0]}")
print(f"Test samples: {X_test.shape[0]}")
print(f"Image dimensions: {X_train.shape[1:]}")
print(f"Pixel value range: {X_train.min()} to {X_train.max()}")
print(f"Number of classes: {len(class_names)}")
```

**Step 2: Visualize some examples**

```python
# Show 10 random examples
plt.figure(figsize=(15, 3))
for i in range(10):
    plt.subplot(1, 10, i+1)
    plt.imshow(X_train[i], cmap='gray')
    plt.title(class_names[y_train[i]], fontsize=10)
    plt.axis('off')
plt.tight_layout()
plt.show()
```

**Step 3: Preprocess the data**

```python
# Normalize pixel values to [0, 1]
X_train_normalized = X_train / 255.0
X_test_normalized = X_test / 255.0

# Flatten images from 28x28 to 784-dimensional vectors
X_train_flat = X_train_normalized.reshape(-1, 28*28)
X_test_flat = X_test_normalized.reshape(-1, 28*28)

print(f"Flattened shape: {X_train_flat.shape}")
print(f"First pixel values (normalized): {X_train_flat[0, :10]}")
```

**Step 4: Build the simplest possible model**

```python
# Model 1: Single-layer perceptron (no hidden layers!)
model_v1 = models.Sequential([
    layers.Dense(10, activation='softmax', input_shape=(784,))
], name='Baseline_V1')

model_v1.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model_v1.summary()
```

Look at the summary. How many parameters does this model have?

**Step 5: Train and evaluate**

```python
print("Training Baseline Model V1...")
print("="*50)

history_v1 = model_v1.fit(
    X_train_flat, y_train,
    epochs=10,
    batch_size=128,
    validation_split=0.2,
    verbose=1
)

# Evaluate on test set
test_loss_v1, test_acc_v1 = model_v1.evaluate(X_test_flat, y_test, verbose=0)
print(f"\nBaseline V1 Test Accuracy: {test_acc_v1:.2%}")
```

**Step 6: Plot training curves**

```python
def plot_training_history(history, title):
    """Plot training and validation loss/accuracy"""
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

    # Loss
    ax1.plot(history.history['loss'], label='Training Loss', linewidth=2)
    ax1.plot(history.history['val_loss'], label='Validation Loss', linewidth=2)
    ax1.set_xlabel('Epoch')
    ax1.set_ylabel('Loss')
    ax1.set_title(f'{title} - Loss')
    ax1.legend()
    ax1.grid(alpha=0.3)

    # Accuracy
    ax2.plot(history.history['accuracy'], label='Training Accuracy', linewidth=2)
    ax2.plot(history.history['val_accuracy'], label='Validation Accuracy', linewidth=2)
    ax2.set_xlabel('Epoch')
    ax2.set_ylabel('Accuracy')
    ax2.set_title(f'{title} - Accuracy')
    ax2.legend()
    ax2.grid(alpha=0.3)

    plt.tight_layout()
    plt.show()

plot_training_history(history_v1, "Baseline V1 (No Hidden Layers)")
```

**Reflection Questions** (write in markdown cell):
1. What test accuracy did you get? (~84-85% is typical)
2. Is the model overfitting or underfitting? How can you tell?
3. What's the gap between training and validation accuracy?

### Expected Output

- Fashion-MNIST loaded (60k train, 10k test images)
- Baseline model with ~7,850 parameters (784 inputs × 10 outputs + 10 biases)
- Test accuracy around 84-85%
- Training curves show training and validation accuracy converging
- Likely underfitting (there's room for improvement)

### Common Issues

**Issue**: TensorFlow import fails
- **Fix**: Virtual environment not activated, or TensorFlow not installed. Run `pip install tensorflow`.

**Issue**: GPU warnings/errors
- **Fix**: TensorFlow defaults to CPU if no GPU. That's fine. Training will just be slower.

**Issue**: Training is very slow
- **Fix**: Reduce batch size or epochs temporarily. Or be patient—neural networks take time.

---

## Part 2: Adding Depth - Hidden Layers (20 minutes)

### Instructions

**Now let's add hidden layers** and see if performance improves.

**Step 1: Model V2 - One hidden layer**

```python
model_v2 = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dense(10, activation='softmax')
], name='V2_One_Hidden_Layer')

model_v2.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Model V2 Architecture:")
model_v2.summary()
```

**Step 2: Train Model V2**

```python
print("\nTraining Model V2 (One Hidden Layer)...")
print("="*50)

history_v2 = model_v2.fit(
    X_train_flat, y_train,
    epochs=10,
    batch_size=128,
    validation_split=0.2,
    verbose=1
)

test_loss_v2, test_acc_v2 = model_v2.evaluate(X_test_flat, y_test, verbose=0)
print(f"\nModel V2 Test Accuracy: {test_acc_v2:.2%}")
print(f"Improvement over V1: {(test_acc_v2 - test_acc_v1):.2%}")
```

**Step 3: Plot and compare**

```python
plot_training_history(history_v2, "Model V2 (One Hidden Layer, 128 neurons)")
```

**Step 4: Model V3 - Two hidden layers**

```python
model_v3 = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
], name='V3_Two_Hidden_Layers')

model_v3.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Model V3 Architecture:")
model_v3.summary()

print("\nTraining Model V3 (Two Hidden Layers)...")
history_v3 = model_v3.fit(
    X_train_flat, y_train,
    epochs=10,
    batch_size=128,
    validation_split=0.2,
    verbose=1
)

test_loss_v3, test_acc_v3 = model_v3.evaluate(X_test_flat, y_test, verbose=0)
print(f"\nModel V3 Test Accuracy: {test_acc_v3:.2%}")

plot_training_history(history_v3, "Model V3 (Two Hidden Layers: 128, 64)")
```

**Step 5: Model V4 - Experimenting with width**

```python
# Try a wider single hidden layer (256 neurons)
model_v4 = models.Sequential([
    layers.Dense(256, activation='relu', input_shape=(784,)),
    layers.Dense(10, activation='softmax')
], name='V4_Wide_Hidden_Layer')

model_v4.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Model V4 Architecture (Wide):")
model_v4.summary()

history_v4 = model_v4.fit(
    X_train_flat, y_train,
    epochs=10,
    batch_size=128,
    validation_split=0.2,
    verbose=0  # Suppress output for brevity
)

test_loss_v4, test_acc_v4 = model_v4.evaluate(X_test_flat, y_test, verbose=0)
print(f"Model V4 Test Accuracy: {test_acc_v4:.2%}")

plot_training_history(history_v4, "Model V4 (Wide: 256 neurons)")
```

**Step 6: Compare all models**

```python
# Comparison table
comparison = {
    'Model': ['V1: No Hidden', 'V2: 128', 'V3: 128→64', 'V4: 256'],
    'Architecture': ['784→10', '784→128→10', '784→128→64→10', '784→256→10'],
    'Parameters': [
        model_v1.count_params(),
        model_v2.count_params(),
        model_v3.count_params(),
        model_v4.count_params()
    ],
    'Test Accuracy': [test_acc_v1, test_acc_v2, test_acc_v3, test_acc_v4]
}

import pandas as pd
comparison_df = pd.DataFrame(comparison)
comparison_df['Test Accuracy'] = comparison_df['Test Accuracy'].apply(lambda x: f"{x:.2%}")

print("\n" + "="*70)
print("MODEL COMPARISON")
print("="*70)
print(comparison_df.to_string(index=False))
print("="*70)
```

**Reflection Questions** (markdown cell):
1. Which model performed best?
2. Did adding more layers always improve performance?
3. Did wider (256 neurons) beat deeper (128→64)?
4. Look at training curves: which models show signs of overfitting?

### Expected Output

- V1: ~84-85% accuracy (baseline)
- V2: ~87-88% accuracy (one hidden layer helps!)
- V3: ~88-89% accuracy (two layers slightly better)
- V4: ~88-89% accuracy (wider vs deeper trade-off)
- Comparison table shows architecture vs performance
- Some models may show overfitting (training accuracy >> validation accuracy)

### Common Issues

**Issue**: All models have same accuracy
- **Fix**: Check that you're creating NEW models, not retraining the same one.

**Issue**: Models take forever to train
- **Fix**: Use `verbose=0` or reduce epochs to 5 for faster experimentation.

**Issue**: Validation accuracy is way lower than training
- **Fix**: That's overfitting. We'll address this in Part 3.

---

## Part 3: Diagnosing and Debugging Overfitting (25 minutes)

### Instructions

**Overfitting** = Model memorizes training data but fails on new data. Let's intentionally create overfitting, then fix it.

**Step 1: Create a monster model (guaranteed to overfit)**

```python
model_overfit = models.Sequential([
    layers.Dense(512, activation='relu', input_shape=(784,)),
    layers.Dense(512, activation='relu'),
    layers.Dense(512, activation='relu'),
    layers.Dense(10, activation='softmax')
], name='Overfit_Monster')

model_overfit.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Overfit Monster:")
model_overfit.summary()

history_overfit = model_overfit.fit(
    X_train_flat, y_train,
    epochs=20,  # More epochs = more overfitting
    batch_size=128,
    validation_split=0.2,
    verbose=0
)

test_loss_of, test_acc_of = model_overfit.evaluate(X_test_flat, y_test, verbose=0)
print(f"Overfit Monster Test Accuracy: {test_acc_of:.2%}")

plot_training_history(history_overfit, "Overfit Monster (512→512→512)")
```

**Observe the training curves.** Classic overfitting looks like:
- Training accuracy: keeps climbing → 99%+
- Validation accuracy: plateaus or decreases after a point
- Growing gap between the two curves

**Step 2: Fix #1 - Add Dropout**

Dropout randomly "turns off" neurons during training, preventing memorization.

```python
model_dropout = models.Sequential([
    layers.Dense(512, activation='relu', input_shape=(784,)),
    layers.Dropout(0.5),  # Drop 50% of neurons randomly
    layers.Dense(512, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(512, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
], name='With_Dropout')

model_dropout.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Model with Dropout:")
model_dropout.summary()

history_dropout = model_dropout.fit(
    X_train_flat, y_train,
    epochs=20,
    batch_size=128,
    validation_split=0.2,
    verbose=0
)

test_loss_drop, test_acc_drop = model_dropout.evaluate(X_test_flat, y_test, verbose=0)
print(f"Dropout Model Test Accuracy: {test_acc_drop:.2%}")
print(f"Improvement over Overfit Monster: {(test_acc_drop - test_acc_of):.2%}")

plot_training_history(history_dropout, "Dropout Model (512→Dropout→512→Dropout→512)")
```

**Step 3: Fix #2 - Early Stopping**

Stop training when validation performance stops improving.

```python
from tensorflow.keras.callbacks import EarlyStopping

model_early_stop = models.Sequential([
    layers.Dense(512, activation='relu', input_shape=(784,)),
    layers.Dense(512, activation='relu'),
    layers.Dense(512, activation='relu'),
    layers.Dense(10, activation='softmax')
], name='With_Early_Stopping')

model_early_stop.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Early stopping callback
early_stop = EarlyStopping(
    monitor='val_loss',
    patience=3,  # Stop if val_loss doesn't improve for 3 epochs
    restore_best_weights=True,
    verbose=1
)

history_early = model_early_stop.fit(
    X_train_flat, y_train,
    epochs=50,  # Set high, early stopping will stop us
    batch_size=128,
    validation_split=0.2,
    callbacks=[early_stop],
    verbose=0
)

test_loss_early, test_acc_early = model_early_stop.evaluate(X_test_flat, y_test, verbose=0)
print(f"Early Stopping Model Test Accuracy: {test_acc_early:.2%}")
print(f"Stopped at epoch: {len(history_early.history['loss'])}")

plot_training_history(history_early, "Early Stopping Model")
```

**Step 4: Fix #3 - Reduce Model Complexity**

Sometimes the best fix is a simpler model.

```python
model_simple = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(10, activation='softmax')
], name='Simple_With_Dropout')

model_simple.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

history_simple = model_simple.fit(
    X_train_flat, y_train,
    epochs=20,
    batch_size=128,
    validation_split=0.2,
    verbose=0
)

test_loss_simple, test_acc_simple = model_simple.evaluate(X_test_flat, y_test, verbose=0)
print(f"Simple Model Test Accuracy: {test_acc_simple:.2%}")

plot_training_history(history_simple, "Simple Model (128→64 with Dropout)")
```

**Step 5: Overfitting comparison**

```python
overfit_comparison = {
    'Model': ['Overfit Monster', 'With Dropout', 'Early Stopping', 'Simple Model'],
    'Parameters': [
        model_overfit.count_params(),
        model_dropout.count_params(),
        model_early_stop.count_params(),
        model_simple.count_params()
    ],
    'Test Accuracy': [test_acc_of, test_acc_drop, test_acc_early, test_acc_simple],
    'Train-Val Gap': [
        abs(history_overfit.history['accuracy'][-1] - history_overfit.history['val_accuracy'][-1]),
        abs(history_dropout.history['accuracy'][-1] - history_dropout.history['val_accuracy'][-1]),
        abs(history_early.history['accuracy'][-1] - history_early.history['val_accuracy'][-1]),
        abs(history_simple.history['accuracy'][-1] - history_simple.history['val_accuracy'][-1])
    ]
}

overfit_df = pd.DataFrame(overfit_comparison)
overfit_df['Test Accuracy'] = overfit_df['Test Accuracy'].apply(lambda x: f"{x:.2%}")
overfit_df['Train-Val Gap'] = overfit_df['Train-Val Gap'].apply(lambda x: f"{x:.2%}")

print("\n" + "="*70)
print("OVERFITTING MITIGATION STRATEGIES")
print("="*70)
print(overfit_df.to_string(index=False))
print("="*70)
print("\nNote: Smaller Train-Val Gap = Less Overfitting")
```

**Reflection Questions** (markdown cell):
1. Which anti-overfitting technique worked best?
2. Did dropout hurt training accuracy? Why is that okay?
3. When would you use early stopping vs dropout vs simpler architecture?

### Expected Output

- Overfit Monster shows clear overfitting (training acc >> validation acc)
- Dropout reduces overfitting (smaller gap between train/val)
- Early stopping stops before overfitting gets bad
- Simple model has lowest parameter count but competitive accuracy
- Comparison table shows trade-offs

### Common Issues

**Issue**: Dropout model performs way worse
- **Fix**: Dropout rate might be too high. Try 0.3 instead of 0.5.

**Issue**: Early stopping doesn't trigger
- **Fix**: Model isn't overfitting yet. Increase `epochs` or reduce `patience`.

**Issue**: All models still overfit
- **Fix**: Add more regularization (higher dropout, L2 penalties) or reduce model size further.

---

## Part 4: Activation Function Experiments (15 minutes)

### Instructions

Activation functions determine how neurons "fire." Let's compare a few.

**Step 1: Build models with different activations**

```python
# Test different activation functions
activations = ['relu', 'tanh', 'sigmoid']
results = {}

for activation in activations:
    print(f"\nTraining model with {activation.upper()} activation...")

    model = models.Sequential([
        layers.Dense(128, activation=activation, input_shape=(784,)),
        layers.Dropout(0.3),
        layers.Dense(64, activation=activation),
        layers.Dropout(0.3),
        layers.Dense(10, activation='softmax')  # Output always softmax for classification
    ], name=f'Model_{activation}')

    model.compile(
        optimizer='adam',
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )

    history = model.fit(
        X_train_flat, y_train,
        epochs=15,
        batch_size=128,
        validation_split=0.2,
        verbose=0
    )

    test_loss, test_acc = model.evaluate(X_test_flat, y_test, verbose=0)

    results[activation] = {
        'test_acc': test_acc,
        'history': history
    }

    print(f"{activation.upper()} Test Accuracy: {test_acc:.2%}")
```

**Step 2: Compare activation functions**

```python
# Plot all three on same graph
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

for activation, data in results.items():
    history = data['history']
    ax1.plot(history.history['val_loss'], label=activation.upper(), linewidth=2)
    ax2.plot(history.history['val_accuracy'], label=activation.upper(), linewidth=2)

ax1.set_xlabel('Epoch')
ax1.set_ylabel('Validation Loss')
ax1.set_title('Validation Loss by Activation Function')
ax1.legend()
ax1.grid(alpha=0.3)

ax2.set_xlabel('Epoch')
ax2.set_ylabel('Validation Accuracy')
ax2.set_title('Validation Accuracy by Activation Function')
ax2.legend()
ax2.grid(alpha=0.3)

plt.tight_layout()
plt.show()

# Summary table
activation_df = pd.DataFrame({
    'Activation': list(results.keys()),
    'Test Accuracy': [results[act]['test_acc'] for act in results.keys()]
})
activation_df['Test Accuracy'] = activation_df['Test Accuracy'].apply(lambda x: f"{x:.2%}")
activation_df = activation_df.sort_values('Test Accuracy', ascending=False).reset_index(drop=True)

print("\n" + "="*40)
print("ACTIVATION FUNCTION COMPARISON")
print("="*40)
print(activation_df.to_string(index=False))
print("="*40)
```

**Reflection Questions** (markdown cell):
1. Which activation function performed best?
2. ReLU is most common in deep learning. Why do you think that is?
3. Did sigmoid or tanh struggle? Why might that be?

### Expected Output

- ReLU: Fastest convergence, best accuracy (~88-89%)
- Tanh: Slightly slower, comparable accuracy (~87-88%)
- Sigmoid: Slowest, often lower accuracy (~85-86%)
- Comparison plot shows ReLU dominating
- Understanding why ReLU is the default choice

### Common Issues

**Issue**: All activations give same result
- **Fix**: Check that models are being retrained, not reused.

**Issue**: Sigmoid gives terrible results (<70%)
- **Fix**: That's actually expected for deeper networks. Sigmoid suffers from vanishing gradients.

---

## Part 5: Final Challenge - Your Best Architecture (10 minutes)

### Instructions

**Design your best model** using everything you've learned.

**Constraints:**
- Must achieve >89% test accuracy
- Must have <200,000 parameters
- Must not overfit (train-val gap < 5%)

**Step 1: Design and train your champion model**

```python
# YOUR TURN: Design the best model you can
model_champion = models.Sequential([
    # Add your layers here
    # Consider: layer count, neuron count, dropout, activation functions
], name='Champion_Model')

model_champion.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

print("Champion Model Architecture:")
model_champion.summary()

# Train with early stopping
early_stop = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)

history_champion = model_champion.fit(
    X_train_flat, y_train,
    epochs=30,
    batch_size=128,
    validation_split=0.2,
    callbacks=[early_stop],
    verbose=1
)

test_loss_champ, test_acc_champ = model_champion.evaluate(X_test_flat, y_test)
print(f"\nChampion Model Test Accuracy: {test_acc_champ:.2%}")
print(f"Parameter Count: {model_champion.count_params():,}")

# Check overfitting
train_acc_champ = history_champion.history['accuracy'][-1]
val_acc_champ = history_champion.history['val_accuracy'][-1]
gap = abs(train_acc_champ - val_acc_champ)
print(f"Train-Val Gap: {gap:.2%}")

if test_acc_champ > 0.89 and model_champion.count_params() < 200000 and gap < 0.05:
    print("\n🎉 CHALLENGE COMPLETE! Your model meets all criteria.")
else:
    print("\n⚠️  Challenge incomplete. Keep iterating!")

plot_training_history(history_champion, "Champion Model")
```

**Step 2: Document your design decisions**

In a markdown cell, write:

```markdown
## Champion Model Design Rationale

**Architecture**: [Describe your layer structure]

**Design Choices**:
1. **Layer Depth**: I chose ___ layers because...
2. **Layer Width**: I used ___ neurons in hidden layers because...
3. **Activation Function**: I used ___ because...
4. **Regularization**: I used [dropout/early stopping/both] because...

**Results**:
- Test Accuracy: ___%
- Parameter Count: _____
- Train-Val Gap: ___%

**Trade-offs**:
[What did you sacrifice? Speed? Simplicity? Explain.]
```

### Expected Output

- Custom architecture achieving >89% accuracy
- Parameter count under 200k
- Minimal overfitting
- Thoughtful design rationale
- Understanding of architecture trade-offs

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. Complexity vs Performance**: You've seen that bigger isn't always better. When does adding layers/neurons help? When does it hurt?

**2. The Overfitting Dilemma**: Overfitting means your model is "too good" at training. Why is that a problem? How do you know when to stop training?

**3. Architecture as Hypothesis**: Each architecture is a hypothesis about what patterns exist in the data. What does a deep network assume that a shallow network doesn't?

**4. PM Integration**: If you're planning a sprint and your PM asks "How long to build the neural network?", what's your answer now that you've seen how much experimentation is needed?

**5. Real-World Constraints**: In production, you might have strict latency requirements (<100ms) or memory limits (mobile devices). How would these constraints affect your architecture choices?

### Exit Ticket

**Submit via Canvas**:

```
1. What was your champion model's test accuracy? _____

2. What was the most surprising thing you learned about neural network architecture?

3. Explain overfitting to someone who's never taken a CS class:

4. On a scale of 1-5, how confident are you with:
   - Building neural networks in Keras: ___
   - Diagnosing overfitting: ___
   - Choosing activation functions: ___
   - Explaining architecture decisions: ___

5. What architecture question do you still have?
```

---

## Extension Challenges (Optional)

### Challenge 1: Convolutional Neural Network
Use CNN layers instead of Dense (better for images):
```python
X_train_cnn = X_train_normalized.reshape(-1, 28, 28, 1)
X_test_cnn = X_test_normalized.reshape(-1, 28, 28, 1)

model_cnn = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])
```

### Challenge 2: Batch Normalization
Add batch normalization layers:
```python
model_bn = models.Sequential([
    layers.Dense(128, input_shape=(784,)),
    layers.BatchNormalization(),
    layers.Activation('relu'),
    layers.Dropout(0.3),
    # ... more layers
])
```

### Challenge 3: Learning Rate Tuning
Experiment with learning rates:
```python
from tensorflow.keras.optimizers import Adam

learning_rates = [0.001, 0.0001, 0.00001]
for lr in learning_rates:
    model.compile(optimizer=Adam(learning_rate=lr), ...)
```

### Challenge 4: Hyperparameter Grid Search
Automate architecture search:
```python
from tensorflow.keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import GridSearchCV

def create_model(neurons=128, dropout=0.3):
    model = models.Sequential([...])
    return model

model = KerasClassifier(build_fn=create_model)
param_grid = {'neurons': [64, 128, 256], 'dropout': [0.2, 0.3, 0.5]}
grid = GridSearchCV(estimator=model, param_grid=param_grid, cv=3)
```

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, TensorFlow installation verification
- **10-25 min**: Baseline model (Part 1)
- **25-45 min**: Adding depth experiments (Part 2)
- **45-70 min**: Overfitting diagnosis and fixes (Part 3)
- **70-85 min**: Activation functions (Part 4)
- **85-95 min**: Champion model challenge (Part 5)
- **95-100 min**: Reflection and wrap-up

### Common Struggles

**TensorFlow installation issues**: This will eat time. Have backup plan: Google Colab notebooks pre-configured with TensorFlow.

**"My model isn't learning"**: Common causes: forgot to normalize data, used wrong loss function, learning rate too high/low. Teach debugging checklist.

**Impatience with training**: Students expect instant results. Neural networks take time. Set expectation: 1-2 minutes per model is normal.

**Overfitting confusion**: Students see 99% training accuracy and think it's great. Emphasize: validation/test accuracy is what matters.

### Success Indicators

Students are on track if they:
- ✅ Can build and train models in Keras without copy-pasting
- ✅ Read training curves and identify overfitting
- ✅ Understand that more layers/neurons isn't always better
- ✅ Achieve >88% test accuracy by end of session
- ✅ Can articulate their architecture choices

Students are struggling if they:
- ❌ Can't get models to train (environment issues)
- ❌ Don't understand what validation loss means
- ❌ Think memorizing training data is success
- ❌ Randomly add layers without understanding why

### Materials to Prepare

**Before class:**
- [ ] Test TensorFlow installation on multiple OS (Mac/Windows/Linux)
- [ ] Prepare Google Colab backup notebooks
- [ ] Create architecture design worksheet template
- [ ] Have sample champion models ready (for struggling students)
- [ ] Print training curve interpretation guide
- [ ] Prepare common error messages cheat sheet

**During class:**
- [ ] Monitor training times (stop class if everyone's waiting)
- [ ] Circulate during experiments—catch students not saving history objects
- [ ] Listen for GPU warnings—explain CPU vs GPU training
- [ ] Watch for students copying code without understanding
- [ ] Identify students with >90% accuracy (share their architectures)

**After class:**
- [ ] Collect champion model architectures (create class leaderboard?)
- [ ] Note which activation functions students chose (usually ReLU)
- [ ] Identify students who struggled with overfitting concept
- [ ] Check if any model achieved >92% (exceptional—recognize them)

### Teaching Philosophy Notes

**Neural networks are not magic**—they're functions with lots of parameters. But students will treat them like black boxes if you let them. Force them to make decisions: "Why 128 neurons? Why not 64? Why not 256?" Make them justify.

**Overfitting is the central lesson**. Students will spend careers fighting overfitting. The moment they see training accuracy at 99% and test accuracy at 85%, and you say "That's bad," their brains recalibrate. That's the lesson.

**Experimentation is messy**. This lab has more "try this, see what happens" than previous labs. That's intentional. ML engineering is empirical. You can't theory your way to the best architecture. You have to try.

**The champion model challenge matters**. Students get competitive. Use that. Create a class leaderboard (optional, anonymous). Celebrate the winner. But also celebrate the student who built the simplest model that still met criteria.

---

**Commit message template**:

```
Complete Module 05 Neural Network Architecture Studio

- Built and trained 8+ neural network architectures on Fashion-MNIST
- Experimented with layer depth (1-3 hidden layers) and width (64-512 neurons)
- Diagnosed overfitting using training curves and implemented dropout/early stopping
- Compared ReLU, tanh, and sigmoid activation functions
- Champion model achieved 89.4% test accuracy with 124,550 parameters
```
