import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import services from '../components/DescriptionPage/descripciones-de-servicios.json';
import "../styles/ServiceStyle.css";

function ServicesPage() {
 
  
  const [title, setTitle] = useState("");  
  const [desc, setDesc] = useState("");
  const [clientes, setList] = useState([]);
  const [clientes_desc, setListDesc] = useState([]);
  const [imagenes, setImage] = useState([]);
  const [imagenes_descrip, setImgDesc ] = useState([]);
  const [id, setId] = useState(useParams().id);    
  useEffect(() => {    
     for(var i = 0; i < services.length; i++) {      
        var obj = services[i];      
        if(obj.id === id){        
           setTitle(obj.title);        
           setDesc(obj.desc);
           setImage(obj.imagenes);
           setImgDesc(obj.imagenes_descrip);
           setList(obj.clientes);
           setListDesc(obj.clientes_desc); 
           setId(obj.id);     
        }     
     }  
  }); 


  return (  
    <>  
      <HeaderEsasa />
      <body>
      <div className='page--custom--body'>
      <div className="service-content">
         <div className='service-header-container'>          
            <div className="service-title">{title}</div>    
            <div className="service-description">{desc}</div>   
         </div>
         <div className='client-list-container'>
            {clientes && clientes.map(function(clientes, i){
               return(
                  <pre>
                  <div className='client-individual-container'>
                     <div className='individual-client-title' key={i}>{clientes}</div>
                     <div className='individual-client-description'>{clientes_desc[i]}</div>
                     {/* <img src={`${process.env.PUBLIC_URL}/images/${imagenes[i]}`} /> */}
                  </div>
                  </pre>
               )
            })}
         </div>
         <div className='photo-group-container'>
            {imagenes && imagenes.map(function(imagenes, i){
               return(
                  <div className='photo-individual-container'>
                     <img className='individual-photo' key={i} src={`${process.env.PUBLIC_URL}/images/${imagenes}`} alt={imagenes_descrip[i]}/>
                     <div className='individual-photo-description'>{imagenes_descrip[i]}</div>
                  </div>
               )
            })}
         </div>
      </div>
      </div>
      </body>
     </> 
  )
}


export default ServicesPage