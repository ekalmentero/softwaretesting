import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock.react';
import Link from './Link.react';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Link page="http://www.ufrrj.br">
        UFRRJ
    </Link>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
