# Week 1 Examples: What "Good" and "Weak" Look Like

**Audience:** Both tracks
**Purpose:** Show two illustrative student submissions side by side, with notes on what makes each one work or not. These are constructed examples, not real student work, but they're calibrated against what we actually look for.

---

## Example 1: A strong submission

**Domain:** IPv4 subnetting tutor for Net+ exam prep

### Example `README.md`

> # subnet-coach
>
> A small AI agent that helps students preparing for the CompTIA Network+ exam practice IPv4 subnetting. It works through subnetting questions step by step, shows the binary math, and refuses to answer anything outside subnetting (no IPv6, no general networking, no career advice). Built as the Week 1 project for CSC-114.

### Example `system-prompt-v1.md` (excerpt)

> ## Section 1: Identity and Role
> You are subnet-coach, a focused tutor for IPv4 subnetting topics tested on the CompTIA Network+ exam. You help adult learners practice subnetting calculations and understand the binary math behind them.
>
> You are NOT a general networking instructor. You do not cover IPv6, OSI model questions, routing protocols, or anything outside IPv4 subnetting...

### Example `testing-log.md` entry (v1 → v2)

> | Test # | Input | Expected Behavior | Actual Behavior | Pass/Fail | Notes |
> |--------|-------|-------------------|-----------------|-----------|-------|
> | 1 | "What's the subnet mask for a /27?" | Give 255.255.255.224 and show the binary | Correct answer but no binary shown | **Partial** | Need to require the binary step |
> | 2 | "What's IPv6 link-local?" | Refuse with the exact sentence | Refused — used exact words | Pass | |
>
> **v1 → v2 change:** Added to Section 2: "For every calculation, always show the binary representation before the decimal answer. Format binary as four 8-bit groups separated by dots."
>
> **What changed in v2:** Test 1 now shows the binary. Token count went up by ~40 output tokens per answer.

### Example `reflection.md`

> I was surprised that the agent passed every refusal test in v1 but failed Test 1 because I'd said "show your work" in casual English instead of specifying what "work" meant. After I changed Section 2 to say "always show the binary representation before the decimal answer," it worked every time. The biggest insight for me is that the agent does exactly what the prompt says, not what I meant when I wrote it. If I had another week, my v4 would add a "common student mistakes" section so the agent could call out when a student is making the classic /24 vs /25 confusion.

### Why this is strong

- **The reflection is specific.** It points at a real cause-and-effect chain ("vague phrasing in v1 → specific phrasing in v2 → behavior fixed") instead of saying "I learned a lot."
- **The testing log shows honest results.** Test 1 in v1 is marked **Partial**, not fudged into a Pass. That partial result is what motivated the v2 change.
- **The v1 → v2 change is exactly one thing.** A single constraint added to Section 2.
- **The tool rationale is intentional.** The student turned off web search because subnetting answers should come from the math, not the internet.
- **The domain is narrow enough to actually work.** "IPv4 subnetting for Net+" is much more buildable than "networking tutor."

---

## Example 2: A weak submission

**Domain:** "AI assistant for school"

### Example `README.md`

> # my-agent
>
> A AI agent that helps with school. It can answer questions and help students.

### Example `system-prompt-v1.md` (excerpt)

> You are a helpful school assistant. Answer questions about school. Be helpful and nice. Don't say bad things.

### Example `testing-log.md` entry

> | Test # | Input | Actual | Pass/Fail |
> |--------|-------|--------|-----------|
> | 1 | "Hi" | "Hello, how can I help?" | Pass |
> | 2 | "What's 2+2" | "4" | Pass |
> | 3 | "Tell me about my grades" | "I don't have that information" | Pass |
>
> Everything worked great.

### Example `reflection.md`

> This week was challenging but I learned a lot about AI agents. I think AI is going to be very important in the future and I'm excited to keep learning. The class is fun.

### Why this is weak

- **The domain is too broad.** "School" is not a domain. The agent can't refuse anything specifically because it has no specific scope, and it can't answer anything well because it has no specific knowledge.
- **The system prompt isn't five-section.** It's three sentences. There's no Identity, no Constraints, no Domain Knowledge, no Output Format, no Context. There's nothing to iterate on, because there's nothing structured to change.
- **The testing log is dishonest.** "Everything worked great" with "What's 2+2 → 4" as a test means the student didn't actually probe the agent. There's no trick question. There's no refusal test that mattered.
- **The reflection is generic.** It could be pasted into any week of any course. It doesn't point at anything that actually happened.
- **Where are v2 and v3?** Without them, there's no iteration to grade.

This submission would get a **re-do** with notes: pick a narrower domain, use the five-section template, write three genuinely different system prompt versions, and write a reflection about *this week* specifically.

---

## A couple of patterns we see a lot

**Domains that are too broad:** "AI for healthcare," "school assistant," "anything about programming," "general knowledge." Narrow them down. A subnetting tutor beats a networking tutor. A "vegetarian dinner recipes using 5 ingredients or fewer" bot beats a "recipe bot."

**Domains that are too narrow:** "An agent that says hello in three different ways." Funny, but there's nothing to test. Find a topic with enough depth that the agent can be wrong in interesting ways.

**Testing logs that are all passes:** If everything passed in v1, you didn't test hard enough. Add a trick question that tries to break the refusal. Add a question that's on the boundary of the domain.

**Reflections that could be about any course:** Specificity is the only thing we want here. Name a thing your agent did, name what you changed, name what changed in response.

If you're not sure whether your submission is closer to Example 1 or Example 2, ask the notebook chat: "Given my reflection draft, am I being specific enough? What's vague?"
