import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  //54.414927976073194, -5.645330268753006
  const center = {
    lat: 54.414927976073194,
    lng: -5.645330268753006,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCCVzzW0uVIFLXaen-0RaHEgwWzUPG-6vA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
