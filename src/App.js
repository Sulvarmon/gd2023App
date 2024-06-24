import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Contacts from './Pages/Contacts/Contacts';
import News from './Pages/News/News';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Projects from './Pages/Projects/Projects';
import AboutUs from './Pages/About Us/AboutUs';
import OurTeam from './Pages/Our Team/OurTeam';
import MarineWorks from './Pages/MarineWorks/MarineWorks';
import BuildingMaterials from './Pages/BuildingMaterials/BuildingMaterials';
import CivilIndustrialProjects from './Pages/CivilIndustrialProjects/CivilIndustrialProjects';
import Apartment from './Pages/Project/Apartment/Apartment';
import Berth7 from './Pages/Project/Berth7/Berth7';
import Berth15 from './Pages/Project/Berth15/Berth15';
import ContainerTerminal from './Pages/Project/ContainerTerminal/ContainerTerminal';
import LegoBlocks from './Pages/Project/LegoBlocks/LegoBlocks';
import PayTerminal from './Pages/Project/PayTerminal/PayTerminal';

function App() {
  const [languageData, setLanguageData] = useState(null);

  const getInitialLanguage = () => {
    // Get language from cookie if available, otherwise default to 'geo'
    return Cookies.get('languageReact') || 'geo';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const changeLanguage = (language) => {
    setLanguage(language);
    // Update the cookie when language changes
    Cookies.set('languageReact', language, { expires: 3650, path: '/' });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'http://localhost/gd2023-react-backend/language.php',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: new URLSearchParams({
            language: language,
          }),
        });

        setLanguageData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log(error.response ? error.response.data : error.message);
      }
    };
    fetchData();
  }, [language]);

  return (
    <>
      {languageData ? (
        <Router>
          <Routes>
            <Route exact={true} path="/" element={<Home languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Projects" element={<Projects languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/News" element={<News languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Contacts" element={<Contacts languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/About-Us" element={<AboutUs languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Our-Team" element={<OurTeam languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Marine-Works" element={<MarineWorks languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Building-Materials" element={<BuildingMaterials languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Civil-Industrial-Projects" element={<CivilIndustrialProjects languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Berth-7" element={<Berth7 languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Berth-15" element={<Berth15 languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Container-Terminal" element={<ContainerTerminal languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Rehabilitation" element={<LegoBlocks languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Pay-Terminal" element={<PayTerminal languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route exact={true} path="/Poti-Apartment" element={<Apartment languageData={languageData} changeLanguage={changeLanguage} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default App;
