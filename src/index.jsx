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
          <Route path="/travelling">
            <Travelling />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/daysOut">
            <Search />
          </Route>
          <Route path="/parenthood">
            <Parenthood />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
