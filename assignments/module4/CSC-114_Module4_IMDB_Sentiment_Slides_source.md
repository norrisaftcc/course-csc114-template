# CSC-114 slide source — Positive or Negative? (IMDB sentiment)

**Topic:** Binary text classification, end to end — text → numbers → a small network → a probability, and the overfitting lesson
**Frame:** The first real-world ML workflow of the course; the binary-classification recipe students will reuse
**Audience:** CSC-114, mixed-ability, ~10th-grade reading level for body copy
**Pedagogical pin:** The overfitting curve (slide 11) is the anchor the graded assessment pulls on. Teach the *shape*, not a fixed epoch.
**Estimated runtime:** 30–40 minutes of lecture + live notebook demo, depending on Q&A
**Companion files:** `..._Slides.html` (self-contained deck), `..._Reading.md`, `..._Lab.ipynb`

---

## Module overview (instructor brief)

This unit is one of two parallel standalone units in Module 4 (the other is house prices / regression, built by a separate pair). It teaches its own scaffolding — validation sets, overfitting, the training-loop recap — and assumes no dependency on the regression half.

The deck is visual-first: body text is deliberately thin, and the teaching load sits in the **diagrams** and the **speaker notes**. Press **N** in the HTML deck to surface the notes drawer while presenting.

Five "catch the AI" traps are seeded across the slides and reused verbatim in the exit ticket and Apply/Assess. They are flagged in the notes below as **Trap #n**.

**Color grammar** (consistent across the deck): teal = positive / the model's good path · rust = negative / danger / overfitting · amber = the key idea or the thing we tune · moss = safe practice (validation, the best epoch).

---

## Slide 1 — Title

**Visual:** Title only. Heptagram watermark, scanline texture. No diagram.

**Body:**
- Positive or Negative?
- *Teaching a network to read a movie review and guess how it felt.*
- Binary classification · the IMDB dataset · Chollet & Watson, Ch. 4

**Speaker notes:**
Welcome them in. The whole arc: a computer can't read, so we turn words into numbers, stack three layers, and watch it learn — then watch it overfit, which is the lesson that sticks. Name the one keeper up front: a model that gets better on its training data is *not* automatically a better model.

---

## Slide 2 — Two buckets. One decision.

**Visual:** Flow diagram — `a review (words)` → `model` → branches to `positive` (teal) / `negative` (rust). Running review #0 quoted below.

**Body:**
Binary classification = sorting each input into one of exactly two buckets. The running example, review #0: *"? this film was just brilliant casting location scenery story direction everyone…"*

**Speaker notes:**
Anchor review #0 (labeled positive). We carry it through the deck. Stress the goal is a *probability*, not a hard yes/no. Keep "two buckets" in their ears — the whole recipe at the end flows from "two."

---

## Slide 3 — A computer can't read

**Visual:** Three cards — review #0 as words, as integers `[1, 14, 22, 16, …]`, and its label (0=negative, 1=positive; #0 → 1).

**Body:**
50,000 reviews (25k train / 25k test, half/half), shipped inside Keras already converted to integer lists. Each integer stands for one word. Labels live in a separate list.

**Speaker notes:**
Features = the word-numbers; target = the 0/1 label. Same vocabulary as Module 3. The conversion to integers is done for us here; chapter 14 does raw text from scratch.

---

## Slide 4 — Decoding: mind the shift of 3

**Visual:** The three reserved slots (0=pad, 1=start, 2=unknown) in rust; then `number 16 → 16 − 3 = 13 → "brilliant"`. Rust trap callout.

**Body:**
Indices 0, 1, 2 are reserved for housekeeping, so every real word is shifted by 3. **Trap:** forget the `- 3` and decoded reviews are nonsense.

**Speaker notes:**
**Trap #3 (decode offset).** The leading "?" in review #0 is the start token (index 1), which maps to no English word. If time allows, demo the decode with and without `- 3` live so the failure is visceral. Agents drop this shift constantly.

---

## Slide 5 — Keep the top 10,000 words

**Visual:** A full vocabulary bar (88,585) above a "keep 10k / discard the long tail" bar. Code: `imdb.load_data(num_words=10000)`.

**Body:**
The full vocabulary is 88,000+ words; most appear once and can't teach a general pattern. Capping at 10,000 keeps data manageable with almost no lost signal.

**Speaker notes:**
**Trap #5 (num_words rationale).** They must be able to say *why* 10,000, not parrot it: rare words don't generalize, and the cap keeps encoded vectors a sane width. An agent that gives the number without the reasoning is the tell.

---

## Slide 6 — Multi-hot encoding

**Visual:** A 10-slot row with 1s lit (amber) at slots 5 and 8, rest 0. Caption: every review → one row, 10,000 wide.

**Body:**
Reviews differ in length; the network needs one fixed shape. Make a row of 10,000 slots, one per word; put a 1 where a word is present, 0 elsewhere. Loses order and counts; keeps *which words appeared*.

**Speaker notes:**
The one genuinely new idea, and the thing the assessment asks them to explain in their own words. Textbook's tiny example: `[8, 5]` → a 10,000-long vector, all zeros except 1s at positions 5 and 8. Dwell on what's thrown away — order and frequency — and that it still works. That's the interesting part.

---

## Slide 7 — Three layers, ending in one yes/no knob

**Visual:** Left-to-right pipeline — `review vector (10,000)` → `Dense 16 / relu` → `Dense 16 / relu` → `Dense 1 / sigmoid` (teal) → `0.93`.

**Body:**
Units = room to find patterns. relu = lets it learn non-straight-line patterns. 1 sigmoid unit = a single probability out.

**Speaker notes:**
Read it as a pipeline. Keep relu light — "lets the model bend, or the whole stack collapses to one straight line"; chapter 5 formalizes it. Burn in the right end: **one unit, sigmoid.** That ending *is* binary classification.

---

## Slide 8 — Why sigmoid

**Visual:** The sigmoid S-curve (teal) squashing input to the 0–1 range. Code: `Dense(1, activation="sigmoid")`.

**Body:**
Output reads as a probability: near 1 → positive, near 0 → negative, near 0.5 → unsure.

**Speaker notes:**
Short and visual. Takeaway: sigmoid turns a raw score into a readable probability — which is also *why* the next slide's loss is binary_crossentropy, built for probabilities.

---

## Slide 9 — The same loop from Module 3

**Visual:** Cycle diagram — `guess` → `measure how wrong (binary_crossentropy)` → `nudge the knobs (adam)` → loop back. "repeat, many times."

**Body:**
binary_crossentropy punishes confident wrong answers hardest. adam is the reliable default optimizer. We *watch* accuracy, but train on the loss.

**Speaker notes:**
Frame as return, not new material. The nuance students conflate: we *minimize* loss; accuracy is a human-readable scoreboard we *monitor*.

---

## Slide 10 — Never tune on the test set

**Visual:** Three stacked piles — training (moss, "learn here"), validation (amber, "tune here"), test (rust, "sealed 🔒, opened once"). 10,000 reviews held out.

**Body:**
Tune against validation freely. Tune against test and you've let the model peek at the final exam — its score stops meaning anything.

**Speaker notes:**
**Trap #4 (tuning on test).** Intuition that lands: the test set is a final exam you sit once; every peek-and-adjust turns it into a practice test. The validation set is what makes the next slide observable at all.

---

## Slide 11 — Watch it overfit  ★ ANCHOR

**Visual:** Loss-vs-epochs chart. Training loss (cream dashed) falls monotonically; validation loss (amber solid) dips to a minimum ~epoch 4 then climbs. Moss marker at the best epoch; rust-tinted "overfitting zone" to the right.

**Body:**
Training keeps improving; validation peaks early then gets worse — better on the practice test, worse on the real exam. **Trap:** "more epochs = better."

**Speaker notes:**
Spend real time here — the slide they leave with in their heads. Walk the two lines separately: training loss falls forever (it's memorizing what it's already seen); validation loss is the honest signal and it turns around. **Trap #2 (more epochs).** The exact turnaround epoch wanders run to run — teach the SHAPE, not "4." This is the anchor for the graded assessment: students point at their OWN run's turnaround and explain it, which copied text can't fake.

---

## Slide 12 — Retrain for ~4 epochs, then grade once

**Visual:** Accuracy number line — coin flip 50% (rust) · ours ~88% (teal) · SOTA ~95% (amber). Code: fresh model, `epochs=4`, then `evaluate`.

**Body:**
Throw away the overtrained model; train fresh only to the peak; evaluate once on the sealed test set. ~88% from a few lines; number wobbles a little each run (random start).

**Speaker notes:**
Use the wobble to pre-empt "I got 0.87, is that wrong?" — no, random initialization, it's fine. ~95% is what polished methods reach; 88% is a strong naive baseline.

---

## Slide 13 — Predictions are probabilities

**Visual:** Table of `predict()` outputs — 0.98 / 0.99 (positive pills), 0.02 (negative pill), 0.65 / 0.41 (unsure).

**Body:**
Near 1 = positive, near 0 = negative, near 0.5 = honestly on the fence. A confident review like #0 scores up near 1.

**Speaker notes:**
Close the loop on review #0 — but don't claim a specific predicted value for it (the book's `predict()` runs on the test set, a different review). Dwell on the 0.5-ish outputs for the ethics thread: a model that outputs honest uncertainty beats one that always sounds sure.

---

## Slide 14 — The binary-classification recipe  ★ KEEPER

**Visual:** Recipe table — Dense(1) / sigmoid / binary_crossentropy / adam / "watch for overfitting." Rust "Catch the AI" callout below.

**Body:**
| Decision | Choice | Why |
|---|---|---|
| Final layer | `Dense(1)` | one probability out |
| Final activation | `sigmoid` | squashes to 0–1 |
| Loss | `binary_crossentropy` | built for probabilities |
| Optimizer | `adam` | reliable default |
| Watch for | overfitting | monitor validation |

**Speaker notes:**
Tell them to photograph this slide. **Trap #1 (binary vs multiclass) — the headline trap.** softmax and categorical_crossentropy are for many mutually-exclusive classes; binary is one sigmoid unit + binary_crossentropy. Because we deliberately never taught the multiclass case, an agent bleeding the two together is exactly the confident error the assessment rewards catching.

---

## Slide 15 — Change one knob. Re-run. Write it down.

**Visual:** Knob diagram — one dial highlighted (amber), the rest fixed. Table of the four experiments (layers / units / loss / activation). "predict → run → compare."

**Body:**
Change two things and you won't know which mattered. Try: 1 or 3 layers; 32/64 units; `mean_squared_error`; `tanh`.

**Speaker notes:**
The lab's payload. Before each run they write a one-line prediction, then check it — the prediction forces a mental model. Prompt Masters: ask the AI partner to predict first, then catch it when it's wrong. That's the bridge into Apply/Assess agent-probing.

---

## Slide 16 — Close

**Visual:** Closing statement, no diagram.

**Body:**
Two buckets, one honest number. Text → numbers → a stack of layers → a probability. Watch the validation curve, stop at the peak, never trust a model just because it sounds sure. Next: the lab, then probe your agent in Apply/Assess.

**Speaker notes:**
Land the three keepers: (1) vectorize text first; (2) binary = one sigmoid unit + binary_crossentropy; (3) more training ≠ better — the validation curve is the judge. Send them to the notebook.

---

## Appendix A — Trap map (instructor reference)

| Trap | Seeded on | Reused in |
|---|---|---|
| #1 binary vs multiclass | Slide 14 (and absence of softmax anywhere) | Exit ticket distractor; known-bad probe |
| #2 more epochs = better | Slide 11 | Apply/Assess reflection vs. own curve |
| #3 decode offset-by-3 | Slide 4 | Optional Code-Builder probe |
| #4 tuning on the test set | Slide 10 | Known-bad probe |
| #5 num_words rationale | Slide 5 | Exit-ticket short answer |

## Appendix B — Design system notes

- Palette tokens: navy `#0E1F33`, cream `#F4ECD2`, amber `#E0A93B`, teal `#34B3A0`, moss `#8FA85A`, rust `#C9603F`.
- Type stack: Space Grotesk (UI/headings), JetBrains Mono (code/numbers), Instrument Serif (display quotes).
- Texture: scanline overlay + faint {7/3} heptagram watermark, bottom-right.
- Self-contained; only external dependency is Google Fonts.
- Controls: ← → / space to move · **N** speaker notes · **F** fullscreen · click advances.

## Appendix C — Fast-moving-target note

Re-verify each term: Keras dataset API (`imdb.load_data`, `get_word_index`), the `adam` default, and notebook runtime. Chollet's notebook defaults to the JAX backend (`KERAS_BACKEND="jax"`); TF/PyTorch give equivalent results. First run downloads ~80 MB.
