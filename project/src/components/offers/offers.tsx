import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import NoOffers from '../no-offers/no-offers';

type OffersProps = {
  activeCity: City;
  offers: Offer[] | null;
};

function Offers({ activeCity, offers }: OffersProps): JSX.Element {
  const areOffersAvailable = offers && offers.length > 0;
  return areOffersAvailable
    ?
    <OffersList
      offers={offers}
      city={activeCity}
    />
    : <NoOffers city={activeCity.name} />;
}

export default Offers;
