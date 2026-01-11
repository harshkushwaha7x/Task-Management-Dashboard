import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter, selectTaskCounts } from '../store/tasksSlice';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectFilter);
    const counts = useSelector(selectTaskCounts);

    const filters = [
        { id: 'all', label: 'All', count: counts.all },
        { id: 'pending', label: 'Pending', count: counts.pending },
        { id: 'completed', label: 'Completed', count: counts.completed },
    ];

    return (
        <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => dispatch(setFilter(filter.id))}
                    className={`
            px-5 py-2.5 rounded-xl font-medium transition-all duration-300
            ${activeFilter === filter.id
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                            : 'glass-morphism text-gray-700 dark:text-gray-300 hover:scale-105'
                        }
          `}
                >
                    {filter.label}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold
            ${activeFilter === filter.id
                            ? 'bg-white/20'
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-cyan-400'
                        }`}
                    >
                        {filter.count}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
