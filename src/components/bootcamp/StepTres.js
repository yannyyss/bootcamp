import React from 'react';
import "./Bootcamp.css"
import {Form, Icon, Input} from "antd";
import {Link} from "react-router-dom";


export const StepTres = () => {
    return (
        <div className="step">
            <Form.Item>
                <Input
                    placeholder="Nombre"
                />
            </Form.Item>
            <Form.Item>

                <Input
                    placeholder="Apellidos"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder="Email"
                />
            </Form.Item>

        </div>
    );
};