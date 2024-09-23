import React from 'react'
import ResumeBox from '../Components/ResumeBox/ResumeBox'
import ResumeSkills from '../Components/ResumeSkills/ResumeSkills'

export default function MyResume() {
  return (
    <div className='d-flex gap-4'>
      <div>
        <section>
          <h2 className='text-white fs-4 mb-3'>سوابق <span className='text-yellow'>تحصیلی</span></h2>
          <ResumeBox title="مدرک کارشناسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
          <ResumeBox title="مدرک برنامه نویسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
          <ResumeBox title="مدرک افتخاری" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
        </section>
        <section className='mt-5'>
          <h2 className='text-white fs-4 mb-3'>سوابق <span className='text-yellow'>تحصیلی</span></h2>
          <ResumeSkills title="طراحی سایت" percent="95%" />
          <ResumeSkills title="طراحی سایت" percent="95%" />
          <ResumeSkills title="طراحی سایت" percent="95%" />
        </section>
      </div>

      <div>
        <section>
          <h2 className='text-white fs-4 mb-3'>مهارت های <span className='text-yellow'>طراحی</span></h2>
          <ResumeBox title="مدرک کارشناسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
          <ResumeBox title="مدرک برنامه نویسی" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
          <ResumeBox title="مدرک افتخاری" year="1400-1402" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
        </section>
        <section className='mt-5'>
          <h2 className='text-white fs-4 mb-3'>مهارت های <span className='text-yellow'>برنامه نویسی</span></h2>
          <ResumeSkills title="طراحی سایت" percent="95%" />
          <ResumeSkills title="طراحی سایت" percent="95%" />
          <ResumeSkills title="طراحی سایت" percent="95%" />
        </section>
      </div>
    </div>
  )
}
