import React from 'react';
import MapsDetails from '../components/MapsDetails'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MapStyle from '../components/MapStyle'

import 'leaflet/dist/leaflet.css'

const Maps = () => {
    return (
        <>
            <PetsDetails>
                <Navigation />
                <a href="/signup" className="advice">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo adotar um? Ou encontrou um perdido? Cadastre ele!
                </a>
            </PetsDetails>

            <MapsDetails>
                <MapStyle>
                    <div layout-align="center center" style={{ background: 'white', position: 'relative' }}>
                        <MapContainer center={[-16.350, -56.666]} zoom={4} scrollWheelZoom={false} className="mapa-projeto">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-22.859352775021673, -47.04971628178976]}>
                                <Popup>
                                    <h4>Animal Perdido</h4>
                                    <p>Falar com: Fulano de Tal</p>
                                    <p>Telefone: <a href="https://wa.me/1999999999" target="_blank">19 99999-9999</a></p>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </MapStyle>
            </MapsDetails>

            <Footer />
            <AddPetButton />
        </>
    );
}

export default Maps