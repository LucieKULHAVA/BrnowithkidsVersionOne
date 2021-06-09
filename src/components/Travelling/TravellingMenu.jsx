import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TravellingMenu = ({ url, src, pageName }) => {
  return (
    <div className="page__menu--item">
      <Link to={url}>
        <img src={src} alt={pageName} />
      </Link>
      <div className="pruh">
        <p className="pic__title">{pageName}</p>
      </div>
    </div>
  );
};

export default TravellingMenu;
