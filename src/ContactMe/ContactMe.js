import React, { useState } from 'react'
import './ContactMe.css'

export default function ContactMe() {

  const [usernameValue, setUsernameValue] = useState([])
  const [numberValue, setNumberValue] = useState([])


  const submitHandler = (event) => {
    event.preventDefault()
    setUsernameValue("")
    setNumberValue("")
  }
  const changeUsername = (event) => {
    setUsernameValue(event.target.value)
  }
  const changeNumber = (event) => {
    setNumberValue(event.target.value)
  }

  return (
    <div>
        <h2 className='text-white fs-4'> تماس <span className='text-yellow'> با من </span></h2>
        <div className='d-flex gap-3 mt-4'>
          <div className='form-wrapper '>
            <form action="" onSubmit={submitHandler}>
              <input type="text" name="username" id="" placeholder='نام و نام خانوادگی' value={usernameValue} onChange={(event) => changeUsername(event)} />
              <input type="number" name="number" id="" placeholder='شماره تماس' value={numberValue} onChange={(event) => changeNumber(event)} />
              <textarea name="message" id="" placeholder='با سلام و خسته نباشید'></textarea>
              <button className='form-btn'>ارسال پیغام</button>
            </form>
          </div>
          <div className='w-50'>
            <ul className='ul-contactme'>
              <li>شماره تماس: <span>09387483595</span></li>
              <li> محل سکونت: <span>تهران، منطقه 2</span></li>
              <li> ایمیل: <span>sinasfr2001@gmail.com</span></li>
              <li> وب سایت: <span>www.myresume.com</span></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
