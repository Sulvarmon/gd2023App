import {React, useState} from 'react'
import styles from './OneProject.module.css'
import ExpandSingleImage from '../ExpandSingleImage/ExpandSingleImage'

export default function OneProject({ font0, font1, img, title, dottexts, underDottexts, maintext, page }) {
    const [showDarkbg, setShowDarkbg] = useState(false)
    return (
        <div className='dfcjcac gap3'>
            <ExpandSingleImage image={img} showDarkbg={showDarkbg} setShowDarkbg={setShowDarkbg} />
            <div className={`${font0}`}>{title}</div>
            <div className={`${styles.grid} gap4`}>
            {page === 'project' ? (
                <div onClick={() => setShowDarkbg(!showDarkbg)} className='pr czi' style={{ height: '300px' }}>
                    <img className='pa ofcnt' src={img} alt='' />
                </div>
            ) : (
                <div className='pr czi' style={{ height: '300px' }}>
                    <img className='pa ofcnt' src={img} alt='' />
                </div>
            )}
                <ul className='pl3 dfcjcas gap2 mt3'>
                    {dottexts.map((element, index) => (
                        <div key={index} className='dfcjcas gap1'>
                            <li className={`${font1} colorBlue`}>{element}</li>
                            <div className={`${font1}`}>{underDottexts[index]}</div>
                        </div>
                    ))}

                </ul>
            </div>
            <div className='dfcjcas gap2'>
                {maintext.map((element, index) => (
                    <p key={index} className={`${font1}`}>{element}</p>
                ))}
            </div>
        </div>
    )
}
