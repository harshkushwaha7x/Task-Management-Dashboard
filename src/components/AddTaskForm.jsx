import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { addTask } from '../store/tasksSlice';
import { createTask } from '../services/api';

const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Please enter a task title');
            return;
        }

        setIsSubmitting(true);

        try {
            const newTask = {
                title: title.trim(),
                status: 'pending',
            };

            const createdTask = await createTask(newTask);
            dispatch(addTask(createdTask));
            setTitle('');
        } catch (error) {
            alert('Failed to add task. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-3">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-3 rounded-xl glass-morphism 
                     text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                     transition-all duration-300"
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 
                     hover:from-blue-700 hover:to-cyan-700
                     text-white font-semibold rounded-xl
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Add Task</span>
                </button>
            </div>
        </form>
    );
};

export default AddTaskForm;
