import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  marginTop: '35px',
  width: 'auto',
  height: '400px'
};

const center = {
  lat: 29.085191,
  lng: -110.982730
};

function OfficeLocationHMO() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLzwwDgWVd9Fd8gPIelicNLFu1HwxLh28"
  })

  if (!isLoaded) return <div>Cargando Mapa...</div>;
  return (   
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}>
            <MarkerF position={{lat: 29.085191, lng: -110.982730}} />
      </GoogleMap>
  );
}

export default React.memo(OfficeLocationHMO)