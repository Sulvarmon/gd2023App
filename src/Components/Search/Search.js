import { React, useState } from 'react';
import styles from './Search.module.css';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToFalse } from '../../Slices/Search';

export default function Search() {
    const languageData = useSelector(state => state.languageData.value)
    const [foundArr, setFoundArr] = useState([])
    const [foundHrefs, setFoundHrefs] = useState([])
    const [searchIsEmpty, setSearchIsEmpty] = useState(true)
    const showSearch = useSelector(state => state.search.value)
    const dispatch = useDispatch()

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
                <div onClick={() => { dispatch(setToFalse()) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
                <div className={`container dfcjcac gap5 ${styles.search}`}>
                    <b className={`colorBlue ${languageData['font-family'][0]} ${styles.title}`}>{languageData['search']['title']}</b>
                    <div className={`dfcjcac gap4`}>                        
                        <input
                            className={`${languageData['font-family'][0]} p2 border br4`}
                            type="text"
                            name="name"
                            placeholder={languageData['search']['placeholder']}
                            onChange={handleInputChange}
                        />
                        <b className={`fs2 colorBlue ${languageData['font-family'][1]}`}>{languageData['search']['worning']}</b>
                    </div>

                    {foundArr.length > 0 && !searchIsEmpty && (
                        <ul  className='pl3 dfcjcas gap2'>
                            {foundArr.map((element, index) => (
                                <li onClick={() => { dispatch(setToFalse()) }} className='colorRed' key={index} ><Link className={`${languageData['font-family'][0]} cw menuHover`} to={foundHrefs[index]} >{element}</Link></li>
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
