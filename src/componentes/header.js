import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/head.css"
import Btnhome from './botaohome';

export default function Header() {
    return (
        <div>
            <nav class="d-flex justify-content-between align-items-center">
                <h1></h1>
                <h1 class="text-center display-6">To-Do List</h1>
                <Link to="/home"><Btnhome /></Link>
            </nav>
        </div>
    );
}

