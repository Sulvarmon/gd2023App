import { React, useState, useEffect } from 'react'
import styles from './LargeMenu.module.css'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import { CiSearch } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import Language from './Language'
import Theme from './Theme';
import SetCookies from './SetCookies';
import { useDispatch, useSelector } from 'react-redux';
import { setToOposite } from '../../Slices/Search';

export default function LargeMenu() {
  const languageData = useSelector(state => state.languageData.value)
  const [showCompany, setShowCompany] = useState(false);
  const [showSectors, setShowSectors] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [smallLogo, setsmallLogo] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => {
      setShowSectors(false)
      setShowCompany(false)
      setShowMenu(false)
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setsmallLogo(true)
      } else {
        setsmallLogo(false)
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`${styles.navigation} dn`}>

      <div className={`container dfjbac`}>
        <NavLink to={'/'} className={`usn ${styles.logo} ${smallLogo && styles.smallLogo}`}></NavLink>
        <div className={`dfjcac gap4`}>
          <div onClick={(e) => { e.stopPropagation(); setShowCompany(!showCompany) }} className={`usn theme ${languageData['font-family'][0]} ${styles.company} dfjcac gap1 cp pr`}>{languageData['company']}<SlArrowDown className={`theme ${showCompany ? styles.tr0 : styles.tr90}`} />
            <Dropdown
              font={languageData['font-family'][0]}
              props={[
                { text: languageData['about us'], link: '/About-Us' },
                { text: languageData['our team'], link: '/Our-Team' }
              ]}
              showHide={showCompany}
              largeSize={true}
            />
          </div>

          <NavLink to={'/Projects'} className={`usn theme ${languageData['font-family'][0]}`}>{languageData['projects']}</NavLink>
          <NavLink to={'/News'} className={`usn theme ${languageData['font-family'][0]}`}>{languageData['news']}</NavLink>
          <div onClick={(e) => { e.stopPropagation(); setShowSectors(!showSectors) }} className={`usn theme ${languageData['font-family'][0]} ${styles.sectors} dfjcac gap1 cp pr`}>{languageData['sectors title']}<SlArrowDown className={`theme ${showSectors ? styles.tr0 : styles.tr90}`} />
            <div onClick={(e) => { e.stopPropagation() }} className={`${styles.dropDown} wwn wfc hfc ${showSectors ? styles.dropDownShow : styles.dropDownHide}`}>
              <Dropdown
                font={languageData['font-family'][0]}
                props={[
                  { text: languageData['marine works'], link: '/Marine-Works' },
                  { text: languageData['building materials'], link: '/Building-Materials' },
                  { text: languageData['civil and industrial projects'], link: '/Civil-Industrial-Projects' },
                ]}
                showHide={showSectors}
                largeSize={true}
              />
            </div>
          </div>
          <NavLink to={'/Contacts'} className={`usn theme ${languageData['font-family'][0]}`}>{languageData['contacts']}</NavLink>
        </div>
        <div className={`dfjcac gap4`}>
          <div onClick={() => { dispatch(setToOposite()) }} ><CiSearch className="theme fontSizeIcon cp" /></div>
          <div onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }} className={`usn pr`}><GoGear className={`theme ${showMenu ? styles.tr0 : styles.tr90} fontSizeIcon cp`} />
            <div onClick={(e) => { e.stopPropagation() }} className={`${styles.menuDropdown} dfcjcas gap4 wwn wfc hfc ${showMenu ? styles.dropDownShowMenu : styles.dropDownHideMenu}`}>
              <Language />
              <Theme />
              <SetCookies />
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
