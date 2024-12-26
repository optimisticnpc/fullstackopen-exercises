const Countries = ({ filter, countries }) => {

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
                </div>
            ))}
        </div>
    )
    } else if (countriesInFilter.length === 1) {
        return (
            <div>
                <h1>{countriesInFilter[0].name.common}</h1> 
                <img src={countriesInFilter[0].flags.png} alt={countriesInFilter[0].name.common} />
                <p>Capital: {countriesInFilter[0].capital}</p>
                <p>Area: {countriesInFilter[0].area}</p>
                <p>Languages:</p>
                <ul>
                    {Object.values(countriesInFilter[0].languages).map(language => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
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