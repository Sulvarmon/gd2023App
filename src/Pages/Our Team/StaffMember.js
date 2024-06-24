import React from 'react'
import styles from './StaffMember.module.css'

export default function StaffMember({img,font,name,position}) {
  return (
    <div className={`${styles.container} dfcjcas gap2 pr`}>
        <div className='pr w5' style={{height: '200px'}}><img className='pa' src={img} alt='' /></div>
        <div className={`${font} colorBlue fs1`}>{name}</div>
        <div className={`${font} colorRed fs1`}>{position}</div>
    </div>
  )
}
