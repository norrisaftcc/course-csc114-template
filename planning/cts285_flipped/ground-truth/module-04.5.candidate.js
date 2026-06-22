/* =============================================================================
 * CANDIDATE modules.js DATA OBJECT — Module 4.5 (Interstitial)
 * =============================================================================
 *
 * STATUS: INFERRED, NOT CONFIRMED. The real modules.js v2.0 lives in another
 * repo and we have not seen its source. The field names below are reverse-
 * engineered from the RENDERED planner HTML (CTS285_Flipped_Classroom_Planner.html),
 * mapped to the CSS classes each value lands in. Treat this as a paste-and-
 * reconcile starting point, NOT a drop-in. See RECONCILE block at the bottom and
 * INTEGRATION_CHECKLIST.md for the step-by-step.
 *
 * Canonical content source of record: ground-truth/module-04.5.md
 * Standalone visual reference: ../module-4.5-agent-flow/module-4.5-interstitial.html
 *
 * INSERTION POINT: immediately AFTER the Module 04 object and BEFORE Module 05
 * in whatever array modules.js iterates to render module-blocks.
 * ========================================================================== */

const MODULE_4_5 = {
  // --- identity / header (renders to .module-num, .module-titles, .module-badges)
  num: "4.5",                       // → .module-num "MOD 4.5"  (renderer may prefix "MOD ")
  id: "04.5",                       // stable key; quote so it isn't parsed as float 4.5
  type: "interstitial",             // NEW value — see RECONCILE #1 (drives dashed-teal treatment)
  title: "Teach Your Agent The Flow",                                  // → .module-titles h2
  sub: "Interstitial — Delegate the Sacred Flow's mechanics to a coding agent; keep the merge · Role: Tech Lead delegating to a junior", // → .module-titles .sub
  loop: "interstitial",             // not loop1/loop2 — see RECONCILE #2
  weeks: "Between Wk 8 & 9",        // → .badge-weeks
  points: 50,                       // self-graded, awarded by default on completion — the resolved 950→1,000 gap (see RECONCILE #3)
  pointsAward: "by default on completion (self-graded)",
  selfGraded: true,                 // NEW flag — renderer may ignore; used to render "50 pts · Self-Graded"
  gatesNext: false,                 // gates nothing

  // --- badges (renders to .module-badges; classes in brackets are the inferred CSS hooks)
  badges: [
    { label: "⌁ Interstitial",       css: "badge-interstitial" },   // NEW class — see RECONCILE #4
    { label: "Between Wk 8 & 9",     css: "badge-weeks" },
    { label: "50 pts · Self-Graded",  css: "badge-selfgraded" },    // NEW class — falls back to badge-sprint green
    { label: "Sacred-Workflow Focus", css: "badge-focus" }          // NEW class — falls back to badge-pre orange
  ],

  // --- narrative box (renders to .sim-box)
  sim: {
    floor: "NTS — Your Desk, Day After Sprint 2",                    // → .sim-floor
    body:  "You ran two sprints opening every Issue and PR by hand. It worked — and it got repetitive. The new junior on the team is an AI. Time to delegate the ceremony and keep the judgment.",
    hook:  "The bot can open the PR in three seconds. It still can't tell you if it's the PR you wanted. That part's yours." // → .sim-hook
  },

  // --- COLUMN 1: Before Class / "Learn" (renders to first .col, .before-label + .activity-list)
  before: {
    label: "Learn — Async (read, ~15 min)",
    items: [
      { icon: "sim",  text: "What \"an agent running the Flow\" means — Issue→Branch→PR from one sentence", mlo: "learn.md · the one idea" },
      { icon: "sim",  text: "The approval gate is sacred — why the human still merges to <code>main</code>", mlo: "learn.md · the gate is yours" },
      { icon: "dash", text: "The common substrate — every CLI drives <code>gh</code> + <code>git</code>",     mlo: "Claude Code · Codex CLI · Gemini CLI" }
    ]
    // icon maps to: sim=.icon-sim (green ▶) | canvas=.icon-canvas (red Q) | dash=.icon-dash (blue D)
  },

  // --- COLUMN 2: In Class / "Practice & Apply" (renders to .during-label + .activity-list + .rsi-box + .mlo-list)
  during: {
    label: "Practice & Apply — Hands-on",
    items: [
      { icon: "sim",  title: "Practice (retry-OK): Agent runs one slice of the Flow", text: "Throwaway change — agent opens an Issue + PR; <em>you</em> review the diff and merge. Capture the approval.", mlo: "practice.md · Claude Code / Codex CLI / Gemini CLI" },
      { icon: "dash", title: "Apply: Describe your agent as a corpus", text: "Fill in <code>AGENT_BRIEF.md</code>; have the AI draft 5–8 user stories (GWT) + a starter design. Reach it via a real PR you approve.", mlo: "apply.md · seeds the Module 8 capstone" }
    ],
    // rsi-box is REPURPOSED here as the human-in-the-loop gate (not an instructor RSI). See RECONCILE #5.
    rsi: {
      label: "⚡ Human-in-the-Loop Gate",
      body:  "The agent opens the Issue and the PR. It does <strong>not</strong> merge. You read the diff and merge — and screenshot the moment you did. The approval is the deliverable, not the automation.",
      hours: "Substrate: <code>gh</code> + <code>git</code> · Gate: manual merge to <code>main</code> only"
    },
    mlos: [
      { id: "I.1", text: "Explain in plain English what the agent did during a Flow run",  blooms: "Understand/Apply · CLO 5" },
      { id: "I.2", text: "Drive a coding-agent CLI to open an Issue + PR via gh/git",       blooms: "Apply · CLO 1 + CLO 4" },
      { id: "I.3", text: "Locate & defend the human approval gate on <code>main</code>",    blooms: "Evaluate · CLO 1" },
      { id: "I.4", text: "Describe a desired agent as a Claude-code-compatible corpus",      blooms: "Create · CLO 2 + CLO 3" }
    ]
  },

  // --- COLUMN 3: After Class / "Assess" (renders to .after-label + .artifact-list)
  after: {
    label: "Assess — Self-Graded Submission",
    artifacts: [
      { title: "Plain-English Flow Write-Up + Approval Screenshot", desc: "½ page: which CLI, what it did (Issue#, branch, PR), and a screenshot of you merging. Note what the agent got wrong.", pts: "self", typeLabel: "Reflection" },
      { title: "Filled-In Agent Corpus",        desc: "Your <code>AGENT_BRIEF.md</code> + AI-drafted user stories &amp; design, recorded as-is via approved PRs. First draft of a Module 8 spec.", pts: "self", typeLabel: "Corpus" },
      { title: "Customer Self-Assessment",      desc: "You, the customer, judge whether the AI's stories + design fulfill your need: hit rate, missing story, unstated assumptions, three edits, build/fix/restart verdict.", pts: "self", typeLabel: "Self-Graded" }
    ],
    // optional secondary note box (two-track). Renderer may not support — see RECONCILE #6.
    note: {
      label: "Two-track submission",
      body:  "<strong>Code Builders:</strong> submit via the Flow — agent opens issue/PR, you merge; turn in the PR link. <strong>Prompt Masters:</strong> drop the files via GitHub web \"add file.\" Same thinking; lighter mechanics. Code Builders earn process credit on top."
    }
  },

  // --- thread bar (renders to .thread-bar)
  thread: {
    label: "Agent Thread",
    text:  "Hand the Flow's mechanics to a coding agent (Claude Code baseline; Codex + Gemini equivalents). Keep the merge human. Start the corpus for the agent you'll build in Module 8.",
    deliverable: "Flow write-up + agent corpus + self-assessment"
  },

  // --- lock row (renders to .lock-row)
  lock: [
    { label: "Unlocks when:", val: "M4 Flask app submitted (advisory)" },
    { label: "Gates:",        val: "nothing — interstitial does not block M5" },
    { label: "For:",          val: "students running the Sacred Workflow" }
  ]
};

/* =============================================================================
 * RECONCILE BEFORE SHIPPING — verify each against the real modules.js source:
 *
 *  1. type:"interstitial" — does the renderer branch on a module type at all? If
 *     not, the dashed-teal treatment won't apply. Two options:
 *       (a) add a one-line branch in the render fn: if (m.type==="interstitial")
 *           wrap the .module-block with style="border:2px dashed var(--teal);..."
 *           (copy the inline styles from module-4.5-interstitial.html), OR
 *       (b) ship it as a normal module-block (no special styling) and rely on the
 *           badges + "MOD 4.5" num to signal it's an interlude.
 *  2. loop:"interstitial" — the real field may be an enum the renderer switches on
 *     for the section-divider grouping. Confirm it tolerates a third value, or set
 *     loop:"loop1" so it files under "Loop 1 — Data Man" without throwing.
 *  3. points:50 — Module 4.5 carries 50 self-graded pts, awarded by default on
 *     completion (the resolved 950→1,000 gap). ADD a 4.5 = 50 entry to the
 *     grade-summary pills so the visible pills sum to 1,000, matching the cover
 *     (see crosswalk.md DEFECT-1, now resolved). The points are self-awarded —
 *     don't wire an instructor rubric.
 *  4. badge css classes badge-interstitial / badge-selfgraded / badge-focus do NOT
 *     exist in the planner CSS yet. Either add them, or remap to existing classes:
 *       badge-interstitial → badge-loop1 (blue) is the safest fallback
 *       badge-selfgraded   → badge-sprint (green)
 *       badge-focus        → badge-pre (orange)
 *  5. rsi here is the student-owned approval gate, not an instructor RSI. If the
 *     renderer feeds rsi into an "RSI compliance" tally anywhere, exclude 4.5 (it
 *     has no instructor touchpoint — see crosswalk.md RSI section).
 *  6. after.note (the two-track box) reuses .rsi-box styling in the static HTML. If
 *     the renderer has no "note" slot in the after column, drop it into the sub
 *     line or omit — it's nice-to-have, not load-bearing.
 *  7. Field NAMES (num/sub/before/during/after/sim/thread/lock/...) are inferred.
 *     If the real schema uses different keys (e.g. beforeClass/inClass/afterClass),
 *     rename to match — the VALUES are what matter and are confirmed against
 *     module-04.5.md.
 * ========================================================================== */

// Export shape is a guess too — match however modules.js collects its modules
// (array push, named export, etc.). Example if it's a flat array:
//   modules.splice(indexOfModule05, 0, MODULE_4_5);
if (typeof module !== "undefined" && module.exports) { module.exports = MODULE_4_5; }
