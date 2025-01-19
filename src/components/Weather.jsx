const Weather = ({weatherData}) => {
    return (
        <div>
            {weatherData.weather ? (
                <div className='w-[500px] h-[250px] bg-gray-300
                shadow-lg rounded-xl m-auto relative px-6 top-[10%]
                '>
                    <div className="flex justify-between w-full">

                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Weather;
