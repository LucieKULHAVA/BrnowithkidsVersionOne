import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

const HealthCareMenu = ({ url, src, pageName }) => (
  <div className="page__menu--item">
    <div className="itemPic">
      {console.log(url)}
      <Link to={url}>
        <img src={src} alt={pageName} />
      </Link>
    </div>
    <div className="pruh">
      <p className="pic__title">{pageName}</p>
    </div>
  </div>
);

export default HealthCareMenu;
