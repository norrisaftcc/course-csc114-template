# CSC-113 slide source — three ways to find a square root

**Topic:** Exhaustive enumeration → bisection search → Newton-Raphson (after Guttag ch. 3)
**Frame:** Planning to solve a problem, taught through numerical methods
**Audience:** CSC-113, mixed-ability, ~10th-grade reading level for body copy
**Pedagogical pin:** Name the "iterative-solver shape" here, generalize in a later module
**Estimated runtime:** 25–35 minutes of lecture + demo, depending on Q&A

---

## Module overview (instructor brief)

The point of this module is *not* to teach numerical methods. It's to use three algorithms that solve the same problem to expose a way of thinking: *more knowledge about a problem lets you do less work, but raises the stakes if your assumptions are wrong.* That meta-skill transfers directly to how students will use AI tools in the rest of the course. Brute-force prompting is exhaustive enumeration. Comparing two prompt variants is bisection. Knowing how an LLM responds to specificity and writing the right prompt the first time is Newton.

The "iterative-solver shape" introduced on slide 9 should be named and labeled here, but **not generalized** to other domains yet. We're laying groundwork to return to it later.

---

## Slide 1 — Title

**Visual:** Title slide, no diagram.

**Body:**
- Title: Three ways to find a square root
- Subtitle: Same problem, very different amounts of work

**Speaker notes:**
Set up the day. We're going to look at three algorithms that all answer the same question — what's √x — and each one is dramatically faster than the last. The point isn't the algorithms themselves. It's what changes between them, because that's a way of thinking that travels.

---

## Slide 2 — Same problem, three different questions

**Visual:** Three rows of text, each with an algorithm name and the question it implicitly asks. Use the same three-color palette as the rest of the deck (gray / teal / purple).

**Body:**
Each algorithm answers the same question — *what's √x* — but each one asks a different implicit question about how it's allowed to think:

| Algorithm | Implicit question |
|---|---|
| Exhaustive enumeration | "Can I just check every possibility?" |
| Bisection search | "What can I rule out without checking?" |
| Newton-Raphson | "Given what I know, where *should* the answer be?" |

**Speaker notes:**
This is the whole module in one slide. Checking → ruling out → predicting. That progression is the spine of computational thinking. Don't dwell — just plant the question and move to the visual.

---

## Slide 3 — Visualization: three search strategies on the number line

**Visual:** Three stacked horizontal number lines from 0 to 2, each showing where one algorithm tests values when finding √2 (≈ 1.414, marked with an amber vertical line in every row).

- Row 1 (gray): ~28 small dots evenly spaced from 0 along the line, ending in a green dot near the target. Label "Exhaustive enumeration — step 0.05 across [0, 2]."
- Row 2 (teal): 4 numbered dots on the line at positions 1.0, 1.5, 1.25, 1.375 (numbered 1, 2, 3, 4 in the order they're tested). Label "Bisection search — halve the range each step."
- Row 3 (purple): 3 dots on the line at positions 1.0, 1.5, and ≈1.414, with two curved arrows showing the leap sequence (1.0 → 1.5, then 1.5 → 1.414). Labels: "x₀ = 1.0" below the first dot, "x₁ = 1.5" below the second, and "x₂, x₃ ≈ √2" above the cluster at the target. Title: "Newton-Raphson — use the slope to predict."

**Body:** (visual only; no slide body text)

**Speaker notes:**
The story is told by density. Row 1 is a sea of dots. Row 2 is four. Row 3 is effectively two distinct positions. Same target, same precision, dramatically different amount of work. Don't explain *how* each algorithm works yet — just let students see the asymmetry. The next three slides do the explaining.

---

## Slide 4 — Exhaustive enumeration

**Visual:** Code block on the right, idea/demand box on the left.

**Body:**

The idea: try every value, in order, from 0 upward.

```python
def sqrt_exhaustive(target, epsilon=0.01, step=0.001):
    guess = 0.0
    while abs(guess**2 - target) >= epsilon:
        guess += step
    return guess
```

What it demands from the problem: **almost nothing.** You need to be able to evaluate `f(x)` and compare it to a target. That's the only prerequisite. This will work on any function, however ugly.

**Cost at ε=0.01 on target=2:** 1,411 iterations.

**Speaker notes:**
The trade-off to surface: exhaustive is the most generally applicable algorithm we'll show, but also the slowest. Generality has a price. This is the baseline against which we measure the next two.

---

## Slide 5 — Bisection search

**Visual:** Code block on the right, idea/demand box on the left.

**Body:**

The idea: at each step, throw away half the search space.

```python
def sqrt_bisection(target, epsilon=0.01):
    low, high = 0.0, max(1.0, target)
    guess = (low + high) / 2
    while abs(guess**2 - target) >= epsilon:
        if guess**2 < target:
            low = guess
        else:
            high = guess
        guess = (low + high) / 2
    return guess
```

What it demands from the problem: the function must be **monotonic** on the interval (always going up, or always going down). If we didn't know `x²` increases as `x` increases, we couldn't safely throw half the space away.

**Cost at ε=0.01 on target=2:** 7 iterations.

**Speaker notes:**
The trade is visible here. Bisection knows something exhaustive didn't — that x² is monotonic on [0, 2] — and the payoff is roughly 200× fewer iterations. The prerequisite isn't free, though. If a student tried to bisect-search for x where sin(x) = 0.5, they'd silently get the wrong answer because the monotonicity assumption breaks.

---

## Slide 6 — Newton-Raphson

**Visual:** Code block on the right, idea/demand box on the left.

**Body:**

The idea: use the slope of the function to predict where the answer is, and jump there.

```python
def sqrt_newton(target, epsilon=0.01):
    guess = target / 2 if target > 1 else 1.0
    while abs(guess**2 - target) >= epsilon:
        guess -= (guess**2 - target) / (2 * guess)
    return guess
```

What it demands from the problem: a **derivative** (the slope), and a **starting guess** in the right basin. Newton can diverge, oscillate, or converge to the wrong root if either condition is wrong.

**Cost at ε=0.01 on target=2:** 2 iterations. At ε=10⁻⁶: only 4 iterations.

**Speaker notes:**
Newton has roughly quadratic convergence — the number of correct digits doubles every iteration once you're near the root. That's its superpower, and also the source of overconfidence: when Newton works, it works *fast*, which makes people forget it can fail spectacularly. Foreshadow the failure-modes lesson but don't open it yet.

---

## Slide 7 — Cost comparison

**Visual:** A simple three-column bar chart or large numeric callouts comparing iteration counts. Two rows: one at ε=0.01, one at ε=10⁻⁶.

**Body:**

| Precision | Exhaustive | Bisection | Newton |
|---|---|---|---|
| ε = 0.01 | 1,411 | 7 | 2 |
| ε = 10⁻⁶ | ~14 million | 22 | 4 |

Same problem. Same answer. Three orders of magnitude difference at moderate precision; six orders at tight precision.

**Speaker notes:**
The numbers are the point. Don't editorialize too much. Let students react. Then ask the leading question for slide 8: *"What's actually changing between the three programs to make this happen?"*

---

## Slide 8 — What stays the same, what changes

**Visual:** The three Python functions shown side by side, with identical lines highlighted in one color and varying lines highlighted in another (use the same purple-highlight motif as slide 9).

**Body:**

Three things are **identical** across all three implementations:
- the function signature
- the convergence test: `while abs(guess**2 - target) >= epsilon:`
- the return: `return guess`

Two things **vary**:
- how state is initialized (and what counts as state — bisection carries an interval, the others carry a single number)
- the update rule inside the loop

The update rule is where the algorithm's *knowledge of the problem* lives.

**Speaker notes:**
This slide is the hinge of the module. It's the moment the lesson stops being about three algorithms and starts being about a pattern. Read it slow. Take a beat. The next slide names the pattern.

---

## Slide 9 — Visualization: the iterative-solver shape

**Visual:** Two-part layout.

**Top:** a code-block card showing the common skeleton:

```
[setup state]
while abs(guess**2 - target) >= epsilon:
    [update state]
return guess
```

The bracketed parts `[setup state]` and `[update state]` are highlighted (use the deck's info-blue accent). A small legend says "highlighted slots vary between algorithms."

**Bottom:** three equal-width cards in a row, one per algorithm. Each card has three sections:
- "setup state" with the actual code for that algorithm
- "update state" with the actual code
- "cost at ε=0.01" with the iteration count as a large number

Card contents:

| | Exhaustive | Bisection | Newton-Raphson |
|---|---|---|---|
| setup | `guess = 0.0` | `low, high = 0, 2` <br> `guess = (low+high)/2` | `guess = target / 2` |
| update | `guess += step` | `if guess**2 < target:` <br>`  low = guess` <br>`else:` <br>`  high = guess` <br>`guess = (low+high)/2` | `err = guess**2 - target` <br> `guess -= err / (2*guess)` |
| cost (ε=0.01) | 1,411 iterations | 7 iterations | 2 iterations |

**Body:** (visual only; no slide body text)

**Speaker notes:**
This is the slide students should leave the lecture with in their heads. Same outer skeleton, three different fillings, three orders of magnitude in cost. Spend time here. Point at the highlighted slots. Ask students which card they'd pick if they didn't know whether `f` was monotonic. Ask which they'd pick if they didn't know the derivative.

---

## Slide 10 — The shape has a name

**Visual:** Large text only. No diagram needed.

**Body:**

**The iterative-solver shape:**

```
initialize state
while not close enough:
    update state
return result
```

Every numerical algorithm we'll meet in this course sits on this skeleton. The outer shape stays the same. The update rule is where the algorithm's knowledge of the problem goes.

**Speaker notes:**
This is the *pin*. We're naming the pattern so we can refer back to it later, but we're not yet claiming it generalizes beyond numerical methods. (It does, but that's a later conversation.) When students see another iterative algorithm in week 6 or 9, the instructor should be able to say "remember the iterative-solver shape?" and have something to point at.

---

## Slide 11 — Coming next: the smartest algorithm has the worst failure modes

**Visual:** Teaser slide. Optionally a small thumbnail of a divergent Newton iteration (a plot where guesses fly off to infinity or oscillate).

**Body:**

- Exhaustive enumeration: slow, almost impossible to break.
- Bisection: needs monotonicity. Fails silently if you give it the wrong interval.
- Newton-Raphson: needs a derivative and a good starting guess. Fails *spectacularly* when assumptions are wrong — it can diverge, oscillate, or land on a different root entirely.

**Coming next session:** we break Newton on purpose, watch it explode, and talk about why faster isn't always safer.

**Speaker notes:**
This is also the bridge to the AI-collaboration discussion. The smartest tool has the worst failure modes when assumptions are wrong is the *same lesson* students need for prompt engineering. Save that connection for the failure-modes session — it lands harder once they've seen Newton diverge.

---

## Appendix A — Assignment hook (for instructor)

The fill-in-the-blank version of this material works because the outer skeleton is *given*. Students don't write the loop. They fill the two highlighted slots — setup and update — and the AI-collaboration prompt is:

> "Ask your AI partner to explain what each update rule *requires you to know* about the function before you can use it. Then explain back to it where each algorithm would fail."

That keeps the cognitive load on the actual pedagogy (what does the algorithm know that lets it skip work?) rather than on while-loop debugging.

## Appendix B — Color palette and motif suggestions

For visual consistency across the deck:

- Exhaustive enumeration → neutral gray (uninformed; structural)
- Bisection search → teal (knows about ordering)
- Newton-Raphson → purple (knows about derivatives)
- Target marker (√2) → amber vertical line, consistent across all three visualizations
- Highlighted "varies" slots → info-blue accent on a light background

The same three colors should appear in the same roles on slides 3, 8, and 9 so the visual grammar carries across the module.

## Appendix C — Worked iteration traces (instructor reference)

Bisection on [0, 2] for target=2, ε=0.01:

| iter | guess | guess² | new low | new high |
|---|---|---|---|---|
| 1 | 1.0 | 1.0 | 1.0 | 2.0 |
| 2 | 1.5 | 2.25 | 1.0 | 1.5 |
| 3 | 1.25 | 1.5625 | 1.25 | 1.5 |
| 4 | 1.375 | 1.89 | 1.375 | 1.5 |
| 5 | 1.4375 | 2.066 | 1.375 | 1.4375 |
| 6 | 1.40625 | 1.978 | 1.40625 | 1.4375 |
| 7 | 1.421875 | 2.022 | 1.40625 | 1.421875 |
| stop | 1.4140625 | 1.9996 | — | — |

Newton-Raphson on target=2, ε=0.01, starting x₀ = 1.0:

| iter | x | x² | error \|x² − 2\| |
|---|---|---|---|
| 0 | 1.0 | 1.0 | 1.0 |
| 1 | 1.5 | 2.25 | 0.25 |
| 2 | 1.4167 | 2.0069 | 0.0069 ← stop |
| 3 | 1.41422 | 2.00000 | 4×10⁻⁶ |
| 4 | 1.41421356 | 2.000000000 | machine ε |
