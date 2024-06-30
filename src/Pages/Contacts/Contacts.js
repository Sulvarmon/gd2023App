import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import Map from './Map';
import ContactInfo from './ContactInfo';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import SmallNavigation from '../../Components/SmallNavigation/SmallNavigation';
import styles from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { pageVisit } from '../../Slices/Visits';


export default function Contacts() {
    const languageData = useSelector(state => state.languageData.value)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = languageData['page titles']['contact'];
        dispatch(pageVisit('contact'))  
    }, [languageData,dispatch]);

    const pages = [languageData['page titles']['home'], languageData['page titles']['contact']]
    const links = ['/', '/Contacts'];
    const iframeUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2934.157417028751!2d41.689499184256206!3d42.16609798746906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDA5JzU4LjAiTiA0McKwNDEnMjguMyJF!5e1!3m2!1sen!2sge!4v1716137383137!5m2!1sen!2sge";
    const font0 = languageData['font-family'][0];
    const font1 = languageData['font-family'][1];
    const [displayBlack, setDisplayBlack] = useState(false);
    const [allowSend, setAllowSend] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
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
        if (!recaptchaValue) {
            alert('Please complete the reCAPTCHA');
            return;
        }
        setDisplayBlack(true)
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost/gd2023-react-backend/mail.php',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                    text: formData.message,
                    gRecaptchaResponse: recaptchaValue,
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
                <div className='dfjcac gap5 fww'>
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
                                <ReCAPTCHA
                                    sitekey="6Lc5DP8pAAAAAKgy73LeVVSWtipUjD4V9ckuu3dO"
                                    onChange={handleRecaptchaChange}
                                />
                                <button type="submit" className={`cp mainBtn ${font1}`}>
                                    {languageData['contacts page'][8]}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Map iframeUrl={iframeUrl} />
            </div>
            <Footer font={font0} rights={languageData['rights']} />
        </>
    );
}
