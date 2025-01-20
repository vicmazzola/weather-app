const Weather = ({weatherData}) => {

    if (!weatherData.weather) return null;

    const {name, sys, weather, main, wind} = weatherData;
    const [{icon, description}] = weather;
    return (
        <div className="w-auto max-w-[400px] bg-white/90 text-gray-800 shadow-lg rounded-xl mx-auto p-6 mt-8">
            <div className="text-center">
                <p className="text-2xl font-semibold">{name}, {sys.country}</p>
                <p className="text-sm text-gray-600 capitalize">{description}</p>
                <h1 className="text-6xl font-bold my-4">{main.temp.toFixed()} ºC</h1>
            </div>
            <div className="w-auto max-w-[400px] bg-white/90 text-gray-800 shadow-lg rounded-xl mx-auto p-8 mt-8">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon"
                     className="w-32 h-32 object-contain filter-none"/>
                <div className="text-sm">
                    <div className="flex justify-between">
                    <span className="font-medium">Feels Like:</span>
                        <span>{main.feels_like.toFixed()} ºC</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Humidity:</span>
                        <span>{main.humidity}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Wind Speed: </span>
                        <span>{wind.speed.toFixed()} KPH</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Pressure:</span>
                        <span>{main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
