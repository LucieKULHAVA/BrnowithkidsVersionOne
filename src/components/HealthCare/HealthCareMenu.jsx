import React from 'react';
import './style.css';

const HealthCareMenu = ({ url, src, pageName }) => (
  <div className="page__menu--item">
    <div className="itemPic">
      {console.log(url)}
      <a href={url}>
        <img src={src} alt={pageName} />
      </a>
    </div>
    <div className="pruh">
      <p className="pic__title">{pageName}</p>
    </div>
  </div>
);

export default HealthCareMenu;
