import React from 'react'
import styles from './Grid.module.css'
import GridItem from './GridItem'

export default function Grid({ fontC, fontN, images, title, date, text, btnText,link }) {
    
    return (
        <div className={`${styles.grid}`}>
            {images.map((element, index) => (
                <GridItem
                    key={index}
                    link={link[index]}
                    fontC={fontC}
                    fontN={fontN}
                    img={element}
                    title={title[index]}
                    date={date[index]}
                    text={text[index]}
                    btnText={btnText}
                />
            ))}

        </div>
    )
}
