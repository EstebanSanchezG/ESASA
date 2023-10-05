import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import OfficeLocationHMO from '../components/OfficeLocationHMO/OfficeLocationHMO.js';
import {Row, Button, Select, Input, Form, Col} from 'antd';
import "../styles/ContactStyle.css"

const StyleContact = {
    textAlign: "center",
};

export default function ContactPage(){
    //const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Gracias por ingresar: ', values);
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
                    <Form 
                    layout='vertical'
                    name="Solicita Consulta o Dudas"
                    onFinish={onFinish}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 18}}
                    style={{maxWidth:1000, marginTop:"35px", width:"100%", marginLeft:"200px" }}
                    scrollToFirstError>
                        
                        <Form.Item name="name" label="Nombre"
                        rules={[{
                            required: true,
                            message: 'Favor de añadir un nombre de empresa o individuo',
                            whitespace: true,
                        },]}>
                            <Input size='large' placeholder="Nombre de Individuo/Empresa"/>
                        </Form.Item>
                        
                        <Form.Item name="email" label="E-mail"
                        rules={[{
                            type: 'email',
                            message: 'Esto no es un correo válido, intente de nuevo',
                        },
                        {
                            required: true,
                            message: 'Ingrese su correo por favor',
                        },]}>
                            <Input placeholder='Tu correo electrónico' size='large'/>
                        </Form.Item>

                        <Form.Item name="descripción" label="Descripción de Asunto"
                        rules={[{
                            required: true,
                            message: 'Ingrese motivo de consulta',
                        },]}>
                            <Input.TextArea showCount maxLength={300} size='large'
                            placholder="Describa la razón de consulta aquí"
                            style={{height:300}}/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" 
                            style={{display:"flex",justifyContent:"center"}}>
                            Enviar Solicitud
                            </Button>
                        </Form.Item>    
                    </Form>
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