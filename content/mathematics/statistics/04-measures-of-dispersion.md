---
title: "Measures of Dispersion"
topic: "Statistics"
subtopic: "Dispersion"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand the concept of variability"
  - "Calculate the range for a data set"
  - "Calculate the variance for ungrouped and grouped data"
  - "Calculate the standard deviation for ungrouped and grouped data"
  - "Interpret measures of dispersion"
  - "Apply the empirical rule"
tags: ["statistics", "variance", "standard-deviation", "range", "dispersion"]
---

# Measures of Dispersion

## 🎯 What is Dispersion?

**Dispersion** (or variability) measures how spread out the data values are in a distribution.

### Key Concept:
> **Measures of dispersion tell us how much the data varies from the center.**

---

## 📊 Measures of Dispersion

| Measure | Description | Formula |
|---------|-------------|---------|
| **Range** | Highest - Lowest | R = H - L |
| **Variance** | Average squared deviation | σ² = Σ(x-μ)²/N |
| **Standard Deviation** | Square root of variance | σ = √σ² |

---

## 📊 1. Range

### Formula:
Range = Highest Value - Lowest Value

text

**Example 1: Finding Range**

**Problem:** Find the range of: 3, 7, 9, 12, 15, 18

**Solution:**
Highest = 18, Lowest = 3
Range = 18 - 3 = 15

text

**Limitations:**
- Affected by outliers
- Only uses two values

---

## 📊 2. Variance

### For Ungrouped Data:

**Population Variance:**
σ² = Σ(x - μ)² / N

text

**Sample Variance:**
s² = Σ(x - x̄)² / (n - 1)

text

**Example 2: Population Variance**

**Problem:** Find the variance of: 4, 6, 8, 10, 12

**Solution:**
Step 1: Find the mean
μ = (4+6+8+10+12)/5 = 40/5 = 8

Step 2: Find deviations and squares
x x-μ (x-μ)²
4 -4 16
6 -2 4
8 0 0
10 2 4
12 4 16
Σ = 40

Step 3: Variance
σ² = 40/5 = 8

text

---

### For Grouped Data:

**Formula:**
σ² = Σf(x - μ)² / Σf

text

**Example 3: Grouped Variance**

| Class | f | x | fx | x-μ | (x-μ)² | f(x-μ)² |
|-------|---|----|----|-----|--------|---------|
| 10-14 | 3 | 12 | 36 | -8.5 | 72.25 | 216.75 |
| 15-19 | 5 | 17 | 85 | -3.5 | 12.25 | 61.25 |
| 20-24 | 7 | 22 | 154 | 1.5 | 2.25 | 15.75 |
| 25-29 | 5 | 27 | 135 | 6.5 | 42.25 | 211.25 |
| **Total** | **20** | | **410** | | | **505** |
μ = 410/20 = 20.5
σ² = 505/20 = 25.25

text

---

## 📊 3. Standard Deviation

### Definition:
> **The standard deviation is the square root of the variance.**

**For Ungrouped Data:**
σ = √[Σ(x - μ)²/N]

text

**For Grouped Data:**
σ = √[Σf(x - μ)²/Σf]

text

**Example 4: Standard Deviation**

**Problem:** Find the standard deviation of: 4, 6, 8, 10, 12

**Solution:**
σ² = 8 (from previous example)
σ = √8 = 2.83

text

---

## 📊 The Empirical Rule (68-95-99.7 Rule)

For a normal distribution:
±1σ = 68% of data
±2σ = 95% of data
±3σ = 99.7% of data

text

### Interpretation:

| Range | Percentage |
|-------|------------|
| μ ± 1σ | 68% |
| μ ± 2σ | 95% |
| μ ± 3σ | 99.7% |

### Example:
If μ = 70 and σ = 10:
- 68% of scores are between 60 and 80
- 95% of scores are between 50 and 90
- 99.7% of scores are between 40 and 100

---

## 📊 Interpretation of Standard Deviation

| σ Value | Interpretation |
|---------|----------------|
| Small σ | Data clustered around mean (consistent) |
| Large σ | Data spread out (inconsistent) |

### Example:
Class A: Mean = 70, σ = 5 (more consistent)
Class B: Mean = 70, σ = 15 (more varied)

text

---

## 🎯 Practice Questions

**Question 1:** Find the range of: 2, 5, 8, 11, 14, 17

<details>
<summary>Click to reveal answer</summary>

Range = 17 - 2 = 15
</details>

---

**Question 2:** Find the variance of: 2, 4, 6, 8, 10

<details>
<summary>Click to reveal answer</summary>

Mean = 6
Deviations: -4, -2, 0, 2, 4
Squares: 16, 4, 0, 4, 16
Variance = 40/5 = 8
</details>

---

**Question 3:** Find the standard deviation of: 2, 4, 6, 8, 10

<details>
<summary>Click to reveal answer</summary>

σ² = 8
σ = √8 = 2.83
</details>

---

## 📊 Summary

### Key Formulas:

| Measure | Formula |
|---------|---------|
| Range | R = H - L |
| Variance (Ungrouped) | σ² = Σ(x-μ)²/N |
| Variance (Grouped) | σ² = Σf(x-μ)²/Σf |
| Standard Deviation | σ = √σ² |

---

**Great job! You've completed Measures of Dispersion!** 🎉