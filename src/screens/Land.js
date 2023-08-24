import React from 'react';
import { Carousel } from 'antd';
import HeaderEsasa from './components/HeaderEsasa/index.js';
import LandingCarousel from './components/LandingCarousel/LandingCarousel.js';
import  './LandingScreen.less'

const contentStyle ={
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
}

export default function LandingPage(){
    
    return(
        <>
            <HeaderEsasa />
                <LandingCarousel autoplay autoplaySpeed={4000}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                </LandingCarousel>
        </>
    )
}
