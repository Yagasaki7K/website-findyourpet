import React, { useRef, useEffect, useState } from 'react';
import MapsDetails from '../components/MapsDetails'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'

import Logo from '../../assets/logo-white.png'

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFnYXNha2kiLCJhIjoiY2tnNno3ejN5MDJhZzJ3bXlmbzV2ZWhpaSJ9.nv2v5aSOhEwDtcbAKii8CA';

export default function Maps() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-47.06083);
    const [lat, setLat] = useState(-22.90556);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <PetsDetails>
                <nav>
                    <a href="/signup">Perdi meu bichinho</a>
                    <a href="/signup">Encontrei um bichinho</a>
                    <a href="/pets"><img src={Logo} alt="Logo"/></a>
                    <a href="/signup">Quero adotar um animalzinho</a>
                    <a href="/maps">Localizar um animalzinho</a>
                </nav>

                <a href="/signup" className="advice">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo adotar um? Ou encontrou um perdido? Cadastre ele! 
                </a>
            </PetsDetails>
            
            <MapsDetails>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div className="map-center">
                    <div ref={mapContainer} className="map-container" />
                </div>
            </MapsDetails>

            <Footer/>
            <AddPetButton/>
        </>
    );
}