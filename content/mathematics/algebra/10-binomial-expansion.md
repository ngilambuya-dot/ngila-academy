---
title: "Binomial Expansion"
topic: "Algebra"
subtopic: "Binomial Theorem"
level: "Advanced"
duration: "35 min"
learningObjectives:
  - "Understand the Binomial Theorem"
  - "Use Pascal's Triangle to expand binomials"
  - "Find specific terms in binomial expansions"
  - "Apply binomial expansion to real-world problems"
tags: ["algebra", "binomial", "expansion", "theorem", "Pascal"]
---

# Binomial Expansion

## 🎯 What is Binomial Expansion?

**Binomial expansion** is the process of expanding expressions raised to a power, where the expression has two terms (a binomial).

### The General Form:
(a + b)ⁿ

text

### Examples:
- `(x + 2)²`
- `(x - 3)³`
- `(2x + 1)⁴`

---

## 📚 Pascal's Triangle

Pascal's Triangle gives the coefficients for binomial expansions.

### How to Build Pascal's Triangle:
Row 0: 1
Row 1: 1 1
Row 2: 1 2 1
Row 3: 1 3 3 1
Row 4: 1 4 6 4 1
Row 5: 1 5 10 10 5 1
Row 6: 1 6 15 20 15 6 1

text

### The Rule:
Each number is the sum of the two numbers directly above it.

---

## 🔑 The Binomial Theorem

### Formula:
(a + b)ⁿ = Σ(r=0 to n) C(n,r) · aⁿ⁻ʳ · bʳ

text

Where `C(n,r)` is the combination:
C(n,r) = n! / (r! · (n-r)!)

text

### For (a + b)ⁿ:
(a + b)ⁿ = C(n,0)aⁿ + C(n,1)aⁿ⁻¹b + C(n,2)aⁿ⁻²b² + ... + C(n,n)bⁿ

text

---

## ✍️ Expanding Using Pascal's Triangle

### Example 1: (a + b)²

**Solution:**
Use Row 2: `1, 2, 1`
(a + b)² = 1·a² + 2·a¹·b¹ + 1·b²
(a + b)² = a² + 2ab + b²

text

---

### Example 2: (a + b)³

**Solution:**
Use Row 3: `1, 3, 3, 1`
(a + b)³ = 1·a³ + 3·a²·b + 3·a·b² + 1·b³
(a + b)³ = a³ + 3a²b + 3ab² + b³

text

---

### Example 3: (a + b)⁴

**Solution:**
Use Row 4: `1, 4, 6, 4, 1`
(a + b)⁴ = 1·a⁴ + 4·a³·b + 6·a²·b² + 4·a·b³ + 1·b⁴
(a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴

text

---

### Example 4: (x + 2)³

**Solution:**
Use Row 3: `1, 3, 3, 1`
(x + 2)³ = 1·x³ + 3·x²·2 + 3·x·2² + 1·2³
(x + 2)³ = x³ + 6x² + 12x + 8

text

---

### Example 5: (2x - 1)³

**Solution:**
Use Row 3: `1, 3, 3, 1`
(2x - 1)³ = 1·(2x)³ + 3·(2x)²·(-1) + 3·(2x)·(-1)² + 1·(-1)³
(2x - 1)³ = 8x³ + 3(4x²)(-1) + 3(2x)(1) - 1
(2x - 1)³ = 8x³ - 12x² + 6x - 1

text

---

### Example 6: (x + 3)⁴

**Solution:**
Use Row 4: `1, 4, 6, 4, 1`
(x + 3)⁴ = x⁴ + 4x³(3) + 6x²(3)² + 4x(3)³ + (3)⁴
(x + 3)⁴ = x⁴ + 12x³ + 54x² + 108x + 81

text

---

### Example 7: (x - 2)⁵

**Solution:**
Use Row 5: `1, 5, 10, 10, 5, 1`
(x - 2)⁵ = x⁵ + 5x⁴(-2) + 10x³(-2)² + 10x²(-2)³ + 5x(-2)⁴ + (-2)⁵
(x - 2)⁵ = x⁵ - 10x⁴ + 40x³ - 80x² + 80x - 32

text

---

## 📝 Finding Specific Terms

### The Formula for the (r+1)th Term:
T(r+1) = C(n,r) · aⁿ⁻ʳ · bʳ

text

### Example 8: Finding a Specific Term

**Problem:** Find the 4th term of `(x + 2)⁵`

**Solution:**
- n = 5, r = 3 (since 4th term, r = 3)
- T₄ = C(5,3) · x⁵⁻³ · 2³
- C(5,3) = 10
- T₄ = 10 · x² · 8
- T₄ = 80x²

---

### Example 9: Finding the Middle Term

**Problem:** Find the middle term of `(x + 3)⁴`

**Solution:**
- n = 4, middle term is r = 2
- T₃ = C(4,2) · x⁴⁻² · 3²
- C(4,2) = 6
- T₃ = 6 · x² · 9
- T₃ = 54x²

---

### Example 10: Term with No x

**Problem:** Find the term with no x in `(x² + 2/x)⁶`

**Solution:**
- General term: T(r+1) = C(6,r) · (x²)⁶⁻ʳ · (2/x)ʳ
- T(r+1) = C(6,r) · x¹²⁻²ʳ · 2ʳ · x⁻ʳ
- T(r+1) = C(6,r) · 2ʳ · x¹²⁻³ʳ
- For no x: 12 - 3r = 0 → r = 4
- T₅ = C(6,4) · 2⁴ · x⁰
- T₅ = 15 · 16 = 240

---

## 🌍 Real-Life Applications

### Application 1: Compound Interest

> Formula: A = P(1 + r)ⁿ
> This is a binomial expansion with a = 1, b = r

### Application 2: Probability

> Coin toss probability: (H + T)ⁿ
> Gives all possible outcomes

### Application 3: Business

> Profit calculation: (1 + r)ⁿ
> Used in growth calculations

---

## 📊 Patterns in Binomial Expansion

### Pattern Summary:

| n | Expansion | Pattern |
|---|-----------|---------|
| 0 | (a+b)⁰ = 1 | [1] |
| 1 | (a+b)¹ = a + b | [1,1] |
| 2 | (a+b)² = a² + 2ab + b² | [1,2,1] |
| 3 | (a+b)³ = a³ + 3a²b + 3ab² + b³ | [1,3,3,1] |
| 4 | (a+b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ | [1,4,6,4,1] |

### Observations:
1. Coefficients from Pascal's Triangle
2. Exponents of a decrease from n to 0
3. Exponents of b increase from 0 to n
4. Sum of exponents in each term = n

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Expand `(x + 2)²`

<details>
<summary>Click to reveal answer</summary>
(x + 2)² = x² + 4x + 4

text
</details>

---

**Question 2:** Expand `(x - 1)³`

<details>
<summary>Click to reveal answer</summary>
(x - 1)³ = x³ - 3x² + 3x - 1

text
</details>

---

**Question 3:** Expand `(2x + 1)²`

<details>
<summary>Click to reveal answer</summary>
(2x + 1)² = 4x² + 4x + 1

text
</details>

---

### Medium Level

**Question 4:** Expand `(x + 3)⁴`

<details>
<summary>Click to reveal answer</summary>
(x + 3)⁴ = x⁴ + 12x³ + 54x² + 108x + 81

text
</details>

---

**Question 5:** Expand `(2x - 3)³`

<details>
<summary>Click to reveal answer</summary>
(2x - 3)³ = 8x³ - 36x² + 54x - 27

text
</details>

---

**Question 6:** Find the 3rd term of `(x + 2)⁵`

<details>
<summary>Click to reveal answer</summary>
T₃ = C(5,2) · x³ · 2² = 10 · x³ · 4 = 40x³

text
</details>

---

### Hard Level

**Question 7:** Expand `(x² + 1/x)⁴`

<details>
<summary>Click to reveal answer</summary>
= x⁸ + 4x⁵ + 6x² + 4/x + 1/x⁴

text
</details>

---

**Question 8:** Find the coefficient of x³ in `(2x + 1)⁵`

<details>
<summary>Click to reveal answer</summary>
T₃ = C(5,2) · (2x)³ · 1²
T₃ = 10 · 8x³
T₃ = 80x³

text
**Answer:** 80
</details>

---

## 🚨 Common Mistakes

### Mistake 1: Forgetting the Coefficients

| ❌ WRONG | ✅ CORRECT |
|----------|-----------|
| `(x + y)² = x² + y²` | `(x + y)² = x² + 2xy + y²` |

---

### Mistake 2: Sign Errors with Negative Terms

| ❌ WRONG | ✅ CORRECT |
|----------|-----------|
| `(x - 2)² = x² - 4x + 4` | `(x - 2)² = x² - 4x + 4` |

**Remember:** (-2)² = +4, not -4

---

### Mistake 3: Wrong Pascal's Row

Always use the correct row number (n) for the exponent.

---

## 📊 Summary

### Binomial Expansion Steps:
1. Identify n (exponent)
2. Get coefficients from Pascal's Triangle row n
3. Write terms: coefficients × aⁿ⁻ʳ × bʳ
4. Simplify each term

### Key Formulas:
(a + b)ⁿ = Σ C(n,r) · aⁿ⁻ʳ · bʳ
T(r+1) = C(n,r) · aⁿ⁻ʳ · bʳ
C(n,r) = n! / (r! · (n-r)!)

text

### Pascal's Triangle:
Row 0: 1
Row 1: 1 1
Row 2: 1 2 1
Row 3: 1 3 3 1
Row 4: 1 4 6 4 1
Row 5: 1 5 10 10 5 1

text

---

## 🎯 Next Steps

Continue to: **[Algebra Review and Practice](./11-algebra-review.md)**

---

**Great job mastering binomial expansion!** 🎉