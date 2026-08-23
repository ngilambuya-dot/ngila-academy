---
title: "Applications of Integration"
topic: "Calculus"
subtopic: "Applications"
level: "Advanced"
duration: "40 min"
learningObjectives:
  - "Use integration to find the area under a curve"
  - "Find the area between two curves"
  - "Use integration to find volumes of revolution"
  - "Apply integration to real-world problems"
tags: ["calculus", "integration", "applications", "area", "volume"]
---

# Applications of Integration

## 🎯 Introduction

Integration has many practical applications. Once we know how to integrate, we can:

1. **Find the area under a curve** (definite integrals)
2. **Find the area between two curves**
3. **Find volumes of revolution**
4. **Find total accumulation** (distance, cost, etc.)

---

## 📊 Application 1: Area Under a Curve

### Formula:
Area = ∫[a to b] f(x) dx

text

### Visual Representation:
y
↑
│ ________
│ /
│ /
│ /
│ /
│ /
└────────────────────→ x
a b

text

---

## ✍️ Worked Examples

### Example 1: Area Under a Curve

**Problem:** Find the area under y = x² from x = 0 to x = 2.

**Solution:**
Area = ∫[0 to 2] x² dx
= [x³/3] from 0 to 2
= (8/3) - (0/3)
= 8/3 ≈ 2.67 square units

text

---

### Example 2: Area Under a Curve

**Problem:** Find the area under y = 2x + 1 from x = 0 to x = 3.

**Solution:**
Area = ∫[0 to 3] (2x + 1) dx
= [x² + x] from 0 to 3
= (9 + 3) - (0 + 0)
= 12 square units

text

---

## 📊 Application 2: Area Between Two Curves

### Formula:
Area = ∫[a to b] [f(x) - g(x)] dx

text
Where f(x) is the upper curve and g(x) is the lower curve.

### Visual Representation:
y
↑
│ f(x) ________
│ /|
│ / |
│ / |
│ / |
│ / |
│ / |______________
└────────────────────────→ x
a b

text

---

## ✍️ Worked Examples

### Example 3: Area Between Two Curves

**Problem:** Find the area between y = x² and y = x from x = 0 to x = 1.

**Solution:**
Upper curve: f(x) = x (since x > x² for 0 < x < 1)
Lower curve: g(x) = x²

Area = ∫[0 to 1] (x - x²) dx
= [x²/2 - x³/3] from 0 to 1
= (1/2 - 1/3) - (0 - 0)
= 1/6 square units

text

---

### Example 4: Area Between Two Curves

**Problem:** Find the area between y = x² and y = 4.

**Solution:**
Step 1: Find intersection points
x² = 4 → x = ±2

Step 2: Set up the integral
Area = ∫[-2 to 2] (4 - x²) dx
= [4x - x³/3] from -2 to 2
= (8 - 8/3) - (-8 + 8/3)
= 16 - 16/3
= 32/3 ≈ 10.67 square units

text

---

## 📊 Application 3: Volumes of Revolution

### Method: Disk Method

When a curve is rotated about the x-axis:
Volume = π∫[a to b] [f(x)]² dx

text

---

## ✍️ Worked Examples

### Example 5: Volume of Revolution

**Problem:** Find the volume when y = x² is rotated about the x-axis from x = 0 to x = 2.

**Solution:**
V = π∫[0 to 2] (x²)² dx
= π∫[0 to 2] x⁴ dx
= π[x⁵/5] from 0 to 2
= π(32/5 - 0)
= 32π/5 ≈ 20.11 cubic units

text

---

### Example 6: Volume of Revolution

**Problem:** Find the volume when y = √x is rotated about the x-axis from x = 0 to x = 4.

**Solution:**
V = π∫[0 to 4] (√x)² dx
= π∫[0 to 4] x dx
= π[x²/2] from 0 to 4
= π(16/2 - 0)
= 8π ≈ 25.13 cubic units

text

---

## 📊 Application 4: Total Distance

### Formula:
Total Distance = ∫[a to b] v(t) dt

text
Where v(t) is velocity.

---

## ✍️ Worked Examples

### Example 7: Total Distance

**Problem:** A car travels with velocity v(t) = 2t + 3 from t = 0 to t = 4 seconds. Find the total distance traveled.

**Solution:**
Distance = ∫[0 to 4] (2t + 3) dt
= [t² + 3t] from 0 to 4
= (16 + 12) - (0 + 0)
= 28 meters

text

---

## 🌍 Real-Life Applications

### Application 1: Total Revenue

> Marginal revenue is MR(q) = 100 - 2q. Find total revenue from q = 0 to q = 20.

**Solution:**
Revenue = ∫[0 to 20] (100 - 2q) dq
= [100q - q²] from 0 to 20
= 2000 - 400 = 1600

text

### Application 2: Water Flow

> Water flows into a tank at rate r(t) = 10 + 2t L/min. Find total water after 5 minutes.

**Solution:**
Total = ∫[0 to 5] (10 + 2t) dt
= [10t + t²] from 0 to 5
= 50 + 25 = 75 liters

text

### Application 3: Work Done

> Force F(x) = 3x² N. Find work done from x = 0 to x = 4 m.

**Solution:**
Work = ∫[0 to 4] 3x² dx
= [x³] from 0 to 4
= 64 joules

text

---

## 🎯 Practice Questions

**Question 1:** Find the area under y = x from x = 0 to x = 3.

<details>
<summary>Click to reveal answer</summary>

Area = 9/2 = 4.5 square units
</details>

---

**Question 2:** Find the area between y = x² and y = 4 - x².

<details>
<summary>Click to reveal answer</summary>

Area = 16/3 ≈ 5.33 square units
</details>

---

**Question 3:** Find the volume when y = x is rotated about the x-axis from x = 0 to x = 3.

<details>
<summary>Click to reveal answer</summary>

V = 9π ≈ 28.27 cubic units
</details>

---

**Question 4:** Find the area under y = 3x² from x = 1 to x = 3.

<details>
<summary>Click to reveal answer</summary>

Area = 26 square units
</details>

---

## 📊 Summary

### Key Applications:

| Application | Formula |
|-------------|---------|
| **Area Under Curve** | ∫[a to b] f(x) dx |
| **Area Between Curves** | ∫[a to b] (f(x) - g(x)) dx |
| **Volume of Revolution** | π∫[a to b] [f(x)]² dx |
| **Total Distance** | ∫[a to b] v(t) dt |

---

**Great job! You've completed Applications of Integration!** 🎉