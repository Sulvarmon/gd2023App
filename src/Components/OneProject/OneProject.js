import { React, useState, useEffect } from 'react'
import styles from './OneProject.module.css'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setTo } from '../../Slices/ExpandMultipleImage';
import ModalImage from 'react-modal-image';

export default function OneProject({ font0, font1, img, title, dottexts, underDottexts, maintext, page, index }) {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5,
    });
    const dispatch = useDispatch()
    const [visibleItems1, setVisibleItems1] = useState([]);
    useEffect(() => {
        if (inView1) {
            dottexts.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems1((prev) => [...prev, index]);
                }, index * 400);
            });
        }
    }, [inView1, dottexts]);
    return (
        <div className='dfcjcac gap3'>
            <div className={`theme ${font0}`}>{title}</div>
            <div className={`${styles.grid} gap4`}>
                {page === 'project' ? (
                    <div style={{ height: '300px' }}><ModalImage className='czi' small={img} large={img} alt=''/></div>
                ) : (
                    <div onClick={a => dispatch(setTo(index))} className='pr czi' style={{ height: '300px' }}>
                        <img className='pa ofcnt' src={img} alt='' />
                    </div>
                )}
                <ul ref={ref1} className='pl3 dfcjcas gap2 mt3'>
                    {dottexts.map((element, index) => (
                        <div key={index} className='dfcjcas gap1'>
                            <li className={`${font1} colorBlue`}>{element}</li>
                            <div className={`theme ${font1} o0 tr1 ${visibleItems1.includes(index) ? 'o1' : ''}`}>{underDottexts[index]}</div>
                            <hr className='w5' />
                        </div>
                    ))}

                </ul>
            </div>
            <div className='dfcjcas gap2'>
                {maintext.map((element, index) => (
                    <p key={index} className={`theme ${font1}`}>{element}</p>
                ))}
            </div>
        </div>
    )
}
