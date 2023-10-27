import React from 'react';
import {HashRouter, BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import './App.css';
import LandingPage from './screens/pages/Land';
import IdentityPage from './screens/pages/Identidad';
import ServicesPage from './screens/pages/Servicios';
import ContactPage from './screens/pages/Contacto';


function App() {

  return (
    <div className='AppStyle'>
      <BrowserRouter basename={'/'}>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

const Routing = () => {
  return(
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/quien-somos" element={<IdentityPage />} />
        <Route path="/servicios/:id" element={<ServicesPage />} />
        <Route exact path="/contacto" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App;
