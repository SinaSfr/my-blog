import React from 'react'
import './WorkExampleBox.css'

export default function WorkExampleBox({ src, title, onClick }) {
    return (
        <div className='work-example' onClick={onClick}>
            <img src={src} alt="" />
            <div>{title}</div>
        </div>
    )
}
