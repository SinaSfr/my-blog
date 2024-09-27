import React, { useEffect, useRef, useState } from 'react'
import WorkExampleBox from '../Components/WorkExampleBox/WorkExampleBox'
import ModalWork from '../Components/ModalWork/ModalWork'

export default function WorkExamplePage() {
    const [showModal, setShowModal] = useState(false)
    const [selectedModal, setSelectedModal] = useState(null)
    const bodyRef = useRef(document.body);

    useEffect(() => {
        if (showModal) {
            bodyRef.current.style.overflow = "hidden"
        } else {
            bodyRef.current.style.overflow = "unset"
        }
    }, [showModal])

    const clickHandler = (modalData) => {
        setShowModal(true)
        setSelectedModal(modalData)
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div>
            <h2 className='text-white fs-4 mb-1'>نمونه <span className='text-yellow'>کارها</span></h2>
            <p className='text-white'>ما در اینجا به بررسی چندین تا از نمونه کار های بنده می پردازیم ...</p>
            <section className='d-flex flex-wrap justify-content-around row-gap-3'>
                <WorkExampleBox clickHandler={clickHandler} />
            </section>
            {showModal && <ModalWork {...selectedModal} closeModalHandler={closeModalHandler} />}
        </div>
    )
}