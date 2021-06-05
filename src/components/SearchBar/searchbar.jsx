import React from 'react';
import FamilyDayOut from '../DaysOut/index';
import './style.css';

const SearchBar = ({onChange, placeholder}) => {

    return (
      <div className="Search">
        <span className="SearchSpan">
          <FamilyDayOut />
        </span>
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };

  export default SearchBar;