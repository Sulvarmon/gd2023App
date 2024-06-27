import React, { useState } from 'react'
import { FaCookieBite } from "react-icons/fa";
import styles from './CookieMessage.module.css'
import AboutCookies from './AboutCookies';

export default function CookieMessage({ font0, font1, cookies }) {
    const [aboutCookies, setAboutCookies] = useState(false)
    return (
        <>
            <AboutCookies
                font0={font0}
                font1={font1}
                cookies={cookies}
                aboutCookies={aboutCookies}
                setAboutCookies={setAboutCookies}
            />
            <div>
                <div className={`${styles.cookiesContainer} dfcjcac gap2 wfc p3 br2`}>
                    <div className={`${font1} cw`}>{cookies[0]} <FaCookieBite /> {cookies[1]}</div>
                    <div className={`dfjcac gap2 fww`}>
                        <div className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[2]}</div>
                        <div className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[3]}</div>
                        <div onClick={a => setAboutCookies(!aboutCookies)} className={`${font1} menuHover cp wfc p2 cw border br2`}>{cookies[4]}</div>
                    </div>
                </div>
            </div>

        </>

    )
}
