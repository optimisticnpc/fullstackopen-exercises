const CountryView = ({ country, weather }) => {

    // Get weather icon from https://openweathermap.org/img/wn/01d@2x.png
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
        <div>
            <h1>{country.name.common}</h1> 
            <img src={country.flags.png} alt={country.name.common} />
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <h2>Weather in {country.capital}</h2>
            <img src={weatherIcon} alt={weather.weather[0].description} />
            {/* Convert temperature from Kelvin to Celsius */}
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
        </div>
    )
}

export default CountryView