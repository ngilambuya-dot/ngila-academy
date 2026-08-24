---
title: "Compound Interest - Complete Guide"
topic: "Financial Mathematics"
subtopic: "Compound Interest"
level: "Advanced"
duration: "40 min"
learningObjectives:
  - "Understand what compound interest is and how it differs from simple interest"
  - "Derive the compound interest formula"
  - "Calculate compound interest using the formula"
  - "Find principal, rate, or time in compound interest"
  - "Use logarithms to find time in compound interest"
  - "Apply compound interest to real-life situations"
tags: ["compound-interest", "compounding", "growth", "logarithms"]
---

# Compound Interest - Complete Guide

## 🎯 What is Compound Interest?

**Compound Interest** is interest calculated on the principal PLUS the interest already earned. It is interest on interest.

### Key Concept:
> **Compound interest allows money to grow faster than simple interest because interest earns interest.**

### Why Compound Interest Matters:

1. **Savings and investments** - Money grows exponentially
2. **Loans** - Borrowers pay compound interest
3. **Retirement planning** - Compound interest builds wealth
4. **Business** - Understanding investment growth

---

## 📊 Compound Interest vs Simple Interest

| Feature | Simple Interest | Compound Interest |
|---------|-----------------|-------------------|
| **Interest on** | Principal only | Principal + previous interest |
| **Growth** | Linear | Exponential |
| **Formula** | I = PRT | A = P(1 + r)ⁿ |
| **Better for** | Short-term loans | Long-term investments |

### Why Compound Interest is More Powerful:
Simple Interest Example:
KSh 10,000 at 10% for 5 years = KSh 5,000 interest

Compound Interest Example:
KSh 10,000 at 10% for 5 years = KSh 6,105.10 interest

text

---

## 📊 Derivation of Compound Interest Formula

### Year by Year Calculation:

**Year 0:** Principal = P

**Year 1:**
A₁ = P + Pr = P(1 + r)

text

**Year 2:**
A₂ = A₁ + A₁r = A₁(1 + r) = P(1 + r)²

text

**Year 3:**
A₃ = A₂ + A₂r = A₂(1 + r) = P(1 + r)³

text

**Year n:**
Aₙ = P(1 + r)ⁿ

text

### The Formula:
A = P(1 + r)ⁿ

text

Where:
- A = Final amount
- P = Principal (initial amount)
- r = Interest rate per period (as decimal)
- n = Number of periods

### Interest Formula:
Compound Interest = A - P

text

---

## ✍️ Worked Examples

### Example 1: Basic Compound Interest

**Problem:** KSh 10,000 is invested at 10% compound interest per year for 3 years. Find the amount and compound interest.

**Solution:**
P = 10,000
r = 10% = 0.10
n = 3 years

A = P(1 + r)ⁿ
A = 10,000(1 + 0.10)³
A = 10,000(1.10)³
A = 10,000 × 1.331
A = KSh 13,310

CI = A - P
CI = 13,310 - 10,000 = KSh 3,310

text

---

### Example 2: Different Compounding Periods

**Problem:** KSh 20,000 is invested at 12% compound interest per year for 2 years, compounded quarterly. Find the amount.

**Solution:**
P = 20,000
Annual rate = 12% = 0.12
Compounding periods per year = 4 (quarterly)
r per period = 0.12 / 4 = 0.03
Total periods (n) = 2 × 4 = 8

A = P(1 + r)ⁿ
A = 20,000(1 + 0.03)⁸
A = 20,000(1.03)⁸
A = 20,000 × 1.26677
A = KSh 25,335.40

text

---

### Example 3: Compounded Semi-Annually

**Problem:** KSh 30,000 is invested at 8% compound interest per year for 3 years, compounded semi-annually. Find the amount.

**Solution:**
P = 30,000
Annual rate = 8% = 0.08
Compounding periods per year = 2 (semi-annually)
r per period = 0.08 / 2 = 0.04
Total periods (n) = 3 × 2 = 6

A = 30,000(1 + 0.04)⁶
A = 30,000(1.04)⁶
A = 30,000 × 1.26532
A = KSh 37,959.60

text

---

### Example 4: Compounded Monthly

**Problem:** KSh 50,000 is invested at 6% compound interest per year for 2 years, compounded monthly. Find the amount.

**Solution:**
P = 50,000
Annual rate = 6% = 0.06
Compounding periods per year = 12 (monthly)
r per period = 0.06 / 12 = 0.005
Total periods (n) = 2 × 12 = 24

A = 50,000(1 + 0.005)²⁴
A = 50,000(1.005)²⁴
A = 50,000 × 1.12716
A = KSh 56,358

text

---

### Example 5: Finding Rate

**Problem:** KSh 40,000 grows to KSh 53,240 in 3 years at compound interest. Find the rate.

**Solution:**
P = 40,000
A = 53,240
n = 3 years

A = P(1 + r)ⁿ
53,240 = 40,000(1 + r)³
53,240 / 40,000 = (1 + r)³
1.331 = (1 + r)³
∛1.331 = 1 + r
1.10 = 1 + r
r = 0.10 = 10%

text

---

### Example 6: Finding Principal

**Problem:** What principal will grow to KSh 66,550 in 2 years at 5% compound interest?

**Solution:**
A = 66,550
r = 5% = 0.05
n = 2 years

A = P(1 + r)ⁿ
66,550 = P(1.05)²
66,550 = P × 1.1025
P = 66,550 / 1.1025
P = KSh 60,000

text

---

## 📊 Finding Time Using Logarithms

### The Formula:
A = P(1 + r)ⁿ

text

### Steps to find n (time):

1. Divide both sides by P
2. Take log of both sides
3. Use the power rule: log(aᵇ) = b × log(a)
4. Solve for n

### Example 7: Finding Time Using Logarithms

**Problem:** How long will it take KSh 30,000 to grow to KSh 48,000 at 8% compound interest?

**Solution:**
P = 30,000
A = 48,000
r = 8% = 0.08

A = P(1 + r)ⁿ
48,000 = 30,000(1.08)ⁿ
48,000 / 30,000 = (1.08)ⁿ
1.6 = (1.08)ⁿ

Take log of both sides:
log(1.6) = log(1.08)ⁿ
log(1.6) = n × log(1.08)

n = log(1.6) / log(1.08)
n = 0.2041 / 0.0334
n = 6.11 years

text

---

### Example 8: Finding Time Using Logarithms

**Problem:** How long will it take KSh 20,000 to grow to KSh 35,000 at 10% compound interest?

**Solution:**
P = 20,000
A = 35,000
r = 10% = 0.10

A = P(1 + r)ⁿ
35,000 = 20,000(1.10)ⁿ
1.75 = (1.10)ⁿ

log(1.75) = n × log(1.10)
n = log(1.75) / log(1.10)
n = 0.2430 / 0.0414
n = 5.87 years

text

---

## 📊 Comparison: Simple vs Compound Interest

| Year | Simple Interest (10%) | Compound Interest (10%) |
|------|----------------------|------------------------|
| 0 | KSh 10,000 | KSh 10,000 |
| 1 | KSh 11,000 | KSh 11,000 |
| 2 | KSh 12,000 | KSh 12,100 |
| 3 | KSh 13,000 | KSh 13,310 |
| 4 | KSh 14,000 | KSh 14,641 |
| 5 | KSh 15,000 | KSh 16,105 |

---

## 🌍 Real-Life Applications

### Application 1: Savings Account

> You deposit KSh 100,000 at 7% compound interest for 10 years.
>
> **Amount:** 100,000(1.07)¹⁰ = KSh 196,715

### Application 2: Investment

> You invest KSh 500,000 at 12% compound interest for 5 years.
>
> **Amount:** 500,000(1.12)⁵ = KSh 881,170

### Application 3: Loan

> You borrow KSh 1,000,000 at 15% compound interest for 3 years.
>
> **Amount to repay:** 1,000,000(1.15)³ = KSh 1,520,875

---

## 🎯 Practice Questions

**Question 1:** KSh 50,000 at 8% compound interest for 2 years. Find the amount.

<details>
<summary>Click to reveal answer</summary>

A = 50,000(1.08)² = 50,000 × 1.1664 = KSh 58,320
</details>

---

**Question 2:** What principal will grow to KSh 80,000 in 3 years at 10% compound interest?

<details>
<summary>Click to reveal answer</summary>

P = 80,000 / (1.10)³ = 80,000 / 1.331 = KSh 60,105
</details>

---

**Question 3:** How long will it take KSh 40,000 to grow to KSh 60,000 at 6% compound interest?

<details>
<summary>Click to reveal answer</summary>

n = log(1.5) / log(1.06) = 0.1761 / 0.0253 = 6.96 years
</details>

---

## 📊 Summary

### Key Formulas:

| Concept | Formula |
|---------|---------|
| Compound Interest Amount | A = P(1 + r)ⁿ |
| Compound Interest | CI = A - P |
| Finding Rate | r = (A/P)^(1/n) - 1 |
| Finding Time | n = log(A/P) / log(1 + r) |

### Key Terms:
- **Principal:** Original amount
- **Rate:** Percentage per period
- **Periods:** Number of compounding periods
- **Compound Interest:** Interest on interest
- **Amount:** Final total

---

**Great job! You've completed Compound Interest!** 🎉