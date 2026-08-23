---
title: "Measures of Central Tendency"
topic: "Statistics"
subtopic: "Central Tendency"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand the concept of central tendency"
  - "Calculate the mean for ungrouped and grouped data"
  - "Calculate the median for ungrouped and grouped data"
  - "Calculate the mode for ungrouped and grouped data"
  - "Interpret measures of central tendency"
  - "Choose the appropriate measure for different situations"
tags: ["statistics", "mean", "median", "mode", "central-tendency"]
---

# Measures of Central Tendency

## 🎯 What is Central Tendency?

**Central tendency** refers to a single value that represents the center or typical value of a data set. It tells us where most values tend to cluster.

### Key Concept:
> **Measures of central tendency summarize a data set with one representative value.**

---

## 📊 The Three Measures

| Measure | Definition | Best Used For |
|---------|------------|---------------|
| **Mean** | The average | Symmetrical distributions |
| **Median** | The middle value | Skewed distributions |
| **Mode** | Most frequent value | Categorical data |

---

## 📊 1. Mean (Arithmetic Average)

### For Ungrouped Data:

**Formula:**
x̄ = Σx / n

text

Where:
- x̄ = mean (read as "x bar")
- Σx = sum of all values
- n = number of values

**Example 1: Ungrouped Data**

**Problem:** Find the mean of: 5, 7, 9, 11, 13

**Solution:**
Σx = 5 + 7 + 9 + 11 + 13 = 45
n = 5
x̄ = 45/5 = 9

text

**Answer:** The mean is 9.

---

### For Grouped Data:

**Formula:**
x̄ = Σ(f × x) / Σf

text

Where:
- f = frequency
- x = midpoint of class interval
- Σf = total frequency

**Example 2: Grouped Data**

| Class Interval | f | x (midpoint) | fx |
|----------------|---|--------------|----|
| 10-14 | 3 | 12 | 36 |
| 15-19 | 5 | 17 | 85 |
| 20-24 | 7 | 22 | 154 |
| 25-29 | 5 | 27 | 135 |
| **Total** | **20** | | **410** |
x̄ = Σfx / Σf = 410/20 = 20.5

text

---

## 📊 2. Median

### For Ungrouped Data:

**Steps:**
1. Arrange data in ascending order
2. Find the middle position:
   - If n is odd: Median = value at position (n+1)/2
   - If n is even: Median = average of values at positions n/2 and (n/2 + 1)

**Example 3: Odd Number of Values**

**Problem:** Find the median of: 3, 7, 9, 12, 15

**Solution:**
n = 5 (odd)
Position = (5+1)/2 = 3rd value
Median = 9

text

**Example 4: Even Number of Values**

**Problem:** Find the median of: 3, 7, 9, 12, 15, 18

**Solution:**
n = 6 (even)
Position = n/2 = 3rd value = 9
Position + 1 = 4th value = 12
Median = (9 + 12)/2 = 10.5

text

---

### For Grouped Data:

**Formula:**
Median = L + [(N/2 - CF) / f] × c

text

Where:
- L = lower class boundary of median class
- N = total frequency
- CF = cumulative frequency before median class
- f = frequency of median class
- c = class width

**Example 5: Grouped Data**

| Class | f | CF |
|-------|---|----|
| 10-14 | 3 | 3 |
| 15-19 | 5 | 8 |
| 20-24 | 7 | 15 |
| 25-29 | 5 | 20 |
N = 20
N/2 = 10
Median class: 20-24 (where CF reaches 10)
L = 19.5, CF = 8, f = 7, c = 5

Median = 19.5 + [(10 - 8)/7] × 5
Median = 19.5 + (2/7) × 5
Median = 19.5 + 1.43
Median = 20.93

text

---

## 📊 3. Mode

### For Ungrouped Data:

> **The value that appears most frequently.**

**Example 6: Finding the Mode**

**Problem:** Find the mode of: 2, 3, 3, 5, 7, 7, 7, 9

**Solution:**
7 appears 3 times (most frequent)
Mode = 7

text

### For Grouped Data:

**Formula:**
Mode = L + [(d₁)/(d₁ + d₂)] × c

text

Where:
- L = lower class boundary of modal class
- d₁ = frequency of modal class - frequency of previous class
- d₂ = frequency of modal class - frequency of next class
- c = class width

## 📊 3. Mode

### For Ungrouped Data:

> **The mode is the value that appears most frequently.**

**Example: Finding the Mode**

**Problem:** Find the mode of: 2, 3, 3, 5, 7, 7, 7, 9

**Solution:**
7 appears 3 times (most frequent)
Mode = 7

text

### For Grouped Data:

**Formula:**
Mode = L + ( (f₁ - f₀) / (2f₁ - f₀ - f₂) ) × h

text

**Where:**
- **L** = lower class boundary of the modal class
- **f₁** = frequency of the modal class
- **f₀** = frequency of the class before the modal class
- **f₂** = frequency of the class after the modal class
- **h** = class width (class interval)

**Note:** The modal class is the class with the **highest frequency**.

---

## ✍️ Detailed Worked Example

**Problem:** Find the mode for the following grouped data:

| Marks | Frequency (f) |
|-------|---------------|
| 10-19 | 5 |
| 20-29 | 8 |
| 30-39 | 15 |
| 40-49 | 10 |
| 50-59 | 4 |

**Solution:**

**Step 1: Identify the modal class**
Highest frequency = 15
Modal class = 30-39

text

**Step 2: Identify the values needed**

| Symbol | Value | Explanation |
|--------|-------|-------------|
| **L** | 29.5 | Lower class boundary of modal class |
| **f₁** | 15 | Frequency of modal class |
| **f₀** | 8 | Frequency of class before modal class |
| **f₂** | 10 | Frequency of class after modal class |
| **h** | 10 | Class width (30-39 = 10) |

**Step 3: Apply the formula**
Mode = L + ( (f₁ - f₀) / (2f₁ - f₀ - f₂) ) × h
Mode = 29.5 + ( (15 - 8) / (2(15) - 8 - 10) ) × 10
Mode = 29.5 + ( 7 / (30 - 8 - 10) ) × 10
Mode = 29.5 + ( 7 / 12 ) × 10
Mode = 29.5 + (0.5833) × 10
Mode = 29.5 + 5.833
Mode = 35.33

text

**Answer:** The mode is approximately **35.33**

---

## 📊 Understanding the Formula Components

| Symbol | Description | Why It's Used |
|--------|-------------|---------------|
| **L** | Lower boundary of modal class | Starting point for calculation |
| **f₁** | Frequency of modal class | The highest frequency |
| **f₀** | Frequency before modal class | Shows how much frequency increases |
| **f₂** | Frequency after modal class | Shows how much frequency decreases |
| **h** | Class width | Adjusts the value to the correct scale |

### Visual Representation:
↑
f │
r │
e │
q │
u │
e │ ████████████████
n │ ██ ██
c │ ██ f₀ = 8 ██
y │ ██ ██ f₂ = 10
│ ████████████████████
│ ██ f₁ = 15 ██
│ ██ ██
└────────────────────────→
10 20 30 40 50 60
↑
Modal Class

text

---

## 📊 Comparison of Mode Formulas

| Data Type | Formula | When to Use |
|-----------|---------|-------------|
| **Ungrouped** | Most frequent value | When data is listed individually |
| **Grouped** | L + ((f₁-f₀)/(2f₁-f₀-f₂)) × h | When data is in class intervals |

---

## 🎯 Practice Questions

**Question 1:** Find the mode for the following grouped data:

| Class | f |
|-------|---|
| 0-9 | 4 |
| 10-19 | 6 |
| 20-29 | 10 |
| 30-39 | 5 |

<details>
<summary>Click to reveal answer</summary>

Modal class: 20-29
L = 19.5, f₁ = 10, f₀ = 6, f₂ = 5, h = 10

Mode = 19.5 + ((10-6)/(20-6-5)) × 10
Mode = 19.5 + (4/9) × 10
Mode = 19.5 + 4.44
Mode = 23.94
</details>

---

**Question 2:** Find the mode for: 2, 4, 4, 6, 6, 6, 8, 8

<details>
<summary>Click to reveal answer</summary>

Ungrouped data: Mode = 6 (appears 3 times)
</details>

---

## 📊 Summary: Mode

### Ungrouped Data:
Mode = Most frequent value

text

### Grouped Data:
Mode = L + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h

text

### Key Points:
- Mode is the **most frequent** value
- For grouped data, we use the **modal class** (highest frequency)
- The formula gives an **estimated** mode within the modal class
- Works best for **smooth, unimodal distributions**

---

**Great job! You've completed the Mode section!** 🎉
✅ Also Update the Practice Questions Section
Add these to the practice questions:

markdown
**Question 4:** Find the mode for the following grouped data:

| Class | f |
|-------|---|
| 10-14 | 3 |
| 15-19 | 5 |
| 20-24 | 7 |
| 25-29 | 4 |

<details>
<summary>Click to reveal answer</summary>

Modal class: 20-24
L = 19.5, f₁ = 7, f₀ = 5, f₂ = 4, h = 5

Mode = 19.5 + ((7-5)/(14-5-4)) × 5
Mode = 19.5 + (2/5) × 5
Mode = 19.5 + 2
Mode = 21.5
</details>

**Question 5:** Find the mode for: 5, 7, 8, 8, 9, 9, 9, 10

<details>
<summary>Click to reveal answer</summary>

Ungrouped data: Mode = 9 (appears 3 times)
</details>

**Example 7: Grouped Data**

| Class | f |
|-------|---|
| 10-14 | 3 |
| 15-19 | 5 |
| 20-24 | 7 |
| 25-29 | 5 |
Modal class: 20-24 (highest frequency)
L = 19.5, d₁ = 7-5 = 2, d₂ = 7-5 = 2, c = 5

Mode = 19.5 + [2/(2+2)] × 5
Mode = 19.5 + (2/4) × 5
Mode = 19.5 + 2.5
Mode = 22.0

text

---

## 📊 Relationship Between Mean, Median, Mode

### Symmetrical Distribution:
Mean = Median = Mode

text

### Positively Skewed (Right):
Mean > Median > Mode

text

### Negatively Skewed (Left):
Mode > Median > Mean

text

---

## 🎯 Practice Questions

**Question 1:** Find the mean of: 4, 8, 12, 16, 20

<details>
<summary>Click to reveal answer</summary>

Σx = 60, n = 5
Mean = 60/5 = 12
</details>

---

**Question 2:** Find the median of: 5, 8, 12, 15, 18, 21

<details>
<summary>Click to reveal answer</summary>

n = 6 (even)
Middle values: 12 and 15
Median = (12+15)/2 = 13.5
</details>

---

**Question 3:** Find the mode of: 2, 4, 4, 6, 6, 6, 8, 8

<details>
<summary>Click to reveal answer</summary>

6 appears 3 times (most frequent)
Mode = 6
</details>

---

## 📊 Summary

### Key Formulas:

| Measure | Formula |
|---------|---------|
| Mean (Ungrouped) | x̄ = Σx/n |
| Mean (Grouped) | x̄ = Σfx/Σf |
| Median (Grouped) | L + [(N/2 - CF)/f] × c |
| Mode (Grouped) | L + [d₁/(d₁+d₂)] × c |

---

**Great job! You've completed Measures of Central Tendency!** 🎉