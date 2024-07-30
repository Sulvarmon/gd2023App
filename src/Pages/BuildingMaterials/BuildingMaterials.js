import { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import wm0 from '../../Images/wm0.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";
import { RxReset } from "react-icons/rx";

export default function BuildingMaterials() {
    const languageData = useSelector(state => state.languageData.value)
    const pages = [languageData['page titles']['home'], languageData['page titles']['building-materials']]
    const links = ['/', '/Building-Materials'];
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['building-materials']
        dispatch(pageVisit('building-materials'))
    }, [languageData, dispatch])
    return (
        <>
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['building-materials']} />
                <div className='dfcjcac gap4'>
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
                                        <img src={wm0} alt="test" className="w5 zoom-image" />
                                    </TransformComponent>
                                </>
                            )}
                        </TransformWrapper>
                    </div> 
                    {languageData['sectors']['building material texts'].map((element, index) => (
                        <p key={index} className={`theme ${languageData['font-family'][1]}`}>{element}</p>
                    ))}

                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp />
        </>
    )
}
