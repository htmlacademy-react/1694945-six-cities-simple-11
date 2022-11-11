import { Offer } from '../../types/offer';
import OfferCard from './offer-card';
type OffersOtherComponentProps = {
  offers: Offer[];
};
function OffersOther({ offers }: OffersOtherComponentProps): JSX.Element {
  const offerCardsList = offers.map(
    (offer) => <OfferCard key={offer.id} offer={offer} />
  );
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {offerCardsList}
      </div>
    </section>
  );
}
export default OffersOther;
