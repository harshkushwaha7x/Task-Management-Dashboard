import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'lucide-react';
import { setSearchQuery, selectSearchQuery } from '../store/tasksSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(selectSearchQuery);

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search tasks..."
                className="w-full pl-12 pr-4 py-3 rounded-xl glass-morphism
                   text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                   transition-all duration-300"
            />
        </div>
    );
};

export default SearchBar;
