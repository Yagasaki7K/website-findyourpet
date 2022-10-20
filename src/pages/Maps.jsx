import React from 'react';
import MapsDetails from '../components/MapsDetails'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

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
                        {/* <div style={{width:'100%', height: '70vh', maxHeight:'500px', position:'relative'}}>
                <Leaflet id="evento-mapa" defaults="map.defaults" tiles="map.current_tile" markers="map.markers" bounds="map.bounds" lf-center="{}"></Leaflet>
                    <div style={{ position:'absolute', right:'10px', bottom:'25px', zIndex: '1001'}}layout-align="center stretch">
                        <div style={{border:'1px solid #666', background:'#fff', borderRadius: '5px',textAlign:'center', padding: '7px', margin: '3px 0'}} id="mapa-ctrl-view-mapa" ng-click="map.change_tiles('map')">M</div>
                        <div style={{border:'1px solid #666', background:'#fff', borderRadius: '5px',textAlign: 'center', padding:'7px', margin:'3px 0'}} id="mapa-ctrl-view-satelite" ng-click="map.change_tiles('satellite')">S</div>
                    </div>
                </div> */}

                        <MapContainer center={[-16.350, -56.666]} zoom={4} scrollWheelZoom={false} className="mapa-projeto">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-16.350, -56.666]}>
                                <Popup>
                                    <h1>{ProjetoNome}</h1>
                                    <p><b>Tipo de Projeto</b>: {ProjetoTipo}</p>
                                    <p><b>Bioma</b>: {ProjetoBioma}</p>
                                    <p><b>Local</b>: {ProjetoLocal}</p>
                                    <p><b>Padrão</b>: {ProjetoPadrao}</p>
                                    <p><b>Kg de CO2eq</b>: {ProjetoKG}</p>
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