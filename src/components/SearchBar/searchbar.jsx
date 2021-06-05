import React from 'react';
import './style.css';

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className="search">
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
