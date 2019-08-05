import React from 'react';
import "./Nav.css"
import {Link} from "react-router-dom";
import logo from "../../assets/geek_completo.png"
import FontAwesome from "react-fontawesome"


export const NavBarDisplay = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            <div className="pestanas web">
                <Link to="/bootcamp">
                    <p>Bootcamp</p>
                    <hr className="red-line"/>
                </Link>
                <Link to="/courses">
                    <p>Cursos</p>
                    <hr className="red-line"/>
                </Link>

                <Link to="/apply">
                    <button className="btn-aply">Aplicar</button>
                </Link>
                <hr className="line"/>
                <Link to="/login">
                    <p>Login</p>
                    <hr className="red-line"/>
                </Link>
            </div>
            <div className="movil dropdown">
                <FontAwesome name="bars"/>
                <div className="dropdown-content">
                    <p>Bootcamp</p>
                    <p>Cursos</p>
                    <p className="linea">Login</p>
                </div>
            </div>
        </div>
    );
};