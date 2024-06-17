import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import axios from 'axios';


const MyMenu = ({ onClose, onItemClick, status}) => {
  const handleItemClick = (action) => {
    onItemClick(action);
    onClose();
  };

  return (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={status} // Deixe como está se quiser que o menu inicie aberto
      onClose={onClose}
    >
      <MenuItem onClick={() => handleItemClick('perfil')}>Perfil</MenuItem>
      <MenuItem onClick={() => handleItemClick('conta')}>Deletar projeto</MenuItem>
      <MenuItem onClick={() => handleItemClick('sair')}>Sair</MenuItem>
    </Menu>
  );
};

const Btnhome = (props) => {
    useEffect(() => {

    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/project/${props.projetoid}`);
            console.log('Dados recebidos da API:', response.data);
        } catch (error) {
            console.error("Houve um erro ao buscar os projetos!", error);
        }
    };
    

  const [menuOpen, setMenuOpen] = useState(false); // Inicializa como false para iniciar fechado

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Ação realizada: ${action}`);
    // Aqui você pode adicionar lógica adicional conforme necessário
    if(action === "sair"){
        let url = `/login`;
        window.location.href = url;
    } else if (action === "perfil"){

    }
  };

  return (
    <div>
      <Button onClick={handleMenuOpen}>Abrir Menu</Button>
      <MyMenu onClose={handleMenuClose} onItemClick={handleMenuItemClick}  status={menuOpen}/>
    </div>
  );
};

export default Btnhome;
