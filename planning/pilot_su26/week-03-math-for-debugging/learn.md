# Learn — Manning Ch 2 framing

**Slot:** Learn (low-stakes, no submission)
**Time:** ~75 minutes including reading
**Goal:** Walk into [practice.md](practice.md) able to read the words on the page of a training loop without panicking.

---

## What to read

- **Manning Ch 2** in full. **Skim aggressively.** This is one of the longest chapters in the book and the densest with math. You are not being tested on the derivations.

What to actually retain vs. skim:

| Section | Strategy |
|---|---|
| §1 *A first look at a neural network* | Read carefully. This is the MNIST example you'll see again in the notebook. |
| §2 *Data representations for neural networks* (tensors, axes, shape, dtype) | Read carefully. This vocabulary appears everywhere. |
| §3 *The gears of neural networks: tensor operations* | Skim. You don't need to memorize broadcasting rules — you need to know broadcasting *exists* and what it does at a high level. |
| §4 *The engine: gradient-based optimization* | Read carefully. This is the core mental model. |
| §5 *Looking back at our first example* | Read carefully. Connects everything to the MNIST example from §1. |

If you hit a paragraph that's pure linear algebra notation and your eyes start to glaze, **skip it.** Come back if you find you actually need it in [apply.md](apply.md). You probably won't.

## The five things you need from this reading

If you only retain five things from Week 3's reading, retain these.

### 1. A tensor is a generalized array — that's almost the whole story

- Scalar = rank-0 tensor (one number).
- Vector = rank-1 tensor (one axis).
- Matrix = rank-2 tensor (two axes).
- Image = rank-3 tensor (height × width × channels).
- Batch of images = rank-4 tensor (samples × H × W × channels).

A tensor has a **shape** (`(60000, 28, 28)` for MNIST training images), a **dtype** (usually `float32`), and lives on a **device** (CPU or GPU). When training breaks with a shape error, your first move is `print(x.shape)`. Always.

### 2. Gradient descent in one sentence (without "gradient")

> Look at how wrong you are; figure out which way to nudge each parameter to be less wrong; nudge them all a little; repeat.

That's it. The "figure out which way" part is the gradient — a *vector pointing uphill* on the loss surface. We then step in the *opposite* direction (downhill). The "nudge a little" part is the **learning rate**.

If the learning rate is too big, your nudge overshoots the bottom of the hill and you bounce around (or shoot off to infinity → `NaN`). If it's too small, you barely move and training stalls. Goldilocks.

### 3. Backprop is just the chain rule, applied automatically

You learned the chain rule in calculus: if `y = f(g(x))`, then `dy/dx = (df/dg) · (dg/dx)`. Backprop is "compute the derivative of the loss with respect to every weight in the network by applying the chain rule, layer by layer, from the output backward to the input."

The good news: **Keras does this for you.** You will essentially never write a backprop pass by hand in this course. You need to know it's happening so you can recognize symptoms ("gradient exploded," "gradient vanished") when they appear.

### 4. SGD, RMSprop, Adam — what's the difference, in two sentences

- **SGD (stochastic gradient descent):** Plain gradient descent, but compute the gradient from a small random subset (a *batch*) of the data instead of the full dataset on every step. Faster, noisier, generally fine.
- **RMSprop / Adam:** Variants that add **momentum** (keep moving in directions that have been consistently downhill) and **per-parameter learning rate scaling** (parameters that have been bouncing around get a smaller effective learning rate). They train faster than vanilla SGD on most problems. **Adam is the safe default for everything you'll do this term.**

In Week 2 you used `rmsprop`. That was fine. If you switched to `adam` for a spike, that was also fine. The differences are practical (training speed, hyperparameter sensitivity), not conceptual.

### 5. The learning rate is the most important hyperparameter

Of the dozens of things you can tune in a neural network, **the learning rate is by far the most likely to ruin or save your training**. More than batch size. More than number of layers. More than which optimizer.

That's why the controlled experiment in [apply.md](apply.md) is a learning rate sweep (or batch size, but learning rate is the recommended pick). You're going to *see* this with your own eyes this week.

## One concept to land

**A training loop is not magic. It's a `for` loop.**

Pseudocode for what `model.fit(x, y, epochs=5, batch_size=128)` actually does, stripped of all the framework noise:

```python
for epoch in range(5):
    for batch in shuffle_and_chunk(x, y, batch_size=128):
        x_batch, y_batch = batch
        y_pred         = model(x_batch)            # forward pass
        loss           = loss_fn(y_batch, y_pred)  # how wrong we are
        grads          = compute_gradients(loss)   # which way to nudge each weight
        for weight, grad in zip(weights, grads):
            weight -= learning_rate * grad         # nudge
```

Everything else — TensorBoard, callbacks, validation splits, fancy optimizers — wraps around this seven-line loop. When training breaks in Week 6 or Week 8, your first question is always: *which of those seven things just blew up?* That's why we're learning to see them.

The Chollet Ch 2 notebook actually builds a version of this loop **from scratch in NumPy**, no Keras. That's the [practice.md](practice.md) lab.

## Vocabulary you'll hear from now on

These join the Week 2 vocabulary (epoch, batch):

- **Loss / loss function:** the number we're trying to make small. For classification with integer labels: `sparse_categorical_crossentropy`. For regression: `mse` (mean squared error). Picking the wrong loss function is a top-5 reason models fail to train.
- **Optimizer:** the algorithm that decides how to update weights given gradients. SGD, RMSprop, Adam, AdamW, etc. Default to **Adam**.
- **Learning rate (LR):** how big a step the optimizer takes per update. Default values you'll see: `1e-3` (Adam), `1e-2` (SGD). **Most important hyperparameter** — you'll sweep over it in [apply.md](apply.md).
- **Gradient:** the vector of partial derivatives of the loss with respect to each weight. Tells the optimizer "down is that way."
- **Backward pass / backprop:** the calculation that produces the gradients. Conceptually distinct from the forward pass (which produces the prediction).

## Where to go next

→ [practice.md](practice.md) — Walk through Chollet's official Ch 2 notebook. The from-scratch training loop is the centerpiece.
