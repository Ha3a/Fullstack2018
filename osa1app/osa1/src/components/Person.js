import React from 'react'


const Tiedot = ({ person }) => {

    return (
        <p>{person.name} {person.number}</p>

    )

}



const Person = ({ person }) => {
    return (
        <div>
            <Tiedot person={person} />
        </div>
    )
}


export default Person


