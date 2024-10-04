import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './ModalWork.css'


export default function ModalWork({ closeModalHandler, title, images, description }) {
    return (
        <>
                <div className="overlay-modal">
                    <div className="modalwork-wrapper">
                        <div className="modalwork-header">
                            <h1>نام پروژه: <span className="text-yellow">{title}</span></h1>
                            <button className="closeicon-btn" onClick={closeModalHandler}><CloseIcon /></button>
                        </div>
                        <div className="modalwork-body">
                            <div className="">
                                <div><img src={images[1]} className="main-modal-img" alt="" /></div>
                                <div className="sub-modal-img-wrapper">
                                    {images.slice(1).map((image, index) => (
                                        <img key={index} src={image} alt="" />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="fs-4 text-white">توضیحات <span className="text-yellow">پروژه</span></h3>
                                <ul>
                                    <li className="mt-4"> نام نویسنده: <span> سینا صفری </span> </li>
                                    <li className="mt-3"> تاریخ شروع پروژه: <span> {description.startYear} </span> </li>
                                    <li className="mt-3"> تاریخ اتمام پروژه: <span> {description.endYear} </span> </li>
                                    <li className="mt-3"> لینک پروژه: <span> {description.website} </span> </li>
                                    <li className="mt-3"> توضیحات تکمیلی: <span> {description.projectDescription} </span> </li>
                                </ul>
                                <button className="contactUs-btn"> تماس با ما </button>
                            </div>
                        </div>
                        <div className="modalwork-footer">
                            <button className="close-btn" onClick={closeModalHandler}>بستن</button>
                            <button className="share-btn">اشتراک گذاری</button>
                        </div>
                    </div>
                </div>
        </>
    )
}