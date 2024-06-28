import { React } from 'react'
import styles from './Header.module.css'
import LargeMenu from '../LargeMenu/LargeMenu';
import SmallMenu from '../SmallMenu/SmallMenu';
import Search from '../Search/Search';
import SideContacts from '../SideContacts/SideContacts';
import SidePhone from '../SidePhone/SidePhone';
// import CookieMessage from '../CookieMessage/CookieMessage';



export default function Header() {
  return (
    <>
      <div className={`${styles.header} p2`}>
        <SideContacts />
        <SidePhone />
        <Search />
        <SmallMenu />
        <LargeMenu />
      </div>
      {/* <CookieMessage
        font0={languageData['font-family'][0]}
        font1={languageData['font-family'][1]}
        cookies={languageData['cookie']}
      /> */}
    </>
  )

}
