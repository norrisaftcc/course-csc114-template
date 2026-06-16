# Week 2 Overview — Keras Hello World

**Audience:** Both tracks (different submission paths — see below)
**Workload:** 8–10 hours including class meetings
**Submission:** 
- **Code Builders:** Issue → Branch → PR with notebook + write-up
- **Prompt Masters:** Notebook + write-up dropped into the repo

---

## What you're doing this week

You're meeting deep learning for the first time. By the end of the week you'll have trained a real neural network on a real dataset and written down what you observed.

The dataset is **MNIST** — 70,000 handwritten digits, the most famous "hello world" in deep learning. The model is a small Keras neural network. The framework is the same one Google, Netflix, and your phone's camera use behind the scenes. It's not pretend.

By Friday you'll have:

- A Jupyter notebook (`.ipynb` file) with the MNIST training loop run end-to-end
- A short write-up of what your model got right, what it got wrong, and one hypothesis about why
- A first taste of "error analysis" — the habit of looking at *which* mistakes a model makes, not just the accuracy number
- For Code Builders: your first complete Sacred Flow round (Issue → Branch → PR → Review → Merge)
- For Prompt Masters: your first deliverable using Google Colab — no install, no terminal

## How Week 2 connects to Week 1

In Week 1 you built an agent that follows rules you wrote in plain English. The agent uses a model that someone trained — Claude Sonnet 4.6 — but you didn't train anything. You configured.

This week you train your own model. It's much smaller than Claude, much more focused (just digit recognition), and you'll watch it learn in real time. The line you'll see go down across the screen — the loss — is the model getting better, epoch by epoch.

You're not replacing the agent work. You're seeing what's inside the box.

## What "deep learning" actually means

A neural network is a stack of mathematical operations that turn inputs (like an image of the digit 7) into outputs (like the label "7"). The "learning" is the process of adjusting the math inside the network so that more inputs get the right outputs. "Deep" just means there are many layers stacked up.

You don't need to do the math by hand this week. Keras (the library) handles it. Your job is to **set up the training, run it, look at the results, and ask one good question.**

That's the whole loop. Set up. Run. Look. Question. You'll do it dozens of times over the next eight weeks. This week you do it once.

## What's different from Week 1

A few things change starting now:

1. **There's a textbook this week.** Chollet's *Deep Learning with Python*, 3rd edition, Chapters 1 and 4 specifically. The publisher provides chapter summaries (in the notebook) and the author publishes free companion notebooks on GitHub that we'll use directly.
2. **Sacred Flow activates for Code Builders.** No more dropping files into `main`. You open an Issue, branch off, work, open a Pull Request, address review comments, then merge. The notebook has a full walkthrough at `90_reused/sacred_flow_walkthrough.md`.
3. **Prompt Masters work with code, but don't write it.** You'll open Chollet's notebook in Google Colab, run the cells, observe what happens, and write up what you saw. The work is *reading* code, not writing it. That's a real skill.
4. **The deliverable has a model in it.** Last week you submitted text. This week you submit a Jupyter notebook with cells that ran. The notebook itself is part of the deliverable.

## The deliverable, at a glance

| File | What it is |
|------|-----------|
| `notebook.ipynb` | The Keras MNIST training loop. Run end-to-end. |
| `write_up.md` | Your observations: baseline accuracy, what the model got wrong, one hypothesis about why |
| `screenshot_training.png` | A picture of the training output showing loss going down |
| `reflection.md` | 4–6 sentences on what surprised you this week |
| `README.md` | Updated since last week — add a short Week 2 section |

Full spec is in `week_02_deliverable_spec.md`.

## What's "good" this week

Three things, scaled up from Week 1:

- **You looked at the data, not just the number.** A model that gets 97% accuracy is wrong 3% of the time. What did it get wrong? Look at five misclassified examples.
- **Your write-up has a hypothesis, not just a result.** "The model got 9 confused with 4 most often. I think it's because both have a closed top loop." That's a hypothesis. "The model was 97% accurate" is not.
- **Your reflection is specific.** Reference an actual thing that happened, not a generic "I learned a lot."

If you're a Code Builder, **process credit** is also live this week (about 10% of the weekly grade). It's earned by your Sacred Flow workflow — descriptive Issue, branch name that matches, commits that say what they did, PR description with a retro.

## Where to start

1. Read **`concept_primer_what_deep_learning_actually_is.md`** in this notebook (about 15 minutes).
2. Read the publisher's chapter summaries for Ch 1 and Ch 4 (in this notebook, dropped in by the instructor).
3. Look at **`week_02_lab_mnist_hello_world.md`** to see what we'll do together in Meeting A.
4. If you're a Code Builder, read **`for_code_builders_week_02.md`** before class. Sacred Flow is new and the walkthrough is worth doing once cold.
5. If you're a Prompt Master, read **`for_prompt_masters_week_02.md`** and bookmark Colab.

## When you get stuck

The notebook chat is your fastest answer for anything in scope this week. Try things like:

- "What's an epoch?"
- "I'm a Prompt Master — do I need to install Python?"
- "My loss is going up. What's wrong?"
- "Why is MNIST a classification task and not regression?"

It cites the source it used so you can dig in further if you want.

If the chat can't help — or the answer touches grading, deadlines, or something specific to your situation — message the instructor on GitHub Discussions or come to office hours.
