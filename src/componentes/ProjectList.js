import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap'; // Importe o Button do Bootstrap

const ProjectList = ({ onSelectProject }) => { // Adicione uma prop para lidar com a seleção de projetos
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:4000/project');
                setProjects(response.data);
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Lista de Projetos</h2>
            <ul className="list-group">
                {projects.map((project) => (
                    <li key={project.id_project} className="list-group-item project-item" onClick={() => onSelectProject(project.id_project)}>
                        <span>ID: {project.id_project}</span> - <span>Nome: {project.name_project}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
