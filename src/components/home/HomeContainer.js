import React, { Component } from 'react';
import "./Home.css"
import Button from "../common/Button";
import {CourseCard} from "../card/CourseCard";
import { Carousel } from 'antd';
import uno from "../../assets/iconos_web_Mesa de trabajo 1 (1).png"
import dos from "../../assets/iconos_web-02 (1).png"
import tres from "../../assets/iconos_web-03 (1).png"
import cuatro from "../../assets/iconos_web-04 (1).png"
import {Link} from "react-router-dom";


let react = require("../../assets/react.png")
let vue = require("../../assets/vue.png")
let angular = require("../../assets/angular.png")
let ember = require("../../assets/ember.png")
let docker = require("../../assets/dock.png")
let node = require("../../assets/node.png")
let python = require("../../assets/python.png")
let dj = require("../../assets/dj.png")
let fire = require("../../assets/fire.png")


let imagenes = [
    react,
    vue,
    angular,
    ember,
    docker,
    node,
    python,
    dj,
    fire

]

class HomeContainer extends Component {


    componentDidMount() {
        let script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/gh/cmiscm/stickerjs/sticker.min.js'
        script.async = true
        script.onload = () => {
            window.Sticker.init('.sticker');
            // change bg

            let imgs = document.querySelectorAll('.sticker-img.sticker-front')
            let back = document.querySelectorAll('.sticker-img.sticker-back')
            console.log(imgs)
            imgs.forEach((div,i)=>{
                div.style = `background-image:url('${imagenes[i]}')`
                back[i].style = `background-image:url('${imagenes[i]}')`
            })
            //img.style = `background-image:url('${fire}')`
            //img.style = 'background-color:red'
        }
        document.body.appendChild(script)
    }

    onChange = (a, b, c) => {

        console.log(a, b, c);    };

    render() {
        return (
            <section>
                <section className="slide">
                    <div className="cover">
                        <div className="slogan">
                            <h2>Aprende las <strong>herramientas</strong> y <strong>frameworks</strong> que usan los profesionales de la industria</h2>
                            <p>Cursos, tutoriales, botocamps
                            </p>
                            <br/>
                            <Link to="/courses">
                                <Button ico=">_" text=" Explorar"/>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="box-framework">
                        <div className="sticker"/>
                        <div className="sticker" />
                        <div className="sticker"/>
                        <div className="sticker"/>
                        <div className="sticker"/>
                        <div className="sticker"/>`
                        <div className="sticker"/>
                        <div className="sticker"/>
                        <div className="sticker"/>


                    </div>
                    <div className="descript">
                        <h2>La plataforma para aprender </h2>
                        <p>
                            La tecnología se mueve tan rápido, que en ocasiones, a pesar de la pasión u curiosidad que sientes por ella, es difícil aprender o actualizarse debido a la gran cantidad de información que encontramos en la web o en libros, y a lo dispersa que esta información se encuentra.

                        </p>
                        <p>
                            Es por eso que FixterGeek, es una plataforma única en donde encontraras cursos, ejercicios, artículos, libros y eventos sobre tecnología.
                        </p>
                        <p>
                            Si eres un apasionado del código, los bugs y el localhost, estas en el lugar correcto.</p>
                        <br/>
                        <Link to="/courses">
                            <Button ico="</>" text=" Iniciar"/>
                        </Link>
                    </div>
                </section>
                <section className="why">
                    <h2>¿Por qué aprender en Fixter? </h2>
                    <div className="box-why">
                        <div className="card-beneficios">
                            <img src={cuatro} alt=""/>
                            <div className="beneficios">
                                <h3>Diversidad</h3>
                                <p>Explora nuestros cursos y bootcamps, y elige el que más te interese.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={tres} alt=""/>
                            <div className="beneficios">
                                <h3>Práctica</h3>
                                <p>Toma cada curso a tu ritmo y a tu tiempo. Están siempre disponibles.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt=""/>
                            <div className="beneficios">
                                <h3>Asesoría</h3>
                                <p>Ten asesorías sobre el curso directamente de nuestros instructores.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={dos} alt=""/>
                            <div className="beneficios">
                                <h3>Certificado</h3>
                                <p>Recibirás un diploma y un pack de stickers como recompensa al terminar.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="destacados">
                    <h2 className="subtitulos">Nuevos Cursos</h2>
                    <div className="box-destacados">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </section>
                <section className="testimonios">
                    <h2 className="subtitulos">Conoce a nuestros ex-alumnos</h2>
                    <div>
                        <Carousel afterChange={this.onChange} autoplay>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/61825522_2176917525736957_640533924828676096_o.jpg?_nc_cat=105&_nc_oc=AQmDd2gHR4IkHHaK3GSGhDh0LBq9ag148VAnStGt-TNcvPa5RP63tMk0fJFo45W9Roo&_nc_ht=scontent.fmex6-1.fna&oh=3a64a0a2d86ee1be6accf189cdfee361&oe=5DC42C6E")`}}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> The instructors are knowledgeable and engaging, there is more support than you know what to do with, and the school constantly impressed me with it's dedication to creating a safe and inclusive learning environment. The whole experience has been challenging and inspiring in the best ways possible.</p>

                                    <p>— Ky Capstick</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/61825522_2176917525736957_640533924828676096_o.jpg?_nc_cat=105&_nc_oc=AQmDd2gHR4IkHHaK3GSGhDh0LBq9ag148VAnStGt-TNcvPa5RP63tMk0fJFo45W9Roo&_nc_ht=scontent.fmex6-1.fna&oh=3a64a0a2d86ee1be6accf189cdfee361&oe=5DC42C6E")`}}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> The instructors are knowledgeable and engaging, there is more support than you know what to do with, and the school constantly impressed me with it's dedication to creating a safe and inclusive learning environment. The whole experience has been challenging and inspiring in the best ways possible.</p>
                                    <p>— Ky Capstick</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/61825522_2176917525736957_640533924828676096_o.jpg?_nc_cat=105&_nc_oc=AQmDd2gHR4IkHHaK3GSGhDh0LBq9ag148VAnStGt-TNcvPa5RP63tMk0fJFo45W9Roo&_nc_ht=scontent.fmex6-1.fna&oh=3a64a0a2d86ee1be6accf189cdfee361&oe=5DC42C6E")`}}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> The instructors are knowledgeable and engaging, there is more support than you know what to do with, and the school constantly impressed me with it's dedication to creating a safe and inclusive learning environment. The whole experience has been challenging and inspiring in the best ways possible.</p>
                                    <p>— Ky Capstick</p>
                                </div>
                            </div>
                            <div className="box-comment">
                                <div className="photo-alumno" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/61825522_2176917525736957_640533924828676096_o.jpg?_nc_cat=105&_nc_oc=AQmDd2gHR4IkHHaK3GSGhDh0LBq9ag148VAnStGt-TNcvPa5RP63tMk0fJFo45W9Roo&_nc_ht=scontent.fmex6-1.fna&oh=3a64a0a2d86ee1be6accf189cdfee361&oe=5DC42C6E")`}}></div>
                                <div className="testimonio">
                                    <span className="signo">“</span>  <p> The instructors are knowledgeable and engaging, there is more support than you know what to do with, and the school constantly impressed me with it's dedication to creating a safe and inclusive learning environment. The whole experience has been challenging and inspiring in the best ways possible.</p>
                                    <p>— Ky Capstick</p>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </section>
                <section className="newsletter">
                    <h2 >¿Quieres mantenerte al día sobre los próximos cursos y eventos? <br/> Inscríbete a nuestro newsletter
                    </h2>
                    <br/>
                    <div>
                        <input type="text" placeholder="contacto@fixter.org"/>
                        <button>Enviar</button>
                    </div>
                </section>

            </section>
        )
    }
}

export default HomeContainer;