import * as React from 'react';
import { BrowserRouter } from 'react-router-dom-v6';
import App from './app';

export default () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
