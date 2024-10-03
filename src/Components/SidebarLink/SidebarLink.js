import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarLink.css'

export default function SidebarLink({ linkInfos }) {
    return (
        <ul className='sidebar-ul'>
            {linkInfos.map((info) => (
                <li key={info.path}>
                    <Link to={info.path} className='d-flex text-decoration-none gap-2 w-100'>
                        <span className='btn-styles text-black sidebar-icon'>{info.icon}</span>
                        <span className='text-white fs-18'>{info.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
