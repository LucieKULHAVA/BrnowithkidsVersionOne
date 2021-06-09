import React from 'react';
import './style.css';

const Doctor = ({ id, name, specialisation, languagues, link, cover }) => {
  return (
    <>
      <div className="doctors">
        <div className="doctor-description">
          <h3 className="doctor-name">{name}</h3>
          <p className="doctor-text">{languagues}</p>
          <p className="doctor-text">{specialisation}</p>
          <p className="doctor-text">{link}</p>
        </div>
      </div>
    </>
  );
};

export default Doctor;
