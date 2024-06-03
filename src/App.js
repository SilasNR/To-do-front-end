import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Projetos from './pages/Projetos';


export default function App({ Component, pageProps }) {


  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/login" exact  element={<Login/>} />
            <Route path="/cadastro" exact element={<Cadastro/>}/>
            <Route path="/projeto" exact element={<Projetos/>}/>
          </Routes>
        </div>
    </Router>
  );
}
