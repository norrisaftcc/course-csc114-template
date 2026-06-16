# Lab: MNIST Hello World

**Audience:** Both tracks
**When:** Meeting A (concepts) and Meeting B (studio)
**Time:** ~90 minutes in class, plus the spike at home
**Goal:** Run the Keras MNIST training loop end-to-end. Watch the loss go down. Get to a baseline accuracy on the test set.

This lab is **retry-friendly.** If your notebook breaks, restart the kernel and run it again. Nothing in this lab is graded on whether it worked the first time — it's graded on whether you understand what happened.

---

## Before you start

- [ ] You've read `concept_primer_what_deep_learning_actually_is.md` (15 min)
- [ ] You've skimmed the Chollet Ch 2 companion notebook (in this notebook as a PDF) so the code isn't a complete surprise
- [ ] You're at your laptop with your repo set up

If you're a **Prompt Master**, also read `for_prompt_masters_week_02.md` first — your path through this lab uses Google Colab and you'll get there a different way than Code Builders.

If you're a **Code Builder**, also have `for_code_builders_week_02.md` open. Sacred Flow starts this week and the Issue → Branch part happens *before* the lab.

---

## What we're doing, in one sentence

We're loading 60,000 handwritten digits, building a tiny neural network, training it for a few minutes, evaluating it on 10,000 images it has never seen, and looking at the mistakes.

## The notebook you'll run

We're using **Chollet's Chapter 2 companion notebook** as the starting point. It's MIT-licensed and lives at:

> `github.com/fchollet/deep-learning-with-python-notebooks` — file `chapter02_mathematical-building-blocks.ipynb`

The instructor has dropped a PDF copy into this NotebookLM notebook so you can read it without leaving here. You'll get the runnable `.ipynb` version from one of these places:

- **Code Builders:** Clone the repo to your laptop (or your Codespace) and open the file.
- **Prompt Masters:** Use the Colab link in the Chollet repo's README to open the notebook directly in Colab. No download needed.

## The code, walked through

You don't need to memorize this. You need to recognize it. Here's the whole MNIST hello world in about 12 lines of Keras:

```python
from tensorflow import keras
from tensorflow.keras import layers

# 1. Load the data
(train_images, train_labels), (test_images, test_labels) = keras.datasets.mnist.load_data()

# 2. Normalize the data (turn 0–255 pixel values into 0–1 floats)
train_images = train_images.reshape((60000, 28 * 28)).astype("float32") / 255
test_images = test_images.reshape((10000, 28 * 28)).astype("float32") / 255

# 3. Build the model
model = keras.Sequential([
    layers.Dense(512, activation="relu"),
    layers.Dense(10, activation="softmax")
])

# 4. Configure the training
model.compile(optimizer="rmsprop",
              loss="sparse_categorical_crossentropy",
              metrics=["accuracy"])

# 5. Train (this is the part you'll watch)
model.fit(train_images, train_labels, epochs=5, batch_size=128)

# 6. Evaluate
test_loss, test_acc = model.evaluate(test_images, test_labels)
print(f"Test accuracy: {test_acc:.4f}")
```

What each block does:

1. **Load the data.** Keras ships MNIST built in. One line. Returns four arrays — training images, training labels, test images, test labels.
2. **Normalize.** Neural networks train better when inputs are in a small range. We're squishing 0–255 grayscale values into 0–1 floats and flattening each 28×28 image into a 784-long vector.
3. **Build the model.** Two dense layers. First has 512 neurons with ReLU activation. Second has 10 neurons (one per digit) with softmax (turns the outputs into probabilities summing to 1). About 400,000 weights total.
4. **Compile.** Tells Keras the optimizer (rmsprop, similar to Adam), the loss function (sparse cross-entropy because the labels are integers 0–9 rather than one-hot vectors), and what to track during training (accuracy).
5. **Fit.** The training loop. 5 epochs, batch size 128. You'll watch this output stream for about a minute.
6. **Evaluate.** Run the trained model on the 10,000 test images and report accuracy.

That's the whole lab. Six steps. About a minute of training. You should get test accuracy around **97–98%**.

## What you'll see when training runs

In the notebook's output, you'll see something like:

```
Epoch 1/5
469/469 [==============================] - 2s 3ms/step - loss: 0.2615 - accuracy: 0.9247
Epoch 2/5
469/469 [==============================] - 1s 3ms/step - loss: 0.1059 - accuracy: 0.9686
Epoch 3/5
469/469 [==============================] - 1s 3ms/step - loss: 0.0696 - accuracy: 0.9791
Epoch 4/5
469/469 [==============================] - 1s 3ms/step - loss: 0.0504 - accuracy: 0.9853
Epoch 5/5
469/469 [==============================] - 1s 3ms/step - loss: 0.0379 - accuracy: 0.9885
313/313 [==============================] - 0s 1ms/step - loss: 0.0697 - accuracy: 0.9781
Test accuracy: 0.9781
```

The two numbers to watch:

- **`loss`** — going down means the model is learning. Should drop noticeably between epochs.
- **`accuracy`** — going up means the model is getting more answers right on the training data. Should be near 99% by epoch 5.

The **last line** is the test accuracy — the only one that matters. If your training accuracy is 99% but your test accuracy is 60%, you've overfit (you'll learn about that in Week 5). If both are around 97–98%, you've done it.

## Take a screenshot

When training finishes, **take a screenshot of the training output**. Save it as `screenshot_training.png`. It needs to show at least:

- The epoch-by-epoch loss/accuracy lines
- The final test accuracy

This goes in your repo as part of the deliverable.

## Common things that go wrong

| Symptom | Cause | Fix |
|---------|-------|-----|
| `ModuleNotFoundError: No module named 'tensorflow'` | TF not installed | In Colab: pre-installed, just restart runtime. Local: `pip install tensorflow` |
| Notebook seems to hang on `model.fit()` | First epoch always slow, GPU not detected | Wait 30 seconds. If still nothing, check Runtime → Change runtime type → GPU in Colab |
| `ValueError: Shapes ...` after `model.compile` | Forgot to reshape/normalize | Re-run cells 1 and 2 in order |
| Test accuracy near 10% (chance) | Labels not being passed correctly, or model is broken | Check that `train_labels` (not `train_images`) is the second argument to `fit()` |
| Training loss going UP | Learning rate too high, or model bug | Start fresh: re-run from cell 1, top to bottom. Don't change cells out of order |
| Kernel keeps dying / out of memory | Other notebooks open, or huge batch size | Close other notebooks. Use the default batch size. Restart kernel |

If you hit something not in this table, the notebook chat can probably help. Tell it the exact error message and which cell threw it.

## What "good" lab work looks like

You're done with the lab when you can answer these out loud:

- [ ] I can name the file the lab is in (the Chollet Ch 2 companion notebook).
- [ ] I can point at the line of code that loads the data.
- [ ] I can point at the lines that define the model architecture.
- [ ] I can point at the line that starts training.
- [ ] I have a screenshot of the training output, showing the loss going down across epochs.
- [ ] I know my final test accuracy (probably ~97–98%).

That's the lab. The **spike** (in `week_02_spike_baseline_error_analysis.md`) goes a step further — looking at the actual mistakes the model made.

## When you finish the lab

If you finish in class and want to play before the spike:

- Change the number of epochs and re-run. See if accuracy improves.
- Change the size of the first Dense layer (try 128, then 1024). See how training time and accuracy change.
- Look at one of the test images that got predicted wrong. Could *you* tell what it was?

These count as "playing," not as the deliverable. The spike is the real next step.
