import React from 'react';
import "./Bootcamp.css"



export const CardLessons = ({week, date, name, descript}) => {
    return (
        <section className="card-l">
            <div>
                <h2>{week}</h2>
                <p>{date}</p>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{descript}</p>
            </div>
            <div>
                <p className="btn-see">Ver</p>

            </div>
        </section>
    );
};