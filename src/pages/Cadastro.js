import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { InputText } from "primereact/inputtext";
import axios from "axios";

import "./style/cadastro.css";

const Cadastro = () => {
  const [emailx, setEmail] = useState("");
  const [senhax, setSenha] = useState("");
  const [errorx, setError] = useState("");
 const dados = {
  username: "Bruno Santos",
  secret_question: "queroquedecerto",
  status: true,
  email: "brunosantos@gmail.com",
  password: "BrunoSantos01*"
}
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user", dados);

    } catch (error) {
      console.error("erro durante o login:", error);

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
                    id="emailx"
                    value={emailx}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email ooooooooooo"
                  />
                </div>
                <div className="text-light form-group">
                  <label htmlFor="senha">Senha:</label>
                  <InputText
                    type="password"
                    className="form-control"
                    id="senhax"
                    value={senhax}
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
              {errorx && <p className="text-light">{errorx}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
