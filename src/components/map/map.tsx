import React, {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/offer-types';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
};

function Map(props: MapProps) {
  const {city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  // eslint-disable-next-line no-console
  console.log(map);

  return (
    <div
      style={{height: '900px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
