import React from 'react';
import {BrowserRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import './App.css';
import LandingPage from './screens/pages/Land';
import IdentityPage from './screens/pages/Identidad';
import ServicesPage from './screens/pages/Servicios';
import ContactPage from './screens/pages/Contacto';
import Oportunidades from './screens/pages/Oportunidades';


function App() {
  return (
    <div className='AppStyle'>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

const Routing = () => {
  return(
    <>
      <Routes>
        <Route path="ESASA/" element={<LandingPage />} />
        <Route path="ESASA/quien-somos" element={<IdentityPage />} />
        <Route path="ESASA/servicios/:id" element={<ServicesPage />} />
        <Route path="ESASA/contacto" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App;
