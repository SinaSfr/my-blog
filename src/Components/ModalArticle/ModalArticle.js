import React from 'react'
import './ModalArticle.css'

export default function ModalArticle() {
  return (
    <div className="modal-article-wrapper">
        <div className='position-relative d-flex justify-content-center align-items-center flex-column'>
            <img src="../Main-img/OIP.jfif" alt="" />
            <div>
                <h1>سئو چیست؟</h1>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            <ul className='d-flex gap-3'>
                <li>نویسنده: 
                    <span> سینا صفری </span>
                </li>
                <li>تاریخ: 
                    <span> 28 اسفند 1403 </span>
                </li>
                <li>دسته بندی: 
                    <span> برنامه نویسی </span>
                </li>
            </ul>
        </div>
        <div className='text-white'>
            <h2></h2>
            <p></p>
            <h3></h3>
            <p></p>
            <h3></h3>
            <p></p>
            <h3></h3>
            <p></p>
        </div>
    </div>
  )
}
