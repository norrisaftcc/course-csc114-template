# Practice — Reproduce a tiny model (partially) from scratch

**Slot:** Practice (retry-OK, no grade penalty)
**Time:** ~75 minutes
**Goal:** Walk through pieces of the Ch 2 companion notebook, see weights update step-by-step, and connect the math concepts from [learn.md](learn.md) to running code. You don't have to build the whole thing from scratch — you have to *trace* it.

This week has **no csc_dash equivalent** — it's net-new for the pilot. The primary source is Manning Ch 2 and its companion notebook.

---

## Part 1 — Tensor operations warm-up

Create a notebook called `week-03/math_warmup.ipynb`. Type these cells — don't copy.

### Cell 1: Tensor shapes

```python
import numpy as np

scalar = np.float32(0.5)
vector = np.array([1.0, 2.0, 3.0])
matrix = np.array([[1, 2], [3, 4], [5, 6]])

print(f"Scalar: shape={scalar.shape}, ndim={scalar.ndim}")
print(f"Vector: shape={vector.shape}, ndim={vector.ndim}")
print(f"Matrix: shape={matrix.shape}, ndim={matrix.ndim}")
```

**Check your understanding:** If someone says "a rank-2 tensor of shape (60000, 784)," you should immediately think "a matrix with 60,000 rows and 784 columns — that's MNIST flattened."

### Cell 2: Element-wise operations

```python
a = np.array([1.0, 2.0, 3.0])
b = np.array([4.0, 5.0, 6.0])

print(f"a + b = {a + b}")       # element-wise add
print(f"a * b = {a * b}")       # element-wise multiply (NOT dot product)
print(f"a @ b = {a @ b}")       # dot product (this one matters for layers)
```

The `@` operator is the dot product. When Keras computes `Dense(128)`, it's doing `output = input @ weights + bias` — a dot product plus a bias term, applied to every example in the batch.

### Cell 3: What a Dense layer actually does

```python
# Simulate what Dense(3) does to a single input of shape (4,)
input_vector = np.array([0.5, 0.8, 0.2, 0.9])
weights = np.random.randn(4, 3) * 0.1  # shape: (input_dim, output_dim)
bias = np.zeros(3)

output = input_vector @ weights + bias
print(f"Input shape:  {input_vector.shape}")
print(f"Weights shape: {weights.shape}")
print(f"Output shape: {output.shape}")
print(f"Output values: {output}")
```

**Stare at the shapes.** Input `(4,)` times weights `(4, 3)` gives output `(3,)`. That's all a Dense layer is — a matrix multiply plus bias. The "learning" part is adjusting `weights` and `bias` so the output gets closer to the right answer.

## Part 2 — Watch a weight update happen

This is the core of the week. You're going to see one step of gradient descent *in slow motion*.

### Cell 4: A toy problem — learn a single weight

```python
# Toy problem: learn w such that w * x ≈ y
# True relationship: y = 2x (so the correct w is 2.0)
np.random.seed(42)
x_train = np.random.randn(100)
y_train = 2.0 * x_train + np.random.randn(100) * 0.1  # noisy

# Start with a random weight
w = 0.0
learning_rate = 0.01

print(f"Starting weight: {w:.4f}")
print(f"Target weight:   2.0000")
```

### Cell 5: One gradient descent step, by hand

```python
# Predictions with current weight
y_pred = w * x_train

# Loss: mean squared error
loss = np.mean((y_pred - y_train) ** 2)

# Gradient of MSE with respect to w:
# d(loss)/dw = 2 * mean((y_pred - y_train) * x_train)
gradient = 2 * np.mean((y_pred - y_train) * x_train)

# Update
w_new = w - learning_rate * gradient

print(f"Loss:     {loss:.4f}")
print(f"Gradient: {gradient:.4f}")
print(f"Old w:    {w:.4f}")
print(f"New w:    {w_new:.4f}  (moved toward 2.0)")
```

**This is the whole algorithm.** Predict → measure error → compute gradient → step opposite to gradient. Everything else (backprop, optimizers, batching) is machinery to do this efficiently for millions of weights.

### Cell 6: Run it for 50 steps and plot

```python
import matplotlib.pyplot as plt

w = 0.0
learning_rate = 0.01
history = {"step": [], "w": [], "loss": []}

for step in range(50):
    y_pred = w * x_train
    loss = np.mean((y_pred - y_train) ** 2)
    gradient = 2 * np.mean((y_pred - y_train) * x_train)
    w = w - learning_rate * gradient
    
    history["step"].append(step)
    history["w"].append(w)
    history["loss"].append(loss)

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].plot(history["step"], history["loss"])
axes[0].set_title("Loss over steps"); axes[0].set_xlabel("Step")
axes[1].plot(history["step"], history["w"])
axes[1].axhline(y=2.0, color="r", linestyle="--", label="true w")
axes[1].set_title("Weight over steps"); axes[1].legend()
plt.tight_layout(); plt.show()

print(f"Final w: {w:.4f} (target: 2.0)")
```

**What to notice:** The loss drops quickly at first, then levels off. The weight converges toward 2.0. This is the same shape as your MNIST training curves from Week 2 — the mechanism is identical, just scaled up from 1 weight to 100,000.

## Part 3 — Connect it back to Keras

### Cell 7: The same problem, solved by Keras

```python
import keras
from keras import layers

model = keras.Sequential([
    layers.Dense(1, input_shape=(1,), use_bias=False)
])
model.compile(optimizer=keras.optimizers.SGD(learning_rate=0.01), loss="mse")

history_keras = model.fit(
    x_train, y_train,
    epochs=50, batch_size=100, verbose=0
)

learned_w = model.get_weights()[0][0, 0]
print(f"Keras learned w: {learned_w:.4f} (target: 2.0)")
```

**The point:** Keras did the same thing you did by hand in Cells 4–6. The `.fit()` method is just a loop of predict → loss → gradient → update, with extra bookkeeping.

## Part 4 — Reflection cell

Add a markdown cell at the bottom:

```markdown
## Reflection

1. **What does the gradient tell you about a weight?**
   [Your answer — one sentence is fine.]

2. **What happened when the weight was far from the target vs close?**
   [Think about the loss curve shape.]

3. **Why would a bigger learning rate make training faster OR make it blow up?**
   [Connect to what you saw in Cell 6.]
```

## Before you leave Practice

- [ ] Your `math_warmup.ipynb` runs end-to-end.
- [ ] You can point at the loss curve and explain *why* it has that shape.
- [ ] You can explain what `w = w - learning_rate * gradient` does in plain English.
- [ ] The reflection cell is filled in.

## Common issues

| Symptom | Likely cause | Fix |
|---|---|---|
| Loss explodes to `inf` or `nan` | Learning rate too high for the demo | Use `0.01` as shown. If you're experimenting, try `0.001`. |
| Weight doesn't converge after 50 steps | Learning rate too low or data not generated correctly | Re-run Cell 4 to regenerate data. |
| Keras result doesn't match manual result exactly | Keras uses mini-batch SGD with slightly different numerics | Expected — they should be *close*, not identical. |

## Where to go next

→ [apply.md](apply.md) — Controlled experiment: change the learning rate or batch size and observe what breaks.
