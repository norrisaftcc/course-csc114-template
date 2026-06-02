# Chapter 2 Lab: Looking Inside a Neural Network

*The math building blocks — without the scary math*

This lab runs across two class meetings. You will not write proofs. You will run small pieces of code, **guess what each one will do before you run it**, and then check. Guessing wrong is normal and useful. A wrong guess you understand afterward beats a lucky right guess every time.

**The one rule for this lab:** before you run any cell marked **PREDICT**, write your guess in the comment line. Then run it. Then read the answer.

**Setup:** Open a new notebook in [Google Colab](https://colab.research.google.com) or local Jupyter. Run the cells top to bottom. (This book uses the standalone `keras` library — the imports below match what's in your textbook exactly.)

---

## Vocabulary You'll Use

You only need these. Keep them simple.

- **Tensor** — a container of numbers (a single number, a list, a grid, or a stack of grids).
- **Shape** — how many numbers run along each direction. `(60000, 28, 28)` means 60,000 grids, each 28 by 28.
- **Rank (`ndim`)** — how many directions there are. A stack of grids has rank 3.
- **dtype** — what kind of number (`uint8` is a whole number 0–255; `float32` is a decimal).
- **Batch** — a small handful of examples handled together.
- **relu** — a simple "bend": `relu(x) = max(x, 0)`. Keep positives, turn negatives into 0.
- **softmax** — turns a row of numbers into probabilities that add up to 1, so the model can say "99% sure it's a 7."
- **Derivative** — slope. How fast output changes when you nudge input.
- **Gradient** — the slope for many numbers at once.
- **SGD** — the training recipe: batch → measure error → step downhill → repeat.
- **Backprop** — an efficient way to find the gradient. The computer does it for you.

---

# Meeting 1 Lab: Tensors, Shapes, and the Gears

## Step 0 — Imports

```python
import numpy as np
import matplotlib.pyplot as plt
```

## Step 1 — Tensors, rank by rank

A tensor is just a box of numbers. The only thing that changes is how many *directions* the box has. That count is the **rank** (`ndim`).

**PREDICT:** Write the rank you expect for each of the four below (a single number, a list, a grid, a stack of grids).

```python
# my predictions: scalar = ___ , vector = ___ , matrix = ___ , cube = ___
scalar = np.array(12)                  # one number
vector = np.array([12, 3, 6, 14, 7])   # a list
matrix = np.array([[5, 78, 2],         # a grid
                   [6, 79, 3]])
cube   = np.array([[[1, 2], [3, 4]],   # a stack of grids
                   [[5, 6], [7, 8]]])

for name, t in [("scalar", scalar), ("vector", vector), ("matrix", matrix), ("cube", cube)]:
    print(f"{name:7} -> ndim: {t.ndim}  shape: {t.shape}")
```

The pattern: rank = how many numbers are in the shape. A scalar's shape is empty `()`, a vector's has one number, a grid's has two, a stack-of-grids has three. MNIST, coming up next, is a stack of grids — so its shape will have **three** numbers.

## Step 2 — Load MNIST and read its tensor

**PREDICT:** How many directions (`ndim`) will `train_images` have? What will its shape be?

```python
# my prediction: ndim = ___ , shape = ___
from keras.datasets import mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

print("ndim:", train_images.ndim)    # how many directions
print("shape:", train_images.shape)  # (images, height, width)
print("dtype:", train_images.dtype)  # kind of number
```

**Read it out loud:** "Sixty thousand images, each twenty-eight by twenty-eight, each pixel a whole number." That sentence is the whole point of Step 2.

## Step 3 — Look at one image

**PREDICT:** What shape will a single image have?

```python
# my prediction: single image shape = ___
digit = train_images[4]
label = train_labels[4]

plt.imshow(digit, cmap="gray")
plt.title(f"Label: {label}")
plt.axis("off")
plt.show()

print("one image shape:", digit.shape)
print("label:", label)   # this one is a 9
```

## Step 4 — Slicing (taking a piece)

**PREDICT:** Write the shape you expect for each of the three slices below.

```python
# my predictions: a = ___ , b = ___ , c = ___
a = train_images[10:100]        # images 10 through 99
b = train_images[:, 14:, 14:]   # keep all images, bottom-right corner of each
c = train_images[:, 7:-7, 7:-7] # keep all images, centered crop

print("a:", a.shape)
print("b:", b.shape)
print("c:", c.shape)
```

If a prediction was wrong, **stop and reconcile**: which number changed, and why? Don't move on until the shape makes sense.

## Step 5 — Batches

A batch is a small handful of images we process together. The first direction (axis 0) is the batch.

**PREDICT:** What shape is a batch of 128 images?

```python
# my prediction: batch shape = ___
batch0 = train_images[:128]
batch1 = train_images[128:256]
print("batch0:", batch0.shape)
print("batch1:", batch1.shape)
```

## Step 6 — Reshaping (changing the layout, not the numbers)

A grid can be flattened into a single line of numbers. Same numbers, new layout.

**PREDICT:** A 28×28 grid flattened becomes a line of how many numbers?

```python
# my prediction: flattened length = ___
one = train_images[0]
flat = one.reshape((28 * 28,))
print("grid shape:", one.shape)
print("flat shape:", flat.shape)
```

## Step 7 — Broadcasting (one demo only)

Broadcasting lets a small tensor apply across a big one. Here, a single row of 28 numbers gets added across every row of a 28×28 image.

**PREDICT:** What shape will `result` have?

```python
# my prediction: result shape = ___
img = train_images[0].astype("float32")
row_bias = np.linspace(0, 60, 28).astype("float32")  # shape (28,)
result = img + row_bias                               # the small thing spreads across the big thing

print("img:", img.shape, "+ row_bias:", row_bias.shape, "= result:", result.shape)

plt.figure(figsize=(6, 3))
plt.subplot(1, 2, 1); plt.imshow(img, cmap="gray");    plt.title("original");  plt.axis("off")
plt.subplot(1, 2, 2); plt.imshow(result, cmap="gray"); plt.title("+ row_bias"); plt.axis("off")
plt.show()
```

## Where tensors show up in the real world (read only — no code)

You just worked with image data. Almost everything else AI touches is also a tensor — only the shape changes:

| Kind of data | Shape | Plain-English example |
|--------------|-------|------------------------|
| Vector data | `(samples, features)` | 100,000 people, each described by 3 numbers → `(100000, 3)` |
| Timeseries | `(samples, timesteps, features)` | 250 trading days × 390 minutes × 3 prices → `(250, 390, 3)` |
| Images | `(samples, height, width, channels)` | grayscale uses 1 channel; color uses 3 (red, green, blue) |
| Video | `(samples, frames, height, width, channels)` | a stack of color images over time |

Notice MNIST is grayscale, so it has no separate channel number — that's why its shape is just `(60000, 28, 28)` and not `(60000, 28, 28, 1)`.

### What Just Happened (Meeting 1)

You can now read any neural network's data. A tensor is just a labeled box of numbers, and its **rank** is how many directions it has. Its **shape** tells you how the numbers are arranged, **slicing** takes pieces, a **batch** is a handful processed together, **reshaping** rearranges without changing the numbers, and **broadcasting** lets a small tensor spread across a big one. That is the entire vocabulary of "what the data looks like."

### AI Partnership Prompt

Ask your AI assistant: *"Explain broadcasting to me like I've never seen it, in three sentences."* Then read its answer and decide: is it actually clear, or did it hide the idea behind jargon? Write one sentence saying what you'd change about its explanation. (You'll use this skill in the graded assignment.)

### Before You Leave (Meeting 1)
- [ ] Every PREDICT cell has a written guess.
- [ ] You reconciled at least one wrong prediction (note which one).
- [ ] A short `meeting1-reflection.md` is committed to GitHub: *Which shape surprised you, and why?*

### Between Meetings (15 minutes, low stress)
Write a four-step "training story" in plain English — the way you'd tell a friend how a model gets better: **guess → check the error → adjust → repeat.** Bring it to Meeting 2.

---

# Meeting 2 Lab: How a Network Learns

## Step 8 — Downhill intuition (the parabola)

Training is just walking downhill on an error curve. Here is the simplest possible hill.

**PREDICT:** If we start at `w = 4` and keep stepping *opposite* the slope, will `w` get bigger or smaller?

```python
# my prediction: w will move toward ___
def f(w):      return w ** 2   # the hill (error)
def slope(w):  return 2 * w    # the slope at point w

w = 4.0
step = 0.1   # this is the "learning rate" — the step size
for i in range(20):
    w = w - step * slope(w)    # step downhill: opposite the slope
print("after 20 steps, w is near:", round(w, 3))
```

`w` slides toward 0, the bottom of the hill. That is all gradient descent does — take a small step opposite the slope, over and over. **Try this:** change `step` to `1.5` and rerun. What goes wrong? (That's overshoot — too big a step.)

## Step 9 — Why a network needs a "bend" (read, then run the tiny demo)

A single layer is really just this: `relu(matmul(input, W) + b)` — multiply the input by the weights, add a little, then **bend**. The bend is `relu`, and it is dead simple:

```python
x = np.array([-3.0, -1.0, 0.0, 2.0, 5.0])
print("relu:", np.maximum(x, 0))   # negatives become 0, positives stay
```

Why does the bend matter? Here's the key idea from your textbook: if you stack two plain layers with **no** bend between them, they collapse into a single plain layer — a straight line in disguise. A straight line can't separate tangled data.

**The paper-ball picture:** imagine a red sheet and a blue sheet of paper stacked and crumpled into a ball. Each color is one class the model must tell apart. The network's whole job is to *uncrumple* the ball so the two colors come cleanly apart. Each layer makes one small uncrumpling move — and `relu` is what lets a move *bend* the paper instead of just sliding it flat. Stack enough bends and you can uncrumple almost anything. At the very end, `softmax` turns the final numbers into 10 probabilities that add up to 1, so the model can say how sure it is.

## Step 10 — Prepare MNIST for the model

Before the images go into the network, we flatten them, turn the whole numbers into decimals, and squeeze them into the range 0–1.

**PREDICT:** What shape will `train_x` have? What will its smallest and largest values be?

```python
# my prediction: train_x shape = ___ , min = ___ , max = ___
train_x = train_images.reshape((60000, 28 * 28)).astype("float32") / 255
test_x  = test_images.reshape((10000, 28 * 28)).astype("float32") / 255

print("train_x shape:", train_x.shape)
print("min:", train_x.min(), "max:", train_x.max())
```

## Step 11 — Build, compile, and train (and label every piece)

This is the whole pipeline. Read the comments — each one names a concept from the lecture.

```python
import keras
from keras import layers

model = keras.Sequential([
    layers.Dense(512, activation="relu"),    # multiply + add, then BEND (relu)
    layers.Dense(10,  activation="softmax")  # final layer: 10 probabilities that sum to 1
])

model.compile(
    optimizer="adam",                         # the rule for taking the downhill step (a smart flavor of SGD)
    loss="sparse_categorical_crossentropy",   # the error signal we try to shrink
    metrics=["accuracy"]                      # how we report progress to humans
)

model.fit(train_x, train_labels, epochs=5, batch_size=128)  # the training loop runs here
```

**Label it.** As it trains, find each piece on screen: the **weights** (what gets learned), the **loss** (the error we shrink), the **optimizer** (the downhill-step rule), and **fit** (the loop itself, running). Watch loss go *down* and accuracy go *up*. Over 5 epochs with batches of 128, the model takes roughly 2,345 downhill steps.

## Step 12 — Use the trained model (the payoff)

Training is pointless if the model can't actually call a digit. Let's make it predict.

**PREDICT:** For the first test image, which digit will the model pick? Will it match the true label?

```python
# my prediction: model picks ___ , true label is ___
predictions = model.predict(test_x[0:10])

print("probabilities for the first test image:")
print(predictions[0])                 # 10 numbers; the biggest one is the model's pick
print("model's pick:", predictions[0].argmax())
print("true label:  ", test_labels[0])
```

Now check how it does across *all* the test images — data it never trained on:

```python
test_loss, test_acc = model.evaluate(test_x, test_labels)
print("test accuracy:", round(float(test_acc), 4))
```

You'll likely see test accuracy come in a little *below* the training accuracy. That small gap has a name: **overfitting** — models tend to do slightly worse on data they've never seen. It's normal, and a whole later chapter is about it. For now, just meet the word.

## Step 13 — The one-change experiment

Pick **exactly one** thing to change. Predict the effect. Run. Reconcile.

```python
# Change ONE of these, predict what happens, then rerun Step 11 (and Step 12):
#   epochs = 1        (fewer trips through the data)
#   batch_size = 32   (smaller handfuls)
# my prediction: changing ___ will make ___ happen because ___
```

Change only one thing at a time. If you change two, you won't know which one mattered — same discipline as everything else in this course.

### What Just Happened (Meeting 2)

A network learns by walking downhill on its own error. Each layer multiplies, adds, and **bends** (`relu`) — and the bend is what lets a deep stack uncrumple tangled data instead of collapsing into a single straight line. **SGD** is the recipe: grab a batch, measure the error, step opposite the slope, repeat. The **gradient** is just "which way is downhill" for all the weights at once, and **backprop** is the efficient trick that finds it (the computer does this for you). Everything you watched in Step 11 was that loop running a few thousand times — and in Step 12 you saw it pay off on a digit it had never seen.

### AI Partnership Prompt

Ask your AI assistant: *"Why do we step opposite the gradient instead of along it?"* It will probably give you a clean answer. Your job: decide whether you actually believe it, and write one sentence connecting its answer back to the parabola in Step 8. If you can make that connection yourself, you understand it.

### Before You Leave (Meeting 2)
- [ ] You ran the full pipeline, watched loss fall, and made the model call a test digit.
- [ ] You did the one-change experiment and reconciled the result.
- [ ] A short `meeting2-reflection.md` is committed: *In your own words, what is the optimizer doing — and why does the network need relu?*

---

## Committing Your Work

```bash
git add notebook.ipynb meeting1-reflection.md meeting2-reflection.md
git commit -m "Chapter 2 lab: tensors, slicing, and the training loop"
git push
```

Descriptive commit messages are part of your portfolio. "Updated stuff" is not a commit message. "Chapter 2 lab: completed shape predictions and one-change experiment" is.
