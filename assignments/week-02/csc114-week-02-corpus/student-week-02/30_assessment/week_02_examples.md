# Week 2 Examples: What "Good" and "Weak" Look Like

**Audience:** Both tracks
**Purpose:** Two illustrative student submissions side by side. Constructed examples, calibrated against what we actually look for.

---

## Example 1: A strong submission

### `notebook.ipynb` (excerpt summary)

Runs end-to-end. Loads MNIST, defines a 2-layer Sequential model, compiles with rmsprop / sparse_categorical_crossentropy / accuracy, fits for 5 epochs at batch size 128, evaluates on the test set. Adds five cells at the bottom for the spike: predictions, confusion matrix (both numeric and heatmap), and a 5-image grid of misclassified examples.

Final cell output:
```
Test accuracy: 0.9803
Number of wrong predictions: 197 out of 10000
That's 1.97% wrong
```

### `write_up.md`

> # Week 2 Write-up — MNIST Baseline and Error Analysis
>
> ## Baseline
>
> Final test accuracy: 0.9803 (98.03%)
> Model: 2-layer Dense (512 → 10), 5 epochs, batch size 128, rmsprop optimizer
>
> ## What the model gets wrong
>
> Out of 197 wrong predictions, the most common confusion is **9 mistaken for 4** (24 cases) and the second is **4 mistaken for 9** (19 cases). Combined, the 4-9 confusion accounts for 22% of all errors. The third-largest off-diagonal cell is **5 mistaken for 3** (17 cases). The diagonal is otherwise clean — every digit class has more than 95% recall.
>
> ## Five examples I looked at
>
> 1. A 9 with a very small top loop and a long straight tail — predicted as 4. The top of the 9 was almost closed but not quite.
> 2. A sloppy 4 with the top fully closed and the vertical stroke offset — predicted as 9. Honestly, I would have guessed 9 too.
> 3. A 5 with a very rounded top arc — predicted as 3. The top of the 5 was almost a perfect curve.
> 4. A 7 with a strong horizontal slash across the middle (European-style) — predicted as 2. The slash made it look like a 2's bottom.
> 5. A 6 with the loop unclosed at the top — predicted as 0. The 6 looked more like a 0 with a tail.
>
> ## One hypothesis
>
> Looking at all five examples plus the confusion matrix, my hypothesis is that the model heavily weights *whether the top of the digit is closed*. Digits with closed top loops (9, 4 when the top is filled, 6 when the loop is full) get classified together as the "closed-loop family," and the model uses the bottom stroke to distinguish them. When the top stroke is ambiguous, the bottom stroke isn't enough.
>
> I'd test this by separating the 4-vs-9 mistakes into "4 looks like 9" and "9 looks like 4" and checking whether the offending examples all share unusual top-stroke geometry.
>
> ## What I'd try next (one change only)
>
> Replace the first Dense layer with a Conv2D layer. Convolutions look at local patches of the image, which seems much better suited to the "stroke geometry" question than a Dense layer that flattens everything. If the hypothesis is right, a single Conv2D should reduce the 4-9 confusion specifically.

### `reflection.md`

> What surprised me most this week is how easy it is to get to 98% accuracy and how much there is left to learn from the remaining 2%. The training loop felt almost anticlimactic — I expected something hard, and instead it was about six lines of Keras and 90 seconds of waiting. The harder work was the error analysis: I spent more time reading the confusion matrix than I spent training the model, and that felt like the actual lesson. I also realized I'd been thinking of "the model" as a single thing, but really it's making 10,000 separate decisions, and looking at the 200 it gets wrong is more useful than reading the average of all of them.

### Why this is strong

- **Real numbers.** Specific cell counts from the confusion matrix, not vague descriptions. "24 cases of 9 mistaken for 4" beats "the model often confuses 9 and 4."
- **The hypothesis is specific and testable.** "The model heavily weights whether the top of the digit is closed" is a falsifiable claim — you could test it.
- **The five examples are described in their own words.** The student looked at the images and wrote what they saw, not what they think the instructor wants to hear.
- **The "one thing to try" connects to the hypothesis.** Conv2D specifically addresses stroke geometry, which is the hypothesis. The whole write-up has internal logic.
- **The reflection points at the meta-lesson.** "I expected something hard and the harder work was the analysis" — that's the actual Week 2 insight, articulated.

For Code Builders, this same student would have:
- An Issue titled `Week 2: MNIST hello world` opened on Monday
- A branch `week-2-mnist-baseline`
- 6 commits: `add mnist notebook`, `add training output screenshot`, `run baseline eval`, `add confusion matrix cells`, `write up baseline + error analysis`, `add reflection`
- A PR with a real retro: "I overshot the spike — spent the first three hours debugging a TF install issue, which is why I ended up running it in Colab anyway. Next week I'll try to get my local env working sooner."

---

## Example 2: A weak submission

### `notebook.ipynb` (excerpt summary)

Has the lab code, runs without errors. Final cell prints `Test accuracy: 0.9784`. **No spike cells.** No confusion matrix, no predictions, no example images.

### `write_up.md`

> # Week 2 Write-up
>
> I built a neural network that learned to recognize handwritten digits. I used Keras and trained it for 5 epochs. The model got 97.84% accuracy on the test set.
>
> The model made some mistakes but most of the predictions were correct. Deep learning is impressive.
>
> If I had more time I would try a bigger model and more epochs to see if I could get higher accuracy.

### `reflection.md`

> This week was challenging but I learned a lot. Deep learning is the future of AI and I'm excited to keep learning. The class is going well.

### Why this is weak

- **No actual error analysis.** The notebook stopped at the lab's last cell. The spike asks you to look at *which* mistakes — this submission only reports the accuracy number.
- **"The model made some mistakes" is not analysis.** Which mistakes? How many? What did they look like? Nothing in the write-up engages with the data.
- **"Try a bigger model and more epochs" is two changes.** Also, it's the standard "more is better" guess, not motivated by anything specific to this model's failures.
- **The reflection could be Week 1, Week 8, or any other course.** Nothing about it points at *this week's* learning.

This submission gets a **re-do** with notes:
- Add the confusion matrix and look at 5 misclassified images.
- Rewrite the write-up around at least one specific observation with numbers.
- Pick *one* change to try and explain *why* it specifically addresses what your model gets wrong.
- Rewrite the reflection to reference something concrete that happened to you this week.

---

## Patterns we see in mid-tier work

Most submissions land between Example 1 and Example 2. Common middle-ground issues, and how to fix them:

**The write-up has numbers but no images.** You computed a confusion matrix but didn't actually look at the misclassified examples. Spend 10 minutes on the image grid — it's where the most surprising findings come from.

**The hypothesis is generic.** "The model has trouble with handwriting that looks like other digits" is true, but trivial. Tighten it: which specific digits? Why those?

**One change, but unmotivated.** "I'd add dropout" — okay, but why? "I'd add dropout because the training accuracy was way above test accuracy by epoch 5" — now that's connected to what you observed.

**Reflection is mostly true but generic.** "Loss going down was satisfying to watch" is fine but says nothing about *your* week. "I expected the network to be a black box and it kind of is — but the confusion matrix gave me something to grab onto" says more.

If you're unsure where your draft lands, paste your `write_up.md` into the notebook chat and ask: "Read this like an instructor would. What's vague? What's specific? What would they want more of?"
