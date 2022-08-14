import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './paginas/Home';
import CriarPonto from './paginas/CriarPonto';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={CriarPonto} path="/criar-ponto"/>
    </BrowserRouter>
  );
}

export default Rotas;