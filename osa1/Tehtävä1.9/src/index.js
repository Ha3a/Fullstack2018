import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    kasvataHyvaa = () => {
        return () => {
            this.setState({ hyva: this.state.hyva + 1 })
        }
    }

    kasvataNeutraalia = () => {
        return () => {
            this.setState({ neutraali: this.state.neutraali + 1 })
        }
    }

    kasvataHuono = () => {
        return () => {
            this.setState({ huono: this.state.huono + 1 })
        }
    }


    render() {




        return (

            <div>
                <h1>Anna palautetta</h1>

                <Button
                    handleClick={this.kasvataHyvaa()}
                    text="Hyvä"
                />
                <Button
                    handleClick={this.kasvataNeutraalia()}
                    text="Neutraali"
                />
                <Button
                    handleClick={this.kasvataHuono()}
                    text="Huono"
                />

                <Statistics
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono}
                />



            </div>
        )


    }



}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {


    const yhteensa = props.hyva + props.neutraali + props.huono
    const keskiarvo = ((props.hyva - props.huono) / yhteensa).toFixed(1)
    const positiivisia = ((props.hyva / yhteensa) * 100).toFixed(1)

    if (yhteensa === 0) {
        return (
            <div>
                <h2>Statistiikka</h2>
                <p>Ei yhtään palautetta vielä</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Statistiikka</h2>
            <table>
                <tbody>
                    <Statistic nimi="Hyvä" arvo={props.hyva} />
                    <Statistic nimi="Neutraali" arvo={props.neutraali} />
                    <Statistic nimi="Huono" arvo={props.huono} />
                    <Statistic nimi="Keskiarvo" arvo={keskiarvo} yht={yhteensa} />
                    <Statistic nimi="Positiivisia" arvo={positiivisia} yht={yhteensa} />
                </tbody>
            </table>
        </div>
    )
}

const Statistic = (props) => {



    if (props.nimi === 'Hyvä' || props.nimi === 'Neutraali' || props.nimi === 'Huono') {
        return (
            <tr>
                <td>{props.nimi}</td>
                <td>{props.arvo}</td>
            </tr>

        )
    } else if (props.nimi === 'Keskiarvo') {
        if (props.yht === 0) {
            return (
                <tr>
                    <td>Keskiarvo:</td>
                    <td>Ei palautteita vielä</td>
                </tr>
            )
        }
        return (
            <tr>
                <td>Keskiarvo:</td>
                <td>{props.arvo}</td>
            </tr>

        )
    } else if (props.nimi === 'Positiivisia') {
        if (props.yht === 0) {
            return (
                <tr>
                    <td>Positiivisia:</td>
                    <td>Ei palautteita vielä</td>
                </tr>
            )
        }
        return (
            <tr>
                <td>Positiivisia:</td>
                <td>{props.arvo}</td>
            </tr>
        )
    }

}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)