import { height } from "@mui/system";
import React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

export const GoogleMaps: React.FC<{ height: number | "100%"; width: number | "100%" }> = () => {
  return (
    <>
      <MyMapComponent
        isMarkerShown={false}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDRL48bqU8nECDI3D0twvAqtYHd8NAoOYw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, maxWidth: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

const MyMapComponent = withScriptjs(
  withGoogleMap((props: any) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  ))
);
