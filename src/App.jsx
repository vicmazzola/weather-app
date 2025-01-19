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
            setLocation(""); // Clear input field
        }
    };

    return (
        <div className="w-full h-full relative">
            <div className="text-center p-4">
                <input
                    type="text"
                    className="py-3 px-4 md:px-6 w-full md:w-[700px] text-lg rounded-3xl border shadow-md"
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
