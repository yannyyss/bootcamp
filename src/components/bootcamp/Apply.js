import React, { Component } from 'react';
import "./Bootcamp.css"
import { Steps, Button, message } from 'antd';
import {StepUno} from "./StepUno"
import {StepDos} from "./StepDos"
import {StepTres} from "./StepTres";

const { Step } = Steps;

const steps = [
    {
        title: 'Summary',
        content: <StepUno/>,
    },
    {
        title: 'Datos',
        content: <StepDos/>,
    },
    {
        title: 'Confirmación',
        content: <StepTres/>,
    },
];

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;

        return (
            <div >
                <div className="black"></div>
                <div className="apply">
                    <div className="apply-box">
                        <div>
                            <Steps current={current} >
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Anterior
                                    </Button>
                                )}{current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                        Siguiente
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                        Confirmar
                                    </Button>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Apply;