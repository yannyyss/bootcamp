import React, { Component } from 'react';
import "./Courses.css"
import badge from "../../assets/badget1.png"
import {Link} from "react-router-dom";

import { Collapse } from 'antd';
import {CardVideo} from "../card/CardVideo";

const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
    </p>
);

export const CoursesDetail = () => {
    return (
        <section>
            <div className="black"></div>
            <div className="flex">
                <div className="detail-descript">
                    <h2>Introducción a Firebase</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis
                        consequatur cumque cupiditate dicta dolor ducimus earum est harum inventore,
                        ipsum laboriosam maiores odit quidem reiciendis rem soluta suscipit unde.
                    </p>
                    <p>10 lecciones <span>|</span>  25 min</p>
                    <div className="detail-author">
                        <div className="author-photo" style={{backgroundImage:`url("https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/64253119_2199919590103417_3376381376021397504_n.jpg?_nc_cat=111&_nc_oc=AQmnpwdGmMvQxzcFHhL-z0oB6eFZUOCYz2jbguwQCfEKlGCvQYFv0q19ysD9lWhvIsc&_nc_ht=scontent.fmex6-1.fna&oh=4afd8190cf626eebf98fdcd68f81821f&oe=5D84A0CC")`}}>
                        </div>
                        <h4>Brenda Ortega</h4>
                    </div>

                </div>
                <div className="detail-badge">
                    <img src={badge} alt=""/>
                </div>
            </div>
            <hr className="divider"/>
            <div className=" box-detail">
                <h2>Programa</h2>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Introducción" key="1" style={{fontSize:"18px"}}>
                        <div id="box-videos">
                            <CardVideo/>
                        </div>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={{fontSize:"18px"}}>
                        {text}
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={{fontSize:"18px"}}>
                        {text}
                    </Panel>
                </Collapse>
            </div>
        </section>
    );
};