import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { AliveCharProvider } from './contexts/AliveCharContext';
import { FilterProvider } from './contexts/filter_context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AliveCharProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AliveCharProvider>
);



