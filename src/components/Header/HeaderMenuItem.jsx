import React from 'react';

import './style.css';

const HeaderMenuItem = (props) => {
  let { itemUrl, itemLabel } = props;

  return (
    <li key={itemLabel}>
      <a href={itemUrl}>{itemLabel}</a>
    </li>
  );
};

export default HeaderMenuItem;
