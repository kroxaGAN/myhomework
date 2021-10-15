import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {log} from "util";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    console.log(error)
    return (

        <div>

            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressHandler}
                   className={error && inputClass}
            />
            <button onClick={addUser} disabled={error}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorText}>Name requered</div>}
        </div>
    )
}

export default Greeting
