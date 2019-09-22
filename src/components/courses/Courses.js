import React, { Component } from 'react';
import "./Courses.css"
import {CourseCard} from "../card/CourseCard";
import siete from "../../assets/badget1.png";
import cinco from "../../assets/badget2.png";
import seis from "../../assets/badget-3.png";


class Courses extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="courses ">
                <meta
                    name="description"
                    content="  Aprende a programar desde cualquier
                                lugar, a la hora que prefieras y en el dispositivo
                                que más te guste. Encuentra aquí, cursos de las herramientas más utilizadas en el mundo del desarrollo.
                       "
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>Cursos | FixterGeek</title>
              <div className="intro-courses">
                    <div className="courses-descript">
                        <div>
                            <h2 style={{textAlign:"left"}} className="subtitulos">Cursos</h2>
                            <br/>
                            <p>
                                Adquiere las habilidades necesarias para cambiar de trabajo o impulsar tu carrera profesional.
                            </p>
                            <br/>
                            <p>
                                Aprende a programar desde cualquier
                                lugar, a la hora que prefieras y en el dispositivo
                                que más te guste. Encuentra aquí, cursos de las herramientas más utilizadas en el mundo del desarrollo.
                        </p>

                        </div>
                    </div>
                  <div className="cc-image">

                  </div>
              </div>
                <div className="catalogo">
                    <h2 className="subtitulos">Explora todos los cursos</h2>
                    <div className="box-courses">
                        <CourseCard image={siete} name="Empezando con Firebase Realtime Database"
                                    lecciones="12 lecciones" tiempo="35 minutos"
                        />
                        <CourseCard image={cinco} name="Tu primer aplicación con Firebase"
                                    lecciones="14 lecciones" tiempo="30 minutos"
                        />
                        <CourseCard image={seis} name="Estructura de Datos Complejos con Realtime DB"
                                    lecciones="10 lecciones" tiempo="40 minutos"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;