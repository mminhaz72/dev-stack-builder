# 🚀 Dev Stack Builder

A modern web application built with React, Vite, Tailwind CSS, and DaisyUI that allows developers to explore, compare, and build their ideal technology stack for projects.

## ✨ Features
- **Interactive Tech Exploration:** Browse through frontend, backend, database, and tooling options seamlessly.
- **Stack Management:** Add and remove technologies to  custom development stack in real-time.
- **Toast Notifications:** Instant feedback alerts using `react-toastify` for all stack operations.

## 🛠️ Technology That You Use
- React.js
- Vite
- Tailwind CSS, DaisyUI
- Lucide React
- React Toastify

## 📌 React Questions & Answers

**i. What is JSX, and why is it used in React?**
- JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like structures directly within JavaScript code. It is used in React because it makes the code much cleaner, readable, and easier to write UI components.

**ii. What is the difference between props and state?**
- Props (properties) are read-only inputs passed down from parent to child components to configure them. State is a local, mutable data store managed inside the component itself that triggers a re-render whenever its value changes.

**iii. What does the useState hook do, and where did you use it in this project?**
- `useState` is a React Hook that lets functional components add and manage state variables. In this project, it was used to manage the selected technology stack array and toggle loading/UI states.

**iv. What does the useEffect hook do, and why did you need it to load the JSON data?**
- `useEffect` is a React Hook used for handling side effects like data fetching, subscriptions, or manually changing the DOM. It was needed to fetch and load the technologies from the JSON file when the component first mounts.

**v. Why does every item in a `.map()` list need a unique key prop?**
- Every item in a `.map()` list needs a unique `key` prop so React can efficiently identify which items have changed, been added, or removed, avoiding unnecessary re-renders and rendering bugs.

**vi. What is conditional rendering? Show one place you used it (example: the empty stack message).**
- Conditional rendering is the process of displaying different UI elements based on specific conditions (using ternary operators `? :` or logical `&&`). For example, it was used to show an "empty stack" message when no technologies are added to the stack yet.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
- Data is passed from a parent to a child using **props**. A child sends data or triggers an action back to the parent by calling a **callback function** passed down via props from the parent.

## 👨‍💻 Author
**MD MINHAZ**
- GitHub: [mminhaz72](https://github.com/mminhaz72)