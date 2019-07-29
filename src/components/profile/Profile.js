import React from 'react';
import "./Profile.css"
import { Tabs } from 'antd';
import {UserCourses} from "./UserCourses";
import {UserBootcamp} from "./UserBootcamp";
import {UserBooks} from "./UserBooks";
import {UserEvents} from "./UserEvents";

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

let photo = "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/56182421_2071292546299456_5483132443244363776_o.jpg?_nc_cat=103&_nc_oc=AQlzvSvRjV3VJKeZMVeHYbvuFokkxJNTZjn-HwHRVhg69AOO1kVJMybsT04HcActbpY&_nc_ht=scontent.fmex6-1.fna&oh=551c5407a88f347d7b5088bdfdf40c5f&oe=5DAD6FFD"

export const Profile = () => {
    return (
        <section className="perfil">
            <div className="custome">
                <div className="user-portada">

                </div>
                <div className="fl">
                    <div style={{backgroundImage:`url("${photo}")`}} className="user-photo"></div>
                </div>
                <div className="user-descript">
                    <h2>Brenda Gonzalez Ortega</h2>
                    <p>brenda@fixter.org</p>
                </div>

            </div>
            <section className="contenido">
                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane tab="Cursos" key="1">
                        <UserCourses/>
                    </TabPane>
                    <TabPane tab="Bootcamp" key="2">
                        <UserBootcamp/>
                    </TabPane>
                    <TabPane tab="Libros" key="3">
                        <UserBooks/>
                    </TabPane>
                    <TabPane tab="Eventos" key="4">
                        <UserEvents/>
                    </TabPane>

                </Tabs>
            </section>
        </section>
    );
};