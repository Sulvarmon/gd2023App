import { React, useEffect, useState } from 'react'
import styles from './Header.module.css'
import LargeMenu from '../LargeMenu/LargeMenu';
import SmallMenu from '../SmallMenu/SmallMenu';
import Search from '../Search/Search';
import SideContacts from '../SideContacts/SideContacts';
import SidePhone from '../SidePhone/SidePhone';
import CookieMessage from '../CookieMessage/CookieMessage';
import { useSelector } from 'react-redux';



export default function Header() {
  const showCookieContainer = useSelector(state => state.showCookieContainer.value)
  const languageData = useSelector(state => state.languageData.value);
  const [localShowContainer, setLocalShowContainer] = useState(true)
  useEffect(() => {
    if (
      showCookieContainer
      && sessionStorage.getItem('showCookieContainer') === 'show'
      && localStorage.getItem('showCookieContainer') === null
    ) {
      setLocalShowContainer(true)
    } else {
      setLocalShowContainer(false)
    }
  }, [showCookieContainer])

  return (
    <>
      <div className={`pen ${styles.unfinishedWebsite} ${languageData['font-family'][0]}`}>{languageData['unfinished website']}</div>
      <div className={`${styles.header} p2`}>
        <SideContacts />
        <SidePhone />
        <Search />
        <SmallMenu />
        <LargeMenu />
      </div>
      <div className={`${!localShowContainer && 'dn'}`}>
        <CookieMessage />
      </div>

    </>
  )

}
