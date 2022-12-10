import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CitiesProvider from './components/CitiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CitiesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CitiesProvider>
);
