import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Routes.jsx';

import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HomePage />
    </BrowserRouter>
  </React.StrictMode>
);
