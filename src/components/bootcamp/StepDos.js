import React from 'react';
import "./Bootcamp.css"
import {Form, Input} from "antd";


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