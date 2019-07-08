import React from 'react';
import "./Bootcamp.css"
import {Form, Icon, Input} from "antd";
import {Link} from "react-router-dom";


export const StepDos = () => {
    return (
        <div className="step">
            <Form.Item>
                <Input
                    type="text"
                    placeholder="Nombre"
                />
            </Form.Item>
            <Form.Item>

                <Input
                    type="text"
                    placeholder="Apellidos"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>

        </div>
    );
};