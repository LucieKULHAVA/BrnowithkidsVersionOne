import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/Main/MainPage';
import HealthCare from './components/HealthCare/HealthCare';
import Travelling from './components/Travelling/Travelling';
import Education from './components/Education/Education';
import Parenthood from './components/Parenthood/Parenthood';
import Vaccination from './components/Vaccination/Vaccination';
import Search from './components/Search/index';
import SearchDoctor from './components/SearchDoctors/index';
import University from './components/University/University';
import StrollerBusTram from './components/StrollerBusTram/StrollerBusTram';
import BikeBus from './components/BikeBus/BikeBus';
import Train from './components/Train/Train';
import PublicTransport from './components/PublicTransport/PublicTransport';
import KinderGarten from './components/KinderGarten/KinderGarten';
import Highschool from './components/Highschool/Highschool';
import FirstAid from './components/FirstAid/FirstAid';
import Emergency from './components/Emergency/Emergency';
import ElementarySchool from './components/ElementarySchool/ElementarySchool';
import Dinopark from './components/Dinopark/Dinopark';
import Kurim from './components/Kurim/Kurim';
import Ujezd from './components/Ujezd/Ujezd';
import Zidlochovice from './components/Zidlochovice/Zidlochovice';
import MokraHorakov from './components/MokraHorakov/MokraHorakov';

import './style.css';

const App = () => (
  <Router>
    <div className="banner">
      <Header />

      <main className="container">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/healthCare">
            <HealthCare />
          </Route>
          <Route path="/healthCare/vaccination">
            <Vaccination />
          </Route>
          <Route path="/healthCare/findAdoctor">
            <SearchDoctor />
          </Route>
          <Route path="/healthCare/firstAid">
            <FirstAid />
          </Route>
          <Route path="/healthCare/emergency">
            <Emergency />
          </Route>
          <Route exact path="/travelling">
            <Travelling />
          </Route>
          <Route path="/travelling/strollerBus">
            <StrollerBusTram />
          </Route>
          <Route path="/travelling/strollerTrain">
            <Train />
          </Route>
          <Route path="/travelling/bikeBus">
            <BikeBus />
          </Route>
          <Route path="/travelling/children">
            <PublicTransport />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route path="/education/university">
            <University />
          </Route>
          <Route path="/education/kindergarten">
            <KinderGarten />
          </Route>
          <Route path="/education/highschool">
            <Highschool />
          </Route>
          <Route path="/education/primaryschool">
            <ElementarySchool />
          </Route>
          <Route exact path="/daysOut">
            <Search />
          </Route>
          <Route path="/daysOut/dinopark">
            <Dinopark />
          </Route>
          <Route path="/daysOut/kurim">
            <Kurim />
          </Route>
          <Route path="/daysOut/ujezd">
            <Ujezd />
          </Route>
          <Route path="/daysOut/zidlochovice">
            <Zidlochovice />
          </Route>
          <Route path="/daysOut/mokraHorakov">
            <MokraHorakov />
          </Route>
          <Route exact path="/parenthood">
            <Parenthood />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
