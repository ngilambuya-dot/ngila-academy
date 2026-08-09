---
title: "Data Analysis with Python"
topic: "Data Science"
subtopic: "Python Analysis"
level: "Intermediate"
duration: "30 min"
learningObjectives:
  - "Understand Python libraries for data analysis"
  - "Load and explore data using Pandas"
  - "Create visualizations using Matplotlib"
  - "Perform basic statistical analysis"
tags: ["data-science", "python", "pandas", "analysis", "visualization"]
---

# Data Analysis with Python

## 🎯 What is Data Analysis?

**Data analysis** is the process of inspecting, cleaning, and modeling data to discover useful information and support decision-making.

---

## 🔑 Key Python Libraries

### 1. Pandas
The most popular library for data manipulation.

```python
import pandas as pd

# Load data
data = pd.read_csv('data.csv')

# View first rows
print(data.head())

# Get summary
print(data.describe())
2. NumPy
For numerical operations.

python
import numpy as np

# Create array
arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())  # 3.0
print(arr.std())   # 1.58
3. Matplotlib
For creating visualizations.

python
import matplotlib.pyplot as plt

# Create plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Simple Plot')
plt.show()
4. Seaborn
Advanced statistical visualizations.

python
import seaborn as sns

# Create heatmap
sns.heatmap(data.corr())
plt.show()
📊 Loading and Exploring Data
Example: Student Data
Create a DataFrame:

python
import pandas as pd

# Create data
data = {
    'name': ['John', 'Sarah', 'Peter', 'Jane', 'Mary'],
    'age': [25, 22, 23, 24, 21],
    'score': [85, 90, 78, 92, 88],
    'city': ['Nairobi', 'Mombasa', 'Kisumu', 'Nairobi', 'Mombasa']
}

df = pd.DataFrame(data)
print(df)
Output:

text
   name  age  score     city
0  John   25     85  Nairobi
1 Sarah   22     90  Mombasa
2 Peter   23     78   Kisumu
3  Jane   24     92  Nairobi
4  Mary   21     88  Mombasa
💡 Data Exploration
Basic Information:
python
# Data types
print(df.dtypes)

# Summary statistics
print(df.describe())

# Count unique values
print(df['city'].value_counts())
Filtering Data:
python
# Filter by score > 80
high_scores = df[df['score'] > 80]
print(high_scores)

# Filter by city
nairobi_students = df[df['city'] == 'Nairobi']
print(nairobi_students)
Grouping Data:
python
# Average score by city
avg_by_city = df.groupby('city')['score'].mean()
print(avg_by_city)

# Count by city
count_by_city = df.groupby('city')['name'].count()
print(count_by_city)
📊 Visualization Examples
1. Bar Chart:
python
import matplotlib.pyplot as plt

# Bar chart of scores
plt.bar(df['name'], df['score'])
plt.xlabel('Students')
plt.ylabel('Score')
plt.title('Student Scores')
plt.show()
2. Histogram:
python
# Histogram of ages
plt.hist(df['age'], bins=5)
plt.xlabel('Age')
plt.ylabel('Count')
plt.title('Age Distribution')
plt.show()
3. Scatter Plot:
python
# Scatter plot
plt.scatter(df['age'], df['score'])
plt.xlabel('Age')
plt.ylabel('Score')
plt.title('Age vs Score')
plt.show()
📝 Practical Examples
Example 1: Calculate Average Scores
python
import pandas as pd

# Create data
scores = {'student': ['John', 'Sarah', 'Peter', 'Jane'],
          'math': [85, 90, 78, 92],
          'science': [88, 85, 80, 89],
          'english': [82, 88, 75, 91]}

df = pd.DataFrame(scores)

# Add average column
df['average'] = df[['math', 'science', 'english']].mean(axis=1)

print(df)
Output:

text
  student  math  science  english  average
0    John    85       88       82     85.0
1   Sarah    90       85       88     87.7
2   Peter    78       80       75     77.7
3    Jane    92       89       91     90.7
Example 2: Find Top Performers
python
# Sort by average
top_students = df.sort_values('average', ascending=False)
print(top_students)

# Get top 2
top_2 = top_students.head(2)
print('Top 2 Students:')
print(top_2[['student', 'average']])
Example 3: Data Cleaning
python
# Check for missing values
print(df.isnull().sum())

# Fill missing values
df.fillna(0, inplace=True)

# Remove duplicates
df.drop_duplicates(inplace=True)
📊 Summary
Key Points:
Pandas is the main library for data analysis

DataFrames store and manipulate data

Visualizations help understand data

Groupby aggregates data by categories

Statistical analysis finds patterns

Great job! You've completed Data Analysis with Python! 🎉