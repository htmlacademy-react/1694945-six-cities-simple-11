import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks/use-app-selector';
import OffersList from '../../components/offer/offers-list';
import NoOffers from '../../components/offer/no-offers';

type OffersSectionProps = {
  offers: Offer[];
};

function OffersSection({ offers }: OffersSectionProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  return offers.length > 0
    ? <OffersList offers={offers} city={activeCity} />
    : <NoOffers city={activeCity.name} />;
}

export default OffersSection;
