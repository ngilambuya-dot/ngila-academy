---
title: "Percentiles, Quartiles, and Deciles"
topic: "Statistics"
subtopic: "Positional Measures"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand what percentiles are and why they are used"
  - "Calculate quartiles (Q₁, Q₂, Q₃) for ungrouped and grouped data"
  - "Calculate deciles for grouped data"
  - "Calculate percentiles for grouped data"
  - "Interpret percentile ranks in educational contexts"
  - "Apply positional measures to real data"
tags: ["statistics", "percentiles", "quartiles", "deciles", "positional-measures"]
---

# Percentiles, Quartiles, and Deciles

## 🎯 What are Positional Measures?

**Positional measures** divide a data set into equal parts. They help us understand the relative position of a score within a distribution.

### Key Concept:
> **Positional measures tell us what percentage of scores fall below a particular value.**

---

## 📊 The Three Main Positional Measures

| Measure | Divides Data Into | Number of Parts |
|---------|-------------------|-----------------|
| **Quartiles** | 4 equal parts | 3 dividing points (Q₁, Q₂, Q₃) |
| **Deciles** | 10 equal parts | 9 dividing points (D₁, D₂, ..., D₉) |
| **Percentiles** | 100 equal parts | 99 dividing points (P₁, P₂, ..., P₉₉) |

---

## 📊 1. Quartiles

### Definition:
> **Quartiles divide a data set into four equal parts.**

### The Three Quartiles:

| Quartile | Position | Meaning |
|----------|----------|---------|
| **Q₁** | 25th percentile | 25% of data falls below |
| **Q₂** | 50th percentile (Median) | 50% of data falls below |
| **Q₃** | 75th percentile | 75% of data falls below |

### Interquartile Range (IQR):
IQR = Q₃ - Q₁

text

---

## ✍️ Quartiles for Ungrouped Data

### Steps:
1. Arrange data in ascending order
2. Find the median (Q₂)
3. Find the median of the lower half (Q₁)
4. Find the median of the upper half (Q₃)

### Example 1: Finding Quartiles (Odd n)

**Problem:** Find Q₁, Q₂, Q₃ for: 2, 4, 6, 8, 10, 12, 14

**Solution:**
Data: 2, 4, 6, 8, 10, 12, 14

Step 1: Q₂ = Median = 8 (4th value)

Step 2: Lower half: 2, 4, 6
Q₁ = 4

Step 3: Upper half: 10, 12, 14
Q₃ = 12

IQR = 12 - 4 = 8

text

**Interpretation:**
- Q₁ = 4: 25% of scores are below 4
- Q₂ = 8: 50% of scores are below 8
- Q₃ = 12: 75% of scores are below 12

---

### Example 2: Finding Quartiles (Even n)

**Problem:** Find Q₁, Q₂, Q₃ for: 3, 5, 7, 9, 11, 13

**Solution:**
Data: 3, 5, 7, 9, 11, 13

Step 1: Q₂ = Median = (7+9)/2 = 8

Step 2: Lower half: 3, 5, 7
Q₁ = 5

Step 3: Upper half: 9, 11, 13
Q₃ = 11

IQR = 11 - 5 = 6

text

---

## ✍️ Quartiles for Grouped Data

### Formula for Q₁, Q₂, Q₃:
Qₖ = L + [(kN/4 - CF) / f] × c

text

Where:
- Qₖ = the kth quartile (k = 1, 2, 3)
- L = lower class boundary of the quartile class
- N = total frequency
- CF = cumulative frequency before quartile class
- f = frequency of quartile class
- c = class width

**Position of Qₖ:** kN/4

### Example 3: Quartiles for Grouped Data

| Class | f | CF |
|-------|---|----|
| 10-14 | 3 | 3 |
| 15-19 | 5 | 8 |
| 20-24 | 7 | 15 |
| 25-29 | 5 | 20 |
| 30-34 | 3 | 23 |
| 35-39 | 2 | 25 |

**Solution:**

**Step 1: Find Q₁ (k=1)**
Position: 1 × 25 / 4 = 6.25
Q₁ class: 15-19 (CF reaches 6.25)
L = 14.5, CF = 3, f = 5, c = 5

Q₁ = 14.5 + [(6.25 - 3)/5] × 5
Q₁ = 14.5 + (3.25/5) × 5
Q₁ = 14.5 + 3.25
Q₁ = 17.75

text

**Step 2: Find Q₂ (k=2)**
Position: 2 × 25 / 4 = 12.5
Q₂ class: 20-24 (CF reaches 12.5)
L = 19.5, CF = 8, f = 7, c = 5

Q₂ = 19.5 + [(12.5 - 8)/7] × 5
Q₂ = 19.5 + (4.5/7) × 5
Q₂ = 19.5 + 3.21
Q₂ = 22.71

text

**Step 3: Find Q₃ (k=3)**
Position: 3 × 25 / 4 = 18.75
Q₃ class: 25-29 (CF reaches 18.75)
L = 24.5, CF = 15, f = 5, c = 5

Q₃ = 24.5 + [(18.75 - 15)/5] × 5
Q₃ = 24.5 + (3.75/5) × 5
Q₃ = 24.5 + 3.75
Q₃ = 28.25

text

---

## 📊 2. Deciles

### Definition:
> **Deciles divide a data set into ten equal parts.**

### Formula for Grouped Data:
Dₖ = L + [(kN/10 - CF) / f] × c

text

Where:
- Dₖ = the kth decile (k = 1, 2, ..., 9)
- L = lower class boundary of the decile class
- N = total frequency
- CF = cumulative frequency before decile class
- f = frequency of decile class
- c = class width

**Position of Dₖ:** kN/10

### Example 4: Finding D₅

Using the same data as Example 3:
Position: 5 × 25 / 10 = 12.5
D₅ class: 20-24 (CF reaches 12.5)
L = 19.5, CF = 8, f = 7, c = 5

D₅ = 19.5 + [(12.5 - 8)/7] × 5
D₅ = 19.5 + (4.5/7) × 5
D₅ = 19.5 + 3.21
D₅ = 22.71

text

**Note:** D₅ is the same as Q₂ and the median!

---

## 📊 3. Percentiles

### Definition:
> **Percentiles divide a data set into one hundred equal parts.**

### Formula for Grouped Data:
Pₖ = L + [(kN/100 - CF) / f] × c

text

Where:
- Pₖ = the kth percentile (k = 1, 2, ..., 99)
- L = lower class boundary of the percentile class
- N = total frequency
- CF = cumulative frequency before percentile class
- f = frequency of percentile class
- c = class width

**Position of Pₖ:** kN/100

---

## ✍️ Detailed Examples

### Example 5: Finding P₅₀ (Median)

Using the same data as Example 3:
Position: 50 × 25 / 100 = 12.5
P₅₀ class: 20-24 (CF reaches 12.5)
L = 19.5, CF = 8, f = 7, c = 5

P₅₀ = 19.5 + [(12.5 - 8)/7] × 5
P₅₀ = 19.5 + (4.5/7) × 5
P₅₀ = 19.5 + 3.21
P₅₀ = 22.71

text

### Example 6: Finding P₇₅ (Q₃)
Position: 75 × 25 / 100 = 18.75
P₇₅ class: 25-29 (CF reaches 18.75)
L = 24.5, CF = 15, f = 5, c = 5

P₇₅ = 24.5 + [(18.75 - 15)/5] × 5
P₇₅ = 24.5 + (3.75/5) × 5
P₇₅ = 24.5 + 3.75
P₇₅ = 28.25

text

### Example 7: Finding P₂₅ (Q₁)
Position: 25 × 25 / 100 = 6.25
P₂₅ class: 15-19 (CF reaches 6.25)
L = 14.5, CF = 3, f = 5, c = 5

P₂₅ = 14.5 + [(6.25 - 3)/5] × 5
P₂₅ = 14.5 + (3.25/5) × 5
P₂₅ = 14.5 + 3.25
P₂₅ = 17.75

text

---

## 📊 Percentile Rank

### Definition:
> **Percentile rank is the percentage of scores that fall at or below a particular score.**

### Formula:
Percentile Rank = (Number of scores below x) / N × 100%

text

### Example 8: Finding Percentile Rank

**Problem:** In a class of 30 students, 12 students scored below 70. What is the percentile rank of 70?

**Solution:**
Percentile Rank = 12/30 × 100 = 40th percentile

text

**Interpretation:** A score of 70 is at the 40th percentile (better than 40% of students).

---

## 📊 Summary Table: Positional Measures

| Measure | Divides Data Into | Number of Points | Formula |
|---------|-------------------|------------------|---------|
| **Quartiles** | 4 parts | 3 (Q₁, Q₂, Q₃) | Qₖ = L + [(kN/4 - CF)/f] × c |
| **Deciles** | 10 parts | 9 (D₁, D₂, ..., D₉) | Dₖ = L + [(kN/10 - CF)/f] × c |
| **Percentiles** | 100 parts | 99 (P₁, P₂, ..., P₉₉) | Pₖ = L + [(kN/100 - CF)/f] × c |

---

## 📊 Educational Interpretation

### Percentile Ranks in Education:

| Percentile Rank | Interpretation |
|-----------------|----------------|
| 99th | Better than 99% of learners |
| 90th | Better than 90% of learners |
| 75th | Better than 75% of learners |
| 50th | Average (Median) |
| 25th | Better than 25% of learners |
| 10th | Better than 10% of learners |

### Example:
If Mary scores at the 85th percentile:
- She performed better than 85% of learners
- Only 15% of learners scored higher than her

---

## 🎯 Practice Questions

**Question 1:** Find Q₁, Q₂, Q₃ for: 5, 8, 12, 15, 18, 22, 25

<details>
<summary>Click to reveal answer</summary>

Q₂ = 15
Lower half: 5, 8, 12 → Q₁ = 8
Upper half: 18, 22, 25 → Q₃ = 22
</details>

---

**Question 2:** What is the interquartile range if Q₁ = 10 and Q₃ = 25?

<details>
<summary>Click to reveal answer</summary>

IQR = Q₃ - Q₁ = 25 - 10 = 15
</details>

---

**Question 3:** What is the relationship between Q₂, D₅, and P₅₀?

<details>
<summary>Click to reveal answer</summary>

Q₂ = D₅ = P₅₀ = Median
</details>

---

## 📊 Summary

### Key Formulas:

| Measure | Formula |
|---------|---------|
| **Quartiles** | Qₖ = L + [(kN/4 - CF)/f] × c |
| **Deciles** | Dₖ = L + [(kN/10 - CF)/f] × c |
| **Percentiles** | Pₖ = L + [(kN/100 - CF)/f] × c |
| **IQR** | IQR = Q₃ - Q₁ |

### Key Points:

1. **Quartiles** divide data into 4 equal parts
2. **Deciles** divide data into 10 equal parts
3. **Percentiles** divide data into 100 equal parts
4. **Q₂ = D₅ = P₅₀ = Median**
5. **IQR** measures the spread of the middle 50%

---

**Great job! You've completed Percentiles, Quartiles, and Deciles!** 🎉
