import { React, useState } from 'react';
import styles from './Search.module.css';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Search({ showSearch, setShowSearch, languageData }) {
    const [foundArr, setFoundArr] = useState([])
    const [foundHrefs, setFoundHrefs] = useState([])
    const [searchIsEmpty, setSearchIsEmpty] = useState(true)

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase().replace(/[-,.!:'"/\s]/g, "");
        const newFoundArr = [];
        const newFoundHrefs = [];

        languageData['project page']['titles'].forEach((element, index) => {
            const normalizedElement = element.replace(/[\s]/g, "").toLowerCase();
            if (normalizedElement.indexOf(value) !== -1 && value !== '') {
                newFoundArr.push(element);
                newFoundHrefs.push(languageData['links'][index])
            }
        });

        value === '' ? setSearchIsEmpty(true) : setSearchIsEmpty(false)

        setFoundArr([...newFoundArr])
        setFoundHrefs([...newFoundHrefs])
    };

    return (
        <div>
            <div className={`${!showSearch ? 'dn' : styles.darkBg}`}>
                <div onClick={() => { setShowSearch(false) }} className={`${styles.close} cw cp iconView iconHover}`}><IoCloseSharp /></div>
                <div className={`container dfcjcac gap5 ${styles.search}`}>
                    <b className={`colorBlue ${languageData['font-family'][0]} ${styles.title}`}>{languageData['search']['title']}</b>
                    <div className={`dfcjcac gap4`}>
                        <b className={`fs2 colorRed ${languageData['font-family'][1]}`}>{languageData['search']['worning']}</b>
                        <input
                            className={`${languageData['font-family'][0]} p2 border br4`}
                            type="text"
                            name="name"
                            placeholder={languageData['search']['placeholder']}
                            onChange={handleInputChange}
                        />
                    </div>

                    {foundArr.length > 0 && !searchIsEmpty && (
                        <ul className='pl3 dfcjcas gap2'>
                            {foundArr.map((element, index) => (
                                <li className='colorRed' key={index} ><Link className={`${languageData['font-family'][0]} cw menuHover`} to={foundHrefs[index]} >{element}</Link></li>
                            ))}
                        </ul>
                    )}

                    {!searchIsEmpty && foundArr.length === 0 && (
                        <div className={`${languageData['font-family'][0]} cw`}>{languageData['search']['no result']}</div>
                    )}

                </div>
            </div>
        </div>
    );
}
