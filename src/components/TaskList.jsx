import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTasks, selectLoading } from '../store/tasksSlice';
import TaskItem from './TaskItem';
import { ListTodo } from 'lucide-react';

const TaskList = () => {
    const tasks = useSelector(selectFilteredTasks);
    const loading = useSelector(selectLoading);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="glass-morphism rounded-2xl p-12 text-center animate-fade-in">
                <ListTodo className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No tasks found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Add a new task to get started or adjust your filters
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
