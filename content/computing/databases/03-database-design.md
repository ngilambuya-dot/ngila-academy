---
title: "Database Design"
topic: "Databases"
subtopic: "Design"
level: "Intermediate"
duration: "25 min"
learningObjectives:
  - "Understand database design principles"
  - "Normalize database tables"
  - "Create relationships between tables"
  - "Design a database for a real-world application"
tags: ["database", "design", "normalization", "relationships"]
---

# Database Design

## 🎯 What is Database Design?

**Database design** is the process of organizing data into tables and relationships. Good design ensures data is:
- **Efficient** (fast to access)
- **Accurate** (no duplicate data)
- **Scalable** (works with large data)

---

## 🔑 Key Design Concepts

### 1. Tables
Data is organized into tables with rows and columns.

**Example: Students Table**

| id | name | age | city |
|----|------|-----|------|
| 1 | John | 25 | Nairobi |
| 2 | Sarah | 22 | Mombasa |

### 2. Primary Key
A unique identifier for each row.

```sql
id INTEGER PRIMARY KEY
3. Foreign Key
Links to another table.

sql
student_id INTEGER REFERENCES students(id)
📊 Relationships
One-to-One
One record in table A matches one record in table B.

text
User (id, name) ──── Person (id, user_id, bio)
One-to-Many
One record in table A matches many records in table B.

text
Class (id, name) ──── Student (id, name, class_id)
Many-to-Many
Many records in table A match many records in table B.

text
Student (id) ──── Enrollments (student_id, course_id) ──── Course (id)
💡 Normalization
Organizing data to reduce redundancy.

Example: Before Normalization
Single Table:

student	class	teacher
John	Math	Mr. Smith
Sarah	Math	Mr. Smith
John	Science	Ms. Jones
After Normalization:
Students:

id	name
1	John
2	Sarah
Classes:

id	name	teacher
1	Math	Mr. Smith
2	Science	Ms. Jones
Enrollments:

student_id	class_id
1	1
2	1
1	2
📝 Example: Library Database
Tables:
Books:

id	title	author_id
Authors:

id	name
Loans:

id	book_id	member_id	date
Members:

id	name	email
Query:
sql
SELECT books.title, authors.name
FROM books
JOIN authors ON books.author_id = authors.id;
📊 Summary
Key Points:
Tables organize data with rows and columns

Primary keys uniquely identify rows

Foreign keys link tables

Relationships define connections

Normalization reduces duplication

Great job! You've completed Database Design! 🎉