import React from 'react';
import "./Nav.css"
import {Link} from "react-router-dom";
import logo from "../../assets/geek_completo.png"

export const NavBarDisplay = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            <div className="pestanas">
                <Link to="/bootcamp">
                    <p>Bootcamp</p>
                </Link>
                <Link to="/courses">
                    <p>Cursos</p>
                </Link>
                <Link to="/contacto">
                    <p>Contacto</p>
                </Link>
                <Link to="/apply">
                    <button className="btn-aply">Aplicar</button>
                </Link>
                <hr className="line"/>
                <Link to="/login">
                    <p>Login</p>
                </Link>
            </div>
        </div>
    );
};