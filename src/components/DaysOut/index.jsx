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
          <h3>{nazev}</h3>
          <div className="trip__podtitul">
            <p>{tripPodtitul}</p>
          </div>
          <div className="trip__stroller">
            <p>
              stroller: <span>{stroller}</span>
            </p>
          </div>
          <div className="trip__distance">
            <p>
              distance: <span>{distance}km</span>
            </p>
          </div>
          <div className="trip__popis">{popis}</div>
        </div>
      </div>
    </>
  );
};

export default FamilyDayOut;
