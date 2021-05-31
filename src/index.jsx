import React from 'react';
import { render } from 'react-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/Main/MainPage';

import './style.css';

const App = () => (
  <div className="banner">
    <Header />

    <main className="container">
      <MainPage />
    </main>
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
