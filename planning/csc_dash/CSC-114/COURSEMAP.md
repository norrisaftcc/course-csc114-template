# CSC-114: Artificial Intelligence I
## Complete Course Map for Internal Certification

**Instructor**: Drew Norris
**Credits**: 3 (2 Class | 3 Lab)
**Term Length**: 16 weeks (8 modules, 2 weeks each)
**Prerequisites**: CSC-113 or instructor permission
**Delivery Mode**: Hybrid (online materials + in-person lab)
**Last Updated**: January 2026

---

## COURSE OVERVIEW

### Course Description
Advanced AI concepts with hands-on machine learning implementation. Students build ML models using Python, explore supervised/unsupervised learning, model evaluation, AI agents, neural networks, computer vision, and NLP. Integrates professional Scrum/Agile project management throughout with 6 complete sprint cycles.

### Target Audience
- Second-semester IT/CS students who completed CSC-113
- Students ready for hands-on ML implementation with Python
- Students preparing for CSC-289 capstone requiring autonomous PM
- Students seeking professional ML + PM dual competency

### Unique Features
- **30-50% Process Grading**: Emphasizes PM skills alongside technical implementation
- **6 Complete Sprint Cycles**: Students manage ML projects using Scrum methodology
- **Integrated PM Skills**: User stories, story points, sprint planning, burndown charts, retrospectives
- **Production-Ready Focus**: Portfolio-quality code and professional documentation

---

## PROGRAM OUTCOMES ALIGNMENT

This course contributes to the following program-level outcomes:

**PO1**: Apply technical skills in computing environments (ML implementation)
**PO2**: Demonstrate professional communication in technical contexts (documentation, presentations)
**PO3**: Solve problems using critical thinking and technical tools (model evaluation, debugging)
**PO4**: Work effectively in team-based project environments (sprint methodology, retrospectives)
**PO5**: Adapt to emerging technologies and industry changes (ML frameworks, AI ethics)

---

## COURSE LEARNING OUTCOMES (CLOs)

Upon successful completion of CSC-114, students will be able to:

**CLO1**: Implement machine learning models using established frameworks
*Bloom's Level*: Apply
*Assessment*: All technical assignments (Weeks 1-16) require ML implementation using scikit-learn, TensorFlow, or similar frameworks

**CLO2**: Evaluate AI model performance using appropriate metrics
*Bloom's Level*: Evaluate
*Assessment*: Model Evaluation Sprint (Weeks 5-6), comprehensive metrics in all subsequent sprints

**CLO3**: Design and implement AI agents for specific tasks
*Bloom's Level*: Create
*Assessment*: AI Agent Sprint (Weeks 7-8), capstone project integration

**CLO4**: Analyze ethical implications of AI systems
*Bloom's Level*: Analyze
*Assessment*: Computer Vision Sprint ethics section (Weeks 11-12), capstone ethical analysis

**CLO5**: Document AI development process and decisions
*Bloom's Level*: Create
*Assessment*: All sprint retrospectives, process portfolio, final presentation

---

## 8-MODULE STRUCTURE OVERVIEW

| Module | Weeks | Topic | Points | CLOs | PM Focus |
|--------|-------|-------|--------|------|----------|
| 1 | 1-2 | ML Fundamentals & Setup | 50 | 1, 5 | User stories intro |
| 2 | 3-4 | Supervised Learning | 50 | 1, 5 | Story point estimation |
| 3 | 5-6 | Model Evaluation - Sprint 1 | 75 | 2, 5 | First complete sprint |
| 4 | 7-8 | AI Agents - Sprint 2 | 75 | 3, 5 | Velocity-based planning |
| 5 | 9-10 | Neural Networks - Sprint 3 | 75 | 1, 2 | PM becomes habitual |
| 6 | 11-12 | Computer Vision - Sprint 4 | 75 | 1, 4 | Ethics integration |
| 7 | 13-14 | NLP - Sprint 5 | 75 | 1, 2 | Process optimization |
| 8 | 15-16 | Capstone - Sprint 6 | 175 | All | Process portfolio |
| **TOTAL** | **16** | | **700** | | **6 sprints** |

---

## MODULE 1: ML Fundamentals & Setup
**Duration**: Weeks 1-2
**Theme**: Machine learning environment and first model

### Module Learning Outcomes (MLOs)
1. **MLO 1.1**: Configure professional ML development environment with Python and key libraries *(Bloom's: Apply | CLO1)*
2. **MLO 1.2**: Implement basic classification models using scikit-learn *(Bloom's: Apply | CLO1)*
3. **MLO 1.3**: Create user stories for ML project requirements *(Bloom's: Create | CLO5)*

### Assignments
**M01-A1: ML Environment Setup & First Model** (25 points)
- **What Students Do**: Install Python/Jupyter (or use Google Colab), install ML libraries (scikit-learn, pandas, numpy, matplotlib), train first k-Nearest Neighbors classifier on Iris dataset
- **Grading Split**: Environment setup (5 pts), Model implementation (10 pts), Experimentation with different k values (5 pts), Documentation & reflection (5 pts), Process bonus (2 pts)
- **CLOs Assessed**: CLO1 (ML implementation), CLO5 (documentation)
- **Technical Content**: Python environment setup, Jupyter notebooks, data loading with pandas, train/test split, kNN algorithm, accuracy evaluation, basic visualization
- **Deliverables**: Jupyter notebook with working code, README update, GitHub Issue/PR following Sacred Flow

**M01-A2: User Story Backlog** (25 points)
- **What Students Do**: Learn user story format (As a.../I want.../So that...), write 8-10 user stories for an ML project idea, create GitHub Issues as backlog items, define acceptance criteria
- **Grading Split**: User story format correctness (10 pts), Acceptance criteria quality (8 pts), GitHub Issues setup (5 pts), Backlog organization (2 pts)
- **CLOs Assessed**: CLO5 (process documentation)
- **Technical Content**: User story writing, acceptance criteria definition, GitHub Issues as backlog management, product backlog creation
- **Deliverables**: GitHub Issues with formatted user stories, backlog planning document

### Learning Activities
1. **Video**: ML Development Environment Setup (20 min)
2. **Reading**: Introduction to Supervised Learning (45 min)
3. **Interactive**: First ML Model Walkthrough (in-class lab, 90 min)
4. **Discussion**: "My First ML Prediction" (async)
5. **Mini-Lesson**: User Stories 101 (10 min, see pm-materials/01-User-Stories-Mini-Lesson.md)

### Knowledge Check
- 10-question quiz on ML terminology (supervised vs. unsupervised, training vs. testing, features vs. labels)
- Scenario-based: "Which algorithm would you use for...?"
- User story format identification exercise

### Instructional Materials
- Python/Jupyter setup guide (local and Colab options)
- scikit-learn quick start tutorial
- Iris dataset exploration guide
- User story template with examples
- PM Mini-Lesson #1: User Stories

### Project Management Integration (Intro Level)
- **Planning Sheet**: Basic issue template for ML tasks
- **New PM Skill**: Writing user stories in proper format
- **Reflection**: Exit Ticket (What did I ship? What blocked me? Next commit?)
- **PM Time**: ~2 hours for user story practice

---

## MODULE 2: Supervised Learning
**Duration**: Weeks 3-4
**Theme**: Classification and regression fundamentals

### Module Learning Outcomes (MLOs)
1. **MLO 2.1**: Implement classification models for categorical predictions *(Bloom's: Apply | CLO1)*
2. **MLO 2.2**: Apply regression techniques to continuous data prediction *(Bloom's: Apply | CLO1)*
3. **MLO 2.3**: Estimate work complexity using story points *(Bloom's: Apply | CLO5)*

### Assignments
**M02-A1: Classification Project** (25 points)
- **What Students Do**: Train multiple classifiers (Logistic Regression, Decision Tree, Random Forest) on binary classification dataset (breast cancer detection), compare accuracy, select best model
- **Grading Split**: Data loading/preprocessing (5 pts), Multiple models trained (10 pts), Model comparison (5 pts), Best model selection justified (5 pts)
- **CLOs Assessed**: CLO1 (ML implementation), CLO2 (evaluation)
- **Technical Content**: Binary classification, Logistic Regression, Decision Trees, Random Forest, model comparison, confusion matrix introduction
- **Deliverables**: Jupyter notebook with 3+ models, comparison table, justified selection

**M02-A2: Regression Analysis** (25 points)
- **What Students Do**: Implement linear and polynomial regression on housing price dataset, evaluate using RMSE and R², visualize predictions vs. actual values, estimate story points for future ML tasks
- **Grading Split**: Regression models implemented (10 pts), Evaluation metrics calculated (5 pts), Visualizations (5 pts), Story point estimation practice (5 pts)
- **CLOs Assessed**: CLO1 (ML implementation), CLO5 (estimation practice)
- **Technical Content**: Linear regression, polynomial regression, RMSE, R², overfitting in polynomial features, story point estimation using Fibonacci scale
- **Deliverables**: Jupyter notebook with regression analysis, story point estimation document

### Learning Activities
1. **Video**: Classification vs. Regression (25 min)
2. **Reading**: Decision Trees and Ensemble Methods (60 min)
3. **Workshop**: Hands-on Classification Lab (in-class, 90 min)
4. **Discussion**: "When Classification Fails" (async)
5. **Mini-Lesson**: Story Point Estimation (10 min, see pm-materials/02-Story-Points-Estimation.md)

### Knowledge Check
- 10-question quiz on supervised learning concepts
- Algorithm selection exercise: "For this problem, I would use... because..."
- Story point estimation practice scenarios

### Instructional Materials
- Classification algorithms comparison guide
- Regression techniques tutorial
- Model evaluation metrics reference
- Story point estimation guide (Fibonacci scale)
- PM Mini-Lesson #2: Story Points

### Project Management Integration (Intro Level)
- **Planning Sheet**: Task breakdown with story point estimates
- **New PM Skill**: Story point estimation using Fibonacci scale (1, 2, 3, 5, 8)
- **Reflection**: Exit Ticket with velocity tracking
- **PM Time**: ~2 hours for estimation practice and velocity baseline

---

## MODULE 3: Model Evaluation - Sprint 1
**Duration**: Weeks 5-6
**Theme**: First complete 2-week sprint with comprehensive metrics

### Module Learning Outcomes (MLOs)
1. **MLO 3.1**: Evaluate model performance using precision, recall, F1-score, and ROC curves *(Bloom's: Evaluate | CLO2)*
2. **MLO 3.2**: Apply cross-validation techniques to assess model generalization *(Bloom's: Apply | CLO2)*
3. **MLO 3.3**: Plan and execute first development sprint using Scrum methodology *(Bloom's: Apply | CLO5)*

### Assignments
**M03-A1: Model Evaluation Sprint** (50 points)
- **What Students Do**: Execute first full 2-week sprint: sprint planning (capacity calculation, story selection, sprint goal), implement comprehensive model evaluation framework (4 models on breast cancer dataset), calculate precision/recall/F1/ROC AUC for each, create confusion matrices, build model comparison dashboard, maintain daily standups, update sprint board, track burndown chart
- **Grading Split**: Technical implementation (25 pts) - Cross-validation (5 pts), All 4 models trained (5 pts), Comprehensive metrics (5 pts), Visualizations (5 pts), Best model justified (5 pts) | PM execution (20 pts) - Sprint planning (5 pts), Daily standups (5 pts), Burndown chart (5 pts), Sprint board management (5 pts) | Documentation (5 pts)
- **CLOs Assessed**: CLO1 (implementation), CLO2 (evaluation), CLO5 (sprint documentation)
- **Technical Content**: Cross-validation (k-fold), confusion matrix, precision/recall/F1-score, ROC curves, AUC, model comparison frameworks, performance visualization
- **PM Content**: Sprint planning (capacity, sprint goal, story selection), daily standups (What I did/What I'll do/Blockers), GitHub Projects as Kanban board (To Do/In Progress/Done), burndown chart creation and maintenance
- **Deliverables**: Jupyter notebook with 4 models evaluated, sprint planning document, 10 daily standup entries, burndown chart, sprint board screenshot

**M03-A2: Sprint 1 Retrospective** (25 points)
- **What Students Do**: Conduct structured retrospective using Start/Stop/Continue format, analyze what went well and what didn't, identify velocity (planned vs. actual story points), document blockers and resolutions, create action items for Sprint 2
- **Grading Split**: What went well (5 pts), What didn't go well (5 pts), Velocity analysis (5 pts), Action items for improvement (5 pts), Honesty and depth (5 pts)
- **CLOs Assessed**: CLO5 (process reflection)
- **Technical Content**: N/A (pure process)
- **PM Content**: Sprint retrospective ceremonies, Start/Stop/Continue framework, velocity calculation, continuous improvement mindset
- **Deliverables**: Retrospective document with structured sections, velocity chart, improvement action items

### Learning Activities
1. **Video**: Model Evaluation Metrics Explained (30 min)
2. **Reading**: Cross-Validation and Generalization (45 min)
3. **Lab**: Sprint Work Time with Check-ins (2 sessions × 90 min)
4. **Discussion**: "My Sprint Blockers" (async)
5. **Mini-Lesson**: Sprint Planning (15 min, see pm-materials/03-Sprint-Planning.md)
6. **Demo Day**: Sprint 1 Review Presentations (in-class, 90 min)

### Knowledge Check
- Evaluation metrics matching exercise
- Sprint planning scenario quiz
- Retrospective reflection prompts

### Instructional Materials
- Comprehensive metrics guide (precision, recall, F1, ROC, AUC)
- Cross-validation tutorial with code examples
- Sprint planning template with capacity calculation
- Daily standup log template
- Burndown chart spreadsheet template
- Retrospective template (Start/Stop/Continue)
- PM Mini-Lesson #3: Sprint Planning

### Project Management Integration (Developing Level)
- **Planning Sheet**: Full sprint planning document with capacity and goals
- **New PM Skills**: Sprint planning, capacity calculation, daily standups, burndown tracking, sprint retrospectives
- **Reflection**: Retrospective replaces standard exit ticket
- **PM Time**: ~5 hours (2 hrs planning, 2 hrs daily tracking, 1 hr retrospective)
- **Process Grading**: 40% of module grade (20 pts process / 50 pts total)

---

## MODULE 4: AI Agents - Sprint 2
**Duration**: Weeks 7-8
**Theme**: Agent design with velocity-based planning

### Module Learning Outcomes (MLOs)
1. **MLO 4.1**: Design AI agents with specific goals and decision-making algorithms *(Bloom's: Create | CLO3)*
2. **MLO 4.2**: Implement autonomous agents for task completion *(Bloom's: Apply | CLO3)*
3. **MLO 4.3**: Execute second sprint with improved PM practices based on retrospective *(Bloom's: Apply | CLO5)*

### Assignments
**M04-A1: AI Agent Development Sprint** (50 points)
- **What Students Do**: Execute Sprint 2 with improvements from Sprint 1 retrospective, apply Sprint 1 velocity to plan realistic capacity, design and implement AI agent (game-playing bot, chatbot, or task automation agent), define agent goals/behaviors/decision rules, test agent performance, document agent architecture
- **Grading Split**: Technical implementation (25 pts) - Agent design (8 pts), Implementation (10 pts), Testing/performance (5 pts), Documentation (2 pts) | PM execution (20 pts) - Velocity-based planning (5 pts), Daily standups (5 pts), Burndown (5 pts), Board management (5 pts) | Improvement evidence (5 pts) - Show actions from Sprint 1 retro applied
- **CLOs Assessed**: CLO3 (agent design/implementation), CLO5 (sprint execution)
- **Technical Content**: Agent architecture, goal-directed behavior, decision algorithms, state representation, action selection, agent testing and evaluation
- **PM Content**: Velocity-based sprint planning (use Sprint 1 actual velocity), applying retrospective improvements, refined daily standup practice, improved burndown tracking
- **Deliverables**: Jupyter notebook or Python script with agent implementation, sprint planning with velocity calculation, 10 standup entries, burndown chart, agent demo/video

**M04-A2: Sprint 2 Review & Retrospective** (25 points)
- **What Students Do**: Conduct sprint review (demo working agent to class or via video), run Sprint 2 retrospective, analyze velocity improvement (Sprint 1 vs. Sprint 2), identify patterns in estimation accuracy, document what changed based on Sprint 1 actions, create Sprint 3 improvement plan
- **Grading Split**: Sprint review/demo (10 pts), Retrospective depth (10 pts), Velocity pattern analysis (5 pts)
- **CLOs Assessed**: CLO5 (process maturation)
- **Technical Content**: Agent demonstration and explanation
- **PM Content**: Sprint review ceremony, demonstration skills, retrospective refinement, velocity trend analysis
- **Deliverables**: Sprint review presentation/video, Sprint 2 retrospective document, velocity comparison chart

### Learning Activities
1. **Video**: Introduction to AI Agents (25 min)
2. **Reading**: Agent Architectures and Decision Making (60 min)
3. **Lab**: Sprint 2 Work Time with Velocity Coaching (2 sessions × 90 min)
4. **Workshop**: Agent Design Studio (in-class, 90 min)
5. **Demo Day**: Sprint 2 Agent Demonstrations (in-class, 90 min)

### Knowledge Check
- Agent architecture diagram exercise
- Velocity calculation practice
- Sprint review preparation checklist

### Instructional Materials
- Agent design patterns guide
- Example agent implementations (game bot, chatbot, automation)
- Velocity tracking and trend analysis guide
- Sprint review presentation template
- Retrospective template (expanded version)

### Project Management Integration (Developing Level)
- **Planning Sheet**: Sprint planning with historical velocity data
- **New PM Skills**: Velocity-based capacity planning, sprint review presentations
- **Reflection**: Retrospective with focus on velocity patterns
- **PM Time**: ~5 hours (2 hrs planning with velocity, 2 hrs tracking, 1 hr review/retro)
- **Process Grading**: 45% of module grade (sprint quality matters more)

---

## MODULE 5: Neural Networks - Sprint 3
**Duration**: Weeks 9-10
**Theme**: Deep learning foundations with habitual PM

### Module Learning Outcomes (MLOs)
1. **MLO 5.1**: Construct neural networks using TensorFlow/Keras *(Bloom's: Apply | CLO1)*
2. **MLO 5.2**: Apply backpropagation and gradient descent concepts *(Bloom's: Apply | CLO1)*
3. **MLO 5.3**: Manage third sprint with PM becoming automatic *(Bloom's: Apply | CLO5)*

### Assignments
**M05-A1: Neural Network Sprint** (75 points)
- **What Students Do**: Execute Sprint 3 with neural network implementation, build feedforward neural network using TensorFlow/Keras, experiment with architectures (layers, neurons, activation functions), train on MNIST digit recognition or similar dataset, track training/validation loss curves, implement early stopping, compare neural network to traditional ML models, maintain full sprint process (planning, standups, burndown, board)
- **Grading Split**: Technical implementation (40 pts) - NN architecture (10 pts), Training implementation (10 pts), Experimentation (10 pts), Model comparison (5 pts), Visualizations (5 pts) | PM execution (25 pts) - Sprint planning (5 pts), Daily standups (8 pts), Burndown (6 pts), Board management (6 pts) | Documentation (10 pts)
- **CLOs Assessed**: CLO1 (neural network implementation), CLO2 (evaluation), CLO5 (sprint execution)
- **Technical Content**: Neural network architecture, layers (Dense, Dropout, Activation), backpropagation, gradient descent, loss functions, activation functions (ReLU, sigmoid, softmax), epochs and batches, overfitting prevention (dropout, early stopping), training curves
- **PM Content**: By Sprint 3, PM should be habitual - less guidance provided, students execute independently
- **Deliverables**: Jupyter notebook with NN implementation and experiments, sprint artifacts (planning, standups, burndown, board)

### Learning Activities
1. **Video**: Neural Networks from Scratch (40 min)
2. **Reading**: Deep Learning with TensorFlow/Keras (90 min)
3. **Lab**: Sprint 3 Work Time (2 sessions × 90 min, minimal instructor intervention)
4. **Discussion**: "When Neural Networks Fail" (async)
5. **Office Hours**: Available for technical/PM questions

### Knowledge Check
- Neural network architecture diagram exercise
- Hyperparameter tuning scenarios
- Sprint self-assessment checklist

### Instructional Materials
- TensorFlow/Keras quick start guide
- Neural network architecture patterns
- Hyperparameter tuning guide
- Training curve interpretation guide
- Sprint execution checklist (self-guided)

### Project Management Integration (Developing → Proficient)
- **Planning Sheet**: Student creates own sprint plan (minimal template)
- **New PM Skills**: PM becoming automatic, less scaffolding needed
- **Reflection**: Brief retrospective (PM is now habitual)
- **PM Time**: ~4 hours (students are more efficient now)
- **Process Grading**: 33% of module grade (still important but students are proficient)

---

## MODULE 6: Computer Vision - Sprint 4
**Duration**: Weeks 11-12
**Theme**: CNNs with ethics integration

### Module Learning Outcomes (MLOs)
1. **MLO 6.1**: Implement CNN architectures for image classification *(Bloom's: Apply | CLO1)*
2. **MLO 6.2**: Apply transfer learning using pre-trained models *(Bloom's: Apply | CLO1)*
3. **MLO 6.3**: Analyze ethical implications of computer vision systems *(Bloom's: Analyze | CLO4)*

### Assignments
**M06-A1: Image Classification Sprint** (75 points)
- **What Students Do**: Execute Sprint 4 with computer vision focus, build CNN from scratch for image classification, implement transfer learning using VGG16 or ResNet, train on image dataset (CIFAR-10, fashion MNIST, or custom dataset), compare CNN vs. transfer learning performance, create data augmentation pipeline, execute full sprint process
- **Grading Split**: Technical implementation (40 pts) - CNN architecture (10 pts), Transfer learning (10 pts), Data augmentation (8 pts), Model comparison (7 pts), Results analysis (5 pts) | PM execution (25 pts) - Sprint artifacts (15 pts), PM quality/consistency (10 pts) | Ethical analysis (10 pts) - See M06-A2
- **CLOs Assessed**: CLO1 (CNN implementation), CLO2 (evaluation), CLO4 (ethics)
- **Technical Content**: Convolutional layers, pooling layers, CNN architectures, transfer learning, fine-tuning, data augmentation techniques, image preprocessing, class imbalance handling
- **PM Content**: Sprint 4 - students execute with minimal guidance
- **Deliverables**: Jupyter notebook with CNN and transfer learning, sprint artifacts

**M06-A2: Ethical AI Analysis** (Included in 75 points total - 10 pts of M06-A1)
- **What Students Do**: Conduct ethical analysis of computer vision models, investigate bias in training data (dataset diversity, representation), test model fairness across demographic groups (if applicable), analyze potential misuse scenarios (surveillance, discrimination), document limitations and appropriate use cases, propose fairness testing strategies
- **Grading Split**: Bias assessment (3 pts), Failure mode analysis (2 pts), Data limitations (2 pts), Misuse potential (2 pts), Mitigation strategies (1 pt)
- **CLOs Assessed**: CLO4 (ethical analysis)
- **Technical Content**: Fairness metrics, bias detection, dataset analysis, error analysis by subgroup
- **Deliverables**: Ethics section in main notebook (300+ words) OR separate ethics document

### Learning Activities
1. **Video**: CNNs and Computer Vision (35 min)
2. **Reading**: Transfer Learning and Pre-trained Models (45 min)
3. **Reading**: AI Ethics - Bias in Computer Vision (60 min)
4. **Lab**: Sprint 4 Work Time (2 sessions × 90 min)
5. **Discussion**: "Real-World CV Failures" (async - facial recognition bias, etc.)

### Knowledge Check
- CNN architecture identification quiz
- Ethical scenario analysis exercise
- Transfer learning decision tree

### Instructional Materials
- CNN architecture guide with visualizations
- Transfer learning tutorial (using Keras applications)
- Data augmentation techniques reference
- AI ethics case studies (facial recognition bias, surveillance)
- Fairness testing frameworks overview

### Project Management Integration (Proficient Level)
- **Planning Sheet**: Student-created (no template provided)
- **PM Skills**: Fully autonomous sprint execution
- **Reflection**: Brief retrospective with ethics reflection
- **PM Time**: ~4 hours
- **Process Grading**: 33% of module grade

---

## MODULE 7: NLP - Sprint 5
**Duration**: Weeks 13-14
**Theme**: Text processing with process optimization

### Module Learning Outcomes (MLOs)
1. **MLO 7.1**: Process text data for ML applications *(Bloom's: Apply | CLO1)*
2. **MLO 7.2**: Implement sentiment analysis and text classification *(Bloom's: Apply | CLO1)*
3. **MLO 7.3**: Optimize sprint process based on 4 previous sprints *(Bloom's: Evaluate | CLO5)*

### Assignments
**M07-A1: NLP Project Sprint** (75 points)
- **What Students Do**: Execute Sprint 5 with NLP focus, implement text preprocessing pipeline (tokenization, stopword removal, stemming/lemmatization), build TF-IDF or word embedding features, train text classifier (sentiment analysis, spam detection, or topic classification), compare multiple NLP approaches (Naive Bayes, SVM, neural network), execute optimized sprint process based on lessons from Sprints 1-4
- **Grading Split**: Technical implementation (40 pts) - Text preprocessing (10 pts), Feature extraction (10 pts), Multiple models (12 pts), Comparison/evaluation (8 pts) | PM execution (25 pts) - Sprint artifacts (15 pts), Process optimization evidence (10 pts) | Documentation (10 pts)
- **CLOs Assessed**: CLO1 (NLP implementation), CLO2 (evaluation), CLO5 (process optimization)
- **Technical Content**: Text preprocessing, tokenization, TF-IDF vectorization, word embeddings, sentiment analysis, Naive Bayes for text, text classification evaluation
- **PM Content**: Sprint 5 shows process maturity - students apply all learnings from previous sprints
- **Deliverables**: Jupyter notebook with NLP pipeline and models, sprint artifacts showing optimization

### Learning Activities
1. **Video**: NLP Fundamentals and Text Processing (30 min)
2. **Reading**: Word Embeddings and Modern NLP (60 min)
3. **Lab**: Sprint 5 Work Time (2 sessions × 90 min)
4. **Discussion**: "NLP in the Real World" (async)
5. **Peer Review**: Sprint board exchanges (students review each other's PM artifacts)

### Knowledge Check
- Text preprocessing pipeline exercise
- NLP algorithm selection scenarios
- Process optimization self-reflection

### Instructional Materials
- NLP preprocessing guide
- TF-IDF and word embeddings tutorial
- Text classification best practices
- Sprint optimization checklist (based on 5 sprints of data)

### Project Management Integration (Proficient → Advanced)
- **Planning Sheet**: Student-created with documented improvements
- **PM Skills**: Process optimization based on velocity trends
- **Reflection**: Retrospective focusing on process evolution over 5 sprints
- **PM Time**: ~3-4 hours (highly efficient now)
- **Process Grading**: 33% of module grade

---

## MODULE 8: Capstone & Portfolio Defense
**Duration**: Weeks 15-16
**Theme**: Final sprint with process portfolio

### Module Learning Outcomes (MLOs)
1. **MLO 8.1**: Integrate multiple ML techniques into comprehensive project *(Bloom's: Create | CLO1, CLO2, CLO3)*
2. **MLO 8.2**: Justify technical and design decisions through formal presentation *(Bloom's: Evaluate | CLO5)*
3. **MLO 8.3**: Evaluate personal skill development across entire course *(Bloom's: Evaluate | CLO5)*

### Assignments
**M08-A1: Capstone AI Project** (100 points)
- **What Students Do**: Execute Sprint 6 (final sprint) with full autonomy, design and implement end-to-end ML project integrating 2+ techniques from semester (e.g., supervised + unsupervised, ensemble methods, neural networks), choose own dataset (not sklearn.datasets), build complete pipeline (EDA → preprocessing → feature engineering → multiple models → evaluation → selection), produce production-quality code (modular functions, error handling, documentation), conduct comprehensive evaluation (confusion matrix, feature importance, learning curves, error analysis), write ethical analysis (bias assessment, limitations, misuse potential, appropriate use cases), create Process Portfolio documenting PM journey across all 6 sprints
- **Grading Split**:
  - Technical Implementation (60 pts): Multi-technique integration (15 pts), End-to-end pipeline (15 pts), Model comparison/selection (10 pts), Production code quality (10 pts), Comprehensive evaluation (5 pts), Ethical analysis (5 pts)
  - Process Portfolio (40 pts): Velocity chart Sprints 1-6 with analysis (10 pts), Estimation accuracy evolution (8 pts), Retrospective insights with evidence (12 pts), PM growth narrative essay (10 pts)
- **CLOs Assessed**: All 5 CLOs (comprehensive capstone)
- **Technical Content**: Student-selected, must integrate multiple ML paradigms from semester, production-ready code, comprehensive evaluation, ethical analysis
- **PM Content**: Sprint 6 execution + Process Portfolio analyzing all 6 sprints - velocity trends, estimation improvement, retrospective action items with evidence, PM growth narrative
- **Deliverables**:
  - Jupyter notebook with capstone implementation
  - Process Portfolio document (velocity chart, estimation analysis, retrospective cycles, growth narrative)
  - Sprint 6 artifacts (planning, standups, burndown, board)
  - README with project summary
  - Ethical analysis section (300+ words)

**M08-A2: Final Presentation** (75 points)
- **What Students Do**: Present capstone project to class (15-20 minutes total), technical deep-dive (7 min) - problem, approach, models, results, demo working code, PM journey narrative (5 min) - velocity evolution, key learnings, process improvements, ethical considerations (3 min) - bias, limitations, appropriate use, Q&A (5-10 min) - defend decisions, explain trade-offs
- **Grading Split**: Technical explanation clarity (25 pts), PM narrative (20 pts), Ethical analysis (10 pts), Presentation quality (10 pts), Q&A responses (10 pts)
- **CLOs Assessed**: All CLOs (demonstrating mastery)
- **Technical Content**: Project demonstration and explanation
- **PM Content**: PM journey storytelling with data (velocity charts, retrospective insights)
- **Deliverables**: Presentation slides/materials, live demo or recorded video, Q&A participation

### Learning Activities
1. **Workshop**: Capstone Project Planning (in-class, 90 min)
2. **Reading**: Technical Presentations Best Practices (30 min)
3. **Lab**: Sprint 6 Work Time (2 sessions × 90 min)
4. **Workshop**: Presentation Practice with Peer Feedback (90 min)
5. **Presentation Day**: Final Demos and Defenses (2 class sessions, 180+ min total)
6. **Celebration**: Course Retrospective and Reflection

### Knowledge Check
- Self-assessment: Course CLO achievement reflection
- Capstone completeness checklist
- Presentation readiness rubric

### Instructional Materials
- Capstone project examples from past students
- Process Portfolio template with examples
- Technical presentation guide
- PM growth narrative prompts
- Ethics analysis framework

### Project Management Integration (Advanced/Mastery)
- **Planning Sheet**: Sprint 6 planning document (fully autonomous)
- **Process Portfolio**: Comprehensive analysis of all 6 sprints
- **PM Skills Demonstrated**: Velocity tracking, estimation accuracy, retrospective discipline, continuous improvement, autonomous sprint execution
- **Reflection**: Comprehensive course retrospective + "What I'll do in CSC-289" forward-looking statement
- **PM Time**: ~8 hours (4 hrs Sprint 6 execution, 4 hrs Process Portfolio creation)
- **Process Grading**: 40% of Module 8 grade (Process Portfolio is major deliverable)

---

## GRADING BREAKDOWN

### Points Distribution
| Category | Points | Percentage | Description |
|----------|--------|------------|-------------|
| **Module 1** | 50 | 7% | ML environment + user stories foundation |
| **Module 2** | 50 | 7% | Supervised learning + story points |
| **Module 3** | 75 | 11% | Model evaluation Sprint 1 + retrospective |
| **Module 4** | 75 | 11% | AI agents Sprint 2 + review/retro |
| **Module 5** | 75 | 11% | Neural networks Sprint 3 |
| **Module 6** | 75 | 11% | Computer vision Sprint 4 + ethics |
| **Module 7** | 75 | 11% | NLP Sprint 5 |
| **Module 8** | 175 | 25% | Capstone (100 pts) + presentation (75 pts) |
| **Process Quality** | 50 | 7% | Commit quality, PR quality, participation |
| **TOTAL** | **700** | **100%** | |

### Grading Scale
- **A**: 90-100% (630-700 points)
- **B**: 80-89% (560-629 points)
- **C**: 70-79% (490-559 points)
- **D**: 60-69% (420-489 points)
- **F**: Below 60% (< 420 points)

### Process Grading Breakdown by Module
- **Modules 1-2**: 30% process (learning PM basics)
- **Modules 3-4**: 40-45% process (first full sprints)
- **Modules 5-7**: 33% process (PM becomes habitual)
- **Module 8**: 40% process (Process Portfolio emphasis)

### Process Grading Criteria (50 points across semester)
- **Commit Quality**: Descriptive messages, appropriate frequency, feature-based commits (15 pts)
- **Pull Request Quality**: Clear descriptions, linked to issues, professional format (10 pts)
- **Sprint Artifacts**: Planning, standups, burndown charts, retrospectives (15 pts)
- **Participation**: Discussions, peer reviews, demo days, class engagement (10 pts)

---

## ASSESSMENT ALIGNMENT MATRIX

### CLO → Assessment Mapping

| CLO | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | Total Assessments |
|-----|----|----|----|----|----|----|----|----|-------------------|
| **CLO1** (Implement ML models) | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ | 7 modules |
| **CLO2** (Evaluate performance) | | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ | 6 modules |
| **CLO3** (Design AI agents) | | | | ✓ | | | | ✓ | 2 modules (deep) |
| **CLO4** (Analyze ethics) | | | | | | ✓ | | ✓ | 2 modules (deep) |
| **CLO5** (Document process) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 8 (All modules) |

**Assessment Methods**:
- Formative: Knowledge checks, exit tickets, sprint standups (ongoing)
- Summative: Sprint deliverables, retrospectives, capstone project, presentation
- Authentic: 6 complete sprint cycles managing real ML projects
- Process: Sprint artifacts, velocity tracking, retrospective depth

---

## BLOOM'S TAXONOMY DISTRIBUTION

| Cognitive Level | MLOs | Percentage | Balance |
|-----------------|------|------------|---------|
| **Remember** | 0 | 0% | None (not assessed separately) |
| **Understand** | 0 | 0% | Embedded in higher levels |
| **Apply** | 14 | 58% | ████████████ Primary focus |
| **Analyze** | 2 | 8% | ██ |
| **Evaluate** | 5 | 21% | █████ |
| **Create** | 3 | 13% | ███ |

**Pedagogical Rationale**: Heavy emphasis on Apply level reflects hands-on, implementation-focused course design. Students must BUILD models (apply), MANAGE projects (apply), and EVALUATE results (evaluate). This prepares students for CSC-289 capstone where they'll need Create-level competency. The progression from Apply (Modules 1-5) to Evaluate/Create (Modules 6-8) scaffolds cognitive complexity.

---

## QUALITY MATTERS STANDARDS ALIGNMENT

### Standard 1: Course Overview and Introduction ✅
- **1.1**: Instructions on getting started
  - *Evidence*: Module 1 setup guide, Getting Started video, environment options (local/Colab)
- **1.2**: Introduction to purpose and structure
  - *Evidence*: Course description, 8-module overview, sprint cycle explanation, PM integration purpose
- **1.3**: Etiquette expectations
  - *Evidence*: Discussion guidelines, peer review norms, sprint demo etiquette
- **1.4**: Instructor/student contact
  - *Evidence*: Office hours (extended Weeks 15-16), Discord server, email response time (24 hrs weekdays)
- **1.5**: Technical skills and requirements
  - *Evidence*: Prerequisites (CSC-113), Python/ML skills needed, GitHub proficiency required
- **1.6**: Accessibility policies
  - *Evidence*: Accommodation statement, alternative format options, flexible sprint deadlines with documentation

### Standard 2: Learning Objectives (Competencies) ✅
- **2.1**: Course-level learning objectives
  - *Evidence*: 5 CLOs clearly stated with Bloom's levels and assessment methods
- **2.2**: Module-level learning objectives
  - *Evidence*: 24 MLOs (3 per module) with CLO linkage and Bloom's levels
- **2.3**: Learning objectives stated clearly
  - *Evidence*: Active verbs, measurable outcomes, specific technical contexts
- **2.4**: Objectives align with course level
  - *Evidence*: 100-level appropriate (foundational ML, not advanced research)
- **2.5**: Learning activities support objectives
  - *Evidence*: Aligned activities listed per module with time estimates

### Standard 3: Assessment and Measurement ✅
- **3.1**: Assessments measure stated objectives
  - *Evidence*: CLO → Assessment matrix shows multiple measures per CLO
- **3.2**: Grading policy stated
  - *Evidence*: Point distribution, grading scale, process grading criteria (30-50% by module)
- **3.3**: Sufficient assessments per objective
  - *Evidence*: CLO1 assessed 7 times; CLO5 assessed 8 times; all CLOs measured multiple times
- **3.4**: Rubrics provided for graded items
  - *Evidence*: Detailed rubrics in each assignment file, grading split shown in COURSEMAP
- **3.5**: Due dates and work expectations clear
  - *Evidence*: 2-week module cycle, sprint deadlines, time estimates provided (9 hrs/week)

### Standard 4: Instructional Materials ✅
- **4.1**: Instructional materials support objectives
  - *Evidence*: Videos, readings, PM mini-lessons aligned to each MLO
- **4.2**: Purpose of materials clearly explained
  - *Evidence*: Module introductions explain how materials connect to objectives
- **4.3**: Materials varied and appropriate
  - *Evidence*: Mix of video, text, interactive coding, hands-on sprints; current ML frameworks
- **4.4**: Materials support diverse learners
  - *Evidence*: Two environment options (local/Colab), Code Builders/Prompt Masters paths continue from 113, multiple modalities

### Standard 5: Learning Activities and Learner Interaction ✅
- **5.1**: Activities support learning objectives
  - *Evidence*: 5+ activities per module tied to specific MLOs
- **5.2**: Opportunities for learner-learner interaction
  - *Evidence*: Discussions, peer reviews, demo days, sprint board exchanges
- **5.3**: Opportunities for learner-instructor interaction
  - *Evidence*: PR feedback, retrospective check-ins, office hours, in-class lab coaching
- **5.4**: Requirements for learner interaction stated
  - *Evidence*: Participation requirements (10 pts/50 process points), discussion prompts, demo day expectations

### Standard 6: Course Technology ✅
- **6.1**: Tools support learning objectives
  - *Evidence*: GitHub (CLO5 - process), Python/Jupyter (CLO1 - implementation), TensorFlow/scikit-learn (CLO1-3)
- **6.2**: Navigation instructions provided
  - *Evidence*: Canvas navigation guide, GitHub workflow refresher (from 113), Jupyter tutorial
- **6.3**: Technology access statement
  - *Evidence*: Free tools (Python, scikit-learn, TensorFlow, Colab), computer lab access, no paid requirements
- **6.4**: Privacy policies provided
  - *Evidence*: Links to GitHub, Google Colab privacy policies; data handling explanation

### Standard 7: Learner Support ✅
- **7.1**: Technical support resources
  - *Evidence*: IT help desk, GitHub support links, ML framework documentation, troubleshooting guides
- **7.2**: Academic support resources
  - *Evidence*: Tutoring center, writing center (for presentations), library ML resources
- **7.3**: Course policies clear
  - *Evidence*: Syllabus with attendance, late work (10% per day), academic integrity (AI collaboration rules)
- **7.4**: Institutional resources accessible
  - *Evidence*: Links to student services, accessibility office, counseling, career services

### Standard 8: Accessibility and Usability ✅
- **8.1**: Course navigation facilitates access
  - *Evidence*: Consistent module structure, clear labeling, module numbers + titles
- **8.2**: Information presented clearly
  - *Evidence*: Headings, lists, tables, white space; clean COURSEMAP design
- **8.3**: Course provides accessible text
  - *Evidence*: All materials markdown or HTML; Jupyter notebooks screen reader compatible
- **8.4**: Multimedia alternatives provided
  - *Evidence*: Video transcripts, image alt text, code explanations in text form
- **8.5**: Vendor accessibility statements
  - *Evidence*: Links to GitHub, Canvas, Google Colab, TensorFlow VPAT statements

**Certification Status**: ✅ All 22 Essential Standards Met

---

## INSTRUCTIONAL DESIGN NOTES

### Backward Design Approach
1. **CLOs Defined First**: 5 course-level outcomes based on program needs and CSC-289 preparation
2. **MLOs Derived**: 24 module objectives (3 per module) explicitly linked to CLOs with Bloom's levels
3. **Assessments Aligned**: Every assessment maps to specific CLO(s); process grading = CLO5
4. **Activities Designed**: Learning activities scaffold toward sprint success

### Scaffolding Strategy
**Modules 1-2**: Foundation (30% process grading)
- High structure: Templates, guided instructions, PM mini-lessons
- User stories and estimation introduced gradually
- Technical focus: Basic ML (classification, regression)

**Modules 3-4**: First Full Sprints (40-45% process grading)
- Full sprint cycle introduced with guidance
- Templates provided for planning, standups, retrospectives
- Technical challenge increases (evaluation metrics, agents)

**Modules 5-7**: Habitual Practice (33% process grading)
- Less scaffolding - students execute sprints independently
- PM becomes automatic, focus shifts to technical depth
- Technical challenge: Neural networks, CNNs, NLP

**Module 8**: Mastery Demonstration (40% process grading)
- Full autonomy - no templates, student-designed project
- Process Portfolio shows growth across all 6 sprints
- Technical integration: Multiple ML paradigms combined

### Integrated PM Skills Philosophy
**Not a Separate Course**: PM concepts embedded in ML projects
- 10-15 minute mini-lessons introduce PM concepts
- Students immediately apply to their current ML work
- PM practices assessed as part of ML project grading
- Retrospectives close feedback loop: learn → apply → reflect → improve

**Builds on CSC-113**: Assumes GitHub workflow mastery
- CSC-113 taught: Issue → Branch → PR → Merge (Sacred Flow)
- CSC-113 introduced: Basic 2-week cycles, simple retrospectives
- CSC-114 adds: User stories, story points, sprint planning, burndown charts, velocity tracking, structured retrospectives
- CSC-289 will add: Stakeholder management, risk analysis, release planning

### Active Learning Emphasis
- **Hands-on**: 60% of class time in lab/sprint work mode
- **Minimal Lecture**: 15-20 min concept intro (technical + PM mini-lesson), then DO
- **Immediate Application**: Learn sprint planning → Plan your sprint same day
- **Iteration Culture**: 6 sprints with retrospectives = 6 improvement cycles

---

## PM SKILLS PROGRESSION

### Skill Thread Across Courses

**CSC-113 (Intro Level)**:
- Basic GitHub workflow (Issue → Branch → PR → Merge)
- Simple 2-week project cycles
- Basic retrospectives (what worked, what didn't)
- Exit tickets and reflection practice

**CSC-114 (Developing → Proficient)**:
- User story writing (As a.../I want.../So that...)
- Story point estimation (Fibonacci scale)
- Sprint planning (capacity, goals, story selection)
- Daily standups (What I did/What I'll do/Blockers)
- Burndown charts (visual progress tracking)
- Sprint reviews (demo working software)
- Structured retrospectives (Start/Stop/Continue, action items)
- Velocity tracking across multiple sprints

**CTS-285 (Proficient → Advanced)** - Looking Ahead:
- Stakeholder management and communication
- Risk assessment and mitigation
- Release planning across multiple sprints
- Team velocity and capacity planning
- Definition of Done and acceptance criteria refinement

**CSC-289 (Advanced/Mastery)** - Capstone:
- Fully autonomous project management
- Multi-sprint product development
- Cross-team coordination (if applicable)
- Professional client communication
- Deliverable quality gates

### PM Skills Growth in CSC-114

**Week 1-2**: User story introduction
**Week 3-4**: Story point estimation
**Week 5-6**: First complete sprint (planning, standups, burndown, retro)
**Week 7-8**: Velocity-based planning (using Sprint 1 data)
**Week 9-10**: PM becoming habitual (less guidance)
**Week 11-12**: Ethics integration into PM
**Week 13-14**: Process optimization (5 sprints of data)
**Week 15-16**: Process Portfolio (analyzing all 6 sprints)

---

## COURSE POLICIES

### Attendance
**Hybrid Model**: Online materials + in-person lab
- Online readings/videos/PM mini-lessons: Complete before class
- In-person lab: Attendance required for participation points (10 pts/50 process points)
- Excused absences: Notify instructor within 24 hours, make-up work arranged

### Late Work
**Sacred Flow Exception**: If you follow Sacred Flow (create issue, branch, PR on time) AND communicate with instructor, you can request 24-48 hour extension with reduced penalty.

**Sprint Deadlines**: Sprints run on 2-week cycles. Sprint deliverables due end of Week 2 of each module.

**Standard Late Policy**:
- 1-24 hours late: -10%
- 25-48 hours late: -20%
- 48+ hours late: -50%
- After Module 8: No late work accepted (end of term)
- **Exception**: Capstone (Module 8) late policy is stricter: 10% per day (it's 25% of grade)

### Academic Integrity
**Collaboration Encouraged**:
- Discussing ML concepts with classmates
- Asking AI assistants to explain algorithms or debug code
- Using official documentation (scikit-learn, TensorFlow)
- Sharing troubleshooting tips and PM strategies
- Peer review of sprint boards and retrospectives

**Plagiarism Prohibited**:
- Copying someone else's code or notebook word-for-word
- Submitting AI-generated code without understanding or attribution
- Sharing complete assignment files or sprint deliverables
- Having someone else complete your ML implementation or PM artifacts

**The Rule**: You must be able to explain everything you submit. If you can't explain your code, your model choices, or your PM decisions, you don't submit it.

**AI Tool Use Policy**:
- ✅ Allowed: Using AI to explain concepts, suggest approaches, debug errors
- ✅ Allowed: AI-assisted code with attribution and understanding
- ❌ Prohibited: Copy-paste AI code without modification or comprehension
- ❌ Prohibited: AI-written analysis/reflection without your own thinking

**Consequences**: First offense: 0 on assignment + meeting. Second offense: F in course + academic conduct report.

### Accessibility
Students with documented disabilities should contact the Office of Accessibility Services and provide documentation to instructor within first week. Accommodations include:
- Extended time on sprint deliverables
- Alternative format materials (accessible notebooks)
- Assistive technology support for coding
- Flexible presentation formats
- Sprint deadline adjustments with documentation

---

## REQUIRED MATERIALS

### Free Resources (Required)
- **GitHub account** (free tier sufficient; GitHub Pro free for students)
- **Python 3.8+** with Jupyter OR Google Colab account (free)
- **ML Libraries**: scikit-learn, pandas, numpy, matplotlib, seaborn
- **Deep Learning**: TensorFlow 2.x OR PyTorch (TensorFlow recommended)
- **Text editor**: VS Code (free), PyCharm Community (free), or Jupyter Lab
- **Browser**: Chrome, Firefox, or Edge (current version)
- **Computer**: Windows, Mac, or Linux with internet access

### Optional Materials
- **Google Colab Pro** (faster GPUs, longer runtimes - NOT required)
- **Kaggle account** (free datasets and notebooks)
- **Local GPU** (helpful for Modules 5-7 but not required; Colab provides free GPU)

### Hardware Requirements
- Reliable internet connection (10+ Mbps recommended for Colab)
- Computer with 8GB+ RAM (4GB minimum if using Colab exclusively)
- 10GB free disk space (for local Python setup; less if using Colab)
- Webcam and microphone (for final presentation; can use phone)

### Software Installation (Local Setup - Optional)
```bash
# Install Python libraries
pip install jupyter scikit-learn pandas numpy matplotlib seaborn tensorflow

# Verify installation
python -c "import sklearn, pandas, numpy, tensorflow; print('All libraries ready!')"
```

**Alternative**: Google Colab has all libraries pre-installed (recommended for beginners)

---

## TIME EXPECTATIONS

### Federal Credit Hour Standard
**3 credits = 9-10 hours/week total**
- 2 hours in-class instruction (lecture/demos)
- 3 hours in-class lab (hands-on coding)
- 4-5 hours outside class (homework, sprints, retrospectives)

### Estimated Time per Module (2 weeks)
- **Reading/Videos/PM Mini-Lessons**: 2-3 hours
- **Technical Assignments** (Modules 1-2): 4-6 hours
- **Sprint Execution** (Modules 3-7): 8-10 hours (coding + PM)
- **Capstone** (Module 8): 15-20 hours (implementation + Process Portfolio)
- **Total per Module**: 12-18 hours over 2 weeks = 6-9 hours/week

### Sprint Time Breakdown (Modules 3-7)
**Week 1 of Sprint**:
- Sprint planning: 1-2 hours
- Initial implementation: 3-4 hours
- Daily standups (5 days × 5 min): 25 min
- Total: 4-6 hours

**Week 2 of Sprint**:
- Continued implementation: 3-4 hours
- Testing and refinement: 1-2 hours
- Daily standups (5 days × 5 min): 25 min
- Retrospective: 1 hour
- Total: 5-7 hours

### Capstone Time Breakdown (Module 8)
**Week 15**: 8-10 hours (Sprint 6 execution - technical implementation)
**Week 16**: 8-10 hours (Process Portfolio creation + presentation prep)

---

## INSTRUCTOR PHILOSOPHY: Drew's Approach

### Sacred Flow (Expanded)
> "Every professional developer uses version control. Every professional project uses sprints. You will too."

The Issue → Branch → PR → Merge workflow from CSC-113 continues, now enhanced with sprint structure:
- **Issues** = User stories (As a.../I want.../So that...)
- **Branches** = Sprint work (one story at a time)
- **PRs** = Sprint deliverables (demo-able working software)
- **Merges** = Sprint completion (Done = shippable)

### Process Over Product
> "I don't just grade what you built. I grade how you built it."

**What Drew looks at**:
- **Commit frequency**: Did you work incrementally or cram at the end?
- **Commit quality**: Are messages descriptive? ("Fixed bug" vs. "Fixed off-by-one error in CNN pooling layer")
- **Sprint planning**: Is capacity realistic based on velocity data?
- **Daily standups**: Are they consistent? Do they surface blockers early?
- **Burndown tracking**: Does it show steady progress or last-minute panic?
- **Retrospectives**: Are they honest? Do action items lead to actual changes?

**Why**: In industry, process determines success. ML projects fail more often from poor planning than bad code. Good process → Good ML products.

### Failure as Exercise (ML Edition)
> "Your model will fail. That's not a bug—it's a feature. Learn from it."

**Philosophy**: ML is inherently uncertain. Models overfit. Data is messy. Metrics mislead.
- Sprint 1: Most students overcommit and miss their sprint goal → Sprint 2 teaches realistic planning
- Neural networks (Module 5): Training loss diverges → Teaches learning rate tuning
- Computer vision (Module 6): Model biased on certain classes → Teaches fairness testing
- Retrospectives normalize: "What went wrong? What did I learn? What will I do differently?"

**Favorite Moment**: When a student's Sprint 3 retrospective says "I underestimated neural network complexity by 8 points" and their Sprint 4 estimate is spot-on because they learned.

### PM as Craft, Not Busywork
> "User stories feel like busywork until the one time they save your project."

**Common Student Trajectory**:
- Week 2: "Why do I need user stories? I just want to code!"
- Week 6: "My sprint planning caught a scope problem before I wasted a week coding the wrong thing."
- Week 16: "My velocity data helped me promise realistic capstone features. I shipped everything I planned."

**Drew's Promise**: By Week 16, students realize PM discipline is not overhead—it's insurance against chaos.

### Two Tracks Philosophy (Continued from CSC-113)
> "Code Builders dive deeper into algorithms. Prompt Masters focus on model deployment and tool integration. Both are professionals."

**In CSC-114**:
- **Code Builders**: Implement ML algorithms from scratch (understand the math), custom neural network architectures, algorithm comparison studies
- **Prompt Masters**: Use high-level APIs (scikit-learn, Keras), focus on hyperparameter tuning, model deployment, no-code ML tools integration

**Same Outcomes**: Both tracks achieve all CLOs. Both run 6 sprints. Both produce capstone projects. Different paths, same rigor.

---

## STUDENT SUCCESS TIPS

### From Past Students
1. **"Start sprint planning on Day 1, not Day 3."** - Two weeks goes fast.
2. **"Do daily standups even when it feels silly."** - They catch scope creep early.
3. **"Your Sprint 1 velocity will be wrong. That's OK."** - You'll calibrate by Sprint 3.
4. **"Actually implement retrospective action items."** - Drew checks for evidence.
5. **"Save sprint board screenshots each sprint."** - You'll need them for Process Portfolio.
6. **"Don't skip the ethics section."** - It's easy points and important thinking.
7. **"Google Colab is your friend."** - No GPU? No problem.

### From Drew
1. **Follow Sprint Planning Template (Modules 3-4)** - It teaches capacity planning. By Module 5, you won't need it.
2. **Do actual daily standups** - Set a phone alarm. 5 minutes/day = better project outcomes.
3. **Use retrospectives honestly** - "Everything went great!" is never true. Honesty → growth.
4. **Track velocity from Sprint 1** - Create a spreadsheet Week 5, update after every sprint. Module 8 Process Portfolio needs this data.
5. **Commit after EVERY user story completion** - Not at the end of the sprint. Incremental commits show professional habits.
6. **Your capstone is your portfolio piece** - Treat it as a job interview artifact from Day 1.
7. **Ethics is not an afterthought** - Bias analysis, limitations, misuse potential—think about these while building, not after.

---

## COURSE EVOLUTION NOTES

### Changes from CSC-113
- **NEW**: Scrum fundamentals integrated (user stories, story points, sprints, velocity, retrospectives)
- **NEW**: 6 complete sprint cycles (vs. 2 basic project cycles in 113)
- **NEW**: Process Portfolio as major capstone component
- **EXPANDED**: Technical depth (ML implementation vs. AI tool usage)
- **CONTINUED**: Sacred Flow, Process Over Product philosophy, Failure as Exercise

### Changes from Previous CSC-114 Term
- **REVISED**: Process grading increased to 30-50% (was 20-30%)
- **NEW**: Process Portfolio requirement (Module 8)
- **NEW**: Daily standup documentation requirement
- **REVISED**: Ethics integrated earlier (Module 6, not just Module 8)
- **NEW**: PM mini-lessons (5 total, 10-15 min each)

### Continuous Improvement
Student feedback via exit tickets, sprint retrospectives, and end-of-course surveys informs:
- Sprint template clarity (adjusted after Sprint 1 feedback each term)
- Time estimate accuracy (calibrated based on actual student velocity data)
- PM scaffolding (reduced from Modules 1-8 based on competency development)
- Technical difficulty balance (neural networks moved from Week 7 to Week 9-10 after feedback)

---

## APPENDICES

### Appendix A: Glossary
- **Sacred Flow**: GitHub workflow (Issue → Branch → PR → Merge), from CSC-113
- **Sprint**: 2-week development cycle with planning, execution, review, retrospective
- **User Story**: Requirement format (As a [persona], I want [functionality], So that [value])
- **Story Points**: Relative effort estimation (Fibonacci: 1, 2, 3, 5, 8, 13)
- **Velocity**: Story points completed per sprint (tracks team/individual capacity)
- **Burndown Chart**: Visual showing remaining work over sprint duration
- **Retrospective**: Sprint reflection (What went well? What didn't? What to improve?)
- **Kanban Board**: Visual workflow (To Do → In Progress → Done)
- **CLO**: Course Learning Outcome (program-level)
- **MLO**: Module Learning Outcome (unit-level)
- **frotz → plugh**: Drew's signature (Zork game references)

### Appendix B: Sprint Workflow Quick Reference
1. **Sprint Planning** (Start of 2-week cycle):
   - Calculate capacity (use previous sprint velocity)
   - Define sprint goal (one sentence, ambitious)
   - Select user stories (total points ≤ capacity)
   - Break stories into technical tasks
   - Create GitHub Issues and move to "To Do"

2. **Daily Execution** (Days 1-10):
   - Daily standup (5 min): What I did/What I'll do/Blockers
   - Work on ONE story at a time
   - Move story to "In Progress" when starting
   - Commit frequently (feature-based commits)
   - Update burndown chart daily or every 2 days
   - Move story to "Done" when acceptance criteria met

3. **Sprint Review** (End of Week 2):
   - Demo working software (to instructor, class, or via video)
   - Show what shipped (completed user stories)
   - Discuss what didn't ship (if any) and why

4. **Sprint Retrospective** (End of Week 2):
   - What went well? (celebrate)
   - What didn't go well? (learn)
   - Action items for next sprint (concrete changes)
   - Calculate actual velocity (points completed)

### Appendix C: ML Tools and Frameworks Used
- **Python 3.8+**: Primary programming language
- **Jupyter Notebooks**: Interactive development environment
- **scikit-learn**: Classical ML (classification, regression, clustering)
- **TensorFlow/Keras**: Deep learning (neural networks, CNNs)
- **pandas**: Data manipulation and analysis
- **numpy**: Numerical computing
- **matplotlib/seaborn**: Data visualization
- **Google Colab**: Free cloud-based Jupyter environment with GPU

### Appendix D: Skill Thread Progression
**Git/GitHub**:
- CSC-113: Basic Sacred Flow (Issue → Branch → PR → Merge)
- CSC-114: Sprint-based Sacred Flow (Issues as user stories, PRs as sprint deliverables)
- CTS-285: Team Git workflows (branching strategies, code review)
- CSC-289: Release management (version tagging, deployment branches)

**Project Management**:
- CSC-113: Basic 2-week cycles, simple retrospectives
- CSC-114: Full Scrum (user stories, story points, sprints, velocity, burndown, structured retros)
- CTS-285: Stakeholder management, risk analysis, release planning
- CSC-289: Autonomous PM, multi-sprint coordination, professional client communication

**AI/ML Technical Skills**:
- CSC-113: AI tool usage, prompt engineering, AI evaluation
- CSC-114: ML implementation (supervised/unsupervised), model evaluation, neural networks, ethics
- CTS-285: Data science workflows, advanced ML, MLOps concepts
- CSC-289: Production ML systems, model deployment, monitoring

**Documentation & Communication**:
- CSC-113: README files, exit tickets, basic reflections
- CSC-114: Technical notebooks, sprint artifacts, retrospectives, Process Portfolio, formal presentation
- CTS-285: Technical reports, stakeholder presentations, project proposals
- CSC-289: Professional deliverables, client documentation, portfolio defense

---

## CONTACT INFORMATION

**Instructor**: Drew Norris
**Email**: dnorris@college.edu
**Office Hours**: See Canvas (extended hours Weeks 5-6, 15-16 for sprint support)
**Discord**: Link in Canvas (fastest response for quick questions)
**Response Time**: Within 24 hours (weekdays), 48 hours (weekends)

**PM Support**: Office hours include PM coaching (sprint planning, velocity questions, retrospective guidance)

**Instructional Designer**: Angela Westmoreland
**Email**: awestmoreland@college.edu
**Course Development Support**: Available for material questions, accessibility needs

---

## RESOURCES

### Technical Resources
- [scikit-learn Documentation](https://scikit-learn.org/stable/)
- [TensorFlow Tutorials](https://www.tensorflow.org/tutorials)
- [Kaggle Learn](https://www.kaggle.com/learn) - Free ML courses
- [Google Colab Tutorials](https://colab.research.google.com/)
- [Keras Documentation](https://keras.io/)

### PM Resources
- PM Mini-Lessons (see pm-materials/ directory)
- [Scrum Guide](https://scrumguides.org/) - Official Scrum framework
- [User Story Template](pm-materials/templates/user-story-template.md)
- [Sprint Planning Template](pm-materials/templates/sprint-planning-template.md)
- [Retrospective Template](pm-materials/templates/sprint-retrospective-template.md)

### ML Ethics Resources
- [Fairness in ML](https://developers.google.com/machine-learning/fairness-overview)
- [AI Ethics Guidelines](https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai)
- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)

### Datasets
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [UCI ML Repository](https://archive.ics.uci.edu/ml/index.php)
- [TensorFlow Datasets](https://www.tensorflow.org/datasets)

---

**Last Updated**: January 15, 2026
**Document Version**: 2.0 (Comprehensive Course Map)
**QM Certification Status**: ✅ All 22 Essential Standards Met
**Approved for Internal Certification**: Pending Review

**frotz → plugh**
