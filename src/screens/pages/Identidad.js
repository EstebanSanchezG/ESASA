import React from 'react';
import ReactDOM from 'react-dom'
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import FadeInSection from '../functions/FadeIn/index.js'
import {Col, Divider, Row} from 'antd';
import "../styles/IdentidadStyle.css"

export default function IdentityPage(){
    
    return(
        <>
            <HeaderEsasa />
            <div className='contentIdentidad'>
                <FadeInSection>
                    <div className='somos-box'>
                        <Row className='expBackground'>
                            <Col flex = "5" ></Col>
                            <Col flex = "4">             
                                <div className = 'somos-text'>
                                    <div className='titulosID'>
                                        EXPERIENCIA
                                    </div>
                                    <div class='textoID'>
                                    Más de 35 años atendiendo a las grandes empresas
                                    del sector industrial nacional e internacional colocan a
                                    Esteban Sánchez y Asociados como una de las
                                    empresas de Ingeniería Electromecánica más exitosas
                                    de México.  
                                    </div>
                                </div>
                            </Col>  
                        </Row>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='somos-box'>
                        <Row className='misBackground'>
                            <Col flex = "4">
                                <div className = 'somos-text'> 
                                    <div className='titulosID'>
                                        MISIÓN
                                    </div>
                                    <div class='textoID'>
                                    Enfrentar los retos que marca la Industria,
                                    respondiendo a las necesidades y exigencias de
                                    nuestros clientes con profesionalismo y espíritu de
                                    excelencia.  
                                    </div>
                                </div>
                            </Col>
                            <Col flex = "5"> </Col>
                        </Row>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='somos-box'>
                        <Row className='visBackground'>
                            <Col flex = "5"> </Col>
                            <Col flex = "4">
                                <div className = 'somos-text'>
                                    <div className='titulosID'>
                                        VISIÓN
                                    </div>
                                    <div class='textoID'>
                                    Aportar soluciones y servicios de alta calidad,
                                    incorporando avanzada tecnología, talento y
                                    creatividad en el desarrollo de todo proyecto, con un
                                    equipo profesional y productivo, que exceda las
                                    expectativas de nuestros clientes para trascender
                                    como una empresa confiable.  
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </FadeInSection>
            </div> 
        </>
    )
}