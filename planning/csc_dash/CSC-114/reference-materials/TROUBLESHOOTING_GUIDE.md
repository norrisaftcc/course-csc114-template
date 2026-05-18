# CSC-114 Troubleshooting Guide

Common problems and how to fix them

---

## How to Use This Guide

**Search First**: Use Ctrl+F (Cmd+F on Mac) to search for your error message or symptom.

**Read Symptoms**: Even if the problem title doesn't match, check symptoms - you might have the same issue.

**Follow Steps**: Troubleshooting steps are ordered from most likely to least likely cause.

**Ask for Help**: If you've tried everything here and still stuck, come to office hours with:
- What you tried
- Exact error message
- Minimal code that reproduces the problem

---

## Table of Contents

- [Environment Issues](#environment-issues)
- [Data Issues](#data-issues)
- [Training Issues](#training-issues)
- [API Issues](#api-issues)
- [Project Management Issues](#project-management-issues)

---

## Environment Issues

### Problem: "ModuleNotFoundError: No module named 'sklearn'"

**Symptoms**:
```python
ModuleNotFoundError: No module named 'sklearn'
# or
ModuleNotFoundError: No module named 'tensorflow'
# or any installed package
```

**Why This Happens**: Python can't find the package, usually because:
- Package not installed in the current environment
- Running code in different Python environment than where you installed
- Jupyter kernel using wrong Python interpreter

**How to Fix**:

1. **Check if package is actually installed**:
   ```bash
   pip list | grep scikit-learn
   ```

2. **Install the package**:
   ```bash
   pip install scikit-learn
   # For TensorFlow
   pip install tensorflow
   # For pandas, numpy, matplotlib
   pip install pandas numpy matplotlib seaborn
   ```

3. **If using Jupyter Notebook** - Kernel might be using different Python:
   ```bash
   # Install in the kernel's Python
   python -m pip install scikit-learn

   # Or restart kernel: Kernel > Restart
   ```

4. **If using virtual environment** - Make sure it's activated:
   ```bash
   # Create virtual environment
   python -m venv venv

   # Activate (Mac/Linux)
   source venv/bin/activate

   # Activate (Windows)
   venv\Scripts\activate

   # Install packages
   pip install scikit-learn tensorflow pandas
   ```

5. **Check you're using the right Python**:
   ```python
   import sys
   print(sys.executable)  # Shows which Python is running
   print(sys.path)        # Shows where Python looks for packages
   ```

**How to Prevent**: Always use virtual environments. Install packages while environment is activated.

---

### Problem: Python Version Conflicts

**Symptoms**:
- "This package requires Python >=3.8"
- Code works on classmate's computer but not yours
- Syntax errors with f-strings or other modern Python features

**Why This Happens**: Different Python versions have different features and package compatibility.

**How to Fix**:

1. **Check your Python version**:
   ```bash
   python --version
   # or
   python3 --version
   ```

2. **If too old (< 3.8)** - Install newer Python:
   - Mac: `brew install python@3.11`
   - Windows: Download from python.org
   - Linux: `sudo apt install python3.11`

3. **Use version-specific command**:
   ```bash
   python3.11 -m pip install package_name
   ```

4. **Create virtual environment with specific version**:
   ```bash
   python3.11 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

**How to Prevent**: Document required Python version in README. Use virtual environments.

---

### Problem: Jupyter Kernel Keeps Dying

**Symptoms**:
- "The kernel appears to have died. It will restart automatically."
- Notebook freezes during execution
- Cell runs forever then kernel crashes

**Why This Happens**:
- Out of memory (most common)
- Infinite loop
- Bug in package (especially with older TensorFlow/GPU)

**How to Fix**:

1. **Check memory usage**:
   ```python
   import psutil
   print(f"RAM usage: {psutil.virtual_memory().percent}%")
   ```

2. **Reduce batch size** (if training neural networks):
   ```python
   # Instead of batch_size=128
   model.fit(X_train, y_train, batch_size=32)  # Smaller batch
   ```

3. **Process data in chunks**:
   ```python
   # Instead of loading entire dataset
   for chunk in pd.read_csv('huge_file.csv', chunksize=10000):
       process(chunk)
   ```

4. **Clear memory**:
   ```python
   # Delete large objects
   del large_dataframe

   # Garbage collection
   import gc
   gc.collect()
   ```

5. **Restart kernel and clear all outputs**:
   - Kernel > Restart & Clear Output

6. **Check for infinite loops**:
   ```python
   # Add print statements to see where it hangs
   for i in range(1000000):
       if i % 10000 == 0:
           print(f"Iteration {i}")
   ```

**How to Prevent**:
- Start with small data subsets during development
- Monitor memory usage
- Use generators for large datasets

---

### Problem: GPU Not Being Used / CUDA Errors

**Symptoms**:
- Training is very slow
- "Could not load dynamic library 'cudart64_110.dll'"
- TensorFlow says "GPU not found"

**Why This Happens**:
- TensorFlow not compiled with GPU support
- CUDA/cuDNN version mismatch
- Wrong TensorFlow version for your GPU

**How to Fix**:

1. **Check if GPU is available**:
   ```python
   import tensorflow as tf
   print("GPUs Available:", tf.config.list_physical_devices('GPU'))
   ```

2. **For Mac with M1/M2 chip**:
   ```bash
   # Install TensorFlow with Metal support
   pip install tensorflow-metal
   ```

3. **For NVIDIA GPU on Windows/Linux**:
   ```bash
   # Install TensorFlow GPU
   pip install tensorflow[and-cuda]
   ```

4. **Check CUDA is installed** (NVIDIA only):
   ```bash
   nvidia-smi  # Should show GPU info
   ```

5. **Use Google Colab instead**:
   - Free GPU access
   - No setup required
   - Go to Runtime > Change runtime type > GPU

**How to Prevent**: Use cloud platforms (Colab, Kaggle) for GPU work unless you have proper GPU setup.

---

### Problem: "ConvergenceWarning: lbfgs failed to converge"

**Symptoms**:
```
ConvergenceWarning: lbfgs failed to converge (status=1):
STOP: TOTAL NO. of ITERATIONS REACHED LIMIT.
```

**Why This Happens**: Model hasn't finished training. Needs more iterations or better starting point.

**How to Fix**:

1. **Increase max iterations**:
   ```python
   from sklearn.linear_model import LogisticRegression

   model = LogisticRegression(max_iter=1000)  # Default is 100
   ```

2. **Scale your features** (most common fix):
   ```python
   from sklearn.preprocessing import StandardScaler

   scaler = StandardScaler()
   X_train_scaled = scaler.fit_transform(X_train)
   X_test_scaled = scaler.transform(X_test)

   model = LogisticRegression()
   model.fit(X_train_scaled, y_train)
   ```

3. **Try different solver**:
   ```python
   model = LogisticRegression(solver='saga', max_iter=1000)
   ```

**How to Prevent**: Always scale features before using algorithms with gradient descent.

---

## Data Issues

### Problem: "ValueError: Input contains NaN"

**Symptoms**:
```python
ValueError: Input contains NaN, infinity or a value too large for dtype('float64')
```

**Why This Happens**: Your data has missing values and scikit-learn can't handle them.

**How to Fix**:

1. **Find where NaNs are**:
   ```python
   import pandas as pd

   # Check which columns have NaNs
   print(df.isnull().sum())

   # See rows with NaNs
   print(df[df.isnull().any(axis=1)])
   ```

2. **Remove rows with NaNs** (if few):
   ```python
   df_clean = df.dropna()
   ```

3. **Fill NaNs with meaningful values**:
   ```python
   # Fill numerical columns with mean
   df['age'].fillna(df['age'].mean(), inplace=True)

   # Fill categorical columns with mode
   df['category'].fillna(df['category'].mode()[0], inplace=True)

   # Fill with 0 if 0 is meaningful
   df['column'].fillna(0, inplace=True)
   ```

4. **Use scikit-learn imputer**:
   ```python
   from sklearn.impute import SimpleImputer

   imputer = SimpleImputer(strategy='mean')  # or 'median', 'most_frequent'
   X_train = imputer.fit_transform(X_train)
   X_test = imputer.transform(X_test)
   ```

5. **Check for infinite values too**:
   ```python
   import numpy as np

   # Find infinities
   print(np.isinf(X).sum())

   # Replace infinities with NaN, then impute
   X = np.where(np.isinf(X), np.nan, X)
   ```

**How to Prevent**: Always inspect data first. Check for missing values before training.

---

### Problem: "ValueError: could not convert string to float"

**Symptoms**:
```python
ValueError: could not convert string to float: 'Male'
```

**Why This Happens**: Trying to use categorical/text data directly in a model that expects numbers.

**How to Fix**:

1. **Identify categorical columns**:
   ```python
   # Find non-numeric columns
   categorical_cols = df.select_dtypes(include=['object']).columns
   print(categorical_cols)
   ```

2. **Encode categorical variables**:
   ```python
   # For binary categories (Yes/No, Male/Female)
   df['gender'] = df['gender'].map({'Male': 0, 'Female': 1})

   # For ordered categories (Low/Medium/High)
   df['priority'] = df['priority'].map({'Low': 0, 'Medium': 1, 'High': 2})

   # For unordered categories - use one-hot encoding
   df = pd.get_dummies(df, columns=['color', 'city'], drop_first=True)
   ```

3. **Use LabelEncoder for target variable**:
   ```python
   from sklearn.preprocessing import LabelEncoder

   le = LabelEncoder()
   y = le.fit_transform(df['category'])  # 'cat', 'dog' → 0, 1
   ```

4. **Separate numeric and categorical features**:
   ```python
   # Numeric features
   numeric_features = df.select_dtypes(include=['int64', 'float64']).columns
   X_numeric = df[numeric_features]

   # Encode categorical separately
   X_categorical = pd.get_dummies(df[categorical_cols])

   # Combine
   X = pd.concat([X_numeric, X_categorical], axis=1)
   ```

**How to Prevent**: Always check data types. Encode categorical variables before modeling.

---

### Problem: Shape Mismatch Errors

**Symptoms**:
```python
ValueError: shapes (100,5) and (10,5) not aligned
# or
ValueError: Input 0 is incompatible with layer: expected shape=(None, 10), found shape=(None, 5)
```

**Why This Happens**: Input dimensions don't match what the model expects.

**How to Fix**:

1. **Check shapes of your data**:
   ```python
   print(f"X_train shape: {X_train.shape}")
   print(f"X_test shape: {X_test.shape}")
   print(f"y_train shape: {y_train.shape}")
   print(f"y_test shape: {y_test.shape}")
   ```

2. **For neural networks - check input shape**:
   ```python
   # If X_train.shape = (1000, 10) - 1000 samples, 10 features
   model = Sequential([
       Dense(64, activation='relu', input_shape=(10,)),  # Match feature count
       Dense(1, activation='sigmoid')
   ])
   ```

3. **For CNNs - reshape image data**:
   ```python
   # If images are (28, 28) - add channel dimension
   X_train = X_train.reshape(-1, 28, 28, 1)
   X_test = X_test.reshape(-1, 28, 28, 1)

   # Now shape is (num_samples, 28, 28, 1)
   ```

4. **Ensure train and test have same features**:
   ```python
   # After one-hot encoding, test might have different columns
   # Fix by using same columns
   X_test = X_test.reindex(columns=X_train.columns, fill_value=0)
   ```

5. **For regression - ensure y is correct shape**:
   ```python
   # y should be 1D array for single output
   y = y.ravel()  # or y.reshape(-1,)

   # Check
   print(y.shape)  # Should be (n_samples,) not (n_samples, 1)
   ```

**How to Prevent**: Always print shapes during development. Verify train/test shapes match.

---

### Problem: Memory Error with Large Datasets

**Symptoms**:
```python
MemoryError: Unable to allocate XX GiB for an array
# or computer freezes
```

**Why This Happens**: Dataset too large to fit in RAM.

**How to Fix**:

1. **Use a sample for development**:
   ```python
   # Use 10% of data during development
   df_sample = df.sample(frac=0.1, random_state=42)
   ```

2. **Load data in chunks**:
   ```python
   # For CSV files
   chunk_size = 10000
   chunks = []

   for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
       # Process chunk
       processed = process_chunk(chunk)
       chunks.append(processed)

   df = pd.concat(chunks, ignore_index=True)
   ```

3. **Use efficient data types**:
   ```python
   # Check memory usage
   print(df.memory_usage(deep=True))

   # Downcast numeric types
   df['int_column'] = pd.to_numeric(df['int_column'], downcast='integer')
   df['float_column'] = pd.to_numeric(df['float_column'], downcast='float')

   # Use categorical for text with few unique values
   df['category'] = df['category'].astype('category')
   ```

4. **Use sparse matrices**:
   ```python
   from scipy.sparse import csr_matrix

   # After one-hot encoding (many zeros)
   X_sparse = csr_matrix(X)
   ```

5. **Free memory**:
   ```python
   # Delete unneeded objects
   del large_df

   import gc
   gc.collect()
   ```

**How to Prevent**: Start with data samples. Profile memory usage. Use appropriate data types.

---

### Problem: Imbalanced Classes - High Accuracy but Poor Performance

**Symptoms**:
- Model gets 95%+ accuracy but doesn't work in practice
- Model predicts only one class
- Precision and recall very different

**Why This Happens**: Dataset has way more examples of one class (e.g., 99% legitimate, 1% fraud).

**How to Fix**:

1. **Check class distribution**:
   ```python
   print(y_train.value_counts())
   print(y_train.value_counts(normalize=True))  # As percentages
   ```

2. **Use better metrics**:
   ```python
   from sklearn.metrics import classification_report, confusion_matrix

   # Don't just look at accuracy
   print(classification_report(y_test, y_pred))
   print(confusion_matrix(y_test, y_pred))
   ```

3. **Adjust class weights**:
   ```python
   from sklearn.ensemble import RandomForestClassifier

   # Automatically balance based on frequency
   model = RandomForestClassifier(class_weight='balanced')
   model.fit(X_train, y_train)
   ```

4. **Oversample minority class** (SMOTE):
   ```python
   from imblearn.over_sampling import SMOTE

   smote = SMOTE(random_state=42)
   X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

   model.fit(X_train_balanced, y_train_balanced)
   ```

5. **Undersample majority class**:
   ```python
   from imblearn.under_sampling import RandomUnderSampler

   rus = RandomUnderSampler(random_state=42)
   X_train_balanced, y_train_balanced = rus.fit_resample(X_train, y_train)
   ```

6. **Adjust decision threshold**:
   ```python
   # Instead of default 0.5 threshold
   y_pred_proba = model.predict_proba(X_test)[:, 1]
   y_pred = (y_pred_proba > 0.3).astype(int)  # Lower threshold
   ```

**How to Prevent**: Always check class distribution. Use appropriate metrics (precision, recall, F1).

---

## Training Issues

### Problem: Model Not Learning (Loss Not Decreasing)

**Symptoms**:
- Training loss stays constant
- Validation loss stays constant
- Accuracy doesn't improve

**Why This Happens**:
- Learning rate too low or too high
- Bad weight initialization
- Data not normalized
- Bug in code

**How to Fix**:

1. **Check loss is actually being calculated**:
   ```python
   # Print first few batches
   history = model.fit(X_train, y_train, epochs=5, verbose=2)
   print(history.history['loss'])  # Should decrease
   ```

2. **Try higher learning rate**:
   ```python
   from tensorflow.keras.optimizers import Adam

   # Default is 0.001, try 0.01
   model.compile(
       optimizer=Adam(learning_rate=0.01),
       loss='binary_crossentropy',
       metrics=['accuracy']
   )
   ```

3. **Normalize your data**:
   ```python
   from sklearn.preprocessing import StandardScaler

   scaler = StandardScaler()
   X_train_scaled = scaler.fit_transform(X_train)
   X_test_scaled = scaler.transform(X_test)
   ```

4. **Check labels are correct**:
   ```python
   print(f"Unique labels: {np.unique(y_train)}")
   print(f"Label shape: {y_train.shape}")

   # For binary classification, labels should be 0 and 1
   # For multi-class, labels should be 0, 1, 2, ..., n-1
   ```

5. **Simplify model to debug**:
   ```python
   # Start with simplest model
   simple_model = Sequential([
       Dense(1, activation='sigmoid', input_shape=(n_features,))
   ])

   simple_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
   simple_model.fit(X_train, y_train, epochs=10)

   # If this works, gradually add complexity
   ```

6. **Check for bugs**:
   ```python
   # Make sure you're actually training on the data
   print(f"Training samples: {len(X_train)}")
   print(f"Training labels: {len(y_train)}")

   # Try overfitting on small sample to ensure model can learn
   X_small = X_train[:100]
   y_small = y_train[:100]
   model.fit(X_small, y_small, epochs=50)  # Should get 100% accuracy
   ```

**How to Prevent**: Start simple. Add complexity gradually. Always normalize data.

---

### Problem: Overfitting (Training Accuracy >> Test Accuracy)

**Symptoms**:
- Training accuracy 95%, test accuracy 60%
- Training loss keeps decreasing, validation loss increases
- Model memorizing training data

**Why This Happens**:
- Model too complex
- Not enough data
- Training too long
- No regularization

**How to Fix**:

1. **Add dropout**:
   ```python
   from tensorflow.keras.layers import Dropout

   model = Sequential([
       Dense(128, activation='relu', input_shape=(n_features,)),
       Dropout(0.5),  # Drop 50% of neurons randomly
       Dense(64, activation='relu'),
       Dropout(0.5),
       Dense(1, activation='sigmoid')
   ])
   ```

2. **Use L2 regularization**:
   ```python
   from tensorflow.keras.regularizers import l2

   model = Sequential([
       Dense(128, activation='relu', kernel_regularizer=l2(0.01)),
       Dense(64, activation='relu', kernel_regularizer=l2(0.01)),
       Dense(1, activation='sigmoid')
   ])
   ```

3. **Early stopping**:
   ```python
   from tensorflow.keras.callbacks import EarlyStopping

   early_stop = EarlyStopping(
       monitor='val_loss',
       patience=10,  # Stop if no improvement for 10 epochs
       restore_best_weights=True
   )

   model.fit(X_train, y_train, epochs=100,
             validation_data=(X_val, y_val),
             callbacks=[early_stop])
   ```

4. **Reduce model complexity**:
   ```python
   # Instead of this:
   model = Sequential([
       Dense(512, activation='relu'),
       Dense(256, activation='relu'),
       Dense(128, activation='relu'),
       Dense(64, activation='relu'),
       Dense(1, activation='sigmoid')
   ])

   # Try this:
   model = Sequential([
       Dense(64, activation='relu'),
       Dense(32, activation='relu'),
       Dense(1, activation='sigmoid')
   ])
   ```

5. **Get more training data**:
   - Data augmentation (for images)
   - Collect more samples
   - Synthetic data generation

6. **Use cross-validation**:
   ```python
   from sklearn.model_selection import cross_val_score

   scores = cross_val_score(model, X, y, cv=5)
   print(f"CV Scores: {scores}")
   print(f"Mean: {scores.mean():.3f} (+/- {scores.std():.3f})")
   ```

**How to Prevent**: Monitor validation loss. Use regularization. Don't train too long.

---

### Problem: Underfitting (Both Training and Test Accuracy Low)

**Symptoms**:
- Training accuracy 60%, test accuracy 58%
- Both training and validation loss high
- Model too simple for the data

**Why This Happens**:
- Model not complex enough
- Not enough features
- Over-regularization
- Not trained long enough

**How to Fix**:

1. **Increase model complexity**:
   ```python
   # Instead of simple model:
   model = Sequential([
       Dense(16, activation='relu'),
       Dense(1, activation='sigmoid')
   ])

   # Try more layers/neurons:
   model = Sequential([
       Dense(128, activation='relu'),
       Dense(64, activation='relu'),
       Dense(32, activation='relu'),
       Dense(1, activation='sigmoid')
   ])
   ```

2. **Train longer**:
   ```python
   # Increase epochs
   model.fit(X_train, y_train, epochs=100)  # Instead of 10
   ```

3. **Reduce regularization**:
   ```python
   # Remove or reduce dropout
   # Instead of Dropout(0.5), try Dropout(0.2) or remove it

   # Reduce L2 regularization
   # Instead of l2(0.1), try l2(0.01)
   ```

4. **Add more features**:
   ```python
   # Feature engineering
   df['feature_interaction'] = df['feature1'] * df['feature2']
   df['feature_squared'] = df['feature1'] ** 2
   ```

5. **Try non-linear models**:
   ```python
   # If using linear regression, try polynomial features
   from sklearn.preprocessing import PolynomialFeatures

   poly = PolynomialFeatures(degree=2)
   X_poly = poly.fit_transform(X)

   # Or try tree-based models
   from sklearn.ensemble import RandomForestClassifier
   model = RandomForestClassifier(n_estimators=100)
   ```

**How to Prevent**: Start simple, add complexity as needed. Monitor training progress.

---

### Problem: Training Extremely Slow

**Symptoms**:
- Each epoch takes 10+ minutes on small dataset
- Training appears frozen
- Computer becomes unresponsive

**Why This Happens**:
- Large batch size on CPU
- Inefficient data loading
- Complex model on CPU instead of GPU
- Memory swapping

**How to Fix**:

1. **Reduce batch size**:
   ```python
   # Instead of batch_size=512
   model.fit(X_train, y_train, batch_size=32, epochs=10)
   ```

2. **Use GPU** (Google Colab):
   ```python
   # In Colab: Runtime > Change runtime type > GPU

   # Check GPU is being used
   import tensorflow as tf
   print("GPUs:", tf.config.list_physical_devices('GPU'))
   ```

3. **Reduce model size**:
   ```python
   # Fewer parameters = faster training
   model = Sequential([
       Dense(64, activation='relu'),  # Instead of 512
       Dense(32, activation='relu'),
       Dense(1, activation='sigmoid')
   ])
   ```

4. **Use smaller data sample during development**:
   ```python
   # Use 10% of data while debugging
   X_train_small = X_train[:len(X_train)//10]
   y_train_small = y_train[:len(y_train)//10]

   # Train on small sample
   model.fit(X_train_small, y_train_small, epochs=10)
   ```

5. **Optimize data loading**:
   ```python
   # Use tf.data for efficient loading
   train_dataset = tf.data.Dataset.from_tensor_slices((X_train, y_train))
   train_dataset = train_dataset.batch(32).prefetch(tf.data.AUTOTUNE)

   model.fit(train_dataset, epochs=10)
   ```

**How to Prevent**: Use GPU for large models. Start with small data/model during development.

---

### Problem: "ValueError: logits and labels must have the same shape"

**Symptoms**:
```python
ValueError: logits and labels must have the same shape ((32, 1) vs (32,))
```

**Why This Happens**: Shape mismatch between model output and labels, usually in neural networks.

**How to Fix**:

1. **For binary classification**:
   ```python
   # Make sure y is 1D array
   y_train = y_train.ravel()  # or y_train.flatten()

   # Check shape
   print(y_train.shape)  # Should be (n_samples,) not (n_samples, 1)
   ```

2. **Or reshape labels to match output**:
   ```python
   # If output is (n_samples, 1), reshape labels
   y_train = y_train.reshape(-1, 1)
   ```

3. **For multi-class classification**:
   ```python
   # If using sparse_categorical_crossentropy, labels should be integers
   print(y_train)  # Should be [0, 1, 2, ...] not one-hot encoded

   # If using categorical_crossentropy, labels should be one-hot
   from tensorflow.keras.utils import to_categorical
   y_train_onehot = to_categorical(y_train, num_classes=3)
   ```

**How to Prevent**: Check shapes before training. Ensure labels match loss function format.

---

## API Issues

### Problem: OpenAI Rate Limit Exceeded

**Symptoms**:
```python
openai.error.RateLimitError: Rate limit reached for requests
# or
openai.error.RateLimitError: You exceeded your current quota
```

**Why This Happens**:
- Free tier has strict rate limits
- Making requests too quickly
- Exceeded monthly quota

**How to Fix**:

1. **Add exponential backoff retry**:
   ```python
   import openai
   import time
   from openai.error import RateLimitError

   def call_openai_with_retry(messages, max_retries=5):
       for attempt in range(max_retries):
           try:
               response = openai.ChatCompletion.create(
                   model="gpt-3.5-turbo",
                   messages=messages
               )
               return response
           except RateLimitError:
               if attempt < max_retries - 1:
                   wait_time = 2 ** attempt  # 1s, 2s, 4s, 8s, 16s
                   print(f"Rate limit hit. Waiting {wait_time}s...")
                   time.sleep(wait_time)
               else:
                   raise
   ```

2. **Add delay between requests**:
   ```python
   import time

   results = []
   for prompt in prompts:
       response = call_openai(prompt)
       results.append(response)
       time.sleep(1)  # Wait 1 second between requests
   ```

3. **Batch requests intelligently**:
   ```python
   # Instead of 100 separate calls
   # Combine into fewer, longer prompts when possible

   combined_prompt = "Process these items:\n" + "\n".join(items[:10])
   ```

4. **Check your usage**:
   - Go to platform.openai.com/account/usage
   - See how much quota you've used
   - Upgrade plan if needed

5. **Cache responses**:
   ```python
   import json
   import os

   def call_openai_cached(prompt, cache_file='cache.json'):
       # Load cache
       if os.path.exists(cache_file):
           with open(cache_file, 'r') as f:
               cache = json.load(f)
       else:
           cache = {}

       # Check cache
       if prompt in cache:
           return cache[prompt]

       # Make API call
       response = openai.ChatCompletion.create(
           model="gpt-3.5-turbo",
           messages=[{"role": "user", "content": prompt}]
       )

       result = response['choices'][0]['message']['content']

       # Save to cache
       cache[prompt] = result
       with open(cache_file, 'w') as f:
           json.dump(cache, f)

       return result
   ```

**How to Prevent**: Implement retry logic. Add delays. Cache responses. Monitor usage.

---

### Problem: OpenAI Authentication Error

**Symptoms**:
```python
openai.error.AuthenticationError: Incorrect API key provided
# or
openai.error.AuthenticationError: No API key provided
```

**Why This Happens**:
- API key not set
- API key incorrect
- API key not loaded from environment

**How to Fix**:

1. **Check API key is set**:
   ```python
   import openai
   print(openai.api_key)  # Should show your key (be careful sharing this!)
   ```

2. **Set API key correctly**:
   ```python
   import openai
   import os

   # Load from environment variable (recommended)
   openai.api_key = os.getenv("OPENAI_API_KEY")

   # Check it loaded
   if openai.api_key is None:
       raise ValueError("OPENAI_API_KEY not found in environment variables")
   ```

3. **Set environment variable**:
   ```bash
   # Mac/Linux - in terminal
   export OPENAI_API_KEY='your-key-here'

   # Windows - in command prompt
   set OPENAI_API_KEY=your-key-here

   # Windows - in PowerShell
   $env:OPENAI_API_KEY='your-key-here'
   ```

4. **For Jupyter notebooks** - use .env file:
   ```python
   # Install python-dotenv
   !pip install python-dotenv

   # Create .env file with:
   # OPENAI_API_KEY=your-key-here

   # Load in notebook
   from dotenv import load_dotenv
   load_dotenv()

   import openai
   import os
   openai.api_key = os.getenv("OPENAI_API_KEY")
   ```

5. **Verify key is valid**:
   - Go to platform.openai.com/api-keys
   - Check key is active
   - Create new key if needed

**How to Prevent**: Use environment variables. Never hardcode API keys. Add .env to .gitignore.

---

### Problem: OpenAI Timeout Errors

**Symptoms**:
```python
openai.error.Timeout: Request timed out
```

**Why This Happens**:
- Slow internet connection
- OpenAI API is slow/overloaded
- Request is taking too long

**How to Fix**:

1. **Increase timeout**:
   ```python
   import openai

   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=messages,
       timeout=60  # 60 seconds instead of default 30
   )
   ```

2. **Add retry logic**:
   ```python
   from openai.error import Timeout
   import time

   def call_with_retry(messages, max_retries=3):
       for attempt in range(max_retries):
           try:
               response = openai.ChatCompletion.create(
                   model="gpt-3.5-turbo",
                   messages=messages,
                   timeout=60
               )
               return response
           except Timeout:
               if attempt < max_retries - 1:
                   print(f"Timeout. Retrying... (attempt {attempt + 1})")
                   time.sleep(2)
               else:
                   raise
   ```

3. **Reduce request size**:
   ```python
   # If sending very long prompts, try to shorten them
   # Use max_tokens to limit response length
   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=messages,
       max_tokens=500  # Limit response length
   )
   ```

**How to Prevent**: Set reasonable timeouts. Implement retry logic. Keep prompts concise.

---

### Problem: OpenAI Token Limit Exceeded

**Symptoms**:
```python
openai.error.InvalidRequestError: This model's maximum context length is 4096 tokens
```

**Why This Happens**: Your prompt + response exceeds model's token limit.

**How to Fix**:

1. **Count tokens before sending**:
   ```python
   import tiktoken

   def count_tokens(text, model="gpt-3.5-turbo"):
       encoding = tiktoken.encoding_for_model(model)
       return len(encoding.encode(text))

   prompt = "Your very long prompt..."
   token_count = count_tokens(prompt)
   print(f"Prompt tokens: {token_count}")

   # gpt-3.5-turbo limit: 4096 tokens
   # gpt-4 limit: 8192 tokens
   # gpt-4-32k limit: 32768 tokens
   ```

2. **Truncate long prompts**:
   ```python
   def truncate_to_token_limit(text, max_tokens=3000):
       encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
       tokens = encoding.encode(text)

       if len(tokens) > max_tokens:
           tokens = tokens[:max_tokens]
           text = encoding.decode(tokens)

       return text

   prompt = truncate_to_token_limit(long_prompt)
   ```

3. **Limit response length**:
   ```python
   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=messages,
       max_tokens=500  # Limit response to 500 tokens
   )
   ```

4. **Split long documents**:
   ```python
   # Instead of sending entire document
   # Process in chunks
   chunks = split_text_into_chunks(document, max_tokens=2000)

   results = []
   for chunk in chunks:
       response = openai.ChatCompletion.create(
           model="gpt-3.5-turbo",
           messages=[{"role": "user", "content": f"Summarize: {chunk}"}]
       )
       results.append(response['choices'][0]['message']['content'])
   ```

5. **Use model with larger context**:
   ```python
   # Use gpt-4 (8192 tokens) or gpt-4-32k (32768 tokens)
   response = openai.ChatCompletion.create(
       model="gpt-4",  # Instead of gpt-3.5-turbo
       messages=messages
   )
   ```

**How to Prevent**: Count tokens before sending. Stay well under limits. Chunk long documents.

---

## Project Management Issues

### Problem: Velocity Calculation Confusion

**Symptoms**:
- Not sure how to calculate velocity
- Velocity numbers seem wrong
- Can't predict future sprint capacity

**Why This Happens**: Velocity concept is new. Easy to miscalculate.

**How to Fix**:

1. **Velocity = Story Points Completed**:
   ```
   Sprint 1: Completed 8, 5, 3, 2 point stories = 18 points velocity
   Sprint 2: Completed 5, 5, 5, 3, 2 point stories = 20 points velocity
   Sprint 3: Completed 13, 5, 2 point stories = 20 points velocity

   Average velocity = (18 + 20 + 20) / 3 = 19.3 points per sprint
   ```

2. **Only count DONE stories**:
   - 90% complete = 0 points toward velocity
   - Must be fully done (code + tests + documentation + merged)

3. **Don't count carried over points twice**:
   ```
   ❌ WRONG:
   Sprint 1: Started 8pt story, didn't finish = 0 points
   Sprint 2: Finished that 8pt story = 8 points
   Sprint 3: Also count those 8 points = 8 points
   Total: 16 points (WRONG - double counting!)

   ✅ RIGHT:
   Sprint 1: Started 8pt story, didn't finish = 0 points
   Sprint 2: Finished that 8pt story = 8 points
   Total: 8 points
   ```

4. **Use velocity for planning**:
   ```
   Average velocity: 20 points
   Stories for next sprint: 5pt + 8pt + 3pt + 5pt = 21 points

   This is reasonable (close to 20)
   ```

**How to Prevent**: Track velocity every sprint. Review in retrospectives.

---

### Problem: Story Point Estimation Struggles

**Symptoms**:
- No idea how many points to assign
- Estimates wildly inconsistent
- Stories that seemed small take forever

**Why This Happens**: Story points are relative and take practice.

**How to Fix**:

1. **Use reference stories**:
   ```
   1 point = "Add a validation rule" (30 min - 1 hour)
   3 points = "Create new API endpoint" (2-4 hours)
   5 points = "Add user authentication" (4-8 hours)
   8 points = "Implement search feature" (1-2 days)
   13 points = "Build recommendation system" (2-3 days)
   ```

2. **Consider complexity, not time**:
   - Points reflect: complexity + uncertainty + effort
   - Not: hours or days

3. **Team estimates together**:
   ```
   1. Read story
   2. Everyone picks points (secretly)
   3. Reveal simultaneously
   4. If different, discuss
   5. Re-estimate until consensus
   ```

4. **Break down large stories**:
   ```
   ❌ "Build entire chatbot" = 40 points (too big!)

   ✅ Better breakdown:
   - "Design chatbot conversation flow" = 5 points
   - "Implement OpenAI integration" = 8 points
   - "Create chat UI" = 5 points
   - "Add message history" = 3 points
   - "Deploy to production" = 3 points
   Total: 24 points across multiple stories
   ```

5. **Adjust based on actual effort**:
   ```
   Estimated 3 points, took 2 days = underestimated
   Next similar story: estimate 5 points
   ```

**How to Prevent**: Estimate as team. Review estimates in retrospectives. Adjust over time.

---

### Problem: Scope Creep

**Symptoms**:
- Sprint goals keep changing
- New requirements added mid-sprint
- Can't finish what you planned

**Why This Happens**: Unclear requirements. Stakeholder requests. Feature discoveries.

**How to Fix**:

1. **Document acceptance criteria**:
   ```
   Story: "User can filter search results"

   Acceptance Criteria:
   - [ ] Filter by category (dropdown)
   - [ ] Filter by date range (date picker)
   - [ ] Filter by price (slider)
   - [ ] Multiple filters work together (AND logic)
   - [ ] Clear filters button resets all
   - [ ] Filters persist on page refresh

   Out of scope for this story:
   - Saving filter preferences
   - Filter analytics
   - Advanced query builder
   ```

2. **Add to backlog, not current sprint**:
   ```
   Stakeholder: "Can we also add X?"
   You: "Great idea! Let's add it to the backlog for next sprint."
   ```

3. **Push back on changes mid-sprint**:
   ```
   "We committed to these stories for this sprint.
    Adding X would mean dropping Y.
    Let's revisit priorities in sprint planning."
   ```

4. **Time-box gold-plating**:
   ```
   ❌ "Let me make this perfect..."
   - Add animations
   - Optimize every query
   - Handle every edge case

   ✅ "Done means meets acceptance criteria"
   - Works for main use cases
   - Tested
   - Documented
   - Future improvements go in backlog
   ```

**How to Prevent**: Clear acceptance criteria. Protect sprint commitments. Backlog new ideas.

---

### Problem: Merge Conflicts and Integration Issues

**Symptoms**:
- Can't merge feature branch
- Code works locally, breaks in main
- Tests pass individually, fail together

**Why This Happens**: Multiple people changing same code. Infrequent integration.

**How to Fix**:

1. **Pull before you push**:
   ```bash
   # Before starting work
   git checkout main
   git pull origin main
   git checkout -b feature-branch

   # After work, before pushing
   git checkout main
   git pull origin main
   git checkout feature-branch
   git merge main  # Resolve conflicts locally

   # Then push
   git push origin feature-branch
   ```

2. **Keep branches short-lived**:
   ```
   ❌ Feature branch open for 2 weeks
   ✅ Feature branch open for 1-2 days max

   Break work into smaller merges
   ```

3. **Communicate about shared files**:
   ```
   "Hey, I'm refactoring the auth module today.
    Hold off on auth changes until I merge."
   ```

4. **Resolve conflicts carefully**:
   ```bash
   # When you see:
   <<<<<<< HEAD
   code from main
   =======
   your code
   >>>>>>> feature-branch

   # Don't just pick one! Understand what both do.
   # Test after resolving.
   ```

5. **Use feature flags for big changes**:
   ```python
   # Instead of breaking main with incomplete feature
   if ENABLE_NEW_FEATURE:
       new_implementation()
   else:
       old_implementation()

   # Merge frequently, enable feature when ready
   ```

**How to Prevent**: Small, frequent merges. Pull often. Communicate. Review merge commits.

---

## Quick Diagnostic Flowchart

```
Problem?
│
├─ Code won't run?
│  ├─ ImportError? → Check environment (§Environment Issues)
│  ├─ SyntaxError? → Check Python version / typo
│  └─ Other error? → Read error message carefully
│
├─ Training issues?
│  ├─ Loss not changing? → Check learning rate / data normalization
│  ├─ Loss increasing? → Lower learning rate / check labels
│  ├─ Overfitting? → Add regularization / get more data
│  └─ Underfitting? → More complex model / more features
│
├─ Data issues?
│  ├─ NaN/missing values? → Impute or drop
│  ├─ Shape mismatch? → Check dimensions match
│  ├─ Can't convert to float? → Encode categorical variables
│  └─ Out of memory? → Use sample / load in chunks
│
├─ API issues?
│  ├─ Rate limit? → Add delays / retry logic
│  ├─ Auth error? → Check API key
│  ├─ Timeout? → Increase timeout / retry
│  └─ Token limit? → Shorten prompt / chunk input
│
└─ PM issues?
   ├─ Velocity unclear? → Only count completed stories
   ├─ Estimation hard? → Use reference stories / team estimate
   ├─ Scope creep? → Document acceptance criteria
   └─ Merge conflicts? → Pull often / small branches
```

---

## General Troubleshooting Strategy

1. **Read the error message**: Seems obvious, but actually read it. Last line usually says what's wrong.

2. **Google the error**: Copy/paste error message into Google. Someone else hit this.

3. **Check your assumptions**:
   ```python
   # Add print statements
   print(f"X shape: {X.shape}")
   print(f"y unique values: {np.unique(y)}")
   print(f"Any NaN?: {df.isnull().any().any()}")
   ```

4. **Simplify until it works**:
   - Smaller model
   - Smaller dataset
   - Fewer features
   - Find what breaks it

5. **Compare with working example**: Find tutorial code that works, compare to yours.

6. **Ask for help**: Come to office hours with:
   - What you're trying to do
   - What you've tried
   - Exact error message
   - Minimal code that reproduces problem

---

## Emergency Debugging Commands

```python
# Check everything
print(f"X_train shape: {X_train.shape}")
print(f"y_train shape: {y_train.shape}")
print(f"X_train dtype: {X_train.dtype}")
print(f"Any NaN in X?: {np.isnan(X_train).any()}")
print(f"Any NaN in y?: {np.isnan(y_train).any()}")
print(f"Any Inf in X?: {np.isinf(X_train).any()}")
print(f"y unique values: {np.unique(y_train)}")
print(f"y value counts: {pd.Series(y_train).value_counts()}")

# For DataFrames
print(df.info())
print(df.describe())
print(df.isnull().sum())
print(df.head())

# For models
print(model.summary())  # Keras
print(model)  # scikit-learn

# Environment
import sys
print(f"Python: {sys.version}")
print(f"Python executable: {sys.executable}")

import numpy as np
import pandas as pd
import sklearn
import tensorflow as tf

print(f"NumPy: {np.__version__}")
print(f"Pandas: {pd.__version__}")
print(f"scikit-learn: {sklearn.__version__}")
print(f"TensorFlow: {tf.__version__}")
```

---

**Last Updated**: CSC-114 Spring 2026

Hit a problem not covered here? Let Drew know so we can add it.

Remember: Everyone gets stuck. That's normal. What matters is how you debug it.
