import React from 'react';

import './style.css';

const WhatWeDo = ({ src, activities }) => {
  return (
    <li>
      <img className="sipka" src={src} alt="šipka" />
      <span className="activities">{activities}</span>
    </li>
  );
};

export default WhatWeDo;
