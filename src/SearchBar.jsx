import React, { useState } from 'react';

const SearchBar = ({ filterItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    filterItems(e.target.value, '', '');
  };

  return (
    <input
      className="search-bar"
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
