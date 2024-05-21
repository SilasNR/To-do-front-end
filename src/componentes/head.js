import React from "react";
import { Link } from 'react-router-dom';

export default class head extends React.Component {
    render() {
        return (
            <div className="v-100 m-50 bg-black ">
                <div className="d-flex flex-row justify-content-between">
                    <h1 className="text-light ms-3">To-do</h1>

                    <div className="d-flex flex-row">
                        <Link to="/login">
                            <div className="bg-success">
                                <h4 className="text-light p-2">Entrar</h4>
                            </div>
                        </Link>

                        <Link to="/cadastrar">
                            <div className="bg-warning">
                                <h4 className="text-light p-2">Cadastrar</h4>
                            </div>

                        </Link>
                    </div>
                </div>
                {/* <nav>

                </nav> */}
                {/* <div className='border conteiner'>
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
                </div> */}
            </div>

        )
    }
}