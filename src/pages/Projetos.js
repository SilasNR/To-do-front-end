import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Head from '../componentes/header';
import { Typography, Button, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style/projetos.css';
import { Link } from "react-router-dom/dist";

const Projetos = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const [name_project, setName_project] = useState('');
    const [resume_project, setResume_project] = useState('');
    const [status_project, setStatus_project] = useState('');
    const [userIdUser, setUserIdUser] = useState(null);

    const [open, setOpen] = useState(false);
    const [openCriacao, setOpenCriacao] = useState(false);
    const [error, setError] = useState("");

    const [nameUser, setNameUser] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            console.log('Decoded token:', decoded);
            setUserIdUser(decoded.sub);
        }

        fetchProjects();
        fetchUser();
    }, [nameUser]);

    const handleCriacaoProjetos = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:4000/project", {
                name_project,
                resume_project,
                status_project,
                userIdUser
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setOpenCriacao(false);
            fetchProjects();

        } catch (error) {
            console.error("Erro durante o cadastro:", error);
            if (error.response && error.response.status === 404) {
                setError("Credenciais inválidas");
            } else {
                setError(error.message || "Credenciais inválidas");
            }
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/project/user/${userIdUser}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Dados recebidos da API:', response.data);
            setProjects(response.data);
            fetchUser();
        } catch (error) {
            console.error("Houve um erro ao buscar os projetos!", error);
        }
    };

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/user/${userIdUser}`);
            setNameUser(response.data.username);
        } catch (error) {
            console.error("Houve um erro ao buscar os projetos!", error);
        }
    };

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
        let url = `/detalheprojeto/${project.id_project}`;
        window.location.href = url;
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const handleOpenCriacao = () => {
        setOpenCriacao(true);
    };

    const handleCloseCriacao = () => {
        setOpenCriacao(false);
    };

    const handleNavigateToProject = () => {
        if (selectedProject) {
            navigate(`/project/${selectedProject.id_project}`);
        }
    };

    useEffect(() => {
        if (userIdUser) {
            fetchProjects();
        }
    }, [userIdUser]);

    return (
        <div className='fundo-projetos'>
            <Head link="" estilo="person" nome={nameUser} />

            <main className="">
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
                <div className="">
                    <div className="" >
                        <h1>Seus Projetos :</h1>

                        <button className='btn-addCard' onClick={handleOpenCriacao}>+</button>
                    </div>
                </div>
            </main>

            <Modal open={openCriacao} onClose={handleCloseCriacao}>
                <Box sx={{ width: 400, p: 4, bgcolor: 'background.paper', margin: 'auto', marginTop: '10%' }}>
                    <form onSubmit={handleCriacaoProjetos}>
                        <div className="form-group">
                            <label htmlFor="name">Nome do Projeto</label>
                            <input
                                type='text'
                                id='name_project'
                                value={name_project}
                                onChange={(e) => setName_project(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Breve Resumo:</label>
                            <input
                                type='text'
                                id='resume_project'
                                value={resume_project}
                                onChange={(e) => setResume_project(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Status do Projeto:</label>
                            <input
                                type='text'
                                id='status_project'
                                value={status_project}
                                onChange={(e) => setStatus_project(e.target.value)} />
                        </div>
                        <button type="submit" variant="primary">Salvar</button>
                    </form>
                </Box>
            </Modal>

            {/* <Modal open={open} onClose={handleClose}>
                <Box sx={{ width: 400, p: 4, bgcolor: 'background.paper', margin: 'auto', marginTop: '10%' }}>
                    {selectedProject && (
                        <div>
                            <Typography variant="h4" component="h2">
                                {selectedProject.name_project}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {selectedProject.status_project}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {selectedProject.resume_project}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleNavigateToProject}>
                                Va para a página do projeto
                            </Button>
                        </div>
                    )}
                </Box>
            </Modal> */}
        </div>
    );
};

export default Projetos;