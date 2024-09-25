import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './ModalWork.css'


export default function ModalWork() {
    return (
        <div className="ss">
            <div className="modalwork-header">
                <h1>نام پروژه ...</h1>
                <button className="closeicon-btn"><CloseIcon /></button>
            </div>
            <div className="modalwork-body">
                <div className="">
                    <div><img src="../Main-img/OIP.jfif" className="main-modal-img" alt="" /></div>
                    <div className="sub-modal-img-wrapper">
                        <img src="../Main-img/OIP.jfif" alt="" />
                        <img src="../Main-img/OIP.jfif" alt="" />
                        <img src="../Main-img/OIP.jfif" alt="" />
                        <img src="../Main-img/OIP.jfif" alt="" />
                    </div>
                </div>
                <div>
                    <h3 className="fs-4 text-white">توضیحات <span className="text-yellow">پروژه</span></h3>
                    <ul>
                        <li class="mt-4"> نام نویسنده: <span> سینا صفری </span> </li>
                        <li class="mt-3"> تاریخ شروع پروژه: <span> 1402/4/05 </span> </li>
                        <li class="mt-3"> تاریخ اتمام پروژه: <span> 1402/4/05 </span> </li>
                        <li class="mt-3"> لینک پروژه: <span> www.com </span> </li>
                        <li class="mt-3"> توضیحات تکمیلی: <span> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </span> </li>
                    </ul>
                    <button className="contactUs-btn"> تماس با ما </button>
                </div>
            </div>
            <div className="modalwork-footer">
                <button className="close-btn">بستن</button>
                <button className="share-btn">اشتراک گذاری</button>
            </div>
        </div>
    )
}