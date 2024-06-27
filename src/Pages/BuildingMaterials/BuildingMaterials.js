import { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import wm0 from '../../Images/wm0.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import ExpandSingleImage from '../../Components/ExpandSingleImage/ExpandSingleImage';

export default function BuildingMaterials({ languageData, changeLanguage,visits }) {
    const pages = [languageData['page titles']['home'], languageData['page titles']['building-materials']]
    const links = ['/', '/Building-Materials'];
    const [showDarkbg, setShowDarkbg] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['building-materials']
        visits('building-materials')
    }, [languageData,visits])
    return (
        <>
            <ExpandSingleImage image={wm0} showDarkbg={showDarkbg} setShowDarkbg={setShowDarkbg} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['building-materials']} />
                <div className='dfcjcac gap4'>
                    <div onClick={() => { setShowDarkbg(!showDarkbg) }} className='pr w5 pb50 czi'><img className='pa ofcnt' src={wm0} alt='' /></div>
                    {languageData['sectors']['building material texts'].map((element, index) => (
                        <p key={index} className={`theme ${languageData['font-family'][1]}`}>{element}</p>
                    ))}

                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}
