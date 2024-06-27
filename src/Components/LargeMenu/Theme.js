import React, { useState, useEffect } from 'react'
import styles from './LargeMenu.module.css'
import { SlArrowDown } from "react-icons/sl";
import Cookies from 'js-cookie';

export default function Theme({ languageData }) {
  const [showTheme, setShowTheme] = useState(false);
  const getInitialCookie = () => {
    return Cookies.get('ballEye') || 'white';
  };

  const [ballEye, setBallEye] = useState(getInitialCookie);
  useEffect(() => {
    window.addEventListener('click', () => {
      setShowTheme(false)
    });
  }, []);

  const whiteTheme = function () {
    const updatedTheme = 'white';
    setBallEye(updatedTheme);
    Cookies.set('ballEye', updatedTheme, { expires: 3650, path: '/' });
  }

  const darkTheme = function () {
    const updatedTheme = 'dark';
    setBallEye(updatedTheme);
    Cookies.set('ballEye', updatedTheme, { expires: 3650, path: '/' });
  }

  switch (ballEye) {
    case 'white':
      document.documentElement.style.setProperty('--bgColor', '#DCDCDC');
      document.documentElement.style.setProperty('--bg1', '#E5E4E2');
      document.documentElement.style.setProperty('--headerBg', '#D3D3D3');
      document.documentElement.style.setProperty('--textTheme', '#000');
      break;
    case 'dark':
      document.documentElement.style.setProperty('--bgColor', '#2E2E2E');
      document.documentElement.style.setProperty('--bg1', '#383838');
      document.documentElement.style.setProperty('--headerBg', '#3F3F3F');
      document.documentElement.style.setProperty('--textTheme', '#fff');
      break;
    default:
      document.documentElement.style.setProperty('--bgColor', '#DCDCDC');
      document.documentElement.style.setProperty('--bg1', '#E5E4E2');
      document.documentElement.style.setProperty('--headerBg', '#D3D3D3');
      document.documentElement.style.setProperty('--textTheme', '#000');
      break;
  }
  return (
    <div className={`dfcjcas gap1 w5`}>
      <div onClick={() => { setShowTheme(!showTheme) }} className={`${styles.lang} usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['theme'][2]}</span><SlArrowDown className={`theme ${showTheme ? styles.tr0 : styles.tr90}`} /></div>
      <div className={`${showTheme ? '' : 'dn'} w5`}>
        <hr className='w5' />
        <div onClick={() => { }} className={` dfcjcac gap2 mt2 mb2`}>
          <span className={`theme ${languageData['font-family'][0]}`}>{languageData['theme'][1]}</span>
          <div className={`dfjcac gap1 p2`}>
            <div onClick={whiteTheme} className={`${styles.ball1} dfjcac cp`}><div className={`${styles.ball1Eye} ${ballEye !== 'white' && 'dn'}`}></div></div>
            <div onClick={darkTheme} className={`${styles.ball2} dfjcac cp`}><div className={`${styles.ball2Eye} ${ballEye !== 'dark' && 'dn'}`}></div></div>
          </div>
          <span className={`theme ${languageData['font-family'][0]}`}>{languageData['theme'][2]}</span>
        </div>
        <hr className='w5' />
      </div>
    </div>
  )
}
