import React from 'react'
import Buttons from '../Components/Buttons/Buttons'
import List from '../Components/InformationList/List'
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import './Main.css'

export default function Main() {
  return (
    <main>
      <div className='position-relative'>
        <img src="../Main-img/background-body.jpg" alt="" />
        <div className='img-information'>
          <h2>من یک برنامه نویس</h2>
          <p>مسلط به چندین زبان برنامه نویسی، کلیه امور گرافیکی و طراحی سایت با چندین سال تجربه مفید.</p>
          <Buttons text="تماس با من" className="align-self-start px-3 py-1" />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='text-white'>درباره <span className='text-yellow'>من</span></h3>
        <p className='text-white'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
      </div>
      <div className='mt-5'>
        <h3 className='text-white mb-4'>اطلاعات <span className='text-yellow'>پایه</span></h3>
        <div className='d-flex flex-wrap'>
          <div className='min-w-50'>
            <List informations={[
              { label: "تاریخ تولد", value: "1380/8/26" },
              { label: "شماره تماس", value: "09387483595" },
              { label: "محل سکونت", value: "تهران منطقه 11" },
              { label: "ایمیل", value: "sinasfr2001@gmail.com" }
            ]} />
          </div>
          <div>
            <List informations={[
              { label: "مدرک تحصیلی", value: "کارشناسی" },
              { label: " وضعیت تاهل", value: "مجرد" },
              { label: "وب سایت", value: "www.sina.com" },
              { label: "وضعیت", value: "اماده" }
            ]} />
          </div>
        </div>
      </div>
    </main>
  )
}
