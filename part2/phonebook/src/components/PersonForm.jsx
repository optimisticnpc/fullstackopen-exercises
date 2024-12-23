import personsService from '../services/persons'


const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setNotificationMessage }) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const personObject = {
          ...person,
          number: newNumber,
        }
        personsService.update(person.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setNotificationMessage({ message: `Information of ${newName} has already been removed from server`, type: 'error' })
          // Reload the list of persons
          personsService.getAll()
          .then(returnedPersons => {
            setPersons(returnedPersons)
          })
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
      }
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };

    personsService.create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    setNotificationMessage({ message: `Added ${newName}`, type: 'success' }) 
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
