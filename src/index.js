import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Provider from './context/Provider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
