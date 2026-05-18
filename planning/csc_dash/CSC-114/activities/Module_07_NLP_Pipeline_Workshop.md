# Module 7 Activity: NLP Pipeline Workshop - Text Processing and Sentiment Analysis

**Duration**: 90 minutes
**Format**: Small groups (3 students)
**Materials Needed**:
- Laptop with ML environment
- Jupyter Notebook
- NLTK, spaCy, gensim libraries
- Pre-trained word embeddings (Word2Vec, GloVe)
- Twitter sentiment dataset or movie reviews

**Learning Objectives**:
- Build complete NLP preprocessing pipelines
- Understand tokenization, stemming, and lemmatization
- Work with word embeddings (Word2Vec, GloVe)
- Compare embedding approaches for sentiment analysis
- Handle text data challenges (emojis, URLs, special characters)
- Build production-ready sentiment analysis pipeline

---

## Overview

**Text is messy.** Humans write with typos, slang, emojis, sarcasm, and context that computers don't understand. Before you can run ML on text, you need to clean it, tokenize it, and convert it into numbers that models can process.

Today, you're building an NLP pipeline from raw text to sentiment predictions. You'll handle real-world messiness: tweets with hashtags, reviews with emojis, sentences with misspellings. You'll compare different text representations (Bag of Words, TF-IDF, Word2Vec, GloVe) and see which works best for sentiment analysis.

**By the end of this workshop, you'll:**
- Build a robust text preprocessing pipeline
- Tokenize text using multiple strategies
- Create and compare word embeddings
- Understand the difference between Word2Vec and GloVe
- Build a sentiment classifier that actually works on messy real-world text
- Know when to use which NLP technique

This is how Alexa, Siri, and ChatGPT start: text in, numbers out, ML in the middle.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start:**

1. **Install NLP libraries**:
   ```bash
   cd ~/Documents/CSC-114-ML
   source ml-env/bin/activate  # or ml-env\Scripts\activate (Windows)
   pip install nltk spacy gensim textblob wordcloud
   python -m spacy download en_core_web_sm
   ```

2. **Download NLTK data**:
   ```python
   import nltk
   nltk.download('punkt')
   nltk.download('stopwords')
   nltk.download('wordnet')
   nltk.download('averaged_perceptron_tagger')
   ```

3. **Pull course repo**:
   ```bash
   cd csc-114-labs
   git checkout main
   git pull origin main
   git checkout -b yourname-module07
   ```

4. **Form groups of 3** (instructor assigns):
   - **Member 1 (Preprocessor)**: Handles text cleaning
   - **Member 2 (Embedder)**: Works with word embeddings
   - **Member 3 (Modeler)**: Builds classification models
   - Everyone contributes to all parts, but each has a focus area

**Instructor Check**: Libraries installed? NLTK data downloaded? Groups formed? Let's process some text.

---

## Part 1: Text Exploration and Cleaning (20 minutes)

**Member 1 (Preprocessor) leads. Others assist.**

### Instructions

Open Jupyter: `module-07/nlp_pipeline_workshop.ipynb`

**Step 1: Load and explore raw text data**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from wordcloud import WordCloud
import re

# Sample tweets/reviews (we'll load a real dataset shortly)
sample_texts = [
    "I absolutely LOVE this product! 😍 Best purchase ever! #happy",
    "Terrible experience... worst customer service 😠 Never again!",
    "It's okay, nothing special. Average at best.",
    "OMG THIS IS AMAZING!!! 🔥🔥🔥 10/10 would recommend!!!",
    "Meh. Not worth the $$$. Save your money 💸",
    "Great quality but shipping took forever 📦",
    "I'm soooo disappointed 😢 Expected much better quality",
    "Absolutely fantastic! Can't believe how good this is! ⭐⭐⭐⭐⭐"
]

# Display with analysis
for i, text in enumerate(sample_texts, 1):
    print(f"{i}. {text}")
    print(f"   Length: {len(text)} chars, {len(text.split())} words\n")
```

**Step 2: Build text cleaning pipeline**

```python
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer, WordNetLemmatizer

# Initialize tools
stop_words = set(stopwords.words('english'))
stemmer = PorterStemmer()
lemmatizer = WordNetLemmatizer()

def clean_text(text, method='basic'):
    """
    Clean and preprocess text

    Args:
        text: Raw text string
        method: 'basic', 'keep_emoji', or 'aggressive'
    """
    # Lowercase
    text = text.lower()

    if method == 'aggressive':
        # Remove URLs
        text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
        # Remove user mentions
        text = re.sub(r'@\w+', '', text)
        # Remove hashtags
        text = re.sub(r'#\w+', '', text)
        # Remove emojis and special characters
        text = re.sub(r'[^\w\s]', '', text)
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text).strip()

    elif method == 'keep_emoji':
        # Keep emojis but remove URLs and mentions
        text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
        text = re.sub(r'@\w+', '', text)
        text = re.sub(r'\s+', ' ', text).strip()

    else:  # basic
        # Remove special characters but keep spaces
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        text = re.sub(r'\s+', ' ', text).strip()

    return text

# Test on sample texts
print("CLEANING COMPARISON:")
print("="*80)
for text in sample_texts[:3]:
    print(f"\nOriginal: {text}")
    print(f"Basic:    {clean_text(text, 'basic')}")
    print(f"Emoji:    {clean_text(text, 'keep_emoji')}")
    print(f"Aggressive: {clean_text(text, 'aggressive')}")
```

**Step 3: Tokenization strategies**

```python
def tokenize_text(text, remove_stopwords=False, use_stemming=False, use_lemmatization=False):
    """
    Tokenize text with optional preprocessing

    Returns: List of tokens
    """
    # Clean text first
    text = clean_text(text, method='basic')

    # Tokenize
    tokens = word_tokenize(text)

    # Remove stopwords
    if remove_stopwords:
        tokens = [word for word in tokens if word not in stop_words]

    # Apply stemming
    if use_stemming:
        tokens = [stemmer.stem(word) for word in tokens]

    # Apply lemmatization
    if use_lemmatization:
        tokens = [lemmatizer.lemmatize(word) for word in tokens]

    return tokens

# Compare tokenization strategies
test_sentence = "I am absolutely loving these amazing products! They're working wonderfully!"

print("TOKENIZATION COMPARISON:")
print("="*80)
print(f"Original: {test_sentence}\n")

print(f"Basic tokens: {tokenize_text(test_sentence)}")
print(f"No stopwords: {tokenize_text(test_sentence, remove_stopwords=True)}")
print(f"With stemming: {tokenize_text(test_sentence, remove_stopwords=True, use_stemming=True)}")
print(f"With lemmatization: {tokenize_text(test_sentence, remove_stopwords=True, use_lemmatization=True)}")
```

**Step 4: Load real dataset**

```python
# Load movie reviews or Twitter sentiment dataset
# Option 1: Use built-in dataset
from sklearn.datasets import fetch_20newsgroups
# OR
# Option 2: Load from CSV (instructor provides)
data = pd.read_csv('~/Documents/CSC-114-ML/datasets/twitter_sentiment.csv')

print(f"Dataset shape: {data.shape}")
print(f"\nColumns: {list(data.columns)}")
print(f"\nSample rows:")
print(data.head())

print(f"\nSentiment distribution:")
print(data['sentiment'].value_counts())

# Text length analysis
data['text_length'] = data['text'].apply(len)
data['word_count'] = data['text'].apply(lambda x: len(x.split()))

print(f"\nText statistics:")
print(data[['text_length', 'word_count']].describe())
```

**Step 5: Visualize with word clouds**

```python
# Create word clouds for positive and negative sentiments
def create_wordcloud(text_series, title):
    """Generate word cloud from text series"""
    text = ' '.join(text_series)
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)

    plt.figure(figsize=(12, 6))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.title(title, fontsize=16, fontweight='bold')
    plt.tight_layout()
    plt.show()

# Separate by sentiment
positive_texts = data[data['sentiment'] == 'positive']['text']
negative_texts = data[data['sentiment'] == 'negative']['text']

create_wordcloud(positive_texts, "Positive Sentiment - Most Common Words")
create_wordcloud(negative_texts, "Negative Sentiment - Most Common Words")
```

**Group Discussion:**
- Which cleaning method preserves the most information?
- Do emojis carry sentiment information we should keep?
- Stemming vs lemmatization: which is better for sentiment analysis?

### Expected Output

- Text cleaning pipeline handles URLs, mentions, emojis, special characters
- Tokenization produces clean word lists
- Dataset loaded (typically 10k-50k samples)
- Word clouds show clear differences between positive/negative sentiment words
- Understanding of preprocessing trade-offs

### Common Issues

**Issue**: NLTK data not downloaded
- **Fix**: Run `nltk.download('all')` or download specific packages as needed

**Issue**: Emojis become weird characters
- **Fix**: Use `encoding='utf-8'` when reading CSV files

**Issue**: Word cloud fails with "no valid tokens"
- **Fix**: Text was over-cleaned. Use less aggressive cleaning method

---

## Part 2: Bag of Words and TF-IDF (15 minutes)

**Member 2 (Embedder) leads. Others assist.**

### Instructions

**Step 1: Create Bag of Words representation**

```python
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.model_selection import train_test_split

# Prepare data
X = data['text']
y = data['sentiment'].map({'positive': 1, 'negative': 0})  # Binary labels

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")

# Bag of Words
vectorizer_bow = CountVectorizer(
    max_features=5000,  # Keep top 5000 words
    stop_words='english',
    ngram_range=(1, 2)  # Unigrams and bigrams
)

X_train_bow = vectorizer_bow.fit_transform(X_train)
X_test_bow = vectorizer_bow.transform(X_test)

print(f"\nBag of Words shape: {X_train_bow.shape}")
print(f"Vocabulary size: {len(vectorizer_bow.vocabulary_)}")

# Show most common words
word_counts = X_train_bow.sum(axis=0).A1
word_freq = [(word, word_counts[idx]) for word, idx in vectorizer_bow.vocabulary_.items()]
word_freq_sorted = sorted(word_freq, key=lambda x: x[1], reverse=True)

print("\nTop 20 most frequent words:")
for word, count in word_freq_sorted[:20]:
    print(f"  {word}: {count}")
```

**Step 2: Create TF-IDF representation**

```python
# TF-IDF (Term Frequency-Inverse Document Frequency)
vectorizer_tfidf = TfidfVectorizer(
    max_features=5000,
    stop_words='english',
    ngram_range=(1, 2)
)

X_train_tfidf = vectorizer_tfidf.fit_transform(X_train)
X_test_tfidf = vectorizer_tfidf.transform(X_test)

print(f"TF-IDF shape: {X_train_tfidf.shape}")

# Show highest TF-IDF words
feature_names = vectorizer_tfidf.get_feature_names_out()
tfidf_scores = X_train_tfidf.sum(axis=0).A1
tfidf_sorted = sorted(zip(feature_names, tfidf_scores), key=lambda x: x[1], reverse=True)

print("\nTop 20 highest TF-IDF words:")
for word, score in tfidf_sorted[:20]:
    print(f"  {word}: {score:.2f}")
```

**Step 3: Quick classification test**

```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report

# Train on Bag of Words
model_bow = MultinomialNB()
model_bow.fit(X_train_bow, y_train)
y_pred_bow = model_bow.predict(X_test_bow)
acc_bow = accuracy_score(y_test, y_pred_bow)

# Train on TF-IDF
model_tfidf = MultinomialNB()
model_tfidf.fit(X_train_tfidf, y_train)
y_pred_tfidf = model_tfidf.predict(X_test_tfidf)
acc_tfidf = accuracy_score(y_test, y_pred_tfidf)

print(f"\nBag of Words Accuracy: {acc_bow:.2%}")
print(f"TF-IDF Accuracy: {acc_tfidf:.2%}")
print(f"\nWinner: {'TF-IDF' if acc_tfidf > acc_bow else 'Bag of Words'}")
```

**Group Discussion:**
- What's the difference between BoW and TF-IDF?
- Why might TF-IDF perform better?
- What information is lost in these representations?

### Expected Output

- Bag of Words matrix: sparse, 5000 features
- TF-IDF matrix: same shape, different values
- Baseline accuracy: 75-85% (both methods)
- TF-IDF typically performs slightly better
- Understanding of count-based text representations

### Common Issues

**Issue**: Vocabulary size is huge (>50k)
- **Fix**: Use `max_features` to limit vocabulary size

**Issue**: Very low accuracy (<60%)
- **Fix**: Check that labels are correctly mapped (positive=1, negative=0)

**Issue**: Memory error with large datasets
- **Fix**: Reduce `max_features` or use smaller dataset sample

---

## Part 3: Word Embeddings - Word2Vec and GloVe (30 minutes)

**Member 2 (Embedder) continues to lead.**

### Instructions

**Step 1: Train Word2Vec on your corpus**

```python
from gensim.models import Word2Vec
from gensim.models.phrases import Phrases, Phraser

# Prepare tokenized sentences
tokenized_texts = [tokenize_text(text, remove_stopwords=True) for text in X_train]

print(f"Sample tokenized text: {tokenized_texts[0]}")

# Train Word2Vec
print("\nTraining Word2Vec...")
model_w2v = Word2Vec(
    sentences=tokenized_texts,
    vector_size=100,  # Embedding dimension
    window=5,         # Context window size
    min_count=2,      # Ignore words that appear < 2 times
    workers=4,        # Parallel processing
    epochs=10,
    sg=0              # 0 = CBOW, 1 = Skip-gram
)

print(f"Word2Vec trained!")
print(f"Vocabulary size: {len(model_w2v.wv)}")

# Test word similarity
test_words = ['good', 'bad', 'love', 'hate', 'excellent']
print("\nWord similarities:")
for word in test_words:
    if word in model_w2v.wv:
        similar_words = model_w2v.wv.most_similar(word, topn=5)
        print(f"\n'{word}' is similar to:")
        for sim_word, score in similar_words:
            print(f"  {sim_word}: {score:.3f}")
```

**Step 2: Load pre-trained GloVe embeddings**

```python
# Load GloVe (pre-trained on Wikipedia/Twitter)
# Download from: https://nlp.stanford.edu/projects/glove/
# For this lab, we'll use a smaller version

def load_glove_embeddings(glove_file, vocab_size=50000):
    """Load GloVe embeddings from file"""
    embeddings_index = {}

    with open(glove_file, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            if i >= vocab_size:
                break
            values = line.split()
            word = values[0]
            vector = np.asarray(values[1:], dtype='float32')
            embeddings_index[word] = vector

    print(f"Loaded {len(embeddings_index)} word vectors from GloVe")
    return embeddings_index

# Load GloVe (instructor provides path)
glove_path = '~/Documents/CSC-114-ML/embeddings/glove.6B.100d.txt'
glove_embeddings = load_glove_embeddings(glove_path)

# Test GloVe
test_word = 'good'
if test_word in glove_embeddings:
    print(f"\n'{test_word}' GloVe embedding (first 10 dims):")
    print(glove_embeddings[test_word][:10])
```

**Step 3: Compare Word2Vec vs GloVe**

```python
def find_similar_words_glove(word, embeddings, top_n=5):
    """Find similar words using cosine similarity"""
    if word not in embeddings:
        return []

    word_vec = embeddings[word]
    similarities = {}

    for other_word, other_vec in embeddings.items():
        if other_word != word:
            # Cosine similarity
            similarity = np.dot(word_vec, other_vec) / (np.linalg.norm(word_vec) * np.linalg.norm(other_vec))
            similarities[other_word] = similarity

    # Sort by similarity
    sorted_words = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
    return sorted_words[:top_n]

# Compare embeddings
comparison_words = ['good', 'terrible', 'love']

print("\nWORD EMBEDDING COMPARISON:")
print("="*80)
for word in comparison_words:
    print(f"\nWord: '{word}'")

    # Word2Vec
    if word in model_w2v.wv:
        w2v_similar = model_w2v.wv.most_similar(word, topn=5)
        print(f"  Word2Vec: {[w for w, _ in w2v_similar]}")

    # GloVe
    if word in glove_embeddings:
        glove_similar = find_similar_words_glove(word, glove_embeddings, top_n=5)
        print(f"  GloVe:    {[w for w, _ in glove_similar]}")
```

**Step 4: Visualize embeddings with t-SNE**

```python
from sklearn.manifold import TSNE

def plot_embeddings(model, words, title):
    """Visualize word embeddings using t-SNE"""
    # Get vectors for words
    vectors = []
    labels = []

    for word in words:
        if word in model.wv:
            vectors.append(model.wv[word])
            labels.append(word)

    vectors = np.array(vectors)

    # Reduce to 2D with t-SNE
    tsne = TSNE(n_components=2, random_state=42, perplexity=min(30, len(vectors)-1))
    vectors_2d = tsne.fit_transform(vectors)

    # Plot
    plt.figure(figsize=(12, 8))
    plt.scatter(vectors_2d[:, 0], vectors_2d[:, 1], alpha=0.7, s=100)

    for i, label in enumerate(labels):
        plt.annotate(label, (vectors_2d[i, 0], vectors_2d[i, 1]),
                    fontsize=12, alpha=0.8)

    plt.title(title, fontsize=16, fontweight='bold')
    plt.xlabel('t-SNE Dimension 1')
    plt.ylabel('t-SNE Dimension 2')
    plt.grid(alpha=0.3)
    plt.tight_layout()
    plt.show()

# Select words to visualize
sentiment_words = [
    'good', 'great', 'excellent', 'amazing', 'wonderful',
    'bad', 'terrible', 'awful', 'horrible', 'worst',
    'okay', 'average', 'decent', 'fine',
    'love', 'hate', 'like', 'dislike'
]

plot_embeddings(model_w2v, sentiment_words, "Word2Vec Embeddings - Sentiment Words")
```

**Step 5: Create document embeddings**

```python
def document_vector(tokens, model):
    """Average word vectors to create document vector"""
    vectors = [model.wv[word] for word in tokens if word in model.wv]
    if len(vectors) == 0:
        return np.zeros(model.vector_size)
    return np.mean(vectors, axis=0)

# Convert all documents to vectors
print("\nCreating document embeddings...")
X_train_w2v = np.array([document_vector(tokens, model_w2v) for tokens in tokenized_texts])
X_test_tokens = [tokenize_text(text, remove_stopwords=True) for text in X_test]
X_test_w2v = np.array([document_vector(tokens, model_w2v) for tokens in X_test_tokens])

print(f"Document embedding shape: {X_train_w2v.shape}")
```

### Expected Output

- Word2Vec trained on corpus (10k-50k vocabulary)
- GloVe embeddings loaded (50k-100k vocabulary)
- Similar words make semantic sense (good → great, excellent)
- t-SNE plot shows clustering of related words
- Document embeddings created successfully

### Common Issues

**Issue**: GloVe file not found
- **Fix**: Instructor provides or students download from Stanford NLP

**Issue**: Word2Vec finds no similar words
- **Fix**: Corpus too small or word not in vocabulary. Use pre-trained embeddings.

**Issue**: t-SNE takes forever
- **Fix**: Reduce number of words to visualize (<50)

---

## Part 4: Build Complete Sentiment Analysis Pipeline (20 minutes)

**Member 3 (Modeler) leads. All contribute.**

### Instructions

**Step 1: Train models with different representations**

```python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Train models
models = {}

# 1. TF-IDF + Logistic Regression
lr_tfidf = LogisticRegression(max_iter=1000, random_state=42)
lr_tfidf.fit(X_train_tfidf, y_train)
models['TF-IDF + LogReg'] = lr_tfidf.predict(X_test_tfidf)

# 2. Word2Vec + Random Forest
rf_w2v = RandomForestClassifier(n_estimators=100, random_state=42)
rf_w2v.fit(X_train_w2v, y_train)
models['Word2Vec + RF'] = rf_w2v.predict(X_test_w2v)

# 3. TF-IDF + SVM
svm_tfidf = SVC(kernel='linear', random_state=42)
svm_tfidf.fit(X_train_tfidf, y_train)
models['TF-IDF + SVM'] = svm_tfidf.predict(X_test_tfidf)

# Evaluate all models
results = []
for name, predictions in models.items():
    acc = accuracy_score(y_test, predictions)
    results.append({'Model': name, 'Accuracy': acc})
    print(f"\n{name}:")
    print(classification_report(y_test, predictions, target_names=['Negative', 'Positive']))

# Comparison table
results_df = pd.DataFrame(results)
results_df = results_df.sort_values('Accuracy', ascending=False).reset_index(drop=True)
results_df['Accuracy'] = results_df['Accuracy'].apply(lambda x: f"{x:.2%}")

print("\n" + "="*60)
print("MODEL COMPARISON")
print("="*60)
print(results_df.to_string(index=False))
print("="*60)
```

**Step 2: Build production pipeline**

```python
class SentimentPipeline:
    """End-to-end sentiment analysis pipeline"""

    def __init__(self, vectorizer, model):
        self.vectorizer = vectorizer
        self.model = model

    def preprocess(self, text):
        """Clean and preprocess text"""
        return clean_text(text, method='keep_emoji')

    def predict(self, text):
        """Predict sentiment for raw text"""
        # Preprocess
        cleaned = self.preprocess(text)

        # Vectorize
        features = self.vectorizer.transform([cleaned])

        # Predict
        prediction = self.model.predict(features)[0]
        probability = self.model.predict_proba(features)[0]

        return {
            'text': text,
            'cleaned': cleaned,
            'sentiment': 'Positive' if prediction == 1 else 'Negative',
            'confidence': max(probability)
        }

# Create pipeline with best model
pipeline = SentimentPipeline(vectorizer_tfidf, lr_tfidf)

# Test on new texts
test_reviews = [
    "This movie was absolutely fantastic! I loved every minute of it!",
    "Waste of time and money. Terrible acting, boring plot.",
    "It was okay, nothing special. Wouldn't watch again.",
    "OMG best thing ever!!! 🔥🔥🔥",
    "Meh 😐"
]

print("\nPIPELINE PREDICTIONS:")
print("="*80)
for review in test_reviews:
    result = pipeline.predict(review)
    print(f"\nOriginal: {result['text']}")
    print(f"Sentiment: {result['sentiment']} (confidence: {result['confidence']:.2%})")
```

**Step 3: Error analysis**

```python
# Find misclassified examples
misclassified_indices = np.where(y_pred_tfidf != y_test)[0]
print(f"\nMisclassified samples: {len(misclassified_indices)}")

print("\nSample misclassifications:")
for i in misclassified_indices[:5]:
    actual = 'Positive' if y_test.iloc[i] == 1 else 'Negative'
    predicted = 'Positive' if y_pred_tfidf[i] == 1 else 'Negative'
    print(f"\nText: {X_test.iloc[i]}")
    print(f"Actual: {actual} | Predicted: {predicted}")
```

**Group Discussion:**
- Which model/representation combination worked best?
- Why might Word2Vec underperform TF-IDF on this task?
- What kinds of texts did the model misclassify?
- How would you improve the pipeline?

### Expected Output

- Multiple models trained and compared
- Best accuracy: 80-90% (TF-IDF + Logistic Regression usually wins)
- Production pipeline that processes raw text → prediction
- Error analysis reveals difficult cases (sarcasm, neutral sentiment, mixed reviews)
- Understanding of NLP pipeline components

### Common Issues

**Issue**: Word2Vec model performs poorly (<70%)
- **Fix**: Small corpus doesn't train good embeddings. Use pre-trained embeddings or stick with TF-IDF.

**Issue**: Pipeline fails on emoji-heavy text
- **Fix**: Adjust preprocessing to handle emojis better

**Issue**: Low confidence scores across all predictions
- **Fix**: Model uncertainty is high. Consider calibration or ensemble methods.

---

## Wrap-up & Reflection (5 minutes)

### Discussion Questions

**1. Representation Trade-offs**: TF-IDF vs Word2Vec—one counts, one embeds semantics. When would you use each?

**2. The Preprocessing Dilemma**: Aggressive cleaning removes noise but loses information (emojis, capitalization, punctuation). How do you decide what to keep?

**3. Context Matters**: "This movie is not bad" vs "This movie is bad"—both have "bad" but opposite sentiments. Which representation handles negation better?

**4. Production Considerations**: You built a pipeline. What else would you need for production? (Monitoring, retraining, handling new slang...)

**5. PM Integration**: Your PM wants sentiment analysis on customer reviews. They ask, "How accurate is it?" What do you tell them beyond just "85% accurate"?

### Exit Ticket

**Submit via Canvas**:

```
1. What was your best model and accuracy?
   Model: _____________
   Accuracy: _____

2. Explain the difference between Bag of Words and Word2Vec:

3. Give an example of text your model would struggle with:

4. On a scale of 1-5, how confident are you with:
   - Text preprocessing: ___
   - Word embeddings: ___
   - NLP pipelines: ___
   - Sentiment analysis: ___

5. What NLP application would you build with these skills?
```

---

## Extension Challenges (Optional)

### Challenge 1: Deep Learning for NLP
Use LSTMs or Transformers:
```python
from tensorflow.keras.layers import Embedding, LSTM, Dense
from tensorflow.keras.models import Sequential

model = Sequential([
    Embedding(input_dim=vocab_size, output_dim=128, input_length=max_length),
    LSTM(64, dropout=0.2),
    Dense(1, activation='sigmoid')
])
```

### Challenge 2: Multi-class Sentiment
Extend to 5 classes: very negative, negative, neutral, positive, very positive

### Challenge 3: Aspect-Based Sentiment
Detect sentiment towards specific aspects: "Food was great but service was terrible"

### Challenge 4: Use BERT Embeddings
```python
from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')
```

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, library installation, group formation
- **10-30 min**: Text cleaning and preprocessing (Part 1)
- **30-45 min**: BoW and TF-IDF (Part 2)
- **45-75 min**: Word embeddings (Part 3)
- **75-95 min**: Complete pipeline and evaluation (Part 4)
- **95-100 min**: Reflection and wrap-up

### Common Struggles

**Library installation hell**: NLP libraries have many dependencies. Have backup: Google Colab notebooks with everything pre-installed.

**GloVe file size**: GloVe embeddings are huge (several GB). Provide pre-downloaded smaller versions (100d, not 300d).

**Word2Vec performance expectations**: Students expect Word2Vec to always beat TF-IDF. It doesn't on small datasets. Explain why.

**Sarcasm detection**: Models fail at sarcasm. Use this as teaching moment: NLP is hard, context matters, models have limits.

### Success Indicators

Students are on track if they:
- ✅ Build working text preprocessing pipeline
- ✅ Understand difference between count-based and embedding-based methods
- ✅ Train Word2Vec successfully
- ✅ Achieve >80% accuracy on sentiment classification
- ✅ Can deploy end-to-end prediction pipeline

Students are struggling if they:
- ❌ Can't get NLTK/spaCy working (environment issues)
- ❌ Confuse Word2Vec with Bag of Words
- ❌ Think accuracy <70% is acceptable (something's wrong)
- ❌ Don't understand why preprocessing matters

### Materials to Prepare

**Before class:**
- [ ] Test all NLP library installations on different OS
- [ ] Download and host GloVe embeddings (provide smaller 50d or 100d version)
- [ ] Prepare Twitter/review dataset (clean, balanced, ~10k samples)
- [ ] Create preprocessing cheat sheet (regex patterns, common operations)
- [ ] Have Google Colab backup with everything pre-installed
- [ ] Prepare sarcasm examples for discussion

**During class:**
- [ ] Monitor library installation—help students with errors early
- [ ] Check that Word2Vec is actually training (watch for quick finish = error)
- [ ] Circulate during error analysis—listen for insights about misclassifications
- [ ] Watch for groups where one member dominates—redistribute work
- [ ] Collect interesting misclassification examples for class discussion

**After class:**
- [ ] Note which representation worked best across groups
- [ ] Check if any group achieved >90% (exceptional—investigate their approach)
- [ ] Identify students who struggled with embeddings concept
- [ ] Survey: Did students prefer count-based or embedding-based methods?

### Teaching Philosophy Notes

**NLP is the messiest ML subdomain**. Images are pixels. Tabular data is numbers. But text? Text is humans being human: creative, sloppy, sarcastic, contextual. Embrace the mess. Show students that imperfect preprocessing is okay.

**Word embeddings are beautiful**. When students see "king - man + woman ≈ queen" for the first time, their minds explode. Make time for this. Let them play with Word2Vec, find funny analogies, discover biases in embeddings.

**Preprocessing matters more in NLP than anywhere else**. A model trained on uncleaned text will learn garbage. But over-cleaning loses signal. This trade-off is the art of NLP. Force students to confront it: should you remove emojis? Stopwords? Punctuation?

**Production NLP is different from Kaggle NLP**. In production, users type "omgggg this is amazinggggg" with 17 g's. Your pipeline needs to handle it. Real-world messiness is the lesson.

---

**Commit message template**:

```
Complete Module 07 NLP Pipeline Workshop

- Built text preprocessing pipeline with cleaning, tokenization, stemming/lemmatization
- Compared Bag of Words, TF-IDF, and Word2Vec representations
- Trained Word2Vec embeddings on corpus and loaded GloVe pre-trained embeddings
- Built sentiment analysis models (TF-IDF + LogReg achieved 86.3% accuracy)
- Created production-ready sentiment pipeline with error analysis
```
