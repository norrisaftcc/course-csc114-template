# Module 1 Knowledge Check: ML Fundamentals & Setup

**Purpose**: Assess understanding of Python ML libraries, first model concepts, and basic PM vocabulary
**Format**: 13 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Technical Concepts (60%)

### Question 1
What is the primary purpose of the NumPy library in machine learning workflows?

A) Creating web interfaces for ML models
B) Performing efficient numerical operations on arrays and matrices
C) Managing project dependencies
D) Visualizing data in dashboards

**Correct Answer**: B
**Explanation**: NumPy provides the foundation for numerical computing in Python, offering fast array operations that are essential for ML algorithms. While visualization and project management are important, they're handled by other libraries (matplotlib, pip). NumPy is all about the math.

### Question 2
In pandas, what data structure would you use to work with a dataset that has rows and columns, similar to a spreadsheet?

A) List
B) Array
C) DataFrame
D) Dictionary

**Correct Answer**: C
**Explanation**: A DataFrame is pandas' core data structure for tabular data. It's like a spreadsheet or SQL table in Python. Lists and dictionaries are basic Python structures, and arrays are NumPy's domain. DataFrames give you the power to manipulate, filter, and analyze structured data efficiently.

### Question 3
You're loading a CSV file with 1,000 customer records. Which library and method would you typically use?

A) NumPy's np.loadtxt()
B) pandas' pd.read_csv()
C) scikit-learn's load_dataset()
D) Python's built-in open()

**Correct Answer**: B
**Explanation**: While all of these *can* read files, pd.read_csv() is purpose-built for structured data like CSVs. It automatically handles headers, data types, and creates a DataFrame. NumPy is better for pure numeric arrays, scikit-learn for example datasets, and open() is too low-level for typical ML work.

### Question 4
What does "supervised learning" mean?

A) Learning that requires a teacher to monitor the algorithm
B) Learning from data that includes both inputs and correct outputs
C) Learning that only works with labeled images
D) Learning that requires constant human intervention

**Correct Answer**: B
**Explanation**: Supervised learning means training on labeled data—you have examples where you know the right answer. The algorithm learns the pattern between inputs and outputs. It's not about human supervision during training; it's about having those target labels in your training data. This is different from unsupervised learning, where you only have inputs.

### Question 5
In scikit-learn, what does the fit() method do?

A) Checks if data fits in memory
B) Trains the model on the provided data
C) Evaluates model performance
D) Cleans the dataset

**Correct Answer**: B
**Explanation**: fit() is where the learning happens. You pass in training data, and the algorithm adjusts its internal parameters to learn patterns. This is distinct from predict() (making predictions) or score() (evaluating performance). Understanding this workflow—fit, then predict—is fundamental to scikit-learn.

### Question 6
You split your dataset into training and testing sets. What's the primary purpose of the testing set?

A) To provide more data for training
B) To evaluate how well your model generalizes to new data
C) To clean the data before training
D) To speed up the training process

**Correct Answer**: B
**Explanation**: The testing set is your reality check. It shows whether your model actually learned patterns or just memorized the training data. You never train on the test set—it's held back to simulate real-world performance. This is crucial for honest evaluation of your model's capabilities.

### Question 7
What type of problem is predicting house prices based on square footage, bedrooms, and location?

A) Classification
B) Clustering
C) Regression
D) Dimensionality reduction

**Correct Answer**: C
**Explanation**: Regression predicts continuous numeric values—like prices, temperatures, or distances. Classification predicts categories (spam/not spam), clustering finds groups without labels, and dimensionality reduction simplifies data. Since price is a continuous number, this is regression.

### Question 8
Which scikit-learn function is commonly used to split data into training and testing sets?

A) split_data()
B) train_test_split()
C) divide_dataset()
D) create_splits()

**Correct Answer**: B
**Explanation**: train_test_split() is the standard tool for this job. It randomly shuffles and splits your data, typically 80/20 or 70/30. The function name is descriptive—exactly what it does. This is one of the first functions you'll use in almost every ML project.

---

## Project Management Concepts (40%)

### Question 9
What is a user story in agile development?

A) A biography of the end user
B) A short description of a feature from the user's perspective
C) A bug report written by users
D) A story about how the project started

**Correct Answer**: B
**Explanation**: User stories follow the format: "As a [user], I want [feature] so that [benefit]." They keep development focused on user value, not just technical tasks. For ML projects, this might be "As a data analyst, I want to predict customer churn so that I can proactively retain valuable customers." It's about the *why* behind the work.

### Question 10
Why do we write user stories for ML projects instead of just listing technical tasks?

A) Because managers require it
B) To focus on the business value and user needs the model serves
C) To make the project take longer
D) To avoid writing code

**Correct Answer**: B
**Explanation**: User stories prevent you from building technically impressive models that solve the wrong problem. They anchor your work in real user needs. An ML model that's 99% accurate but doesn't address what users actually need is worthless. User stories keep you honest about delivering value, not just accuracy scores.

### Question 11
In the context of this course, what does "developing-level PM skills" mean?

A) You'll become a certified project manager
B) You'll learn PM practices relevant to professional ML work
C) You'll only manage other people's projects
D) PM skills are separate from technical work

**Correct Answer**: B
**Explanation**: We're integrating PM practices that make you a better ML practitioner—planning your work, tracking progress, communicating results. This isn't about becoming a PM; it's about working like a professional who can ship ML projects effectively. These skills make you more employable and your projects more successful.

### Question 12
What's the main benefit of unlimited attempts on Knowledge Checks?

A) To make the course easier
B) To encourage learning from mistakes without grade penalty
C) To reduce the instructor's grading workload
D) To let you skip studying the material

**Correct Answer**: B
**Explanation**: Unlimited attempts mean these are learning tools, not just assessment tools. Get one wrong? Read the explanation, review the material, try again. This builds real understanding instead of test-taking skills. The goal is mastery, not memorization. Use these attempts to actually learn, not just guess until you pass.

### Question 13
Your first ML project requires installing NumPy, pandas, and scikit-learn. What PM practice does this setup step represent?

A) Sprint retrospective
B) Environment preparation and dependency management
C) User story creation
D) Velocity calculation

**Correct Answer**: B
**Explanation**: Professional projects start with proper setup—managing dependencies, creating reproducible environments, documenting requirements. This isn't glamorous, but it prevents "works on my machine" problems. Good PM practices mean your project can be run by others (or by future you). Always document your environment setup.

---

## Scoring Guide
- 90-100%: Excellent understanding of ML fundamentals and PM basics
- 80-89%: Good grasp, minor gaps in concepts
- 70-79%: Adequate foundation, review recommended areas
- Below 70%: Revisit Module 1 materials before proceeding

## Study Resources
- Module 1 Assignment: Python ML Stack Setup
- Canvas HTML: "Why We Use Python for ML"
- NumPy quickstart guide
- pandas "10 minutes to pandas" tutorial
- scikit-learn Getting Started documentation
- Module 1 readings on user stories and agile basics
