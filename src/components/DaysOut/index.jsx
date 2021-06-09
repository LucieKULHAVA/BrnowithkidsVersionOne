import React from 'react';
import './style.css';

const FamilyDayOut = ({
  foto,
  nazev,
  tripPodtitul,
  stroller,
  distance,
  popis,
}) => {
  return (
    <>
      <div className="trip">
        <div className="trip__foto">
          <img src={foto} alt={nazev} />
        </div>
        <div className="trip__detail">
          <div className="trip__nazev">{nazev}</div>
          <div className="trip__podtitul">{tripPodtitul}</div>
          <div className="trip__stroller">{stroller}</div>
          <div className="trip__distance">{distance}</div>
          <div className="trip__popis">{popis}...</div>
        </div>
      </div>
    </>
  );
};

export default FamilyDayOut;
