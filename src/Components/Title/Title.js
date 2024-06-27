import React from 'react'
import styles from './Title.module.css'

export default function Title({font,text}) {
  return (
    <div className={`theme ${font} ${styles.title} tac`}>{text}</div>
  )
}
