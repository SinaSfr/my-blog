import React from 'react'
import './ResumeBox.css'

export default function resumeBox({ title, year, description }) {
  return (
    <div className='resume-box'>
        <h3>{title}</h3>
        <div>{year}</div>
        <p>{description}</p>
    </div>
  )
}
