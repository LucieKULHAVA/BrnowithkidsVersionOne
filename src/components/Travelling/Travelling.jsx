import React from 'react';
import './style.css';
import { TravellingPageMenu } from '../../constants/travellingPageMenu';
import HealthCareMenu from '../../HealthCare/HealthCareMenu';

const Travelling = () => {
  <div className="page__menu">
    {TravellingPageMenu.map((item) => (
      <HealthCareMenu
        key={item.pageName}
        src={item.src}
        pageName={item.pageName}
      />
    ))}
  </div>;
};

export default Travelling;
