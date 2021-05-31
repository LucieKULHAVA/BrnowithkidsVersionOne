import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/Main/MainPage';
import HealthCare from './components/HealthCare/HealthCare';

import './style.css';

const App = () => (
  <Router>
    <div className="banner">
      <Link to="/healthCare">Health Care</Link>
      <Header />

      <main className="container">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/healthCare">
            <HealthCare />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
