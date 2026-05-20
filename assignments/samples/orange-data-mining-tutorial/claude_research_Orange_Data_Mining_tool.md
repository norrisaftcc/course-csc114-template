# Module 7 (CSC-114) — Seeing How Machines Learn: A One-Week Visual ML Lab with Orange Data Mining

## TL;DR
- Use Orange Data Mining **3.40.0 (released December 20, 2025)** as a one-week, ~3.5-hour, four-session no-code visual ML lab that delivers CSC-114's "basics of machine learning" outcome through workflows, screenshots, and reflection — not coding.
- Install Orange via the **standalone installer from orangedatamining.com** (the project's own default recommendation) OR by clicking the Orange3 tile on the Anaconda Navigator home screen; do **not** tell students "Orange comes with Anaconda" — that is misleading because Orange3 is featured on Navigator's home page but is not in Anaconda's default installed package set.
- The four sessions move from *data exploration → supervised classification → evaluation → unsupervised clustering*, using only the built-in Iris, Titanic, and Heart Disease datasets, and produce one screenshot-and-reflection artifact per session graded against the course's four-category rubric (with "AI Partnership Quality" reframed as "Tool Partnership Quality").

---

## 1. Module Overview

**Course:** CSC-114 Artificial Intelligence I (NC Combined Course Library; follow-up to CSC-113 AI Fundamentals).
**Module length:** 1 week, ~3–4 hours of student work, split into **four ~50-minute sessions**.
**Tool:** Orange Data Mining 3.40.0 — "a comprehensive, component-based software suite for machine learning and data mining, developed at Bioinformatics Laboratory, Faculty of Computer and Information Science, University of Ljubljana, Slovenia" (orangedatamining.com/license/).
**Tracks served:** Both Prompt Masters (no-code) and Code Builders (programming with AI assistance). Orange's visual canvas is native to the Prompt Masters experience; Code Builders are offered an optional Python Script extension at the end of Session 3.
**Pedagogical anchor:** Course philosophy — *"We're not teaching them to code. We're teaching them to learn."* Failure is exercise. One change per iteration. Screenshots + reflection.

### Mapping to the CSC-114 Course Description

| CSC-114 language | How this module addresses it |
|---|---|
| "basics of machine learning" | Sessions 2–4 build, test, and interpret classifiers and a clustering model |
| "statistical and probabilistic reasoning" | Confusion Matrix, accuracy, AUC, silhouette score are read and interpreted in plain language |
| "intelligent agent design and rational decision making" | A trained classifier *is* a rational decision agent that maps features to a prediction — Session 3's reflection makes this framing explicit |
| "demonstrate artificial intelligence design concepts" | The final synthesis reflection requires students to defend three design choices (which features, which model, which evaluation) |

### Learning Outcomes (student-facing, ~10th-grade reading level)
By the end of the week a student should be able to:
1. **Load and explore** a dataset in Orange and describe what its rows (instances), columns (features), and labels (target) mean.
2. **Build a small workflow** that trains a classifier on labeled data and predicts on new data.
3. **Read a confusion matrix and an accuracy score** and explain what they say about a model's mistakes.
4. **Distinguish supervised from unsupervised learning** by comparing a decision tree to a k-Means clustering on the same data.
5. **Reflect on one limitation** of the model they built — bias, missing data, an unbalanced test set, or out-of-date training data.

---

## 2. Why Orange Data Mining (and the install reality)

Orange is an open-source, component-based data analysis platform with a drag-and-drop **canvas** of **widgets** that pass data along the lines you draw between them. The output of one widget is the input of the next.

**Why it fits CSC-114 better than scikit-learn or a raw Jupyter notebook:**
- **Zero programming barrier** — accessible to the Prompt Masters track and to ESL or non-traditional learners.
- **Every model ships with an interactive visualization** — Tree Viewer, Scatter Plot with class color, Confusion Matrix that lets you click a cell and inspect the misclassified rows. Abstract concepts become physical things on the screen.
- **Educational widgets** (Paint Data, Interactive k-Means, Polynomial Classification) were "explicitly created to support teaching," per Orange's own "Teach with Orange" page.
- **Free, open source, GPLv3**, cross-platform (Windows, macOS, Linux).
- **Active development:** version 3.40.0 was released **December 20, 2025**, with monthly stable cycles since 2016 — a recent enhancement is the File widget's ability to accept arbitrary file extensions, smoothing a common student stumble.

**Install reality — read this carefully and put it in the syllabus:**
The most common myth instructors repeat is "Orange comes with Anaconda." It does not. Orange3 appears on the Anaconda Navigator **home screen as an installable tile** the user must click; only Anaconda Toolbox is installed by default in Navigator's base environment (per Anaconda Navigator release notes). The Orange project itself recommends the **standalone installer** on Windows and macOS first, listing Anaconda under "Other platforms" on its download page. For students who already have Anaconda installed, click the Orange3 tile and wait (5–10 minutes the first time as conda resolves dependencies). For everyone else, the standalone installer is faster and works without administrative rights on Windows.

> **Recommended syllabus phrasing:**
> *"Orange is featured on the Anaconda Navigator home screen — click the 'Install' tile to add it. If you don't already use Anaconda, just download the standalone installer from orangedatamining.com/download — it's faster."*

---

## 3. Session-by-Session Breakdown

> Each session = ~50 minutes of student work, ending with a saved `.ows` workflow file, screenshots, and a 100–150 word written reflection.
> The **"One Change Rule"** runs throughout: when students iterate, they change only one variable (a parameter, a feature, a model) so they can see what that one change did.

### Session 1 — "Look at the Data Before You Touch a Model" (Data Exploration)
**Concept goals:** dataset, instance/row, feature/column, target/label, distribution, separability.
**Dataset:** **Iris** (built-in `iris.tab`, 150 instances, 4 numeric features — sepal/petal length and width, 3 classes). Chosen because (a) it has no ethical landmines, (b) the classes separate cleanly in 2-D scatter plots — a visually convincing first "aha," and (c) it is the textbook example in Orange's own getting-started materials.

**Workflow students build (4 widgets):**
```
[File: iris] ──► [Data Table]
              └► [Distributions]
              └► [Scatter Plot]
```

**Activities:**
1. Drag the **File** widget, open Iris from "Browse documentation data sets."
2. Connect to **Data Table** — observe 150 rows × 4 features + 1 class.
3. Connect to **Distributions** — pick "petal length," color by class. Three colored humps appear.
4. Connect to **Scatter Plot** — set X = petal length, Y = petal width, color = iris. Three clearly separate clouds.
5. **One Change Rule:** Re-do the scatter plot with sepal length vs. sepal width. The clouds *overlap* in this view. Same data, different features, different separability.

**Screenshot checkpoints:**
- SS1.1 — Data Table with the first 10 Iris rows.
- SS1.2 — Petal-length × petal-width scatter plot, colored by class.
- SS1.3 — Sepal-length × sepal-width scatter plot, colored by class.

**Reflection prompts (pick 2 of 3, ~75 words each):**
- *"Look at your two scatter plots. Which pair of features makes the three iris species easier to tell apart? Why do you think that is?"*
- *"A 'feature' is just one column in the data. If you were a botanist trying to identify an iris in your garden, which feature would you measure first? Why?"*
- *"What is one question this dataset cannot answer, no matter how good a model gets?"*

---

### Session 2 — "Teaching the Machine: Supervised Classification" (Train a Decision Tree)
**Concept goals:** training data, supervised learning, classifier, decision tree, decision boundary, model as a rule sheet.
**Dataset:** **Iris** continued — keeping the dataset constant reduces cognitive load and makes the "now we're modeling, not just looking" shift the centerpiece of the session.

**Workflow (5 widgets):**
```
[File: iris] ──► [Data Table]
             └► [Tree] ──► [Tree Viewer]
                      └─► [Scatter Plot]   (Tree's "Selected Data" → Scatter Plot's Data Subset input)
```

**Activities:**
1. Drag the **Tree** widget — Orange's in-house tree learner, which "splits the data into nodes by class purity" (Orange widget docs).
2. Connect File → Tree → **Tree Viewer**.
3. Open Tree Viewer. The tree should be small (3–5 nodes). Each node reads like "petal length ≤ 2.45?" — these *are* the IF-THEN rules of a "knowledge-based agent" (direct callback to the CSC-114 description).
4. Click a leaf node — selected rows flow downstream to Scatter Plot, which highlights them as bold dots. Students *see* the tree carving up feature space.
5. **One Change Rule:** Re-open Tree, change "Limit the maximal tree depth" from default to 2. Watch the tree shrink and lose accuracy. Then push it to depth 10 — almost no change because Iris is too small/easy. This previews overfitting without naming it yet.

**Vocabulary introduced in plain language:**
- **Training data** = "the labeled examples we show the machine so it can figure out the pattern."
- **Classifier / model** = "a finished rule sheet the machine built from the training data."
- **Decision tree** = "a series of yes/no questions that ends in a guess."

**Screenshot checkpoints:**
- SS2.1 — Tree Viewer showing the full tree, leaves colored by class.
- SS2.2 — Scatter plot with one tree node selected and the corresponding flowers highlighted.
- SS2.3 — Tree Viewer after the "one change" (depth = 2).

**Reflection prompts:**
- *"In your own words, what does a decision tree *do*? Pretend you are explaining it to a friend who has never used a computer for math."*
- *"What happened to the tree when you changed the depth from default to 2? Is a smaller tree always worse? Why or why not?"*
- *"The CSC-113 prompt-engineering skill of giving an LLM a clear rubric is a little like training a classifier. What's the same? What's different?"*

---

### Session 3 — "How Do We Know the Model Is Any Good?" (Evaluation)
**Concept goals:** test set, accuracy, confusion matrix, cross-validation (in plain language), overfitting (named explicitly), comparing two models.
**Dataset:** **Heart Disease** (`heart_disease.tab`, 303 patients from the UCI Cleveland set, 13 features, binary target "diameter narrowing"). Chosen because (a) the stakes feel real to students — wrong predictions matter — and (b) it mixes categorical and numeric features, so students see real-world messiness.

> **Ethics flag (instructor brief):** The heart disease dataset is small and based on 1988 Cleveland Clinic data; present it as "a teaching dataset, not a clinical-grade model." Students will reflect on this.

**Workflow (6 widgets):**
```
[File: heart_disease] ──► [Tree]                ─┐
                       └► [Logistic Regression] ─┤
                                                 ├─► [Test and Score] ──► [Confusion Matrix]
                       └────── (data) ──────────┘
```

**Activities:**
1. Load `heart_disease.tab`. Note the dataset has some missing values — Orange's learner pipeline handles them by default, but students should *see* the warning.
2. Connect File to both **Tree** and **Logistic Regression** (two learners — Orange's "Test and Score" widget compares them side by side).
3. Drag **Test and Score**. Connect File (data) + Tree (learner) + Logistic Regression (learner) → Test and Score.
4. Inside Test and Score, choose "Cross-validation, Number of folds: 5." Explain in plain words: *"we hide one-fifth of the data, train on the rest, test on the hidden part, then rotate. We do this five times so every row gets a turn being a test row."*
5. Read the table: **CA** (Classification Accuracy) and **AUC** (Area Under the ROC Curve). On UCI Cleveland heart disease data, published 5-fold cross-validation benchmarks land both Logistic Regression and Decision Tree in the **0.78–0.85 CA range** (e.g., Logistic Regression 0.838 in a 2025 PMC study; LR 0.848 / Tree ~0.78–0.80 in 2021 IJERT comparisons). Students should expect to see something similar.
6. Connect Test and Score → **Confusion Matrix**. Open it. Four cells: true positives, false positives, false negatives, true negatives. Click "Misclassified" — those rows flow downstream. A connected Data Table will let students inspect *which patients* the model got wrong.
7. **One Change Rule:** Re-run with 2 folds instead of 5. Accuracy changes. Why? Smaller training set per fold. This opens the conversation about why test-set size matters.

**Screenshot checkpoints:**
- SS3.1 — Test and Score table showing CA and AUC for both Tree and Logistic Regression.
- SS3.2 — Confusion Matrix with one false-negative cell selected.
- SS3.3 — Test and Score after the "one change" (folds = 2).

**Reflection prompts:**
- *"Look at your Confusion Matrix. In this dataset, which kind of mistake is worse: predicting 'no disease' for a sick patient, or 'disease' for a healthy one? Defend your answer in 4–6 sentences."*
- *"Your two models got different accuracy scores. If you had to choose one for a real clinic, which would you pick and why? What information do you still wish you had?"*
- *"What did changing the number of folds from 5 to 2 do to your accuracy? In your own words, what is the test set actually testing?"*

---

### Session 4 — "When There Are No Labels" (Unsupervised Clustering) + Synthesis
**Concept goals:** unsupervised learning, clustering, k-Means, silhouette score, the difference between *discovering* groups and *predicting* a label.
**Datasets:** **Titanic** (`titanic.tab`, 2201 passengers; features: status/class, age, sex, survived) and a return visit to **Iris** to compare clustering against known labels.

**Why two datasets here:** Titanic gives a memorable story for clustering and (in the synthesis writeup) a natural prompt about bias in historical data. Re-using Iris allows the powerful demonstration that k-Means *almost* re-discovers the three species without ever seeing the labels — a moment that crystallizes "what is unsupervised learning."

**Workflow A — Iris clustering (~20 min):**
```
[File: iris] ──► [k-Means] ──► [Data Table]
                          └─► [Scatter Plot]
                          └─► [Silhouette Plot]
```
Set k=3. In Scatter Plot, color points by *cluster index* instead of by class. The three clusters land almost exactly on the three species (with some versicolor/virginica overlap — usually setosa is perfectly recovered, ~47–49 of 50 versicolor and virginica land in the correct cluster per Orange's own documentation example). Students see unsupervised learning re-derive structure that was already there.

**Workflow B — Titanic exploration (~25 min):**
```
[File: titanic] ──► [Data Table]
               └─► [Distributions]   (group by survived)
               └─► [Sieve Diagram]   (sex × survived)
```
The Sieve Diagram makes the "women and children first" pattern visible in seconds — Orange's own example puts the female-survival vs. expected ratio at roughly 0.15 vs. 0.06. Optionally, add a Tree to predict "survived" as an extension.

**One Change Rule (Iris):** Re-run k-Means with k=2, then k=4. Watch the Silhouette Plot's average score change. Higher silhouette = "tighter, more separated clusters." k=2 usually wins on Iris because setosa is so different — versicolor and virginica get lumped together.

**Screenshot checkpoints:**
- SS4.1 — Iris scatter plot colored by k-Means cluster (k=3).
- SS4.2 — Silhouette Plot at k=3 vs. k=2 (two side-by-side screenshots OK).
- SS4.3 — Titanic Sieve Diagram of sex × survived.

**Final synthesis reflection (250–300 words; the capstone artifact):**
Answer all three:
1. *"In Session 2 you trained a decision tree. In Session 4 you ran k-Means. What is the most important difference between those two tasks, in your own words?"*
2. *"Pick one model from this week. Describe one situation where you would NOT trust it to make a real-world decision, and explain why. Use vocabulary from this module."*
3. *"What's one thing about machine learning that surprised you this week?"*

---

## 4. Recommended Datasets and Why

| Dataset (built-in) | Used in | Why it was chosen | What to avoid |
|---|---|---|---|
| **Iris** (`iris.tab`, 150 × 4, 3 classes) | Sessions 1, 2, 4 | Clean visual separation in petal space; canonical first ML dataset; no ethical issues | None |
| **Titanic** (`titanic.tab`, 2201 × 4) | Session 4 | Memorable story; categorical features; Sieve Diagram and Nomogram look great on it; opens an honest conversation about gender/class as features | Don't oversimplify "women and children first" — it's a pattern, not a moral law |
| **Heart Disease** (`heart_disease.tab`, 303 × 13) | Session 3 | Real-feeling stakes for the confusion-matrix lesson; mixed categorical/numeric; missing values teach realism | Flag explicitly that it is a 1988 teaching dataset, not clinical |
| **Housing (Boston)**, **brown-selected** (gene expression) | **NOT used** | See below | See below |

**Avoid for first-time learners (with reasons):**
- **Boston Housing.** The dataset's "B" feature is a documented ethical concern: per scikit-learn's own deprecation notice, *"The Boston housing prices dataset has an ethical problem: as investigated in [1], the authors of this dataset engineered a non-invertible variable 'B' assuming that racial self-segregation had a positive impact on house prices."* scikit-learn deprecated `load_boston` in version 1.0 and **removed it entirely in version 1.2**; Fairlearn notes the dataset "was phased out of scikit-learn in June 2020" before the formal removal. Don't open that door in week one.
- **brown-selected (yeast gene expression).** 81 columns of gene-expression data; the domain is opaque to community-college learners.
- **Any text-mining add-on dataset.** Requires installing Orange3-Text and a separate mental model.

---

## 5. Assessment — Screenshots + Reflection Rubric

Each session produces one **artifact**: a single Markdown or Word document containing the labeled screenshots (SS_n_._m_) and the reflection answers. Four artifacts = the module grade.

### Rubric (mapped to CSC-114's four-category framework)

| Category (course framework) | Adapted for this module | What "Proficient" looks like (3 of 4) |
|---|---|---|
| **AI Partnership Quality → "Tool Partnership Quality"** | How the student worked *with* Orange | Workflow is readable; widgets are labeled or arranged so a stranger could follow it; student successfully recovered from at least one error (broken link, wrong target column) and noted it in the reflection |
| **Problem-Solving Process** | Did the student iterate, not just click through? | Evidence of the One Change Rule appears in ≥ 3 of 4 sessions ("I changed depth from default to 2 and accuracy dropped from 0.95 to 0.83") |
| **Professional Communication** | Reflection writing | Sentences are clear at ~10th-grade level; ML vocabulary (training data, accuracy, cluster) is used correctly; screenshots are titled and referenced in the text |
| **Critical Thinking & Ethics** | Does the student question the model? | At least one reflection raises a limitation, bias, missing-data concern, or "you shouldn't use this for X" that is grounded in what they actually saw on the screen |

### Grading bands (per artifact, 0–4 scale)
- **4 — Exceeds:** Reflection makes a connection the prompt did not ask for (e.g., links Session-3 confusion matrix to a real-world false-negative cost).
- **3 — Proficient:** Workflow runs; screenshots match checkpoints; reflection answers the prompt with correct vocabulary.
- **2 — Developing:** Workflow runs but some checkpoints are missing or unlabeled; reflection restates the prompt without adding analysis.
- **1 — Beginning:** Workflow incomplete or copy-pasted; reflection ≤ 50 words or off-topic.
- **0 — Not submitted.**

**Anti-rote design choices — the heart of this assessment:**
1. The screenshot list *requires* the "one change" image — students cannot copy a single canonical workflow.
2. Two of three reflection prompts in each session are "in your own words" or "defend your choice," which generic AI text handles poorly without student-specific context (i.e., what *their* confusion matrix actually showed).
3. The final synthesis asks for *one* personally surprising thing — a question whose authentic answer is impossible to fake from a generic ML overview.

---

## 6. Common Stumbling Blocks (Instructor Cheat Sheet)

| Symptom | Cause | Fix |
|---|---|---|
| File loads data but Scatter Plot shows no class color | "Target" role not set | In File widget, find the class column, click "Set as Target" |
| Tree Viewer is empty | Tree widget did not receive a target | Same fix as above |
| Test and Score shows "Need data on input" | Forgot to wire the data signal (only the learner is connected) | Connect File → Test and Score *separately* from File → Learner |
| Confusion Matrix shows zeros in one row | Class imbalance + small data | Switch sampling to stratified CV; use this as a teaching moment, not a bug |
| Orange "freezes" on first launch | Conda/Anaconda channel resolving in the background | Wait 5–10 minutes; or use the standalone installer instead |
| Two widgets show different row counts | Subset signal wired as "Data" instead of "Data Subset" | Double-click the connecting line and re-map the channel |
| Reflection answers feel AI-generated | Prompt was too generic | Use the specific "in your screenshot" phrasing from this proposal |

**Pre-flight check (give students before Session 1):**
- Orange opens (version 3.40.0 or later).
- File → New creates a blank canvas.
- Left toolbox shows six default categories: Data, Transform, Visualize, Model, Evaluate, Unsupervised.
- File widget can browse documentation datasets and find `iris.tab`.

---

## 7. Extensions / Differentiation

**For Prompt Masters who finish early:**
- Add the **Nomogram** widget after a Naive Bayes or Logistic Regression on Titanic. It shows each feature's pull on the prediction as a point score — a perfect visual "explainable AI" moment. Per Orange's own example, a male adult in first class sums to −0.36 points, giving roughly a 53% probability of not surviving.
- Try the **Datasets** widget (Data category) to pull a fresh dataset from Orange's online repository and re-run any of this week's workflows.

**For Code Builders (programming track):**
- Add a **Python Script** widget at the end of the Session 3 workflow. The widget exposes `in_data`, and you can convert Orange's table to a pandas DataFrame:
  ```python
  import pandas as pd
  df = pd.DataFrame(in_data.X, columns=[a.name for a in in_data.domain.attributes])
  out_data = in_data
  ```
- Install the **Explain** add-on (Options → Add-ons…) for feature-contribution plots.
- Reproduce the Session 3 workflow in scikit-learn in a Jupyter notebook and compare against Orange's numbers. Reflection prompt: where did the numbers differ and why?

**For ESL or first-time learners who need more scaffolding:**
- Provide a starter `.ows` workflow file with widgets pre-placed but unconnected. Student's job is only to draw the connections and configure the File widget.
- Replace the open reflection with a guided cloze: *"When I changed _____ from _____ to _____, the accuracy went from _____ to _____. I think this is because _____."*

---

## 8. Connection Back to CSC-113 Prompt Engineering

CSC-113 ends with prompt-engineering practice. CSC-114 picks that up by showing students that a trained model is, in effect, a "frozen prompt" — a fixed rule sheet that maps an input to an output. Bridges to call out in class:

| CSC-113 skill | CSC-114 echo in Orange |
|---|---|
| Writing a clear rubric for an LLM | Choosing which column is the target and which are features |
| Iterating a prompt | The One Change Rule on a Tree's depth or the k in k-Means |
| Recognizing when an LLM is hallucinating | Recognizing when a model still gets a confusion matrix wrong even though training-set accuracy looks great (overfitting) |
| "Show your work" prompts | Tree Viewer and Nomogram make a model's "work" visible |

The final synthesis reflection asks students to draw one such bridge in their own words.

---

## 9. Glossary (every term used in this module, plain language)

- **Canvas** — the blank workspace in Orange where you build a workflow.
- **Widget** — a single building block (a square icon) that does one job: load a file, train a model, draw a chart.
- **Workflow** — the picture made by widgets connected with lines.
- **Dataset** — a table of examples.
- **Instance / row** — one example in the dataset (one flower, one passenger).
- **Feature / column / attribute** — one measurement about each example (petal length, age).
- **Target / label / class** — the column you are trying to predict (iris species, survived).
- **Supervised learning** — teaching the machine using examples that already have the answer.
- **Unsupervised learning** — letting the machine find groups in data that has no answer column.
- **Classifier / model** — the finished rule sheet the machine produces.
- **Decision tree** — a classifier shaped like a flowchart of yes/no questions.
- **k-Means** — an unsupervised method that groups examples into k clusters by similarity.
- **Cluster** — a group the algorithm found on its own.
- **Training data** — the examples you show the machine while it learns.
- **Test data** — the examples you hide from the machine so you can fairly grade it later.
- **Cross-validation** — repeatedly hiding a different fifth of the data, training on the rest, testing on the hidden fifth, then averaging the scores.
- **Accuracy (CA)** — the percentage of test examples the model got right.
- **Confusion matrix** — a small table that shows which kinds of mistakes the model made (false positives vs. false negatives).
- **AUC** — a 0-to-1 score where 1.0 is perfect and 0.5 is random guessing.
- **Silhouette score** — a 0-to-1-ish score for how tight and well-separated clusters are.
- **Overfitting** — when a model memorizes the training data and then fails on new data.

---

## 10. Citations and Further Reading

- Orange Data Mining home and download: https://orangedatamining.com/ and https://orangedatamining.com/download/ — Orange 3.40.0, released Dec 20, 2025.
- Orange GitHub repo and 3.40.0 release notes: https://github.com/biolab/orange3 and https://github.com/biolab/orange3/releases/tag/3.40.0.
- "Installing with Anaconda Navigator," Orange blog (Pretnar, 2020): https://orangedatamining.com/blog/installing-with-anaconda-navigator/.
- "Teach with Orange" — instructor-facing page on Paint Data, Interactive k-Means, and the overfitting workflow: https://orangedatamining.com/home/teach-with-orange/.
- Orange Widget Catalog: https://orangedatamining.com/widget-catalog/ (Tree, Tree Viewer, Test and Score, Confusion Matrix, k-Means, Silhouette Plot, Nomogram, Sieve Diagram).
- Orange YouTube channel, "Getting Started with Orange" playlist: https://www.youtube.com/playlist?list=PLmNPvQr9Tf-ZSDLwOzxpvY-HrE0yv-8Fy.
- Demšar J, Zupan B. (2021). *Hands-on training about overfitting.* PLOS Computational Biology 17(3): e1008671. DOI 10.1371/journal.pcbi.1008671. PMID 33661899. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7932115/. (Both authors at the Faculty of Computer and Information Science, University of Ljubljana; Zupan also at Baylor College of Medicine.)
- scikit-learn deprecation/removal of Boston housing: scikit-learn 1.0 deprecated `load_boston`; version 1.2 removed it with the stated reason *"The Boston housing prices dataset has an ethical problem: as investigated in [1], the authors of this dataset engineered a non-invertible variable 'B' assuming that racial self-segregation had a positive impact on house prices."*
- NC Combined Course Library, CSC-114 description (via Wake Tech): https://www.waketech.edu/course/csc-114.
- NCCCS Combined Course Library: https://www.nccommunitycolleges.edu/combined-course-library/.

---

## Caveats
- Orange 3.40.0 is the current stable release as of this writing (Dec 20, 2025). The Biolab team ships roughly monthly; widget names occasionally change. Check the Widget Catalog before each semester.
- The `heart_disease.tab` dataset is a 1988 Cleveland-based teaching dataset, not a clinical-grade resource — flag this explicitly to students.
- The "Anaconda includes Orange" myth is widespread online; instructor materials should be explicit that Orange is **featured on the Anaconda Navigator home screen but is not in the default Anaconda package set**.
- Published 5-fold CV accuracies for UCI Cleveland heart disease (Logistic Regression ~0.84, Decision Tree ~0.78–0.80) are *benchmarks*, not guarantees — student results will vary by random seed and by whether they use cross-validation or a single train/test split.
- Educational widgets (Interactive k-Means, Polynomial Classification) live in the Orange3-Educational add-on, which must be installed separately under Options → Add-ons. This module's core workflows do not require it; the extensions section does.