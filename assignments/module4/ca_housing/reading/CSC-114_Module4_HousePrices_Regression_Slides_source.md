# CSC-114 slide source — How Much Is This House Worth? (California housing regression)

**Topic:** Scalar regression, end to end — features → numbers → a small network → a dollar amount, and the small-data lesson (K-fold validation)
**Frame:** The second real-world ML workflow of the course; the regression recipe students will reuse, and the partner unit to the IMDB classification deck
**Audience:** CSC-114, mixed-ability, ~10th-grade reading level for body copy
**Pedagogical pin:** K-fold cross-validation (slides 11–13) is the new idea this unit owns. Teach *why small data forces it*, not just the mechanics.
**Estimated runtime:** 30–40 minutes of lecture + live notebook demo, depending on Q&A
**Companion files:** `..._Slides.html` (self-contained deck), `..._Reading.md`, `..._Lab.ipynb`

---

## Module overview (instructor brief)

This unit is the regression half of Module 4 (the other is IMDB sentiment / binary classification). It teaches its own scaffolding — normalization, target scaling, K-fold validation, the regression recipe — and assumes students have already met the shared ideas (the training loop, overfitting, train/validation/test discipline) in the classification unit. Where this deck leans on those ideas, it names them as *returning* material so students feel the continuity.

The deck is visual-first: body text is deliberately thin, and the teaching load sits in the **diagrams** and the **speaker notes**. Press **N** in the HTML deck to surface the notes drawer while presenting.

**The one genuinely new mechanic is K-fold cross-validation**, and it exists for one reason: the dataset is tiny (480 training districts). Keep returning to "we don't have enough data to waste any" — that single sentence motivates the whole back half of the deck.

**Color grammar** (consistent with the classification deck): teal = the model's good path / the prediction · rust = danger / overfitting / the sealed test set · amber = the key idea or the thing we tune · moss = safe practice (validation, the chosen epoch). One addition for regression: the dollar amount is the teal "answer," same as the probability was in the classification deck.

---

## Slide 1 — Title

**Visual:** Title only. Heptagram watermark, scanline texture. No diagram.

**Body:**
- How Much Is This House Worth?
- *Teaching a network to read facts about a neighborhood and guess a price.*
- Scalar regression · the California Housing dataset · Chollet & Watson, Ch. 4

**Speaker notes:**
Welcome them in. The arc: last unit sorted reviews into two buckets and ended in a probability. This unit predicts a *number* — a dollar amount — and ends in a single linear output. Same training loop, same overfitting story, but a new shape at both ends (numeric inputs, numeric output) and a new trick for tiny datasets. Name the one keeper up front: when you barely have any data, *how you measure* the model matters as much as the model itself.

---

## Slide 2 — Two kinds of question

**Visual:** Split diagram. Left (rust-edged): "Which bucket?" → positive / negative (last unit). Right (teal-edged): "How much?" → a number on a continuous line ($60k …… $500k). Arrow labeled "this unit" points right.

**Body:**
Classification answers *which category?* Regression answers *how much?* — a continuous number, not a label. Our target: the median home price in a California district.

**Speaker notes:**
Anchor the contrast that runs through the whole deck. Last unit: discrete label, two buckets, a probability. This unit: a continuous value, a price, a real number that can land anywhere on the line. The word "scalar" just means "a single number." Logistic regression aside (optional): warn them the name "regression" is overloaded — logistic regression is actually classification — but we're doing the real thing, predicting a continuous value.

---

## Slide 3 — Eight facts about a neighborhood

**Visual:** A single "district card" listing the 8 features (longitude, latitude, median house age, population, households, median income, total rooms, total bedrooms) → arrow → a single target box "median home price (teal)."

**Body:**
Each data point is a *district* (a block group ≈ a neighborhood). We get 8 numbers describing it; we predict 1 number — the median home price. 1990 census data; prices run ~$60k–$500k.

**Speaker notes:**
Features = the 8 descriptive numbers; target = the price. Stress these are already numbers — unlike the movie reviews, there's no text to convert. That's a relief and a new problem: the 8 numbers live on wildly different scales (latitude ≈ 34, population ≈ 1,400), which the next slides fix. The "block group" detail: average population ~1,425, so think "small neighborhood," not "city."

---

## Slide 4 — Tiny data. 480 to learn from.

**Visual:** Two small stacks — train (480, teal) and test (120, rust "sealed"). Caption: "small version on purpose." Code: `california_housing.load_data(version="small")`.

**Body:**
480 training districts, 120 test. The small version is chosen *on purpose* — real datasets are often tiny, and you need to handle that. Shape: `(480, 8)` train, `(120, 8)` test.

**Speaker notes:**
This is the slide that sets up the entire back half. Burn in "480." Everything unusual we do later — normalizing carefully, scaling targets, K-fold validation, a deliberately small model — traces back to *we barely have any data*. Make them feel the scarcity now so K-fold lands as an obvious fix later, not a random technique. The book deliberately picks the 600-district version over the 20,640 one to teach the small-data skills.

---

## Slide 5 — Put every feature on the same scale

**Visual:** Before/after bars. Before: three features at wildly different heights (population ~1400, latitude ~34, income ~3). After (amber): all centered at 0, similar width. Formula card: `(value − mean) / std`.

**Body:**
Features on different scales make learning hard. Fix: for each column, subtract its mean and divide by its standard deviation. Now every feature is centered at 0 with a similar spread.

**Speaker notes:**
This is *feature-wise normalization* and it's the regression equivalent of multi-hot encoding — the preprocessing idea this unit owns. Keep the math friendly: "subtract the average, divide by how spread out it is." A network fed raw numbers where one feature is in the thousands and another is near 34 will struggle; leveling them lets every feature get a fair say. Don't prove anything — just give the intuition that mismatched scales drown out the small-numbered features.

---

## Slide 6 — Mean and std come from TRAIN only

**Visual:** Train pile (teal) with a tag "compute mean + std here"; an arrow carries those numbers over to the test pile (rust, sealed) labeled "reuse the same numbers." A rust "✗" crosses out an arrow going the other way.

**Body:**
Compute mean and std on the **training** data, then use those same numbers to normalize the test data. Never compute anything from the test set — even an average.

**Speaker notes:**
The one discipline point in preprocessing, and a real-world habit worth forming. The test set is supposed to stand in for "data we've never seen." If we peek at it even to compute an average, it stops being a fair final exam. Tie it back to the classification unit's "never tune on the test set" — same principle, new place it shows up. Agents and beginners both slip here by normalizing the whole dataset at once.

---

## Slide 7 — Shrink the price too

**Visual:** A price tag "$283,000" → ÷100,000 → "2.83" (teal). Small note: multiply back by 100,000 to read dollars.

**Body:**
Prices in the hundreds of thousands force the network to learn huge weights, which trains slowly. Divide every price by 100,000: $283,000 → 2.83. Multiply back at the end to read dollars.

**Speaker notes:**
*Target scaling.* The inputs are now small numbers near 0, and the model starts with small random weights — so its first guesses are small. Asking it to output 283,000 from that starting point means crawling uphill forever at a small learning rate. Dividing targets by 100,000 puts them in the 0.6–5.0 range, same neighborhood as everything else, so training is quick. It's a convenience, not a law; you just remember to undo it when you report a dollar figure.

---

## Slide 8 — Small data → small model

**Visual:** Left-to-right pipeline — `8 features` → `Dense 64 / relu` → `Dense 64 / relu` → `Dense 1 / (no activation)` (teal) → `2.83`. A small caption under the last box: "linear — any number out."

**Body:**
Two hidden layers, 64 units each, then one output unit. Fewer samples → use a smaller model, or it memorizes instead of learning.

**Speaker notes:**
Read it as a pipeline, same as the classification deck. The relu layers do the pattern-finding (chapter 5 formalizes why the non-linearity matters; keep it light — "lets the model bend"). The deliberately small size is a small-data move: a big model on 480 samples overfits hard. The interesting end is the *last* box — and the next slide is entirely about why it has no activation.

---

## Slide 9 — The last layer is naked (and that's the point)

**Visual:** Contrast pair. Top (last unit): sigmoid S-curve clamped to 0–1, rust "✗ can only output 0–1." Bottom: a straight line through the origin, teal "✓ any value." Code: `Dense(1)` — no activation.

**Body:**
A regression output must be free to land anywhere. Put **no activation** on the last layer — it stays linear. (A sigmoid here would trap every prediction between 0 and 1.)

**Speaker notes:**
This is the headline regression idea and the cleanest contrast with the classification unit. There, the final sigmoid was the whole point — it squashed the score into a 0–1 probability. Here, squashing is exactly wrong: a house price can be 2.83 or 4.9 or anything, so the last layer must be a plain linear unit with no activation. "Naked last layer" is the phrase to leave in their heads. This is the single thing most likely to get copied wrong from the classification recipe.

---

## Slide 10 — New scoreboard: MSE and MAE

**Visual:** Two small cards. MSE (amber, "train on this"): big errors punished extra hard (a squared curve). MAE (teal, "read this"): average dollars off (a straight V). Caption: "accuracy doesn't exist for numbers."

**Body:**
No "accuracy" for numbers. Train on **mean squared error** (squares the miss, so big misses hurt most). Watch **mean absolute error** — the average dollars you're off. MAE 0.5 ≈ off by $50,000.

**Speaker notes:**
Parallel to the classification unit's "train on loss, watch accuracy," with new names. MSE is the loss the optimizer minimizes; squaring means a single wild miss matters a lot, which pushes the model to avoid big errors. MAE is the human-readable scoreboard — and because of the ÷100,000 scaling, an MAE of 0.5 reads as "$50,000 off on average." Keep hammering the dollar translation; it makes every later number meaningful. adam is still the optimizer — unchanged, one less thing to think about.

---

## Slide 11 — The small-data problem  ★ ANCHOR (setup)

**Visual:** One small pile of 480. A single split carves off ~100 for validation (amber) and leaves ~380 to train (teal). Two thought-bubbles show the SAME split giving very different validation scores. Rust caption: "100 examples → noisy, unreliable score."

**Body:**
A normal train/validation split leaves only ~100 districts to validate on. With so few, the score swings wildly depending on *which* 100 you happened to pick. You can't trust it.

**Speaker notes:**
This is the problem K-fold solves; spend real time setting it up before showing the fix. With 480 total, a single validation slice is ~100 districts — small enough that luck dominates. Pick an easy 100 and the model looks great; pick a hard 100 and it looks terrible. The score has high *variance*: it bounces around for reasons that have nothing to do with the model's real quality. Frame the next slide as "so how do we get a number we can actually trust?"

---

## Slide 12 — K-fold: everyone gets a turn  ★ ANCHOR

**Visual:** The classic K-fold grid. 4 rows, each row splits the data into 4 blocks; one block per row is amber ("validate") and the other three teal ("train"). The validating block walks left-to-right down the rows. Right edge: 4 scores → average (moss).

**Body:**
Split the data into 4 folds. Train 4 times; each time, one different fold is the validation set and the other three are training. Average the 4 scores. Every district gets used for validation exactly once.

**Speaker notes:**
Walk the grid one row at a time — fold 1 validates on block 1, trains on 2–3–4; fold 2 validates on block 2; and so on. The payoff is the average: instead of one shaky number from one lucky/unlucky 100, you get four numbers and average them, which cancels out the luck. "Everyone gets a turn in the validation seat" is the line. K is usually 4 or 5; we use 4. Note it costs 4× the training time — that's the price of a trustworthy number on tiny data, and it's worth it here.

---

## Slide 13 — Why we bother: the four scores

**Visual:** Four score chips — 0.298 / 0.349 / 0.232 / 0.305 — spread along a short line, with their average 0.296 marked in moss. Bracket spanning the spread labeled "this swing is the whole point."

**Body:**
Our four folds scored 0.298, 0.349, 0.232, 0.305 — a real spread (off by $23k to $35k). Any single one would mislead. The average, 0.296 (~$29,600 off), is the number to trust.

**Speaker notes:**
Make the spread visceral: the best fold says "$23,200 off," the worst says "$34,900 off." If you'd done one split and landed on fold 3, you'd brag; on fold 2, you'd panic. Neither is the truth. The average, ~$29,600, is honest. This is the concrete evidence for why slide 12's extra work pays off — point at the numbers. (Remind them: these wobble run-to-run from random initialization, so their numbers will differ.)

---

## Slide 14 — How long to train? Watch the curve.

**Visual:** Validation-MAE-vs-epochs curve (averaged over folds). Steep drop, then a long flat valley, then a slow rise. Moss band over ~120–140 epochs ("stops improving"); rust-tinted "overfitting zone" to the right. Note: "first 10 epochs cropped — off the chart."

**Body:**
Average the per-epoch MAE across folds and plot it. It drops fast, flattens, then creeps back up. Improvement stalls around **120–140 epochs** — past there, overfitting.

**Speaker notes:**
Same overfitting shape as the classification unit's loss curve, found a different way — through K-fold instead of a single validation split. The early epochs are so bad they squash the scale, so we crop the first 10 to actually see the valley. The lesson is identical and worth repeating: more training is not automatically better; the validation curve is the judge of when to stop. The exact stall point wanders run to run — teach the SHAPE (drop, flatten, rise), not "130."

---

## Slide 15 — Train once at 130, then grade once

**Visual:** Pipeline — fresh model → train on ALL 480, `epochs=130` → open the sealed test set ONCE (rust 🔒→open) → MAE 0.31 (teal). Number line: off by ~$31,000 against a $60k–$500k range.

**Body:**
Pick ~130 epochs from the curve. Train a fresh model on all 480 districts, then evaluate once on the sealed 120-district test set. Result: MAE ≈ 0.31 — off by about **$31,000** on average.

**Speaker notes:**
Close the loop exactly like the classification unit: throw away the experiments, train one fresh model to the chosen epoch count, open the test set a single time. ~$31,000 off sounds like a lot until you remember the range is $60k–$500k — it's a respectable first pass from a tiny model and tiny data. The test MAE (0.31) landing near the K-fold estimate (0.296) is the happy sign that our validation was honest.

---

## Slide 16 — Reading a prediction

**Visual:** `model.predict()` on one district → `2.83` → ×100,000 → "$283,000" (teal pill). Caption: "the output IS the answer — no threshold, no bucket."

**Body:**
`predict()` returns a number: 2.83. Multiply by 100,000 → ~$283,000, the model's price guess for that district. No 0.5 cutoff, no class — the number is the answer.

**Speaker notes:**
Contrast with both earlier models to lock in the difference: binary gave a probability you threshold at 0.5; multiclass gave a distribution you argmax; regression gives the answer directly — you just rescale it. Remind them to undo the ÷100,000 from slide 7. This is the moment the whole pipeline pays off: eight neighborhood facts went in, one dollar figure came out.

---

## Slide 17 — The regression recipe  ★ KEEPER

**Visual:** Recipe table — Dense(1) / no activation / mean_squared_error / adam / "K-fold when data is small." Teal "keep this" callout below (mirrors the classification deck's keeper slide, no trap).

**Body:**
| Decision | Choice | Why |
|---|---|---|
| Final layer | `Dense(1)` | one number out |
| Final activation | none (linear) | any value, not just 0–1 |
| Loss | `mean_squared_error` | punishes big misses |
| Watch | `mean_absolute_error` | average dollars off |
| Optimizer | `adam` | reliable default |
| Small data | K-fold validation | a score you can trust |

**Speaker notes:**
Tell them to photograph this slide — it's the partner to the binary-classification recipe. Lay the two side by side out loud: same optimizer (adam), same overfitting vigilance, but the three regression-specific swaps are (1) Dense(1) with **no activation** instead of sigmoid, (2) **mean_squared_error** instead of binary_crossentropy, (3) **MAE** as the scoreboard instead of accuracy — and K-fold whenever data is scarce. Those swaps ARE scalar regression.

---

## Slide 18 — Change one knob. Re-run. Write it down.

**Visual:** Knob diagram — one dial highlighted (amber), the rest fixed. Table of experiments (layers: 1 or 3 / units: 32 or 128 / epochs / K value). "predict → run → compare."

**Body:**
Change one thing at a time so you know what caused what. Try: 1 or 3 layers; 32 or 128 units; fewer/more epochs; K=5 instead of 4.

**Speaker notes:**
The lab's payload, same discipline as the classification unit. Before each run, write a one-line prediction, then check it — the prediction is what builds the mental model. Watch especially how the K-fold average and its spread move when they change model size. Prompt Masters: ask the AI partner to predict a run's outcome first, then catch it when it's wrong — that's the bridge into Apply/Assess.

---

## Slide 19 — Close

**Visual:** Closing statement, no diagram.

**Body:**
Eight facts in, one price out. Numbers → normalize → a small stack → a single linear value. Scale the target, trust K-fold when data is thin, stop where the validation curve flattens. Next: the lab, then probe your agent in Apply/Assess.

**Speaker notes:**
Land the three keepers: (1) regression ends in one **linear** unit — no activation; (2) train on **MSE**, read **MAE** in dollars; (3) tiny data demands **K-fold** for a trustworthy score. Tie the bow back to the classification unit — same loop, same overfitting lesson, different shape at the ends — and send them to the notebook.

---

## Appendix A — Classification ↔ regression map (instructor reference)

| Piece | Classification (IMDB) | Regression (housing) |
|---|---|---|
| Question | which bucket? | how much? |
| Input | text → multi-hot vector | 8 numbers → normalized |
| Final layer | `Dense(1)`, **sigmoid** | `Dense(1)`, **no activation** |
| Loss | `binary_crossentropy` | `mean_squared_error` |
| Scoreboard | accuracy | mean absolute error (MAE) |
| Validation | single hold-out split | **K-fold** (small data) |
| Output | probability (threshold 0.5) | a number (rescale ×100,000) |
| Shared | adam · the training loop · watch for overfitting | (same) |

## Appendix B — Design system notes

- Palette tokens: navy `#0E1F33`, cream `#F4ECD2`, amber `#E0A93B`, teal `#34B3A0`, moss `#8FA85A`, rust `#C9603F`.
- Type stack: Space Grotesk (UI/headings), JetBrains Mono (code/numbers), Instrument Serif (display quotes).
- Texture: scanline overlay + faint {7/3} heptagram watermark, bottom-right.
- Self-contained; only external dependency is Google Fonts.
- Controls: ← → / space to move · **N** speaker notes · **F** fullscreen · click advances.

## Appendix C — Fast-moving-target note

This unit uses the **3rd-edition** dataset: `keras.datasets.california_housing.load_data(version="small")` (480 train / 120 test, 8 features) — NOT the deprecated Boston Housing from the 2nd edition. Re-verify each term: the Keras dataset API, the `adam` default, and notebook runtime. Chollet's notebook defaults to the JAX backend (`KERAS_BACKEND="jax"`); TF/PyTorch give equivalent results. Numbers (fold scores, final MAE) wobble run-to-run from random initialization.
