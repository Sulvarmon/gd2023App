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
import about from '../../Images/about.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ModalImage from 'react-modal-image';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function Home() {
    const languageData = useSelector(state => state.languageData.value);
    const imagess = [
        {
            original: projImages1,
            thumbnail: projImages1,
            originalHeight: '300px',
            thumbnailHeight: '50px',
            thumbnailLabel: languageData['carousel']['home page titles'][0],            
            description: languageData['carousel']['home page texts'][0], 
            link: '/Poti-Apartment'           
        },
        {
            original: projImages2,
            thumbnail: projImages2,
            originalHeight: '300px',
            thumbnailHeight: '50px',
            thumbnailLabel: languageData['carousel']['home page titles'][1],
            description: languageData['carousel']['home page texts'][1], 
            link: '/Berth-7' 
        },
        {
            original: projImages3,
            thumbnail: projImages3,
            originalHeight: '300px',
            thumbnailHeight: '50px',
            thumbnailLabel: languageData['carousel']['home page titles'][2],
            description: languageData['carousel']['home page texts'][2], 
            link: '/Berth-15' 
        },
        {
            original: projImages4,
            thumbnail: projImages4,
            originalHeight: '300px',
            thumbnailHeight: '50px',
            thumbnailLabel: languageData['carousel']['home page titles'][3],
            description: languageData['carousel']['home page texts'][3], 
            link: '/Container-Terminal' 
        },
        {
            original: projImages5,
            thumbnail: projImages5,
            originalHeight: '300px',
            thumbnailHeight: '50px',
            thumbnailLabel: languageData['carousel']['home page titles'][4],
            description: languageData['carousel']['home page texts'][4], 
            link: '/Rehabilitation' 
        },
    ];

    const dispatch = useDispatch();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['home'];
        dispatch(pageVisit('home'));
    }, [languageData, dispatch]);

    const images = [grdiImage1, grdiImage2, grdiImage3];
    const projImages = [projImages1, projImages2, projImages3, projImages4, projImages5];

    const renderGalleryItem = (item) => (
        <Link to={item.link}>
            <img src={item.original} alt={item.description} style={{height: item.originalHeight}} />
            <div className="image-gallery-description">
                <span>{item.description}</span>
            </div>
        </Link>
    );

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
                <ImageGallery 
                    items={imagess} 
                    showPlayButton={false}  
                    showBullets={true}
                    renderItem={renderGalleryItem}
                />
                 {/* <CarouselThumbnail
                    type={'with texts'}
                    images={projImages}
                    titles={languageData['carousel']['home page titles']}
                    texts={languageData['carousel']['home page texts']}
                    btnText={languageData['fully']}
                    fontC={languageData['font-family'][0]}
                    fontN={languageData['font-family'][1]}
                    links={['/Pay-Terminal', '/Berth-7', '/Berth-15', '/Container-Terminal', '/Rehabilitation']}
                /> */}
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
