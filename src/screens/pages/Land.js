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
                <Row className='conoce-mas-nosotros'>            
                    <div className = 'content-container-landing-page'>
                        <div className='landing-subheader'>
                            EXPERIENCIA
                        </div>
                        <div class='landing-subdescription'>
                        Más de 35 años atendiendo a las grandes empresas
                        del sector industrial nacional e internacional colocan a
                        Esteban Sánchez y Asociados como una de las
                        empresas de Ingeniería Electromecánica más exitosas
                        de México.  
                        </div>
                    </div> 
                </Row>
                <Row className='conoce-compromiso-ambiental'>
                    <Col flex = "4" ><div className = 'content-container-landing-page'>
                            <div className='landing-subheader'>
                                EXPERIENCIA
                            </div>
                            <div class='landing-subdescription'>
                            Más de 35 años atendiendo a las grandes empresas
                            del sector industrial nacional e internacional colocan a
                            Esteban Sánchez y Asociados como una de las
                            empresas de Ingeniería Electromecánica más exitosas
                            de México.  
                            </div>
                        </div>
                    </Col>
                    <Col flex = "5" />  
                </Row>
                <Row className='cotiza-un-servicio'>
                    <Col flex = "5" ></Col>
                    <Col flex = "4">             
                        <div className = 'content-container-landing-page'>
                            <div className='landing-subheader'>
                                EXPERIENCIA
                            </div>
                            <div class='landing-subdescription'>
                            Más de 35 años atendiendo a las grandes empresas
                            del sector industrial nacional e internacional colocan a
                            Esteban Sánchez y Asociados como una de las
                            empresas de Ingeniería Electromecánica más exitosas
                            de México.  
                            </div>
                        </div> 
                    </Col>
                </Row>
                <Row className='busca-una-oportunidad'>
                    <Col flex = "5" >
                        <div className = 'content-container-landing-page'>
                            <div className='landing-subheader'>
                                EXPERIENCIA
                            </div>
                            <div class='landing-subdescription'>
                            Más de 35 años atendiendo a las grandes empresas
                            del sector industrial nacional e internacional colocan a
                            Esteban Sánchez y Asociados como una de las
                            empresas de Ingeniería Electromecánica más exitosas
                            de México.  
                            </div>
                        </div> 
                    </Col>
                    <Col flex = "4" />
                </Row>
            </div>
        </>
    )
}
