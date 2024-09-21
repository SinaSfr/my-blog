import React from 'react'
import './SidebarLink.css'

export default function SidebarLink({ linkInfos }) {
    return (
        <ul className='sidebar-ul'>
            {linkInfos.map((info) => (
                <li>
                    <span className='btn-styles text-black sidebar-li'>{info.icon}</span>
                    <span className='text-white'>{info.title}</span>
                </li>
            ))}
        </ul>
    )
}
