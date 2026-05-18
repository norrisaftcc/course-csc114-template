# Module 6 Knowledge Check: Computer Vision & Sprint 4

**Purpose**: Assess understanding of CNNs, transfer learning, image processing, and ethics in ML
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20 minutes

---

## Technical Concepts (60%)

### Question 1
What makes Convolutional Neural Networks (CNNs) particularly effective for image data?

A) They process images faster than other networks
B) They preserve spatial relationships and learn local patterns through convolution
C) They require less training data
D) They always achieve 100% accuracy

**Correct Answer**: B
**Explanation**: CNNs use convolution operations that scan images with small filters, learning local patterns (edges, textures) that build into complex features (faces, objects). This spatial awareness is why CNNs dominate image tasks. Flattening images loses spatial structure; convolution preserves it. The architecture matches the problem structure.

### Question 2
What is a "convolution" operation in CNNs?

A) Converting images to grayscale
B) Sliding a filter across an image to detect features
C) Resizing images
D) Removing noise from images

**Correct Answer**: B
**Explanation**: Convolution slides a small filter (e.g., 3x3) across the image, computing dot products at each position. Different filters detect different features—one might detect vertical edges, another horizontal. The network learns what filters to use. This local feature detection is the core of CNN power. It's pattern matching at scale.

### Question 3
What is the purpose of pooling layers in CNNs?

A) To increase image resolution
B) To reduce spatial dimensions and computational load while retaining important features
C) To add more layers
D) To colorize grayscale images

**Correct Answer**: B
**Explanation**: Pooling (usually max pooling) downsamples feature maps—reducing 4x4 to 2x2 by taking the maximum value. This reduces parameters, prevents overfitting, and builds translation invariance (detecting features regardless of exact position). It's dimensionality reduction that preserves the important information. Smaller representations, same insights.

### Question 4
What is "transfer learning" in the context of computer vision?

A) Transferring images between computers
B) Using a pre-trained model as a starting point for a new task
C) Moving from one programming language to another
D) Converting between image formats

**Correct Answer**: B
**Explanation**: Transfer learning leverages models trained on massive datasets (ImageNet: 1M+ images). You take a pre-trained model (ResNet, VGG), freeze early layers (general features like edges), and retrain later layers on your specific task. This requires far less data and training time. It's standing on the shoulders of giants—why start from scratch?

### Question 5
Why does transfer learning often outperform training from scratch, especially with limited data?

A) It's always faster
B) Pre-trained models have already learned general features useful across many tasks
C) It requires less code
D) It uses less memory

**Correct Answer**: B
**Explanation**: Models trained on ImageNet learned to detect edges, textures, shapes, parts—features useful for almost any image task. When you have 1,000 training images (not 1M), transfer learning lets you leverage that prior knowledge. The early layers stay frozen; you're just teaching the model "here's what cats and dogs look like" not "here's what edges look like."

### Question 6
What is a typical image preprocessing step before feeding data to a CNN?

A) Converting all images to text
B) Resizing to a consistent size and normalizing pixel values
C) Removing all colors
D) Compressing to the smallest file size

**Correct Answer**: B
**Explanation**: CNNs expect consistent input sizes (e.g., 224x224). You resize images, normalize pixels from 0-255 to 0-1 (or standardize), and maybe apply data augmentation. This preprocessing is crucial—garbage in, garbage out. Consistent, normalized inputs lead to stable training. These mundane steps make or break your model.

### Question 7
What is data augmentation in computer vision?

A) Adding more images to your dataset manually
B) Artificially expanding training data by applying transformations like rotation and flipping
C) Increasing image resolution
D) Converting images to higher quality

**Correct Answer**: B
**Explanation**: Data augmentation creates variations of existing images—flipping, rotating, zooming, adjusting brightness. A picture of a dog is still a dog when flipped or slightly rotated. This fights overfitting by teaching invariance to these transformations. It's synthetic data generation that actually works. More effective training data without more data collection.

### Question 8
In a CNN architecture like VGG or ResNet, what pattern typically occurs as you go deeper?

A) Spatial dimensions increase, number of filters decreases
B) Spatial dimensions decrease, number of filters increases
C) Both dimensions stay constant
D) Both dimensions increase

**Correct Answer**: B
**Explanation**: Early layers have large spatial dimensions (e.g., 224x224) with few filters (64). As you pool and convolve, spatial dimensions shrink (56x56, 28x28...) while filters increase (128, 256, 512). You're trading spatial detail for semantic richness—learning "what" rather than "where." This is the characteristic CNN funnel shape.

### Question 9
What is the ImageNet dataset, and why is it important?

A) A small dataset of 1,000 images
B) A large dataset of over 1 million labeled images used for pre-training many models
C) A dataset of only cat pictures
D) A dataset of medical images

**Correct Answer**: B
**Explanation**: ImageNet contains 1.2M+ images across 1,000 categories—dogs, planes, buildings, everything. It's the benchmark for computer vision. Models pre-trained on ImageNet have seen enormous visual diversity. When you use transfer learning, you're leveraging this foundation. It's the common starting point for most CV work. The gift that keeps on giving.

---

## Project Management & Ethics Concepts (40%)

### Question 10
Why is bias detection critical in ML systems, especially computer vision?

A) It's not critical; all ML is objective
B) ML models can perpetuate and amplify societal biases present in training data
C) To slow down development
D) Because regulations require it

**Correct Answer**: B
**Explanation**: If your training data has 90% white faces, your face recognition model will perform worse on other races. If your hiring model trained on historical data that favored men, it'll perpetuate that bias. ML reflects training data—garbage in, garbage out applies to bias too. Detecting and mitigating bias is ethical engineering, not optional.

### Question 11
You're building a face recognition system. What's an important ethical consideration?

A) Making it as accurate as possible regardless of consequences
B) Ensuring equitable performance across different demographic groups
C) Maximizing processing speed
D) Using the most complex model available

**Correct Answer**: B
**Explanation**: A model that's 95% accurate on white faces but 60% accurate on Black faces is unethical and potentially illegal. Test performance across demographics. If disparities exist, investigate training data imbalance, algorithm bias, or problem formulation. Technical excellence without ethical consideration is dangerous. Build inclusive systems.

### Question 12
What is "fairness" in the context of ML models?

A) Everyone gets the same prediction
B) The model performs equitably across different groups and doesn't discriminate
C) The model is easy to use
D) The training data is publicly available

**Correct Answer**: B
**Explanation**: Fairness means equitable outcomes—not identical, but equitable. A medical diagnosis model should be equally accurate for all demographic groups. A loan approval model shouldn't discriminate based on protected characteristics. Defining fairness is complex (equal accuracy? equal false positive rates?), but ignoring it is unethical. This is where tech meets values.

### Question 13
You notice your Sprint 4 CV model performs poorly on underrepresented groups in your dataset. What's the professional response?

A) Ignore it; the overall accuracy is good
B) Document the limitation, investigate causes, and address it if possible
C) Only mention it if someone asks
D) Deploy anyway; it's too late to fix

**CorrectAnswer**: B
**Explanation**: Professional ethics means transparency about limitations. Document the performance disparity in your project report. Investigate: is it training data imbalance? Can you collect more diverse data? Use data augmentation? Sometimes you can't fully fix it, but you must acknowledge it. Silent deployment of biased systems is ethically bankrupt.

### Question 14
What's the value of documenting model limitations and bias testing in your portfolio?

A) To make your project look longer
B) To demonstrate ethical awareness and professional maturity to employers
C) It's not valuable; only show successes
D) To meet course requirements only

**Correct Answer**: B
**Explanation**: Employers want engineers who think about implications, not just accuracy. Documenting bias testing, limitations, and ethical considerations shows you're a responsible professional. This differentiates you from developers who only chase metrics. It's evidence of critical thinking and ethical awareness—highly valued in the industry.

### Question 15
By Sprint 4, what should your PM practices look like compared to Sprint 1?

A) Exactly the same
B) More refined, habitual, and integrated into your workflow
C) Abandoned because you're focused on technical work
D) More time-consuming and burdensome

**Correct Answer**: B
**Explanation**: Sprint 4 practices should feel natural—you plan automatically, track without thinking, reflect as routine. What took conscious effort in Sprint 1 is now habit. PM isn't separate from technical work; it's how you do technical work. This integration is professional maturity. The goal is unconscious competence in professional practices.

---

## Scoring Guide
- 90-100%: Excellent understanding of CNNs, transfer learning, and ML ethics
- 80-89%: Good grasp, minor gaps in architectural concepts or ethical considerations
- 70-79%: Adequate foundation, review convolution operations and bias detection
- Below 70%: Revisit Module 6 materials, especially CNN fundamentals and ethics

## Study Resources
- Module 6 Assignment: Building a CNN for Image Classification
- Canvas HTML: "CNNs Explained: Convolution, Pooling, and Power"
- Canvas HTML: "Transfer Learning: Standing on Giants' Shoulders"
- Canvas HTML: "Ethics in ML: Bias Detection and Mitigation"
- TensorFlow Transfer Learning tutorial
- Data augmentation techniques guide
- ImageNet and pre-trained models documentation
- Bias testing frameworks and tools
- Sprint 4 retrospective template
