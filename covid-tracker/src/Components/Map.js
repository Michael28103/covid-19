import React from 'react'
// import styled from 'styled-components'
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { showDataOnMap } from '../util'
import "./Map.css"
import 'leaflet/dist/leaflet.css';

function Map({ countries, casesType, center, zoom }) {
    function ChangeView({ center, zoom }) {
      const map = useMap();
      map.setView(center, zoom);
      return null;
    }
  
    return (
        <MapContainer
            casesType={casesType}
            className="map"
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
        >
            <ChangeView center={center} zoom={zoom} />
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {showDataOnMap(countries, casesType)}
        </MapContainer>
    );
  }
export default Map
