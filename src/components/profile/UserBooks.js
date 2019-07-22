import React, { Component } from 'react';
import "./Profile.css"
import img from "../../assets/secciones-03.png"
import ButtonUser from "../common/ButtonUser"

export const UserBooks = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <h2> <strong>¡Proximamente! </strong>
                </h2>
                <img style={{opacity:".7"}} src={img} alt=""/>
       {/*         <br/>
                <br/>
                <ButtonUser ico="#" text="EXPLORAR"/>*/}
            </div>
            <div>

            </div>

        </section>
    );
};