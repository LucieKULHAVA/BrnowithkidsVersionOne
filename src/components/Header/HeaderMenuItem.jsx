import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const HeaderMenuItem = (props) => {
  let { itemUrl, itemLabel } = props;

  return (
    <li key={itemLabel}>
      <NavLink activeClassName={'active'} to={itemUrl}>
        {itemLabel}
      </NavLink>
    </li>
  );
};

export default HeaderMenuItem;
