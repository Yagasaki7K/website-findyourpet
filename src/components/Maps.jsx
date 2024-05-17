// components/Map.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Maps = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-47.0616, -22.9068],
            zoom: 12
        });

        new mapboxgl.Marker({ color: 'red' })
            .setLngLat([-22.856497135943872, -47.05535307439016])
            .setPopup(new mapboxgl.Popup().setHTML("<h3>Animal 1</h3><p>Descrição do animal 1</p>"))
            .addTo(map);

        new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([-22.851217688320244, -47.06275597127332])
            .setPopup(new mapboxgl.Popup().setHTML("<h3>Animal 2</h3><p>Descrição do animal 2</p>"))
            .addTo(map);

        return () => map.remove();
    }, []);

    return (
        <MapDetails>
            <div ref={mapContainerRef} className="map" />
        </MapDetails>
    );
};

export default Maps;

const MapDetails = styled.div`
    .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 2px;
        background: var(--green);
        border-radius: 50%;
    }

    .map {
        position: absolute; 
        top: 0; 
        bottom: 0; 
        width: 100%;
    }
`