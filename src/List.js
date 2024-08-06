import React, { useState } from 'react';
import Form from './Form';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const ItemList = ({ items, toggleEditMode, saveItem, deleteItem }) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const handleSort = (key) => {
    let newDirection = '';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        newDirection = 'desc';
      } else if (sortConfig.direction === 'desc') {
        newDirection = '';
      } else {
        newDirection = 'asc';
      }
    } else {
      newDirection = 'asc';
    }

    setSortConfig({ key, direction: newDirection });
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortConfig.direction === '') {
      return 0; // No sorting
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSaveItem = item => {
    saveItem(item);
    toggleEditMode(item.id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button className="icon-button" onClick={() => handleSort('id')}>
              <i className={`fas fa-sort${sortConfig.key === 'id' ? `-${sortConfig.direction}` : ''}`}></i> ID
            </button>
          </th>
          <th>
            <button className="icon-button" onClick={() => handleSort('name')}>
              <i className={`fas fa-sort${sortConfig.key === 'name' ? `-${sortConfig.direction}` : ''}`}></i> Name
            </button>
          </th>
          <th>
            <button className="icon-button" onClick={() => handleSort('price')}>
              <i className={`fas fa-sort${sortConfig.key === 'price' ? `-${sortConfig.direction}` : ''}`}></i> Price
            </button>
          </th>
          <th>
            <button className="icon-button" onClick={() => handleSort('condition')}>
              <i className={`fas fa-sort${sortConfig.key === 'condition' ? `-${sortConfig.direction}` : ''}`}></i> Condition
            </button>
          </th>
          <th>
            <button className="icon-button" onClick={() => handleSort('car')}>
              <i className={`fas fa-sort${sortConfig.key === 'car' ? `-${sortConfig.direction}` : ''}`}></i> Car
            </button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map(item => (
          <tr key={item.id}>
            {item.isEditing ? (
              <td colSpan="6">
                <Form currentItem={item} saveItem={handleSaveItem} />
              </td>
            ) : (
              <>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.condition}</td>
                <td>{item.car}</td>
                <td>
                  <button className="edit" onClick={() => toggleEditMode(item.id)}>Edit</button>
                  <button className="delete" onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
