# Module 8 Knowledge Check: Capstone & Sprint 6

**Purpose**: Assess understanding of end-to-end ML pipelines, deployment concepts, portfolio documentation, and professional presentation
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20 minutes

---

## Technical Concepts (60%)

### Question 1
What is an "end-to-end ML pipeline"?

A) A pipeline that goes from coast to coast
B) A complete workflow from data collection through deployment and monitoring
C) Just the model training phase
D) Only the data preprocessing steps

**Correct Answer**: B
**Explanation**: An end-to-end pipeline encompasses everything: data collection, cleaning, preprocessing, feature engineering, model training, evaluation, deployment, monitoring, and retraining. It's the full lifecycle. Most courses only teach the middle (training). Professionals need to understand the entire flow. This holistic view is what separates students from practitioners.

### Question 2
What are the key stages of an ML pipeline in order?

A) Deploy, train, test, collect data
B) Data collection, preprocessing, training, evaluation, deployment
C) Training, testing, deploying
D) Preprocessing, deploying, training

**Correct Answer**: B
**Explanation**: The typical flow: collect/load data, clean and preprocess it, split into train/test, train models, evaluate performance, deploy the best model. In production, you'd add monitoring and retraining. This sequence is fundamental—each stage depends on the previous. Understanding this flow is essential for building real ML systems.

### Question 3
What does "model deployment" mean?

A) Deleting the model after training
B) Making the model available for real-world use in production
C) Saving the model to disk
D) Sharing the model with friends

**Correct Answer**: B
**Explanation**: Deployment means putting your model into production where it processes real data and makes real decisions. This might be a REST API, a web app, or integration into existing systems. A model that lives only in a Jupyter notebook has zero real-world impact. Deployment is where ML creates value. It's the gap between research and product.

### Question 4
Why would you save a trained model to disk (serialization)?

A) To make it larger
B) To avoid retraining and enable deployment
C) To delete the training data
D) To make it run slower

**Correct Answer**: B
**Explanation**: Training takes time (minutes to days). Serialization (pickle, joblib, SavedModel format) lets you save trained models and load them later for predictions. Train once, predict many times. This is essential for deployment—you don't retrain every time someone uses your app. It's the bridge between development and production.

### Question 5
What is the purpose of monitoring deployed ML models?

A) Monitoring isn't necessary after deployment
B) To detect performance degradation, data drift, and ensure continued reliability
C) To slow down the model
D) To collect user personal information

**Correct Answer**: B
**Explanation**: Models degrade over time. User behavior changes, data distributions shift, patterns evolve. A model trained on 2020 data might perform poorly in 2024. Monitoring catches this drift—tracking accuracy, prediction distributions, feature statistics. Professional ML includes ongoing maintenance, not just initial deployment. Build it, ship it, watch it, maintain it.

### Question 6
What is "feature engineering"?

A) Creating new buildings
B) Creating, transforming, or selecting features to improve model performance
C) Debugging code
D) Designing neural network architectures

**Correct Answer**: B
**Explanation**: Feature engineering is often the difference between mediocre and excellent models. It's creating derived features (age from birthdate), combining features (price per square foot from price and area), or selecting relevant features. Good feature engineering can outperform fancy algorithms on raw data. It's where domain knowledge meets technical skill. Art and science combined.

### Question 7
Your model performs well in training but fails in production. What's a likely cause?

A) The model is too accurate
B) Training/production data mismatch or distribution shift
C) The model is saving correctly
D) The evaluation metrics are wrong

**Correct Answer**: B
**Explanation**: This is the train/serve skew problem. Maybe production data has different scales, missing values, or unexpected patterns. Or user behavior changed since training. This is why validation that mimics production is crucial. Always test on data that looks like what you'll see in production. Production reality is the ultimate test.

### Question 8
What's the difference between batch prediction and real-time prediction?

A) There is no difference
B) Batch processes many predictions offline; real-time processes single predictions immediately
C) Batch is always better
D) Real-time is always slower

**Correct Answer**: B
**Explanation**: Batch prediction: process 1 million customer records overnight, generate recommendations. Real-time: user uploads image, get classification in 100ms. Different use cases need different approaches. Batch is efficient for large-scale, non-urgent tasks. Real-time is necessary for interactive applications. Choose based on business requirements, not just technical preference.

### Question 9
What should be included in documentation for a deployed ML model?

A) Nothing; the code is self-explanatory
B) Model purpose, features used, performance metrics, limitations, and maintenance procedures
C) Only the final accuracy score
D) Just the training script

**Correct Answer**: B
**Explanation**: Professional documentation enables others (or future you) to understand, use, and maintain the model. What problem does it solve? What inputs does it need? How well does it perform? What are its limitations? How do you retrain it? This documentation is part of the deliverable, not an afterthought. It's what makes your work reproducible and maintainable.

---

## Project Management & Portfolio Concepts (40%)

### Question 10
What should a professional ML portfolio demonstrate?

A) Only your highest accuracy scores
B) Technical skills, problem-solving ability, communication, and professional practices
C) That you completed assignments
D) Just code with no explanation

**Correct Answer**: B
**Explanation**: Portfolios are your career calling card. Show: diverse projects, technical depth, clear documentation, problem-solving thinking, awareness of limitations, professional workflow. Employers want to see how you think and work, not just what you built. A well-documented moderate project beats an undocumented impressive project. Show your process, not just results.

### Question 11
What's the most important aspect of presenting an ML project to non-technical stakeholders?

A) Using as much technical jargon as possible
B) Focusing on business value and insights, not technical details
C) Only showing code
D) Explaining every mathematical equation

**Correct Answer**: B
**Explanation**: Stakeholders care about impact: "This model reduces customer churn by 15%, saving $2M annually." Not: "We used a random forest with Gini impurity and got 0.87 AUC-ROC." Translate technical work into business value. Know your audience. Technical skills get you in the room; communication skills get you promoted.

### Question 12
Your capstone project should demonstrate what compared to earlier projects?

A) Just more code
B) Integration of all course concepts, professional workflow, and polish
C) The same skills as Module 1
D) That you can use the most complex algorithms

**Correct Answer**: B
**Explanation**: The capstone shows growth—clean code, good documentation, professional practices, end-to-end thinking, ethical consideration. It's your showcase piece. Not just "I can build a model" but "I can ship a complete ML project professionally." This is the portfolio piece that demonstrates comprehensive skill. Make it count.

### Question 13
What does "process portfolio" mean in the context of this course?

A) A folder of all your files
B) Documentation of your development process, decisions, and growth across projects
C) Only final project deliverables
D) A list of algorithms used

**Correct Answer**: B
**Explanation**: Process portfolio shows *how* you work, not just *what* you built. It includes sprint retrospectives, decision logs, velocity tracking, improvement over time. Employers value this—it shows self-awareness, growth mindset, and professional maturity. It's evidence that you can work professionally, not just complete assignments. Process is product.

### Question 14
What should you emphasize when presenting your capstone project?

A) How many hours you worked
B) The problem, your approach, results, limitations, and insights gained
C) Only the technical implementation
D) How difficult the project was

**Correct Answer**: B
**Explanation**: Tell a story: Here's the problem. Here's why it matters. Here's what I tried. Here's what worked and what didn't. Here's what I learned. This narrative demonstrates critical thinking and communication. Presentations aren't about impressing with complexity; they're about clearly conveying value and learning. Story beats specs.

### Question 15
Looking back at 6 sprints of integrated PM practices, what's the ultimate value?

A) Meeting course requirements
B) Building habits and skills that make you a professional who can ship ML projects
C) Creating busywork
D) Learning to use project management software

**Correct Answer**: B
**Explanation**: The PM integration wasn't about learning PM for its own sake—it was about becoming a professional who can deliver ML projects successfully. You can plan realistic work, track progress, document decisions, reflect and improve, communicate results. These habits compound throughout your career. You're not just an ML student; you're an ML professional in training.

---

## Scoring Guide
- 90-100%: Excellent understanding of ML pipelines, deployment, and professional practices
- 80-89%: Good grasp, minor gaps in deployment or portfolio concepts
- 70-79%: Adequate foundation, review end-to-end workflows and documentation
- Below 70%: Revisit Module 8 materials, especially deployment and professional presentation

## Study Resources
- Module 8 Assignment: Capstone Project
- Canvas HTML: "Building End-to-End ML Pipelines"
- Canvas HTML: "From Model to Production: Deployment Basics"
- Canvas HTML: "Building Your ML Portfolio"
- Canvas HTML: "Presenting ML Projects Effectively"
- Model serialization tutorials (pickle, joblib, SavedModel)
- Deployment patterns and best practices
- Portfolio examples and templates
- Presentation guidelines for technical projects
- Process portfolio documentation guide

---

## Final Reflection

Congratulations on completing CSC-114! You've built technical ML skills across supervised learning, neural networks, computer vision, and NLP. More importantly, you've integrated professional practices that will serve you throughout your career.

The knowledge checks throughout this course weren't just assessments—they were learning tools. Each explanation, each "why it matters" was meant to build not just knowledge but understanding and professional judgment.

As you move forward:
- Keep building projects
- Keep documenting your process
- Keep reflecting and improving
- Keep asking "why?" and "what if?"

The fundamentals you've learned here are your foundation. The practices you've built are your toolkit. The curiosity and professionalism you've developed are your competitive advantage.

Now go build something amazing.

— Drew
