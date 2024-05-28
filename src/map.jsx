import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 31.4504, // Latitude for Faisalabad
      lng: 73.1350  // Longitude for Faisalabad
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY_HERE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={31.4504} // Latitude for Faisalabad
          lng={73.1350} // Longitude for Faisalabad
          text="Faisalabad"
        />
      </GoogleMapReact>
    </div>
  );
}
