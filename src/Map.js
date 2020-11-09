import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { showCasesOnMap, showRecoveredOnMap, showDeathsOnMap } from "./util";

const Map = ({ countries, casesType, center, zoom }) => {
  let cases = null;
  let recovered = null;
  let deaths = null;

  if (casesType === "cases") {
    cases = showCasesOnMap(countries, casesType);
  }
  if (casesType === "recovered") {
    recovered = showRecoveredOnMap(countries, casesType);
  }
  if (casesType === "deaths") {
    deaths = showDeathsOnMap(countries, casesType);
  }
  

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cases}
        {recovered}
        {deaths}
      </MapContainer>
    </div>
  );
};

export default Map;
