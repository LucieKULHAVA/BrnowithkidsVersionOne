import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const HeaderMenuItem = (props) => {
  let { itemUrl, itemLabel } = props;
  var isActive = location.pathname === itemUrl;
  var className = isActive ? 'active' : '';

  return (
    <li key={itemLabel}>
      <Link className={className} to={itemUrl}>
        {itemLabel}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
