import {useRef, useState, useEffect, MutableRefObject} from 'react';
import leaflet, {Map} from 'leaflet';
import {Location} from '../types/location';
import {LAYER_OPTION} from '../const';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const { latitude, longitude, zoom } = location;
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom
      });

      leaflet
        .tileLayer(
          LAYER_OPTION.url,
          {attribution: LAYER_OPTION.attribution}
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}
