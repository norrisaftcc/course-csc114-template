# Week 2 Vocabulary

**Audience:** Both tracks
**How to use:** Glossary for new terms in Chollet Ch 1 + Ch 4 and the MNIST lab. Old terms from Week 1 are not repeated — see `week_01_vocabulary.md` for those.

---

## Accuracy

The simplest classification metric: the fraction of test examples the model got right. If 9,700 out of 10,000 are correct, accuracy is 97%. Easy to read, sometimes misleading — see "imbalanced data" for why.

## Backpropagation (backprop)

The algorithm that figures out how to adjust each weight in the network to make the prediction less wrong. You don't implement it; Keras does. You'll see it discussed in Week 3. For Week 2, "backprop is the learning step that runs after each batch" is enough.

## Baseline

The dumbest sensible model you could build, used as a comparison. For MNIST: "predict the most common digit every time" is a baseline (~10% accuracy). Your real model should beat it by a lot. If it doesn't, something's broken.

## Batch (and batch size)

A chunk of training examples the model processes at once before updating its weights. Common batch sizes: 32, 64, 128. Smaller batches = noisier learning but more updates per epoch. Larger batches = smoother but fewer updates. For Week 2 just use the default.

## Classification

A task where the model picks from a fixed set of categories. MNIST is classification: every image gets labeled 0 through 9, ten categories. "Is this email spam?" is binary classification (two categories). Different from regression.

## Cross-entropy loss

The loss function used for classification. Measures how wrong the model's probability estimates are. Lower is better. You won't compute it by hand — Keras handles it. For Week 2: "`loss='categorical_crossentropy'` is the line that says 'this is a classification problem.'"

## Deep learning

A flavor of machine learning that uses neural networks with many layers stacked up. The "deep" is literal — you can count the layers. Different from older machine learning techniques (decision trees, random forests, support vector machines) that the textbook calls *shallow*.

## Epoch

One full pass through your entire training dataset. Models usually train for multiple epochs. For MNIST, 5–10 epochs is plenty for the hello-world model. Watch the loss go down across epochs — that's the visible sign of learning.

## Error analysis

The habit of looking at *which* mistakes a model makes, not just the overall accuracy. For MNIST: which digits are confused for which? Is 9 mistaken for 4 more often than for 6? Why might that be? Error analysis is the difference between "I have a model" and "I understand what my model does."

## Evaluation (or evaluate, `model.evaluate()`)

The step after training where you measure how well the model does on data it hasn't seen. The model has *trained* on the training set. You *evaluate* it on the test set. The test-set accuracy is the number that actually matters.

## Fit (or `model.fit()`)

The Keras command that starts training. You pass it the training data, training labels, batch size, and number of epochs. Then you wait. Watching `model.fit()` run for the first time is part of the Week 2 experience — don't multitask, watch the numbers.

## Generative AI

A category of deep learning systems that produce new outputs — text, images, code, audio — rather than classifying existing ones. ChatGPT, Claude, Midjourney, and the agent you built in Week 1 are all generative. MNIST classification is NOT generative; it picks from existing labels.

## Inputs and outputs

What goes into and out of a model. For MNIST, the input is an image (28×28 pixels = 784 numbers) and the output is one of 10 categories. The whole point of training is to find a mapping from inputs to outputs that gets things right.

## Keras

The user-friendly library on top of TensorFlow that you'll use for the rest of the course. Originally a separate project; now part of TensorFlow and also runnable on JAX and PyTorch backends. The `Sequential` model and `model.fit()` come from Keras.

## Layer

One operation in a neural network — usually a matrix multiplication followed by an activation function. A "two-layer network" has two of these stacked. Modern networks have dozens to hundreds. For Week 2 you'll use a small network: input → one or two hidden layers → output.

## Loss (or loss function)

A number that measures how wrong the model's current predictions are. Training is the process of making the loss smaller. You watch this number go down across batches and epochs. If it stops going down, the model has plateaued. If it goes up, something's broken.

## MNIST

A dataset of 70,000 handwritten digits (0 through 9), each as a 28×28 grayscale image. Split into 60,000 training images and 10,000 test images. The "hello world" of deep learning — every textbook starts here. You'll build your first model on it this week.

## Model

A trained or untrained collection of layers and weights that maps inputs to outputs. "The model" is the thing you train, save, evaluate, deploy. In Keras you usually start with `model = keras.Sequential([...])`.

## Neural network

A specific kind of model made of stacked layers, where each layer applies a matrix multiplication and an activation function. "Deep neural network" just means many layers. The thing you build this week is a small neural network.

## Optimizer

The algorithm that decides how to adjust the model's weights based on the loss. The most common one is SGD (stochastic gradient descent) and its variants like Adam. For Week 2 you'll use Adam — `optimizer='adam'` is the default for a reason.

## Overfitting

When the model gets very good at the training data but bad at new data. The training accuracy is high, the test accuracy is low. It's the "memorize, don't generalize" failure mode. You'll see it in Week 5; for Week 2, just know the term exists.

## Regression

A task where the model predicts a number, not a category. "What will this house sell for?" is regression. "Is this email spam?" is classification. MNIST is classification. Chollet Ch 4 covers both.

## Sequential (or `keras.Sequential`)

The simplest way to define a Keras model: a linear stack of layers. You write `model = keras.Sequential([layer1, layer2, layer3])` and you're done. There are fancier ways (Functional API, subclassing) that come in Week 4. For Week 2, Sequential is enough.

## Tensor

A multi-dimensional array of numbers. A single number is a 0D tensor. A list of numbers is a 1D tensor (a vector). A grid of numbers is a 2D tensor (a matrix). The MNIST image is a 2D tensor (28×28 grayscale). A batch of MNIST images is a 3D tensor. Stacks of those are 4D. You'll meet tensors properly in Week 3; for now, "tensor = the shape of your data."

## Test set / training set / validation set

Splits of your data with different purposes:
- **Training set:** Used to train the model. Model sees these labels.
- **Validation set:** Used during training to spot overfitting. Model doesn't train on these but checks against them.
- **Test set:** Used at the very end to report the real accuracy. Model never sees these until you call `evaluate`.

For MNIST these splits are pre-made. You don't have to set them up.

## Training loop

The whole machinery of "feed data in, compute predictions, compare to labels, adjust weights, repeat." `model.fit()` runs the training loop for you. Most of deep learning is variations on this loop.

## Weights

The numbers inside the network that get adjusted during training. A small MNIST model might have tens of thousands of weights. A large language model has billions. Training is the process of changing weights to make the loss smaller.
