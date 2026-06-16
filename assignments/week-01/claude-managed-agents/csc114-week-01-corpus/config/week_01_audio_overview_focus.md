# Audio Overview Focus Prompt — Week 1

**How to use this file:** When generating the Week 1 Audio Overview in NotebookLM's Studio panel, choose **Brief** format and target length **~8 minutes**. Paste the focus prompt below into the field that asks "What should the AI hosts focus on in this episode?"

---

## Focus prompt (paste this verbatim)

```
Walk a brand-new student through what an AI agent is and what they will build
this week.

There is no textbook chapter this week — this is a pre-textbook warm-up. Do
not invent textbook content. Stay grounded in what is in this notebook.

Cover, in order:
1. The chatbot → assistant → agent spectrum. Use concrete examples. Make the
   distinction stick with a story or two.
2. What the Claude Console is and the five core objects (Agent, Environment,
   Session, Vault, Skill). Don't dwell — students will see the UI in class.
3. Why the system prompt matters and what the five-section template is for.
   You can name the five sections but do not read each one in detail.
4. The one-change rule. This is the most important habit of the week. Make it
   stick. Explain it as a scientific method analogy.
5. What students will submit by Friday. Mention the screenshot, the testing
   log, the three system prompt versions, and the reflection — but don't read
   the full file list. Send them to week_01_deliverable_spec.md for details.

End with: "Week 1 is the safest week to make mistakes. Use it."

Tone and constraints:
- Two hosts, conversational, warm. Treat the listener as a capable adult who
  is new to this material.
- 10th-grade reading level. No deep technical jargon beyond the Week 1
  vocabulary.
- Many listeners are ESL. Slow down on the key terms ("agent," "system prompt,"
  "one-change rule"). Repeat them once or twice.
- Many listeners are commuting or doing dishes. Visual references won't work.
  If you describe a UI element, describe what it is by function ("the place
  where you write your agent's permanent rules") not by location ("the box at
  the top of the screen").
- Do not mention Manning, Chollet, or the textbook in this episode. They are
  not part of Week 1.
- Do not mention Sacred Flow as an expected workflow this week. Mention it
  only if it comes up naturally to say "that's coming next week."
- Do not invent the instructor's name, course section details, deadlines, or
  any specifics not in the sources.

Aim for around 8 minutes. Brief is better than thorough this week.
```

---

## Why this prompt is shaped this way

A few deliberate choices, in case you want to revise:

- **"No textbook content this week" is stated explicitly** because NotebookLM has occasionally tried to bridge to general AI/ML topics when sources are thin. Telling it not to do that keeps the episode focused.
- **Order is specified.** The two-host conversation will roughly follow the bullet order, which means students who tune out partway through still get the high-importance stuff up front.
- **The one-change rule gets its own bullet** even though it's a small idea. It's the most transferable habit in Week 1, and worth slowing down for in audio.
- **ESL and commuter context is in the prompt directly.** Otherwise NotebookLM's hosts default to a faster, more reference-y style that doesn't serve this audience.
- **Length is "around 8 minutes."** Brief format with a length nudge. Longer episodes get skipped.

## When to regenerate

Generate once before the pilot starts. Listen to the whole episode. If anything is wrong (fabricated detail, wrong emphasis, awkward pronunciation of a key term), revise this prompt and regenerate.

You have 3 Audio Overviews per day on the free tier; with Pro you have far more headroom. Don't hesitate to regenerate if the first take is off.
