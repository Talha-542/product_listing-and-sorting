import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import Form from './Form';
import ItemList from './List';
import SearchBar from './SearchBar';
import DropdownFilter from './Dropdown';
import './App.css';

const newId = () => Date.now() + Math.floor(Math.random() * 100000).toString();

const Showroom = () => {
  const { state, dispatch } = useContext(DataContext);

  const addItem = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const saveItem = item => {
    dispatch({ type: 'EDIT_ITEM', payload: item });
  };

  const toggleEditMode = id => {
    dispatch({ type: 'TOGGLE_EDIT_MODE', payload: id });
  };

  const deleteItem = id => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const filterItems = (searchQuery, priceFilter, conditionFilter) => {
    dispatch({
      type: 'FILTER_ITEMS',
      payload: { searchQuery, priceFilter, conditionFilter },
    });
  };

  return (
    <div className="App">
      <h1>Showroom Management</h1>
      <SearchBar filterItems={filterItems} />
      <DropdownFilter filterItems={filterItems} />
      <Form currentItem={{ id: newId(), name: '', price: '', condition: '', car: '' }} saveItem={addItem} />
      <ItemList items={state.filteredItems} toggleEditMode={toggleEditMode} saveItem={saveItem} deleteItem={deleteItem} />
      {/* onFilterClick={handleFilterClick} */}
    </div>
  );
};

export default Showroom;
