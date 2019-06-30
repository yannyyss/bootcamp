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
                <p>Bootcamp</p>
                <p>Cursos</p>
                <p>Contacto</p>
                <button className="btn-aply">Aplicar</button>
                <hr className="line"/>
                <p>Login</p>
            </div>
        </div>
    );
};