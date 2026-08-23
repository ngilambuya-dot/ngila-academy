---
title: "Understanding Derivations - AP and GP Explained"
topic: "Sequences & Series"
subtopic: "Derivations"
level: "Intermediate"
duration: "40 min"
learningObjectives:
  - "Understand why we reverse the AP sum for derivation"
  - "Understand why we subtract equations in GP derivation"
  - "Follow the logic of each derivation step-by-step"
  - "Explain the reasoning behind each mathematical operation"
  - "Apply the same reasoning to other problems"
tags: ["sequences", "series", "derivations", "explanations", "proofs"]
---

# Understanding Derivations - AP and GP Explained

## 🎯 Introduction: Why Do We Need Derivations?

**Derivations** are not just about getting a formula. They help us:

1. **Understand** why the formula works
2. **Remember** the formula more easily
3. **Apply** the formula correctly
4. **See** the connections between different mathematical concepts
5. **Build** mathematical reasoning skills

### Key Concept:
> **A derivation is a logical journey from what we know to what we want to prove.**

---

## 📊 Part 1: AP nth Term Derivation (Tₙ = a + (n-1)d)

### The Question:
> How do we find any term in an arithmetic progression without listing all the previous terms?

### Step-by-Step Reasoning:

**Step 1: Start with the definition**

An AP is a sequence where each term is obtained by adding a **constant value (d)** to the previous term.
T₁ = a
T₂ = T₁ + d = a + d
T₃ = T₂ + d = (a + d) + d = a + 2d
T₄ = T₃ + d = (a + 2d) + d = a + 3d

text

**Step 2: Look for the pattern**

| Term | Expression | Number of d's |
|------|------------|---------------|
| T₁ | a | 0 |
| T₂ | a + d | 1 |
| T₃ | a + 2d | 2 |
| T₄ | a + 3d | 3 |
| Tₙ | ? | ? |

**Step 3: Generalize the pattern**
To get Tₙ, we need to:

Start with a (the first term)

Add d (n-1) times

Therefore: Tₙ = a + (n-1)d

text

**Explanation:** The number of times we add d is always one less than the term number. For example, to get the 4th term, we add d 3 times (4-1 = 3).

---

## 📊 Part 2: Why Do We Reverse the AP Sum Derivation?

### The Question:
> Why do we write the sum backwards in the AP sum derivation?

### The Reason:

When we write the sum forward and backward, we can **pair** terms that add to the same value.

### Step-by-Step Reasoning:

**Step 1: Write the sum forward**
Sₙ = a + (a+d) + (a+2d) + ... + (a+(n-2)d) + (a+(n-1)d)

text

**Step 2: Write the sum backward (from the last term to the first)**
Sₙ = (a+(n-1)d) + (a+(n-2)d) + ... + (a+2d) + (a+d) + a

text

**Step 3: Add the two equations**

Notice what happens when we add the first term of the forward sum with the first term of the backward sum:

| Forward Term | Backward Term | Sum |
|--------------|---------------|-----|
| a | (a+(n-1)d) | 2a + (n-1)d |
| (a+d) | (a+(n-2)d) | 2a + (n-1)d |
| (a+2d) | (a+(n-3)d) | 2a + (n-1)d |

### Why This Works:

> **Every pair adds to the same value: 2a + (n-1)d**

**Explanation:** Because the terms are in AP, as we move forward, we add d, and when we move backward, we subtract d. The sum of each pair is constant.

**Why Reverse?**
- Reversing allows us to pair the smallest term with the largest term
- This creates n pairs, all with the same sum
- This makes the calculation much simpler!

---

## 📊 Part 3: Why Do We Subtract in GP Derivation?

### The Question:
> Why do we multiply by r and then subtract in the GP sum derivation?

### The Reason:

Multiplying by r **shifts** the terms so that we can **cancel** most of them.

### Step-by-Step Reasoning:

**Step 1: Start with the sum**
Sₙ = a + ar + ar² + ar³ + ... + arⁿ⁻¹

text

**Step 2: Multiply by r**
rSₙ = ar + ar² + ar³ + ar⁴ + ... + arⁿ

text

**Step 3: Subtract the first equation from the second**
rSₙ - Sₙ = (ar + ar² + ar³ + ... + arⁿ) - (a + ar + ar² + ... + arⁿ⁻¹)

text

**Step 4: Look at what cancels**
All the middle terms cancel out!
Only a and arⁿ remain:
rSₙ - Sₙ = arⁿ - a

text

**Why This Works:**

> **Multiplying by r aligns the terms so that most cancel when subtracted.**

### Visual Explanation:
Sₙ = a + ar + ar² + ar³ + ... + arⁿ⁻¹
rSₙ = ar + ar² + ar³ + ... + arⁿ⁻¹ + arⁿ

rSₙ-Sₙ = -a + 0 + 0 + 0 + ... + 0 + arⁿ

text

**Explanation:** The terms that don't cancel are:
- **a** (from Sₙ)
- **arⁿ** (from rSₙ)

---

## 📊 Part 4: Why Does S∞ Exist Only When |r| < 1?

### The Question:
> Why can we only find an infinite sum when the common ratio is between -1 and 1?

### The Reason:

When |r| < 1, the terms **get smaller** and eventually become **negligible**.

### Step-by-Step Reasoning:

**Step 1: Look at the sum formula**
Sₙ = a(1 - rⁿ) / (1 - r)

text

**Step 2: Consider what happens as n gets very large**

| r value | What happens to rⁿ as n → ∞ |
|---------|---------------------------|
| |r| < 1 | rⁿ → 0 (vanishes) |
| |r| = 1 | rⁿ stays the same |
| |r| > 1 | rⁿ → ∞ (explodes) |

**Step 3: Apply to the sum formula**

When |r| < 1:
S∞ = a(1 - 0) / (1 - r) = a / (1 - r)

text

When |r| ≥ 1:
rⁿ does not vanish, so Sₙ does not approach a finite value

text

---

## 📊 Part 5: Compound Interest Derivation

### The Question:
> How does compound interest follow a geometric progression?

### The Reasoning:

**Step 1: Year 1**
Starting amount = P
Interest = P × r
Amount = P + Pr = P(1 + r)

text

**Step 2: Year 2**
Starting amount = P(1 + r)
Interest = P(1 + r) × r
Amount = P(1 + r) + P(1 + r)r = P(1 + r)(1 + r) = P(1 + r)²

text

**Step 3: General pattern**
Year 1: P(1 + r)
Year 2: P(1 + r)²
Year 3: P(1 + r)³
Year n: P(1 + r)ⁿ

text

### Comparison with GP:

| GP Element | Compound Interest |
|------------|-------------------|
| First term (a) | Principal (P) |
| Common ratio (r) | (1 + r) |
| Tₙ = arⁿ⁻¹ | A = P(1 + r)ⁿ |

---

## 📊 Summary: The Logic Behind Derivations

### AP Sum Derivation Logic:
1. **Write the sum forward** → list terms in order
2. **Write the sum backward** → list terms in reverse
3. **Add the two** → creates pairs with equal sums
4. **Simplify** → get the formula

### GP Sum Derivation Logic:
1. **Write the sum** → list all terms
2. **Multiply by r** → shift all terms
3. **Subtract** → most terms cancel
4. **Simplify** → get the formula

### Key Insights:

| Concept | Why It Works |
|---------|--------------|
| Reversing in AP | Pairs the smallest with the largest |
| Multiplying by r in GP | Aligns terms for cancellation |
| |r| < 1 condition | Terms vanish as n → ∞ |

---

## 🎯 Practice Questions

**Question 1:** Why do we reverse the sum in AP derivation?

<details>
<summary>Click to reveal answer</summary>

So we can pair the smallest term with the largest term, creating n pairs with the same sum of 2a + (n-1)d.
</details>

---

**Question 2:** Why do we multiply by r in GP sum derivation?

<details>
<summary>Click to reveal answer</summary>

Multiplying by r shifts the terms so that when we subtract, most terms cancel out, leaving only a and arⁿ.
</details>

---

**Question 3:** Why can't we find S∞ when |r| ≥ 1?

<details>
<summary>Click to reveal answer</summary>

When |r| ≥ 1, rⁿ does not approach 0 as n → ∞, so the sum does not converge to a finite value.
</details>

---

## 📊 Quick Reference

### AP Derivation Steps:
1. Write forward
2. Write backward
3. Add
4. Simplify

### GP Derivation Steps:
1. Write sum
2. Multiply by r
3. Subtract
4. Simplify

---

**Great job! You've completed Understanding Derivations!** 🎉