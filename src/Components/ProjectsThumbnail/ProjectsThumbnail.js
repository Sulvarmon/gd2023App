import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ProjectsThumbnail.module.css'

export default function ProjectsThumbnail({links}) {
    return (
        <div className='dfjcac gap2'>
            {links.map((element, index) => (
                <NavLink key={index} to={element} className={`iconView iconHover cp ${styles.thumbnail}`}>{index+1}</NavLink>
            ))}
        </div>
    )
}
