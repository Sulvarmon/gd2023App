import React, { useState, useEffect } from 'react';
import styles from './CarouselOpacity.module.css';
import carouselImage1 from '../../Images/mainImg.jpg';
import carouselImage2 from '../../Images/opcar0.jpg';
import carouselImage3 from '../../Images/opcar1.jpg';
import carouselImage4 from '../../Images/opcar2.jpg';
import CarouselItem from './CarouselItem';

const CarouselOpacity = ({text,font}) => {
  const carouselImages = [carouselImage1, carouselImage2, carouselImage3, carouselImage4];
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(currentItem => (currentItem + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className={`${styles.carousel} pr`}>
      <div className='container'><div className={`${styles.text} ${font} `}>{text}</div></div>
      {carouselImages.map((element, index) => (
        <CarouselItem key={index} src={element} opacity={index === currentItem ? 'o1' : 'o0'} />
      ))}
    </div>
  );
};

export default CarouselOpacity;
