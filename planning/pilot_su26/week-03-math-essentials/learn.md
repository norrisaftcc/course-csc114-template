# Learn — Manning Ch 2 framing: tensors, gradients, and backprop

**Slot:** Learn (low-stakes, no submission)
**Time:** ~60 minutes including reading
**Goal:** Walk into [practice.md](practice.md) understanding what the training loop is *doing* — not deriving it, but tracing it. You should be able to watch a loss curve move and say *why* it moved.

---

## What to read

- **Manning Ch 2** — *The mathematical building blocks of neural networks.* This is the densest chapter in the book. Don't panic. You need the *intuition*, not the derivations.

We don't lecture the textbook back at you. Meeting A is where you bring your questions.

## The five things you need from this reading

### 1. Tensors are just containers with a shape

A **tensor** is an n-dimensional array of numbers. That's it. The word sounds fancy; the concept isn't.

| Name | Rank | Shape example | Real example |
|---|---|---|---|
| Scalar | 0 | `()` | A single loss value: `0.34` |
| Vector | 1 | `(784,)` | One flattened MNIST image |
| Matrix | 2 | `(60000, 784)` | The entire MNIST training set |
| 3D tensor | 3 | `(60000, 28, 28)` | MNIST before flattening |

When Keras says your input shape is `(28, 28)` or `(784,)`, it's describing a tensor shape. When you call `.reshape()`, you're rearranging the same numbers into a different-shaped container. The numbers don't change; the container does.

**Why this matters for debugging:** Half of the shape errors you'll see this term (`ValueError: expected shape (None, 784) but got (None, 28, 28)`) are just tensor-shape mismatches. If you can read shapes, you can fix them.

### 2. The loss function measures "how wrong"

Your model makes predictions. The **loss function** compares those predictions against the true labels and returns a single number: how bad the predictions are.

- High loss = predictions are far from reality.
- Low loss = predictions are close.
- Training is the process of making this number go down.

Different tasks use different loss functions — `sparse_categorical_crossentropy` for classification (what you used in Week 2), `mse` for regression — but the concept is the same: one number that says "how wrong."

### 3. Gradients point "uphill" — so we go the opposite direction

A **gradient** is a vector of partial derivatives. If that sentence means nothing to you, try this:

Imagine you're standing on a hilly landscape in fog. You can't see the lowest valley, but you can feel which direction the ground slopes under your feet. The gradient tells you which direction is *uphill*. To get lower (= reduce loss), you step in the *opposite* direction.

That's **gradient descent**: repeatedly compute the gradient of the loss with respect to every weight in the network, then nudge each weight in the opposite direction.

**Backpropagation** is just the efficient algorithm for computing those gradients layer by layer, starting from the output and working backward. You don't need to implement it — Keras does it for you. But you should know it's happening inside `.fit()`.

### 4. The learning rate controls step size

When you nudge weights in the opposite-of-gradient direction, how far do you step?

- **Learning rate too high:** You overshoot the valley. Loss bounces around or explodes. Training diverges.
- **Learning rate too low:** You inch toward the valley so slowly that training takes forever and may get stuck.
- **Learning rate just right:** Loss drops steadily, then levels off near a good solution.

The default learning rate in most optimizers (`rmsprop`, `adam`) is `0.001`. That's usually a reasonable starting point, but it's not magic — you'll experiment with it this week.

### 5. SGD vs. full gradient descent vs. modern optimizers

- **Full gradient descent:** Compute the gradient using *all* training examples before each weight update. Accurate but slow.
- **Stochastic Gradient Descent (SGD):** Compute the gradient on *one* example at a time. Noisy but fast.
- **Mini-batch SGD:** The compromise everyone actually uses. Compute the gradient on a *batch* of examples (32, 64, 128). This is what `.fit(batch_size=128)` does.

Modern optimizers like `rmsprop` and `adam` are built on top of SGD with extra tricks (momentum, adaptive learning rates per parameter). For now, think of them as "SGD but smarter." Week 4 will go deeper on optimizer choices.

## The notebook you'll be referencing

The companion notebook for Ch 2 is at:

```
planning/textbook/deep-learning-with-python-notebooks-master/chapter02_mathematical-building-blocks.ipynb
```

This notebook includes a from-scratch implementation of a simple neural network. In [practice.md](practice.md), you'll reproduce parts of it — not to memorize the code, but to see the math *running*.

## Two terms that connect to Week 2

- **Epoch** (from Week 2): one pass through the entire training set. Each epoch involves many mini-batch gradient updates.
- **Batch size** (from Week 2): the number of examples per gradient update. Smaller batches → noisier gradients but more updates per epoch. Larger batches → smoother gradients but fewer updates per epoch.

This week you'll experiment with how these interact with the learning rate.

## Where to go next

→ [practice.md](practice.md) — Reproduce a tiny model (partially) from scratch and see the math running.
