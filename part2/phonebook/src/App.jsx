import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
const App = () => {

  const [notificationMessage, setNotificationMessage] = useState(null)
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    // If the message is an error, add the error class. If it is a success, add the success class
    return (
      <div className={message.type}>
        {message.message}
      </div>
    )
  }

  const handleFilterChange = (event) => {
    // console.log('filter value:', event.target.value)
    setFilter(event.target.value)
  }

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} 
      setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setNotificationMessage={setNotificationMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App