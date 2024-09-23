import React from 'react'
import ServicesBox from '../Components/ServicesBox/ServicesBox'
import LogoBox from '../Components/LogoBox/LogoBox'
import CustomerPOV from '../Components/CustomerPOV/CustomerPOV'

export default function MyServices() {
    return (
        <div>
            <div>
                <h2 className='text-white fs-4 mb-3'>خدمات <span className='text-yellow'>من</span></h2>
                <div className='d-flex mt-4'>
                    <section>
                        <ServicesBox title="برنامه نویسی" src="../Main-img/OIP.jfif" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                        <ServicesBox title="برنامه نویسی" src="../Main-img/OIP.jfif" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                    </section>

                    <section>
                        <ServicesBox title="برنامه نویسی" src="../Main-img/OIP.jfif" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                        <ServicesBox title="برنامه نویسی" src="../Main-img/OIP.jfif" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                    </section>
                </div>
            </div>

            {/* برخی از مشتریان */}
            <section className='mt-5'>
                <h2 className='text-white fs-4 mb-3'>برخی از <span className='text-yellow'>مشتریان</span></h2>
                <div className='d-flex justify-content-around mt-4 flex-wrap'>
                    <LogoBox src="../Main-img/tesla.png" />
                    <LogoBox src="../Main-img/tesla.png" />
                    <LogoBox src="../Main-img/tesla.png" />
                    <LogoBox src="../Main-img/tesla.png" />
                    <LogoBox src="../Main-img/tesla.png" />
                    <LogoBox src="../Main-img/tesla.png" />
                </div>
            </section>

            {/* دیدگاه مشتریان */}
            <div className='mt-5'>
                <h2 className='text-white fs-4 mb-3'>دیدگاه <span className='text-yellow'>مشتریان</span></h2>
                <div className='d-flex mt-4 gap-4'>
                    <section>
                        <CustomerPOV src="../Main-img/OIP.jfif" name="احمد احمدی" opinion="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                        <CustomerPOV src="../Main-img/OIP.jfif" name="احمد احمدی" opinion="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                    </section>

                    <section>
                        <CustomerPOV src="../Main-img/OIP.jfif" name="احمد احمدی" opinion="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                        <CustomerPOV src="../Main-img/OIP.jfif" name="احمد احمدی" opinion="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
                    </section>
                </div>
            </div>
        </div>
    )
}
