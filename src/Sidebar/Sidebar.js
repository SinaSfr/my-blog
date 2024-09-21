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
            {icon: <Person/>, title: "درباره من"},
            {icon: <Article/>, title: "رزومه من"},
            {icon: <BusinessCenter/>, title: "خدمات"},
            {icon: <Apps/>, title: "نمونه کارها"},
            {icon: <EditNote/>, title: "وبلاگ"},
            {icon: <Call/>, title: "تماس با من"}
          ]}/>
        </div>
      </div>
    </aside>
  )
}
