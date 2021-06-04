import React from 'react';

import './style.css';

const VaccinationForWhom = ({ src, activities }) => {
  return (
    <li>
      <img className="sipka" src={src} alt="šipka" />
      <span className="activities">{activities}</span>
    </li>
  );
};

export default VaccinationForWhom;
