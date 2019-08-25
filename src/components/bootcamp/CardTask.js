import React from 'react';
import "./Bootcamp.css"



export const CardTask = ({week, date, name, descript}) => {
    return (
        <section className="card-task">
            <div style={{padding:"4%"}}>
                <h2>{week}</h2>
                <p>{date}</p>
            </div>
            <button className="complete">
                <p>COMPLETAR</p>
            </button>


        </section>
    );
};