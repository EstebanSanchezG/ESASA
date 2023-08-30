import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import {Row, Button, Select, Input, Form} from 'antd';
import "../styles/ContactStyle.css"

const StyleContact = {
    textAlign: "center",
};
const [formLayout, setFormLayout] = useState('horizontal');
const formItemLayout = {
    
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

export default function ContactPage(){
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return(
        <>
            <HeaderEsasa />
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

                <Form {...formItemLayout}
                form={form}
                name="Solicita Consulta o Dudas"
                onFinish={onFinish}
                style={{maxWidth:600, marginTop:35}}
                scrollToFirstError>
                    
                    <Form.Item name="name" label="Company or Individual Name"
                    rules={[{
                        required: true,
                        message: 'Favor de añadir un nombre de empresa o individuo',
                        whitespace: true,
                    },]}>
                        <Input />
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
                        <Input />
                    </Form.Item>

                    <Form.Item name="descripción" label="Descripción de Asunto"
                    rules={[{
                        required: true,
                        message: 'Ingrese motivo de consulta',
                    },]}>
                        <Input.TextArea showCount maxLength={300} />
                    </Form.Item>

                </Form>
            </div>
        </>
    )
}