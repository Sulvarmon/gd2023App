import React from 'react'
import styles from './SidePhone.module.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export default function SidePhone() {
    const languageData = useSelector(state => state.languageData.value)
    return (
        <div className={`${styles.sidePhone} dfcjcac gap3 p2`}>
            <FaPhoneVolume />
            <span className={languageData['font-family'][0]}>595 00 86 65</span>
        </div>
    )
}
