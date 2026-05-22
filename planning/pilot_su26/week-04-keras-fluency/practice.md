# Practice — Instrument your Week 2 notebook

**Slot:** Practice (retry-OK, no grade penalty)
**Time:** ~75 minutes
**Goal:** Take your Week 2 MNIST model, add TensorBoard logging, add at least one callback, and set up a clean experiment log. By the end, you should have a reproducible experiment setup that you'll use for the rest of the term.

---

## Part 1 — Rebuild in the Functional API

You've been using `Sequential`. Let's rebuild the same MNIST model using the Functional API, because you'll need it later.

Create a notebook called `week-04/keras_fluency.ipynb`.

### Cell 1: Imports + data loading (same as Week 2)

```python
import numpy as np
import matplotlib.pyplot as plt
import keras
from keras import layers
import datetime

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = x_train.reshape((60000, 28 * 28)).astype("float32") / 255.0
x_test  = x_test.reshape((10000, 28 * 28)).astype("float32") / 255.0

print(f"Keras: {keras.__version__}")
print(f"Training: {x_train.shape}, Test: {x_test.shape}")
```

### Cell 2: Functional API model

```python
# Same architecture as Week 2, different syntax
inputs = keras.Input(shape=(784,), name="digit_input")
x = layers.Dense(128, activation="relu", name="hidden")(inputs)
outputs = layers.Dense(10, activation="softmax", name="predictions")(x)

model = keras.Model(inputs=inputs, outputs=outputs, name="mnist_functional")
model.summary()
```

Compare the summary to your Week 2 `Sequential` model. Same parameter counts. Same shapes. Different construction pattern.

**When to use which:** If you ever need a model with two inputs (e.g., image + metadata), or a skip connection (e.g., ResNet), you can't do it with `Sequential`. The Functional API handles all of those.

### Cell 3: Set up experiment tracking

```python
# Give this run a name — you'll thank yourself later
RUN_NAME = "week4-baseline-functional"
LOG_DIR = f"logs/{RUN_NAME}_{datetime.datetime.now().strftime('%Y%m%d-%H%M%S')}"

print(f"Logs will be saved to: {LOG_DIR}")
```

## Part 2 — Add callbacks

### Cell 4: Define callbacks

```python
callbacks = [
    # 1. TensorBoard — logs metrics for visual comparison
    keras.callbacks.TensorBoard(
        log_dir=LOG_DIR,
        histogram_freq=1,  # log weight histograms each epoch
    ),
    
    # 2. EarlyStopping — stop if val_loss doesn't improve for 3 epochs
    keras.callbacks.EarlyStopping(
        monitor="val_loss",
        patience=3,
        restore_best_weights=True,
        verbose=1,
    ),
    
    # 3. ModelCheckpoint — save the best model
    keras.callbacks.ModelCheckpoint(
        filepath=f"models/{RUN_NAME}_best.keras",
        monitor="val_loss",
        save_best_only=True,
        verbose=1,
    ),
]

print(f"Callbacks configured: {len(callbacks)}")
```

### Cell 5: Compile and train

```python
model.compile(
    optimizer="rmsprop",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)

# Train for more epochs — EarlyStopping will cut it short if needed
history = model.fit(
    x_train, y_train,
    epochs=20,
    batch_size=128,
    validation_split=0.1,
    callbacks=callbacks,
)

print(f"Training stopped at epoch {len(history.history['loss'])}")
```

Notice: we set `epochs=20` but `EarlyStopping` will probably stop it around epoch 7–10. That's the point — you don't have to guess the right number of epochs anymore.

### Cell 6: Evaluate

```python
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Test accuracy: {test_accuracy:.4f}")
```

## Part 3 — Launch TensorBoard

### Cell 7: TensorBoard in the notebook

```python
# If running in Jupyter:
%load_ext tensorboard
%tensorboard --logdir logs/
```

If that doesn't work (some environments don't support the magic command), run this in your terminal instead:

```bash
tensorboard --logdir logs/
```

Then open `http://localhost:6006` in your browser.

**What to look for in TensorBoard:**
- The "Scalars" tab shows loss and accuracy curves.
- The "Histograms" tab (if `histogram_freq=1`) shows weight distributions changing over training.
- When you run multiple experiments, each one appears as a separate line you can toggle on/off.

## Part 4 — Write your experiment log

### Cell 8: Experiment log entry

```python
# Log this run's details
log_entry = f"""
## {RUN_NAME}
- **Date:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}
- **Architecture:** Input(784) → Dense(128, relu) → Dense(10, softmax)
- **Optimizer:** rmsprop (default lr)
- **Batch size:** 128
- **Epochs:** {len(history.history['loss'])} (EarlyStopping from max 20)
- **Val accuracy (best):** {max(history.history['val_accuracy']):.4f}
- **Test accuracy:** {test_accuracy:.4f}
- **Notes:** Baseline run with Functional API + callbacks. Same architecture as Week 2.
"""
print(log_entry)
```

Copy this text into a file `week-04/experiment_log.md`. You'll add to this file in [apply.md](apply.md).

## Part 5 — Reflection cell

Add a markdown cell:

```markdown
## Reflection

1. **What did EarlyStopping do?** Did it stop training early? At which epoch?
   How does this compare to your Week 2 run (5 epochs, no stopping)?

2. **Sequential vs Functional: what's different about writing the model?**
   [One sentence on when you'd need the Functional API.]

3. **What can you see in TensorBoard that you couldn't see in terminal output?**
   [One specific observation.]
```

## Before you leave Practice

- [ ] Your `keras_fluency.ipynb` runs end-to-end.
- [ ] TensorBoard is logging to `logs/` and you've opened it at least once.
- [ ] EarlyStopping triggered (training stopped before epoch 20).
- [ ] `experiment_log.md` exists with one entry.
- [ ] Reflection cell filled in.

## Common issues

| Symptom | Likely cause | Fix |
|---|---|---|
| `ModuleNotFoundError: No module named 'tensorboard'` | Not installed | `pip install tensorboard` |
| TensorBoard shows no data | Wrong `--logdir` path | Make sure the path matches `LOG_DIR` |
| ModelCheckpoint fails with `FileNotFoundError` | `models/` directory doesn't exist | Create it: `import os; os.makedirs("models", exist_ok=True)` before Cell 5 |
| EarlyStopping never triggers | `patience` too high or model still improving | Check val_loss — if it's still dropping at epoch 20, that's fine. Lower patience or increase epochs. |

## Where to go next

→ [apply.md](apply.md) — Re-run a previous experiment with instrumentation and find something you couldn't see before.
