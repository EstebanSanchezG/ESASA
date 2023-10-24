import {React, useState} from 'react';
import {NavLink} from 'react-router-dom';
import { Row, Col, Button, Menu, Dropdown, Space} from 'antd';
import { DownOutlined} from '@ant-design/icons';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import LandingCarousel from '../components/LandingCarousel/LandingCarousel.js';
import servicios from '../components/DescriptionPage/descripciones-de-servicios.json';
import  '../styles/LandingScreen.css'


export default function LandingPage(){
    const [serviciosData, setServicios] = useState(servicios);
    
    const menuDrop = () => {
        return(
            <Menu className='landing-page-service-dropdown'>
               {serviciosData && serviciosData.map(({ title, id} ) => (
                    <Menu.Item>
                        <NavLink reloadDocument to = {`/servicios/${id}`} key={id}>{title}</NavLink>
                    </Menu.Item>
                    ))}
            </Menu>
        )
    };
            

    return(
        <>
            <HeaderEsasa />
            <div className='page--custom--body'>
                <LandingCarousel autoplay autoplaySpeed={4000} />
                <div className='landing-page-content'> 
                    <Row className='conoce-clientes-calidad-row'>           
                        <div className = 'content-container-landing-page-principal'>
                            <div className='landing-subheader'>
                                AÑOS DE CALIDAD DETRÁS DE CADA PROYECTO
                            </div>
                            <div className='landing-subdescription'>
                            En Esteban Sánchez y Asociados, nos defininmos no por lo que no hacemos,
                            pero por lo que podemos hacer a usted. Hemos cultivado una red de clientes
                            que confian en nosotros para cualquiera necesidad. Aprené más sobre 
                            nuestros clientes.
                            </div>
                        </div>
                    </Row>
                    <Row className='conoce-quien-somos-row'>
                        <Col flex = "5" >
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    QUIENES SOMOS
                                </div>
                                <div className='landing-subdescription'>
                                Llevamos 44 años atendiendo a las grandes empresas de México y EUA,
                                enfrentando alos retos que marca la industria y aportando soluciones
                                de alta calidad.  
                                </div>
                                <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button' 
                                href='/quien-somos'>Conoce Más</Button>
                            </div>
                        </Col>
                        <Col flex = "4" />  
                    </Row>
                    <Row className='observa-servicio-row'>
                        <Col flex = "4" ></Col>
                        <Col flex = "5">             
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    SERVICIOS DE TODO
                                </div>
                                <div className='landing-subdescription'>
                                Conoce todos los servicios que ESASA ofrece. Aquí irá un 
                                párrafo que hable sobre los tipos de servicios que se realizan en ESASA. 
                                </div>
                                <Dropdown overlay={menuDrop} trigger={['click']}>                                                                  
                                    <Button type='primary' style={{background:"#348fde"}} 
                                    className='landing-page-redirect-button'>
                                        <Space>
                                            Descubre Servicios
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </div> 
                        </Col>
                    </Row>
                    <Row className='contacto-a-nosotros-row'>
                        <Col flex = "5" >
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    ESTEMOS EN CONTACTO
                                </div>
                                <div className='landing-subdescription'>
                                Un párrafo que invita al usuario a contactar a la empresa y
                                poder cotizar un proyecto o realizar una consulta. 
                                </div>
                                <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button' href='/contacto'>Solicítanos</Button>
                            </div> 
                        </Col>
                        <Col flex = "4" />
                    </Row>
                </div>
            </div>
        </>
    )
}
