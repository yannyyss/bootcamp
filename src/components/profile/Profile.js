import React, { useState, useEffect } from 'react';
import "./Profile.css"
import { Tabs, Input } from 'antd';
import { UserCourses } from "./UserCourses";
import { UserBootcamp } from "./UserBootcamp";
import { UserBooks } from "./UserBooks";
import { UserEvents } from "./UserEvents";

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

let photo = "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/56182421_2071292546299456_5483132443244363776_o.jpg?_nc_cat=103&_nc_oc=AQlzvSvRjV3VJKeZMVeHYbvuFokkxJNTZjn-HwHRVhg69AOO1kVJMybsT04HcActbpY&_nc_ht=scontent.fmex6-1.fna&oh=551c5407a88f347d7b5088bdfdf40c5f&oe=5DAD6FFD"

export const Profile = ({ bootcamps, updateProfile, displayName, photoURL = photo, country, city, email, role, }) => {

    let [profile, setProfile] = useState({})

    useEffect(() => {
        setProfile({ displayName })
    }, [])

    function onChange({ target: { name, value } }) {
        setProfile({ ...profile, [name]: value })
    }

    return (
        <section className="perfil">
            <div style={{ textAlign: "center" }} className="custome">
                <div className="user-portada">
                </div>
                <div className="fl">
                    <div style={{ backgroundImage: `url("${photoURL}")` }} className="user-photo"></div>
                </div>
                <button onClick={() => updateProfile(profile)} style={styles.button} >Actualizar Perfil</button>
                <div className="user-descript">
                    <Input
                        name="displayName"
                        onChange={onChange}
                        value={profile.displayName}
                        className="user-descript-input"
                        placeholder="Nombre para certificados"
                    />
                    {/* <Input
                        name="email"
                        onChange={onChange}
                        value={profile.email}
                        style={{ marginTop: 10 }}
                        className="user-descript-input"
                        placeholder="Correo electrónico para notificaciones"
                    /> */}
                    <p style={{ marginTop: 10 }} >{email}</p>
                </div>

            </div>
            <section className="contenido">
                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane tab="Bootcamp" key="1">
                        <UserBootcamp bootcamps={bootcamps} />
                    </TabPane>
                    <TabPane tab="Cursos" key="2">
                        <UserCourses />
                    </TabPane>
                    <TabPane tab="Libros" key="3">
                        <UserBooks />
                    </TabPane>
                    <TabPane tab="Eventos" key="4">
                        <UserEvents />
                    </TabPane>

                </Tabs>
            </section>
        </section>
    );
};

let styles = {
    button: {
        background: "#962f35",
        color: "white",
        cursor: "pointer",
        //  position: "absolute",
        // margin: "220px 10px",
        top: 0, left: 0,
        border: "none",
        padding: "5px 10px"
    }
}