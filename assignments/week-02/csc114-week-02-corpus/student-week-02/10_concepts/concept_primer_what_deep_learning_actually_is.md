# Concept Primer: What Deep Learning Actually Is

**Audience:** Both tracks
**Reading time:** About 15 minutes
**Purpose:** The bridge from Week 1's agent work to Chollet's textbook. Read this alongside (or before) the publisher's chapter summaries for Ch 1 and Ch 4.

---

## Where we are

Last week you built an AI agent. The agent uses a model that Anthropic trained — Claude Sonnet 4.6 — but you didn't train anything yourself. You wrote rules in English; the model behaved accordingly.

This week you train a model from scratch. It will be much smaller than Claude. It will only do one thing: recognize handwritten digits. But the *process* of training it — feed data in, measure how wrong the model is, adjust, repeat — is the same process Anthropic used to train Claude, just at a much smaller scale.

You're not replacing the agent work. You're seeing what's inside the box.

## Three terms that get confused

You'll hear these used interchangeably in casual conversation. They're not the same:

**Artificial intelligence (AI)** is the broad field — building systems that do things we'd normally call "intelligent." A chess engine from 1980 is AI. So is Google Maps' route planning. So is Claude.

**Machine learning (ML)** is a subset of AI. The system isn't programmed with explicit rules ("if king is in check, look at these moves"). Instead, it's shown examples and learns patterns from them. A spam filter that learned from millions of labeled emails is ML.

**Deep learning (DL)** is a subset of ML. The "machine" doing the learning is a *deep neural network* — a stack of mathematical layers. The deeper the stack, the more abstract the patterns it can find. Modern image recognition, voice recognition, language models, and image generators are all deep learning.

In a Venn diagram: deep learning is inside machine learning is inside AI. Most of the AI in the news in 2026 is deep learning. But not all AI is deep learning, and the older techniques (decision trees, support vector machines, k-nearest-neighbors) are still useful in lots of places.

## What a neural network actually does

A neural network is a long chain of math. Inputs come in on one side. Numbers flow through layers. Outputs come out the other side.

For MNIST:
- **Inputs:** A 28×28 grayscale image — that's 784 numbers, one per pixel, each between 0 (black) and 1 (white).
- **Layers in the middle:** Each layer multiplies the input by a matrix of weights, adds a bias, and runs the result through a simple curve called an activation function. The next layer does the same. And so on.
- **Output:** Ten numbers — one for each possible digit. The biggest number says which digit the model thinks it is.

When the model is *untrained*, the weights are random. The output is garbage. The model "thinks" a 7 is just as likely to be a 3 or an 8.

When the model is *trained*, the weights have been adjusted thousands of times by an algorithm called backpropagation. Each adjustment makes the output a little less wrong. By the end of training, when you show it a 7, the output for "7" is much bigger than the others.

That's it. That's the magic. Many small adjustments to many small numbers, until the network gets things right more often than not.

You won't program any of this yourself. **Keras** — the library you're using — handles all of it. Your job is to:

1. Pick the shape of the network (how many layers, how big).
2. Pick the loss function (how do we measure wrong?).
3. Pick the optimizer (how do we adjust the weights?).
4. Feed the data in.
5. Watch the loss go down.
6. Look at the result.

Five lines of Keras code do steps 1 through 4. You'll write them this week.

## Why "deep" learning works in 2026

Neural networks have been around since the 1950s. The math hasn't changed dramatically. So why are they everywhere now?

Three things came together over the past ~20 years:

1. **More data.** The internet generated training data at a scale nobody had before. MNIST has 70,000 images. ImageNet has 14 million. The web has trillions of words. Deep networks need lots of data to learn anything useful, and now we have it.

2. **More compute.** Graphics cards (GPUs) turned out to be perfectly shaped for the matrix math neural networks need. A modern GPU does in seconds what a 1990s computer would have taken months to do. Some training runs for big models still take weeks on thousands of GPUs — but it's possible.

3. **Better tricks.** Researchers found dozens of small improvements — better activation functions (ReLU), better optimizers (Adam), better ways to initialize weights, better ways to keep deep networks from getting stuck. None of them is dramatic on its own. Stacked up, they made networks trainable that weren't before.

You'll meet some of these tricks in Week 3 (the math) and Week 4 (the Keras deep dive). For Week 2, you just need to know they exist and that they're already inside Keras's defaults.

## Classification vs regression

Chollet Chapter 4 introduces the two basic kinds of supervised learning task. The difference matters because it changes the loss function and the metric you use.

**Classification.** The model picks from a fixed set of categories. Examples:
- Is this email spam or not? (binary classification, 2 categories)
- Which digit is this? (multi-class classification, 10 categories)
- Is this X-ray showing pneumonia, COVID, healthy lung, or something else? (multi-class classification, 4 categories)

Loss function: **cross-entropy.** Metric: **accuracy** (often), plus precision and recall when the categories are imbalanced.

**Regression.** The model predicts a number. Examples:
- What will this house sell for?
- What will the temperature be tomorrow?
- How long will this person stay in the hospital?

Loss function: **mean squared error (MSE)** or mean absolute error (MAE). Metric: usually MAE — "on average, my prediction is off by X units."

MNIST is classification (which of 10 digits?). Your lab this week is classification. The Boston housing example in Chollet Ch 4 is regression — you'll see it referenced but won't build it this week.

In Section 4 of your system prompt last week, you specified an output format. In Keras, the *last layer* of your model and the loss function together specify whether you're doing classification or regression. It's the same idea — telling the model what shape of answer you want — at a different level.

## Why MNIST

MNIST is the universal "hello world" of deep learning, and there's a reason:

- **It's small enough to train fast.** A simple network gets to 97% accuracy in under a minute on a laptop.
- **It's hard enough to be real.** Getting from 97% to 99.5% takes real engineering. Researchers have spent decades chasing that last percent.
- **It's *visual*, so mistakes are inspectable.** When the model gets a digit wrong, you can look at the image and form a hypothesis about why. You can't do that as easily with abstract data.

Working on MNIST this week is not "doing the toy problem before moving to the real stuff." MNIST taught a whole generation of researchers the habits — set up training, watch the loss, evaluate, look at mistakes, iterate. You're learning the same habits.

## What "good" looks like for Week 2

By Friday you'll have:

- A working notebook with the MNIST training loop
- A baseline number: the test accuracy your model reaches
- A short error analysis: which digits get confused for which, and at least one guess about why

The accuracy number is not the goal. The *habit* is the goal. If your model gets 99% accuracy but you can't say what the 1% looks like, you haven't done the assignment. If your model gets 95% accuracy and you can describe exactly which mistakes it makes and have a hypothesis, you've done it well.

You'll re-encounter this pattern in every textbook chapter ahead. Train. Measure. Look at mistakes. Hypothesize. Try one change.

## What this week doesn't cover

- The math behind backpropagation (that's Week 3, Chollet Ch 2).
- The different Keras APIs — Sequential vs Functional vs subclassing (Week 4, Chollet Ch 7).
- Generalization, overfitting, regularization (Week 5, Chollet Ch 5–6).

You'll see hints of these. If something in the lab looks confusing or magical, that's expected — you'll get the full story in a later week. The point this week is to get the training loop running and to look at one model's mistakes carefully.

## Where to go from here

1. Read the **publisher's chapter summary for Ch 1** (also in this notebook). It covers history, hype cycles, and where deep learning fits in 2026. Quick read.
2. Read the **publisher's chapter summary for Ch 4**, focusing on §1–2 (classification and regression framing). Skip the Boston housing regression example for now — we won't use it this week.
3. Look at the **Chollet Ch 2 companion notebook** (in this notebook as a PDF). This is the actual MNIST hello world. You don't need to follow the math — just look at the code and see how short it is.
4. Read **`week_02_lab_mnist_hello_world.md`** for the Meeting A walkthrough.

If anything in this primer didn't make sense, ask the notebook chat. Concrete questions get concrete answers — "what's an epoch?" works better than "explain neural networks."
