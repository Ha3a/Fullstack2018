import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            yhteensa: 0
        }
    }




    render() {

        const positiivisia = () => ((this.state.hyva / montakoPalautetta()) * 100).toFixed(1)
        const montakoPalautetta = () => this.state.hyva + this.state.neutraali + this.state.huono
        const keskiarvo = () => ((this.state.hyva - this.state.huono) / montakoPalautetta()).toFixed(1)

        const Tulostelua = () => {
            
            if (montakoPalautetta() === 0) {
                return(
                <div>
                    <p>Keskiarvo: Ei palautteita vielä</p>
                    <p>Positiivisia: Ei palautteita vielä</p>
                </div>
                )
            } else {
                return (
                <div>
                    <p>Keskiarvo {keskiarvo()}</p>
                    <p>Positiivisia {positiivisia()}%</p>
                </div>
                )
            }
        
        }

        return (

            <div>
                <h1>Anna palautetta</h1>
                <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>Hyvä</button>
                <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>Neutraali</button>
                <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>Huono</button>
                <h2>Statistiikka</h2>
                <p>Hyvä {this.state.hyva}</p>
                <p>Neutraali {this.state.neutraali}</p>
                <p>Huono {this.state.huono}</p>
                <Tulostelua />

            </div>
        )


    }

}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)