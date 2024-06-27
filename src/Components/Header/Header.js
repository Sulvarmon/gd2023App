import { React, useState, useEffect } from 'react'
import styles from './Header.module.css'
import LargeMenu from '../LargeMenu/LargeMenu';
import SmallMenu from '../SmallMenu/SmallMenu';
import Search from '../Search/Search';
import SideContacts from '../SideContacts/SideContacts';
import SidePhone from '../SidePhone/SidePhone';



export default function Header({ languageData, changeLanguage, ipVisits }) {
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    if (typeof ipVisits === 'function') {
      ipVisits();
    }
  }, [ipVisits]);
  return (
    <>

      <div className={`${styles.header} p2`}>
        <SideContacts languageData={languageData} />
        <SidePhone font={languageData['font-family'][0]} />
        {languageData && <Search showSearch={showSearch} setShowSearch={setShowSearch} languageData={languageData} />}
        <SmallMenu languageData={languageData} changeLanguage={changeLanguage} showSearch={showSearch} setShowSearch={setShowSearch} />
        <LargeMenu languageData={languageData} changeLanguage={changeLanguage} showSearch={showSearch} setShowSearch={setShowSearch} />
      </div>
    </>
  )

}
