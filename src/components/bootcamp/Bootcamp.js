import React, { Component } from 'react';
import Button from "../common/Button"
import "./Bootcamp.css"
import { Tabs, Select } from 'antd';
import ButtonWhite from "../common/ButtonWhite"
import {Link} from "react-router-dom";


const { TabPane } = Tabs;
const { Option } = Select;

class Bootcamp extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section className="bootcamp">
                <div className="intro-bootcamp">
                    <div className="bootcamp-descript">
                        <div>
                            <h2 style={{textAlign:"left"}} className="subtitulos">Online Bootcamp</h2>
                            <p>Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. Whether you’re new to coding, adding more skills, or advancing your career, 10 hours a week will prepare you for your ideal developer job.</p>
                            <p>19 de Agosto | 12:00 pm </p>
                            <br/>
                            <Link to="/apply">
                                <Button ico="{ }" text="Inscribirme"/>
                            </Link>
                        </div>
                    </div>
                    <div className="bootcamp-img">

                    </div>
                </div>
                <div className="summary">
                    <h2 style={{textAlign:"left"}} className="subtitulos">Programa</h2>
                    <p className="textos">Establece las bases de programación y preparate para una este programa creado especialmente para
                        principiantes que quieren incursionar en el mundo del desarrollo web.
                      </p>
                    <br/>
                    <div>
                        <Tabs tabPosition="left">
                            <TabPane tab="Semana 0" key="1">
                                <p>En la Semana 0 aprenderás como funciona un bootcamp online, instalaremos todas las herramientas que utilizaremos
                                    durante el curso.</p>

                            </TabPane>
                            <TabPane tab="Semana 1" key="2">
                                <h4>  En la Semana 1 "Introducción al Desarrollo Web:</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende las bases del desarrollo web</p>
                                <p><span>&bull;</span> Aprende a utilizar y customizar nuestro editor de código</p>
                                <p><span>&bull;</span> Maqueta tu primer sitio web on HTML</p>
                                <p><span>&bull;</span> Estiliza tu sitio web con CSS</p>
                                <p><span>&bull;</span> Aprende las bases de JavaScript</p>
                                <p><span>&bull;</span> Crea tu mini-bio con HTML5</p>
                            </TabPane>
                            <TabPane tab="Semana 2" key="3">
                                <h4>  En la Semana 2 "HTML y CSS":</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende como aplicar las propiedades de CSS</p>
                                <p><span>&bull;</span> Aprende los tipos de selectores</p>
                                <p><span>&bull;</span> Aprende a utilizar electores avanzados</p>
                                <p><span>&bull;</span> FlexBox</p>
                                <p><span>&bull;</span> Practicando CSS</p>

                            </TabPane>
                            <TabPane tab="Semana 3" key="4">
                                <h4> En la Semana 3 "JavaScript":</h4>
                                <br/>
                                <p><span>&bull;</span> Aprende cómo manipular el DOM</p>
                                <p><span>&bull;</span> Aprende qué son los nodos</p>
                                <p><span>&bull;</span> Aprende a modificar los nodos</p>
                                <p><span>&bull;</span> Vanilla Js</p>
                                <p><span>&bull;</span> Crea un videojuego con JavaScript</p>

                            </TabPane>
                            <TabPane tab="Semana 4" key="5">
                                <h4> En la Semana 4 "Deployment":</h4>
                                <br/>
                                <p><span>&bull;</span> Cómo servir una página web?</p>
                                <p><span>&bull;</span> Servidor Local</p>
                                <p><span>&bull;</span> Aprende a comprimir archivos con WebPack</p>
                                <p><span>&bull;</span> Pública tu videojuego</p>
                                <p><span>&bull;</span> Qué sigue?t</p>
                                <p><span>&bull;</span> Exámen final</p>

                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="how">
                    <h2 className="subtitulos">Cómo funciona un bootcamp online?</h2>
                    <div className="box-steps">
                        <div className="steps">
                            <div className="step-img">
                                <div className="circle-white">

                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>With real world projects</h3>
                                <p>Inscríbete al bootcamp antes del día</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img">
                                <div className="circle-white">

                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>With real world projects</h3>
                                <p>Inscríbete al bootcamp antes del día</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img">
                                <div className="circle-white">

                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>With real world projects</h3>
                                <p>Inscríbete al bootcamp antes del día</p>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step-img">
                                <div className="circle-white">

                                </div>
                            </div>
                            <div className="step-descript">
                                <h3>With real world projects</h3>
                                <p>Inscríbete al bootcamp antes del día</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invite">
                    <h2 className="subtitulos" style={{marginBottom:"20px"}}>Quieres completar tu aprendizaje?</h2>

                    <p>Explora nuestro catálogo de cursos en línea, y aprende a utilziar las herramientas más utilziadas del
                        desarrollo web.</p>
                    <p>Explora nuestro catálogo de cursos en línea, y aprende a utilziar las herramientas más utilziadas del
                        desarrollo web Explora nuestro catálogo de cursos en línea, y aprende a utilziar las herramientas más utilziadas del
                        desarrollo web.</p>
                    <br/>
                    <ButtonWhite ico="#" text="EXPLORAR"/>
                </div>
            </section>
        )
    }
}

export default Bootcamp;