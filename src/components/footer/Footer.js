import React, { Component } from 'react';
import "./Footer.css"
import geeki from "../../assets/geek_2.c7d968e6.png"
import FontAwesome from "react-fontawesome"
import { Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div >
                    <img src={geeki} alt="logo-fixter"/>
                    <h3 style={{color:"white"}}>FixterGeek</h3>
                </div>
                <div>
                    <h3>Sobre Nosotros</h3>
                    <Link to="/">
                        <p>Nuestro Equipo</p>
                    </Link>
                    <Link to="/">
                        <p>Políticas de Privacidad</p>
                    </Link>
                    <Link to="">
                        <p>Contacto</p>
                    </Link>
                </div>
                <div>
                    <h3>Recursos</h3>
                    <Link to="/">
                        <p>Blog</p>
                    </Link>
                    <Link to="/">
                        <p>Medium</p>
                    </Link>
                    <Link to="">
                        <p>Podcast</p>
                    </Link>
                </div>
                <div className="redes">
                    <h3>Síguenos</h3>
                    <a href="https://www.facebook.com/fixterme/" target="blank">
                        <FontAwesome name="facebook"/>
                    </a>
                    <a href="https://wa.me/5217714348038" target="blank">
                        <FontAwesome name="whatsapp"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC2cNZUym14-K-yGgOEAFh6g" target="blank">
                        <FontAwesome name="youtube"/>
                    </a>
                    <a href="https://www.instagram.com/fixtergeek/?hl=es-la" target="blank">
                        <FontAwesome name="instagram"/>
                    </a>

                </div>
            </div>
        )
    }
}

export default Footer;