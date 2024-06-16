import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Projetos from './pages/Projetos';
import ProjectList from './componentes/ProjectList';
import DetalheProjeto from './pages/DetalheProjeto';
import Criacao from './componentes/criacaoprojeto';


export default function App({ Component, pageProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId); // Armazena o ID do projeto selecionado
    setModalVisible(true); // Abre o modal ao selecionar um projeto
  };

  // const handleCloseModal = () => {
  //   setModalVisible(false); // Fecha o modal
  // };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" exact element={<Cadastro />} />
          <Route path="/projeto" exact element={<Projetos />} />
          <Route path="/projectlist" exact element={<ProjectList />} />
          <Route path="/detalheprojeto/:id" exact element={<DetalheProjeto />} />
        </Routes>

        {/* <div className="App"> */}
          {/* <ProjectList onSelectProject={handleSelectProject} /> */}

          {/* <Projetos onSelectProject={handleSelectProject}/> 
          <Criacao show={modalVisible} onClose={handleCloseModal} id_project={selectedProjectId} />
        </div> */}
      </div>
    </Router>
  );
}
