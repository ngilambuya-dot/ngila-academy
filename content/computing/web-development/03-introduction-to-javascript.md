---
title: "Introduction to JavaScript"
topic: "Web Development"
subtopic: "JavaScript"
level: "Beginner"
duration: "25 min"
learningObjectives:
  - "Understand what JavaScript is and why it's used"
  - "Write basic JavaScript code"
  - "Manipulate HTML elements with JavaScript"
  - "Handle user interactions"
tags: ["javascript", "web", "frontend", "interactive"]
---

# Introduction to JavaScript

## 🎯 What is JavaScript?

**JavaScript** is a programming language that makes web pages interactive. It runs in the browser.

### What JavaScript Can Do:
- Respond to button clicks
- Validate forms
- Create animations
- Update content dynamically
- Fetch data from servers

---

## 🔑 JavaScript Basics

### Variables:

```javascript
let name = "John";          // String
let age = 25;               // Number
let isStudent = true;       // Boolean
let colors = ["red", "blue"]; // Array
Functions:
javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John"); // Hello, John!
Conditions:
javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
Loops:
javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
💡 DOM Manipulation
DOM = Document Object Model - the structure of a web page.

Selecting Elements:
javascript
document.getElementById("myId");
document.querySelector(".myClass");
Changing Content:
javascript
document.getElementById("demo").innerHTML = "New text";
Changing Styles:
javascript
document.getElementById("demo").style.color = "red";
📝 Example: Interactive Button
html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>
    <p id="message"></p>

    <script>
        function sayHello() {
            document.getElementById("message").innerHTML = "Hello, World!";
        }
    </script>
</body>
</html>
📊 Summary
Key Points:
JavaScript makes pages interactive

Variables store data

Functions perform actions

DOM Manipulation changes HTML

Events respond to user actions

Great job! You've completed Introduction to JavaScript! 🎉