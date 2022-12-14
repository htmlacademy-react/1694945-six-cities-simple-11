import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IconUrl, IconDimension } from '../../const';
import useMap from '../../hooks/use-map';
import { Location } from '../../types/location';
import { Offer } from '../../types/offer';

type MapProps = {
  className: string;
  location: Location;
  offers: Offer[];
  selectedOffer: number;
};
const createMarkerIcon = (
  url: string,
  width: number,
  height: number,
  anchorWidth: number
) =>
  leaflet.icon({
    iconUrl: url,
    iconSize: [width, height],
    iconAnchor: [anchorWidth, height],
  });

const defaultMarkerIcon = createMarkerIcon(
  IconUrl.Default,
  IconDimension.Width,
  IconDimension.Height,
  IconDimension.AnchorWidth
);
const activeMarkerIcon = createMarkerIcon(
  IconUrl.Active,
  IconDimension.Width,
  IconDimension.Height,
  IconDimension.AnchorWidth
);
function Map({ className, location, offers, selectedOffer }: MapProps): JSX.Element {
  const { latitude, longitude, zoom } = location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      map.setView(
        {
          lat: latitude,
          lng: longitude
        },
        zoom
      );
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (selectedOffer !== null && offer.id === selectedOffer)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(markerGroup);
      });
      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, latitude, longitude, zoom, offers, selectedOffer]);

  return (
    <section
      ref={mapRef}
      className={className}
      data-testid="map"
    >
    </section>
  );
}
export default Map;
