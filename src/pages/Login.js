import React from "react";
import { Link } from "react-router-dom/dist";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import "./style/login.css"

const MeuBotao = ({ children, ...props }) => {
    return (
      <button type={props.type} className="btn col meuBotaoPrimario" {...props}>
        {children}
      </button>
    );
  };

export default class Login extends React.Component {

    
    render() {
        return (
            <div className="fundo">
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
                                    <div className="w-100">
                                        <div class=" w-100 d-flex flex-row">
                                            <Link to="/projeto"><MeuBotao type="submit">Entrar</MeuBotao></Link>
                                            <Link to="/cadastro"><MeuBotao type="button">Cadastro</MeuBotao></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}