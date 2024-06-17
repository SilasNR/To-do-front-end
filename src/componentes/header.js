import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/head.css"
import Btnhome from './botaohome';
import Btnuser from './botaouser';
import Btnreturn from './botaoretorno';

export default function Header(props) {
    const [texto, setTexto] = useState("");

    const renderComponente = () => {
        if (props.estilo === "home") {
            setTexto("To-do");
            return <Btnhome />
        } else if (props.estilo === "user") {
            setTexto("");
            return <Btnuser />
        } else if (props.estilo === "voltar"){

            return <Btnreturn />
        } else if (props.estilo === ""){
            return <div></div>
        }
    }

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center">
                <h1 className="text-center display-6">{texto}</h1>
                <Link to={props.link} >
                    {renderComponente()}
                </Link>

            </nav>
        </div>
    );
}

