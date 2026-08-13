---
title: "Inverse of a Matrix"
topic: "Matrices"
subtopic: "Inverse Matrices"
level: "Advanced"
duration: "35 min"
learningObjectives:
  - "Understand what an inverse matrix is"
  - "Find the inverse of a 2×2 matrix"
  - "Find the inverse of a 3×3 matrix"
  - "Use inverse matrices to solve equations"
  - "Apply inverse matrices to real-life problems"
tags: ["matrices", "inverse", "2x2", "3x3", "systems-of-equations"]
Inverse of a Matrix
🎯 What is an Inverse Matrix?
The inverse of a square matrix A is a matrix A⁻¹ such that:

text
A × A⁻¹ = A⁻¹ × A = I
Where I is the identity matrix.

Key Concept:
The inverse of a matrix is like the reciprocal of a number.

text
For numbers: 5 × 1/5 = 1
For matrices: A × A⁻¹ = I
📊 Conditions for Inverse
A matrix has an inverse IF:
✅ It is a square matrix

✅ Its determinant is not zero (det(A) ≠ 0)

If det(A) = 0:
The matrix is singular

It has no inverse

📊 Inverse of a 2×2 Matrix
Formula:
text
If A = [a  b]
       [c  d]

Then A⁻¹ = 1/(ad - bc) × [d  -b]
                          [-c   a]
Where ad - bc ≠ 0

Steps:
Find det(A) = ad - bc

Swap a and d

Change signs of b and c

Multiply by 1/det(A)

✍️ Worked Examples
Example 1: 2×2 Inverse
Problem: Find the inverse of A = [1 2]
[3 4]

Solution:

text
Step 1: det(A) = (1)(4) - (2)(3) = 4 - 6 = -2

Step 2: A⁻¹ = 1/(-2) × [4  -2]
                         [-3  1]

A⁻¹ = [-2   1]
      [ 3  -1/2]
Check:

text
A × A⁻¹ = [1  2] × [-2   1] = [1  0] = I
           [3  4]    [ 3  -1/2]   [0  1]
Example 2: 2×2 Inverse
Problem: Find the inverse of A = [2 3]
[4 5]

Solution:

text
Step 1: det(A) = (2)(5) - (3)(4) = 10 - 12 = -2

Step 2: A⁻¹ = 1/(-2) × [5  -3]
                         [-4  2]

A⁻¹ = [-2.5   1.5]
      [  2   -1]
Example 3: No Inverse
Problem: Find the inverse of A = [1 2]
[2 4]

Solution:

text
det(A) = (1)(4) - (2)(2) = 4 - 4 = 0

det(A) = 0 → No inverse! (Matrix is singular)
📊 Solving Systems of Equations Using Inverse
Method:
text
Given: AX = B
Where A is the coefficient matrix
      X is the variable matrix
      B is the constant matrix

Solution: X = A⁻¹B
Example 4: Simultaneous Equations
Problem: Solve using matrices:

text
2x + y = 5
3x - y = 4
Solution:

text
Step 1: Write in matrix form AX = B
A = [2   1]    X = [x]    B = [5]
    [3  -1]        [y]        [4]

Step 2: Find det(A)
det(A) = (2)(-1) - (1)(3) = -2 - 3 = -5

Step 3: Find A⁻¹
A⁻¹ = 1/(-5) × [-1  -1]
                [-3   2]

A⁻¹ = [1/5   1/5]
      [3/5  -2/5]

Step 4: Find X = A⁻¹B
X = [1/5   1/5] × [5] = [1]
    [3/5  -2/5]   [4]   [7/5]

Therefore: x = 1, y = 7/5
Example 5: Simultaneous Equations
Problem: Solve using matrices:

text
3x + 2y = 8
x - y = 1
Solution:

text
Step 1: A = [3  2]    X = [x]    B = [8]
            [1 -1]        [y]        [1]

Step 2: det(A) = (3)(-1) - (2)(1) = -3 - 2 = -5

Step 3: A⁻¹ = 1/(-5) × [-1  -2]
                         [-1   3]

A⁻¹ = [1/5   2/5]
      [1/5  -3/5]

Step 4: X = A⁻¹B = [1/5   2/5] × [8] = [2]
                    [1/5  -3/5]   [1]   [1]

Therefore: x = 2, y = 1
🌍 Real-Life Applications
Application 1: Cryptography
Inverse matrices are used to decode encrypted messages.

Application 2: Engineering
Used in circuit analysis and structural design.

Application 3: Economics
Input-output models use inverse matrices.

🎯 Practice Questions
Easy Level
Question 1: Find the inverse of A = [2 1]
[1 1]

<details> <summary>Click to reveal answer</summary>
det(A) = 2(1) - 1(1) = 1
A⁻¹ = [ 1 -1]
[-1 2]

</details>
Question 2: Find the inverse of A = [3 4]
[2 3]

<details> <summary>Click to reveal answer</summary>
det(A) = 3(3) - 4(2) = 9 - 8 = 1
A⁻¹ = [ 3 -4]
[-2 3]

</details>
Medium Level
Question 3: Solve using matrices:

text
2x + y = 7
x - y = 2
<details> <summary>Click to reveal answer</summary>
A = [2 1] det = -3
[1 -1]
A⁻¹ = [-1/3 -1/3]
[-1/3 2/3]
X = A⁻¹B = [-1/3 -1/3] × [7] = [-3]
[-1/3 2/3] [2] [-1]
x = -3, y = -1

</details>
📊 Summary
Key Formulas:
Item	Formula
2×2 Inverse	A⁻¹ = 1/(ad-bc) × [d -b]
Condition	det(A) ≠ 0
Solving Systems	X = A⁻¹B
Important Rules:
text
A × A⁻¹ = I
det(A) = 0 → No inverse
Matrix must be square to have an inverse
Great job! You've completed Inverse of a Matrix! 🎉