import React, { useState, useRef } from 'react';
import { useForm } from 'antd/es/form/Form.js';
import ReactDOM from 'react-dom'
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import OfficeLocationHMO from '../components/OfficeLocationHMO/OfficeLocationHMO.js';
import {Row, Button, Select, Input, Form, Col} from 'antd';
import emailjs from '@emailjs/browser';
import "../styles/ContactStyle.css"


const StyleContact = {
    textAlign: "center",
};

export default function ContactPage(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vkdbeyc', 'template_sl6xu1r', form.current, 'Kb-GTy5aTaAC5wuTL')
        .then((result) => {
            console.log(result.text);
            window.location.reload(false)
            alert("Su solicitud se ha enviado correctamente")
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <>
            <HeaderEsasa />
            <body>
            <div className='page--custom--body'>
            <div className='contentContacto'>
                <Row style={StyleContact}>
                    <div className='contacText'>
                        <div className='contacTitle'>
                            ¡Solicita una cotización hoy!
                        </div>
                        <div className='contacDescrip'>
                            Si desea que le realizemos un proyecto, le cotizemos un estimado,
                            o solo tiene dudas sobre lo que hacemos, puede envíar un solicitud
                            aquí mismo. Recibiremos y atenderemos a su necesidad con brevedad.
                        </div>
                    </div>
                </Row>

                <div className='contact-form'>
                    <form name="Solicita Consulta o Dudas" ref={form} onSubmit={sendEmail}>     
                        <label className='contact-label--form'>Nombre Completo</label>
                        <input className='contact-input--form' type="text" name="user_name" required
                        onInvalid={e => e.target.setCustomValidity('Ingrese su nombre aquí')}
                        onInput={e => e.target.setCustomValidity('')}/>

                        <label className='contact-label--form'>Email</label>
                        <input className='contact-input--form' type="email" name="user_email" required
                        onInvalid={e => e.target.setCustomValidity('Ingrese un correo válido')}
                        onInput={e => e.target.setCustomValidity('')}/>
                        
                        <label className='contact-label--form'>Mensaje</label>
                        <textarea name="user_message" required
                        onInvalid={e => e.target.setCustomValidity('Se requiere conocer su necesidad')}
                        onInput={e => e.target.setCustomValidity('')}/>

                        <input  className="submit-contact-form" type="submit" value="Send"/>
                    </form>   
                </div>

                <div className='contact-points' style={{marginTop:35}}>
                    <div className='contact-point-title'>
                        BLVD LUIS DONALDO COLOSIO 457 A, VILLA SATÉLITE,<br/>
                        HERMOSILLO, SON, C.P. 83200<br/>
                        <br/>
                        662 256 4477
                    </div>
                    <div className='contact-point-text'>
                        jorge@estebansanchez.com<br />
                        Jorge Esteban Sanchez  
                    </div>
                </div>
                <OfficeLocationHMO></OfficeLocationHMO>
            </div>
            </div>
            </body>
        </>
    )
}