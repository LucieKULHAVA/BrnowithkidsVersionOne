import React from 'react';
import './style.css';
import { TravellingPageMenu } from '../../constants/travellingPageMenu';
import TravellingMenu from './TravellingMenu';

const Travelling = () => {
  return (
    <div className="page__menu">
      {TravellingPageMenu.map((item) => (
        <TravellingMenu
          key={item.pageName}
          src={item.src}
          url={item.url}
          pageName={item.pageName}
        />
      ))}
    </div>
  );
};

export default Travelling;
