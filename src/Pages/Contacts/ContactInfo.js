import {React, useState} from 'react'
import { FaFacebookF, FaPhoneVolume } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";
import styles from './Contacts.module.css'

export default function ContactInfo({font0,font1,contactsPage}) {
    const [blue, setBlue] = useState(false);
    return (
        <div className='dfcjcas gap3'>
            <div className={`${font0} colorBlue mb3`}>{contactsPage[0]}</div>
            <div className='theme dfjcac gap2'><div className='iconView p1'><FaPhoneVolume /></div><span className={font1}>{contactsPage[1]}</span></div>
            <div className='theme dfjcac gap2'><div className='iconView p1'><TfiLocationPin /></div><span className={font1}>{contactsPage[2]}</span></div>
            <div className='theme dfjcac gap2'><div className='iconView p1'><IoIosMail /></div><span className={font1}>{contactsPage[3]}</span></div>
            <a onMouseEnter={() => setBlue(true)} onMouseLeave={() => setBlue(false)} href='https://www.facebook.com/' target='__blank' className={`theme dfjcac gap2`}><div className={`iconView p1 ${blue && styles.iconHover}`}><FaFacebookF /></div><span className={font1}>{contactsPage[9]}</span></a>
        </div>
    )
}
