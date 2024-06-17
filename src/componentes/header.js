import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/head.css"
//import Btnhome from './botaohome';
import Btnuser from './botaouser';
import Btnreturn from './botaoretorno';

export default function Header(props) {
    const [texto, setTexto] = useState("");
    const [componente, setComponente] = useState(null);

    useEffect(() => {
        renderComponente(); // Chama renderização inicial
    }, [props.estilo, props.nome]); // Executa sempre que props.estilo mudar

    const renderComponente = () => {
        if (props.estilo === "home") {
            setTexto("To-Do");
        } else if (props.estilo === "user") {
            setTexto(`Área de ${props.nome}`);
            setComponente(<Btnuser projetoid={props.projetoid}/>);
        } else if (props.estilo === "voltar") {
            setTexto("To-Do");
            setComponente(<Btnreturn />);
        } else {
            setComponente(null); // Caso estilo não corresponda a nenhum, componente será null
        }
    }

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center">
                <h1 className="text-center display-6">{texto}</h1>
                <Link to={props.link} >
                    {componente}
                </Link>

            </nav>
        </div>
    );
}