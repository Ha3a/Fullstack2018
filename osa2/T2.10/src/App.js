import React from 'react'
import axios from 'axios'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      haku: ''
    }
  }


  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
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

      axios
        .post('http://localhost:3001/persons', presonObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: ''



          })


        })

    }

  }


  deletePerson = (id) => {
    const request = axios.delete('http://localhost:3001/persons/', { id })
    return request.then(response => response.data)

  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  handleHakuChange = (event) => {
    this.setState({haku: event.target.value})
  }


  render() {

    


    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form>
          <div>
            rajaa näytettäviä: <input
              value={this.state.haku}
              onChange={this.handleHakuChange}
            />
          </div>
          </form>

        <h2>Lisää uusi!</h2>

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

        {this.state.persons.map(person => <Person key={person.name} person={person} />)}

      </div>
    )
  }
}

export default App