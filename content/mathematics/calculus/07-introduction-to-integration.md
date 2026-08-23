---
title: "Introduction to Integration"
topic: "Calculus"
subtopic: "Integration"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand what integration is"
  - "Understand that integration is the reverse of differentiation"
  - "Find indefinite integrals (antiderivatives)"
  - "Apply the power rule for integration"
  - "Understand the constant of integration"
tags: ["calculus", "integration", "antiderivatives", "indefinite-integrals"]
---

# Introduction to Integration

## 🎯 What is Integration?

**Integration** is the reverse process of differentiation. While differentiation finds the rate of change, integration finds the original function.

### Key Concept:
> **Integration is the reverse of differentiation.**

### Relationship:
If f'(x) = g(x), then ∫g(x)dx = f(x) + C

text

### Simple Example:
If y = x², then dy/dx = 2x
Therefore, ∫2x dx = x² + C

text

---

## 📊 Why Do We Need the Constant (C)?

### The Problem:
When we differentiate, we lose any constant term.
y = x² + 5 → dy/dx = 2x
y = x² - 3 → dy/dx = 2x
y = x² + 10 → dy/dx = 2x

text

### The Solution:
When we integrate, we add a **constant of integration (C)** to account for any lost constant.
∫2x dx = x² + C

text

**C can be any constant (0, 5, -3, etc.)**

---

## 📊 The Power Rule for Integration

### Rule:
∫xⁿ dx = xⁿ⁺¹/(n+1) + C, where n ≠ -1

text

### Comparison with Differentiation:

| Operation | Rule |
|-----------|------|
| **Differentiation** | d/dx(xⁿ) = n·xⁿ⁻¹ |
| **Integration** | ∫xⁿ dx = xⁿ⁺¹/(n+1) + C |

---

## ✍️ Worked Examples

### Example 1: Basic Integration

**Problem:** ∫x² dx

**Solution:**
∫x² dx = x³/3 + C

text

---

### Example 2: Integration

**Problem:** ∫x⁵ dx

**Solution:**
∫x⁵ dx = x⁶/6 + C

text

---

### Example 3: Integration with Coefficient

**Problem:** ∫3x² dx

**Solution:**
∫3x² dx = 3∫x² dx = 3(x³/3) + C = x³ + C

text

---

### Example 4: Integration

**Problem:** ∫(2x³ + 5x - 3) dx

**Solution:**
∫2x³ dx + ∫5x dx - ∫3 dx
= 2(x⁴/4) + 5(x²/2) - 3x + C
= x⁴/2 + (5x²)/2 - 3x + C

text

---

### Example 5: Integration with Square Root

**Problem:** ∫√x dx

**Solution:**
√x = x¹/²
∫x¹/² dx = x³/² / (3/2) + C = (2/3)x³/² + C

text

---

### Example 6: Integration with Reciprocal

**Problem:** ∫1/x² dx

**Solution:**
1/x² = x⁻²
∫x⁻² dx = x⁻¹/(-1) + C = -1/x + C

text

---

## 📊 Special Cases

### Case 1: ∫1/x dx
∫1/x dx = ln|x| + C

text

**Note:** This is a special case because when n = -1, the power rule gives division by zero.

### Case 2: ∫eˣ dx
∫eˣ dx = eˣ + C

text

### Case 3: ∫e^{ax} dx
∫e^{ax} dx = e^{ax}/a + C

text

---

## 📊 Why Integration is Called Anti-Differentiation

| Differentiation | Integration |
|-----------------|-------------|
| y = x² | ∫2x dx |
| dy/dx = 2x | = x² + C |
| **Finds rate of change** | **Finds original function** |

---

## 🌍 Where is Integration Used?

| Field | Application |
|-------|-------------|
| **Physics** | Finding displacement from velocity |
| **Engineering** | Finding area, volume, work |
| **Economics** | Finding total cost from marginal cost |
| **Medicine** | Drug absorption rates |
| **Biology** | Population growth models |

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** ∫x³ dx

<details>
<summary>Click to reveal answer</summary>

x⁴/4 + C
</details>

---

**Question 2:** ∫4x² dx

<details>
<summary>Click to reveal answer</summary>

4x³/3 + C
</details>

---

**Question 3:** ∫(2x + 3) dx

<details>
<summary>Click to reveal answer</summary>

x² + 3x + C
</details>

---

### Medium Level

**Question 4:** ∫(x³ - 2x² + 4x - 1) dx

<details>
<summary>Click to reveal answer</summary>

x⁴/4 - 2x³/3 + 2x² - x + C
</details>

---

**Question 5:** ∫√(x) dx

<details>
<summary>Click to reveal answer</summary>

(2/3)x³/² + C
</details>

---

## 📊 Summary

### Integration vs Differentiation:

| Operation | Result |
|-----------|--------|
| **Differentiate** | x² → 2x |
| **Integrate** | 2x → x² + C |

### Key Formulas:

| Rule | Formula |
|------|---------|
| Power Rule | ∫xⁿ dx = xⁿ⁺¹/(n+1) + C |
| Constant Multiple | ∫k·f(x) dx = k·∫f(x) dx |
| Sum/Difference | ∫[f(x) ± g(x)] dx = ∫f(x) dx ± ∫g(x) dx |
| Special | ∫1/x dx = ln|x| + C |
| Special | ∫eˣ dx = eˣ + C |

---

**Great job! You've completed Introduction to Integration!** 🎉