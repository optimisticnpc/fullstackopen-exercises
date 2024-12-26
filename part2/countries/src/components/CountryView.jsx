const CountryView = ({ country }) => {
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
        </div>
    )
}

export default CountryView