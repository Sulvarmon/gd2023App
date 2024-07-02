import React, { useState, useEffect } from 'react';
import { SlArrowDown } from "react-icons/sl";
import styles from './LargeMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToOpositeT } from '../../Slices/ThemeCookie';
import Cookies from 'js-cookie';
import { setToOpositeL } from '../../Slices/LanguageCookie';
import { setToFalseC, setToTrueC } from '../../Slices/ShowCookieContainer';
import AboutCookies from '../AboutCookies/AboutCookies';

export default function SetCookies() {
  const languageData = useSelector(state => state.languageData.value);
  const theme = useSelector(state => state.theme.value);
  const themeCookie = useSelector(state => state.themeCookie.value);
  const language = useSelector(state => state.language.value);
  const languageCookie = useSelector(state => state.languageCookie.value);
  const dispatch = useDispatch();
  const [showCookie, setShowCookie] = useState(false);
  const [aboutCookies, setAboutCookies] = useState(false)

  const [localThemeCookie, setLocalThemeCookie] = useState(themeCookie);
  const [localLanguageCookie, setLocalLanguageCookie] = useState(languageCookie);

  useEffect(() => {
    setLocalThemeCookie(themeCookie);
  }, [themeCookie]);

  useEffect(() => {
    setLocalLanguageCookie(languageCookie);
  }, [languageCookie]);

  useEffect(() => {
    if (!localThemeCookie && !localLanguageCookie) {
      dispatch(setToTrueC())
      sessionStorage.setItem('showCookieContainer', 'show')
    } else {
      dispatch(setToFalseC())
      sessionStorage.setItem('showCookieContainer', 'hide')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeThemeCookie = () => {
    dispatch(setToOpositeT());
    dispatch(setToFalseC())
    sessionStorage.setItem('showCookieContainer', 'hide')
  };

  const changeLanguageCookie = () => {
    dispatch(setToOpositeL());
    dispatch(setToFalseC())
    sessionStorage.setItem('showCookieContainer', 'hide')
  };

  useEffect(() => {
    if (localThemeCookie) {
      Cookies.set('themeReact', theme, {
        expires: 3650,
        path: '/',
        sameSite: 'None',
        secure: true
      });
    } else {
      Cookies.remove('themeReact', {
        path: '/',
        sameSite: 'None',
        secure: true
      });
    }
  }, [localThemeCookie, theme,]);

  useEffect(() => {
    if (localLanguageCookie) {
      Cookies.set('languageReact', language, {
        expires: 3650,
        path: '/',
        sameSite: 'None',
        secure: true
      });
    } else {
      Cookies.remove('languageReact', {
        path: '/',
        sameSite: 'None',
        secure: true
      });
    }
  }, [localLanguageCookie, language]);

  return (
    <>
      <AboutCookies
        aboutCookies={aboutCookies}
        setAboutCookies={setAboutCookies}
      />
      <div className={`dfcjcas gap1 w5`}>
        <div onClick={() => { setShowCookie(!showCookie) }} className={`usn dfjcac gap1 cp`}>
          <span className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie'][5]}</span>
          <SlArrowDown className={`theme ${showCookie ? styles.tr0 : styles.tr90}`} />
        </div>
        <div className={`${showCookie ? '' : 'dn'}`} style={{ width: '310px' }}>
          <hr className='w5' />
          <div className={`dfjbac gap1 p2`}>
            <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][1]}</div>
            <div onClick={changeLanguageCookie} className={`${styles.checkbox} dfjcac cp `}>
              <div className={`${styles.checkboxEye} ${!languageCookie && 'dn'}`}></div>
            </div>
          </div>
          <div className={`dfjbac gap1 p2`}>
            <div className={`theme ${languageData['font-family'][0]}`}>{languageData['cookie']['types'][2]}</div>
            <div onClick={changeThemeCookie} className={`${styles.checkbox} dfjcac cp`}>
              <div className={`${styles.checkboxEye} ${!themeCookie && 'dn'}`}></div>
            </div>
          </div>
          <div onClick={() => setAboutCookies(!aboutCookies)} className={`${languageData['font-family'][0]} cp wfc p2 ${styles.item}`}>{languageData['cookie'][4]}</div>
          <hr className='w5' />
        </div>
      </div>
    </>

  );
}
