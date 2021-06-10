import React from 'react';
import './style.css';

const Emergency = () => {
  return (
    <>
      <section className="main__picture">
        <img
          className="main__pic"
          src="/assets/img/healthCareImg/sanitka.png"
          alt="sanitka"
        />
      </section>
      <section className="main__desc">
        <h2>Emergency</h2>
        <ul>
          <li>
            <span>112</span> - general emergency number
          </li>
          <li>
            <span>155</span> - ambulance service
          </li>
          <li>
            <span>150</span> - fire brigade
          </li>
          <li>
            <span>158</span> – police
          </li>
        </ul>
      </section>
    </>
  );
};

export default Emergency;
