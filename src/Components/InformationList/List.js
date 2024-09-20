import React from 'react'
import './List.css'

export default function list({ informations }) {

    return (
        <ul>
            {informations.map((information, index) => (
                <li key={informations.length + index}>
                    {information.label}: <span>{information.value}</span>
                </li>
            ))}
        </ul>
    )
}
