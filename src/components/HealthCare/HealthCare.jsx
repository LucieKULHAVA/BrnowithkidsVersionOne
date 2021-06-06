import React from 'react';
import './style.css';
import { HealthCarePageMenu } from '../../constants/healthCarePageMenu';
import HealthCareMenu from './HealthCareMenu';

const HealthCare = () => (
  <div className="page__menu">
    {HealthCarePageMenu.map((item) => (
      <HealthCareMenu
        key={item.pageName}
        url={item.url}
        src={item.src}
        pageName={item.pageName}
      />
    ))}
  </div>
);

export default HealthCare;
