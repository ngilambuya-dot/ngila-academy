---
title: "Python Variables and Data Types"
topic: "Programming"
subtopic: "Python"
level: "Beginner"
duration: "25 min"
learningObjectives:
  - "Understand variables and how to use them"
  - "Work with different data types"
  - "Perform operations on variables"
  - "Use type conversion"
tags: ["python", "variables", "data-types", "programming"]
---

# Python Variables and Data Types

## 🎯 What are Variables?

A **variable** is a container that stores data. Think of it as a labeled box where you can put information.

```python
name = "John"        # String
age = 25             # Integer
height = 1.75        # Float
is_student = True    # Boolean
🔑 Data Types in Python
1. Strings (str)
Text data enclosed in quotes.

python
name = "John"
message = "Hello, World!"
2. Integers (int)
Whole numbers without decimals.

python
age = 25
year = 2024
count = -10
3. Floats (float)
Numbers with decimal points.

python
price = 19.99
height = 1.75
pi = 3.14159
4. Booleans (bool)
True or False values.

python
is_student = True
is_teacher = False
5. Lists (list)
Collection of items in order.

python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
💡 Variable Operations
String Operations:
python
first_name = "John"
last_name = "Doe"

# Concatenation (joining)
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# Repetition
print("Hello" * 3)  # HelloHelloHello
Number Operations:
python
x = 10
y = 3

print(x + y)   # 13 (addition)
print(x - y)   # 7  (subtraction)
print(x * y)   # 30 (multiplication)
print(x / y)   # 3.333 (division)
print(x // y)  # 3   (floor division)
print(x % y)   # 1   (remainder/modulo)
print(x ** y)  # 1000 (exponent)
🔄 Type Conversion
Converting between data types:

python
# String to Integer
num_str = "25"
num_int = int(num_str)  # 25 (integer)

# Integer to String
num_int = 25
num_str = str(num_int)  # "25" (string)

# Float to Integer
num_float = 3.14
num_int = int(num_float)  # 3 (truncates decimal)

# Integer to Float
num_int = 5
num_float = float(num_int)  # 5.0
📝 Practice Examples
Example 1: Calculate Age
python
birth_year = 2000
current_year = 2024
age = current_year - birth_year
print("Age:", age)  # Age: 24
Example 2: Rectangle Area
python
length = 5
width = 3
area = length * width
print("Area:", area)  # Area: 15
Example 3: User Input
python
name = input("What is your name? ")
age = int(input("What is your age? "))
print("Hello " + name + "! You are " + str(age) + " years old.")
📊 Summary
Key Points:
Variables store data in containers

Data types include strings, integers, floats, booleans, lists

Operations perform calculations on variables

Type conversion changes data from one type to another

Great job! You've completed Python Variables and Data Types! 🎉