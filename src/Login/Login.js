import React from 'react';

import { Card } from 'react-bootstrap';


export default class Login extends React.Component {

    render() {
        return (
            <>
                <div className="row conteiner vh-100">

                    <div className="col-8 vh-100 conteiner" id="bannerRotativo">
                        <div className="text-center col-12">
                            <h1 className="f1" id="tituloTodo">To-do</h1>
                        </div>

                        <div className="col-12 mt-4 border h-50" >
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab magni sapiente, consequatur vel voluptate necessitatibus vero. Officia odit dolores, fugit vel sequi aut cumque id laboriosam soluta obcaecati deleniti!</h2>
                        </div>
                    </div>
                    <div className="col conteiner d-flex align-items-center bg-dark">
                        <Card className="col-10 container">
                            <form>
                                {/* Titulo - Login*/}
                                <div className="row justify-content-center text-center">
                                    <div className="col-12">
                                        <h1>Login</h1>
                                    </div>
                                </div>

                                {/* Label - Nome */}
                                <div className="row justify-content-center mt-5">
                                    <div className="col-12">
                                        <Label >Nome</Label>
                                    </div>
                                </div>

                                {/* Input - Nome */}
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <Input type="text" /><br />
                                    </div>
                                </div>

                                {/* Label - Senha */}
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <Label >Senha</Label>
                                    </div>
                                </div>

                                {/* Input - Senha */}
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <Input type="password" />
                                    </div>
                                </div>

                                {/* Botão - Entrar */}
                                <div className="row justify-content-center mt-4">
                                    <div className="col-12">
                                        <Button >Entrar</Button>
                                    </div>
                                </div>

                                {/* Link - Esqueci senha */}
                                <div className="row justify-content-center mt-4">
                                    <div className="col-12">
                                        <h6><a>Esqueci minha senha</a></h6>
                                    </div>
                                </div>

                            </form>
                        </Card>
                    </div>
                </div>
            </>
        )
    }

}
