# Exit Ticket — How Machine Learning Works

**CSC-114 Artificial Intelligence I · Module 3**
*Complete this after you finish the reading "How Machine Learning Works" (Deck 1).*

---

## How this is graded

This exit ticket has two parts:

- **Part 1 — Comprehension Check (10 questions).** Auto-gradable. This is your *Practice* — it confirms you read and understood the material. Graded **complete / re-do**: get them right, or revisit the reading and resubmit.
- **Part 2 — Reflection (3 prompts).** This is the **Assess** phase, and it's the part scored on the four-category rubric. You'll work *with your domain agent* here — but copying its output will not earn credit. The prompts are built so that only *your own thinking* satisfies them.

Answer Part 1 first while the reading is fresh. Then move to Part 2.

---

## Part 1 — Comprehension Check

Choose the single best answer for each question.

**1. What is the key difference that machine learning has, compared to traditional programming?**
- A) You give the computer rules and data, and it learns brand-new data from them.
- B) You give the computer answers only, and it invents the features it needs.
- C) You give the computer data and answers, and it works out the rules itself.
- D) You give the computer rules and answers, and it deletes the data it used.

**2. In the house-price dataset, the sale price is the ______ and the square footage is a ______.**
- A) target; feature
- B) feature; target
- C) gradient; weight
- D) weight; gradient

**3. Why are a brand-new model's first predictions usually inaccurate?**
- A) The dataset is too small for the model to read all of it.
- B) The loss function has not been chosen by the programmer yet.
- C) The learning rate was accidentally set far too high to begin.
- D) The model's parameters start as random numbers before any training.

**4. What makes a wrong prediction useful during training?**
- A) It proves the dataset contains mistakes that must be removed.
- B) The size and direction of the error show how to improve.
- C) It lets the model skip the slowest steps of the loop.
- D) It tells the optimizer to stop updating the parameters now.

**5. Predicting whether an email is spam or not spam is which kind of problem, and which loss fits it?**
- A) Regression, because the answer is a number; it uses Mean Squared Error.
- B) Regression, because the answer is a label; it uses cross-entropy loss.
- C) Classification, because the answer is a category; it uses cross-entropy loss.
- D) Classification, because the answer is a number; it uses Mean Squared Error.

**6. What does a smaller loss value tell you about the model?**
- A) Its predictions are closer to the real answers.
- B) Its parameters have stopped changing for good.
- C) Its dataset has grown larger during training.
- D) Its predictions are farther from the real answers.

**7. A parameter's gradient is a positive number. According to the reading, what should happen to it?**
- A) It should increase, because a positive gradient always raises it.
- B) It should stay frozen, because the loss is already at zero.
- C) It should be removed, because positive means it is unused.
- D) It should decrease, because that direction lowers the loss.

**8. What is the optimizer's job in the training loop?**
- A) To decide which features the model is allowed to look at first.
- B) To choose the step size and actually update each parameter.
- C) To measure how wrong the prediction was as a single number.
- D) To split the data into training batches before each epoch.

**9. Which sequence correctly describes one pass through the training loop?**
- A) Feed data → predict → compute loss → gradient → update parameters
- B) Predict → feed data → update parameters → gradient → compute loss
- C) Compute loss → gradient → predict → feed data → update parameters
- D) Update parameters → compute loss → feed data → predict → gradient

**10. In `model.compile(optimizer="adam", loss="mean_squared_error")`, what do the two settings control?**
- A) `"adam"` sets the dataset size; `"mean_squared_error"` sets the epoch count.
- B) `"adam"` sets the loss to minimize; `"mean_squared_error"` sets the step size.
- C) `"adam"` sets how parameters update; `"mean_squared_error"` sets what counts as wrong.
- D) `"adam"` sets the features to use; `"mean_squared_error"` sets the target column.

---

## Part 2 — Reflection (with your agent)

Your study agent has this reading loaded as its knowledge. Use it as a thinking partner for the prompts below — but read the rule first.

> **The catch-the-AI rule.** For each prompt, your agent's raw answer is a *starting point you must evaluate, not a final answer you can paste.* Credit comes from what *you* add: catching a mistake, sharpening a fuzzy explanation, or connecting the idea to your own project. An answer that is clearly just the agent's words will be returned for a re-do.

**Reflection 1 — Teach it back, then get checked (own words + collaboration).**
In 4–6 sentences of your *own* writing, explain the training loop to an imaginary classmate who missed the reading. Then paste your explanation to your agent and ask it to find anything you got wrong or left out. Revise. Submit **both** versions plus one sentence naming the single most useful thing the agent caught (or "nothing — here's why I think my first version was already complete").

**Reflection 2 — Pressure-test the agent on the loss (critique the AI).**
Ask your agent this exact question: *"Is the loss just how many dollars the prediction was off?"* Compare its answer to what Section 5 of the reading actually says about Mean Squared Error. In 3–5 sentences, explain in your own words where the agent's answer is right, where it is incomplete or wrong, and *why MSE squaring the errors actually matters.* (If your agent already nails it, your job is to explain the squaring idea more clearly than it did — and say what a beginner would most likely misunderstand.)

**Reflection 3 — Map it onto your own agent project (connect to your domain).**
Think about the domain your agent works in. Pick one task from that field and turn it into a machine-learning problem:
- Is it **regression** (predicting a number) or **classification** (predicting a category)? Or is it not a prediction problem at all? Explain your reasoning.
- What would the **features** (inputs) be, and what would the **target** be?

Write 4–6 sentences. There is no single right answer here — you're graded on whether the mapping is sensible and the vocabulary is used correctly.

---

## Submitting your work

**Code Builders:** Commit two files to your repo — `module3-comprehension.md` (your Part 1 answers) and `module3-reflection.md` (Part 2). Use clear commit messages (e.g., `Add Module 3 exit ticket reflection`). Open the PR per the usual Sacred Flow.

**Prompt Masters:** Put both parts in a single document and drag-and-drop it into the submission box, or commit it to your repo — your choice. Same content, same rubric.

---
---

# 🔒 INSTRUCTOR APPENDIX
*Remove everything below this line before distributing to students.*

## Answer key (Part 1)

| Q | Answer | Concept tested | Reading §|
|---|--------|----------------|----------|
| 1 | **C** | ML flips traditional programming (data + answers → rules) | §1 |
| 2 | **A** | Features vs. target | §2 |
| 3 | **D** | Parameters start random | §3 |
| 4 | **B** | Error is the learning signal | §3 |
| 5 | **C** | Classification → cross-entropy | §4 |
| 6 | **A** | Smaller loss = closer predictions | §5 |
| 7 | **D** | Positive gradient → decrease the parameter | §6 |
| 8 | **B** | Optimizer chooses step size and updates | §7 |
| 9 | **A** | Training-loop order | §8 |
| 10 | **C** | `compile()` sets optimizer + loss | §9 |

**Answer distribution:** A×3 (Q2, 6, 9) · B×2 (Q4, 8) · C×3 (Q1, 5, 10) · D×2 (Q3, 7). Positions distributed; option lengths equalized within each item so neither length nor position signals the answer.

**Likely-confused items to watch:**
- **Q4 vs Q3** both touch the "random start." Q3 asks *why predictions are bad*; Q4 asks *why a bad prediction is useful.* Students who rush may swap them.
- **Q7** is the sign-convention question and the most-missed concept. A positive gradient means *decrease* the parameter (because `new = old − lr × gradient`). If many students miss this, it's the one to reteach.
- **Q10** distractors all use real-sounding pairings; only C maps both strings correctly.

## Reflection grading notes (Part 2 → rubric)

Each reflection is built so AI output alone can't satisfy it — the gradeable signal is the student's evaluative or transfer work.

| Reflection | Primary rubric category | What earns "Proficient" |
|------------|------------------------|--------------------------|
| **R1 — Teach it back** | Problem-Solving Process + Professional Communication | A correct, in-own-words loop description; a specific, honest account of what the agent caught and what they changed. |
| **R2 — Pressure-test the loss** | AI Partnership Quality + Critical Thinking & Ethics | Correctly distinguishes "dollars off" from MSE; explains *why squaring matters* (big misses penalized more); evaluates rather than echoes the agent. |
| **R3 — Map to their domain** | Critical Thinking & Ethics + AI Partnership Quality | Sensible regression/classification call with stated reasoning; correctly names plausible features and target for their domain. |

**Re-do triggers (complete/re-do gate before rubric scoring):**
- Reflection text that is clearly the agent's wording pasted in (no evaluative layer).
- R2 that accepts "yes, it's just dollars off" without addressing squaring.
- R3 that confuses regression and classification, or lists a target as a feature.

**Quick-scan tip:** R2 is the strongest cheat-detector. A student who actually engaged will mention *squaring* or *big misses count more*; a copy-paste answer almost never will, because the friendly "dollars off" framing is what the agent surfaces first.

---

*Source alignment: Module 3 reading "How Machine Learning Works"; concepts per Chollet & Watson, "Deep Learning with Python," 3rd Edition (Manning), Chs. 2–3.*
