import React, { useState } from 'react'
import { FaCookieBite } from "react-icons/fa";
import styles from './CookieMessage.module.css'
import AboutCookies from './AboutCookies';
import {  useSelector } from 'react-redux';

export default function CookieMessage() {
    const [aboutCookies, setAboutCookies] = useState(false)
    const languageData = useSelector(state=> state.languageData.value)
    const font1 = languageData['font-family'][1]
    const cookies = languageData['cookie']
    return (
        <>
            <AboutCookies
                aboutCookies={aboutCookies}
                setAboutCookies={setAboutCookies}
            />
            <div>
                <div className={`${styles.cookiesContainer}  dfcjcac gap2 wfc p3 br2`}>
                    <div className={`${font1} cw`}>{cookies[0]} <FaCookieBite /> {cookies[1]}</div>
                    <div className={`dfjcac gap2 fww`}>
                        <div onClick={()=>{}} className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[2]}</div>
                        <div onClick={()=>{}} className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[3]}</div>
                        <div onClick={() => setAboutCookies(!aboutCookies)} className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[4]}</div>
                    </div>
                </div>
            </div>

        </>

    )
}
