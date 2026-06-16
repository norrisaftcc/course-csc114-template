# For Prompt Masters — Week 2

**Audience:** Prompt Masters track
**Bottom line:** Week 2 has code in it. You don't need to write any of it. You'll open Chollet's notebook in Google Colab, run cells by clicking, observe what happens, and write up what you saw. Submit by drop into the repo on `main`, no PRs.

---

## What's actually being asked of you this week

The Code Builders track is learning to write Keras code. You're not. **You're learning to *read* code and interpret results.** That's a real skill that translates everywhere — code review, technical leadership, working with engineering teams, evaluating AI-generated code, due-diligence on technical claims in business contexts.

For Week 2, your job is:

1. Open Chollet's MNIST notebook in **Google Colab** (no install, runs in your browser).
2. Click "Run all" or run cells one at a time. Watch what each cell does.
3. Add the error-analysis cells from the spike spec by copying them in (no typing code from scratch).
4. Take a screenshot of the training output.
5. Write up what you observed — same write-up as Code Builders submit.
6. Download the notebook as `.ipynb` and drop it into your repo.

You don't need Python installed. You don't need a terminal. You don't need to make branches or PRs. You need a Google account.

## Step-by-step: Get the notebook open in Colab

### 1. Sign in to Google

Go to `colab.research.google.com`. Sign in with the Google account you want to use for this class. A personal account is fine. Most students use the same account they use for Gmail.

### 2. Open Chollet's notebook directly from GitHub

In Colab:
1. Click **File → Open notebook.**
2. In the dialog that opens, click the **GitHub** tab.
3. In the search field, paste: `fchollet/deep-learning-with-python-notebooks`
4. A list of notebooks will appear. Click **`chapter02_mathematical-building-blocks.ipynb`**.

The notebook opens in Colab. It's the MIT-licensed companion notebook for Chollet's textbook Chapter 2 — the exact source for this week's lab.

### 3. Save your own copy

Important: when you open from GitHub, you're viewing a read-only copy. To save changes, click **File → Save a copy in Drive.** This creates your own version. You'll work in this copy.

Rename it: **File → Rename.** Call it something like `csc114-week-2-mnist-{your-initials}`.

### 4. Run the cells

Colab notebooks are a series of "cells" — some have text (markdown), some have code. You run a code cell by clicking it and then either:

- Clicking the ▶ (play) button on the left side of the cell, OR
- Pressing **Shift + Enter** on your keyboard.

You can run them all at once with **Runtime → Run all.** First time, that's the easiest path.

The first time you run a cell that needs the GPU, Colab will allocate one. This takes 10–30 seconds. Be patient. After that, cells run fast.

### What you should see

The notebook is structured like this:

- **Cells 1–3:** Load MNIST, look at its shape. The output is text showing things like `(60000, 28, 28)` — that's 60,000 images, each 28 pixels by 28 pixels.
- **Cells 4–6:** Build a small neural network, compile it, normalize the data.
- **Cell with `model.fit()`:** This is the training loop. **Watch this one closely.** You'll see something like:

```
Epoch 1/5
469/469 [==============================] - 2s 3ms/step - loss: 0.2618 - accuracy: 0.9237
Epoch 2/5
...
```

Each line is one epoch (one full pass through the training data). The `loss` number should go down across epochs. The `accuracy` number should go up. That's the visible sign of learning.

- **Cell with `model.evaluate()`:** This tests the trained model on data it hasn't seen. The output is your test accuracy — probably 0.97 to 0.98 (97-98%).

### Take a screenshot here

Once `model.fit()` finishes and you see the test accuracy printed, **take a screenshot of the cell output.** You need both the per-epoch lines AND the final test accuracy in the same screenshot.

- **On Mac:** Cmd+Shift+4, drag a box around the output.
- **On Windows:** Win+Shift+S, drag a box.
- **On Chromebook:** Ctrl+Shift+ the window-switcher key.

Save the file as `screenshot_training.png`. You'll add it to your repo later.

## Step-by-step: Add the error analysis cells

This is the spike — looking at *which* mistakes the model made. You don't need to write the code; just **copy-paste it in.**

In Colab, scroll to the bottom of the notebook. Click **+ Code** to add a new code cell.

### Cell 1: Get the predictions

Paste this:

```python
import numpy as np

predictions = model.predict(test_images)
predicted_labels = np.argmax(predictions, axis=1)
wrong_indices = np.where(predicted_labels != test_labels)[0]
print(f"Number of wrong predictions: {len(wrong_indices)}")
print(f"Out of {len(test_labels)} test images")
print(f"That's {len(wrong_indices) / len(test_labels) * 100:.2f}% wrong")
```

Click ▶ to run it. You should see something like "Number of wrong predictions: 219."

### Cell 2: Confusion matrix

Add another cell. Paste this:

```python
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt

cm = confusion_matrix(test_labels, predicted_labels)
print("Confusion matrix (rows = true label, columns = predicted label):")
print(cm)

plt.figure(figsize=(8, 6))
plt.imshow(cm, cmap='Blues')
plt.colorbar()
plt.xlabel('Predicted')
plt.ylabel('True')
plt.title('Confusion Matrix')
plt.xticks(range(10))
plt.yticks(range(10))
plt.show()
```

Run it. You'll see a 10×10 grid of numbers, plus a heatmap. The big numbers on the diagonal are correct predictions. The off-diagonal numbers are mistakes.

### Cell 3: Look at 5 misclassified images

Add another cell:

```python
test_images_2d = test_images.reshape((10000, 28, 28))

fig, axes = plt.subplots(1, 5, figsize=(12, 3))
for i, idx in enumerate(wrong_indices[:5]):
    axes[i].imshow(test_images_2d[idx], cmap='gray')
    axes[i].set_title(f"True: {test_labels[idx]}\nPredicted: {predicted_labels[idx]}")
    axes[i].axis('off')
plt.tight_layout()
plt.show()
```

Run it. You should see five small grayscale images of handwritten digits, each labeled with what they actually are and what the model predicted.

**Look at them.** What do they look like to you? Could you have called them correctly?

## Step-by-step: Write the write-up

Same write-up as Code Builders. See `week_02_spike_baseline_error_analysis.md` for the structure and `week_02_examples.md` for what good looks like.

You can write the markdown directly in Colab (add a Text cell), OR write it in a separate file (Google Docs, Notepad, anything) and copy it into your repo as `write_up.md`.

Either way, your write-up needs the actual numbers from your run and a hypothesis about what the model gets wrong.

## Step-by-step: Get the files into your repo

### 1. Download the notebook from Colab

In Colab: **File → Download → Download .ipynb.**

You get a file named something like `csc114-week-2-mnist-yi.ipynb`. Rename it to `notebook.ipynb` so the filename matches the deliverable spec.

### 2. Make a `week-02` folder in your repo

In GitHub web interface:

1. Go to your repo.
2. Click **Add file → Create new file.**
3. In the filename field, type `week-02/PLACEHOLDER.md` (the `/` creates the folder).
4. Add any content (you'll delete this file in a moment).
5. Click **Commit changes.**

Now the `week-02/` folder exists.

### 3. Upload your files

Click into the `week-02/` folder. Then **Add file → Upload files.** Drag and drop:

- `notebook.ipynb`
- `screenshot_training.png`
- `write_up.md`
- `reflection.md`

Then commit. Now delete the `PLACEHOLDER.md` file you made in step 2 (click it, click the trash icon, commit the delete).

### 4. Update the root `README.md`

Go back to the repo root. Click `README.md`, then the pencil icon to edit. Add a section:

```markdown
## Week 2: MNIST Hello World

Built a Keras neural network that learned to recognize handwritten digits.
Final test accuracy: [your number]%. Looked at the confusion matrix and
five misclassified examples; wrote up a hypothesis about [your hypothesis topic].

[See `week-02/`](./week-02/).
```

Commit.

### 5. Post in Discussions

Class Discussions channel: "Week 2 done." That's how the instructor knows to look.

## Common things that go wrong (and what to do)

| Symptom | Cause | Fix |
|---------|-------|-----|
| Colab keeps disconnecting | Free tier idle timeout | Click the cell area periodically. Or use Runtime → Run all to do everything before timeout. |
| Notebook hangs on `model.fit()` for >2 min | Sometimes Colab is slow to allocate compute | Try Runtime → Disconnect and delete runtime, then run again. |
| "ModuleNotFoundError: tensorflow" | Wrong runtime type | Runtime → Change runtime type → GPU (or TPU). Try again. |
| Plots don't display | `%matplotlib inline` missing | Add `%matplotlib inline` as the first line of any cell that uses `plt`. Re-run. |
| Confusion matrix shows all zeros except one column | Labels got swapped somewhere | Restart the runtime: Runtime → Restart runtime. Re-run everything from the top. |
| `wrong_indices` is empty | Test accuracy was 100% (suspicious) — or labels not loaded right | Re-run the load + train cells. 100% accuracy is too good — check what you're testing on. |
| File too big to upload to GitHub | Notebook has lots of output cells/images | In Colab: Edit → Clear all outputs. Re-run only the cells you need for the screenshot. Re-download. |

If you get stuck and the notebook chat can't help, screenshot the error and post in Discussions. Don't waste an hour on a Colab quirk that someone else has hit before.

## What you're submitting (recap)

In your repo, under `week-02/`:
- `notebook.ipynb` — Chollet's notebook with the spike cells added, downloaded from Colab
- `write_up.md` — your 400–600 word analysis
- `screenshot_training.png` — training output screenshot
- `reflection.md` — 4–6 sentences

At the root:
- `README.md` updated with a Week 2 section

No branches, no PRs, no Issues. Just files in the right place on `main`.

## Why this matters for your career

Reading code you didn't write is one of the most under-rated skills in tech. Engineers spend ~60% of their time reading code, not writing it. Product managers, designers, and analysts who can read code make decisions that engineers respect. Founders who can read what their AI tools produce make better business calls.

This week you read a real Keras notebook by François Chollet, the person who created Keras. You ran it. You added cells to it. You saw what it does and you formed an opinion about its output. That's the skill — and you're starting to build it.

When you finish Week 2, your repo has a real machine learning result in it with your name on it. That's not a metaphor. That's an artifact.
