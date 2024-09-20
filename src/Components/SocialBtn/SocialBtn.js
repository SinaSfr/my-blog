import React from 'react'
import './SocialBtn.css'

export default function SocialBtn({ icon, backgroundColor }) {
  return (
    <button className='social-btn' style={{backgroundColor}}>{icon}</button>
  )
}
