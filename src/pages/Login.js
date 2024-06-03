import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { InputText } from "primereact/inputtext";
import axios from "axios";

import "./style/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    console.log("batatinha frita");



    const handleLogin = async () => {

        try {

            console.log("batatinha frita");

            const response = await axios.post("http://localhost:4000/auth/login", {
                email,
                password,
            });

            console.log(response)

            const token = response.data?.access_token;
            if (token) {
                // Armazena o token no localStorage
                localStorage.setItem("token", response.data.access_token);
                // Envia uma mensagem para o console com o valor do token armazenado
                console.log("Token armazenado:", localStorage.getItem("token"));
            } else {
                // Lança um erro se o token não estiver presente na resposta
                throw new Error("Token não encontrado na resposta");
            }
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
                                    <label htmlFor="password">password:</label>
                                    <InputText
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        placeholder="Digite sua password"
                                    />
                                </div>

                                <div className="d-flex justify-content-between">

                                    <Link to="/projeto">
                                        <button type="submit" className="btn btn-primary botao-padrao btn-lg">
                                            Entrar
                                        </button>
                                    </Link>
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
