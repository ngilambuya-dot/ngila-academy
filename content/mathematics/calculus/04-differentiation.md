---
title: "Differentiation from First Principles"
topic: "Calculus"
subtopic: "Differentiation"
level: "Intermediate"
duration: "35 min"
learningObjectives:
  - "Understand what differentiation is"
  - "Define the derivative as a limit"
  - "Differentiate using first principles"
  - "Understand the geometric meaning of the derivative"
  - "Apply the derivative to real-world problems"
tags: ["calculus", "differentiation", "derivative", "first-principles", "slope"]
---

# Differentiation from First Principles

## 🎯 What is Differentiation?

**Differentiation** is the process of finding the **derivative** of a function. The derivative measures the **rate of change** of a function with respect to its variable.

### Key Concept:
> **The derivative is the instantaneous rate of change of a function.**

---

## 📊 The Derivative as a Limit

### Definition:
f'(x) = lim(h→0) [f(x+h) - f(x)] / h

text

Read as: "f prime of x"

### Alternative Notation:
dy/dx = f'(x)

text

---

## 📊 Geometric Meaning of the Derivative

### The derivative gives:
1. **The slope of the tangent line** at a point
2. **The instantaneous rate of change**
y
↑
│ / (x+h, f(x+h))
│ /
│ / (x, f(x))
│ /
│ /
│ /
└─────────────────→ x

text

**Observation:** The derivative is the limit of the slope of the secant line as h approaches 0.
Slope of secant = [f(x+h) - f(x)] / h
Slope of tangent = lim(h→0) [f(x+h) - f(x)] / h = f'(x)

text

---

## 📊 Derivative from First Principles

### Steps:

1. **Find f(x+h)**
2. **Subtract f(x)**
3. **Divide by h**
4. **Take the limit as h → 0**

---

## ✍️ Worked Examples

### Example 1: Differentiate f(x) = x² from First Principles

**Solution:**
Step 1: f(x+h) = (x+h)² = x² + 2xh + h²

Step 2: f(x+h) - f(x) = (x² + 2xh + h²) - x² = 2xh + h²

Step 3: [f(x+h) - f(x)] / h = (2xh + h²) / h = 2x + h

Step 4: f'(x) = lim(h→0) (2x + h) = 2x

text

**Therefore:** f'(x) = 2x

**Check:** If x = 3, f'(3) = 6. The slope of the tangent at x=3 is 6.

---

### Example 2: Differentiate f(x) = 2x² + 3x from First Principles

**Solution:**
Step 1: f(x+h) = 2(x+h)² + 3(x+h) = 2(x² + 2xh + h²) + 3x + 3h
f(x+h) = 2x² + 4xh + 2h² + 3x + 3h

Step 2: f(x+h) - f(x) = (2x² + 4xh + 2h² + 3x + 3h) - (2x² + 3x)
= 4xh + 2h² + 3h

Step 3: [f(x+h) - f(x)] / h = (4xh + 2h² + 3h) / h = 4x + 2h + 3

Step 4: f'(x) = lim(h→0) (4x + 2h + 3) = 4x + 3

text

---

### Example 3: Differentiate f(x) = 1/x from First Principles

**Solution:**
Step 1: f(x+h) = 1/(x+h)

Step 2: f(x+h) - f(x) = 1/(x+h) - 1/x = [x - (x+h)] / [x(x+h)] = -h / [x(x+h)]

Step 3: [f(x+h) - f(x)] / h = [-h / (x(x+h))] / h = -1 / [x(x+h)]

Step 4: f'(x) = lim(h→0) -1 / [x(x+h)] = -1/x²

text

---

### Example 4: Differentiate f(x) = √x from First Principles

**Solution:**
Step 1: f(x+h) = √(x+h)

Step 2: f(x+h) - f(x) = √(x+h) - √x

Step 3: [f(x+h) - f(x)] / h = [√(x+h) - √x]/h

Step 4: Rationalize:
= [√(x+h) - √x][√(x+h) + √x] / [h(√(x+h) + √x)]
= (x+h - x) / [h(√(x+h) + √x)]
= h / [h(√(x+h) + √x)]
= 1 / (√(x+h) + √x)

Step 5: f'(x) = lim(h→0) 1 / (√(x+h) + √x) = 1 / (2√x)

text

---

### Example 5: Differentiate f(x) = sin x from First Principles

**Solution:**
Step 1: f(x+h) = sin(x+h)

Step 2: f(x+h) - f(x) = sin(x+h) - sin x

Step 3: Use identity: sin(A+B) - sin A = 2cos(A+B/2)sin(B/2)
= 2cos(x+h/2)sin(h/2)

Step 4: [f(x+h) - f(x)] / h = [2cos(x+h/2)sin(h/2)]/h
= cos(x+h/2) × sin(h/2)/(h/2)

Step 5: f'(x) = lim(h→0) cos(x+h/2) × sin(h/2)/(h/2) = cos x × 1 = cos x

text

**Therefore:** f'(x) = cos x

---

## 📊 Notation

| Notation | Meaning |
|----------|---------|
| f'(x) | Derivative of f(x) |
| dy/dx | Derivative of y with respect to x |
| d/dx f(x) | Operator notation |
| y' | Derivative of y |

---

## 🌍 Real-Life Applications

### Application 1: Velocity

> The derivative of distance with respect to time is velocity.
v(t) = ds/dt = s'(t)

text

### Application 2: Acceleration

> The derivative of velocity with respect to time is acceleration.
a(t) = dv/dt = v'(t) = s''(t)

text

### Application 3: Marginal Cost

> The derivative of cost with respect to quantity is marginal cost.
MC = dC/dq

text

### Application 4: Population Growth Rate

> The derivative of population with respect to time gives the growth rate.

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Differentiate f(x) = x² from first principles.

<details>
<summary>Click to reveal answer</summary>

f'(x) = 2x
</details>

---

**Question 2:** Differentiate f(x) = x² + 2x from first principles.

<details>
<summary>Click to reveal answer</summary>

f'(x) = 2x + 2
</details>

---

### Medium Level

**Question 3:** Differentiate f(x) = 3x² + x from first principles.

<details>
<summary>Click to reveal answer</summary>

f'(x) = 6x + 1
</details>

---

**Question 4:** What is the geometric meaning of the derivative?

<details>
<summary>Click to reveal answer</summary>

The derivative gives the slope of the tangent line at a point on the curve.
</details>

---

### Hard Level

**Question 5:** Differentiate f(x) = 1/(x+1) from first principles.

<details>
<summary>Click to reveal answer</summary>

f'(x) = -1/(x+1)²
</details>

---

**Question 6:** Differentiate f(x) = sin x from first principles.

<details>
<summary>Click to reveal answer</summary>

f'(x) = cos x
</details>

---

## 📊 Summary

### Key Points:

| Concept | Formula |
|---------|---------|
| Derivative Definition | f'(x) = lim(h→0) [f(x+h)-f(x)]/h |
| Slope of Tangent | f'(x) |
| Rate of Change | f'(x) |

### Steps for First Principles:
1. Find f(x+h)
2. Subtract f(x)
3. Divide by h
4. Take limit as h → 0

---

**Great job! You've completed Differentiation from First Principles!** 🎉