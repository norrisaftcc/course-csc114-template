# Module 7 Knowledge Check: NLP & Sprint 5

**Purpose**: Assess understanding of NLP fundamentals, RNNs/LSTMs, text preprocessing, and process optimization
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Technical Concepts (60%)

### Question 1
What is Natural Language Processing (NLP)?

A) Processing natural images
B) Teaching computers to understand, interpret, and generate human language
C) A type of neural network
D) A database for storing text

**Correct Answer**: B
**Explanation**: NLP is the intersection of linguistics, AI, and computer science. It encompasses everything from spam detection to machine translation to chatbots. The challenge: human language is ambiguous, context-dependent, and creative. Teaching computers to handle this complexity is what NLP tackles. It's one of the most practically valuable AI domains.

### Question 2
What is tokenization in NLP?

A) Creating security tokens for authentication
B) Breaking text into smaller units like words or subwords
C) Encrypting text data
D) Counting characters in a document

**Correct Answer**: B
**Explanation**: Tokenization splits text into processable units. "I love ML" becomes ["I", "love", "ML"]. This seems simple but gets complex—how do you handle "don't"? "New York"? Different tokenizers make different choices, affecting model performance. It's the first step in almost every NLP pipeline. Get tokenization wrong, everything downstream suffers.

### Question 3
What is a word embedding?

A) A way to compress text files
B) A dense vector representation of words that captures semantic meaning
C) A type of encryption
D) A word processing format

**Correct Answer**: B
**Explanation**: Embeddings map words to vectors (e.g., 300-dimensional) where similar words are close together. "king" and "queen" are near each other; "king" and "banana" are far apart. This captures meaning mathematically. Word2Vec and GloVe are famous examples. Embeddings are why modern NLP works—they give models semantic understanding, not just string matching.

### Question 4
Why are Recurrent Neural Networks (RNNs) particularly suited for sequential data like text?

A) They're faster than other networks
B) They maintain hidden states that capture information from previous inputs
C) They require less training data
D) They're easier to implement

**Correct Answer**: B
**Explanation**: RNNs have memory—they process sequences one element at a time, maintaining a hidden state that accumulates context. When processing "The cat sat on the mat," by "mat" the RNN has context from earlier words. This sequential processing matches language's sequential nature. Standard feedforward networks can't do this—they see inputs independently.

### Question 5
What problem do LSTMs (Long Short-Term Memory networks) solve compared to basic RNNs?

A) They're faster to train
B) They handle long-range dependencies better, avoiding vanishing gradients
C) They use less memory
D) They're simpler to understand

**Correct Answer**: B
**Explanation**: Basic RNNs forget long-ago context—try learning from a word 50 positions back. LSTMs use gates (forget, input, output) to control information flow, maintaining relevant context over long sequences. This is why LSTMs dominated NLP before transformers. They're more complex but far more capable. The gates are the key innovation—selective memory.

### Question 6
What is sentiment analysis?

A) Analyzing data from sensors
B) Determining the emotional tone (positive, negative, neutral) of text
C) Counting words in text
D) Translating between languages

**Correct Answer**: B
**Explanation**: Sentiment analysis classifies text by emotion or opinion. "This movie is amazing!" is positive. "Terrible service" is negative. Applications: monitoring brand reputation, analyzing reviews, gauging customer satisfaction. It's classification applied to text, with the added challenge of sarcasm, context, and linguistic nuance. Deceptively simple problem, surprisingly complex in practice.

### Question 7
What is a typical text preprocessing pipeline before feeding data to an NLP model?

A) Just load the text directly
B) Tokenize, lowercase, remove punctuation/stopwords, and possibly lemmatize
C) Convert to images
D) Translate to English

**Correct Answer**: B
**Explanation**: Raw text needs cleaning. Tokenize into words, lowercase ("The" and "the" are same word), remove common words ("the", "a", "is") that add little meaning, and maybe lemmatize ("running" to "run"). The specific steps depend on your task. This preprocessing often matters more than model choice. Clean data beats fancy algorithms.

### Question 8
What are "stopwords" in NLP?

A) Words that end sentences
B) Common words (like "the", "is", "a") often removed because they carry little meaning
C) Spelling mistakes
D) Words longer than 10 characters

**Correct Answer**: B
**Explanation**: Stopwords are high-frequency, low-information words. Removing them reduces noise and dimensionality. But be careful—for some tasks (like sentiment analysis), stopwords matter. "Not good" vs "good" depends on "not." Context determines whether stopword removal helps or hurts. This is where engineering judgment trumps blind rules.

### Question 9
In the context of text generation, what is "temperature" when sampling from a language model?

A) The physical temperature of the hardware
B) A parameter controlling randomness (low = deterministic, high = creative/random)
C) The training time
D) The model size

**Correct Answer**: B
**Explanation**: Just like with OpenAI API, temperature controls creativity. Temperature 0 = always pick the most likely next word (boring but coherent). Temperature 1+ = sample from the probability distribution (creative but potentially incoherent). For formal writing, use low temperature. For creative writing, use higher. It's the predictability-creativity dial.

---

## Project Management Concepts (40%)

### Question 10
What does "process optimization" mean in the context of Sprint 5?

A) Making your code run faster
B) Identifying inefficiencies in your workflow and refining your practices
C) Using optimization algorithms
D) Buying faster hardware

**Correct Answer**: B
**Explanation**: By Sprint 5, you've run multiple iterations. Process optimization means looking at your workflow: What takes too long? Where do you get stuck? What can be automated or streamlined? Maybe you need better experiment tracking, or a template for preprocessing. This metacognitive improvement is professional growth. Work smarter, not just harder.

### Question 11
You notice you're spending 2 hours each sprint on repetitive data preprocessing. What's the professional response?

A) Accept it as necessary work
B) Create a reusable preprocessing script or function to automate it
C) Skip preprocessing to save time
D) Complain but change nothing

**Correct Answer**: B
**Explanation**: Repetitive work should be automated. Write a preprocess_text() function or a script you can reuse. This upfront investment pays off—2 hours becomes 10 minutes. This is engineering efficiency. Good developers are lazy in the right way—they automate themselves out of tedious work. Time saved is time for valuable work.

### Question 12
What should a Sprint 5 retrospective focus on, given it's late in the course?

A) Only the most recent sprint
B) Patterns across all sprints and cumulative improvements made
C) Nothing; retrospectives aren't needed late in the course
D) Only problems, not successes

**Correct Answer**: B
**Explanation**: Sprint 5 is a good time to zoom out. Look at your velocity trend, planning accuracy over time, what you've improved since Sprint 1. This longitudinal view shows growth. Maybe your estimates are now accurate, or you've built reusable code. Recognize progress; it motivates and informs future work. Pattern recognition over time is meta-learning.

### Question 13
Why is code reusability important in ML projects?

A) It's not important; always start from scratch
B) It saves time, reduces errors, and builds a personal toolkit
C) To make code longer
D) Because professors require it

**Correct Answer**: B
**Explanation**: ML projects have common patterns—data loading, preprocessing, train/test split, evaluation. Build functions and modules you reuse across projects. This compounds efficiency—your 10th project is 5x faster than your first. It also reduces bugs (reused code is tested code). Professional developers build libraries, not one-off scripts.

### Question 14
You've completed 5 sprints. What career-relevant skills have you developed beyond technical ML knowledge?

A) Only Python coding
B) Planning, estimation, documentation, reflection, and professional workflow habits
C) Nothing beyond ML algorithms
D) Only how to pass tests

**Correct Answer**: B
**Explanation**: The PM practices integrated throughout the course are career multipliers. You can plan realistic projects, track progress, document decisions, reflect and improve. These skills make you employable beyond just technical knowledge. Junior developers know algorithms; professionals know how to ship projects. You're building both.

---

## Scoring Guide
- 90-100%: Excellent understanding of NLP fundamentals and process optimization
- 80-89%: Good grasp, minor gaps in RNN/LSTM concepts or workflow optimization
- 70-79%: Adequate foundation, review embeddings and retrospective practices
- Below 70%: Revisit Module 7 materials, especially sequential models and automation

## Study Resources
- Module 7 Assignment: NLP Sentiment Analysis Project
- Canvas HTML: "NLP Fundamentals: From Tokens to Meaning"
- Canvas HTML: "RNNs and LSTMs: Understanding Sequential Models"
- Canvas HTML: "Optimizing Your ML Workflow"
- Word embeddings (Word2Vec, GloVe) tutorials
- LSTM architecture explained
- Text preprocessing best practices
- Sprint retrospective cumulative analysis template
- Code reusability and module design guide
