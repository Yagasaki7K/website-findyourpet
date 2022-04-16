import ReactMapboxGL, { MapContext } from 'react-mapbox-gl';

const Map = ReactMapboxGL({ /* factory options */ });

const Maps = () => (
  <Map style="your-style-here">
    <MapContext.Consumer>
      {(map) => {
        { Map }
      }}
    </MapContext.Consumer>
  </Map>
);

export default Maps