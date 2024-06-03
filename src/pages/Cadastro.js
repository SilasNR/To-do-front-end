import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { InputText } from "primereact/inputtext";
import axios from "axios";

import "./style/cadastro.css";

const Cadastro = () => {

  const [username, setUsername] = useState("");
  const [secret_question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  console.log("batatinha frita");

  const handleCadastro = async (e) => {
    try {

      e.preventDefault();

      const response = await axios.post("http://localhost:4000/user", {
        username,
        secret_question,
        email,
        password
      });
    } catch (error) {
      console.error("erro durante o cadastro:", error);

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

              <form onSubmit={handleCadastro}>

                <div className="text-light form-group">
                  <label htmlFor="senha">User Name:</label>
                  <InputText
                    className="form-control"
                    id="usernamex"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu nome de usuario"
                  />
                </div>

                <div className="text-light form-group">
                  <label htmlFor="senha">Palavra Secreta:</label>
                  <InputText
                    type="text"
                    className="form-control"
                    id="palavrax"
                    value={secret_question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Digite sua palavara secreta"
                  />
                </div>

                <div className="text-light form-group">
                  <label htmlFor="email">Email:</label>
                  <InputText
                    type="email"
                    className="form-control"
                    id="emailx"
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
                    id="senhax"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                  />
                </div>


                <div className="d-flex justify-content-between">

                  <button type="submit" className="btn btn-primary botao-padrao btn-lg">
                    Cadastrar-se
                  </button>

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

export default Cadastro;
