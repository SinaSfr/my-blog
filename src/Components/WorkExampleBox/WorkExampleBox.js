import React from 'react'
import './WorkExampleBox.css'
import modalDatas from '../../datas/ModalData'

export default function WorkExampleBox({ clickHandler }) {
    return (
        <>
            {modalDatas.map((modalData) => (
                <div key={modalData.id} className='work-example' onClick={() => clickHandler(modalData)}>
                    <img src={modalData.src} alt="" />
                    <div>{modalData.category}</div>
                </div>
            ))}
        </>
    )
}
