import React from 'react'
import SidebarLink from '../Components/SidebarLink/SidebarLink'
import {Person, Article, BusinessCenter, Apps, EditNote, Call} from '@mui/icons-material';
import './Sidebar.css'


export default function Sidebar() {
  return (
    <aside>
      <div>
        <img src="../Main-img/OIP.jfif" alt="" />
        <div className='mt-4'>
          <SidebarLink linkInfos={[
            {icon: <Person/>, title: "درباره من", path: '/'},
            {icon: <Article/>, title: "رزومه من", path: '/my-resume'},
            {icon: <BusinessCenter/>, title: "خدمات", path: '/services'},
            {icon: <Apps/>, title: "نمونه کارها", path: '/example-works'},
            {icon: <EditNote/>, title: "وبلاگ", path: '/weblog'},
            {icon: <Call/>, title: "تماس با من", path: '/contact-me'}
          ]}/>
        </div>
      </div>
    </aside>
  )
}
