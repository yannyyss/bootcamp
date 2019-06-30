import React, { Component } from 'react';
import "./Home.css"
import Button from "../common/Button";
import uno from "../../assets/Group.svg"
import {CourseCard} from "../card/CourseCard";
import { Carousel } from 'antd';
import Footer from "../footer/Footer";

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
                            <h2>Learn the best JavaScript tools and frameworks from industry pros.</h2>
                            <p>Video tutorials for badass web developers.
                            </p>
                            <br/>
                            <Button ico=">_" text=" Explorar"/>
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
                        <h2>La Plataforma para aprender </h2>
                        <p>En cualquier momento y en cualquier lugar. Aprende sin remordimientos con nuestra garantía de reembolso de 30 días.</p>
                        <p>En cualquier momento y en cualquier lugar. Aprende sin remordimientos con nuestra garantía de reembolso de 30 días.</p>
                        <p>En cualquier momento y en cualquier lugar. Aprende sin remordimientos con nuestra garantía de reembolso de 30 días.</p>
                        <p>En cualquier momento y en cualquier lugar. Aprende sin remordimientos con nuestra garantía de reembolso de 30 días.</p>
                        <br/>
                        <Button ico="</>" text=" Iniciar"/>
                    </div>
                </section>
                <section className="why">
                    <h2>Por qué aprender ? </h2>
                    <div className="box-why">
                        <div className="card-beneficios">
                            <img src={uno} alt=""/>
                            <div className="beneficios">
                                <h3>Incíbete</h3>
                                <p>Asiste a un curso y aprende nuevas tecnologías.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt=""/>
                            <div className="beneficios">
                                <h3>Incíbete</h3>
                                <p>Asiste a un curso y aprende nuevas tecnologías.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt=""/>
                            <div className="beneficios">
                                <h3>Incíbete</h3>
                                <p>Asiste a un curso y aprende nuevas tecnologías.</p>
                            </div>
                        </div>
                        <div className="card-beneficios">
                            <img src={uno} alt=""/>
                            <div className="beneficios">
                                <h3>Incíbete</h3>
                                <p>Asiste a un curso y aprende nuevas tecnologías.</p>
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
                    <h2 className="subtitulos">Conoce a nuestros alumnos</h2>
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
                    <h2 > Join our mailing list to stay up-to-date on upcoming courses and events.
                    </h2>
                    <br/>
                    <div>
                        <input type="text" placeholder="contacto@fixter.org"/>
                        <button>Enviar</button>
                    </div>
                </section>
                <Footer/>
            </section>
        )
    }
}

export default HomeContainer;