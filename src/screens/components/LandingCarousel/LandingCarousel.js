import React from 'react';
import { Carousel, Row, Col } from 'antd';
import './LandingCarouselStyle.css';

const settingsCarousel={
    autoplay: true,
    dots: true
}
export default function LandingCarousel(){
    return(
        <>
            <div className='carousel-turn-table-landing'>
                <Carousel {...settingsCarousel} >
                    <div className='land-carousel-space-1'>
                        <div className='image-content-carousel-1'>
                        <p className='image-header-carousel-1'>Años de Calidad</p>
                        <p className='image-text-carousel-1'>Contamos con más de 30 años de experiencia</p>
                        </div>
                    </div>
                    <div className='land-carousel-space-2'>
                        <div className='image-content-carousel-2'>
                        <p className='image-header-carousel-2'>Energía Alterna</p>
                        <p className='image-text-carousel-2'>Manejamos servicio de instalación de enregías renovables</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}