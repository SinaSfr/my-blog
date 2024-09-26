import React, { useState } from 'react'
import './WorkExampleBox.css'

export default function WorkExampleBox({ datas, clickHandler }) {
    return (
        <>
            {datas.map((data) => (
                <div key={data.id} className='work-example' onClick={clickHandler}>
                    <img src={data.src} alt="" />
                    <div>{data.title}</div>
                </div>
            ))}
        </>
    )
}
