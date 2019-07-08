import React, { Component } from 'react';
import "./Profile.css"
import img from "../../assets/Ilustracion1.png"
import ButtonUser from "../common/ButtonUser"

export const UserEvents = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <p> No tenemos eventos programados por el momento.
                </p>
                <img src={img} alt=""/>
                {/*         <br/>
                <br/>
                <ButtonUser ico="#" text="EXPLORAR"/>*/}
            </div>
            <div>

            </div>

        </section>
    );
};