---
title: "Geometric Progression"
topic: "Sequences & Series"
subtopic: "Geometric Progression"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand what a geometric progression is"
  - "Identify the common ratio of a GP"
  - "Find the nth term of a GP"
  - "Calculate the sum of a GP"
  - "Apply GP to real-life situations"
tags: ["sequences", "series", "geometric-progression", "common-ratio", "sum"]
---

# Geometric Progression (GP)

## 🎯 What is a Geometric Progression?

A **Geometric Progression (GP)** is a sequence where each term is obtained by **multiplying the previous term by a constant** called the **common ratio (r)**.

### Key Concept:
> **Each term = Previous term × Common ratio**

### General Form:
a, ar, ar², ar³, ar⁴, ...

text

Where:
- **a** = first term
- **r** = common ratio

---

## 📊 Examples of GP

| Sequence | First Term (a) | Common Ratio (r) |
|----------|----------------|------------------|
| 2, 4, 8, 16, 32, ... | 2 | 2 |
| 3, 9, 27, 81, ... | 3 | 3 |
| 100, 50, 25, 12.5, ... | 100 | 1/2 |
| 5, -10, 20, -40, ... | 5 | -2 |
| 1, 1/2, 1/4, 1/8, ... | 1 | 1/2 |

---

## 📊 Finding the Common Ratio (r)

### Rule:
> **r = T₂ / T₁ = T₃ / T₂ = T₄ / T₃**

### Example:
Sequence: 2, 6, 18, 54, ...
r = 6/2 = 3
r = 18/6 = 3
r = 54/18 = 3

text

---

## 📊 The nth Term of a GP

### Formula:
Tₙ = arⁿ⁻¹

text

Where:
- Tₙ = nth term
- a = first term
- r = common ratio
- n = term number

---

## ✍️ Worked Examples

### Example 1: Finding the nth Term

**Problem:** Find the 6th term of: 2, 6, 18, 54, ...

**Solution:**
a = 2, r = 3, n = 6
T₆ = ar⁶⁻¹
T₆ = 2(3)⁵
T₆ = 2 × 243
T₆ = 486

text

---

### Example 2: Finding the First Term

**Problem:** The 4th term of a GP is 54 and the common ratio is 3. Find the first term.

**Solution:**
T₄ = ar³
54 = a(3)³
54 = 27a
a = 54/27 = 2

text

---

### Example 3: Finding the Common Ratio

**Problem:** The first term is 5 and the 4th term is 40. Find the common ratio.

**Solution:**
T₄ = ar³
40 = 5r³
r³ = 40/5 = 8
r = ∛8 = 2

text

---

### Example 4: Finding the Number of Terms

**Problem:** In a GP, a = 3, r = 2, and Tₙ = 96. Find n.

**Solution:**
Tₙ = arⁿ⁻¹
96 = 3(2)ⁿ⁻¹
32 = 2ⁿ⁻¹
2⁵ = 2ⁿ⁻¹
5 = n - 1
n = 6

text

---

## 📊 Sum of a GP (Geometric Series)

### Formula:

**When r ≠ 1:**
Sₙ = a(1 - rⁿ) / (1 - r)

text

**When r = 1:**
Sₙ = na

text

### Alternative Formula:
Sₙ = a(rⁿ - 1) / (r - 1)

text

---

## ✍️ Worked Examples

### Example 5: Sum of GP

**Problem:** Find the sum of: 2 + 6 + 18 + 54 + 162

**Solution:**
a = 2, r = 3, n = 5
S₅ = 2(3⁵ - 1) / (3 - 1)
S₅ = 2(243 - 1) / 2
S₅ = 2(242) / 2
S₅ = 242

text

---

### Example 6: Sum of GP

**Problem:** Find the sum of the first 6 terms: 3, 9, 27, ...

**Solution:**
a = 3, r = 3, n = 6
S₆ = 3(3⁶ - 1) / (3 - 1)
S₆ = 3(729 - 1) / 2
S₆ = 3(728) / 2
S₆ = 2184 / 2
S₆ = 1092

text

---

### Example 7: Sum to Infinity (Infinite GP)

**When |r| < 1:**
S∞ = a / (1 - r)

text

**Problem:** Find the sum to infinity: 100 + 50 + 25 + 12.5 + ...

**Solution:**
a = 100, r = 1/2
S∞ = 100 / (1 - 1/2)
S∞ = 100 / (1/2)
S∞ = 200

text

---

## 📊 Comparison: AP vs GP

| Feature | Arithmetic Progression | Geometric Progression |
|---------|----------------------|---------------------|
| **Operation** | Addition/Subtraction | Multiplication/Division |
| **Constant** | Common Difference (d) | Common Ratio (r) |
| **Formula** | Tₙ = a + (n-1)d | Tₙ = arⁿ⁻¹ |
| **Sum** | Sₙ = n/2[2a+(n-1)d] | Sₙ = a(rⁿ-1)/(r-1) |
| **Example** | 2, 4, 6, 8, 10 | 2, 4, 8, 16, 32 |

---

## 🌍 Real-Life Applications

### Application 1: Population Growth

> A city has 10,000 people. Population grows by 10% each year.
>
> **GP:** 10,000, 11,000, 12,100, 13,310, ...
> **a = 10,000, r = 1.1**

### Application 2: Compound Interest

> You invest $1000 at 5% compound interest per year.
>
> **GP:** 1000, 1050, 1102.5, 1157.63, ...
> **a = 1000, r = 1.05**

### Application 3: Depreciation

> A car worth $20,000 depreciates by 10% each year.
>
> **GP:** 20,000, 18,000, 16,200, 14,580, ...
> **a = 20,000, r = 0.9**

### Application 4: Half-Life

> A radioactive substance has a half-life of 4 years.
>
> **GP:** 100g, 50g, 25g, 12.5g, ...
> **a = 100, r = 1/2**

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Find the 5th term of: 3, 6, 12, 24, ...

<details>
<summary>Click to reveal answer</summary>

a = 3, r = 2
T₅ = 3(2)⁴ = 3 × 16 = 48
</details>

---

**Question 2:** Find the sum: 1 + 2 + 4 + 8 + 16

<details>
<summary>Click to reveal answer</summary>

a = 1, r = 2, n = 5
S₅ = 1(2⁵ - 1) / (2 - 1) = 31
</details>

---

### Medium Level

**Question 3:** In a GP, a = 2, r = 3, and Tₙ = 486. Find n.

<details>
<summary>Click to reveal answer</summary>

486 = 2(3)ⁿ⁻¹
243 = 3ⁿ⁻¹
3⁵ = 3ⁿ⁻¹
n = 6
</details>

---

**Question 4:** Find the sum to infinity: 50 + 25 + 12.5 + ...

<details>
<summary>Click to reveal answer</summary>

a = 50, r = 1/2
S∞ = 50 / (1 - 1/2) = 50 / (1/2) = 100
</details>

---

### Hard Level

**Question 5:** A population of 5000 bacteria doubles every hour. How many bacteria after 6 hours?

<details>
<summary>Click to reveal answer</summary>

a = 5000, r = 2, n = 7 (hour 0 to hour 6)
T₇ = 5000(2)⁶ = 5000 × 64 = 320,000 bacteria
</details>

---

## 📊 Summary

### GP Formulas:

| Formula | Use |
|---------|-----|
| Tₙ = arⁿ⁻¹ | nth term |
| Sₙ = a(rⁿ-1)/(r-1) | Sum of n terms |
| S∞ = a/(1-r) | Sum to infinity (when |r| < 1) |

### Key Terms:
a = first term
r = common ratio
n = number of terms
Tₙ = nth term
Sₙ = sum of n terms
S∞ = sum to infinity

text

---

**Great job! You've completed Geometric Progression!** 🎉