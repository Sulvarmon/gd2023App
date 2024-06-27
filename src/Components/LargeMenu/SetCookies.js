import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import styles from './LargeMenu.module.css'

export default function SetCookies({ languageData }) {
  const [showTheme, setShowTheme] = useState(false);
  return (
    <div className={`dfcjcas gap1 w5`}>
      <div onClick={() => { setShowTheme(!showTheme) }} className={`usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie'][5]}</span><SlArrowDown className={`theme ${showTheme ? styles.tr0 : styles.tr90}`} /></div>
      <div className={`${showTheme ? '' : 'dn'} w5`}>
        <hr className='w5' />
        <div className={`dfjlac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][1]}</div>
          <input type='checkbox' />
        </div>
        <div className={`dfjlac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][2]}</div>
          <input type='checkbox' />
        </div>
        <hr className='w5' />
      </div>
    </div>
  )
}
