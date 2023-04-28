import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todos from './todos';
import Login from './login';
import Cadastro from './cadastro';

function Teste() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<Login/>} />
        <Route path="/cadastro" component={<Cadastro/>} />
        <Route path="/todos" component={<Todos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Teste;
