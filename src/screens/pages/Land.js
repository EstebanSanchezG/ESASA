import React from 'react';
import { Row, Col, Button } from 'antd';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import LandingCarousel from '../components/LandingCarousel/LandingCarousel.js';
import  '../styles/LandingScreen.css'


export default function LandingPage(){
    
    return(
        <>
            <HeaderEsasa />
            <body>
            <div className='page--custom--body'>
                <LandingCarousel autoplay autoplaySpeed={4000} />
                <div className='landing-page-content'> 
                    <Row className='conoce-clientes-calidad-row'>           
                        <div className = 'content-container-landing-page-principal'>
                            <div className='landing-subheader'>
                                AÑOS DE CALIDAD DETRÁS DE CADA PROYECTO
                            </div>
                            <div class='landing-subdescription'>
                            En Esteban Sánchez y Asociados, nos defininmos no por lo que no hacemos,
                            pero por lo que podemos hacer a usted. Hemos cultivado una red de clientes
                            que confian en nosotros para cualquiera necesidad. Aprené más sobre 
                            nuestros clientes.
                            </div>
                            <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button'>Conoce Más</Button>
                        </div>
                    </Row>
                    <Row className='conoce-quien-somos-row'>
                        <Col flex = "5" >
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    QUIENES SOMOS
                                </div>
                                <div class='landing-subdescription'>
                                Llevamos 44 años atendiendo a las grandes empresas de México y EUA,
                                enfrentando alos retos que marca la industria y aportando soluciones
                                de alta calidad.  
                                </div>
                                <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button'>Conoce Más</Button>
                            </div>
                        </Col>
                        <Col flex = "4" />  
                    </Row>
                    <Row className='cotiza-un-servicio'>
                        <Col flex = "4" ></Col>
                        <Col flex = "5">             
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    SERVICIOS DE TODO
                                </div>
                                <div class='landing-subdescription'>
                                Conoce todos los servicios que ESASA ofrece. Aquí irá un 
                                párrafo que hable sobre los tipos de servicios que se realizan en ESASA. 
                                </div>
                                <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button'>Descubre Servicios</Button>
                            </div> 
                        </Col>
                    </Row>
                    <Row className='busca-una-oportunidad'>
                        <Col flex = "5" >
                            <div className = 'content-container-landing-page'>
                                <div className='landing-subheader'>
                                    ESTEMOS EN CONTACTO
                                </div>
                                <div class='landing-subdescription'>
                                Un párrafo que invita al usuario a contactar a la empresa y
                                poder cotizar un proyecto o realizar una consulta. 
                                </div>
                                <Button type='primary' style={{background:"#348fde"}}
                                className='landing-page-redirect-button'>Solicítanos</Button>
                            </div> 
                        </Col>
                        <Col flex = "4" />
                    </Row>
                </div>
            </div>
            </body>
        </>
    )
}
