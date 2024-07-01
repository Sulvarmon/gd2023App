import { React, useEffect } from 'react'
import Title from '../../../Components/Title/Title';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import OneProject from '../../../Components/OneProject/OneProject';
import proj0 from '../../../Images/proj5.jpg'
import ProjectsThumbnail from '../../../Components/ProjectsThumbnail/ProjectsThumbnail';
import SmallNavigation from '../../../Components/SmallNavigation/SmallNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../../Slices/Visits';
import ScrollUp from '../../../Components/ScrollUp/ScrollUp';

export default function PayTerminal() {
    const languageData = useSelector(state => state.languageData.value)
    const pages = [languageData['page titles']['home'],
    languageData['page titles']['projects'],
    languageData['page titles']['pay-terminal'],
    ]
    const dispatch = useDispatch()
    const links = ['/', '/Projects', '/Pay-Terminal']; 
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['pay-terminal']
        dispatch(pageVisit('pay-terminal'))
    }, [languageData,dispatch])
    return (
        <>
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['projects']} />
                <div className='mb5'><ProjectsThumbnail links={languageData['links']} /></div>
                <OneProject
                    page={'project'}
                    font0={languageData['font-family'][0]}
                    font1={languageData['font-family'][1]}
                    img={proj0}
                    title={languageData['project page']['titles'][4]}
                    dottexts={languageData['project page']['dot texts']}
                    underDottexts={languageData['project page']['under dot texts'][5]}
                    maintext={languageData['project page']['main texts'][5]}
                />
                <div className='mt5'><ProjectsThumbnail links={languageData['links']} /></div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp/>
        </>
    )
}
