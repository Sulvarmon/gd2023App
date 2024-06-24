import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProjectsThumbnail({links}) {
    return (
        <div className='dfjcac gap2'>
            {links.map((element, index) => (
                <NavLink key={index} to={element} className='iconView iconHover cp'>{index+1}</NavLink>
            ))}
        </div>
    )
}
