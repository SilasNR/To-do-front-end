import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Input, Label } from "reactstrap";



class App extends React.Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  componentDidUpdate() {

  }


  render() {

    return (
      <div>
        <Card className="w-25 p-2 mt-5 container">
          <form>
            <div className="row justify-content-center">
              
              <div className="col-12">
                <h1>Login</h1>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12">
                <Label >Nome</Label>
              </div>

            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <Input type="text" /><br />
              </div>
              
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <Label >Senha</Label>
              </div>
              
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <Input type="text" />
              </div>
              
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12">
                <Button >Entrar</Button>
              </div>
              
            </div>

            <div className="row justify-content-center mt-4">
              
              <div className="col-12">
                <h6><a>Esqueci minha senha</a></h6>
              </div>
            </div>

          </form>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
