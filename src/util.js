import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const casesTypeColors = {
  cases: {
    rgba: "rgba(204,16,52, 0.7)",
    hex: "#CC1034",
    multiplier: 300,
  },
  recovered: {
    rgba: "rgba(34,139,34, 0.7)",
    hex: "#228B22",
    multiplier: 240,
  },
  deaths: {
    rgba: "rgba(0,0,0, 0.7)",
    hex: "#000000",
    multiplier: 600,
  },
};

export const showCasesOnMap = (data, casesType) =>
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={"#CC1034"}
      fillColor={"rgba(204,16,52, 0.7)"}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
export const showRecoveredOnMap = (data, casesType) =>
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={"#228B22"}
      fillColor={"rgba(34,139,34, 0.7)"}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
export const showDeathsOnMap = (data, casesType) =>
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={"#000000"}
      fillColor={"rgba(0,0,0, 0.7)"}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
export const prettyPrintStat = (stat) =>
  stat && stat >= 1000
    ? `+${numeral(stat).format("0.0a")}`
    : stat && stat <= 1000
    ? `${numeral(stat).format("0")}`
    : "0";
