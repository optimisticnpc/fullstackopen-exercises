import personsService from '../services/persons'

const Persons = ({ persons, filter, setPersons}) => {
    const isPersonMatchFilter = (person) => {
        // console.log('matching filter:', filter)
        return person.name.toLowerCase().includes(filter.toLowerCase())
      }

      const deletePerson = (id) => {
        const person = persons.find(person => person.id === id)
        if (window.confirm(`Are you sure you want to delete ${person.name} ?`)) {
          console.log('deleting person with name:', person.name)
          personsService.deletePerson(id)
          .then(response => {
            console.log('response:', response)
            setPersons(persons.filter(person => person.id !== id))
          })
        }
      }

    return (
      <div>
          <ul>
          {persons
            .filter(isPersonMatchFilter)
            .map(person => (
              <li key={person.name}>
                {person.name} {person.number}
                <button type="submit" onClick={() => deletePerson(person.id)}>delete</button>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default Persons; 
