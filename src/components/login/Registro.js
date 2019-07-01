import React, { Component } from 'react';
import "./Login.css";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";

class Registro extends Component {


    render() {

        return (
            <div >
                <div className="black"></div>
                <div className="login">
                    <div className="login-box">
                        <h3 className="sub">Completa el registro</h3>
                        <br/>
                        <Form className="login-form">

                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item>

                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Contrasena"
                                />
                            </Form.Item>
                            <Form.Item>

                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Repite la contrasena"
                                />
                            </Form.Item>
                            <Form.Item style={{textAlign:"center"}}>

                                <div>
                                    <button className="btn-login">Iniciar</button>
                                </div>
                                <Link to="/login"  className="regist" >Ya tengo uan cuenta</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registro;