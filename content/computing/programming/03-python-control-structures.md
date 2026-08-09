---
title: "Python Control Structures"
topic: "Programming"
subtopic: "Python"
level: "Intermediate"
duration: "30 min"
learningObjectives:
  - "Use conditional statements (if, elif, else)"
  - "Use loops (for, while)"
  - "Write and use functions"
  - "Understand the flow of a program"
tags: ["python", "control-flow", "loops", "functions"]
---

# Python Control Structures

## 🎯 What are Control Structures?

**Control structures** determine the flow of a program. They allow you to make decisions and repeat actions.

### Types:
1. **Conditional Statements** (if, elif, else)
2. **Loops** (for, while)
3. **Functions** (reusable code blocks)

---

## 🔑 Conditional Statements

### If Statement

```python
age = 18

if age >= 18:
    print("You are an adult!")
If-Else Statement
python
age = 16

if age >= 18:
    print("You are an adult!")
else:
    print("You are a minor.")
If-Elif-Else
python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print("Grade:", grade)  # Grade: B
🔄 Loops
For Loop
Repeats code a fixed number of times.

python
# Loop through numbers 0-4
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
python
# Loop through a list
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)  # apple, banana, orange
While Loop
Repeats code while a condition is true.

python
count = 0

while count < 5:
    print(count)  # 0, 1, 2, 3, 4
    count = count + 1
📝 Functions
Functions are reusable blocks of code.

python
# Define a function
def greet(name):
    print("Hello, " + name + "!")

# Call the function
greet("John")  # Hello, John!
greet("Sarah")  # Hello, Sarah!
Function with Return Value:
python
def add(a, b):
    result = a + b
    return result

sum = add(5, 3)
print(sum)  # 8
Default Parameters:
python
def greet(name="Guest"):
    print("Hello, " + name + "!")

greet()          # Hello, Guest!
greet("John")   # Hello, John!
💡 Practical Examples
Example 1: Even or Odd
python
def check_even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_even_odd(4))  # Even
print(check_even_odd(7))  # Odd
Example 2: Sum of Numbers
python
def sum_numbers(n):
    total = 0
    for i in range(1, n+1):
        total = total + i
    return total

print(sum_numbers(5))  # 15 (1+2+3+4+5)
Example 3: FizzBuzz
python
def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz(15)
📊 Summary
Key Points:
If statements make decisions

For loops repeat a fixed number of times

While loops repeat while a condition is true

Functions create reusable code

Return sends a value back from a function

Great job! You've completed Python Control Structures! 🎉