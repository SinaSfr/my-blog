import React, { useEffect, useState, useRef } from 'react'
import Article from '../Components/WeblogArticles/Article'
import ModalArticle from '../Components/ModalArticle/ModalArticle'


export default function MyWeblog() {
  const [showModal, setShowModal] = useState(false)
  const [modalDatas, setModalDatas] = useState(null)
  const bodyRef = useRef(document.body);

  useEffect(() => {
    if(showModal){
      bodyRef.current.style.overflow = "hidden"
    } else {
      bodyRef.current.style.overflow = "unset"
    }
  }, [showModal])

  const showArticleModal = (data) => {
    setShowModal(true)
    setModalDatas(data)
  }
  const closeModalHandler = () => {
    setShowModal(false)
  }
  


  return (
    <div>
        <h2 className='text-white fs-4'>مقالات <span className='text-yellow'>سایت</span></h2>
        <p className='text-white'>برای آگاهی بیشتر و دریافت اطلاعات در مورد برنامه نویسی به مقالات سایت ما مراجعه کنید ...</p>
        <div className='d-flex flex-wrap justify-content-between row-gap-3'>
            <Article onClick={showArticleModal}/>
            {showModal && <ModalArticle {...modalDatas} onClick={closeModalHandler}/>}
        </div>
    </div>
  )
}
