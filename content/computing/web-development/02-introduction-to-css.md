---
title: "Introduction to CSS"
topic: "Web Development"
subtopic: "CSS"
level: "Beginner"
duration: "25 min"
learningObjectives:
  - "Understand what CSS is and why it's used"
  - "Add CSS to HTML pages"
  - "Use CSS selectors and properties"
  - "Apply styling to web pages"
tags: ["css", "web", "styling", "frontend"]
---

# Introduction to CSS

## 🎯 What is CSS?

**CSS** (Cascading Style Sheets) is used to style and layout web pages. It controls how HTML elements look.

### CSS Structure:
```css
selector {
    property: value;
    property: value;
}
Example:

css
h1 {
    color: blue;
    font-size: 24px;
}
🔑 Three Ways to Add CSS
1. Inline CSS (in HTML tag)
html
<h1 style="color: red;">Hello</h1>
2. Internal CSS (in <style> tag)
html
<head>
    <style>
        h1 { color: red; }
    </style>
</head>
3. External CSS (separate file)
html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
styles.css:

css
h1 {
    color: red;
}
📊 CSS Selectors
Selector	Example	What It Does
Element	h1	Selects all h1 elements
Class	.title	Selects elements with class="title"
ID	#header	Selects element with id="header"
Universal	*	Selects all elements
Example:
html
<h1 class="title">Header</h1>
<p id="intro">Introduction</p>
css
h1 { color: blue; }        /* Selects all h1 */
.title { font-size: 24px; } /* Selects class="title" */
#intro { color: gray; }     /* Selects id="intro" */
💡 Common CSS Properties
Colors:
css
color: red;
background-color: #f0f0f0;
Fonts:
css
font-size: 16px;
font-family: Arial, sans-serif;
font-weight: bold;
Box Model:
css
margin: 20px;      /* Outside */
border: 1px solid black;
padding: 10px;     /* Inside */
width: 200px;
height: 100px;
Layout:
css
display: flex;
justify-content: center;
align-items: center;
text-align: center;
📝 Example: Styled Page
html
<!DOCTYPE html>
<html>
<head>
    <title>Styled Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
        }
        h1 {
            color: #333;
        }
        .highlight {
            background-color: yellow;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <p class="highlight">This is a highlighted paragraph.</p>
    </div>
</body>
</html>
📊 Summary
Key Points:
CSS styles web pages

Selectors target HTML elements

Properties define styles

Three ways: Inline, Internal, External

Flexbox creates layouts

Great job! You've completed Introduction to CSS! 🎉