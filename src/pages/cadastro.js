import React from "react";
// import { Link } from "react-router-dom/dist";
// import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./style/cadastro.css"


export default class Cadastro extends React.Component {

    render() {
        return (
            <div>
                <nav class="container-fluid text-white py-5">
                    <h1 class="text-center display-6">Tela de Cadastro</h1>
                </nav>
                <div className="fundo-cadastro">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 mx-auto">
                                <div class="login-container">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="UserName">User Name:</label>
                                            <InputText type="text" class="form-control" id="username" placeholder="Digite seu usuario" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email:</label>
                                            <InputText type="email" class="form-control" id="email" placeholder="Digite seu email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="senha">Senha:</label>
                                            <InputText type="password" class="form-control" id="senha" placeholder="Digite sua senha" />
                                        </div>
                                        <button type="submit" class="btn botao-geral btn-primary">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}