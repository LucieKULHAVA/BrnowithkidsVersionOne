import React from 'react';
import './style.css';

const HealthCareMenu = ({ src, pageName }) => (
  <div className="page__menu--item">
    <a href="/healthCare/vaccination">
      <img src={src} alt={pageName} />
    </a>
    <div className="pruh">
      <p className="pic__title">{pageName}</p>
    </div>
  </div>
);

export default HealthCareMenu;
