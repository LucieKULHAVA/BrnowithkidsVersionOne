import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';

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
        <header className={burgerExpanded ? "burger-expanded" : "burger-collapsed" }>
            <h1><a href="index.html">Brno with Kids</a></h1>

            <span class="navigation__burger-btn" onClick={() => {setBurgerExpandedState(!burgerExpanded)}}>
                <i class="fas fa-bars"></i>
            </span>
            <nav class="static-navigation">
                <HeaderMenu />
            </nav>

            <nav class="burger-navigation">
                <span class="navigation__close-btn" onClick={() => {setBurgerExpandedState(!burgerExpanded)}}>
                    <i class="fas fa-times"></i>
                </span>
                <HeaderMenu />
            </nav>
        </header>
    );
};

export default Header;