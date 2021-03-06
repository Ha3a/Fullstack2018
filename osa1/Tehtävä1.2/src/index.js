import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa} tehtavia={props.tehtavia} />
            <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
            <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensä {(props.t1) + (props.t2) + (props.t3)}</p>
    )
}


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto osa={osa1} tehtavia={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3} />
            <Yhteensa t1={tehtavia1} t2={tehtavia2} t3={tehtavia3} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)