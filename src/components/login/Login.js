import React, { Component } from 'react';
import "./Login.css";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";

class Login extends Component {


    render() {

        return (
            <div >
                <div className="black"></div>
                    <div className="login">
                        <div className="login-box">
                            <h3 className="sub">Inicia Sesión</h3>
                            <Form className="login-form">
                                <div className="redes_login">
                                    <div className="circle_f" >
                                        <FontAwesome name="facebook" />
                                    </div>
                                    <div className="circle_g" >
                                        <FontAwesome name="google" />
                                    </div>
                                </div>
                                <div className="division">
                                    <hr className="line_log"/> or <hr className="line_log"/>
                                </div>
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
                                            placeholder="Contraseña"
                                        />
                                </Form.Item>
                                <Form.Item style={{textAlign:"center"}}>

                                    <a className="login-form-forgot" href="">
                                       <p className="forget">¿Olvidaste tu contraseña?</p>
                                    </a>
                                    <br/>
                                    <div>
                                        <button className="btn-login">Iniciar</button>
                                    </div>

                                    <Link to="/registro"  className="regist" >Crea una cuenta</Link>
                                </Form.Item>
                            </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;