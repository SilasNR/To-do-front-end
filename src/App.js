import React, { Component } from "react";

//import Projetos from './pages/AreaProjetos';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Sobre from './pages/Login.js';
import Contato from './pages/AreaProjetos.js';


export default function App() {
    //   const menuitems = [
    //     {
    //        label:'Home',
    //        //icon:'pi pi-fw pi-home',
    //        command:() => this.props.history.push('/')
    //     },
    //     {
    //        label:'Sobre',
    //        //icon:'pi pi-fw pi-user',
    //        command:() => this.props.history.push('/sobre')
    //     },
    //     {
    //        label:'Contato',
    //        //icon:'pi pi-fw pi-comment',
    //        command:() => this.props.history.push('/contato')
    //     }
    //  ];
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contact" element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}