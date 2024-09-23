import React from 'react'
import './ServicesBox.css'

export default function ServicesBox({ src, title, description }) {
    return (
        <div className='d-flex'>
            <div className='px-3'>
                <img className='servicesbox-img' src={src} alt="" />
            </div>
            <div>
                <h3 className='text-white fs-4'>{title}</h3>
                <p className='text-white'>{description}</p>
            </div>
        </div>
    )
}
