import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import AppRouter from './router/approuter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

