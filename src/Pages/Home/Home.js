import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import CarouselOpacity from '../../Components/CarouselOpacity/CarouselOpacity';
import Title from '../../Components/Title/Title';
import Grid from '../../Components/Grid/Grid';
import grdiImage1 from '../../Images/news0.jpg';
import grdiImage2 from '../../Images/news1.jpg';
import grdiImage3 from '../../Images/news2.jpg';
import projImages1 from '../../Images/proj0.jpg';
import projImages2 from '../../Images/proj1.jpg';
import projImages3 from '../../Images/proj2.jpg';
import projImages4 from '../../Images/proj3.jpg';
import projImages5 from '../../Images/proj4.jpg';
import projImages6 from '../../Images/proj5.jpg';
import about from '../../Images/about.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ModalImage from 'react-modal-image';
import CarouselThumbnail from '../../Components/CarouselThumbnail/CarouselThumbnail';
// import styles from './Home.module.css';

export default function Home() {
    const languageData = useSelector(state => state.languageData.value);

    const dispatch = useDispatch();

    useEffect(() => {
        // window.scrollTo(0, 0);
        document.title = languageData['page titles']['home'];
        dispatch(pageVisit('home'));
    }, [languageData, dispatch]);

    const images = [grdiImage1, grdiImage2, grdiImage3];
    const projImages = [projImages2, projImages3, projImages4, projImages5, projImages6, projImages1,];

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
                <CarouselThumbnail
                    type={'with texts'}
                    images={projImages}
                    titles={languageData['projects titles']}
                    texts={languageData['projects texts']}
                    links={languageData['links']}
                />
                <hr className='mt5 mb5' />
                <Title font={languageData['font-family'][0]} text={languageData['about company']} />
                <div className='dfcjcac gap4'>
                    <div className='w2 ma'><ModalImage small={about} large={about} lt='' /></div>
                    <p className={`theme ${languageData['font-family'][1]}`}>{languageData['about company text']}</p>
                    <Link to='/About-Us' className={`mainBtn ${languageData['font-family'][0]}`}>{languageData['fully']}</Link>
                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    );
}
