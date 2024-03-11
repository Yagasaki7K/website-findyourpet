import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

export default function MapComponent() {
    const position = [-22.85942241928221, -47.0496427552949];

    return (
        <MapDetails>
            <MapContainer
                center={position}
                zoom={17}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </MapDetails>
    );
}

const MapDetails = styled.div`
    width: 100%;
    height: 100vh;
`