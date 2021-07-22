import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer } from "react-leaflet"
import { showDataOnMap } from '../util'

function Map({countries, casesType, center, zoom}) {
    return (
        <COVIDMap>
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </COVIDMap>
    )
}

const COVIDMap = styled.div `

`

export default Map
