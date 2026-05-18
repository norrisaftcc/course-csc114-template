# Module 4 Knowledge Check: AI Agents & Sprint 2

**Purpose**: Assess understanding of OpenAI API usage, prompt engineering, error handling, and velocity tracking
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Technical Concepts (60%)

### Question 1
What is the primary purpose of the OpenAI API?

A) To train your own models from scratch
B) To access pre-trained language models for various tasks
C) To host your ML models in the cloud
D) To visualize data

**Correct Answer**: B
**Explanation**: The OpenAI API gives you access to powerful pre-trained models (GPT-4, GPT-3.5, etc.) without training them yourself. You send prompts, get responses. This is the modern ML approach—leverage existing models instead of building everything from scratch. Training large language models costs millions; using them costs pennies.

### Question 2
What is a "prompt" in the context of language models?

A) A reminder to save your work
B) The input text that instructs the model what to do
C) An error message
D) A type of neural network layer

**Correct Answer**: B
**Explanation**: The prompt is your instruction to the model—the input that guides its response. "Summarize this article" or "Translate this to Spanish" are prompts. Prompt engineering is the skill of crafting prompts that get the results you want. It's like learning to ask good questions—the better the prompt, the better the output.

### Question 3
What is "prompt engineering"?

A) Building the infrastructure for LLMs
B) The practice of crafting effective prompts to get desired outputs from models
C) Training new language models
D) Debugging Python code

**Correct Answer**: B
**Explanation**: Prompt engineering is the art and science of talking to AI. Small changes—adding examples, being more specific, changing tone—can dramatically affect output quality. This is a legitimate skill. Good prompt engineers get 10x better results from the same model. It's like learning to use Google effectively—technique matters.

### Question 4
You're building a customer service chatbot using the OpenAI API. What should you include in your prompt for consistent, on-brand responses?

A) Nothing specific, let the model decide
B) System instructions defining the bot's role, tone, and constraints
C) Only the user's question
D) Random examples from the internet

**Correct Answer**: B
**Explanation**: System messages set the context: "You are a friendly customer service agent for ACME Corp. Be helpful, professional, and concise. Never make promises about refunds; escalate those requests." This frames the conversation and ensures consistency. Without these guardrails, responses will be unpredictable and potentially off-brand.

### Question 5
What is "temperature" in the context of OpenAI API calls?

A) The physical temperature of the servers
B) A parameter controlling randomness in responses (0 = deterministic, 2 = very random)
C) The speed of response generation
D) A measure of model quality

**Correct Answer**: B
**Explanation**: Temperature controls creativity. 0 = always pick the most likely next word (deterministic). 1 = more varied, creative. 2 = wild and unpredictable. For factual tasks (classification, data extraction), use low temperature. For creative tasks (brainstorming, story writing), use higher temperature. It's a dial between consistency and creativity.

### Question 6
Why is error handling critical when working with APIs?

A) APIs never fail, so it's not necessary
B) Network issues, rate limits, and invalid inputs can cause failures
C) Only to make your code longer
D) Because Python requires it

**Correct Answer**: B
**Explanation**: APIs are external dependencies—networks fail, services have downtime, you might hit rate limits. Professional code handles these gracefully with try/except blocks, retries, and meaningful error messages. Without error handling, your application crashes on the first hiccup. Defensive programming is professional programming.

### Question 7
You're making 100 API calls to process customer reviews. What's an important consideration?

A) Making all calls simultaneously as fast as possible
B) Rate limiting and cost management
C) Using the highest temperature setting
D) Avoiding any error handling

**Correct Answer**: B
**Explanation**: API calls cost money and have rate limits. Blasting 100 calls instantly might hit limits or cost more than budgeted. Professional approach: batch processing, rate limiting, cost estimation upfront, caching results. This is production thinking—not just "does it work?" but "does it work economically and reliably?"

### Question 8
What does it mean to "fine-tune" a language model?

A) Adjusting the temperature parameter
B) Additional training on specific data to specialize the model for your task
C) Writing better prompts
D) Making the API calls faster

**Correct Answer**: B
**Explanation**: Fine-tuning takes a pre-trained model and continues training it on your specific data. This adapts the model to your domain—medical terminology, legal documents, your company's writing style. It's more expensive than prompt engineering but can yield better results for specialized tasks. It's the difference between general education and specialized training.

### Question 9
When would prompt engineering be sufficient vs needing to fine-tune a model?

A) Always fine-tune; prompts never work
B) Use prompt engineering first; fine-tune only if prompts can't achieve your goals
C) Always use prompts; never fine-tune
D) Fine-tune for simple tasks; prompt engineer for complex ones

**Correct Answer**: B
**Explanation**: Start with prompts—they're fast, cheap, and surprisingly powerful. Most tasks can be solved with good prompt engineering. Fine-tune only when prompts consistently fail or when you need highly specialized behavior. This is the "start simple" principle applied to LLMs. Don't optimize prematurely; prompt engineering is your first tool.

---

## Project Management Concepts (40%)

### Question 10
What is "velocity" in agile project management?

A) How fast you type code
B) The amount of work a team completes in a sprint
C) The speed of your computer
D) How quickly you respond to emails

**Correct Answer**: B
**Explanation**: Velocity measures work completed per sprint—typically in story points or hours. If you complete 20 points of work per two-week sprint, your velocity is 20. This helps predict future capacity: "At velocity 20, this 60-point project takes 3 sprints." It's your personal (or team) throughput metric. Track it; use it to plan realistically.

### Question 11
How do you calculate velocity after completing a sprint?

A) Count how many hours you worked
B) Sum up the story points (or hours) of completed work
C) Divide lines of code by days
D) Measure model accuracy

**Correct Answer**: B
**Explanation**: Velocity is about delivered value, not time spent. If you committed to 3 tasks (5 points each) and completed 2, your velocity is 10. Not 15 because you "tried." This honesty is crucial—velocity based on completed work is predictive. Velocity based on effort is fantasy. Track what you actually shipped.

### Question 12
You completed 15 story points in Sprint 1 and 18 in Sprint 2. What should you commit to in Sprint 3?

A) 30 points (add them up)
B) Roughly 15-18 points, adjusted for known circumstances
C) 50 points (aim high)
D) 5 points (be conservative)

**Correct Answer**: B
**Explanation**: Historical velocity guides future commitments. Your average is ~16-17 points. Commit to that range unless circumstances changed. Got spring break? Commit less. Light week with no other classes? Maybe 20. Velocity is data-driven planning, not wishful thinking. Use your actual performance to set realistic goals.

### Question 13
What is a sprint retrospective?

A) Looking at old code
B) A reflection on what went well, what didn't, and how to improve
C) Reviewing other students' work
D) A final exam for the sprint

**Correct Answer**: B
**Explanation**: Retrospectives are structured reflection: What worked? What didn't? What will we change? This closes the learning loop. Maybe your time estimates were off, or you spent too long on one part. Document it, adjust next sprint. This continuous improvement is the heart of agile. Learn from every iteration.

### Question 14
Why should you document your velocity and sprint retrospectives in ML projects?

A) To impress your instructor
B) To build self-awareness and improve planning over time
C) Because it's required by Python
D) To make your code run faster

**Correct Answer**: B
**Explanation**: ML is unpredictable—experiments fail, models underperform. Tracking velocity and doing retrospectives builds realistic planning skills. You learn your actual capacity, what takes longer than expected, where you get stuck. This metacognitive practice makes you a better professional. It's not just what you build; it's learning how you build.

---

## Scoring Guide
- 90-100%: Excellent understanding of AI agents and sprint practices
- 80-89%: Good grasp, minor gaps in API usage or velocity concepts
- 70-79%: Adequate foundation, review prompt engineering and retrospectives
- Below 70%: Revisit Module 4 materials, especially API best practices

## Study Resources
- Module 4 Assignment: Building Your First AI Agent
- Canvas HTML: "Prompt Engineering Fundamentals"
- Canvas HTML: "Calculating and Using Velocity"
- OpenAI API documentation
- Error handling in Python (try/except blocks)
- Sprint retrospective template
- Rate limiting and cost management guide
