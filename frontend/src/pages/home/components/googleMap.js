import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../css/pins.css";

const GoogleMapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "90%",
  };
  //54.414927976073194, -5.645330268753006
  const center = {
    lat: 54.41457,
    lng: -5.645,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCCVzzW0uVIFLXaen-0RaHEgwWzUPG-6vA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
