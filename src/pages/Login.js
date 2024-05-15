import React from "react";
import { Link } from "react-router-dom/dist";


export default class Home extends React.Component {

    render(){
        return(
            <div>
                <h1>Login</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}