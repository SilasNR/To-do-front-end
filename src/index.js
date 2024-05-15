import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


class index extends React.Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  componentDidUpdate() {

  }


  render() {

    return (
      <>
        <App/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
