import React from 'react';
import './style.css';

const TravellingMenu = ({ src, pageName }) => {
  <div className="page__menu--item">
    <a href="#">
      <img src={src} alt={pageName} />
    </a>
    <div className="pruh">
      <p className="pic__title">{pageName}</p>
    </div>
  </div>;
};

export default TravellingMenu;
