const API_URL = 'http://localhost:3001';

export const fetchTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        return true;
    } catch (error) {
        throw error;
    }
};
