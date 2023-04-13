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
                    <div style={{ position: 'relative', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
                        <MapContainer center={[-16.350, -56.666]} zoom={4} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-22.859352775021673, -47.04971628178976]}>
                                <Popup>
                                    <h4>Animal em Adoção</h4>
                                    <p>Rondele - Macho, médio 🐶19kg - Jovem adulto - @adotarondelli</p>
                                    <p>Telefone: <a href="https://wa.me/+5519982698309" target="_blank" rel='noreferrer'>+55 19 9 82698309</a></p>
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
