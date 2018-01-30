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
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto osa={osa1.nimi} tehtavia={osa1.tehtavia} osa2={osa2.nimi} 
            tehtavia2={osa2.tehtavia} osa3={osa3.nimi} tehtavia3={osa3.tehtavia} />
            <Yhteensa t1={osa1.tehtavia} t2={osa2.tehtavia} t3={osa3.tehtavia} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)