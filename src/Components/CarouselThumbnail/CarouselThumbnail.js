import React, { useRef, useEffect, useState } from 'react';
import styles from './CarouselThumbnail.module.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModalImage from 'react-modal-image';





export default function CarouselThumbnail({ type, images, titles, texts, links, imageIndex }) {
  const languageData = useSelector(state => state.languageData.value);
  const fontC = languageData['font-family'][0]
  const btnText = languageData['fully']
  const fontN = languageData['font-family'][1]
  const [transition, setTransition] = useState(false);
  const elementRef = useRef(null);
  const slidesNumber = images.length - 1
  const [width, setWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rightArrowPosition, setrightArrowPosition] = useState(0);
  const [leftArrowPosition, setleftArrowPosition] = useState(0);
  const [rightArrowColor, setRightArrowColor] = useState('rgba(255,255,255,.8)');
  const [leftArrowColor, setLeftArrowColor] = useState('rgba(56,56,56,.5)');

  useEffect(() => {
    if (type === 'without texts') {
      setTransition(false);
      setCurrentSlide(imageIndex);
      if (imageIndex !== 0 || imageIndex !== slidesNumber) {
        setRightArrowColor('rgba(255,255,255,.8)')
        setLeftArrowColor('rgba(255,255,255,.8)')
      }
      if (imageIndex === 0) {
        setLeftArrowColor('rgba(56,56,56,.5)')
      }
      if (imageIndex === slidesNumber) {
        setRightArrowColor('rgba(56,56,56,.5)')
      }
      setTimeout(() => {
        setTransition(true);
      }, 10);
    }
    
  }, [type, imageIndex,slidesNumber]);
  

  useEffect(() => {
    const updateWidth = () => {
      setTransition(false)
      setTimeout(() => {
        setTransition(true);
      }, 300);
      if (elementRef.current) {
          setWidth(elementRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    
    setTimeout(() => {
      setTransition(true);
    }, 300);
    
    window.addEventListener('resize', updateWidth);

    return () => {
      window.onload = () => {
        updateWidth()
      };
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  let slideLeft = () => {
    setRightArrowColor('rgba(255,255,255,.8)')
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1)
      setleftArrowPosition(10)
      setTimeout(() => {
        setleftArrowPosition(0)
      }, 100);
    }
    if (currentSlide <= 1) {
      setLeftArrowColor('rgba(56,56,56,.5)')
    } else {
      setLeftArrowColor('rgba(255,255,255,.8)')
    }
  }

  let slideRight = () => {
    setLeftArrowColor('rgba(255,255,255,.8)')
    if (currentSlide !== slidesNumber) {
      setCurrentSlide(currentSlide + 1)
      setrightArrowPosition(10)
      setTimeout(() => {
        setrightArrowPosition(0)
      }, 100);
    }
    if (currentSlide >= slidesNumber - 1) {
      setRightArrowColor('rgba(56,56,56,.5)')
    } else {
      setRightArrowColor('rgba(255,255,255,.8)')
    }
  }

  let thumbnailClicks = (index) => {
    setCurrentSlide(index)
    if (index !== 0 || index !== slidesNumber) {
      setRightArrowColor('rgba(255,255,255,.8)')
      setLeftArrowColor('rgba(255,255,255,.8)')
    }
    if (index === 0) {
      setLeftArrowColor('rgba(56,56,56,.5)')
    }

    if (index === slidesNumber) {
      setRightArrowColor('rgba(56,56,56,.5)')
    }
  }

  return (
    <div className={`${styles.carousel} w3 ma pr`} style={{ position: 'relative' }}>
      {images.map((element, index) => (
        <div
          key={index}
          ref={elementRef}
          style={{ left: `${(index - currentSlide) * width}px` }}
          className={`pa dfcjbac ${transition && styles.addTransition}`}
        >
          <ModalImage 
            small={element}
            large={element}
            alt=''
            className='pa ofcvr czi'
          />
          {type === 'with texts' ? (
            <>
              <div className={`w3 dfcjcac gap2 ${styles.textWrapper}`}>
                <div className={`${fontC} ${styles.title} p2`}>{titles[index]}</div>
                <div className={`${fontN} ${styles.text} p2`}>{texts[index]}</div>
              </div>
              <Link to={links[index]} className={`mainBtn ${fontC} ${styles.button} mb2`}>{btnText}</Link>
            </>
          ) : null}

        </div>
      ))}

      <div
        onClick={slideRight}
        className={`${styles.hiddenRightArrow}`}
      >
      </div>
      <div
        onClick={slideLeft}
        className={`${styles.hiddenLeftArrow}`}
      >
      </div>

      <IoMdArrowDroprightCircle
        onClick={slideRight}
        className={`${styles.rightArrow} cp`}
        style={{
          transform: `translateY(${rightArrowPosition}px)`,
          color: rightArrowColor
        }}
      />
      <IoMdArrowDropleftCircle
        onClick={slideLeft}
        className={`${styles.leftArrow} cp`}
        style={{
          transform: `translateY(${leftArrowPosition}px)`,
          color: leftArrowColor
        }}
      />

      <div className={`${styles.thumbnails} dfjcac gap3`}>
        {images.map((element, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} dfjcac cp`}
            onClick={() => thumbnailClicks(index)}
          >
            <div
              className={`${styles.thumbnailYey} ${index === currentSlide ? '' : 'dn'}`}
            ></div>
          </div>
        ))}
      </div>

    </div>
  );
}
