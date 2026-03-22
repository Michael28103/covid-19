// import styled from 'styled-components'
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { showDataOnMap } from '../util.jsx'
import "./Map.css"
import 'leaflet/dist/leaflet.css';

export default function Map({ countries, casesType, center, zoom }) {
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
            style={{ border: '4px solid #ddd', borderRadius: '8px' }}
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
