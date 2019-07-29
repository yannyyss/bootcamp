import React from 'react';
import "./Bootcamp.css"
import {Form, Input} from "antd";


export const StepTres = () => {
    return (
        <div className="step">
            <Form.Item>
                <Input
                    placeholder="Titular de la tarjeta"
                />
            </Form.Item>
            <Form.Item>

                <Input
                    placeholder="Número de tarjeta"
                />
            </Form.Item>
            <div className="pay-fl">
                <label htmlFor="">
                    Fecha de expiración
                    <Input
                        placeholder="Fecha de expiración"
                    />
                </label>
                <label htmlFor="">
                    Código de seguridad
                    <Input
                        placeholder="VVV"
                    />
                </label>
                <label htmlFor="">
                    Fecha de expiración
                    <Input
                        type="select"
                        placeholder="Fecha de expiración"
                    />
                </label>


            </div>

        </div>
    );
};