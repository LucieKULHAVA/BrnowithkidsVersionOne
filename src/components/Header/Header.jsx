import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

import './style.css';

const Header = (props) => {
  const [burgerExpanded, setBurgerExpandedState] = useState(false);

  const expandBurgerNavigation = (e) => {
    e.preventDefault();

    setBurgerExpandedState(true);
  };

  const closeBurgerNavigation = (e) => {
    e.preventDefault();

    setBurgerExpandedState(false);
  };

  return (
    <header className={burgerExpanded ? 'burger-expanded' : 'burger-collapsed'}>
      <h1>
        <Link title="Brno with kids" to="/">
          Brno with Kids
        </Link>
      </h1>

      <span
        className="navigation__burger-btn"
        onClick={() => {
          setBurgerExpandedState(!burgerExpanded);
        }}
      >
        <i className="fas fa-bars"></i>
      </span>
      <nav className="static-navigation">
        <HeaderMenu />
      </nav>

      <nav className="burger-navigation">
        <span
          className="navigation__close-btn"
          onClick={() => {
            setBurgerExpandedState(!burgerExpanded);
          }}
        >
          <i className="fas fa-times"></i>
        </span>
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
