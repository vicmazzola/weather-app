const Weather = ({weatherData}) => {

    if (!weatherData.weather) return null;

    const { name, sys, weather, main, wind } = weatherData;
    const [{ icon, description }] = weather;

    return (
        <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto px-6 py-4">
            <div className="text-center">
                <p className="text-xl">{name}, {sys.country}</p>
                <p className="text-sm">{description}</p>
                <h1 className="text-6xl font-semibold">{main.temp.toFixed()} ºC</h1>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="w-[120px]" />
                <div className="text-xs">
                    <p>Feels Like: {main.feels_like.toFixed()} ºC</p>
                    <p>Humidity: {main.humidity}%</p>
                    <p>Wind Speed: {wind.speed.toFixed()} KPH</p>
                    <p>Pressure: {main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
