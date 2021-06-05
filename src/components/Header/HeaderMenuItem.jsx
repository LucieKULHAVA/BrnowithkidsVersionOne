import React from 'react';

import './style.css';

const HeaderMenuItem = (props) => {
  let { itemUrl, itemLabel } = props;
  var isActive = location.pathname === itemUrl;
  var className = isActive ? 'active' : '';

  return (
    <li key={itemLabel}>
      <a className={className} href={itemUrl}>
        {itemLabel}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
