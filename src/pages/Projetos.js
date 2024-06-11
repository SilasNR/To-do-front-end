import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

const Projetos = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [open, setOpen] = useState(false);

    // Função para buscar os projetos
    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:4000/project');
            console.log('Dados recebidos da API:', response.data);
            setProjects(response.data);
            console.log('Dados recebidos da API: ---', projects);
        } catch (error) {
            console.error("Houve um erro ao buscar os projetos!", error);
        }
    };

    // Função para abrir o modal com detalhes do projeto
    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    // Função para fechar o modal
    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    // Construtor do componente - chamado uma vez na montagem do componente
    useEffect(() => {
        fetchProjects();
        console.log('Estado dos projetos:', projects, projects.length);
    }, []);


    return (
        <div>
            {projects.map((project) => (
                <Card key={project.id_project} style={{ marginBottom: 20 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {project.name_project}
                        </Typography>
                        <Typography color="textSecondary">
                            Status: {project.status_project}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {project.resume_project}
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={() => handleOpen(project)}>
                            Ver detalhes
                        </Button>
                    </CardContent>
                </Card>
            ))}

            <Modal open={open} onClose={handleClose}>
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
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Projetos;
