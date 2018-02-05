import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    let nameExists = false
    let uusiNimi = this.state.newName



    const presonObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }



    this.state.persons.forEach(function (person) {
      if (person.name === uusiNimi) {


        nameExists = true
      }
    })



    if (!nameExists) {
      const persons = this.state.persons.concat(presonObject)



      this.setState({
        persons: persons,
        newName: ''
      })
    }


  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            numero: <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <p key={person.name}>{person.name} {person.number} </p>)}


      </div>
    )
  }
}

export default App