import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maat: [],
      haku: ''
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const maat = response.data
        this.setState({
          maat: maat
        })
      }

      )
  }






  handleHakuChange = (event) => {
    this.setState({ haku: event.target.value })
  }


  render() {

    let maat = <p>Liikaa osumia</p>

    const osumat = this.state.maat.filter((country) => {
      return country.name.includes(this.state.haku)
    })

    if(osumat.length<10){
      maat= <ul>{osumat.map(maa => <li key={maa.name}>{maa.name}</li>)}</ul>
    }

    if(osumat.length === 1){
      maat = <div>
        <h2>{osumat[0].name}</h2>
        <p>Pääkaupunki: {osumat[0].capital}</p>
        <p>Populaatio: {osumat[0].population}</p>
        <img src={osumat[0].flag} />
        </div>
    }

    return (
      <div>
        Etsi maita: <input value={this.state.haku} onChange={this.handleHakuChange} />


      {maat}
      </div>
    )
  }
}

export default App