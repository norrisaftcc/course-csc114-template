# Spike: Baseline Metric + Error Analysis

**Audience:** Both tracks
**When:** After the Week 2 lab is working
**Time:** 60–90 minutes
**Goal:** Look at *which* mistakes your MNIST model made, and write one paragraph about what you'd try next.

This is the assignment that distinguishes "I ran the code" from "I learned something this week." It's the start of a habit you'll repeat in every textbook week.

---

## The frame

Your model from the lab probably got around 97–98% test accuracy. That sounds great, but it also means the model is wrong on roughly 200 to 300 of the 10,000 test images.

Which 200–300? Are they spread evenly across digits, or does the model fail on certain digits more than others? When it gets a 7 wrong, what does it think the 7 is? When it gets a 9 wrong, what does it look like?

These questions are **error analysis.** They turn a single number ("97.81%") into a description of how the model behaves ("it confuses 9 and 4 most often, especially when the 9 has an open top loop"). The second one is much more useful.

## What you'll do

Three steps. Each one takes 15–30 minutes.

### Step 1: Establish the baseline

The lab gave you a test accuracy number. Write it down. That's your **baseline.** For the rest of the spike, "did it improve?" means "did test accuracy go up from this baseline?"

In your `write_up.md` (you'll create this file as part of the deliverable), start with:

```markdown
## Baseline

Final test accuracy: 0.9781 (97.81%)
Model: 2-layer Dense (512 → 10), 5 epochs, batch size 128, rmsprop optimizer
```

Use *your* actual numbers, not these. Round to 4 decimals.

### Step 2: Find the mistakes

Add these cells to your notebook **after** the `evaluate` line. Don't run the whole notebook over — just add these at the bottom.

```python
import numpy as np

# Get the model's predictions for all test images
predictions = model.predict(test_images)
predicted_labels = np.argmax(predictions, axis=1)

# Find which test images the model got wrong
wrong_indices = np.where(predicted_labels != test_labels)[0]
print(f"Number of wrong predictions: {len(wrong_indices)}")
print(f"Out of {len(test_labels)} test images")
print(f"That's {len(wrong_indices) / len(test_labels) * 100:.2f}% wrong")
```

You should see something like "Number of wrong predictions: 219" (your number will differ).

Then make a **confusion matrix** — a table showing how often each digit got mistaken for each other digit:

```python
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt

cm = confusion_matrix(test_labels, predicted_labels)

# Print it as numbers
print("Confusion matrix (rows = true label, columns = predicted label):")
print(cm)

# Show it as a heatmap (easier to read)
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

The diagonal is the correct predictions. Off-diagonal cells are mistakes. The darker (or higher-numbered) the off-diagonal cell, the more often that confusion happens.

Look at which off-diagonal cells stand out. There's almost always a few — maybe the model confuses 4 and 9, or 3 and 5, or 7 and 1.

### Step 3: Look at the actual images

Pick **five misclassified examples** and look at them. You can do this with:

```python
# Look at the first 5 mistakes
import matplotlib.pyplot as plt

# Reshape the flattened images back to 28x28 for display
test_images_2d = test_images.reshape((10000, 28, 28))

fig, axes = plt.subplots(1, 5, figsize=(12, 3))
for i, idx in enumerate(wrong_indices[:5]):
    axes[i].imshow(test_images_2d[idx], cmap='gray')
    axes[i].set_title(f"True: {test_labels[idx]}\nPredicted: {predicted_labels[idx]}")
    axes[i].axis('off')
plt.tight_layout()
plt.show()
```

For each one, ask yourself:
- Could *I* tell what it was? Some of these are genuinely ambiguous — even a human would hesitate.
- Does the model's wrong guess at least make sense visually? A blocky 4 mistaken for a 9 is reasonable. A clean 0 mistaken for an 8 is weird.
- Is there a pattern across the five? (Sloppy handwriting? Connected loops? Numbers that overlap visually?)

## What goes in the write-up

Your `write_up.md` should be roughly 400–600 words. Structure:

```markdown
# Week 2 Write-up — MNIST Baseline and Error Analysis

## Baseline

Final test accuracy: ___ (___%)
Model: [describe the architecture in one line]

## What the model gets wrong

[2–4 sentences. Look at the confusion matrix. Which off-diagonal cells stand
out? Are there pairs of digits that get confused with each other? Use numbers
from the matrix to support your claim — "the model mistakes 9 for 4 thirty-one
times, which is the largest off-diagonal cell."]

## Five examples I looked at

[For each of your five misclassified examples, write 1 sentence describing
what you saw. Don't paste the images — just describe them. E.g.,
"Example 1: a sloppy 4 with the top mostly closed; the model predicted 9."]

## One hypothesis

[The most important part. Why might these confusions happen? Pick one
hypothesis that ties together at least two of your observations. You don't
have to be right — you have to be specific and testable.]

Example of a good hypothesis:
"The model seems to confuse digits with closed top loops (9, 4, 0) when
the connecting strokes are thick. I think the model has learned 'top loop
plus tail' as the signature of a 9, and a stocky 4 with a connected top
matches that pattern. I'd test this by looking at all the 4-vs-9 mistakes
and seeing if my characterization holds."

## What I'd try next (one change only)

[One sentence. The "one-change-rule" from Week 1 applies here too. What
single change would you try if you had more time, and why?]

Examples:
- "Add a third Dense layer to see if more depth helps with the loops/strokes
  pattern."
- "Train for more epochs to see if the model converges past 98%."
- "Use a convolutional layer instead of Dense — convolutions are designed
  for images and might pick up the stroke patterns better."

Don't actually try the change this week. Just name it.
```

## What "good" looks like for this spike

Three things, weighted roughly equally:

1. **You used real numbers.** Your write-up references actual confusion matrix cells and your actual accuracy. Generic statements like "the model made some mistakes" aren't enough.
2. **Your hypothesis is specific.** "The model has trouble with curvy digits" is vague. "The model confuses 9 and 4 most often, especially when both have stocky top loops" is specific.
3. **Your "what I'd try next" is one thing.** Not a list of five ideas. One thing. Naming it clearly.

You don't need to be right. The model behavior in MNIST is surprisingly subtle and well-studied — your hypothesis might be totally off from the published consensus, and that's fine. What matters is that you *formed* a hypothesis from looking at data, not from guessing.

## Common pitfalls

| Trap | What goes wrong | Better approach |
|------|-----------------|-----------------|
| Reporting only accuracy | You don't know what your model actually does | Use the confusion matrix |
| Looking at no examples | You're guessing at the data | Look at 5 mistakes — visually |
| Writing a hypothesis without numbers | The write-up reads as opinion | Tie each claim to a specific count or example |
| Listing 5 things to try | Avoiding the one-change discipline | Pick one. Defend why it's the most promising |
| Copying the example hypothesis | Doesn't reflect your data | Your model's mistakes are different from anyone else's — write *yours* |

## When you're done

You're done when:

- [ ] You have a baseline accuracy number written down.
- [ ] You added a confusion matrix to your notebook.
- [ ] You looked at five actual misclassified images.
- [ ] You wrote a 400–600 word `write_up.md` with a specific hypothesis.
- [ ] You can explain to a classmate, in 30 seconds, what your model gets wrong and why you think so.

That last bullet is the actual learning. Everything else is the evidence trail.
