import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Criacao = ({ show, onClose, id_project }) => {
    const [name, setName] = useState('');
    const [resume, setResume] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = { id_project, name, resume, status };
        console.log('Form submitted:', projectData);
        onClose(); // Fecha o modal após salvar
    };

    useEffect(() => {
        if (show) {
            // Reseta os campos do formulário quando o modal é aberto
            setName('');
            setResume('');
            setStatus('');
        }
    }, [show]);

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Novo Projeto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome do Projeto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume">Resumo do Projeto</label>
                        <textarea
                            className="form-control"
                            id="resume"
                            value={resume}
                            onChange={(e) => setResume(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status do Projeto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" variant="primary">Salvar</Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Criacao;
