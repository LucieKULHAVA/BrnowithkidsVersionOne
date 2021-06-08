import React from 'react';
import './style.css';
import { EducationPageMenu } from '../../constants/educationPageMenu';
import HealthCareMenu from '../HealthCare/HealthCareMenu';

const Education = () => (
  <div className="page__menu">
    {EducationPageMenu.map((item) => (
      <HealthCareMenu
        key={item.pageName}
        src={item.src}
        pageName={item.pageName}
        url={item.url}
      />
    ))}
  </div>
);

export default Education;
