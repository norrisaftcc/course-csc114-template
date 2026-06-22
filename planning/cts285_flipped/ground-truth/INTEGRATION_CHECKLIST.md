# Integration Checklist — Wire Module 4.5 into the live `modules.js` planner

**Goal:** get the interstitial rendering in the generated CTS-285 planner.
**Prereq we're waiting on:** read access to the `modules.js v2.0` source repo.
**Time once you have it:** ~5–15 min (paste + reconcile field names + regen + eyeball).

Everything content-side is already done and frozen:
- Canonical content: [`module-04.5.md`](module-04.5.md)
- Paste-and-reconcile data object: [`module-04.5.candidate.js`](module-04.5.candidate.js)
- Standalone visual target: [`../module-4.5-agent-flow/module-4.5-interstitial.html`](../module-4.5-agent-flow/module-4.5-interstitial.html)

---

## Step 0 — Orient in the real source (2 min)

When you open the `modules.js` repo, find:

- [ ] The **modules data array** (the thing that gets `.map()`-ed / looped to emit
      `.module-block` HTML). Note its variable name and the **real field keys** of
      an existing module object (e.g. is it `sub` or `subtitle`? `before` or
      `beforeClass`?).
- [ ] The **render function / template** that turns one module object into a
      `.module-block`. Note whether it branches on any per-module `type`/`loop`.
- [ ] The **grade-summary roll-up** (the pills + total) — how it sums `points`.

## Step 1 — Reconcile the candidate object against the real schema (3–5 min)

Open [`module-04.5.candidate.js`](module-04.5.candidate.js) and walk its
**RECONCILE block (#1–#7)**. The values are confirmed against `module-04.5.md`;
only the **keys and the styling hooks** may need changing:

- [ ] **Rename keys** to match the real schema (#7). Values stay as-is.
- [ ] **`type:"interstitial"` (#1)** — decide: add a one-line render branch for the
      dashed-teal treatment, *or* drop styling and ship a plain block. (Copy the
      inline styles from the static HTML if branching.)
- [ ] **`loop:"interstitial"` (#2)** — confirm the section-divider grouping tolerates
      a third value; if not, set `loop:"loop1"` so it files under Loop 1.
- [ ] **Badge classes (#4)** — add `badge-interstitial` / `badge-selfgraded` /
      `badge-focus` to the CSS, *or* remap to existing classes (the fallbacks are
      noted inline).
- [ ] **`points:0` (#3)** — confirm the roll-up handles a 0-pt module and **does not**
      auto-assign it the missing 50 pts (see [`crosswalk.md`](crosswalk.md) DEFECT-1).

## Step 2 — Insert at the right position (1 min)

- [ ] Place the object **immediately after Module 04 and before Module 05** in the
      array (it lives in the M4→M5 gap; it must not shift M5–M8 numbering).
- [ ] If the array is index-ordered, splice at M5's index. If it's id-keyed/sorted,
      make sure `"04.5"` sorts between `"04"` and `"05"` (quote it — bare `4.5`
      can re-order or coerce to a float).

## Step 3 — Regenerate and visually verify (3 min)

- [ ] Run the planner's build/generate step (whatever emits the HTML).
- [ ] Confirm the interstitial appears **between M4 and M5** with: "MOD 4.5" tag,
      the title, four badges, the three L/P/A/A columns, the Human-in-the-Loop gate
      box, the four `I.x` MLOs, the three self-graded artifacts, the thread bar, and
      the lock row.
- [ ] **Side-by-side check** against
      [`module-4.5-interstitial.html`](../module-4.5-agent-flow/module-4.5-interstitial.html)
      — the generated block should match that target (modulo the styling decision
      from Step 1).
- [ ] Confirm **M5–M8 are unchanged** (no shifted weeks, points, or gates).
- [ ] Confirm the **grade-summary total is unchanged** (still 950; 4.5 adds 0).

## Step 4 — Don't regress the defects (1 min)

- [ ] The 950-vs-1,000 (DEFECT-1) and M5 105-vs-125 (DEFECT-3) discrepancies are
      **upstream and intentional to leave** for now. Do not "fix" them as a side
      effect of this integration. If you *do* resolve them, do it as a separate,
      labeled change and update [`crosswalk.md`](crosswalk.md).

## Step 5 — Update the Quick Reference (optional, 2 min)

The planner's **Instructor Quick Reference** lists RSI touchpoints and Hard Gates.
The interstitial:

- [ ] adds **no** Hard Gate (it gates nothing) — leave the Hard Gates panel as-is.
- [ ] adds **no** instructor RSI touchpoint — its analogue is the student-owned
      merge gate. Optionally add a one-line note so it isn't mistaken for an
      omission. (See [`crosswalk.md`](crosswalk.md) RSI section for the exact
      wording.)

---

## If you can't get `modules.js` by the session

You lose **nothing** for the teaching pilot. Fallbacks, in order of preference:

1. **Ship the standalone preview** — the interstitial is fully presentable today
   as [`module-4.5-interstitial.html`](../module-4.5-agent-flow/module-4.5-interstitial.html).
   Link it from wherever the planner is shared.
2. **Run the module from the markdown** — students do the entire module from
   [`../module-4.5-agent-flow/`](../module-4.5-agent-flow/) with no renderer at all.
3. **Hand this folder to the `modules.js` owner** — the candidate object + this
   checklist are the whole hand-off; they can wire it without us.

The renderer integration is cosmetic/positional. The module is done.
