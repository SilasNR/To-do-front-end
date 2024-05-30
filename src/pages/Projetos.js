import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Head from "../componentes/header"

const API_URL = 'localhost:4000/project'

//import "./style/projetos.css"


export default class Projetos extends React.Component {

    constructor(props) {
        super(props);

        const savedMeusProjetos = JSON.parse(localStorage.getItem('meusProjetos')) || [];
        const savedParticipandoProjetos = JSON.parse(localStorage.getItem('participandoProjetos')) || [];


        this.state = {
            meusProjetos: savedMeusProjetos.length > 0 ? savedMeusProjetos : [
                {
                    title: "Projeto de alguma coisa",
                    content: "card content 1...",
                },
            ],
            participandoProjetos: savedParticipandoProjetos.length > 0 ? savedParticipandoProjetos : [
                {
                    title: "Projeto participando 1",
                    content: "card content participando 1...",
                },
            ],
        };
    }

    addMeusProjetosCard = () => {
        const newCard = {
            title: `Projeto ${this.state.meusProjetos.length + 1}`,
            content: `Card content ${this.state.meusProjetos.length + 1}...`,
        };
        this.setState((prevState) => {
            const updatedMeusProjetos = [...prevState.meusProjetos, newCard];
            localStorage.setItem('meusProjetos', JSON.stringify(updatedMeusProjetos));
            return { meusProjetos: updatedMeusProjetos };
        });
    };

    addParticipandoProjetosCard = () => {
        const newCard = {
            title: `Projeto ${this.state.participandoProjetos.length + 1}`,
            content: `Card content ${this.state.participandoProjetos.length + 1}...`,
        };
        this.setState((prevState) => {
            const updatedParticipandoProjetos = [...prevState.participandoProjetos, newCard];
            localStorage.setItem('participandoProjetos', JSON.stringify(updatedParticipandoProjetos));
            return { participandoProjetos: updatedParticipandoProjetos };
        });
    };

    deleteMeusProjetosCard = (index) => {
        const updatedMeusProjetos = this.state.meusProjetos.filter((_, i) => i !== index);
        this.setState({ meusProjetos: updatedMeusProjetos });
        localStorage.setItem('meusProjetos', JSON.stringify(updatedMeusProjetos));
    };

    deleteParticipandoProjetosCard = (index) => {
        const updatedParticipandoProjetos = this.state.participandoProjetos.filter((_, i) => i !== index);
        this.setState({ participandoProjetos: updatedParticipandoProjetos });
        localStorage.setItem('participandoProjetos', JSON.stringify(updatedParticipandoProjetos));
    };

    render() {
        return (
            <div className="fundo-projetos">
                <Head />
                <main class="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
                    <div class="boards-page-board-section">
                        <div class="boards-page-board-section-header">
                            <h1>Seus projetos:</h1>
                            <div className="cards-container">

                                {this.state.meusProjetos.map((card, index) => (
                                    <div key={index} className='card-wrapperd'>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">{card.title}</h5>
                                                <p class="card-text">{card.content}</p>
                                                <div className="d-flex">
                                                    <Link to={`/card/${index}`} className="btn btn-primary card-button mr-2">Read More</Link>
                                                    <button className="btn btn-danger card-button" onClick={() => this.deleteMeusProjetosCard(index)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className='btn-addCard' onClick={this.addMeusProjetosCard}>+</button>
                            </div>
                        </div>

                        <div class="boards-page-board-section-header">
                            <h1>Participando dos projetos:</h1>
                            <div className="cards-container">

                                {this.state.participandoProjetos.map((card, index) => (
                                    <div key={index} className='card-wrapperd'>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text">{card.content}</p>
                                                <button class="btn btn-primary">Read More</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteParticipandoProjetosCard(index)}>Sair</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}