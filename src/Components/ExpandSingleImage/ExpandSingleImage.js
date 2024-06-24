import { React } from 'react'
import styles from './ExpandSingleImage.module.css'
import { IoCloseSharp } from "react-icons/io5";

export default function ExpandSingleImage({image, showDarkbg, setShowDarkbg}) {

    return (
        <div className={`${!showDarkbg ? 'dn' : styles.darkBg}`}>
            <div onClick={() => { setShowDarkbg(false) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
            <div className='w3 ma pr h5'><img className='pa ofcnt' src={image} alt='' /></div>
        </div>
    )
}
