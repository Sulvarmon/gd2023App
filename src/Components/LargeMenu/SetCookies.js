import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import styles from './LargeMenu.module.css'
// import Cookies from 'js-cookie';

export default function SetCookies({ languageData, checkedLg, setCheckedLg }) {
  const [showTheme, setShowTheme] = useState(false);
  const [checkedTh, setCheckedLgTh] = useState(false);


  return (
    <div className={`dfcjcas gap1 w5`}>
      <div onClick={() => { setShowTheme(!showTheme) }} className={`usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie'][5]}</span><SlArrowDown className={`theme ${showTheme ? styles.tr0 : styles.tr90}`} /></div>
      <div className={`${showTheme ? '' : 'dn'}`} style={{width:'310px'}}>
        <hr className='w5' />
        <div className={`dfjbac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][1]}</div>
          <div onClick={a=>setCheckedLg(!checkedLg)} className={`${styles.checkbox} dfjcac cp `}>
            <div className={`${styles.checkboxEye} ${!checkedLg && 'dn'}`}></div>
          </div>
        </div>
        <div className={`dfjbac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][2]}</div>
          <div onClick={a=>setCheckedLgTh(!checkedTh)} className={`${styles.checkbox} dfjcac cp`}>
            <div className={`${styles.checkboxEye} ${!checkedTh && 'dn'}`}></div>
          </div>
        </div>
        <hr className='w5' />
      </div>
    </div>
  )
}
