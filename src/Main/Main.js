import React from 'react'
import Buttons from '../Components/Buttons'
import './Main.css'

export default function Main() {
  return (
    <main>
      <div className='position-relative'>
        <img src="../Main-img/oip 1.jpg" alt=""/>
        <div className='img-information'>
          <h2>من یک یرنامه نویس</h2>
          <p>مسلط به چندین زبان برنامه نویسی، کلیه امور گرافیکی و طراحی سایت با چندین سال تجربه مفید.</p>
          <Buttons text="تماس با من"/>
        </div>
      </div>
    </main>
  )
}
