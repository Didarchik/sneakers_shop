import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Before from './Before';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Before />
  </React.StrictMode>
);


