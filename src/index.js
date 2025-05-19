import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterApp from './components/Router'; // Import your router component that has all routes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />  {/* RouterApp already has BrowserRouter inside */}
  </React.StrictMode>
);

reportWebVitals();
