import React from 'react'
import './StatisticCard.css'

export default function StatisticCard ({icon, number, title}) {
  return (
    <div className='mt-4 d-flex flex-column min-w-25'>
        <div className='d-flex gap-3 mb-2 align-items-center'>
            <span className='card-icon'>{icon}</span>
            <span className='text-white fs-1'>{number}</span>
        </div>
        <p className='text-white fs-6'>{title}</p>
    </div>
  )
}
