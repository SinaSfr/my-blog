import React from 'react'
import './LogoBox.css'

export default function LogoBox({src}) {
  return (
    <div>
        <img className='logobox-img' src={src} alt="" />
    </div>
  )
}
