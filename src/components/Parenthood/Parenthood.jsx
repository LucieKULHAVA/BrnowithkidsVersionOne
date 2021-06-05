import React from 'react';
import './style.css';
import { ParenthoodPageMenu } from '../../constants/parenthoodPageMenu';
import HealthCareMenu from '../HealthCare/HealthCareMenu';

const Parenthood = () => (
  <div className="page__menu">
    {ParenthoodPageMenu.map((item) => (
      <HealthCareMenu
        key={item.pageName}
        src={item.src}
        pageName={item.pageName}
      />
    ))}
  </div>
);

export default Parenthood;
