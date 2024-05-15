import React from "react";
import { Link } from 'react-router-dom';

export default class head extends React.Component {
    render() {
        return (
            <head className="v-100 m-50">
                <h1>To-do</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Logar</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projeto</Link>
                        </li>
                    </ul>
                </nav>
            </head>
        )
    }
}