import { useEffect,useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import OneProject from '../../Components/OneProject/OneProject';
import news0 from '../../Images/news0.jpg'
import news1 from '../../Images/news1.jpg'
import news2 from '../../Images/news2.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import ExpandMultipleImages from '../../Components/ExpandMultipleImages/ExpandMultipleImages';

export default function News({ languageData, changeLanguage }) {
    const pages = [languageData['page titles']['home'], languageData['page titles']['news']]
    const links = ['/', '/News'];
    const images = [news0, news1, news2]
    const [imageIndex, setImageIndex] = useState(-1)
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['news']
    }, [languageData])
    return (
        <>
            <ExpandMultipleImages images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['news']} />
                {images.map((element, index) => (
                    <div key={index}>
                        <OneProject
                            index={index}
                            font0={languageData['font-family'][0]}
                            font1={languageData['font-family'][1]}
                            img={element}
                            title={languageData['news page']['titles'][index]}
                            dottexts={languageData['news page']['dot texts']}
                            underDottexts={languageData['news page']['under dot texts'][index]}
                            maintext={languageData['news page']['main texts'][index]}
                            setImageIndex={setImageIndex}
                        />
                        {index !== images.length - 1 && <hr className='mt5 mb5' />}
                    </div>
                ))}
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}