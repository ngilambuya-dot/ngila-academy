---
title: "Rules of Differentiation - The Simple Ways (dy/dx)"
topic: "Calculus"
subtopic: "Differentiation Rules"
level: "Intermediate"
duration: "40 min"
learningObjectives:
  - "Understand why we use rules instead of first principles every time"
  - "Apply the Power Rule"
  - "Apply the Constant Multiple Rule"
  - "Apply the Sum and Difference Rules"
  - "Apply the Product Rule"
  - "Apply the Quotient Rule"
  - "Apply the Chain Rule"
tags: ["calculus", "differentiation", "power-rule", "product-rule", "quotient-rule", "chain-rule"]
---

# Rules of Differentiation - The Simple Ways (dy/dx)

## 🎯 Why Do We Need Rules?

### The Problem:
Using First Principles every time is:
- Time-consuming
- Tedious
- Prone to errors

### The Solution:
> **We develop RULES that make differentiation quick and easy!**

### Key Concept:
> **The rules are DERIVED from First Principles, but we use them as shortcuts.**

---

## 📊 Rule 1: The Power Rule (Most Important!)

### Formula:
If f(x) = xⁿ, then f'(x) = n·xⁿ⁻¹

text

### In dy/dx notation:
If y = xⁿ, then dy/dx = n·xⁿ⁻¹

text

### Examples:

| Function | Derivative |
|----------|------------|
| y = x² | dy/dx = 2x |
| y = x³ | dy/dx = 3x² |
| y = x⁴ | dy/dx = 4x³ |
| y = x | dy/dx = 1 |
| y = 1 (which is x⁰) | dy/dx = 0 |
| y = x⁻¹ | dy/dx = -x⁻² = -1/x² |
| y = x¹/² (√x) | dy/dx = ½x⁻¹/² = 1/(2√x) |
| y = x³/² | dy/dx = ³/₂x¹/² |

**Practice:**
y = x⁵ → dy/dx = 5x⁴
y = x⁷ → dy/dx = 7x⁶
y = x⁻² → dy/dx = -2x⁻³ = -2/x³

text

---

## 📊 Rule 2: The Constant Multiple Rule

### Formula:
If f(x) = c·g(x), then f'(x) = c·g'(x)

text

### In dy/dx notation:
If y = c·u, then dy/dx = c·du/dx

text

### Examples:

| Function | Derivative |
|----------|------------|
| y = 3x² | dy/dx = 3(2x) = 6x |
| y = 5x³ | dy/dx = 5(3x²) = 15x² |
| y = -2x⁴ | dy/dx = -2(4x³) = -8x³ |
| y = ½x² | dy/dx = ½(2x) = x |

**Practice:**
y = 4x³ → dy/dx = 12x²
y = 7x² → dy/dx = 14x
y = -3x⁵ → dy/dx = -15x⁴

text

---

## 📊 Rule 3: The Sum and Difference Rules

### Formula:
If f(x) = g(x) ± h(x), then f'(x) = g'(x) ± h'(x)

text

### In dy/dx notation:
If y = u ± v, then dy/dx = du/dx ± dv/dx

text

### Examples:

| Function | Derivative |
|----------|------------|
| y = x² + x³ | dy/dx = 2x + 3x² |
| y = 3x² - 2x | dy/dx = 6x - 2 |
| y = 5x⁴ + 2x² - 3x | dy/dx = 20x³ + 4x - 3 |
| y = x² + 3x - 4 | dy/dx = 2x + 3 |

**Practice:**
y = x⁵ + x³ → dy/dx = 5x⁴ + 3x²
y = 4x³ - 2x² + 7x → dy/dx = 12x² - 4x + 7
y = 3x⁴ - 5x² + 2 → dy/dx = 12x³ - 10x

text

---

## 📊 Rule 4: The Product Rule

### Formula:
If f(x) = u(x)·v(x), then f'(x) = u'v + uv'

text

### In dy/dx notation:
If y = uv, then dy/dx = u·dv/dx + v·du/dx

text

### Mnemonic:
> **"First times the derivative of the second + Second times the derivative of the first"**

### Examples:

**Example 1:** y = x²·x³
u = x², v = x³
u' = 2x, v' = 3x²
dy/dx = u'v + uv' = (2x)(x³) + (x²)(3x²) = 2x⁴ + 3x⁴ = 5x⁴

text

**Example 2:** y = (2x + 1)(3x - 2)
u = 2x + 1, v = 3x - 2
u' = 2, v' = 3
dy/dx = u'v + uv' = 2(3x-2) + (2x+1)(3)
= 6x - 4 + 6x + 3 = 12x - 1

text

**Example 3:** y = x²·sin x
u = x², v = sin x
u' = 2x, v' = cos x
dy/dx = u'v + uv' = 2x·sin x + x²·cos x

text

**Practice:**
y = x·ln x → dy/dx = ln x + 1
y = (3x+2)(x-1) → dy/dx = 6x - 1
y = x²·eˣ → dy/dx = 2x·eˣ + x²·eˣ = eˣ(2x + x²)

text

---

## 📊 Rule 5: The Quotient Rule

### Formula:
If f(x) = u(x)/v(x), then f'(x) = (u'v - uv')/v²

text

### In dy/dx notation:
If y = u/v, then dy/dx = (v·du/dx - u·dv/dx)/v²

text

### Mnemonic:
> **"Low d-high minus high d-low, over the square of what's below"**

### Examples:

**Example 1:** y = x²/x³
u = x², v = x³
u' = 2x, v' = 3x²
dy/dx = [(2x)(x³) - (x²)(3x²)] / (x³)²
= (2x⁴ - 3x⁴) / x⁶ = -x⁴/x⁶ = -1/x²

text

**Example 2:** y = (2x + 1)/(3x - 2)
u = 2x + 1, v = 3x - 2
u' = 2, v' = 3
dy/dx = [2(3x-2) - (2x+1)(3)] / (3x-2)²
= [6x-4 - 6x-3] / (3x-2)² = -7/(3x-2)²

text

**Practice:**
y = x/(x+1) → dy/dx = 1/(x+1)²
y = sin x / cos x → dy/dx = sec²x
y = 1/(x²+1) → dy/dx = -2x/(x²+1)²

text

---

## 📊 Rule 6: The Chain Rule

### Formula:
If f(x) = g(h(x)), then f'(x) = g'(h(x))·h'(x)

text

### In dy/dx notation:
If y = f(u) and u = g(x), then dy/dx = dy/du × du/dx

text

### Mnemonic:
> **"Differentiate the outside, multiply by the derivative of the inside"**

### Examples:

**Example 1:** y = (3x² + 1)⁴
Outside: ( )⁴ → 4( )³
Inside: 3x² + 1 → 6x
dy/dx = 4(3x²+1)³ × 6x = 24x(3x²+1)³

text

**Example 2:** y = sin(x²)
Outside: sin( ) → cos( )
Inside: x² → 2x
dy/dx = cos(x²) × 2x = 2x·cos(x²)

text

**Example 3:** y = e^(3x)
Outside: e^( ) → e^( )
Inside: 3x → 3
dy/dx = e^(3x) × 3 = 3e^(3x)

text

**Practice:**
y = (2x-1)⁵ → dy/dx = 10(2x-1)⁴
y = cos(3x) → dy/dx = -3sin(3x)
y = ln(x²+1) → dy/dx = 2x/(x²+1)

text

---

## 📊 Summary Table of All Rules

| Rule | Formula | When to Use |
|------|---------|-------------|
| **Power Rule** | d/dx(xⁿ) = nxⁿ⁻¹ | Single power term |
| **Constant Multiple** | d/dx(cu) = c·du/dx | Coefficient present |
| **Sum/Difference** | d/dx(u±v) = u'±v' | Multiple terms |
| **Product Rule** | d/dx(uv) = u'v + uv' | Multiplying two functions |
| **Quotient Rule** | d/dx(u/v) = (u'v - uv')/v² | Dividing two functions |
| **Chain Rule** | d/dx(f(g(x))) = f'(g(x))·g'(x) | Composite functions |

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Find dy/dx for y = 5x³

<details>
<summary>Click to reveal answer</summary>

dy/dx = 15x²
</details>

---

**Question 2:** Find dy/dx for y = 3x⁴ - 2x² + 5

<details>
<summary>Click to reveal answer</summary>

dy/dx = 12x³ - 4x
</details>

---

### Medium Level

**Question 3:** Find dy/dx for y = (2x+1)(3x-4)

<details>
<summary>Click to reveal answer</summary>

dy/dx = 12x - 5
</details>

---

**Question 4:** Find dy/dx for y = (x²+1)³

<details>
<summary>Click to reveal answer</summary>

dy/dx = 6x(x²+1)²
</details>

---

### Hard Level

**Question 5:** Find dy/dx for y = (x²+1)/(x-2)

<details>
<summary>Click to reveal answer</summary>

dy/dx = (x² - 4x - 1)/(x-2)²
</details>

---

## 📊 Summary

### The Rules Make Differentiation Easy!

| If you see... | Use... |
|---------------|--------|
| xⁿ | Power Rule |
| c·f(x) | Constant Multiple |
| f(x) ± g(x) | Sum/Difference |
| f(x)·g(x) | Product Rule |
| f(x)/g(x) | Quotient Rule |
| f(g(x)) | Chain Rule |

---

**Great job! You've completed Rules of Differentiation!** 🎉