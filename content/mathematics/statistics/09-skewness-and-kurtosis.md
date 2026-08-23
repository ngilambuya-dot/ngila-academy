---
title: "Skewness and Kurtosis"
topic: "Statistics"
subtopic: "Distribution Shapes"
level: "Advanced"
duration: "35 min"
learningObjectives:
  - "Understand what skewness is and how to identify it"
  - "Calculate skewness using Pearson's coefficient"
  - "Understand what kurtosis is and how to identify it"
  - "Interpret skewness and kurtosis values"
  - "Apply skewness and kurtosis to real data"
  - "Understand the shapes of different distributions"
tags: ["statistics", "skewness", "kurtosis", "distribution", "shapes"]
---

# Skewness and Kurtosis

## 🎯 What is Skewness?

**Skewness** measures the asymmetry of a distribution. It tells us whether the data is concentrated on one side of the mean.

### Key Concept:
> **Skewness describes the "tilt" of a distribution.**

---

## 📊 Types of Skewness

### 1. Symmetrical Distribution (Zero Skewness)
↑
│ /‾‾‾‾‾‾‾‾‾
│ /
│ /
│ /
│ /
└────────────────────→
μ = Median = Mode

text

**Characteristics:**
- Mean = Median = Mode
- Left and right halves are mirror images
- Bell-shaped (normal distribution)

---

### 2. Positively Skewed (Right Skewed)
↑
│ /‾‾‾‾‾
│ /
│ /
│ /
│ /
└────────────────────→
Mode Median Mean

text

**Characteristics:**
- Mean > Median > Mode
- Tail extends to the right
- Many low scores, few high scores

**Example:** Income distribution (most people earn low income, few earn very high)

---

### 3. Negatively Skewed (Left Skewed)
↑
│ /‾‾‾‾‾
│ /
│ /
│ /
│ /
└────────────────────→
Mean Median Mode

text

**Characteristics:**
- Mode > Median > Mean
- Tail extends to the left
- Few low scores, many high scores

**Example:** Exam scores (most students score high, few score very low)

---

## 📊 Pearson's Coefficient of Skewness

### Formula 1: Using Mean and Median
Sk = 3(Mean - Median) / Standard Deviation

text

### Formula 2: Using Mean and Mode
Sk = (Mean - Mode) / Standard Deviation

text

### Interpretation of Skewness Values:

| Sk Value | Interpretation |
|----------|----------------|
| Sk = 0 | Symmetrical distribution |
| Sk > 0 | Positively skewed (right) |
| Sk < 0 | Negatively skewed (left) |

### Magnitude Interpretation:

| Sk Value | Degree of Skewness |
|----------|-------------------|
| 0 to 0.5 | Approximately symmetrical |
| 0.5 to 1 | Moderately skewed |
| > 1 | Highly skewed |

---

## ✍️ Worked Examples

### Example 1: Calculating Skewness

**Problem:** A distribution has Mean = 70, Median = 75, Standard Deviation = 10. Calculate skewness.

**Solution:**
Sk = 3(Mean - Median) / SD
Sk = 3(70 - 75) / 10
Sk = 3(-5) / 10
Sk = -15 / 10
Sk = -1.5

text

**Interpretation:** 
- Sk = -1.5 (negative)
- Distribution is negatively skewed (left skewed)
- Highly skewed

---

### Example 2: Calculating Skewness

**Problem:** A distribution has Mean = 50, Mode = 40, Standard Deviation = 8. Calculate skewness.

**Solution:**
Sk = (Mean - Mode) / SD
Sk = (50 - 40) / 8
Sk = 10 / 8
Sk = 1.25

text

**Interpretation:**
- Sk = 1.25 (positive)
- Distribution is positively skewed (right skewed)
- Highly skewed

---

## 📊 What is Kurtosis?

**Kurtosis** measures the "peakedness" or "flatness" of a distribution compared to a normal distribution.

### Key Concept:
> **Kurtosis describes how tall and sharp the peak is.**

---

## 📊 Types of Kurtosis

### 1. Mesokurtic (Normal)
↑
│ /‾‾‾‾‾
│ /
│ /
│ /
│ /
└────────────────→

text

**Characteristics:**
- Same as normal distribution
- Kurtosis = 3 (excess kurtosis = 0)
- Standard for comparison

---

### 2. Leptokurtic (Tall and Sharp)
↑
│ /‾‾‾‾‾‾‾‾‾
│ /
│ /
│ /
│/
└──────────────────→

text

**Characteristics:**
- Taller and narrower than normal
- Kurtosis > 3 (excess kurtosis > 0)
- Heavy tails, more outliers

**Example:** Stock market returns (frequent extreme values)

---

### 3. Platykurtic (Flat and Wide)
↑
│ /‾‾‾‾‾‾‾‾‾‾‾‾‾
│ /
│ /
│/
└────────────────────→

text

**Characteristics:**
- Flatter and wider than normal
- Kurtosis < 3 (excess kurtosis < 0)
- Light tails, fewer outliers

**Example:** Uniform distribution (flat, equal frequencies)

---

## 📊 Visual Comparison
↑
│ /‾‾‾‾‾
│ /
│ / Leptokurtic
│ / (tall)
│ /
│ /
│ / Mesokurtic
│/ (normal)
│
│ Platykurtic
│ (flat)
└──────────────────────────→

text

---

## 📊 Formula for Kurtosis

### For Sample Data:
K = Σ(x - x̄)⁴ / (n - 1)s⁴

text

### Interpretation:

| Kurtosis Value | Type |
|----------------|------|
| K = 3 | Mesokurtic (Normal) |
| K > 3 | Leptokurtic (Tall) |
| K < 3 | Platykurtic (Flat) |

### Excess Kurtosis:
Excess Kurtosis = Kurtosis - 3

text

| Excess Kurtosis | Type |
|-----------------|------|
| = 0 | Mesokurtic |
| > 0 | Leptokurtic |
| < 0 | Platykurtic |

---

## 📊 Comparison Table

| Feature | Positively Skewed | Negatively Skewed | Leptokurtic | Platykurtic |
|---------|-------------------|-------------------|-------------|-------------|
| **Shape** | Tail to the right | Tail to the left | Tall and sharp | Flat and wide |
| **Mean vs Median** | Mean > Median | Mean < Median | - | - |
| **Skewness** | > 0 | < 0 | - | - |
| **Kurtosis** | - | - | > 3 | < 3 |
| **Excess Kurtosis** | - | - | > 0 | < 0 |

---

## 🌍 Real-Life Applications

### Application 1: Education

> Exam scores are often negatively skewed (most students score well).

### Application 2: Finance

> Stock returns are often leptokurtic (many extreme values).

### Application 3: Income

> Income distribution is positively skewed (few very high earners).

### Application 4: Quality Control

> Manufacturing processes should have low kurtosis (consistent quality).

---

## 🎯 Practice Questions

**Question 1:** If Mean = 80, Median = 85, SD = 10, calculate skewness.

<details>
<summary>Click to reveal answer</summary>

Sk = 3(80-85)/10 = 3(-5)/10 = -1.5
Negatively skewed
</details>

---

**Question 2:** If Mean = 60, Mode = 50, SD = 5, calculate skewness.

<details>
<summary>Click to reveal answer</summary>

Sk = (60-50)/5 = 10/5 = 2
Positively skewed
</details>

---

**Question 3:** What does excess kurtosis of -1 indicate?

<details>
<summary>Click to reveal answer</summary>

Platykurtic (flat distribution)
</details>

---

## 📊 Summary

### Skewness:

| Type | Condition | Example |
|------|-----------|---------|
| Symmetrical | Mean = Median | Normal distribution |
| Positive | Mean > Median | Income data |
| Negative | Mean < Median | Exam scores |

### Kurtosis:

| Type | Kurtosis Value | Shape |
|------|----------------|-------|
| Mesokurtic | K = 3 | Normal |
| Leptokurtic | K > 3 | Tall and sharp |
| Platykurtic | K < 3 | Flat and wide |

### Key Formulas:

| Measure | Formula |
|---------|---------|
| Pearson's Skewness 1 | Sk = 3(Mean - Median)/SD |
| Pearson's Skewness 2 | Sk = (Mean - Mode)/SD |
| Kurtosis | K = Σ(x-x̄)⁴/(n-1)s⁴ |

---

**Great job! You've completed Skewness and Kurtosis!** 🎉