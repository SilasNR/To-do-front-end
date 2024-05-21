import React from "react";
import { Link } from "react-router-dom/dist";
import { Button } from 'primereact/button';
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./style/login.css"

export default class Cadastro extends React.Component {

    render() {
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="login-container">
                            <h2 className="text-light">Tela de Login</h2>

                            <form action="#">
                                <div class="text-light form-group">
                                    <label for="email">Email:</label>
                                    <InputText type="email" class="form-control" id="email" placeholder="Digite seu email" />
                                </div>
                                <div class="text-light form-group">
                                    <label for="senha">Senha:</label>
                                    <InputText type="password" class="form-control" id="senha" placeholder="Digite sua senha" />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <Link to="/projeto"><button type="submit" class="btn btn-primary">Entrar</button></Link>


                                    <Link to="/cadastro"><button type="button" class="btn btn-primary">Cadastro</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}