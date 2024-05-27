import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/home.js';
// import Sobre from './pages/Login.js';
// import Contato from './pages/AreaProjetos.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
  </React.StrictMode>
);