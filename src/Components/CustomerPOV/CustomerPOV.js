import React from 'react'
import './CustomerPOV.css'

export default function CustomerPOV({ src, name, opinion }) {
    return (
        <div className='mt-64 position-relative'>
            <div className='customer-profile'>
                <img className='customerPov-img' src={src} alt="" />
                <span className='text-white fs-5 me-2'>{name}</span>
            </div>
            <div className='opinion-wrapper'>
                <p className='text-white mb-0 pt-3'>{opinion}</p>
            </div>
        </div>
    )
}
