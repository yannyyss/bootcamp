import React, { Component } from 'react';
import "./Profile.css"
import img from "../../assets/Ilustracion1.png"
import ButtonUser from "../common/ButtonUser"

export const UserBootcamp = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <p>El próximo Bootcamp Online inicia el 30 de Septiembre. <br/> <strong>Incríbete ya! </strong>
                </p>
                <img src={img} alt=""/>
                <br/>
                <br/>
                <ButtonUser  text="VER DETALLE"/>
            </div>
            <div>

            </div>

        </section>
    );
};