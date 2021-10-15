import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: any
    setFilter?: any
    deleteAffairCallback?: any
    deleteAffair: any
}

function Affairs(props: AffairsPropsType) {

    let mappedAffairs = props.data.map((a: AffairType) => (
        // <div>
        //     {a.name}
        //
        //     <button onClick={() => props.deleteAffair(a._id)}>DEL</button>
        // </div>
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffair={props.deleteAffair}
        />
    ))

    // const setAll = () => {
    // } // need to fix
    // const setHigh = () => {
    // }
    // const setMiddle = () => {
    // }
    const setL = (value: string) => {
        console.log(value)
        props.setFilter(value)
    }

    return (
        < div>

            {mappedAffairs}


            <button onClick={() => setL('all')}>All</button>
            <button onClick={() => setL('high')}>High</button>
            <button onClick={() => setL('middle')}>Middle</button>
            <button onClick={() => setL('low')}>Low</button>
        </div>
    )
}

export default Affairs
