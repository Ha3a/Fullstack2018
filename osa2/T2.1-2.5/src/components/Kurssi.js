import React from 'react'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Osat = (props) => {

    return (
        <div>
            {props.kurssi.osat.map(osa => <Osiot key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
        </div>
    )
}

const Osiot = (props) => <p>{props.osa} {props.tehtavia}</p>

const Yht = ({ kurssi }) => {
    return (
        <p>yhteensä {kurssi.osat.reduce((sum, osa) => { return sum + osa.tehtavia }, 0)} tehtävää</p>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Osat kurssi={kurssi} />
            <Yht kurssi={kurssi} />
        </div>
    )
}

export default Kurssi