import React, { useState } from 'react';

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    console.log(personObject)
    setPersons(persons.concat(personObject))
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const row_names = () => persons.map(person => 
    <p key={person.name}>{person.name}</p>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{row_names()}</>
    </div>
  )
}

export default App;
