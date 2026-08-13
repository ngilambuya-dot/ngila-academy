---
title: "Matrix Multiplication"
topic: "Matrices"
subtopic: "Operations"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand the conditions for matrix multiplication"
  - "Multiply rows by columns"
  - "Calculate the product of two matrices"
  - "Understand that matrix multiplication is NOT commutative"
  - "Apply matrix multiplication to real-life problems"
tags: ["matrices", "multiplication", "row-column", "operations", "non-commutative"]
---

# Matrix Multiplication

## 🎯 What is Matrix Multiplication?

**Matrix multiplication** is NOT the same as multiplying numbers. It involves multiplying rows of the first matrix by columns of the second matrix.

### Key Concept:
> **Rows of first × Columns of second**

### Condition:
> **Number of columns in first = Number of rows in second**
If A is m × n and B is n × p,
then AB is m × p.

text

---

## 📊 The Multiplication Process

### Step-by-Step:
For A (m × n) and B (n × p):

Take row i from matrix A

Take column j from matrix B

Multiply corresponding elements

Add the products

This gives element (i,j) of the product

text

### Visual Representation:
A = [a₁₁ a₁₂] B = [b₁₁ b₁₂]
[a₂₁ a₂₂] [b₂₁ b₂₂]

AB = [(a₁₁b₁₁ + a₁₂b₂₁) (a₁₁b₁₂ + a₁₂b₂₂)]
[(a₂₁b₁₁ + a₂₂b₂₁) (a₂₁b₁₂ + a₂₂b₂₂)]

text

---

## ✍️ Worked Examples

### Example 1: 2 × 2 Multiplication

**Problem:** Multiply A × B.
A = [1 2] B = [5 6]
[3 4] [7 8]

text

**Solution:**
AB = [(1×5 + 2×7) (1×6 + 2×8)]
[(3×5 + 4×7) (3×6 + 4×8)]

AB = [(5 + 14) (6 + 16)]
[(15 + 28) (18 + 32)]

AB = [19 22]
[43 50]

text

---

### Example 2: 2 × 2 Multiplication (Different Order)

**Problem:** Multiply B × A.
A = [1 2] B = [5 6]
[3 4] [7 8]

text

**Solution:**
BA = [(5×1 + 6×3) (5×2 + 6×4)]
[(7×1 + 8×3) (7×2 + 8×4)]

BA = [(5 + 18) (10 + 24)]
[(7 + 24) (14 + 32)]

BA = [23 34]
[31 46]

text

**Important:** AB ≠ BA (Matrix multiplication is NOT commutative!)

---

### Example 3: 2 × 3 × 3 × 2

**Problem:** Multiply A × B.
A = [1 2 3] B = [1 2]
[4 5 6] [3 4]
[5 6]

text

**Solution:**
A (2×3), B (3×2)
AB will be 2×2

AB = [(1×1 + 2×3 + 3×5) (1×2 + 2×4 + 3×6)]
[(4×1 + 5×3 + 6×5) (4×2 + 5×4 + 6×6)]

AB = [(1 + 6 + 15) (2 + 8 + 18)]
[(4 + 15 + 30) (8 + 20 + 36)]

AB = [22 28]
[49 64]

text

---

### Example 4: 3 × 2 × 2 × 3

**Problem:** Multiply A × B.
A = [1 2] B = [1 2 3]
[3 4] [5 6 7]
[5 6]

text

**Solution:**
A (3×2), B (2×3)
AB will be 3×3

AB = [(1×1 + 2×5) (1×2 + 2×6) (1×3 + 2×7)]
[(3×1 + 4×5) (3×2 + 4×6) (3×3 + 4×7)]
[(5×1 + 6×5) (5×2 + 6×6) (5×3 + 6×7)]

AB = [(1 + 10) (2 + 12) (3 + 14)]
[(3 + 20) (6 + 24) (9 + 28)]
[(5 + 30) (10 + 36) (15 + 42)]

AB = [11 14 17]
[23 30 37]
[35 46 57]

text

---

### Example 5: Identity Matrix Multiplication

**Problem:** Multiply A × I.
A = [1 2] I = [1 0]
[3 4] [0 1]

text

**Solution:**
AI = [(1×1 + 2×0) (1×0 + 2×1)]
[(3×1 + 4×0) (3×0 + 4×1)]

AI = [1 2]
[3 4]

AI = A (Identity matrix leaves A unchanged)

text

---

## 📊 Properties of Matrix Multiplication

| Property | Rule |
|----------|------|
| **Non-Commutative** | AB ≠ BA |
| **Associative** | (AB)C = A(BC) |
| **Distributive** | A(B + C) = AB + AC |
| **Identity** | AI = IA = A |
| **Zero** | A0 = 0A = 0 |

---

## 🌍 Real-Life Applications

### Application 1: Transformation

> Matrices are used to rotate, scale, and translate objects in computer graphics.

### Application 2: Economics

> Input-output models use matrix multiplication.

### Application 3: Cryptography

> Matrices are used to encode and decode messages.

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Multiply A = [1  2] and B = [5  6]
                         [3  4]        [7  8]

<details>
<summary>Click to reveal answer</summary>

AB = [19  22]
     [43  50]
</details>

---

**Question 2:** Multiply A = [1  2] and B = [1  2]
                         [3  4]        [3  4]

<details>
<summary>Click to reveal answer</summary>

AB = [7  10]
     [15 22]
</details>

---

### Medium Level

**Question 3:** Multiply A = [1  2  3] and B = [1  2]
                         [4  5  6]        [3  4]
                                          [5  6]

<details>
<summary>Click to reveal answer</summary>

AB = [22  28]
     [49  64]
</details>

---

**Question 4:** Show that AB ≠ BA for A = [1  2] and B = [5  6].
                                          [3  4]        [7  8]

<details>
<summary>Click to reveal answer</summary>

AB = [19  22]  BA = [23  34]
     [43  50]       [31  46]
AB ≠ BA
</details>

---

## 📊 Summary

### Key Points:

1. **Matrix multiplication** requires columns of first = rows of second
2. **Order matters:** AB ≠ BA
3. **Method:** Multiply rows by columns, add products
4. **Identity matrix** leaves matrices unchanged
5. **Zero matrix** gives zero when multiplied

### Important Rules:
A(m×n) × B(n×p) = C(m×p)
AB ≠ BA
AI = IA = A
A0 = 0A = 0

text

---

**Great job! You've completed Matrix Multiplication!** 🎉