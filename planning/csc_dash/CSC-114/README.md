# CSC-114: Artificial Intelligence I

**Credits**: 3 (2 Class | 3 Lab)
**Term**: Spring 2026
**Prerequisites**: CSC-113 or instructor permission
**Status**: 🚧 In Development

## Course Description

Advanced AI concepts with hands-on implementation. Students explore machine learning fundamentals, model evaluation, AI agents, and ethical AI development. Builds on CSC-113 foundations with deeper technical implementation and project management skills.

## Course Learning Outcomes (CLOs)

1. **CLO1**: Implement machine learning models using established frameworks
2. **CLO2**: Evaluate AI model performance using appropriate metrics
3. **CLO3**: Design and implement AI agents for specific tasks
4. **CLO4**: Analyze ethical implications of AI systems
5. **CLO5**: Document AI development process and decisions

## 8-Module Structure

### Module 1: ML Fundamentals & Setup (Weeks 1-2)
**Theme**: Machine learning basics and development environment

**MLOs**:
- Set up professional ML development environment with Python and key libraries
- Apply fundamental ML concepts to classify data using scikit-learn
- Create user stories for ML project requirements (PM: User Stories introduced)

**Assignments**:
- M01-A1: ML Environment Setup & First Model (25 points)
- M01-A2: User Story Backlog for ML Project (25 points)

**PM Integration**: Introduction to user stories and acceptance criteria

---

### Module 2: Supervised Learning (Weeks 3-4)
**Theme**: Classification and regression fundamentals

**MLOs**:
- Implement classification models for categorical predictions
- Apply regression techniques to continuous data prediction
- Estimate work complexity using story points (PM: Estimation introduced)

**Assignments**:
- M02-A1: Classification Project (25 points)
- M02-A2: Regression Analysis (25 points)

**PM Integration**: Story point estimation and velocity tracking

---

### Module 3: Model Evaluation (Weeks 5-6)
**Theme**: Metrics, validation, and testing strategies

**MLOs**:
- Evaluate model performance using precision, recall, F1-score, and ROC curves
- Apply cross-validation techniques to assess model generalization
- Plan and execute first development sprint (PM: Sprint Planning)

**Assignments**:
- M03-A1: Model Evaluation Sprint (50 points)
- M03-A2: Sprint Retrospective (25 points)

**PM Integration**: Sprint planning, daily standups, burndown tracking

---

### Module 4: AI Agents (Weeks 7-8)
**Theme**: Agent design, implementation, and autonomy

**MLOs**:
- Design AI agents with specific goals and behaviors
- Implement decision-making algorithms for autonomous agents
- Execute second sprint with improved PM practices

**Assignments**:
- M04-A1: AI Agent Development Sprint (50 points)
- M04-A2: Sprint Review & Retrospective (25 points)

**PM Integration**: Sprint execution, review ceremonies

---

### Module 5: Neural Networks Intro (Weeks 9-10)
**Theme**: Deep learning foundations with TensorFlow/Keras

**MLOs**:
- Construct neural networks using TensorFlow/Keras
- Apply backpropagation and gradient descent concepts
- Manage third sprint with increased complexity

**Assignments**:
- M05-A1: Neural Network Sprint (75 points)
- M05-A2: Model Documentation (25 points)

**PM Integration**: Sprint cycle with technical documentation

---

### Module 6: Computer Vision (Weeks 11-12)
**Theme**: Image classification and object detection

**MLOs**:
- Implement CNN architectures for image classification
- Apply transfer learning using pre-trained models
- Execute sprint for CV project

**Assignments**:
- M06-A1: Image Classification Sprint (75 points)
- M06-A2: Ethical AI Analysis (25 points)

**PM Integration**: Sprint with ethical considerations

---

### Module 7: NLP & Text Processing (Weeks 13-14)
**Theme**: Language models and text analysis

**MLOs**:
- Process text data for ML applications
- Implement sentiment analysis and text classification
- Manage sprint for NLP project

**Assignments**:
- M07-A1: NLP Project Sprint (75 points)
- M07-A2: Performance Optimization (50 points)

**PM Integration**: Advanced sprint execution

---

### Module 8: Capstone & Portfolio Defense (Weeks 15-16)
**Theme**: Integration project and professional presentation

**MLOs**:
- Integrate multiple AI techniques into cohesive project
- Present technical work to stakeholders professionally
- Reflect on AI development and PM journey

**Assignments**:
- M08-A1: Capstone AI Project (100 points)
- M08-A2: Technical Presentation (75 points)

**PM Integration**: Full project management cycle, process portfolio

---

## Grading Breakdown

**Total Points**: 700

| Component | Points | Percentage |
|-----------|--------|------------|
| Modules 1-2 (Foundations) | 100 | 14% |
| Modules 3-4 (Evaluation & Agents) | 150 | 21% |
| Modules 5-7 (Advanced Topics) | 275 | 39% |
| Module 8 (Capstone) | 175 | 25% |

**Grading Scale**: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (<60%)

---

## Course Materials

### Required
- GitHub account (free)
- Python 3.8+ with Jupyter notebooks
- Google Colab account (free alternative to local setup)
- Required libraries: scikit-learn, TensorFlow, pandas, numpy, matplotlib

### Recommended
- GPU access (Google Colab provides free GPU)
- Code editor: VS Code or PyCharm
- Kaggle account (free datasets)

---

## Drew's Pedagogical Approach

### Sacred Flow (Expanded)
Git workflow mastery continues from CSC-113, now with:
- Sprint-based development cycles
- User stories as GitHub Issues
- Pull requests as sprint deliverables
- Retrospectives drive continuous improvement

### Process Over Product (30% of grade)
Grading emphasizes:
- Sprint planning quality
- Daily standup consistency
- User story clarity
- Retrospective depth and action items
- Velocity tracking accuracy
- Documentation completeness

### Scrum Integration
Building on CSC-113's basic sprints:
- Story point estimation
- Sprint planning meetings
- Burndown charts
- Sprint reviews and demos
- Structured retrospectives

### Failure as Exercise
- Model failures teach debugging
- Overfitting/underfitting as learning opportunities
- "Bad predictions" reveal data quality issues
- Retrospectives normalize learning from mistakes

### Two Tracks Continue
- **Code Builders**: Deep technical implementation, algorithm focus
- **Prompt Masters**: High-level ML APIs, no-code ML tools, model configuration

---

## Project Management Skills Development

CSC-114 adds **Scrum fundamentals** to CSC-113's basic workflow:

**New PM Skills**:
- Writing user stories (As a.../I want.../So that...)
- Story point estimation (Fibonacci scale)
- Sprint planning (capacity, goals, task breakdown)
- Daily standups (what I did, what I'll do, blockers)
- Burndown charts (visual progress tracking)
- Sprint reviews (demo working software)
- Structured retrospectives (start/stop/continue)

**Progression to CTS-285**:
CSC-114 PM skills prepare for CTS-285's stakeholder management, risk analysis, and release planning.

---

## File Organization

```
CSC-114/
├── README.md (this file)
├── COURSEMAP.md (printable course map)
├── assignments/
│   ├── Week_01_Assignment_ML_Environment.md
│   ├── Week_02_Assignment_User_Stories.md
│   ├── Week_03_Assignment_Classification.md
│   ├── Week_04_Assignment_Regression.md
│   ├── Week_05_Assignment_Evaluation_Sprint.md
│   ├── Week_06_Assignment_Sprint_Retrospective.md
│   ├── Week_07_Assignment_AI_Agent_Sprint.md
│   └── Week_08_Assignment_Sprint_Review.md
│   └── (continues through Module 8)
├── pm-materials/
│   ├── 00-PM-Integration-Overview.md
│   ├── 01-User-Stories-Mini-Lesson.md
│   ├── 02-Story-Points-Estimation.md
│   ├── 03-Sprint-Planning.md
│   └── templates/
├── rubrics/
│   └── assessment-rubrics.md
├── activities/
│   └── (hands-on exercises)
├── knowledge-checks/
│   └── (module quizzes)
├── planning-sheets/
│   └── (sprint templates)
└── audits/
    └── (QM, CourseForge, RSI audits)
```

---

## Certification Status

**QM Standards**: In Development
**Ready for Submission**: Not Yet

---

**Last Updated**: January 14, 2026
**Instructor**: Drew Norris
**Instructional Designer**: Angela Westmoreland
