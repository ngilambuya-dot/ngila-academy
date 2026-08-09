---
title: "Advanced Functions and Transformations"
topic: "Algebra"
subtopic: "Functions"
level: "Advanced"
duration: "30 min"
learningObjectives:
  - "Understand function transformations"
  - "Apply translations, reflections, and dilations"
  - "Find composite functions"
  - "Find inverse functions"
  - "Apply advanced functions to real-world problems"
tags: ["algebra", "functions", "transformations", "inverse", "composite"]
---

# Advanced Functions and Transformations

## 🎯 What are Function Transformations?

Function transformations are ways to change the graph of a function by:
- **Moving** it (translations)
- **Flipping** it (reflections)
- **Stretching/Shrinking** it (dilations)

---

## 📚 Transformations

### 1. Translations (Moving)

| Transformation | Effect | Example |
|----------------|--------|---------|
| `f(x) + k` | Move UP k units | `f(x) + 3` |
| `f(x) - k` | Move DOWN k units | `f(x) - 3` |
| `f(x + k)` | Move LEFT k units | `f(x + 3)` |
| `f(x - k)` | Move RIGHT k units | `f(x - 3)` |

**Example:**
f(x) = x²
f(x) + 3 = x² + 3 → Parabola moves UP 3 units
f(x - 2) = (x - 2)² → Parabola moves RIGHT 2 units

text

---

### 2. Reflections (Flipping)

| Transformation | Effect | Example |
|----------------|--------|---------|
| `-f(x)` | Flip over x-axis | `-x²` |
| `f(-x)` | Flip over y-axis | `(-x)²` |

**Example:**
f(x) = x²
-f(x) = -x² → Parabola flips upside down

text

---

### 3. Dilations (Stretching/Shrinking)

| Transformation | Effect | Example |
|----------------|--------|---------|
| `a·f(x)` where a > 1 | Stretch vertically | `2x²` |
| `a·f(x)` where 0 < a < 1 | Shrink vertically | `0.5x²` |
| `f(a·x)` where a > 1 | Shrink horizontally | `(2x)²` |
| `f(a·x)` where 0 < a < 1 | Stretch horizontally | `(0.5x)²` |

---

## 🔗 Composite Functions

A **composite function** is when you put one function inside another.

**Notation:** `(f ∘ g)(x) = f(g(x))`

### Example:
f(x) = 2x + 1
g(x) = x² - 3

(f ∘ g)(x) = f(g(x))
(f ∘ g)(x) = f(x² - 3)
(f ∘ g)(x) = 2(x² - 3) + 1
(f ∘ g)(x) = 2x² - 6 + 1
(f ∘ g)(x) = 2x² - 5

text

---

## 📝 Inverse Functions

The **inverse** of a function reverses the operation.

**Notation:** `f⁻¹(x)`

### Steps to Find Inverse:
1. Replace f(x) with y
2. Swap x and y
3. Solve for y
4. Replace y with f⁻¹(x)

### Example:
f(x) = 2x + 3

Step 1: y = 2x + 3
Step 2: x = 2y + 3
Step 3: x - 3 = 2y
y = (x - 3)/2
Step 4: f⁻¹(x) = (x - 3)/2

text

**Check:** f(f⁻¹(x)) = x
f((x - 3)/2) = 2((x - 3)/2) + 3 = x - 3 + 3 = x ✅

text

---

## ✍️ Worked Examples

### Example 1: Translation

**Problem:** Graph `f(x) = (x - 3)² + 2`

**Solution:**
- Start with `y = x²`
- Move RIGHT 3 units: `(x - 3)²`
- Move UP 2 units: `(x - 3)² + 2`

---

### Example 2: Reflection and Stretch

**Problem:** Graph `f(x) = -2x² + 3`

**Solution:**
- Start with `y = x²`
- Stretch vertically by 2: `2x²`
- Flip over x-axis: `-2x²`
- Move UP 3: `-2x² + 3`

---

### Example 3: Composite Functions

**Problem:** If `f(x) = 3x - 2` and `g(x) = x + 1`, find `(f ∘ g)(x)`

**Solution:**
(f ∘ g)(x) = f(g(x))
(f ∘ g)(x) = f(x + 1)
(f ∘ g)(x) = 3(x + 1) - 2
(f ∘ g)(x) = 3x + 3 - 2
(f ∘ g)(x) = 3x + 1

text

---

### Example 4: Inverse Function

**Problem:** Find the inverse of `f(x) = 3x - 6`

**Solution:**
y = 3x - 6
x = 3y - 6
x + 6 = 3y
y = (x + 6)/3
f⁻¹(x) = (x + 6)/3

text

---

## 🌍 Real-Life Applications

### Application 1: Temperature Conversion
F(C) = 9/5C + 32 (Celsius to Fahrenheit)
C(F) = 5/9(F - 32) (Fahrenheit to Celsius)

text
These are inverse functions!

---

### Application 2: Distance with Time Zones
d(t) = 60t (distance as function of time)
t(d) = d/60 (time as function of distance)

text

---

## 🎯 Practice Questions

**Question 1:** If `f(x) = 2x + 1`, find `f(3)`

<details>
<summary>Click to reveal answer</summary>
f(3) = 2(3) + 1 = 7

text
</details>

---

**Question 2:** If `f(x) = x² - 4`, find `f(-2)`

<details>
<summary>Click to reveal answer</summary>
f(-2) = (-2)² - 4 = 4 - 4 = 0

text
</details>

---

**Question 3:** Find the inverse of `f(x) = 4x - 5`

<details>
<summary>Click to reveal answer</summary>
y = 4x - 5
x = 4y - 5
x + 5 = 4y
y = (x + 5)/4
f⁻¹(x) = (x + 5)/4

text
</details>

---

**Question 4:** If `f(x) = x + 3` and `g(x) = 2x`, find `(f ∘ g)(x)`

<details>
<summary>Click to reveal answer</summary>
(f ∘ g)(x) = f(g(x))
(f ∘ g)(x) = f(2x)
(f ∘ g)(x) = 2x + 3

text
</details>

---

**Question 5:** Graph `f(x) = (x + 2)² - 3`

<details>
<summary>Click to reveal answer</summary>

Start with x², move LEFT 2, move DOWN 3
</details>

---

## 📊 Summary

### Transformations Summary:

| Transformation | Effect |
|----------------|--------|
| `f(x) + k` | Move UP |
| `f(x) - k` | Move DOWN |
| `f(x + k)` | Move LEFT |
| `f(x - k)` | Move RIGHT |
| `-f(x)` | Flip over x-axis |
| `f(-x)` | Flip over y-axis |
| `a·f(x)` | Stretch/Shrink vertically |
| `f(a·x)` | Stretch/Shrink horizontally |

---

**Great job mastering advanced functions!** 🎉