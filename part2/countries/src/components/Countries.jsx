import { useState, useEffect } from 'react'
import CountryView from './CountryView'
import weatherService from '../services/weather'

const Countries = ({ filter, countries }) => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [weather, setWeather] = useState(null)
    const [capital, setCapital] = useState(null);
    
    const isCountryInFilter = (country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase())
    }

    const countriesInFilter = countries.filter(isCountryInFilter)

    const getWeather = async (capital) => {
        console.log('getting weather for:', capital)
        const weather = await weatherService.getWeather(capital)
        setWeather(weather)
    }

    useEffect(() => {
      if (countriesInFilter.length === 1) {
        setCapital(countriesInFilter[0].capital);
      }
    }, [countriesInFilter]);

    useEffect(() => {
        if (selectedCountry) {
          setCapital(selectedCountry.capital);
        }
      }, [selectedCountry]);
    
    useEffect(() => {
      if (capital) {
        getWeather(capital);
      }
    }, [capital]);
    

    // If over 10 countries, show the message
    if (countriesInFilter.length > 10) {
        return (
            <div>
                Too many countries, specify another filter
            </div>
        )
    }
    // If there are less than 10 countries but more than 1, list the countries
    else if (countriesInFilter.length > 1) {
        return (
            <div>
                {countriesInFilter.map(country => (
                    <div key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => {
                            setSelectedCountry(country)
                        }}>Show</button>
                    </div>
                ))}
                {selectedCountry && weather && <CountryView country={selectedCountry} weather={weather} />}
            </div>
        )
    } else if (countriesInFilter.length === 1 && weather) {
        return (
            <div>
                <CountryView country={countriesInFilter[0]} weather={weather} />
            </div>
        )
    } else if (countriesInFilter.length === 1 && !weather) {
        return (
            <div>
                Loading weather data...
            </div>
        )
    } else {
        return (
            <div>
                No countries found
            </div>
        )   
    }
}

export default Countries