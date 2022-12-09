import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offer/offers-list';
import NoOffers from '../../components/offer/no-offers';

type OffersSectionProps = {
  activeCity: City;
  offers: Offer[] | null;
};

function OffersSection({ activeCity, offers }: OffersSectionProps): JSX.Element {
  const areOffersAvailable = offers && offers.length > 0;
  return areOffersAvailable
    ?
    <OffersList
      offers={offers}
      city={activeCity}
    />
    : <NoOffers city={activeCity.name} />;
}

export default OffersSection;
