import { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import OneProject from '../../Components/OneProject/OneProject';
import news0 from '../../Images/news0.jpg'
import news1 from '../../Images/news1.jpg'
import news2 from '../../Images/news2.jpg'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


export default function News() {
    const languageData = useSelector(state => state.languageData.value)
    const pages = [languageData['page titles']['home'], languageData['page titles']['news']]
    const links = ['/', '/News'];
    const dispatch = useDispatch()
    const images = [news0, news1, news2]
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['news']
        dispatch(pageVisit('news'))
    }, [languageData, dispatch])
    return (
        <>
            <Lightbox
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                open={open}
                close={() => setOpen(false)}
                slides={[
                    {
                        src: news0,
                        title: languageData['news page']['titles'][0],
                        description: languageData['news page']['main texts'][0],
                    },
                    {
                        src: news1,
                        title: languageData['news page']['titles'][1],
                        description: languageData['news page']['main texts'][1],
                    },
                    {
                        src: news2,
                        title: languageData['news page']['titles'][2],
                        description: languageData['news page']['main texts'][2],
                    },
                ]}
            />
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['news']} />
                {images.map((element, index) => (
                    <div onClick={() => setOpen(true)} key={index}>
                        <OneProject
                            index={index}
                            font0={languageData['font-family'][0]}
                            font1={languageData['font-family'][1]}
                            img={element}
                            title={languageData['news page']['titles'][index]}
                            dottexts={languageData['news page']['dot texts']}
                            underDottexts={languageData['news page']['under dot texts'][index]}
                            maintext={languageData['news page']['main texts'][index]}
                        />
                        {index !== images.length - 1 && <hr className='mt5 mb5' />}
                    </div>
                ))}
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp />
        </>
    )
}