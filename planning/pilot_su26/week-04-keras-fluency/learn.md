# Learn — Manning Ch 3 + Ch 7 framing: frameworks and Keras workflows

**Slot:** Learn (low-stakes, no submission)
**Time:** ~60 minutes including reading
**Goal:** Walk into [practice.md](practice.md) knowing the three ways to build a Keras model, why callbacks exist, and enough about the framework landscape to hold a conversation about it.

---

## What to read

- **Manning Ch 3** — *Introduction to Keras and TensorFlow.* Skim. The takeaway is "what's an API vs what's a backend" — you already know this from Week 2's learn.md, but Ch 3 goes deeper.
- **Manning Ch 7** — *Working with Keras: a deep dive.* This is the important one this week. Read it for real.

## The five things you need from this reading

### 1. The framework landscape — where Keras fits

There are four names you'll hear constantly. Here's the map:

| Name | What it is | Who uses it |
|---|---|---|
| **TensorFlow** | Google's ML framework. Full platform: training, serving, mobile, TPUs. | Production teams at big companies. |
| **PyTorch** | Meta's ML framework. Research-first, great debugging, huge academic adoption. | Researchers, startups, most new papers. |
| **JAX** | Google's array computation library. NumPy on steroids with auto-differentiation. | Research teams that want speed + simplicity. |
| **Keras** | High-level API that runs *on top of* TF, JAX, or PyTorch. You write Keras; the backend does the math. | You, in this course. |

**The insight:** Keras isn't competing with TF/PyTorch/JAX — it sits *above* them. The Manning textbook (3rd ed.) uses Keras 3, which is backend-agnostic: your code runs on TF, JAX, or PyTorch without changes. We standardize on Keras because it lets us teach the *concepts* without getting tangled in backend-specific syntax.

If you go deeper into ML after this course, you'll likely learn PyTorch directly. That's fine — the concepts transfer. The training loop is the same everywhere.

### 2. Three ways to build a Keras model

This is the practical core of this week. You've been using `Sequential`. There are two other patterns:

**Sequential** — what you've used so far.
```python
model = keras.Sequential([
    layers.Dense(128, activation="relu"),
    layers.Dense(10, activation="softmax"),
])
```
Good for: linear stacks of layers. Simple, readable. 90% of what we do this term.

**Functional API** — more flexible.
```python
inputs = keras.Input(shape=(784,))
x = layers.Dense(128, activation="relu")(inputs)
outputs = layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs=inputs, outputs=outputs)
```
Good for: models with branches, multiple inputs/outputs, skip connections. You'll need this for anything more complex than a straight stack.

**Model subclassing** — maximum control.
```python
class MyModel(keras.Model):
    def __init__(self):
        super().__init__()
        self.dense1 = layers.Dense(128, activation="relu")
        self.dense2 = layers.Dense(10, activation="softmax")
    
    def call(self, inputs):
        x = self.dense1(inputs)
        return self.dense2(x)
```
Good for: research, custom training loops, non-standard architectures. We won't use this much — but knowing it exists helps you read other people's code.

**The rule of thumb:** Start with Sequential. Switch to Functional when Sequential can't express your architecture. Switch to subclassing only when you need full custom control (rare in this course).

### 3. Callbacks — things that happen during training

A **callback** is code that Keras runs at specific points during training (end of each epoch, end of each batch, etc.). Three you should know:

- **`EarlyStopping`** — stops training when a metric stops improving. Prevents wasting time on epochs that aren't helping.
- **`ModelCheckpoint`** — saves the model weights after each epoch (or only when a metric improves). Insurance against crashes and overfitting.
- **`TensorBoard`** — logs training metrics to a file that TensorBoard can visualize. This is your experiment dashboard.

You'll add all three in [practice.md](practice.md).

### 4. TensorBoard — your experiment dashboard

TensorBoard is a web app that visualizes training runs. Instead of staring at terminal output like `Epoch 3/5 — loss: 0.23 — val_loss: 0.28`, you get interactive charts you can zoom, compare, and overlay.

Why it matters: once you're running multiple experiments (which you will be by Week 5), you need a way to compare them side-by-side. TensorBoard does this automatically — each run gets its own folder, and TensorBoard overlays them.

### 5. Experiment logging — the habit that separates amateurs from practitioners

Every run you do from now on should have:

- A **run name** — `week4-baseline`, `week4-lr001-batch32`, etc.
- **Hyperparameters** recorded — learning rate, batch size, epochs, architecture.
- **Result** — the metric(s) you care about.

This sounds obvious, but most people don't do it until they've lost track of which run produced which result. Start the habit now — Week 5's project proposal will require it.

## Where to go next

→ [practice.md](practice.md) — Instrument your Week 2 notebook with TensorBoard, a callback, and an experiment log.
