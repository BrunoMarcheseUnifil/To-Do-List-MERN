import React from 'react';
import './index.css';
import App from './App';
import Login from './login'
import Cadastro from './cadastro'
import Todos from './todos';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Teste from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Teste/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

