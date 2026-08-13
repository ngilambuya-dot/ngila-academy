---
title: "Determinant of a Matrix"
topic: "Matrices"
subtopic: "Determinants"
level: "Intermediate"
duration: "30 min"
learningObjectives:
  - "Understand what a determinant is"
  - "Calculate the determinant of a 2×2 matrix"
  - "Calculate the determinant of a 3×3 matrix"
  - "Understand the properties of determinants"
  - "Apply determinants to real-life problems"
tags: ["matrices", "determinant", "2x2", "3x3", "properties"]
---

# Determinant of a Matrix

## 🎯 What is a Determinant?

The **determinant** is a special number that can be calculated from a **square matrix**. It is denoted by det(A) or |A|.

### Key Concept:
> **A determinant is a scalar value that summarizes certain properties of a matrix.**

### Notation:
A = [a b] |A| = a d - b c
[c d]

text

---

## 📊 Determinant of a 2×2 Matrix

### Formula:
If A = [a b]
[c d]

Then det(A) = ad - bc

text

### Mnemonic:
> **Multiply the diagonal, subtract the anti-diagonal.**
┌─────┐
│ a b │
│ c d │
└─────┘
det = a×d - b×c

text

---

## ✍️ Worked Examples

### Example 1: 2×2 Determinant

**Problem:** Find the determinant of A = [2  3]
                                          [4  5]

**Solution:**
det(A) = (2)(5) - (3)(4)
det(A) = 10 - 12
det(A) = -2

text

---

### Example 2: 2×2 Determinant

**Problem:** Find the determinant of A = [1  2]
                                          [3  4]

**Solution:**
det(A) = (1)(4) - (2)(3)
det(A) = 4 - 6
det(A) = -2

text

---

### Example 3: 2×2 Determinant

**Problem:** Find the determinant of A = [3  -1]
                                          [2   5]

**Solution:**
det(A) = (3)(5) - (-1)(2)
det(A) = 15 + 2
det(A) = 17

text

---

## 📊 Determinant of a 3×3 Matrix

### Formula:

For matrix A = [a  b  c]
                [d  e  f]
                [g  h  i]

### Expansion Method:
det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)

text

### Visual Pattern:
┌─────┬─────┬─────┐
│ a │ b │ c │
├─────┼─────┼─────┤
│ d │ e │ f │
├─────┼─────┼─────┤
│ g │ h │ i │
└─────┴─────┴─────┘

det = aei + bfg + cdh - ceg - bdi - afh

text

---

## ✍️ Worked Examples

### Example 4: 3×3 Determinant

**Problem:** Find the determinant of A = [1  2  3]
                                          [4  5  6]
                                          [7  8  9]

**Solution:**
Using expansion:
det(A) = 1(5×9 - 6×8) - 2(4×9 - 6×7) + 3(4×8 - 5×7)
det(A) = 1(45 - 48) - 2(36 - 42) + 3(32 - 35)
det(A) = 1(-3) - 2(-6) + 3(-3)
det(A) = -3 + 12 - 9
det(A) = 0

text

---

### Example 5: 3×3 Determinant

**Problem:** Find the determinant of A = [2  1  3]
                                          [0  4  5]
                                          [1  2  6]

**Solution:**
det(A) = 2(4×6 - 5×2) - 1(0×6 - 5×1) + 3(0×2 - 4×1)
det(A) = 2(24 - 10) - 1(0 - 5) + 3(0 - 4)
det(A) = 2(14) - (-5) + 3(-4)
det(A) = 28 + 5 - 12
det(A) = 21

text

---

## 📊 Properties of Determinants

### Important Properties:

| Property | Rule | Example |
|----------|------|---------|
| **Identity** | det(I) = 1 | - |
| **Zero Row/Column** | det(A) = 0 | - |
| **Row Swap** | det changes sign | - |
| **Scalar Multiplication** | det(kA) = kⁿdet(A) | - |
| **Transpose** | det(Aᵀ) = det(A) | - |
| **Product** | det(AB) = det(A)det(B) | - |

---

### Example 6: Properties

**Problem:** If det(A) = 5, find det(2A) for a 2×2 matrix.

**Solution:**
det(2A) = 2² × det(A) = 4 × 5 = 20

text

---

## 🌍 Real-Life Applications

### Application 1: Systems of Equations

> Determinants help determine if a system has a unique solution.

### Application 2: Area Calculation

> Determinants can calculate the area of parallelograms.

### Application 3: Transformations

> Determinants show how area changes under transformation.

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Find det(A) for A = [3  4]
                                   [5  6]

<details>
<summary>Click to reveal answer</summary>

det(A) = 3(6) - 4(5) = 18 - 20 = -2
</details>

---

**Question 2:** Find det(A) for A = [-1  2]
                                   [ 3  4]

<details>
<summary>Click to reveal answer</summary>

det(A) = -1(4) - 2(3) = -4 - 6 = -10
</details>

---

### Medium Level

**Question 3:** Find det(A) for A = [1  2  3]
                                   [0  1  4]
                                   [5  6  0]

<details>
<summary>Click to reveal answer</summary>

det(A) = 1(1×0 - 4×6) - 2(0×0 - 4×5) + 3(0×6 - 1×5)
det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5)
det(A) = -24 - 2(-20) + 3(-5)
det(A) = -24 + 40 - 15 = 1
</details>

---

## 📊 Summary

### Key Formulas:

| Matrix | Determinant Formula |
|--------|-------------------|
| 2×2 | det(A) = ad - bc |
| 3×3 | det(A) = aei + bfg + cdh - ceg - bdi - afh |

### Important Rules:
det(A) = 0 means matrix is singular (no inverse)
det(I) = 1
det(Aᵀ) = det(A)
det(AB) = det(A)det(B)

text

---

**Great job! You've completed Determinant of a Matrix!** 🎉