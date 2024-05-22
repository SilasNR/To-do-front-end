import React from "react";
import { Link } from 'react-router-dom';
import "./style_comp/head.css"

export default class head extends React.Component {
    render() {
        return (
            <div class="fundo-head">
                <nav class="container-fluid text-white py-5">
                    <h1 class="text-center display-6">To-Do List</h1>
                </nav>

                <main class="container d-flex flex-column align-items-center justify-content-center vh-100">
                    <h2 class="mb-4">Bem-vindo!</h2>

                    <div class="d-flex justify-content-center">
                        <Link to="/login"><button className="btn botao-padrao btn-primary btn-lg mx-1">Entrar na Conta</button></Link>
                        <Link to="/cadastro"><button class="btn botao-padrao btn-secondary btn-lg mx-1">Cadastrar-se</button></Link>
                    </div>
                </main>
            </div>

        )
    }
}