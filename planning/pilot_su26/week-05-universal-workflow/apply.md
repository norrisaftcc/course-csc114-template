# Apply — Project "problem framing" spike

**Slot:** Apply (hands-on, narrow scope — but this one has real stakes)
**Time:** ~90 minutes (longer than usual — this feeds your proposal)
**Goal:** By the end of this spike, you have a dataset, a task, a metric, an evaluation protocol, and a baseline model. These five things become your project proposal.

---

## This is different from previous spikes

Weeks 2–4 spikes were standalone experiments. This spike is the **foundation of your final project.** What you choose here carries through Weeks 6–8. Pick something you're genuinely interested in, because you'll be living with it.

## Step 1: Choose your project dataset and task

If you used your own dataset in Practice, keep going. If you used Fashion MNIST as practice, now switch to something you actually want to work on.

### Project ideas by track

**Vision projects (recommended — aligns with Week 6 transfer learning):**
- Classify images from a domain you care about (plants, cars, food, medical scans, satellite images)
- Distinguish real vs AI-generated images
- Classify hand gestures
- Sources: [Kaggle Datasets](https://www.kaggle.com/datasets), [TensorFlow Datasets](https://www.tensorflow.org/datasets)

**Text projects (aligns with Week 7 NLP):**
- Sentiment classification on product reviews
- Spam detection
- Topic classification on news articles
- Sources: [Hugging Face Datasets](https://huggingface.co/datasets), [Kaggle](https://www.kaggle.com/datasets)

**Tabular / time series projects:**
- Predict housing prices, stock direction, weather
- Classify patient outcomes, customer churn
- Sources: [UCI ML Repository](https://archive.ics.uci.edu/), [Kaggle](https://www.kaggle.com/datasets)

**Continuing your Cloud Agent (permitted — see `planning/legacy_csc113/# csc 114 planning.md`):**
- If you'd rather keep iterating on your Week 1 agent instead of training neural networks, that's an accepted success path.
- Your "baseline" is the agent's current performance on your test cases.
- Your "metric" is agent accuracy or user satisfaction on a defined test suite.
- You still write the proposal in the same format.

### What makes a good project for this course

- **Data is available now.** Don't pick a dataset you'll need to collect or label during Weeks 6–8.
- **The task is classification or regression.** Generative tasks (text generation, image generation) are covered in Week 8 but are too ambitious for a 3-week project.
- **A baseline is achievable this week.** If you can't get a weak model running by Friday, the scope is too big.
- **You're interested.** You'll be doing this for three more weeks.

## Step 2: Build your problem framing notebook

Create `week-05/project_framing.ipynb`. Walk Manning's universal workflow for your chosen project:

1. **Define the task** — what you're predicting, what the inputs are, classification vs regression.
2. **Load and explore the data** — shape, class balance (if classification), value distribution (if regression), sample examples.
3. **Choose your metric** — and justify why this metric (not just accuracy) is right for this task.
4. **Define your evaluation protocol** — train/val/test split, or k-fold, or whatever's appropriate.
5. **Build a baseline** — the simplest model. Record the baseline metric.
6. **(Optional) Try one improvement** — a slightly bigger model, or one obvious hyperparameter change. If you have time, start the overfit-then-regularize cycle.

## Step 3: Draft your proposal

Create `week-05/proposal_draft.md` (this becomes `project/proposal.md` for the assessment):

```markdown
# Project Proposal — [your project title]

## Task
[2–3 sentences. What are you predicting? What data are you using?
Classification or regression? How many classes / what's the output range?]

## Dataset
- **Source:** [URL or description]
- **Size:** [number of examples, train/test split]
- **Features:** [what the inputs look like — image size, text length, number of columns]
- **Class balance:** [balanced / imbalanced — if imbalanced, by how much?]

## Metric
- **Chosen metric:** [accuracy, F1-macro, RMSE, etc.]
- **Why this metric:** [1–2 sentences. Connect to the task — why is this the right
  measure of success?]

## Evaluation protocol
[How are you splitting the data? Are you using k-fold? What's the validation strategy?]

## Baseline
- **Model:** [describe the baseline — e.g., "single Dense layer, softmax output"]
- **Baseline metric:** [the number — e.g., "Test accuracy: 0.7832"]
- **Random chance:** [what would a random/trivial model score? e.g., "10% for 10 classes"]
- **Gap:** [baseline vs random — is the baseline meaningfully above chance?]

## Risks
[1–3 bullets. What could go wrong? Dataset too small? Classes too hard to
distinguish? Task too ambitious for 3 weeks? Hardware limitations?]

## Plan for Weeks 6–8
- **Week 6:** [what improvement will you try? Transfer learning if vision?]
- **Week 7:** [interpretability artifact? Second improvement iteration?]
- **Week 8:** [final iteration + demo]
```

## What we're looking for

### Earns full credit
- All six sections of the proposal are filled in with real content.
- Dataset is real and loaded (not hypothetical).
- Metric choice is justified — not just "I'll use accuracy."
- Baseline is a real number from a real model, not a placeholder.
- Risks are honest, not "there are no risks."
- Weeks 6–8 plan is concrete enough to act on.

### Loses points
- Proposal is hypothetical — no actual model was built.
- Metric is "accuracy" with no justification.
- Baseline metric is missing or fabricated.
- Risks are generic or absent.
- Plan for Weeks 6–8 is vague ("I'll improve the model").

## Where to go next

→ [assess.md](assess.md) — Final submission instructions for the project proposal.
