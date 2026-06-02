# Chapter 2 Instructor Plan: The Math Building Blocks of Neural Networks

*Deep Learning with Python, 3rd ed. (Chollet), Chapter 2*

| Field | Value |
|-------|-------|
| Chapter | 2 — Tensors, tensor operations, gradients, SGD, backprop |
| Duration | 2 meetings, each a 2-hour block — **4 contact hours total** |
| Meeting structure | Hour 1 = Learn (lecture + live demo), Hour 2 = Practice/Apply (lab) |
| Platform | Google Colab (no local setup) or local Jupyter |
| Prerequisites | Students can run Python cells and read a `print` output |
| Graded artifact | One committed assignment due before the next chapter (see rubric) |
| Status | DRAFT |

---

## Where This Chapter Sits

This is the first chapter where students meet the actual machinery underneath the AI tools they have been using. Everything before this was *talking to* models. This is the first look *inside* one.

The chapter's own stance is the one we want to teach with: **runnable code is the clearest description of the math.** We do not lecture the calculus. We run small pieces of code, predict what they will do, and reconcile when we are wrong. That predict→run→reconcile loop is this chapter's version of the three-test protocol — same discipline, new subject.

The one thing students must leave believing: *they can read and reason about a neural network's data and training loop without already knowing calculus.*

---

## Learning Targets

By the end of Chapter 2, a student can:

1. **Read** a tensor's rank, shape, and dtype, and say in plain words what each means.
2. **Predict** the shape that results from slicing, batching, reshaping, and a simple broadcast — *before* running the code.
3. **Narrate** the training loop in order: predict → measure error → adjust weights → repeat.
4. **Explain** gradient, SGD, and backprop intuitively (slope; step downhill; chain rule backward) without formulas, and say in one breath *why* a deep stack of layers needs an activation function.
5. **Partner** with an AI assistant to learn a concept, and **catch** at least one place where the assistant oversimplified or was wrong.

Targets 1–4 are the content. Target 5 is what we grade hardest.

---

## How Learn–Practice–Apply–Assess Maps Across the Two Meetings

| Phase | Where it happens | What it looks like |
|-------|------------------|--------------------|
| **Learn** | Hour 1 of each meeting | Lecture + live demo. You model the predict→run→reconcile loop on screen. |
| **Practice** | Hour 2 of Meeting 1 | Students run the notebook's tensor cells, predicting each shape first. Low stakes, ungraded. |
| **Apply** | Hour 2 of Meeting 2 | Students change one thing in working code, predict the effect, observe, and partner with their AI to interpret the training loop. Still ungraded. |
| **Assess** | Homework, due before next chapter | The one rubric-graded deliverable: an explainer plus a "catch the AI" log, committed to GitHub. |

Only the final step is graded. Practice and Apply are where failure is exercise.

---

## The Calculus Vocabulary Policy

Use only these five words, always with the same plain meanings. Repeat them until they are boring.

- **Derivative** — slope. How fast the output changes when you nudge the input.
- **Gradient** — the slope for many parameters at once. A bundle of derivatives.
- **Learning rate** — step size. How big a nudge you take.
- **SGD** — the recipe: grab a batch, measure error, find the downhill direction, take a small step, repeat.
- **Backpropagation** — an efficient way to compute the gradient by working backward through the network. The framework does it for you.

If a student without calculus can repeat these five back, the chapter has landed. We are not deriving anything by hand.

---

## Meeting 1 — Tensors and Tensor Operations

### Hour 1: Learn (≈60 min)

| Time | Beat | Notes |
|------|------|-------|
| 0–10 | **Hook: what's inside the model** | Show MNIST digits. The task: turn a 28×28 grayscale image into one of 10 answers. Ask: "What's the input? What's the output? What would 'learning' even mean here?" |
| 10–25 | **Tensor = container of numbers** | Live: load MNIST, print `ndim`, `shape`, `dtype`. Translate out loud: "60,000 images, each 28 by 28, each pixel a whole number 0–255." Read shapes aloud as a habit. |
| 25–40 | **Slicing and the samples axis** | Live-slice `train_images[10:100]`. Before you press run, *predict the shape on the board.* Get it wrong on purpose once and reconcile. Introduce "axis 0 is usually the samples axis." |
| 40–55 | **The gears: element-wise, reshape, broadcast** | Same shape in, same shape out. Flatten one image 28×28 → 784. One broadcast demo: a small thing applied across a big thing. Keep broadcasting concrete, not rule-heavy. |
| 55–60 | **Set up the lab** | Point them at the notebook. The rule: answer every PREDICT before you run the cell next to it. |

**Model the loop, don't lecture it.** Every code cell on screen gets a prediction first. When you are wrong, say so and reconcile. That is the behavior the lab asks of them.

### Hour 2: Practice (≈60 min)

Students work the Meeting 1 section of the lab packet: inspect MNIST, slice, batch, reshape, and run one broadcast.

- **Circulate.** The stall point is the prediction step — students want to run first and read the shape after. Stop them. "Guess first. Being wrong is the point."
- **Watch for shape panic.** A wrong prediction reads as failure to anxious students. Reframe immediately: a wrong guess that gets reconciled is a *better* outcome than a lucky right guess.
- **Last 10 min — commit check.** Confirm their notebook and the short Meeting 1 reflection are committed before they leave.

---

## Meeting 2 — Gradients, SGD, Backprop, and the MNIST Revisit

### Hour 1: Learn (≈60 min)

| Time | Beat | Notes |
|------|------|-------|
| 0–10 | **Re-anchor** | "If the model is wrong, what should change?" Answer: the weights. That is all training does. |
| 10–25 | **Downhill intuition** | Tiny demo: plot `f(w) = w²`. Show that stepping opposite the slope walks you toward the bottom. Derivative = slope; gradient = many slopes. No formulas on the board. |
| 25–38 | **SGD as a five-line recipe** | Batch → predict → measure error → find downhill direction → small step → repeat. Define learning rate as step size. Ask: "What if the step is too big?" (Overshoot.) |
| 38–48 | **Backprop = chain rule, backward** | Networks are chains of simple operations. Each step has a known slope; combining them backward gives the gradient. The framework does this automatically — they never compute it by hand. |
| 48–58 | **Why depth needs a bend (the paper ball)** | A layer is just `relu(matmul(input, W) + b)` — multiply, add, then bend. Define `relu(x) = max(x, 0)`. The key idea (Chollet's): stack two plain layers with *no* bend and they collapse into one plain layer — a straight line in disguise. The paper-ball metaphor: two crumpled colored sheets (the classes); each layer makes one small uncrumpling move; `relu` is what lets a move *bend* instead of just slide. `softmax` at the end turns the final numbers into 10 probabilities that sum to 1. |
| 58–60 | **Set up the Apply lab** | Preview: they will label every piece of the real MNIST pipeline, run it, and watch it correctly call a digit. |

### Hour 2: Apply (≈60 min)

Students work the Meeting 2 section of the lab packet: the parabola demo, then the MNIST "looking back" pipeline where they label preprocessing, model, loss, optimizer, and fit, run it, use it to call a test digit, and meet overfitting.

- **The Apply move is the one-change rule.** Have them change exactly one thing (the learning rate, or batch size, or epochs), predict the effect, run, and reconcile. One change, one observation. No rewriting the whole cell.
- **Coach the interpretation, not the code.** The win is not "loss went down." It is "loss went down *because* we stepped downhill, repeatedly." Ask them to say why, not what.
- **Name the gap honestly.** When test accuracy comes in a hair below training accuracy, name it: that's overfitting, and it's normal. We meet it properly in a later chapter; for now they just need the word and the fact that models do worse on data they haven't seen.
- **Last 10 min — commit check.** Notebook and Meeting 2 reflection committed.

---

## Differentiation: Code Builders vs. Prompt Masters

The notebook is **identical** for both tracks — everyone predicts shapes and watches a training loop run. The divergence is in how much code they touch and what they produce.

- **Code Builders** fill in the blank code slots and run the one-change experiment by editing Python.
- **Prompt Masters** run the same pre-filled cells but spend their effort on *reading* and *predicting* shapes, and on driving their AI assistant to produce a genuinely clear explanation of the training loop. Their one-change experiment is done by asking the AI to change one variable and predict the effect, then verifying.

Both tracks finish able to narrate the loop. Neither track needs to write calculus.

---

## Predictable Failure Points (and what to say)

| What you'll see | What it really is | What to say |
|-----------------|-------------------|-------------|
| "I don't do math" | Fear, not inability | "We are not doing the math. We are reading slopes. You read a hill every time you walk." |
| Running before predicting | Skipping the loop | "Guess first. The guess is the learning. The run is just the answer key." |
| Treating a wrong prediction as failure | Misread of the exercise | "A wrong guess you reconcile beats a right guess you got lucky on." |
| Copy-pasting an AI explanation uncritically | The thing we grade against | "Good. Now find the one sentence it got lazy on. That's the assignment." |

---

## Assessment Posture

Practice and Apply are **formative** — reward presence and honest reconciliation, not correct first guesses. The graded artifact is the homework deliverable, mapped to the standard four-category rubric. For a first encounter with this material, keep expectations in the **Developing-to-Proficient** band. The student who confidently wrote "I'm not sure why this works, but here's what I observed and here's where I think the AI's explanation was too neat" is doing exactly what we want.

---

## If Meetings Are 75 Minutes, Not 2 Hours

*(Open scheduling question — adjust when confirmed.)*

Compress to three shorter meetings rather than cutting content: Meeting 1 = tensors + slicing; Meeting 2 = operations + the gradient demo; Meeting 3 = SGD/backprop + the MNIST revisit. The predict→run→reconcile loop is the part that must not be cut — it is the chapter's whole method.
