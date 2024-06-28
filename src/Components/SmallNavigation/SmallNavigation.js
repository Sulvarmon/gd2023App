import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function SmallNavigation({ pages, links }) {
    const languageData = useSelector(state => state.languageData.value)
    return (
        <div>
            <div className='dfjlac gap1 container mt3'>
                {pages.map((element, index) => (
                    <NavLink key={index} to={links[index]} className={`theme ${languageData['font-family'][0]} fs2 dfjcac gap1 menuHover`}>{element}{index !== (pages.length - 1) && <MdKeyboardDoubleArrowRight />} </NavLink>
                ))}
            </div>
        </div>
    )
}
