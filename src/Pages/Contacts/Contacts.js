import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import Map from './Map';
import ContactInfo from './ContactInfo';
import axios from 'axios';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import styles from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';
import ScrollUp from '../../Components/ScrollUp/ScrollUp';

export default function Contacts() {
    const languageData = useSelector(state => state.languageData.value)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['contact'];
        dispatch(pageVisit('contact'))
    }, [languageData, dispatch]);

    const pages = [languageData['page titles']['home'], languageData['page titles']['contact']]
    const links = ['/', '/Contacts'];
    const font0 = languageData['font-family'][0];
    const font1 = languageData['font-family'][1];
    const [displayBlack, setDisplayBlack] = useState(false);
    const [allowSend, setAllowSend] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [hcaptchaValue, setHcaptchaValue] = useState(null);
    const handleHcaptchaChange = (token) => {
        setHcaptchaValue(token);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!allowSend) {
            alert('Reload Page And Then Send Message')
            return
        }
        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(String(email).toLowerCase());
        }

        if (formData.name === '') {
            alert('Name Field Can Not Be Empty')
            return;
        }
        if (!validateEmail(formData.email)) {
            alert('Email Is Not Valid')
            return;
        }
        if (formData.message === '') {
            alert('Message Field Can Not Be Empty')
            return;
        }
        if (!hcaptchaValue) {
            alert('Please complete the hCaptcha');
            return;
        }
        setDisplayBlack(true)
        try {
            const response = await axios({
                method: 'post',
                url: process.env.REACT_APP_MAIL,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                    text: formData.message,
                    hCaptchaResponse: hcaptchaValue,
                    mailBtn: true
                }),
                timeout: 10000,
            });
            if (response.status === 200) {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                alert('Message Sent Successfully')
                console.log(response.data)
                setDisplayBlack(false)
                setAllowSend(false)
            } else {
                alert('There Was An Error. Try Again Later')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className={`${!displayBlack && 'dn'}`}>
                <div className={`${styles.balckBackground} ${languageData['font-family'][0]} dfjcac cw`}>{languageData['contacts page'][10]}</div>
            </div>
            <Header />
            <SmallNavigation pages={pages} font={languageData['font-family'][0]} links={links} />
            <div className='container background1 p2 br2 mt5'>
                <Title font={font0} text={languageData['page titles']['contact']} />
                <div className='dfjcac gap5 fww mb5'>
                    <ContactInfo font0={font0} font1={font1} contactsPage={languageData['contacts page']} />
                    <div className='dfcjcac gap1 '>
                        <div className={`${font0} colorBlue mb3`}>{languageData['contacts page'][6]}</div>
                        <form className='dfjlac fww gap3 ' onSubmit={handleSubmit}>
                            <div className='dfcjcac gap3'>
                                <div className='dfcjcac gap3'>
                                    <div className={`theme ${font1}`}>{languageData['contacts page'][4]}</div>
                                    <input
                                        className={`${font1} p2 border br4`}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='dfcjcac gap3'>
                                    <div className={`theme ${font1}`}>{languageData['contacts page'][5]}</div>
                                    <input
                                        className={`${font1} p2 border br4`}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='dfcjcac gap3'>
                                <textarea
                                    className={`${font1} p2 border br1`}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={languageData['contacts page'][7]}
                                    style={{ height: '100px', resize: 'vertical' }}
                                ></textarea>
                                <HCaptcha
                                    sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
                                    onVerify={handleHcaptchaChange}
                                />
                                <button type="submit" className={`cp mainBtn ${font1}`}>
                                    {languageData['contacts page'][8]}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Title font={font0} text={languageData['map']} />
                <div style={{ height: '500px' }}>
                    <Map />
                </div>
            </div>
            <Footer font={font0} rights={languageData['rights']} />
            <ScrollUp />
        </>
    );
}
