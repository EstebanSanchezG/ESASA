import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import services from '../components/DescriptionPage/descripciones-de-servicios.json';

function ServicesPage() {
  const [title, setTitle] = useState("");  
  const [desc, setDesc] = useState("");
  const [lista, setList] = useState({}) ;
  const [id, setId] = useState(useParams().id);    
  useEffect(() => {    
     for(var i = 0; i < services.length; i++) {      
        var obj = services[i];      
        if(obj.id == id){        
           setTitle(obj.title);        
           setDesc(obj.desc);
           setList(obj.lista);      
        }     
     }  
  }); 
    
  return (  
    <>  
      <HeaderEsasa />
      <div className="content">    
          <div className="page-title" style={{fontSize:"48px"}}>{title}</div>    
          <div className="project-text">{desc}</div>        
          {/* {lista.map((value, index) => {      
            return <ul key={index} className="project-lista" src={value}/>
        })}     */}
      </div> 
     </> 
  )
}


export default ServicesPage