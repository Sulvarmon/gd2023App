import React, { useEffect, useState } from 'react';
import styles from './ScrollUp.module.css';
import { RxDoubleArrowUp } from 'react-icons/rx';

export default function ScrollUp() {
    const [displayArrow, setDisplayArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setDisplayArrow(true);
            } else {
                setDisplayArrow(false);
            }            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayArrow]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`${styles.scrollUp} tac cp ${!displayArrow && 'dn'}`} onClick={scrollToTop}>
            <div className={`${styles.arrow}`}><RxDoubleArrowUp /></div>
        </div>
    );
}
