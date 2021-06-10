import React from 'react';
import { MENU_ITEMS } from '../../constants/menu';
import HeaderMenuItem from './HeaderMenuItem';

import './style.css';

const HeaderMenu = (props) => {
  const menuItems = MENU_ITEMS.map((item) =>
    HeaderMenuItem({
      itemUrl: item.url,
      itemLabel: item.label,
      closeBurgerNavigation: props.closeBurgerNavigation,
    }),
  );

  return <ul>{menuItems}</ul>;
};

export default HeaderMenu;
