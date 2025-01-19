import './App.css'
import {useState} from "react";

function App() {

    const [data,setData] = useState({})
    const [location, setLocation] = useState("")

    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API_KEY}`

    return (
        <div className="w-full h-full relative">
            <div className="text-center p-4">
                <input type="text"
                       className="
                       py-3 px-6 w-[700px]
                       text-lg rounded-3xl border border-gray-200 text-gray-600
                       placeholder:text-gray-400 focus:outline-none
                       bg-white-600/100 shadow-md"
                       placeholder="Enter location"/>
            </div>
        </div>

    )
}

export default App
