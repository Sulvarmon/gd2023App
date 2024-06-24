import { React } from 'react'
import styles from './Dropdown.module.css'
import { NavLink } from 'react-router-dom'

export default function Dropdown({ font, props, showHide, largeSize }) {
    return (
        <>
            {largeSize ? (
                <div onClick={(e) => { e.stopPropagation() }} className={`${styles.dropDown} wwn wfc hfc ${showHide ? styles.dropDownShow : styles.dropDownHide}`}>
                    <div className={`dfcjcas gap2`}>
                        {props.map((element, index) => (
                            <NavLink key={index} to={element.link} className={`usn ${font} p2 w5`}>{element.text}</NavLink>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={`${showHide ? '' : 'dn'} w5`}>
                    <hr className='w5' />
                    <div className={`dfcjcas gap1 mt2 mb2`}>
                        {props.map((element, index) => (
                            <NavLink key={index} to={element.link} className={`usn ${font} pt2 pb2 w5`}>{element.text}</NavLink>
                        ))}
                    </div>
                    <hr />
                </div>
            )}

        </>
    )
}
