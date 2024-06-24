import React, { useRef, useEffect, useState } from 'react';
import styles from './CarouselThumbnail.module.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';





export default function CarouselThumbnail({ type, images, titles, texts, btnText, fontC, fontN, links, imageIndex }) {
  const [transition, setTransition] = useState(false);
  const elementRef = useRef(null);
  const slidesNumber = images.length - 1
  const [width, setWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rightArrowPosition, setrightArrowPosition] = useState(0);
  const [leftArrowPosition, setleftArrowPosition] = useState(0);
  const [rightArrowColor, setRightArrowColor] = useState('#fff');
  const [leftArrowColor, setLeftArrowColor] = useState('#ccc');

  useEffect(() => {
    if (type === 'without texts') {
      setTransition(false);
      setCurrentSlide(imageIndex);
      if (imageIndex !== 0 || imageIndex !== slidesNumber) {
        setRightArrowColor('fff')
        setLeftArrowColor('fff')
      }
      if (imageIndex === 0) {
        setLeftArrowColor('ccc')
      }
      if (imageIndex === slidesNumber) {
        setRightArrowColor('ccc')
      }
      setTimeout(() => {
        setTransition(true);
      }, 10);
    }
    
  }, [type, imageIndex,slidesNumber]);
  

  useEffect(() => {
    const updateWidth = () => {
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
    setRightArrowColor('#fff')
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1)
      setleftArrowPosition(10)
      setTimeout(() => {
        setleftArrowPosition(0)
      }, 100);
    }
    if (currentSlide <= 1) {
      setLeftArrowColor('#ccc')
    } else {
      setLeftArrowColor('#fff')
    }
  }

  let slideRight = () => {
    setLeftArrowColor('#fff')
    if (currentSlide !== slidesNumber) {
      setCurrentSlide(currentSlide + 1)
      setrightArrowPosition(10)
      setTimeout(() => {
        setrightArrowPosition(0)
      }, 100);
    }
    if (currentSlide >= slidesNumber - 1) {
      setRightArrowColor('#ccc')
    } else {
      setRightArrowColor('#fff')
    }
  }

  let thumbnailClicks = (index) => {
    setCurrentSlide(index)
    if (index !== 0 || index !== slidesNumber) {
      setRightArrowColor('fff')
      setLeftArrowColor('fff')
    }
    if (index === 0) {
      setLeftArrowColor('ccc')
    }

    if (index === slidesNumber) {
      setRightArrowColor('ccc')
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
          <img           
            className="pa ofcvr"
            src={element}
            alt=''
          />
          {type === 'with texts' ? (
            <>
              <div className='w3 dfcjcac gap2 mt5'>
                <div className={`${fontC} ${styles.title}`}>{titles[index]}</div>
                <div className={`${fontN} ${styles.text}`}>{texts[index]}</div>
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
