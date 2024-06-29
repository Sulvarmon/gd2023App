import React, { useEffect, useState } from 'react'
import styles from './LargeMenu.module.css'
import { SlArrowDown } from "react-icons/sl";
import flag1 from '../../Images/geo.png'
import flag2 from '../../Images/eng.png'
import flag3 from '../../Images/ru.png'
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../Slices/Language';
import Cookies from 'js-cookie';

export default function Language() {
  const languageData = useSelector(state => state.languageData.value)
  const languageCookie= useSelector(state => state.languageCookie.value)
  const [showLanguage, setShowLanguage] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('click', () => {
      setShowLanguage(false)
    });
  }, []);

  let langFlag = (flag) => {
    let returnFlag
    switch (languageData[flag]) {
      case 'geo-flag':
        returnFlag = flag1
        break;
      case 'eng-flag':
        returnFlag = flag2
        break;
      case 'rus-flag':
        returnFlag = flag3
        break;
      default:
        returnFlag = flag1
        break;
    }
    return returnFlag
  }

  let changeLanguage1 = () => {
    switch (languageData['language1']) {
      case 'ინგ':
      case 'анг':
        dispatch(change('eng'))
        if(languageCookie){
          Cookies.set('languageReact', 'eng', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        }       
        break;
      case 'geo':
      case 'гру':
        dispatch(change('geo'))
        if(languageCookie){
          Cookies.set('languageReact', 'geo', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } 
        break;
      case 'rus':
      case 'რუს':
        dispatch(change('rus'))
        if(languageCookie){
          Cookies.set('languageReact', 'rus', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } 
        break;
      default:
        break;
    }
  }

  let changeLanguage2 = () => {
    switch (languageData['language2']) {
      case 'ინგ':
      case 'анг':
        dispatch(change('eng'))
        if(languageCookie){
          Cookies.set('languageReact', 'eng', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } 
        break;
      case 'geo':
      case 'гру':
        dispatch(change('geo'))
        if(languageCookie){
          Cookies.set('languageReact', 'geo', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } 
        break;
      case 'rus':
      case 'რუს':
        dispatch(change('rus'))
        if(languageCookie){
          Cookies.set('languageReact', 'rus', {
            expires: 3650,
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } else{
          Cookies.remove('languageReact', {
            path: '/',
            sameSite: 'None',
            secure: true
          });
        } 
        break;
      default:
        break;
    }
  }
  return (
    <div className={`dfcjcas gap1 w5 `}>
      <div onClick={() => { setShowLanguage(!showLanguage) }} className={`${styles.lang} usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['language']}</span><SlArrowDown className={`theme ${showLanguage ? styles.tr0 : styles.tr90}`} /></div>
      <div className={`${showLanguage ? '' : 'dn'} w5`}>
        <hr className='w5' />
        <div className={`dfcjcas gap2 mt2 mb2`}>
          <div onClick={changeLanguage1} className={`${styles.item} cp p2 wfc dfjcac gap1`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['language1']}</span><img width={'21px'} height={'15px'} src={langFlag('language1 flag')} alt='' /></div>
          <div onClick={changeLanguage2} className={`${styles.item} cp p2 wfc dfjcac gap1`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['language2']}</span><img width={'21px'} height={'15px'} src={langFlag('language2 flag')} alt='' /></div>
        </div>
        <hr className='w5' />
      </div>
    </div>
  )
}
