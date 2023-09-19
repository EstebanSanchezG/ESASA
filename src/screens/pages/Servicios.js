import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import serviceData from '../components/DescriptionPage/descripciones-de-ingenieria.json';
import "../styles/ServiceStyle.css";

function ServicesPage() {
  const [title, setTitle] = useState("");  
  const [desc, setDesc] = useState("");
  const [servicios, setServ] = useState([]);
  const [imagenes, setImage] = useState([]);
  const [id, setId] = useState(useParams().id);    
  useEffect(() => {    
     for(var i = 0; i < serviceData.length; i++) {      
        var obj = serviceData[i];      
        if(obj.id === id){        
           setTitle(obj.title);        
           setDesc(obj.desc);
           setImage(obj.imagenes);
           setServ(obj.servicios); 
           setId(obj.id);     
        }     
     }  
  }); 


  return (  
    <>  
      <HeaderEsasa />
      <div className="service-content">
          <div className='service-header-container'>
            <div className="service-title">{title}</div>    
            <div className="service-description">{desc}</div>
          </div>        
          <div className='service-offered-container'>
          {servicios && servicios.map(function(servicio, i){
            return (
            <div className='service-individual-container'>
              <div className='service-individual-title' key={i}>{servicio}</div>
              <img src={`${process.env.PUBLIC_URL}/images/${imagenes[i]}`} />
            </div>)
          })}
          </div>
      </div> 
     </> 
  )
}


export default ServicesPage