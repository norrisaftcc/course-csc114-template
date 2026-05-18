# Module 5 Knowledge Check: Neural Networks & Sprint 3

**Purpose**: Assess understanding of neural network fundamentals, TensorFlow/Keras, training concepts, and habitual PM practices
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20 minutes

---

## Technical Concepts (60%)

### Question 1
What is a neural network?

A) A network of computers working together
B) A computational model inspired by biological neurons, consisting of layers of interconnected nodes
C) A type of database
D) A cloud computing service

**Correct Answer**: B
**Explanation**: Neural networks mimic (very loosely) how biological brains work—layers of nodes (neurons) connected by weighted edges. Information flows forward, each layer transforms the data, and the network learns by adjusting weights. This architecture can learn complex patterns that simpler models can't. It's the foundation of deep learning.

### Question 2
What are the three main types of layers in a basic neural network?

A) Beginning, middle, end
B) Input, hidden, output
C) Data, processing, results
D) Fast, medium, slow

**Correct Answer**: B
**Explanation**: Input layer receives your features. Hidden layers (one or more) transform the data through learned representations. Output layer produces predictions. More hidden layers = "deeper" network = more complex patterns can be learned. But depth isn't always better—it's about finding the right architecture for your problem.

### Question 3
What is an activation function?

A) A function that starts the neural network
B) A non-linear function applied to neuron outputs to enable learning complex patterns
C) A function that measures accuracy
D) A way to load data

**Correct Answer**: B
**Explanation**: Without activation functions, neural networks are just linear transformations—no better than linear regression. Activation functions (ReLU, sigmoid, tanh) add non-linearity, allowing networks to learn complex, curved decision boundaries. ReLU (max(0,x)) is most common—simple, effective, prevents vanishing gradients. The right activation function matters.

### Question 4
What is "backpropagation"?

A) Making backwards predictions
B) The algorithm for calculating gradients and updating weights during training
C) Removing layers from the network
D) Testing data in reverse order

**Correct Answer**: B
**Explanation**: Backpropagation is how neural networks learn. After a forward pass (predictions), we calculate error, then propagate it backwards through the network, computing how much each weight contributed. Then we adjust weights to reduce error. This is gradient descent applied to neural networks. It's the engine of deep learning—mathematically elegant and computationally intensive.

### Question 5
What is an "epoch" in neural network training?

A) A historical time period
B) One complete pass through the entire training dataset
C) A type of layer
D) A testing phase

**Correct Answer**: B
**Explanation**: One epoch means the network has seen every training example once. Training typically runs for multiple epochs—10, 50, 100+. More epochs = more learning opportunities, but also risk of overfitting. You monitor performance across epochs to find the sweet spot where the model generalizes well without memorizing.

### Question 6
What is "batch size" in neural network training?

A) The size of your dataset
B) The number of samples processed before updating weights
C) The number of layers
D) The number of epochs

**Correct Answer**: B
**Explanation**: Batch size balances speed and accuracy. Batch size 32 means process 32 samples, calculate average gradient, update weights, repeat. Larger batches = faster training but more memory. Smaller batches = more frequent updates but noisier gradients. Typical values: 16, 32, 64, 128. This is a hyperparameter you tune.

### Question 7
What is the "learning rate"?

A) How fast you learn the material
B) The step size for weight updates during training
C) The accuracy improvement per epoch
D) The number of epochs per minute

**Correct Answer**: B
**Explanation**: Learning rate controls how much weights change per update. Too high = overshooting, unstable training. Too low = slow convergence, might get stuck. Typical values: 0.001 to 0.1. It's arguably the most important hyperparameter. Finding the right learning rate is often the difference between a model that works and one that doesn't.

### Question 8
In Keras, what method do you call to train a neural network?

A) model.train()
B) model.fit()
C) model.learn()
D) model.execute()

**Correct Answer**: B
**Explanation**: Keras uses fit() for training, maintaining consistency with scikit-learn's API. You pass training data, validation data, epochs, batch size. The method returns training history (loss and metrics per epoch). This consistency across frameworks makes Python ML ecosystem a joy to work with.

### Question 9
What does "loss function" measure?

A) How much data you lost
B) How wrong the model's predictions are
C) How long training takes
D) How many layers are in the network

**Correct Answer**: B
**Explanation**: The loss function quantifies error—how far predictions are from actual values. Mean squared error for regression, categorical crossentropy for classification. Training minimizes this loss. The choice of loss function shapes what the model learns. It's the objective function—what you're optimizing for.

### Question 10
Why might you use validation data during training?

A) To make training faster
B) To monitor for overfitting and guide early stopping
C) To increase accuracy
D) To reduce the dataset size

**Correct Answer**: B
**Explanation**: Validation data provides ongoing feedback. If training loss decreases but validation loss increases, you're overfitting—time to stop. This early stopping prevents wasting compute on epochs that hurt generalization. It's your canary in the coal mine, warning you when learning becomes memorization.

---

## Project Management Concepts (40%)

### Question 11
What does "habitual PM practices" mean in the context of this course?

A) Doing PM tasks only when required
B) Integrating planning, tracking, and reflection as regular parts of your workflow
C) Following strict corporate PM rules
D) Avoiding any PM activities

**Correct Answer**: B
**Explanation**: By Sprint 3, PM practices should be automatic—you naturally start with planning, track progress, do retrospectives. It's not a separate activity; it's how you work. Like testing code or using version control, it becomes part of your process. This habit formation is the goal. Unconscious competence in professional practices.

### Question 12
You're halfway through Sprint 3 and realize you won't finish all committed tasks. What's the professional response?

A) Work all night to finish everything
B) Acknowledge it early, adjust the plan, and document why in your retrospective
C) Hide the problem and hope no one notices
D) Blame external circumstances

**Correct Answer**: B
**Explanation**: Transparency over heroics. Communicate early when plans change. "I underestimated neural network training time; adjusting scope" is professional. Documenting this in your retrospective improves future estimates. The worst thing is silence until the deadline. Early communication enables early adjustment. This is professional maturity.

### Question 13
What's the primary value of maintaining a sprint backlog (list of tasks)?

A) To have something to show your instructor
B) To maintain visibility into what needs to be done and track progress
C) To make the project take longer
D) Because agile requires it

**Correct Answer**: B
**Explanation**: A backlog is your external brain—all tasks visible, nothing forgotten. It answers "What's next?" at any moment. As you complete tasks, you see progress. When you're stuck, you switch tasks instead of stalling. This visibility reduces anxiety and increases productivity. It's a tool for you, not a requirement to check a box.

### Question 14
Why is time-boxing (setting fixed time limits) important for ML experimentation?

A) It's not important; spend as much time as needed
B) To prevent endless optimization and maintain project momentum
C) To make projects shorter
D) Because your professor requires it

**Correct Answer**: B
**Explanation**: ML experiments can run forever—there's always another hyperparameter to tune. Time-boxing forces decisions: "I'll spend 4 hours on architecture search, then move on." This prevents perfectionism paralysis. Good enough now beats perfect never. Professional ML work is about shipping value, not finding the absolute optimal model.

### Question 15
You've completed Sprint 3. What should your retrospective include?

A) Only successes
B) Honest assessment of what worked, what didn't, and specific changes for next sprint
C) Complaints about the course
D) Just the final accuracy score

**Correct Answer**: B
**Explanation**: Effective retrospectives are honest and actionable. "My learning rate tuning took 3x longer than planned—next time, start with literature values" is valuable. "My time estimates were accurate this sprint—continuing that approach" reinforces good practices. Retrospectives close the learning loop. Without them, you repeat mistakes instead of evolving.

---

## Scoring Guide
- 90-100%: Excellent understanding of neural networks and habitual PM practices
- 80-89%: Good grasp, minor gaps in training concepts or PM integration
- 70-79%: Adequate foundation, review backpropagation and time-boxing
- Below 70%: Revisit Module 5 materials, especially training fundamentals

## Study Resources
- Module 5 Assignment: Building Your First Neural Network
- Canvas HTML: "Neural Networks Demystified"
- Canvas HTML: "Making PM Practices Habitual"
- TensorFlow/Keras Getting Started guide
- Backpropagation visualization tool
- Learning rate finder tutorial
- Sprint retrospective template and examples
- Hyperparameter tuning best practices
