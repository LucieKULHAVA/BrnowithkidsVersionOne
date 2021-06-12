import React from 'react';
import './style.css';

const Emergency = () => {
  return (
    <>
      <div className="emergency__wrap">
        <section className="main__picture">
          <img
            className="emergency__pic"
            src="/assets/img/healthCareImg/sanitka.jpg"
            alt="sanitka"
          />
        </section>
        <section className="main__desc--emergency">
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
              <span>158</span> - police
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Emergency;
