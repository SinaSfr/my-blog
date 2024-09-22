import React from 'react'
import ResumeBox from '../Components/ResumeBox/ResumeBox'

export default function MyResume() {
  return (
    <div className='d-flex gap-4'>
      <section>
        <h2 className='text-white fs-4'>سوابق <span className='text-yellow'>تحصیلی</span></h2>
        <ResumeBox title="مدرک کارشناسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
        <ResumeBox title="مدرک برنامه نویسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
        <ResumeBox title="مدرک افتخاری" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
        </section>
      <section>
      <h2 className='text-white fs-4'>سوابق <span className='text-yellow'>تحصیلی</span></h2>
        <ResumeBox title="مدرک کارشناسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
        <ResumeBox title="مدرک برنامه نویسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
        <ResumeBox title="مدرک افتخاری" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
      </section>
    </div>
  )
}
