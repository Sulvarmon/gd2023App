import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import about from '../../Images/about.jpg';
import Footer from '../../Components/Footer/Footer';
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux'
import { pageVisit } from '../../Slices/Visits';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";
import { RxReset } from "react-icons/rx";

export default function AboutUs() {
    const dispatch = useDispatch()
    const languageData = useSelector(state => state.languageData.value)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['about']
        dispatch(pageVisit('about'))
    }, [languageData, dispatch]);
    const pages = [languageData['page titles']['home'], languageData['page titles']['about']];
    const links = ['/', '/About-Us'];

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
            <Header />
            <SmallNavigation pages={pages} links={links} />
            <div className='container background1 p2 br2 mt5 dfcjcas gap4'>
                <Title font={languageData['font-family'][0]} text={languageData['about us']} />
                <div className="ma w3" style={{ paddingBottom: '1%' }}>
                        <TransformWrapper wheel={{ disabled: true }}>
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <>
                                    <div className="dfjcac gap2 mb2">
                                        <button className='theme iconView iconHover' onClick={() => zoomIn()}><BsPlusLg size={20} /></button>
                                        <button className='theme iconView iconHover' onClick={() => zoomOut()}><HiMinus size={20}/></button>
                                        <button className='theme iconView iconHover' onClick={() => resetTransform()}><RxReset size={30} /></button>
                                    </div>
                                    <TransformComponent>
                                        <img src={about} alt="test" className="w5 zoom-image" />
                                    </TransformComponent>
                                </>
                            )}
                        </TransformWrapper>
                    </div>     
                <p className={`theme ${languageData['font-family'][1]}`}>{languageData['about us texts'][0]}</p>
                <ul ref={ref1} className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][1].map((element, index) => (
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue o0 to1 ${visibleItems1.includes(index) ? 'o1' : ''}`}>{element}</li>
                    ))}
                </ul>
                <p className={`theme ${languageData['font-family'][1]}`}>{languageData['about us texts'][2]}</p>
                <ul ref={ref2} className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][3].map((element, index) => (
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue o0 to1 ${visibleItems2.includes(index) ? 'o1' : ''}`}>{element}</li>
                    ))}
                </ul>
                <p className={`theme ${languageData['font-family'][1]}`}>{languageData['about us texts'][4]}</p>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp />
        </>
    );
}
