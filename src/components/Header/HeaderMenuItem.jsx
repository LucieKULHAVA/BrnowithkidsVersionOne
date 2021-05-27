import React from 'react';

import './style.css';
    
const HeaderMenuItem = (props) => {

    let {itemUrl, itemLabel} = props;

    return (
        <li>
            <a href={itemUrl}>{itemLabel}</a>
        </li>
    );
};

export default HeaderMenuItem;
