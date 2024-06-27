import { React } from 'react'
import styles from './CookieMessage.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { FaCookieBite } from "react-icons/fa";

export default function AboutCookies({ font0, font1, cookies, aboutCookies, setAboutCookies }) {

    return (
        <div onClick={() => { setAboutCookies(false) }} className={`${styles.aboutCookies} ${!aboutCookies && 'dn'}`}>
            <div className={`dfjcac pa`}>
                <div onClick={() => { setAboutCookies(false) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
                <div onClick={(e) => { e.stopPropagation() }} className={`${styles.cookiesTexts} dfcjlac gap4 container p2 br2 cw`}>
                    <b className={`${font0} dfjcac gap1`}>{cookies['cookie texts']['titles'][0]} <FaCookieBite /></b>
                    <div className={`${font1}`}>{cookies['cookie texts']['texts'][0]}</div>
                    <b className={`${font0}`}>{cookies['cookie texts']['titles'][1]}</b>
                    <div className={`${font1}`}>{cookies['cookie texts']['texts'][1]}</div>
                    <ul className='pl3'>
                        <li className={`${font1}`}>{cookies['cookie texts']['texts'][2]}</li>
                        <li className={`${font1}`}>{cookies['cookie texts']['texts'][3]}</li>
                    </ul>
                    <b className={`${font0}`}>{cookies['cookie texts']['titles'][2]}</b>
                    <div className={`${font1}`}>{cookies['cookie texts']['texts'][4]}</div>
                    <b className={`${font0}`}>{cookies['cookie texts']['titles'][3]}</b>
                    <div className={`${font1}`}>{cookies['cookie texts']['texts'][5]} <a href='https://allaboutcookies.org' target='__blank' className={`colorBlue tdu di`}><b className={`${font1}`}>{cookies['cookie texts']['texts'][6]}</b></a></div>
                </div>
            </div>
        </div>
    )
}
