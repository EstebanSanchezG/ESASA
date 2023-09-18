import React from 'react';
import { Row, Col, Button } from 'antd';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import LandingCarousel from '../components/LandingCarousel/LandingCarousel.js';
import  '../styles/LandingScreen.css'


export default function LandingPage(){
    
    return(
        <>
            <HeaderEsasa />
            <LandingCarousel autoplay autoplaySpeed={4000} />
            <div className='landing-page-content'>            
                    <div className = 'content-container-landing-page-principal'>
                        <div className='landing-subheader'>
                            TEXTO PRINCIPAL
                        </div>
                        <div class='landing-subdescription'>
                        En este apartado, se colocará algún párrafo introductora a la 
                        empresa. Puede ser alguna noticia grande, un mensaje de calidad,
                        alguna frase, solo es algo que hará al negocio lucir bien. 
                        </div>
                    </div>
                <Row className='conoce-compromiso-ambiental'>
                    <Col flex = "4" >
                        <div className = 'content-container-landing-page'>
                            <div className='landing-subheader'>
                                QUIENES SOMOS
                            </div>
                            <div class='landing-subdescription'>
                            Más de 35 años atendiendo a las grandes empresas de México y EUA,
                            enfrentando alos retos que marca la industria y aportando soluciones
                            de alta calidad.  
                            </div>
                            <Button type='primary' className='landing-page-redirect-button'>Conoce Más</Button>
                        </div>
                    </Col>
                    <Col flex = "5" />  
                </Row>
                <Row className='cotiza-un-servicio'>
                    <Col flex = "5" ></Col>
                    <Col flex = "4">             
                        <div className = 'content-container-landing-page'>
                            <div className='landing-subheader'>
                                SERVICIOS DE TODO
                            </div>
                            <div class='landing-subdescription'>
                            Conoce todos los servicios que ESASA ofrece. Aquí irá un 
                            párrafo que hable sobre los tipos de servicios que se realizan en ESASA. 
                            </div>
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
                        </div> 
                    </Col>
                    <Col flex = "4" />
                </Row>
            </div>
        </>
    )
}
