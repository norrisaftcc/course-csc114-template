# CSC-114 Quick Reference Cards

Copy/paste code snippets for common ML tasks

---

## How to Use This Reference

**Quick Start**: Ctrl+F to find what you need, copy the code, adapt to your data.

**Code Style**: All snippets use common conventions and include comments explaining key parameters.

**Assumptions**:
- You have a pandas DataFrame `df`
- Features are in `X`, labels in `y`
- Data is already loaded and basic cleaning is done

**Pro Tip**: Don't just copy/paste. Read the comments and understand what each parameter does.

---

## scikit-learn Quick Reference

### Import Common scikit-learn Modules

```python
# Model selection and evaluation
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report, mean_squared_error

# Preprocessing
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder, OneHotEncoder
from sklearn.impute import SimpleImputer

# Models
from sklearn.linear_model import LinearRegression, LogisticRegression, Ridge, Lasso
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC, SVR
from sklearn.naive_bayes import GaussianNB
```

---

### Train/Test Split

```python
from sklearn.model_selection import train_test_split

# Basic 80/20 split
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,      # 20% for testing
    random_state=42     # For reproducibility
)

# Stratified split (maintains class proportions - important for classification)
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    stratify=y,         # Keeps class ratios same in train/test
    random_state=42
)

# Three-way split (train/validation/test)
X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, random_state=42
)
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, random_state=42
)
# Result: 70% train, 15% val, 15% test
```

---

### Feature Scaling

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Standardization (mean=0, std=1) - most common
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # Fit on training data
X_test_scaled = scaler.transform(X_test)        # Transform test (don't refit!)

# Min-Max Normalization (scale to 0-1)
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# IMPORTANT: Always fit on training data only, then transform both train and test
# Fitting on test data would cause data leakage
```

---

### Handling Missing Values

```python
from sklearn.impute import SimpleImputer
import numpy as np

# Impute with mean (for numerical features)
imputer = SimpleImputer(strategy='mean')
X_train_imputed = imputer.fit_transform(X_train)
X_test_imputed = imputer.transform(X_test)

# Other strategies
imputer = SimpleImputer(strategy='median')   # Median (robust to outliers)
imputer = SimpleImputer(strategy='most_frequent')  # Mode (works for categorical)
imputer = SimpleImputer(strategy='constant', fill_value=0)  # Fill with constant

# For pandas DataFrames (preserves column names)
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy='mean')
df[numerical_cols] = imputer.fit_transform(df[numerical_cols])
```

---

### Encoding Categorical Variables

```python
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
import pandas as pd

# Label Encoding (for ordinal categories or target variable)
# Converts categories to integers: ['cat', 'dog', 'bird'] → [0, 1, 2]
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y)

# One-Hot Encoding (for nominal categories)
# Creates binary columns: 'color' → 'color_red', 'color_blue', 'color_green'
df_encoded = pd.get_dummies(df, columns=['color', 'size'], drop_first=True)
# drop_first=True prevents dummy variable trap (multicollinearity)

# scikit-learn OneHotEncoder (for arrays)
from sklearn.preprocessing import OneHotEncoder
encoder = OneHotEncoder(sparse=False, drop='first')
X_encoded = encoder.fit_transform(X[['category_column']])
```

---

### Classification: Logistic Regression

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Train model
model = LogisticRegression(
    random_state=42,
    max_iter=1000        # Increase if convergence warning appears
)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)
y_pred_proba = model.predict_proba(X_test)  # Get probabilities

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.3f}")
print("\nClassification Report:")
print(classification_report(y_test, y_pred))
```

---

### Classification: Random Forest

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

# Train model
model = RandomForestClassifier(
    n_estimators=100,    # Number of trees
    max_depth=10,        # Maximum depth of each tree
    min_samples_split=5, # Minimum samples to split a node
    random_state=42
)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
cm = confusion_matrix(y_test, y_pred)

print(f"Accuracy: {accuracy:.3f}")
print("\nConfusion Matrix:")
print(cm)

# Feature importance
feature_importance = pd.DataFrame({
    'feature': X_train.columns,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\nTop 10 Features:")
print(feature_importance.head(10))
```

---

### Regression: Linear Regression

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f}")
print(f"R² Score: {r2:.3f}")

# Get coefficients
coefficients = pd.DataFrame({
    'feature': X_train.columns,
    'coefficient': model.coef_
}).sort_values('coefficient', key=abs, ascending=False)

print("\nFeature Coefficients:")
print(coefficients)
```

---

### Regression: Random Forest

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

# Train model
model = RandomForestRegressor(
    n_estimators=100,
    max_depth=15,
    min_samples_split=5,
    random_state=42,
    n_jobs=-1            # Use all CPU cores
)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f}")
print(f"MAE: {mae:.2f}")
print(f"R² Score: {r2:.3f}")
```

---

### Cross-Validation

```python
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier

# Create model
model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5-fold cross-validation
cv_scores = cross_val_score(
    model, X, y,
    cv=5,                # Number of folds
    scoring='accuracy'   # Metric to use
)

print(f"CV Scores: {cv_scores}")
print(f"Mean CV Score: {cv_scores.mean():.3f} (+/- {cv_scores.std():.3f})")

# Different scoring metrics
# Classification: 'accuracy', 'precision', 'recall', 'f1', 'roc_auc'
# Regression: 'neg_mean_squared_error', 'neg_mean_absolute_error', 'r2'
```

---

### Hyperparameter Tuning with Grid Search

```python
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

# Define model
model = RandomForestClassifier(random_state=42)

# Define parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [10, 20, 30, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Grid search with cross-validation
grid_search = GridSearchCV(
    model,
    param_grid,
    cv=5,                    # 5-fold CV
    scoring='accuracy',
    n_jobs=-1,               # Use all CPU cores
    verbose=1                # Show progress
)

# Fit (this takes time!)
grid_search.fit(X_train, y_train)

# Best parameters and score
print(f"Best Parameters: {grid_search.best_params_}")
print(f"Best CV Score: {grid_search.best_score_:.3f}")

# Use best model
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test)
```

---

### Confusion Matrix Visualization

```python
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

# Generate confusion matrix
cm = confusion_matrix(y_test, y_pred)

# Plot
disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                               display_labels=model.classes_)
disp.plot(cmap='Blues', values_format='d')
plt.title('Confusion Matrix')
plt.show()

# Manual plotting with seaborn
import seaborn as sns
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
```

---

### ROC Curve and AUC

```python
from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt

# Get prediction probabilities (for positive class)
y_pred_proba = model.predict_proba(X_test)[:, 1]

# Calculate ROC curve
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
auc = roc_auc_score(y_test, y_pred_proba)

# Plot ROC curve
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {auc:.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.grid(alpha=0.3)
plt.show()

print(f"AUC Score: {auc:.3f}")
```

---

### Model Persistence (Save/Load)

```python
import joblib

# Save model
joblib.dump(model, 'my_model.pkl')

# Load model
loaded_model = joblib.load('my_model.pkl')

# Use loaded model
predictions = loaded_model.predict(X_new)

# Save multiple objects
joblib.dump({
    'model': model,
    'scaler': scaler,
    'feature_names': X_train.columns.tolist()
}, 'model_pipeline.pkl')

# Load multiple objects
pipeline = joblib.load('model_pipeline.pkl')
model = pipeline['model']
scaler = pipeline['scaler']
```

---

## TensorFlow/Keras Quick Reference

### Import TensorFlow/Keras

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
import numpy as np
```

---

### Build Sequential Model (Classification)

```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Dropout

# Binary classification model
model = Sequential([
    Dense(64, activation='relu', input_shape=(n_features,)),
    Dropout(0.3),
    Dense(32, activation='relu'),
    Dropout(0.3),
    Dense(1, activation='sigmoid')  # Binary output
])

# Multi-class classification model (3 classes)
model = Sequential([
    Dense(128, activation='relu', input_shape=(n_features,)),
    Dropout(0.4),
    Dense(64, activation='relu'),
    Dropout(0.4),
    Dense(3, activation='softmax')  # 3-class output
])

# Model summary
model.summary()
```

---

### Build Sequential Model (Regression)

```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

# Regression model
model = Sequential([
    Dense(64, activation='relu', input_shape=(n_features,)),
    Dense(32, activation='relu'),
    Dense(16, activation='relu'),
    Dense(1)  # Single output, no activation for regression
])

model.summary()
```

---

### Compile Model

```python
# Binary classification
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy', 'AUC']
)

# Multi-class classification
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',  # Use if labels are integers (0, 1, 2)
    # loss='categorical_crossentropy',       # Use if labels are one-hot encoded
    metrics=['accuracy']
)

# Regression
model.compile(
    optimizer='adam',
    loss='mse',                    # or 'mae', 'huber'
    metrics=['mae', 'mse']
)

# Custom learning rate
from tensorflow.keras.optimizers import Adam
model.compile(
    optimizer=Adam(learning_rate=0.001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)
```

---

### Train Model

```python
# Basic training
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2,    # Use 20% of training for validation
    verbose=1                 # Show progress bar
)

# Training with validation data
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_data=(X_val, y_val),
    verbose=1
)

# Training with callbacks
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

callbacks = [
    EarlyStopping(
        monitor='val_loss',
        patience=10,             # Stop after 10 epochs of no improvement
        restore_best_weights=True
    ),
    ModelCheckpoint(
        'best_model.h5',
        monitor='val_loss',
        save_best_only=True
    )
]

history = model.fit(
    X_train, y_train,
    epochs=100,
    batch_size=32,
    validation_data=(X_val, y_val),
    callbacks=callbacks,
    verbose=1
)
```

---

### Evaluate and Predict

```python
# Evaluate on test set
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {test_accuracy:.3f}")

# Make predictions
predictions = model.predict(X_test)

# Binary classification - get class labels
y_pred_proba = model.predict(X_test)
y_pred = (y_pred_proba > 0.5).astype(int)  # Threshold at 0.5

# Multi-class classification - get class labels
y_pred_proba = model.predict(X_test)
y_pred = np.argmax(y_pred_proba, axis=1)   # Get class with highest probability

# Regression - predictions are continuous values
y_pred = model.predict(X_test)
```

---

### Plot Training History

```python
import matplotlib.pyplot as plt

# Plot training & validation loss
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Loss Over Time')
plt.legend()
plt.grid(alpha=0.3)

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Accuracy Over Time')
plt.legend()
plt.grid(alpha=0.3)

plt.tight_layout()
plt.show()
```

---

### Build CNN for Image Classification

```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

# CNN for 28x28 grayscale images (e.g., MNIST)
model = Sequential([
    # Convolutional layers
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),

    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),

    Conv2D(64, (3, 3), activation='relu'),

    # Flatten and dense layers
    Flatten(),
    Dense(64, activation='relu'),
    Dropout(0.5),
    Dense(10, activation='softmax')  # 10 classes
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()
```

---

### Data Augmentation for Images

```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Define augmentation
datagen = ImageDataGenerator(
    rotation_range=20,        # Rotate up to 20 degrees
    width_shift_range=0.2,    # Shift horizontally up to 20%
    height_shift_range=0.2,   # Shift vertically up to 20%
    horizontal_flip=True,     # Flip horizontally
    zoom_range=0.2,           # Zoom up to 20%
    fill_mode='nearest'       # Fill empty pixels
)

# Fit on training data
datagen.fit(X_train)

# Train with augmented data
history = model.fit(
    datagen.flow(X_train, y_train, batch_size=32),
    epochs=50,
    validation_data=(X_val, y_val)
)
```

---

### Transfer Learning with Pre-trained Models

```python
from tensorflow.keras.applications import VGG16
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout

# Load pre-trained model (without top classification layer)
base_model = VGG16(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base model layers
base_model.trainable = False

# Add custom classification layers
model = Sequential([
    base_model,
    GlobalAveragePooling2D(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(num_classes, activation='softmax')
])

# Compile and train
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train only the top layers
history = model.fit(X_train, y_train, epochs=10, validation_data=(X_val, y_val))

# Optional: Fine-tune some base model layers
base_model.trainable = True
# Freeze all layers except last 4
for layer in base_model.layers[:-4]:
    layer.trainable = False

# Recompile with lower learning rate
model.compile(
    optimizer=Adam(learning_rate=1e-5),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Continue training
history_fine = model.fit(X_train, y_train, epochs=10, validation_data=(X_val, y_val))
```

---

### Save and Load Keras Models

```python
# Save entire model
model.save('my_model.h5')

# Load model
from tensorflow.keras.models import load_model
loaded_model = load_model('my_model.h5')

# Save weights only
model.save_weights('model_weights.h5')

# Load weights (model architecture must be defined first)
model.load_weights('model_weights.h5')
```

---

## pandas Quick Reference

### Load Data

```python
import pandas as pd

# CSV
df = pd.read_csv('data.csv')
df = pd.read_csv('data.csv', index_col=0)  # Use first column as index

# Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON
df = pd.read_json('data.json')

# SQL
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql_query("SELECT * FROM table_name", conn)

# Display first/last rows
print(df.head())      # First 5 rows
print(df.tail(10))    # Last 10 rows
```

---

### Data Inspection

```python
# Basic info
df.shape              # (rows, columns)
df.info()             # Column types, non-null counts
df.describe()         # Statistical summary of numerical columns
df.dtypes             # Data types of each column

# Check for missing values
df.isnull().sum()                 # Count nulls per column
df.isnull().sum() / len(df)       # Percentage nulls per column

# Value counts
df['column'].value_counts()                    # Frequency of each value
df['column'].value_counts(normalize=True)      # Proportions
```

---

### Handle Missing Values

```python
# Drop rows with any missing values
df_clean = df.dropna()

# Drop rows where specific column is missing
df_clean = df.dropna(subset=['column_name'])

# Drop columns with missing values
df_clean = df.dropna(axis=1)

# Fill missing values
df['column'] = df['column'].fillna(0)                    # Fill with 0
df['column'] = df['column'].fillna(df['column'].mean())  # Fill with mean
df['column'] = df['column'].fillna(method='ffill')       # Forward fill
df['column'] = df['column'].fillna(method='bfill')       # Backward fill

# Fill different columns with different values
df.fillna({
    'age': df['age'].median(),
    'income': df['income'].mean(),
    'category': 'unknown'
}, inplace=True)
```

---

### Feature Engineering

```python
# Create new column
df['total'] = df['price'] * df['quantity']

# Binning continuous variables
df['age_group'] = pd.cut(
    df['age'],
    bins=[0, 18, 35, 50, 100],
    labels=['child', 'young_adult', 'adult', 'senior']
)

# Extract datetime features
df['date'] = pd.to_datetime(df['date'])
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)

# String operations
df['first_name'] = df['full_name'].str.split().str[0]
df['email_domain'] = df['email'].str.split('@').str[1]
df['text_length'] = df['text'].str.len()

# Apply custom function
def categorize_income(income):
    if income < 30000:
        return 'low'
    elif income < 80000:
        return 'medium'
    else:
        return 'high'

df['income_category'] = df['income'].apply(categorize_income)

# Lambda function
df['price_squared'] = df['price'].apply(lambda x: x ** 2)
```

---

### Selecting and Filtering

```python
# Select single column (returns Series)
ages = df['age']

# Select multiple columns (returns DataFrame)
subset = df[['age', 'income', 'education']]

# Filter rows
young_people = df[df['age'] < 30]
high_earners = df[df['income'] > 100000]

# Multiple conditions (use & for AND, | for OR)
young_high_earners = df[(df['age'] < 30) & (df['income'] > 100000)]
target_group = df[(df['age'] < 30) | (df['income'] > 100000)]

# Filter by list of values
cities = ['New York', 'Los Angeles', 'Chicago']
df_cities = df[df['city'].isin(cities)]

# String contains
tech_jobs = df[df['job_title'].str.contains('Engineer', case=False)]
```

---

### Grouping and Aggregation

```python
# Group by single column
df.groupby('category')['sales'].mean()

# Group by multiple columns
df.groupby(['category', 'region'])['sales'].sum()

# Multiple aggregations
df.groupby('category').agg({
    'sales': ['sum', 'mean', 'count'],
    'profit': ['sum', 'mean'],
    'units': 'sum'
})

# Custom aggregation
df.groupby('category').agg({
    'sales': lambda x: x.max() - x.min(),
    'profit': 'sum'
})

# Reset index after groupby
result = df.groupby('category')['sales'].mean().reset_index()
```

---

### Sorting

```python
# Sort by single column
df_sorted = df.sort_values('age')
df_sorted = df.sort_values('age', ascending=False)  # Descending

# Sort by multiple columns
df_sorted = df.sort_values(['state', 'city', 'age'])

# Sort index
df_sorted = df.sort_index()
```

---

### Merging and Joining

```python
# Merge two DataFrames (like SQL JOIN)
merged = pd.merge(df1, df2, on='customer_id', how='inner')
# how options: 'inner', 'left', 'right', 'outer'

# Merge on multiple columns
merged = pd.merge(df1, df2, on=['customer_id', 'date'], how='left')

# Merge with different column names
merged = pd.merge(df1, df2, left_on='id', right_on='customer_id')

# Concatenate DataFrames vertically (stacking)
combined = pd.concat([df1, df2, df3], ignore_index=True)

# Concatenate horizontally (side by side)
combined = pd.concat([df1, df2], axis=1)
```

---

### Export Data

```python
# CSV
df.to_csv('output.csv', index=False)

# Excel
df.to_excel('output.xlsx', sheet_name='Data', index=False)

# JSON
df.to_json('output.json', orient='records')

# Pickle (preserves types)
df.to_pickle('data.pkl')
df_loaded = pd.read_pickle('data.pkl')
```

---

## numpy Quick Reference

### Create Arrays

```python
import numpy as np

# From list
arr = np.array([1, 2, 3, 4, 5])
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])

# Special arrays
zeros = np.zeros((3, 4))          # 3x4 array of zeros
ones = np.ones((2, 3))            # 2x3 array of ones
empty = np.empty((2, 2))          # Uninitialized 2x2 array
identity = np.eye(3)              # 3x3 identity matrix
arange = np.arange(0, 10, 2)      # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)   # 5 values from 0 to 1

# Random arrays
random = np.random.rand(3, 3)              # Uniform [0, 1)
random_int = np.random.randint(0, 10, (3, 3))  # Random integers
normal = np.random.randn(3, 3)             # Standard normal distribution
```

---

### Array Operations

```python
# Element-wise operations
arr = np.array([1, 2, 3, 4])
arr + 5          # [6, 7, 8, 9]
arr * 2          # [2, 4, 6, 8]
arr ** 2         # [1, 4, 9, 16]
np.sqrt(arr)     # Square root
np.exp(arr)      # Exponential
np.log(arr)      # Natural log

# Array with array operations
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr1 + arr2      # [5, 7, 9]
arr1 * arr2      # [4, 10, 18]

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
np.dot(A, B)     # Matrix multiplication
A @ B            # Matrix multiplication (Python 3.5+)
A.T              # Transpose
np.linalg.inv(A) # Inverse
```

---

### Array Indexing and Slicing

```python
arr = np.array([10, 20, 30, 40, 50])

# Indexing
arr[0]           # 10
arr[-1]          # 50

# Slicing
arr[1:4]         # [20, 30, 40]
arr[:3]          # [10, 20, 30]
arr[2:]          # [30, 40, 50]

# 2D arrays
arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
arr_2d[0, 0]     # 1
arr_2d[1, 2]     # 6
arr_2d[0, :]     # First row: [1, 2, 3]
arr_2d[:, 1]     # Second column: [2, 5, 8]

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3
arr[mask]        # [4, 5]
arr[arr > 3]     # [4, 5] (shorthand)
```

---

### Array Statistics

```python
arr = np.array([1, 2, 3, 4, 5])

np.mean(arr)     # 3.0
np.median(arr)   # 3.0
np.std(arr)      # Standard deviation
np.var(arr)      # Variance
np.min(arr)      # 1
np.max(arr)      # 5
np.sum(arr)      # 15
np.prod(arr)     # Product: 120

# Along axis (for 2D arrays)
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
np.mean(arr_2d, axis=0)  # Mean of each column: [2.5, 3.5, 4.5]
np.mean(arr_2d, axis=1)  # Mean of each row: [2, 5]
```

---

### Reshaping Arrays

```python
arr = np.array([1, 2, 3, 4, 5, 6])

# Reshape
arr.reshape(2, 3)        # 2x3 array
arr.reshape(3, 2)        # 3x2 array
arr.reshape(2, -1)       # 2 rows, automatic columns

# Flatten
arr_2d = np.array([[1, 2], [3, 4]])
arr_2d.flatten()         # [1, 2, 3, 4]
arr_2d.ravel()           # [1, 2, 3, 4] (faster, view if possible)

# Add dimension
arr = np.array([1, 2, 3])
arr[np.newaxis, :]       # Shape (1, 3)
arr[:, np.newaxis]       # Shape (3, 1)
```

---

## Matplotlib/Seaborn Quick Reference

### Basic Plotting

```python
import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', linewidth=2)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Sine Wave')
plt.legend()
plt.grid(alpha=0.3)
plt.show()

# Scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(x_data, y_data, alpha=0.6, s=50)
plt.xlabel('Feature')
plt.ylabel('Target')
plt.title('Feature vs Target')
plt.show()

# Multiple plots
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.plot(x1, y1)
plt.title('Plot 1')

plt.subplot(1, 3, 2)
plt.plot(x2, y2)
plt.title('Plot 2')

plt.subplot(1, 3, 3)
plt.plot(x3, y3)
plt.title('Plot 3')

plt.tight_layout()
plt.show()
```

---

### Histogram and Distribution

```python
import matplotlib.pyplot as plt

# Histogram
plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, alpha=0.7, edgecolor='black')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Distribution of Values')
plt.grid(alpha=0.3)
plt.show()

# Multiple histograms
plt.figure(figsize=(10, 6))
plt.hist(data1, bins=30, alpha=0.5, label='Group 1')
plt.hist(data2, bins=30, alpha=0.5, label='Group 2')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Comparison')
plt.legend()
plt.show()
```

---

### Confusion Matrix Heatmap

```python
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix

# Generate confusion matrix
cm = confusion_matrix(y_test, y_pred)

# Plot with seaborn
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=class_names, yticklabels=class_names)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
```

---

### ROC Curve

```python
from sklearn.metrics import roc_curve, roc_auc_score
import matplotlib.pyplot as plt

# Calculate ROC curve
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
auc = roc_auc_score(y_test, y_pred_proba)

# Plot
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, linewidth=2, label=f'ROC Curve (AUC = {auc:.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.grid(alpha=0.3)
plt.show()
```

---

### Training Loss Curves

```python
import matplotlib.pyplot as plt

# Plot training and validation loss
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Loss Over Time')
plt.legend()
plt.grid(alpha=0.3)

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Accuracy Over Time')
plt.legend()
plt.grid(alpha=0.3)

plt.tight_layout()
plt.show()
```

---

### Seaborn Statistical Plots

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Set seaborn style
sns.set_style('whitegrid')

# Box plot
plt.figure(figsize=(10, 6))
sns.boxplot(x='category', y='value', data=df)
plt.title('Value Distribution by Category')
plt.xticks(rotation=45)
plt.show()

# Violin plot
plt.figure(figsize=(10, 6))
sns.violinplot(x='category', y='value', data=df)
plt.title('Value Distribution by Category')
plt.show()

# Pair plot (scatter matrix)
sns.pairplot(df, hue='species')
plt.show()

# Correlation heatmap
plt.figure(figsize=(10, 8))
correlation = df.corr()
sns.heatmap(correlation, annot=True, fmt='.2f', cmap='coolwarm',
            square=True, linewidths=0.5)
plt.title('Feature Correlation Matrix')
plt.show()

# Count plot
plt.figure(figsize=(10, 6))
sns.countplot(x='category', data=df)
plt.title('Category Counts')
plt.xticks(rotation=45)
plt.show()
```

---

### Feature Importance Plot

```python
import matplotlib.pyplot as plt
import pandas as pd

# Get feature importances from model (e.g., Random Forest)
feature_importance = pd.DataFrame({
    'feature': feature_names,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

# Plot top 10 features
plt.figure(figsize=(10, 6))
plt.barh(feature_importance['feature'][:10], feature_importance['importance'][:10])
plt.xlabel('Importance')
plt.title('Top 10 Most Important Features')
plt.gca().invert_yaxis()
plt.show()
```

---

### Save Figures

```python
# Save with matplotlib
plt.savefig('plot.png', dpi=300, bbox_inches='tight')
plt.savefig('plot.pdf', bbox_inches='tight')  # Vector format

# Save with explicit figure
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x, y)
fig.savefig('plot.png', dpi=300, bbox_inches='tight')
```

---

## OpenAI API Quick Reference

### Basic Setup

```python
import openai
import os

# Set API key
openai.api_key = os.getenv("OPENAI_API_KEY")
# Or directly (not recommended for production)
# openai.api_key = "your-api-key-here"
```

---

### Chat Completion (GPT-4, GPT-3.5)

```python
import openai

# Basic chat completion
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is machine learning?"}
    ],
    temperature=0.7,
    max_tokens=500
)

# Extract response
answer = response['choices'][0]['message']['content']
print(answer)

# Multi-turn conversation
conversation = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is Python?"},
]

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=conversation
)

# Add assistant response to conversation
conversation.append({
    "role": "assistant",
    "content": response['choices'][0]['message']['content']
})

# Continue conversation
conversation.append({
    "role": "user",
    "content": "How do I install it?"
})

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=conversation
)
```

---

### Error Handling and Rate Limiting

```python
import openai
import time
from openai.error import RateLimitError, APIError, Timeout

def call_openai_with_retry(messages, max_retries=3):
    """Call OpenAI API with exponential backoff retry"""
    for attempt in range(max_retries):
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages,
                timeout=30  # 30 second timeout
            )
            return response

        except RateLimitError:
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt  # Exponential backoff: 1s, 2s, 4s
                print(f"Rate limit hit. Waiting {wait_time} seconds...")
                time.sleep(wait_time)
            else:
                print("Max retries reached. Rate limit still exceeded.")
                raise

        except Timeout:
            print(f"Request timed out. Attempt {attempt + 1}/{max_retries}")
            if attempt == max_retries - 1:
                raise

        except APIError as e:
            print(f"API error: {e}")
            raise

# Usage
messages = [{"role": "user", "content": "Hello!"}]
response = call_openai_with_retry(messages)
```

---

### Token Counting and Cost Management

```python
import tiktoken

def count_tokens(text, model="gpt-3.5-turbo"):
    """Count tokens in text"""
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

def estimate_cost(text, model="gpt-3.5-turbo"):
    """Estimate cost of API call"""
    tokens = count_tokens(text, model)

    # Pricing (as of 2024, check current prices)
    prices = {
        "gpt-3.5-turbo": 0.002 / 1000,  # $0.002 per 1K tokens
        "gpt-4": 0.03 / 1000             # $0.03 per 1K tokens (input)
    }

    cost = tokens * prices.get(model, 0)
    return tokens, cost

# Usage
text = "This is my prompt and it will be sent to the API"
tokens, cost = estimate_cost(text)
print(f"Tokens: {tokens}, Estimated cost: ${cost:.4f}")
```

---

## Tips for Using Quick Reference Cards

1. **Bookmark this file**: You'll reference it constantly
2. **Ctrl+F is essential**: Search for what you need
3. **Copy, don't memorize**: Understanding > memorization
4. **Modify for your data**: Examples assume clean data, yours won't be
5. **Read the comments**: They explain parameter choices
6. **Check scikit-learn docs**: For full parameter lists and details

---

**Last Updated**: CSC-114 Spring 2026

Found an error or want to add a common operation? Let Drew know.
