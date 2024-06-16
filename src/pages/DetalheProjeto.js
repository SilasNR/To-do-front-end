import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Button, Modal, Box } from '@mui/material';
import './style/projetos.css';
import { Card } from 'react-bootstrap';

const DetalheProjeto = () => {
    let { id } = useParams();

    const [name_project, setName_project] = useState();
    const [status_project, setStatus_project] = useState();
    const [resume_project, setResume_project] = useState();

    const [tarefas, setTarefas] = useState();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/project/${id}`);
            setName_project(response.data.name_project);
            setStatus_project(response.data.status_project);
            setResume_project(response.data.resume_project);
            console.log("teste: ", response.data);
        } catch (error) {
            console.error('Erro ao buscar projetos:', error);
        }
    };

    const fetchTarefas = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/tarefas`);
            
        } catch (error) {
            console.error('Erro ao buscar projetos:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Detalhes do Projeto</h2>
            <p>ID do Projeto: {id}</p>
            <p>nome do Projeto: {name_project}</p>
            <p>status do Projeto: {status_project}</p>
            <p>resumo do Projeto: {resume_project}</p>
            {/* Outras informações do projeto podem ser renderizadas aqui */}
            <h1>Tarefas</h1>
            <Card>
                <h4>Nenhuma tarefa no momento</h4>
            </Card>
            <Button variant="outlined" color="primary">
                Adicionar Tarefas
            </Button>
        </div>
    );
};

export default DetalheProjeto;
