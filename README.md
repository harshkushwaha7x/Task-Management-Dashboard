<div align="center">

# Task Management Dashboard

A modern, full-featured task management application built with React.js, Redux Toolkit, and Tailwind CSS. Demonstrates clean code practices, state management expertise, and responsive UI design.

[GitHub](https://github.com/harshkushwaha7x) • [Portfolio](https://portflio-3.vercel.app/)

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react" alt="react">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.2.1-764abc?style=flat-square&logo=redux" alt="redux">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=flat-square&logo=tailwindcss" alt="tailwind">
  <img src="https://img.shields.io/badge/Vite-5.1.4-646cff?style=flat-square&logo=vite" alt="vite">
</p>

---

## Overview

Task Management Dashboard is a feature-rich web application designed to streamline task organization and boost productivity. Built with modern React development practices, it showcases proficiency in component architecture, state management, and user interface design.

**Key Capabilities:**

- Complete CRUD operations for task management
- Advanced filtering and real-time search functionality
- Dark/Light theme with persistent user preferences
- Fully responsive design across all devices
- RESTful API integration with JSON Server
- Optimized performance with memoized selectors

---

## Features

### Task Management

**Create Tasks**
- Quick task addition with input validation
- Immediate UI updates without page refresh
- Persistent storage via API

**Edit Tasks**
- Inline editing with save/cancel controls
- Real-time validation and error handling
- Seamless state synchronization

**Delete Tasks**
- Confirmation dialog for accidental deletion prevention
- Instant removal with optimistic UI updates
- Proper error handling and rollback

**Status Management**
- Toggle between Completed and Pending states
- Visual indicators with status badges
- Automatic count updates in filter buttons

### Filtering & Search

**Smart Filtering**
- Three filter modes: All, Completed, Pending
- Live task count display per filter
- Visual feedback for active filter state

**Real-Time Search**
- Case-insensitive search by task title
- Combined search and filter logic
- Instant results as you type

### User Interface

**Modern Design**
- Glassmorphism effects with backdrop blur
- Professional blue-cyan color palette
- Smooth animations and transitions
- Premium typography with Google Fonts

**Theme System**
- Toggle between Light and Dark modes
- Automatic persistence in localStorage
- Instant theme application without reload

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI Framework |
| Redux Toolkit | 2.2.1 | State Management |
| Tailwind CSS | 3.4.1 | Styling |
| Vite | 5.1.4 | Build Tool |
| Lucide React | 0.344.0 | Icon Library |

### Backend (Mock)

| Technology | Version | Purpose |
|-----------|---------|---------|
| JSON Server | 0.17.4 | Mock REST API |
| Concurrently | 8.2.2 | Script Runner |

### State Management Architecture

- Redux Toolkit slices for modular state
- Memoized selectors for performance optimization
- Immutable state updates via Immer
- Centralized store configuration

---

## Project Structure

```
task-management-dashboard/
│
├── src/
│   ├── components/              # React Components
│   │   ├── AddTaskForm.jsx      # Task creation form
│   │   ├── FilterButtons.jsx    # Filter controls
│   │   ├── SearchBar.jsx        # Search input
│   │   ├── TaskItem.jsx         # Individual task display
│   │   ├── TaskList.jsx         # Task container
│   │   └── ThemeToggle.jsx      # Theme switcher
│   │
│   ├── services/                # API Layer
│   │   └── api.js               # HTTP client
│   │
│   ├── store/                   # Redux Store
│   │   ├── store.js             # Store configuration
│   │   ├── tasksSlice.js        # Tasks state
│   │   └── themeSlice.js        # Theme state
│   │
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Application entry
│   └── index.css                # Global styles
│
├── db.json                      # Mock database
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Documentation
```

---

## Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

**1. Clone the repository**

```bash
git clone <repository-url>
cd Assignment-Task-Management-Dashboard
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the application**

```bash
npm start
```

This command runs both the React development server (port 3000) and JSON Server API (port 3001) concurrently.

**Alternative: Run separately**

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend API
npm run server
```

**4. Access the application**

- Frontend: http://localhost:3000
- API: http://localhost:3001

### Production Build

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## Usage Guide

### Adding Tasks

1. Enter task title in the input field
2. Click "Add Task" button or press Enter
3. Task appears in the list immediately

### Editing Tasks

1. Click the edit icon on any task
2. Modify the task title inline
3. Click save to confirm or cancel to discard changes

### Deleting Tasks

1. Click the delete icon on a task
2. Confirm deletion in the dialog
3. Task is removed from the list

### Managing Task Status

- Click the circle icon to mark a task as completed
- Click the checkmark icon to mark a task as pending
- Status badge updates automatically

### Filtering Tasks

- **All**: Displays all tasks
- **Completed**: Shows only completed tasks
- **Pending**: Shows only pending tasks

### Searching Tasks

- Type in the search box to filter tasks by title
- Search works in combination with active filters
- Results update in real-time

### Theme Switching

- Click the theme toggle icon in the header
- Theme preference is saved automatically
- Setting persists across browser sessions

---

## API Documentation

### Endpoints

JSON Server provides the following RESTful endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Retrieve all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

### Request Examples

**Create Task**
```bash
POST http://localhost:3001/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "status": "pending"
}
```

**Update Task**
```bash
PUT http://localhost:3001/tasks/1
Content-Type: application/json

{
  "title": "Updated task title",
  "status": "completed"
}
```

---

## Responsive Design

The application is fully responsive across all device sizes:

| Breakpoint | Screen Size | Layout Optimizations |
|------------|-------------|---------------------|
| Mobile | 375px+ | Single column, touch-optimized controls |
| Tablet | 768px+ | Optimized spacing and button sizes |
| Desktop | 1920px+ | Full layout with enhanced visual effects |

---

## Performance Optimization

### Code Quality

- Functional components with React Hooks
- Proper component composition and separation of concerns
- Reusable component architecture
- Clean code with meaningful naming conventions
- Comprehensive error handling

### State Management

- Centralized state with Redux Toolkit
- Memoized selectors to prevent unnecessary re-renders
- Normalized state structure
- Efficient update patterns

### Build Optimization

- Vite for fast development and optimized production builds
- Code splitting ready
- Optimized asset loading
- Minimal bundle size

---

## Assignment Compliance

This project fulfills all specified assignment requirements:

### Core Features

- Display task list using React components
- Add new tasks with mandatory title validation
- Edit existing tasks with immediate UI reflection
- Delete tasks with confirmation
- Toggle task status (Completed/Pending)
- Filter tasks by All, Completed, or Pending
- Search tasks by title with filter integration
- Light/Dark theme toggle with persistence

### Technical Requirements

- Built with React.js using modern hooks
- State management via Redux Toolkit
- Styled with Tailwind CSS
- Functional components only
- Mobile-responsive design
- Mock API integration with JSON Server

---

## Dependencies

### Production Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-redux": "^9.1.0",
  "@reduxjs/toolkit": "^2.2.1",
  "lucide-react": "^0.344.0"
}
```

### Development Dependencies

```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.1.4",
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.17",
  "json-server": "^0.17.4",
  "concurrently": "^8.2.2"
}
```

---

## Browser Compatibility

Tested and optimized for:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

---

## Contributing

This is an assignment project. Suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Description of changes"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. Created for educational and demonstration purposes.

---

## Contact Information

**Harsh Kushwaha**  
Full Stack Developer

- **Portfolio**: [https://portflio-3.vercel.app/](https://portflio-3.vercel.app/)
- **GitHub**: [https://github.com/harshkushwaha7x](https://github.com/harshkushwaha7x)
- **LinkedIn**: [https://www.linkedin.com/in/harsh-kushwaha-7x/](https://www.linkedin.com/in/harsh-kushwaha-7x/)
- **Email**: [harshkushwaha4151@gmail.com](mailto:harshkushwaha4151@gmail.com)

---

<div align="center">

**Task Management Dashboard**

Built by Harsh Kushwaha

</div>
