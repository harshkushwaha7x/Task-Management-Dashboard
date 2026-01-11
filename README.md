<div align="center">

# TASK MANAGER ✅

**Task Manager** is a modern task management dashboard built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. It enables **efficient task organization**, **real-time filtering**, and **seamless task management** — designed for productivity and clean code practices.

[GitHub](https://github.com/harshkushwaha7x) • [Portfolio](https://portflio-3.vercel.app/)

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react" alt="react version">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.2.1-purple?style=flat-square&logo=redux" alt="redux toolkit">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-cyan?style=flat-square&logo=tailwindcss" alt="tailwind">
  <img src="https://img.shields.io/badge/version-1.0.0-success?style=flat-square" alt="version" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license" />
</p>

---

## 📋 Overview

**Task Manager** is a feature-rich task management dashboard demonstrating modern React development practices, state management with Redux Toolkit, and a professional UI built with Tailwind CSS.

Built as part of a technical assignment to showcase proficiency in **React fundamentals**, **Redux Toolkit state management**, **clean code practices**, and **responsive UI design**.

Core highlights:

* ✅ **Complete CRUD Operations**: Add, Edit, Delete, and Update tasks
* 🔍 **Smart Filtering**: Filter by All, Completed, or Pending tasks
* 🔎 **Real-Time Search**: Instant search with filter integration
* 🌓 **Theme Toggle**: Light/Dark mode with persistence
* 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
* ⚡ **Redux Toolkit**: Centralized state management

---

## 🚀 Key Features

### ✅ Task Management

* **Add Tasks**: Quick task creation with validation
* **Edit Tasks**: Inline editing with save/cancel options
* **Delete Tasks**: Confirmation dialog for safe deletion
* **Status Toggle**: Mark tasks as Completed or Pending
* **Immediate Updates**: All changes reflect instantly in the UI

### 🔍 Smart Filtering & Search

* **Filter Options**: All, Completed, Pending with live counts
* **Real-Time Search**: Case-insensitive search by title
* **Combined Logic**: Search works together with active filters
* **Active Indicators**: Visual feedback for current filter

### 🎨 Modern UI/UX

* **Glassmorphism Design**: Semi-transparent cards with backdrop blur
* **Professional Colors**: Blue-cyan gradient theme
* **Smooth Animations**: Fade-in, slide-up, and hover effects
* **Premium Typography**: Google Fonts (Inter)
* **Dark Mode**: Complete theme toggle with localStorage persistence

---

## ⚙️ Tech Stack

### Frontend

* **React** 18.3.1 with Hooks
* **Redux Toolkit** 2.2.1
* **Tailwind CSS** 3.4.1
* **Lucide React** (Icons)
* **Vite** 5.1.4 (Build Tool)

### Mock API

* **JSON Server** 0.17.4
* **Concurrently** (Run dev & API together)

### State Management

* Redux Toolkit slices for tasks and theme
* Memoized selectors for performance
* Immutable state updates with Immer

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
│   └── index.css          # Tailwind + Custom Styles
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
# Clone the repository
git clone <repository-url>
cd Assignment-Task-Management-Dashboard

# Install dependencies
npm install
```

### Running the Application

```bash
# Start both React app and JSON Server
npm start

# React app runs on: http://localhost:3000
# JSON Server API on: http://localhost:3001
```

**Or run separately:**

```bash
# Terminal 1 - React App (Port 3000)
npm run dev

# Terminal 2 - JSON Server API (Port 3001)
npm run server
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 💡 Usage Guide

### Adding a Task

1. Enter task title in the input field
2. Click "Add Task" or press Enter
3. Task appears immediately in the list

### Editing a Task

1. Click the ✏️ edit icon on any task
2. Modify the title inline
3. Click ✓ to save or ✕ to cancel

### Deleting a Task

1. Click the 🗑️ trash icon on any task
2. Confirm deletion in the popup
3. Task is removed immediately

### Managing Task Status

* Click ○ circle icon to mark as completed (shows ✓)
* Click ✓ checkmark to mark as pending (shows ○)
* Status badge updates automatically

### Filtering & Searching

* **All** — Shows all tasks
* **Completed** — Shows only completed tasks
* **Pending** — Shows only pending tasks
* **Search** — Type to filter by title (works with filters)

### Theme Toggle

* Click 🌙/☀️ icon in header to switch themes
* Theme preference saved in localStorage
* Auto-restores on page reload

---

## 🔌 API Endpoints

JSON Server provides RESTful endpoints:

* `GET /tasks` — Fetch all tasks
* `POST /tasks` — Create a new task
* `PUT /tasks/:id` — Update a task
* `DELETE /tasks/:id` — Delete a task

---

## 📱 Responsive Design

Optimized breakpoints for all devices:

* **Mobile**: 375px+ (Single column, touch-friendly)
* **Tablet**: 768px+ (Optimized spacing)
* **Desktop**: 1920px+ (Full layout with glassmorphism)

---

## ⚡ Performance & Best Practices

### Code Quality

* ✅ Functional components with React Hooks
* ✅ Proper separation of concerns
* ✅ Reusable component architecture
* ✅ Clean, readable code with meaningful naming
* ✅ Proper error handling throughout

### State Management

* ✅ Redux Toolkit for centralized state
* ✅ Separate slices for tasks and theme
* ✅ Memoized selectors for optimized re-renders
* ✅ Immutable state updates

### Styling

* ✅ Utility-first approach with Tailwind CSS
* ✅ Custom color palette and animations
* ✅ Responsive design patterns
* ✅ Dark mode with class strategy

---

## 📦 Dependencies

### Production

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-redux": "^9.1.0",
  "@reduxjs/toolkit": "^2.2.1",
  "lucide-react": "^0.344.0"
}
```

### Development

```json
{
  "vite": "^5.1.4",
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.17",
  "json-server": "^0.17.4",
  "concurrently": "^8.2.2"
}
```

---

## 🎯 Assignment Compliance

This project fulfills all assignment requirements:

### Core Features ✅

* ✅ Display task list with React components
* ✅ Add task with mandatory title validation
* ✅ Edit task with immediate UI updates
* ✅ Delete task with confirmation
* ✅ Toggle task status (Completed/Pending)
* ✅ Filter tasks (All/Completed/Pending)
* ✅ Search tasks by title
* ✅ Light/Dark theme toggle with persistence

### Technical Requirements ✅

* ✅ React.js with modern hooks
* ✅ Redux Toolkit for state management
* ✅ Tailwind CSS for styling
* ✅ Functional components only
* ✅ Mobile-responsive design
* ✅ Mock API with JSON Server

---

## 🌐 Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)

---

## 🤝 Contributing

This is an assignment project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push and open a Pull Request

---

## 🪪 License

This project is created for educational and demonstration purposes.

Licensed under the **MIT License**.

---

## 📬 Contact

**Harsh Kushwaha** — Developer

* **Portfolio**: [https://portflio-3.vercel.app/](https://portflio-3.vercel.app/)
* **GitHub**: [https://github.com/harshkushwaha7x](https://github.com/harshkushwaha7x)
* **LinkedIn**: [https://www.linkedin.com/in/harsh-kushwaha-7x/](https://www.linkedin.com/in/harsh-kushwaha-7x/)
* **Email**: [harshkushwaha4151@gmail.com](mailto:harshkushwaha4151@gmail.com)

---

<div align="center">

**TASK MANAGER** – Organize Tasks. Boost Productivity. ✅

Built with ❤️ by **Harsh Kushwaha**

</div>

---
