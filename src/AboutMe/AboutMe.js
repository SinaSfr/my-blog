import React from 'react'
import Buttons from '../Components/Buttons/Buttons'
import List from '../Components/InformationList/List'
import StatisticCard from '../Components/StatisticCard/StatisticCard'
import {PeopleAlt, MilitaryTech, ChecklistRtl, Lan} from '@mui/icons-material';
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='aboutme-wrapper'>
        <div className='position-relative'>
        <img src="../Main-img/background-body.jpg" alt="" className='aboutme-img'/>
        <div className='img-information'>
          <h2 className='fs-4'><strong>من یک برنامه نویس</strong></h2>
          <p className='fs-6'>مسلط به چندین زبان برنامه نویسی، کلیه امور گرافیکی و طراحی سایت با چندین سال تجربه مفید.</p>
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
      <div className='d-flex flex-wrap'>
        <StatisticCard icon={<ChecklistRtl sx={{fontSize: "2rem"}}/>} number="136" title="پروژه های انجام شده"/>
        <StatisticCard icon={<PeopleAlt sx={{fontSize: "2rem"}}/>} number="136" title="مشتریان راضی"/>
        <StatisticCard icon={<MilitaryTech sx={{fontSize: "2rem"}}/>} number="136" title="جوایز دریافت شده"/>
        <StatisticCard icon={<Lan sx={{fontSize: "2rem"}}/>} number="136" title="دامنه های بنام"/>
      </div>
    </div>
  )
}
