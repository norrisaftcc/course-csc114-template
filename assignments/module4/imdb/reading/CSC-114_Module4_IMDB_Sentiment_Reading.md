# Positive or Negative? Teaching a Network to Judge Movie Reviews

**CSC-114 Artificial Intelligence I · Module 4 Reading**
*Companion to Chollet & Watson, "Deep Learning with Python," 3rd Edition (Manning), Chapter 4. This is the conceptual on-ramp. The slide deck (Deck 2) and the lab notebook run everything below in real Python. This unit stands on its own — everything you need is here.*

---

## The one-sentence version

> We'll hand a network thousands of movie reviews, each already labeled *positive* or *negative*, and it will learn to read a brand-new review and guess which one it is.

This is called **binary classification**: sorting each input into one of exactly two buckets. Positive or negative. Spam or not spam. Yes or no. It's one of the most common jobs in all of machine learning, and the recipe you learn here works for a huge range of two-bucket problems.

We'll use one running example the whole way through: **a single movie review.**

---

## 1. The job

Here is review #0 from our dataset, decoded back into English:

> *"? this film was just brilliant casting location scenery story direction everyone…"*

A person reads that and instantly knows: this is **positive**. Our goal is a model that does the same thing on its own — reads the words and outputs a guess. Not "I think so." A number. A probability between 0 and 1, where close to 1 means *positive* and close to 0 means *negative*.

To get there, we hit a wall almost immediately.

---

## 2. The wall: a computer can't read

A neural network does math on numbers. It has no idea what a word is. So before anything else, every review has to become numbers.

We'll use the **IMDb dataset**: 50,000 movie reviews from the Internet Movie Database, split into 25,000 for training and 25,000 for testing, half positive and half negative. It comes built into Keras, and it's already been turned into numbers for us. Each review is a list of integers, where every integer stands for a specific word.

```
   review #0 (as words):    "this film was just brilliant ..."
   review #0 (as numbers):  [1, 14, 22, 16, 43, 530, ...]
```

The label sits in a separate list: **0 means negative, 1 means positive.** Review #0 has a label of 1.

That leading `?` in the decoded text is worth a pause. The decode works by looking up each number's word — but the first few numbers (0, 1, 2) are reserved for housekeeping ("padding," "start of review," "unknown word"), so the lookup shifts every index by 3 and prints `?` for anything it can't find. Miss that shift and your decoded reviews come out as nonsense. (Your AI partner will sometimes forget it. Hold that thought.)

### Why only 10,000 words?

When we load the data, we keep only the **10,000 most common words** and throw the rest away:

```python
from keras.datasets import imdb
(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)
```

The full vocabulary is over 88,000 words. Most of those show up in a single review — they can't teach the model a general pattern, and they'd make every review enormously wide. Capping at 10,000 keeps the data a manageable size without losing much signal.

---

## 3. Turning a review into a row of numbers

A list of word-numbers still isn't usable. Reviews have different lengths, and a network needs every input to be the same shape. So we reshape each review into a fixed-width row of 0s and 1s. This is called **multi-hot encoding.**

The idea: make a row with 10,000 slots, one per word in the vocabulary. Put a **1** in the slot for every word the review contains, and **0** everywhere else.

```
   A tiny example with the words at positions 5 and 8 present:

   slot:    0   1   2   3   4   5   6   7   8   9  ...
   value:   0   0   0   0   0   1   0   0   1   0  ...
                              ▲           ▲
                          "word 5"     "word 8"
```

Now every review — long or short — is the exact same shape: one row, 10,000 numbers wide. The network doesn't know *where* a word appeared or how many times. It only knows *which* words were present. That turns out to be enough to judge sentiment surprisingly well.

The labels need a tiny conversion too — just turning them into the right number type. Now the data is ready.

---

## 4. The model: a stack of layers ending in one yes/no knob

The model is three layers stacked in a row:

```python
model = keras.Sequential([
    layers.Dense(16, activation="relu"),
    layers.Dense(16, activation="relu"),
    layers.Dense(1,  activation="sigmoid"),
])
```

Read it bottom-up by what each layer does:

- The first two layers each have **16 units.** Think of units as the amount of room the model has to find patterns. More units, more room — but also more chances to memorize noise. 16 is a deliberate, modest choice.
- Those two layers use the **`relu`** activation. For now, all you need: `relu` lets the model learn complicated, non-straight-line patterns. Without it, stacking layers would be pointless — the whole stack would collapse into one simple line.
- The last layer has **1 unit** with a **`sigmoid`** activation. This is the heart of binary classification. A sigmoid squashes any number into the range 0 to 1, so the model's final output reads as a probability: *how likely is this review to be positive?*

```
   review vector (10,000 wide) → [16 units] → [16 units] → [1 sigmoid] → 0.93
                                                                          ▲
                                                          "93% likely positive"
```

That final shape — **one unit, sigmoid activation** — is the part to memorize. Whenever you're sorting into exactly two buckets, your model ends this way.

---

## 5. How the model learns it's wrong

At the start, the model's knobs (its **parameters**) are random, so its first guesses are terrible. Training is the loop that fixes them — the same loop from Module 3:

```
   guess  →  measure how wrong it was  →  nudge the knobs a little  →  guess again
              ▲                                                          │
              └──────────────────────────────────────────────────────────┘
                              repeat, many times over
```

Two pieces make that loop run, and both are chosen to fit the job:

- **The loss function** measures how wrong a guess is. For a model that outputs a probability, the right choice is **`binary_crossentropy`**. It heavily punishes confident wrong answers — saying "0.99 positive" about a negative review costs far more than saying "0.6 positive." That pressure is exactly what pushes the model toward honest probabilities.
- **The optimizer** decides how to nudge the knobs. We use **`adam`**, a reliable default that works well on almost any problem. It's one less thing to worry about.

```python
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
```

We also watch **accuracy** — the plain percentage of reviews it gets right — because it's easy to understand. But notice accuracy is something we *monitor*, not the thing we *minimize*. The model trains on the loss.

---

## 6. The trap: never grade yourself on the test

Here's a mistake that's easy to make and quietly ruins everything.

We want to check how the model is doing *while* it trains, so we can make decisions — like how long to train. But if we check against the **test set** and then use what we learn to tune the model, the test set is no longer a fair exam. We've effectively let the model peek at the answers. Its test score stops meaning "how it does on brand-new reviews."

The fix is a **validation set**: a third pile of data, separate from both training and test. We set aside 10,000 reviews from the training data for this.

```python
x_val = x_train[:10000]
partial_x_train = x_train[10000:]
y_val = y_train[:10000]
partial_y_train = y_train[10000:]
```

We tune against the validation set as much as we like. The test set stays sealed until the very end, used exactly once, for an honest final grade.

---

## 7. Watching it overfit

Now we train for 20 full passes over the data (each pass is an **epoch**) and watch two things at every step: how the model does on the **training** data and on the held-out **validation** data.

Something revealing happens:

```
   loss
    │
    │ \                              training loss
    │  \___                          keeps dropping, every epoch
    │      \_____________________
    │  .                              validation loss
    │   `.          ____________      dips early... then RISES
    │     `._____./
    └──────┬───────────────────────  epochs
           ▲
      around epoch 4: validation is at its best
```

The **training** loss keeps falling — the model gets better and better at the reviews it has already seen. But the **validation** loss only improves for about four epochs, then starts climbing. After that point the model is **overfitting**: memorizing quirks of the training reviews that don't carry over to new ones. Better on the practice test, worse on the real exam.

This is the single most important picture in the unit. A model getting better on its training data is *not* the same as a model getting better, full stop.

The fix is blunt and effective: train a fresh model for only **4 epochs** — stop where validation was best — then check it on the sealed test set.

```python
model.fit(x_train, y_train, epochs=4, batch_size=512)
results = model.evaluate(x_test, y_test)
```

This plain approach lands around **88% accuracy** on reviews it has never seen. Polished, state-of-the-art methods reach about 95%. For a model this simple, built in a few lines, 88% is a strong start. (Your exact number will wobble a little each run, because the model starts from random — that's normal.)

---

## 8. Using the trained model

Once trained, the model scores new reviews with `predict`. Each output is a probability:

```
   [0.98]   ← model is very sure: positive
   [0.99]   ← very sure: positive
   [0.02]   ← very sure: negative
   [0.65]   ← leaning positive, but unsure
   [0.41]   ← leaning negative, but unsure
```

A confidently positive review like our review #0 scores up near 1. Some reviews land near 0.5 — the model is genuinely on the fence, the same way a person might be about a mixed review. That uncertainty isn't a bug; it's the model being honest about a hard call.

---

## 9. The recipe card

For any **binary classification** problem, this is the pattern to carry forward:

| Decision | Choice | Why |
|---|---|---|
| Final layer | `Dense(1)` | One number out: a single probability |
| Final activation | `sigmoid` | Squashes the output into 0–1 |
| Loss function | `binary_crossentropy` | Best match for probability outputs |
| Optimizer | `adam` | Reliable default for almost anything |
| Watch out for | Overfitting | Monitor validation, not just training |

---

## 10. What changes if…?

You don't have to take the architecture on faith. In the lab you'll change **one thing at a time** and watch the validation accuracy respond:

- Use one layer, or three, instead of two.
- Use 32 or 64 units instead of 16.
- Swap `binary_crossentropy` for `mean_squared_error`.
- Swap `relu` for `tanh`.

Change one knob, re-run, write down what happened. That's the whole discipline — and it's how you build real intuition instead of memorizing someone else's defaults.

---

<!-- ============================================================
INSTRUCTOR APPENDIX — not for student distribution
============================================================ -->

```
INSTRUCTOR APPENDIX
===================

SCOPE & OWNERSHIP
- This unit owns: text→vector (multi-hot) encoding, the binary-classification
  head (1 sigmoid unit + binary_crossentropy), reading an overfitting curve,
  and the validation-vs-test principle.
- Out of scope on purpose: Reuters multiclass (softmax / categorical_crossentropy)
  and regression. The house-prices unit owns normalization, K-fold, MSE/MAE.

CODE FIDELITY (verified against Chollet's chapter04 notebook, MIT-licensed)
- Dataset: keras.datasets.imdb, num_words=10000.
- Encoding: multi_hot_encode to 10,000-wide 0/1 vectors.
- Model: Dense(16,relu) -> Dense(16,relu) -> Dense(1,sigmoid).
- Compile: optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"].
- Validation: first 10,000 training samples held out; 20 epochs, batch_size=512.
- Final model: retrain fresh for ~4 epochs; evaluate on test.

NUMBERS WILL VARY
- Overfit point (~epoch 4) and test accuracy (~88%) shift slightly with random
  init. Teach the SHAPE of the curve and the decision it drives, not a fixed
  epoch or percentage. SOTA ~95% is the calibration anchor.

TRAP SEEDS PLANTED IN THIS READING (reused by exit ticket + Apply/Assess)
1. Binary vs multiclass — students have NOT seen softmax/categorical_crossentropy.
   An agent that suggests them for a 2-class problem is wrong. (See §4, §9.)
2. "More epochs = better" — directly contradicted by §7. The student's own curve
   is the evidence.
3. Decode offset-by-3 — flagged in §2; agents routinely drop it.
4. Tuning on the test set — the §6 trap, stated plainly so the assessment can probe it.
5. num_words=10000 rationale — §2; agents parrot the line without the
   rare-word / vector-size tradeoff.

PLATFORM / FAST-MOVING-TARGET NOTES
- Chollet's notebook sets KERAS_BACKEND="jax" and installs `keras keras-hub`.
  Keras 3 is backend-agnostic; results match on TF/PyTorch/JAX. If students run
  locally rather than on Colab, decide on a backend and state it.
- imdb.load_data downloads ~80 MB on first run; some locked-down networks block
  the download. Verify connectivity before a lab session.
- Re-verify the Keras dataset API, the `adam` default, and notebook runtime each
  term — these drift.

RUBRIC MAPPING (four-category, applied in the Apply/Assess piece, not here)
- AI Partnership Quality — quality of the three-test agent probes.
- Problem-Solving Process — one controlled change run and re-tested (§10).
- Professional Communication — clear write-up / committed artifacts.
- Critical Thinking & Ethics — interpreting THEIR run's overfit point; documenting
  one moment of overruling the agent.

READING LEVEL: target ~10th grade. Sentences kept short; one new term introduced
at a time; the running review (review #0) threads sections 1, 8.
```
