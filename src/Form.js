import React, { useState, useEffect } from 'react';

const newId = () => Date.now() + Math.floor(Math.random() * 100000).toString();

const Form = ({ currentItem, saveItem }) => {
  const [item, setItem] = useState({ ...currentItem, id: currentItem.id || newId() });

  useEffect(() => {
    setItem({ ...currentItem, id: currentItem.id || newId() });
  }, [currentItem]);

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    saveItem(item);
    setItem({ id: newId(), name: '', price: '', condition: '', car: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="price"
        value={item.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="condition"
        value={item.condition}
        onChange={handleChange}
        placeholder="Condition"
        required
      />
      <input
        type="text"
        name="car"
        value={item.car}
        onChange={handleChange}
        placeholder="Car Name"
        required
      />
      <div className="button-container">
        <button className='save' type="submit">Save Item</button>
      </div>
    </form>
  );
};

export default Form;
