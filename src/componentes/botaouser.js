import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/btnhome.css"
import { Tooltip, IconButton } from '@mui/material';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Btnhome(props) {
    // const [userName, setUserName] = useState("");

    // useEffect(() => {
    //     if (props.userid) {
    //         fetchUserName(props.userid);
    //     }
    // }, [props.userid]);

    // const fetchUserName = async (userId) => {
    //     try {
    //         const response = await axios.get(`http://localhost:4000/user/${userId}`);
    //         setUserName(response.data.name); // Supondo que o nome do usuário esteja em response.data.name
    //     } catch (error) {
    //         console.error("Erro ao buscar nome do usuário:", error);
    //     }
    // };


    return (
        // <Tooltip title={props.userid} placement="bottom">
        //     <h1>{props.userid}</h1>
        //     <h1>{userName}</h1>
        //     <button className="icon-button-custom">
        //         <i className="bi bi-person"></i>
        //     </button>
        // </Tooltip>

        <div>
            <button className="icon-button-custom">
                <i className="bi bi-person"></i>
            </button>
        </div>
    );
}

