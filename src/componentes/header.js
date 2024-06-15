import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/head.css"
import Btnhome from './botaohome';
import Btnuser from './botaouser';

export default function Header(props) {

    const renderComponente = () => {
        if (props.estilo === "home") {
            return <Btnhome />
        } else {
            return <Btnuser nome={props.nome}/>
        }
    }

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center">
                <h1 className="text-center display-6">Bem-vindo {props.nome}</h1>
                <Link to={props.link} >
                    {renderComponente()}
                </Link>

            </nav>
        </div>
    );
}

