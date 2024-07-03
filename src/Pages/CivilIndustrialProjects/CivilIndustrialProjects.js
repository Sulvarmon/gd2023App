import { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import cipXobi2 from '../../Images/cip_xobi2.jpg'
import cipTbilisi0 from '../../Images/cip_tbilisi0.jpg'
import cipXobi0 from '../../Images/cip_xobi0.jpg'
import cipXobi1 from '../../Images/cip_xobi1.png'
import { TfiLocationPin } from "react-icons/tfi";
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import { useInView } from 'react-intersection-observer';
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


export default function CivilIndustrialProjects() {
    const languageData = useSelector(state => state.languageData.value)
    const pages = [languageData['page titles']['home'], languageData['page titles']['civil-industrial-projects']]
    const links = ['/', '/Civil-Industrial-Projects']
    const imagesForExpand = [cipXobi2, cipTbilisi0, cipXobi0, cipXobi1]
    const images = [cipTbilisi0, cipXobi0, cipXobi1]
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
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
        document.title = languageData['page titles']['civil-industrial-projects']
        dispatch(pageVisit('civil-industrial-projects'))
    }, [languageData, dispatch])


    return (
        <>
            <Lightbox
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                open={open}
                close={() => setOpen(false)}
                slides={[
                    {
                        src: imagesForExpand[0],
                        description: languageData['sectors']['civil and industrial project texts'][1],
                    },
                    {
                        src: imagesForExpand[1],
                        description: languageData['sectors']['civil and industrial project texts'][5][0],
                    },
                    {
                        src: imagesForExpand[2],
                        description: languageData['sectors']['civil and industrial project texts'][5][1],
                    },
                    {
                        src: imagesForExpand[3],
                        description: languageData['sectors']['civil and industrial project texts'][5][2],
                    },
                ]}
            />
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['page titles']['civil-industrial-projects']} />
                <div className='dfcjcac gap5'>
                    <div className='w5'>
                        <div onClick={() => setOpen(true)} className='pr w5 cp' style={{ height: '220px' }}><img className='pa ofcvr br2' src={cipXobi2} alt='' /></div>
                        <div className={`theme ${languageData['font-family'][1]}`}>{languageData['sectors']['civil and industrial project texts'][0]}</div>
                        <div className={`theme ${languageData['font-family'][1]}`}>{languageData['sectors']['civil and industrial project texts'][1]}</div>
                    </div>
                    <div className='dfcjcas gap2'>
                        <div className={`theme ${languageData['font-family'][1]}`}>{languageData['sectors']['civil and industrial project texts'][2]}</div>
                        <ul ref={ref1} className='pl3 dfcjcas gap1'>
                            {languageData['sectors']['civil and industrial project texts'][3].map((element, index) => (
                                <li key={index} className={`${languageData['font-family'][1]} colorBlue tdu o0 to1 ${visibleItems1.includes(index) ? 'o1' : ''}`}>{element}</li>
                            ))}
                        </ul>
                    </div>
                    <hr className='w5' />
                    <div className='dfjbas gap5 fww'>
                        {images.map((element, index) => (
                            <div key={index} className='dfcjlas gap2' style={{ width: '300px' }}>
                                <div onClick={() => setOpen(true)} className='pr w5 cp' style={{ height: '200px' }}><img className='pa ofcvr' src={element} alt='' /></div>
                                <div className='theme dfjcac gap1'>
                                    <TfiLocationPin />
                                    <div className={`${languageData['font-family'][1]}`}>{languageData['sectors']['civil and industrial project texts'][4][index]}</div>
                                </div>
                                <div className={`theme ${languageData['font-family'][1]}`}>{languageData['sectors']['civil and industrial project texts'][5][index]}</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp />
        </>
    )
}
