import './App.css';
import {useState} from "react";
import axios from "axios";
import Weather from "./components/Weather.jsx";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    const searchLocation = async (event) => {
        if (event.key === "Enter") {
            if (!location.trim()) {
                console.error("Location cannot be empty");
                return;
            }
            try {
                console.log("Fetching weather data...");
                const response = await axios.get(url);
                setData(response.data);
                console.log("API Response:", response.data);
            } catch (error) {
                if (error.response?.status === 429) {
                    console.error("API call limit exceeded. Please wait before making another request.");
                } else {
                    console.error("Error fetching data:", error.message);
                }
            }
            setLocation("");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-gray-100">
            <div className="text-center p-6">
                <input
                    type="text"
                    className="py-3 px-4 md:px-6 w-full max-w-md text-lg text-black rounded-3xl border shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={searchLocation}
                />

            </div>
            <Weather weatherData={data}/>
        </div>
    );
}

export default App;
