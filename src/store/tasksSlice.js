import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filter: 'all', // 'all', 'completed', 'pending'
    searchQuery: '',
    loading: false,
    error: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.status = task.status === 'completed' ? 'pending' : 'completed';
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    setFilter,
    setSearchQuery,
    setLoading,
    setError,
} = tasksSlice.actions;

// Selectors
export const selectAllTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export const selectSearchQuery = (state) => state.tasks.searchQuery;
export const selectLoading = (state) => state.tasks.loading;

export const selectFilteredTasks = (state) => {
    const { tasks, filter, searchQuery } = state.tasks;

    let filtered = tasks;

    // Apply filter
    if (filter === 'completed') {
        filtered = filtered.filter(task => task.status === 'completed');
    } else if (filter === 'pending') {
        filtered = filtered.filter(task => task.status === 'pending');
    }

    // Apply search
    if (searchQuery.trim()) {
        filtered = filtered.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return filtered;
};

export const selectTaskCounts = (state) => {
    const tasks = state.tasks.tasks;
    return {
        all: tasks.length,
        completed: tasks.filter(t => t.status === 'completed').length,
        pending: tasks.filter(t => t.status === 'pending').length,
    };
};

export default tasksSlice.reducer;
