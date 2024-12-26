import { useState } from 'react'
import CountryView from './CountryView'

const Countries = ({ filter, countries }) => {

    const [selectedCountry, setSelectedCountry] = useState(null)

    // console.log('countries:', countries)
    
    const isCountryInFilter = (country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase())
    }

    const countriesInFilter = countries.filter(isCountryInFilter)
    console.log('countriesInFilter length:', countriesInFilter.length)

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
                    <button onClick={() => setSelectedCountry(country)}>Show</button>
                </div>
            ))}
            {selectedCountry && <CountryView country={selectedCountry} />}
        </div>
    )
    } else if (countriesInFilter.length === 1) {
        return (
            <div>
                <CountryView country={countriesInFilter[0]} />
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