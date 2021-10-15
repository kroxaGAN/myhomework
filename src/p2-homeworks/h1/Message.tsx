import React from 'react'
import s from './Message.module.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: propsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.styleAvatar}/>
            <div className={s.content}>
                <div className={s.name}> {props.name}</div>
                <div className={s.message}>  {props.message}</div>
                <div className={s.time}>  {props.time}</div>
            </div>
        </div>
    )
}

export default Message
