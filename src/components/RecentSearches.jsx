const RecentSearches = ({ recentSearches, onSelectLocation, updateSearches }) => {
    const handleDelete = (location) => {
        const updatedSearches = recentSearches.filter((search) => search !== location);
        updateSearches(updatedSearches);
    };

    const clearAllSearches = () => {
        updateSearches([]);
    };

    return (
        <div className="w-[90%] max-w-md mx-auto mt-6 bg-white/90 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">Recent Searches</h3>
                {recentSearches.length > 0 && (
                    <button
                        className="text-sm text-red-500 hover:text-red-700"
                        onClick={clearAllSearches}
                    >
                        Clear All
                    </button>
                )}
            </div>
            <ul className="space-y-2">
                {recentSearches.map((location, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center py-2 px-4 bg-blue-500 text-white rounded-lg"
                    >
                        <span
                            className="cursor-pointer hover:underline"
                            onClick={() => onSelectLocation(location)}
                        >
                            {location}
                        </span>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(location)}
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;
