import { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import projImages1 from '../../Images/proj1.jpg'
import projImages2 from '../../Images/proj2.jpg'
import projImages3 from '../../Images/proj3.jpg'
import projImages4 from '../../Images/proj4.jpg'
import projImages5 from '../../Images/proj5.jpg'
import projImages6 from '../../Images/proj0.jpg'
import Title from '../../Components/Title/Title';
import Grid from '../../Components/Grid/Grid';
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';

export default function Projects({ languageData, changeLanguage,visits }) {
    const pages = [languageData['page titles']['home'],languageData['page titles']['projects']]
    const links = ['/','/Projects'];
    const images = [projImages1, projImages2, projImages3, projImages4, projImages5, projImages6]
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['projects']
        visits('projectsPg')
    }, [languageData,visits])
    return (
        <>
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['projects']} />
                <Grid
                    link={languageData['links']}
                    fontC={languageData['font-family'][0]}
                    fontN={languageData['font-family'][1]}
                    title={languageData['projects titles']}
                    images={images}
                    date={languageData['projects dates']}
                    text={languageData['projects texts']}
                    btnText={languageData['fully']}
                />
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}
