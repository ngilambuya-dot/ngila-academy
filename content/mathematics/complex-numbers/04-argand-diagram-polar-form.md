---
title: "Argand Diagram and Polar Form"
topic: "Complex Numbers"
subtopic: "Argand Diagram"
level: "Advanced"
duration: "35 min"
learningObjectives:
  - "Represent complex numbers on an Argand diagram"
  - "Convert between Cartesian and polar forms"
  - "Calculate the argument of a complex number"
  - "Use polar form for multiplication and division"
  - "Apply De Moivre's Theorem"
tags: ["complex-numbers", "argand-diagram", "polar-form", "argument", "de-moivre"]
---

# Argand Diagram and Polar Form

## 🎯 The Argand Diagram

### Key Concept:
> **The Argand diagram represents complex numbers as points in a plane.**
Imaginary Axis
↑
│
3i │ • (3 + 4i)
│ │
2i │ │
│ │
i │ │
│ │
─────┼───┼─────→ Real Axis
│ 3
-i │
│
-2i │
│
-3i │
│

text

### Parts:
- **Horizontal axis:** Real axis (a)
- **Vertical axis:** Imaginary axis (b)

---

## 📊 Polar Form of Complex Numbers

### Definition:
> **A complex number z = a + bi can be written in polar form as:**
z = r(cos θ + i sin θ)

text

Where:
- **r** = modulus = |z| = √(a² + b²)
- **θ** = argument = arg(z) = tan⁻¹(b/a)
z = r cis θ (shorthand for r(cos θ + i sin θ))

text

---

## 📊 Finding the Argument

### Steps:
1. Calculate the modulus r = √(a² + b²)
2. Calculate the angle θ = tan⁻¹(b/a)
3. Determine the quadrant based on signs of a and b

### Quadrant Rules:

| Signs | Quadrant | Argument Formula |
|-------|----------|-----------------|
| a > 0, b > 0 | QI | θ = tan⁻¹(b/a) |
| a < 0, b > 0 | QII | θ = π - tan⁻¹(b/|a|) |
| a < 0, b < 0 | QIII | θ = -π + tan⁻¹(|b|/|a|) |
| a > 0, b < 0 | QIV | θ = -tan⁻¹(|b|/a) |

---

## ✍️ Worked Examples

### Example 1: Converting to Polar Form

**Problem:** Convert z = 3 + 4i to polar form.

**Solution:**
Step 1: Find modulus r
r = √(3² + 4²) = √25 = 5

Step 2: Find argument θ
θ = tan⁻¹(4/3) ≈ 53.13°

Step 3: Write in polar form
z = 5(cos 53.13° + i sin 53.13°)
z = 5 cis 53.13°

text

---

### Example 2: Converting to Polar Form

**Problem:** Convert z = -3 + 4i to polar form.

**Solution:**
Step 1: r = √((-3)² + 4²) = 5

Step 2: θ = tan⁻¹(4/-3)
a < 0, b > 0 → QII
θ = π - tan⁻¹(4/3) = 180° - 53.13° = 126.87°

Step 3: z = 5 cis 126.87°

text

---

### Example 3: Converting to Polar Form

**Problem:** Convert z = -3 - 4i to polar form.

**Solution:**
Step 1: r = 5

Step 2: a < 0, b < 0 → QIII
θ = -π + tan⁻¹(|b|/|a|) = -180° + 53.13° = -126.87°

Step 3: z = 5 cis (-126.87°)

text

---

### Example 4: Converting from Polar Form

**Problem:** Convert z = 4 cis 60° to Cartesian form.

**Solution:**
z = 4(cos 60° + i sin 60°)
z = 4(1/2 + i√3/2)
z = 2 + 2√3 i

text

---

## 📊 Multiplication and Division in Polar Form

### Multiplication:
z₁ = r₁ cis θ₁
z₂ = r₂ cis θ₂

z₁ × z₂ = r₁r₂ cis(θ₁ + θ₂)

text

### Division:
z₁/z₂ = (r₁/r₂) cis(θ₁ - θ₂)

text

---

## ✍️ Worked Examples

### Example 5: Multiplying in Polar Form

**Problem:** Multiply z₁ = 3 cis 30° and z₂ = 2 cis 45°

**Solution:**
z₁ × z₂ = (3×2) cis (30° + 45°)
= 6 cis 75°

text

---

### Example 6: Dividing in Polar Form

**Problem:** Divide z₁ = 6 cis 60° by z₂ = 2 cis 30°

**Solution:**
z₁/z₂ = (6/2) cis (60° - 30°)
= 3 cis 30°

text

---

## 📊 De Moivre's Theorem

### The Theorem:
> **(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)**

### General Form:
> **[r cis θ]ⁿ = rⁿ cis(nθ)**

---

### Example 7: Using De Moivre's Theorem

**Problem:** Find (cos 30° + i sin 30°)³

**Solution:**
(cos 30° + i sin 30°)³ = cos(3×30°) + i sin(3×30°)
= cos 90° + i sin 90°
= 0 + i
= i

text

---

## 🎯 Practice Questions

**Question 1:** Convert z = 1 + i to polar form.

<details>
<summary>Click to reveal answer</summary>

r = √2, θ = 45°
z = √2 cis 45°
</details>

---

**Question 2:** Convert z = 2 cis 120° to Cartesian form.

<details>
<summary>Click to reveal answer</summary>

z = 2(-1/2 + i√3/2) = -1 + i√3
</details>

---

**Question 3:** Multiply z₁ = 2 cis 30° and z₂ = 3 cis 60°.

<details>
<summary>Click to reveal answer</summary>

6 cis 90° = 6i
</details>

---

## 📊 Summary

### Key Formulas:

| Concept | Formula |
|---------|---------|
| Polar Form | z = r(cos θ + i sin θ) |
| Modulus | r = √(a² + b²) |
| Argument | θ = tan⁻¹(b/a) |
| Multiplication | r₁r₂ cis(θ₁ + θ₂) |
| Division | r₁/r₂ cis(θ₁ - θ₂) |
| De Moivre | (r cis θ)ⁿ = rⁿ cis(nθ) |

---

**Great job! You've completed Argand Diagram and Polar Form!** 🎉