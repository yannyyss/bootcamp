import React, { Component } from 'react';
import "./Bootcamp.css"
import {Link} from "react-router-dom";
import Button from "../common/Button";
import {Tabs} from "antd";
import {CardLessons} from "./CardLessons";


export const BootcampDetail = () => {
    return (
        <section className="bootcamp">
            <div className="intro-bootcamp">
                <div className="bootcamp-descript">
                    <div>
                        <h2 style={{textAlign:"left"}} className="subtitulos">Web Development Online Bootcamp</h2>
                        <p>
                            Aprende los
                            fundamentos necesarios para abordar el desarrollo de software web cómo un profesional.
                        </p>
                        <br/>
                        <Link to="/apply">
                            <Button ico=">_" text="Empezar"/>
                        </Link>

                    </div>
                </div>
                <div className="bootcamp-img">

                </div>
            </div>
            <div className="summary">
                <h2 style={{textAlign:"left"}} className="subtitulos">Programa</h2>
                <p className="textos">El Bootcamp tiene una duración de 5 semanas. Semanlamente se liberará
                    el contenido correspondiente, por lo que aunque siempre tendrás acceso a las lecciones en video, no podrás subir tus tareas
                    al terminar la semana.
                </p>
                <br/>
                <div className="box-lessons">
                    <CardLessons/>

                </div>
            </div>


        </section>
    );
};