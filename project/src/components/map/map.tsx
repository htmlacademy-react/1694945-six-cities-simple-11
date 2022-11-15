import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from '../../const';
import useMap from '../../hooks/use-map/use-map';
import { Location } from '../../types/location';
import { Offer } from '../../types/offer';

type MapProps = {
  location: Location;
  offers: Offer[];
  selectedOffer: number;
};

const createMarkerIcon = (
  url: string,
  size: Array<number>,
  anchor: Array<number>
) =>
  leaflet.icon({
    iconUrl: url,
    iconSize: [size[0], size[1]],
    iconAnchor: [anchor[0], anchor[1]],
  });

const defaultMarkerIcon = createMarkerIcon(
  Icon.DefaultURL,
  [Number(Icon.Width), Number(Icon.Height)],
  [Number(Icon.AnchorWidth), Number(Icon.Height)],
);
const activeMarkerIcon = createMarkerIcon(
  Icon.ActiveURL,
  [Number(Icon.Width), Number(Icon.Height)],
  [Number(Icon.AnchorWidth), Number(Icon.Height)],
);
function Map({ location, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.lat,
              lng: offer.location.lng
            },
            {
              icon: (selectedOffer !== null && offer.id === selectedOffer)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
      style={{ height: '100%' }}
    >
    </section>
  );
}
export default Map;
