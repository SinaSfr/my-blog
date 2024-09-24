import React, { useState } from 'react'
import WorkExampleBox from '../Components/WorkExampleBox/WorkExampleBox'

export default function WorkExamplePage() {
    const [showModal, setShowModal] = useState(false)
    const [showData, setShowData] = useState([])

    const clickHandler = () => {
        setShowModal(true)
    }

    return(
        <div>
            <h2 className='text-white fs-4 mb-1'>نمونه <span className='text-yellow'>کارها</span></h2>
            <p className='text-white'>ما در اینجا به برسی چندین تا از نمونه کار های بنده می پردازیم ...</p>
            <section className='d-flex flex-wrap justify-content-around row-gap-3'>
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" onClick={clickHandler} />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
                <WorkExampleBox src={'../Main-img/OIP.jfif'} title="برنامه نویسی" />
            </section>
        </div>
    )
}