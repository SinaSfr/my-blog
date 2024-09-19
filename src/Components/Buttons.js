import React from 'react'
import './Buttons.css'

export default function Buttons({icon, text}) {
  return (
    <button className="btn-styles">
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
      </button>
  )
}
