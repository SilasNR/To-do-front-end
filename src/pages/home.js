<<<<<<< HEAD
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    <div className="title">
        <Link to={"/"}>home</Link >
        <p>Aqui estão as informações a meu respeito</p>
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='border conteiner'>
      <div className='row'>
        <h1 className='col'>To-do</h1>
        <nav className='col'>
          <ul className='row'>
            <li className='col'>
              <Link to="/login">Logar</Link>
            </li>
            <li className='col'>
              <Link to="/cadastro">Cadastrar</Link>
            </li>
            <li className='col'>
              <Link to="/projetos">Projeto</Link>
            </li>
          </ul>
        </nav>
      </div>
>>>>>>> 6c976d48736ac24f3d8f95819ee9f9741517600c
    </div>
  );
}

export default Home;