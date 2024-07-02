import React from 'react'
import styles from './Grid.module.css'
import { Link } from 'react-router-dom'
import { FcCalendar } from "react-icons/fc";


export default function GridItem({ fontC, fontN, img, title, date, text, btnText, link, }) {
  return (
    <div className={`dfcjbas gap3 pb2`} style={{height:'600px'}}>
      <Link to={link} className={`pr w5 ${styles.imgCont} pr`}>
        <div className={`${styles.dark} pa`}></div>
        <img className={`${styles.image} pa ofcvr`} src={img} alt='' />
      </Link>
      <div className='dfcjcas gap1 pl2'>
        <div className={`theme ${fontC}`}>{title}</div>
        <div className={`theme ${fontC} dfjcac gap1`}><FcCalendar/>{date}</div>
      </div>
      <div className={`theme ${styles.text} ${fontN} pl2  pr2`}>{text}</div>
      <Link to={link} className={`${fontC} mainBtn ${styles.gridButton}`}>{btnText}</Link>
    </div>
  )
}
