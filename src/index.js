import React from "react";
import ReactDOM from "react-dom";



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
        <div style={{border:" 1px solid black", paddingLeft:"45%"}}> 
        <form>
          <h1>Login</h1>
          <label >nome</label>
          <input type="text" /><br/>
          <label>senha</label> 
          <input type="text" />
        </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
