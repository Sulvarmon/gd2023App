import React from 'react'
import styles from './ExpandMultipleImages.module.css'
import { IoCloseSharp } from "react-icons/io5";
import CarouselThumbnail from '../CarouselThumbnail/CarouselThumbnail';

export default function ExpandMultipleImages({ images, imageIndex, setImageIndex }) {
    return (
        <div className={`${imageIndex === -1 ? styles.hide : styles.darkBg}`}>
            <div onClick={() => { setImageIndex(-1) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
            <div className='h5 container dfjcac'>
                <CarouselThumbnail
                    type={'without texts'}
                    images={images}
                    imageIndex={imageIndex}
                />
            </div>

        </div>
    )
}
