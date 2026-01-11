import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme, selectTheme } from '../store/themeSlice';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <button
            onClick={handleToggle}
            className="p-3 rounded-xl glass-morphism card-hover transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
