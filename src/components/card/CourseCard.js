import React from 'react';
import "./CourseCard.css"
import badge from "../../assets/badget1.png"


export const CourseCard = () => {


    return (
        <div className="course-card">
            <div className="box-badge">
                <img className="badge" src={badge} alt="badge-curso"/>
            </div>
            <hr/>
            <div className="box-curso">
                <div className="author-photo" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64253119_2199919590103417_3376381376021397504_n.jpg?_nc_cat=111&_nc_oc=AQmnpwdGmMvQxzcFHhL-z0oB6eFZUOCYz2jbguwQCfEKlGCvQYFv0q19ysD9lWhvIsc&_nc_ht=scontent.fmex6-1.fna&oh=4afd8190cf626eebf98fdcd68f81821f&oe=5D84A0CC")`}}>
                </div>
                <div className="autor-info">
                    <h4>Brneda Ortega</h4>
                    <p>10 lecciones <span>&bull;</span>  25 min</p>
                </div>
            </div>
            <div className="price">
                <span>$300</span>
            </div>
        </div>
    );
};