import React, { useEffect, useState } from 'react';
import './Home.module.css';
import Header from '../../Components/Header/Header';
import CarouselOpacity from '../../Components/CarouselOpacity/CarouselOpacity';
import Title from '../../Components/Title/Title';
import Grid from '../../Components/Grid/Grid';
import grdiImage1 from '../../Images/news0.jpg'
import grdiImage2 from '../../Images/news1.jpg'
import grdiImage3 from '../../Images/news2.jpg'
import projImages1 from '../../Images/proj0.jpg'
import projImages2 from '../../Images/proj1.jpg'
import projImages3 from '../../Images/proj2.jpg'
import projImages4 from '../../Images/proj3.jpg'
import projImages5 from '../../Images/proj4.jpg'
import about from '../../Images/about.jpg'
import CarouselThumbnail from '../../Components/CarouselThumbnail/CarouselThumbnail';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import ExpandSingleImage from '../../Components/ExpandSingleImage/ExpandSingleImage';

export default function Home({ languageData, changeLanguage, visits }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['home']
        visits('home');
    }, [languageData, visits]);
    const images = [grdiImage1, grdiImage2, grdiImage3]
    const projImages = [projImages1, projImages2, projImages3, projImages4, projImages5]
    const [showDarkbg, setShowDarkbg] = useState(false)

    return (
        <>
            <ExpandSingleImage image={about} showDarkbg={showDarkbg} setShowDarkbg={setShowDarkbg} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <CarouselOpacity text={languageData['gd2023']} font={languageData['font-family'][0]} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['news']} />
                <Grid
                    link={['/News', '/News', '/News']}
                    fontC={languageData['font-family'][0]}
                    fontN={languageData['font-family'][1]}
                    title={languageData['news main page']['titles']}
                    images={images}
                    date={languageData['news main page']['dates']}
                    text={languageData['news main page']['texts']}
                    btnText={languageData['fully']}
                />
                <hr className='mt5 mb5' />
                <Title font={languageData['font-family'][0]} text={languageData['important projects']} />
                <CarouselThumbnail
                    type={'with texts'}
                    images={projImages}
                    titles={languageData['carousel']['home page titles']}
                    texts={languageData['carousel']['home page texts']}
                    btnText={languageData['fully']}
                    fontC={languageData['font-family'][0]}
                    fontN={languageData['font-family'][1]}
                    links={['/Pay-Terminal', '/Berth-7', '/Berth-15', '/Container-Terminal', '/Rehabilitation']}
                />
                <hr className='mt5 mb5' />
                <Title font={languageData['font-family'][0]} text={languageData['about company']} />
                <div className='dfcjcac gap4'>
                    <div onClick={() => { setShowDarkbg(!showDarkbg) }} className='pr w3 czi' style={{ paddingBottom: '45%' }}><img className='pa ofcvr' src={about} alt='' /></div>
                    <p className={`${languageData['font-family'][1]}`}>{languageData['about company text']}</p>
                    <Link to='/About-Us' className={`mainBtn ${languageData['font-family'][0]}`}>{languageData['fully']}</Link>
                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    );
}
