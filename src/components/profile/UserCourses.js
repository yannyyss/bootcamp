import React, { Component } from 'react';
import "./Profile.css"
import img from "../../assets/Ilustracion1.png"
import ButtonUser from "../common/ButtonUser"

export const UserCourses = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <p>¡Ups! Aún no tienes ningun curso. Explora nuestro catálogo y obten tu primer curso al 50% <strong> #LEARNTOCODE</strong>
                </p>
                <img src={img} alt=""/>
                <br/>
                <br/>
                <ButtonUser text="EXPLORAR"/>
            </div>
            <div>

            </div>

        </section>
    );
};