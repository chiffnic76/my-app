import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals'

// Création de la racine pour React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application principale
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals()