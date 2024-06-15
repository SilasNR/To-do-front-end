import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/btnhome.css"

export default function Btnhome() {
    return (
        <div>
            <button className="icon-button-custom">
                <i className="bi bi-house"></i>
            </button>
        </div>
    );
}

