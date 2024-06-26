import { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Title from '../../Components/Title/Title'
import team from '../../Images/team.jpg'
import director from '../../Images/director.jpg'
import deputy from '../../Images/deputy.jpg'
import partner from '../../Images/partner.jpg'
import independent from '../../Images/independent.jpg'
import StaffMember from './StaffMember'
import Footer from '../../Components/Footer/Footer'
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation'
import ExpandMultipleImages from '../../Components/ExpandMultipleImages/ExpandMultipleImages'


export default function OurTeam({ languageData, changeLanguage,visits }) {
    const pages = [languageData['page titles']['home'], languageData['page titles']['team']]
    const links = ['/', '/Our-Team'];
    const images = [deputy, partner, independent]
    const [imageIndex, setImageIndex] = useState(-1)
    const imagesForExpand = [team, director, deputy, partner, independent]


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['team']
        visits('team')
    }, [languageData,visits])
    return (
        <>
            <ExpandMultipleImages images={imagesForExpand} imageIndex={imageIndex} setImageIndex={setImageIndex} />
            <Header languageData={languageData} changeLanguage={changeLanguage} />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5 dfcjcas gap4'>
                <Title font={languageData['font-family'][0]} text={languageData['our team']} />
                <div onClick={a=>setImageIndex(0)} className='pr w3 ma czi' style={{ paddingBottom: '45%' }}><img className='pa ofcvr' src={team} alt='' /></div>
                {languageData['team texts'].map((element, index) => (
                    <p key={index} className={`${languageData['font-family'][1]}`}>{languageData['team texts'][index]}</p>
                ))}
                <hr className='w5' />
                <Title font={languageData['font-family'][0]} text={languageData['team titles'][0]} />
                <div onClick={a=>setImageIndex(1)} className='ma czi'>
                    <StaffMember
                        img={director}
                        font={languageData['font-family'][0]}
                        name={languageData['team members'][0]}
                        position={languageData['team positions'][0]}
                    />
                </div>
                <hr className='w5' />
                <Title font={languageData['font-family'][0]} text={languageData['team titles'][1]} />
                <div className={`dfjbas fww gap4 w5`}>
                    {languageData['team members'][1].map((element, index) => (
                        <div onClick={a=>setImageIndex(index + 2)} key={index} className='czi'>
                            <StaffMember
                                key={index}
                                img={images[index]}
                                font={languageData['font-family'][0]}
                                name={element}
                                position={languageData['team positions'][1][index]}
                            />
                        </div>

                    ))}

                </div>
            </div>
            <Footer font={languageData['font-family'][0]} rights={languageData['rights']} />
        </>
    )
}