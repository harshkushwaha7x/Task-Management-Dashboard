// localStorage-based API for Vercel deployment
const STORAGE_KEY = 'taskManager_tasks';

// Initialize with sample data if empty
const initializeTasks = () => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
        const initialTasks = [
            { id: "1", title: "Complete project setup", status: "completed" },
            { id: "2", title: "Review task requirements", status: "pending" },
            { id: "3", title: "Design UI mockups", status: "pending" }
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTasks));
        return initialTasks;
    }
    return JSON.parse(existing);
};

// Simulate network delay for realistic UX
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTasks = async () => {
    try {
        await delay(300);
        const tasks = initializeTasks();
        return tasks;
    } catch (error) {
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        await delay(300);
        const tasks = initializeTasks();
        const newTask = {
            ...task,
            id: Date.now().toString()
        };
        tasks.push(newTask);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        return newTask;
    } catch (error) {
        throw error;
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        await delay(300);
        const tasks = initializeTasks();
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks[index] = updatedTask;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
            return updatedTask;
        }
        throw new Error('Task not found');
    } catch (error) {
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        await delay(300);
        const tasks = initializeTasks();
        const filteredTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTasks));
        return true;
    } catch (error) {
        throw error;
    }
};
