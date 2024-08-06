import React, { useState } from 'react';

const DropdownFilter = ({ filterItems }) => {
  const [conditionFilter, setConditionFilter] = useState('');

  const handleConditionChange = (e) => {
    setConditionFilter(e.target.value);
    filterItems(e.target.value);
  };

  return (
    <div className="dropdown-filter">
     <label htmlFor="">Filter By: </label>
      <select value={conditionFilter} onChange={handleConditionChange}>
     
        <option value="">All Conditions</option>
        <option value="New">New</option>
        <option value="Used">Used</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
