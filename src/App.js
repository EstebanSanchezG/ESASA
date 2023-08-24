import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.less';
import LandingPage from './screens/Land';

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
      </Routes>
    </>
  )
}

export default App;
