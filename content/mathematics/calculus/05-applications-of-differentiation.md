---
title: "Applications of Differentiation"
topic: "Calculus"
subtopic: "Applications"
level: "Intermediate"
duration: "40 min"
learningObjectives:
  - "Find the equation of tangents and normals"
  - "Identify stationary points"
  - "Determine maximum and minimum values"
  - "Solve optimization problems"
  - "Apply differentiation to real-world problems"
tags: ["calculus", "differentiation", "applications", "optimization", "tangents"]
---

# Applications of Differentiation

## 🎯 Introduction

Differentiation has many practical applications. Once we know how to find derivatives, we can use them to:

1. **Find the slope of a curve** at any point
2. **Find the equation of tangents and normals**
3. **Find maximum and minimum values**
4. **Solve optimization problems**
5. **Analyze rates of change** in real life

---

## 📊 Application 1: Tangents and Normals

### Tangent:
> **A line that touches the curve at exactly one point.**

### Normal:
> **A line perpendicular to the tangent at the point of contact.**

### Key Concepts:
Slope of tangent = f'(x₁)
Slope of normal = -1/f'(x₁) (negative reciprocal)

text

### Steps to Find Tangent:

1. Find the derivative f'(x)
2. Evaluate f'(x₁) to get the slope of the tangent
3. Use the point-slope form: y - y₁ = m(x - x₁)

### Steps to Find Normal:

1. Find the slope of the tangent (m₁ = f'(x₁))
2. Find the slope of the normal: m₂ = -1/m₁
3. Use the point-slope form: y - y₁ = m₂(x - x₁)

---

## ✍️ Worked Examples

### Example 1: Finding Tangent and Normal

**Problem:** Find the equation of the tangent and normal to y = x² at x = 2.

**Solution:**
Step 1: Find the point
y = x²
At x = 2, y = 4
Point: (2, 4)

Step 2: Find the derivative
y = x²
dy/dx = 2x

Step 3: Find the slope of the tangent
m₁ = dy/dx at x = 2 = 2(2) = 4

Step 4: Equation of tangent
y - 4 = 4(x - 2)
y - 4 = 4x - 8
y = 4x - 4

Step 5: Equation of normal
m₂ = -1/m₁ = -1/4
y - 4 = (-1/4)(x - 2)
y - 4 = -x/4 + 1/2
y = -x/4 + 9/2

text

---

### Example 2: Tangent and Normal

**Problem:** Find the equation of the tangent and normal to y = x³ - 3x at x = 1.

**Solution:**
Step 1: Find the point
y = (1)³ - 3(1) = 1 - 3 = -2
Point: (1, -2)

Step 2: Find the derivative
y = x³ - 3x
dy/dx = 3x² - 3

Step 3: Find the slope of the tangent
m₁ = 3(1)² - 3 = 0

Step 4: Equation of tangent
y - (-2) = 0(x - 1)
y + 2 = 0
y = -2

Step 5: Equation of normal
m₂ = -1/0 (undefined - vertical line)
x = 1

text

---

## 📊 Application 2: Stationary Points

### Definition:
> **Stationary points are points where the derivative equals zero (f'(x) = 0).**

### Types of Stationary Points:

1. **Maximum Point** (peak)
2. **Minimum Point** (valley)
3. **Point of Inflection** (flat but not max/min)

### Steps to Find Stationary Points:

1. Find f'(x)
2. Set f'(x) = 0
3. Solve for x
4. Find the corresponding y-values

### Testing the Nature:

| Method | How to Use |
|--------|------------|
| **First Derivative Test** | Check sign of f'(x) on both sides |
| **Second Derivative Test** | If f''(x) > 0 → Minimum, f''(x) < 0 → Maximum |

---

## ✍️ Worked Examples

### Example 3: Finding Stationary Points

**Problem:** Find the stationary points of y = x³ - 3x.

**Solution:**
Step 1: Find the derivative
y = x³ - 3x
dy/dx = 3x² - 3

Step 2: Set dy/dx = 0
3x² - 3 = 0
3x² = 3
x² = 1
x = ±1

Step 3: Find y-values
When x = 1: y = 1 - 3 = -2
When x = -1: y = -1 + 3 = 2

Stationary points: (1, -2) and (-1, 2)

Step 4: Determine nature using second derivative
d²y/dx² = 6x

At x = 1: d²y/dx² = 6 > 0 → Minimum
At x = -1: d²y/dx² = -6 < 0 → Maximum

text

---

### Example 4: More Stationary Points

**Problem:** Find the stationary points of y = x³ + 6x² + 9x.

**Solution:**
Step 1: Find the derivative
y = x³ + 6x² + 9x
dy/dx = 3x² + 12x + 9

Step 2: Set dy/dx = 0
3x² + 12x + 9 = 0
3(x² + 4x + 3) = 0
3(x + 1)(x + 3) = 0
x = -1, -3

Step 3: Find y-values
When x = -1: y = -1 + 6 - 9 = -4
When x = -3: y = -27 + 54 - 27 = 0

Stationary points: (-1, -4) and (-3, 0)

Step 4: Determine nature
d²y/dx² = 6x + 12

At x = -1: d²y/dx² = 6 > 0 → Minimum
At x = -3: d²y/dx² = -6 < 0 → Maximum

text

---

## 📊 Application 3: Optimization Problems

### Steps:

1. **Identify** the quantity to be optimized
2. **Write** the equation for this quantity
3. **Differentiate** and set to zero
4. **Solve** for the variable
5. **Check** whether it's a maximum or minimum

---

## ✍️ Worked Examples

### Example 5: Optimization - Maximum Area

**Problem:** A rectangular field is to be enclosed with 200 m of fencing. Find the dimensions that give the maximum area.

**Solution:**
Step 1: Define variables
Let x = length, y = width

Step 2: Write equations
Perimeter: 2x + 2y = 200 → x + y = 100 → y = 100 - x

Area: A = xy = x(100 - x) = 100x - x²

Step 3: Differentiate
dA/dx = 100 - 2x

Step 4: Set to zero
100 - 2x = 0
x = 50

Step 5: Find y
y = 100 - 50 = 50

Step 6: Check nature
d²A/dx² = -2 < 0 → Maximum

Therefore: Length = 50m, Width = 50m
Maximum area = 50 × 50 = 2500 m²

text

---

### Example 6: Optimization - Maximum Volume

**Problem:** An open box is made from a 30 cm × 20 cm sheet of cardboard by cutting equal squares from each corner and folding up the sides. Find the side of the square that gives maximum volume.

**Solution:**
Step 1: Define variable
Let x = side of square cut from each corner

Step 2: Write the volume equation
Length = 30 - 2x
Width = 20 - 2x
Height = x
V = x(30 - 2x)(20 - 2x)
V = x(600 - 100x + 4x²)
V = 600x - 100x² + 4x³

Step 3: Differentiate
dV/dx = 600 - 200x + 12x²

Step 4: Set to zero
12x² - 200x + 600 = 0
4(3x² - 50x + 150) = 0
3x² - 50x + 150 = 0

Using quadratic formula:
x = [50 ± √(2500 - 1800)] / 6
x = [50 ± √700] / 6
x = [50 ± 26.46] / 6
x = 12.74 or x = 3.92

x = 3.92 cm (valid, since x < 10)

Step 5: Check nature
d²V/dx² = -200 + 24x
At x = 3.92: d²V/dx² = -200 + 94.08 = -105.92 < 0 → Maximum

text

---

## 🌍 Real-Life Applications

### Application 1: Business - Maximizing Profit

> A company sells products at price p. The demand is q = 100 - 2p. Find the price that maximizes revenue.

**Solution:**
Revenue = p·q = p(100 - 2p) = 100p - 2p²
dR/dp = 100 - 4p = 0
p = 25
Maximum revenue = 25(100 - 50) = 1250

text

### Application 2: Physics - Projectile Motion

> A ball thrown upward has height h(t) = -16t² + 64t. Find the maximum height.

**Solution:**
dh/dt = -32t + 64 = 0
t = 2 seconds
h = -16(4) + 64(2) = -64 + 128 = 64 m

text

### Application 3: Economics - Marginal Analysis

> The cost function is C(x) = x² + 10x + 100. Find the minimum average cost.

**Solution:**
Average cost = C/x = x + 10 + 100/x
d/dx = 1 - 100/x² = 0
x² = 100
x = 10
Minimum average cost = 10 + 10 + 10 = 30

text

---

## 🎯 Practice Questions

### Easy Level

**Question 1:** Find the stationary points of y = x² - 4x + 3.

<details>
<summary>Click to reveal answer</summary>

dy/dx = 2x - 4 = 0 → x = 2
y = 4 - 8 + 3 = -1
Stationary point: (2, -1)
d²y/dx² = 2 > 0 → Minimum
</details>

---

**Question 2:** Find the equation of the tangent to y = x² at x = 1.

<details>
<summary>Click to reveal answer</summary>

Point: (1, 1)
dy/dx = 2x → m = 2
y - 1 = 2(x - 1)
y = 2x - 1
</details>

---

### Medium Level

**Question 3:** Find the stationary points of y = x³ - 3x² + 2.

<details>
<summary>Click to reveal answer</summary>

dy/dx = 3x² - 6x = 3x(x - 2) = 0
x = 0, 2
y(0) = 2, y(2) = 8 - 12 + 2 = -2
Points: (0, 2) and (2, -2)
d²y/dx² = 6x - 6
At x = 0: -6 < 0 → Maximum
At x = 2: 6 > 0 → Minimum
</details>

---

**Question 4:** A farmer has 100 m of fencing to enclose a rectangular pen. Find the maximum area.

<details>
<summary>Click to reveal answer</summary>

x + y = 50 → y = 50 - x
A = x(50 - x) = 50x - x²
dA/dx = 50 - 2x = 0 → x = 25
y = 25
Maximum area = 625 m²
</details>

---

### Hard Level

**Question 5:** A cylindrical can is to hold 1000 cm³. Find the dimensions that minimize the surface area.

<details>
<summary>Click to reveal answer</summary>

V = πr²h = 1000 → h = 1000/(πr²)
SA = 2πr² + 2πrh = 2πr² + 2000/r
dSA/dr = 4πr - 2000/r² = 0
4πr³ = 2000
r³ = 500/π
r ≈ 5.42 cm
h = 1000/(π(5.42)²) ≈ 10.84 cm
</details>

---

## 📊 Summary

### Key Applications:

| Application | Method |
|-------------|--------|
| **Tangent/Normal** | Use f'(x) for slope |
| **Stationary Points** | Set f'(x) = 0 |
| **Optimization** | Set derivative to zero and check nature |

### Important Rules:
Slope of tangent = f'(x)
Slope of normal = -1/f'(x)
Stationary point: f'(x) = 0
Maximum: f''(x) < 0
Minimum: f''(x) > 0

text

---

**Great job! You've completed Applications of Differentiation!** 🎉