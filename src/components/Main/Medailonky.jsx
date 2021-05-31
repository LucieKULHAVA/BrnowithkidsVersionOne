import React from 'react';

import './style.css';

const Medailonky = ({ src, name, homecountry, languages, kids }) => {
  return (
    <div className="profil">
      <img className="fotecka" src={src} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <ol>
          <li>
            Homecountry: <span id="info__country">{homecountry}</span>
          </li>
          <li>Languages: {languages}</li>
          <li>{kids}</li>
        </ol>
      </div>
    </div>
  );
};

export default Medailonky;
