import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import styles from './SideContacts.module.css'
import { useSelector } from 'react-redux';

export default function SideContacts() {
  const languageData = useSelector(state => state.languageData.value)
  return (
    <div className={`dfcjcas gap2 p2 ${styles.sideContacts}`}>
        <a  href='https://www.facebook.com/' target='__blank' className={`cw wfc dfjcac gap2 menuHover`}><FaFacebookF /><span className={languageData['font-family'][0]}>{languageData['fb']}</span></a>
        <Link className={`cw wfc dfjcac gap2 menuHover`} to='/Contacts'><IoIosMail/><span className={languageData['font-family'][0]}>{languageData['mail']}</span></Link>
        <Link className={`cw wfc dfjcac gap2 menuHover`} to='/Contacts'><TfiLocationPin/><span className={languageData['font-family'][0]}>{languageData['map']}</span></Link>
    </div>
  )
}
