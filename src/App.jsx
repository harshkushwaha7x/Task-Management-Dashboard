import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks, setLoading } from './store/tasksSlice';
import { setTheme } from './store/themeSlice';
import { fetchTasks } from './services/api';
import ThemeToggle from './components/ThemeToggle';
import AddTaskForm from './components/AddTaskForm';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import { CheckSquare } from 'lucide-react';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        dispatch(setTheme(savedTheme));

        // Fetch tasks from API
        const loadTasks = async () => {
            dispatch(setLoading(true));
            try {
                const tasks = await fetchTasks();
                dispatch(setTasks(tasks));
            } catch (error) {
                dispatch(setTasks([]));
            }
        };

        loadTasks();
    }, [dispatch]);

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
                            <CheckSquare className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Task Manager
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Organize your tasks efficiently
                            </p>
                        </div>
                    </div>
                    <ThemeToggle />
                </div>

                {/* Add Task Form */}
                <div className="mb-8">
                    <AddTaskForm />
                </div>

                {/* Search and Filter Section */}
                <div className="glass-morphism rounded-2xl p-6 mb-6 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <SearchBar />
                        <FilterButtons />
                    </div>
                </div>

                {/* Task List */}
                <TaskList />
            </div>
        </div>
    );
}

export default App;
