import React, { useState, useEffect } from 'react'
import styles from './Grid.module.css'
import GridItem from './GridItem'
import { useInView } from 'react-intersection-observer';

export default function Grid({ fontC, fontN, images, title, date, text, btnText, link }) {

    const { ref: ref1, inView: inView1 } = useInView({});
    const [visibleItems1, setVisibleItems1] = useState([]);
    useEffect(() => {
        if (inView1) {
            images.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems1((prev) => [...prev, index]);
                }, index * 400);
            });
        }
    }, [inView1, images]);
    return (
        <div ref={ref1} className={`${styles.grid}`}>
            {images.map((element, index) => (
                <div key={index} className={`${styles.item} ${visibleItems1.includes(index) && styles.animate}`}>
                    <GridItem
                        link={link[index]}
                        fontC={fontC}
                        fontN={fontN}
                        img={element}
                        title={title[index]}
                        date={date[index]}
                        text={text[index]}
                        btnText={btnText}
                    />
                </div>
            ))}

        </div>
    )
}
