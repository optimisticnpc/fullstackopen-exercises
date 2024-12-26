import { useState } from 'react'
import Filter from './components/Filter'


const App = () => {

  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }
  
  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
    </div>
  )
}

export default App