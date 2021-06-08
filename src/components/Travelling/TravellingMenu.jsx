import React from 'react';
import './style.css';

const TravellingMenu = ({ url, src, pageName }) => {
  return (
    <div className="page__menu--item">
      <a href={url}>
        <img src={src} alt={pageName} />
      </a>
      <div className="pruh">
        <p className="pic__title">{pageName}</p>
      </div>
    </div>
  );
};

export default TravellingMenu;
