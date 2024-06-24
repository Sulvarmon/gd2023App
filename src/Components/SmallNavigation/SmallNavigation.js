import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';


export default function SmallNavigation({ pages, font, links }) {
    return (
        <div>
            <div className='dfjlac gap1 container mt3'>
                {pages.map((element, index) => (
                    <NavLink key={index} to={links[index]} className={`${font} fs2 dfjcac gap1 menuHover`}>{element}{index !== (pages.length - 1) && <MdKeyboardDoubleArrowRight />} </NavLink>
                ))}
            </div>
        </div>
    )
}
