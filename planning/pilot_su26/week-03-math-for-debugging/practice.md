# Practice — Walk Chollet's Ch 2 notebook

**Slot:** Practice (retry-OK, no grade penalty)
**Time:** ~75 minutes
**Goal:** Run every cell of Chollet's official Ch 2 notebook, **and add your own reflection cells along the way.** By the end you should be able to point at every line of a Keras training loop and say what it's doing at the math level.

---

## Step 1 — Get the notebook

The official Manning notebooks live at: <https://github.com/fchollet/deep-learning-with-python-notebooks>

If you haven't cloned it yet, do so now in a sensible folder outside this course repo:

```bash
cd ~/Documents          # or wherever you put external code
git clone https://github.com/fchollet/deep-learning-with-python-notebooks.git
```

The file you want is **`chapter02_mathematical-building-blocks.ipynb`**.

Why clone the upstream rather than copy it here? Because:

1. The notebooks update when Chollet finds bugs or typos, and you want the live version.
2. Cloning *is* a learning exercise — version control practice without the stakes of your own code.

## Step 2 — Make a working copy

Inside the cloned notebooks repo, **copy** `chapter02_mathematical-building-blocks.ipynb` to a new file in your course repo: `week-03/chapter02_my_walkthrough.ipynb`. We don't want to edit Chollet's original — we want our annotated version.

## Step 3 — Walk the notebook with reflection cells

Open `chapter02_my_walkthrough.ipynb` in Jupyter (or VS Code, or Colab). Run cells **one at a time, in order.** After each section the notebook delineates, add a **markdown cell of your own** with one of these prompts:

| At this point in the notebook | Add a reflection cell answering |
|---|---|
| After §2.1 *A first look at a neural network* runs | What does this code do that we didn't do in Week 2? (Hint: look at the optimizer + loss function lines.) |
| After §2.2 *Data representations* | Pick one tensor from earlier in the notebook. State its rank, shape, and dtype. |
| After §2.3 *Tensor operations* | The notebook shows broadcasting. In one sentence: why does `numpy` let you add a vector to a matrix? |
| After §2.4 *Gradient-based optimization* | What is the *learning rate* doing in the from-scratch training loop, in your own words? |
| After the from-scratch implementation runs | How is the from-scratch version different from `model.fit(...)`? Pick one specific concrete difference. |
| At the very end | What's still hazy? Write down one specific question you'd ask in office hours. |

Six reflection cells minimum. **Don't skip them.** The notebook walks you through the *what*; the reflection cells make you say it back to yourself, which is the only way it actually sticks.

## Step 4 — Read your own Week 2 notebook side-by-side

Open `week-02/hello_keras.ipynb` next to your Week 3 walkthrough. Look at the training cell:

```python
history = model.fit(
    x_train, y_train,
    epochs=5,
    batch_size=128,
    validation_split=0.1,
)
```

Now you know what's under that one line. In your `week-03/chapter02_my_walkthrough.ipynb`, add one final markdown cell:

```markdown
## Mapping back to my Week 2 model

The `model.fit(...)` call in my hello_keras notebook does:
- [in your own words: what the forward pass does for one batch]
- [in your own words: what the backward pass does for one batch]
- [in your own words: how the weights get updated]
- [in your own words: what `epochs=5` and `batch_size=128` control]

If `model.fit` failed at 3am with `NaN` in the loss, my first three things to check would be:
1. ...
2. ...
3. ...
```

This is the deliverable shape that proves you got it. Don't write essay paragraphs — write specific debugging instincts. Future-you will thank present-you when this happens in Week 6.

## Before you leave Practice

- [ ] `week-03/chapter02_my_walkthrough.ipynb` exists in your course repo.
- [ ] All cells in it have been run (outputs visible).
- [ ] You have **at least 6 markdown reflection cells** of your own writing in addition to Chollet's.
- [ ] The final "Mapping back to my Week 2 model" cell is filled in with specifics, not platitudes.

## Common issues

| Symptom | Likely cause | Fix |
|---|---|---|
| `ModuleNotFoundError: No module named 'tensorflow'` | Wrong Python env | Activate your Week 2 `ml-env` first. |
| The from-scratch training loop is slow on your laptop | It's intentionally educational, not optimized | Either let it run or reduce the number of epochs in that cell. Doesn't need to be fast — it needs to teach. |
| You hit a cell with `K.fit()` or similar that errors out | Notebook drift between Chollet's Keras 3 version and your installed Keras 2 | Either upgrade Keras (`pip install --upgrade keras`) or read the cell without running. The point is the math, not the API. |
| You can't tell which cells are "Chollet's" vs "yours" | Insufficient marking | Prefix your markdown cells with **`📝 My note:`** or similar. Standardize for yourself so PR review can tell at a glance. |
| You feel like you don't understand any of it | Normal | Reread the relevant Manning section. Reread §5 in particular — it puts everything back together. |

## A note on the "I don't get the math" feeling

If you finish this notebook and feel like the math is a fog — that's the expected outcome at the **end of Week 3 of an 8-week pilot.** You will not be calculus-fluent at deep learning by Friday. You should be able to:

- Point at where the loss is computed.
- Point at where the gradient is used.
- Recognize "learning rate" when you see `1e-3` written somewhere.
- Know that **broadcasting** is a thing, and that **shape errors** are 80% of training bugs.

That's plenty. The math gets reinforced every week thereafter — by Week 8 you'll look back at this notebook and it'll read differently.

## Where to go next

→ [apply.md](apply.md) — Your first systematic experiment: a learning rate sweep (or batch size sweep).
