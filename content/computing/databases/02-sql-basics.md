---
title: "SQL Basics"
topic: "Databases"
subtopic: "SQL"
level: "Beginner"
duration: "25 min"
learningObjectives:
  - "Understand what SQL is"
  - "Write basic SQL queries"
  - "Filter and sort data"
  - "Join tables together"
tags: ["sql", "databases", "queries", "basics"]
---

# SQL Basics

## 🎯 What is SQL?

**SQL** (Structured Query Language) is used to talk to databases. It allows you to create, read, update, and delete data.

### The 4 Main Operations:
- **C**reate (INSERT)
- **R**ead (SELECT)
- **U**pdate (UPDATE)
- **D**elete (DELETE)

---

## 🔑 SQL Commands

### SELECT (Reading Data)

```sql
SELECT * FROM students;  -- All columns
SELECT name, age FROM students;  -- Specific columns
INSERT (Adding Data)
sql
INSERT INTO students (name, age, city)
VALUES ('John', 25, 'Nairobi');
UPDATE (Modifying Data)
sql
UPDATE students
SET age = 26
WHERE name = 'John';
DELETE (Removing Data)
sql
DELETE FROM students
WHERE name = 'John';
📊 Filtering Data
WHERE Clause:
sql
-- Exact match
SELECT * FROM students WHERE age = 25;

-- Greater than
SELECT * FROM students WHERE age > 20;

-- Pattern matching
SELECT * FROM students WHERE name LIKE 'J%';
ORDER BY:
sql
-- Ascending
SELECT * FROM students ORDER BY name ASC;

-- Descending
SELECT * FROM students ORDER BY age DESC;
LIMIT:
sql
SELECT * FROM students LIMIT 5;
💡 Joining Tables
Two Tables:
Students Table:

id	name	class_id
1	John	101
2	Sarah	102
Classes Table:

id	name
101	Math
102	Science
INNER JOIN:
sql
SELECT students.name, classes.name as class
FROM students
INNER JOIN classes ON students.class_id = classes.id;
Result:

name	class
John	Math
Sarah	Science
📝 Summary
Key Points:
SQL talks to databases

SELECT reads data

INSERT adds data

UPDATE changes data

DELETE removes data

JOIN combines tables

Great job! You've completed SQL Basics! 🎉