---
title: "Machine Learning Basics"
topic: "Data Science"
subtopic: "Machine Learning"
level: "Intermediate"
duration: "30 min"
learningObjectives:
  - "Understand what Machine Learning is"
  - "Differentiate between types of machine learning"
  - "Build a simple machine learning model"
  - "Evaluate model performance"
tags: ["data-science", "machine-learning", "ai", "algorithms"]
---

# Machine Learning Basics

## 🎯 What is Machine Learning?

**Machine Learning (ML)** is a subset of AI where computers learn from data without being explicitly programmed. Instead of writing rules, we show the computer examples and let it learn patterns.

### The Process:
Data → Training → Model → Predictions

text

---

## 🔑 Types of Machine Learning

### 1. Supervised Learning
Learn from labeled examples (input → output pairs)

| Type | Example | Use |
|------|---------|-----|
| **Classification** | Email spam detection | Predict category |
| **Regression** | House price prediction | Predict number |

**Examples:**
- Spam detection (email → spam/not spam)
- Price prediction (features → price)
- Image recognition (image → object)

### 2. Unsupervised Learning
Find patterns in unlabeled data

| Type | Example | Use |
|------|---------|-----|
| **Clustering** | Customer segmentation | Group similar items |
| **Dimensionality Reduction** | Feature compression | Simplify data |

**Examples:**
- Customer grouping
- Anomaly detection
- Recommender systems

### 3. Reinforcement Learning
Learn through trial and error

**Examples:**
- Game playing (chess, Go)
- Robot control
- Self-driving cars

---

## 📊 The ML Workflow

### Step-by-Step:
Data Collection
↓

Data Preparation (cleaning)
↓

Feature Engineering (select variables)
↓

Model Selection (choose algorithm)
↓

Training (learn patterns)
↓

Evaluation (test performance)
↓

Deployment (use in production)

text

---

## 💡 Simple ML Example

### Predict Student Grades

**Step 1: Import Libraries**
```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
Step 2: Create Data

python
data = {
    'hours_studied': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'attendance': [50, 60, 70, 75, 80, 85, 90, 92, 95, 98],
    'score': [55, 60, 65, 70, 75, 80, 85, 88, 92, 95]
}
df = pd.DataFrame(data)
Step 3: Prepare Data

python
X = df[['hours_studied', 'attendance']]  # Features
y = df['score']  # Target
Step 4: Split Data

python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
Step 5: Train Model

python
model = LinearRegression()
model.fit(X_train, y_train)
Step 6: Make Predictions

python
predictions = model.predict(X_test)
Step 7: Evaluate

python
print('R² score:', model.score(X_test, y_test))
print('Mean Squared Error:', mean_squared_error(y_test, predictions))
📊 Common ML Algorithms
Classification:
Algorithm	Best For
Logistic Regression	Binary classification
Decision Trees	Interpretable decisions
Random Forest	High accuracy
SVM	Complex boundaries
Regression:
Algorithm	Best For
Linear Regression	Simple relationships
Ridge/Lasso	Feature selection
Decision Trees	Non-linear relationships
Clustering:
Algorithm	Best For
K-Means	Well-separated groups
DBSCAN	Arbitrary shapes
Hierarchical	Nested clusters
📝 Real-World Applications
1. Healthcare
Disease prediction

Drug discovery

Medical imaging

2. Finance
Fraud detection

Stock prediction

Credit scoring

3. Marketing
Customer segmentation

Recommendation systems

Ad targeting

4. Tech
Voice assistants

Self-driving cars

Facial recognition

📊 Summary
Key Points:
Machine Learning learns patterns from data

Supervised = labeled data

Unsupervised = unlabeled data

Training creates the model

Testing evaluates performance

Features are input variables

🎯 Next Steps
Continue learning with:

Deep Learning

Neural Networks

Natural Language Processing

Computer Vision

Great job! You've completed Machine Learning Basics! 🎉