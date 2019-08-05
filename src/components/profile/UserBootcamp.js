import React from 'react';
import "./Profile.css"
import img from "../../assets/secciones-02.png"
import ButtonUser from "../common/ButtonUser"
import {Link} from "react-router-dom"

export const UserBootcamp = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <p>El próximo Bootcamp Online inicia el 30 de Septiembre. <br/> <strong>¡Incríbete ya! </strong>
                </p>
                <img  style={{opacity:".7"}} src={img} alt=""/>
                <br/>
                <br/>
                <Link to="/bootcamp">
                    <ButtonUser  text="VER DETALLE"/>
                </Link>
            </div>
            <div>

            </div>

        </section>
    );
};