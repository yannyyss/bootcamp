import React from 'react';
import "./Bootcamp.css"
import {Form, Input} from "antd";


export const StepDos = () => {
    return (
        <div className="step">
            <p>Escribe tu nombre completo, ya que así aparecerá en tu certificado</p>

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