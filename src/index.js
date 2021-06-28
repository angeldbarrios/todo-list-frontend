import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';
import App from './components/App';
render(
  <div className="container mx-auto">
    <Header />    
    <App />
  </div>,
  document.getElementById('app')
);