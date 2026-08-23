---
title: "Limits - The Foundation of Calculus"
topic: "Calculus"
subtopic: "Limits"
level: "Intermediate"
duration: "40 min"
learningObjectives:
  - "Understand the concept of a limit intuitively and formally"
  - "Evaluate limits using algebraic methods"
  - "Understand one-sided limits"
  - "Identify when a limit does not exist"
  - "Apply limits to real-world problems"
  - "Understand continuity"
tags: ["calculus", "limits", "continuity", "evaluating-limits"]
---

# Limits - The Foundation of Calculus

## 🎯 What is a Limit?

A **limit** is the value that a function approaches as the input approaches a certain value.

### Formal Definition:
lim(x→a) f(x) = L

text

Read as: "The limit of f(x) as x approaches a is L"

### Key Concept:
> **A limit describes what value a function approaches, not necessarily what value it equals.**

**Important:** The function does NOT need to be defined at x = a for the limit to exist!

---

## 📊 Intuitive Understanding

### Example: The Function f(x) = (x² - 1)/(x - 1)

Let's see what happens as x approaches 1:

| x | f(x) | Behavior |
|---|------|----------|
| 0 | 1 | Approaches 2 |
| 0.5 | 1.5 | Approaches 2 |
| 0.9 | 1.9 | Approaches 2 |
| 0.99 | 1.99 | Approaches 2 |
| 0.999 | 1.999 | Approaches 2 |
| 1 | Undefined | f(1) doesn't exist |
| 1.001 | 2.001 | Approaches 2 |
| 1.01 | 2.01 | Approaches 2 |
| 1.1 | 2.1 | Approaches 2 |
| 1.5 | 2.5 | Approaches 2 |
| 2 | 3 | Approaches 3 |

**Observation:** As x gets closer to 1 (from either side), f(x) gets closer to 2.

**Therefore:**
lim(x→1) (x² - 1)/(x - 1) = 2

text

---

## 📊 Evaluating Limits

### Method 1: Direct Substitution

If f(a) is defined, the limit is simply f(a).
lim(x→2) x² = 4
lim(x→3) (x+1) = 4
lim(x→5) (2x - 3) = 7
lim(x→4) (x² - 2x + 1) = 16 - 8 + 1 = 9

text

### Method 2: Factoring (when direct substitution gives 0/0)
lim(x→2) (x² - 4)/(x - 2)
= lim(x→2) (x+2)(x-2)/(x-2)
= lim(x→2) (x+2)
= 4

text

**Why factoring works:** We cancel the common factor that caused the 0/0 form.
lim(x→3) (x² - 9)/(x - 3)
= lim(x→3) (x+3)(x-3)/(x-3)
= lim(x→3) (x+3)
= 6

text

### Method 3: Rationalization (for square roots)
lim(x→0) (√(x+1) - 1)/x
= lim(x→0) (√(x+1) - 1)(√(x+1) + 1) / [x(√(x+1) + 1)]
= lim(x→0) (x+1 - 1) / [x(√(x+1) + 1)]
= lim(x→0) x / [x(√(x+1) + 1)]
= lim(x→0) 1/(√(x+1) + 1)
= 1/2

text

### Method 4: Dividing by Highest Power (for infinity limits)
lim(x→∞) (3x² + 2x + 1)/(x² + 5)
= lim(x→∞) (3 + 2/x + 1/x²)/(1 + 5/x²)
= 3/1 = 3

text
lim(x→∞) (5x³ - 2x + 7)/(2x³ + 4x - 1)
= lim(x→∞) (5 - 2/x² + 7/x³)/(2 + 4/x² - 1/x³)
= 5/2

text

### Method 5: Standard Limits to Memorize
lim(x→0) (sin x)/x = 1
lim(x→0) (1 - cos x)/x = 0
lim(x→∞) (1 + 1/x)ˣ = e
lim(x→0) (eˣ - 1)/x = 1
lim(x→0) ln(1+x)/x = 1

text

---

## 📊 One-Sided Limits

### Left-hand Limit:
lim(x→a⁻) f(x)

text
As x approaches a from the left (smaller values).

### Right-hand Limit:
lim(x→a⁺) f(x)

text
As x approaches a from the right (larger values).

### The limit exists if:
lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

text

### Example 1:
f(x) = { x² if x < 0, 1 if x ≥ 0 }

lim(x→0⁻) f(x) = lim(x→0⁻) x² = 0
lim(x→0⁺) f(x) = lim(x→0⁺) 1 = 1

Since 0 ≠ 1, lim(x→0) f(x) does NOT exist.

text

### Example 2:
f(x) = { 2x if x < 1, x+1 if x ≥ 1 }

lim(x→1⁻) f(x) = 2(1) = 2
lim(x→1⁺) f(x) = 1+1 = 2

Since both limits are equal, lim(x→1) f(x) = 2

text

---

## 📊 Limits at Infinity

### Rules:

**Rule 1:** When x → ∞, divide by the highest power of x.
lim(x→∞) (2x³ + 3x² + 1)/(x³ + 5x + 2)
= lim(x→∞) (2 + 3/x + 1/x³)/(1 + 5/x² + 2/x³)
= 2/1 = 2

text

**Rule 2:** When numerator degree > denominator degree, limit → ∞.
lim(x→∞) x²/(x+1) = ∞

text

**Rule 3:** When numerator degree < denominator degree, limit → 0.
lim(x→∞) x/(x²+1) = 0

text

---

## 📊 Continuity

### Definition:
> **A function is continuous at a point if the limit at that point equals the function value.**

### Conditions for Continuity:
f(a) is defined

lim(x→a) f(x) exists

lim(x→a) f(x) = f(a)

text

### Example:
f(x) = x² is continuous everywhere.
f(x) = 1/x is discontinuous at x = 0.

text

---

## 🌍 Real-Life Applications

### Application 1: Instantaneous Speed

> As time interval approaches zero, average speed approaches instantaneous speed.
v_instantaneous = lim(t→0) Δs/Δt

text

### Application 2: Population Growth

> As population grows, the growth rate approaches a limit (carrying capacity).

### Application 3: Economics

> As production increases, marginal cost approaches a limit.

### Application 4: Physics

> As air resistance increases, terminal velocity is approached as a limit.

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Evaluate lim(x→3) (x² - 9)/(x - 3)

<details>
<summary>Click to reveal answer</summary>

= lim(x→3) (x+3)(x-3)/(x-3) = lim(x→3) (x+3) = 6
</details>

---

**Question 2:** Evaluate lim(x→0) (sin x)/x

<details>
<summary>Click to reveal answer</summary>

1 (Standard limit)
</details>

---

### Medium Level

**Question 3:** Evaluate lim(x→∞) (4x² + 3x)/(2x² - 1)

<details>
<summary>Click to reveal answer</summary>

= lim(x→∞) (4 + 3/x)/(2 - 1/x²) = 4/2 = 2
</details>

---

**Question 4:** Evaluate lim(x→2) (x² - 4x + 4)/(x - 2)

<details>
<summary>Click to reveal answer</summary>

= lim(x→2) (x-2)²/(x-2) = lim(x→2) (x-2) = 0
</details>

---

### Hard Level

**Question 5:** Evaluate lim(x→0) (√(x+4) - 2)/x

<details>
<summary>Click to reveal answer</summary>

= lim(x→0) (x+4-4)/[x(√(x+4)+2)]
= lim(x→0) 1/(√(x+4)+2) = 1/(2+2) = 1/4
</details>

---

**Question 6:** Determine if lim(x→2) f(x) exists for:
f(x) = { x² if x < 2, 3x - 2 if x ≥ 2 }

<details>
<summary>Click to reveal answer</summary>

lim(x→2⁻) = 4
lim(x→2⁺) = 3(2)-2 = 4
Since both equal 4, the limit exists and = 4.
</details>

---

## 📊 Summary

### Key Points:

| Method | When to Use |
|--------|-------------|
| Direct Substitution | f(a) is defined |
| Factoring | 0/0 form from factors |
| Rationalization | Square roots in denominator |
| Divide by Highest Power | x → ∞ |
| Standard Limits | Memorize common limits |

### When a Limit Exists:
Left-hand limit = Right-hand limit

text

### Continuity:
f(a) defined AND limit exists AND limit = f(a)

text

---

**Great job! You've completed Limits!** 🎉