import React from 'react'
import styles from './ExpandMultipleImages.module.css'
import { IoCloseSharp } from "react-icons/io5";
import CarouselThumbnail from '../CarouselThumbnail/CarouselThumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { setTo } from '../../Slices/ExpandMultipleImage';

export default function ExpandMultipleImages({ images }) {
    const imageIndex = useSelector(state => state.expandMultipleImage.value)    
    const dispatch = useDispatch()
    return (
        <div onClick={() => { dispatch(setTo(-1)) }} className={`czo ${imageIndex === -1 ? styles.hide : styles.darkBg}`}>
            <div onClick={() => { dispatch(setTo(-1)) }} className={`${styles.close} cw cp iconView iconHover`}><IoCloseSharp /></div>
            <div onClick={(e) => { e.stopPropagation() }} className='cd h5 container dfjcac'>
                <CarouselThumbnail
                    type={'without texts'}
                    images={images}
                    imageIndex={imageIndex}
                />
            </div>

        </div>
    )
}
