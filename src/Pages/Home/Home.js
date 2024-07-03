import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import CarouselOpacity from '../../Components/CarouselOpacity/CarouselOpacity';
import Title from '../../Components/Title/Title';
import Grid from '../../Components/Grid/Grid';
import grdiImage1 from '../../Images/news0.jpg';
import grdiImage2 from '../../Images/news1.jpg';
import grdiImage3 from '../../Images/news2.jpg';
import about from '../../Images/about.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import getSlidesData from './SlidesData';
import { SideBySideMagnifier } from "react-image-magnifiers";

export default function Home() {
    const languageData = useSelector(state => state.languageData.value);
    const slidesData = getSlidesData(languageData);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['home'];
        dispatch(pageVisit('home'));
    }, [languageData, dispatch]);

    const images = [grdiImage1, grdiImage2, grdiImage3];
    const [open, setOpen] = useState(false);
    switch (languageData['language']) {
        case 'lan':
            document.documentElement.style.setProperty('--lightboxFFC', 'english-russian');
            document.documentElement.style.setProperty('--lightboxFFN', 'english-russian');
          break;
        case 'ენა':
            document.documentElement.style.setProperty('--lightboxFFC', '"BPG LE Studio 02 Caps", sans-serif');
            document.documentElement.style.setProperty('--lightboxFFN', '"BPG LE Studio 02", sans-serif');
          break;
        case 'язык':
            document.documentElement.style.setProperty('--lightboxFFC', 'english-russian');
            document.documentElement.style.setProperty('--lightboxFFN', 'english-russian');
          break;
        default:
            document.documentElement.style.setProperty('--lightboxFont', '#DCDCDC');
          break;
      }
    return (
        <>
            <Header />
            <CarouselOpacity text={languageData['gd2023']} font={languageData['font-family'][0]} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={languageData['font-family'][0]} text={languageData['news']} />
                <Grid
                    link={['/News', '/News', '/News']}
                    fontC={languageData['font-family'][0]}
                    fontN={languageData['font-family'][1]}
                    title={languageData['news main page']['titles']}
                    images={images}
                    date={languageData['news main page']['dates']}
                    text={languageData['news main page']['texts']}
                    btnText={languageData['fully']}
                />
                <hr className='mt5 mb5' />
                <Title font={languageData['font-family'][0]} text={languageData['important projects']} />
                <div className='w5 ma'>
                    <Lightbox
                        plugins={[Captions, Fullscreen, Thumbnails, Zoom, Inline]}
                        inline={{
                            style: { width: "100%", height: '500px', aspectRatio: "3 / 2" },
                        }}
                        open={open}
                        close={() => setOpen(false)}
                        slides={slidesData}
                    />
                </div>
                <hr className='mt5 mb5' />
                <Title font={languageData['font-family'][0]} text={languageData['about company']} />
                <div className='dfcjcac gap4'>
                    <div className='w3 ma pr'>
                        <SideBySideMagnifier
                            alwaysInPlace={true}
                            imageSrc={about}
                            imageAlt=""
                        />
                    </div>
                    <p className={`theme ${languageData['font-family'][1]}`}>{languageData['about company text']}</p>
                    <Link to='/About-Us' className={`mainBtn ${languageData['font-family'][0]}`}>{languageData['fully']}</Link>
                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
            <ScrollUp />
        </>
    );
}
