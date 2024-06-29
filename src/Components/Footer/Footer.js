import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';





export default function Footer({rights,font}) {
  return (
    <div className={`dfcjcac gap3 p2 ${styles.footer}`} >
        <div className='dfjcac gap2'><FaPhoneVolume className='colorRed' /><span className='theme capitalizeText'>595 00 86 85</span></div>
        <div className='dfjcac gap1'>
          <a href='https://www.facebook.com/' target='__blank' className='theme iconView iconHover'><FaFacebookF size={20} /></a>
          <Link to='/Contacts' className='theme iconView iconHover'><IoIosMail size={20} /></Link>
          </div>
        <div className={`theme tac ${font} fs1`}><LiaCopyrightSolid /> {rights}</div>
    </div>
  )
}
