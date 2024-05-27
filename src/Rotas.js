import React from "react";
import {createBrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom/dist";

import Projetos from "./pages/Projetos";
import Home from "./pages/home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

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
        element: <Cadastro />,
    },
    {
        path: "/projeto",
        element: <Projetos />,
    }

]);

export default Rotas