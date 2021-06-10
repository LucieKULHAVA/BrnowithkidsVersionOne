import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const HeaderMenuItem = (props) => {
  let { itemUrl, itemLabel, closeBurgerNavigation } = props;

  const handleClick = () => {
    closeBurgerNavigation();
  };
  return (
    <li key={itemLabel}>
      <NavLink onClick={handleClick} activeClassName={'active'} to={itemUrl}>
        {itemLabel}
      </NavLink>
    </li>
  );
};

export default HeaderMenuItem;
