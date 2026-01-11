import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Check, X, Edit2, Trash2, CheckCircle, Circle } from 'lucide-react';
import { updateTask as updateTaskAction, deleteTask as deleteTaskAction, toggleTaskStatus } from '../store/tasksSlice';
import { updateTask, deleteTask } from '../services/api';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [isUpdating, setIsUpdating] = useState(false);
    const dispatch = useDispatch();

    const handleUpdate = async () => {
        if (!editTitle.trim()) {
            alert('Task title cannot be empty');
            return;
        }

        setIsUpdating(true);
        try {
            const updatedTask = await updateTask(task.id, { ...task, title: editTitle.trim() });
            dispatch(updateTaskAction(updatedTask));
            setIsEditing(false);
        } catch (error) {
            alert('Failed to update task');
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this task?')) {
            return;
        }

        try {
            await deleteTask(task.id);
            dispatch(deleteTaskAction(task.id));
        } catch (error) {
            alert('Failed to delete task');
        }
    };

    const handleToggleStatus = async () => {
        try {
            const newStatus = task.status === 'completed' ? 'pending' : 'completed';
            const updatedTask = await updateTask(task.id, { ...task, status: newStatus });
            dispatch(updateTaskAction(updatedTask));
        } catch (error) {
            alert('Failed to update task status');
        }
    };

    const handleCancelEdit = () => {
        setEditTitle(task.title);
        setIsEditing(false);
    };

    return (
        <div className="glass-morphism rounded-xl p-4 card-hover animate-slide-up">
            <div className="flex items-center gap-3">
                {/* Status Toggle Button */}
                <button
                    onClick={handleToggleStatus}
                    className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                    aria-label={task.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
                >
                    {task.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                        <Circle className="w-6 h-6 text-gray-400 hover:text-blue-500" />
                    )}
                </button>

                {/* Task Title or Edit Input */}
                <div className="flex-1">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 
                         border border-blue-300 dark:border-cyan-600
                         text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={isUpdating}
                            autoFocus
                        />
                    ) : (
                        <div className="flex items-center gap-3">
                            <span className={`text-lg ${task.status === 'completed'
                                ? 'line-through text-gray-500 dark:text-gray-400'
                                : 'text-gray-900 dark:text-white'}`}
                            >
                                {task.title}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                ${task.status === 'completed'
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                }`}
                            >
                                {task.status === 'completed' ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleUpdate}
                                disabled={isUpdating}
                                className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white
                           transition-all duration-300 disabled:opacity-50"
                                aria-label="Save"
                            >
                                <Check className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                disabled={isUpdating}
                                className="p-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white
                           transition-all duration-300 disabled:opacity-50"
                                aria-label="Cancel"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 rounded-lg glass-morphism hover:bg-blue-100 dark:hover:bg-blue-900/30
                           text-blue-600 dark:text-cyan-400 transition-all duration-300"
                                aria-label="Edit"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-2 rounded-lg glass-morphism hover:bg-red-100 dark:hover:bg-red-900/30
                           text-red-600 dark:text-red-400 transition-all duration-300"
                                aria-label="Delete"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
