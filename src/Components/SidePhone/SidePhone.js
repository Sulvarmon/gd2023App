import React from 'react'
import styles from './SidePhone.module.css'
import { FaPhoneVolume } from "react-icons/fa6";

export default function SidePhone({font}) {
    return (
        <div className={`${styles.sidePhone} dfcjcac gap3 p2`}>
            <FaPhoneVolume />
            <span className={font}>595 00 86 65</span>
        </div>
    )
}
