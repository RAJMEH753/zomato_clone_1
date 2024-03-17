import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
//import Homepage from './Pages/home';
import Router from './Pages/Route';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
