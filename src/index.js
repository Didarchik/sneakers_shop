import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import Before from './Before';
import 'macro-css';
import {BrowserRouter, MemoryRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Before />
    </BrowserRouter>
  </React.StrictMode>
);


