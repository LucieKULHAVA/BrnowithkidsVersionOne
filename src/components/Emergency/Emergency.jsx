import React from 'react';
import './style.css';

const Emergency = () => {
  return (
    <>
      <div className="main__desc">
        <div className="cover__photo--bike"></div>
        <h2>Emergency</h2>
        <ul>
          <li>• 112 - general emergency number</li>
          <li>• 155 - ambulance service</li>
          <li>• 150 - fire brigade</li>
          <li>• 158 – police</li>
        </ul>
      </div>
    </>
  );
};

export default Emergency;
