---
title: "Introduction to Computers"
topic: "Fundamentals"
subtopic: "Computer Basics"
level: "Beginner"
duration: "20 min"
learningObjectives:
  - "Define what a computer is"
  - "Identify the main components of a computer"
  - "Understand the difference between hardware and software"
  - "Explain the function of an operating system"
tags: ["computers", "hardware", "software", "basics"]
---

# Introduction to Computers

## 🎯 What is a Computer?

A **computer** is an electronic device that processes data and performs calculations. It takes input, processes it, and produces output.

### The Basic Process:
Input → Process → Output

text

**Examples:** Laptops, desktops, smartphones, tablets, servers

---

## 🔑 Hardware vs Software

| Term | Definition | Examples |
|------|------------|----------|
| **Hardware** | Physical parts you can touch | Monitor, keyboard, CPU, RAM |
| **Software** | Programs and instructions | Windows, Microsoft Word, Games |

### Hardware Components:

1. **CPU (Central Processing Unit)** - The brain of the computer
2. **RAM (Random Access Memory)** - Temporary memory for active tasks
3. **Hard Drive/SSD** - Permanent storage for files
4. **Motherboard** - Connects all components
5. **Power Supply** - Provides power to components

### Software Types:

1. **Operating System** - Manages hardware (Windows, macOS, Linux)
2. **Applications** - Programs for specific tasks (Word, Chrome, Photoshop)
3. **Utilities** - Maintenance tools (Antivirus, Disk Cleanup)

---

## 📚 Types of Computers

| Type | Use | Example |
|------|-----|---------|
| **Desktop** | Office, gaming | Dell, HP, iMac |
| **Laptop** | Portable computing | MacBook, Lenovo |
| **Tablet** | Touchscreen mobile | iPad, Samsung Galaxy |
| **Smartphone** | Communication | iPhone, Android |
| **Server** | Network services | Cloud servers |
| **Supercomputer** | Complex calculations | Weather forecasting |

---

## 💡 How Computers Work

### The Input-Process-Output Cycle:
[Input] → [Processing] → [Output]
↓ ↓ ↓
Keyboard CPU Monitor
Mouse RAM Printer
Microphone Software Speakers

text

---

## 📊 Summary

### Key Points:
1. **Computer** processes data using hardware and software
2. **Hardware** is physical, **Software** is programs
3. **CPU** is the brain, **RAM** is short-term memory
4. **Operating System** manages everything

---

**Great job! You've completed Introduction to Computers!** 🎉
Computing → Programming
Create: content/computing/programming/01-introduction-to-python.md

powershell
New-Item -Path "content\computing\programming\01-introduction-to-python.md" -ItemType File -Force
Copy and paste:

markdown
---
title: "Introduction to Python"
topic: "Programming"
subtopic: "Python"
level: "Beginner"
duration: "25 min"
learningObjectives:
  - "Understand what Python is and why it's popular"
  - "Install Python and set up a development environment"
  - "Write and run a simple Python program"
  - "Understand basic Python syntax"
tags: ["python", "programming", "coding", "basics"]
---

# Introduction to Python

## 🎯 What is Python?

**Python** is a popular, easy-to-learn programming language used for:
- Web development
- Data science
- Artificial Intelligence
- Game development
- Automation

### Why Python?
✅ Easy to read and write  
✅ Large community support  
✅ Many libraries available  
✅ Used by companies like Google, NASA, Spotify  

---

## 🔑 Python Basics

### Your First Python Program:

```python
# This is a comment
print("Hello, World!")
Output:

text
Hello, World!
Variables:
python
name = "Alex"           # String
age = 25                # Integer
height = 1.75           # Float
is_student = True       # Boolean

print(name)             # Output: Alex
print(age)              # Output: 25
Data Types:
Type	Example	Description
String	"Hello"	Text
Integer	42	Whole numbers
Float	3.14	Decimal numbers
Boolean	True	True/False
List	[1, 2, 3]	Collection of items
User Input:
python
name = input("What is your name? ")
print("Hello, " + name + "!")
If Statements:
python
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
Loops:
python
# For loop
for i in range(5):
    print(i)    # Output: 0, 1, 2, 3, 4

# While loop
count = 0
while count < 3:
    print(count)
    count = count + 1
📊 Summary
Key Points:
Python is beginner-friendly and powerful

Variables store data (strings, numbers, booleans)

Print() displays output

Input() gets user input

If statements make decisions

Loops repeat code

Great job! You've completed Introduction to Python! 🎉

text

---

### Computing → Web Development

**Create:** `content/computing/web-development/01-introduction-to-html.md`

```powershell
New-Item -Path "content\computing\web-development\01-introduction-to-html.md" -ItemType File -Force
Copy and paste:

markdown
---
title: "Introduction to HTML"
topic: "Web Development"
subtopic: "HTML"
level: "Beginner"
duration: "20 min"
learningObjectives:
  - "Understand what HTML is and why it's used"
  - "Write basic HTML structure"
  - "Use common HTML tags"
  - "Create a simple web page"
tags: ["html", "web", "frontend", "basics"]
---

# Introduction to HTML

## 🎯 What is HTML?

**HTML** (HyperText Markup Language) is the standard language for creating web pages. It defines the structure of a website.

### Basic Structure:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
🔑 Common HTML Tags
Tag	Purpose	Example
<h1> - <h6>	Headings	<h1>Title</h1>
<p>	Paragraph	<p>Text</p>
<a>	Link	<a href="url">Link</a>
<img>	Image	<img src="image.jpg">
<ul>	Unordered list	<ul><li>Item</li></ul>
<ol>	Ordered list	<ol><li>Item</li></ol>
<div>	Division/Container	<div>Content</div>
Example: Simple Web Page
html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>This is my first web page!</p>
    <a href="https://google.com">Visit Google</a>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>
📊 Summary
Key Points:
HTML structures web pages

Tags define elements (h1, p, a, img)

Attributes add extra info (href, src)

Browsers render HTML to display pages

Great job! You've completed Introduction to HTML! 🎉

text

---

### Computing → Databases

**Create:** `content/computing/databases/01-introduction-to-databases.md`

```powershell
New-Item -Path "content\computing\databases\01-introduction-to-databases.md" -ItemType File -Force
Copy and paste:

markdown
---
title: "Introduction to Databases"
topic: "Databases"
subtopic: "Database Basics"
level: "Beginner"
duration: "20 min"
learningObjectives:
  - "Understand what a database is"
  - "Differentiate between relational and non-relational databases"
  - "Understand basic SQL commands"
  - "Design a simple database"
tags: ["databases", "sql", "data", "basics"]
---

# Introduction to Databases

## 🎯 What is a Database?

A **database** is an organized collection of data that can be easily accessed, managed, and updated.

### Examples:
- Student records at a school
- Customer information at a store
- Employee data at a company

---

## 🔑 Types of Databases

### 1. Relational Databases (SQL)
Data is stored in tables with rows and columns.
ID	Name	Age	City
1	John	25	Nairobi
2	Sarah	30	Mombasa
3	Peter	22	Kisumu
text

**Examples:** MySQL, PostgreSQL, SQLite

### 2. Non-Relational Databases (NoSQL)
Data is stored as documents (like JSON).

```json
{
  "name": "John",
  "age": 25,
  "city": "Nairobi"
}
Examples: MongoDB, Firebase, Redis

📚 SQL Basics
SQL (Structured Query Language) is used to interact with relational databases.

Common SQL Commands:
Command	Purpose	Example
SELECT	Get data	SELECT * FROM students;
INSERT	Add data	INSERT INTO students VALUES (1, 'John');
UPDATE	Change data	UPDATE students SET age=26 WHERE id=1;
DELETE	Remove data	DELETE FROM students WHERE id=1;
Example:
sql
-- Create a table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    city TEXT
);

-- Insert data
INSERT INTO students VALUES (1, 'John', 25, 'Nairobi');

-- Query data
SELECT * FROM students;
📊 Database Design
Rules:
Each table has a primary key (unique identifier)

Tables are connected using foreign keys

Data is organized to avoid duplication

Example: School Database
text
Students Table      Classes Table
| id | name | class |     | id | name      |
|----|------|-------|     |----|-----------|
| 1  | John | 101   |     | 101| Math      |
| 2  | Sarah| 102   |     | 102| Science   |
📊 Summary
Key Points:
Database = organized data collection

Relational (SQL) = tables with rows/columns

Non-relational (NoSQL) = documents

SQL = language for databases

Primary keys = unique identifiers

Great job! You've completed Introduction to Databases! 🎉

text

---

### Computing → Data Science

**Create:** `content/computing/data-science/01-introduction-to-data-science.md`

```powershell
New-Item -Path "content\computing\data-science\01-introduction-to-data-science.md" -ItemType File -Force
Copy and paste:

markdown
---
title: "Introduction to Data Science"
topic: "Data Science"
subtopic: "Data Science Basics"
level: "Beginner"
duration: "20 min"
learningObjectives:
  - "Understand what Data Science is"
  - "Know the data science workflow"
  - "Understand key concepts"
  - "See real-world applications"
tags: ["data-science", "data", "analysis", "basics"]
---

# Introduction to Data Science

## 🎯 What is Data Science?

**Data Science** is the field of using data to gain insights and make decisions. It combines:
- Mathematics and Statistics
- Computer Science
- Domain Knowledge

---

## 🔑 The Data Science Process

### 1. Data Collection
Gathering data from various sources.

### 2. Data Cleaning
Removing errors and inconsistencies.

### 3. Data Exploration
Understanding the data through visualization.

### 4. Modeling
Using algorithms to find patterns.

### 5. Interpretation
Explaining what the data means.

---
[Data Collection] → [Cleaning] → [Exploration] → [Modeling] → [Interpretation]

text

---

## 📚 Key Concepts

### 1. Data Types

| Type | Example | Use |
|------|---------|-----|
| **Numerical** | Age, Height | Math operations |
| **Categorical** | Color, City | Grouping |
| **Text** | Reviews | Text analysis |
| **Time** | Dates, Time | Time series |

### 2. Statistics

**Mean (Average):**
Mean = Sum of values / Number of values

text

**Median:** Middle value when sorted

**Mode:** Most frequent value

---

## 💡 Real-World Applications

| Field | Application |
|-------|-------------|
| **Healthcare** | Predicting diseases, drug discovery |
| **Finance** | Fraud detection, stock prediction |
| **Marketing** | Customer targeting, campaigns |
| **Transport** | Route optimization, self-driving cars |
| **Sports** | Player analytics, game strategy |

---

## 📊 Example: Simple Data Analysis

**Problem:** Find the average test score of students.

**Data:** [85, 90, 75, 88, 92]

```python
# Python code
scores = [85, 90, 75, 88, 92]
average = sum(scores) / len(scores)
print(average)  # Output: 86.0
📊 Summary
Key Points:
Data Science = extracting insights from data

Process = collect → clean → explore → model → interpret

Tools = Python, R, SQL, Tableau

Applications = everywhere!

Great job! You've completed Introduction to Data Science! 🎉