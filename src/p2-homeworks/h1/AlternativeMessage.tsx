import React from 'react'
import s from './Message.module.css'


function AlternativeMessage() {
    return (
        <div className={s.message}>
            <img
                className={s.styleAvatar}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq_nZ9OtX6FsZ4BNnGlwRxlhwXL6btxSsbg&usqp=CAU'/>
        </div>
    )
}

export default AlternativeMessage
