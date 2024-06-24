import { useEffect,useState } from 'react'
import Header from '../../Components/Header/Header'
import Title from '../../Components/Title/Title'
import about from '../../Images/about.jpg'
import Footer from '../../Components/Footer/Footer'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation'
import ExpandSingleImage from '../../Components/ExpandSingleImage/ExpandSingleImage'

export default function AboutUs({ languageData, changeLanguage }) {
    const pages = [languageData['page titles']['home'],languageData['page titles']['about']]
    const links = ['/','/About-Us'];
    const [showDarkbg, setShowDarkbg] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['about']
    }, [languageData])
    
    return (
        <>
        <ExpandSingleImage image={about} showDarkbg={showDarkbg} setShowDarkbg={setShowDarkbg} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5 dfcjcas gap4'>
                <Title font={languageData['font-family'][0]} text={languageData['about us']} />
                <div onClick={() => { setShowDarkbg(!showDarkbg) }} className='pr czi w3 ma' style={{ paddingBottom: '45%' }}><img className='pa ofcvr' src={about} alt='' /></div>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][0]}</p>
                <ul className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][1].map((element,index)=>(
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue`}>{languageData['about us texts'][1][index]}</li>
                    ))}
                </ul>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][2]}</p>
                <ul className='pl3 dfcjcas gap1'>
                    {languageData['about us texts'][3].map((element,index)=>(
                        <li key={index} className={`${languageData['font-family'][1]} tdu colorBlue`}>{languageData['about us texts'][3][index]}</li>
                    ))}
                </ul>
                <p className={`${languageData['font-family'][1]}`}>{languageData['about us texts'][4]}</p>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}