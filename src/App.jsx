import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Weather from "./components/Weather.jsx";
import RecentSearches from "./components/RecentSearches.jsx";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    useEffect(() => {
        const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(savedSearches);
    }, []);

    const saveToLocalStorage = (location) => {
        const updatedSearches = [location, ...recentSearches.filter((item) => item !== location)].slice(0, 5);
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    };

    const updateSearches = (newSearches) => {
        setRecentSearches(newSearches);
        localStorage.setItem("recentSearches", JSON.stringify(newSearches));
    };

    const searchLocation = async (manualLocation = null) => {
        const searchValue = manualLocation || location;
        if (!searchValue.trim()) {
            console.error("Location cannot be empty");
            return;
        }
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`
            );
            setData(response.data);
            saveToLocalStorage(searchValue);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
        setLocation("");
    };


    const handleRecentSelect = (selectedLocation) => {
        searchLocation(selectedLocation);
    };


    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 ">
            <Header/>
            <div className="text-center p-6">
                <input
                    type="text"
                    className="py-3 px-4 md:px-6 w-full max-w-md text-lg text-black rounded-3xl border shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && searchLocation()}
                />
            </div>
            <Weather weatherData={data} />
            <RecentSearches
                recentSearches={recentSearches}
                onSelectLocation={handleRecentSelect}
                updateSearches={updateSearches}
            />
            <Footer/>

        </div>
    );
}

export default App;
