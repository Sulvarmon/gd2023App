import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import styles from './SideContacts.module.css'
import { useSelector } from 'react-redux';
import Map from '../../Pages/Contacts/Map';

export default function SideContacts() {
  const languageData = useSelector(state => state.languageData.value)
  const [hide, setHide] = useState(true)
  window.addEventListener('click', () => {
    setHide(true)
  });
  return (
    <div className={`dfcjcas gap2 p2 ${styles.sideContacts}`}>
      <div className={`${hide && 'dn'} ${styles.dark} border`}>
        <Map />
      </div>
      <a href='https://www.facebook.com/' target='__blank' className={`cw wfc dfjcac gap2 menuHover`}><FaFacebookF /><span className={languageData['font-family'][0]}>{languageData['fb']}</span></a>
      <Link className={`cw wfc dfjcac gap2 menuHover`} to='/Contacts'><IoIosMail /><span className={languageData['font-family'][0]}>{languageData['mail']}</span></Link>
      <div onClick={(e) => {setHide(!hide);e.stopPropagation()}} className={`cw wfc dfjcac gap2 menuHover cp`} ><TfiLocationPin /><span className={languageData['font-family'][0]}>{languageData['map']}</span></div>
    </div>
  )
}
