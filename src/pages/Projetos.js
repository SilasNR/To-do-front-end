import React from "react";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom/dist";
import "./style/projetos.css"
export default class Cadastro extends React.Component {

    render() {
        return (
            <div className="fundo-projetos">
                <nav class="container-fluid text-white py-5">
                    <h1 class="text-center display-6">To-Do List</h1>
                </nav>

                <main class="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
                    <div class="boards-page-board-section">
                        <div class="boards-page-board-section-header">
                            <div className="row">

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Projeto de conhecimentos gerais</h5>
                                            <p class="card-text">Card content 1...</p>
                                            <button class="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Card Title 1</h5>
                                            <p class="card-text">Card content 1...</p>
                                            <button class="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Crie um novo projeto</h5>
                                            <p class="card-text">Card content 1...</p>
                                            <button class="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </main>
            </div>
        )
    }
}