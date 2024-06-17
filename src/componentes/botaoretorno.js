import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/btnhome.css"
//import { Tooltip, IconButton } from '@mui/material';

export default function btnreturn(props) {


    return (
        <div>
            <button className="icon-button-custom">
                <i class="bi bi-arrow-left"></i>
            </button>
        </div>
    );
}

