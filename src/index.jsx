import React from 'react';
import { render } from 'react-dom';

import Footer from './components/Footer';
import Header from './components/Header/Header';

import './style.css';

const App = () => (
  <div className="container">
    <Header />

    <main>
      <span>TODO</span>
    </main>

    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
