const Persons = ({ persons, filter }) => {
    const isPersonMatchFilter = (person) => {
        // console.log('matching filter:', filter)
        return person.name.toLowerCase().includes(filter.toLowerCase())
      }

    return (
        <ul>
        {persons
          .filter(isPersonMatchFilter)
          .map(person => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    )
}

export default Persons; 
