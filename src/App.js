import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import LandingPage from './screens/pages/Land';
import IdentityPage from './screens/pages/Identidad';

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/quien_somos" element={<IdentityPage />} />
      </Routes>
    </>
  )
}

export default App;
