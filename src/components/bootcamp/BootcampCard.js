import React from 'react'
import FontAwesome from "react-fontawesome"
import js from "../../assets/JavaScript-logo.png"



export default function BootcampCard({ title, students = 100 }) {
    return (
        <div style={{ maxWidth: 320 }} className="camp-info">
            <div className="camp-banner" style={{ backgroundImage: `url(${"https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28698604_1973144766082686_589124668727305128_o.jpg?_nc_cat=106&_nc_oc=AQnwFz_vHgdIYAyTU1FxakCgl3fkxvwbQBibZBanSW6jQ-KjRsV6IQnM-J1yFsWiD9M&_nc_ht=scontent.fmex6-1.fna&oh=1d59fb9f541cbc8f0126e1278b7d13b4&oe=5DA4579E"})` }}>

            </div>
            <div className="camp-avatar">
                <img src={js} alt="logo-javascript" />
            </div>
            <div style={{ padding: "0 4%" }}>
                <h3>Bootcamp Online: {title}</h3>
                <p>Crea las bases que necesitas para convertirte en desarrollador web y comenzar tu carrera profesional. ⚛️</p>
                <p> <FontAwesome name="user" /> {students.length} Estudiantes</p>
                <p> <FontAwesome name="calendar" />
                    4 semanas Disponible: <strong> 21 Octubre 2019</strong>
                </p>
                <p> <FontAwesome name="file" /> Exámen final  </p>
                <button className="btn-in">Inscrito</button>
            </div>
        </div>
    )
}