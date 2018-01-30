import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            aania: 0,
            enitenAania: 0

        }
    }
    satunnainen = () => {
        let luku = Math.floor(Math.random() * 6)
        this.setState({ selected: luku })
    }

    aanet = [0, 0, 0, 0, 0, 0]

    montakoAanta = () => {
        return (
            this.aanet[this.state.selected]
        )
    }

    aanesta = () => {

        this.aanet[this.state.selected] = this.aanet[this.state.selected] + 1
        this.setState({ aania: this.state.aania + 1 })

    }

    enitenAania = () => {
        let isoin = 0
        let moneskoIsoin = 0
        let monesko = 0
        this.aanet.forEach((luku) => {
            
            if (luku > isoin) {
                isoin = luku
                moneskoIsoin = monesko

            }
            monesko++
        }
        )

        return (
            moneskoIsoin
        )
    }

    enitenAaniaMontako = () => {
        let isoin = 0
        let moneskoIsoin = 0
        let monesko = 0
        this.aanet.forEach((luku) => {
            
            if (luku > isoin) {
                isoin = luku
                moneskoIsoin = monesko

            }
            monesko++
        }
        )
        console.log(moneskoIsoin)
        return (
            isoin
        )
    }


    render() {
        this.enitenAania()
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <p>has {this.montakoAanta()} votes</p>
                <Button
                    handleClick={this.satunnainen}
                    text="Next anecdote"
                />
                <Button
                    handleClick={this.aanesta}
                    text="Vote"
                />
                <h1>Anecdote with most votes:</h1>
                {this.props.anecdotes[this.enitenAania()]}
                <p>has {this.enitenAaniaMontako()} from a total of {this.state.aania}</p>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)