import { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import wm0 from '../../Images/wm0.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ModalImage from 'react-modal-image';

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
                    <div className='w3'><ModalImage className='czi' small={wm0} large={wm0} alt=''/></div>
                    {languageData['sectors']['building material texts'].map((element, index) => (
                        <p key={index} className={`theme ${languageData['font-family'][1]}`}>{element}</p>
                    ))}

                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}
