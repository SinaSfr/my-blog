import React from 'react'
import './StatisticCard.css'

export default function ({icon, number, title}) {
  return (
    <div>
        <div>
            {icon}
            <span>{number}</span>
        </div>
        <p>{title}</p>
    </div>
  )
}
