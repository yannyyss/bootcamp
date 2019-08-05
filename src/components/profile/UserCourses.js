import React from 'react';
import "./Profile.css"
import img from "../../assets/Ilustracion1.png"
import ButtonUser from "../common/ButtonUser"
import {Link} from "react-router-dom";

export const UserCourses = () => {
    return (
        <section className="user-courses">
            <div className="box-c none-user">
                <p>¡Ups! Aún no tienes ningun curso. Explora nuestro catálogo y obten tu primer curso al 50% <strong> #LEARNTOCODE</strong>
                </p>
                <img src={img} alt=""/>
                <br/>
                <br/>
                <Link to="/courses">
                    <ButtonUser text="EXPLORAR"/>
                </Link>
            </div>
            <div>

            </div>

        </section>
    );
};