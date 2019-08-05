import React, { Component } from 'react';
import "./Home.css"
import FontAwesome from "react-fontawesome"

class Team extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <section >
                <meta
                    name="description"
                    content="En FixterGeek estamos comprometidos con la educación tecnológica,
                    estamos comprometidos con contribuir a la formación de desarrolladores en México."
                />
                <meta
                    name="keywords"
                    content="cursos, capacitación, react, angular, tecnología, programación, javascript, python, php, online, fixtergeek"
                />
                <title>Fixter Team</title>
                <div className="black"></div>
                <div className="team">
                <h2 className="subtitulos">Conoce a nuestro equipo</h2>
                <p>En FixterGeek estamos comprometidos con la educación tecnológica,
                    estamos comprometidos con contribuir a la formación de desarrolladores en México.
                </p>
                    <br/>
                <div className="box-line">
                    <div className="team-line">
                    <h3>Founders</h3></div>
                    <div className="team-members">

                    <hr/>
                    </div>
                </div>
                <div className="box-miembros">
                    <div className="box_team">
                        <div className="cuadro brenda">
                        </div>
                        <h4>Brenda Ortega</h4>
                        <a href="https://www.facebook.com/brenda.ortega.7121">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/brenda-ort/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team">
                        <div className="cuadro bliss">
                        </div>
                        <h4>Héctor Bliss</h4>
                        <a href="https://www.facebook.com/hector.bliss">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/hectorbliss/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>

                </div>

                    <div className="box-miembros just">
                    <div className="box-line">
                        <div className="team-line">
                            <h3>Miembros</h3></div>
                        <div className="team-members">

                            <hr/>
                        </div>
                    </div>
                    <div className="box_team">
                        <div className="cuadro david">
                        </div>
                        <h4>David Zavala</h4>
                        <a href="https://www.facebook.com/david.pzmck">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                    <div className="box_team ">
                        <div className="cuadro oswaldo">
                        </div>
                        <h4>Oswaldo Martinez</h4>
                        <a href="https://www.facebook.com/oswwaldom">
                            <FontAwesome name="facebook-square" />
                        </a>
                        <a href="https://www.linkedin.com/in/oswaldinho24k/" target="blank">
                            <FontAwesome name="linkedin"/>
                        </a>
                    </div>
                        <div className="box_team">
                            <div className="cuadro martin">
                            </div>
                            <h4>Martin Melo</h4>
                            <a href="https://www.facebook.com/david.pzmck">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                        <div className="box_team">
                            <div className="cuadro oso">
                            </div>
                            <h4>Oscar Villeda</h4>
                            <a href="https://www.facebook.com/oscaruve">
                                <FontAwesome name="facebook-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/david-zavala-bartolome/" target="blank">
                                <FontAwesome name="linkedin"/>
                            </a>
                        </div>
                </div>
                {/*<p>Fixter crea productos digitales, desde sitios
                    web y aplicaciones móviles, hasta servicios y herramientas empresariales.
                    Somos un equipo de desarrolladores enfocado en ofrecer productos digitales a la medida,
                    y comprometido con la satisfacciónd e nuetsros clientes.</p>*/}



            </div>
            </section>
        )
    }
}

export default Team;