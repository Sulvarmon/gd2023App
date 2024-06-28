import { React } from 'react'
import styles from './ExpandSingleImage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { IoCloseSharp } from "react-icons/io5";
import { setToFalse } from '../../Slices/ExpandSingleImage'

export default function ExpandSingleImage({image}) {
    const showDarkbg = useSelector(state => state.expandSingleImage.value)    
    const dispatch = useDispatch()
    return (
        <div onClick={() => { dispatch(setToFalse()) }} className={`czo ${!showDarkbg ? 'dn' : styles.darkBg}`}>
            <div onClick={() => { dispatch(setToFalse()) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
            <div className={`w3 ma pr h5`}><img onClick={(e) => { e.stopPropagation() }}className={`cd pa ofcnt `} src={image} alt=''/></div>
        </div>
    )
}
