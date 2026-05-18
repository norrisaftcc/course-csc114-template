# Burndown Chart Template

**Purpose**: Visualize daily progress toward sprint goal and identify if you're on track to complete committed work.
**When to Use**: Update daily during the sprint, review at standup time
**Time to Complete**: 2 minutes per day to update

---

## Instructions

1. **Set up your chart at sprint start** - Record total committed story points and sprint duration
2. **Update daily** - Log remaining story points at the end of each work day
3. **Calculate ideal burndown** - This is your target line (linear decrease)
4. **Compare actual vs ideal** - Are you above or below the ideal line?
5. **Adjust mid-sprint if needed** - If you're way off track by midpoint, re-scope

This chart is your early warning system. It shows you in real-time if you're going to hit your sprint goal.

---

## Template

### Burndown Chart - Sprint [Number]

**Sprint Goal**: [One sentence]
**Sprint Duration**: [Start Date] to [End Date] ([X] days)
**Total Committed Story Points**: ___

---

### Daily Tracking Table

| Day | Date | Remaining Story Points | Stories Completed | Notes |
|-----|------|------------------------|-------------------|-------|
| 0 | [Start] | [Total Points] | - | Sprint start |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |
| [End] | [End Date] | 0 | - | Sprint end (target) |

---

### Ideal vs Actual Burndown

**Ideal burndown (linear):**
- Day 0: [Total points]
- Day [Mid]: [~50% of points]
- Day [End]: 0 points

**Actual burndown:**
[Plot your actual remaining points from table above]

**Visual Chart:**
```
Story Points
[Total] |■■■■■■■■■■■■■■■■■■■■ (Day 0)
        |■■■■■■■■■■■■■■■      (Ideal midpoint)
        |■■■■■■■■■■■■         (Actual midpoint - example)
        |■■■■■■■              (Ideal day 7)
      0 |                     (Target: Day [End])
        +-----------------------> Days
```

---

### Sprint Health Check

**As of Day [X] of [Y]:**

**Burndown Status:**
- [ ] On track (actual close to ideal)
- [ ] Ahead of schedule (actual below ideal)
- [ ] Behind schedule (actual above ideal)
- [ ] Severely behind (actual >25% above ideal at midpoint)

**If behind schedule, what's the plan?**
- [ ] Work more hours (not sustainable)
- [ ] Remove lowest priority story
- [ ] Reduce scope of a story
- [ ] Extend sprint (discuss with stakeholders/Drew)
- [ ] Other: ___________

---

### Mid-Sprint Checkpoint (Day [X])

**Planned progress by midpoint**: [50% of total points] = ___ points completed
**Actual progress**: ___ points completed

**Are we on track?**


**What's causing variance from ideal?**
-
-

**Adjustments needed?**


---

### End-of-Sprint Analysis

**Final remaining story points**: ___
**Completion rate**: ___% (completed points / committed points)

**Did burndown chart help us this sprint?**


**What would we do differently next time?**


---

## Example (Filled)

### Burndown Chart - Sprint 3

**Sprint Goal**: Build and train a working CNN model for MNIST digit classification with >95% accuracy
**Sprint Duration**: Feb 1 - Feb 14 (14 days, but only 10 work days due to midterm)
**Total Committed Story Points**: 11

---

### Daily Tracking Table

| Day | Date | Remaining Story Points | Stories Completed | Notes |
|-----|------|------------------------|-------------------|-------|
| 0 | Feb 1 | 11 | - | Sprint start, feeling confident |
| 1 | Feb 2 | 8 | US-007 (3 pts) | Preprocessing done, tests pass |
| 2 | Feb 3 | 8 | - | Researching CNN architectures, no points completed |
| 3 | Feb 4 | 5 | US-008 (3 pts) | CNN model built, not trained yet |
| 4 | Feb 5 | 5 | - | Started training, slow progress |
| 5 | Feb 6 | 5 | - | Weekend, no work |
| 6 | Feb 7 | 5 | - | Weekend, no work |
| 7 | Feb 8 | 3 | Partial US-009 (2 pts) | Model at 92% accuracy, not 95% yet |
| 8 | Feb 9 | 3 | - | Midterm prep, paused sprint |
| 9 | Feb 10 | 3 | - | Midterm day, no sprint work |
| 10 | Feb 11 | 3 | - | Tried hyperparameter tuning, stuck at 92% |
| 11 | Feb 12 | 3 | - | Asked Drew for help, trying new approach |
| 12 | Feb 13 | 3 | - | Still tuning, running out of time |
| 13 | Feb 14 | 3 | - | Sprint end, 8/11 points completed (73%) |

---

### Ideal vs Actual Burndown

**Ideal burndown (linear):**
- Day 0: 11 points
- Day 7: 5.5 points
- Day 14: 0 points

**Actual burndown:**
- Day 0: 11 points
- Day 7: 3 points (ahead!)
- Day 10: 3 points (stalled)
- Day 14: 3 points (behind - didn't complete)

**Visual Chart:**
```
Story Points
11  |● (Day 0 - start)
10  |
9   |
8   |●━━━●━━━━━━━━ (Ideal line)
7   |        ●
6   |         ╲
5   |          ●━━━━━●━━━━━━━━━━●━━━●━━●━●━● (Actual - stalled)
4   |                            ╲
3   |                             ●━━━━━━━━━━━━━━●
2   |                                            ╲
1   |                                             ●
0   |                                              ● (Target)
    +-------------------------------------------------> Days
    0    2    4    6    8   10   12   14
```

**Pattern**: Strong start (ahead of ideal by day 7), then plateau from days 8-14. Midterm + hyperparameter tuning blocker stalled progress.

---

### Sprint Health Check

**As of Day 10 of 14:**

**Burndown Status:**
- [ ] On track (actual close to ideal)
- [ ] Ahead of schedule (actual below ideal)
- [x] Behind schedule (actual above ideal)
- [ ] Severely behind (actual >25% above ideal at midpoint)

**If behind schedule, what's the plan?**
- [ ] Work more hours (not sustainable) - Already tired from midterm
- [x] Remove lowest priority story - None to remove, all are core
- [x] Reduce scope of a story - Accept 92% accuracy instead of 95% for this sprint
- [ ] Extend sprint (discuss with stakeholders/Drew) - Not needed
- [x] Other: Move hyperparameter tuning to next sprint as new story

---

### Mid-Sprint Checkpoint (Day 7)

**Planned progress by midpoint**: 50% of 11 points = 5.5 points completed
**Actual progress**: 8 points completed

**Are we on track?**
Ahead of schedule! Completed 8/11 points by day 7. Feeling good.

**What's causing variance from ideal?**
- Data preprocessing went faster than expected (solid Python skills)
- CNN architecture build was straightforward (good Keras docs)
- Midterm hasn't hit yet (days 8-10 will slow down)

**Adjustments needed?**
None yet. But expecting slowdown during midterm days. May not complete all 11 points.

---

### End-of-Sprint Analysis

**Final remaining story points**: 3
**Completion rate**: 73% (8 completed / 11 committed)

**Did burndown chart help us this sprint?**
YES! Chart clearly showed the plateau at day 7. By day 10, it was obvious I wasn't going to complete all 11 points. This helped me make decision to reduce scope (accept 92% accuracy) instead of crunching unhealthily.

**What would we do differently next time?**
- Plan for midterm impact more conservatively (planned 11, should've planned 8)
- Add "buffer" in burndown for learning/research time (architecture research on day 2 didn't complete points but was necessary)
- Update burndown chart in evening standup so it's always current
- Use mid-sprint checkpoint more formally - if behind by >20% at midpoint, re-scope immediately

---

## How to Interpret Your Burndown Chart

### Pattern: Actual line is BELOW ideal line
**Meaning**: You're ahead of schedule
**Action**: Keep going! But don't add scope mid-sprint. Finish early.

### Pattern: Actual line is CLOSE TO ideal line
**Meaning**: You're on track
**Action**: Maintain pace. Watch for blockers that could slow you down.

### Pattern: Actual line is ABOVE ideal line (10-20%)
**Meaning**: You're slightly behind
**Action**: Identify what's slowing you. Can you eliminate distractions? Do you need help?

### Pattern: Actual line is ABOVE ideal line (>25% at midpoint)
**Meaning**: You're significantly behind
**Action**: Re-scope NOW. Remove lowest priority story or reduce story scope.

### Pattern: Flat line (no progress for 3+ days)
**Meaning**: You're blocked or not working
**Action**: If blocked, ask for help immediately. If not working, be honest about capacity.

### Pattern: Steep drop then plateau
**Meaning**: Completed easy stories first, stuck on hard ones
**Action**: Normal pattern. Hard stories at end is risky - consider breaking them down next time.

---

## When to Adjust Mid-Sprint

**DON'T adjust for:**
- One slow day (everyone has off days)
- Weekend slowdown (if you don't work weekends, that's fine)
- Minor variance from ideal line (<10%)

**DO adjust for:**
- Three consecutive days with no progress
- >25% behind at sprint midpoint
- Unexpected life events (illness, family emergency, major exam)
- Discovery that story was WAY underestimated

**How to adjust:**
1. Identify lowest priority story (nice-to-have)
2. Remove it from sprint, move back to backlog
3. Re-draw ideal line with new total points
4. Communicate to stakeholders (Drew) if needed

**Remember**: Better to complete 8/8 stories than 8/11. Scope reduction isn't failure - it's professionalism.

---

## Why This Matters

Burndown charts are standard in every agile ML team I've worked with.

At Google, our team had a TV screen showing the sprint burndown 24/7. Why? Because **surprises at the end of a sprint are expensive.**

If you're 2 days from sprint end and realize you won't finish, it's too late to adjust. But if you're at day 5 of 14 and you can see you're behind, you can re-scope with 9 days left.

Burndown charts give you:
1. **Early warning system** - Problems visible immediately
2. **Objective reality** - No self-deception about progress
3. **Planning data** - Patterns show estimation accuracy
4. **Stakeholder communication** - Visual proof of progress

ML projects are especially prone to scope creep ("just one more experiment"). Burndown charts keep you honest.

---

## Common Mistakes to Avoid

- **Mistake**: Only updating the burndown chart at the end of the sprint
  **Better approach**: Update daily. The whole point is to catch problems early, not document them after the fact.

- **Mistake**: Treating the ideal line as a rigid requirement
  **Better approach**: Ideal line is a guide, not a law. Real work is messy. Small variance is fine. Large variance needs action.

- **Mistake**: Adding new stories mid-sprint and not updating the chart
  **Better approach**: If you add scope (rare), re-draw the ideal line with new total points. Otherwise you can't interpret the chart.

- **Mistake**: Hiding the chart from yourself when behind schedule
  **Better approach**: The chart is most useful when you're behind! Face the reality, adjust the plan. Ignoring problems doesn't make them disappear.

- **Mistake**: Beating yourself up for being behind schedule
  **Better approach**: Behind schedule is data, not a moral failing. Use the chart to learn and adjust, not to judge yourself.

---

## Tips from Drew

**Update your burndown during your evening standup.** Make it a habit. Standup answers "what did I complete?" Burndown tracks "how many points remain?"

**The midpoint checkpoint is critical.** Day 7 of a 14-day sprint is your "do or die" moment. If you're behind, re-scope immediately. Don't wait until day 12 to panic.

**A flat burndown line means something is wrong.** Three days with no progress? You're blocked. Ask for help. Don't waste a week being stuck.

**Steep drops look great but can be misleading.** If you complete 3 easy stories in 2 days, your burndown looks amazing. But if the remaining 2 stories are hard, you're in trouble. Track both points AND story completion.

**Use the burndown to fight scope creep.** When you think "oh I should add this cool feature," look at your burndown. Are you on track? No? Then no new features.

**Celebrate finishing early!** If your actual line hits zero before the ideal line, you nailed your estimation. That's the goal. Take the extra time to refactor, write docs, or just rest.

**Pattern recognition is the real skill.** After 3-4 sprints, you'll notice your patterns. Do you always start slow? Do you always plateau at the end? Use these patterns to improve planning.

---

## Integration with CSC-114

In CSC-114, I want to see your burndown charts for each sprint in your project documentation.

Why? Because burndown charts show me:
- You tracked progress daily (not just at the end)
- You identified problems early and adjusted
- You understand your velocity and capacity
- You're developing professional PM discipline

**Students with good burndown tracking:**
- Rarely miss project deadlines (they adjust mid-sprint)
- Can accurately predict completion dates for final projects
- Have data to support scope discussions ("I can add this feature, but it will take 2 more sprints")
- Demonstrate professional engineering process

**Students without burndown tracking:**
- Surprise themselves (and me) when projects aren't done on time
- Can't articulate why they're behind schedule
- Lack data for process improvement
- Miss the early warning signals

Your burndown chart is evidence that you're managing your work like a professional, not just coding until deadlines.

**ML engineers who can't estimate and track their work don't get to lead projects. Learn this skill now.**
