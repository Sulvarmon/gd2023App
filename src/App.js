import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
import Rehabilitation from './Pages/Project/Rehabilitation/Rehabilitation';
import PayTerminal from './Pages/Project/PayTerminal/PayTerminal';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './Slices/LanguageData';
import Cookies from 'js-cookie';

function App() {
  const language = useSelector((state) => state.language.value);
  const visits = useSelector((state) => state.visits.value);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  if (sessionStorage.getItem('pageVisits') === null) {
    sessionStorage.setItem('pageVisits', JSON.stringify([]));
  }

  console.log(Cookies.get('languageReact'))

  useEffect(() => {
    const visitsUpdate = async () => {
      let pageVisits = JSON.parse(sessionStorage.getItem('pageVisits'));

      if (pageVisits !== null && pageVisits.includes(visits)) {
        return 0;
      }
      pageVisits.push(visits);
      sessionStorage.setItem('pageVisits', JSON.stringify(pageVisits));
      try {
        await axios({
          method: 'post',
          url: 'http://localhost/gd2023-react-backend/pageVisits.php',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: new URLSearchParams({
            page: visits,
          }),
        });
      } catch (error) {
        console.error('Error:', error);
        console.log(error.response ? error.response.data : error.message);
      }
    };
    visitsUpdate();
  }, [visits]);

  if (sessionStorage.getItem('ipVisits') === null) {
    sessionStorage.setItem('ipVisits', 'true');
  }

  useEffect(() => {
    if (sessionStorage.getItem('ipVisits') === 'true') {
      const ipVisits = async () => {
        try {
          await axios({
            method: 'post',
            url: 'http://localhost/gd2023-react-backend/ipVisits.php',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: new URLSearchParams({
              ipVisits: 'ipVisits',
            }),
          });
        } catch (error) {
          console.error('Error:', error);
          console.log(error.response ? error.response.data : error.message);
        }
        sessionStorage.setItem('ipVisits', 'false');
      };
      ipVisits();
    }
  }, []);

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
        dispatch(data(response.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, language]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <Router>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact={true} path="/Projects" element={<Projects />} />
            <Route exact={true} path="/News" element={<News />} />
            <Route exact={true} path="/Contacts" element={<Contacts />} />
            <Route exact={true} path="/About-Us" element={<AboutUs />} />
            <Route exact={true} path="/Our-Team" element={<OurTeam />} />
            <Route exact={true} path="/Marine-Works" element={<MarineWorks />} />
            <Route exact={true} path="/Building-Materials" element={<BuildingMaterials />} />
            <Route exact={true} path="/Civil-Industrial-Projects" element={<CivilIndustrialProjects />} />
            <Route exact={true} path="/Berth-7" element={<Berth7 />} />
            <Route exact={true} path="/Berth-15" element={<Berth15 />} />
            <Route exact={true} path="/Container-Terminal" element={<ContainerTerminal />} />
            <Route exact={true} path="/Rehabilitation" element={<Rehabilitation />} />
            <Route exact={true} path="/Pay-Terminal" element={<PayTerminal />} />
            <Route exact={true} path="/Poti-Apartment" element={<Apartment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
