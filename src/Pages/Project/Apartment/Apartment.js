import { React, useEffect } from 'react'
import Title from '../../../Components/Title/Title';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import OneProject from '../../../Components/OneProject/OneProject';
import proj from '../../../Images/proj0.jpg'
import ProjectsThumbnail from '../../../Components/ProjectsThumbnail/ProjectsThumbnail';
import SmallNavigation from '../../../Components/SmallNavigation/SmallNavigation';
import { useDispatch } from 'react-redux';
import { pageVisit } from '../../../Slices/Visits';

export default function Apartment({ languageData, changeLanguage }) {
    const pages = [languageData['page titles']['home'],
    languageData['page titles']['projects'],
    languageData['page titles']['poti-apartment'],
    ]
    const dispatch = useDispatch()
    const links = ['/', '/Projects', '/Poti-Apartment'];
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['news']
        dispatch(pageVisit('poti-apartment'))        
    }, [languageData,dispatch])
    return (
        <>
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['projects']} />
                <div className='mb5'><ProjectsThumbnail links={languageData['links']} /></div>
                <OneProject
                    page={'project'}
                    font0={languageData['font-family'][0]}
                    font1={languageData['font-family'][1]}
                    img={proj}
                    title={languageData['project page']['titles'][5]}
                    dottexts={languageData['project page']['dot texts']}
                    underDottexts={languageData['project page']['under dot texts'][5]}
                    maintext={languageData['project page']['main texts'][5]}
                />
                <div className='mt5'><ProjectsThumbnail links={languageData['links']} /></div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}
