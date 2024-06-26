import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import about from '../../Images/about.jpg';
import Footer from '../../Components/Footer/Footer';
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import ExpandSingleImage from '../../Components/ExpandSingleImage/ExpandSingleImage';
import { useInView } from 'react-intersection-observer';

export default function AboutUs({ languageData, changeLanguage, visits }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['about']
        visits('about');
    }, [languageData, visits]);
    const pages = [languageData['page titles']['home'], languageData['page titles']['about']];
    const links = ['/', '/About-Us'];
    const [showDarkbg, setShowDarkbg] = useState(false);

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.5,
    });

    const [visibleItems1, setVisibleItems1] = useState([]);
    const [visibleItems2, setVisibleItems2] = useState([]);

    useEffect(() => {
        if (inView1) {
            languageData['about us texts'][1].forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems1((prev) => [...prev, index]);
                }, index * 400);
            });
        }
    }, [inView1, languageData]);

    useEffect(() => {
        if (inView2) {
            languageData['about us texts'][3].forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems2((prev) => [...prev, index]);
                }, index * 400);
            });
        }
    }, [inView2, languageData]);

    return (
        <>
            <ExpandSingleImage image={about} showDarkbg={showDarkbg} setShowDarkbg={setShowDarkbg} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5 dfcjcas gap4'>
                <Title font={languageData['font-family'][0]} text={languageData['about us']} />
                <div onClick={() => setShowDarkbg(!showDarkbg)} className='pr czi w3 ma' style={{ paddingBottom: '45%' }}><img className='pa ofcvr' src={about} alt='' /></div>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][0]}</p>
                <ul ref={ref1} className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][1].map((element, index) => (
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue o0 to1 ${visibleItems1.includes(index) ? 'o1' : ''}`}>{element}</li>
                    ))}
                </ul>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][2]}</p>
                <ul ref={ref2} className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][3].map((element, index) => (
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue o0 to1 ${visibleItems2.includes(index) ? 'o1' : ''}`}>{element}</li>
                    ))}
                </ul>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][4]}</p>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    );
}
