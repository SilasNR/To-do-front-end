import React from "react";
import {createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom/dist";


import Home from "./pages/home";
import Login from "./pages/Login";
import AreaProjetos from "./pages/AreaProjetos";

const Rotas = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Home/>,
    //     errorElement: <Sobre/>,
    //     children: 
    //     [
    //         {
    //         path: "/",
    //         element: <Usuario/>
    //         },
    //     ]
    // },

    {
        path: "/",
        element: <Home />,
        children:
            [
                {
                    path: "/",
                    element: <Home />
                },
            ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <><h1>Cadastrar</h1><Link to="/">Home</Link></>,
    },
    {
        path: "/projetos",
        element: <AreaProjetos />,
    }

]);

export default Rotas