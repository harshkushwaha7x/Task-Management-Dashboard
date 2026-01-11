<div align="center">

# TASK MANAGER ✅

**Task Manager** is a modern task management dashboard built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. It enables **efficient task organization**, **real-time filtering**, and **seamless task management** — designed for productivity and clean code practices.

• [Live Demo](https://task-management-dashboard-topaz.vercel.app/) • [Portfolio](https://portfolio-harsh7x.vercel.app/) • [GitHub](https://github.com/harshkushwaha7x)

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react" alt="react">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.2.1-764abc?style=flat-square&logo=redux" alt="redux">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=flat-square&logo=tailwindcss" alt="tailwind">
  <img src="https://img.shields.io/badge/version-1.0.0-success?style=flat-square" alt="version" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license" />
</p>

---

## 📋 Overview

**Task Manager** is a full-stack task management dashboard enabling users to organize tasks efficiently with real-time updates, advanced filtering, and theme customization.
Built using **React.js**, **Redux Toolkit**, and **Tailwind CSS**, it delivers a fast, responsive, and scalable task management experience.

Core highlights:

* ⚡ **Real-Time Updates**: Instant UI reflection for all operations
* 🔍 **Smart Filtering**: Filter by All, Completed, or Pending
* 🔎 **Live Search**: Real-time search with filter integration
* 🌓 **Theme Toggle**: Dark and light mode with persistence
* 📱 **Responsive Design**: Optimized for all devices
* 🎨 **Modern UI**: Glassmorphism effects and smooth animations

---

## 🚀 Key Features

### ✅ Task Management

* Create new tasks with validation
* Edit tasks inline with save/cancel options
* Delete tasks with confirmation dialog
* Toggle task status between Completed and Pending
* Immediate UI updates for all operations

### 🔍 Filtering & Search

* Filter tasks by All, Completed, or Pending
* Live task count on each filter button
* Real-time search by task title
* Case-insensitive search functionality
* Combined filter and search logic

### 🎨 User Interface

* Modern glassmorphism design
* Professional blue-cyan color palette
* Smooth animations and transitions
* Google Fonts (Inter) typography
* Dark mode support with localStorage persistence

---

## ⚙️ Tech Stack

### Frontend

* React 18.3.1 with Hooks
* Redux Toolkit 2.2.1
* Tailwind CSS 3.4.1
* Vite 5.1.4
* Lucide React (Icons)

### Mock API

* JSON Server 0.17.4
* Concurrently 8.2.2

### State Management

* Redux Toolkit slices for tasks and theme
* Memoized selectors for performance
* Immutable state updates with Immer
* Centralized store configuration

---

## 🧩 Architecture

```text
task-management-dashboard/
├── src/
│   ├── components/         # React Components
│   │   ├── AddTaskForm.jsx
│   │   ├── FilterButtons.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── ThemeToggle.jsx
│   ├── services/          # API Layer
│   │   └── api.js
│   ├── store/             # Redux Store
│   │   ├── store.js
│   │   ├── tasksSlice.js
│   │   └── themeSlice.js
│   ├── App.jsx            # Main Component
│   ├── main.jsx           # Entry Point
│   └── index.css          # Global Styles
│
├── db.json                # Mock Database
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🧰 Getting Started

### Prerequisites

* Node.js v16+
* npm or yarn

### Installation

```bash
git clone https://github.com/harshkushwaha7x/Task-Management-Dashboard.git
cd Assignment-Task-Management-Dashboard
```

#### Install Dependencies

```bash
npm install
```

#### Run Project

```bash
# Start both React app and JSON Server
npm start

# React app: http://localhost:3000
# JSON Server: http://localhost:3001
```

**Or run separately:**

```bash
# Terminal 1 - Frontend (Port 3000)
npm run dev

# Terminal 2 - Backend API (Port 3001)
npm run server
```

#### Build for Production

```bash
npm run build
npm run preview
```

---

## 💡 Usage Guide

### Adding Tasks

* Enter task title in the input field
* Click "Add Task" or press Enter
* Task appears immediately in the list

### Editing Tasks

* Click the edit icon on any task
* Modify the title inline
* Click save to confirm or cancel to discard

### Deleting Tasks

* Click the delete icon on a task
* Confirm deletion in the dialog
* Task is removed immediately

### Managing Status

* Click circle icon to mark as completed
* Click checkmark icon to mark as pending
* Status badge updates automatically

### Filtering & Searching

* Click filter buttons (All/Completed/Pending)
* Type in search box to filter by title
* Search works with active filter

### Theme Toggle

* Click sun/moon icon to switch themes
* Theme preference saved in localStorage
* Auto-restores on page reload

---

## 🔌 API Endpoints

### Tasks

* `GET /tasks` — Fetch all tasks
* `POST /tasks` — Create a new task
* `PUT /tasks/:id` — Update a task
* `DELETE /tasks/:id` — Delete a task

---

## 📱 Responsive Design

* Mobile (375px+) — Single column layout
* Tablet (768px+) — Optimized spacing
* Desktop (1920px+) — Full layout with effects

---

## ⚡ Performance

* Vite for fast development builds
* Optimized Redux selectors
* Minimal re-renders with memoization
* Production-ready bundle optimization

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push & open a Pull Request

---

## 🪪 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

**Harsh Kushwaha** — Developer & Maintainer

* Portfolio: [https://portfolio-harsh7x.vercel.app/](https://portfolio-harsh7x.vercel.app/)
* GitHub: [https://github.com/harshkushwaha7x](https://github.com/harshkushwaha7x)
* LinkedIn: [https://www.linkedin.com/in/harsh-kushwaha-7x/](https://www.linkedin.com/in/harsh-kushwaha-7x/)
* Email: [harshkushwaha4151@gmail.com](mailto:harshkushwaha4151@gmail.com)

---

<div align="center">

**TASK MANAGER** – Organize Tasks. Boost Productivity.

Built by **Harsh Kushwaha**

</div>

---
