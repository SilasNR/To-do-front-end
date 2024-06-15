import React from 'react';
import { Link } from 'react-router-dom';
import "./style/home.css"
import Head from "../componentes/header"

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <div class="fundo-home">

                    <Head/>

                    <main className="container d-flex flex-column align-items-center justify-content-center vh-100">
                        <h2 className="mb-4">Bem-vindo!</h2>

                        <div className="d-flex justify-content-center">
                            <Link to="/login">
                                <button className="btn botao-padrao btn-primary btn-lg mx-1">Entrar na Conta</button>
                            </Link>

                            <Link to="/cadastro">
                                <button className="btn botao-padrao btn-secondary btn-lg mx-1">Cadastrar-se</button>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        );

    }

}
