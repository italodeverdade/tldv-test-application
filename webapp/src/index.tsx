import React from 'react';
import ReactDOM from 'react-dom';
import App from '@webapp/containers/App';
import reportWebVitals from '@webapp/reportWebVitals';
import '@webapp/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
