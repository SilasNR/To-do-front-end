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
    </div>
  );
}

export default Home;