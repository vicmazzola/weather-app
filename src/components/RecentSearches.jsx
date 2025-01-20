const RecentSearches = ({ recentSearches, onSelectLocation }) => {
    const handleDelete = (location) => {
        const updatedSearches = recentSearches.filter((search) => search !== location);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
        onSelectLocation(""); // Optionally clear the selected location
    };

    return (
        <div className="w-full max-w-md mx-auto mt-4 bg-white/90 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-center">Recent Searches</h3>
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
