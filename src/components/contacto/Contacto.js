import React, { Component } from 'react';
import "./Contacto.css"
import ButtonWhite from "../common/ButtonWhite"

class Contacto extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="">
                <div className="black"></div>
                <div className="contacto">
                    <div className="map">
                        <iframe title="map-fixter"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8548848559817!2d-99.1632528855843!3d19.418674986892213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3a3e482343%3A0x8bff98d2fed2edfc!2sJalapa+100%2C+Roma+Nte.%2C+06700+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1561928145598!5m2!1ses-419!2smx"
                           frameBorder={0} style={{border:"0"}} allowFullScreen="true" ></iframe>
                    </div>
                    <div className="contact">
                        <p> <strong style={{fontSize:"18px"}}>¿Quieres ponerte en contacto con nosotros?</strong> <br/> Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                        <input placeholder="Nombre" type="text" required={true}/>
                        <input placeholder="Email" type="text" required={true}/>
                        <input placeholder="Teléfono" type="number"/>
                        <textarea placeholder="Mensaje" type="text"/>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <ButtonWhite text="ENVIAR"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contacto;