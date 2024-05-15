import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import AreaProjetos from "./pages/AreaProjetos";
import Home from "./pages/home";
import Login from "./pages/Login";
import Rotas from "./Rotas";

export default function App() {
  return (
    <>
     <RouterProvider router={Rotas}/>
    </>
    
  );
}