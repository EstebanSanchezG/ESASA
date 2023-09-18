import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import services from '../components/DescriptionPage/descripciones-de-servicios.json';
import "../styles/ServiceStyle.css";

function ServicesPage() {
  const [title, setTitle] = useState("");  
  const [desc, setDesc] = useState("");
  const [lista, setList] = useState("");
  const [imagen, setImage] = useState("");
  const [id, setId] = useState(useParams().id);    
  useEffect(() => {    
     for(var i = 0; i < services.length; i++) {      
        var obj = services[i];      
        if(obj.id === id){        
           setTitle(obj.title);        
           setDesc(obj.desc);
           setImage(obj.imagen);
           setList(obj.lista); 
           setId(obj.id);     
        }     
     }  
  }); 


  return (  
    <>  
      <HeaderEsasa />
      <div className="service-content">
         <img src={`${process.env.PUBLIC_URL}/images/${imagen}`} alt='service-pic'/>
          {console.log(`${process.env.PUBLIC_URL}/images/${imagen}`)}
          <div className="service-title">{title}</div>    
          <div className="service-description">{desc}</div>        
          <div className='servicio-clientes'>
            <li>{lista.listado_1}</li>
            <li>{lista.listado_2}</li>
          </div>
      </div> 
     </> 
  )
}


export default ServicesPage