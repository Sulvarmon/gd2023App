import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import styles from './LargeMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setToOposite } from '../../Slices/ThemeCookie';
import Cookies from 'js-cookie';

export default function SetCookies() {
  const languageData = useSelector(state => state.languageData.value)
  const themeCookie = useSelector(state => state.themeCookie.value)
  // const languageCookie = useSelector(state => state.themeCookie.value)
  const dispatch = useDispatch()
  const [showCookie, setShowCookie] = useState(false);
  const [checkedLg, setCheckedLg] = useState(false);

  let changeThemeCookie = () => {
    dispatch(setToOposite())
    if(themeCookie){
      Cookies.set('themeCookie', 'theme', {
        expires: 3650,
        path: '/',
        sameSite: 'None',
        secure: true
      });
    }else{
      Cookies.set('themeCookie', 'theme', {
        expires: -3650,
        path: '/',
        sameSite: 'None',
        secure: true
      });
    }    
  }

  return (
    <div className={`dfcjcas gap1 w5`}>
      <div onClick={() => { setShowCookie(!showCookie) }} className={`usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie'][5]}</span><SlArrowDown className={`theme ${showCookie ? styles.tr0 : styles.tr90}`} /></div>
      <div className={`${showCookie ? '' : 'dn'}`} style={{ width: '310px' }}>
        <hr className='w5' />
        <div className={`dfjbac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][1]}</div>
          <div onClick={a => setCheckedLg(!checkedLg)} className={`${styles.checkbox} dfjcac cp `}>
            <div className={`${styles.checkboxEye} ${!checkedLg && 'dn'}`}></div>
          </div>
        </div>
        <div className={`dfjbac gap1 p2`}>
          <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][2]}</div>
          <div onClick={changeThemeCookie} className={`${styles.checkbox} dfjcac cp`}>
            <div className={`${styles.checkboxEye} ${!themeCookie && 'dn'}`}></div>
          </div>
        </div>
        <hr className='w5' />
      </div>
    </div>
  )
}
