import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffair: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
         props.deleteAffair(props.affair._id)
        console.log(props.affair._id)
    }// need to fix

    return (
        <div>
            {props.affair.name}______{props.affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
