# Audio Overview Focus Prompt — Week 2

**How to use this file:** When generating the Week 2 Audio Overview in NotebookLM's Studio panel, choose **Deep Dive** format and target length **~12 minutes**. Paste the focus prompt below into the field that asks "What should the AI hosts focus on in this episode?"

---

## Focus prompt (paste this verbatim)

```
Explain what is happening when a student runs model.fit() on the MNIST
dataset for the first time. This is the central question of Week 2.

Listeners just finished Week 1, where they built an AI agent by writing
rules in English. This week they meet the math underneath: a real neural
network, trained on real data, that they will watch learn in front of them.

The textbook this week is Chollet "Deep Learning with Python" 3rd ed.,
Chapters 1 and 4. The actual lab uses the Chapter 2 companion notebook
(MNIST hello world). Stay grounded in what is in this notebook — the
publisher chapter summaries, the concept primer, the lab and spike specs.

Cover, in order:
1. The bridge from Week 1 to Week 2. Agents are configured; models are
   trained. Both use neural networks but in different roles. Keep this brief
   — about a minute. Listeners want the new material.
2. What deep learning actually is — the AI / ML / DL nested-circles framing.
   Use the concept primer as your source.
3. What's happening inside a neural network at training time. Address the
   "what is a tensor, why do I care" question explicitly — at least one
   sentence of intuition for tensors, not just the word. Same for "what is
   an epoch."
4. Classification vs regression (from Ch 4 §1-2). Make the distinction stick
   with one concrete example each.
5. The MNIST lab itself. Walk through what students will see: load data,
   build a Sequential model, compile, fit, evaluate. Don't read the code —
   describe what the student watches happen on screen.
6. The error analysis spike. This is the highest-leverage segment of the
   episode — many students stop at "I got 97% accuracy" and don't look at
   the actual mistakes. Make the case for *why* error analysis matters.
   Frame it as the habit that separates "I ran the code" from "I learned
   something."
7. Brief note that the workflow changes for Code Builders this week (Sacred
   Flow activates) and that Prompt Masters use Colab. Don't deep-dive either
   — point listeners at the track-specific guides.

End with: "97% accuracy is just the start of the conversation, not the end.
Spend more time on the 3% than the 97%."

Tone and constraints:
- Two hosts, conversational, warm. Treat the listener as a capable adult.
- 10th-grade reading level. Define jargon the first time it appears.
- Many listeners are ESL. Slow down on "tensor," "epoch," "loss,"
  "classification," "regression," "baseline." Repeat them at least once.
- Many listeners are commuting or doing dishes. Don't describe screen layouts
  by location. Describe by function ("the part where you see the loss number
  going down").
- Don't read code aloud. If you reference a line, describe what it does.
- Don't speculate about how a specific student's model will perform. Use
  "you'll probably see around 97 to 98 percent" not "your model will get 98%."
- Don't mention Manning licensing, NotebookLM mechanics, or anything about
  the course infrastructure. The episode is about the material.

Aim for around 12 minutes. Deep Dive is the right format because this is
the first technical week and students will benefit from the extra time on
the new vocabulary.
```

---

## Why this prompt is shaped this way

- **The bridge from Week 1 is one minute, not three.** Listeners came back to learn the new thing. Acknowledge the previous week briefly, then move on.
- **"What is a tensor, why do I care" is named explicitly.** Otherwise the hosts will skip it (it's covered properly in Week 3) and students will go into the lab uncertain about a term that appears in every output.
- **Error analysis is the highest-leverage segment.** Most weeks the lab is the hard part; this week the *spike* is the hard part because it asks students to look at data, not just produce numbers. The audio should make that case.
- **The track switch is mentioned but not deep-dived.** Audio is the wrong medium for "click File → Open notebook → GitHub tab." That's what the track-specific written guides are for.
- **"97% is the start, not the end" as the closer.** This is the Week 2 thesis. Plant it in the listener's head.

## When to regenerate

Generate once before the week starts. Listen to the full episode. Check:

- Does the host pronounce "Chollet" correctly? (sho-LAY, French)
- Does the host pronounce "Keras" consistently? (KEH-rass is standard; some say KAIR-ass)
- Is the bridge from Week 1 ≤90 seconds?
- Is the error-analysis segment ≥2 minutes?
- Does the closer land?

If any of these are off, revise this prompt and regenerate. With Google AI Pro tier you have generous audio overview quota — don't hesitate.
