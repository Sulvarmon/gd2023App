import { React, useState, useEffect } from 'react'
import '../../index.css'
import styles from './SmallMenu.module.css'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";

import Language from '../LargeMenu/Language';
import Theme from '../LargeMenu/Theme';

export default function SmallMenu({ languageData, changeLanguage, showSearch, setShowSearch }) {
  const [showSmallMenu, setShowSmallMenu] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showSectors, setShowSectors] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false)


  useEffect(() => {
    // Add event listener for clicks outside the component
    window.addEventListener('click', () => {
      setShowSmallMenu(false)
      setShowCompany(false)
      setShowSectors(false)
      setOpenedMenu(false)
    });
  }, []);

  return (
    <div className={`${styles.navigation}`}>
      {/* <Search showSearch={showSearch} setShowSearch={setShowSearch} /> */}
      <div className={`container dfjbac `}>
        <NavLink to={'/'} className={`usn ${styles.logo}`}></NavLink>
        <div onClick={() => { setShowSearch(!showSearch) }}><CiSearch className={`theme fontSizeIcon cp`} /></div>
        <div onClick={(e) => { e.stopPropagation(); setShowSmallMenu(!showSmallMenu) }}>
          <RiMenu3Fill onClick={() => { setOpenedMenu(!openedMenu) }} className={`theme fontSizeIcon cp ${openedMenu ? 'dn' : ''}`} />
          <IoCloseOutline onClick={() => { setOpenedMenu(!openedMenu) }} className={`theme fontSizeIcon cp ${openedMenu ? '' : 'dn'}`} />
        </div>
        <div onClick={(e) => { e.stopPropagation() }} className={`${styles.menu} dfcjcas gap3 p3 wwn wfc hfc ${showSmallMenu ? styles.menuShow : styles.menuHide}`}>
          <div className={`dfcjcas gap1 w5`}>
            <div onClick={() => { setShowCompany(!showCompany) }} className={`usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['company']}</span><SlArrowDown className={`theme ${showCompany ? styles.tr0 : styles.tr90}`} /></div>
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
          <NavLink to={'/Projects'} className={`theme usn ${languageData['font-family'][0]}`}>{languageData['projects']}</NavLink>
          <NavLink to={'/News'} className={`theme usn ${languageData['font-family'][0]}`}>{languageData['news']}</NavLink>
          <div className={`dfcjcas gap1 w5`}>
            <div onClick={() => { setShowSectors(!showSectors) }} className={`usn dfjcac gap1 cp`}><span className={`theme ${languageData['font-family'][0]}`}>{languageData['sectors title']}</span><SlArrowDown className={`theme ${showSectors ? styles.tr0 : styles.tr90}`} /></div>
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
          <NavLink to={'/Contacts'} className={`theme usn ${languageData['font-family'][0]}`}>{languageData['contacts']}</NavLink>
          <Language changeLanguage={changeLanguage} languageData={languageData} />
          <Theme languageData={languageData} />
        </div>
      </div>
    </div>
  )

}
