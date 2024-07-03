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
import { useDispatch, useSelector } from 'react-redux'
import { pageVisit } from '../../Slices/Visits'
import ScrollUp from '../../Components/ScrollUp/ScrollUp'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { SideBySideMagnifier } from "react-image-magnifiers";


export default function OurTeam() {
    const languageData = useSelector(state => state.languageData.value)
    const pages = [languageData['page titles']['home'], languageData['page titles']['team']]
    const links = ['/', '/Our-Team'];
    const images = [deputy, partner, independent]
    const dispatch = useDispatch()
    const imagesForExpand = [director, deputy, partner, independent]
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['team']
        dispatch(pageVisit('team'))
    }, [languageData, dispatch])
    return (
        <><Lightbox
            plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
            open={open}
            close={() => setOpen(false)}
            slides={[
                {
                    src: imagesForExpand[0],
                    title: languageData['team members'][0],
                    description: languageData['team positions'][0],
                },
                {
                    src: imagesForExpand[1],
                    title: languageData['team members'][1][0],
                    description: languageData['team positions'][1][0]
                },
                {
                    src: imagesForExpand[2],
                    title: languageData['team members'][1][1],
                    description: languageData['team positions'][1][1]
                },
                {
                    src: imagesForExpand[3],
                    title: languageData['team members'][1][2],
                    description: languageData['team positions'][1][2]
                },
            ]}
        />
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5 dfcjcas gap4'>
                <Title font={languageData['font-family'][0]} text={languageData['our team']} />
                <div className='container pr'>
                    <SideBySideMagnifier
                        alwaysInPlace={true}
                        imageSrc={team}
                        imageAlt=""
                    /></div>
                {languageData['team texts'].map((element, index) => (
                    <p key={index} className={`theme ${languageData['font-family'][1]}`}>{languageData['team texts'][index]}</p>
                ))}
                <hr className='w5' />
                <Title font={languageData['font-family'][0]} text={languageData['team titles'][0]} />
                <div onClick={() => setOpen(true)} className='ma cp'>
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
                        <div onClick={() => setOpen(true)} key={index} className='cp'>
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
            <ScrollUp />
        </>
    )
}