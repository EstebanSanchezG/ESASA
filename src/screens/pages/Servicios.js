import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import HeaderEsasa from '../components/HeaderEsasa/index.js';
import data from '../components/DescriptionPage/descripciones-de-servicios.json';

function ServicesPage(props) {
  const { id } = props.match.params // Location index
  const { title, desc} = data[id]

  return (
    <div>
      <HeaderEsasa />
      <div>
        {/* <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} /> */}
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
      </div>

    </div>
  )
}

export default ServicesPage