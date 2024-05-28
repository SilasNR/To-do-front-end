import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { InputText } from "primereact/inputtext";
import axios from "axios";

import "./style/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const sendLog = async (message) => {
        try {
            await setInterval(() => {
                console.log(message, " batatinha frita");
            }, 1000000); // 60000 ms = 1 minuto
            
        } catch (err) {
            console.error("Erro ao enviar o log:", err);
        }
    };

    const handleLogin = async () => {

        try {
            const response = await axios.post("http://localhost:4000/auth/login", {
                email,
                senha,
            });
            
            console.log(response, "batatinha frita")

            await setInterval(() => {
                console.log(" batatinha frita");
            }, 100000000000000000000000000); // 60000 ms = 1 minuto



        } catch (error) {
            console.error("Erro ao enviar o log:", error)

            if (error.response && error.response.status === 404) {
                setError("Credenciais inválidas");
            } else {
                setError(error.message || "Credenciais inválidas");
            }
        }
    };

    return (
        <div className="fundo-login">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="login-container">
                            <h2 className="text-light">Tela de Login</h2>

                            <form onSubmit={handleLogin}>
                                <div className="text-light form-group">
                                    <label htmlFor="email">Email:</label>
                                    <InputText
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div className="text-light form-group">
                                    <label htmlFor="senha">Senha:</label>
                                    <InputText
                                        type="password"
                                        className="form-control"
                                        id="senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        placeholder="Digite sua senha"
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary botao-padrao btn-lg">
                                        Entrar
                                    </button>
                                    <Link to="/cadastro">
                                        <button className="btn btn-secondary botao-padrao btn-lg">
                                            Cadastrar-se
                                        </button>
                                    </Link>
                                </div>
                            </form>
                            {error && <p className="text-light">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
