import React from 'react';
import { Carousel } from 'antd';
import IndustrialPhoto from '../assets/IndustrialEditSample.png';
import ElectricalPhoto from "../assets/ElectricalEditSample.png";


const contentStyle1 ={
    height: "380px",
    width: "100%",
    lineHeight: "160px",
    alignItems: "center",
}

const contentStyle ={
    height: "380px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
}
const settingsCarousel={
    autoplay: true,
    dots: true
}
export default function LandingCarousel(){
    return(
        <>
            <Carousel {...settingsCarousel}>
                <div>
                    <img src={IndustrialPhoto} style={contentStyle1} alt='Industrial'/>
                </div>
                <div>
                    <img src={ElectricalPhoto} style={contentStyle1} alt='Industrial'/>
                </div>
            </Carousel>
        </>
    )
}