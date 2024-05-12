import React from "react";
import { Button, Card, Input, Label } from "reactstrap";
import "../index.css";
import 'primeicons/primeicons.css';

export default class Home extends React.Component {

    render(){
        return(
            <div className="conteiner">
                <div className="bg-dark d-flex align-items-center text-bg-primary">
                    <h1 className="row justify-content-center">Sua Area de Projetos</h1>
                </div>
                <div className="row conteiner vh-100">
                    <h3>
                        Nenhum projeto foi criado ainda.<i className="pi pi-thumbs-down"></i>
                    </h3>
                    
                </div>
            </div>
        )
    }
}