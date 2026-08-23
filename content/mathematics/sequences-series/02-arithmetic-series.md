---
title: "Arithmetic Series - Complete Guide"
topic: "Sequences & Series"
subtopic: "Arithmetic Series"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand what an arithmetic series is"
  - "Derive the nth term formula of an AP"
  - "Derive the sum formula of an AP"
  - "Calculate the sum of an arithmetic series"
  - "Apply AP to real-life problems"
tags: ["sequences", "series", "arithmetic-series", "derivations", "sum"]
---

# Arithmetic Series - Complete Guide

## 🎯 What is an Arithmetic Series?

An **arithmetic series** is the sum of the terms of an arithmetic progression.

### Example:
Sequence: 2, 4, 6, 8, 10
Series: 2 + 4 + 6 + 8 + 10 = 30

text

---

## 📊 Derivation of the nth Term Formula (Tₙ = a + (n-1)d)

### Step-by-Step Derivation:

**Definition:** In an AP, each term is obtained by adding a **common difference (d)** to the previous term.

**Building the sequence:**
T₁ = a [First term]
T₂ = a + d [Add d once]
T₃ = (a + d) + d = a + 2d [Add d twice]
T₄ = (a + 2d) + d = a + 3d [Add d three times]
T₅ = (a + 3d) + d = a + 4d [Add d four times]

text

**Observing the Pattern:**

| Term | Expression | Number of d's |
|------|------------|---------------|
| T₁ | a | 0 |
| T₂ | a + d | 1 |
| T₃ | a + 2d | 2 |
| T₄ | a + 3d | 3 |
| T₅ | a + 4d | 4 |
| Tₙ | a + (n-1)d | n-1 |

**Therefore:**
Tₙ = a + (n-1)d

text

**Explanation:** To get the nth term, we start with the first term (a) and add the common difference (d) exactly (n-1) times.

---

## 📊 Derivation of the Sum Formula (Sₙ = n/2[2a + (n-1)d])

### Step-by-Step Derivation:

**Step 1:** Write the sum of n terms in forward order.
Sₙ = a + (a+d) + (a+2d) + ... + (a+(n-2)d) + (a+(n-1)d) ...(1)

text

**Step 2:** Write the sum in reverse order.
Sₙ = (a+(n-1)d) + (a+(n-2)d) + ... + (a+d) + a ...(2)

text

**Step 3:** Add equations (1) and (2) term by term.
Sₙ + Sₙ = [a + (a+(n-1)d)] + [(a+d) + (a+(n-2)d)] + ... + [(a+(n-1)d) + a]

text

**Step 4:** Each pair simplifies to the same value.
Pair 1: a + (a+(n-1)d) = 2a + (n-1)d
Pair 2: (a+d) + (a+(n-2)d) = 2a + (n-1)d
Pair 3: (a+2d) + (a+(n-3)d) = 2a + (n-1)d

text

**Step 5:** There are n pairs, all equal to [2a + (n-1)d].
2Sₙ = n[2a + (n-1)d]

text

**Step 6:** Divide both sides by 2.
Sₙ = n/2[2a + (n-1)d]

text

**Alternative Formula (using first and last term):**

Since the last term (l) = a + (n-1)d:
Sₙ = n/2[a + l]

text

**Explanation:** The sum is the average of the first and last term, multiplied by the number of terms.

---

## ✍️ Worked Examples

### Example 1: Using the Formulas

**Problem:** Find the 10th term and sum of first 10 terms of AP: 2, 5, 8, 11, ...

**Solution:**
a = 2, d = 3, n = 10

T₁₀ = a + (n-1)d
T₁₀ = 2 + (10-1)3
T₁₀ = 2 + 27
T₁₀ = 29

S₁₀ = n/2[2a + (n-1)d]
S₁₀ = 10/2[2(2) + (10-1)3]
S₁₀ = 5[4 + 27]
S₁₀ = 5 × 31
S₁₀ = 155

text

---

### Example 2: Finding the Sum

**Problem:** Find the sum of: 2 + 4 + 6 + 8 + 10

**Solution:**
a = 2, d = 2, n = 5
S₅ = 5/2[2(2) + (5-1)2]
S₅ = 2.5[4 + 8]
S₅ = 2.5 × 12 = 30

text

---

## 🎯 Practice Questions

**Question 1:** Find the 15th term of: 3, 7, 11, 15, ...

<details>
<summary>Click to reveal answer</summary>

a = 3, d = 4
T₁₅ = 3 + (15-1)4 = 3 + 56 = 59
</details>

---

**Question 2:** Find the sum of the first 12 terms: 5, 9, 13, 17, ...

<details>
<summary>Click to reveal answer</summary>

a = 5, d = 4, n = 12
S₁₂ = 12/2[2(5) + (12-1)4] = 6[10 + 44] = 6 × 54 = 324
</details>

---

## 📊 Summary

### AP Formulas:

| Formula | Use |
|---------|-----|
| Tₙ = a + (n-1)d | nth term |
| Sₙ = n/2[2a + (n-1)d] | Sum of n terms |
| Sₙ = n/2(a + l) | Sum using first and last term |

---

**Great job! You've completed Arithmetic Series with Derivations!** 🎉