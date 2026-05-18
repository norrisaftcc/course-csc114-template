# Module 6 Activity: Transfer Learning Lab - Fine-tuning Pre-trained Models

**Duration**: 90 minutes
**Format**: Pairs (complementary skill levels)
**Materials Needed**:
- Laptop with ML environment + TensorFlow
- Pre-trained model weights (VGG16, ResNet50)
- Custom image dataset (Dogs vs Cats or provided dataset)
- Jupyter Notebook
- External GPU recommended (but not required)

**Learning Objectives**:
- Understand the concept and power of transfer learning
- Load and use pre-trained convolutional neural networks
- Strategically freeze and unfreeze layers
- Fine-tune models on custom datasets
- Compare from-scratch training vs transfer learning
- Recognize when transfer learning is appropriate

---

## Overview

**Here's the problem**: Training a deep neural network from scratch requires:
- Massive datasets (millions of images)
- Expensive GPUs (thousands of dollars)
- Days or weeks of training time
- Deep expertise in architecture design

**Here's the solution**: Transfer learning. Use a model someone else trained on millions of images, and adapt it to your specific problem in hours, not weeks.

Today, you'll take a model trained on ImageNet (1.4 million images, 1000 categories) and fine-tune it to classify a custom dataset with just a few thousand images. You'll see the dramatic difference between training from scratch vs standing on the shoulders of giants.

**By the end of this lab, you'll:**
- Load pre-trained models (VGG16, ResNet50) with ImageNet weights
- Understand what "frozen layers" means and why we freeze them
- Fine-tune top layers on your custom dataset
- Compare performance: from-scratch vs transfer learning
- Know when to use transfer learning vs training from scratch

This is how real companies build image recognition systems: they don't start from zero.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start:**

1. **Update environment with image processing tools**:
   ```bash
   cd ~/Documents/CSC-114-ML
   source ml-env/bin/activate  # or ml-env\Scripts\activate (Windows)
   pip install tensorflow pillow
   ```

2. **Download the dataset**:
   - Option A: Instructor provides custom dataset (recommended)
   - Option B: Kaggle Dogs vs Cats dataset (requires Kaggle account)
   - Option C: Use TensorFlow's built-in `cats_vs_dogs` dataset

3. **Pull course repo**:
   ```bash
   cd csc-114-labs
   git checkout main
   git pull origin main
   git checkout -b yourname-module06
   ```

4. **Verify TensorFlow and dataset**:
   ```bash
   python -c "import tensorflow as tf; print(f'TensorFlow: {tf.__version__}')"
   ls -lh ~/Documents/CSC-114-ML/datasets/  # Check dataset is downloaded
   ```

5. **Form pairs** (instructor assigns):
   - **Partner A (Driver 1)**: Handles from-scratch model
   - **Partner B (Driver 2)**: Handles transfer learning model
   - You'll compare results at the end

**Instructor Check**: Everyone has TensorFlow, dataset downloaded, pairs formed? Let's go.

---

## Part 1: Data Preparation and Exploration (15 minutes)

### Instructions

Open Jupyter: `module-06/transfer_learning_lab.ipynb`

**Step 1: Import libraries and set up**

```python
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import VGG16, ResNet50
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
import os

print(f"TensorFlow version: {tf.__version__}")
print(f"Num GPUs Available: {len(tf.config.list_physical_devices('GPU'))}")

# Set random seeds for reproducibility
np.random.seed(42)
tf.random.set_seed(42)
```

**Step 2: Load and explore the dataset**

```python
# Dataset paths (adjust to your setup)
dataset_path = os.path.expanduser('~/Documents/CSC-114-ML/datasets/cats_dogs')
train_dir = os.path.join(dataset_path, 'train')
val_dir = os.path.join(dataset_path, 'validation')

# Count images
def count_images(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        count += len([f for f in files if f.endswith(('.jpg', '.jpeg', '.png'))])
    return count

print(f"Training images: {count_images(train_dir)}")
print(f"Validation images: {count_images(val_dir)}")
print(f"\nClasses: {os.listdir(train_dir)}")
```

**Step 3: Set up data generators with augmentation**

```python
# Image parameters
IMG_SIZE = 224  # VGG16 and ResNet50 expect 224x224 images
BATCH_SIZE = 32

# Training data generator with augmentation
train_datagen = ImageDataGenerator(
    rescale=1./255,           # Normalize to [0, 1]
    rotation_range=20,        # Rotate images randomly
    width_shift_range=0.2,    # Shift horizontally
    height_shift_range=0.2,   # Shift vertically
    horizontal_flip=True,     # Flip images
    zoom_range=0.2,           # Zoom in/out
    shear_range=0.2,          # Shear transformation
    fill_mode='nearest'       # Fill in missing pixels
)

# Validation data generator (no augmentation, just rescale)
val_datagen = ImageDataGenerator(rescale=1./255)

# Create generators
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary',  # Binary classification (cats vs dogs)
    shuffle=True
)

val_generator = val_datagen.flow_from_directory(
    val_dir,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary',
    shuffle=False
)

print(f"Training batches per epoch: {len(train_generator)}")
print(f"Validation batches per epoch: {len(val_generator)}")
```

**Step 4: Visualize augmented images**

```python
# Show examples of augmentation
def plot_augmented_images():
    # Get a batch of images
    images, labels = next(train_generator)

    plt.figure(figsize=(15, 8))
    for i in range(min(12, BATCH_SIZE)):
        plt.subplot(3, 4, i+1)
        plt.imshow(images[i])
        label = 'Dog' if labels[i] == 1 else 'Cat'
        plt.title(label)
        plt.axis('off')
    plt.suptitle('Augmented Training Images', fontsize=16, fontweight='bold')
    plt.tight_layout()
    plt.show()

plot_augmented_images()
```

**Discussion (both partners):**
- Why do we augment training data but not validation data?
- How does augmentation help prevent overfitting?
- What would happen if we used 128x128 images instead of 224x224?

### Expected Output

- Dataset loaded (typically 2000-4000 training images, 500-1000 validation images)
- Image generators set up with augmentation
- Visualization showing augmented cats and dogs
- Understanding of data preparation pipeline

### Common Issues

**Issue**: Dataset not found
- **Fix**: Check `dataset_path`. Adjust to wherever you downloaded the dataset.

**Issue**: "Found 0 images"
- **Fix**: Directory structure must be: `train/cats/*.jpg` and `train/dogs/*.jpg`

**Issue**: Augmented images look weird
- **Fix**: That's expected! Augmentation is supposed to create variations.

---

## Part 2: Baseline - Training from Scratch (20 minutes)

**Partner A (Driver 1) leads this section. Partner B assists.**

### Instructions

**Step 1: Build a CNN from scratch**

```python
def create_cnn_from_scratch():
    """Build a simple CNN for binary classification"""
    model = models.Sequential([
        # First convolutional block
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)),
        layers.MaxPooling2D((2, 2)),

        # Second convolutional block
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),

        # Third convolutional block
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),

        # Fourth convolutional block
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),

        # Flatten and dense layers
        layers.Flatten(),
        layers.Dropout(0.5),
        layers.Dense(512, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(1, activation='sigmoid')  # Binary classification
    ], name='CNN_From_Scratch')

    return model

model_scratch = create_cnn_from_scratch()
model_scratch.summary()

print(f"\nTotal parameters: {model_scratch.count_params():,}")
```

**Step 2: Compile and train from scratch**

```python
model_scratch.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.0001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Callbacks
early_stop_scratch = EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True,
    verbose=1
)

print("Training CNN from scratch...")
print("="*60)
print("⚠️  This will take 5-10 minutes. Be patient.")
print("="*60)

history_scratch = model_scratch.fit(
    train_generator,
    epochs=30,
    validation_data=val_generator,
    callbacks=[early_stop_scratch],
    verbose=1
)

# Evaluate
val_loss_scratch, val_acc_scratch = model_scratch.evaluate(val_generator)
print(f"\nFrom-Scratch Model Validation Accuracy: {val_acc_scratch:.2%}")
```

**Step 3: Plot training curves**

```python
def plot_training_curves(history, title):
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

plot_training_curves(history_scratch, "CNN From Scratch")
```

**Partner A observations** (write in markdown cell):
1. Final validation accuracy: ____
2. Number of epochs until early stopping: ____
3. Training time (estimate): ____ minutes
4. Signs of overfitting (yes/no): ____

### Expected Output

- From-scratch model with ~3-5 million parameters
- Training takes 5-10 minutes (depends on hardware)
- Validation accuracy: 70-80% (decent but not great)
- Some overfitting visible (train > val accuracy)

### Common Issues

**Issue**: Training is extremely slow
- **Fix**: Reduce `epochs` to 10-15 for testing. Or reduce `IMG_SIZE` to 128.

**Issue**: Accuracy stuck around 50%
- **Fix**: Model isn't learning. Check learning rate, data loading, labels.

**Issue**: Out of memory error
- **Fix**: Reduce `BATCH_SIZE` from 32 to 16 or 8.

---

## Part 3: Transfer Learning with Frozen Layers (25 minutes)

**Partner B (Driver 2) leads this section. Partner A assists.**

### Instructions

**Step 1: Load pre-trained VGG16**

```python
# Load VGG16 pre-trained on ImageNet
# include_top=False: Don't include the final classification layer
# weights='imagenet': Use ImageNet weights
base_model_vgg = VGG16(
    weights='imagenet',
    include_top=False,
    input_shape=(IMG_SIZE, IMG_SIZE, 3)
)

print("VGG16 Architecture:")
base_model_vgg.summary()

print(f"\nTotal parameters in VGG16: {base_model_vgg.count_params():,}")
```

**Step 2: Freeze the base model**

```python
# Freeze all layers in the base model
base_model_vgg.trainable = False

print(f"Trainable parameters after freezing: {sum([tf.size(w).numpy() for w in base_model_vgg.trainable_weights]):,}")
print(f"Non-trainable parameters: {sum([tf.size(w).numpy() for w in base_model_vgg.non_trainable_weights]):,}")
```

**Why freeze?** The early layers of VGG16 learned general features (edges, textures, shapes) on ImageNet. These features transfer well to other image tasks. We don't want to destroy them by training on our small dataset.

**Step 3: Add custom classification head**

```python
# Build model with frozen VGG16 base + custom top layers
model_transfer = models.Sequential([
    base_model_vgg,
    layers.Flatten(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(1, activation='sigmoid')  # Binary classification
], name='VGG16_Transfer_Learning')

model_transfer.summary()

print(f"\nTotal parameters: {model_transfer.count_params():,}")
print(f"Trainable parameters: {sum([tf.size(w).numpy() for w in model_transfer.trainable_weights]):,}")
```

**Step 4: Train with frozen base**

```python
model_transfer.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.0001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

early_stop_transfer = EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True,
    verbose=1
)

print("Training with Transfer Learning (Frozen Layers)...")
print("="*60)
print("⚠️  This should be faster than from-scratch (2-5 minutes)")
print("="*60)

history_transfer = model_transfer.fit(
    train_generator,
    epochs=20,
    validation_data=val_generator,
    callbacks=[early_stop_transfer],
    verbose=1
)

val_loss_transfer, val_acc_transfer = model_transfer.evaluate(val_generator)
print(f"\nTransfer Learning Validation Accuracy: {val_acc_transfer:.2%}")
print(f"Improvement over from-scratch: {(val_acc_transfer - val_acc_scratch):.2%}")

plot_training_curves(history_transfer, "Transfer Learning (Frozen)")
```

**Partner B observations** (markdown cell):
1. Final validation accuracy: ____
2. Number of epochs until early stopping: ____
3. Training time (estimate): ____ minutes
4. Comparison to from-scratch: [faster/slower, better/worse]

### Expected Output

- VGG16 base loaded with ImageNet weights (~14.7M parameters)
- Only top layers trainable (~1-2M parameters)
- Training faster than from-scratch (fewer parameters to update)
- Validation accuracy: 85-92% (significantly better!)
- Less overfitting (base model regularizes)

### Common Issues

**Issue**: Downloading ImageNet weights takes forever
- **Fix**: First time only. Weights are cached (~550MB for VGG16).

**Issue**: Accuracy is still around 70%
- **Fix**: Check that base_model is actually frozen. Verify with `base_model_vgg.trainable`.

**Issue**: GPU out of memory
- **Fix**: VGG16 is large. Reduce batch size or use ResNet50 (smaller).

---

## Part 4: Fine-Tuning - Unfreezing Top Layers (20 minutes)

**Both partners collaborate**

### Instructions

Transfer learning with frozen layers got us to ~90%. Can we do better by fine-tuning?

**Step 1: Unfreeze top layers of VGG16**

```python
# Unfreeze the last convolutional block
base_model_vgg.trainable = True

# But keep early layers frozen
print(f"Total layers in VGG16: {len(base_model_vgg.layers)}")

# Freeze all layers except the last 4
for layer in base_model_vgg.layers[:-4]:
    layer.trainable = False

print("\nLayer freeze status:")
for i, layer in enumerate(base_model_vgg.layers):
    print(f"  Layer {i}: {layer.name} - Trainable: {layer.trainable}")

print(f"\nTrainable parameters: {sum([tf.size(w).numpy() for w in model_transfer.trainable_weights]):,}")
```

**Why only unfreeze top layers?**
- Early layers: Generic features (edges, colors) - keep frozen
- Middle layers: Mid-level features (textures, patterns) - keep frozen
- Top layers: High-level features (eyes, ears, faces) - fine-tune for our data

**Step 2: Recompile with lower learning rate**

```python
# Use MUCH lower learning rate for fine-tuning
model_transfer.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.00001),  # 10x lower
    loss='binary_crossentropy',
    metrics=['accuracy']
)

print("Fine-tuning with unfrozen top layers...")
print("⚠️  Using 10x lower learning rate to avoid destroying pre-trained weights")
```

**Step 3: Fine-tune**

```python
early_stop_finetune = EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True,
    verbose=1
)

history_finetune = model_transfer.fit(
    train_generator,
    epochs=15,
    validation_data=val_generator,
    callbacks=[early_stop_finetune],
    verbose=1
)

val_loss_finetune, val_acc_finetune = model_transfer.evaluate(val_generator)
print(f"\nFine-tuned Model Validation Accuracy: {val_acc_finetune:.2%}")
print(f"Improvement over frozen: {(val_acc_finetune - val_acc_transfer):.2%}")

plot_training_curves(history_finetune, "Fine-Tuning (Unfrozen Top Layers)")
```

**Step 4: Compare all three approaches**

```python
import pandas as pd

comparison = {
    'Approach': ['From Scratch', 'Transfer (Frozen)', 'Fine-Tuned'],
    'Val Accuracy': [val_acc_scratch, val_acc_transfer, val_acc_finetune],
    'Trainable Params': [
        model_scratch.count_params(),
        sum([tf.size(w).numpy() for w in model_transfer.trainable_weights[:2]]),  # Approx for frozen
        sum([tf.size(w).numpy() for w in model_transfer.trainable_weights])
    ],
    'Training Time': ['~8 min', '~3 min', '~2 min']  # Adjust based on your observations
}

comparison_df = pd.DataFrame(comparison)
comparison_df['Val Accuracy'] = comparison_df['Val Accuracy'].apply(lambda x: f"{x:.2%}")
comparison_df['Trainable Params'] = comparison_df['Trainable Params'].apply(lambda x: f"{x:,}")

print("\n" + "="*70)
print("TRANSFER LEARNING COMPARISON")
print("="*70)
print(comparison_df.to_string(index=False))
print("="*70)
```

**Step 5: Visualize predictions**

```python
def visualize_predictions(model, generator, num_images=12):
    """Show model predictions on validation images"""
    images, true_labels = next(generator)

    predictions = model.predict(images, verbose=0)
    predicted_labels = (predictions > 0.5).astype(int).flatten()

    plt.figure(figsize=(15, 10))
    for i in range(min(num_images, len(images))):
        plt.subplot(3, 4, i+1)
        plt.imshow(images[i])

        true_class = 'Dog' if true_labels[i] == 1 else 'Cat'
        pred_class = 'Dog' if predicted_labels[i] == 1 else 'Cat'
        confidence = predictions[i][0] if predicted_labels[i] == 1 else 1 - predictions[i][0]

        color = 'green' if true_class == pred_class else 'red'
        plt.title(f'True: {true_class}\nPred: {pred_class} ({confidence:.1%})',
                  color=color, fontweight='bold')
        plt.axis('off')

    plt.suptitle('Fine-Tuned Model Predictions', fontsize=16, fontweight='bold')
    plt.tight_layout()
    plt.show()

visualize_predictions(model_transfer, val_generator)
```

### Expected Output

- Fine-tuned model achieves 90-95% validation accuracy
- Small but meaningful improvement over frozen transfer learning
- Training still faster than from-scratch
- Comparison table shows clear winner: fine-tuning
- Prediction visualization shows confident, accurate classifications

### Common Issues

**Issue**: Fine-tuning makes accuracy worse
- **Fix**: Learning rate too high. Use 0.00001 or lower.

**Issue**: Fine-tuning doesn't improve over frozen
- **Fix**: Might already be near optimal. That's okay—fine-tuning doesn't always help.

**Issue**: Overfitting during fine-tuning
- **Fix**: Add more dropout, reduce epochs, or increase data augmentation.

---

## Part 5: Trying Different Architectures (10 minutes)

### Instructions

Let's try ResNet50 and see if it beats VGG16.

```python
from tensorflow.keras.applications import ResNet50

# Load ResNet50
base_model_resnet = ResNet50(
    weights='imagenet',
    include_top=False,
    input_shape=(IMG_SIZE, IMG_SIZE, 3)
)

base_model_resnet.trainable = False

# Build model
model_resnet = models.Sequential([
    base_model_resnet,
    layers.GlobalAveragePooling2D(),  # ResNet uses GAP instead of Flatten
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(1, activation='sigmoid')
], name='ResNet50_Transfer')

model_resnet.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.0001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

print("Training ResNet50 Transfer Learning...")
history_resnet = model_resnet.fit(
    train_generator,
    epochs=15,
    validation_data=val_generator,
    callbacks=[EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)],
    verbose=1
)

val_loss_resnet, val_acc_resnet = model_resnet.evaluate(val_generator)
print(f"\nResNet50 Validation Accuracy: {val_acc_resnet:.2%}")
print(f"VGG16 Validation Accuracy: {val_acc_finetune:.2%}")
print(f"Winner: {'ResNet50' if val_acc_resnet > val_acc_finetune else 'VGG16'}")

plot_training_curves(history_resnet, "ResNet50 Transfer Learning")
```

**Discussion (both partners):**
- Which architecture performed better?
- ResNet50 has skip connections—how might that help?
- When would you choose VGG16 vs ResNet50?

### Expected Output

- ResNet50 trains successfully
- Comparable or slightly better accuracy than VGG16 (91-95%)
- Possibly faster training (ResNet is more efficient)
- Understanding that architecture choice matters

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. The Transfer Learning Advantage**: You saw 3-4x faster training and 10-15% better accuracy. Why doesn't everyone use transfer learning for everything?

**2. Data Similarity**: ImageNet has 1000 categories (dogs, cats, cars, planes, etc.). Our task was cats vs dogs. What if our task was medical X-rays? Would transfer learning still help?

**3. Freezing Strategy**: We froze early layers, fine-tuned top layers. What would happen if we froze nothing? Froze everything?

**4. PM Integration**: Your PM asks, "Can we build an image classifier for our app?" You have 2000 labeled images. Based on this lab, what's your answer?

**5. Ethical Considerations**: ImageNet contains biases from its training data. When you use a pre-trained model, you inherit those biases. How do you mitigate this?

### Exit Ticket

**Submit via Canvas**:

```
1. What was your best validation accuracy?
   - From scratch: _____
   - Transfer learning (frozen): _____
   - Fine-tuned: _____

2. Explain transfer learning to someone who's never taken ML:

3. When would training from scratch be better than transfer learning?

4. On a scale of 1-5, how confident are you with:
   - Loading pre-trained models: ___
   - Freezing/unfreezing layers: ___
   - Fine-tuning on custom data: ___
   - Choosing appropriate architectures: ___

5. What image classification task would you tackle with transfer learning?
```

---

## Extension Challenges (Optional)

### Challenge 1: Multi-Class Classification
Extend to 10 classes (use CIFAR-10 or a larger dataset):
```python
# Change final layer to 10 units with softmax
layers.Dense(10, activation='softmax')
# Use categorical_crossentropy loss
```

### Challenge 2: Grad-CAM Visualization
See what the model is looking at:
```python
import tensorflow as tf

def make_gradcam_heatmap(img_array, model, last_conv_layer_name):
    grad_model = tf.keras.models.Model(
        [model.inputs], [model.get_layer(last_conv_layer_name).output, model.output]
    )
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        class_idx = tf.argmax(predictions[0])
        loss = predictions[:, class_idx]
    grads = tape.gradient(loss, conv_outputs)
    # ... (implement rest of Grad-CAM)
```

### Challenge 3: Different Pre-trained Models
Try EfficientNet, InceptionV3, or MobileNet:
```python
from tensorflow.keras.applications import EfficientNetB0, InceptionV3, MobileNetV2
```

### Challenge 4: Learning Rate Scheduling
Implement learning rate decay:
```python
from tensorflow.keras.callbacks import ReduceLROnPlateau

reduce_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.2, patience=3, min_lr=0.000001)
```

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, dataset verification, pair formation
- **10-25 min**: Data preparation and augmentation (Part 1)
- **25-45 min**: From-scratch baseline (Part 2, Partner A)
- **45-70 min**: Transfer learning frozen (Part 3, Partner B)
- **70-90 min**: Fine-tuning (Part 4, both partners)
- **90-100 min**: ResNet comparison and wrap-up (Part 5)

### Common Struggles

**Download time for ImageNet weights**: First time takes 2-5 minutes. Build this into schedule. Have backup: pre-downloaded weights on USB drives.

**Hardware limitations**: Not everyone has GPUs. Set expectations: CPU training is slower but works. Encourage cloud options (Colab).

**Confusion about freezing**: Students will forget to freeze and wonder why training is slow. Visual diagrams help: draw frozen layers in blue, trainable in red.

**Overfitting anxiety**: Students see 99% training accuracy and panic. Explain: with frozen base model, some overfitting in top layers is okay.

### Success Indicators

Students are on track if they:
- ✅ Load pre-trained models successfully
- ✅ Understand why freezing layers matters
- ✅ Achieve >85% accuracy with transfer learning (vs 70-80% from scratch)
- ✅ Can explain when transfer learning is appropriate
- ✅ Successfully fine-tune and see improvement

Students are struggling if they:
- ❌ Can't load pre-trained weights (network issues)
- ❌ Think all pre-trained models are the same
- ❌ Don't see improvement with transfer learning (configuration error)
- ❌ Can't articulate why freezing helps

### Materials to Prepare

**Before class:**
- [ ] Download and test dataset (Dogs vs Cats or alternative)
- [ ] Pre-download VGG16, ResNet50 weights on class machines
- [ ] Test on both GPU and CPU setups (know timing differences)
- [ ] Prepare backup: Google Colab notebooks with data pre-loaded
- [ ] Create freezing/unfreezing visual diagram
- [ ] Have USB drives with weights and datasets ready

**During class:**
- [ ] Monitor download progress (first students to start will finish first)
- [ ] Circulate during training—watch for memory errors
- [ ] Check that Partner A and B are both engaged (not one doing all work)
- [ ] Listen for "Why is this so slow?"—probably not frozen
- [ ] Take screenshots of best accuracy results (celebrate wins)

**After class:**
- [ ] Check which pairs achieved >90% (most should)
- [ ] Note if anyone beat 95% (exceptional with this dataset)
- [ ] Identify students confused by freezing concept (follow up)
- [ ] Survey: Did transfer learning "click" for students?

### Teaching Philosophy Notes

**Transfer learning is a superpower**. Students will spend 20 minutes training from scratch and get 75%. Then 5 minutes with transfer learning and get 92%. That moment—that's when they get it. That's when ML stops being magic and starts being engineering.

**ImageNet is the giant's shoulders**. Emphasize: ImageNet took years and millions of dollars to create. VGG16 took weeks to train. You're getting that for free in 30 seconds. That's the power of open source and the ML community.

**Freezing is non-obvious**. Students expect that training all parameters is always better. It's not. With small datasets, freezing prevents catastrophic forgetting. Make this visceral: show what happens when you DON'T freeze (accuracy tanks).

**Architecture choice matters**. VGG16 vs ResNet50 vs EfficientNet—these aren't just names. Each represents different design philosophies. Encourage students to read the papers (briefly). Understand the "why" behind the architecture.

---

**Commit message template**:

```
Complete Module 06 Transfer Learning Lab

- Trained CNN from scratch on cats vs dogs (75.3% accuracy, 8 min)
- Applied transfer learning with frozen VGG16 (91.2% accuracy, 3 min)
- Fine-tuned top layers with unfrozen conv blocks (94.1% accuracy)
- Compared VGG16 vs ResNet50 architectures (ResNet: 94.6%)
- Demonstrated 3x speedup and 19% accuracy improvement vs from-scratch
```
