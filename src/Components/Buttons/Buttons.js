import React from 'react'
import './Buttons.css'

export default function Buttons({icon, text, className}) {
  return (
    <button className={`btn-styles ${className}`}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
      </button>
  )
}
