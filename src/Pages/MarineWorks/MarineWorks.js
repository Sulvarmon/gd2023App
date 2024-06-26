import { useEffect,useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import mr0 from '../../Images/mr0.jpg'
import mr1 from '../../Images/mr1.jpg'
import mr2 from '../../Images/mr2.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import ExpandMultipleImages from '../../Components/ExpandMultipleImages/ExpandMultipleImages';
import { useInView } from 'react-intersection-observer';

export default function MarineWorks({ languageData, changeLanguage,visits }) {
    const images = [mr0,mr1,mr2]
    const pages = [languageData['page titles']['home'],languageData['page titles']['marine-works']]
    const links = ['/','/Marine-Works'];
    const [imageIndex, setImageIndex] = useState(-1)
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5,
    });
    const [visibleItems1, setVisibleItems1] = useState([]);
    useEffect(() => {
        if (inView1) {
            languageData['sectors']['marine work texts'][1].forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems1((prev) => [...prev, index]);
                }, index * 400);
            });
        }
    }, [inView1, languageData]);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['marine-works']
        visits('marine-works')
    }, [languageData,visits])
    return (
        <>
        <ExpandMultipleImages images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['marine-works']} />
                <div className='dfcjcac gap2'>
                    <div onClick={a=>setImageIndex(0)} className='pr w5 pb50 czi'><img className='pa ofcnt' src={mr0} alt='' /></div>
                    <div className='dfjcac w5 gap2'>
                        <div onClick={a=>setImageIndex(1)} className='pr w2 pb50 czi'><img className='pa ofcnt' src={mr1} alt='' /></div>
                        <div onClick={a=>setImageIndex(2)} className='pr w2 pb50 czi'><img className='pa ofcnt' src={mr2} alt='' /></div>
                    </div>
                </div>
                <hr className='mt5 mb5'/>
                <p className={languageData['font-family'][1]}>{languageData['sectors']['marine work texts'][0]}</p>
                <ul ref={ref1} className='pl3 mt3 mb3'>
                    {languageData['sectors']['marine work texts'][1].map((element,index)=>(
                        <li key={index} className={`${languageData['font-family'][1]} colorBlue tdu o0 to1 ${visibleItems1.includes(index) ? 'o1' : ''}`}>{element}</li>
                    ))}                    
                </ul>
                <p className={languageData['font-family'][1]}>{languageData['sectors']['marine work texts'][2]}</p>
            </div>

            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}
