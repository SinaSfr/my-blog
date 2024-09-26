import React, { useEffect, useRef, useState } from 'react'
import WorkExampleBox from '../Components/WorkExampleBox/WorkExampleBox'
import ModalWork from '../Components/ModalWork/ModalWork'

export default function WorkExamplePage() {
    const datas = [
        { id: 1, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 2, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 3, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 4, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 5, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 6, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 7, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 8, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" },
        { id: 9, src: "../Main-img/OIP.jfif", title: "برنامه نویسی" }
    ];
    const [showModal, setShowModal] = useState(false)
    const [showData, setShowData] = useState([])
    const bodyRef = useRef(document.body);

    useEffect(() => {
        if(showModal){
            bodyRef.current.style.overflow = "hidden"
        } else{
            bodyRef.current.style.overflow = "unset"
        }
    }, [showModal])

    const clickHandler = () => {
        setShowModal(true)
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }

    return(
        <div>
            <h2 className='text-white fs-4 mb-1'>نمونه <span className='text-yellow'>کارها</span></h2>
            <p className='text-white'>ما در اینجا به برسی چندین تا از نمونه کار های بنده می پردازیم ...</p>
            <section className='d-flex flex-wrap justify-content-around row-gap-3'>
                <WorkExampleBox datas={datas} clickHandler={clickHandler}/>
            </section>
            {showModal && <ModalWork closeModalHandler={closeModalHandler}/>}
        </div>
    )
}