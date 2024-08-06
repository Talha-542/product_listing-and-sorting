import React, { createContext, useReducer } from 'react';

const DataContext = createContext();

const initialState = {
  items: [],
  filteredItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        filteredItems: [...state.items, action.payload],
      };
    case 'EDIT_ITEM':
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        items: updatedItems,
        filteredItems: updatedItems,
      };
    case 'DELETE_ITEM':
      const remainingItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: remainingItems,
        filteredItems: remainingItems,
      };
    case 'TOGGLE_EDIT_MODE':
      const toggledItems = state.items.map(item =>
        item.id === action.payload ? { ...item, isEditing: !item.isEditing } : item
      );
      return {
        ...state,
        items: toggledItems,
        filteredItems: toggledItems,
      };
    case 'FILTER_ITEMS':
      const { searchQuery, priceFilter, conditionFilter } = action.payload;
      const filteredItems = state.items.filter(item => {
        return (
          (searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true) ||
           (searchQuery ? item.car.toLowerCase().includes(searchQuery.toLowerCase()) : true) || 
          (searchQuery ? item.condition.toLowerCase().includes(searchQuery.toLowerCase()) : true)
          &&
          (priceFilter ? item.price === priceFilter : true) &&
          (conditionFilter ? item.condition === conditionFilter : true)
        );
      });
      return {
        ...state,
        filteredItems: filteredItems,
      };
    default:
      return state;
  }
};

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
