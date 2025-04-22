import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); 
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("No root element found in your HTML file.");
}
