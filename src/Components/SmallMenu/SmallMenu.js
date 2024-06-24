import { React, useState, useEffect } from 'react'
import '../../index.css'
import styles from './SmallMenu.module.css'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import flag1 from '../../Images/geo.png'
import flag2 from '../../Images/eng.png'
import flag3 from '../../Images/ru.png'

export default function SmallMenu({ languageData, changeLanguage, showSearch, setShowSearch }) {
  const [showSmallMenu, setShowSmallMenu] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showSectors, setShowSectors] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false)

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
        changeLanguage('eng')
        break;
      case 'geo':
      case 'гру':
        changeLanguage('geo')
        break;
      case 'rus':
      case 'რუს':
        changeLanguage('rus')
        break;
      default:
        break;
    }
  }

  let changeLanguage2 = () => {
    switch (languageData['language2']) {
      case 'ინგ':
      case 'анг':
        changeLanguage('eng')
        break;
      case 'geo':
      case 'гру':
        changeLanguage('geo')
        break;
      case 'rus':
      case 'რუს':
        changeLanguage('rus')
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    // Add event listener for clicks outside the component
    window.addEventListener('click', () => {
      setShowSmallMenu(false)
      setShowCompany(false)
      setShowSectors(false)
      setShowLanguage(false)
      setOpenedMenu(false)
    });
  }, []);

  return (
    <div className={`${styles.navigation}`}>
      {/* <Search showSearch={showSearch} setShowSearch={setShowSearch} /> */}
      <div className={`container dfjbac `}>
        <NavLink to={'/'} className={`usn ${styles.logo}`}></NavLink>
        <div onClick={() => { setShowSearch(!showSearch) }}><CiSearch className={`fontSizeIcon cp`} /></div>
        <div onClick={(e) => { e.stopPropagation(); setShowSmallMenu(!showSmallMenu) }}>
          <RiMenu3Fill onClick={() => { setOpenedMenu(!openedMenu) }} className={`fontSizeIcon cp ${openedMenu ? 'dn' : ''}`} />
          <IoCloseOutline onClick={() => { setOpenedMenu(!openedMenu) }} className={`fontSizeIcon cp ${openedMenu ? '' : 'dn'}`} />
        </div>
        <div onClick={(e) => { e.stopPropagation() }} className={`${styles.menu} dfcjcas gap3 p3 wwn wfc hfc ${showSmallMenu ? styles.menuShow : styles.menuHide}`}>
          <div className={`dfcjcas gap1 w5`}>
            <div onClick={() => { setShowCompany(!showCompany) }} className={`usn dfjcac gap1 cp`}><span className={`${languageData['font-family'][0]}`}>{languageData['company']}</span><SlArrowDown className={`${showCompany ? styles.tr0 : styles.tr90}`} /></div>
            <Dropdown
              font={languageData['font-family'][0]}
              props={[
                { text: languageData['about us'], link: '/About-Us' },
                { text: languageData['our team'], link: '/Our-Team' }
              ]}
              showHide={showCompany}
              largeSize={false}
            />
          </div>
          <NavLink to={'/Projects'} className={`usn ${languageData['font-family'][0]}`}>{languageData['projects']}</NavLink>
          <NavLink to={'/News'} className={`usn ${languageData['font-family'][0]}`}>{languageData['news']}</NavLink>
          <div className={`dfcjcas gap1 w5`}>
            <div onClick={() => { setShowSectors(!showSectors) }} className={`usn dfjcac gap1 cp`}><span className={`${languageData['font-family'][0]}`}>{languageData['sectors title']}</span><SlArrowDown className={`${showSectors ? styles.tr0 : styles.tr90}`} /></div>
            <Dropdown
              font={languageData['font-family'][0]}
              props={[
                { text: languageData['marine works'], link: '/Marine-Works' },
                { text: languageData['building materials'], link: '/Building-Materials' },
                { text: languageData['civil and industrial projects'], link: '/Civil-Industrial-Projects' },
              ]}
              showHide={showSectors}
              largeSize={false}
            />
          </div>
          <NavLink to={'/Contacts'} className={`usn ${languageData['font-family'][0]}`}>{languageData['contacts']}</NavLink>
          <div className={`dfcjcas gap1 w5`}>
            <div onClick={() => { setShowLanguage(!showLanguage) }} className={`usn dfjcac gap1 cp`}><span className={`${languageData['font-family'][0]}`}>{languageData['language']}</span><SlArrowDown className={`${showLanguage ? styles.tr0 : styles.tr90}`} /></div>
            <div className={`${showLanguage ? '' : 'dn'} w5`}>
              <hr className='w5' />
              <div className={`dfjlac gap3 mt2 mb2`}>
                <div onClick={changeLanguage1} className={`cp wfc dfjcac gap1`}><span className={`${languageData['font-family'][0]}`}>{languageData['language1']}</span><img className={`${styles.flagImg}`} src={langFlag('language1 flag')} alt='' /></div>
                <div onClick={changeLanguage2} className={`cp wfc dfjcac gap1`}><span className={`${languageData['font-family'][0]}`}>{languageData['language2']}</span><img className={`${styles.flagImg}`} src={langFlag('language2 flag')} alt='' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
