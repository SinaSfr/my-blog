import React from 'react'
import './ResumeSkills.css'

export default function ResumeSkills({ title, percent }) {
    return (
        <div className='mb-3'>
            <div className='d-flex justify-content-between'>
                <span className='text-white'>{title}</span>
                <span className='text-white'>{percent}</span>
            </div>
            <div className='skill-bar-background'>
                <div className='skill-bar-value' style={{ width: `${percent}` }}></div>
            </div>
        </div>
    )
}
