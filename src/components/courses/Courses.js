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
                            <p>Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. Whether you’re new to coding, adding more skills, or advancing your career, 10 hours a week will prepare you for your ideal developer job.</p>
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