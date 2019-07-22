import React, { Component } from 'react';
import Button from "../bootcamp/Bootcamp";
import "./Courses.css"
import {CourseCard} from "../card/CourseCard";


class Courses extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="courses ">
              <div className="intro-courses">
                    <div className="courses-descript">
                        <div>
                            <h2 style={{textAlign:"left"}} className="subtitulos">Cursos</h2>
                            <br/>
                            <p>
                                Adquiere las habilidades necesarias para cambiar de trabajo o impulsar ru carrera profesional.
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
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;