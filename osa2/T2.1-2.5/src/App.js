import React from 'react'
import Note from './components/Note'

const App = ({ kurssit }) => {
    return (
        <div>
            <h1>Kurssit</h1>
            <ul>
                {kurssit.osat.map(Kurssi => <Kurssi key={Kurssi.id} kurssit={Kurssi.nimi} />)}
            </ul>
        </div>
    )
}

export default App