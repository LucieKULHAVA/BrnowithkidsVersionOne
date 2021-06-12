import React from 'react';

import './style.css';

const Fotos = ({ src, id }) => {
  return (
    <div className="kurim__pic">
      <img className="singlefoto" src={src} alt={id} />
    </div>
  );
};

export default Fotos;
