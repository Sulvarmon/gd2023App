import { React, useState, useEffect } from 'react'
import '../../index.css'
import styles from './LargeMenu.module.css'
import { NavLink } from 'react-router-dom'
import flag1 from '../../Images/geo.png'
import flag2 from '../../Images/eng.png'
import flag3 from '../../Images/ru.png'
import Dropdown from '../Dropdown/Dropdown'
import { CiSearch } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

export default function LargeMenu({ languageData, changeLanguage, showSearch,setShowSearch }) {  
  const [showCompany, setShowCompany] = useState(false);
  const [showSectors, setShowSectors] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
 

  useEffect(() => {
    window.addEventListener('click', () => {
      setShowSectors(false)
      setShowCompany(false)
      setShowMenu(false)
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

  return (
    <div className={`${styles.navigation} dn`}>      
      
      <div className={`container dfjbac`}>
        <NavLink to={'/'} className={`usn ${styles.logo}`}></NavLink>
        <div className={`dfjcac gap4`}>
          <div onClick={(e) => { e.stopPropagation(); setShowCompany(!showCompany) }} className={`usn ${languageData['font-family'][0]} ${styles.company} dfjcac gap1 cp pr`}>{languageData['company']}<SlArrowDown className={`${showCompany? styles.tr0 : styles.tr90}`} />
            <Dropdown
              font={languageData['font-family'][0]}
              props={[
                { text: languageData['about us'], link: '/About-Us' },
                { text: languageData['our team'], link: '/Our-Team' }
              ]}
              showHide={showCompany}
              largeSize = {true}
            />
          </div>

          <NavLink to={'/Projects'} className={`usn ${languageData['font-family'][0]}`}>{languageData['projects']}</NavLink>
          <NavLink to={'/News'} className={`usn ${languageData['font-family'][0]}`}>{languageData['news']}</NavLink>
          <div onClick={(e) => { e.stopPropagation(); setShowSectors(!showSectors) }} className={`usn ${languageData['font-family'][0]} ${styles.sectors} dfjcac gap1 cp pr`}>{languageData['sectors title']}<SlArrowDown className={`${showSectors? styles.tr0 : styles.tr90}`} />
            <div onClick={(e) => { e.stopPropagation() }} className={`${styles.dropDown} wwn wfc hfc ${showSectors ? styles.dropDownShow : styles.dropDownHide}`}>
              <Dropdown
                font={languageData['font-family'][0]}
                props={[
                  { text: languageData['marine works'], link: '/Marine-Works' },
                  { text: languageData['building materials'], link: '/Building-Materials' },
                  { text: languageData['civil and industrial projects'], link: '/Civil-Industrial-Projects' },
                ]}
                showHide={showSectors}
                largeSize = {true}
              />
            </div>
          </div>
          <NavLink to={'/Contacts'} className={`usn ${languageData['font-family'][0]}`}>{languageData['contacts']}</NavLink>
        </div>
        <div className={`dfjcac gap4`}>
          <div onClick={()=>{setShowSearch(!showSearch)}} ><CiSearch className="fontSizeIcon cp" /></div>
          <div onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }} className={`usn pr`}><GoGear className={`${showMenu? styles.tr0 : styles.tr90} fontSizeIcon cp`} />
            <div onClick={(e) => { e.stopPropagation() }} className={`${styles.menuDropdown} p5 wwn wfc hfc ${showMenu ? styles.dropDownShowMenu : styles.dropDownHideMenu}`}>
              <div className={`dfcjcac gap1 w5`}>
                <div onClick={() => { setShowLanguage(!showLanguage) }} className={`${styles.lang} usn dfjcac gap1 cp p2`}><span className={`${languageData['font-family'][0]}`}>{languageData['language']}</span><SlArrowDown className={`${showLanguage? styles.tr0 : styles.tr90}`} /></div>
                <div className={`${showLanguage ? '' : 'dn'} w5`}>
                  <hr className='w5' />
                  <div className={`dfjcac gap2 mt2 mb2`}>
                    <div onClick={changeLanguage1} className={`${styles.item} cp p2 wfc dfjcac gap1`}><span className={`${languageData['font-family'][0]}`}>{languageData['language1']}</span><img src={langFlag('language1 flag')} alt='' /></div>
                    <div onClick={changeLanguage2} className={`${styles.item} cp p2 wfc dfjcac gap1`}><span className={`${languageData['font-family'][0]}`}>{languageData['language2']}</span><img src={langFlag('language2 flag')} alt='' /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
