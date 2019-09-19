import React, { useEffect } from 'react';
import "./Bootcamp.css"
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { CardLessons } from "./CardLessons";
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"
import { Tabs, Spin } from 'antd';
import { CardTask } from "./CardTask";
import { connect } from 'react-redux'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
const BD = ({ subscribed, match, bootcamp = { students: 0 } }) => {

    useEffect(() => {
        let { id } = match.params
    }, [])

    return (
        <section className="camp">
            <div className="camp-descript">
                <div className="camp-info">
                    <div className="camp-banner" style={{ backgroundImage: `url(${"https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28698604_1973144766082686_589124668727305128_o.jpg?_nc_cat=106&_nc_oc=AQnwFz_vHgdIYAyTU1FxakCgl3fkxvwbQBibZBanSW6jQ-KjRsV6IQnM-J1yFsWiD9M&_nc_ht=scontent.fmex6-1.fna&oh=1d59fb9f541cbc8f0126e1278b7d13b4&oe=5DA4579E"})` }}>

                    </div>
                    <div className="camp-avatar">
                        <img src={js} alt="logo-javascript" />
                    </div>
                    <div style={{ padding: "0 4%" }}>
                        <h3>Bootcamp Online: {bootcamp.title}</h3>
                        <p>{bootcamp.description} ⚛️</p>
                        <p> <FontAwesome name="user" /> {bootcamp.students.length + 152} Estudiantes</p>
                        <p> <FontAwesome name="calendar" /> 5 semanas </p>
                        <p> <FontAwesome name="file" /> Exámen final  </p>
                        {subscribed ? <button className="btn-in">Inscrito</button> : <button className="btn-in">Inscribete</button>}
                    </div>
                </div>
                <div className="camp-dates">
                    <div><p>Semana 1  </p><FontAwesome name="chevron-right" /></div>
                    <div><p>Semana 2 </p><FontAwesome name="chevron-right" /> </div>
                    <div><p>Semana 3</p> <FontAwesome name="chevron-right" /> </div>
                    <div><p>Semana 4  </p><FontAwesome name="chevron-right" /></div>
                </div>
            </div>
            <div className="camp-task">
                <Tabs defaultActiveKey="1" onChange={callback} >
                    <TabPane tab="Lecciones" key="1">
                        <div id="tp" className="summary">
                            <p className="textos">El Bootcamp tiene una duración de 5 semanas. ¡Recuerda! Semanlamente se liberará
                                el contenido correspondiente, por lo que aunque siempre tendrás acceso a las lecciones en video, no podrás subir tus tareas
                                al terminar la semana.
                            </p>
                            <div className="box-lessons">
                                <CardLessons week="Semana 0" date="21 al 27 de Octubre 2019" name="Introducción al Desarrollo Web" descript="Prework" />

                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab="Tareas" key="2">
                        <div className="box-lessons" style={{ padding: " 1% 2%" }}>
                            <CardTask week="Semana 0" date="Tarea 1: Algoritmia" name="Introducción al Desarrollo Web" descript="Prework" />
                        </div>
                    </TabPane>
                    <TabPane tab="Exámen" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>,




            </div>
        </section>
    );
};

function mapState({ bootcamps: { object }, user: { bootcamps } }, { match: { params: { id } } }) {
    let bootcamp = object[id]
    let subscribed
    if (bootcamp) subscribed = bootcamps.find(b => b._id === bootcamp._id)
    return {
        bootcamp,
        subscribed: Boolean(subscribed)
    }
}

export const BootcampDetail = connect(mapState, {})(BD)
