# Module 1 Activity: Sacred Flow Lab - ML Environment Setup Workshop

**Duration**: 90 minutes
**Format**: Individual with pair programming support
**Materials Needed**:
- Laptop with admin access
- GitHub account
- Internet connection
- Visual Studio Code (or preferred IDE)
- Course GitHub repository URL

**Learning Objectives**:
- Set up a complete ML development environment
- Configure Python, Jupyter, and essential ML libraries
- Practice version control with Git/GitHub
- Build and train your first machine learning model
- Establish proper workflow habits for the semester

---

## Overview

Welcome to your first hands-on ML lab. Today, you're going to set up your development environment and build your first machine learning model. This isn't just about installing software—it's about establishing the "Sacred Flow" that professional ML engineers use every single day: write code, test it, version it, commit it, repeat.

By the end of this lab, you'll have:
- A working Python ML environment
- Your own branch of the course repo
- Your first trained ML model (yes, really!)
- A proper Git commit showing your work

This is the foundation everything else builds on. Take your time, help your neighbors, and don't skip steps.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start coding:**

1. **Verify admin access**: Make sure you can install software on your laptop
2. **GitHub account**: If you don't have one, create it now at github.com
3. **Accept course repo invitation**: Check your email for the GitHub classroom link
4. **Download VS Code**: If you don't have an IDE, get VS Code from code.visualstudio.com
5. **Have your phone ready**: You might need 2FA for GitHub

**Instructor Check**: Make sure everyone has GitHub access before moving forward.

---

## Part 1: Python Environment Setup (25 minutes)

### Instructions

**Step 1: Check if Python 3 is installed**
```bash
python3 --version
```

If you see Python 3.8 or higher, you're good. If not, download from python.org.

**Step 2: Create a virtual environment**

Navigate to where you want your course files:
```bash
cd ~/Documents
mkdir CSC-114-ML
cd CSC-114-ML
python3 -m venv ml-env
```

**Step 3: Activate your virtual environment**

Mac/Linux:
```bash
source ml-env/bin/activate
```

Windows:
```bash
ml-env\Scripts\activate
```

You should see `(ml-env)` appear in your terminal prompt. This means you're in your isolated Python environment.

**Step 4: Install the ML toolkit**
```bash
pip install --upgrade pip
pip install jupyter numpy pandas matplotlib scikit-learn
```

This will take 2-3 minutes. Watch the output—everything should say "Successfully installed."

**Step 5: Verify installation**
```bash
python -c "import sklearn; print(f'scikit-learn version: {sklearn.__version__}')"
```

### Expected Output

You should see:
- Virtual environment activated (prompt shows `(ml-env)`)
- All packages installed successfully
- scikit-learn version printed (should be 1.3.0 or higher)

### Common Issues

**Issue**: "python3: command not found"
- **Fix**: Python isn't installed. Download from python.org and install.

**Issue**: "pip: command not found"
- **Fix**: Your Python installation is incomplete. Reinstall Python, making sure to check "Add to PATH."

**Issue**: Permission denied when creating venv
- **Fix**: Don't use `sudo`. Navigate to a directory you own (like Documents).

**Issue**: Installation fails with "error: Microsoft Visual C++ required" (Windows)
- **Fix**: Install Visual Studio Build Tools from visualstudio.microsoft.com

---

## Part 2: Git Workflow Setup (20 minutes)

### Instructions

**Step 1: Clone the course repository**

Get the repo URL from Canvas (or your instructor will provide it).

```bash
git clone https://github.com/[course-org]/csc-114-labs.git
cd csc-114-labs
```

**Step 2: Create your personal branch**

Never work directly on `main`. Create your own branch:

```bash
git checkout -b yourname-module01
```

Replace `yourname` with your actual name (e.g., `drew-module01`).

**Step 3: Verify your branch**
```bash
git branch
```

You should see an asterisk (*) next to your branch name, not `main`.

**Step 4: Open Jupyter**

Make sure your virtual environment is still activated:
```bash
jupyter notebook
```

This opens Jupyter in your browser. Navigate to the `module-01` folder.

### Expected Output

- Repository cloned successfully
- You're on your own branch (not main)
- Jupyter opens in browser showing course files
- You can see the `module-01/` directory with starter files

### Common Issues

**Issue**: "git: command not found"
- **Fix**: Install Git from git-scm.com

**Issue**: "Permission denied (publickey)" when cloning
- **Fix**: Use HTTPS URL instead of SSH, or set up SSH keys with GitHub

**Issue**: Jupyter won't start
- **Fix**: Make sure virtual environment is activated. Try `python -m jupyter notebook`

**Issue**: "Port 8888 is already in use"
- **Fix**: You have another Jupyter running. Close it or use `jupyter notebook --port 8889`

---

## Part 3: Your First ML Model - Iris Classification (30 minutes)

### Instructions

In Jupyter, create a new notebook called `my_first_model.ipynb` in the `module-01/` folder.

**Step 1: Import libraries**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report

print("Libraries loaded successfully!")
```

Run the cell. You should see "Libraries loaded successfully!"

**Step 2: Load the Iris dataset**

```python
# Load the famous Iris dataset
iris = load_iris()
X = iris.data  # Features: sepal length, sepal width, petal length, petal width
y = iris.target  # Target: species (0, 1, or 2)

# Convert to DataFrame for easier viewing
df = pd.DataFrame(X, columns=iris.feature_names)
df['species'] = y
df['species_name'] = df['species'].map({0: 'setosa', 1: 'versicolor', 2: 'virginica'})

print(f"Dataset shape: {df.shape}")
print("\nFirst 5 rows:")
print(df.head())
print("\nSpecies distribution:")
print(df['species_name'].value_counts())
```

**Step 3: Split the data**

```python
# Split into training (80%) and testing (20%) sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")
```

**Step 4: Train your model**

```python
# Create a Decision Tree classifier
model = DecisionTreeClassifier(max_depth=3, random_state=42)

# Train it on the training data
model.fit(X_train, y_train)

print("Model trained!")
```

**Step 5: Make predictions and evaluate**

```python
# Predict on test set
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2%}")

# Detailed classification report
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))
```

**Step 6: Try predicting a new flower**

```python
# Create a new flower with these measurements:
# sepal length: 5.1, sepal width: 3.5, petal length: 1.4, petal width: 0.2
new_flower = np.array([[5.1, 3.5, 1.4, 0.2]])

prediction = model.predict(new_flower)
predicted_species = iris.target_names[prediction[0]]

print(f"Predicted species: {predicted_species}")
```

**Step 7: Add reflection comments**

At the end of your notebook, add a markdown cell with:

```markdown
## Reflection

1. **What did this model do?**
   [Your answer: What did the Decision Tree learn to do?]

2. **What surprised you?**
   [Your answer: Was the accuracy higher or lower than expected?]

3. **What would you try next?**
   [Your answer: How could you improve this model?]
```

Save your notebook: `Ctrl+S` or `Cmd+S`.

### Expected Output

- All cells run without errors
- Accuracy should be 95-100% on Iris dataset
- Classification report shows high precision/recall
- Your new flower prediction should be "setosa"
- Reflection questions answered in markdown

### Common Issues

**Issue**: `ModuleNotFoundError: No module named 'sklearn'`
- **Fix**: Virtual environment isn't activated. Close Jupyter, activate venv, restart Jupyter.

**Issue**: Cells run but show weird warnings
- **Fix**: Warnings are usually okay for now. As long as you get output, you're good.

**Issue**: "Kernel dead" or "Kernel restarting"
- **Fix**: Usually a code error. Check for typos. Restart kernel and run cells one by one.

**Issue**: Accuracy is exactly 0%
- **Fix**: Check your X and y variables. You might have swapped them.

---

## Part 4: Commit Your Work (10 minutes)

### Instructions

**Step 1: Close Jupyter gracefully**

In the terminal where Jupyter is running, press `Ctrl+C` twice to shut it down properly.

**Step 2: Check what changed**
```bash
git status
```

You should see your new notebook file as "untracked."

**Step 3: Stage your changes**
```bash
git add module-01/my_first_model.ipynb
```

**Step 4: Commit with a meaningful message**
```bash
git commit -m "Complete Module 01 Sacred Flow Lab - first ML model

- Set up Python ML environment with scikit-learn
- Built Decision Tree classifier on Iris dataset
- Achieved 96.7% accuracy on test set
- Completed reflection on model behavior"
```

**Step 5: Push to GitHub**
```bash
git push -u origin yourname-module01
```

Replace `yourname-module01` with your actual branch name.

**Step 6: Verify on GitHub**

Go to github.com, navigate to the course repo, and verify you see your branch with your commit.

### Expected Output

- `git status` shows a clean working directory after commit
- Push succeeds without errors
- Your branch appears on GitHub with your notebook

### Common Issues

**Issue**: "Nothing to commit, working tree clean" but you made changes
- **Fix**: You forgot to save your Jupyter notebook. Open Jupyter, save, try again.

**Issue**: Push rejected / "Updates were rejected"
- **Fix**: Someone else might have pushed. Run `git pull origin main` first, then push again.

**Issue**: Can't push - authentication failed
- **Fix**: Use a Personal Access Token instead of password, or set up SSH keys.

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Environment as a Product**: Your Python environment is now a working tool. What could break it between now and next week? How would you fix it?

**2. The Sacred Flow**: We just did write → test → commit. Why is this workflow important for ML projects specifically? What happens if you skip version control?

**3. From Toy to Production**: The Iris dataset is tiny (150 samples) and clean. What challenges would you face with a real dataset of 1 million messy records?

**4. PM Integration**: If you were planning a sprint to build this ML model for a client, how would you break this down into user stories? What would your Definition of Done include?

### Exit Ticket

**Complete this reflection** (submit via Canvas):

```
1. What's one thing that clicked for you during this lab?

2. What's one thing you're still confused about?

3. On a scale of 1-5, how confident are you with:
   - Setting up ML environments: ___
   - Using Git for version control: ___
   - Running ML models in Python: ___

4. What do you want to dive deeper into next week?
```

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Experiment with Model Parameters
Try changing `max_depth` in your Decision Tree:
```python
model = DecisionTreeClassifier(max_depth=1, random_state=42)  # Try 1, 2, 5, 10
```
How does accuracy change? Plot `max_depth` vs `accuracy`.

### Challenge 2: Visualize Decision Boundaries
Install and use this visualization code:
```python
from sklearn.tree import plot_tree
plt.figure(figsize=(15, 10))
plot_tree(model, feature_names=iris.feature_names, class_names=iris.target_names, filled=True)
plt.show()
```
What do the nodes represent? Can you explain the tree's logic?

### Challenge 3: Try a Different Algorithm
Replace `DecisionTreeClassifier` with:
```python
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
```
Does it perform better or worse? Why?

### Challenge 4: Add Data Visualization
Before training, create scatter plots:
```python
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis')
plt.xlabel('Sepal Length')
plt.ylabel('Sepal Width')
plt.title('Iris Dataset - First Two Features')
plt.show()
```
Try different feature combinations. Are the classes separable?

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Pre-activity setup, GitHub access verification
- **10-35 min**: Python environment setup (expect troubleshooting)
- **35-55 min**: Git workflow and cloning repo
- **55-85 min**: Building first ML model in Jupyter
- **85-95 min**: Git commit and push
- **95-105 min**: Discussion and reflection

### Common Struggles

**Environment issues will dominate the first half of class.** This is normal and expected. Have these ready:
- Pre-installed USB drives with Python installers
- Backup: Cloud-based Jupyter (Google Colab) for students with major laptop issues
- Pair students who finish early with students who are stuck

**Windows users will have more friction** with virtual environments and Git Bash. Consider:
- Having them use PowerShell or Command Prompt instead of Git Bash
- Pre-printed Windows-specific command cheat sheet

**Git confusion is real.** Many students have never used version control. Emphasize:
- "Your branch is your workspace. Main is the shared space."
- Draw branch diagram on whiteboard
- Walk through the flow: `add` → `commit` → `push`

### Success Indicators

Students are on track if they:
- ✅ Can activate their virtual environment (prompt shows `(ml-env)`)
- ✅ Successfully import `sklearn` in Python
- ✅ Have created their own branch (not on main)
- ✅ Trained a model with >90% accuracy
- ✅ Have pushed at least one commit to GitHub
- ✅ Can explain what their model does in plain English

Students are struggling if they:
- ❌ Keep getting "Module not found" errors (venv not activated)
- ❌ Are working on main branch (don't understand Git branching)
- ❌ Have accuracy of 0% or random results (code errors)
- ❌ Can't push to GitHub (auth or branch issues)

### Materials to Prepare

**Before class:**
- [ ] Test the course GitHub repo - make sure all students have access
- [ ] Create a demo branch yourself and test the full workflow
- [ ] Have USB drives with Python installers (Windows, Mac)
- [ ] Print Git command reference sheets (1 per student)
- [ ] Prepare backup plan for students without laptops (lab computers?)
- [ ] Queue up Google Colab link in case of major environment failures
- [ ] Write "Sacred Flow" on board: Write → Test → Commit → Push

**During class:**
- [ ] Project your screen when walking through installations
- [ ] Stop at checkpoints: "Everyone should see X before we move on"
- [ ] Circulate to check GitHub branch names (catch main-branch workers early)
- [ ] Monitor Jupyter servers (students sometimes have multiple running)

**After class:**
- [ ] Check GitHub to verify all students have pushed
- [ ] Identify students who didn't complete - reach out individually
- [ ] Note which steps took longest - adjust timing for next semester
- [ ] Save common errors and solutions for FAQ document

### Teaching Philosophy Notes

This lab embodies Drew's core belief: **environment setup IS the first skill**. Students who can't set up their tools will struggle all semester. Don't rush this.

The "Sacred Flow" concept is intentional—we're creating a ritual, a muscle memory. By Week 8, students should automatically reach for `git add` after saving code. That takes practice starting from Day 1.

The Iris dataset is a gift. It's small, clean, and works every time. Students get the dopamine hit of "I built an ML model!" without the frustration of data cleaning. We'll introduce messy data in Module 2-3. Let them have this win.

Finally, the extension challenges aren't just for fast students—they're for curious students. Some of your "slower" students will spend an extra hour after class exploring these. That's the spark. Encourage it.

---

**Remember**: If students leave this lab with a working environment, a trained model, and a Git commit, that's a huge win. Everything else builds on this foundation. Don't let perfectionism steal their first success.
