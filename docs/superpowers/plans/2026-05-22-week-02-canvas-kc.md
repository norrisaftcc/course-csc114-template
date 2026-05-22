# Week 2 Canvas + Knowledge Check Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first Canvas-importable Knowledge Check and Canvas-paste-ready overview page for pilot Week 2 (Keras hello world), as a template for Weeks 1 and 3–8 in later PRs.

**Architecture:** Four artifacts in `planning/pilot_su26/week-02-keras-hello-world/`: a Canvas overview HTML page (paste into Canvas's HTML editor), a text2qti markdown source file (the quiz), the generated QTI 1.2 zip (Canvas Classic Quizzes import), and instructor build notes. Authored on a feature branch (`week-02-canvas-kc`) off `main`, opened as a PR. We eat our own dog food — this PR uses the same Sacred Flow we teach.

**Tech Stack:** Plain HTML/CSS (inline styles only, Canvas-safe), Markdown (text2qti dialect), text2qti CLI (Python tool requiring pandoc), git/gh CLI.

**Spec reference:** `docs/superpowers/specs/2026-05-22-week-02-canvas-kc-design.md`

---

## File Structure

| Path | Responsibility | Status |
|---|---|---|
| `planning/pilot_su26/week-02-keras-hello-world/canvas-page.html` | Paste-into-Canvas overview page for Week 2. Inline CSS only (Canvas strips external styles). Visual structure follows `planning/csc_dash/CSC-114/canvas-html/Module_01_Canvas_Page.html`; content rewritten for pilot Week 2. | Create |
| `planning/pilot_su26/week-02-keras-hello-world/knowledge-check.md` | text2qti source — 13 questions (8 technical + 5 process). Hybrid retrofit of csc_dash M01 KC per spec. | Create |
| `planning/pilot_su26/week-02-keras-hello-world/knowledge-check.zip` | Generated QTI 1.2 package. Output of `text2qti knowledge-check.md`. Committed alongside source. | Create (generated) |
| `planning/pilot_su26/week-02-keras-hello-world/canvas-build-notes.md` | Instructor-facing notes: text2qti install, rebuild command, Canvas import steps. | Create |

No existing files modified.

---

## Task 1: Set up branch and GitHub issue

**Files:** none yet

- [ ] **Step 1: Confirm clean working state on main**

Run:
```bash
git status && git branch --show-current
```
Expected: working tree clean, on branch `main`.

If not on `main`, run `git checkout main && git pull --ff-only` first.

- [ ] **Step 2: Create the feature branch**

Run:
```bash
git checkout -b week-02-canvas-kc
```
Expected: `Switched to a new branch 'week-02-canvas-kc'`.

- [ ] **Step 3: Open the GitHub issue**

Run:
```bash
gh issue create --title "Week 2 Canvas page + Knowledge Check (vertical slice)" --body "$(cat <<'EOF'
Build the first Canvas-importable Knowledge Check and Canvas-paste-ready overview page for pilot Week 2 (Keras hello world), as a template for Weeks 1 and 3–8 in later PRs.

**Scope (this issue):**
- `canvas-page.html` — Canvas overview page (paste into Canvas's HTML editor)
- `knowledge-check.md` — text2qti source, 13 questions (8 technical + 5 process)
- `knowledge-check.zip` — generated QTI 1.2 package (Canvas Classic Quizzes import)
- `canvas-build-notes.md` — instructor install/import notes

**Out of scope:** Weeks 1, 3–8 Canvas/KC artifacts; Canvas API automation; edits to `planning/csc_dash/` upstream sources.

**Spec:** `docs/superpowers/specs/2026-05-22-week-02-canvas-kc-design.md`

**Branch:** `week-02-canvas-kc` off `main`. PR will follow.
EOF
)"
```
Expected: prints the new issue URL. Capture the issue number from the URL.

- [ ] **Step 4: Note the issue number**

Set a shell var (or just note it for the eventual PR description):
```bash
ISSUE_NUM=<number-from-step-3>
echo "Issue: #$ISSUE_NUM"
```

- [ ] **Step 5: No commit yet** — Task 1 produces no files. Move to Task 2.

---

## Task 2: Install text2qti (and verify pandoc)

**Files:** none. This is environment setup; nothing in the repo changes.

- [ ] **Step 1: Verify pandoc is on PATH**

Run:
```bash
which pandoc && pandoc --version | head -1
```
Expected: prints a path (e.g., `/opt/homebrew/bin/pandoc`) and a version line. text2qti uses pandoc to render question stems that include markdown formatting.

If pandoc is missing on macOS: `brew install pandoc`. On Linux: `sudo apt-get install pandoc`.

- [ ] **Step 2: Install text2qti for the current user**

Run:
```bash
python3 -m pip install --user text2qti
```
Expected: installation completes; `text2qti` ends up in `~/Library/Python/3.X/bin/` (macOS) or `~/.local/bin/` (Linux).

- [ ] **Step 3: Verify text2qti is callable**

Run:
```bash
python3 -m text2qti --version
```
Expected: prints a version number (e.g., `text2qti 0.7.1`). If the `text2qti` command isn't on PATH but `python3 -m text2qti` works, that's fine — we'll use the `python3 -m` form throughout.

- [ ] **Step 4: No commit** — environment-only changes.

---

## Task 3: Author `canvas-page.html`

**Files:**
- Create: `planning/pilot_su26/week-02-keras-hello-world/canvas-page.html`

- [ ] **Step 1: Create the file with the full Week 2 overview HTML**

Create `planning/pilot_su26/week-02-keras-hello-world/canvas-page.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 2: Keras Hello World</title>
    <style>
        /* Canvas-compatible CSS — inline only, no external stylesheets */
        .module-header {
            background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .module-header h1 { margin: 0 0 10px 0; font-size: 2.5em; font-weight: bold; }
        .module-meta { display: flex; gap: 20px; margin-top: 15px; font-size: 0.95em; flex-wrap: wrap; }
        .meta-item { background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 5px; }
        .content-section {
            background: #f8f9fa;
            border-left: 5px solid #1e88e5;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 5px;
        }
        .content-section h2 { color: #1e88e5; margin-top: 0; font-size: 1.8em; border-bottom: 2px solid #1e88e5; padding-bottom: 10px; }
        .learning-objectives { background: #e3f2fd; border-left: 5px solid #2196F3; padding: 20px; margin: 20px 0; }
        .learning-objectives ul { margin: 10px 0; padding-left: 25px; }
        .learning-objectives li { margin: 10px 0; line-height: 1.6; }
        .two-track-box {
            background: #f3e5f5;
            border: 2px solid #9c27b0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .two-track-box h4 { margin-top: 0; color: #7b1fa2; font-size: 1.3em; }
        .two-track-box table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .two-track-box th, .two-track-box td { padding: 10px; text-align: left; border-bottom: 1px solid #ce93d8; vertical-align: top; }
        .two-track-box th { background: #ce93d8; color: #4a148c; }
        .assignment-card {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .assignment-card h3 { color: #1e88e5; margin-top: 0; font-size: 1.4em; }
        .button-primary {
            background: #1e88e5; color: white; padding: 12px 25px; border-radius: 6px;
            text-decoration: none; display: inline-block; margin: 10px 10px 10px 0; font-weight: bold;
        }
        .button-primary:hover { background: #1565c0; color: white; text-decoration: none; }
        .button-secondary {
            background: #6c757d; color: white; padding: 12px 25px; border-radius: 6px;
            text-decoration: none; display: inline-block; margin: 10px 10px 10px 0; font-weight: bold;
        }
        .checklist { background: #fff3e0; border-left: 5px solid #ff9800; padding: 20px; margin: 20px 0; }
        .checklist h3 { margin-top: 0; color: #e65100; }
        .checklist ul { list-style: none; padding-left: 0; }
        .checklist li { padding: 8px 0; border-bottom: 1px solid #ffcc80; }
        .checklist li:before { content: "☐ "; font-size: 1.2em; margin-right: 10px; color: #ff9800; }
        .tip-box { background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .tip-box h4 { margin-top: 0; color: #2e7d32; font-size: 1.3em; }
        @media print {
            .button-primary, .button-secondary { display: none; }
            .module-header, .assignment-card { break-inside: avoid; }
        }
    </style>
</head>
<body>

<div class="module-header">
    <h1>Week 2: Keras Hello World</h1>
    <p style="font-size: 1.2em; margin: 10px 0;">From "what is an agent" to "what is a neural network." This week you train a real model, and you set up the workflow you'll use for the rest of the term.</p>
    <div class="module-meta">
        <div class="meta-item">Duration: 1 week</div>
        <div class="meta-item">Reading: Manning Ch 1 + Ch 4 §1–2</div>
        <div class="meta-item">Due: End of Week 2, before Monday of Week 3</div>
    </div>
</div>

<!-- Learning Outcomes -->
<div class="learning-objectives">
    <h2>Learning Outcomes</h2>
    <p><strong>By Friday of Week 2, you can:</strong></p>
    <ul>
        <li><strong>Explain</strong> what a neural network is at the "tensors flow through layers and weights update" level — the mechanics, not the math.</li>
        <li><strong>Load</strong> a standard dataset (MNIST) via Keras.</li>
        <li><strong>Build</strong> a minimal <code>Sequential</code> model and train it with <code>.fit()</code>.</li>
        <li><strong>Read</strong> a training curve and identify whether your model is underfit, overfit, or just-right.</li>
        <li><strong>Write up</strong> a baseline metric + one paragraph of error analysis.</li>
    </ul>
</div>

<!-- What changes from Week 1 -->
<div class="content-section">
    <h2>What changes from Week 1</h2>
    <p>Two things, and they matter:</p>
    <ol>
        <li><strong>Sacred Flow starts for the Code Builders track.</strong> Issue → branch → PR → merge becomes the way Code Builders submit work. Prompt Masters keep submitting by drop. We split tracks here so students without a CSC-113 ramp-up aren't drowning in <code>git</code> on Day 8 of the course.</li>
        <li><strong>Textbook reading is now real.</strong> Before Meeting A, skim Manning Ch 1; before Meeting B, Ch 4 §1–2. We're not going to lecture the textbook back to you in class.</li>
    </ol>
</div>

<!-- Two-Track Expectations -->
<div class="two-track-box">
    <h4>Two-Track Expectations This Week</h4>
    <p>Same artifact, two paths. Both tracks earn identical points on the artifact. Code Builders earn process credit for the issue/PR/retro on top.</p>
    <table>
        <thead>
            <tr><th>Track</th><th>How you submit</th><th>Process artifacts</th></tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Code Builders</strong></td>
                <td>Open a GitHub Issue (<code>Week 2 spike: &lt;your one-line description&gt;</code>) → branch off <code>main</code> named <code>week2-yourname</code> → commit notebook + write-up → open PR → request review → merge after at least one comment. PR description contains a 1-paragraph <strong>retro</strong>.</td>
                <td>Issue + branch + PR + retro</td>
            </tr>
            <tr>
                <td><strong>Prompt Masters</strong></td>
                <td>Add the notebook + write-up to your repo via GitHub Desktop or the web "add file" button.</td>
                <td>None — just the artifact</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- What you do this week -->
<div class="content-section">
    <h2>What You Do This Week</h2>

    <div class="assignment-card">
        <h3>1. Learn — Manning Ch 1 + Ch 4 framing</h3>
        <p>Read before Meeting A. Concepts: what deep learning is, where it fits, the classification/regression framing. Low-stakes.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View learn.md</a>
    </div>

    <div class="assignment-card">
        <h3>2. Practice — Hello, training loop</h3>
        <p>Retry-OK lab. Load MNIST, build a <code>Sequential</code> model, <code>.fit()</code>, look at the loss curve. Goal: a working end-to-end training loop.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View practice.md</a>
    </div>

    <div class="assignment-card">
        <h3>3. Apply — Your first spike prototype</h3>
        <p>One narrow experiment off your practice notebook. Change one thing, measure the difference, write a baseline + 1-paragraph error analysis.</p>
        <a href="/courses/[COURSE_ID]/files/[FILE_ID]" class="button-secondary">View apply.md</a>
    </div>

    <div class="assignment-card">
        <h3>4. Assess — What you submit (by track)</h3>
        <p>Graded; stakes are starting to rise but still forgiving. Two submission paths depending on track — see Two-Track Expectations above.</p>
        <a href="/courses/[COURSE_ID]/assignments/[ASSIGNMENT_ID]" class="button-primary">View Assess Details</a>
    </div>

    <div class="assignment-card">
        <h3>5. Knowledge Check — Vocabulary calibration</h3>
        <p>13-question multiple choice quiz on Manning Ch 1 + Ch 4 vocabulary and the two-track Sacred Flow workflow. <strong>Unlimited attempts.</strong> Use it as a learning tool — try, read the explanation, retry.</p>
        <a href="/courses/[COURSE_ID]/quizzes/[QUIZ_ID]" class="button-primary">Take the Knowledge Check</a>
    </div>
</div>

<!-- Code Preview -->
<div class="content-section">
    <h2>Week 2 Code Preview</h2>
    <p>Here's what your first Keras model will look like:</p>
    <pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 5px; overflow-x: auto;">
<code>from tensorflow import keras
from tensorflow.keras import layers

# Load MNIST: 60k training images, 10k test images, 28x28 grayscale digits 0-9
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0   # scale pixel values to [0, 1]

# Build a minimal Sequential model: flatten the image, then two dense layers
model = keras.Sequential([
    layers.Flatten(input_shape=(28, 28)),
    layers.Dense(128, activation="relu"),
    layers.Dense(10, activation="softmax"),
])

# Configure the training recipe: loss, optimizer, what to track
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)

# Train for a handful of epochs and evaluate on the held-out test set
model.fit(x_train, y_train, epochs=5)
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_acc:.3f}")</code>
</pre>
    <p><strong>Expected output:</strong> ~98% test accuracy after 5 epochs. That's the baseline you'll improve on in Apply.</p>
</div>

<!-- Checklist -->
<div class="checklist">
    <h3>Week 2 Completion Checklist</h3>
    <ul>
        <li>Read Manning Ch 1 before Meeting A</li>
        <li>Read Manning Ch 4 §1–2 before Meeting B</li>
        <li>Run the Hello-Keras notebook end-to-end (MNIST loads, model trains, accuracy prints)</li>
        <li>Pick a spike experiment (one variable changed from baseline)</li>
        <li>Write the spike report (baseline number, your change, what changed, 1-paragraph error analysis)</li>
        <li><strong>Code Builders:</strong> issue opened, branch created, PR opened with retro paragraph</li>
        <li><strong>Prompt Masters:</strong> files dropped into your repo</li>
        <li>Take the Knowledge Check (unlimited attempts — use it as a learning tool)</li>
    </ul>
</div>

<!-- Tips -->
<div class="tip-box">
    <h4>Senpai's Tips for Week 2</h4>
    <ul>
        <li><strong>If your environment isn't ready, fix that first.</strong> Don't try to learn Keras and fight pip at the same time. The Sacred Flow Lab from CSC-113 has detailed setup instructions.</li>
        <li><strong>Google Colab is a legitimate path.</strong> Free GPU, zero local setup, Keras pre-installed. Use it if your laptop is fighting you.</li>
        <li><strong>One variable at a time in your spike.</strong> Change the optimizer OR the layer count OR the learning rate — not all three. You can't learn what changed the result if you change five things at once.</li>
        <li><strong>Read the training curve before you write the analysis.</strong> If loss is dropping smoothly and accuracy is climbing, the model is learning. If loss is flat or oscillating, something's wrong before you ever evaluate.</li>
        <li><strong>Retros are short and honest.</strong> "Everything was new" is not a retro. "I expected SGD to be slow but it actually beat Adam on this dataset" is a retro.</li>
    </ul>
</div>

<!-- Senpai's Note -->
<div class="content-section" style="background: #fff8e1; border-left-color: #fbc02d;">
    <h2 style="color: #f57f17;">Senpai's Note</h2>
    <p style="font-size: 1.1em; line-height: 1.6;">
        Welcome to your first real neural network. The Hello-Keras notebook is intentionally small — we're not chasing accuracy this week, we're chasing the <em>shape</em> of the workflow. You load data. You build a model. You train it. You look at numbers. You change one thing. You look at numbers again. That loop is everything in this field.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6;">
        If you're a Code Builder: Sacred Flow lands this week. It will feel like overhead until it doesn't. Open the issue <em>before</em> you start — that one habit is worth more than the rest of the workflow combined.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6;">
        If you're a Prompt Master: stay focused on the artifact. The point of your track is to keep the friction low so you can spend your energy on the AI work. We'll add workflow tools later if and when they earn their keep for you.
    </p>
</div>

</body>
</html>
```

- [ ] **Step 2: Verify the HTML renders**

Open the file in a browser:
```bash
open planning/pilot_su26/week-02-keras-hello-world/canvas-page.html
```
Expected: a single-page overview with header, learning outcomes, two-track table, what-you-do cards, code block, checklist, tips, and Senpai's Note. No broken layout, no obvious typos. The `[COURSE_ID]`, `[FILE_ID]`, `[ASSIGNMENT_ID]`, `[QUIZ_ID]` placeholders are in `href` attributes only (expected — instructor will replace at Canvas import time).

- [ ] **Step 3: Commit**

```bash
git add planning/pilot_su26/week-02-keras-hello-world/canvas-page.html
git commit -m "$(cat <<'EOF'
Add Week 2 Canvas overview page

Paste-into-Canvas HTML page for the pilot Week 2 overview (Keras hello
world). Visual structure from csc_dash Module 01 Canvas page; content
rewritten for Manning Ch 1+4, Keras-MNIST, two-track Sacred Flow.
Inline CSS only. Canvas placeholders left intact ([COURSE_ID] etc.).
EOF
)"
```
Expected: commit succeeds.

---

## Task 4: Author `knowledge-check.md` (text2qti source)

**Files:**
- Create: `planning/pilot_su26/week-02-keras-hello-world/knowledge-check.md`

- [ ] **Step 1: Create the file with the full quiz source**

Create `planning/pilot_su26/week-02-keras-hello-world/knowledge-check.md` with this exact content. The format is text2qti's markdown dialect: `Quiz title:` and `Quiz description:` at the top, then numbered questions with `*` marking the correct answer and `...` introducing the per-question explanation.

```markdown
Quiz title: Week 2 Knowledge Check — Keras Hello World
Quiz description: Vocabulary check for Manning Ch 1 + Ch 4 and the two-track Sacred Flow workflow. Unlimited attempts; the goal is mastery, not test-taking. Read the explanations on anything you miss.


1.  What does it mean for a problem to be "supervised learning"?
*a) The training data includes both inputs and known correct outputs.
b)  A human watches the model as it trains.
c)  The model only works with labeled images.
d)  The model requires constant human intervention during inference.
... "Supervised" describes the data, not the process. You have examples with answers, and the model learns to map inputs to outputs by minimizing how often it gets those answers wrong. There's no human babysitting required during training — you set up the data and the loss function and let the optimizer do the work. The opposite, unsupervised learning, has no answer key, so the model has to find structure on its own.


2.  You're building a model to predict the price of a used car from its mileage, year, and make. What kind of problem is this?
a)  Classification — the categories are price brackets.
*b) Regression — the output is a continuous number.
c)  Clustering — you're grouping similar cars together.
d)  Reinforcement learning — the model gets rewarded for accurate prices.
... Price is a continuous value (you could output $11,247.83, not just "high/medium/low"), so this is regression. Classification predicts a category from a fixed set. The clue is always "what does the output look like?" — if it's a number on a number line, regression; if it's one of N labels, classification.


3.  After training a model, you want to know how well it will work on new data it has never seen. What's the most reliable way to estimate that?
a)  Check accuracy on the training data — if it's high, the model is good.
*b) Hold out a portion of your data before training, never let the model see it, and evaluate on that held-out set.
c)  Make predictions on the same data you trained on, but only use the first half.
d)  Train the model twice and compare the two scores.
... A model that has seen data during training has effectively memorized it — accuracy on training data is wildly optimistic. The held-out test set is your reality check: it estimates how the model will behave on data it has never seen, which is the only thing that matters in production. Never train on your test set, and don't even peek at it more than you need to, or you'll start (consciously or not) tuning to its quirks.


4.  Keras models accept training data as NumPy arrays. What does NumPy give you that makes it the standard choice here?
a)  A drop-in replacement for pandas DataFrames.
*b) Fast numerical operations on multi-dimensional arrays — vectorized math without Python loops.
c)  Automatic GPU acceleration for all numerical code.
d)  Built-in machine learning algorithms.
... NumPy's superpower is the ndarray — a homogeneous, fixed-size array that supports vectorized operations. Math that would be a slow Python loop runs in optimized C/Fortran underneath. Every modern ML library (Keras, PyTorch, scikit-learn, pandas) is built on top of or interoperates with NumPy. GPU acceleration comes from TensorFlow/PyTorch tensors, not NumPy itself.


5.  You have a CSV with 50,000 rows of patient records (age, weight, lab results, diagnosis). Which Python tool is purpose-built for working with this kind of tabular data before you feed it to a model?
a)  NumPy arrays — for the speed.
*b) A pandas DataFrame.
c)  A Python dictionary keyed by patient ID.
d)  Raw CSV text manipulated with string methods.
... pandas DataFrames are the standard for tabular data — rows, named columns, mixed types, easy filtering, missing-value handling, fast CSV loading. NumPy arrays are great for the numeric tensor you'll eventually pass to Keras, but DataFrames are where you prepare that tensor — clean the data, drop rows, encode categories, then convert to NumPy at the very end with `.to_numpy()` or `.values`.


6.  According to Chollet's framing in Manning Ch 1, what most clearly distinguishes deep learning from earlier machine learning approaches?
a)  Deep learning is always more accurate than traditional ML.
b)  Deep learning only works on images and text.
*c) Deep learning learns its own representations of the data through stacked layers, instead of relying on hand-designed features.
d)  Deep learning runs on GPUs while traditional ML runs on CPUs.
... The headline of Ch 1 is representation learning. Traditional ML usually requires a human to design features — "from a raw image, compute these edge histograms, then feed them to a model." Deep learning learns useful representations directly from raw data by stacking layers, each one building a slightly more abstract representation of the input than the layer below it. That shift is what unlocked vision and language. Accuracy and hardware are downstream consequences, not the defining property.


7.  The first model you build in Keras uses MNIST. What is MNIST, and why is it the "hello world" of deep learning?
a)  A library that ships with TensorFlow.
*b) A small dataset of handwritten digit images, simple enough that a tiny network reaches >97% accuracy in seconds — making it ideal for sanity-checking that your training loop works.
c)  A benchmark for large language models.
d)  A new optimizer that replaces SGD.
... MNIST is 70,000 28x28 grayscale images of handwritten digits 0–9. It's small enough to fit in memory, simple enough that even a 2-layer dense network does well, and famous enough that you can compare your numbers against published baselines. Nobody runs MNIST to ship a product — they run it to confirm their environment, code, and intuitions all work before tackling a real problem.


8.  After you build a Keras Sequential model, you call `model.compile(...)`. What does `compile` configure?
a)  It converts your Python code to C++ for faster execution.
b)  It saves the model architecture to disk so you can load it later.
*c) The loss function (what to optimize), the optimizer (how to update weights), and the metrics (what to track during training).
d)  It allocates GPU memory for the model's weights.
... `compile()` is where you tell Keras the training recipe: what to measure (loss), how to improve (optimizer like SGD or Adam), and what to report alongside the loss (metrics like accuracy). It doesn't compile in the C-compiler sense — the name is historical. You can rebuild and recompile a model with different settings to experiment; it's a cheap operation.


9.  In CSC-114, students are split into two tracks: Code Builders and Prompt Masters. What's the difference between them?
a)  Code Builders write code; Prompt Masters only use natural-language prompts and never run code.
*b) Both tracks build the same artifacts, but Code Builders use full Sacred Flow (Issue → Branch → PR → Merge), while Prompt Masters submit by adding files to the repo via GitHub Desktop or the web upload button.
c)  Code Builders use Python; Prompt Masters use no-code tools.
d)  Code Builders are graded harder than Prompt Masters.
... The two tracks earn identical points on the artifact — the notebook, the write-up, whatever the deliverable is. The difference is in how they submit. Code Builders practice the professional workflow (issue, branch, PR, retro) and earn process credit on top. Prompt Masters keep the friction low and focus on the AI craft. Both are valid success paths in this course.


10. A Code Builder is starting work on this week's spike. In which order should they do these Sacred Flow steps?
a)  Branch → Commit → Open Issue → Merge → Open PR
b)  Commit → Open Issue → Branch → Open PR → Merge
*c) Open Issue → Branch → Commit → Open PR → Merge
d)  Open PR → Branch → Open Issue → Commit → Merge
... Sacred Flow has a deliberate order. The issue comes first — it states what you're about to do and why, before any code exists. The branch gives you a safe place to work. Commits land incrementally as you work. The PR opens once the work is presentable. Merge happens after review. Doing these out of order — especially opening the issue after the work is already done — defeats the point. Sacred Flow is a thinking tool, not a paperwork tool.


11. For Code Builders, the PR description ends with a 1-paragraph retrospective ("what worked / what surprised me / what I'd do differently"). What's the purpose of this retro?
a)  It tells the instructor whether to pass or fail the assignment.
*b) It forces a brief reflection on the process while the experience is still fresh — which is where most of the learning actually sticks.
c)  It's a length requirement that proves you read the assignment.
d)  It replaces the technical write-up.
... The artifact (notebook, write-up) is what you built. The retro is how it went. A real retro answers questions you wouldn't otherwise stop to ask: which part took longer than expected? what surprised you? what would you do differently next time? Three sentences of honest reflection while it's fresh is worth more than ten sentences written a month later. This is also a real-world skill — every functioning engineering team retros somehow.


12. For Code Builders, the Week 2 instructions say to open the GitHub issue *before* you start your spike, not after it's done. Why?
a)  Canvas requires the issue to be created on a specific date.
b)  The issue counts toward the points only if it has the earliest timestamp.
*c) The issue is supposed to state what you intend to try and why — writing it after the work already happened turns it into a status report, not a plan, and skips the thinking step the workflow is designed to create.
d)  You can't open a branch until an issue exists.
... The issue is your statement of intent. "I'm going to swap the optimizer from SGD to Adam because I want to see if it converges faster" is a hypothesis you can test. Writing that same sentence after the work is already finished is just narration — you've skipped the part where you decided what to learn. This question is most relevant to Code Builders; Prompt Masters skip Sacred Flow entirely.


13. This Knowledge Check (and others like it) allows unlimited attempts. What's the main reason for that?
a)  To make grades higher than they otherwise would be.
b)  Because the quiz is easy and one attempt is enough.
*c) To make the quiz a learning tool — you can try, read the explanation when you miss something, look it up, and try again — rather than a one-shot assessment.
d)  Because the instructor doesn't have time to grade re-takes.
... Knowledge checks here are calibration, not gating. If you miss a question, the explanation tells you exactly what was being asked and why your answer was off — go back to the reading, fix the gap, and retake. That loop (try, fail, learn, retry) is what builds understanding. Save the test anxiety for assessments that actually need it; here, your goal is mastery, not test-taking.
```

- [ ] **Step 2: Verify the source parses with text2qti (dry run)**

Run from inside the week folder:
```bash
cd planning/pilot_su26/week-02-keras-hello-world && python3 -m text2qti --solutions knowledge-check.md && cd -
```
Expected: text2qti emits two files: `knowledge-check.zip` (the QTI package) and `knowledge-check_solutions.html` (a human-readable answer key — useful but we won't commit it). No errors. If parsing fails, fix the source — common issues are missing blank lines between questions or incorrect `*a)` formatting.

Note: this step generates `knowledge-check.zip`. We're using it to validate parsing; Task 5 is where we formalize the build.

- [ ] **Step 3: Remove the dry-run artifacts (Task 5 will produce the committed zip)**

```bash
rm planning/pilot_su26/week-02-keras-hello-world/knowledge-check.zip
rm -f planning/pilot_su26/week-02-keras-hello-world/knowledge-check_solutions.html
```

- [ ] **Step 4: Commit the source**

```bash
git add planning/pilot_su26/week-02-keras-hello-world/knowledge-check.md
git commit -m "$(cat <<'EOF'
Add Week 2 Knowledge Check (text2qti source)

13 questions: 8 technical (Manning Ch 1+4 vocabulary — supervised
learning, regression vs classification, held-out test data, NumPy,
pandas, deep learning vs traditional ML, MNIST, model.compile) + 5
process (two-track distinction, Sacred Flow order, retro purpose,
issue-first discipline, unlimited attempts pedagogy). Hybrid retrofit
of csc_dash Module 01 KC.
EOF
)"
```

---

## Task 5: Generate and commit `knowledge-check.zip`

**Files:**
- Create: `planning/pilot_su26/week-02-keras-hello-world/knowledge-check.zip`

- [ ] **Step 1: Build the QTI zip**

```bash
cd planning/pilot_su26/week-02-keras-hello-world && python3 -m text2qti knowledge-check.md && cd -
```
Expected: text2qti writes `knowledge-check.zip` (and `knowledge-check_solutions.html` — we ignore it). Exit code 0. The zip should be roughly 10–30 KB.

- [ ] **Step 2: Verify the zip is a valid QTI package**

```bash
unzip -l planning/pilot_su26/week-02-keras-hello-world/knowledge-check.zip
```
Expected: lists files like `imsmanifest.xml` and an assessment XML inside an items folder. If unzip reports the file is not a zip archive, something went wrong with text2qti — re-run Step 1.

- [ ] **Step 3: Make sure the solutions HTML isn't tracked**

The solutions HTML is useful for proofreading but shouldn't ship to students via the repo. Either delete it locally or add to `.gitignore`. For now, delete it:
```bash
rm -f planning/pilot_su26/week-02-keras-hello-world/knowledge-check_solutions.html
```

- [ ] **Step 4: Commit the generated zip**

```bash
git add planning/pilot_su26/week-02-keras-hello-world/knowledge-check.zip
git commit -m "$(cat <<'EOF'
Generate Week 2 Knowledge Check QTI zip

Output of `python3 -m text2qti knowledge-check.md`. Canvas Classic
Quizzes import accepts this directly. Committed alongside source so
instructors can import without installing text2qti first.
EOF
)"
```

---

## Task 6: Author `canvas-build-notes.md`

**Files:**
- Create: `planning/pilot_su26/week-02-keras-hello-world/canvas-build-notes.md`

- [ ] **Step 1: Create the file with instructor notes**

Create `planning/pilot_su26/week-02-keras-hello-world/canvas-build-notes.md` with this exact content:

````markdown
# Canvas build notes — Week 2

How to import this week's Knowledge Check and overview page into Canvas, and how to rebuild the quiz import file if the source changes.

This file is for **instructors**, not students.

---

## Files in this folder

| File | What it is | What to do with it |
|---|---|---|
| `canvas-page.html` | Paste-into-Canvas overview page for Week 2. | See "Import the overview page" below. |
| `knowledge-check.md` | text2qti source for the 13-question Knowledge Check. | Edit when questions need to change; rebuild the zip. |
| `knowledge-check.zip` | Generated QTI 1.2 package. | Import into Canvas Classic Quizzes. |

The `.zip` is rebuilt from the `.md`. The `.md` is the source of truth; if you find a typo or want to change a question, edit the `.md` and rebuild.

---

## Import the Knowledge Check (QTI zip → Canvas Classic Quiz)

1. In your Canvas course, go to **Settings → Import Course Content**.
2. **Content Type:** "QTI .zip file".
3. **Source:** upload `knowledge-check.zip`.
4. Leave "Default Question Bank" empty (the import creates its own).
5. Click **Import**. The import shows up under the "Current Jobs" section — wait until it says "Completed".
6. The new quiz appears under **Quizzes → All Quizzes** (Classic Quizzes section). It is **unpublished** by default. Open it, set point values and a due date if needed, then **Publish**.
7. **Capture the quiz ID** from the URL (`.../courses/<COURSE_ID>/quizzes/<QUIZ_ID>`). You'll need it when importing the overview page.

> **About New Quizzes:** Canvas's newer "New Quizzes" engine uses QTI 2.1, not 1.2. text2qti currently produces 1.2, which lands in Classic Quizzes. If your institution has fully migrated to New Quizzes, use Canvas's "Migrate" tool inside Quizzes to convert the imported Classic Quiz, or recreate the quiz manually with the source markdown as a reference.

---

## Import the overview page (HTML → Canvas Page)

1. In Canvas, go to **Pages → + Page**.
2. Title it: `Week 2 — Keras Hello World` (or whatever your course's naming convention is).
3. Switch the editor to **HTML view** (the `<>` icon, sometimes labeled "HTML Editor").
4. Open `canvas-page.html` in a text editor, **select all**, copy.
5. Paste into the Canvas HTML editor. Switch back to rich text view to confirm the layout looks right.
6. **Replace placeholders.** Search the page for these tokens and swap each one:
   - `[COURSE_ID]` → your course's numeric Canvas ID (visible in any Canvas URL).
   - `[ASSIGNMENT_ID]` → the numeric ID of the Week 2 Assess assignment (after you create it).
   - `[FILE_ID]` → the numeric ID of any uploaded files (e.g., learn.md, practice.md, apply.md uploaded to Canvas Files). If you'd rather link to the GitHub source, replace with a direct GitHub URL instead.
   - `[QUIZ_ID]` → the quiz ID you captured from the import step above.
7. **Save & Publish** the page.

---

## Rebuild the quiz zip when the source changes

If you edit `knowledge-check.md` (fixing a typo, swapping a question, rewording an explanation), regenerate the zip:

```bash
cd planning/pilot_su26/week-02-keras-hello-world
python3 -m text2qti knowledge-check.md
```

Outputs:
- `knowledge-check.zip` — the new QTI package (overwrites the previous one).
- `knowledge-check_solutions.html` — a human-readable answer key. **Do not commit this** — it's reviewer-only.

Commit the new `.zip` alongside the `.md` change:

```bash
git add knowledge-check.md knowledge-check.zip
git commit -m "rebuild Week 2 KC: <what changed>"
```

When you re-import the zip into Canvas, Canvas treats it as a **new quiz** by default — the old quiz is not updated in place. Either delete the old quiz first, or accept the duplicate and unpublish the old one. There is no clean "update existing quiz from QTI" path in Classic Quizzes; this is a Canvas limitation.

---

## Install / dependencies

text2qti is a Python package that requires pandoc on PATH.

```bash
# pandoc (one time)
brew install pandoc           # macOS
# sudo apt-get install pandoc # Linux

# text2qti
python3 -m pip install --user text2qti
python3 -m text2qti --version
```

If `python3 -m text2qti --version` prints a version, you're set.

---

## Troubleshooting

- **`text2qti` fails to parse the source.** Most common cause: missing blank lines between questions, or a question that doesn't start with a number and a dot (`1.`, `2.`, etc.). Check the file's exact formatting against a known-good question in `knowledge-check.md`.
- **`pandoc not found`** at build time: install pandoc (see above). text2qti uses pandoc to render markdown inside question stems.
- **Canvas import says "no questions found".** Canvas occasionally rejects QTI zips that contain a `__MACOSX/` folder. text2qti shouldn't produce one, but if you find one in the zip (`unzip -l knowledge-check.zip`), regenerate the zip from a non-macOS environment or remove the folder with `zip -d`.
- **Imported quiz has questions but no points.** That's expected — set point values in Canvas after import. text2qti doesn't specify points per question.
````

- [ ] **Step 2: Commit**

```bash
git add planning/pilot_su26/week-02-keras-hello-world/canvas-build-notes.md
git commit -m "$(cat <<'EOF'
Add canvas-build-notes for Week 2

Instructor-facing notes: how to import the overview HTML and the
QTI Knowledge Check into Canvas, how to rebuild the zip when the
source changes, and the install/troubleshooting reference.
EOF
)"
```

---

## Task 7: Push branch and open the PR

**Files:** none (PR metadata only)

- [ ] **Step 1: Push the branch to origin**

```bash
git push -u origin week-02-canvas-kc
```
Expected: branch pushed; remote tracking set.

- [ ] **Step 2: Open the PR with the Sacred Flow retro paragraph**

Run (substitute the issue number from Task 1 Step 4):
```bash
gh pr create --base main --head week-02-canvas-kc --title "Week 2 Canvas page + Knowledge Check (vertical slice)" --body "$(cat <<'EOF'
Closes #ISSUE_NUM

## Summary

First Canvas-importable Knowledge Check + Canvas-paste-ready overview page for pilot Week 2 (Keras hello world). Establishes the template that Weeks 1 and 3–8 will follow in later PRs.

**Artifacts (all in `planning/pilot_su26/week-02-keras-hello-world/`):**

- `canvas-page.html` — Canvas overview page. Inline CSS, paste-into-Canvas via HTML editor.
- `knowledge-check.md` — text2qti source, 13 questions (8 technical + 5 process). Hybrid retrofit of csc_dash Module 01 KC per the design spec.
- `knowledge-check.zip` — generated QTI 1.2 package. Imports into Canvas Classic Quizzes.
- `canvas-build-notes.md` — install/rebuild/import notes for instructors.

**Spec:** `docs/superpowers/specs/2026-05-22-week-02-canvas-kc-design.md`

## Test plan

- [ ] Open `canvas-page.html` in a browser — layout renders, no broken sections, Canvas placeholders visible only in `href` attributes.
- [ ] `unzip -l knowledge-check.zip` lists `imsmanifest.xml` and an assessment XML.
- [ ] Walk through `canvas-build-notes.md` mentally: do the install + import steps make sense without consulting other docs?
- [ ] Optional follow-up (post-merge): actually import the zip into a Canvas sandbox to verify autograding and explanations land cleanly.

## Retro

**What worked:** Vertical-slice scope kept the PR reviewable. text2qti's markdown dialect is close enough to the csc_dash KC format that the hybrid retrofit fit naturally — kept the universally-true questions, swapped sklearn-specific framing for Keras Ch 1+4 vocabulary, replaced Scrum PM questions with Sacred Flow process questions.

**What surprised me:** How much of csc_dash Module 01's content was actually still relevant — supervised learning, regression vs classification, why-hold-out-test-data, NumPy, pandas. Only ~3 of the 8 technical questions needed full rewrites for Keras. The "PM Concepts" section, on the other hand, needed a full replacement — the Scrum vocabulary doesn't fit the compressed pilot.

**What I'd do differently next time:** Confirm the base branch and any in-progress feature branches earlier — there was a brief ambiguity about whether to branch off `main` or off `pilot-weeks-3-5`. Resolved cleanly (off `main`), but worth a 30-second check before the spec is written next time.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**Important:** Before pasting the above, replace `ISSUE_NUM` with the actual issue number captured in Task 1 Step 4.

Expected: `gh pr create` returns the PR URL. Capture and share it.

- [ ] **Step 3: Verify the PR landed correctly**

Run:
```bash
gh pr view --web
```
Expected: opens the PR in the browser. Confirm: title is correct, body contains the retro paragraph, issue is linked via `Closes #...`, and the four artifacts are listed in the Files Changed tab.

- [ ] **Step 4: (Self-)review and merge decision**

Self-review: look at each file in the Files Changed tab. Check:
- HTML page renders correctly when previewed
- KC source has 13 questions, exactly one `*` per question, no stray `*` in distractor text
- Zip is committed and is a binary blob (not a tracked unzipped folder)
- Build notes mention pandoc, install command, both import flows, rebuild command, and at least one troubleshooting entry

If anything looks off, fix on the branch with another commit (don't amend — repo policy is new commits over amends).

If everything looks good, the merge decision is the human's, not the agent's — **do not merge automatically**. Report the PR URL and stop. The user merges (or requests changes) explicitly.

---

## Self-Review Pass

Before declaring this plan complete, the planner ran through these checks:

**Spec coverage:**
- ✅ Four artifacts in the right folder (Tasks 3, 4, 5, 6)
- ✅ Hybrid retrofit content table from the spec → reflected exactly in Task 4's question content
- ✅ text2qti tooling (Task 2) + rebuild flow (Task 5 + build notes Task 6)
- ✅ Sacred Flow for the PR itself (Tasks 1, 7) — issue → branch → commits → PR → retro
- ✅ Open-item from the spec (base branch) resolved in spec edit before plan-writing (off `main`)
- ✅ Risks called out — Classic vs New Quizzes addressed in build notes; Q12 phrased "For Code Builders, why..."; inline CSS only

**Placeholder scan:**
- No `TBD`/`TODO`/`fill in` strings in steps that the engineer must execute
- Every code/content step has the full content embedded
- `ISSUE_NUM` is a known placeholder, called out explicitly with substitution instruction
- `[COURSE_ID]`/`[ASSIGNMENT_ID]`/`[FILE_ID]`/`[QUIZ_ID]` in `canvas-page.html` are intentional — they're the *instructor's* placeholders to substitute at Canvas import time, documented in the build notes

**Type consistency:**
- All four file names consistent across tasks
- text2qti CLI form consistent (`python3 -m text2qti`)
- Branch name consistent (`week-02-canvas-kc`)
- Folder path consistent (`planning/pilot_su26/week-02-keras-hello-world/`)
