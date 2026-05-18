# CSC-114 Machine Learning Glossary

Complete reference of ML/AI terms used in Artificial Intelligence I

---

## How to Use This Glossary

**Search Tip**: Use Ctrl+F (Cmd+F on Mac) to find terms instantly.

**Reading Tip**: Terms are alphabetical, but check the [Quick Reference by Category](#quick-reference-by-category) at the bottom to browse by topic.

**Learning Tip**: Don't memorize definitions. Understand when each concept matters and what problems it solves.

---

## A

### Accuracy
**Definition**: The proportion of correct predictions (both true positives and true negatives) among all predictions made.

**Formula**: `(TP + TN) / (TP + TN + FP + FN)`

**When It Matters**: Good baseline metric but misleading with imbalanced datasets.

**Example**: 95% accuracy sounds great, but if 95% of your data is one class, a model that always predicts that class gets 95% accuracy without learning anything useful. Use precision/recall for imbalanced data.

**Related Terms**: Precision, Recall, F1-Score, Confusion Matrix

---

### Activation Function
**Definition**: A mathematical function applied to a neuron's output that introduces non-linearity into the network.

**When It Matters**: Without activation functions, neural networks would just be fancy linear regression. They enable networks to learn complex patterns.

**Common Types**:
- **ReLU** (Rectified Linear Unit): `max(0, x)` - Fast, widely used, can cause "dying neurons"
- **Sigmoid**: `1 / (1 + e^-x)` - Outputs 0-1, good for binary classification output layer
- **Tanh**: Outputs -1 to 1, centered around zero
- **Softmax**: Used in output layer for multi-class classification

**Example**: ReLU is default for hidden layers in most networks. Sigmoid/softmax for output layers.

**Related Terms**: Neural Network, Layer, Backpropagation

---

### AI Ethics
**Definition**: The study of moral principles and societal impacts related to artificial intelligence systems.

**When It Matters**: Every AI system you build. Not optional. Not something to "add later."

**Key Concerns**:
- Bias in training data perpetuating discrimination
- Privacy violations from data collection
- Lack of transparency ("black box" decisions)
- Job displacement and economic inequality
- Autonomous weapons and surveillance

**Example**: A hiring algorithm trained on historical data may discriminate against women because past hiring was biased. The algorithm learns and amplifies existing bias.

**Related Terms**: Algorithmic Bias, Fairness, Transparency, Accountability

---

### Algorithmic Bias
**Definition**: Systematic and repeatable errors in a computer system that create unfair outcomes, often disadvantaging certain groups.

**When It Matters**: When your training data reflects historical discrimination or isn't representative.

**Sources of Bias**:
- **Historical bias**: Training data reflects past discrimination
- **Sampling bias**: Data doesn't represent all groups equally
- **Measurement bias**: Features measured differently across groups
- **Aggregation bias**: One model used for different populations inappropriately

**Example**: Facial recognition systems with higher error rates for people with darker skin because training data was predominantly lighter-skinned faces.

**Related Terms**: AI Ethics, Fairness, Training Data

---

### API (Application Programming Interface)
**Definition**: A set of protocols that allows different software systems to communicate with each other.

**When It Matters**: When you're using external services (OpenAI API, Hugging Face, cloud platforms) instead of training everything from scratch.

**Example**: Instead of training your own LLM (requires millions of dollars), you call the OpenAI API to use GPT-4.

```python
import openai
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}]
)
```

**Common Issues**: Rate limits, authentication errors, timeouts, cost management.

**Related Terms**: REST API, Token, Rate Limiting

---

## B

### Backpropagation
**Definition**: The algorithm used to calculate gradients and update weights in a neural network by propagating errors backward through the network.

**When It Matters**: Every time you train a neural network. It's how networks learn.

**How It Works**:
1. Forward pass: Input flows through network, produces output
2. Calculate loss: Compare output to actual target
3. Backward pass: Calculate gradient of loss with respect to each weight
4. Update weights: Use gradients to adjust weights (via optimizer)

**Why It's Important**: Makes training deep networks computationally feasible. Without it, we'd need to test every possible weight combination (impossible).

**Related Terms**: Gradient Descent, Loss Function, Chain Rule, Optimizer

---

### Batch Size
**Definition**: The number of training examples used in one iteration of gradient descent.

**When It Matters**: Affects training speed, memory usage, and model convergence.

**Trade-offs**:
- **Small batches (1-32)**: More frequent updates, noisier gradients, better generalization, slower per epoch
- **Large batches (128-512)**: Faster per epoch, more stable gradients, may converge to sharp minima, requires more memory

**Example**: If you have 10,000 examples and batch size 100, one epoch = 100 iterations.

**Common Values**: 32, 64, 128 (powers of 2 for GPU efficiency)

**Related Terms**: Epoch, Mini-batch Gradient Descent, Training Loop

---

### Bias (Neural Network)
**Definition**: A learnable parameter added to the weighted sum in a neuron before applying the activation function.

**Formula**: `output = activation(weights · inputs + bias)`

**When It Matters**: Allows the activation function to be shifted left/right, giving the model more flexibility.

**Example**: Without bias, a neuron's output is zero when all inputs are zero. Bias allows the neuron to activate even with zero input.

**Related Terms**: Weights, Neuron, Activation Function

---

### Bias (Statistical)
**Definition**: The difference between a model's expected predictions and the true values. Systematic error that isn't due to randomness.

**When It Matters**: When your model makes consistent errors in one direction.

**Example**: A model that always predicts house prices 10% too low has high bias. It's systematically wrong.

**Related Terms**: Bias-Variance Tradeoff, Underfitting, Model Complexity

---

### Bias-Variance Tradeoff
**Definition**: The fundamental tension between a model's ability to fit training data (low bias) and its ability to generalize to new data (low variance).

**When It Matters**: When choosing model complexity and interpreting performance.

**Key Concepts**:
- **High bias**: Model too simple, underfits, high training error, high test error
- **High variance**: Model too complex, overfits, low training error, high test error
- **Sweet spot**: Balanced model, reasonable training error, good test error

**Example**: Linear regression on non-linear data = high bias. 20-degree polynomial on noisy data = high variance.

**Related Terms**: Overfitting, Underfitting, Regularization, Cross-Validation

---

## C

### Classification
**Definition**: A supervised learning task where the goal is to predict a discrete category or label.

**When It Matters**: When your output is categorical (spam/not spam, cat/dog/bird, digit 0-9).

**Types**:
- **Binary**: Two classes (yes/no, positive/negative)
- **Multi-class**: More than two classes, single label (digit classification 0-9)
- **Multi-label**: Multiple classes, multiple labels possible (image with both "cat" and "outdoor")

**Common Algorithms**: Logistic Regression, Decision Trees, Random Forest, SVM, Neural Networks

**Related Terms**: Supervised Learning, Regression, Label, Class

---

### CNN (Convolutional Neural Network)
**Definition**: A type of neural network architecture designed for processing grid-like data (images, video, audio spectrograms) using convolutional layers.

**When It Matters**: Image classification, object detection, anything with spatial relationships.

**Key Components**:
- **Convolutional layers**: Learn spatial features (edges, textures, patterns)
- **Pooling layers**: Reduce spatial dimensions, create translation invariance
- **Fully connected layers**: Final classification based on learned features

**Why They Work**: Instead of treating pixels as independent features, CNNs learn local patterns and build hierarchical representations.

**Example**: Early layers detect edges, middle layers detect textures/shapes, deep layers detect complex objects (faces, cars).

**Related Terms**: Computer Vision, Transfer Learning, Feature Extraction, ResNet, VGG

---

### Confusion Matrix
**Definition**: A table showing the counts of true positives, false positives, true negatives, and false negatives for a classification model.

**When It Matters**: When you need to understand what types of errors your model makes.

**Layout** (for binary classification):
```
                Predicted Positive    Predicted Negative
Actual Positive    TP (True Pos)      FN (False Neg)
Actual Negative    FP (False Pos)     TN (True Neg)
```

**What It Tells You**:
- TP: Correctly identified positives
- TN: Correctly identified negatives
- FP: False alarms (Type I error)
- FN: Missed positives (Type II error)

**Example**: Medical test with 90% accuracy might have terrible false negative rate (missing sick patients). Confusion matrix reveals this.

**Related Terms**: Precision, Recall, F1-Score, TPR, FPR

---

### Cross-Validation
**Definition**: A technique for assessing model performance by training and evaluating on different subsets of the data.

**When It Matters**: When you want robust performance estimates and want to use all your data for both training and validation.

**Common Type - K-Fold CV**:
1. Split data into K equal folds
2. Train on K-1 folds, validate on the remaining fold
3. Repeat K times, each fold used as validation once
4. Average the K performance scores

**Why It's Better**: Single train/test split can be lucky or unlucky. CV gives more reliable estimates.

**Example**: 5-fold CV on 1000 examples = 5 models, each trained on 800 examples, validated on 200.

**Related Terms**: Validation Set, Train/Test Split, Hyperparameter Tuning

---

## D

### Data Augmentation
**Definition**: Artificially increasing training data size by applying transformations that preserve the label.

**When It Matters**: When you have limited training data, especially in computer vision.

**Common Techniques**:
- Images: Rotation, flipping, cropping, color jittering, scaling
- Text: Synonym replacement, back-translation, sentence reordering
- Audio: Pitch shifting, time stretching, adding noise

**Example**: One image of a cat → 10 images (rotated, flipped, cropped versions). Model learns that cats are cats regardless of orientation.

**Why It Works**: Prevents overfitting, improves generalization, makes model robust to variations.

**Related Terms**: Training Data, Overfitting, Generalization

---

### Decision Tree
**Definition**: A supervised learning algorithm that makes predictions by learning a tree of if-then-else decision rules from data.

**When It Matters**: When you want an interpretable model or need to handle non-linear relationships without feature engineering.

**How It Works**: Recursively splits data based on features that best separate classes (highest information gain).

**Pros**: Interpretable, handles non-linearity, no feature scaling needed

**Cons**: Prone to overfitting, unstable (small data changes = different tree)

**Example**: Predicting loan approval: "If income > 50k AND credit_score > 650 → Approve"

**Related Terms**: Random Forest, Ensemble Learning, Information Gain, Gini Impurity

---

### Dropout
**Definition**: A regularization technique where randomly selected neurons are ignored (set to zero) during training.

**When It Matters**: When your neural network is overfitting.

**How It Works**: During training, each neuron has probability p of being temporarily removed. During inference, all neurons are active.

**Why It Works**: Prevents co-adaptation where neurons rely too much on specific other neurons. Forces network to learn robust features.

**Typical Values**: 0.2 to 0.5 (20-50% of neurons dropped)

**Example**: `keras.layers.Dropout(0.5)` drops 50% of neurons randomly each batch.

**Related Terms**: Regularization, Overfitting, Neural Network

---

## E

### Embedding
**Definition**: A learned representation that maps discrete objects (words, users, items) to continuous vector spaces.

**When It Matters**: Working with categorical data, NLP, recommendation systems.

**Why It's Powerful**: Similar items have similar vectors. Enables arithmetic ("king" - "man" + "woman" ≈ "queen").

**Common Uses**:
- Word embeddings (Word2Vec, GloVe, BERT)
- User/item embeddings in recommendations
- Categorical feature embeddings

**Example**: Instead of one-hot encoding 10,000 words (sparse, no relationships), use 300-dimensional embeddings (dense, captures relationships).

**Related Terms**: Word2Vec, Feature Engineering, Representation Learning

---

### Ensemble Learning
**Definition**: Combining multiple models to produce better predictions than any individual model.

**When It Matters**: When you want to improve accuracy and reduce overfitting.

**Types**:
- **Bagging**: Train models independently on random subsets (Random Forest)
- **Boosting**: Train models sequentially, each correcting previous errors (XGBoost, AdaBoost)
- **Stacking**: Train meta-model on predictions of base models

**Why It Works**: Different models make different errors. Averaging reduces variance.

**Example**: Random Forest = ensemble of decision trees, each seeing different data/features.

**Related Terms**: Random Forest, Bagging, Boosting, XGBoost

---

### Epoch
**Definition**: One complete pass through the entire training dataset.

**When It Matters**: Training neural networks. More epochs = more learning opportunities, but risk overfitting.

**Example**: 10,000 examples, batch size 100 → 1 epoch = 100 iterations (batches)

**Typical Values**: 10-100+ epochs depending on data size and model complexity

**How to Choose**: Train until validation loss stops improving (early stopping).

**Related Terms**: Batch Size, Iteration, Training Loop, Early Stopping

---

## F

### F1-Score
**Definition**: The harmonic mean of precision and recall, providing a single score that balances both metrics.

**Formula**: `F1 = 2 × (Precision × Recall) / (Precision + Recall)`

**When It Matters**: When you care about both false positives and false negatives, especially with imbalanced classes.

**Why Harmonic Mean**: Punishes extreme values. If either precision or recall is low, F1 is low.

**Example**: Precision=100%, Recall=50% → F1=67% (not the arithmetic mean of 75%)

**When to Use**:
- Imbalanced classes
- Need balance between precision and recall
- Single metric for model comparison

**Related Terms**: Precision, Recall, Confusion Matrix, Classification

---

### Feature
**Definition**: An individual measurable property or characteristic used as input to a model.

**When It Matters**: Features are what models learn from. "Garbage in, garbage out."

**Examples**:
- House price prediction: square footage, bedrooms, location, age
- Spam detection: word frequencies, sender info, time sent
- Image classification: pixel values (or learned features in deep learning)

**Types**:
- **Numerical**: Continuous (age, price) or discrete (count)
- **Categorical**: Nominal (color, country) or ordinal (rating 1-5)
- **Derived**: Created from raw data (age from birthdate)

**Related Terms**: Feature Engineering, Feature Selection, Input Variables

---

### Feature Engineering
**Definition**: The process of creating, transforming, or selecting features to improve model performance.

**When It Matters**: Can make or break traditional ML models. Less critical for deep learning (learns features automatically).

**Common Techniques**:
- **Creating**: Date → day_of_week, month, is_holiday
- **Transforming**: Skewed distribution → log transform
- **Encoding**: Categories → one-hot encoding or embeddings
- **Scaling**: Different ranges → normalized to 0-1 or standardized
- **Interaction**: Combining features (size × bedrooms)

**Example**: Raw text → word counts, TF-IDF scores, sentiment scores

**Related Terms**: Feature Selection, Data Preprocessing, Domain Knowledge

---

### Feature Scaling
**Definition**: Transforming features to a similar scale to improve model training and performance.

**When It Matters**:
- Required: Algorithms using distance metrics (KNN, SVM), gradient descent
- Not required: Tree-based methods (Decision Trees, Random Forest)

**Common Methods**:
- **Normalization (Min-Max)**: Scale to [0, 1] → `(x - min) / (max - min)`
- **Standardization (Z-score)**: Mean=0, Std=1 → `(x - mean) / std`

**Example**: Features [age: 0-100, income: 0-1,000,000] → income dominates. Scale both to [0, 1].

**Related Terms**: Data Preprocessing, Feature Engineering, Normalization

---

### Fine-Tuning
**Definition**: Taking a pre-trained model and continuing training on your specific task/data.

**When It Matters**: When you don't have enough data to train from scratch but have a related pre-trained model.

**How It Works**:
1. Start with pre-trained model (trained on large dataset)
2. Replace output layer for your task
3. Train on your data (usually with lower learning rate)
4. Often freeze early layers, only train later layers

**Example**: Start with ResNet trained on ImageNet (1M images, 1000 classes) → fine-tune on your medical images (1000 images, 5 classes).

**Why It Works**: Pre-trained model learned general features. You adapt to your specific task.

**Related Terms**: Transfer Learning, Pre-training, Domain Adaptation

---

## G

### Generalization
**Definition**: A model's ability to perform well on new, unseen data (not just memorizing training data).

**When It Matters**: Always. This is the entire point of machine learning.

**How to Measure**: Performance on test set (data not seen during training).

**Good Generalization**: Training accuracy ≈ Test accuracy

**Poor Generalization**: Training accuracy >> Test accuracy (overfitting)

**How to Improve**: More data, regularization, simpler model, data augmentation, cross-validation

**Related Terms**: Overfitting, Test Set, Validation Set

---

### GPU (Graphics Processing Unit)
**Definition**: A specialized processor designed for parallel computation, essential for training large neural networks efficiently.

**When It Matters**: Training deep learning models. Can be 10-100x faster than CPU for neural networks.

**Why GPUs for ML**: Matrix operations (core of neural networks) are highly parallelizable. GPUs have thousands of cores vs. CPU's dozen cores.

**Options**:
- Local: NVIDIA GPUs with CUDA support
- Cloud: Google Colab (free), AWS, GCP, Azure
- Mac: M-series chips with Metal acceleration

**Related Terms**: CUDA, Tensor Cores, Parallel Processing

---

### Gradient Descent
**Definition**: An optimization algorithm that iteratively adjusts model parameters to minimize the loss function by moving in the direction of steepest descent.

**When It Matters**: Training most ML models, especially neural networks.

**How It Works**:
1. Calculate gradient of loss with respect to parameters
2. Update parameters: `parameter = parameter - learning_rate × gradient`
3. Repeat until convergence

**Variants**:
- **Batch GD**: Use all training data per update (slow, stable)
- **Stochastic GD (SGD)**: Use one example per update (fast, noisy)
- **Mini-batch GD**: Use batch per update (standard, balanced)
- **Adam, RMSprop**: Adaptive learning rates

**Related Terms**: Learning Rate, Optimizer, Backpropagation, Loss Function

---

## H

### Hyperparameter
**Definition**: A parameter set before training that controls the learning process (not learned from data).

**When It Matters**: Tuning hyperparameters can dramatically improve model performance.

**Examples**:
- Learning rate
- Batch size
- Number of layers/neurons
- Regularization strength
- Number of trees in random forest
- Dropout rate

**How to Tune**: Grid search, random search, Bayesian optimization, cross-validation

**Related Terms**: Model Parameter, Hyperparameter Tuning, Cross-Validation

---

## I

### Imbalanced Dataset
**Definition**: A dataset where class frequencies are not roughly equal.

**When It Matters**: Classification problems where accuracy becomes misleading.

**Example**: Fraud detection with 99% legitimate, 1% fraud. Model predicting "always legitimate" gets 99% accuracy but is useless.

**Solutions**:
- Use better metrics (precision, recall, F1, ROC-AUC)
- Resampling: Undersample majority or oversample minority
- Class weights: Penalize mistakes on minority class more
- Generate synthetic examples (SMOTE)
- Different algorithms: Some handle imbalance better

**Related Terms**: Class Imbalance, SMOTE, Precision, Recall

---

### Inference
**Definition**: Using a trained model to make predictions on new data.

**When It Matters**: After training, when you deploy your model in production.

**Example**: Training took 3 hours on GPU. Inference takes 50ms per prediction on CPU.

**Inference vs Training**:
- No backpropagation needed
- No gradient computation
- Faster, less memory
- Can run on CPU
- Dropout/batch normalization behave differently

**Related Terms**: Prediction, Deployment, Model Serving

---

## K

### K-Fold Cross-Validation
**Definition**: Cross-validation method that splits data into K equal folds, training K models where each fold is validation once.

**When It Matters**: When you need robust model evaluation with limited data.

**Typical K Values**: 5 or 10

**How It Works**:
```
Fold 1: [Val][Train][Train][Train][Train]
Fold 2: [Train][Val][Train][Train][Train]
Fold 3: [Train][Train][Val][Train][Train]
Fold 4: [Train][Train][Train][Val][Train]
Fold 5: [Train][Train][Train][Train][Val]
→ Average results from all 5 folds
```

**Trade-off**: More reliable than single split, but K times more expensive computationally.

**Related Terms**: Cross-Validation, Train/Test Split, Validation

---

### KNN (K-Nearest Neighbors)
**Definition**: A non-parametric algorithm that makes predictions based on the K closest training examples in feature space.

**When It Matters**: Simple baseline, small datasets, when decision boundaries are irregular.

**How It Works**:
1. Find K nearest examples to new point (using distance metric)
2. Classification: Majority vote of K neighbors
3. Regression: Average of K neighbors

**Pros**: Simple, no training phase, works for non-linear patterns

**Cons**: Slow prediction (must search all training data), sensitive to feature scaling, curse of dimensionality

**Example**: K=5 for new house → find 5 most similar houses → predict average price.

**Related Terms**: Distance Metric, Feature Scaling, Lazy Learning

---

## L

### Label
**Definition**: The target output or ground truth that you're trying to predict in supervised learning.

**When It Matters**: Supervised learning requires labeled data. Creating quality labels is often the hardest part.

**Examples**:
- Image classification: "cat", "dog", "bird"
- Regression: House price $350,000
- Object detection: Bounding boxes around objects
- NLP: Sentiment "positive"/"negative"

**Label Quality Issues**:
- Noisy labels (human error)
- Inconsistent labeling
- Ambiguous cases
- Class imbalance

**Related Terms**: Supervised Learning, Ground Truth, Annotation

---

### Learning Rate
**Definition**: A hyperparameter that controls how much to adjust model parameters based on the gradient at each step.

**When It Matters**: One of the most important hyperparameters. Wrong learning rate = model doesn't learn or diverges.

**Trade-offs**:
- **Too high**: Training unstable, loss oscillates or explodes
- **Too low**: Training too slow, may get stuck in local minima
- **Just right**: Steady decrease in loss, reasonable convergence time

**Typical Values**: 0.001 (1e-3), 0.0001 (1e-4)

**Techniques**:
- Learning rate scheduling (decrease over time)
- Adaptive optimizers (Adam, RMSprop)
- Learning rate warmup
- Cyclic learning rates

**Related Terms**: Gradient Descent, Optimizer, Hyperparameter

---

### Loss Function
**Definition**: A function that measures how wrong the model's predictions are. Training aims to minimize this.

**When It Matters**: Different problems need different loss functions. Wrong loss function = wrong behavior.

**Common Loss Functions**:

**Regression**:
- **MSE (Mean Squared Error)**: Penalizes large errors heavily
- **MAE (Mean Absolute Error)**: Treats all errors equally
- **Huber Loss**: Robust to outliers

**Classification**:
- **Binary Cross-Entropy**: Binary classification
- **Categorical Cross-Entropy**: Multi-class classification
- **Sparse Categorical Cross-Entropy**: Multi-class with integer labels

**Example**: Predicting stock prices with cross-entropy (for classification) makes no sense. Use MSE (for regression).

**Related Terms**: Cost Function, Objective Function, Gradient Descent

---

## M

### Model
**Definition**: A mathematical representation that learns patterns from data to make predictions or decisions.

**When It Matters**: The core of machine learning. Different problems need different model types.

**Types**:
- **Linear models**: Linear regression, logistic regression
- **Tree-based**: Decision trees, random forest, XGBoost
- **Neural networks**: MLP, CNN, RNN, Transformers
- **Instance-based**: KNN, SVM
- **Probabilistic**: Naive Bayes, Gaussian processes

**Related Terms**: Algorithm, Training, Inference

---

### Model Parameter
**Definition**: Internal variables learned from training data (weights, biases).

**When It Matters**: Distinguishing from hyperparameters (set before training).

**Examples**:
- Neural network: Weights and biases
- Linear regression: Coefficients
- Decision tree: Split points

**Key Difference**:
- **Parameters**: Learned from data during training
- **Hyperparameters**: Set before training to control learning

**Related Terms**: Weights, Bias, Hyperparameter

---

## N

### Neural Network
**Definition**: A computing system inspired by biological neural networks, consisting of interconnected layers of nodes (neurons) that process information.

**When It Matters**: Complex patterns, large datasets, unstructured data (images, text, audio).

**Basic Structure**:
- **Input layer**: Receives features
- **Hidden layers**: Learn representations
- **Output layer**: Produces predictions

**Each neuron**: `output = activation(weights · inputs + bias)`

**Types**: Feedforward (MLP), CNN (images), RNN (sequences), Transformers (attention)

**Why They Work**: Layer-by-layer feature learning, composing simple patterns into complex ones.

**Related Terms**: Deep Learning, Backpropagation, Activation Function

---

### Normalization
**Definition**: Scaling data to a standard range, typically [0, 1].

**Formula**: `normalized = (x - min) / (max - min)`

**When It Matters**: When features have different ranges and you're using distance-based or gradient-based algorithms.

**Normalization vs Standardization**:
- **Normalization**: Bounded range [0, 1], sensitive to outliers
- **Standardization**: Mean=0, Std=1, less sensitive to outliers

**Related Terms**: Feature Scaling, Standardization, Preprocessing

---

## O

### Optimizer
**Definition**: An algorithm that updates model parameters based on gradients to minimize the loss function.

**When It Matters**: Training neural networks. Different optimizers converge at different rates.

**Common Optimizers**:

**SGD (Stochastic Gradient Descent)**:
- Simple, reliable
- May need learning rate tuning
- Can use momentum for faster convergence

**Adam (Adaptive Moment Estimation)**:
- Most popular default choice
- Adaptive learning rates per parameter
- Works well out-of-the-box
- Can overfit on small datasets

**RMSprop**:
- Good for recurrent networks
- Adaptive learning rates

**Typical Usage**: Start with Adam (lr=0.001), try SGD with momentum if overfitting.

**Related Terms**: Gradient Descent, Learning Rate, Backpropagation

---

### Overfitting
**Definition**: When a model learns training data too well, including noise and random fluctuations, failing to generalize to new data.

**When It Matters**: When training accuracy is high but test accuracy is low.

**Signs**:
- Training loss keeps decreasing, validation loss increases
- Training accuracy >> Test accuracy
- Model performs amazing on seen data, terrible on new data

**Causes**:
- Model too complex for data
- Too little training data
- Training too long
- No regularization

**Solutions**:
- More training data
- Simpler model
- Regularization (L1, L2, dropout)
- Early stopping
- Data augmentation
- Cross-validation

**Example**: 10th-degree polynomial fitting 20 noisy points perfectly. Won't generalize.

**Related Terms**: Generalization, Underfitting, Bias-Variance Tradeoff, Regularization

---

## P

### Precision
**Definition**: Of all positive predictions, what proportion were actually positive?

**Formula**: `Precision = TP / (TP + FP)`

**When It Matters**: When false positives are costly. "When I predict positive, how often am I right?"

**Example**: Spam filter with high precision rarely marks legitimate email as spam (few false positives), but might miss some spam (false negatives okay).

**Trade-off**: Usually inverse relationship with recall. Increase precision → decrease recall.

**Related Terms**: Recall, F1-Score, Confusion Matrix, Precision-Recall Curve

---

### Pre-training
**Definition**: Training a model on a large general dataset before fine-tuning on a specific task.

**When It Matters**: When you lack data or computational resources to train from scratch.

**Common Pre-trained Models**:
- **Computer Vision**: ResNet, VGG, EfficientNet (trained on ImageNet)
- **NLP**: BERT, GPT, T5 (trained on massive text corpora)

**Why It Works**: Model learns general features (edges, textures, grammar, semantics) that transfer across tasks.

**Related Terms**: Transfer Learning, Fine-Tuning, Foundation Models

---

## R

### Recall (Sensitivity, True Positive Rate)
**Definition**: Of all actual positives, what proportion did we correctly predict?

**Formula**: `Recall = TP / (TP + FN)`

**When It Matters**: When false negatives are costly. "Of all positive cases, how many did I find?"

**Example**: Cancer detection needs high recall. Missing cancer (false negative) is worse than false alarm (false positive).

**Trade-off**: Usually inverse relationship with precision. Increase recall → decrease precision.

**Related Terms**: Precision, F1-Score, Confusion Matrix, Sensitivity

---

### Regression
**Definition**: A supervised learning task where the goal is to predict a continuous numerical value.

**When It Matters**: When output is a number (price, temperature, probability, age).

**Common Algorithms**:
- Linear Regression
- Polynomial Regression
- Decision Trees / Random Forest
- Neural Networks
- Support Vector Regression

**Evaluation Metrics**: MSE, RMSE, MAE, R²

**Example**: Predicting house prices ($100k - $5M), not categories.

**Related Terms**: Classification, Supervised Learning, Continuous Variable

---

### Regularization
**Definition**: Techniques to prevent overfitting by penalizing model complexity.

**When It Matters**: When your model overfits training data.

**Common Techniques**:

**L1 Regularization (Lasso)**:
- Adds penalty: `loss + λ × |weights|`
- Pushes some weights to exactly zero
- Performs feature selection

**L2 Regularization (Ridge)**:
- Adds penalty: `loss + λ × weights²`
- Shrinks weights toward zero
- Doesn't zero out weights

**Dropout**: Randomly drop neurons during training

**Early Stopping**: Stop training when validation loss stops improving

**Data Augmentation**: Artificially increase training data

**Related Terms**: Overfitting, L1/L2 Regularization, Dropout

---

### ReLU (Rectified Linear Unit)
**Definition**: An activation function defined as `ReLU(x) = max(0, x)`.

**When It Matters**: Default activation for hidden layers in most neural networks.

**Why It's Popular**:
- Simple and fast to compute
- Avoids vanishing gradient problem
- Sparse activation (many neurons output zero)

**Drawback**: "Dying ReLU" - neurons can get stuck outputting zero if weights become negative during training.

**Variants**:
- **Leaky ReLU**: `max(0.01x, x)` - prevents dying ReLU
- **Parametric ReLU**: Learnable slope for negative values

**Related Terms**: Activation Function, Vanishing Gradient, Neural Network

---

### ROC Curve (Receiver Operating Characteristic)
**Definition**: A plot of True Positive Rate (recall) vs False Positive Rate across different classification thresholds.

**When It Matters**: Evaluating binary classifiers, especially when you need to choose a classification threshold.

**How to Read**:
- **Top-left corner**: Perfect classifier (100% TPR, 0% FPR)
- **Diagonal line**: Random guessing
- **Area under curve (AUC)**: Overall classifier quality (0.5 = random, 1.0 = perfect)

**Use Cases**: Compare models (higher AUC = better), choose threshold based on cost of FP vs FN.

**Related Terms**: AUC, Precision-Recall Curve, TPR, FPR

---

## S

### Sigmoid Function
**Definition**: An activation function that maps inputs to range (0, 1): `σ(x) = 1 / (1 + e^-x)`

**When It Matters**: Output layer for binary classification (probability of positive class).

**Properties**:
- Output interpretable as probability
- Smooth and differentiable
- Vanishing gradient problem for extreme values

**Use Cases**:
- Binary classification output
- Historically used in hidden layers (now ReLU preferred)

**Related Terms**: Activation Function, Logistic Regression, Binary Classification

---

### Softmax Function
**Definition**: An activation function that converts a vector of numbers into a probability distribution (outputs sum to 1).

**Formula**: `softmax(xi) = e^xi / Σ(e^xj)`

**When It Matters**: Output layer for multi-class classification.

**Example**: Network outputs [2.1, 0.5, -1.2] → softmax → [0.72, 0.24, 0.04]

**Interpretation**: Class probabilities. Pick class with highest probability.

**Related Terms**: Multi-class Classification, Cross-Entropy Loss, Activation Function

---

### Standardization (Z-score Normalization)
**Definition**: Scaling data to have mean=0 and standard deviation=1.

**Formula**: `z = (x - mean) / std`

**When It Matters**: When features have different scales and you want to preserve outlier information (unlike min-max normalization).

**Properties**:
- Not bounded to specific range
- Less sensitive to outliers than normalization
- Preferred for algorithms assuming normally distributed data

**Related Terms**: Normalization, Feature Scaling, Preprocessing

---

### Supervised Learning
**Definition**: Machine learning where the model learns from labeled training data (input-output pairs).

**When It Matters**: When you have labeled data and want to predict outputs for new inputs.

**Requirements**:
- Labeled training data (expensive to create)
- Input features and corresponding output labels

**Types**:
- **Classification**: Predict categories
- **Regression**: Predict numbers

**Examples**: Image classification, spam detection, price prediction, sentiment analysis

**Related Terms**: Unsupervised Learning, Semi-supervised Learning, Label

---

## T

### Test Set
**Definition**: A subset of data held out from training, used to evaluate final model performance on unseen data.

**When It Matters**: Measuring generalization. Never use for training or hyperparameter tuning.

**Key Rules**:
- **Never** train on test set
- **Never** tune hyperparameters based on test set
- Use **once** at the very end to report final performance

**Typical Split**: 70-80% train, 10-15% validation, 10-15% test

**Why It's Sacred**: If you use test set for decisions during development, you're leaking information and overestimating performance.

**Related Terms**: Training Set, Validation Set, Train/Test Split

---

### Tokenization
**Definition**: The process of breaking text into smaller units (tokens) - words, subwords, or characters.

**When It Matters**: Every NLP task. First step in text processing.

**Types**:
- **Word tokenization**: "Hello world!" → ["Hello", "world", "!"]
- **Subword tokenization**: "unhappiness" → ["un", "happi", "ness"] (handles rare words)
- **Character tokenization**: "Hi" → ["H", "i"]

**Why It Matters**: Models can't process raw text. Need numerical representation. Tokenization is step one.

**Related Terms**: NLP, Embedding, Vocabulary, BPE

---

### Training Set
**Definition**: The subset of data used to train the model (adjust parameters).

**When It Matters**: The data your model learns from. Quality and quantity directly affect performance.

**Typical Size**: 70-80% of total data (rest split between validation and test).

**Common Issues**:
- Too small: Underfitting
- Not representative: Poor generalization
- Data leakage: Information from test set contaminating training

**Related Terms**: Validation Set, Test Set, Train/Test Split

---

### Transfer Learning
**Definition**: Using knowledge learned from one task to improve performance on a related task.

**When It Matters**: When you have limited data or computational resources.

**Common Approach**:
1. Start with model pre-trained on large dataset (ImageNet, Wikipedia)
2. Remove final layer(s)
3. Add new layer(s) for your task
4. Fine-tune on your data

**Why It Works**: Low-level features (edges, grammar) transfer across tasks. Only task-specific high-level features need retraining.

**Example**: ResNet trained on ImageNet (1M images, 1000 classes) → adapt for medical imaging (1000 images, 5 classes).

**Related Terms**: Pre-training, Fine-Tuning, Feature Extraction

---

## U

### Underfitting
**Definition**: When a model is too simple to capture the underlying patterns in the data.

**When It Matters**: When both training and test performance are poor.

**Signs**:
- High training loss and high validation loss
- Training accuracy and test accuracy both low
- Model assumptions too restrictive for data

**Causes**:
- Model too simple
- Not enough features
- Over-regularization
- Not trained long enough

**Solutions**:
- More complex model
- More/better features
- Reduce regularization
- Train longer

**Example**: Linear regression on clearly non-linear data.

**Related Terms**: Overfitting, Bias-Variance Tradeoff, Model Complexity

---

### Unsupervised Learning
**Definition**: Machine learning where the model learns patterns from unlabeled data (no target outputs).

**When It Matters**: When you don't have labels or want to discover hidden structure.

**Common Tasks**:
- **Clustering**: Group similar items (K-means, hierarchical clustering)
- **Dimensionality Reduction**: Reduce features while preserving information (PCA, t-SNE)
- **Anomaly Detection**: Find outliers
- **Association**: Discover rules (market basket analysis)

**Examples**: Customer segmentation, recommendation systems, data compression

**Related Terms**: Supervised Learning, Clustering, Dimensionality Reduction

---

## V

### Validation Set
**Definition**: A subset of data used during training to tune hyperparameters and detect overfitting.

**When It Matters**: Choosing between models, tuning hyperparameters, implementing early stopping.

**How It's Used**:
1. Train model on training set
2. Evaluate on validation set
3. Adjust hyperparameters
4. Repeat until validation performance stops improving

**Key Difference from Test Set**: You make decisions based on validation set during development. Test set is only used once at the end.

**Typical Size**: 10-15% of total data

**Related Terms**: Training Set, Test Set, Cross-Validation, Early Stopping

---

### Vanishing Gradient Problem
**Definition**: When gradients become extremely small during backpropagation, preventing deep networks from learning.

**When It Matters**: Training deep neural networks with certain activation functions (sigmoid, tanh).

**Why It Happens**: Gradients multiplied layer by layer during backpropagation. If each < 1, product approaches zero in deep networks.

**Solutions**:
- Use ReLU activation (doesn't saturate)
- Batch normalization
- Residual connections (ResNet)
- Better initialization
- Gradient clipping

**Related Terms**: Backpropagation, Activation Function, ReLU, Deep Learning

---

## W

### Weights
**Definition**: The learnable parameters that multiply input values in a neuron or model.

**Formula for a neuron**: `output = activation(weights · inputs + bias)`

**When It Matters**: Weights encode what the model has learned. Training = adjusting weights to minimize loss.

**Initialization**: Important for training. Random initialization prevents symmetry. Methods: Xavier/Glorot, He initialization.

**Weight Updates**: During training via gradient descent: `weight = weight - learning_rate × gradient`

**Related Terms**: Bias, Parameter, Gradient Descent, Backpropagation

---

## X

### XGBoost (Extreme Gradient Boosting)
**Definition**: An optimized gradient boosting library that builds an ensemble of decision trees sequentially.

**When It Matters**: Structured/tabular data competitions (Kaggle gold standard), when you need high accuracy on non-image/text data.

**Why It's Powerful**:
- Handles missing values automatically
- Built-in regularization
- Parallel processing
- Often best for structured data

**Key Hyperparameters**:
- `n_estimators`: Number of trees
- `max_depth`: Tree depth
- `learning_rate`: Shrinkage per tree
- `subsample`: Fraction of samples per tree

**Related Terms**: Ensemble Learning, Boosting, Random Forest, Decision Tree

---

---

## Quick Reference by Category

### Model Evaluation Metrics
**Classification**: Accuracy, Precision, Recall, F1-Score, ROC Curve, AUC, Confusion Matrix

**Regression**: MSE, RMSE, MAE, R²

**General**: Loss Function, Cross-Validation

### Neural Network Components
**Architecture**: Neural Network, Layer, CNN, RNN, Transformer

**Building Blocks**: Neuron, Weights, Bias, Activation Function (ReLU, Sigmoid, Softmax)

**Training**: Backpropagation, Gradient Descent, Optimizer, Learning Rate, Loss Function

**Regularization**: Dropout, L1/L2 Regularization, Early Stopping, Batch Normalization

### Training Concepts
**Data Splits**: Training Set, Validation Set, Test Set, Cross-Validation, K-Fold CV

**Training Loop**: Epoch, Batch Size, Iteration, Learning Rate

**Problems**: Overfitting, Underfitting, Vanishing Gradient, Bias-Variance Tradeoff

### Data & Features
**Data Types**: Supervised Learning, Unsupervised Learning, Classification, Regression

**Data Quality**: Imbalanced Dataset, Label, Training Data, Data Augmentation

**Feature Work**: Feature, Feature Engineering, Feature Scaling, Normalization, Standardization, Embedding

### Model Types
**Traditional ML**: Linear Regression, Logistic Regression, Decision Tree, Random Forest, KNN, SVM

**Ensemble**: Ensemble Learning, Bagging, Boosting, XGBoost, Random Forest

**Deep Learning**: Neural Network, CNN, Transfer Learning, Pre-training, Fine-Tuning

### AI Ethics & Society
AI Ethics, Algorithmic Bias, Fairness, Transparency, Accountability

### Practical Tools
API, GPU, Inference, Tokenization, Model Serving

---

## Tips for Using This Glossary

1. **Ctrl+F is your friend**: Don't scroll, search
2. **Start with related terms**: If you don't understand a term, check its "Related Terms"
3. **Focus on "When It Matters"**: This tells you the practical importance
4. **Examples > Definitions**: Read the examples to understand real usage
5. **Category reference**: Browse by category to see how concepts relate

---

**Last Updated**: CSC-114 Spring 2026

This is a living document. If you notice missing terms or confusing definitions, let Drew know.
