import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

const FamilyDayOut = ({
  url,
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
          <Link to={url}>
            <img src={foto} alt={nazev} />
          </Link>
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
