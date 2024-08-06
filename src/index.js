import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataContextProvider } from './DataContext';
import './index.css';

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
);
