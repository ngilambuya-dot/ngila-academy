---
title: "Geometric Progression - Complete Guide"
topic: "Sequences & Series"
subtopic: "Geometric Progression"
level: "Intermediate"
duration: "45 min"
learningObjectives:
  - "Understand what a geometric progression is"
  - "Derive the nth term formula of a GP"
  - "Derive the sum formula of a GP"
  - "Apply GP to compound interest problems"
  - "Use logarithms to find time in compound interest"
  - "Apply GP to real-life situations"
tags: ["sequences", "series", "geometric-progression", "compound-interest", "logarithms"]
---

# Geometric Progression - Complete Guide

## 🎯 What is a Geometric Progression?

A **Geometric Progression (GP)** is a sequence where each term is obtained by **multiplying the previous term by a constant** called the **common ratio (r)**.

### General Form:
a, ar, ar², ar³, ar⁴, ...

text

Where:
- **a** = first term
- **r** = common ratio

---

## 📊 Derivation of the nth Term Formula

### Step-by-Step Derivation:
T₁ = a
T₂ = a × r = ar
T₃ = ar × r = ar²
T₄ = ar² × r = ar³
T₅ = ar³ × r = ar⁴

text

### Pattern:
T₁ = ar⁰
T₂ = ar¹
T₃ = ar²
T₄ = ar³
T₅ = ar⁴

text

### General Formula:
Tₙ = arⁿ⁻¹

text

**Where:**
- Tₙ = nth term
- a = first term
- r = common ratio
- n = term number

---

## 📊 Derivation of the Sum Formula (Sₙ)

### Step-by-Step Derivation:
Sₙ = a + ar + ar² + ar³ + ... + arⁿ⁻¹

text

**Multiply both sides by r:**
rSₙ = ar + ar² + ar³ + ar⁴ + ... + arⁿ

text

**Subtract:**
Sₙ - rSₙ = (a + ar + ar² + ... + arⁿ⁻¹) - (ar + ar² + ar³ + ... + arⁿ)

text

**Simplify:**
Sₙ(1 - r) = a - arⁿ
Sₙ(1 - r) = a(1 - rⁿ)

text

**Therefore:**
Sₙ = a(1 - rⁿ) / (1 - r)

text

### Alternative Form:
Sₙ = a(rⁿ - 1) / (r - 1)

text

---

## 📊 Derivation of Sum to Infinity (S∞)

### Condition:
> **S∞ exists only when |r| < 1**

### Derivation:
Sₙ = a(1 - rⁿ) / (1 - r)

text

As n → ∞, rⁿ → 0 (since |r| < 1)
S∞ = a(1 - 0) / (1 - r)

text

**Therefore:**
S∞ = a / (1 - r)

text

---

## 💰 Application 1: Simple Interest (Arithmetic Progression)

### Definition:
> **Simple Interest** is calculated on the original principal only.

### Formula:
I = P × R × T

text

Where:
- I = Interest earned
- P = Principal (initial amount)
- R = Rate of interest (as a decimal)
- T = Time (in years)

### Amount after T years:
A = P(1 + RT)

text

---

### Example: Simple Interest

**Problem:** You invest KES 10,000 at 5% simple interest per year. Find the amount after 5 years.

**Solution:**
P = 10,000, R = 0.05, T = 5
A = 10,000(1 + 0.05 × 5)
A = 10,000(1 + 0.25)
A = 10,000(1.25)
A = 12,500

text

**This is an Arithmetic Progression:**
Year 0: 10,000
Year 1: 10,500
Year 2: 11,000
Year 3: 11,500
Year 4: 12,000
Year 5: 12,500

text

**Common difference (d) = 500**

---

## 💰 Application 2: Compound Interest (Geometric Progression)

### Definition:
> **Compound Interest** is calculated on the principal plus accumulated interest.

### Formula:
A = P(1 + r)ⁿ

text

Where:
- A = Final amount
- P = Principal (initial amount)
- r = Rate of interest (as a decimal)
- n = Number of compounding periods

---

### Example: Compound Interest

**Problem:** You invest KES 10,000 at 10% compound interest per year. Find the amount after 4 years.

**Solution:**
P = 10,000, r = 0.10, n = 4
A = 10,000(1 + 0.10)⁴
A = 10,000(1.10)⁴
A = 10,000 × 1.4641
A = 14,641

text

**This is a Geometric Progression:**
Year 0: 10,000
Year 1: 11,000
Year 2: 12,100
Year 3: 13,310
Year 4: 14,641

text

**Common ratio (r) = 1.10**

---

## 📊 Finding Time in Compound Interest using Logarithms

### The Formula:
A = P(1 + r)ⁿ

text

### Steps to find n (time):

**Step 1:** Divide both sides by P
A/P = (1 + r)ⁿ

text

**Step 2:** Take log of both sides
log(A/P) = log(1 + r)ⁿ

text

**Step 3:** Use the power rule of logarithms
log(A/P) = n × log(1 + r)

text

**Step 4:** Solve for n
n = log(A/P) / log(1 + r)

text

---

## ✍️ Worked Examples

### Example 1: Finding Time using Logarithms

**Problem:** How long will it take KES 5,000 to grow to KES 10,000 at 8% compound interest per year?

**Solution:**
P = 5,000, A = 10,000, r = 0.08

Step 1: A/P = 10,000/5,000 = 2

Step 2: n = log(2) / log(1.08)
n = log(2) / log(1.08)

Using calculator:
log(2) ≈ 0.3010
log(1.08) ≈ 0.0334

n = 0.3010 / 0.0334
n ≈ 9.01 years

text

**Answer:** Approximately 9 years

---

### Example 2: Finding Time

**Problem:** How long will it take KES 8,000 to grow to KES 12,000 at 6% compound interest per year?

**Solution:**
P = 8,000, A = 12,000, r = 0.06

A/P = 12,000/8,000 = 1.5

n = log(1.5) / log(1.06)
n = 0.1761 / 0.0253
n ≈ 6.96 years

text

**Answer:** Approximately 7 years

---

### Example 3: Finding Interest Rate

**Problem:** What interest rate is needed for KES 3,000 to grow to KES 5,000 in 6 years?

**Solution:**
A = P(1 + r)ⁿ
5,000 = 3,000(1 + r)⁶
5,000/3,000 = (1 + r)⁶
1.6667 = (1 + r)⁶

Take 6th root:
(1.6667)^(1/6) = 1 + r
1.089 = 1 + r
r = 0.089 = 8.9%

text

---

### Example 4: Comparing Simple and Compound Interest

**Problem:** KES 20,000 is invested at 10% for 5 years. Compare simple and compound interest.

**Solution:**

**Simple Interest:**
A = 20,000(1 + 0.10 × 5)
A = 20,000(1.50)
A = 30,000

text

**Compound Interest:**
A = 20,000(1.10)⁵
A = 20,000 × 1.6105
A = 32,210

text

**Difference:**
Compound - Simple = 32,210 - 30,000 = 2,210

text

---

## 📊 Summary: Simple vs Compound Interest

| Feature | Simple Interest | Compound Interest |
|---------|-----------------|-------------------|
| **Type** | Arithmetic Progression | Geometric Progression |
| **Formula** | A = P(1 + RT) | A = P(1 + r)ⁿ |
| **Growth** | Linear | Exponential |
| **Interest** | On principal only | On principal + interest |

---

## 🌍 Real-Life Applications

### Application 1: Savings

> Saving KES 1,000 per month is an arithmetic progression.

### Application 2: Population Growth

> Population growing at 2% per year is a GP.

### Application 3: Depreciation

> Car value decreasing by 15% per year is a GP.

---

## 🎯 Practice Questions

**Question 1:** Find the 8th term of: 3, 6, 12, 24, ...

<details>
<summary>Click to reveal answer</summary>

a = 3, r = 2
T₈ = 3(2)⁷ = 3 × 128 = 384
</details>

---

**Question 2:** Find the sum: 2 + 6 + 18 + 54 + 162

<details>
<summary>Click to reveal answer</summary>

a = 2, r = 3, n = 5
S₅ = 2(3⁵ - 1) / (3 - 1) = 2(243 - 1) / 2 = 242
</details>

---

**Question 3:** How long will it take KES 5,000 to grow to KES 8,000 at 12% compound interest?

<details>
<summary>Click to reveal answer</summary>

n = log(8000/5000) / log(1.12)
n = log(1.6) / log(1.12)
n = 0.2041 / 0.0492 = 4.15 years
</details>

---

## 📊 Summary

### GP Formulas:

| Formula | Use |
|---------|-----|
| Tₙ = arⁿ⁻¹ | nth term |
| Sₙ = a(rⁿ-1)/(r-1) | Sum of n terms |
| S∞ = a/(1-r) | Sum to infinity |
| A = P(1+r)ⁿ | Compound Interest |
| n = log(A/P)/log(1+r) | Finding time |

---

**Great job! You've completed Geometric Progression - Complete Guide!** 🎉