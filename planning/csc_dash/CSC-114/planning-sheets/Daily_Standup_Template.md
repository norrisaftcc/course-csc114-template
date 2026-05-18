# Daily Standup Template

**Purpose**: Maintain daily momentum, identify blockers early, and stay accountable to your sprint commitment.
**When to Use**: Daily (or every work session if not coding daily)
**Time to Complete**: 5 minutes

---

## Instructions

1. **Schedule a consistent time** - Same time every day (or before each work session)
2. **Answer three questions** - Keep answers brief and specific
3. **Focus on progress toward sprint goal** - Not every task you did, just sprint-related work
4. **Identify blockers immediately** - Don't wait for blockers to become disasters
5. **Log your standup** - Keep a record so you can track patterns

Even when working solo, this practice keeps you honest and helps you catch problems early.

---

## Template

### Daily Standup - [Date]

**Sprint**: [Sprint Number] | **Sprint Goal**: [One sentence]

#### What did I do since last standup?
-
-
-

**Story points completed**: ___

#### What will I do before next standup?
-
-
-

**Story points planned**: ___

#### What blockers am I facing?
-
-

**If blocked, what help do I need?**


**Today's focus**: [One sentence - what's the most important thing to accomplish?]

---

### Progress Tracking

**Sprint Progress:**
- Total committed story points: ___
- Completed story points: ___
- Remaining story points: ___
- Days left in sprint: ___

**Am I on track?** [ ] Yes [ ] No [ ] At risk

**If not on track, what will I adjust?**


---

## Example (Filled)

### Daily Standup - Feb 5, 2026

**Sprint**: 3 | **Sprint Goal**: Build and train a working CNN model for MNIST digit classification with >95% accuracy

#### What did I do since last standup?
- Loaded MNIST dataset from keras.datasets
- Normalized pixel values to 0-1 range
- Reshaped images to (28, 28, 1) for CNN input
- Wrote unit tests for preprocessing functions

**Story points completed**: 3 (completed US-007)

#### What will I do before next standup?
- Design CNN architecture (2 Conv2D layers, MaxPooling, Dense output)
- Implement model in Keras Sequential API
- Compile model with Adam optimizer and categorical crossentropy

**Story points planned**: Start US-008 (won't finish, but will make progress)

#### What blockers am I facing?
- Unsure about optimal kernel sizes for Conv2D layers
- Not sure if I should use Dropout layers to prevent overfitting

**If blocked, what help do I need?**
Will research CNN architectures for MNIST online (papers and Keras examples). If still stuck after 2 hours, will ask Drew in Discord.

**Today's focus**: Get a compiled CNN model, even if architecture isn't optimized yet. Optimization can happen in next iteration.

---

### Progress Tracking

**Sprint Progress:**
- Total committed story points: 11
- Completed story points: 3
- Remaining story points: 8
- Days left in sprint: 9

**Am I on track?** [x] Yes [ ] No [ ] At risk

**If not on track, what will I adjust?**
On track - completed first story ahead of schedule. Midterm is Feb 10, so want to finish US-008 before then.

---

## Example Async Standup (For Solo Developers)

Many students ask: "Why do a standup if I'm working alone?"

Because **you need to talk to yourself honestly about progress.**

Here's how I do async standups when working solo:

### Morning Standup (Before I Start Work)
- Review yesterday's standup
- Decide today's focus (one clear outcome)
- Identify potential blockers BEFORE I hit them

### Evening Standup (After Work Session)
- Log what I actually completed
- Be honest about velocity
- Adjust tomorrow's plan if needed

**The magic is in the daily discipline.** It's like brushing your teeth - skipping one day doesn't matter, but skipping a week creates problems.

---

## Why This Matters

Daily standups are the heartbeat of agile teams at every major tech company.

At Google, we did standups at 9:30am every day. Three questions, 15 minutes max, whole team. Why?

1. **Blockers surface immediately** - Not three days later when it's a crisis
2. **Coordination happens naturally** - "Oh, you're working on data pipeline? I need that for my model."
3. **Accountability is built-in** - When you say "I'll do X today," you're committing
4. **Patterns become visible** - If you're blocked three days in a row, something's wrong

The best part about standups: **They're short.** This isn't a status meeting. No discussions, no problem-solving, no deep dives. Just three questions, and you're done.

Solo developers who do daily standups ship faster than teams without standups. It's not about the ceremony - it's about the discipline of daily reflection.

---

## Common Mistakes to Avoid

- **Mistake**: Writing vague updates like "worked on the model"
  **Better approach**: Specific updates like "completed data preprocessing, normalized features, split train/test sets." Be concrete.

- **Mistake**: Only doing standups when you feel like it
  **Better approach**: Daily discipline. Even if you didn't work yesterday, do a standup noting that. The consistency matters more than the content.

- **Mistake**: Not identifying blockers because "I should figure this out myself"
  **Better approach**: A blocker is anything slowing you down. Identifying it isn't weakness - it's self-awareness. Note it, timebox the research, then ask for help.

- **Mistake**: Planning too many tasks for "before next standup"
  **Better approach**: One primary task, maybe one secondary. If you're doing daily standups, you only have a few hours. Be realistic.

- **Mistake**: Letting standups turn into 30-minute reflection sessions
  **Better approach**: 5 minutes max. This is a quick check-in, not a journal entry. Save deep reflection for sprint retrospectives.

---

## Tips from Drew

**Do your standup BEFORE you start coding, not after.** It's a planning tool, not a reporting tool. Morning standup sets your intention for the day. Evening standup is just logging - less valuable.

**If you can't articulate what you'll do before next standup, you're not ready to code.** That's fine! The standup just revealed that you need to do more planning or break down tasks further. Better to realize this now than after wasting 3 hours.

**The "blockers" question is the most important one.** Most students leave this blank because they don't want to admit they're stuck. But blockers are normal! Every developer faces blockers daily. The difference is: good developers identify them early and ask for help. Bad developers stay blocked for days.

**Track your "story points completed" daily.** This is how you build accurate velocity data. If you're 5 days into a 10-day sprint and you've only completed 2 of 11 points, you're not on track. Adjust now, not on day 9.

**Use "today's focus" to fight scope creep.** It's easy to get distracted by interesting side quests ("oh, I should optimize this function, oh I should refactor that class"). One focus keeps you on track.

**Pattern to watch for: Three blockers in a row on the same issue.** If you're stuck for three days, stop trying to figure it out alone. Ask for help. Blockers don't age like wine.

---

## Integration with CSC-114

In CSC-114, your daily standup log becomes evidence of your process for project grading.

I don't just grade your final model - I grade how you got there. Consistent daily standups show:
- You planned your work intentionally
- You identified and addressed blockers
- You tracked progress against your sprint goal
- You adapted when things didn't go as planned

**Students who maintain daily standups:**
- Finish projects 2-3 weeks earlier on average
- Identify data quality issues before they ruin training runs
- Ask for help when stuck (instead of being stuck for days)
- Have clear evidence of their process for project documentation

**Students who skip standups:**
- Lose track of sprint progress until it's too late
- Waste time on low-priority tasks
- Get blocked without realizing it
- Struggle to write project retrospectives (because they didn't track daily)

For your final project, I'll ask you to submit your standup log. It's part of your process documentation. The students with consistent standups get higher process grades - because they demonstrably followed professional engineering practices.

**Think of standups as version control for your brain.** Git tracks your code commits. Standups track your decision commits. Both matter.
