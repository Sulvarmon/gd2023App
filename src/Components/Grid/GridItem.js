import React from 'react'
import styles from './Grid.module.css'
import { Link } from 'react-router-dom'

export default function GridItem({ fontC, fontN, img, title, date, text, btnText, link, }) {
  return (
    <div className={`dfcjbas gap3 pb2 ${styles.item} `}>
      <Link to={link} className={`pr w5 ${styles.imgCont} pr`}>
        <div className={`${styles.dark} pa`}></div>
        <img className={`${styles.image} pa ofcvr`} src={img} alt='' />
      </Link>
      <div className='dfcjcas gap1 pl2'>
        <div className={fontC}>{title}</div>
        <div className={fontC}>{date}</div>
      </div>
      <div className={`${fontN} pl2`}>{text}</div>
      <Link to={link} className={`${fontC} mainBtn ${styles.gridButton}`}>{btnText}</Link>
    </div>
  )
}
