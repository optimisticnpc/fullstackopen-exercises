import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countriesService from './services/countries'

const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }

  useEffect(() => {
    countriesService
    .getAll()
    .then(initialCountries => {
      setCountries(initialCountries)
    })
  }, [])

  
  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries filter={filter} countries={countries}/>
    </div>
  )
}

export default App